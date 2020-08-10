import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/partner",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "partner.Partner",
          "noAuthentication": false,
          "description": "Get partner status"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "partner.Partner",
              "paramType": "body",
              "fullType": "partner.Partner",
              "required": true,
              "description": "Request Body"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Register as a partner"
        }
      ],
      "description": "Partner registration"
    },
    {
      "path": "/partner/form/schema",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "partner.form.Schema",
          "noAuthentication": true,
          "description": "Get partner form schema"
        }
      ],
      "description": "Partner form schema"
    }
  ],
  "resourcePath": "/partner",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "nichandle.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "nichandle",
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
      "enumType": "string"
    },
    "partner.AcceptanceStatusEnum": {
      "id": "AcceptanceStatusEnum",
      "namespace": "partner",
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
      "enumType": "string"
    },
    "partner.Account": {
      "id": "Account",
      "namespace": "partner",
      "description": "Account Entity",
      "properties": {
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Account City",
          "required": true
        },
        "country": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Account Country",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Account Name",
          "required": true
        }
      }
    },
    "partner.AreaOfExpertiseEnum": {
      "id": "AreaOfExpertiseEnum",
      "namespace": "partner",
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
      "enumType": "string"
    },
    "partner.Contact": {
      "id": "Contact",
      "namespace": "partner",
      "description": "Contact Entity",
      "properties": {
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact Email",
          "required": true
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact First Name",
          "required": true
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact Last Name",
          "required": true
        },
        "phone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact Phone",
          "required": true
        },
        "position": {
          "type": "partner.PositionEnum",
          "fullType": "partner.PositionEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact Position",
          "required": true
        }
      }
    },
    "partner.Partner": {
      "id": "Partner",
      "namespace": "partner",
      "description": "Partner Entity",
      "properties": {
        "acceptanceStatus": {
          "type": "partner.AcceptanceStatusEnum",
          "fullType": "partner.AcceptanceStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Acceptance Status",
          "required": false
        },
        "account": {
          "type": "partner.Account",
          "fullType": "partner.Account",
          "canBeNull": false,
          "readOnly": false,
          "description": "Account",
          "required": true
        },
        "areaOfExpertise": {
          "type": "partner.AreaOfExpertiseEnum[]",
          "fullType": "partner.AreaOfExpertiseEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Area of Expertise",
          "required": true
        },
        "contact": {
          "type": "partner.Contact",
          "fullType": "partner.Contact",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact",
          "required": true
        },
        "partnersProgramReason": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Why you want to take part in OVH's Partners Program",
          "required": true
        },
        "salesProjection": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Sales Projection (in euros)",
          "required": true
        }
      }
    },
    "partner.PositionEnum": {
      "id": "PositionEnum",
      "namespace": "partner",
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
      "enumType": "string"
    },
    "partner.form.Field": {
      "id": "Field",
      "namespace": "partner.form",
      "description": "Field",
      "properties": {
        "fieldConfig": {
          "type": "partner.form.field.Config",
          "fullType": "partner.form.field.Config",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the field",
          "required": false
        }
      }
    },
    "partner.form.Schema": {
      "id": "Schema",
      "namespace": "partner.form",
      "description": "Partner Form Schema",
      "properties": {
        "account": {
          "type": "partner.form.schema.Account",
          "fullType": "partner.form.schema.Account",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account",
          "required": false
        },
        "areaOfExpertise": {
          "type": "partner.form.schema.AreaOfExpertise",
          "fullType": "partner.form.schema.AreaOfExpertise",
          "canBeNull": false,
          "readOnly": true,
          "description": "Area of expertise",
          "required": false
        },
        "contact": {
          "type": "partner.form.schema.Contact",
          "fullType": "partner.form.schema.Contact",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact",
          "required": false
        },
        "partnersProgramReason": {
          "type": "partner.form.Field",
          "fullType": "partner.form.Field",
          "canBeNull": false,
          "readOnly": true,
          "description": "Why you want to take part in OVH's Partners Program",
          "required": false
        },
        "salesProjection": {
          "type": "partner.form.Field",
          "fullType": "partner.form.Field",
          "canBeNull": false,
          "readOnly": true,
          "description": "Sales projection (in euros)",
          "required": false
        }
      }
    },
    "partner.form.field.Config": {
      "id": "Config",
      "namespace": "partner.form.field",
      "description": "Field configuration",
      "properties": {
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Field label",
          "required": false
        },
        "section": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Section on the website",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Field type",
          "required": false
        }
      }
    },
    "partner.form.schema.Account": {
      "id": "Account",
      "namespace": "partner.form.schema",
      "description": "Partner account schema",
      "properties": {
        "city": {
          "type": "partner.form.Field",
          "fullType": "partner.form.Field",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the city field",
          "required": false
        },
        "country": {
          "type": "partner.form.schema.account.Country",
          "fullType": "partner.form.schema.account.Country",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the country field",
          "required": false
        },
        "name": {
          "type": "partner.form.Field",
          "fullType": "partner.form.Field",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the name field",
          "required": false
        }
      }
    },
    "partner.form.schema.AreaOfExpertise": {
      "id": "AreaOfExpertise",
      "namespace": "partner.form.schema",
      "description": "Partner area of expertise",
      "properties": {
        "fieldConfig": {
          "type": "partner.form.field.Config",
          "fullType": "partner.form.field.Config",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the field",
          "required": false
        },
        "options": {
          "type": "partner.form.schema.areaOfExpertise.Option[]",
          "fullType": "partner.form.schema.areaOfExpertise.Option[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Options for area of expertise",
          "required": false
        }
      }
    },
    "partner.form.schema.Contact": {
      "id": "Contact",
      "namespace": "partner.form.schema",
      "description": "Partner contact schema",
      "properties": {
        "email": {
          "type": "partner.form.Field",
          "fullType": "partner.form.Field",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the email field",
          "required": false
        },
        "firstName": {
          "type": "partner.form.Field",
          "fullType": "partner.form.Field",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the firstName field",
          "required": false
        },
        "lastName": {
          "type": "partner.form.Field",
          "fullType": "partner.form.Field",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the lastName field",
          "required": false
        },
        "phone": {
          "type": "partner.form.Field",
          "fullType": "partner.form.Field",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the phone field",
          "required": false
        },
        "position": {
          "type": "partner.form.schema.contact.Position",
          "fullType": "partner.form.schema.contact.Position",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the position field",
          "required": false
        }
      }
    },
    "partner.form.schema.account.Country": {
      "id": "Country",
      "namespace": "partner.form.schema.account",
      "description": "Partner account country",
      "properties": {
        "fieldConfig": {
          "type": "partner.form.field.Config",
          "fullType": "partner.form.field.Config",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the country field",
          "required": false
        },
        "options": {
          "type": "partner.form.schema.account.country.Option[]",
          "fullType": "partner.form.schema.account.country.Option[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Options for country",
          "required": false
        }
      }
    },
    "partner.form.schema.account.country.Option": {
      "id": "Option",
      "namespace": "partner.form.schema.account.country",
      "description": "Partner country options",
      "properties": {
        "text": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option text",
          "required": false
        },
        "value": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option value",
          "required": false
        }
      }
    },
    "partner.form.schema.areaOfExpertise.Option": {
      "id": "Option",
      "namespace": "partner.form.schema.areaOfExpertise",
      "description": "Partner area of expertise option",
      "properties": {
        "text": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option text",
          "required": false
        },
        "value": {
          "type": "partner.AreaOfExpertiseEnum",
          "fullType": "partner.AreaOfExpertiseEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option value",
          "required": false
        }
      }
    },
    "partner.form.schema.contact.Position": {
      "id": "Position",
      "namespace": "partner.form.schema.contact",
      "description": "Partner contact position",
      "properties": {
        "fieldConfig": {
          "type": "partner.form.field.Config",
          "fullType": "partner.form.field.Config",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration of the position field",
          "required": false
        },
        "options": {
          "type": "partner.form.schema.contact.position.Option[]",
          "fullType": "partner.form.schema.contact.position.Option[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Options for position",
          "required": false
        }
      }
    },
    "partner.form.schema.contact.position.Option": {
      "id": "Option",
      "namespace": "partner.form.schema.contact.position",
      "description": "Partner position options",
      "properties": {
        "text": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option text",
          "required": false
        },
        "value": {
          "type": "partner.PositionEnum",
          "fullType": "partner.PositionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option value",
          "required": false
        }
      }
    }
  }
}