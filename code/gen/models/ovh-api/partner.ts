import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/partner.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Partner registration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get partner status",
          "errors": [
            "Server::NoContent::PartnerError",
            "Client::NotFound::PartnerNotFound",
            "Server::InternalServerError::PartnerError"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "partner.Partner"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register as a partner",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "partner.Partner",
              "description": "Request Body",
              "fullType": "partner.Partner",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/partner"
    },
    {
      "description": "Partner form schema",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get partner form schema",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "partner.form.Schema"
        }
      ],
      "path": "/partner/form/schema"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "nichandle.CountryEnum": {
      "description": "Countries a nichandle can choose",
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
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "nichandle"
    },
    "partner.AcceptanceStatusEnum": {
      "description": "Acceptance status",
      "enum": [
        "Open",
        "Rejected",
        "RegisteredQualified",
        "AdvancedQualified",
        "Registered",
        "Advanced",
        "AdvancedHandOperated"
      ],
      "enumType": "string",
      "id": "AcceptanceStatusEnum",
      "namespace": "partner"
    },
    "partner.Account": {
      "description": "Account Entity",
      "id": "Account",
      "namespace": "partner",
      "properties": {
        "city": {
          "canBeNull": false,
          "description": "Account City",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "description": "Account Country",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": true,
          "type": "nichandle.CountryEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Account Name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "partner.AreaOfExpertiseEnum": {
      "description": "Area of expertise",
      "enum": [
        "HPC",
        "DC",
        "PC",
        "Orchestration",
        "BigData",
        "VPS",
        "SecurityCertif",
        "DomainName",
        "EmailMsSolution",
        "WH",
        "Connectivity",
        "VoIP"
      ],
      "enumType": "string",
      "id": "AreaOfExpertiseEnum",
      "namespace": "partner"
    },
    "partner.Contact": {
      "description": "Contact Entity",
      "id": "Contact",
      "namespace": "partner",
      "properties": {
        "email": {
          "canBeNull": false,
          "description": "Contact Email",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "description": "Contact First Name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "lastName": {
          "canBeNull": false,
          "description": "Contact Last Name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "phone": {
          "canBeNull": false,
          "description": "Contact Phone",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "position": {
          "canBeNull": false,
          "description": "Contact Position",
          "fullType": "partner.PositionEnum",
          "readOnly": false,
          "required": true,
          "type": "partner.PositionEnum"
        }
      }
    },
    "partner.Partner": {
      "description": "Partner Entity",
      "id": "Partner",
      "namespace": "partner",
      "properties": {
        "acceptanceStatus": {
          "canBeNull": false,
          "description": "Acceptance Status",
          "fullType": "partner.AcceptanceStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "partner.AcceptanceStatusEnum"
        },
        "account": {
          "canBeNull": false,
          "description": "Account",
          "fullType": "partner.Account",
          "readOnly": false,
          "required": true,
          "type": "partner.Account"
        },
        "areaOfExpertise": {
          "canBeNull": false,
          "description": "Area of Expertise",
          "fullType": "partner.AreaOfExpertiseEnum[]",
          "readOnly": false,
          "required": true,
          "type": "partner.AreaOfExpertiseEnum[]"
        },
        "contact": {
          "canBeNull": false,
          "description": "Contact",
          "fullType": "partner.Contact",
          "readOnly": false,
          "required": true,
          "type": "partner.Contact"
        },
        "partnersProgramReason": {
          "canBeNull": false,
          "description": "Why you want to take part in OVH's Partners Program",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "salesProjection": {
          "canBeNull": false,
          "description": "Sales Projection (in euros)",
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        }
      }
    },
    "partner.PositionEnum": {
      "description": "Job positions",
      "enum": [
        "ITSysAdmin",
        "ITDevops",
        "ITOther",
        "Marketing",
        "Sales",
        "Purchasing",
        "RD",
        "AF",
        "HR",
        "Production",
        "LC",
        "Other"
      ],
      "enumType": "string",
      "id": "PositionEnum",
      "namespace": "partner"
    },
    "partner.form.Field": {
      "description": "Field",
      "id": "Field",
      "namespace": "partner.form",
      "properties": {
        "fieldConfig": {
          "canBeNull": false,
          "description": "Configuration of the field",
          "fullType": "partner.form.field.Config",
          "readOnly": true,
          "required": false,
          "type": "partner.form.field.Config"
        }
      }
    },
    "partner.form.Schema": {
      "description": "Partner Form Schema",
      "id": "Schema",
      "namespace": "partner.form",
      "properties": {
        "account": {
          "canBeNull": false,
          "description": "Account",
          "fullType": "partner.form.schema.Account",
          "readOnly": true,
          "required": false,
          "type": "partner.form.schema.Account"
        },
        "areaOfExpertise": {
          "canBeNull": false,
          "description": "Area of expertise",
          "fullType": "partner.form.schema.AreaOfExpertise",
          "readOnly": true,
          "required": false,
          "type": "partner.form.schema.AreaOfExpertise"
        },
        "contact": {
          "canBeNull": false,
          "description": "Contact",
          "fullType": "partner.form.schema.Contact",
          "readOnly": true,
          "required": false,
          "type": "partner.form.schema.Contact"
        },
        "partnersProgramReason": {
          "canBeNull": false,
          "description": "Why you want to take part in OVH's Partners Program",
          "fullType": "partner.form.Field",
          "readOnly": true,
          "required": false,
          "type": "partner.form.Field"
        },
        "salesProjection": {
          "canBeNull": false,
          "description": "Sales projection (in euros)",
          "fullType": "partner.form.Field",
          "readOnly": true,
          "required": false,
          "type": "partner.form.Field"
        }
      }
    },
    "partner.form.field.Config": {
      "description": "Field configuration",
      "id": "Config",
      "namespace": "partner.form.field",
      "properties": {
        "label": {
          "canBeNull": false,
          "description": "Field label",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "section": {
          "canBeNull": false,
          "description": "Section on the website",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Field type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "partner.form.schema.Account": {
      "description": "Partner account schema",
      "id": "Account",
      "namespace": "partner.form.schema",
      "properties": {
        "city": {
          "canBeNull": false,
          "description": "Configuration of the city field",
          "fullType": "partner.form.Field",
          "readOnly": true,
          "required": false,
          "type": "partner.form.Field"
        },
        "country": {
          "canBeNull": false,
          "description": "Configuration of the country field",
          "fullType": "partner.form.schema.account.Country",
          "readOnly": true,
          "required": false,
          "type": "partner.form.schema.account.Country"
        },
        "name": {
          "canBeNull": false,
          "description": "Configuration of the name field",
          "fullType": "partner.form.Field",
          "readOnly": true,
          "required": false,
          "type": "partner.form.Field"
        }
      }
    },
    "partner.form.schema.AreaOfExpertise": {
      "description": "Partner area of expertise",
      "id": "AreaOfExpertise",
      "namespace": "partner.form.schema",
      "properties": {
        "fieldConfig": {
          "canBeNull": false,
          "description": "Configuration of the field",
          "fullType": "partner.form.field.Config",
          "readOnly": true,
          "required": false,
          "type": "partner.form.field.Config"
        },
        "options": {
          "canBeNull": false,
          "description": "Options for area of expertise",
          "fullType": "partner.form.schema.areaOfExpertise.Option[]",
          "readOnly": true,
          "required": false,
          "type": "partner.form.schema.areaOfExpertise.Option[]"
        }
      }
    },
    "partner.form.schema.Contact": {
      "description": "Partner contact schema",
      "id": "Contact",
      "namespace": "partner.form.schema",
      "properties": {
        "email": {
          "canBeNull": false,
          "description": "Configuration of the email field",
          "fullType": "partner.form.Field",
          "readOnly": true,
          "required": false,
          "type": "partner.form.Field"
        },
        "firstName": {
          "canBeNull": false,
          "description": "Configuration of the firstName field",
          "fullType": "partner.form.Field",
          "readOnly": true,
          "required": false,
          "type": "partner.form.Field"
        },
        "lastName": {
          "canBeNull": false,
          "description": "Configuration of the lastName field",
          "fullType": "partner.form.Field",
          "readOnly": true,
          "required": false,
          "type": "partner.form.Field"
        },
        "phone": {
          "canBeNull": false,
          "description": "Configuration of the phone field",
          "fullType": "partner.form.Field",
          "readOnly": true,
          "required": false,
          "type": "partner.form.Field"
        },
        "position": {
          "canBeNull": false,
          "description": "Configuration of the position field",
          "fullType": "partner.form.schema.contact.Position",
          "readOnly": true,
          "required": false,
          "type": "partner.form.schema.contact.Position"
        }
      }
    },
    "partner.form.schema.account.Country": {
      "description": "Partner account country",
      "id": "Country",
      "namespace": "partner.form.schema.account",
      "properties": {
        "fieldConfig": {
          "canBeNull": false,
          "description": "Configuration of the country field",
          "fullType": "partner.form.field.Config",
          "readOnly": true,
          "required": false,
          "type": "partner.form.field.Config"
        },
        "options": {
          "canBeNull": false,
          "description": "Options for country",
          "fullType": "partner.form.schema.account.country.Option[]",
          "readOnly": true,
          "required": false,
          "type": "partner.form.schema.account.country.Option[]"
        }
      }
    },
    "partner.form.schema.account.country.Option": {
      "description": "Partner country options",
      "id": "Option",
      "namespace": "partner.form.schema.account.country",
      "properties": {
        "text": {
          "canBeNull": false,
          "description": "Option text",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Option value",
          "fullType": "nichandle.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.CountryEnum"
        }
      }
    },
    "partner.form.schema.areaOfExpertise.Option": {
      "description": "Partner area of expertise option",
      "id": "Option",
      "namespace": "partner.form.schema.areaOfExpertise",
      "properties": {
        "text": {
          "canBeNull": false,
          "description": "Option text",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Option value",
          "fullType": "partner.AreaOfExpertiseEnum",
          "readOnly": true,
          "required": false,
          "type": "partner.AreaOfExpertiseEnum"
        }
      }
    },
    "partner.form.schema.contact.Position": {
      "description": "Partner contact position",
      "id": "Position",
      "namespace": "partner.form.schema.contact",
      "properties": {
        "fieldConfig": {
          "canBeNull": false,
          "description": "Configuration of the position field",
          "fullType": "partner.form.field.Config",
          "readOnly": true,
          "required": false,
          "type": "partner.form.field.Config"
        },
        "options": {
          "canBeNull": false,
          "description": "Options for position",
          "fullType": "partner.form.schema.contact.position.Option[]",
          "readOnly": true,
          "required": false,
          "type": "partner.form.schema.contact.position.Option[]"
        }
      }
    },
    "partner.form.schema.contact.position.Option": {
      "description": "Partner position options",
      "id": "Option",
      "namespace": "partner.form.schema.contact.position",
      "properties": {
        "text": {
          "canBeNull": false,
          "description": "Option text",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Option value",
          "fullType": "partner.PositionEnum",
          "readOnly": true,
          "required": false,
          "type": "partner.PositionEnum"
        }
      }
    }
  },
  "resourcePath": "/partner"
}