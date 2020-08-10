import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/price/dedicated/nasha/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Dedicated.Nasha.ModelEnum",
              "paramType": "path",
              "fullType": "price.Dedicated.Nasha.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get the price of Nas HA offers"
        }
      ],
      "description": "Get the price of Nas HA offers"
    },
    {
      "path": "/price/dedicated/server/antiDDoSPro/{commercialRange}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "commercialRange",
              "dataType": "price.Dedicated.Server.AntiDDoSProEnum",
              "paramType": "path",
              "fullType": "price.Dedicated.Server.AntiDDoSProEnum",
              "required": true,
              "description": "Commercial range"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of anti-DDos Pro option"
        }
      ],
      "description": "Get price of anti-DDos Pro option"
    },
    {
      "path": "/price/dedicated/server/backupStorage/{capacity}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "capacity",
              "dataType": "price.Dedicated.Server.BackupStorageEnum",
              "paramType": "path",
              "fullType": "price.Dedicated.Server.BackupStorageEnum",
              "required": true,
              "description": "Capacity"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of backup storage offer"
        }
      ],
      "description": "Get price of backup storage offer"
    },
    {
      "path": "/price/dedicated/server/firewall/{firewallModel}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "firewallModel",
              "dataType": "price.Dedicated.Server.FirewallEnum",
              "paramType": "path",
              "fullType": "price.Dedicated.Server.FirewallEnum",
              "required": true,
              "description": "Firewall model"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of available firewall models"
        }
      ],
      "description": "Get price of available firewall models"
    },
    {
      "path": "/price/dedicated/server/ip/{routedTo}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "routedTo",
              "dataType": "price.Dedicated.Server.IpEnum",
              "paramType": "path",
              "fullType": "price.Dedicated.Server.IpEnum",
              "required": true,
              "description": "Routed to"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of IPs"
        }
      ],
      "description": "Get price of IPs"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2013v1.Bhs1a.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Bhs1a.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2013v1.Bhs1a.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Bhs1a.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2013v1.Bhs1a.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Bhs1a.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2013v1.Bhs1a.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Bhs1a.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2013v1.Rbx2a.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Rbx2a.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2013v1.Rbx2a.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Rbx2a.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2013v1.Rbx2a.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Rbx2a.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2013v1.Rbx2a.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Rbx2a.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2013v1.Sbg1a.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Sbg1a.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2013v1.Sbg1a.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Sbg1a.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2013v1.Sbg1a.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Sbg1a.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2013v1.Sbg1a.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2013v1.Sbg1a.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer.HourlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/{filerProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerProfile",
              "dataType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer.MonthlyEnum",
              "required": true,
              "description": "Filer profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly filer ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly filer ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host.HourlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host.HourlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud hourly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud hourly host ressources"
    },
    {
      "path": "/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/{hostProfile}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostProfile",
              "dataType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host.MonthlyEnum",
              "paramType": "path",
              "fullType": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host.MonthlyEnum",
              "required": true,
              "description": "Host profile"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of dedicated Cloud monthly host ressources"
        }
      ],
      "description": "Get price of dedicated Cloud monthly host ressources"
    },
    {
      "path": "/price/domain/zone/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Domain.Zone.OptionEnum",
              "paramType": "path",
              "fullType": "price.Domain.Zone.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of zone options"
        }
      ],
      "description": "Get price of zone options"
    },
    {
      "path": "/price/hosting/privateDatabase/{privateDatabaseName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "privateDatabaseName",
              "dataType": "price.Hosting.PrivateDatabaseEnum",
              "paramType": "path",
              "fullType": "price.Hosting.PrivateDatabaseEnum",
              "required": true,
              "description": "Private database name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get the price for a private database"
        }
      ],
      "description": "Get the price for a private database"
    },
    {
      "path": "/price/hosting/web/cdn/{cdnName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cdnName",
              "dataType": "price.Hosting.Web.CdnEnum",
              "paramType": "path",
              "fullType": "price.Hosting.Web.CdnEnum",
              "required": true,
              "description": "Cdn name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get the price for cdn option"
        }
      ],
      "description": "Get the price for cdn option"
    },
    {
      "path": "/price/hosting/web/extraSqlPerso/{extraSqlPersoName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "extraSqlPersoName",
              "dataType": "price.Hosting.Web.ExtraSqlPersoEnum",
              "paramType": "path",
              "fullType": "price.Hosting.Web.ExtraSqlPersoEnum",
              "required": true,
              "description": "Extra sql perso name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get the price for extra sql perso option"
        }
      ],
      "description": "Get the price for extra sql perso option"
    },
    {
      "path": "/price/hosting/web/ssl/{sslName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "sslName",
              "dataType": "price.Hosting.Web.SslEnum",
              "paramType": "path",
              "fullType": "price.Hosting.Web.SslEnum",
              "required": true,
              "description": "Ssl name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get the price for hosted ssl option"
        }
      ],
      "description": "Get the price for hosted ssl option"
    },
    {
      "path": "/price/license/office/{officeName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "officeName",
              "dataType": "price.License.OfficeEnum",
              "paramType": "path",
              "fullType": "price.License.OfficeEnum",
              "required": true,
              "description": "Office name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get the monthly price for an office license"
        }
      ],
      "description": "Get the monthly price for an office license"
    },
    {
      "path": "/price/vps/2013v1/classic/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2013v1.Classic.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2013v1.Classic.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud 2013"
        }
      ],
      "description": "Get price of VPS Cloud 2013"
    },
    {
      "path": "/price/vps/2013v1/cloud/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2013v1.Cloud.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2013v1.Cloud.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Classic 2013"
        }
      ],
      "description": "Get price of VPS Classic 2013"
    },
    {
      "path": "/price/vps/2013v1/cloud/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2013v1.Cloud.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2013v1.Cloud.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud Options 2013"
        }
      ],
      "description": "Get price of VPS Cloud Options 2013"
    },
    {
      "path": "/price/vps/2013v1/lowlat/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2013v1.Lowlat.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2013v1.Lowlat.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Low Latency 2013"
        }
      ],
      "description": "Get price of VPS Low Latency 2013"
    },
    {
      "path": "/price/vps/2014v1/classic/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2014v1.Classic.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2014v1.Classic.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Classic 2014"
        }
      ],
      "description": "Get price of VPS Classic 2014"
    },
    {
      "path": "/price/vps/2014v1/cloud/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2014v1.Cloud.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2014v1.Cloud.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud 2014"
        }
      ],
      "description": "Get price of VPS Cloud 2014"
    },
    {
      "path": "/price/vps/2014v1/cloud/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2014v1.Cloud.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2014v1.Cloud.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud Options 2014"
        }
      ],
      "description": "Get price of VPS Cloud Options 2014"
    },
    {
      "path": "/price/vps/2015v1/cloud/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2015v1.Cloud.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2015v1.Cloud.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud 2015"
        }
      ],
      "description": "Get price of VPS Cloud 2015"
    },
    {
      "path": "/price/vps/2015v1/cloud/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2015v1.Cloud.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2015v1.Cloud.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud Options 2015/2016"
        }
      ],
      "description": "Get price of VPS Cloud Options 2015/2016"
    },
    {
      "path": "/price/vps/2015v1/cloudram/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2015v1.Cloudram.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2015v1.Cloudram.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud RAM 2016"
        }
      ],
      "description": "Get price of VPS Cloud RAM 2016"
    },
    {
      "path": "/price/vps/2015v1/cloudram/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2015v1.Cloudram.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2015v1.Cloudram.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud RAM Options 2015/2016"
        }
      ],
      "description": "Get price of VPS Cloud RAM Options 2015/2016"
    },
    {
      "path": "/price/vps/2015v1/ssd/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2015v1.Ssd.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2015v1.Ssd.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD 2015"
        }
      ],
      "description": "Get price of VPS SSD 2015"
    },
    {
      "path": "/price/vps/2015v1/ssd/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2015v1.Ssd.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2015v1.Ssd.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD Options 2015/2016"
        }
      ],
      "description": "Get price of VPS SSD Options 2015/2016"
    },
    {
      "path": "/price/vps/2017v1/ssd/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2017v1.Ssd.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v1.Ssd.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD Discovery 2017"
        }
      ],
      "description": "Get price of VPS SSD Discovery 2017"
    },
    {
      "path": "/price/vps/2017v1/ssd/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2017v1.Ssd.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v1.Ssd.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD Discovery Options 2017"
        }
      ],
      "description": "Get price of VPS SSD Discovery Options 2017"
    },
    {
      "path": "/price/vps/2017v2/cloud/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2017v2.Cloud.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v2.Cloud.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud 2017"
        }
      ],
      "description": "Get price of VPS Cloud 2017"
    },
    {
      "path": "/price/vps/2017v2/cloud/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2017v2.Cloud.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v2.Cloud.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud Options 2015/2016"
        }
      ],
      "description": "Get price of VPS Cloud Options 2015/2016"
    },
    {
      "path": "/price/vps/2017v2/cloudram/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2017v2.Cloudram.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v2.Cloudram.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud RAM 2017"
        }
      ],
      "description": "Get price of VPS Cloud RAM 2017"
    },
    {
      "path": "/price/vps/2017v2/cloudram/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2017v2.Cloudram.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v2.Cloudram.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud RAM Options 2015/2016"
        }
      ],
      "description": "Get price of VPS Cloud RAM Options 2015/2016"
    },
    {
      "path": "/price/vps/2017v2/ssd/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2017v2.Ssd.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v2.Ssd.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD 2017"
        }
      ],
      "description": "Get price of VPS SSD 2017"
    },
    {
      "path": "/price/vps/2017v2/ssd/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2017v2.Ssd.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v2.Ssd.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD Options 2015/2016"
        }
      ],
      "description": "Get price of VPS SSD Options 2015/2016"
    },
    {
      "path": "/price/vps/2017v3/cloud/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2017v3.Cloud.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v3.Cloud.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud 2017"
        }
      ],
      "description": "Get price of VPS Cloud 2017"
    },
    {
      "path": "/price/vps/2017v3/cloud/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2017v3.Cloud.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v3.Cloud.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud Options 2015/2016"
        }
      ],
      "description": "Get price of VPS Cloud Options 2015/2016"
    },
    {
      "path": "/price/vps/2017v3/cloudram/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2017v3.Cloudram.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v3.Cloudram.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud RAM 2017"
        }
      ],
      "description": "Get price of VPS Cloud RAM 2017"
    },
    {
      "path": "/price/vps/2017v3/cloudram/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2017v3.Cloudram.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v3.Cloudram.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud RAM Options 2015/2016"
        }
      ],
      "description": "Get price of VPS Cloud RAM Options 2015/2016"
    },
    {
      "path": "/price/vps/2017v3/ssd/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2017v3.Ssd.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v3.Ssd.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD 2017"
        }
      ],
      "description": "Get price of VPS SSD 2017"
    },
    {
      "path": "/price/vps/2017v3/ssd/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2017v3.Ssd.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2017v3.Ssd.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD Options 2015/2016"
        }
      ],
      "description": "Get price of VPS SSD Options 2015/2016"
    },
    {
      "path": "/price/vps/2018v1/cloud/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2018v1.Cloud.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2018v1.Cloud.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud 2017"
        }
      ],
      "description": "Get price of VPS Cloud 2017"
    },
    {
      "path": "/price/vps/2018v1/cloud/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2018v1.Cloud.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2018v1.Cloud.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud Options 2015/2016"
        }
      ],
      "description": "Get price of VPS Cloud Options 2015/2016"
    },
    {
      "path": "/price/vps/2018v1/cloudram/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2018v1.Cloudram.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2018v1.Cloudram.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud RAM 2017"
        }
      ],
      "description": "Get price of VPS Cloud RAM 2017"
    },
    {
      "path": "/price/vps/2018v1/cloudram/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2018v1.Cloudram.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2018v1.Cloudram.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud RAM Options 2015/2016"
        }
      ],
      "description": "Get price of VPS Cloud RAM Options 2015/2016"
    },
    {
      "path": "/price/vps/2018v1/ssd/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2018v1.Ssd.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2018v1.Ssd.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD 2018"
        }
      ],
      "description": "Get price of VPS SSD 2018"
    },
    {
      "path": "/price/vps/2018v1/ssd/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2018v1.Ssd.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2018v1.Ssd.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD Options 2015/2016"
        }
      ],
      "description": "Get price of VPS SSD Options 2015/2016"
    },
    {
      "path": "/price/vps/2018v2/ssd/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.2018v2.Ssd.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.2018v2.Ssd.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD APAC"
        }
      ],
      "description": "Get price of VPS SSD APAC"
    },
    {
      "path": "/price/vps/2018v2/ssd/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.2018v2.Ssd.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.2018v2.Ssd.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS SSD APAC Options"
        }
      ],
      "description": "Get price of VPS SSD APAC Options"
    },
    {
      "path": "/price/vps/classic/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2014-04-18T10:00:00+01:00",
            "deprecatedDate": "2014-03-18T10:00:00+01:00",
            "replacement": "/price/vps/2013v1/classic/model/{modelName}"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.Classic.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.Classic.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Classic"
        }
      ],
      "description": "Get price of VPS Classic"
    },
    {
      "path": "/price/vps/cloud/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2014-04-18T10:00:00+01:00",
            "deprecatedDate": "2014-03-18T10:00:00+01:00",
            "replacement": "/price/vps/2013v1/cloud/model/{modelName}"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.Cloud.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.Cloud.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud"
        }
      ],
      "description": "Get price of VPS Cloud"
    },
    {
      "path": "/price/vps/cloud/option/{optionName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2014-04-18T10:00:00+01:00",
            "deprecatedDate": "2014-03-18T10:00:00+01:00",
            "replacement": "/price/vps/2013v1/cloud/option/{optionName}"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "optionName",
              "dataType": "price.Vps.Cloud.OptionEnum",
              "paramType": "path",
              "fullType": "price.Vps.Cloud.OptionEnum",
              "required": true,
              "description": "Option name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Cloud Options"
        }
      ],
      "description": "Get price of VPS Cloud Options"
    },
    {
      "path": "/price/vps/lowlat/model/{modelName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2014-04-18T10:00:00+01:00",
            "deprecatedDate": "2014-03-18T10:00:00+01:00",
            "replacement": "/price/vps/2013v1/lowlat/model/{modelName}"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "modelName",
              "dataType": "price.Vps.Lowlat.ModelEnum",
              "paramType": "path",
              "fullType": "price.Vps.Lowlat.ModelEnum",
              "required": true,
              "description": "Model name"
            }
          ],
          "responseType": "order.Price",
          "noAuthentication": false,
          "description": "Get price of VPS Low Latency"
        }
      ],
      "description": "Get price of VPS Low Latency"
    }
  ],
  "resourcePath": "/price",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "order.CurrencyCodeEnum": {
      "id": "CurrencyCodeEnum",
      "namespace": "order",
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
      "enumType": "string"
    },
    "order.Price": {
      "id": "Price",
      "namespace": "order",
      "description": "Price with it's currency and textual representation",
      "properties": {
        "currencyCode": {
          "type": "order.CurrencyCodeEnum",
          "fullType": "order.CurrencyCodeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "text": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    }
  }
}