import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/price.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Get the price of Nas HA offers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of Nas HA offers",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Dedicated.Nasha.ModelEnum",
              "description": "Model name",
              "fullType": "price.Dedicated.Nasha.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicated/nasha/model/{modelName}"
    },
    {
      "description": "Get price of anti-DDos Pro option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of anti-DDos Pro option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Dedicated.Server.AntiDDoSProEnum",
              "description": "Commercial range",
              "fullType": "price.Dedicated.Server.AntiDDoSProEnum",
              "name": "commercialRange",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicated/server/antiDDoSPro/{commercialRange}"
    },
    {
      "description": "Get price of backup storage offer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of backup storage offer",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Dedicated.Server.BackupStorageEnum",
              "description": "Capacity",
              "fullType": "price.Dedicated.Server.BackupStorageEnum",
              "name": "capacity",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicated/server/backupStorage/{capacity}"
    },
    {
      "description": "Get price of available firewall models",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of available firewall models",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Dedicated.Server.FirewallEnum",
              "description": "Firewall model",
              "fullType": "price.Dedicated.Server.FirewallEnum",
              "name": "firewallModel",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicated/server/firewall/{firewallModel}"
    },
    {
      "description": "Get price of IPs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of IPs",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Dedicated.Server.IpEnum",
              "description": "Routed to",
              "fullType": "price.Dedicated.Server.IpEnum",
              "name": "routedTo",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicated/server/ip/{routedTo}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Bhs1a.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2013v1.Bhs1a.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Bhs1a.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2013v1.Bhs1a.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Bhs1a.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2013v1.Bhs1a.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Bhs1a.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2013v1.Bhs1a.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Rbx2a.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2013v1.Rbx2a.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Rbx2a.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2013v1.Rbx2a.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Rbx2a.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2013v1.Rbx2a.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Rbx2a.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2013v1.Rbx2a.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Sbg1a.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2013v1.Sbg1a.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Sbg1a.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2013v1.Sbg1a.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Sbg1a.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2013v1.Sbg1a.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2013v1.Sbg1a.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2013v1.Sbg1a.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer.HourlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer.HourlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly filer ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly filer ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "description": "Filer profile",
              "fullType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "name": "filerProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/{filerProfile}"
    },
    {
      "description": "Get price of dedicated Cloud hourly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud hourly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host.HourlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host.HourlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/{hostProfile}"
    },
    {
      "description": "Get price of dedicated Cloud monthly host ressources",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of dedicated Cloud monthly host ressources",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host.MonthlyEnum",
              "description": "Host profile",
              "fullType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host.MonthlyEnum",
              "name": "hostProfile",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/{hostProfile}"
    },
    {
      "description": "Get price of zone options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of zone options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Domain.Zone.OptionEnum",
              "description": "Option name",
              "fullType": "price.Domain.Zone.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/domain/zone/option/{optionName}"
    },
    {
      "description": "Get the price for a private database",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price for a private database",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Hosting.PrivateDatabaseEnum",
              "description": "Private database name",
              "fullType": "price.Hosting.PrivateDatabaseEnum",
              "name": "privateDatabaseName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/hosting/privateDatabase/{privateDatabaseName}"
    },
    {
      "description": "Get the price for cdn option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price for cdn option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Hosting.Web.CdnEnum",
              "description": "Cdn name",
              "fullType": "price.Hosting.Web.CdnEnum",
              "name": "cdnName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/hosting/web/cdn/{cdnName}"
    },
    {
      "description": "Get the price for extra sql perso option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price for extra sql perso option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Hosting.Web.ExtraSqlPersoEnum",
              "description": "Extra sql perso name",
              "fullType": "price.Hosting.Web.ExtraSqlPersoEnum",
              "name": "extraSqlPersoName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/hosting/web/extraSqlPerso/{extraSqlPersoName}"
    },
    {
      "description": "Get the price for hosted ssl option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price for hosted ssl option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Hosting.Web.SslEnum",
              "description": "Ssl name",
              "fullType": "price.Hosting.Web.SslEnum",
              "name": "sslName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/hosting/web/ssl/{sslName}"
    },
    {
      "description": "Get the price of a HPC Spot Account for 1 month",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of a HPC Spot Account for 1 month",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Hpcspot.Account.SubscriptionEnum",
              "description": "Subscription name",
              "fullType": "price.Hpcspot.Account.SubscriptionEnum",
              "name": "subscriptionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/hpcspot/account/subscription/{subscriptionName}"
    },
    {
      "description": "Get the price of a JOB consumption for 1 hour",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of a JOB consumption for 1 hour",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Hpcspot.Consumption.JobEnum",
              "description": "Reference",
              "fullType": "price.Hpcspot.Consumption.JobEnum",
              "name": "reference",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/hpcspot/consumption/job/{reference}"
    },
    {
      "description": "Get the price of a RESERVATION consumption for 1 hour",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of a RESERVATION consumption for 1 hour",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Hpcspot.Consumption.ReservationEnum",
              "description": "Reference",
              "fullType": "price.Hpcspot.Consumption.ReservationEnum",
              "name": "reference",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/hpcspot/consumption/reservation/{reference}"
    },
    {
      "description": "Get the price of a SESSION consumption for 1 hour",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of a SESSION consumption for 1 hour",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Hpcspot.Consumption.SessionEnum",
              "description": "Reference",
              "fullType": "price.Hpcspot.Consumption.SessionEnum",
              "name": "reference",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/hpcspot/consumption/session/{reference}"
    },
    {
      "description": "Get the monthly price for an office license",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the monthly price for an office license",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.License.OfficeEnum",
              "description": "Office name",
              "fullType": "price.License.OfficeEnum",
              "name": "officeName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/license/office/{officeName}"
    },
    {
      "description": "Get the price of overTheBox offers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of overTheBox offers",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.OverTheBox.OfferEnum",
              "description": "Offer name",
              "fullType": "price.OverTheBox.OfferEnum",
              "name": "offerName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/overTheBox/offer/{offerName}"
    },
    {
      "description": "Get the monthly price for an Office 365 license",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the monthly price for an Office 365 license",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Saas.Csp2.LicenseEnum",
              "description": "License name",
              "fullType": "price.Saas.Csp2.LicenseEnum",
              "name": "licenseName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/saas/csp2/license/{licenseName}"
    },
    {
      "description": "Get price of VPS Cloud 2013",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud 2013",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2013v1.Classic.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2013v1.Classic.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2013v1/classic/model/{modelName}"
    },
    {
      "description": "Get price of VPS Classic 2013",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Classic 2013",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2013v1.Cloud.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2013v1.Cloud.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2013v1/cloud/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud Options 2013",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud Options 2013",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2013v1.Cloud.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2013v1.Cloud.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2013v1/cloud/option/{optionName}"
    },
    {
      "description": "Get price of VPS Low Latency 2013",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Low Latency 2013",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2013v1.Lowlat.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2013v1.Lowlat.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2013v1/lowlat/model/{modelName}"
    },
    {
      "description": "Get price of VPS Classic 2014",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Classic 2014",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2014v1.Classic.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2014v1.Classic.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2014v1/classic/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud 2014",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud 2014",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2014v1.Cloud.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2014v1.Cloud.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2014v1/cloud/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud Options 2014",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud Options 2014",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2014v1.Cloud.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2014v1.Cloud.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2014v1/cloud/option/{optionName}"
    },
    {
      "description": "Get price of VPS Cloud 2015",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud 2015",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2015v1.Cloud.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2015v1.Cloud.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2015v1/cloud/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2015v1.Cloud.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2015v1.Cloud.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2015v1/cloud/option/{optionName}"
    },
    {
      "description": "Get price of VPS Cloud RAM 2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud RAM 2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2015v1.Cloudram.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2015v1.Cloudram.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2015v1/cloudram/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud RAM Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud RAM Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2015v1.Cloudram.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2015v1.Cloudram.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2015v1/cloudram/option/{optionName}"
    },
    {
      "description": "Get price of VPS SSD 2015",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD 2015",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2015v1.Ssd.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2015v1.Ssd.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2015v1/ssd/model/{modelName}"
    },
    {
      "description": "Get price of VPS SSD Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2015v1.Ssd.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2015v1.Ssd.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2015v1/ssd/option/{optionName}"
    },
    {
      "description": "Get price of VPS SSD Discovery 2017",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD Discovery 2017",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v1.Ssd.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2017v1.Ssd.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v1/ssd/model/{modelName}"
    },
    {
      "description": "Get price of VPS SSD Discovery Options 2017",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD Discovery Options 2017",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v1.Ssd.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2017v1.Ssd.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v1/ssd/option/{optionName}"
    },
    {
      "description": "Get price of VPS Cloud 2017",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud 2017",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v2.Cloud.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2017v2.Cloud.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v2/cloud/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v2.Cloud.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2017v2.Cloud.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v2/cloud/option/{optionName}"
    },
    {
      "description": "Get price of VPS Cloud RAM 2017",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud RAM 2017",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v2.Cloudram.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2017v2.Cloudram.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v2/cloudram/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud RAM Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud RAM Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v2.Cloudram.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2017v2.Cloudram.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v2/cloudram/option/{optionName}"
    },
    {
      "description": "Get price of VPS SSD 2017",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD 2017",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v2.Ssd.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2017v2.Ssd.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v2/ssd/model/{modelName}"
    },
    {
      "description": "Get price of VPS SSD Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v2.Ssd.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2017v2.Ssd.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v2/ssd/option/{optionName}"
    },
    {
      "description": "Get price of VPS Cloud 2017",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud 2017",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v3.Cloud.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2017v3.Cloud.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v3/cloud/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v3.Cloud.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2017v3.Cloud.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v3/cloud/option/{optionName}"
    },
    {
      "description": "Get price of VPS Cloud RAM 2017",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud RAM 2017",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v3.Cloudram.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2017v3.Cloudram.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v3/cloudram/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud RAM Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud RAM Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v3.Cloudram.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2017v3.Cloudram.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v3/cloudram/option/{optionName}"
    },
    {
      "description": "Get price of VPS SSD 2017",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD 2017",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v3.Ssd.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2017v3.Ssd.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v3/ssd/model/{modelName}"
    },
    {
      "description": "Get price of VPS SSD Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2017v3.Ssd.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2017v3.Ssd.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2017v3/ssd/option/{optionName}"
    },
    {
      "description": "Get price of VPS Cloud 2017",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud 2017",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2018v1.Cloud.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2018v1.Cloud.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2018v1/cloud/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2018v1.Cloud.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2018v1.Cloud.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2018v1/cloud/option/{optionName}"
    },
    {
      "description": "Get price of VPS Cloud RAM 2017",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud RAM 2017",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2018v1.Cloudram.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2018v1.Cloudram.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2018v1/cloudram/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud RAM Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS Cloud RAM Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2018v1.Cloudram.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2018v1.Cloudram.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2018v1/cloudram/option/{optionName}"
    },
    {
      "description": "Get price of VPS SSD 2018",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD 2018",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2018v1.Ssd.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2018v1.Ssd.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2018v1/ssd/model/{modelName}"
    },
    {
      "description": "Get price of VPS SSD Options 2015/2016",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD Options 2015/2016",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2018v1.Ssd.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2018v1.Ssd.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2018v1/ssd/option/{optionName}"
    },
    {
      "description": "Get price of VPS SSD APAC",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD APAC",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2018v2.Ssd.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.2018v2.Ssd.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2018v2/ssd/model/{modelName}"
    },
    {
      "description": "Get price of VPS SSD APAC Options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get price of VPS SSD APAC Options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.2018v2.Ssd.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.2018v2.Ssd.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/2018v2/ssd/option/{optionName}"
    },
    {
      "description": "Get price of VPS Classic",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2014-04-18T10:00:00+01:00",
            "deprecatedDate": "2014-03-18T10:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/price/vps/2013v1/classic/model/{modelName}",
            "value": "DEPRECATED"
          },
          "description": "Get price of VPS Classic",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.Classic.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.Classic.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/classic/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2014-04-18T10:00:00+01:00",
            "deprecatedDate": "2014-03-18T10:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/price/vps/2013v1/cloud/model/{modelName}",
            "value": "DEPRECATED"
          },
          "description": "Get price of VPS Cloud",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.Cloud.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.Cloud.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/cloud/model/{modelName}"
    },
    {
      "description": "Get price of VPS Cloud Options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2014-04-18T10:00:00+01:00",
            "deprecatedDate": "2014-03-18T10:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/price/vps/2013v1/cloud/option/{optionName}",
            "value": "DEPRECATED"
          },
          "description": "Get price of VPS Cloud Options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.Cloud.OptionEnum",
              "description": "Option name",
              "fullType": "price.Vps.Cloud.OptionEnum",
              "name": "optionName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/cloud/option/{optionName}"
    },
    {
      "description": "Get price of VPS Low Latency",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2014-04-18T10:00:00+01:00",
            "deprecatedDate": "2014-03-18T10:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/price/vps/2013v1/lowlat/model/{modelName}",
            "value": "DEPRECATED"
          },
          "description": "Get price of VPS Low Latency",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Vps.Lowlat.ModelEnum",
              "description": "Model name",
              "fullType": "price.Vps.Lowlat.ModelEnum",
              "name": "modelName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/vps/lowlat/model/{modelName}"
    },
    {
      "description": "Get the price of address move option fee",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of address move option fee",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Xdsl.AddressMove.FeeEnum",
              "description": "Option",
              "fullType": "price.Xdsl.AddressMove.FeeEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/xdsl/addressMove/fee/{option}"
    },
    {
      "description": "Get the price of options installation fee",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of options installation fee",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Xdsl.InstallationEnum",
              "description": "Offer",
              "fullType": "price.Xdsl.InstallationEnum",
              "name": "offer",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/xdsl/installation/{offer}"
    },
    {
      "description": "Get the price of xdsl offers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of xdsl offers",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Xdsl.OffersEnum",
              "description": "Offers name",
              "fullType": "price.Xdsl.OffersEnum",
              "name": "offersName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/xdsl/offers/{offersName}"
    },
    {
      "description": "Get the price of options installation fee",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of options installation fee",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Xdsl.Options.InstallationEnum",
              "description": "Option",
              "fullType": "price.Xdsl.Options.InstallationEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/xdsl/options/installation/{option}"
    },
    {
      "description": "Get the price of IPv4 options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of IPv4 options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Xdsl.Options.Ipv4Enum",
              "description": "Ip range",
              "fullType": "price.Xdsl.Options.Ipv4Enum",
              "name": "ipRange",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/xdsl/options/ipv4/{ipRange}"
    },
    {
      "description": "Get the price of line action",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the price of line action",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "price.Xdsl.Options.LineEnum",
              "description": "Line action",
              "fullType": "price.Xdsl.Options.LineEnum",
              "name": "lineAction",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Price"
        }
      ],
      "path": "/price/xdsl/options/line/{lineAction}"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "order.CurrencyCodeEnum": {
      "enum": [
        "AUD",
        "CAD",
        "CZK",
        "EUR",
        "GBP",
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
    "order.Price": {
      "description": "Price with it's currency and textual representation",
      "id": "Price",
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": false,
          "required": true,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        }
      }
    }
  },
  "resourcePath": "/price"
}