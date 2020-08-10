import {Schema} from '../../src/schema';

export const schema: Schema = {
  "basePath": "https://ca.api.kimsufi.com/1.0",
  "resourcePath": "/me",
  "apis": [
    {
      "description": "A group linked to this account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "nichandle.Authentication.Group",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "nichandle.Authentication.Group",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "group",
              "dataType": "string",
              "fullType": "string",
              "description": "Group's name",
              "required": true,
              "paramType": "path"
            }
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "description": "Group's name",
              "fullType": "string",
              "dataType": "string",
              "name": "group"
            }
          ],
          "responseFullType": "void",
          "description": "Delete this object",
          "httpMethod": "DELETE",
          "resellerOnly": false,
          "responseType": "void",
          "noAuthentication": false
        },
        {
          "httpMethod": "PUT",
          "description": "Alter a group",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "group",
              "dataType": "string",
              "fullType": "string",
              "description": "Group's name",
              "required": true,
              "paramType": "path"
            },
            {
              "fullType": "string",
              "description": "Group's description",
              "required": false,
              "paramType": "body",
              "name": "description",
              "dataType": "string"
            },
            {
              "dataType": "nichandle.Authentication.RoleEnum",
              "name": "role",
              "paramType": "body",
              "required": false,
              "description": "Group's role",
              "fullType": "nichandle.Authentication.RoleEnum"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/identity/group/{group}"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [],
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "description": "Retrieve all groups of this account",
          "responseType": "string[]",
          "noAuthentication": false
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "fullType": "string",
              "description": "Group's name",
              "required": true,
              "paramType": "body",
              "name": "name",
              "dataType": "string"
            },
            {
              "fullType": "string",
              "description": "Group's description",
              "required": false,
              "paramType": "body",
              "name": "description",
              "dataType": "string"
            },
            {
              "dataType": "nichandle.Authentication.RoleEnum",
              "name": "role",
              "paramType": "body",
              "required": false,
              "description": "Group's Role",
              "fullType": "nichandle.Authentication.RoleEnum"
            }
          ],
          "resellerOnly": false,
          "description": "Create a new group",
          "responseFullType": "nichandle.Authentication.Group",
          "httpMethod": "POST",
          "responseType": "nichandle.Authentication.Group",
          "noAuthentication": false
        }
      ],
      "description": "Groups linked to this account",
      "path": "/me/identity/group"
    },
    {
      "description": "A user linked to this account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "user",
              "dataType": "string",
              "fullType": "string",
              "description": "User's login",
              "required": true,
              "paramType": "path"
            }
          ],
          "responseFullType": "void",
          "httpMethod": "POST",
          "description": "Disable this user",
          "resellerOnly": false
        }
      ],
      "path": "/me/identity/user/{user}/disable"
    },
    {
      "path": "/me/identity/user/{user}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "nichandle.User",
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "nichandle.User",
          "parameters": [
            {
              "fullType": "string",
              "description": "User's login",
              "required": true,
              "paramType": "path",
              "name": "user",
              "dataType": "string"
            }
          ]
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "description": "Delete this object",
          "httpMethod": "DELETE",
          "responseFullType": "void",
          "parameters": [
            {
              "dataType": "string",
              "name": "user",
              "paramType": "path",
              "required": true,
              "description": "User's login",
              "fullType": "string"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "parameters": [
            {
              "dataType": "string",
              "name": "user",
              "paramType": "path",
              "required": true,
              "description": "User's login",
              "fullType": "string"
            },
            {
              "name": "email",
              "dataType": "string",
              "fullType": "string",
              "description": "User's email",
              "required": false,
              "paramType": "body"
            },
            {
              "dataType": "string",
              "name": "description",
              "paramType": "body",
              "required": false,
              "fullType": "string",
              "description": "User's description"
            },
            {
              "dataType": "string",
              "name": "group",
              "paramType": "body",
              "required": false,
              "fullType": "string",
              "description": "User's group"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "PUT",
          "description": "Alter a user",
          "responseFullType": "void",
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "A user linked to this account"
    },
    {
      "description": "A user linked to this account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "description": "Enable this user",
          "responseFullType": "void",
          "httpMethod": "POST",
          "parameters": [
            {
              "fullType": "string",
              "description": "User's login",
              "required": true,
              "paramType": "path",
              "name": "user",
              "dataType": "string"
            }
          ]
        }
      ],
      "path": "/me/identity/user/{user}/enable"
    },
    {
      "path": "/me/identity/user",
      "operations": [
        {
          "responseType": "string[]",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Retrieve all users of this account",
          "responseFullType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "resellerOnly": false,
          "httpMethod": "POST",
          "description": "Create a new user",
          "responseFullType": "void",
          "parameters": [
            {
              "description": "User's login",
              "fullType": "string",
              "required": true,
              "paramType": "body",
              "name": "login",
              "dataType": "string"
            },
            {
              "paramType": "body",
              "required": false,
              "fullType": "string",
              "description": "User's description",
              "dataType": "string",
              "name": "description"
            },
            {
              "description": "User's email",
              "fullType": "string",
              "required": true,
              "paramType": "body",
              "name": "email",
              "dataType": "string"
            },
            {
              "paramType": "body",
              "required": true,
              "fullType": "password",
              "description": "User's password",
              "dataType": "password",
              "name": "password"
            },
            {
              "name": "group",
              "dataType": "string",
              "fullType": "string",
              "description": "User's group",
              "required": false,
              "paramType": "body"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Users linked to this account"
    },
    {
      "path": "/me/certificates",
      "operations": [
        {
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "fullType": "string",
              "description": "Certificate definition name",
              "required": false,
              "paramType": "query"
            }
          ],
          "description": "Get all certificates of the account",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "resellerOnly": false,
          "responseType": "string[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Get all certificates of the account"
    },
    {
      "path": "/me/fidelityAccount/creditOrder",
      "description": "creditOrder operations",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "billing.Order",
          "description": "Generate an order that can be paid in order to credit the fidelity account",
          "responseFullType": "billing.Order",
          "httpMethod": "POST",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "body",
              "required": true,
              "description": "The amount of points you want to credit your fidelity account of",
              "fullType": "long",
              "dataType": "long",
              "name": "amount"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "description": "Balance of the fidelity account",
      "operations": [
        {
          "responseType": "billing.FidelityAccount",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "billing.FidelityAccount",
          "description": "Get this object properties",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "name": null,
              "dataType": "billing.FidelityAccount",
              "fullType": "billing.FidelityAccount",
              "description": "New object properties",
              "required": true,
              "paramType": "body"
            }
          ],
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "responseFullType": "void",
          "resellerOnly": false
        }
      ],
      "path": "/me/fidelityAccount"
    },
    {
      "path": "/me/fidelityAccount/movements",
      "description": "List the billing.FidelityMovement objects",
      "operations": [
        {
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "date.from",
              "dataType": "datetime",
              "fullType": "datetime",
              "description": "Filter the value of date property (>=)",
              "required": false,
              "paramType": "query"
            },
            {
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "required": false,
              "paramType": "query",
              "name": "date.to",
              "dataType": "datetime"
            }
          ],
          "httpMethod": "GET",
          "description": "List of entries of the fidelity account",
          "responseFullType": "long[]",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/fidelityAccount/movements/{movementId}",
      "description": "Details about a fidelity account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "billing.FidelityMovement",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "description": null,
              "required": true,
              "paramType": "path",
              "name": "movementId",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "billing.FidelityMovement",
          "description": "Get this object properties"
        }
      ]
    },
    {
      "path": "/me/installationTemplate",
      "description": "List the dedicated.installationTemplate.Templates objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "string[]",
          "responseFullType": "string[]",
          "description": "Your customized operating system installation templates",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": []
        },
        {
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "baseTemplateName",
              "dataType": "string",
              "fullType": "string",
              "description": "OVH template name yours will be based on, choose one among the list given by compatibleTemplates function",
              "required": true,
              "paramType": "body"
            },
            {
              "description": "Your template name",
              "fullType": "string",
              "required": true,
              "paramType": "body",
              "name": "name",
              "dataType": "string"
            },
            {
              "paramType": "body",
              "required": true,
              "description": null,
              "fullType": "dedicated.TemplateOsLanguageEnum",
              "dataType": "dedicated.TemplateOsLanguageEnum",
              "name": "defaultLanguage"
            }
          ],
          "description": "Create a template",
          "httpMethod": "POST",
          "responseFullType": "void",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "description": "This template name",
              "fullType": "string",
              "dataType": "string",
              "name": "templateName"
            }
          ],
          "description": "Check the integrity of this template",
          "httpMethod": "POST",
          "responseFullType": "void",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "checkIntegrity operations",
      "path": "/me/installationTemplate/{templateName}/checkIntegrity"
    },
    {
      "description": "List the dedicated.installationTemplate.hardwareRaid objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "string[]",
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Hardware RAIDs defined in this partitioning scheme",
          "responseFullType": "string[]",
          "parameters": [
            {
              "dataType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true,
              "description": "This template name",
              "fullType": "string"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "description": "name of this partitioning scheme",
              "fullType": "string",
              "required": true,
              "paramType": "path"
            }
          ]
        },
        {
          "parameters": [
            {
              "fullType": "long",
              "description": "Specifies the creation order of the hardware RAID",
              "required": true,
              "paramType": "body",
              "name": "step",
              "dataType": "long"
            },
            {
              "description": "Hardware RAID name",
              "fullType": "string",
              "required": true,
              "paramType": "body",
              "name": "name",
              "dataType": "string"
            },
            {
              "paramType": "body",
              "required": true,
              "fullType": "string[]",
              "description": "Disk list. Syntax is cX:dY for disks and [cX:dY, cX:dY] for groups. With X and Y resp. the controler id and the disk id.",
              "dataType": "string[]",
              "name": "disks"
            },
            {
              "description": "RAID mode",
              "fullType": "dedicated.TemplateOsHardwareRaidEnum",
              "required": true,
              "paramType": "body",
              "name": "mode",
              "dataType": "dedicated.TemplateOsHardwareRaidEnum"
            },
            {
              "fullType": "string",
              "description": "This template name",
              "required": true,
              "paramType": "path",
              "name": "templateName",
              "dataType": "string"
            },
            {
              "fullType": "string",
              "description": "name of this partitioning scheme",
              "required": true,
              "paramType": "path",
              "name": "schemeName",
              "dataType": "string"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "POST",
          "description": "Add an hardware RAID in this partitioning scheme",
          "responseFullType": "void",
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid"
    },
    {
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}",
      "description": "Hardware RAID defined in this partitioning scheme",
      "operations": [
        {
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "dedicated.installationTemplate.hardwareRaid",
          "parameters": [
            {
              "fullType": "string",
              "description": "This template name",
              "required": true,
              "paramType": "path",
              "name": "templateName",
              "dataType": "string"
            },
            {
              "fullType": "string",
              "description": "name of this partitioning scheme",
              "required": true,
              "paramType": "path",
              "name": "schemeName",
              "dataType": "string"
            },
            {
              "fullType": "string",
              "description": "Hardware RAID name",
              "required": true,
              "paramType": "path",
              "name": "name",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.installationTemplate.hardwareRaid",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseFullType": "void",
          "parameters": [
            {
              "dataType": "dedicated.installationTemplate.hardwareRaid",
              "name": null,
              "paramType": "body",
              "required": true,
              "description": "New object properties",
              "fullType": "dedicated.installationTemplate.hardwareRaid"
            },
            {
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "This template name",
              "dataType": "string",
              "name": "templateName"
            },
            {
              "description": "name of this partitioning scheme",
              "fullType": "string",
              "required": true,
              "paramType": "path",
              "name": "schemeName",
              "dataType": "string"
            },
            {
              "name": "name",
              "dataType": "string",
              "description": "Hardware RAID name",
              "fullType": "string",
              "required": true,
              "paramType": "path"
            }
          ]
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "responseFullType": "void",
          "httpMethod": "DELETE",
          "description": "Remove this RAID",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "fullType": "string",
              "description": "This template name",
              "required": true,
              "paramType": "path"
            },
            {
              "dataType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "name of this partitioning scheme"
            },
            {
              "description": "Hardware RAID name",
              "fullType": "string",
              "required": true,
              "paramType": "path",
              "name": "name",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition",
      "description": "List the dedicated.installationTemplate.templatePartitions objects",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "string[]",
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "description": "Partitions defined in this partitioning scheme",
          "parameters": [
            {
              "fullType": "string",
              "description": "This template name",
              "required": true,
              "paramType": "path",
              "name": "templateName",
              "dataType": "string"
            },
            {
              "dataType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "name of this partitioning scheme"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "POST",
          "description": "Add a partition in this partitioning scheme",
          "parameters": [
            {
              "dataType": "long",
              "name": "size",
              "paramType": "body",
              "required": true,
              "fullType": "long",
              "description": "size of partition in Mb, 0 => rest of the space"
            },
            {
              "dataType": "dedicated.TemplatePartitionTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true,
              "description": null,
              "fullType": "dedicated.TemplatePartitionTypeEnum"
            },
            {
              "name": "mountpoint",
              "dataType": "string",
              "description": "partition mount point",
              "fullType": "string",
              "required": true,
              "paramType": "body"
            },
            {
              "name": "volumeName",
              "dataType": "string",
              "description": "The volume name needed for proxmox distribution",
              "fullType": "string",
              "required": false,
              "paramType": "body"
            },
            {
              "paramType": "body",
              "required": false,
              "description": null,
              "fullType": "long",
              "dataType": "long",
              "name": "raid"
            },
            {
              "name": "filesystem",
              "dataType": "dedicated.TemplateOsFileSystemEnum",
              "description": "Partition filesytem",
              "fullType": "dedicated.TemplateOsFileSystemEnum",
              "required": true,
              "paramType": "body"
            },
            {
              "name": "step",
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "required": true,
              "paramType": "body"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "fullType": "string",
              "description": "name of this partitioning scheme",
              "required": true,
              "paramType": "path"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}",
      "operations": [
        {
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "name of this partitioning scheme",
              "dataType": "string",
              "name": "schemeName"
            },
            {
              "description": "partition mount point",
              "fullType": "string",
              "required": true,
              "paramType": "path",
              "name": "mountpoint",
              "dataType": "string"
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "dedicated.installationTemplate.templatePartitions",
          "resellerOnly": false,
          "responseType": "dedicated.installationTemplate.templatePartitions",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "dataType": "dedicated.installationTemplate.templatePartitions",
              "name": null,
              "paramType": "body",
              "required": true,
              "description": "New object properties",
              "fullType": "dedicated.installationTemplate.templatePartitions"
            },
            {
              "name": "templateName",
              "dataType": "string",
              "fullType": "string",
              "description": "This template name",
              "required": true,
              "paramType": "path"
            },
            {
              "fullType": "string",
              "description": "name of this partitioning scheme",
              "required": true,
              "paramType": "path",
              "name": "schemeName",
              "dataType": "string"
            },
            {
              "dataType": "string",
              "name": "mountpoint",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "partition mount point"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "responseFullType": "void",
          "responseType": "void",
          "noAuthentication": false
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "fullType": "string",
              "description": "This template name",
              "required": true,
              "paramType": "path",
              "name": "templateName",
              "dataType": "string"
            },
            {
              "description": "name of this partitioning scheme",
              "fullType": "string",
              "required": true,
              "paramType": "path",
              "name": "schemeName",
              "dataType": "string"
            },
            {
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "partition mount point",
              "dataType": "string",
              "name": "mountpoint"
            }
          ],
          "resellerOnly": false,
          "description": "remove this partition",
          "responseFullType": "void",
          "httpMethod": "DELETE",
          "responseType": "void",
          "noAuthentication": false
        }
      ],
      "description": " Partitions defined in this partitioning scheme"
    },
    {
      "operations": [
        {
          "responseFullType": "dedicated.installationTemplate.templatePartitioningSchemes",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "description": "This template name",
              "fullType": "string",
              "dataType": "string",
              "name": "templateName"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "fullType": "string",
              "description": "name of this partitioning scheme",
              "required": true,
              "paramType": "path"
            }
          ],
          "noAuthentication": false,
          "responseType": "dedicated.installationTemplate.templatePartitioningSchemes",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "name": null,
              "dataType": "dedicated.installationTemplate.templatePartitioningSchemes",
              "fullType": "dedicated.installationTemplate.templatePartitioningSchemes",
              "description": "New object properties",
              "required": true,
              "paramType": "body"
            },
            {
              "dataType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true,
              "description": "This template name",
              "fullType": "string"
            },
            {
              "name": "schemeName",
              "dataType": "string",
              "fullType": "string",
              "description": "name of this partitioning scheme",
              "required": true,
              "paramType": "path"
            }
          ],
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "responseFullType": "void",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "resellerOnly": false,
          "httpMethod": "DELETE",
          "description": "remove this scheme of partition",
          "responseFullType": "void",
          "parameters": [
            {
              "dataType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "This template name"
            },
            {
              "dataType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "name of this partitioning scheme"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Partitioning schemes available on this template",
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Partitioning schemes available on this template",
          "responseFullType": "string[]",
          "parameters": [
            {
              "dataType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true,
              "description": "This template name",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "string[]"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Add a scheme of partition",
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "long",
              "name": "priority",
              "paramType": "body",
              "required": true,
              "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)",
              "fullType": "long"
            },
            {
              "paramType": "body",
              "required": true,
              "description": "name of this partitioning scheme",
              "fullType": "string",
              "dataType": "string",
              "name": "name"
            },
            {
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "This template name",
              "dataType": "string",
              "name": "templateName"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the dedicated.installationTemplate.templatePartitioningSchemes objects",
      "path": "/me/installationTemplate/{templateName}/partitionScheme"
    },
    {
      "description": "Available installation templates",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "dedicated.installationTemplate.Templates",
          "resellerOnly": false,
          "responseFullType": "dedicated.installationTemplate.Templates",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [
            {
              "dataType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "This template name"
            }
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "void",
          "responseFullType": "void",
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "body",
              "required": true,
              "fullType": "dedicated.installationTemplate.Templates",
              "description": "New object properties",
              "dataType": "dedicated.installationTemplate.Templates",
              "name": null
            },
            {
              "dataType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "This template name"
            }
          ]
        },
        {
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "This template name",
              "fullType": "string",
              "required": true,
              "paramType": "path",
              "name": "templateName",
              "dataType": "string"
            }
          ],
          "resellerOnly": false,
          "description": "remove this template",
          "httpMethod": "DELETE",
          "responseFullType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/installationTemplate/{templateName}"
    },
    {
      "path": "/me/changeEmail",
      "description": "changeEmail operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "nichandle.emailChange.Task",
          "resellerOnly": false,
          "responseFullType": "nichandle.emailChange.Task",
          "description": "Initiate an email change procedure",
          "httpMethod": "POST",
          "parameters": [
            {
              "description": "New email to associate to your account",
              "fullType": "string",
              "required": true,
              "paramType": "body",
              "name": "newEmail",
              "dataType": "string"
            }
          ]
        }
      ]
    },
    {
      "path": "/me/mailingList/availableLists",
      "operations": [
        {
          "responseFullType": "string[]",
          "description": "List of mailing list you can subscribe",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [],
          "noAuthentication": false,
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "availableLists operations"
    },
    {
      "path": "/me/mailingList/subscribe",
      "description": "subscribe operations",
      "operations": [
        {
          "parameters": [
            {
              "dataType": "string",
              "name": "email",
              "paramType": "body",
              "required": true,
              "description": "Email you want to subscribe to",
              "fullType": "string"
            },
            {
              "paramType": "body",
              "required": true,
              "fullType": "string",
              "description": "Mailing list",
              "dataType": "string",
              "name": "mailingList"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseFullType": "void",
          "description": "Subscribe an email to a restricted mailing list",
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "description": "Customer public SSH key, can be used for rescue netboot or server access after reinstallation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "nichandle.sshKey",
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "nichandle.sshKey",
          "parameters": [
            {
              "dataType": "string",
              "name": "keyName",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": "Name of this public SSH key"
            }
          ]
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "responseFullType": "void",
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "body",
              "required": true,
              "fullType": "nichandle.sshKey",
              "description": "New object properties",
              "dataType": "nichandle.sshKey",
              "name": null
            },
            {
              "fullType": "string",
              "description": "Name of this public SSH key",
              "required": true,
              "paramType": "path",
              "name": "keyName",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "description": "Remove this public SSH key",
          "httpMethod": "DELETE",
          "responseFullType": "void",
          "parameters": [
            {
              "fullType": "string",
              "description": "Name of this public SSH key",
              "required": true,
              "paramType": "path",
              "name": "keyName",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/sshKey/{keyName}"
    },
    {
      "path": "/me/sshKey",
      "operations": [
        {
          "parameters": [],
          "description": "List of your public SSH keys",
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseType": "string[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "ASCII encoded public SSH key to add",
              "fullType": "string",
              "required": true,
              "paramType": "body",
              "name": "key",
              "dataType": "string"
            },
            {
              "name": "keyName",
              "dataType": "string",
              "fullType": "string",
              "description": "name of the new public SSH key",
              "required": true,
              "paramType": "body"
            }
          ],
          "resellerOnly": false,
          "description": "Add a new public SSH key",
          "httpMethod": "POST",
          "responseFullType": "void"
        }
      ],
      "description": "List the nichandle.sshKey objects"
    },
    {
      "path": "/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}",
      "description": "Information about a Withdrawal entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "billing.WithdrawalDetail",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "withdrawalId",
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "name": "withdrawalDetailId",
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "noAuthentication": false,
          "responseType": "billing.WithdrawalDetail"
        }
      ]
    },
    {
      "path": "/me/withdrawal/{withdrawalId}/details",
      "description": "List the billing.WithdrawalDetail objects",
      "operations": [
        {
          "resellerOnly": false,
          "description": "Give access to all entries of this withdrawal",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "parameters": [
            {
              "dataType": "string",
              "name": "withdrawalId",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": null
            }
          ],
          "noAuthentication": false,
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "billing.Withdrawal",
          "resellerOnly": false,
          "responseFullType": "billing.Withdrawal",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [
            {
              "fullType": "string",
              "description": null,
              "required": true,
              "paramType": "path",
              "name": "withdrawalId",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Details about a withdrawal",
      "path": "/me/withdrawal/{withdrawalId}"
    },
    {
      "path": "/me/withdrawal/{withdrawalId}/payment",
      "operations": [
        {
          "responseType": "billing.Payment",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "withdrawalId",
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "billing.Payment",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Details about a payment"
    },
    {
      "path": "/me/withdrawal",
      "operations": [
        {
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "List of all the withdrawals made from your prepaid account",
          "responseFullType": "string[]",
          "parameters": [
            {
              "description": "Filter the value of orderId property (=)",
              "fullType": "long",
              "required": false,
              "paramType": "query",
              "name": "orderId",
              "dataType": "long"
            },
            {
              "paramType": "query",
              "required": false,
              "fullType": "datetime",
              "description": "Filter the value of date property (>=)",
              "dataType": "datetime",
              "name": "date.from"
            },
            {
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "required": false,
              "paramType": "query",
              "name": "date.to",
              "dataType": "datetime"
            }
          ],
          "noAuthentication": false,
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the billing.Withdrawal objects"
    },
    {
      "path": "/me/paymentMean/deferredPaymentAccount/{id}",
      "description": "Deferred payment account info",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "billing.DeferredPaymentAccount",
          "responseFullType": "billing.DeferredPaymentAccount",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "fullType": "long",
              "description": null,
              "required": true,
              "paramType": "path"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "body",
              "required": true,
              "description": "New object properties",
              "fullType": "billing.DeferredPaymentAccount",
              "dataType": "billing.DeferredPaymentAccount",
              "name": null
            },
            {
              "name": "id",
              "dataType": "long",
              "fullType": "long",
              "description": null,
              "required": true,
              "paramType": "path"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean",
      "description": "chooseAsDefaultPaymentMean operations",
      "operations": [
        {
          "description": "Allow you to use deferred payment. Will cancel the previous choice.",
          "httpMethod": "POST",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "fullType": "long",
              "description": null,
              "dataType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "List of authorized deferred payment account for this customer",
          "responseFullType": "long[]",
          "parameters": [],
          "noAuthentication": false,
          "responseType": "long[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the billing.DeferredPaymentAccount objects",
      "path": "/me/paymentMean/deferredPaymentAccount"
    },
    {
      "path": "/me/paymentMean/bankAccount",
      "description": "List the billing.BankAccount objects",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "long[]",
          "resellerOnly": false,
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "description": "List of bank accounts",
          "parameters": [
            {
              "fullType": "billing.BankAccountStateEnum",
              "description": "Filter the value of state property (=)",
              "required": false,
              "paramType": "query",
              "name": "state",
              "dataType": "billing.BankAccountStateEnum"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "parameters": [
            {
              "name": "setDefault",
              "dataType": "boolean",
              "fullType": "boolean",
              "description": "Set as default payment mean once validated",
              "required": false,
              "paramType": "body"
            },
            {
              "dataType": "string",
              "name": "bic",
              "paramType": "body",
              "required": true,
              "fullType": "string",
              "description": "Account's BIC"
            },
            {
              "description": "Account owner's name",
              "fullType": "string",
              "required": true,
              "paramType": "body",
              "name": "ownerName",
              "dataType": "string"
            },
            {
              "paramType": "body",
              "required": true,
              "fullType": "string",
              "description": "Account's IBAN",
              "dataType": "string",
              "name": "iban"
            },
            {
              "fullType": "string",
              "description": "Account owner's address",
              "required": true,
              "paramType": "body",
              "name": "ownerAddress",
              "dataType": "string"
            },
            {
              "dataType": "string",
              "name": "description",
              "paramType": "body",
              "required": false,
              "description": "Custom description of this account",
              "fullType": "string"
            }
          ],
          "description": "Enable payment through a new account",
          "httpMethod": "POST",
          "responseFullType": "billing.PaymentMeanValidation",
          "resellerOnly": false,
          "responseType": "billing.PaymentMeanValidation",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "void",
          "responseFullType": "void",
          "description": "Choose this bank account as your default payment mean. Will cancel the previous choice.",
          "httpMethod": "POST",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "fullType": "long",
              "description": "Id of the object",
              "required": true,
              "paramType": "path"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "chooseAsDefaultPaymentMean operations",
      "path": "/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "path": "/me/paymentMean/bankAccount/{id}/challenge",
      "description": "challenge operations",
      "operations": [
        {
          "httpMethod": "POST",
          "description": "Challenge your bank account",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "challenge",
              "dataType": "string",
              "fullType": "string",
              "description": "Payload to answer the challenge",
              "required": true,
              "paramType": "body"
            },
            {
              "fullType": "long",
              "description": "Id of the object",
              "required": true,
              "paramType": "path",
              "name": "id",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/paymentMean/bankAccount/{id}",
      "description": "SEPA bank account info",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "billing.BankAccount",
          "resellerOnly": false,
          "responseFullType": "billing.BankAccount",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "parameters": [
            {
              "dataType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "description": "Id of the object",
              "fullType": "long"
            }
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "fullType": "billing.BankAccount",
              "description": "New object properties",
              "required": true,
              "paramType": "body",
              "name": null,
              "dataType": "billing.BankAccount"
            },
            {
              "fullType": "long",
              "description": "Id of the object",
              "required": true,
              "paramType": "path",
              "name": "id",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "PUT",
          "responseFullType": "void",
          "description": "Alter this object properties",
          "responseType": "void",
          "noAuthentication": false
        },
        {
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "description": "Id of the object",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ],
          "httpMethod": "DELETE",
          "description": "Disable payment through this account",
          "responseFullType": "void",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "dataType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "fullType": "long",
              "description": "Id of the object"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseFullType": "void",
          "description": "Choose this Paypal agreement as your default payment mean. Will cancel the previous choice.",
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "chooseAsDefaultPaymentMean operations",
      "path": "/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "dataType": "string",
              "name": "challenge",
              "paramType": "body",
              "required": true,
              "description": "Payload to answer the challenge",
              "fullType": "string"
            },
            {
              "name": "id",
              "dataType": "long",
              "fullType": "long",
              "description": "Id of the object",
              "required": true,
              "paramType": "path"
            }
          ],
          "resellerOnly": false,
          "description": "Challenge your bank account",
          "httpMethod": "POST",
          "responseFullType": "void",
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "challenge operations",
      "path": "/me/paymentMean/paypal/{id}/challenge"
    },
    {
      "path": "/me/paymentMean/paypal/{id}",
      "description": "Paypal account info",
      "operations": [
        {
          "parameters": [
            {
              "description": "Id of the object",
              "fullType": "long",
              "required": true,
              "paramType": "path",
              "name": "id",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "billing.Paypal",
          "responseType": "billing.Paypal",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "body",
              "required": true,
              "fullType": "billing.Paypal",
              "description": "New object properties",
              "dataType": "billing.Paypal",
              "name": null
            },
            {
              "fullType": "long",
              "description": "Id of the object",
              "required": true,
              "paramType": "path",
              "name": "id",
              "dataType": "long"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "resellerOnly": false,
          "description": "Disable payment through this PayPal account",
          "httpMethod": "DELETE",
          "responseFullType": "void",
          "parameters": [
            {
              "dataType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "description": "Id of the object",
              "fullType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "description": "List the billing.Paypal objects",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "long[]",
          "httpMethod": "GET",
          "description": "List of Paypal accounts usable for payments on this account",
          "responseFullType": "long[]",
          "resellerOnly": false,
          "parameters": [],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "noAuthentication": false,
          "responseType": "billing.PaymentMeanValidation",
          "resellerOnly": false,
          "responseFullType": "billing.PaymentMeanValidation",
          "httpMethod": "POST",
          "description": "Enable payment through a new PayPal account",
          "parameters": [
            {
              "dataType": "string",
              "name": "description",
              "paramType": "body",
              "required": false,
              "description": "Custom description of this account",
              "fullType": "string"
            },
            {
              "paramType": "body",
              "required": false,
              "fullType": "string",
              "description": "Callback URL where the customer will be redirected to after validation",
              "dataType": "string",
              "name": "returnUrl"
            },
            {
              "dataType": "boolean",
              "name": "setDefault",
              "paramType": "body",
              "required": false,
              "fullType": "boolean",
              "description": "Set as default payment mean once validated"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/paymentMean/paypal"
    },
    {
      "description": "List the billing.CreditCard objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [],
          "httpMethod": "GET",
          "description": "List of credit cards",
          "responseFullType": "long[]",
          "resellerOnly": false
        },
        {
          "noAuthentication": false,
          "responseType": "billing.PaymentMeanValidation",
          "resellerOnly": false,
          "responseFullType": "billing.PaymentMeanValidation",
          "httpMethod": "POST",
          "description": "Add a new credit card",
          "parameters": [
            {
              "fullType": "string",
              "description": "Callback URL where the customer will be redirected to after validation",
              "required": false,
              "paramType": "body",
              "name": "returnUrl",
              "dataType": "string"
            },
            {
              "description": "Custom description of this account",
              "fullType": "string",
              "required": false,
              "paramType": "body",
              "name": "description",
              "dataType": "string"
            },
            {
              "name": "setDefault",
              "dataType": "boolean",
              "description": "Set as default payment mean once validated",
              "fullType": "boolean",
              "required": false,
              "paramType": "body"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/paymentMean/creditCard"
    },
    {
      "path": "/me/paymentMean/creditCard/{id}/challenge",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "challenge",
              "dataType": "string",
              "fullType": "string",
              "description": "Payload to answer the challenge",
              "required": true,
              "paramType": "body"
            },
            {
              "description": "Id of the object",
              "fullType": "long",
              "required": true,
              "paramType": "path",
              "name": "id",
              "dataType": "long"
            }
          ],
          "description": "Challenge your bank account",
          "responseFullType": "void",
          "httpMethod": "POST",
          "resellerOnly": false
        }
      ],
      "description": "challenge operations"
    },
    {
      "path": "/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean",
      "operations": [
        {
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "description": "Id of the object",
              "fullType": "long"
            }
          ],
          "resellerOnly": false,
          "description": "Choose this credit card as your default payment mean. Will cancel the previous choice.",
          "responseFullType": "void",
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "chooseAsDefaultPaymentMean operations"
    },
    {
      "description": "Credit card informations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "billing.CreditCard",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "description": "Id of the object",
              "required": true,
              "paramType": "path",
              "name": "id",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "billing.CreditCard",
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "description": "New object properties",
              "fullType": "billing.CreditCard",
              "required": true,
              "paramType": "body",
              "name": null,
              "dataType": "billing.CreditCard"
            },
            {
              "paramType": "path",
              "required": true,
              "fullType": "long",
              "description": "Id of the object",
              "dataType": "long",
              "name": "id"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "responseFullType": "void",
          "responseType": "void",
          "noAuthentication": false
        },
        {
          "parameters": [
            {
              "dataType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "description": "Id of the object",
              "fullType": "long"
            }
          ],
          "resellerOnly": false,
          "description": "Disable payment through this credit card",
          "responseFullType": "void",
          "httpMethod": "DELETE",
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/paymentMean/creditCard/{id}"
    },
    {
      "description": "List the billing.OvhAccount objects",
      "operations": [
        {
          "parameters": [],
          "httpMethod": "GET",
          "description": "List of OVH accounts the logged account has",
          "responseFullType": "string[]",
          "resellerOnly": false,
          "responseType": "string[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/ovhAccount"
    },
    {
      "description": "retrieveMoney operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "paramType": "body",
              "required": true,
              "description": "A valid bank account",
              "fullType": "long",
              "dataType": "long",
              "name": "bankAccountId"
            },
            {
              "name": "amount",
              "dataType": "long",
              "description": "The amount in cents you want to transfer",
              "fullType": "long",
              "required": true,
              "paramType": "body"
            },
            {
              "name": "ovhAccountId",
              "dataType": "string",
              "fullType": "string",
              "description": null,
              "required": true,
              "paramType": "path"
            }
          ],
          "description": "Transfer money from ovhAccount to your bank account",
          "httpMethod": "POST",
          "responseFullType": "billing.Order",
          "resellerOnly": false,
          "responseType": "billing.Order",
          "noAuthentication": false
        }
      ],
      "path": "/me/ovhAccount/{ovhAccountId}/retrieveMoney"
    },
    {
      "path": "/me/ovhAccount/{ovhAccountId}/movements/{movementId}",
      "description": "Details about an OVH account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "billing.Movement",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": null,
              "dataType": "string",
              "name": "ovhAccountId"
            },
            {
              "fullType": "long",
              "description": null,
              "required": true,
              "paramType": "path",
              "name": "movementId",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "billing.Movement"
        }
      ]
    },
    {
      "path": "/me/ovhAccount/{ovhAccountId}/movements",
      "description": "List the billing.Movement objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "long[]",
          "description": "Details about an entry of the OVH account",
          "httpMethod": "GET",
          "parameters": [
            {
              "dataType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false,
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime"
            },
            {
              "name": "date.from",
              "dataType": "datetime",
              "fullType": "datetime",
              "description": "Filter the value of date property (>=)",
              "required": false,
              "paramType": "query"
            },
            {
              "dataType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": null
            }
          ],
          "noAuthentication": false,
          "responseType": "long[]"
        }
      ]
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "name": "amount",
              "dataType": "long",
              "fullType": "long",
              "description": "The amount in cents you want to credit your account of",
              "required": true,
              "paramType": "body"
            },
            {
              "description": null,
              "fullType": "string",
              "required": true,
              "paramType": "path",
              "name": "ovhAccountId",
              "dataType": "string"
            }
          ],
          "description": "Generate an order that can be paid in order to credit the OVH account",
          "httpMethod": "POST",
          "responseFullType": "billing.Order",
          "resellerOnly": false,
          "responseType": "billing.Order",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "creditOrder operations",
      "path": "/me/ovhAccount/{ovhAccountId}/creditOrder"
    },
    {
      "path": "/me/ovhAccount/{ovhAccountId}",
      "description": "Details about an OVH account",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "billing.OvhAccount",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "billing.OvhAccount",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": null,
              "dataType": "string",
              "name": "ovhAccountId"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "responseFullType": "void",
          "parameters": [
            {
              "dataType": "billing.OvhAccount",
              "name": null,
              "paramType": "body",
              "required": true,
              "fullType": "billing.OvhAccount",
              "description": "New object properties"
            },
            {
              "dataType": "string",
              "name": "ovhAccountId",
              "paramType": "path",
              "required": true,
              "fullType": "string",
              "description": null
            }
          ]
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "parameters": [
            {
              "dataType": "long",
              "name": "paymentMethodId",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "Payment method ID"
            }
          ],
          "description": "Get one payment method",
          "responseFullType": "me.payment.method.PaymentMethod",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseType": "me.payment.method.PaymentMethod",
          "noAuthentication": false
        },
        {
          "noAuthentication": false,
          "responseType": "billing.PaymentMethod",
          "description": "Edit payment method",
          "httpMethod": "PUT",
          "responseFullType": "billing.PaymentMethod",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "paymentMethodId",
              "dataType": "long",
              "description": "Payment method ID",
              "fullType": "long",
              "paramType": "path",
              "required": true
            },
            {
              "name": "default",
              "dataType": "boolean",
              "description": "Set this method like default",
              "fullType": "boolean",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "name": "description",
              "required": false,
              "paramType": "body",
              "description": "Customer personalized description",
              "fullType": "string"
            }
          ],
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        },
        {
          "noAuthentication": false,
          "responseType": "me.payment.method.PaymentMethod",
          "resellerOnly": false,
          "responseFullType": "me.payment.method.PaymentMethod",
          "httpMethod": "DELETE",
          "description": "Cancel one payment method",
          "parameters": [
            {
              "description": "Payment method ID",
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "paymentMethodId",
              "dataType": "long"
            }
          ],
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ],
      "description": "Manage payment method",
      "path": "/me/payment/method/{paymentMethodId}"
    },
    {
      "path": "/me/payment/method/{paymentMethodId}/finalize",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "resellerOnly": false,
          "httpMethod": "POST",
          "description": "Finalize one payment method registration",
          "responseFullType": "me.payment.method.PaymentMethod",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "Payment method ID",
              "fullType": "long",
              "dataType": "long",
              "name": "paymentMethodId"
            },
            {
              "dataType": "long",
              "name": "expirationMonth",
              "required": false,
              "paramType": "body",
              "description": "Expiration month",
              "fullType": "long"
            },
            {
              "name": "expirationYear",
              "dataType": "long",
              "fullType": "long",
              "description": "Expiration year",
              "paramType": "body",
              "required": false
            },
            {
              "required": false,
              "paramType": "body",
              "description": "Registration ID",
              "fullType": "string",
              "dataType": "string",
              "name": "registrationId"
            },
            {
              "name": "formSessionId",
              "dataType": "string",
              "description": "Form Session ID",
              "fullType": "string",
              "paramType": "body",
              "required": false
            }
          ],
          "noAuthentication": false,
          "responseType": "me.payment.method.PaymentMethod"
        }
      ],
      "description": "Finalize one payment method registration"
    },
    {
      "path": "/me/payment/method/{paymentMethodId}/challenge",
      "description": "Challenge your payment method",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "me.payment.method.PaymentMethod",
          "responseFullType": "me.payment.method.PaymentMethod",
          "httpMethod": "POST",
          "description": "Challenge one payment method",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "paymentMethodId",
              "required": true,
              "paramType": "path",
              "description": "Payment method ID",
              "fullType": "long"
            },
            {
              "name": "challenge",
              "dataType": "string",
              "fullType": "string",
              "description": "Challenge",
              "paramType": "body",
              "required": true
            }
          ],
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ]
    },
    {
      "path": "/me/payment/method",
      "description": "Manage payment method",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "long[]",
          "resellerOnly": false,
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "description": "Retrieve payment method ID list",
          "parameters": [
            {
              "required": false,
              "paramType": "query",
              "fullType": "me.payment.method.PaymentMethod.Status",
              "description": "Status",
              "dataType": "me.payment.method.PaymentMethod.Status",
              "name": "status"
            },
            {
              "fullType": "string",
              "description": "Payment method type",
              "paramType": "query",
              "required": false,
              "name": "paymentType",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Pay an order and register a new payment method if necessary",
          "httpMethod": "POST",
          "responseFullType": "me.payment.method.Register.ValidationResult",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "me.payment.method.CallbackUrl",
              "name": "callbackUrl",
              "required": true,
              "paramType": "body",
              "fullType": "me.payment.method.CallbackUrl",
              "description": "URL's necessary to register"
            },
            {
              "dataType": "boolean",
              "name": "default",
              "required": false,
              "paramType": "body",
              "fullType": "boolean",
              "description": "Is this payment method set as the default one"
            },
            {
              "description": "Customer personalized description",
              "fullType": "string",
              "paramType": "body",
              "required": false,
              "name": "description",
              "dataType": "string"
            },
            {
              "name": "orderId",
              "dataType": "long",
              "fullType": "long",
              "description": "The ID of one order to pay it",
              "paramType": "body",
              "required": false
            },
            {
              "description": "Payment type",
              "fullType": "string",
              "paramType": "body",
              "required": true,
              "name": "paymentType",
              "dataType": "string"
            },
            {
              "name": "register",
              "dataType": "boolean",
              "fullType": "boolean",
              "description": "Register this payment method if it's possible (by default it's false and do a oneshot transaction)",
              "paramType": "body",
              "required": false
            }
          ],
          "noAuthentication": false,
          "responseType": "me.payment.method.Register.ValidationResult"
        }
      ]
    },
    {
      "path": "/me/payment/transaction/{transactionId}",
      "description": "Manage payment method transaction",
      "operations": [
        {
          "responseType": "me.payment.method.Transaction",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "description": "Payment method transaction ID",
              "paramType": "path",
              "required": true,
              "name": "transactionId",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "description": "Get associated payment method transaction",
          "responseFullType": "me.payment.method.Transaction",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ]
    },
    {
      "path": "/me/payment/transaction",
      "description": "Retrieve payment method transaction ID list",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "paymentMethodId",
              "required": false,
              "paramType": "query",
              "description": "Payment method ID",
              "fullType": "long"
            },
            {
              "name": "status",
              "dataType": "me.payment.method.Transaction.Status",
              "fullType": "me.payment.method.Transaction.Status",
              "description": "Transaction status",
              "paramType": "query",
              "required": false
            }
          ],
          "description": "Retrieve associated payment method transaction ID list",
          "httpMethod": "GET",
          "responseFullType": "long[]",
          "resellerOnly": false
        }
      ]
    },
    {
      "path": "/me/payment/availableMethods",
      "description": "Available payment methods",
      "operations": [
        {
          "parameters": [],
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "me.payment.method.AvailablePaymentMethod[]",
          "description": "Retrieve available payment method",
          "responseType": "me.payment.method.AvailablePaymentMethod[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ]
    },
    {
      "description": "Email notification",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "nichandle.emailNotification",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "nichandle.emailNotification",
          "resellerOnly": false
        }
      ],
      "path": "/me/notification/email/history/{id}"
    },
    {
      "path": "/me/notification/email/history",
      "operations": [
        {
          "parameters": [],
          "resellerOnly": false,
          "description": "List of all your email notifications",
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "responseType": "long[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the nichandle.emailNotification objects"
    },
    {
      "operations": [
        {
          "responseType": "string[]",
          "noAuthentication": false,
          "parameters": [
            {
              "required": false,
              "paramType": "query",
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "dataType": "datetime",
              "name": "date.to"
            },
            {
              "dataType": "datetime",
              "name": "date.from",
              "required": false,
              "paramType": "query",
              "fullType": "datetime",
              "description": "Filter the value of date property (>=)"
            },
            {
              "required": false,
              "paramType": "query",
              "fullType": "long",
              "description": "Filter the value of orderId property (=)",
              "dataType": "long",
              "name": "orderId"
            }
          ],
          "resellerOnly": false,
          "description": "List of all the deposits made to your prepaid account or debt account",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the billing.Deposit objects",
      "path": "/me/deposit"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get invoices paid by this deposit",
          "responseFullType": "string[]",
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "depositId",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the billing.Bill objects",
      "path": "/me/deposit/{depositId}/paidBills"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/payment",
      "description": "Details about a payment",
      "operations": [
        {
          "responseFullType": "billing.Payment",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "fullType": "string",
              "description": null,
              "paramType": "path",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "string",
              "dataType": "string",
              "name": "billId"
            }
          ],
          "noAuthentication": false,
          "responseType": "billing.Payment",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "billing.Bill",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "depositId",
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "string"
            },
            {
              "dataType": "string",
              "name": "billId",
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "string"
            }
          ],
          "description": "Get this object properties",
          "responseFullType": "billing.Bill",
          "httpMethod": "GET",
          "resellerOnly": false
        }
      ],
      "description": "Details about a Bill",
      "path": "/me/deposit/{depositId}/paidBills/{billId}"
    },
    {
      "description": "pay operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "name": "billId",
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "string"
            }
          ],
          "description": "Create an order in order to pay this order's debt",
          "responseFullType": "billing.Order",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseType": "billing.Order",
          "noAuthentication": false
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/pay"
    },
    {
      "description": "State of a debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "debt.Debt",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "debt.Debt",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "depositId",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": null
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": null,
              "dataType": "string",
              "name": "billId"
            }
          ]
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt"
    },
    {
      "description": "List the debt.Operation objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "depositOrderId",
              "required": false,
              "paramType": "query",
              "description": "Filter the value of depositOrderId property (=)",
              "fullType": "long"
            },
            {
              "name": "depositId",
              "dataType": "string",
              "fullType": "string",
              "description": null,
              "paramType": "path",
              "required": true
            },
            {
              "fullType": "string",
              "description": null,
              "paramType": "path",
              "required": true,
              "name": "billId",
              "dataType": "string"
            }
          ],
          "description": "All operations related to these debts",
          "httpMethod": "GET",
          "responseFullType": "long[]",
          "resellerOnly": false
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "debt.Operation",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "depositId",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": null
            },
            {
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "string",
              "dataType": "string",
              "name": "billId"
            },
            {
              "name": "operationId",
              "dataType": "long",
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "debt.Operation"
        }
      ],
      "description": "Operation that happend on a debt"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject",
      "description": "associatedObject operations",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "debt.entry.AssociatedObject",
          "responseFullType": "debt.entry.AssociatedObject",
          "httpMethod": "GET",
          "description": "Return main data about the object related to this debt operation",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "fullType": "string",
              "description": null,
              "paramType": "path",
              "required": true
            },
            {
              "description": null,
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "billId",
              "dataType": "string"
            },
            {
              "name": "operationId",
              "dataType": "long",
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/details",
      "operations": [
        {
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "fullType": "string",
              "description": null,
              "paramType": "path",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "string",
              "dataType": "string",
              "name": "billId"
            }
          ],
          "description": "Give access to all entries of the bill",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "resellerOnly": false,
          "responseType": "string[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the billing.BillDetail objects"
    },
    {
      "description": "Information about a Bill entry",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "fullType": "string",
              "description": null,
              "paramType": "path",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": null,
              "dataType": "string",
              "name": "billId"
            },
            {
              "description": null,
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "billDetailId",
              "dataType": "string"
            }
          ],
          "description": "Get this object properties",
          "responseFullType": "billing.BillDetail",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseType": "billing.BillDetail",
          "noAuthentication": false
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}"
    },
    {
      "path": "/me/deposit/{depositId}/details",
      "description": "List the billing.DepositDetail objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "dataType": "string",
              "name": "depositId",
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "string"
            }
          ],
          "httpMethod": "GET",
          "description": "Give access to all entries of this deposit",
          "responseFullType": "string[]",
          "resellerOnly": false,
          "responseType": "string[]",
          "noAuthentication": false
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "string",
              "dataType": "string",
              "name": "depositId"
            },
            {
              "name": "depositDetailId",
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "description": "Get this object properties",
          "responseFullType": "billing.DepositDetail",
          "httpMethod": "GET",
          "responseType": "billing.DepositDetail",
          "noAuthentication": false
        }
      ],
      "description": "Information about a Deposit entry",
      "path": "/me/deposit/{depositId}/details/{depositDetailId}"
    },
    {
      "path": "/me/deposit/{depositId}/payment",
      "description": "Details about a payment",
      "operations": [
        {
          "parameters": [
            {
              "name": "depositId",
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "billing.Payment",
          "resellerOnly": false,
          "responseType": "billing.Payment",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/deposit/{depositId}",
      "description": "Details about a deposit",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "billing.Deposit",
          "resellerOnly": false,
          "responseFullType": "billing.Deposit",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "depositId",
              "dataType": "string"
            }
          ]
        }
      ]
    },
    {
      "path": "/me/consent/{campaignName}",
      "description": "Retrieve information about a consent campaign",
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "Consent campaign name",
              "fullType": "string",
              "dataType": "string",
              "name": "campaignName"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "me.consent.Campaign",
          "description": "Retrieve information about a consent campaign",
          "responseType": "me.consent.Campaign",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "me.consent.Consent",
          "httpMethod": "GET",
          "description": "Get decision value for a consent campaign",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "Consent campaign name",
              "fullType": "string",
              "dataType": "string",
              "name": "campaignName"
            }
          ],
          "noAuthentication": false,
          "responseType": "me.consent.Consent",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "fullType": "string",
              "description": "Consent campaign name",
              "paramType": "path",
              "required": true,
              "name": "campaignName",
              "dataType": "string"
            },
            {
              "required": true,
              "paramType": "body",
              "description": "Decision value",
              "fullType": "boolean",
              "dataType": "boolean",
              "name": "value"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "PUT",
          "description": "Update decision of a consent campaign",
          "responseFullType": "void",
          "responseType": "void",
          "noAuthentication": false
        }
      ],
      "description": "Get decision value for a consent campaign",
      "path": "/me/consent/{campaignName}/decision"
    },
    {
      "description": "List all consent campaign available",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "me.consent.Campaign[]",
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "List all consent campaign available",
          "responseFullType": "me.consent.Campaign[]",
          "parameters": [],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/consent"
    },
    {
      "path": "/me/agreements",
      "description": "List the agreements.ContractAgreement objects",
      "operations": [
        {
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "agreements.AgreementStateEnum",
              "name": "agreed",
              "required": false,
              "paramType": "query",
              "fullType": "agreements.AgreementStateEnum",
              "description": "Filter the value of agreed property (like)"
            },
            {
              "required": false,
              "paramType": "query",
              "fullType": "long",
              "description": "Filter the value of contractId property (like)",
              "dataType": "long",
              "name": "contractId"
            }
          ],
          "description": "List of contracts signed between you and OVH",
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "description": "accept operations",
      "operations": [
        {
          "responseFullType": "string",
          "description": "Accept this contract",
          "httpMethod": "POST",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "Id of the contract"
            }
          ],
          "noAuthentication": false,
          "responseType": "string",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/agreements/{id}/accept"
    },
    {
      "description": "Contract agreement",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "agreements.ContractAgreement",
          "resellerOnly": false,
          "responseFullType": "agreements.ContractAgreement",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "parameters": [
            {
              "description": "Id of the contract",
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ]
        }
      ],
      "path": "/me/agreements/{id}"
    },
    {
      "path": "/me/agreements/{id}/contract",
      "description": "Contract of service",
      "operations": [
        {
          "responseFullType": "agreements.Contract",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "description": "Id of the contract",
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "agreements.Contract",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/api/application/{applicationId}",
      "description": "API Application",
      "operations": [
        {
          "responseType": "api.Application",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "applicationId",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "api.Application",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "parameters": [
            {
              "dataType": "long",
              "name": "applicationId",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null
            }
          ],
          "httpMethod": "DELETE",
          "description": "Remove this application. It will revoke all credential belonging to this application.",
          "responseFullType": "void",
          "resellerOnly": false,
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "parameters": [],
          "description": "List of your Api Application",
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseType": "long[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the api.Application objects",
      "path": "/me/api/application"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "fullType": "auth.CredentialStateEnum",
              "description": "Filter the value of status property (=)",
              "paramType": "query",
              "required": false,
              "name": "status",
              "dataType": "auth.CredentialStateEnum"
            },
            {
              "dataType": "long",
              "name": "applicationId",
              "required": false,
              "paramType": "query",
              "description": "Filter the value of applicationId property (like)",
              "fullType": "long"
            }
          ],
          "resellerOnly": false,
          "description": "List of your Api Credentials",
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "responseType": "long[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the api.Credential objects",
      "path": "/me/api/credential"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "api.Credential",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "credentialId",
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "api.Credential",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "api.Credential",
              "name": null,
              "required": true,
              "paramType": "body",
              "description": "New object properties",
              "fullType": "api.Credential"
            },
            {
              "name": "credentialId",
              "dataType": "long",
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseFullType": "void",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "credentialId",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "DELETE",
          "description": "Remove this credential",
          "responseFullType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "API Credential",
      "path": "/me/api/credential/{credentialId}"
    },
    {
      "path": "/me/api/credential/{credentialId}/application",
      "description": "API Application",
      "operations": [
        {
          "responseType": "api.Application",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true,
              "name": "credentialId",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "api.Application",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/voucher/checkValidity",
      "description": "checkValidity operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.VoucherStatus",
          "httpMethod": "POST",
          "description": "Verify existing voucher",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "description": "Voucher value",
              "fullType": "string",
              "dataType": "string",
              "name": "voucher"
            }
          ],
          "noAuthentication": false,
          "responseType": "nichandle.VoucherStatus",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "archiveType",
              "dataType": "billing.ArchiveTypeEnum",
              "fullType": "billing.ArchiveTypeEnum",
              "description": "The file type of the archive",
              "paramType": "body",
              "required": true
            },
            {
              "required": false,
              "paramType": "body",
              "description": "Start interval of the export",
              "fullType": "datetime",
              "dataType": "datetime",
              "name": "startDate"
            },
            {
              "dataType": "string[]",
              "name": "ids",
              "required": false,
              "paramType": "body",
              "description": "A list of ids to export",
              "fullType": "string[]"
            },
            {
              "dataType": "datetime",
              "name": "endDate",
              "required": false,
              "paramType": "body",
              "fullType": "datetime",
              "description": "End interval of the export"
            }
          ],
          "description": "Exports a bundle of invoices",
          "httpMethod": "POST",
          "responseFullType": "void",
          "resellerOnly": false,
          "responseType": "void",
          "noAuthentication": false
        }
      ],
      "description": "Exports a bundle of invoices",
      "path": "/me/bill/export"
    },
    {
      "description": "Details about a Bill",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "billing.Bill",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "billing.Bill",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "billId",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": null
            }
          ]
        }
      ],
      "path": "/me/bill/{billId}"
    },
    {
      "description": "pay operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "billing.Order",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "billId",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": null
            }
          ],
          "description": "Create an order in order to pay this order's debt",
          "responseFullType": "billing.Order",
          "httpMethod": "POST",
          "resellerOnly": false
        }
      ],
      "path": "/me/bill/{billId}/debt/pay"
    },
    {
      "operations": [
        {
          "description": "Return main data about the object related to this debt operation",
          "httpMethod": "GET",
          "responseFullType": "debt.entry.AssociatedObject",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "billId",
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "name": "operationId",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null
            }
          ],
          "noAuthentication": false,
          "responseType": "debt.entry.AssociatedObject",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "associatedObject operations",
      "path": "/me/bill/{billId}/debt/operation/{operationId}/associatedObject"
    },
    {
      "description": "Operation that happend on a debt",
      "operations": [
        {
          "responseType": "debt.Operation",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "billId",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": null
            },
            {
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "long",
              "dataType": "long",
              "name": "operationId"
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "debt.Operation",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/bill/{billId}/debt/operation/{operationId}"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "name": "depositOrderId",
              "dataType": "long",
              "fullType": "long",
              "description": "Filter the value of depositOrderId property (=)",
              "paramType": "query",
              "required": false
            },
            {
              "fullType": "string",
              "description": null,
              "paramType": "path",
              "required": true,
              "name": "billId",
              "dataType": "string"
            }
          ],
          "httpMethod": "GET",
          "description": "All operations related to these debts",
          "responseFullType": "long[]",
          "resellerOnly": false,
          "responseType": "long[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the debt.Operation objects",
      "path": "/me/bill/{billId}/debt/operation"
    },
    {
      "path": "/me/bill/{billId}/debt",
      "description": "State of a debt",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "debt.Debt",
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "debt.Debt",
          "parameters": [
            {
              "fullType": "string",
              "description": null,
              "paramType": "path",
              "required": true,
              "name": "billId",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/bill/{billId}/payment",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "description": "Get this object properties",
          "responseFullType": "billing.Payment",
          "httpMethod": "GET",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "string",
              "dataType": "string",
              "name": "billId"
            }
          ],
          "noAuthentication": false,
          "responseType": "billing.Payment"
        }
      ],
      "description": "Details about a payment"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": null,
              "dataType": "string",
              "name": "billId"
            }
          ],
          "resellerOnly": false,
          "description": "Give access to all entries of the bill",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "responseType": "string[]",
          "noAuthentication": false
        }
      ],
      "description": "List the billing.BillDetail objects",
      "path": "/me/bill/{billId}/details"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "billId",
              "dataType": "string"
            },
            {
              "name": "billDetailId",
              "dataType": "string",
              "description": null,
              "fullType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "billing.BillDetail",
          "responseType": "billing.BillDetail",
          "noAuthentication": false
        }
      ],
      "description": "Information about a Bill entry",
      "path": "/me/bill/{billId}/details/{billDetailId}"
    },
    {
      "path": "/me/bill",
      "description": "List the billing.Bill objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "string[]",
          "resellerOnly": false,
          "description": "List of all the bills the logged account has",
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "parameters": [
            {
              "required": false,
              "paramType": "query",
              "fullType": "datetime",
              "description": "Filter the value of date property (<=)",
              "dataType": "datetime",
              "name": "date.to"
            },
            {
              "required": false,
              "paramType": "query",
              "description": "Filter the value of date property (>=)",
              "fullType": "datetime",
              "dataType": "datetime",
              "name": "date.from"
            },
            {
              "dataType": "billing.CategoryEnum",
              "name": "category",
              "required": false,
              "paramType": "query",
              "description": "Filter the value of category property (=)",
              "fullType": "billing.CategoryEnum"
            },
            {
              "name": "orderId",
              "dataType": "long",
              "fullType": "long",
              "description": "Filter the value of orderId property (=)",
              "paramType": "query",
              "required": false
            }
          ]
        }
      ]
    },
    {
      "path": "/me/ipOrganisation",
      "description": "List the nichandle.Ipv4Org objects",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "string[]",
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "description": "List of organisations",
          "resellerOnly": false,
          "parameters": [],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "dataType": "string",
              "name": "firstname"
            },
            {
              "required": true,
              "paramType": "body",
              "description": null,
              "fullType": "nichandle.CountryEnum",
              "dataType": "nichandle.CountryEnum",
              "name": "country"
            },
            {
              "required": false,
              "paramType": "body",
              "fullType": "string",
              "description": null,
              "dataType": "string",
              "name": "state"
            },
            {
              "required": false,
              "paramType": "body",
              "description": null,
              "fullType": "string",
              "dataType": "string",
              "name": "zip"
            },
            {
              "dataType": "string",
              "name": "abuse_mailbox",
              "required": true,
              "paramType": "body",
              "description": null,
              "fullType": "string"
            },
            {
              "dataType": "phoneNumber",
              "name": "phone",
              "required": true,
              "paramType": "body",
              "fullType": "phoneNumber",
              "description": null
            },
            {
              "dataType": "string",
              "name": "lastname",
              "required": true,
              "paramType": "body",
              "description": null,
              "fullType": "string"
            },
            {
              "dataType": "string",
              "name": "address",
              "required": true,
              "paramType": "body",
              "fullType": "string",
              "description": null
            },
            {
              "fullType": "string",
              "description": null,
              "paramType": "body",
              "required": true,
              "name": "city",
              "dataType": "string"
            },
            {
              "fullType": "nichandle.IpRegistryEnum",
              "description": null,
              "paramType": "body",
              "required": true,
              "name": "registry",
              "dataType": "nichandle.IpRegistryEnum"
            }
          ],
          "resellerOnly": false,
          "description": "Add an organisation",
          "responseFullType": "void",
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "responseType": "nichandle.Ipv4Org",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "organisationId",
              "dataType": "string",
              "fullType": "string",
              "description": null,
              "paramType": "path",
              "required": true
            }
          ],
          "responseFullType": "nichandle.Ipv4Org",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseFullType": "void",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "fullType": "nichandle.Ipv4Org",
              "description": "New object properties",
              "dataType": "nichandle.Ipv4Org",
              "name": null
            },
            {
              "description": null,
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "organisationId",
              "dataType": "string"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "httpMethod": "DELETE",
          "responseFullType": "void",
          "description": "Delete this organisation",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "string",
              "dataType": "string",
              "name": "organisationId"
            }
          ],
          "noAuthentication": false,
          "responseType": "void"
        }
      ],
      "description": "Details about an IP block organisation",
      "path": "/me/ipOrganisation/{organisationId}"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "billing.Order",
          "noAuthentication": false,
          "parameters": [],
          "description": "Create an order in order to pay all your due debts",
          "httpMethod": "POST",
          "responseFullType": "billing.Order",
          "resellerOnly": false
        }
      ],
      "description": "pay operations",
      "path": "/me/debtAccount/pay"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "debt.Balance",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "debt.Balance",
          "resellerOnly": false,
          "parameters": []
        }
      ],
      "description": "Debt balance of the account",
      "path": "/me/debtAccount"
    },
    {
      "path": "/me/debtAccount/debt",
      "description": "List the debt.Debt objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseFullType": "long[]",
          "description": "All debts related to your account",
          "httpMethod": "GET",
          "parameters": [],
          "noAuthentication": false,
          "responseType": "long[]"
        }
      ]
    },
    {
      "path": "/me/debtAccount/debt/{debtId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "debt.Debt",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "debt.Debt",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "debtId",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null
            }
          ]
        }
      ],
      "description": "State of a debt"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "long[]",
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "All operations related to these debts",
          "responseFullType": "long[]",
          "parameters": [
            {
              "fullType": "long",
              "description": "Filter the value of depositOrderId property (=)",
              "paramType": "query",
              "required": false,
              "name": "depositOrderId",
              "dataType": "long"
            },
            {
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true,
              "name": "debtId",
              "dataType": "long"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the debt.Operation objects",
      "path": "/me/debtAccount/debt/{debtId}/operation"
    },
    {
      "path": "/me/debtAccount/debt/{debtId}/operation/{operationId}",
      "description": "Operation that happend on a debt",
      "operations": [
        {
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "debt.Operation",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "debtId",
              "dataType": "long",
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null,
              "dataType": "long",
              "name": "operationId"
            }
          ],
          "noAuthentication": false,
          "responseType": "debt.Operation",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "debtId",
              "dataType": "long",
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true
            },
            {
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "operationId",
              "dataType": "long"
            }
          ],
          "description": "Return main data about the object related to this debt operation",
          "responseFullType": "debt.entry.AssociatedObject",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseType": "debt.entry.AssociatedObject",
          "noAuthentication": false
        }
      ],
      "description": "associatedObject operations",
      "path": "/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject"
    },
    {
      "path": "/me/debtAccount/debt/{debtId}/pay",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "billing.Order",
          "resellerOnly": false,
          "description": "Create an order in order to pay this order's debt",
          "httpMethod": "POST",
          "responseFullType": "billing.Order",
          "parameters": [
            {
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true,
              "name": "debtId",
              "dataType": "long"
            }
          ]
        }
      ],
      "description": "pay operations"
    },
    {
      "path": "/me/document/{id}",
      "description": "List of documents added on your account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "nichandle.document.Document",
          "parameters": [
            {
              "fullType": "string",
              "description": "Document id",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "nichandle.document.Document"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "fullType": "nichandle.document.Document",
              "paramType": "body",
              "required": true,
              "name": null,
              "dataType": "nichandle.document.Document"
            },
            {
              "dataType": "string",
              "name": "id",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "Document id"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "PUT",
          "description": "Alter this object properties"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "DELETE",
          "description": "Delete a document",
          "parameters": [
            {
              "description": "Document id",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/document",
      "operations": [
        {
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "description": "List of documents added in your account",
          "resellerOnly": false,
          "parameters": [],
          "noAuthentication": false,
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "description": "Create new document",
          "httpMethod": "POST",
          "responseFullType": "nichandle.document.Document",
          "parameters": [
            {
              "required": false,
              "paramType": "body",
              "description": "File tags",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "dataType": "complexType.SafeKeyValue<string>[]",
              "name": "tags"
            },
            {
              "required": true,
              "paramType": "body",
              "description": "File name",
              "fullType": "string",
              "dataType": "string",
              "name": "name"
            }
          ],
          "noAuthentication": false,
          "responseType": "nichandle.document.Document"
        }
      ],
      "description": "List the nichandle.document.Document objects"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "origin",
              "dataType": "string",
              "fullType": "string",
              "description": "Allow this origin",
              "paramType": "body",
              "required": true
            }
          ],
          "httpMethod": "POST",
          "description": "Add CORS support on your container",
          "responseFullType": "void",
          "resellerOnly": false
        }
      ],
      "description": "Add CORS support on your container",
      "path": "/me/document/cors"
    },
    {
      "path": "/me/autorenew",
      "description": "Auto renewal information",
      "operations": [
        {
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "nichandle.NicAutorenewInfos",
          "parameters": [],
          "noAuthentication": false,
          "responseType": "nichandle.NicAutorenewInfos",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "description": "Alter this object properties",
          "responseFullType": "void",
          "httpMethod": "PUT",
          "parameters": [
            {
              "fullType": "nichandle.NicAutorenewInfos",
              "description": "New object properties",
              "paramType": "body",
              "required": true,
              "name": null,
              "dataType": "nichandle.NicAutorenewInfos"
            }
          ]
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "httpMethod": "POST",
          "description": "Activate auto renew for this nic",
          "responseFullType": "void",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "fullType": "long",
              "description": "Day of autorenew",
              "dataType": "long",
              "name": "renewDay"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "description": "List of all your IPXE scripts",
          "resellerOnly": false,
          "parameters": [],
          "noAuthentication": false,
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "nichandle.ipxe",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "name",
              "required": true,
              "paramType": "body",
              "fullType": "string",
              "description": "name of your script"
            },
            {
              "required": true,
              "paramType": "body",
              "description": "Content of your IPXE script",
              "fullType": "text",
              "dataType": "text",
              "name": "script"
            },
            {
              "required": true,
              "paramType": "body",
              "fullType": "string",
              "description": "A personnal description of this script",
              "dataType": "string",
              "name": "description"
            }
          ],
          "description": "Add an IPXE script",
          "responseFullType": "nichandle.ipxe",
          "httpMethod": "POST",
          "resellerOnly": false
        }
      ],
      "description": "List the nichandle.ipxe objects",
      "path": "/me/ipxeScript"
    },
    {
      "description": "Customer IPXE scripts",
      "operations": [
        {
          "responseType": "nichandle.ipxe",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "Name of this script",
              "fullType": "string",
              "dataType": "string",
              "name": "name"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.ipxe",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this IPXE Script",
          "httpMethod": "DELETE",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "description": "Name of this script",
              "fullType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "void"
        }
      ],
      "path": "/me/ipxeScript/{name}"
    },
    {
      "path": "/me",
      "description": "Details about your OVH identifier",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "nichandle.Nichandle",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [],
          "noAuthentication": false,
          "responseType": "nichandle.Nichandle"
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "description": "Alter this object properties",
          "responseFullType": "void",
          "httpMethod": "PUT",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "nichandle.Nichandle",
              "name": null,
              "required": true,
              "paramType": "body",
              "fullType": "nichandle.Nichandle",
              "description": "New object properties"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "description": "Retrieve all contact that you created",
          "resellerOnly": false,
          "parameters": [],
          "noAuthentication": false,
          "responseType": "long[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "noAuthentication": false,
          "responseType": "contact.Contact",
          "description": "Create a new contact",
          "httpMethod": "POST",
          "responseFullType": "contact.Contact",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "contact.Address",
              "name": "address",
              "required": true,
              "paramType": "body",
              "fullType": "contact.Address",
              "description": "Address of the contact"
            },
            {
              "description": "Cellphone number",
              "fullType": "phoneNumber",
              "paramType": "body",
              "required": false,
              "name": "cellPhone",
              "dataType": "phoneNumber"
            },
            {
              "name": "phone",
              "dataType": "phoneNumber",
              "description": "Landline phone number",
              "fullType": "phoneNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "name": "fax",
              "required": false,
              "paramType": "body",
              "fullType": "phoneNumber",
              "description": "Fax phone number"
            },
            {
              "description": "Birthday date",
              "fullType": "date",
              "paramType": "body",
              "required": false,
              "name": "birthDay",
              "dataType": "date"
            },
            {
              "required": false,
              "paramType": "body",
              "description": "City of birth",
              "fullType": "string",
              "dataType": "string",
              "name": "birthCity"
            },
            {
              "dataType": "string",
              "name": "birthZip",
              "required": false,
              "paramType": "body",
              "description": "Birth Zipcode",
              "fullType": "string"
            },
            {
              "name": "birthCountry",
              "dataType": "nichandle.CountryEnum",
              "fullType": "nichandle.CountryEnum",
              "description": "Birth Country",
              "paramType": "body",
              "required": false
            },
            {
              "fullType": "string",
              "description": "VAT number",
              "paramType": "body",
              "required": false,
              "name": "vat",
              "dataType": "string"
            },
            {
              "required": false,
              "paramType": "body",
              "description": "Company national identification number",
              "fullType": "string",
              "dataType": "string",
              "name": "companyNationalIdentificationNumber"
            },
            {
              "dataType": "string",
              "name": "nationalIdentificationNumber",
              "required": false,
              "paramType": "body",
              "description": "National identification number",
              "fullType": "string"
            },
            {
              "name": "organisationType",
              "dataType": "string",
              "fullType": "string",
              "description": "Type of your organisation",
              "paramType": "body",
              "required": false
            },
            {
              "fullType": "string",
              "description": "Name of your organisation",
              "paramType": "body",
              "required": false,
              "name": "organisationName",
              "dataType": "string"
            },
            {
              "fullType": "string",
              "description": "Email address",
              "paramType": "body",
              "required": true,
              "name": "email",
              "dataType": "string"
            },
            {
              "fullType": "string",
              "description": "First name",
              "paramType": "body",
              "required": true,
              "name": "firstName",
              "dataType": "string"
            },
            {
              "required": false,
              "paramType": "body",
              "fullType": "nichandle.GenderEnum",
              "description": "Gender",
              "dataType": "nichandle.GenderEnum",
              "name": "gender"
            },
            {
              "dataType": "nichandle.LanguageEnum",
              "name": "language",
              "required": true,
              "paramType": "body",
              "description": "Language",
              "fullType": "nichandle.LanguageEnum"
            },
            {
              "name": "nationality",
              "dataType": "nichandle.CountryEnum",
              "fullType": "nichandle.CountryEnum",
              "description": "Nationality",
              "paramType": "body",
              "required": false
            },
            {
              "required": true,
              "paramType": "body",
              "description": "Last name",
              "fullType": "string",
              "dataType": "string",
              "name": "lastName"
            },
            {
              "dataType": "nichandle.LegalFormEnum",
              "name": "legalForm",
              "required": true,
              "paramType": "body",
              "description": "Legal form of the contact",
              "fullType": "nichandle.LegalFormEnum"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/contact"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "contact.FieldInformation[]",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "description": "Contact Identifier",
              "paramType": "path",
              "required": true,
              "name": "contactId",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "contact.FieldInformation[]",
          "description": "Display mandatory/read-only informations of a contact",
          "httpMethod": "GET"
        }
      ],
      "path": "/me/contact/{contactId}/fields"
    },
    {
      "path": "/me/contact/{contactId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "contact.Contact",
          "resellerOnly": false,
          "description": "Retrieve information about a contact",
          "httpMethod": "GET",
          "responseFullType": "contact.Contact",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "Contact Identifier",
              "fullType": "long",
              "dataType": "long",
              "name": "contactId"
            }
          ]
        },
        {
          "responseType": "contact.Contact",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "Contact Identifier",
              "dataType": "long",
              "name": "contactId"
            },
            {
              "required": false,
              "paramType": "body",
              "description": "Address of the contact",
              "fullType": "contact.Address",
              "dataType": "contact.Address",
              "name": "address"
            },
            {
              "name": "cellPhone",
              "dataType": "phoneNumber",
              "fullType": "phoneNumber",
              "description": "Cellphone number",
              "paramType": "body",
              "required": false
            },
            {
              "description": "Landline phone number",
              "fullType": "phoneNumber",
              "paramType": "body",
              "required": false,
              "name": "phone",
              "dataType": "phoneNumber"
            },
            {
              "dataType": "phoneNumber",
              "name": "fax",
              "required": false,
              "paramType": "body",
              "description": "Fax phone number",
              "fullType": "phoneNumber"
            },
            {
              "dataType": "date",
              "name": "birthDay",
              "required": false,
              "paramType": "body",
              "fullType": "date",
              "description": "Birthday date"
            },
            {
              "required": false,
              "paramType": "body",
              "description": "City of birth",
              "fullType": "string",
              "dataType": "string",
              "name": "birthCity"
            },
            {
              "dataType": "string",
              "name": "birthZip",
              "required": false,
              "paramType": "body",
              "description": "Birth Zipcode",
              "fullType": "string"
            },
            {
              "name": "birthCountry",
              "dataType": "nichandle.CountryEnum",
              "description": "Birth Country",
              "fullType": "nichandle.CountryEnum",
              "paramType": "body",
              "required": false
            },
            {
              "name": "vat",
              "dataType": "string",
              "description": "VAT number",
              "fullType": "string",
              "paramType": "body",
              "required": false
            },
            {
              "name": "companyNationalIdentificationNumber",
              "dataType": "string",
              "fullType": "string",
              "description": "Company national identification number",
              "paramType": "body",
              "required": false
            },
            {
              "description": "National identification number",
              "fullType": "string",
              "paramType": "body",
              "required": false,
              "name": "nationalIdentificationNumber",
              "dataType": "string"
            },
            {
              "dataType": "string",
              "name": "organisationType",
              "required": false,
              "paramType": "body",
              "description": "Type of your organisation",
              "fullType": "string"
            },
            {
              "name": "organisationName",
              "dataType": "string",
              "fullType": "string",
              "description": "Name of your organisation",
              "paramType": "body",
              "required": false
            },
            {
              "fullType": "string",
              "description": "Email address",
              "paramType": "body",
              "required": false,
              "name": "email",
              "dataType": "string"
            },
            {
              "required": false,
              "paramType": "body",
              "fullType": "string",
              "description": "First name",
              "dataType": "string",
              "name": "firstName"
            },
            {
              "fullType": "nichandle.GenderEnum",
              "description": "Gender",
              "paramType": "body",
              "required": false,
              "name": "gender",
              "dataType": "nichandle.GenderEnum"
            },
            {
              "description": "Language",
              "fullType": "nichandle.LanguageEnum",
              "paramType": "body",
              "required": false,
              "name": "language",
              "dataType": "nichandle.LanguageEnum"
            },
            {
              "dataType": "nichandle.CountryEnum",
              "name": "nationality",
              "required": false,
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "description": "Nationality"
            },
            {
              "required": false,
              "paramType": "body",
              "description": "Last name",
              "fullType": "string",
              "dataType": "string",
              "name": "lastName"
            },
            {
              "name": "legalForm",
              "dataType": "nichandle.LegalFormEnum",
              "description": "Legal form of the contact",
              "fullType": "nichandle.LegalFormEnum",
              "paramType": "body",
              "required": false
            }
          ],
          "resellerOnly": false,
          "responseFullType": "contact.Contact",
          "description": "Update an existing contact",
          "httpMethod": "PUT",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/me/geolocation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [],
          "responseFullType": "geolocation.ContinentCountryLocation",
          "description": "Fetch visitor country & region",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseType": "geolocation.ContinentCountryLocation",
          "noAuthentication": true
        }
      ],
      "description": "Route for getting visitor's country and continent"
    },
    {
      "description": "validate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "void",
          "description": "Validate your SMS account",
          "responseFullType": "void",
          "httpMethod": "POST",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "password",
              "name": "code",
              "required": true,
              "paramType": "body",
              "fullType": "password",
              "description": "SMS code send to a cellphone"
            },
            {
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ]
        }
      ],
      "path": "/me/accessRestriction/sms/{id}/validate"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "fullType": "password",
              "description": "SMS code send by a cellphone",
              "dataType": "password",
              "name": "code"
            },
            {
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Enable this SMS account",
          "httpMethod": "POST",
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "enable operations",
      "path": "/me/accessRestriction/sms/{id}/enable"
    },
    {
      "description": "Sms Two-Factor Authentication",
      "operations": [
        {
          "responseType": "nichandle.accessRestriction.SmsAccount",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "description": "The Id of the restriction",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "nichandle.accessRestriction.SmsAccount",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "resellerOnly": false,
          "description": "Alter this object properties",
          "responseFullType": "void",
          "httpMethod": "PUT",
          "parameters": [
            {
              "fullType": "nichandle.accessRestriction.SmsAccount",
              "description": "New object properties",
              "paramType": "body",
              "required": true,
              "name": null,
              "dataType": "nichandle.accessRestriction.SmsAccount"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "The Id of the restriction",
              "dataType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "httpMethod": "DELETE",
          "description": "Delete this Two-Factor",
          "responseFullType": "void",
          "parameters": [
            {
              "description": "The Id of the restriction",
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/accessRestriction/sms/{id}"
    },
    {
      "path": "/me/accessRestriction/sms/{id}/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable this SMS account",
          "httpMethod": "POST",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "password",
              "name": "code",
              "required": true,
              "paramType": "body",
              "fullType": "password",
              "description": "SMS code send by a cellphone"
            },
            {
              "fullType": "long",
              "description": "The Id of the restriction",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "void"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/me/accessRestriction/sms/{id}/sendCode",
      "description": "sendCode operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "responseFullType": "nichandle.accessRestriction.SmsCode",
          "description": "Send a SMS to this account",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseType": "nichandle.accessRestriction.SmsCode",
          "noAuthentication": false
        }
      ]
    },
    {
      "path": "/me/accessRestriction/sms",
      "operations": [
        {
          "parameters": [],
          "responseFullType": "long[]",
          "description": "List of Sms accounts",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseType": "long[]",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "resellerOnly": false,
          "httpMethod": "POST",
          "description": "Add a SMS access restriction",
          "responseFullType": "nichandle.accessRestriction.SmsSecret",
          "parameters": [
            {
              "description": "Cell phone number to register",
              "fullType": "string",
              "paramType": "body",
              "required": true,
              "name": "phone",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "nichandle.accessRestriction.SmsSecret",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the nichandle.accessRestriction.SmsAccount objects"
    },
    {
      "path": "/me/accessRestriction/u2f",
      "description": "List the nichandle.accessRestriction.U2FAccount objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "long[]",
          "resellerOnly": false,
          "description": "List of U2F accounts",
          "httpMethod": "GET",
          "responseFullType": "long[]",
          "parameters": []
        },
        {
          "parameters": [],
          "resellerOnly": false,
          "description": "Add a U2F access restriction",
          "httpMethod": "POST",
          "responseFullType": "nichandle.accessRestriction.U2FRegisterChallenge",
          "responseType": "nichandle.accessRestriction.U2FRegisterChallenge",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseFullType": "void",
          "description": "Enable this U2F account",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "description": null,
              "fullType": "string",
              "dataType": "string",
              "name": "clientData"
            },
            {
              "name": "signatureData",
              "dataType": "password",
              "fullType": "password",
              "description": null,
              "paramType": "body",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "The Id of the restriction",
              "dataType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false,
          "responseType": "void"
        }
      ],
      "description": "enable operations",
      "path": "/me/accessRestriction/u2f/{id}/enable"
    },
    {
      "description": "validate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "dataType": "password",
              "name": "registrationData",
              "required": true,
              "paramType": "body",
              "fullType": "password",
              "description": null
            },
            {
              "fullType": "string",
              "description": null,
              "paramType": "body",
              "required": true,
              "name": "clientData",
              "dataType": "string"
            },
            {
              "fullType": "long",
              "description": "The Id of the restriction",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "responseFullType": "void",
          "description": "Validate your U2F account",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseType": "void",
          "noAuthentication": false
        }
      ],
      "path": "/me/accessRestriction/u2f/{id}/validate"
    },
    {
      "path": "/me/accessRestriction/u2f/{id}/challenge",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "nichandle.accessRestriction.U2FSignChallenge",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.U2FSignChallenge",
          "description": "Get an U2F Challenge",
          "httpMethod": "POST"
        }
      ],
      "description": "challenge operations"
    },
    {
      "operations": [
        {
          "httpMethod": "POST",
          "responseFullType": "void",
          "description": "Disable this U2F account",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "password",
              "name": "signatureData",
              "required": true,
              "paramType": "body",
              "description": null,
              "fullType": "password"
            },
            {
              "name": "clientData",
              "dataType": "string",
              "fullType": "string",
              "description": null,
              "paramType": "body",
              "required": true
            },
            {
              "fullType": "long",
              "description": "The Id of the restriction",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "disable operations",
      "path": "/me/accessRestriction/u2f/{id}/disable"
    },
    {
      "path": "/me/accessRestriction/u2f/{id}",
      "description": "U2F Two-Factor Authentication",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "The Id of the restriction",
              "dataType": "long",
              "name": "id"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.U2FAccount",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "nichandle.accessRestriction.U2FAccount",
          "noAuthentication": false
        },
        {
          "parameters": [
            {
              "fullType": "nichandle.accessRestriction.U2FAccount",
              "description": "New object properties",
              "paramType": "body",
              "required": true,
              "name": null,
              "dataType": "nichandle.accessRestriction.U2FAccount"
            },
            {
              "description": "The Id of the restriction",
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseType": "void",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "httpMethod": "DELETE",
          "responseFullType": "void",
          "description": "Delete this Two-Factor",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ]
        }
      ]
    },
    {
      "description": "List of all IP Restrictions",
      "operations": [
        {
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "nichandle.IpRestriction",
          "resellerOnly": false,
          "responseType": "nichandle.IpRestriction",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "resellerOnly": false,
          "description": "Alter this object properties",
          "responseFullType": "void",
          "httpMethod": "PUT",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "description": "New object properties",
              "fullType": "nichandle.IpRestriction",
              "dataType": "nichandle.IpRestriction",
              "name": null
            },
            {
              "name": "id",
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "description": "The Id of the restriction",
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "DELETE",
          "description": "Delete this restriction rule",
          "responseFullType": "void",
          "responseType": "void",
          "noAuthentication": false
        }
      ],
      "path": "/me/accessRestriction/ip/{id}"
    },
    {
      "path": "/me/accessRestriction/ip",
      "description": "List the nichandle.IpRestriction objects",
      "operations": [
        {
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [],
          "description": "List of IP restrictions",
          "httpMethod": "GET",
          "responseFullType": "long[]",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Accept or deny IP access",
              "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
              "paramType": "body",
              "required": true,
              "name": "rule",
              "dataType": "nichandle.accessRestriction.IpRestrictionRuleEnum"
            },
            {
              "fullType": "boolean",
              "description": "Send an email if someone try to access with this IP address",
              "paramType": "body",
              "required": true,
              "name": "warning",
              "dataType": "boolean"
            },
            {
              "required": true,
              "paramType": "body",
              "fullType": "ipBlock",
              "description": "An IP range where we will apply the rule",
              "dataType": "ipBlock",
              "name": "ip"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "POST",
          "description": "Add an IP access restriction",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/accessRestriction/totp/{id}/enable",
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "void",
          "httpMethod": "POST",
          "description": "Enable this TOTP account",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "code",
              "dataType": "password",
              "description": "OTP code given by the application",
              "fullType": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction",
              "fullType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "void",
          "httpMethod": "POST",
          "description": "Validate your TOTP account",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "password",
              "name": "code",
              "required": true,
              "paramType": "body",
              "description": "OTP code given by the application",
              "fullType": "password"
            },
            {
              "dataType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction",
              "fullType": "long"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "validate operations",
      "path": "/me/accessRestriction/totp/{id}/validate"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "fullType": "password",
              "description": "OTP code given by the application",
              "dataType": "password",
              "name": "code"
            },
            {
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ],
          "resellerOnly": false,
          "description": "Disable this TOTP account",
          "responseFullType": "void",
          "httpMethod": "POST"
        }
      ],
      "path": "/me/accessRestriction/totp/{id}/disable"
    },
    {
      "description": "TOTP Two-Factor Authentication",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "nichandle.accessRestriction.TOTPAccount",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "description": "The Id of the restriction",
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "nichandle.accessRestriction.TOTPAccount",
          "resellerOnly": false
        },
        {
          "resellerOnly": false,
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseFullType": "void",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "description": "New object properties",
              "fullType": "nichandle.accessRestriction.TOTPAccount",
              "dataType": "nichandle.accessRestriction.TOTPAccount",
              "name": null
            },
            {
              "dataType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "The Id of the restriction"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "responseFullType": "void",
          "description": "Delete this Two-Factor",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "The Id of the restriction"
            }
          ],
          "noAuthentication": false,
          "responseType": "void"
        }
      ],
      "path": "/me/accessRestriction/totp/{id}"
    },
    {
      "description": "List the nichandle.accessRestriction.TOTPAccount objects",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "long[]",
          "resellerOnly": false,
          "description": "List of TOTP accounts",
          "httpMethod": "GET",
          "responseFullType": "long[]",
          "parameters": [],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "responseType": "nichandle.accessRestriction.TOTPSecret",
          "noAuthentication": false,
          "parameters": [],
          "httpMethod": "POST",
          "description": "Add a TOTP access restriction",
          "responseFullType": "nichandle.accessRestriction.TOTPSecret",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/accessRestriction/totp"
    },
    {
      "description": "SOTP Two-Factor Authentication",
      "operations": [
        {
          "parameters": [],
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "nichandle.accessRestriction.SOTPAccount",
          "description": "Get this object properties",
          "responseType": "nichandle.accessRestriction.SOTPAccount",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "nichandle.accessRestriction.SOTPSecret",
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseFullType": "nichandle.accessRestriction.SOTPSecret",
          "description": "Add a SOTP access restriction",
          "parameters": []
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [],
          "description": "Delete this Two-Factor",
          "responseFullType": "void",
          "httpMethod": "DELETE",
          "resellerOnly": false,
          "responseType": "void",
          "noAuthentication": false
        }
      ],
      "path": "/me/accessRestriction/backupCode"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "void",
          "description": "Disable this SOTP account",
          "responseFullType": "void",
          "httpMethod": "POST",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "password",
              "name": "code",
              "required": true,
              "paramType": "body",
              "fullType": "password",
              "description": "OTP code given by the application"
            }
          ]
        }
      ],
      "path": "/me/accessRestriction/backupCode/disable"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "description": "OTP code given by the application",
              "fullType": "password",
              "dataType": "password",
              "name": "code"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseFullType": "nichandle.accessRestriction.SOTPValidate",
          "description": "Validate your SOTP account",
          "responseType": "nichandle.accessRestriction.SOTPValidate",
          "noAuthentication": false
        }
      ],
      "description": "validate operations",
      "path": "/me/accessRestriction/backupCode/validate"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "void",
          "httpMethod": "POST",
          "responseFullType": "void",
          "description": "Enable this SOTP account",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "password",
              "name": "code",
              "required": true,
              "paramType": "body",
              "description": "OTP code given by the application",
              "fullType": "password"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "enable operations",
      "path": "/me/accessRestriction/backupCode/enable"
    },
    {
      "description": "IP Restriction default rule",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "nichandle.IpRestrictionDefaultRule",
          "responseFullType": "nichandle.IpRestrictionDefaultRule",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseFullType": "void",
          "parameters": [
            {
              "fullType": "nichandle.IpRestrictionDefaultRule",
              "description": "New object properties",
              "paramType": "body",
              "required": true,
              "name": null,
              "dataType": "nichandle.IpRestrictionDefaultRule"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/accessRestriction/ipDefaultRule"
    },
    {
      "path": "/me/accessRestriction/developerMode",
      "description": "Login restrictions on a development version of the Manager",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "nichandle.DeveloperModeRestriction",
          "resellerOnly": false,
          "responseFullType": "nichandle.DeveloperModeRestriction",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": []
        },
        {
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "description": "Alter this object properties",
          "responseFullType": "void",
          "httpMethod": "PUT",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "description": "New object properties",
              "fullType": "nichandle.DeveloperModeRestriction",
              "dataType": "nichandle.DeveloperModeRestriction",
              "name": null
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "date.from",
              "dataType": "datetime",
              "description": "Filter the value of date property (>=)",
              "fullType": "datetime",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "name": "date.to",
              "required": false,
              "paramType": "query",
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime"
            }
          ],
          "httpMethod": "GET",
          "description": "List of all the orders the logged account has",
          "responseFullType": "long[]",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the billing.Order objects",
      "path": "/me/order"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "resellerOnly": false,
          "httpMethod": "POST",
          "description": "Pay with a payment method reference",
          "responseFullType": "void",
          "parameters": [
            {
              "fullType": "billing.order.PayWithPaymentMethod",
              "description": "Payment method informations for pay",
              "paramType": "body",
              "required": true,
              "name": "paymentMethod",
              "dataType": "billing.order.PayWithPaymentMethod"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null,
              "dataType": "long",
              "name": "orderId"
            }
          ],
          "noAuthentication": false,
          "responseType": "void"
        }
      ],
      "description": "pay operations",
      "path": "/me/order/{orderId}/pay"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true
            }
          ],
          "responseFullType": "billing.Bill",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseType": "billing.Bill",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Details about a Bill",
      "path": "/me/order/{orderId}/bill"
    },
    {
      "path": "/me/order/{orderId}/paymentMeans",
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null,
              "dataType": "long",
              "name": "orderId"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.order.PaymentMeans",
          "httpMethod": "GET",
          "description": "Return main data about the object the processing of the order generated",
          "responseType": "billing.order.PaymentMeans",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "paymentMeans operations"
    },
    {
      "operations": [
        {
          "description": "Request retraction of order",
          "responseFullType": "void",
          "httpMethod": "POST",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "billing.order.RetractionReasonEnum",
              "name": "reason",
              "required": true,
              "paramType": "body",
              "description": "The reason why you want to retract",
              "fullType": "billing.order.RetractionReasonEnum"
            },
            {
              "required": false,
              "paramType": "body",
              "fullType": "text",
              "description": "An optional comment of why you want to retract",
              "dataType": "text",
              "name": "comment"
            },
            {
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true,
              "name": "orderId",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "retraction operations",
      "path": "/me/order/{orderId}/retraction"
    },
    {
      "path": "/me/order/{orderId}/status",
      "operations": [
        {
          "responseType": "billing.order.OrderStatusEnum",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "orderId",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.order.OrderStatusEnum",
          "description": "Return status of order",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "status operations"
    },
    {
      "path": "/me/order/{orderId}/consumption/details",
      "description": "details operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "responseFullType": "billing.order.ConsumptionDetails",
          "description": "Retrieve order's detailed consumption information as a file",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "fileFormat",
              "dataType": "consumption.ConsumptionExportFormatsEnum",
              "description": "Format of the file",
              "fullType": "consumption.ConsumptionExportFormatsEnum",
              "paramType": "query",
              "required": true
            },
            {
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "orderId",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "billing.order.ConsumptionDetails"
        }
      ]
    },
    {
      "path": "/me/order/{orderId}/paymentMethods",
      "operations": [
        {
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "List of registered payment method you can use to pay this order",
          "responseFullType": "billing.order.PaymentMethods",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null,
              "dataType": "long",
              "name": "orderId"
            }
          ],
          "noAuthentication": false,
          "responseType": "billing.order.PaymentMethods",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ],
      "description": "paymentMethods operations"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true
            }
          ],
          "responseFullType": "billing.Order",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseType": "billing.Order",
          "noAuthentication": false
        }
      ],
      "description": "Details about an Order",
      "path": "/me/order/{orderId}"
    },
    {
      "path": "/me/order/{orderId}/followUp",
      "description": "followUp operations",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "billing.order.FollowUp[]",
          "description": "Return tracking of the order",
          "responseFullType": "billing.order.FollowUp[]",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true
            }
          ],
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ]
    },
    {
      "path": "/me/order/{orderId}/payWithRegisteredPaymentMean",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Pay with an already registered payment mean",
          "httpMethod": "POST",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "paymentMeanId",
              "required": false,
              "paramType": "body",
              "fullType": "long",
              "description": "Id of registered payment mean, mandatory for bankAccount, creditCard and paypal"
            },
            {
              "required": true,
              "paramType": "body",
              "description": "The registered payment mean you want to use",
              "fullType": "billing.ReusablePaymentMeanEnum",
              "dataType": "billing.ReusablePaymentMeanEnum",
              "name": "paymentMean"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null,
              "dataType": "long",
              "name": "orderId"
            }
          ],
          "noAuthentication": false,
          "responseType": "void"
        }
      ],
      "description": "payWithRegisteredPaymentMean operations"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "dataType": "long",
              "name": "orderId",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null
            }
          ],
          "description": "List of registered payment mean you can use to pay this order",
          "httpMethod": "GET",
          "responseFullType": "billing.order.RegisteredPaymentMean[]",
          "resellerOnly": false,
          "responseType": "billing.order.RegisteredPaymentMean[]",
          "noAuthentication": false
        }
      ],
      "description": "availableRegisteredPaymentMean operations",
      "path": "/me/order/{orderId}/availableRegisteredPaymentMean"
    },
    {
      "description": "pay operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "billing.Order",
          "description": "Create an order in order to pay this order's debt",
          "responseFullType": "billing.Order",
          "httpMethod": "POST",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "orderId",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null
            }
          ]
        }
      ],
      "path": "/me/order/{orderId}/debt/pay"
    },
    {
      "description": "State of a debt",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "debt.Debt",
          "description": "Get this object properties",
          "responseFullType": "debt.Debt",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "orderId",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null
            }
          ]
        }
      ],
      "path": "/me/order/{orderId}/debt"
    },
    {
      "description": "List the debt.Operation objects",
      "operations": [
        {
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "description": "Filter the value of depositOrderId property (=)",
              "paramType": "query",
              "required": false,
              "name": "depositOrderId",
              "dataType": "long"
            },
            {
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "long",
              "dataType": "long",
              "name": "orderId"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "All operations related to these debts",
          "responseFullType": "long[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/order/{orderId}/debt/operation"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "description": "Return main data about the object related to this debt operation",
          "httpMethod": "GET",
          "responseFullType": "debt.entry.AssociatedObject",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null,
              "dataType": "long",
              "name": "orderId"
            },
            {
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "operationId",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "debt.entry.AssociatedObject",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "associatedObject operations",
      "path": "/me/order/{orderId}/debt/operation/{operationId}/associatedObject"
    },
    {
      "path": "/me/order/{orderId}/debt/operation/{operationId}",
      "description": "Operation that happend on a debt",
      "operations": [
        {
          "parameters": [
            {
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true,
              "name": "orderId",
              "dataType": "long"
            },
            {
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true,
              "name": "operationId",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "debt.Operation",
          "responseType": "debt.Operation",
          "noAuthentication": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/order/{orderId}/associatedObject",
      "description": "associatedObject operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "billing.order.AssociatedObject",
          "description": "Return main data about the object the processing of the order generated",
          "responseFullType": "billing.order.AssociatedObject",
          "httpMethod": "GET",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "orderId",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null
            }
          ]
        }
      ]
    },
    {
      "description": "Details about a Refund",
      "operations": [
        {
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "billing.Refund",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "orderId",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "billing.Refund",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/order/{orderId}/refund"
    },
    {
      "path": "/me/order/{orderId}/details/{orderDetailId}/extension",
      "description": "Extensions of a detail",
      "operations": [
        {
          "responseType": "billing.ItemDetail",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true
            },
            {
              "name": "orderDetailId",
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "billing.ItemDetail",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          }
        }
      ]
    },
    {
      "path": "/me/order/{orderId}/details/{orderDetailId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "orderId",
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "name": "orderDetailId",
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "long"
            }
          ],
          "responseFullType": "billing.OrderDetail",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseType": "billing.OrderDetail",
          "noAuthentication": false
        }
      ],
      "description": "Information about a Bill entry"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "dataType": "long",
              "name": "orderId",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null
            }
          ],
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "description": "Give access to all entries of the order",
          "resellerOnly": false,
          "responseType": "long[]",
          "noAuthentication": false
        }
      ],
      "description": "List the billing.OrderDetail objects",
      "path": "/me/order/{orderId}/details"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "billing.Payment",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "long",
              "dataType": "long",
              "name": "orderId"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Payment",
          "httpMethod": "GET",
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a payment",
      "path": "/me/order/{orderId}/payment"
    },
    {
      "description": "Task running an email change on an account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.emailChange.Task",
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "nichandle.emailChange.Task",
          "noAuthentication": false
        }
      ],
      "path": "/me/task/emailChange/{id}"
    },
    {
      "path": "/me/task/emailChange/{id}/accept",
      "operations": [
        {
          "resellerOnly": false,
          "description": "Accept this change request",
          "httpMethod": "POST",
          "responseFullType": "void",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "fullType": "string",
              "description": "The token you received by email for this request",
              "dataType": "string",
              "name": "token"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": null,
              "dataType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "accept operations"
    },
    {
      "description": "refuse operations",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "description": "Refuse this change request",
          "httpMethod": "POST",
          "responseFullType": "void",
          "parameters": [
            {
              "fullType": "string",
              "description": "The token you received by email for this request",
              "paramType": "body",
              "required": true,
              "name": "token",
              "dataType": "string"
            },
            {
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/task/emailChange/{id}/refuse"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "state",
              "dataType": "nichandle.changeEmail.TaskStateEnum",
              "description": "Filter the value of state property (like)",
              "fullType": "nichandle.changeEmail.TaskStateEnum",
              "paramType": "query",
              "required": false
            }
          ],
          "httpMethod": "GET",
          "description": "List of email change tasks you are involved in",
          "responseFullType": "long[]",
          "resellerOnly": false
        }
      ],
      "description": "List the nichandle.emailChange.Task objects",
      "path": "/me/task/emailChange"
    },
    {
      "description": "List the nichandle.contactChange.Task objects",
      "operations": [
        {
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "state",
              "dataType": "nichandle.changeContact.TaskStateEnum",
              "fullType": "nichandle.changeContact.TaskStateEnum",
              "description": "Filter the value of state property (like)",
              "paramType": "query",
              "required": false
            },
            {
              "description": "Filter the value of toAccount property (like)",
              "fullType": "coreTypes.AccountId:string",
              "paramType": "query",
              "required": false,
              "name": "toAccount",
              "dataType": "string"
            },
            {
              "dataType": "string",
              "name": "askingAccount",
              "required": false,
              "paramType": "query",
              "fullType": "coreTypes.AccountId:string",
              "description": "Filter the value of askingAccount property (like)"
            }
          ],
          "description": "List of service contact change tasks you are involved in",
          "httpMethod": "GET",
          "responseFullType": "long[]",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/task/contactChange"
    },
    {
      "description": "Task running a contact change on a service",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "nichandle.contactChange.Task",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "nichandle.contactChange.Task",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "fullType": "long",
              "description": null,
              "paramType": "path",
              "required": true
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/task/contactChange/{id}"
    },
    {
      "path": "/me/task/contactChange/{id}/refuse",
      "description": "refuse operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "token",
              "required": true,
              "paramType": "body",
              "description": "The token you received by email for this request",
              "fullType": "string"
            },
            {
              "name": "id",
              "dataType": "long",
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "responseFullType": "void",
          "description": "Refuse this change request",
          "httpMethod": "POST",
          "resellerOnly": false
        }
      ]
    },
    {
      "path": "/me/task/contactChange/{id}/accept",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "token",
              "required": true,
              "paramType": "body",
              "fullType": "string",
              "description": "The token you received by email for this request"
            },
            {
              "required": true,
              "paramType": "path",
              "description": null,
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ],
          "httpMethod": "POST",
          "description": "Accept this change request",
          "responseFullType": "void",
          "resellerOnly": false
        }
      ],
      "description": "accept operations"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "POST",
          "description": "This call will send you a new email, containing a new token"
        }
      ],
      "description": "resendEmail operations",
      "path": "/me/task/contactChange/{id}/resendEmail"
    },
    {
      "path": "/me/task/domain/{id}/cancel",
      "description": "cancel operations",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "void",
          "description": "Cancel the task",
          "httpMethod": "POST",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "Id of the task"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "description": "relaunch operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "httpMethod": "POST",
          "description": "Relaunch the task",
          "responseFullType": "void",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "Id of the task",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ]
        }
      ],
      "path": "/me/task/domain/{id}/relaunch"
    },
    {
      "description": "accelerate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "responseFullType": "void",
          "description": "Accelerate the task",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "description": "Id of the task",
              "fullType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "void"
        }
      ],
      "path": "/me/task/domain/{id}/accelerate"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "nichandle.DomainTaskArgument",
          "description": "Get this object properties",
          "parameters": [
            {
              "fullType": "long",
              "description": "Id of the task",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "Key of the argument",
              "dataType": "string",
              "name": "key"
            }
          ],
          "noAuthentication": false,
          "responseType": "nichandle.DomainTaskArgument",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "resellerOnly": false,
          "description": "Alter this object properties",
          "responseFullType": "void",
          "httpMethod": "PUT",
          "parameters": [
            {
              "fullType": "nichandle.DomainTaskArgument",
              "description": "New object properties",
              "paramType": "body",
              "required": true,
              "name": null,
              "dataType": "nichandle.DomainTaskArgument"
            },
            {
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "Id of the task",
              "dataType": "long",
              "name": "id"
            },
            {
              "description": "Key of the argument",
              "fullType": "string",
              "paramType": "path",
              "required": true,
              "name": "key",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Domain operation argument",
      "path": "/me/task/domain/{id}/argument/{key}"
    },
    {
      "path": "/me/task/domain/{id}/argument",
      "description": "List the nichandle.DomainTaskArgument objects",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "string[]",
          "resellerOnly": false,
          "description": "List of arguments",
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "Id of the task",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "nichandle.DomainTaskProgressBar",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "Id of the task",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "nichandle.DomainTaskProgressBar",
          "httpMethod": "GET",
          "description": "Get this object properties"
        }
      ],
      "description": "Domain operation progress",
      "path": "/me/task/domain/{id}/progressbar"
    },
    {
      "description": "Domain tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseFullType": "nichandle.DomainTask",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "Id of the task",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false,
          "responseType": "nichandle.DomainTask"
        }
      ],
      "path": "/me/task/domain/{id}"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "fullType": "string",
              "description": "Filter the value of domain property (like)",
              "paramType": "query",
              "required": false
            },
            {
              "required": false,
              "paramType": "query",
              "description": "Filter the value of function property (like)",
              "fullType": "domain.NicOperationFunctionEnum",
              "dataType": "domain.NicOperationFunctionEnum",
              "name": "function"
            },
            {
              "dataType": "domain.OperationStatusEnum",
              "name": "status",
              "required": false,
              "paramType": "query",
              "description": "Filter the value of status property (=)",
              "fullType": "domain.OperationStatusEnum"
            }
          ],
          "description": "List of domain task",
          "httpMethod": "GET",
          "responseFullType": "long[]",
          "resellerOnly": false,
          "responseType": "long[]",
          "noAuthentication": false
        }
      ],
      "description": "List the nichandle.DomainTask objects",
      "path": "/me/task/domain"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Initiate a password change procedure",
          "httpMethod": "POST",
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [],
          "noAuthentication": false,
          "responseType": "void"
        }
      ],
      "path": "/me/changePassword"
    },
    {
      "path": "/me/subscription/{subscriptionType}",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "nichandle.Subscription",
          "httpMethod": "GET",
          "responseFullType": "nichandle.Subscription",
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "subscriptionType",
              "dataType": "string",
              "fullType": "string",
              "description": "The type of subscription",
              "paramType": "path",
              "required": true
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.Subscription",
              "name": null,
              "required": true,
              "paramType": "body",
              "description": "New object properties",
              "fullType": "nichandle.Subscription"
            },
            {
              "dataType": "string",
              "name": "subscriptionType",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The type of subscription"
            }
          ],
          "responseFullType": "void",
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "resellerOnly": false
        }
      ],
      "description": "List of all OVH things you can subscribe to"
    },
    {
      "description": "List the nichandle.Subscription objects",
      "operations": [
        {
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseFullType": "string[]",
          "description": "List of all OVH things you can subscribe to",
          "parameters": [],
          "noAuthentication": false,
          "responseType": "string[]",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "path": "/me/subscription"
    },
    {
      "path": "/me/subAccount",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "long[]",
          "noAuthentication": false,
          "parameters": [],
          "resellerOnly": false,
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "description": "List of sub-accounts"
        },
        {
          "noAuthentication": false,
          "responseType": "long",
          "httpMethod": "POST",
          "responseFullType": "long",
          "description": "Create a new sub-account",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "fullType": "string",
              "description": "Description of the new sub-account",
              "paramType": "body",
              "required": false
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List the nichandle.SubAccount objects"
    },
    {
      "path": "/me/subAccount/{id}",
      "description": "Sub Account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseType": "nichandle.SubAccount",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Id of the object",
              "fullType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "nichandle.SubAccount"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "parameters": [
            {
              "fullType": "nichandle.SubAccount",
              "description": "New object properties",
              "paramType": "body",
              "required": true,
              "name": null,
              "dataType": "nichandle.SubAccount"
            },
            {
              "fullType": "long",
              "description": "Id of the object",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseType": "void",
          "noAuthentication": false
        }
      ]
    },
    {
      "path": "/me/subAccount/{id}/createConsumerKey",
      "description": "createConsumerKey operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "description": "Create a consumer key for the current application",
          "responseFullType": "nichandle.SubAccountConsumerKey",
          "httpMethod": "POST",
          "parameters": [
            {
              "fullType": "long",
              "description": "Id of the object",
              "paramType": "path",
              "required": true,
              "name": "id",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "responseType": "nichandle.SubAccountConsumerKey"
        }
      ]
    },
    {
      "path": "/me/sla",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "long[]",
          "description": "List active SLA",
          "httpMethod": "GET",
          "responseFullType": "long[]",
          "resellerOnly": false,
          "parameters": []
        }
      ],
      "description": "List the billing.SlaOperation objects"
    },
    {
      "path": "/me/sla/{id}/apply",
      "operations": [
        {
          "resellerOnly": false,
          "httpMethod": "POST",
          "description": "Ask for SLA application",
          "responseFullType": "void",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "Id of the object",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "apply operations"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status request of this SLA",
          "httpMethod": "GET",
          "responseFullType": "string",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "fullType": "long",
              "description": "Id of the object",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseType": "string"
        }
      ],
      "description": "status operations",
      "path": "/me/sla/{id}/status"
    },
    {
      "path": "/me/sla/{id}/canBeApplied",
      "description": "canBeApplied operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "boolean",
          "description": "Check whether this SLA can be applied on your services",
          "httpMethod": "GET",
          "responseFullType": "boolean",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "fullType": "long",
              "description": "Id of the object"
            }
          ]
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "noAuthentication": false,
          "responseType": "billing.SlaOperation",
          "resellerOnly": false,
          "httpMethod": "GET",
          "description": "Get this object properties",
          "responseFullType": "billing.SlaOperation",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "description": "Id of the object",
              "fullType": "long",
              "dataType": "long",
              "name": "id"
            }
          ]
        }
      ],
      "description": "SLA properties",
      "path": "/me/sla/{id}"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "billing.SlaOperationService[]",
          "httpMethod": "GET",
          "description": "Get services impacted by this SLA",
          "responseFullType": "billing.SlaOperationService[]",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "services operations",
      "path": "/me/sla/{id}/services"
    },
    {
      "path": "/me/availableAutomaticPaymentMeans",
      "description": "availableAutomaticPaymentMeans operations",
      "operations": [
        {
          "httpMethod": "GET",
          "description": "List available payment methods in this Nic's country",
          "responseFullType": "billing.AutomaticPaymentMean",
          "resellerOnly": false,
          "parameters": [],
          "noAuthentication": false,
          "responseType": "billing.AutomaticPaymentMean",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    },
    {
      "path": "/me/passwordRecover",
      "operations": [
        {
          "description": "Request a password recover",
          "responseFullType": "void",
          "httpMethod": "POST",
          "resellerOnly": false,
          "parameters": [
            {
              "dataType": "string",
              "name": "ovhId",
              "required": true,
              "paramType": "body",
              "description": "Your OVH Account Id",
              "fullType": "string"
            },
            {
              "name": "ovhCompany",
              "dataType": "nichandle.OvhCompanyEnum",
              "description": "Company of your OVH Account Id",
              "fullType": "nichandle.OvhCompanyEnum",
              "paramType": "body",
              "required": true
            }
          ],
          "noAuthentication": true,
          "responseType": "void",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Request a password recover"
    },
    {
      "path": "/me/refund/export",
      "description": "Exports a bundle of refunds",
      "operations": [
        {
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseFullType": "void",
          "description": "Exports a bundle of refunds",
          "parameters": [
            {
              "fullType": "string[]",
              "description": "A list of ids to export",
              "paramType": "body",
              "required": false,
              "name": "ids",
              "dataType": "string[]"
            },
            {
              "required": false,
              "paramType": "body",
              "fullType": "datetime",
              "description": "Start interval of the export",
              "dataType": "datetime",
              "name": "startDate"
            },
            {
              "fullType": "billing.ArchiveTypeEnum",
              "description": "The file type of the archive",
              "paramType": "body",
              "required": true,
              "name": "archiveType",
              "dataType": "billing.ArchiveTypeEnum"
            },
            {
              "fullType": "datetime",
              "description": "End interval of the export",
              "paramType": "body",
              "required": false,
              "name": "endDate",
              "dataType": "datetime"
            }
          ],
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ]
    }
  ],
  "models": {
    "nichandle.NichandleSmsNotification": {
      "properties": {
        "updateDate": {
          "type": "datetime",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": true,
          "description": "Last update date"
        },
        "status": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "nichandle.NotificationStatusEnum",
          "description": "Status of your notification",
          "type": "nichandle.NotificationStatusEnum"
        },
        "abuse": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "boolean",
          "description": "Receive notification for abuse reports",
          "type": "boolean"
        },
        "phoneNumber": {
          "type": "string",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "description": "The phone number you want to receive notification on"
        },
        "creationDate": {
          "type": "datetime",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "description": "Creation date"
        }
      },
      "description": "SMS notifications",
      "namespace": "nichandle",
      "id": "NichandleSmsNotification"
    },
    "billing.FidelityMovement": {
      "namespace": "billing",
      "id": "FidelityMovement",
      "description": "Details about a fidelity account",
      "properties": {
        "movementId": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "long",
          "description": null,
          "type": "long"
        },
        "date": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "description": null,
          "type": "datetime"
        },
        "operation": {
          "type": "billing.fidelityAccount.OperationEnum",
          "readOnly": true,
          "fullType": "billing.fidelityAccount.OperationEnum",
          "canBeNull": false,
          "description": null
        },
        "balance": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "description": null,
          "type": "long"
        },
        "previousBalance": {
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "long",
          "type": "long"
        },
        "description": {
          "type": "string",
          "description": null,
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false
        },
        "order": {
          "type": "long",
          "description": null,
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false
        },
        "amount": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        }
      }
    },
    "billing.order.RegisteredPaymentMean": {
      "properties": {
        "paymentMean": {
          "description": null,
          "canBeNull": false,
          "type": "billing.ReusablePaymentMeanEnum"
        }
      },
      "description": "A registered payment mean",
      "namespace": "billing.order",
      "id": "RegisteredPaymentMean"
    },
    "nichandle.accessRestriction.U2FStatusEnum": {
      "namespace": "nichandle.accessRestriction",
      "id": "U2FStatusEnum",
      "enumType": "string",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation"
      ],
      "description": "Status of U2F account"
    },
    "http.MethodEnum": {
      "description": "All HTTP methods available",
      "enum": [
        "DELETE",
        "GET",
        "POST",
        "PUT"
      ],
      "id": "MethodEnum",
      "enumType": "string",
      "namespace": "http"
    },
    "nichandle.accessRestriction.SmsCode": {
      "description": "Send secret code",
      "properties": {
        "challenge": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        }
      },
      "id": "SmsCode",
      "namespace": "nichandle.accessRestriction"
    },
    "consumption.ConsumptionExportTaskStatusEnum": {
      "namespace": "consumption",
      "enumType": "string",
      "id": "ConsumptionExportTaskStatusEnum",
      "description": "Export task status",
      "enum": [
        "DOING",
        "DONE",
        "ERROR",
        "TODO"
      ]
    },
    "debt.entry.AssociatedObject": {
      "properties": {
        "paymentInfo": {
          "canBeNull": true,
          "description": null,
          "type": "debt.associatedObject.PaymentInfo"
        },
        "type": {
          "type": "debt.associatedObject.TypeEnum",
          "description": null,
          "canBeNull": true
        },
        "id": {
          "description": null,
          "canBeNull": true,
          "type": "string"
        },
        "subId": {
          "type": "string",
          "canBeNull": true,
          "description": null
        }
      },
      "description": "The object linked to this debt entry",
      "id": "AssociatedObject",
      "namespace": "debt.entry"
    },
    "api.Application": {
      "id": "Application",
      "namespace": "api",
      "description": "API Application",
      "properties": {
        "status": {
          "type": "api.ApplicationStatusEnum",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "api.ApplicationStatusEnum",
          "description": null
        },
        "applicationId": {
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "long"
        },
        "name": {
          "type": "string",
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string"
        },
        "applicationKey": {
          "type": "string",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": null
        },
        "description": {
          "type": "string",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        }
      }
    },
    "billing.WithdrawalDetail": {
      "namespace": "billing",
      "id": "WithdrawalDetail",
      "properties": {
        "totalPrice": {
          "fullType": "order.Price",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "order.Price"
        },
        "unitPrice": {
          "type": "order.Price",
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "order.Price"
        },
        "description": {
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "type": "string"
        },
        "domain": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "withdrawalDetailId": {
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": null
        },
        "quantity": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": null,
          "type": "string"
        }
      },
      "description": "Information about a Withdrawal entry"
    },
    "contact.Contact": {
      "namespace": "contact",
      "id": "Contact",
      "description": "Representation of a Contact",
      "properties": {
        "organisationName": {
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string",
          "description": "Organisation name",
          "type": "string"
        },
        "birthCity": {
          "type": "string",
          "description": "Birth city",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true
        },
        "gender": {
          "canBeNull": true,
          "readOnly": false,
          "fullType": "nichandle.GenderEnum",
          "description": "Gender",
          "type": "nichandle.GenderEnum"
        },
        "language": {
          "description": "Language",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "nichandle.LanguageEnum",
          "type": "nichandle.LanguageEnum"
        },
        "companyNationalIdentificationNumber": {
          "type": "string",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true,
          "description": "National identification number of your company"
        },
        "id": {
          "type": "long",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "description": "Contact Identifier"
        },
        "vat": {
          "description": "VAT number",
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string",
          "type": "string"
        },
        "legalForm": {
          "description": "Legal form of the contact",
          "readOnly": false,
          "fullType": "nichandle.LegalFormEnum",
          "canBeNull": false,
          "type": "nichandle.LegalFormEnum"
        },
        "firstName": {
          "description": "First name",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "string",
          "type": "string"
        },
        "nationality": {
          "type": "nichandle.CountryEnum",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "nichandle.CountryEnum",
          "description": "Nationality"
        },
        "nationalIdentificationNumber": {
          "type": "string",
          "description": "National identification number of the contact",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string"
        },
        "birthCountry": {
          "description": "Birth Country",
          "canBeNull": true,
          "readOnly": false,
          "fullType": "nichandle.CountryEnum",
          "type": "nichandle.CountryEnum"
        },
        "birthZip": {
          "description": "Birth Zipcode",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "organisationType": {
          "type": "string",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true,
          "description": "Organisation type"
        },
        "birthDay": {
          "type": "date",
          "description": "Birth date",
          "fullType": "date",
          "readOnly": false,
          "canBeNull": true
        },
        "fax": {
          "type": "phoneNumber",
          "description": "Fax number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "canBeNull": true
        },
        "address": {
          "description": "Address for this contact",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "contact.Address",
          "type": "contact.Address"
        },
        "lastName": {
          "type": "string",
          "description": "Last name",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": false
        },
        "phone": {
          "readOnly": false,
          "fullType": "phoneNumber",
          "canBeNull": true,
          "description": "Telephone number",
          "type": "phoneNumber"
        },
        "email": {
          "type": "string",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "description": "Email address"
        },
        "spareEmail": {
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "description": "Spare email address",
          "type": "string"
        },
        "cellPhone": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "readOnly": false,
          "canBeNull": true,
          "description": "Cellphone number"
        }
      }
    },
    "billing.order.followUp.StepEnum": {
      "namespace": "billing.order.followUp",
      "id": "StepEnum",
      "enumType": "string",
      "description": "Status of order follow-up",
      "enum": [
        "AVAILABLE",
        "DELIVERING",
        "VALIDATED",
        "VALIDATING"
      ]
    },
    "coreTypes.CountryEnum": {
      "namespace": "coreTypes",
      "id": "CountryEnum",
      "enumType": "string",
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
      ]
    },
    "billing.order.followUp.HistoryStatusEnum": {
      "description": "History label of order follow-up",
      "enum": [
        "DELIVERY",
        "FRAUD_CHECK",
        "FRAUD_DOCS_REQUESTED",
        "FRAUD_MANUAL_REVIEW",
        "FRAUD_REFUSED",
        "INVOICE_IN_PROGRESS",
        "INVOICE_SENT",
        "ORDER_ACCEPTED",
        "ORDER_STARTED",
        "PAYMENT_CONFIRMED",
        "PAYMENT_INITIATED",
        "PAYMENT_RECEIVED",
        "REGISTERED_PAYMENT_INITIATED"
      ],
      "namespace": "billing.order.followUp",
      "id": "HistoryStatusEnum",
      "enumType": "string"
    },
    "nichandle.OvhCompanyEnum": {
      "enumType": "string",
      "id": "OvhCompanyEnum",
      "namespace": "nichandle",
      "description": "OVH subsidiaries",
      "enum": [
        "kimsufi",
        "ovh",
        "soyoustart"
      ]
    },
    "nichandle.ipxe": {
      "description": "Customer IPXE scripts",
      "properties": {
        "script": {
          "type": "text",
          "fullType": "text",
          "readOnly": true,
          "canBeNull": false,
          "description": "Content of your IPXE script"
        },
        "name": {
          "type": "string",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": "Name of this script"
        }
      },
      "id": "ipxe",
      "namespace": "nichandle"
    },
    "billing.CreditBalance": {
      "properties": {
        "balanceName": {
          "type": "string",
          "description": "Credit balance name",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        },
        "amount": {
          "description": "Amount applied from the balance",
          "readOnly": true,
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price"
        }
      },
      "description": "Credit balance applied on an Order",
      "namespace": "billing",
      "id": "CreditBalance"
    },
    "billing.ItemDetail.Order": {
      "namespace": "billing.ItemDetail",
      "id": "Order",
      "description": "Order data for this Detail",
      "properties": {
        "action": {
          "description": "The meaning of this order detail",
          "canBeNull": true,
          "type": "billing.ItemDetail.OrderActionEnum"
        },
        "configurations": {
          "type": "billing.ItemDetail.OrderConfiguration[]",
          "canBeNull": false,
          "description": "Configurations chosen during the order"
        },
        "plan": {
          "description": "Plan from /order/cart",
          "canBeNull": false,
          "type": "billing.ItemDetail.OrderPlan"
        }
      }
    },
    "nichandle.SubAccount": {
      "properties": {
        "description": {
          "description": "This sub-account description",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "creationDate": {
          "type": "datetime",
          "description": "Creation date",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime"
        },
        "id": {
          "type": "long",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "long",
          "description": "This sub-account id"
        }
      },
      "description": "Sub Account",
      "id": "SubAccount",
      "namespace": "nichandle"
    },
    "billing.order.paymentMean.HttpParameterChoice": {
      "properties": {
        "value": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        },
        "name": {
          "type": "string",
          "canBeNull": false,
          "description": null
        }
      },
      "description": "Choice for an HTTP multi value parameter",
      "id": "HttpParameterChoice",
      "namespace": "billing.order.paymentMean"
    },
    "api.ApplicationStatusEnum": {
      "description": "List of state of an Api Application",
      "enum": [
        "active",
        "blocked",
        "inactive",
        "trusted"
      ],
      "id": "ApplicationStatusEnum",
      "enumType": "string",
      "namespace": "api"
    },
    "nichandle.Authentication.Certificate": {
      "id": "Certificate",
      "namespace": "nichandle.Authentication",
      "properties": {
        "expiration": {
          "type": "datetime",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "description": "Certificate's expiration"
        },
        "subject": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": "Certificate's subject",
          "type": "string"
        }
      },
      "description": "X509 Certificate"
    },
    "billing.paymentMethod.PaymentTypeEnum": {
      "enum": [
        "BANK_ACCOUNT",
        "CREDIT_CARD",
        "DEFERRED_PAYMENT_ACCOUNT",
        "ENTERPRISE",
        "INTERNAL_TRUSTED_ACCOUNT",
        "PAYPAL"
      ],
      "description": "List of payment type enum",
      "namespace": "billing.paymentMethod",
      "id": "PaymentTypeEnum",
      "enumType": "string"
    },
    "billing.ovhAccount.OperationEnum": {
      "id": "OperationEnum",
      "enumType": "string",
      "namespace": "billing.ovhAccount",
      "enum": [
        "cancel-credit",
        "cancel-debit",
        "cancel-pre-debit",
        "credit",
        "debit",
        "pre-credit",
        "pre-debit"
      ],
      "description": "Operations an OVH account movement can represent"
    },
    "billing.order.AssociatedObject": {
      "description": "The object the processing of the order leaded to",
      "properties": {
        "id": {
          "type": "string",
          "canBeNull": true,
          "description": null
        },
        "type": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.associatedObject.TypeEnum"
        }
      },
      "namespace": "billing.order",
      "id": "AssociatedObject"
    },
    "debt.associatedObject.TypeEnum": {
      "description": "Type of objects an order can be linked to",
      "enum": [
        "Bill",
        "DebtOperation",
        "Deposit",
        "Order",
        "OvhAccountMovement",
        "Refund",
        "Withdrawal"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "debt.associatedObject"
    },
    "nichandle.DeveloperModeRestriction": {
      "description": "Login restrictions on a development version of the Manager",
      "properties": {
        "enabled": {
          "canBeNull": false,
          "readOnly": false,
          "fullType": "boolean",
          "description": "Allow login on your account on a development version of the Manager",
          "type": "boolean"
        }
      },
      "id": "DeveloperModeRestriction",
      "namespace": "nichandle"
    },
    "me.consent.Consent": {
      "id": "Consent",
      "namespace": "me.consent",
      "properties": {
        "history": {
          "type": "me.consent.Decision[]",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "me.consent.Decision[]",
          "description": "Consent decisions history for this campaign"
        },
        "type": {
          "type": "me.consent.CampaignTypeEnum",
          "description": "Campaign type",
          "fullType": "me.consent.CampaignTypeEnum",
          "readOnly": true,
          "canBeNull": false
        },
        "value": {
          "type": "boolean",
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": false,
          "description": "Current consent value"
        },
        "campaign": {
          "description": "Campaign name",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "type": "string"
        }
      },
      "description": "Customer consent information for a campaign"
    },
    "nichandle.VoucherStatus": {
      "description": "Voucher Status and Information",
      "properties": {
        "validity": {
          "type": "boolean",
          "canBeNull": false,
          "description": "Is voucher valid"
        }
      },
      "id": "VoucherStatus",
      "namespace": "nichandle"
    },
    "nichandle.changeContact.ContactTypeEnum": {
      "description": "Allowed types of contact who can be changed by change contact task",
      "enum": [
        "contactAdmin",
        "contactBilling",
        "contactTech"
      ],
      "namespace": "nichandle.changeContact",
      "id": "ContactTypeEnum",
      "enumType": "string"
    },
    "debt.entry.StatusDebtOrderEnum": {
      "description": "All status a debt HistoryOrder entry can be in",
      "enum": [
        "PAID",
        "REFUNDED",
        "TO_BE_PAID",
        "UNMATURED",
        "UNPAID"
      ],
      "id": "StatusDebtOrderEnum",
      "enumType": "string",
      "namespace": "debt.entry"
    },
    "me.consent.Campaign": {
      "namespace": "me.consent",
      "id": "Campaign",
      "description": "Consent campaign",
      "properties": {
        "name": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": "Campaign name",
          "type": "string"
        },
        "type": {
          "fullType": "me.consent.CampaignTypeEnum",
          "readOnly": true,
          "canBeNull": false,
          "description": "Campaign type",
          "type": "me.consent.CampaignTypeEnum"
        },
        "description": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": "Campaign description",
          "type": "string"
        }
      }
    },
    "nichandle.LanguageEnum": {
      "description": "Languages a nichandle can choose",
      "enum": [
        "cs_CZ",
        "de_DE",
        "en_AU",
        "en_CA",
        "en_GB",
        "en_IE",
        "en_US",
        "es_ES",
        "fi_FI",
        "fr_CA",
        "fr_FR",
        "fr_MA",
        "fr_SN",
        "fr_TN",
        "it_IT",
        "lt_LT",
        "nl_NL",
        "pl_PL",
        "pt_PT"
      ],
      "enumType": "string",
      "id": "LanguageEnum",
      "namespace": "nichandle"
    },
    "nichandle.User": {
      "id": "User",
      "namespace": "nichandle",
      "description": "A user",
      "properties": {
        "lastUpdate": {
          "type": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "description": "Last update of this user"
        },
        "email": {
          "type": "string",
          "description": "User's email",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string"
        },
        "group": {
          "description": "User's group",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": false,
          "type": "string"
        },
        "creation": {
          "type": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "description": "Creation date of this user"
        },
        "description": {
          "type": "string",
          "description": "User's description",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "string"
        },
        "login": {
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "description": "User's login suffix",
          "type": "string"
        },
        "status": {
          "fullType": "nichandle.UserStatus",
          "readOnly": true,
          "canBeNull": false,
          "description": "Current user's status",
          "type": "nichandle.UserStatus"
        },
        "passwordLastUpdate": {
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "description": "When the user changed his password for the last time",
          "type": "datetime"
        }
      }
    },
    "nichandle.ManagerPreference": {
      "id": "ManagerPreference",
      "namespace": "nichandle",
      "description": "Manager preference",
      "properties": {
        "key": {
          "type": "string",
          "description": "This preference key",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        },
        "value": {
          "type": "text",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "text",
          "description": "This preference value"
        }
      }
    },
    "billing.fidelityAccount.OperationEnum": {
      "description": "Operations a fidelity account movement can represent",
      "enum": [
        "bonus",
        "cancel-bonus",
        "cancel-credit",
        "cancel-debit",
        "cancel-pre-debit",
        "credit",
        "debit",
        "pre-credit",
        "pre-debit"
      ],
      "id": "OperationEnum",
      "enumType": "string",
      "namespace": "billing.fidelityAccount"
    },
    "billing.AutomaticPaymentMean": {
      "properties": {
        "creditCard": {
          "canBeNull": false,
          "description": "Credit Card",
          "type": "boolean"
        },
        "bankAccount": {
          "canBeNull": false,
          "description": "Bank Account",
          "type": "boolean"
        },
        "paypal": {
          "canBeNull": false,
          "description": "Paypal account",
          "type": "boolean"
        },
        "deferredPaymentAccount": {
          "canBeNull": false,
          "description": "Deferred invoice payment account for authorized customers",
          "type": "boolean"
        }
      },
      "description": "Available automatic payment means",
      "namespace": "billing",
      "id": "AutomaticPaymentMean"
    },
    "nichandle.accessRestriction.IpRestrictionRuleEnum": {
      "enum": [
        "accept",
        "deny"
      ],
      "description": "Accept or deny IP access",
      "id": "IpRestrictionRuleEnum",
      "enumType": "string",
      "namespace": "nichandle.accessRestriction"
    },
    "billing.PaymentMethod": {
      "properties": {
        "default": {
          "type": "boolean",
          "canBeNull": true,
          "description": "Is this payment method set as the default one"
        },
        "id": {
          "canBeNull": false,
          "description": "Payment method id",
          "type": "long"
        },
        "paymentSubType": {
          "description": "Payment sub type",
          "canBeNull": true,
          "type": "billing.paymentMethod.PaymentSubTypeEnum"
        },
        "publicLabel": {
          "type": "string",
          "description": "Public payment method label",
          "canBeNull": false
        },
        "status": {
          "description": "Payment method status enum",
          "canBeNull": false,
          "type": "billing.paymentMethod.StatusEnum"
        },
        "billingContactId": {
          "canBeNull": false,
          "description": "Billing contact ID",
          "type": "long"
        },
        "creationDate": {
          "type": "date",
          "description": "Creation date of the payment method",
          "canBeNull": false
        },
        "paymentType": {
          "type": "billing.paymentMethod.PaymentTypeEnum",
          "description": "Payment type",
          "canBeNull": false
        },
        "description": {
          "description": "Customer personalized description",
          "canBeNull": false,
          "type": "string"
        }
      },
      "description": "Available payment methods",
      "id": "PaymentMethod",
      "namespace": "billing"
    },
    "agreements.Contract": {
      "properties": {
        "date": {
          "type": "date",
          "readOnly": true,
          "fullType": "date",
          "canBeNull": false,
          "description": "Date the contract was created on"
        },
        "pdf": {
          "description": "URL you can download the contract at",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "type": "string"
        },
        "text": {
          "type": "string",
          "description": "Full text of the contract",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string"
        },
        "name": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": "Name of of the contract",
          "type": "string"
        },
        "active": {
          "description": "Is this contract currently active or not ?",
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "description": "Contract of service",
      "id": "Contract",
      "namespace": "agreements"
    },
    "auth.CredentialStateEnum": {
      "enum": [
        "expired",
        "pendingValidation",
        "refused",
        "validated"
      ],
      "description": "All states a Credential can be in",
      "enumType": "string",
      "id": "CredentialStateEnum",
      "namespace": "auth"
    },
    "me.payment.method.AvailablePaymentMethod": {
      "id": "AvailablePaymentMethod",
      "namespace": "me.payment.method",
      "properties": {
        "registerable": {
          "type": "boolean",
          "readOnly": false,
          "fullType": "boolean",
          "canBeNull": false,
          "description": "Payment method type is registerable ?"
        },
        "integration": {
          "readOnly": false,
          "canBeNull": false,
          "fullType": "payment.method.IntegrationType",
          "description": "Payment method integration type",
          "type": "payment.method.IntegrationType"
        },
        "oneshot": {
          "type": "boolean",
          "description": "Payment method type is possible to pay in oneshot mode ?",
          "readOnly": false,
          "fullType": "boolean",
          "canBeNull": false
        },
        "paymentType": {
          "description": "Payment method type",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "registerableWithTransaction": {
          "description": "Payment method type is registerable with the possibility to pay in same time an order ?",
          "fullType": "boolean",
          "readOnly": false,
          "canBeNull": false,
          "type": "boolean"
        },
        "icon": {
          "type": "me.payment.method.Icon",
          "description": "Payment method type icon",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "me.payment.method.Icon"
        }
      },
      "description": "Available payment method object"
    },
    "debt.Debt": {
      "id": "Debt",
      "namespace": "debt",
      "description": "State of a debt",
      "properties": {
        "amount": {
          "type": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "order.Price",
          "description": "Original amount of the debt"
        },
        "orderId": {
          "type": "long",
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false,
          "description": "The order the debt relates to"
        },
        "todoAmount": {
          "fullType": "order.Price",
          "readOnly": true,
          "canBeNull": false,
          "description": "Reserved amount awaiting payment",
          "type": "order.Price"
        },
        "pendingAmount": {
          "description": "Amount currently being processed",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price"
        },
        "unmaturedAmount": {
          "type": "order.Price",
          "description": "Unmatured amount for deferred payment term",
          "readOnly": true,
          "fullType": "order.Price",
          "canBeNull": false
        },
        "status": {
          "description": "Status of a debt",
          "fullType": "debt.entry.StatusDebtOrderEnum",
          "readOnly": true,
          "canBeNull": false,
          "type": "debt.entry.StatusDebtOrderEnum"
        },
        "dueAmount": {
          "type": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "order.Price",
          "description": "Amount you still owe for that debt"
        },
        "dueDate": {
          "description": "If specified, the debt will not be recovered before that date",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "datetime",
          "type": "datetime"
        },
        "debtId": {
          "type": "long",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "long",
          "description": null
        },
        "date": {
          "type": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "description": "Date the debt was created on"
        }
      }
    },
    "billing.ArchiveTypeEnum": {
      "description": "List of available archive types",
      "enum": [
        "csv",
        "zip"
      ],
      "namespace": "billing",
      "enumType": "string",
      "id": "ArchiveTypeEnum"
    },
    "nichandle.DomainTask": {
      "namespace": "nichandle",
      "id": "DomainTask",
      "properties": {
        "doneDate": {
          "type": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "datetime",
          "description": "Done date of the task"
        },
        "todoDate": {
          "type": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime",
          "description": "Todo date of the task"
        },
        "canRelaunch": {
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": false,
          "description": "Can relaunch the task",
          "type": "boolean"
        },
        "lastUpdate": {
          "type": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "description": "Last update date of the task"
        },
        "comment": {
          "type": "string",
          "description": "Comment about the task",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "string"
        },
        "status": {
          "description": "Status of the task",
          "fullType": "domain.OperationStatusEnum",
          "readOnly": true,
          "canBeNull": false,
          "type": "domain.OperationStatusEnum"
        },
        "id": {
          "type": "long",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "long",
          "description": "Id of the task"
        },
        "creationDate": {
          "type": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "description": "Creation date of the task"
        },
        "canAccelerate": {
          "type": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "boolean",
          "description": "Can accelerate the task"
        },
        "domain": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": "Domain of the task",
          "type": "string"
        },
        "canCancel": {
          "type": "boolean",
          "description": "Can cancel the task",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "boolean"
        },
        "function": {
          "type": "domain.NicOperationFunctionEnum",
          "description": "Function of the task",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "domain.NicOperationFunctionEnum"
        }
      },
      "description": "Domain tasks"
    },
    "billing.PaymentMeanValidation": {
      "namespace": "billing",
      "id": "PaymentMeanValidation",
      "description": "A validation required to add a payment mean",
      "properties": {
        "id": {
          "type": "long",
          "canBeNull": false,
          "description": null
        },
        "validationType": {
          "description": null,
          "canBeNull": false,
          "type": "billing.PaymentMeanValidationType"
        },
        "url": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "submitUrl": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        }
      }
    },
    "billing.CategoryEnum": {
      "namespace": "billing",
      "enumType": "string",
      "id": "CategoryEnum",
      "description": "Types of plans",
      "enum": [
        "autorenew",
        "earlyrenewal",
        "purchase",
        "purchase-cloud",
        "purchase-servers",
        "purchase-telecom",
        "purchase-web"
      ]
    },
    "xander.ContactFieldEnum": {
      "id": "ContactFieldEnum",
      "enumType": "string",
      "namespace": "xander",
      "description": "Available contact fields",
      "enum": [
        "address.city",
        "address.country",
        "address.line1",
        "address.line2",
        "address.line3",
        "address.otherDetails",
        "address.province",
        "address.zip",
        "birthCity",
        "birthCountry",
        "birthDay",
        "birthZip",
        "cellPhone",
        "companyNationalIdentificationNumber",
        "email",
        "fax",
        "firstName",
        "gender",
        "language",
        "lastName",
        "legalForm",
        "nationalIdentificationNumber",
        "nationality",
        "organisationName",
        "organisationType",
        "phone",
        "spareEmail",
        "vat"
      ]
    },
    "billing.CreditCard": {
      "properties": {
        "number": {
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": null
        },
        "id": {
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false,
          "type": "long"
        },
        "state": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "billing.CreditCardStateEnum",
          "type": "billing.CreditCardStateEnum"
        },
        "defaultPaymentMean": {
          "description": null,
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": false,
          "type": "boolean"
        },
        "threeDsValidated": {
          "description": "True if this credit card has been registered with a successful 3DSecure challenge",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean"
        },
        "icon": {
          "description": "Payment method type icon",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "billing.paymentMethod.IconData",
          "type": "billing.paymentMethod.IconData"
        },
        "type": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": null,
          "type": "string"
        },
        "expirationDate": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "date",
          "type": "date"
        },
        "description": {
          "description": "Custom description of this account",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true,
          "type": "string"
        }
      },
      "description": "Credit card informations",
      "namespace": "billing",
      "id": "CreditCard"
    },
    "nichandle.IpRestrictionDefaultRule": {
      "id": "IpRestrictionDefaultRule",
      "namespace": "nichandle",
      "properties": {
        "warning": {
          "description": "Send an email if someone try to access",
          "readOnly": false,
          "fullType": "boolean",
          "canBeNull": false,
          "type": "boolean"
        },
        "rule": {
          "type": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "description": "Accept or deny access",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum"
        }
      },
      "description": "IP Restriction default rule"
    },
    "billing.VoucherAccount": {
      "namespace": "billing",
      "id": "VoucherAccount",
      "properties": {
        "openDate": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime"
        },
        "balance": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "order.Price",
          "description": null,
          "type": "order.Price"
        },
        "voucherAccountId": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "lastUpdate": {
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "type": "datetime"
        }
      },
      "description": "Details about a Voucher account"
    },
    "nichandle.accessRestriction.SmsAccount": {
      "id": "SmsAccount",
      "namespace": "nichandle.accessRestriction",
      "description": "Sms Two-Factor Authentication",
      "properties": {
        "id": {
          "description": "The Id of the restriction",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        },
        "lastUsedDate": {
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": true,
          "description": "Last used date",
          "type": "datetime"
        },
        "status": {
          "type": "nichandle.accessRestriction.SmsStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "nichandle.accessRestriction.SmsStatusEnum",
          "description": "Status of this account"
        },
        "phoneNumber": {
          "type": "string",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "description": "Associated phone number"
        },
        "description": {
          "type": "string",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "string",
          "description": "Description of this phone"
        },
        "creationDate": {
          "type": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "description": "Creation date"
        }
      }
    },
    "domain.OperationStep": {
      "properties": {
        "executionDuration": {
          "canBeNull": false,
          "description": "Execution time of the step",
          "type": "long"
        },
        "step": {
          "type": "string",
          "description": "Name of the step",
          "canBeNull": false
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the step",
          "type": "string"
        }
      },
      "description": "One step from an operation",
      "namespace": "domain",
      "id": "OperationStep"
    },
    "me.payment.method.Register.ValidationResult": {
      "id": "ValidationResult",
      "namespace": "me.payment.method.Register",
      "description": "Register validation payload result",
      "properties": {
        "organizationId": {
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true,
          "description": "Organization ID",
          "type": "string"
        },
        "merchantId": {
          "type": "string",
          "description": "Merchant ID",
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string"
        },
        "paymentMethodId": {
          "fullType": "long",
          "readOnly": false,
          "canBeNull": false,
          "description": "Register new payment method ID",
          "type": "long"
        },
        "validationType": {
          "description": "Register validation type",
          "fullType": "payment.method.IntegrationType",
          "readOnly": false,
          "canBeNull": false,
          "type": "payment.method.IntegrationType"
        },
        "url": {
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "description": "Register validation URL",
          "type": "string"
        },
        "formSessionId": {
          "type": "string",
          "description": "Form session ID",
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string"
        }
      }
    },
    "debt.entry.OperationEnum": {
      "enumType": "string",
      "id": "OperationEnum",
      "namespace": "debt.entry",
      "enum": [
        "CANCEL",
        "CASH_MANUAL",
        "CHECK_MANUAL",
        "CREDITCARD",
        "CREDITCARD_AUTOMATIC",
        "CREDITCARD_MANUAL",
        "CREDIT_ACCOUNT_AUTOMATIC",
        "EDINAR_MANUAL",
        "IDEAL_MANUAL",
        "MULTIBANCO_MANUAL",
        "ORDER",
        "PAYPAL_AUTOMATIC",
        "PAYPAL_MANUAL",
        "PAYU_MANUAL",
        "RECOVERY_TRANSFER_AUTOMATIC",
        "REFUND",
        "REFUND_CHECK",
        "REFUND_CREDITCARD",
        "REFUND_CREDIT_ACCOUNT",
        "REFUND_LOSS",
        "REFUND_PAYPAL",
        "REFUND_PAYU",
        "REFUND_SEPA",
        "REFUND_TRANSFER",
        "REFUND_UNKNOWN",
        "SEPA_AUTOMATIC",
        "TRANSFER_MANUAL",
        "UNPAID_CHECK",
        "UNPAID_CREDITCARD",
        "UNPAID_CREDIT_ACCOUNT",
        "UNPAID_PAYPAL",
        "UNPAID_SEPA",
        "UNPAID_WITHDRAW",
        "WARRANT_MANUAL",
        "WITHDRAW_AUTOMATIC"
      ],
      "description": "All operations a debt entry can represent"
    },
    "contact.FieldInformation": {
      "properties": {
        "mandatory": {
          "type": "boolean",
          "description": "Indicates if the field is mandatory when editing",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "boolean"
        },
        "readOnly": {
          "type": "boolean",
          "readOnly": false,
          "fullType": "boolean",
          "canBeNull": false,
          "description": "Indicates if the field can't be edited"
        },
        "fieldName": {
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "description": "Name of the field concerned by restrictions",
          "type": "string"
        }
      },
      "description": "Extras informations about a field",
      "id": "FieldInformation",
      "namespace": "contact"
    },
    "dedicated.TemplateOsHardwareRaidEnum": {
      "namespace": "dedicated",
      "id": "TemplateOsHardwareRaidEnum",
      "enumType": "string",
      "description": "Hardware RAID enum",
      "enum": [
        "raid0",
        "raid1",
        "raid10",
        "raid5",
        "raid50",
        "raid6",
        "raid60"
      ]
    },
    "billing.order.OrderStatusEnum": {
      "description": "All possible order status",
      "enum": [
        "cancelled",
        "cancelling",
        "checking",
        "delivered",
        "delivering",
        "documentsRequested",
        "notPaid",
        "unknown"
      ],
      "id": "OrderStatusEnum",
      "enumType": "string",
      "namespace": "billing.order"
    },
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
      "description": "",
      "id": "CurrencyCodeEnum",
      "enumType": "string",
      "namespace": "order"
    },
    "billing.order.FollowUp": {
      "namespace": "billing.order",
      "id": "FollowUp",
      "properties": {
        "history": {
          "canBeNull": false,
          "description": "Step history of order follow-up",
          "type": "billing.order.followUp.History[]"
        },
        "status": {
          "type": "billing.order.followUp.StatusEnum",
          "description": "Step status of order follow-up",
          "canBeNull": false
        },
        "step": {
          "description": "Step of order follow-up",
          "canBeNull": false,
          "type": "billing.order.followUp.StepEnum"
        }
      },
      "description": "Follow up history of an order"
    },
    "nichandle.accessRestriction.SOTPAccount": {
      "namespace": "nichandle.accessRestriction",
      "id": "SOTPAccount",
      "properties": {
        "creationDate": {
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "type": "datetime"
        },
        "remaining": {
          "type": "long",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "long",
          "description": "Number of remaining codes"
        },
        "lastUsedDate": {
          "readOnly": true,
          "canBeNull": true,
          "fullType": "datetime",
          "description": "Last used date",
          "type": "datetime"
        },
        "status": {
          "type": "nichandle.accessRestriction.SOTPStatusEnum",
          "description": "Status of this account",
          "readOnly": true,
          "fullType": "nichandle.accessRestriction.SOTPStatusEnum",
          "canBeNull": false
        }
      },
      "description": "SOTP Two-Factor Authentication"
    },
    "billing.PaymentMeanValidationType": {
      "enum": [
        "creditAccount",
        "documentToSend",
        "simpleValidation"
      ],
      "description": "All the validation you may have to do",
      "id": "PaymentMeanValidationType",
      "enumType": "string",
      "namespace": "billing"
    },
    "billing.Paypal": {
      "properties": {
        "id": {
          "type": "long",
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false
        },
        "creationDate": {
          "type": "datetime",
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false
        },
        "state": {
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "billing.PaypalStateEnum",
          "type": "billing.PaypalStateEnum"
        },
        "agreementId": {
          "type": "string",
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "defaultPaymentMean": {
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "boolean",
          "type": "boolean"
        },
        "icon": {
          "type": "billing.paymentMethod.IconData",
          "description": "Payment method type icon",
          "readOnly": true,
          "fullType": "billing.paymentMethod.IconData",
          "canBeNull": true
        },
        "email": {
          "type": "string",
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true,
          "description": "Custom description of this account"
        }
      },
      "description": "Paypal account info",
      "namespace": "billing",
      "id": "Paypal"
    },
    "nichandle.Authentication.Group": {
      "description": "A group",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": false,
          "description": "Group's description"
        },
        "creation": {
          "description": "Creation date of this group",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "type": "datetime"
        },
        "role": {
          "description": "Group's role",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "nichandle.Authentication.RoleEnum",
          "type": "nichandle.Authentication.RoleEnum"
        },
        "name": {
          "description": "Group's name",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "lastUpdate": {
          "type": "datetime",
          "description": "Last update of this group",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false
        },
        "defaultGroup": {
          "description": "True if it is an default group. This kind of group can't be edited or deleted",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "boolean",
          "type": "boolean"
        }
      },
      "id": "Group",
      "namespace": "nichandle.Authentication"
    },
    "nichandle.LegalFormEnum": {
      "namespace": "nichandle",
      "id": "LegalFormEnum",
      "enumType": "string",
      "description": "Legal forms a nichandle can be registered as",
      "enum": [
        "administration",
        "association",
        "corporation",
        "individual",
        "other",
        "personalcorporation"
      ]
    },
    "nichandle.accessRestriction.SmsStatusEnum": {
      "enumType": "string",
      "id": "SmsStatusEnum",
      "namespace": "nichandle.accessRestriction",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ],
      "description": "Status of the Sms account"
    },
    "nichandle.Subscription": {
      "properties": {
        "registered": {
          "fullType": "boolean",
          "readOnly": false,
          "canBeNull": true,
          "description": "Determine whether you are registered or not",
          "type": "boolean"
        },
        "type": {
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": "The type of subscription"
        }
      },
      "description": "List of all OVH things you can subscribe to",
      "namespace": "nichandle",
      "id": "Subscription"
    },
    "billing.paymentMethod.StatusEnum": {
      "enum": [
        "BLOCKED",
        "BLOCKED_BY_CUSTOMER",
        "BROKEN",
        "CANCELED",
        "CANCELED_BY_CUSTOMER",
        "CREATED",
        "ERROR",
        "EXPIRED",
        "PAUSED",
        "VALID",
        "VALID_FOR_CREDIT"
      ],
      "description": "List of payment method status enum",
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "billing.paymentMethod"
    },
    "nichandle.changeContact.TaskStateEnum": {
      "namespace": "nichandle.changeContact",
      "enumType": "string",
      "id": "TaskStateEnum",
      "enum": [
        "aborted",
        "checkValidity",
        "doing",
        "done",
        "error",
        "expired",
        "refused",
        "todo",
        "validatingByCustomers"
      ],
      "description": "State of contact change task"
    },
    "dedicated.TemplatePartitionTypeEnum": {
      "enum": [
        "logical",
        "lv",
        "primary"
      ],
      "description": "partition type",
      "enumType": "string",
      "id": "TemplatePartitionTypeEnum",
      "namespace": "dedicated"
    },
    "billing.OrderDetail": {
      "description": "Information about a Bill entry",
      "properties": {
        "domain": {
          "description": null,
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "description": {
          "type": "string",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        },
        "unitPrice": {
          "description": null,
          "readOnly": true,
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price"
        },
        "totalPrice": {
          "description": null,
          "readOnly": true,
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price"
        },
        "cancelled": {
          "description": null,
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": false,
          "type": "boolean"
        },
        "quantity": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "orderDetailId": {
          "type": "long",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "description": null
        }
      },
      "id": "OrderDetail",
      "namespace": "billing"
    },
    "nichandle.NicAutorenewInfos": {
      "id": "NicAutorenewInfos",
      "namespace": "nichandle",
      "properties": {
        "renewDay": {
          "canBeNull": false,
          "readOnly": false,
          "fullType": "long",
          "description": "give the renewal day",
          "type": "long"
        },
        "lastRenew": {
          "type": "datetime",
          "description": "give the last renew",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "datetime"
        },
        "active": {
          "description": "Renewal active or not",
          "readOnly": false,
          "fullType": "boolean",
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "description": "Auto renewal information"
    },
    "nichandle.accessRestriction.TOTPAccount": {
      "id": "TOTPAccount",
      "namespace": "nichandle.accessRestriction",
      "description": "TOTP Two-Factor Authentication",
      "properties": {
        "description": {
          "fullType": "string",
          "readOnly": false,
          "canBeNull": false,
          "description": "Description of this TOTP",
          "type": "string"
        },
        "creationDate": {
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "type": "datetime"
        },
        "status": {
          "type": "nichandle.accessRestriction.TOTPStatusEnum",
          "description": "Status of this account",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "nichandle.accessRestriction.TOTPStatusEnum"
        },
        "id": {
          "description": "The Id of the restriction",
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false,
          "type": "long"
        },
        "lastUsedDate": {
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": true,
          "description": "Last used date",
          "type": "datetime"
        }
      }
    },
    "payment.method.Icon": {
      "description": "Payment icon",
      "properties": {
        "data": {
          "description": "Icon data in base64",
          "canBeNull": true,
          "type": "string"
        },
        "name": {
          "type": "string",
          "description": "Icon name",
          "canBeNull": true
        }
      },
      "id": "Icon",
      "namespace": "payment.method"
    },
    "agreements.AgreementStateEnum": {
      "namespace": "agreements",
      "enumType": "string",
      "id": "AgreementStateEnum",
      "enum": [
        "ko",
        "obsolete",
        "ok",
        "todo"
      ],
      "description": "The current state of a contract agreement"
    },
    "me.consent.Decision": {
      "namespace": "me.consent",
      "id": "Decision",
      "description": "Customer consent decision",
      "properties": {
        "value": {
          "type": "boolean",
          "description": "Consent decision value",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "boolean"
        },
        "timestamp": {
          "type": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "description": "Consent decision datetime"
        }
      }
    },
    "billing.DeferredPaymentAccountStatusEnum": {
      "enum": [
        "valid"
      ],
      "description": "Status of your deferred invoice payment account",
      "namespace": "billing",
      "id": "DeferredPaymentAccountStatusEnum",
      "enumType": "string"
    },
    "billing.BillDetail": {
      "namespace": "billing",
      "id": "BillDetail",
      "properties": {
        "billDetailId": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": null,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": null,
          "type": "string"
        },
        "totalPrice": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price"
        },
        "unitPrice": {
          "type": "order.Price",
          "readOnly": true,
          "fullType": "order.Price",
          "canBeNull": false,
          "description": null
        },
        "quantity": {
          "type": "string",
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "description": {
          "type": "string",
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "periodEnd": {
          "type": "date",
          "description": null,
          "readOnly": true,
          "fullType": "date",
          "canBeNull": true
        },
        "periodStart": {
          "description": null,
          "canBeNull": true,
          "readOnly": true,
          "fullType": "date",
          "type": "date"
        }
      },
      "description": "Information about a Bill entry"
    },
    "nichandle.accessRestriction.SOTPSecret": {
      "namespace": "nichandle.accessRestriction",
      "id": "SOTPSecret",
      "properties": {
        "codes": {
          "canBeNull": false,
          "description": null,
          "type": "string[]"
        }
      },
      "description": "Describe SOTP secret keys"
    },
    "me.payment.method.CallbackUrl": {
      "properties": {
        "failure": {
          "type": "string",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "description": "URL when registration failed"
        },
        "error": {
          "description": "URL when registration encounters an error",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": false,
          "type": "string"
        },
        "success": {
          "description": "URL when payment method registration success",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "cancel": {
          "type": "string",
          "description": "URL when customer cancels the action",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "string"
        },
        "pending": {
          "type": "string",
          "description": "URL when payment method is in validation",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "string"
        }
      },
      "description": "Callback URL's to register a new payment method",
      "id": "CallbackUrl",
      "namespace": "me.payment.method"
    },
    "me.payment.method.Icon": {
      "description": "Icon",
      "properties": {
        "name": {
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string",
          "description": "Icon name",
          "type": "string"
        },
        "data": {
          "type": "string",
          "description": "Icon in base64",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true
        }
      },
      "namespace": "me.payment.method",
      "id": "Icon"
    },
    "billing.voucherAccount.OperationEnum": {
      "enum": [
        "cancel-credit",
        "cancel-debit",
        "cancel-pre-debit",
        "credit",
        "debit",
        "pre-credit",
        "pre-debit"
      ],
      "description": "Operations a voucher account movement can represent",
      "enumType": "string",
      "id": "OperationEnum",
      "namespace": "billing.voucherAccount"
    },
    "nichandle.accessRestriction.U2FSignChallenge": {
      "properties": {
        "request": {
          "canBeNull": false,
          "description": null,
          "type": "nichandle.accessRestriction.U2FSignRequest"
        },
        "applicationId": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        }
      },
      "description": "U2F Register Request",
      "namespace": "nichandle.accessRestriction",
      "id": "U2FSignChallenge"
    },
    "payment.method.AvailablePaymentMethod": {
      "description": "Available payment methods",
      "properties": {
        "integration": {
          "type": "payment.method.IntegrationType",
          "description": "Graphical payment integration to use",
          "canBeNull": false
        },
        "registerable": {
          "description": "Payment method type is registerable ?",
          "canBeNull": false,
          "type": "boolean"
        },
        "oneshot": {
          "canBeNull": false,
          "description": "Payment method type is possible to pay in oneshot mode ?",
          "type": "boolean"
        },
        "paymentType": {
          "type": "string",
          "canBeNull": false,
          "description": "Payment method type"
        },
        "icon": {
          "canBeNull": false,
          "description": "Payment method type icon",
          "type": "payment.method.Icon"
        },
        "registerableWithTransaction": {
          "description": "Payment method type is registerable with the possibility to pay in same time an order ?",
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "id": "AvailablePaymentMethod",
      "namespace": "payment.method"
    },
    "nichandle.SubAccountConsumerKey": {
      "id": "SubAccountConsumerKey",
      "namespace": "nichandle",
      "description": "Credentials to interact with the api on behalf of the sub-account",
      "properties": {
        "consumerKey": {
          "description": "The consumer key",
          "canBeNull": false,
          "type": "string"
        }
      }
    },
    "billing.ItemDetail": {
      "namespace": "billing",
      "id": "ItemDetail",
      "description": "Extensions of a detail",
      "properties": {
        "order": {
          "type": "billing.ItemDetail.Order",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "billing.ItemDetail.Order",
          "description": null
        }
      }
    },
    "billing.OvhAccount": {
      "description": "Details about an OVH account",
      "properties": {
        "isActive": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "boolean",
          "description": null,
          "type": "boolean"
        },
        "alertThreshold": {
          "description": null,
          "canBeNull": true,
          "readOnly": false,
          "fullType": "long",
          "type": "long"
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "description": null
        },
        "canBeCredited": {
          "type": "boolean",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "boolean"
        },
        "balance": {
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "order.Price",
          "type": "order.Price"
        },
        "ovhAccountId": {
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "openDate": {
          "type": "datetime",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime"
        }
      },
      "namespace": "billing",
      "id": "OvhAccount"
    },
    "billing.DepositDetail": {
      "id": "DepositDetail",
      "namespace": "billing",
      "properties": {
        "depositDetailId": {
          "type": "string",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        },
        "quantity": {
          "description": null,
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "totalPrice": {
          "description": null,
          "readOnly": true,
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "description": null,
          "readOnly": true,
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price"
        },
        "description": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": null,
          "type": "string"
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": null
        }
      },
      "description": "Information about a Deposit entry"
    },
    "billing.Order": {
      "namespace": "billing",
      "id": "Order",
      "properties": {
        "orderId": {
          "type": "long",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "description": null
        },
        "tax": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price"
        },
        "priceWithTax": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "order.Price",
          "description": null,
          "type": "order.Price"
        },
        "expirationDate": {
          "description": null,
          "canBeNull": true,
          "readOnly": true,
          "fullType": "datetime",
          "type": "datetime"
        },
        "password": {
          "description": null,
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "priceWithoutTax": {
          "type": "order.Price",
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "canBeNull": false
        },
        "pdfUrl": {
          "description": null,
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "date": {
          "readOnly": true,
          "canBeNull": true,
          "fullType": "datetime",
          "description": null,
          "type": "datetime"
        },
        "retractionDate": {
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": true,
          "description": null,
          "type": "datetime"
        },
        "url": {
          "type": "string",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "description": null
        }
      },
      "description": "Details about an Order"
    },
    "billing.SlaOperation": {
      "namespace": "billing",
      "id": "SlaOperation",
      "properties": {
        "id": {
          "type": "long",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "description": "SLA identifier"
        },
        "endDate": {
          "description": "Date of the end of the SLA",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": true,
          "type": "datetime"
        },
        "name": {
          "type": "string",
          "description": "Sla operation name",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "startDate": {
          "type": "datetime",
          "description": "Date of the start of the SLA",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime"
        },
        "date": {
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "description": "Date of the event that led to SLA",
          "type": "datetime"
        },
        "description": {
          "type": "string",
          "description": "Description of the SLA operation for this incident",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        }
      },
      "description": "SLA properties"
    },
    "billing.Refund": {
      "id": "Refund",
      "namespace": "billing",
      "properties": {
        "date": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime"
        },
        "url": {
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "type": "string"
        },
        "orderId": {
          "type": "long",
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false,
          "description": null
        },
        "originalBillId": {
          "type": "string",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": true,
          "description": null
        },
        "tax": {
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "canBeNull": false,
          "type": "order.Price"
        },
        "priceWithTax": {
          "type": "order.Price",
          "description": null,
          "readOnly": true,
          "fullType": "order.Price",
          "canBeNull": false
        },
        "refundId": {
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "type": "string"
        },
        "password": {
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": null
        },
        "priceWithoutTax": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price"
        },
        "pdfUrl": {
          "type": "string",
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string"
        }
      },
      "description": "Details about a Refund"
    },
    "me.payment.method.PaymentMethod": {
      "id": "PaymentMethod",
      "namespace": "me.payment.method",
      "properties": {
        "paymentType": {
          "type": "string",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "string",
          "description": "Payment method type"
        },
        "description": {
          "type": "string",
          "description": "Custom customer description",
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string"
        },
        "expirationDate": {
          "fullType": "datetime",
          "readOnly": false,
          "canBeNull": true,
          "description": "Expiration date",
          "type": "datetime"
        },
        "lastUpdate": {
          "type": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "datetime",
          "description": "Last update date"
        },
        "paymentMethodId": {
          "readOnly": false,
          "canBeNull": false,
          "fullType": "long",
          "description": "Payment method ID",
          "type": "long"
        },
        "icon": {
          "type": "me.payment.method.Icon",
          "description": "Payment method type icon",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "me.payment.method.Icon"
        },
        "billingContactId": {
          "type": "long",
          "canBeNull": true,
          "readOnly": false,
          "fullType": "long",
          "description": "Associated billing contact ID"
        },
        "label": {
          "type": "string",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "description": "Payment method public label"
        },
        "creationDate": {
          "fullType": "datetime",
          "readOnly": false,
          "canBeNull": false,
          "description": "Creation date",
          "type": "datetime"
        },
        "paymentSubType": {
          "type": "string",
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string",
          "description": "Payment method sub-type"
        },
        "default": {
          "readOnly": false,
          "canBeNull": false,
          "fullType": "boolean",
          "description": "Creation date",
          "type": "boolean"
        },
        "paymentMeanId": {
          "description": "Payment mean ID associated to this payment method",
          "fullType": "long",
          "readOnly": false,
          "canBeNull": true,
          "type": "long"
        },
        "status": {
          "description": "Payment method status",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "me.payment.method.PaymentMethod.Status",
          "type": "me.payment.method.PaymentMethod.Status"
        }
      },
      "description": "Payment method object"
    },
    "billing.order.ConsumptionDetails": {
      "description": "Detailed consumption's retrieval information",
      "properties": {
        "fileFormat": {
          "type": "consumption.ConsumptionExportFormatsEnum",
          "canBeNull": true,
          "description": "Format of the file"
        },
        "fileURL": {
          "type": "string",
          "canBeNull": true,
          "description": "Temporary URL to download detailed consumption"
        },
        "taskId": {
          "type": "long",
          "description": "Consumption details export task's identifier",
          "canBeNull": false
        },
        "message": {
          "canBeNull": true,
          "description": "Request's state description",
          "type": "string"
        },
        "taskStatus": {
          "description": "Consumption details export task's status",
          "canBeNull": false,
          "type": "consumption.ConsumptionExportTaskStatusEnum"
        }
      },
      "id": "ConsumptionDetails",
      "namespace": "billing.order"
    },
    "dedicated.TemplateOsFileSystemEnum": {
      "description": "Filesystems available",
      "enum": [
        "btrfs",
        "ext3",
        "ext4",
        "ntfs",
        "reiserfs",
        "swap",
        "ufs",
        "xfs",
        "zfs"
      ],
      "enumType": "string",
      "id": "TemplateOsFileSystemEnum",
      "namespace": "dedicated"
    },
    "nichandle.accessRestriction.SOTPStatusEnum": {
      "description": "Status of SOTP account",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ],
      "namespace": "nichandle.accessRestriction",
      "enumType": "string",
      "id": "SOTPStatusEnum"
    },
    "billing.Bill": {
      "description": "Details about a Bill",
      "properties": {
        "tax": {
          "type": "order.Price",
          "description": null,
          "fullType": "order.Price",
          "readOnly": true,
          "canBeNull": false
        },
        "priceWithTax": {
          "type": "order.Price",
          "description": null,
          "readOnly": true,
          "fullType": "order.Price",
          "canBeNull": false
        },
        "orderId": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "description": null,
          "type": "long"
        },
        "priceWithoutTax": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "order.Price",
          "description": null,
          "type": "order.Price"
        },
        "pdfUrl": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "password": {
          "type": "string",
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "billId": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "description": null
        },
        "category": {
          "type": "billing.CategoryEnum",
          "fullType": "billing.CategoryEnum",
          "readOnly": true,
          "canBeNull": false,
          "description": null
        },
        "url": {
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "type": "string"
        }
      },
      "id": "Bill",
      "namespace": "billing"
    },
    "dedicated.server.BitFormatEnum": {
      "namespace": "dedicated.server",
      "enumType": "long",
      "id": "BitFormatEnum",
      "description": "Available os bit format",
      "enum": [
        "32",
        "64"
      ]
    },
    "billing.VoucherMovement": {
      "description": "Details about a voucher account",
      "properties": {
        "balance": {
          "type": "order.Price",
          "fullType": "order.Price",
          "readOnly": true,
          "canBeNull": false,
          "description": null
        },
        "movementId": {
          "type": "long",
          "description": null,
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false
        },
        "date": {
          "type": "datetime",
          "description": null,
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false
        },
        "operation": {
          "type": "billing.voucherAccount.OperationEnum",
          "readOnly": true,
          "fullType": "billing.voucherAccount.OperationEnum",
          "canBeNull": false,
          "description": null
        },
        "amount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "readOnly": true,
          "canBeNull": false,
          "description": null
        },
        "description": {
          "type": "string",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "description": null
        },
        "previousBalance": {
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "order.Price",
          "type": "order.Price"
        },
        "order": {
          "type": "long",
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false,
          "description": null
        }
      },
      "namespace": "billing",
      "id": "VoucherMovement"
    },
    "billing.order.PaymentMethods": {
      "properties": {
        "registered": {
          "type": "long[]",
          "description": "IDs of registered payment method usable on this order",
          "canBeNull": false
        },
        "available": {
          "description": "Payment method available on this order",
          "canBeNull": false,
          "type": "payment.method.AvailablePaymentMethod[]"
        }
      },
      "description": "Payment methods",
      "id": "PaymentMethods",
      "namespace": "billing.order"
    },
    "nichandle.accessRestriction.U2FAccount": {
      "id": "U2FAccount",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false,
          "description": "The Id of the restriction"
        },
        "lastUsedDate": {
          "type": "datetime",
          "description": "Last used date",
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": true
        },
        "status": {
          "type": "nichandle.accessRestriction.U2FStatusEnum",
          "description": "Status of this account",
          "fullType": "nichandle.accessRestriction.U2FStatusEnum",
          "readOnly": true,
          "canBeNull": false
        },
        "description": {
          "type": "string",
          "description": "Description of this U2F key",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "description": "Creation date",
          "type": "datetime"
        }
      },
      "description": "U2F Two-Factor Authentication"
    },
    "payment.method.IntegrationType": {
      "namespace": "payment.method",
      "id": "IntegrationType",
      "enumType": "string",
      "description": "Payment method integration type",
      "enum": [
        "DONE",
        "IFRAME_VANTIV",
        "IN_CONTEXT",
        "REDIRECT"
      ]
    },
    "complexType.SafeKeyValue<T>": {
      "id": "SafeKeyValue",
      "generics": [
        "T"
      ],
      "namespace": "complexType",
      "properties": {
        "value": {
          "type": "T",
          "description": null,
          "canBeNull": false
        },
        "key": {
          "type": "string",
          "description": null,
          "canBeNull": false
        }
      },
      "description": "Key and value, with proper key strings"
    },
    "nichandle.document.Document": {
      "description": "List of documents added on your account",
      "properties": {
        "putUrl": {
          "type": "string",
          "description": "URL used to put document",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        },
        "size": {
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false,
          "description": "Document size (in bytes)",
          "type": "long"
        },
        "validationDate": {
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": true,
          "description": "Document validation",
          "type": "datetime"
        },
        "tags": {
          "type": "complexType.SafeKeyValue<string>[]",
          "description": "Document tags",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "complexType.SafeKeyValue<string>[]"
        },
        "expirationDate": {
          "description": "Document expiration",
          "readOnly": false,
          "fullType": "datetime",
          "canBeNull": true,
          "type": "datetime"
        },
        "name": {
          "type": "string",
          "description": "Document name",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        },
        "id": {
          "type": "string",
          "description": "Document id",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        },
        "creationDate": {
          "type": "datetime",
          "description": "Document creation",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime"
        },
        "getUrl": {
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": "URL used to get document"
        }
      },
      "id": "Document",
      "namespace": "nichandle.document"
    },
    "billing.PaymentMeanEnum": {
      "enum": [
        "cash",
        "chargeback",
        "cheque",
        "creditAccount",
        "creditCard",
        "debtAccount",
        "deposit",
        "digitalLaunchPad",
        "edinar",
        "fidelityPoints",
        "free",
        "ideal",
        "incubatorAccount",
        "mandat",
        "multibanco",
        "none",
        "ovhAccount",
        "paymentMandate",
        "paypal",
        "payu",
        "platnosci",
        "refund",
        "transfer",
        "withdrawal"
      ],
      "description": "All payment means you might have use on an OVH order",
      "id": "PaymentMeanEnum",
      "enumType": "string",
      "namespace": "billing"
    },
    "nichandle.accessRestriction.TOTPSecret": {
      "description": "Describe TOTP secret keys",
      "properties": {
        "secret": {
          "description": null,
          "canBeNull": false,
          "type": "password"
        },
        "id": {
          "description": null,
          "canBeNull": false,
          "type": "long"
        },
        "qrcodeHelper": {
          "type": "password",
          "canBeNull": false,
          "description": null
        }
      },
      "namespace": "nichandle.accessRestriction",
      "id": "TOTPSecret"
    },
    "domain.DocumentFormatsEnum": {
      "description": "Document file format",
      "enum": [
        "gif",
        "jpeg",
        "jpg",
        "pdf",
        "png"
      ],
      "namespace": "domain",
      "id": "DocumentFormatsEnum",
      "enumType": "string"
    },
    "nichandle.changeEmail.TaskStateEnum": {
      "enum": [
        "aborted",
        "done",
        "refused",
        "todo"
      ],
      "description": "State of email change task",
      "namespace": "nichandle.changeEmail",
      "id": "TaskStateEnum",
      "enumType": "string"
    },
    "domain.OperationActionEnum": {
      "description": "operation Action",
      "enum": [
        "canCancel",
        "canCorrect",
        "canRelaunch",
        "canReset"
      ],
      "namespace": "domain",
      "id": "OperationActionEnum",
      "enumType": "string"
    },
    "consumption.ConsumptionExportFormatsEnum": {
      "id": "ConsumptionExportFormatsEnum",
      "enumType": "string",
      "namespace": "consumption",
      "description": "Export file format",
      "enum": [
        "csv"
      ]
    },
    "billing.paymentMethod.PaymentSubTypeEnum": {
      "namespace": "billing.paymentMethod",
      "enumType": "string",
      "id": "PaymentSubTypeEnum",
      "description": "List of payment sub type enum",
      "enum": [
        "AMERICAN_EXPRESS",
        "MASTERCARD",
        "VISA"
      ]
    },
    "debt.Operation": {
      "properties": {
        "status": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "debt.entry.StatusEnum",
          "description": "Status of the operation",
          "type": "debt.entry.StatusEnum"
        },
        "depositOrderId": {
          "type": "long",
          "description": "Order id associated to the deposit",
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false
        },
        "amount": {
          "description": "Amount of the operation",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "order.Price",
          "type": "order.Price"
        },
        "type": {
          "description": "Type of movement this operation represents",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "debt.entry.OperationEnum",
          "type": "debt.entry.OperationEnum"
        },
        "date": {
          "description": "Date the operation took place on",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime"
        },
        "operationId": {
          "type": "long",
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false
        }
      },
      "description": "Operation that happend on a debt",
      "namespace": "debt",
      "id": "Operation"
    },
    "domain.NicOperationFunctionEnum": {
      "namespace": "domain",
      "id": "NicOperationFunctionEnum",
      "enumType": "string",
      "enum": [
        "ContactControl",
        "DnsAnycastActivate",
        "DnsAnycastDeactivate",
        "DnssecDisable",
        "DnssecEnable",
        "DnssecResigning",
        "DnssecRollKsk",
        "DnssecRollZsk",
        "DomainContactControl",
        "DomainContactUpdate",
        "DomainControl",
        "DomainCreate",
        "DomainDelete",
        "DomainDnsUpdate",
        "DomainDsUpdate",
        "DomainHold",
        "DomainHostCreate",
        "DomainHostDelete",
        "DomainHostUpdate",
        "DomainIncomingTransfer",
        "DomainLock",
        "DomainOutgoingTransfer",
        "DomainRenew",
        "DomainRestore",
        "DomainTrade",
        "ZoneImport"
      ],
      "description": "Operation functions"
    },
    "debt.associatedObject.PaymentInfo": {
      "description": "The payment infos linked to this debt entry",
      "properties": {
        "publicLabel": {
          "description": "Public payment mean label",
          "canBeNull": true,
          "type": "string"
        },
        "paymentType": {
          "type": "billing.PaymentMeanEnum",
          "canBeNull": false,
          "description": "Payment mean used for this debt operation"
        },
        "description": {
          "description": "Optional customer description",
          "canBeNull": true,
          "type": "string"
        }
      },
      "id": "PaymentInfo",
      "namespace": "debt.associatedObject"
    },
    "me.payment.method.Transaction": {
      "namespace": "me.payment.method",
      "id": "Transaction",
      "properties": {
        "creationDate": {
          "description": "Creation date",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "datetime",
          "type": "datetime"
        },
        "type": {
          "type": "me.payment.method.Transaction.Type",
          "description": "Transaction type",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "me.payment.method.Transaction.Type"
        },
        "transactionId": {
          "type": "long",
          "description": "Transaction ID",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "long"
        },
        "amount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "readOnly": false,
          "canBeNull": false,
          "description": "Transaction amount"
        },
        "status": {
          "type": "me.payment.method.Transaction.Status",
          "fullType": "me.payment.method.Transaction.Status",
          "readOnly": false,
          "canBeNull": false,
          "description": "Transaction status"
        }
      },
      "description": "Payment method transaction object"
    },
    "nichandle.Ipv4Org": {
      "namespace": "nichandle",
      "id": "Ipv4Org",
      "properties": {
        "registry": {
          "type": "nichandle.IpRegistryEnum",
          "readOnly": true,
          "fullType": "nichandle.IpRegistryEnum",
          "canBeNull": false,
          "description": null
        },
        "city": {
          "type": "string",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": false,
          "description": null
        },
        "organisationId": {
          "type": "string",
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "address": {
          "type": "string",
          "fullType": "string",
          "readOnly": false,
          "canBeNull": false,
          "description": null
        },
        "phone": {
          "description": null,
          "readOnly": false,
          "canBeNull": false,
          "fullType": "phoneNumber",
          "type": "phoneNumber"
        },
        "lastname": {
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "description": null,
          "type": "string"
        },
        "abuse_mailbox": {
          "type": "string",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": false,
          "description": null
        },
        "zip": {
          "type": "string",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "description": null
        },
        "state": {
          "type": "string",
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true
        },
        "country": {
          "canBeNull": false,
          "readOnly": false,
          "fullType": "nichandle.CountryEnum",
          "description": null,
          "type": "nichandle.CountryEnum"
        },
        "firstname": {
          "description": null,
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        }
      },
      "description": "Details about an IP block organisation"
    },
    "nichandle.DomainTaskArgument": {
      "description": "Domain operation argument",
      "properties": {
        "maximumSize": {
          "type": "long",
          "description": "Maximum of the content length that you can send",
          "fullType": "long",
          "readOnly": true,
          "canBeNull": true
        },
        "type": {
          "type": "string",
          "description": "Type of the argument",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false
        },
        "minimumSize": {
          "canBeNull": true,
          "readOnly": true,
          "fullType": "long",
          "description": "Minimum of the content length that you can send",
          "type": "long"
        },
        "value": {
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string",
          "description": "Value of the argument",
          "type": "string"
        },
        "description": {
          "description": "Description of the argument",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        },
        "key": {
          "type": "string",
          "description": "Key of the argument",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "template": {
          "canBeNull": true,
          "readOnly": true,
          "fullType": "string",
          "description": "Template of the content",
          "type": "string"
        },
        "readOnly": {
          "description": "True if the argument is in read only",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean"
        },
        "acceptedValues": {
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string[]",
          "description": "List of accepted values",
          "type": "string[]"
        },
        "acceptedFormats": {
          "canBeNull": true,
          "readOnly": true,
          "fullType": "domain.DocumentFormatsEnum[]",
          "description": "List of accepted formats",
          "type": "domain.DocumentFormatsEnum[]"
        },
        "fields": {
          "type": "xander.ContactFieldEnum[]",
          "fullType": "xander.ContactFieldEnum[]",
          "readOnly": true,
          "canBeNull": true,
          "description": "List of impacted field names"
        }
      },
      "namespace": "nichandle",
      "id": "DomainTaskArgument"
    },
    "nichandle.accessRestriction.U2FRegisterChallenge": {
      "id": "U2FRegisterChallenge",
      "namespace": "nichandle.accessRestriction",
      "description": "U2F Register Request",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": null,
          "type": "long"
        },
        "applicationId": {
          "type": "string",
          "description": null,
          "canBeNull": false
        },
        "request": {
          "description": null,
          "canBeNull": false,
          "type": "nichandle.accessRestriction.U2FRegistrationRequest"
        }
      }
    },
    "billing.CreditCardStateEnum": {
      "enumType": "string",
      "id": "CreditCardStateEnum",
      "namespace": "billing",
      "description": "State of you credit card",
      "enum": [
        "expired",
        "tooManyFailures",
        "valid"
      ]
    },
    "nichandle.contactChange.Task": {
      "properties": {
        "serviceDomain": {
          "description": "The service on which the task runs",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "askingAccount": {
          "description": "Account who asked the contact change",
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": true,
          "type": "string"
        },
        "contactTypes": {
          "description": "Contacts to be changed",
          "readOnly": true,
          "fullType": "nichandle.changeContact.ContactTypeEnum[]",
          "canBeNull": false,
          "type": "nichandle.changeContact.ContactTypeEnum[]"
        },
        "dateRequest": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "description": "Date at which the request has been made",
          "type": "datetime"
        },
        "state": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "nichandle.changeContact.TaskStateEnum",
          "description": "Current state of the request",
          "type": "nichandle.changeContact.TaskStateEnum"
        },
        "fromAccount": {
          "type": "string",
          "description": "Account to change contact from",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string"
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false,
          "description": null
        },
        "toAccount": {
          "description": "Account to change contact to",
          "readOnly": true,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "type": "string"
        },
        "dateDone": {
          "type": "datetime",
          "description": "Date at which the contact change has been finished",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "datetime"
        }
      },
      "description": "Task running a contact change on a service",
      "id": "Task",
      "namespace": "nichandle.contactChange"
    },
    "domain.OperationStatusEnum": {
      "id": "OperationStatusEnum",
      "enumType": "string",
      "namespace": "domain",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "description": "Operation status"
    },
    "dedicated.installationTemplate.Templates": {
      "id": "Templates",
      "namespace": "dedicated.installationTemplate",
      "description": "Available installation templates",
      "properties": {
        "supportsSqlServer": {
          "type": "boolean",
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": true,
          "description": "This distribution supports the microsoft SQL server"
        },
        "customization": {
          "readOnly": false,
          "canBeNull": true,
          "fullType": "dedicated.TemplateOsProperties",
          "description": "Customizable template properties ",
          "type": "dedicated.TemplateOsProperties"
        },
        "family": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "dedicated.TemplateOsTypeEnum",
          "description": "this template family type",
          "type": "dedicated.TemplateOsTypeEnum"
        },
        "templateName": {
          "type": "string",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": false,
          "description": "This template name"
        },
        "lastModification": {
          "type": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "datetime",
          "description": "Date of last modification of the base image"
        },
        "deprecated": {
          "type": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "fullType": "boolean",
          "description": "is this distribution deprecated"
        },
        "lvmReady": {
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": true,
          "description": "This distribution supports Logical Volumes (Linux LVM)",
          "type": "boolean"
        },
        "distribution": {
          "type": "string",
          "description": "the distribution this template is based on",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false
        },
        "supportsGptLabel": {
          "type": "boolean",
          "description": "This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB",
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": true
        },
        "beta": {
          "description": "This distribution is new, and although tested and functional, may still display odd behaviour",
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": true,
          "type": "boolean"
        },
        "filesystems": {
          "type": "dedicated.TemplateOsFileSystemEnum[]",
          "description": "list of all filesystems  available for this template",
          "readOnly": true,
          "fullType": "dedicated.TemplateOsFileSystemEnum[]",
          "canBeNull": false
        },
        "bitFormat": {
          "type": "dedicated.server.BitFormatEnum",
          "readOnly": true,
          "fullType": "dedicated.server.BitFormatEnum",
          "canBeNull": false,
          "description": "this template  bit format"
        },
        "defaultLanguage": {
          "type": "dedicated.TemplateOsLanguageEnum",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "dedicated.TemplateOsLanguageEnum",
          "description": "the default language of this template"
        },
        "description": {
          "type": "string",
          "description": "information about this template",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false
        },
        "supportsDistributionKernel": {
          "readOnly": true,
          "canBeNull": true,
          "fullType": "boolean",
          "description": "This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel",
          "type": "boolean"
        },
        "supportsUEFI": {
          "description": "This distribution supports UEFI setup",
          "fullType": "dedicated.server.SupportsUEFIEnum",
          "readOnly": true,
          "canBeNull": true,
          "type": "dedicated.server.SupportsUEFIEnum"
        },
        "availableLanguages": {
          "description": "list of all language available for this template",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "dedicated.TemplateOsLanguageEnum[]",
          "type": "dedicated.TemplateOsLanguageEnum[]"
        },
        "hardRaidConfiguration": {
          "description": "This distribution supports hardware raid configuration through the OVH API",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "boolean",
          "type": "boolean"
        },
        "supportsRTM": {
          "description": "This distribution supports RTM software",
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": false,
          "type": "boolean"
        },
        "category": {
          "description": "category of this template (informative only)",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "dedicated.TemplateOsUsageEnum",
          "type": "dedicated.TemplateOsUsageEnum"
        }
      }
    },
    "billing.Withdrawal": {
      "description": "Details about a withdrawal",
      "properties": {
        "date": {
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "description": null,
          "type": "datetime"
        },
        "country": {
          "type": "string",
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "url": {
          "type": "string",
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false,
          "description": null
        },
        "password": {
          "type": "string",
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false
        },
        "withdrawalId": {
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "type": "string"
        },
        "pdfUrl": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": null,
          "type": "string"
        },
        "amount": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "order.Price",
          "description": null,
          "type": "order.Price"
        }
      },
      "id": "Withdrawal",
      "namespace": "billing"
    },
    "billing.ItemDetail.OrderActionEnum": {
      "namespace": "billing.ItemDetail",
      "enumType": "string",
      "id": "OrderActionEnum",
      "description": "List of order actions",
      "enum": [
        "consumption",
        "installation",
        "renew",
        "upgrade"
      ]
    },
    "nichandle.Nichandle": {
      "namespace": "nichandle",
      "id": "Nichandle",
      "properties": {
        "legalform": {
          "type": "nichandle.LegalFormEnum",
          "description": null,
          "readOnly": false,
          "canBeNull": false,
          "fullType": "nichandle.LegalFormEnum"
        },
        "currency": {
          "description": "Customer currency",
          "fullType": "nichandle.Currency",
          "readOnly": true,
          "canBeNull": false,
          "type": "nichandle.Currency"
        },
        "birthCity": {
          "type": "string",
          "description": null,
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string"
        },
        "language": {
          "type": "nichandle.LanguageEnum",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "nichandle.LanguageEnum",
          "description": null
        },
        "city": {
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "area": {
          "type": "string",
          "description": null,
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string"
        },
        "companyNationalIdentificationNumber": {
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "customerCode": {
          "type": "string",
          "description": "Your customer code (a numerical value used for identification when contacting support via phone call)",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string"
        },
        "vat": {
          "type": "string",
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string",
          "description": null
        },
        "country": {
          "description": null,
          "readOnly": false,
          "fullType": "nichandle.CountryEnum",
          "canBeNull": false,
          "type": "nichandle.CountryEnum"
        },
        "nichandle": {
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "name": {
          "type": "string",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "description": null
        },
        "ovhCompany": {
          "type": "nichandle.OvhCompanyEnum",
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "nichandle.OvhCompanyEnum"
        },
        "nationalIdentificationNumber": {
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "state": {
          "readOnly": true,
          "fullType": "nichandle.StateEnum",
          "canBeNull": false,
          "description": null,
          "type": "nichandle.StateEnum"
        },
        "birthDay": {
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "fax": {
          "type": "string",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "description": null
        },
        "address": {
          "type": "string",
          "description": null,
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string"
        },
        "phone": {
          "type": "string",
          "description": null,
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string"
        },
        "email": {
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "organisation": {
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true,
          "type": "string"
        },
        "sex": {
          "description": null,
          "fullType": "nichandle.GenderEnum",
          "readOnly": false,
          "canBeNull": true,
          "type": "nichandle.GenderEnum"
        },
        "spareEmail": {
          "type": "string",
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string",
          "description": null
        },
        "phoneCountry": {
          "type": "nichandle.CountryEnum",
          "description": null,
          "canBeNull": true,
          "readOnly": false,
          "fullType": "nichandle.CountryEnum"
        },
        "ovhSubsidiary": {
          "type": "nichandle.OvhSubsidiaryEnum",
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "nichandle.OvhSubsidiaryEnum"
        },
        "firstname": {
          "description": null,
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "italianSDI": {
          "description": null,
          "fullType": "string",
          "readOnly": false,
          "canBeNull": true,
          "type": "string"
        },
        "corporationType": {
          "type": "string",
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string",
          "description": null
        },
        "zip": {
          "type": "string",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "description": null
        }
      },
      "description": "Details about your OVH identifier"
    },
    "billing.FidelityAccount": {
      "id": "FidelityAccount",
      "namespace": "billing",
      "properties": {
        "balance": {
          "type": "long",
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false,
          "description": null
        },
        "canBeCredited": {
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "boolean",
          "type": "boolean"
        },
        "alertThreshold": {
          "type": "long",
          "description": null,
          "readOnly": false,
          "fullType": "long",
          "canBeNull": true
        },
        "lastUpdate": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "datetime",
          "description": null,
          "type": "datetime"
        },
        "openDate": {
          "type": "datetime",
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "description": null
        }
      },
      "description": "Balance of the fidelity account"
    },
    "billing.order.PaymentMean": {
      "id": "PaymentMean",
      "namespace": "billing.order",
      "description": "All data needed to use a payment mean",
      "properties": {
        "logo": {
          "type": "string",
          "canBeNull": true,
          "description": null
        },
        "url": {
          "type": "string",
          "description": null,
          "canBeNull": false
        },
        "fee": {
          "type": "double",
          "canBeNull": false,
          "description": null
        },
        "htmlForm": {
          "description": null,
          "canBeNull": true,
          "type": "text"
        },
        "parameters": {
          "type": "billing.order.paymentMean.HttpParameter[]",
          "canBeNull": false,
          "description": null
        },
        "httpMethod": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "subType": {
          "type": "string",
          "description": null,
          "canBeNull": true
        }
      }
    },
    "nichandle.NotificationStatusEnum": {
      "namespace": "nichandle",
      "enumType": "string",
      "id": "NotificationStatusEnum",
      "enum": [
        "ok",
        "waitingForValidation"
      ],
      "description": "Status of your notification"
    },
    "billing.ItemDetail.OrderConfiguration": {
      "description": "Configuration of order",
      "properties": {
        "value": {
          "description": "Value of the configuration",
          "canBeNull": false,
          "type": "string"
        },
        "label": {
          "type": "string",
          "canBeNull": false,
          "description": "Label of the configuration"
        }
      },
      "namespace": "billing.ItemDetail",
      "id": "OrderConfiguration"
    },
    "complexType.UnitAndValue<T>": {
      "generics": [
        "T"
      ],
      "namespace": "complexType",
      "id": "UnitAndValue",
      "properties": {
        "unit": {
          "type": "string",
          "canBeNull": false,
          "description": null
        },
        "value": {
          "type": "T",
          "canBeNull": false,
          "description": null
        }
      },
      "description": "A numeric value tagged with its unit"
    },
    "billing.ReusablePaymentMeanEnum": {
      "description": "Reusable payment mean type",
      "enum": [
        "CREDIT_CARD",
        "ENTERPRISE",
        "INTERNAL_TRUSTED_ACCOUNT",
        "PAYPAL",
        "bankAccount",
        "creditCard",
        "fidelityAccount",
        "ovhAccount",
        "paypal"
      ],
      "namespace": "billing",
      "id": "ReusablePaymentMeanEnum",
      "enumType": "string"
    },
    "api.Credential": {
      "description": "API Credential",
      "properties": {
        "status": {
          "type": "auth.CredentialStateEnum",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "auth.CredentialStateEnum",
          "description": null
        },
        "ovhSupport": {
          "type": "boolean",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "boolean",
          "description": "States whether this credential has been created by yourself or by the OVH support team"
        },
        "lastUse": {
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": true,
          "description": null,
          "type": "datetime"
        },
        "rules": {
          "type": "auth.AccessRule[]",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "auth.AccessRule[]",
          "description": null
        },
        "credentialId": {
          "type": "long",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long"
        },
        "creation": {
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "description": null,
          "type": "datetime"
        },
        "applicationId": {
          "type": "long",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long"
        },
        "allowedIPs": {
          "type": "ipBlock[]",
          "description": "If defined, list of ip blocks which are allowed to call API with this credential",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "ipBlock[]"
        },
        "expiration": {
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": true,
          "type": "datetime"
        }
      },
      "id": "Credential",
      "namespace": "api"
    },
    "dedicated.TemplateOsUsageEnum": {
      "enum": [
        "basic",
        "customer",
        "hosting",
        "other",
        "readyToUse",
        "virtualisation"
      ],
      "description": "Os usage definition",
      "namespace": "dedicated",
      "enumType": "string",
      "id": "TemplateOsUsageEnum"
    },
    "nichandle.CountryEnum": {
      "enum": [
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DG",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EA",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "IC",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PR",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "UNKNOWN",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM",
        "ZW"
      ],
      "description": "Countries a nichandle can choose",
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "nichandle"
    },
    "dedicated.installationTemplate.templatePartitions": {
      "namespace": "dedicated.installationTemplate",
      "id": "templatePartitions",
      "properties": {
        "volumeName": {
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string",
          "description": "The volume name needed for proxmox distribution",
          "type": "string"
        },
        "order": {
          "description": "specifies the creation order of the partition on the disk",
          "readOnly": false,
          "fullType": "long",
          "canBeNull": false,
          "type": "long"
        },
        "raid": {
          "type": "dedicated.server.PartitionRaidEnum",
          "fullType": "dedicated.server.PartitionRaidEnum",
          "readOnly": false,
          "canBeNull": true,
          "description": "raid partition type"
        },
        "filesystem": {
          "type": "dedicated.TemplateOsFileSystemEnum",
          "description": "Partition filesytem",
          "fullType": "dedicated.TemplateOsFileSystemEnum",
          "readOnly": false,
          "canBeNull": false
        },
        "size": {
          "type": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "complexType.UnitAndValue<long>",
          "description": "size of partition in Mb, 0 => rest of the space"
        },
        "type": {
          "canBeNull": false,
          "readOnly": false,
          "fullType": "dedicated.TemplatePartitionTypeEnum",
          "description": null,
          "type": "dedicated.TemplatePartitionTypeEnum"
        },
        "mountpoint": {
          "description": "partition mount point",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "string",
          "type": "string"
        }
      },
      "description": " Partitions defined in this partitioning scheme"
    },
    "nichandle.emailNotification": {
      "properties": {
        "id": {
          "type": "long",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "long",
          "description": "This email Id"
        },
        "date": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime",
          "description": "This email date",
          "type": "datetime"
        },
        "body": {
          "type": "text",
          "description": "This email body",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "text"
        },
        "subject": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": "This email subject",
          "type": "string"
        }
      },
      "description": "Email notification",
      "id": "emailNotification",
      "namespace": "nichandle"
    },
    "billing.ItemDetail.OrderPlan": {
      "namespace": "billing.ItemDetail",
      "id": "OrderPlan",
      "description": "Plan data from order",
      "properties": {
        "pricingMode": {
          "canBeNull": true,
          "description": "Pricing mode used when ordering through /order/cart",
          "type": "string"
        },
        "quantity": {
          "type": "long",
          "description": "Quantity ordered",
          "canBeNull": true
        },
        "code": {
          "canBeNull": true,
          "description": "Plan code used when ordering through /order/cart",
          "type": "string"
        },
        "product": {
          "description": "Product from /order/cart",
          "canBeNull": false,
          "type": "billing.ItemDetail.OrderPlanProduct"
        },
        "duration": {
          "canBeNull": true,
          "description": "Duration chosen when ordering through /order/cart (ISO 8601)",
          "type": "string"
        }
      }
    },
    "geolocation.ContinentCountryLocation": {
      "description": "Representation of country and continent from visitor IP",
      "properties": {
        "ip": {
          "description": "The IP address processed, the user's origin one",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "ip",
          "type": "ip"
        },
        "countryCode": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "coreTypes.CountryEnum",
          "description": "Country iso code",
          "type": "coreTypes.CountryEnum"
        },
        "continent": {
          "type": "coreTypes.ContinentEnum",
          "description": "Continent",
          "fullType": "coreTypes.ContinentEnum",
          "readOnly": true,
          "canBeNull": false
        }
      },
      "namespace": "geolocation",
      "id": "ContinentCountryLocation"
    },
    "billing.order.associatedObject.TypeEnum": {
      "namespace": "billing.order.associatedObject",
      "id": "TypeEnum",
      "enumType": "string",
      "enum": [
        "Bill",
        "Deposit",
        "Refund",
        "Withdrawal"
      ],
      "description": "Type of objects an order can be linked to"
    },
    "nichandle.UserStatus": {
      "enum": [
        "OK",
        "DISABLED",
        "PASSWORD_CHANGE_REQUIRED"
      ],
      "description": "Status of a User",
      "namespace": "nichandle",
      "enumType": "string",
      "id": "UserStatus"
    },
    "nichandle.GenderEnum": {
      "id": "GenderEnum",
      "enumType": "string",
      "namespace": "nichandle",
      "enum": [
        "female",
        "male"
      ],
      "description": "All genders a person can choose"
    },
    "billing.BankAccountStateEnum": {
      "description": "List of bank account states",
      "enum": [
        "blockedForIncidents",
        "pendingValidation",
        "valid"
      ],
      "enumType": "string",
      "id": "BankAccountStateEnum",
      "namespace": "billing"
    },
    "billing.order.PaymentMeans": {
      "id": "PaymentMeans",
      "namespace": "billing.order",
      "description": "TODO",
      "properties": {
        "fidelityPoints": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.PaymentMean[]"
        },
        "ideal": {
          "type": "billing.order.PaymentMean[]",
          "description": null,
          "canBeNull": true
        },
        "edinar": {
          "type": "billing.order.PaymentMean[]",
          "description": null,
          "canBeNull": true
        },
        "ovhAccount": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.PaymentMean[]"
        },
        "creditCard": {
          "type": "billing.order.PaymentMean[]",
          "canBeNull": true,
          "description": null
        },
        "multibanco": {
          "description": null,
          "canBeNull": true,
          "type": "billing.order.PaymentMean[]"
        },
        "promotion": {
          "type": "billing.order.PaymentMean[]",
          "description": null,
          "canBeNull": true
        },
        "paypal": {
          "canBeNull": true,
          "description": null,
          "type": "billing.order.PaymentMean[]"
        }
      }
    },
    "nichandle.emailChange.Task": {
      "namespace": "nichandle.emailChange",
      "id": "Task",
      "properties": {
        "id": {
          "type": "long",
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false,
          "description": null
        },
        "newEmail": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": "The email address to change for",
          "type": "string"
        },
        "dateDone": {
          "type": "datetime",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": true,
          "description": "End date of that request"
        },
        "state": {
          "type": "nichandle.changeEmail.TaskStateEnum",
          "description": "Current state of the request",
          "fullType": "nichandle.changeEmail.TaskStateEnum",
          "readOnly": true,
          "canBeNull": false
        },
        "dateRequest": {
          "type": "datetime",
          "description": "Creation date of that request",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false
        }
      },
      "description": "Task running an email change on an account"
    },
    "nichandle.IpRestriction": {
      "properties": {
        "ip": {
          "description": "An IP range where we will apply the rule",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "ipBlock",
          "type": "ipBlock"
        },
        "id": {
          "type": "long",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "description": "The Id of the restriction"
        },
        "rule": {
          "type": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "description": "Accept or deny IP access"
        },
        "warning": {
          "readOnly": false,
          "fullType": "boolean",
          "canBeNull": false,
          "description": "Send an email if someone try to access with this IP address",
          "type": "boolean"
        }
      },
      "description": "List of all IP Restrictions",
      "namespace": "nichandle",
      "id": "IpRestriction"
    },
    "billing.order.followUp.StatusEnum": {
      "enum": [
        "DOING",
        "DONE",
        "ERROR",
        "TODO"
      ],
      "description": "Step status of order follow-up",
      "namespace": "billing.order.followUp",
      "enumType": "string",
      "id": "StatusEnum"
    },
    "dedicated.installationTemplate.templatePartitioningSchemes": {
      "id": "templatePartitioningSchemes",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "name": {
          "type": "string",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "string",
          "description": "name of this partitioning scheme"
        },
        "priority": {
          "type": "long",
          "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "long"
        }
      },
      "description": "Partitioning schemes available on this template"
    },
    "me.consent.CampaignTypeEnum": {
      "enum": [
        "OPTIN",
        "OPTOUT"
      ],
      "description": "Campaign type",
      "namespace": "me.consent",
      "enumType": "string",
      "id": "CampaignTypeEnum"
    },
    "nichandle.IpRegistryEnum": {
      "namespace": "nichandle",
      "enumType": "string",
      "id": "IpRegistryEnum",
      "enum": [
        "ARIN",
        "RIPE"
      ],
      "description": "Ip registries"
    },
    "billing.Movement": {
      "id": "Movement",
      "namespace": "billing",
      "properties": {
        "balance": {
          "type": "order.Price",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "order.Price",
          "description": null
        },
        "operation": {
          "type": "billing.ovhAccount.OperationEnum",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "billing.ovhAccount.OperationEnum"
        },
        "movementId": {
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false,
          "description": null,
          "type": "long"
        },
        "date": {
          "description": null,
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime"
        },
        "amount": {
          "type": "order.Price",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "order.Price"
        },
        "order": {
          "type": "long",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "description": null
        },
        "description": {
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "previousBalance": {
          "type": "order.Price",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "order.Price",
          "description": null
        }
      },
      "description": "Details about an OVH account"
    },
    "billing.PaypalStateEnum": {
      "description": "State of you paypal account",
      "enum": [
        "tooManyFailures",
        "valid"
      ],
      "namespace": "billing",
      "enumType": "string",
      "id": "PaypalStateEnum"
    },
    "dedicated.TemplateOsLanguageEnum": {
      "description": "all language available",
      "enum": [
        "ar",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "es",
        "et",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "nb",
        "nl",
        "no",
        "pl",
        "pt",
        "ro",
        "ru",
        "sk",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "tu",
        "uk",
        "zh-Hans-CN",
        "zh-Hans-HK"
      ],
      "enumType": "string",
      "id": "TemplateOsLanguageEnum",
      "namespace": "dedicated"
    },
    "billing.SlaOperationService": {
      "properties": {
        "slaApplication": {
          "type": "string",
          "canBeNull": false,
          "description": "SLA plan application"
        },
        "slaPlan": {
          "type": "string",
          "canBeNull": false,
          "description": "SLA plan description"
        },
        "description": {
          "type": "string",
          "description": "Service description",
          "canBeNull": false
        },
        "serviceName": {
          "type": "string",
          "description": "Impacted service name",
          "canBeNull": false
        }
      },
      "description": "Describe all services impacted by SLA",
      "namespace": "billing",
      "id": "SlaOperationService"
    },
    "dedicated.TemplateOsTypeEnum": {
      "enum": [
        "bsd",
        "linux",
        "solaris",
        "windows"
      ],
      "description": "Os type",
      "namespace": "dedicated",
      "enumType": "string",
      "id": "TemplateOsTypeEnum"
    },
    "nichandle.Authentication.Provider": {
      "id": "Provider",
      "namespace": "nichandle.Authentication",
      "description": "A SAML 2.0 provider",
      "properties": {
        "ssoServiceUrl": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": "IdP's Single Sign On Service Url",
          "type": "string"
        },
        "lastUpdate": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime",
          "description": "Last update of the identity provider",
          "type": "datetime"
        },
        "creation": {
          "description": "Creation date of the identity provider",
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "type": "datetime"
        },
        "groupAttributeName": {
          "type": "string",
          "description": "SAML Group attribute name",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": false
        },
        "idpSigningCertificate": {
          "type": "nichandle.Authentication.Certificate",
          "readOnly": true,
          "fullType": "nichandle.Authentication.Certificate",
          "canBeNull": false,
          "description": "IdP's signing certificate"
        }
      }
    },
    "dedicated.installationTemplate.hardwareRaid": {
      "namespace": "dedicated.installationTemplate",
      "id": "hardwareRaid",
      "properties": {
        "mode": {
          "readOnly": false,
          "canBeNull": false,
          "fullType": "dedicated.TemplateOsHardwareRaidEnum",
          "description": "RAID mode",
          "type": "dedicated.TemplateOsHardwareRaidEnum"
        },
        "disks": {
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string[]",
          "description": "Disk list",
          "type": "string[]"
        },
        "name": {
          "type": "string",
          "description": "Hardware RAID name",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": false
        },
        "step": {
          "type": "long",
          "description": "Specifies the creation order of the hardware RAID",
          "readOnly": false,
          "fullType": "long",
          "canBeNull": false
        }
      },
      "description": "Hardware RAID defined in this partitioning scheme"
    },
    "billing.paymentMethod.IconData": {
      "properties": {
        "name": {
          "canBeNull": true,
          "description": "Icon name",
          "type": "string"
        },
        "data": {
          "canBeNull": true,
          "description": "Icon in base64",
          "type": "string"
        }
      },
      "description": "Payment method type icon",
      "id": "IconData",
      "namespace": "billing.paymentMethod"
    },
    "order.Price": {
      "namespace": "order",
      "id": "Price",
      "properties": {
        "value": {
          "type": "double",
          "canBeNull": false,
          "description": null
        },
        "currencyCode": {
          "description": null,
          "canBeNull": false,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "type": "string",
          "canBeNull": false,
          "description": null
        }
      },
      "description": "Price with it's currency and textual representation"
    },
    "nichandle.Authentication.RoleEnum": {
      "id": "RoleEnum",
      "enumType": "string",
      "namespace": "nichandle",
      "enum": [
        "REGULAR",
        "ADMIN",
        "UNPRIVILEGED"
      ],
      "description": "Permission given on the account"
    },
    "billing.order.paymentMean.HttpParameter": {
      "namespace": "billing.order.paymentMean",
      "id": "HttpParameter",
      "description": "Parameter to give to a payment page",
      "properties": {
        "value": {
          "canBeNull": true,
          "description": null,
          "type": "string"
        },
        "choice": {
          "type": "billing.order.paymentMean.HttpParameterChoice[]",
          "canBeNull": true,
          "description": null
        },
        "name": {
          "type": "string",
          "description": null,
          "canBeNull": false
        }
      }
    },
    "billing.Payment": {
      "namespace": "billing",
      "id": "Payment",
      "description": "Details about a payment",
      "properties": {
        "paymentDate": {
          "type": "datetime",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "description": null
        },
        "paymentIdentifier": {
          "type": "string",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": true,
          "description": null
        },
        "paymentType": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "billing.PaymentMeanEnum",
          "type": "billing.PaymentMeanEnum"
        }
      }
    },
    "dedicated.TemplateOsProperties": {
      "properties": {
        "useDistributionKernel": {
          "description": "Use the distribution's native kernel instead of the recommended OVH Kernel",
          "canBeNull": true,
          "type": "boolean"
        },
        "postInstallationScriptReturn": {
          "canBeNull": true,
          "description": "indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "type": "string"
        },
        "changeLog": {
          "type": "text",
          "description": "Template change log details",
          "canBeNull": true
        },
        "customHostname": {
          "type": "string",
          "description": "Set up the server using the provided hostname instead of the default hostname",
          "canBeNull": true
        },
        "sshKeyName": {
          "description": "Name of the ssh key that should be installed. Password login will be disabled",
          "canBeNull": true,
          "type": "string"
        },
        "postInstallationScriptLink": {
          "description": "Indicate the URL where your postinstall customisation script is located",
          "canBeNull": true,
          "type": "string"
        },
        "rating": {
          "description": "",
          "canBeNull": true,
          "type": "long"
        }
      },
      "description": "A structure describing properties customizables about this dedicated installation template",
      "namespace": "dedicated",
      "id": "TemplateOsProperties"
    },
    "billing.order.followUp.History": {
      "properties": {
        "label": {
          "type": "billing.order.followUp.HistoryStatusEnum",
          "description": "History label of order follow-up",
          "canBeNull": false
        },
        "date": {
          "type": "datetime",
          "canBeNull": false,
          "description": "History date of order follow-up"
        },
        "description": {
          "canBeNull": false,
          "description": "History description of order follow-up",
          "type": "string"
        }
      },
      "description": "Step history of order follow-up",
      "id": "History",
      "namespace": "billing.order.followUp"
    },
    "auth.AccessRule": {
      "id": "AccessRule",
      "namespace": "auth",
      "properties": {
        "path": {
          "type": "string",
          "description": null,
          "canBeNull": false
        },
        "method": {
          "type": "http.MethodEnum",
          "description": null,
          "canBeNull": false
        }
      },
      "description": "Access rule required for the application"
    },
    "nichandle.accessRestriction.U2FRegistrationRequest": {
      "description": "Describe U2F RegistrationRequest",
      "properties": {
        "challenge": {
          "type": "string",
          "canBeNull": false,
          "description": null
        },
        "version": {
          "type": "string",
          "description": null,
          "canBeNull": false
        }
      },
      "namespace": "nichandle.accessRestriction",
      "id": "U2FRegistrationRequest"
    },
    "billing.DeferredPaymentAccount": {
      "description": "Deferred payment account info",
      "properties": {
        "id": {
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false,
          "description": null,
          "type": "long"
        },
        "icon": {
          "fullType": "billing.paymentMethod.IconData",
          "readOnly": true,
          "canBeNull": true,
          "description": "Payment method type icon",
          "type": "billing.paymentMethod.IconData"
        },
        "defaultPaymentMean": {
          "type": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "boolean",
          "description": null
        },
        "label": {
          "type": "string",
          "description": "Deferred account type",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "string"
        },
        "creationDate": {
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "datetime"
        },
        "state": {
          "type": "billing.DeferredPaymentAccountStatusEnum",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "billing.DeferredPaymentAccountStatusEnum",
          "description": null
        },
        "description": {
          "description": "Custom description of this account",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        }
      },
      "id": "DeferredPaymentAccount",
      "namespace": "billing"
    },
    "billing.order.RetractionReasonEnum": {
      "namespace": "billing.order",
      "id": "RetractionReasonEnum",
      "enumType": "string",
      "description": "Retraction reason type",
      "enum": [
        "competitor",
        "difficulty",
        "expensive",
        "other",
        "performance",
        "reliability",
        "unused"
      ]
    },
    "dedicated.server.SupportsUEFIEnum": {
      "description": "supports UEFI setup",
      "enum": [
        "no",
        "only",
        "yes"
      ],
      "id": "SupportsUEFIEnum",
      "enumType": "string",
      "namespace": "dedicated.server"
    },
    "dedicated.server.PartitionRaidEnum": {
      "description": "partition raid type",
      "enum": [
        "0",
        "1",
        "10",
        "5",
        "6"
      ],
      "enumType": "string",
      "id": "PartitionRaidEnum",
      "namespace": "dedicated.server"
    },
    "debt.Balance": {
      "namespace": "debt",
      "id": "Balance",
      "properties": {
        "unmaturedAmount": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "order.Price",
          "description": "Unmatured amount for deferred payment term",
          "type": "order.Price"
        },
        "dueAmount": {
          "fullType": "order.Price",
          "readOnly": true,
          "canBeNull": false,
          "description": "Amount of debts the account has",
          "type": "order.Price"
        },
        "todoAmount": {
          "type": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "order.Price",
          "description": "Reserved amount awaiting payment"
        },
        "pendingAmount": {
          "type": "order.Price",
          "readOnly": true,
          "fullType": "order.Price",
          "canBeNull": false,
          "description": "Amount currently being processed"
        },
        "active": {
          "type": "boolean",
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": false,
          "description": null
        }
      },
      "description": "Debt balance of the account"
    },
    "contact.Address": {
      "namespace": "contact",
      "id": "Address",
      "properties": {
        "country": {
          "readOnly": false,
          "canBeNull": false,
          "fullType": "nichandle.CountryEnum",
          "description": "Country",
          "type": "nichandle.CountryEnum"
        },
        "line3": {
          "type": "string",
          "description": "Third line of the address",
          "canBeNull": true,
          "readOnly": false,
          "fullType": "string"
        },
        "zip": {
          "type": "string",
          "description": "Zipcode",
          "canBeNull": false,
          "readOnly": false,
          "fullType": "string"
        },
        "otherDetails": {
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "description": "Others details",
          "type": "string"
        },
        "province": {
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "description": "Province name",
          "type": "string"
        },
        "city": {
          "fullType": "string",
          "readOnly": false,
          "canBeNull": false,
          "description": "City",
          "type": "string"
        },
        "line2": {
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "description": "Second line of the address",
          "type": "string"
        },
        "line1": {
          "description": "First line of the address",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        }
      },
      "description": "Representation of an Address"
    },
    "nichandle.accessRestriction.U2FSignRequest": {
      "description": "Describe U2F SignRequest",
      "properties": {
        "version": {
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "keyHandle": {
          "type": "string",
          "canBeNull": false,
          "description": null
        },
        "challenge": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        }
      },
      "id": "U2FSignRequest",
      "namespace": "nichandle.accessRestriction"
    },
    "nichandle.StateEnum": {
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "nichandle",
      "description": "States a nichandle can be in",
      "enum": [
        "complete",
        "incomplete"
      ]
    },
    "billing.BankAccount": {
      "namespace": "billing",
      "id": "BankAccount",
      "description": "SEPA bank account info",
      "properties": {
        "id": {
          "readOnly": true,
          "fullType": "long",
          "canBeNull": false,
          "description": null,
          "type": "long"
        },
        "iban": {
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "type": "string"
        },
        "state": {
          "type": "billing.BankAccountStateEnum",
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "billing.BankAccountStateEnum"
        },
        "creationDate": {
          "type": "date",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "date"
        },
        "mandateSignatureDate": {
          "type": "date",
          "description": null,
          "readOnly": true,
          "canBeNull": true,
          "fullType": "date"
        },
        "validationDocumentLink": {
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": true,
          "type": "string"
        },
        "uniqueReference": {
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "description": null,
          "type": "string"
        },
        "defaultPaymentMean": {
          "fullType": "boolean",
          "readOnly": true,
          "canBeNull": false,
          "description": null,
          "type": "boolean"
        },
        "icon": {
          "type": "billing.paymentMethod.IconData",
          "description": "Payment method type icon",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "billing.paymentMethod.IconData"
        },
        "bic": {
          "description": null,
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "type": "string"
        },
        "ownerAddress": {
          "type": "string",
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string"
        },
        "description": {
          "description": "Custom description of this account",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "ownerName": {
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "description": null,
          "type": "string"
        }
      }
    },
    "coreTypes.ContinentEnum": {
      "enumType": "string",
      "id": "ContinentEnum",
      "namespace": "coreTypes",
      "enum": [
        "africa",
        "antartica",
        "asia",
        "europe",
        "north-america",
        "oceania",
        "south-america"
      ],
      "description": "Continents"
    },
    "nichandle.accessRestriction.SOTPValidate": {
      "properties": {
        "remainingCodes": {
          "description": null,
          "canBeNull": false,
          "type": "long"
        }
      },
      "description": "Describe SOTP validation status",
      "id": "SOTPValidate",
      "namespace": "nichandle.accessRestriction"
    },
    "nichandle.OvhSubsidiaryEnum": {
      "id": "OvhSubsidiaryEnum",
      "enumType": "string",
      "namespace": "nichandle",
      "enum": [
        "ASIA",
        "AU",
        "CA",
        "CZ",
        "DE",
        "ES",
        "EU",
        "FI",
        "FR",
        "GB",
        "IE",
        "IT",
        "LT",
        "MA",
        "NL",
        "PL",
        "PT",
        "QC",
        "SG",
        "SN",
        "TN",
        "US",
        "WE",
        "WS"
      ],
      "description": "OVH subsidiaries"
    },
    "billing.Deposit": {
      "namespace": "billing",
      "id": "Deposit",
      "description": "Details about a deposit",
      "properties": {
        "amount": {
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "order.Price",
          "type": "order.Price"
        },
        "pdfUrl": {
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": null,
          "type": "string"
        },
        "orderId": {
          "type": "long",
          "description": null,
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false
        },
        "depositId": {
          "description": null,
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "paymentInfo": {
          "type": "debt.associatedObject.PaymentInfo",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "debt.associatedObject.PaymentInfo",
          "description": null
        },
        "url": {
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "type": "string"
        },
        "date": {
          "type": "datetime",
          "description": null,
          "fullType": "datetime",
          "readOnly": true,
          "canBeNull": false
        }
      }
    },
    "me.payment.method.Transaction.Type": {
      "description": "Payment transaction type enum",
      "enum": [
        "CREDIT",
        "DEBIT"
      ],
      "id": "Type",
      "enumType": "string",
      "namespace": "me.payment.method.Transaction"
    },
    "nichandle.Currency": {
      "description": "Customer currency",
      "properties": {
        "code": {
          "description": "Currency code",
          "canBeNull": false,
          "type": "string"
        },
        "symbol": {
          "description": "Currency symbol",
          "canBeNull": false,
          "type": "string"
        }
      },
      "namespace": "nichandle",
      "id": "Currency"
    },
    "agreements.ContractAgreement": {
      "namespace": "agreements",
      "id": "ContractAgreement",
      "description": "Contract agreement",
      "properties": {
        "date": {
          "type": "datetime",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "description": "Date the agreed contract was effective"
        },
        "agreed": {
          "fullType": "agreements.AgreementStateEnum",
          "readOnly": true,
          "canBeNull": false,
          "description": "State of the agreement",
          "type": "agreements.AgreementStateEnum"
        },
        "id": {
          "description": "Id of the contract",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        },
        "contractId": {
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false,
          "description": "Id of the agreed contract",
          "type": "long"
        }
      }
    },
    "billing.ItemDetail.OrderPlanProduct": {
      "description": "Product data from order",
      "properties": {
        "name": {
          "type": "string",
          "canBeNull": true,
          "description": "Name of the product used when ordering through /order/cart"
        }
      },
      "namespace": "billing.ItemDetail",
      "id": "OrderPlanProduct"
    },
    "nichandle.DomainTaskProgressBar": {
      "description": "Domain operation progress",
      "properties": {
        "expectedDoneDate": {
          "readOnly": true,
          "canBeNull": true,
          "fullType": "datetime",
          "description": "The estimated end date of the task",
          "type": "datetime"
        },
        "taskActions": {
          "type": "domain.OperationActionEnum[]",
          "fullType": "domain.OperationActionEnum[]",
          "readOnly": true,
          "canBeNull": false,
          "description": "Action possible on task"
        },
        "lastUpdateDate": {
          "canBeNull": true,
          "readOnly": true,
          "fullType": "datetime",
          "description": "The last update date of the task",
          "type": "datetime"
        },
        "progress": {
          "type": "long",
          "description": "Progress percentage of the task",
          "fullType": "long",
          "readOnly": true,
          "canBeNull": false
        },
        "followUpSteps": {
          "type": "domain.OperationStep[]",
          "fullType": "domain.OperationStep[]",
          "readOnly": true,
          "canBeNull": true,
          "description": "all the steps of operation"
        },
        "currentStep": {
          "type": "domain.OperationStep",
          "description": "Current step of the operation",
          "readOnly": true,
          "fullType": "domain.OperationStep",
          "canBeNull": false
        },
        "taskStatus": {
          "readOnly": true,
          "canBeNull": false,
          "fullType": "domain.OperationStatusEnum",
          "description": "The status of the task",
          "type": "domain.OperationStatusEnum"
        }
      },
      "namespace": "nichandle",
      "id": "DomainTaskProgressBar"
    },
    "nichandle.sshKey": {
      "description": "Customer public SSH key, can be used for rescue netboot or server access after reinstallation",
      "properties": {
        "key": {
          "description": "ASCII encoded public SSH key",
          "fullType": "string",
          "readOnly": true,
          "canBeNull": false,
          "type": "string"
        },
        "keyName": {
          "type": "string",
          "canBeNull": false,
          "readOnly": true,
          "fullType": "string",
          "description": "Name of this public SSH key"
        },
        "default": {
          "description": "True when this public SSH key is used for rescue mode and reinstallations",
          "fullType": "boolean",
          "readOnly": false,
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "id": "sshKey",
      "namespace": "nichandle"
    },
    "nichandle.accessRestriction.TOTPStatusEnum": {
      "enumType": "string",
      "id": "TOTPStatusEnum",
      "namespace": "nichandle.accessRestriction",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ],
      "description": "Status of TOTP account"
    },
    "me.payment.method.Transaction.Status": {
      "namespace": "me.payment.method.Transaction",
      "enumType": "string",
      "id": "Status",
      "enum": [
        "CANCELED",
        "CANCELING",
        "CONFIRMING",
        "CREATED",
        "ERROR",
        "FAILED",
        "READY",
        "SUCCESS"
      ],
      "description": "Payment transaction status enum"
    },
    "me.payment.method.PaymentMethod.Status": {
      "enum": [
        "CANCELED",
        "CANCELING",
        "CREATED",
        "ERROR",
        "EXPIRED",
        "CREATING",
        "MAINTENANCE",
        "PAUSED",
        "VALID"
      ],
      "description": "Payment method status enum",
      "id": "Status",
      "enumType": "string",
      "namespace": "me.payment.method.PaymentMethod"
    },
    "billing.order.PayWithPaymentMethod": {
      "properties": {
        "id": {
          "description": "ID of payment method for pay this order",
          "canBeNull": false,
          "type": "long"
        }
      },
      "description": "Pay with payment method parameter",
      "namespace": "billing.order",
      "id": "PayWithPaymentMethod"
    },
    "debt.entry.StatusEnum": {
      "namespace": "debt.entry",
      "enumType": "string",
      "id": "StatusEnum",
      "description": "All status a debt entry can be in",
      "enum": [
        "CANCELLED",
        "DONE",
        "FAILED",
        "PAID",
        "PENDING",
        "TODO"
      ]
    },
    "nichandle.accessRestriction.SmsSecret": {
      "id": "SmsSecret",
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "remainingTry": {
          "type": "long",
          "canBeNull": false,
          "description": null
        },
        "id": {
          "type": "long",
          "canBeNull": false,
          "description": null
        }
      },
      "description": "Describe secret key"
    }
  },
  "apiVersion": "1.0"
}