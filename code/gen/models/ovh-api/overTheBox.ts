import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/overTheBox.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the OVERTHEBOX service",
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
      "path": "/overTheBox"
    },
    {
      "description": "Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Resiliate a service",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.Service"
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
              "dataType": "overTheBox.Service",
              "description": "New object properties",
              "fullType": "overTheBox.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/overTheBox/{serviceName}"
    },
    {
      "description": "autoMTU operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the value of autoMTU",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overTheBox.AvailableStatusEnum",
              "description": "Enable or disable autoMTU",
              "fullType": "overTheBox.AvailableStatusEnum",
              "name": "mtuAuto",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/overTheBox/{serviceName}/autoMTU"
    },
    {
      "description": "availableReleaseChannels operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available release channels for this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/overTheBox/{serviceName}/availableReleaseChannels"
    },
    {
      "description": "List the overTheBox.Backup objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of backups for this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/overTheBox/{serviceName}/backups"
    },
    {
      "description": "Backup",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a backup",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The id of the backup",
              "fullType": "string",
              "name": "backupId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The id of the backup",
              "fullType": "string",
              "name": "backupId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.Backup"
        }
      ],
      "path": "/overTheBox/{serviceName}/backups/{backupId}"
    },
    {
      "description": "cancelResiliation operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel the resiliation of the Service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/overTheBox/{serviceName}/cancelResiliation"
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
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/overTheBox/{serviceName}/changeContact"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Return the list of DHCP configurations",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dhcp.Config[]"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Create a DHCP configuration",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.dhcp.Config",
              "description": "Request Body",
              "fullType": "overthebox.configuration.dhcp.Config",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dhcp.Config"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/dhcp/config"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Delete a DHCP configuration",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Return the specified DHCP configuration",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dhcp.Config"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Update a DHCP configuration",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.dhcp.Config",
              "description": "Request Body",
              "fullType": "overthebox.configuration.dhcp.Config",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dhcp.Config"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/dhcp/config/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Return the list of DHCP static leases",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dhcp.StaticLease[]"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Create a DHCP static lease",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.dhcp.StaticLease",
              "description": "Request Body",
              "fullType": "overthebox.configuration.dhcp.StaticLease",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dhcp.StaticLease"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/dhcp/staticLease"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Delete a DHCP static lease",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Return the specified DHCP static lease",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dhcp.StaticLease"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Update a DHCP static lease",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.dhcp.StaticLease",
              "description": "Request Body",
              "fullType": "overthebox.configuration.dhcp.StaticLease",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dhcp.StaticLease"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/dhcp/staticLease/{id}"
    },
    {
      "description": "Local domains",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Return the list of DNS local domains",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dns.LocalDomain[]"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Create a DNS local domain",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.dns.LocalDomain",
              "description": "Request Body",
              "fullType": "overthebox.configuration.dns.LocalDomain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dns.LocalDomain"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/dns/localDomain"
    },
    {
      "description": "Local domains",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Delete a DNS local domain",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Return the specified DNS local domain",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dns.LocalDomain"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Update a DNS local domain",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.dns.LocalDomain",
              "description": "Request Body",
              "fullType": "overthebox.configuration.dns.LocalDomain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dns.LocalDomain"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/dns/localDomain/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Return the list of DNS nameservers",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dns.Nameserver[]"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Create a DNS nameserver",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.dns.Nameserver",
              "description": "Request Body",
              "fullType": "overthebox.configuration.dns.Nameserver",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dns.Nameserver"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/dns/nameserver"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Delete a DNS nameserver",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get a DNS nameserver configuration",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dns.Nameserver"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Update a DNS nameserver configuration",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.dns.Nameserver",
              "description": "Request Body",
              "fullType": "overthebox.configuration.dns.Nameserver",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.dns.Nameserver"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/dns/nameserver/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Return the list of firewall redirects",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.firewall.Redirect[]"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Create a firewall redirect",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.firewall.Redirect",
              "description": "Request Body",
              "fullType": "overthebox.configuration.firewall.Redirect",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.firewall.Redirect"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/firewall/redirect"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Delete a firewall redirect",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get a firewall redirect",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.firewall.Redirect"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Update a firewall redirect",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.firewall.Redirect",
              "description": "Request Body",
              "fullType": "overthebox.configuration.firewall.Redirect",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.firewall.Redirect"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/firewall/redirect/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Return the list of firewall rules",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.firewall.Rule[]"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Create a firewall rule",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.firewall.Rule",
              "description": "Request Body",
              "fullType": "overthebox.configuration.firewall.Rule",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.firewall.Rule"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/firewall/rule"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Delete a firewall rule",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get a firewall rule",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.firewall.Rule"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Update a firewall rule",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.firewall.Rule",
              "description": "Request Body",
              "fullType": "overthebox.configuration.firewall.Rule",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.firewall.Rule"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/firewall/rule/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Return the list of network interfaces",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.network.Interface[]"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Create a network interface",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.network.Interface",
              "description": "Request Body",
              "fullType": "overthebox.configuration.network.Interface",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.network.Interface"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/network/interface"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Delete a network interface",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get a network interface",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.network.Interface"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Update a network interface",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "overthebox.configuration.network.Interface",
              "description": "Request Body",
              "fullType": "overthebox.configuration.network.Interface",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overthebox.configuration.network.Interface"
        }
      ],
      "path": "/overTheBox/{serviceName}/configuration/network/interface/{id}"
    },
    {
      "description": "Device",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Unlink a device from a service",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.Device"
        }
      ],
      "path": "/overTheBox/{serviceName}/device"
    },
    {
      "description": "List the overTheBox.DeviceAction objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of actions scheduled for this device",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (=)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "overTheBox.ActionStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "overTheBox.ActionStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a device action on the device",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of the action",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.DeviceAction"
        }
      ],
      "path": "/overTheBox/{serviceName}/device/actions"
    },
    {
      "description": "Device action",
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
              "description": "The id of the action",
              "fullType": "string",
              "name": "actionId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.DeviceAction"
        }
      ],
      "path": "/overTheBox/{serviceName}/device/actions/{actionId}"
    },
    {
      "description": "availableActions operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List the available device actions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.AvailableDeviceAction[]"
        }
      ],
      "path": "/overTheBox/{serviceName}/device/availableActions"
    },
    {
      "description": "backup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create an action to generate a backup",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.DeviceAction"
        }
      ],
      "path": "/overTheBox/{serviceName}/device/backup"
    },
    {
      "description": "logs operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate a temporary url to retrieve device logs",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.TemporaryLogsLink"
        }
      ],
      "path": "/overTheBox/{serviceName}/device/logs"
    },
    {
      "description": "restoreBackup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a group of actions to restore a given backup",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The id of the backup to restore",
              "fullType": "string",
              "name": "backupId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.DeviceAction[]"
        }
      ],
      "path": "/overTheBox/{serviceName}/device/restoreBackup"
    },
    {
      "description": "linkDevice operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Link a device to this service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The id of the device",
              "fullType": "string",
              "name": "deviceId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/overTheBox/{serviceName}/linkDevice"
    },
    {
      "description": "offers operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all available offers one can migrate to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.AvailableMigrationOffer[]"
        }
      ],
      "path": "/overTheBox/{serviceName}/migration/offers"
    },
    {
      "description": "List the overTheBox.RemoteAccess objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of remote accesses for the service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
          "description": "Create a new remote access for the service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "IP block from which the remote access will be allowed (the default value is the IP from which the call is made)",
              "fullType": "ipBlock",
              "name": "allowedIp",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "The expirationDate of the remote access (default 1 day)",
              "fullType": "datetime",
              "name": "expirationDate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "The port that the device will expose",
              "fullType": "long",
              "name": "exposedPort",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The remote user public key authorized on the device (for SSH purpose)",
              "fullType": "string",
              "name": "publicKey",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.RemoteAccess"
        }
      ],
      "path": "/overTheBox/{serviceName}/remoteAccesses"
    },
    {
      "description": "If authorized, a remote access will expose a port, allowing an access to the device remotely",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a remote access",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The id of the remote access",
              "fullType": "string",
              "name": "remoteAccessId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The id of the remote access",
              "fullType": "string",
              "name": "remoteAccessId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.RemoteAccess"
        }
      ],
      "path": "/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}"
    },
    {
      "description": "authorize operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Authorize the remote access",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The id of the remote access",
              "fullType": "string",
              "name": "remoteAccessId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize"
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
              "description": "The internal name of your overTheBox offer",
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
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/overTheBox/{serviceName}/serviceInfos"
    },
    {
      "description": "Get statistics for an OTB device",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get statistics for an OTB device",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "otb.DeviceStatisticsTypeEnum",
              "description": "Type of metrics you want to retrieve",
              "fullType": "otb.DeviceStatisticsTypeEnum",
              "name": "metricsType",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "otb.DeviceStatisticsPeriodEnum",
              "description": "Period (default is daily)",
              "fullType": "otb.DeviceStatisticsPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "otb.device.statistics[]"
        }
      ],
      "path": "/overTheBox/{serviceName}/statistics"
    },
    {
      "description": "List the overTheBox.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of tasks scheduled for this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (=)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "overTheBox.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "overTheBox.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/overTheBox/{serviceName}/tasks"
    },
    {
      "description": "Task",
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
              "description": "The internal name of your overTheBox offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The id of the task",
              "fullType": "string",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "overTheBox.Task"
        }
      ],
      "path": "/overTheBox/{serviceName}/tasks/{taskId}"
    },
    {
      "description": "List the available offers for the new call",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List the available offers for the new call",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "price.OverTheBox.OfferEnum[]"
        }
      ],
      "path": "/overTheBox/availableOffers"
    },
    {
      "description": "Get the list of devices connected from the same IP address",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the list of devices connected from the same IP address",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "overTheBox.DeviceForRegistration[]"
        }
      ],
      "path": "/overTheBox/devices"
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
    "otb.DeviceStatisticsPeriodEnum": {
      "description": "Statistics Period",
      "enum": [
        "daily",
        "hourly",
        "monthly",
        "weekly"
      ],
      "enumType": "string",
      "id": "DeviceStatisticsPeriodEnum",
      "namespace": "otb"
    },
    "otb.DeviceStatisticsTypeEnum": {
      "description": "Serie Name",
      "enum": [
        "load",
        "memory_free",
        "traffic"
      ],
      "enumType": "string",
      "id": "DeviceStatisticsTypeEnum",
      "namespace": "otb"
    },
    "otb.DeviceStatisticsUnitEnum": {
      "description": "Serie Unit",
      "enum": [
        "bps",
        "byte",
        "n/a"
      ],
      "enumType": "string",
      "id": "DeviceStatisticsUnitEnum",
      "namespace": "otb"
    },
    "otb.device.statistics": {
      "description": "Device Statistics Datapoints",
      "id": "statistics",
      "namespace": "otb.device",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the serie",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "points": {
          "canBeNull": false,
          "description": "List of point",
          "fullType": "otb.device.statistics.point[]",
          "readOnly": true,
          "required": false,
          "type": "otb.device.statistics.point[]"
        },
        "tags": {
          "canBeNull": false,
          "description": "List of tags",
          "fullType": "otb.device.statistics.tag[]",
          "readOnly": true,
          "required": false,
          "type": "otb.device.statistics.tag[]"
        },
        "unit": {
          "canBeNull": false,
          "description": "Unit of the serie",
          "fullType": "otb.DeviceStatisticsUnitEnum",
          "readOnly": true,
          "required": false,
          "type": "otb.DeviceStatisticsUnitEnum"
        }
      }
    },
    "otb.device.statistics.point": {
      "description": "Statistics Datapoint",
      "id": "point",
      "namespace": "otb.device.statistics",
      "properties": {
        "timestamp": {
          "canBeNull": false,
          "description": "Timestamp",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": true,
          "description": "Datapoint value",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "otb.device.statistics.tag": {
      "description": "Tags for the metrics",
      "id": "tag",
      "namespace": "otb.device.statistics",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of tag",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "Value of tag",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "overTheBox.ActionStatusEnum": {
      "description": "Status of a task.",
      "enum": [
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "ActionStatusEnum",
      "namespace": "overTheBox"
    },
    "overTheBox.AvailableDeviceAction": {
      "description": "Device action",
      "id": "AvailableDeviceAction",
      "namespace": "overTheBox",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description of the action",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the action",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "overTheBox.AvailableMigrationOffer": {
      "description": "Migration offer",
      "id": "AvailableMigrationOffer",
      "namespace": "overTheBox",
      "properties": {
        "currentOfferPrice": {
          "canBeNull": false,
          "description": "Monthly price of the current offer",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the offer",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "engagementMonths": {
          "canBeNull": false,
          "description": "Number of months of engagement",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "hardwareAvailable": {
          "canBeNull": false,
          "description": "Specify if a hardware is available",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "offer": {
          "canBeNull": false,
          "description": "Name of the offer",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Monthly price of the new offer",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "overTheBox.AvailableStatusEnum": {
      "description": "Status of the service",
      "enum": [
        "disabled",
        "enabled"
      ],
      "enumType": "string",
      "id": "AvailableStatusEnum",
      "namespace": "overTheBox"
    },
    "overTheBox.Backup": {
      "description": "Backup",
      "id": "Backup",
      "namespace": "overTheBox",
      "properties": {
        "backupId": {
          "canBeNull": false,
          "description": "The id of the backup",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the creation of the backup",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deviceActionId": {
          "canBeNull": true,
          "description": "The id of the device action that triggered the backup",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "overTheBox.Device": {
      "description": "Device",
      "id": "Device",
      "namespace": "overTheBox",
      "properties": {
        "activated": {
          "canBeNull": false,
          "description": "Whether or not this device is associated to a service",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "deviceId": {
          "canBeNull": false,
          "description": "The id of the device",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastSeen": {
          "canBeNull": false,
          "description": "Last time the device has been seen on the provisionning servers",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "networkInterfaces": {
          "canBeNull": false,
          "description": "Network interfaces of the device",
          "fullType": "overTheBox.DeviceInterface[]",
          "readOnly": true,
          "required": false,
          "type": "overTheBox.DeviceInterface[]"
        },
        "publicIp": {
          "canBeNull": false,
          "description": "The public IP of the device",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "systemVersion": {
          "canBeNull": false,
          "description": "System version of the device",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "description": "Version of the device",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "overTheBox.DeviceAction": {
      "description": "Device action",
      "id": "DeviceAction",
      "namespace": "overTheBox",
      "properties": {
        "actionId": {
          "canBeNull": false,
          "description": "The id of the action",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Date of creation of the action",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "details": {
          "canBeNull": false,
          "description": "The details of the action",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "The name of the action",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "The status of the action",
          "fullType": "overTheBox.ActionStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overTheBox.ActionStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Date of execution of the action",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Last time the action was updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "overTheBox.DeviceForRegistration": {
      "description": "A device for registration",
      "id": "DeviceForRegistration",
      "namespace": "overTheBox",
      "properties": {
        "activated": {
          "canBeNull": false,
          "description": "Whether or not this device is actived",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deviceId": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastSeen": {
          "canBeNull": false,
          "description": "The last time this device was seen on the provisionning servers",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "overTheBox.DeviceInterface": {
      "description": "Infos about a network interface",
      "id": "DeviceInterface",
      "namespace": "overTheBox",
      "properties": {
        "device": {
          "canBeNull": true,
          "description": "Device of the interface",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "dnsServers": {
          "canBeNull": true,
          "description": "The DNS servers of this interface",
          "readOnly": false,
          "required": false,
          "type": "ip[]"
        },
        "gateway": {
          "canBeNull": true,
          "description": "Gateway of the interface",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "ip": {
          "canBeNull": true,
          "description": "IP of the interface",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "multipathStatus": {
          "canBeNull": false,
          "description": "Status of MPTCP on this interface",
          "readOnly": false,
          "required": false,
          "type": "overTheBox.MultipathStatusEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the interface",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "netmask": {
          "canBeNull": true,
          "description": "Netmask of the interface",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "publicIp": {
          "canBeNull": true,
          "description": "Public IP of the interface",
          "readOnly": false,
          "required": false,
          "type": "ip"
        }
      }
    },
    "overTheBox.GraphEndpoint": {
      "description": "Parameters required to query metrics from OpenTSDB",
      "id": "GraphEndpoint",
      "namespace": "overTheBox",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "The OpenTSDB host",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "readToken": {
          "canBeNull": false,
          "description": "A read-only token",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "readTokenID": {
          "canBeNull": false,
          "description": "The read-only token ID",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "overTheBox.MultipathStatusEnum": {
      "description": "Status of a MPTCP Interface.",
      "enum": [
        "backup",
        "handover",
        "master",
        "off",
        "on"
      ],
      "enumType": "string",
      "id": "MultipathStatusEnum",
      "namespace": "overTheBox"
    },
    "overTheBox.RemoteAccess": {
      "description": "If authorized, a remote access will expose a port, allowing an access to the device remotely",
      "id": "RemoteAccess",
      "namespace": "overTheBox",
      "properties": {
        "accepted": {
          "canBeNull": false,
          "description": "If the remote access was accepted by the remote user",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "askDate": {
          "canBeNull": false,
          "description": "The date of the remote access demand",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "authorizedBy": {
          "canBeNull": true,
          "description": "The user that authorized the remote access",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "connectionInfos": {
          "canBeNull": false,
          "description": "All the infos needed to connect yourself to your OTB",
          "fullType": "overTheBox.RemoteAccessConnectionInfos",
          "readOnly": true,
          "required": false,
          "type": "overTheBox.RemoteAccessConnectionInfos"
        },
        "expirationDate": {
          "canBeNull": false,
          "description": "When the remote access will be automatically deleted",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "exposedPort": {
          "canBeNull": false,
          "description": "The device's port which will be exposed",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "remoteAccessId": {
          "canBeNull": false,
          "description": "The id of the remote access",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "remoteUserInfos": {
          "canBeNull": false,
          "description": "Infos about the remote user",
          "fullType": "overTheBox.RemoteAccessUserInfos",
          "readOnly": true,
          "required": false,
          "type": "overTheBox.RemoteAccessUserInfos"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the remote access",
          "fullType": "overTheBox.RemoteAccessStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overTheBox.RemoteAccessStatusEnum"
        }
      }
    },
    "overTheBox.RemoteAccessConnectionInfos": {
      "description": "All the infos needed to connect yourself to your OTB",
      "id": "RemoteAccessConnectionInfos",
      "namespace": "overTheBox",
      "properties": {
        "ip": {
          "canBeNull": true,
          "description": "IP to connect to when accessing the device remotely",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "port": {
          "canBeNull": true,
          "description": "Port to connect to when accessing the device remotely",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "overTheBox.RemoteAccessStatusEnum": {
      "description": "Status of the remote access.",
      "enum": [
        "active",
        "creating",
        "deleted",
        "deleting",
        "pendingValidation",
        "toDelete"
      ],
      "enumType": "string",
      "id": "RemoteAccessStatusEnum",
      "namespace": "overTheBox"
    },
    "overTheBox.RemoteAccessUserInfos": {
      "description": "Infos about the remote user",
      "id": "RemoteAccessUserInfos",
      "namespace": "overTheBox",
      "properties": {
        "ip": {
          "canBeNull": false,
          "description": "IP from which the remote access will be allowed",
          "readOnly": false,
          "required": false,
          "type": "ipBlock"
        },
        "publicKey": {
          "canBeNull": true,
          "description": "The public key authorized on the device (for SSH purpose)",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "user": {
          "canBeNull": false,
          "description": "The user that will access the device remotely",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "overTheBox.Service": {
      "description": "Service",
      "id": "Service",
      "namespace": "overTheBox",
      "properties": {
        "SOCKSProxyEnabled": {
          "canBeNull": false,
          "description": "If the socks proxy is enabled",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "autoMTU": {
          "canBeNull": false,
          "description": "The status of the autoMTU",
          "fullType": "overTheBox.AvailableStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overTheBox.AvailableStatusEnum"
        },
        "configurationMode": {
          "canBeNull": false,
          "description": "Configuration mode of the service",
          "fullType": "overTheBox.ServiceConfigurationModeEnum",
          "readOnly": true,
          "required": false,
          "type": "overTheBox.ServiceConfigurationModeEnum"
        },
        "customerDescription": {
          "canBeNull": true,
          "description": "Editable field for customer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "graphEndpoint": {
          "canBeNull": true,
          "description": "Parameters needed to fetch metrics",
          "fullType": "overTheBox.GraphEndpoint",
          "readOnly": true,
          "required": false,
          "type": "overTheBox.GraphEndpoint"
        },
        "releaseChannel": {
          "canBeNull": false,
          "description": "Release channel of the service",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "The name of the service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "The status of the service",
          "fullType": "overTheBox.ServiceStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overTheBox.ServiceStatusEnum"
        },
        "tunnelMode": {
          "canBeNull": false,
          "description": "The tunnel mode of the service",
          "fullType": "overTheBox.TunnelModeEnum",
          "readOnly": true,
          "required": false,
          "type": "overTheBox.TunnelModeEnum"
        }
      }
    },
    "overTheBox.ServiceConfigurationModeEnum": {
      "description": "Configuration mode of the service",
      "enum": [
        "autoconfigure",
        "local"
      ],
      "enumType": "string",
      "id": "ServiceConfigurationModeEnum",
      "namespace": "overTheBox"
    },
    "overTheBox.ServiceStatusEnum": {
      "description": "Status of the service.",
      "enum": [
        "active",
        "creating",
        "deleted",
        "suspended",
        "toCreate",
        "toDelete"
      ],
      "enumType": "string",
      "id": "ServiceStatusEnum",
      "namespace": "overTheBox"
    },
    "overTheBox.Task": {
      "description": "Task",
      "id": "Task",
      "namespace": "overTheBox",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "The name of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "The status of the task",
          "fullType": "overTheBox.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overTheBox.TaskStatusEnum"
        },
        "taskId": {
          "canBeNull": false,
          "description": "The id of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "overTheBox.TaskStatusEnum": {
      "description": "Status of a task.",
      "enum": [
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "overTheBox"
    },
    "overTheBox.TemporaryLogsLink": {
      "description": "Temporary url informations",
      "id": "TemporaryLogsLink",
      "namespace": "overTheBox",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Temporary url expiration date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "Temporary url",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "overTheBox.TunnelModeEnum": {
      "description": "Tunnel mode of the service.",
      "enum": [
        "glorytun",
        "glorytun_hybrid",
        "glorytun_mud"
      ],
      "enumType": "string",
      "id": "TunnelModeEnum",
      "namespace": "overTheBox"
    },
    "overthebox.configuration.StatusEnum": {
      "description": "Status of the configuration",
      "enum": [
        "applying",
        "ok",
        "problem",
        "to_apply"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "overthebox.configuration"
    },
    "overthebox.configuration.dhcp.Config": {
      "description": "DHCP configuration",
      "id": "Config",
      "namespace": "overthebox.configuration.dhcp",
      "properties": {
        "configuration": {
          "canBeNull": false,
          "description": "DHCP configuration",
          "fullType": "overthebox.configuration.types.dhcp.Config",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.types.dhcp.Config"
        },
        "id": {
          "canBeNull": false,
          "description": "Identifier of the configuration",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "priority": {
          "canBeNull": false,
          "description": "Priority of application",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the configuration on the device",
          "fullType": "overthebox.configuration.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overthebox.configuration.StatusEnum"
        }
      }
    },
    "overthebox.configuration.dhcp.StaticLease": {
      "description": "DHCP static lease",
      "id": "StaticLease",
      "namespace": "overthebox.configuration.dhcp",
      "properties": {
        "configuration": {
          "canBeNull": false,
          "description": "DHCP static lease",
          "fullType": "overthebox.configuration.types.dhcp.StaticLease",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.types.dhcp.StaticLease"
        },
        "id": {
          "canBeNull": false,
          "description": "Identifier of the configuration",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "priority": {
          "canBeNull": false,
          "description": "Priority of application",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the configuration on the device",
          "fullType": "overthebox.configuration.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overthebox.configuration.StatusEnum"
        }
      }
    },
    "overthebox.configuration.dns.LocalDomain": {
      "description": "DNS local domain",
      "id": "LocalDomain",
      "namespace": "overthebox.configuration.dns",
      "properties": {
        "configuration": {
          "canBeNull": false,
          "description": "DNS local domain",
          "fullType": "overthebox.configuration.types.dns.LocalDomain",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.types.dns.LocalDomain"
        },
        "id": {
          "canBeNull": false,
          "description": "Identifier of the configuration",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "priority": {
          "canBeNull": false,
          "description": "Priority of application",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the configuration on the device",
          "fullType": "overthebox.configuration.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overthebox.configuration.StatusEnum"
        }
      }
    },
    "overthebox.configuration.dns.Nameserver": {
      "description": "DNS nameserver",
      "id": "Nameserver",
      "namespace": "overthebox.configuration.dns",
      "properties": {
        "configuration": {
          "canBeNull": false,
          "description": "DNS nameserver",
          "fullType": "overthebox.configuration.types.dns.Nameserver",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.types.dns.Nameserver"
        },
        "id": {
          "canBeNull": false,
          "description": "Identifier of the configuration",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "priority": {
          "canBeNull": false,
          "description": "Priority of application",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the configuration on the device",
          "fullType": "overthebox.configuration.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overthebox.configuration.StatusEnum"
        }
      }
    },
    "overthebox.configuration.firewall.ProtocolEnum": {
      "description": "Protocol family to match",
      "enum": [
        "ah",
        "all",
        "ax.25",
        "dccp",
        "ddp",
        "egp",
        "eigrp",
        "encap",
        "esp",
        "etherip",
        "fc",
        "ggp",
        "gre",
        "hmp",
        "hopopt",
        "icmp",
        "idpr-cmtp",
        "idrp",
        "igmp",
        "igp",
        "ip",
        "ip-encap",
        "ipcomp",
        "ipip",
        "ipsec-ah",
        "ipsec-esp",
        "ipv6",
        "ipv6-frag",
        "ipv6-icmp",
        "ipv6-nonxt",
        "ipv6-opts",
        "ipv6-route",
        "isis",
        "iso-tp4",
        "l2tp",
        "ospfigp",
        "pim",
        "pup",
        "rdp",
        "rspf",
        "rsvp",
        "sctp",
        "skip",
        "st",
        "tcp",
        "tcpudp",
        "udp",
        "udplite",
        "vmtp",
        "vrrp",
        "xns-idp",
        "xtp"
      ],
      "enumType": "string",
      "id": "ProtocolEnum",
      "namespace": "overthebox.configuration.firewall"
    },
    "overthebox.configuration.firewall.Redirect": {
      "description": "Firewall rule",
      "id": "Redirect",
      "namespace": "overthebox.configuration.firewall",
      "properties": {
        "configuration": {
          "canBeNull": false,
          "description": "Firewall redirect rule",
          "fullType": "overthebox.configuration.types.firewall.Redirect",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.types.firewall.Redirect"
        },
        "id": {
          "canBeNull": false,
          "description": "Identifier of the configuration",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "priority": {
          "canBeNull": false,
          "description": "Priority",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the configuration on the device",
          "fullType": "overthebox.configuration.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overthebox.configuration.StatusEnum"
        }
      }
    },
    "overthebox.configuration.firewall.Rule": {
      "description": "Firewall rule",
      "id": "Rule",
      "namespace": "overthebox.configuration.firewall",
      "properties": {
        "configuration": {
          "canBeNull": false,
          "description": "Firewall rule",
          "fullType": "overthebox.configuration.types.firewall.Rule",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.types.firewall.Rule"
        },
        "id": {
          "canBeNull": false,
          "description": "Identifier of the configuration",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "priority": {
          "canBeNull": false,
          "description": "Priority",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the configuration on the device",
          "fullType": "overthebox.configuration.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overthebox.configuration.StatusEnum"
        }
      }
    },
    "overthebox.configuration.firewall.redirect.TargetEnum": {
      "description": "Redirection NAT target",
      "enum": [
        "DNAT",
        "SNAT"
      ],
      "enumType": "string",
      "id": "TargetEnum",
      "namespace": "overthebox.configuration.firewall.redirect"
    },
    "overthebox.configuration.firewall.rule.FamilyEnum": {
      "description": "Protocol family to match",
      "enum": [
        "any",
        "ipv4",
        "ipv6"
      ],
      "enumType": "string",
      "id": "FamilyEnum",
      "namespace": "overthebox.configuration.firewall.rule"
    },
    "overthebox.configuration.firewall.rule.TargetEnum": {
      "description": "Target action",
      "enum": [
        "ACCEPT",
        "DROP",
        "MARK",
        "NOTRACK",
        "REJECT"
      ],
      "enumType": "string",
      "id": "TargetEnum",
      "namespace": "overthebox.configuration.firewall.rule"
    },
    "overthebox.configuration.network.Interface": {
      "description": "Network interface",
      "id": "Interface",
      "namespace": "overthebox.configuration.network",
      "properties": {
        "configuration": {
          "canBeNull": false,
          "description": "Network interface",
          "fullType": "overthebox.configuration.types.network.Interface",
          "readOnly": false,
          "required": true,
          "type": "overthebox.configuration.types.network.Interface"
        },
        "id": {
          "canBeNull": false,
          "description": "Identifier of the configuration",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "priority": {
          "canBeNull": false,
          "description": "Priority of application",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the configuration on the device",
          "fullType": "overthebox.configuration.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "overthebox.configuration.StatusEnum"
        }
      }
    },
    "overthebox.configuration.network.interface.MultipathEnum": {
      "description": "Multipath mode",
      "enum": [
        "backup",
        "handover",
        "master",
        "off",
        "on"
      ],
      "enumType": "string",
      "id": "MultipathEnum",
      "namespace": "overthebox.configuration.network.interface"
    },
    "overthebox.configuration.network.interface.ProtoEnum": {
      "description": "IP allocation protocol of the network interface",
      "enum": [
        "dhcp",
        "dhcpv6",
        "static"
      ],
      "enumType": "string",
      "id": "ProtoEnum",
      "namespace": "overthebox.configuration.network.interface"
    },
    "overthebox.configuration.network.interface.TypeEnum": {
      "description": "Type of the network interface",
      "enum": [
        "bridge",
        "inet",
        "inet6"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "overthebox.configuration.network.interface"
    },
    "overthebox.configuration.types.dhcp.Config": {
      "description": "DHCP configuration",
      "id": "Config",
      "namespace": "overthebox.configuration.types.dhcp",
      "properties": {
        "interface": {
          "canBeNull": false,
          "description": "Name of the interface to apply the DHCP configuration",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "leaseDuration": {
          "canBeNull": false,
          "description": "Duration of the lease in seconds",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "offset": {
          "canBeNull": false,
          "description": "Offset from the network address for the first IP of the pool",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "poolSize": {
          "canBeNull": false,
          "description": "Number of IPs in the pool",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "overthebox.configuration.types.dhcp.StaticLease": {
      "description": "DHCP static lease",
      "id": "StaticLease",
      "namespace": "overthebox.configuration.types.dhcp",
      "properties": {
        "hostname": {
          "canBeNull": false,
          "description": "Hostname of the device",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "IP address to associate",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        },
        "mac": {
          "canBeNull": false,
          "description": "Mac adddress of the device",
          "fullType": "macAddress",
          "readOnly": false,
          "required": true,
          "type": "macAddress"
        }
      }
    },
    "overthebox.configuration.types.dns.LocalDomain": {
      "description": "DNS local domain",
      "id": "LocalDomain",
      "namespace": "overthebox.configuration.types.dns",
      "properties": {
        "hostname": {
          "canBeNull": false,
          "description": "Hostname",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "IP address associated with the hostname",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        }
      }
    },
    "overthebox.configuration.types.dns.Nameserver": {
      "description": "DNS nameserver",
      "id": "Nameserver",
      "namespace": "overthebox.configuration.types.dns",
      "properties": {
        "server": {
          "canBeNull": false,
          "description": "IP of the DNS nameserver",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        }
      }
    },
    "overthebox.configuration.types.firewall.Redirect": {
      "description": "Firewall redirect",
      "id": "Redirect",
      "namespace": "overthebox.configuration.types.firewall",
      "properties": {
        "destinationIp": {
          "canBeNull": true,
          "description": "Destination IP",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "destinationPort": {
          "canBeNull": true,
          "description": "Destination port(s) (single value or range separated by - )",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "destinationZone": {
          "canBeNull": true,
          "description": "Destination zone",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "protocol": {
          "canBeNull": true,
          "description": "Protocol",
          "fullType": "overthebox.configuration.firewall.ProtocolEnum",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.firewall.ProtocolEnum"
        },
        "sourceDestinationIp": {
          "canBeNull": true,
          "description": "Source destination IP",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "sourceDestinationPort": {
          "canBeNull": true,
          "description": "Source destination port(s) (single value or range separated by - )",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "sourceIp": {
          "canBeNull": true,
          "description": "Source IP",
          "fullType": "ipBlock",
          "readOnly": false,
          "required": false,
          "type": "ipBlock"
        },
        "sourcePort": {
          "canBeNull": true,
          "description": "Source port",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "sourceZone": {
          "canBeNull": false,
          "description": "Source zone",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "target": {
          "canBeNull": true,
          "description": "Target",
          "fullType": "overthebox.configuration.firewall.redirect.TargetEnum",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.firewall.redirect.TargetEnum"
        }
      }
    },
    "overthebox.configuration.types.firewall.Rule": {
      "description": "Firewall rule",
      "id": "Rule",
      "namespace": "overthebox.configuration.types.firewall",
      "properties": {
        "destinationIp": {
          "canBeNull": true,
          "description": "Destination IP",
          "fullType": "ipBlock",
          "readOnly": false,
          "required": false,
          "type": "ipBlock"
        },
        "destinationPort": {
          "canBeNull": true,
          "description": "Destination port(s) (single value or range separated by - )",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "destinationZone": {
          "canBeNull": true,
          "description": "Destination zone",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "family": {
          "canBeNull": true,
          "description": "IP family",
          "fullType": "overthebox.configuration.firewall.rule.FamilyEnum",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.firewall.rule.FamilyEnum"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of the rule",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "protocol": {
          "canBeNull": true,
          "description": "Protocol to match",
          "fullType": "overthebox.configuration.firewall.ProtocolEnum",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.firewall.ProtocolEnum"
        },
        "sourceIp": {
          "canBeNull": true,
          "description": "Source IP",
          "fullType": "ipBlock",
          "readOnly": false,
          "required": false,
          "type": "ipBlock"
        },
        "sourcePort": {
          "canBeNull": true,
          "description": "Source port(s) (single value or range separated by - )",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "sourceZone": {
          "canBeNull": false,
          "description": "Source zone",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "description": "Target",
          "fullType": "overthebox.configuration.firewall.rule.TargetEnum",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.firewall.rule.TargetEnum"
        }
      }
    },
    "overthebox.configuration.types.network.Interface": {
      "description": "Network interface",
      "id": "Interface",
      "namespace": "overthebox.configuration.types.network",
      "properties": {
        "gateway": {
          "canBeNull": true,
          "description": "IP address of the gateway",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "ifname": {
          "canBeNull": false,
          "description": "Name of the physical interface",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "interfaceName": {
          "canBeNull": false,
          "description": "Name given to the new interface",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "ip": {
          "canBeNull": true,
          "description": "IP address of the network",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "ipv6": {
          "canBeNull": true,
          "description": "Is an IPV6 interface",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "mtu": {
          "canBeNull": true,
          "description": "MTU of the network",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "multipath": {
          "canBeNull": true,
          "description": "Use the interface in multipath",
          "fullType": "overthebox.configuration.network.interface.MultipathEnum",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.network.interface.MultipathEnum"
        },
        "netmask": {
          "canBeNull": true,
          "description": "Netmask of the network",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "protocol": {
          "canBeNull": true,
          "description": "Protocol for IP allocation",
          "fullType": "overthebox.configuration.network.interface.ProtoEnum",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.network.interface.ProtoEnum"
        },
        "routingTable": {
          "canBeNull": true,
          "description": "Routing table used by the network interface",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of the network interface",
          "fullType": "overthebox.configuration.network.interface.TypeEnum",
          "readOnly": false,
          "required": false,
          "type": "overthebox.configuration.network.interface.TypeEnum"
        }
      }
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
  "resourcePath": "/overTheBox"
}