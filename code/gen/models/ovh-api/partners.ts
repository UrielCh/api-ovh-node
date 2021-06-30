import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/partners.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Company.list",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List created companies",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Created a new company for the inscription",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "Partner.activitySectors",
              "description": "Company's sector of activity",
              "fullType": "Partner.activitySectors",
              "name": "activitySectors",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's street address",
              "fullType": "string",
              "name": "address",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Company's city",
              "fullType": "string",
              "name": "city",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "Partner.clientKinds",
              "description": "Kind of client the company target",
              "fullType": "Partner.clientKinds",
              "name": "clientKinds",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The commercial name of the company",
              "fullType": "string",
              "name": "commercialName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": "Company's country",
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Company's summary",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Company's email",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "Partner.employeesNumberEnum",
              "description": "Estimation of the number of employees",
              "fullType": "Partner.employeesNumberEnum",
              "name": "employeesNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "Partner.expertisesChoices",
              "description": "Company's domain of expertises",
              "fullType": "Partner.expertisesChoices",
              "name": "expertises",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.externalCertifications",
              "description": "Certifications obtained from other enterprises",
              "fullType": "Partner.externalCertifications",
              "name": "externalCertifications",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's facebook url, must resemble \"https://www.facebook.com/ovh\")",
              "fullType": "string",
              "name": "facebook",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's linkedin url, must resemble \"https://www.linkedin.com/in/ovh\")",
              "fullType": "string",
              "name": "linkedin",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's logo url",
              "fullType": "string",
              "name": "logo",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the company",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "Partner.OVHCertifications",
              "description": "OVH certification acquired",
              "fullType": "Partner.OVHCertifications",
              "name": "OVHCertifications",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.OVHCustomersAdvisedEnum",
              "description": "Estimation of the number of accompanied customers in using OVH's solutions",
              "fullType": "Partner.OVHCustomersAdvisedEnum",
              "name": "OVHCustomersAdvised",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "Partner.knowledgeResourcesRangeEnum",
              "description": "Estimation of the number of resources knowing OVH product the company has",
              "fullType": "Partner.knowledgeResourcesRangeEnum",
              "name": "OVHKnowledgeResources",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "Partner.OVHProductsUsed",
              "description": "OVH's product the company's solutions relies on",
              "fullType": "Partner.OVHProductsUsed",
              "name": "OVHProductsUsed",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.technicalAdvancedResourcesRangeEnum",
              "description": "Estimation of the number of resources that have technical skills on OVH solutions the company has",
              "fullType": "Partner.technicalAdvancedResourcesRangeEnum",
              "name": "OVHTechnicalAdvancedResources",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "Partner.technicalExpertResourcesRangeEnum",
              "description": "Estimation of the number of expert resources for OVH solutions the company has",
              "fullType": "Partner.technicalExpertResourcesRangeEnum",
              "name": "OVHTechnicalExpertResources",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "Partner.partnerKnowledges",
              "description": "How did you heard about the OVH's partnership program",
              "fullType": "Partner.partnerKnowledges",
              "name": "partnerKnowledges",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's phone",
              "fullType": "string",
              "name": "phone",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "Partner.productCountries",
              "description": "In which country the company products of solutions are available",
              "fullType": "Partner.productCountries",
              "name": "productCountries",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's registration number",
              "fullType": "string",
              "name": "registrationNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.revenueRangeEnum",
              "description": "Estimation of the revenue of the company",
              "fullType": "Partner.revenueRangeEnum",
              "name": "revenue",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Company's twitter url, must resemble \"https://twitter.com/ovh\")",
              "fullType": "string",
              "name": "twitter",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's website",
              "fullType": "string",
              "name": "website",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Company's zipCode",
              "fullType": "string",
              "name": "zipCode",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "Partner.Company",
          "scopes": [
            "all"
          ]
        }
      ],
      "path": "/partners/register/company"
    },
    {
      "description": "Company.get",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove a company",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Company's id",
              "fullType": "string",
              "name": "companyId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information on a created company",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Company's id",
              "fullType": "string",
              "name": "companyId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "Partner.Company",
          "scopes": [
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update some fields on a created company",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "Partner.activitySectors",
              "description": "Company's sector of activity",
              "fullType": "Partner.activitySectors",
              "name": "activitySectors",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's street address",
              "fullType": "string",
              "name": "address",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's city",
              "fullType": "string",
              "name": "city",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.clientKinds",
              "description": "Kind of client the company target",
              "fullType": "Partner.clientKinds",
              "name": "clientKinds",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The commercial name of the company",
              "fullType": "string",
              "name": "commercialName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.CountryEnum",
              "description": "Company's country",
              "fullType": "nichandle.CountryEnum",
              "name": "country",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's summary",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.employeesNumberEnum",
              "description": "Estimation of the number of employees",
              "fullType": "Partner.employeesNumberEnum",
              "name": "effective",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's email",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.expertisesChoices",
              "description": "Company's domain of competence",
              "fullType": "Partner.expertisesChoices",
              "name": "expertises",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.externalCertifications",
              "description": "Certifications obtained from other enterprises",
              "fullType": "Partner.externalCertifications",
              "name": "externalCertifications",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's facebook url, must resemble \"https://www.facebook.com/ovh\")",
              "fullType": "string",
              "name": "facebook",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's linkedin url, must resemble \"https://www.linkedin.com/in/ovh\")",
              "fullType": "string",
              "name": "linkedin",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's logo url",
              "fullType": "string",
              "name": "logo",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of the company",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.OVHCertifications",
              "description": "OVH certification acquired",
              "fullType": "Partner.OVHCertifications",
              "name": "OVHCertifications",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.OVHCustomersAdvisedEnum",
              "description": "Estimation of the number of accompanied customers in using OVH's solutions",
              "fullType": "Partner.OVHCustomersAdvisedEnum",
              "name": "OVHCustomersAdvised",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.knowledgeResourcesRangeEnum",
              "description": "Estimation of the number of resources knowing OVH product the company has",
              "fullType": "Partner.knowledgeResourcesRangeEnum",
              "name": "OVHKnowledgeResources",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.OVHProductsUsed",
              "description": "OVH's product the company's solutions relies on",
              "fullType": "Partner.OVHProductsUsed",
              "name": "OVHProductsUsed",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.technicalAdvancedResourcesRangeEnum",
              "description": "Estimation of the number of resources that have technical skills on OVH solutions the company has",
              "fullType": "Partner.technicalAdvancedResourcesRangeEnum",
              "name": "OVHTechnicalAdvancedResources",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.technicalExpertResourcesRangeEnum",
              "description": "Estimation of the number of expert resources for OVH solutions the company has",
              "fullType": "Partner.technicalExpertResourcesRangeEnum",
              "name": "OVHTechnicalExpertResources",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.partnerKnowledges",
              "description": "How did you heard about the OVH's partnership program",
              "fullType": "Partner.partnerKnowledges",
              "name": "partnerKnowledges",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's phone",
              "fullType": "string",
              "name": "phone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.productCountries",
              "description": "In which country the company products of solutions are available",
              "fullType": "Partner.productCountries",
              "name": "productCountries",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's registration number",
              "fullType": "string",
              "name": "registrationNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.revenueRangeEnum",
              "description": "Estimation of the revenue of the company",
              "fullType": "Partner.revenueRangeEnum",
              "name": "revenue",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's twitter url, must resemble \"https://twitter.com/ovh\")",
              "fullType": "string",
              "name": "twitter",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's website",
              "fullType": "string",
              "name": "website",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's zipCode",
              "fullType": "string",
              "name": "zipCode",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's id",
              "fullType": "string",
              "name": "companyId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "Partner.Company",
          "scopes": [
            "all"
          ]
        }
      ],
      "path": "/partners/register/company/{companyId}"
    },
    {
      "description": "Application.create",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Compute scoring score without submitting application",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Company's id",
              "fullType": "string",
              "name": "companyId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "Partner.Application",
          "scopes": [
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Submit application information for validation",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "I have read the terms and conditions of the OVH partner program and accept them",
              "fullType": "boolean",
              "name": "termsAndConditionsOfServiceAccepted",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Company's id",
              "fullType": "string",
              "name": "companyId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "Partner.Application",
          "scopes": [
            "all"
          ]
        }
      ],
      "path": "/partners/register/company/{companyId}/application"
    },
    {
      "description": "Contact.list",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List created contacts",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Company's id",
              "fullType": "string",
              "name": "companyId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Created a new contact for the inscription",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Contact's email",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact's facebook url, must resemble \"https://www.facebook.com/ovh\")",
              "fullType": "string",
              "name": "facebook",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact's first name",
              "fullType": "string",
              "name": "firstName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact's last name",
              "fullType": "string",
              "name": "lastName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact's linkedin url, must resemble \"https://www.linkedin.com/in/ovh\")",
              "fullType": "string",
              "name": "linkedin",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Newsletter subscription choice",
              "fullType": "boolean",
              "name": "newsletter",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.Nic[]",
              "description": "List of nics to associate with this contact",
              "fullType": "Partner.Nic[]",
              "name": "otherNics",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact's phone number",
              "fullType": "string",
              "name": "phone",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact's function in the company",
              "fullType": "string",
              "name": "role",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact's twitter url, must resemble \"https://twitter.com/ovh\")",
              "fullType": "string",
              "name": "twitter",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's id",
              "fullType": "string",
              "name": "companyId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "Partner.Contact",
          "scopes": [
            "all"
          ]
        }
      ],
      "path": "/partners/register/company/{companyId}/contact"
    },
    {
      "description": "Contact.get",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove a contact",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Company's id",
              "fullType": "string",
              "name": "companyId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact's id",
              "fullType": "string",
              "name": "contactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information on a created contact",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Company's id",
              "fullType": "string",
              "name": "companyId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact's id",
              "fullType": "string",
              "name": "contactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "Partner.Contact",
          "scopes": [
            "all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update some fields on a created contact",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Contact's email",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact's facebook url, must resemble \"https://www.facebook.com/ovh\")",
              "fullType": "string",
              "name": "facebook",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact's first name",
              "fullType": "string",
              "name": "firstName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact's last name",
              "fullType": "string",
              "name": "lastName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact's linkedin url, must resemble \"https://www.linkedin.com/in/ovh\")",
              "fullType": "string",
              "name": "linkedin",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Newsletter subscription choice",
              "fullType": "boolean",
              "name": "newsletter",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "Partner.Nic[]",
              "description": "List of nics to associate with this contact",
              "fullType": "Partner.Nic[]",
              "name": "otherNics",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact's phone number",
              "fullType": "string",
              "name": "phone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact's role in the company",
              "fullType": "string",
              "name": "role",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact's twitter url, must resemble \"https://twitter.com/ovh\")",
              "fullType": "string",
              "name": "twitter",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Company's id",
              "fullType": "string",
              "name": "companyId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Contact's id",
              "fullType": "string",
              "name": "contactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "Partner.Contact",
          "scopes": [
            "all"
          ]
        }
      ],
      "path": "/partners/register/company/{companyId}/contact/{contactId}"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "Partner.Application": {
      "description": "Partner Application",
      "id": "Application",
      "namespace": "Partner",
      "properties": {
        "tieringLevel": {
          "canBeNull": false,
          "description": "You are eligible for the OVH Services Program Partners (OSPP) with the following tiering level",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "Partner.Company": {
      "description": "Partner company",
      "id": "Company",
      "namespace": "Partner",
      "properties": {
        "OVHCertifications": {
          "canBeNull": false,
          "description": "OVH certification acquired",
          "fullType": "Partner.OVHCertifications",
          "readOnly": true,
          "required": false,
          "type": "Partner.OVHCertifications"
        },
        "OVHCustomersAdvised": {
          "canBeNull": false,
          "description": "Estimation of the number of accompanied customers in using OVH's solutions",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "OVHKnowledgeResources": {
          "canBeNull": false,
          "description": "Estimation of the number of resources knowing OVH product the company has",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "OVHProductsUsed": {
          "canBeNull": false,
          "description": "OVH's product the company's solutions relies on",
          "fullType": "Partner.OVHProductsUsed",
          "readOnly": true,
          "required": false,
          "type": "Partner.OVHProductsUsed"
        },
        "OVHTechnicalAdvancedResources": {
          "canBeNull": false,
          "description": "Estimation of the number of resources that have technical skills on OVH solutions the company has",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "OVHTechnicalExpertResources": {
          "canBeNull": false,
          "description": "Estimation of the number of expert resources for OVH solutions the company has",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "activitySectors": {
          "canBeNull": false,
          "description": "Company's sector of activity",
          "fullType": "Partner.activitySectors",
          "readOnly": true,
          "required": false,
          "type": "Partner.activitySectors"
        },
        "address": {
          "canBeNull": false,
          "description": "Company's street address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "description": "Company's city",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "clientKinds": {
          "canBeNull": false,
          "description": "Kind of client the company target",
          "fullType": "Partner.clientKinds",
          "readOnly": true,
          "required": false,
          "type": "Partner.clientKinds"
        },
        "commercialName": {
          "canBeNull": false,
          "description": "The commercial name of the company",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "description": "Company's country",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Company's summary",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "Company's email",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "employeesNumber": {
          "canBeNull": false,
          "description": "Estimation of the number of employees",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "expertises": {
          "canBeNull": false,
          "description": "Company's domain of competence",
          "fullType": "Partner.expertisesChoices",
          "readOnly": true,
          "required": false,
          "type": "Partner.expertisesChoices"
        },
        "externalCertifications": {
          "canBeNull": false,
          "description": "Certifications obtained from other enterprises",
          "fullType": "Partner.externalCertifications",
          "readOnly": true,
          "required": false,
          "type": "Partner.externalCertifications"
        },
        "facebook": {
          "canBeNull": false,
          "description": "Company's facebook profile url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "linkedin": {
          "canBeNull": false,
          "description": "Company's linkedin profile url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "logo": {
          "canBeNull": false,
          "description": "Company's logo",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the company",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "partnerKnowledges": {
          "canBeNull": false,
          "description": "How did you heard about the OVH's partnership program",
          "fullType": "Partner.partnerKnowledges",
          "readOnly": true,
          "required": false,
          "type": "Partner.partnerKnowledges"
        },
        "phone": {
          "canBeNull": false,
          "description": "Company's phone number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "productCountries": {
          "canBeNull": false,
          "description": "In which country the company products of solutions are available",
          "fullType": "Partner.productCountries",
          "readOnly": true,
          "required": false,
          "type": "Partner.productCountries"
        },
        "registrationNumber": {
          "canBeNull": false,
          "description": "Company's registration number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "revenue": {
          "canBeNull": false,
          "description": "Estimation of the revenue of the company",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Registration status ",
          "fullType": "Partner.companyStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "Partner.companyStatusEnum"
        },
        "twitter": {
          "canBeNull": false,
          "description": "Company's twitter profile url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "website": {
          "canBeNull": false,
          "description": "Company's website",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "zipCode": {
          "canBeNull": false,
          "description": "Company's zipCode",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "Partner.Contact": {
      "description": "Partner contact",
      "id": "Contact",
      "namespace": "Partner",
      "properties": {
        "email": {
          "canBeNull": false,
          "description": "Contact's email",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "facebook": {
          "canBeNull": true,
          "description": "Contact's facebook url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "description": "Contact's first name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastName": {
          "canBeNull": false,
          "description": "Contact's last name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "linkedin": {
          "canBeNull": true,
          "description": "Contact's linkedin url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "newsletter": {
          "canBeNull": false,
          "description": "Newsletter subscription choice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "otherNics": {
          "canBeNull": false,
          "description": "List of nics to associate with this contact",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "phone": {
          "canBeNull": false,
          "description": "Contact's phone number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "role": {
          "canBeNull": false,
          "description": "Contact's function in the company",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "twitter": {
          "canBeNull": true,
          "description": "Contact's twitter url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "Partner.Nic": {
      "description": "Partner Nic",
      "id": "Nic",
      "namespace": "Partner",
      "properties": {
        "nic": {
          "canBeNull": false,
          "description": "Nic",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "Partner.OVHCertifications": {
      "description": "Possible choices for OVHCertifications",
      "id": "OVHCertifications",
      "namespace": "Partner",
      "properties": {
        "advanced": {
          "canBeNull": true,
          "description": "Advanced certification id",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "business": {
          "canBeNull": true,
          "description": "Business certification id",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "technical": {
          "canBeNull": true,
          "description": "Technical certification id",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "Partner.OVHCustomersAdvisedEnum": {
      "description": "Possible choices for OVHCustomersAdvisedEnum",
      "enum": [
        "none",
        "one",
        "from2To3",
        "from4To5",
        "moreThan5"
      ],
      "enumType": "string",
      "id": "OVHCustomersAdvisedEnum",
      "namespace": "Partner"
    },
    "Partner.OVHProductsUsed": {
      "description": "Possible choices for OVHProductsUsed",
      "id": "OVHProductsUsed",
      "namespace": "Partner",
      "properties": {
        "cloud": {
          "canBeNull": false,
          "description": "Cloud solutions",
          "fullType": "Partner.OVHProductsUsedCloud",
          "readOnly": false,
          "required": false,
          "type": "Partner.OVHProductsUsedCloud"
        },
        "mobileHosting": {
          "canBeNull": false,
          "description": "Mobile Hosting solutions",
          "fullType": "Partner.OVHProductsUsedMobileHosting",
          "readOnly": false,
          "required": false,
          "type": "Partner.OVHProductsUsedMobileHosting"
        },
        "telecom": {
          "canBeNull": false,
          "description": "Telecom solutions",
          "fullType": "Partner.OVHProductsUsedTelecom",
          "readOnly": false,
          "required": false,
          "type": "Partner.OVHProductsUsedTelecom"
        },
        "web": {
          "canBeNull": false,
          "description": "WEB solutions",
          "fullType": "Partner.OVHProductsUsedWeb",
          "readOnly": false,
          "required": false,
          "type": "Partner.OVHProductsUsedWeb"
        }
      }
    },
    "Partner.OVHProductsUsedCloud": {
      "description": "Possible options for OVHProductsUsed_cloud",
      "id": "OVHProductsUsedCloud",
      "namespace": "Partner",
      "properties": {
        "cloudDesktop": {
          "canBeNull": false,
          "description": "Cloud Desktop",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "cloudDesktopInfrastructure": {
          "canBeNull": false,
          "description": "Cloud Desktop Infrastructure",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "dedicated": {
          "canBeNull": false,
          "description": "Dedicated Serveurs",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "nas": {
          "canBeNull": false,
          "description": "NAS",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "networkAndSecurity": {
          "canBeNull": false,
          "description": "Network and security solutions",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "privateCloud": {
          "canBeNull": false,
          "description": "Dedicated Cloud",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "publicCloud": {
          "canBeNull": false,
          "description": "Public Cloud",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "vps": {
          "canBeNull": false,
          "description": "VPS",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "vrack": {
          "canBeNull": false,
          "description": "vRack / vRack Connect",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.OVHProductsUsedMobileHosting": {
      "description": "Possible ranges for OVHProductsUsed_mobileHosting",
      "id": "OVHProductsUsedMobileHosting",
      "namespace": "Partner",
      "properties": {
        "logs": {
          "canBeNull": false,
          "description": "Logs Data Platforms",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "metrics": {
          "canBeNull": false,
          "description": "Metrics Data Platforms",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.OVHProductsUsedTelecom": {
      "description": "Possible ranges for OVHProductsUsed_telecom",
      "id": "OVHProductsUsedTelecom",
      "namespace": "Partner",
      "properties": {
        "dsl": {
          "canBeNull": false,
          "description": "ADSL / SDSL",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "fax": {
          "canBeNull": false,
          "description": "Fax",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "overTheBox": {
          "canBeNull": false,
          "description": "OverTheBox",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "sms": {
          "canBeNull": false,
          "description": "SMS",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "voip": {
          "canBeNull": false,
          "description": "VoIP",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.OVHProductsUsedWeb": {
      "description": "Possible ranges for OVHProductsUsed_web",
      "id": "OVHProductsUsedWeb",
      "namespace": "Partner",
      "properties": {
        "domainName": {
          "canBeNull": false,
          "description": "Domain name",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "exchange": {
          "canBeNull": false,
          "description": "Microsoft Exchange 2016",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "office": {
          "canBeNull": false,
          "description": "Microsoft Office 365 (CSP2)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "sharepoint": {
          "canBeNull": false,
          "description": "Microsoft Sharepoint 2016",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "webHosting": {
          "canBeNull": false,
          "description": "Web Hosting",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.activitySectors": {
      "description": "Possible choices for activitySectors",
      "id": "activitySectors",
      "namespace": "Partner",
      "properties": {
        "bankInsuranceFinance": {
          "canBeNull": false,
          "description": "Bank / Insurance / Finance",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "businessServiceOrIndividuals": {
          "canBeNull": false,
          "description": "Business Services / Individuals",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "communicationOrMedia": {
          "canBeNull": false,
          "description": "Communication / Media",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "digitalServicesCompanies": {
          "canBeNull": false,
          "description": "Digital Services Companies",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ecommerce": {
          "canBeNull": false,
          "description": "E-commerce",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "health": {
          "canBeNull": false,
          "description": "Health",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "industryTransportationEnegy": {
          "canBeNull": false,
          "description": "Industry / Transportation / Energy",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "other": {
          "canBeNull": true,
          "description": "Other (specify)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "otherITOrTelecom": {
          "canBeNull": false,
          "description": "Other IT / Telecom professions",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "publicSectorOrEducation": {
          "canBeNull": false,
          "description": "Public Sector / Education",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "resellerITOrTelecom": {
          "canBeNull": false,
          "description": "Reseller of IT / Telecom services",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "softwareEditor": {
          "canBeNull": false,
          "description": "Software editor",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "tradeTradingDistribution": {
          "canBeNull": false,
          "description": "Trade / Trading / Distribution",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "videoGames": {
          "canBeNull": false,
          "description": "Video games / Online games",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "webAgency": {
          "canBeNull": false,
          "description": "Web Agency",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.clientKinds": {
      "description": "Possible choices for clientKinds",
      "id": "clientKinds",
      "namespace": "Partner",
      "properties": {
        "association": {
          "canBeNull": false,
          "description": "Associations",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "individual": {
          "canBeNull": false,
          "description": "Individual",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "largeGroup": {
          "canBeNull": false,
          "description": "Large Group",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "mediumBusiness": {
          "canBeNull": false,
          "description": "Medium Business",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "other": {
          "canBeNull": true,
          "description": "Other (specify)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "publicSector": {
          "canBeNull": false,
          "description": "Public Sector",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "startup": {
          "canBeNull": false,
          "description": "Startup",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.companyStatusEnum": {
      "description": "Possible choices for companyStatusEnum",
      "enum": [
        "draft",
        "submitted",
        "validated",
        "rejected"
      ],
      "enumType": "string",
      "id": "companyStatusEnum",
      "namespace": "Partner"
    },
    "Partner.employeesNumberEnum": {
      "description": "Possible ranges for company employees number",
      "enum": [
        "from1To10",
        "from11To50",
        "from51To100",
        "from101To500",
        "moreThan500"
      ],
      "enumType": "string",
      "id": "employeesNumberEnum",
      "namespace": "Partner"
    },
    "Partner.expertisesChoices": {
      "description": "Possible choices for expertises",
      "id": "expertisesChoices",
      "namespace": "Partner",
      "properties": {
        "consulting": {
          "canBeNull": false,
          "description": "Consulting",
          "fullType": "Partner.expertisesChoicesConsulting",
          "readOnly": false,
          "required": false,
          "type": "Partner.expertisesChoicesConsulting"
        },
        "installationAndIntegration": {
          "canBeNull": false,
          "description": "Installation and integration",
          "fullType": "Partner.expertisesChoicesInstallationAndIntegration",
          "readOnly": false,
          "required": false,
          "type": "Partner.expertisesChoicesInstallationAndIntegration"
        },
        "outsourcingAndMaintenance": {
          "canBeNull": false,
          "description": "Outsourcing And Maintenance",
          "fullType": "Partner.expertisesChoicesOutsourcingAndMaintenance",
          "readOnly": false,
          "required": false,
          "type": "Partner.expertisesChoicesOutsourcingAndMaintenance"
        },
        "softwareAndDevelopment": {
          "canBeNull": false,
          "description": "Software And Development",
          "fullType": "Partner.expertisesChoicesSoftwareAndDevelopment",
          "readOnly": false,
          "required": false,
          "type": "Partner.expertisesChoicesSoftwareAndDevelopment"
        }
      }
    },
    "Partner.expertisesChoicesConsulting": {
      "description": "Possible options for consulting expertises",
      "id": "expertisesChoicesConsulting",
      "namespace": "Partner",
      "properties": {
        "ITSecurity": {
          "canBeNull": false,
          "description": "IT security",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "auditAndConsulting": {
          "canBeNull": false,
          "description": "Audit and Consulting",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "infrastructureArchitecture": {
          "canBeNull": false,
          "description": "Infrastructure Architecture",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "marketingCommerceAndCommunication": {
          "canBeNull": false,
          "description": "Marketing, Commerce and Communication",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "searchEngineOptimization": {
          "canBeNull": false,
          "description": "SEO-SEA Search Engine Optimization",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.expertisesChoicesInstallationAndIntegration": {
      "description": "Possible options for installation and integration expertises",
      "id": "expertisesChoicesInstallationAndIntegration",
      "namespace": "Partner",
      "properties": {
        "cloudInfrastructure": {
          "canBeNull": false,
          "description": "Cloud infrastructure installation and integration",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "networkEquipment": {
          "canBeNull": false,
          "description": "Installation and integration of network equipment",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "peripheralsAndMobilitySolutions": {
          "canBeNull": false,
          "description": "Installation and integration of peripherals and mobility solutions",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "telecomEquipmentAndInfrastructure": {
          "canBeNull": false,
          "description": "Installation and integration of telecom equipment and infrastructure",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.expertisesChoicesOutsourcingAndMaintenance": {
      "description": "Possible options for outsourcing and maintenance expertises",
      "id": "expertisesChoicesOutsourcingAndMaintenance",
      "namespace": "Partner",
      "properties": {
        "cmputerSupport": {
          "canBeNull": false,
          "description": "Computer support",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "maintenanceOfNetworkEquipment": {
          "canBeNull": false,
          "description": "Maintenance of network equipment / servers",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "outsourcing": {
          "canBeNull": false,
          "description": "Outsourcing",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.expertisesChoicesSoftwareAndDevelopment": {
      "description": "Possible options for software and development expertises",
      "id": "expertisesChoicesSoftwareAndDevelopment",
      "namespace": "Partner",
      "properties": {
        "adviceAndexpertises": {
          "canBeNull": false,
          "description": "Advice and expertises",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "maintenanceOrApplicationManagement": {
          "canBeNull": false,
          "description": "Maintenance / Application Management",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "networkEquipment": {
          "canBeNull": false,
          "description": "Installation and integration of network equipment",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "softwareSolutions": {
          "canBeNull": false,
          "description": "Software solutions (collaborative solutions, virtual offices)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.externalCertifications": {
      "description": "Possible choices for externalCertifications",
      "id": "externalCertifications",
      "namespace": "Partner",
      "properties": {
        "aws": {
          "canBeNull": false,
          "description": "AWS",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "cisco": {
          "canBeNull": false,
          "description": "Cisco",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "intel": {
          "canBeNull": false,
          "description": "Intel",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "microsoft": {
          "canBeNull": false,
          "description": "Microsoft",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "other": {
          "canBeNull": true,
          "description": "Other (specify)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vmware": {
          "canBeNull": false,
          "description": "VMWare",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.knowledgeResourcesRangeEnum": {
      "description": "Possible ranges for knowledgeResources",
      "enum": [
        "none",
        "from1To3",
        "from4To10",
        "moreThan10"
      ],
      "enumType": "string",
      "id": "knowledgeResourcesRangeEnum",
      "namespace": "Partner"
    },
    "Partner.partnerKnowledges": {
      "description": "Possible choices for partnerKnowledges",
      "id": "partnerKnowledges",
      "namespace": "Partner",
      "properties": {
        "events": {
          "canBeNull": false,
          "description": "Events",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "forum": {
          "canBeNull": false,
          "description": "Forum",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "media": {
          "canBeNull": false,
          "description": "Media",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "other": {
          "canBeNull": true,
          "description": "Other (specify)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "searchEngine": {
          "canBeNull": false,
          "description": "Search engine",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "socialNetwork": {
          "canBeNull": false,
          "description": "Social Networks",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "website": {
          "canBeNull": false,
          "description": "OVH website",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.productCountries": {
      "description": "Possible choices for productCountries",
      "id": "productCountries",
      "namespace": "Partner",
      "properties": {
        "australia": {
          "canBeNull": false,
          "description": "Australia",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "brazil": {
          "canBeNull": false,
          "description": "Brazil",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canada": {
          "canBeNull": false,
          "description": "Canada",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "czechRepublic": {
          "canBeNull": false,
          "description": "Czech republic",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "finland": {
          "canBeNull": false,
          "description": "Finland",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "france": {
          "canBeNull": false,
          "description": "France",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "germany": {
          "canBeNull": false,
          "description": "Germany",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ireland": {
          "canBeNull": false,
          "description": "Ireland",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "italy": {
          "canBeNull": false,
          "description": "Italy",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "lithuania": {
          "canBeNull": false,
          "description": "Lithuania",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "morocco": {
          "canBeNull": false,
          "description": "Morocco",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "netherlands": {
          "canBeNull": false,
          "description": "Netherlands",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "other": {
          "canBeNull": true,
          "description": "Other (specify)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "poland": {
          "canBeNull": false,
          "description": "Poland",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "portugal": {
          "canBeNull": false,
          "description": "Portugal",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "senegal": {
          "canBeNull": false,
          "description": "Senegal",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "singapore": {
          "canBeNull": false,
          "description": "Singapore",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "spain": {
          "canBeNull": false,
          "description": "Spain",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "tunisia": {
          "canBeNull": false,
          "description": "Tunisia",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "uk": {
          "canBeNull": false,
          "description": "UK",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "Partner.revenueRangeEnum": {
      "description": "Possible ranges for revenue",
      "enum": [
        "lessThan50000Euros",
        "from50000To500000Euros",
        "from500000To5000000Euros",
        "moreThan5000000Euros",
        "IDoNotWishToDiscloseThisInformation"
      ],
      "enumType": "string",
      "errorValue": "IDoNotWishToDiscloseThisInformation",
      "id": "revenueRangeEnum",
      "namespace": "Partner"
    },
    "Partner.technicalAdvancedResourcesRangeEnum": {
      "description": "Possible ranges for AdvancedResources",
      "enum": [
        "none",
        "from1To3",
        "from4To10",
        "moreThan10"
      ],
      "enumType": "string",
      "id": "technicalAdvancedResourcesRangeEnum",
      "namespace": "Partner"
    },
    "Partner.technicalExpertResourcesRangeEnum": {
      "description": "Possible ranges for revenue",
      "enum": [
        "none",
        "from1To3",
        "from4To10",
        "moreThan10"
      ],
      "enumType": "string",
      "id": "technicalExpertResourcesRangeEnum",
      "namespace": "Partner"
    },
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
    }
  },
  "resourcePath": "/partners"
}