import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/price.json

export const schema: Schema = {
  "apiVersion": "1.0",
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
              "description": "capacity in gigabit of Nas Ha",
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
              "description": "commercial range of your dedicated server",
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
              "description": "Capacity in gigabytes of backup storage offer",
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
              "description": "Model of firewall",
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
              "description": "Ip",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "type of the hourly ressources you want to order",
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
              "description": "type of the monthly ressources you want to order",
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
              "description": "Option",
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
              "description": "PrivateDatabase",
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
              "description": "Cdn",
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
              "description": "ExtraSqlPerso",
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
              "description": "Ssl",
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
              "description": "Subscription",
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
              "description": "The reference of the JOB consumption",
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
              "description": "The reference of the RESERVATION consumption",
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
              "description": "The reference of the SESSION consumption",
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
              "description": "Office",
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
              "description": "The name of the offer",
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
              "description": "License",
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
              "description": "Model",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Model",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "Model",
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
              "description": "Option",
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
              "description": "Model",
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
              "description": "The option name",
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
              "description": "The offer",
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
              "description": "The name of the offer",
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
              "description": "The option",
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
              "description": "The range of the IPv4",
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
              "description": "The type of line action",
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
  "basePath": "https://eu.api.soyoustart.com/1.0",
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
    "price.Dedicated.Nasha.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "1200g",
        "13200g",
        "19200g",
        "2400g",
        "26400g",
        "3600g",
        "7200g"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Dedicated.Nasha"
    },
    "price.Dedicated.Server.AntiDDoSProEnum": {
      "description": "Enum of AntiDDoSPros",
      "enum": [
        "sk"
      ],
      "enumType": "string",
      "id": "AntiDDoSProEnum",
      "namespace": "price.Dedicated.Server"
    },
    "price.Dedicated.Server.BackupStorageEnum": {
      "description": "Enum of BackupStorages",
      "enum": [
        "1000",
        "10000",
        "500",
        "5000"
      ],
      "enumType": "string",
      "id": "BackupStorageEnum",
      "namespace": "price.Dedicated.Server"
    },
    "price.Dedicated.Server.FirewallEnum": {
      "description": "Enum of Firewalls",
      "enum": [
        "asa5505",
        "asa5510",
        "asa5520"
      ],
      "enumType": "string",
      "id": "FirewallEnum",
      "namespace": "price.Dedicated.Server"
    },
    "price.Dedicated.Server.IpEnum": {
      "description": "Enum of Ips",
      "enum": [
        "kimsufi",
        "parking"
      ],
      "enumType": "string",
      "id": "IpEnum",
      "namespace": "price.Dedicated.Server"
    },
    "price.Dedicated.Server.ProfessionalUseEnum": {
      "description": "Enum of ProfessionalUses",
      "enum": [
        "bhg",
        "eg",
        "hg",
        "mg",
        "sp"
      ],
      "enumType": "string",
      "id": "ProfessionalUseEnum",
      "namespace": "price.Dedicated.Server"
    },
    "price.DedicatedCloud.2013v1.Bhs1a.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200g-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-3600-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Bhs1a.Filer"
    },
    "price.DedicatedCloud.2013v1.Bhs1a.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-3600-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Bhs1a.Filer"
    },
    "price.DedicatedCloud.2013v1.Bhs1a.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "L++",
        "L2",
        "L2+",
        "M",
        "S",
        "S++",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Bhs1a.Host"
    },
    "price.DedicatedCloud.2013v1.Bhs1a.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "L++",
        "L2",
        "L2+",
        "M",
        "S",
        "S++",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Bhs1a.Host"
    },
    "price.DedicatedCloud.2013v1.Rbx2a.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200g-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-3600-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Rbx2a.Filer"
    },
    "price.DedicatedCloud.2013v1.Rbx2a.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-3600-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Rbx2a.Filer"
    },
    "price.DedicatedCloud.2013v1.Rbx2a.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "L++",
        "L2",
        "L2+",
        "M",
        "S",
        "S++",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Rbx2a.Host"
    },
    "price.DedicatedCloud.2013v1.Rbx2a.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "L++",
        "L2",
        "L2+",
        "M",
        "S",
        "S++",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Rbx2a.Host"
    },
    "price.DedicatedCloud.2013v1.Sbg1a.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200g-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-3600-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Sbg1a.Filer"
    },
    "price.DedicatedCloud.2013v1.Sbg1a.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-3600-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Sbg1a.Filer"
    },
    "price.DedicatedCloud.2013v1.Sbg1a.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "L++",
        "L2",
        "L2+",
        "M",
        "S",
        "S++",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Sbg1a.Host"
    },
    "price.DedicatedCloud.2013v1.Sbg1a.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "L++",
        "L2",
        "L2+",
        "M",
        "S",
        "S++",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2013v1.Sbg1a.Host"
    },
    "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2014v2.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v1.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v2.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v3.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v4.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v5.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v6.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Bhs1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2b.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Filer"
    },
    "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Sbg1a.Enterprise.Host"
    },
    "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200g-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "iscsi-1200-GB",
        "iscsi-13200-GB",
        "iscsi-3300-GB",
        "iscsi-6600-GB",
        "iscsi-800-GB",
        "nfs-100-GB",
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "L",
        "L+",
        "M",
        "XL",
        "XL+"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2016v7.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v1.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v2.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v3.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v4.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v5.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v6.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Bhs1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Eri1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Lim1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Rbx2a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Rbx2b.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Sbg1a.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "nfs-1200-GB",
        "nfs-13200-GB",
        "nfs-1600-GB",
        "nfs-18000-GB",
        "nfs-2000-GB",
        "nfs-2400-GB",
        "nfs-3000-GB",
        "nfs-3300-GB",
        "nfs-36000-GB",
        "nfs-6000-GB",
        "nfs-6600-GB",
        "nfs-800-GB",
        "nfs-9000-GB"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Filer"
    },
    "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host.HourlyEnum": {
      "description": "Enum of Hourlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "HourlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host"
    },
    "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host.MonthlyEnum": {
      "description": "Enum of Monthlys",
      "enum": [
        "SDDC-128",
        "SDDC-16",
        "SDDC-256",
        "SDDC-512",
        "SDDC-64",
        "SDDCVSAN-256",
        "SDDCVSAN-512"
      ],
      "enumType": "string",
      "id": "MonthlyEnum",
      "namespace": "price.DedicatedCloud.2018v7.Waw1c.Infrastructure.Host"
    },
    "price.Domain.Zone.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "dnsAnycast"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Domain.Zone"
    },
    "price.Email.Exchange.OfferEnum": {
      "description": "Enum of Offers",
      "enum": [
        "hosted"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "price.Email.Exchange"
    },
    "price.Hosting.PrivateDatabaseEnum": {
      "description": "Enum of PrivateDatabases",
      "enum": [
        "mysql_4.1_1024",
        "mysql_4.1_128",
        "mysql_4.1_256",
        "mysql_4.1_512",
        "mysql_5.0_1024",
        "mysql_5.0_128",
        "mysql_5.0_256",
        "mysql_5.0_512",
        "mysql_5.1_1024",
        "mysql_5.1_128",
        "mysql_5.1_256",
        "mysql_5.1_512",
        "mysql_5.5_1024",
        "mysql_5.5_128",
        "mysql_5.5_256",
        "mysql_5.5_512"
      ],
      "enumType": "string",
      "id": "PrivateDatabaseEnum",
      "namespace": "price.Hosting"
    },
    "price.Hosting.Web.CdnEnum": {
      "description": "Enum of Cdns",
      "enum": [
        "CDN_BUSINESS"
      ],
      "enumType": "string",
      "id": "CdnEnum",
      "namespace": "price.Hosting.Web"
    },
    "price.Hosting.Web.ExtraSqlPersoEnum": {
      "description": "Enum of ExtraSqlPersos",
      "enum": [
        "SQLPERSO_1_BASES_400_MB",
        "SQLPERSO_1_BASES_800_MB",
        "SQLPERSO_20_BASES_100_MB",
        "SQLPERSO_20_BASES_200_MB",
        "SQLPERSO_2_BASES_400_MB",
        "SQLPERSO_2_BASES_800_MB",
        "SQLPERSO_50_BASES_100_MB",
        "SQLPERSO_50_BASES_200_MB",
        "SQLPERSO_5_BASES_100_MB",
        "SQLPERSO_5_BASES_200_MB",
        "SQLPERSO_5_BASES_400_MB",
        "SQLPERSO_5_BASES_800_MB"
      ],
      "enumType": "string",
      "id": "ExtraSqlPersoEnum",
      "namespace": "price.Hosting.Web"
    },
    "price.Hosting.Web.SslEnum": {
      "description": "Enum of Ssls",
      "enum": [
        "HOSTEDSSL"
      ],
      "enumType": "string",
      "id": "SslEnum",
      "namespace": "price.Hosting.Web"
    },
    "price.Hpcspot.Account.SubscriptionEnum": {
      "description": "Enum of Subscriptions",
      "enum": [
        "HPCSPOT"
      ],
      "enumType": "string",
      "id": "SubscriptionEnum",
      "namespace": "price.Hpcspot.Account"
    },
    "price.Hpcspot.Consumption.JobEnum": {
      "description": "Enum of Jobs",
      "enum": [
        "16core.64gb",
        "4core.32gb",
        "8core.32gb"
      ],
      "enumType": "string",
      "id": "JobEnum",
      "namespace": "price.Hpcspot.Consumption"
    },
    "price.Hpcspot.Consumption.ReservationEnum": {
      "description": "Enum of Reservations",
      "enum": [
        "12core.60gb.quadrok400",
        "1core.4gb",
        "1core.4gb.quadrok4000",
        "2core.8gb",
        "2core.8gb.quadrok4000",
        "4core.15gb",
        "4core.15gb.quadrok4000",
        "8core.30gb",
        "8core.30gb.quadrok4000"
      ],
      "enumType": "string",
      "id": "ReservationEnum",
      "namespace": "price.Hpcspot.Consumption"
    },
    "price.Hpcspot.Consumption.SessionEnum": {
      "description": "Enum of Sessions",
      "enum": [
        "16core.64gb",
        "4core.32gb",
        "8core.32gb"
      ],
      "enumType": "string",
      "id": "SessionEnum",
      "namespace": "price.Hpcspot.Consumption"
    },
    "price.License.OfficeEnum": {
      "description": "Enum of Offices",
      "enum": [
        "officeBusiness",
        "officeProPlus"
      ],
      "enumType": "string",
      "id": "OfficeEnum",
      "namespace": "price.License"
    },
    "price.OverTheBox.OfferEnum": {
      "description": "Enum of Offers",
      "enum": [
        "plus.v1"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "price.OverTheBox"
    },
    "price.Pack.Xdsl.InstallationEnum": {
      "description": "Enum of Installations",
      "enum": [
        "enterprise",
        "express",
        "expressLite"
      ],
      "enumType": "string",
      "id": "InstallationEnum",
      "namespace": "price.Pack.Xdsl"
    },
    "price.Pack.Xdsl.OffersEnum": {
      "description": "Enum of Offerss",
      "enum": [
        "enterprise",
        "express",
        "expressLite"
      ],
      "enumType": "string",
      "id": "OffersEnum",
      "namespace": "price.Pack.Xdsl"
    },
    "price.Pack.Xdsl.OptionsEnum": {
      "description": "Enum of Optionss",
      "enum": [
        "enterpriseGtr",
        "vdslFt"
      ],
      "enumType": "string",
      "id": "OptionsEnum",
      "namespace": "price.Pack.Xdsl"
    },
    "price.Saas.Csp2.LicenseEnum": {
      "description": "Enum of Licenses",
      "enum": [
        "AzureActiveDirectoryBasic",
        "AzureActiveDirectoryPremiumP1",
        "Business",
        "BusinessEssentials",
        "BusinessPremium",
        "EnterpriseE1",
        "EnterpriseE3",
        "EnterpriseK1",
        "ExchangeOnlinePlan1",
        "ProPlus",
        "ProjectOnline",
        "ProjectOnlineProfessional",
        "VisioPro"
      ],
      "enumType": "string",
      "id": "LicenseEnum",
      "namespace": "price.Saas.Csp2"
    },
    "price.Telephony.OfferEnum": {
      "description": "Enum of Offers",
      "enum": [
        "discovery",
        "enterprise",
        "enterpriseMobile",
        "resellerEnterprise",
        "resellerEnterpriseMobile"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "price.Telephony"
    },
    "price.Vps.2013v1.Classic.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3",
        "model4",
        "model5",
        "model6"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2013v1.Classic"
    },
    "price.Vps.2013v1.Cloud.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3",
        "model4",
        "model5",
        "model6"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2013v1.Cloud"
    },
    "price.Vps.2013v1.Cloud.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "ftpbackup",
        "ip",
        "snapshot",
        "veeam"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2013v1.Cloud"
    },
    "price.Vps.2013v1.Lowlat.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2013v1.Lowlat"
    },
    "price.Vps.2014v1.Classic.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3",
        "model4"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2014v1.Classic"
    },
    "price.Vps.2014v1.Cloud.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3",
        "model4"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2014v1.Cloud"
    },
    "price.Vps.2014v1.Cloud.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "ftpbackup",
        "ip",
        "snapshot",
        "veeam"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2014v1.Cloud"
    },
    "price.Vps.2015v1.Cloud.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2015v1.Cloud"
    },
    "price.Vps.2015v1.Cloud.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "automatedBackup",
        "ftpbackup",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2015v1.Cloud"
    },
    "price.Vps.2015v1.Cloudram.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2015v1.Cloudram"
    },
    "price.Vps.2015v1.Cloudram.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "automatedBackup",
        "ftpbackup",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2015v1.Cloudram"
    },
    "price.Vps.2015v1.Ssd.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2015v1.Ssd"
    },
    "price.Vps.2015v1.Ssd.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2015v1.Ssd"
    },
    "price.Vps.2017v1.Ssd.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3",
        "model4"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2017v1.Ssd"
    },
    "price.Vps.2017v1.Ssd.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "ip"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2017v1.Ssd"
    },
    "price.Vps.2017v2.Cloud.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2017v2.Cloud"
    },
    "price.Vps.2017v2.Cloud.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "automatedBackup",
        "ftpbackup",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2017v2.Cloud"
    },
    "price.Vps.2017v2.Cloudram.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2017v2.Cloudram"
    },
    "price.Vps.2017v2.Cloudram.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "automatedBackup",
        "ftpbackup",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2017v2.Cloudram"
    },
    "price.Vps.2017v2.Ssd.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2017v2.Ssd"
    },
    "price.Vps.2017v2.Ssd.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2017v2.Ssd"
    },
    "price.Vps.2017v3.Cloud.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2017v3.Cloud"
    },
    "price.Vps.2017v3.Cloud.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "automatedBackup",
        "ftpbackup",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2017v3.Cloud"
    },
    "price.Vps.2017v3.Cloudram.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2017v3.Cloudram"
    },
    "price.Vps.2017v3.Cloudram.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "automatedBackup",
        "ftpbackup",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2017v3.Cloudram"
    },
    "price.Vps.2017v3.Ssd.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2017v3.Ssd"
    },
    "price.Vps.2017v3.Ssd.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2017v3.Ssd"
    },
    "price.Vps.2018v1.Cloud.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2018v1.Cloud"
    },
    "price.Vps.2018v1.Cloud.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "automatedBackup",
        "ftpbackup",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2018v1.Cloud"
    },
    "price.Vps.2018v1.Cloudram.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2018v1.Cloudram"
    },
    "price.Vps.2018v1.Cloudram.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "automatedBackup",
        "ftpbackup",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2018v1.Cloudram"
    },
    "price.Vps.2018v1.Ssd.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2018v1.Ssd"
    },
    "price.Vps.2018v1.Ssd.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "additionalDisk100",
        "additionalDisk200",
        "additionalDisk50",
        "additionalDisk500",
        "ip",
        "snapshot"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2018v1.Ssd"
    },
    "price.Vps.2018v2.Ssd.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3",
        "model4"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.2018v2.Ssd"
    },
    "price.Vps.2018v2.Ssd.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "ip"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.2018v2.Ssd"
    },
    "price.Vps.Classic.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3",
        "model4",
        "model5",
        "model6"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.Classic"
    },
    "price.Vps.Cloud.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3",
        "model4",
        "model5",
        "model6"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.Cloud"
    },
    "price.Vps.Cloud.OptionEnum": {
      "description": "Enum of Options",
      "enum": [
        "ftpbackup",
        "ip",
        "snapshot",
        "veeam"
      ],
      "enumType": "string",
      "id": "OptionEnum",
      "namespace": "price.Vps.Cloud"
    },
    "price.Vps.Lowlat.ModelEnum": {
      "description": "Enum of Models",
      "enum": [
        "model1",
        "model2",
        "model3"
      ],
      "enumType": "string",
      "id": "ModelEnum",
      "namespace": "price.Vps.Lowlat"
    },
    "price.Xdsl.AddressMove.FeeEnum": {
      "description": "Enum of Fees",
      "enum": [
        "keepPortability"
      ],
      "enumType": "string",
      "id": "FeeEnum",
      "namespace": "price.Xdsl.AddressMove"
    },
    "price.Xdsl.InstallationEnum": {
      "description": "Enum of Installations",
      "enum": [
        "backup"
      ],
      "enumType": "string",
      "id": "InstallationEnum",
      "namespace": "price.Xdsl"
    },
    "price.Xdsl.OffersEnum": {
      "description": "Enum of Offerss",
      "enum": [
        "backup"
      ],
      "enumType": "string",
      "id": "OffersEnum",
      "namespace": "price.Xdsl"
    },
    "price.Xdsl.Options.InstallationEnum": {
      "description": "Enum of Installations",
      "enum": [
        "ipv4"
      ],
      "enumType": "string",
      "id": "InstallationEnum",
      "namespace": "price.Xdsl.Options"
    },
    "price.Xdsl.Options.Ipv4Enum": {
      "description": "Enum of Ipv4s",
      "enum": [
        "29"
      ],
      "enumType": "string",
      "id": "Ipv4Enum",
      "namespace": "price.Xdsl.Options"
    },
    "price.Xdsl.Options.LineEnum": {
      "description": "Enum of Lines",
      "enum": [
        "creation",
        "partialToTotal"
      ],
      "enumType": "string",
      "id": "LineEnum",
      "namespace": "price.Xdsl.Options"
    }
  },
  "resourcePath": "/price"
}