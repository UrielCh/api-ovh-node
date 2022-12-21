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
          "responseType": "partner2.Partner"
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
              "dataType": "partner2.Partner",
              "description": "Request Body",
              "fullType": "partner2.Partner",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/partner"
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
    "partner2.AcceptanceStatusEnum": {
      "description": "Acceptance status",
      "enum": [
        "Advanced",
        "AdvancedHandOperated",
        "AdvancedQualified",
        "Open",
        "Registered",
        "RegisteredQualified",
        "Rejected"
      ],
      "enumType": "string",
      "id": "AcceptanceStatusEnum",
      "namespace": "partner2"
    },
    "partner2.Account": {
      "description": "Account Entity",
      "id": "Account",
      "namespace": "partner2",
      "properties": {
        "city": {
          "canBeNull": true,
          "description": "DEPRECATED - Account City",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "companyTurnover": {
          "canBeNull": true,
          "description": "Company turnover (in euros)",
          "fullType": "double",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "country": {
          "canBeNull": true,
          "description": "DEPRECATED - Account Country",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Account Name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "numberOfEmployees": {
          "canBeNull": true,
          "description": "Number of employees",
          "fullType": "partner2.employeesNumberEnum",
          "readOnly": false,
          "required": false,
          "type": "partner2.employeesNumberEnum"
        },
        "partnerType": {
          "canBeNull": true,
          "description": "Partner Type",
          "fullType": "partner2.partnerTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "partner2.partnerTypeEnum"
        },
        "yearEstablished": {
          "canBeNull": true,
          "description": "In what year was your company established?",
          "fullType": "date",
          "readOnly": false,
          "required": false,
          "type": "date"
        }
      }
    },
    "partner2.AreaOfExpertiseEnum": {
      "description": "Area of expertise",
      "enum": [
        "BigData",
        "Connectivity",
        "DC",
        "DomainName",
        "EmailMsSolution",
        "HPC",
        "Orchestration",
        "PC",
        "PCIDSS",
        "SecurityCertif",
        "VPS",
        "VoIP",
        "WH"
      ],
      "enumType": "string",
      "id": "AreaOfExpertiseEnum",
      "namespace": "partner2"
    },
    "partner2.Contact": {
      "description": "Contact Entity",
      "id": "Contact",
      "namespace": "partner2",
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
        "jobTitle": {
          "canBeNull": true,
          "description": "Contact Job Title",
          "fullType": "string",
          "readOnly": false,
          "required": false,
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
          "fullType": "partner2.PositionEnum",
          "readOnly": false,
          "required": true,
          "type": "partner2.PositionEnum"
        }
      }
    },
    "partner2.Partner": {
      "description": "Partner Entity",
      "id": "Partner",
      "namespace": "partner2",
      "properties": {
        "acceptanceStatus": {
          "canBeNull": true,
          "description": "Acceptance Status",
          "fullType": "partner2.AcceptanceStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "partner2.AcceptanceStatusEnum"
        },
        "account": {
          "canBeNull": false,
          "description": "Account",
          "fullType": "partner2.Account",
          "readOnly": false,
          "required": true,
          "type": "partner2.Account"
        },
        "areaOfExpertise": {
          "canBeNull": true,
          "description": "DEPRECATED - Area of Expertise",
          "fullType": "partner2.AreaOfExpertiseEnum[]",
          "readOnly": false,
          "required": false,
          "type": "partner2.AreaOfExpertiseEnum[]"
        },
        "contact": {
          "canBeNull": false,
          "description": "Contact",
          "fullType": "partner2.Contact",
          "readOnly": false,
          "required": true,
          "type": "partner2.Contact"
        },
        "partnersProgramReason": {
          "canBeNull": true,
          "description": "DEPRECATED - Why you want to take part in OVH's Partners Program",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "partnership": {
          "canBeNull": false,
          "description": " How the PartnerShip will Growth",
          "fullType": "partner2.PartnerShip",
          "readOnly": false,
          "required": false,
          "type": "partner2.PartnerShip"
        },
        "salesProjection": {
          "canBeNull": true,
          "description": "DEPRECATED - Sales Projection (in euros) ",
          "fullType": "double",
          "readOnly": false,
          "required": false,
          "type": "double"
        }
      }
    },
    "partner2.PartnerShip": {
      "description": "Partner ship evolution",
      "id": "PartnerShip",
      "namespace": "partner2",
      "properties": {
        "areaOfExpertise": {
          "canBeNull": true,
          "description": "Area of Expertise",
          "fullType": "partner2.AreaOfExpertiseEnum[]",
          "readOnly": false,
          "required": false,
          "type": "partner2.AreaOfExpertiseEnum[]"
        },
        "emailCommunication": {
          "canBeNull": false,
          "description": "GDPR - email/communication opt in",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "partnersProgramReason": {
          "canBeNull": true,
          "description": "Why you want to take part in OVH's Partners Program",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "salesGrowthOpportunities": {
          "canBeNull": true,
          "description": "OVHcloud sales growth opportunities",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "salesProjection": {
          "canBeNull": false,
          "description": "Sales projection (in euros)",
          "fullType": "double",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "supportAgreementStatement": {
          "canBeNull": false,
          "description": "Support agreement statement",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "partner2.PositionEnum": {
      "description": "Job positions",
      "enum": [
        "AF",
        "BusinessOwner",
        "HR",
        "ITDevops",
        "ITOther",
        "ITSysAdmin",
        "LC",
        "Marketing",
        "Other",
        "PreSales",
        "Production",
        "Purchasing",
        "RD",
        "Sales"
      ],
      "enumType": "string",
      "id": "PositionEnum",
      "namespace": "partner2"
    },
    "partner2.employeesNumberEnum": {
      "description": "employeesNumber",
      "enum": [
        "1000to1999",
        "100To199",
        "10To19",
        "1Or2",
        "2000to4999",
        "200To249",
        "20To49",
        "250To499",
        "3To5",
        "5000to9999",
        "500to999",
        "50To99",
        "6To9",
        "over10000"
      ],
      "enumType": "string",
      "id": "employeesNumberEnum",
      "namespace": "partner2"
    },
    "partner2.partnerTypeEnum": {
      "description": "partner type",
      "enum": [
        "consultingCompany",
        "iaasProvider",
        "managedServiceProvider",
        "other",
        "softwareEditor",
        "strategicConsulting",
        "systemsIntegrator",
        "telecomOperators",
        "trainingCompany",
        "valueAddedReseller",
        "webAgency"
      ],
      "enumType": "string",
      "id": "partnerTypeEnum",
      "namespace": "partner2"
    }
  },
  "resourcePath": "/partner"
}