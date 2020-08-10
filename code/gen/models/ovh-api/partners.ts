import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/partners/register/company",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List created companies"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "twitter",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's twitter url, must resemble \"https://twitter.com/ovh\")"
            },
            {
              "name": "OVHTechnicalAdvancedResources",
              "dataType": "Partner.technicalAdvancedResourcesRangeEnum",
              "paramType": "body",
              "fullType": "Partner.technicalAdvancedResourcesRangeEnum",
              "required": true,
              "description": "Estimation of the number of resources that have technical skills on OVH solutions the company has"
            },
            {
              "name": "externalCertifications",
              "dataType": "Partner.externalCertifications",
              "paramType": "body",
              "fullType": "Partner.externalCertifications",
              "required": false,
              "description": "Certifications obtained from other enterprises"
            },
            {
              "name": "partnerKnowledges",
              "dataType": "Partner.partnerKnowledges",
              "paramType": "body",
              "fullType": "Partner.partnerKnowledges",
              "required": false,
              "description": "How did you heard about the OVH's partnership program"
            },
            {
              "name": "city",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Company's city"
            },
            {
              "name": "employeesNumber",
              "dataType": "Partner.employeesNumberEnum",
              "paramType": "body",
              "fullType": "Partner.employeesNumberEnum",
              "required": true,
              "description": "Estimation of the number of employees"
            },
            {
              "name": "revenue",
              "dataType": "Partner.revenueRangeEnum",
              "paramType": "body",
              "fullType": "Partner.revenueRangeEnum",
              "required": true,
              "description": "Estimation of the revenue of the company"
            },
            {
              "name": "OVHCustomersAdvised",
              "dataType": "Partner.OVHCustomersAdvisedEnum",
              "paramType": "body",
              "fullType": "Partner.OVHCustomersAdvisedEnum",
              "required": true,
              "description": "Estimation of the number of accompanied customers in using OVH's solutions"
            },
            {
              "name": "linkedin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's linkedin url, must resemble \"https://www.linkedin.com/in/ovh\")"
            },
            {
              "name": "logo",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Company's logo url"
            },
            {
              "name": "clientKinds",
              "dataType": "Partner.clientKinds",
              "paramType": "body",
              "fullType": "Partner.clientKinds",
              "required": false,
              "description": "Kind of client the company target"
            },
            {
              "name": "productCountries",
              "dataType": "Partner.productCountries",
              "paramType": "body",
              "fullType": "Partner.productCountries",
              "required": false,
              "description": "In which country the company products of solutions are available"
            },
            {
              "name": "registrationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's registration number"
            },
            {
              "name": "address",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Company's street address"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Company's email"
            },
            {
              "name": "facebook",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's facebook url, must resemble \"https://www.facebook.com/ovh\")"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Company's summary"
            },
            {
              "name": "OVHTechnicalExpertResources",
              "dataType": "Partner.technicalExpertResourcesRangeEnum",
              "paramType": "body",
              "fullType": "Partner.technicalExpertResourcesRangeEnum",
              "required": true,
              "description": "Estimation of the number of expert resources for OVH solutions the company has"
            },
            {
              "name": "activitySectors",
              "dataType": "Partner.activitySectors",
              "paramType": "body",
              "fullType": "Partner.activitySectors",
              "required": false,
              "description": "Company's sector of activity"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the company"
            },
            {
              "name": "commercialName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The commercial name of the company"
            },
            {
              "name": "zipCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Company's zipCode"
            },
            {
              "name": "country",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "required": true,
              "description": "Company's country"
            },
            {
              "name": "website",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Company's website"
            },
            {
              "name": "expertises",
              "dataType": "Partner.expertisesChoices",
              "paramType": "body",
              "fullType": "Partner.expertisesChoices",
              "required": false,
              "description": "Company's domain of expertises"
            },
            {
              "name": "OVHCertifications",
              "dataType": "Partner.OVHCertifications",
              "paramType": "body",
              "fullType": "Partner.OVHCertifications",
              "required": false,
              "description": "OVH certification acquired"
            },
            {
              "name": "OVHKnowledgeResources",
              "dataType": "Partner.knowledgeResourcesRangeEnum",
              "paramType": "body",
              "fullType": "Partner.knowledgeResourcesRangeEnum",
              "required": true,
              "description": "Estimation of the number of resources knowing OVH product the company has"
            },
            {
              "name": "OVHProductsUsed",
              "dataType": "Partner.OVHProductsUsed",
              "paramType": "body",
              "fullType": "Partner.OVHProductsUsed",
              "required": false,
              "description": "OVH's product the company's solutions relies on"
            },
            {
              "name": "phone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Company's phone"
            }
          ],
          "responseType": "Partner.Company",
          "noAuthentication": false,
          "description": "Created a new company for the inscription"
        }
      ],
      "description": "Company.list"
    },
    {
      "path": "/partners/register/company/{companyId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "companyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Company ID"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Remove a company"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "companyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Company ID"
            }
          ],
          "responseType": "Partner.Company",
          "noAuthentication": false,
          "description": "Get information on a created company"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "address",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's street address"
            },
            {
              "name": "zipCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's zipCode"
            },
            {
              "name": "registrationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's registration number"
            },
            {
              "name": "linkedin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's linkedin url, must resemble \"https://www.linkedin.com/in/ovh\")"
            },
            {
              "name": "effective",
              "dataType": "Partner.employeesNumberEnum",
              "paramType": "body",
              "fullType": "Partner.employeesNumberEnum",
              "required": false,
              "description": "Estimation of the number of employees"
            },
            {
              "name": "OVHCertifications",
              "dataType": "Partner.OVHCertifications",
              "paramType": "body",
              "fullType": "Partner.OVHCertifications",
              "required": false,
              "description": "OVH certification acquired"
            },
            {
              "name": "partnerKnowledges",
              "dataType": "Partner.partnerKnowledges",
              "paramType": "body",
              "fullType": "Partner.partnerKnowledges",
              "required": false,
              "description": "How did you heard about the OVH's partnership program"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Name of the company"
            },
            {
              "name": "phone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's phone"
            },
            {
              "name": "logo",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's logo url"
            },
            {
              "name": "OVHKnowledgeResources",
              "dataType": "Partner.knowledgeResourcesRangeEnum",
              "paramType": "body",
              "fullType": "Partner.knowledgeResourcesRangeEnum",
              "required": false,
              "description": "Estimation of the number of resources knowing OVH product the company has"
            },
            {
              "name": "expertises",
              "dataType": "Partner.expertisesChoices",
              "paramType": "body",
              "fullType": "Partner.expertisesChoices",
              "required": false,
              "description": "Company's domain of competence"
            },
            {
              "name": "OVHCustomersAdvised",
              "dataType": "Partner.OVHCustomersAdvisedEnum",
              "paramType": "body",
              "fullType": "Partner.OVHCustomersAdvisedEnum",
              "required": false,
              "description": "Estimation of the number of accompanied customers in using OVH's solutions"
            },
            {
              "name": "activitySectors",
              "dataType": "Partner.activitySectors",
              "paramType": "body",
              "fullType": "Partner.activitySectors",
              "required": false,
              "description": "Company's sector of activity"
            },
            {
              "name": "productCountries",
              "dataType": "Partner.productCountries",
              "paramType": "body",
              "fullType": "Partner.productCountries",
              "required": false,
              "description": "In which country the company products of solutions are available"
            },
            {
              "name": "commercialName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The commercial name of the company"
            },
            {
              "name": "city",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's city"
            },
            {
              "name": "website",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's website"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's email"
            },
            {
              "name": "revenue",
              "dataType": "Partner.revenueRangeEnum",
              "paramType": "body",
              "fullType": "Partner.revenueRangeEnum",
              "required": false,
              "description": "Estimation of the revenue of the company"
            },
            {
              "name": "OVHTechnicalExpertResources",
              "dataType": "Partner.technicalExpertResourcesRangeEnum",
              "paramType": "body",
              "fullType": "Partner.technicalExpertResourcesRangeEnum",
              "required": false,
              "description": "Estimation of the number of expert resources for OVH solutions the company has"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's summary"
            },
            {
              "name": "clientKinds",
              "dataType": "Partner.clientKinds",
              "paramType": "body",
              "fullType": "Partner.clientKinds",
              "required": false,
              "description": "Kind of client the company target"
            },
            {
              "name": "externalCertifications",
              "dataType": "Partner.externalCertifications",
              "paramType": "body",
              "fullType": "Partner.externalCertifications",
              "required": false,
              "description": "Certifications obtained from other enterprises"
            },
            {
              "name": "country",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "fullType": "nichandle.CountryEnum",
              "required": false,
              "description": "Company's country"
            },
            {
              "name": "facebook",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's facebook url, must resemble \"https://www.facebook.com/ovh\")"
            },
            {
              "name": "twitter",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company's twitter url, must resemble \"https://twitter.com/ovh\")"
            },
            {
              "name": "OVHTechnicalAdvancedResources",
              "dataType": "Partner.technicalAdvancedResourcesRangeEnum",
              "paramType": "body",
              "fullType": "Partner.technicalAdvancedResourcesRangeEnum",
              "required": false,
              "description": "Estimation of the number of resources that have technical skills on OVH solutions the company has"
            },
            {
              "name": "OVHProductsUsed",
              "dataType": "Partner.OVHProductsUsed",
              "paramType": "body",
              "fullType": "Partner.OVHProductsUsed",
              "required": false,
              "description": "OVH's product the company's solutions relies on"
            },
            {
              "name": "companyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Company ID"
            }
          ],
          "responseType": "Partner.Company",
          "noAuthentication": false,
          "description": "Update some fields on a created company"
        }
      ],
      "description": "Company.get"
    },
    {
      "path": "/partners/register/company/{companyId}/application",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "companyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Company ID"
            }
          ],
          "responseType": "Partner.Application",
          "noAuthentication": false,
          "description": "Compute scoring score without submitting application"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "termsAndConditionsOfServiceAccepted",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "I have read the terms and conditions of the OVH partner program and accept them"
            },
            {
              "name": "companyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Company ID"
            }
          ],
          "responseType": "Partner.Application",
          "noAuthentication": false,
          "description": "Submit application information for validation"
        }
      ],
      "description": "Application.create"
    },
    {
      "path": "/partners/register/company/{companyId}/contact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "companyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Company ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List created contacts"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "twitter",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact's twitter url, must resemble \"https://twitter.com/ovh\")"
            },
            {
              "name": "otherNics",
              "dataType": "Partner.Nic[]",
              "paramType": "body",
              "fullType": "Partner.Nic[]",
              "required": false,
              "description": "List of nics to associate with this contact"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Contact's first name"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Contact's last name"
            },
            {
              "name": "role",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Contact's function in the company"
            },
            {
              "name": "linkedin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact's linkedin url, must resemble \"https://www.linkedin.com/in/ovh\")"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Contact's email"
            },
            {
              "name": "phone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Contact's phone number"
            },
            {
              "name": "facebook",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact's facebook url, must resemble \"https://www.facebook.com/ovh\")"
            },
            {
              "name": "newsletter",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Newsletter subscription choice"
            },
            {
              "name": "companyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Company ID"
            }
          ],
          "responseType": "Partner.Contact",
          "noAuthentication": false,
          "description": "Created a new contact for the inscription"
        }
      ],
      "description": "Contact.list"
    },
    {
      "path": "/partners/register/company/{companyId}/contact/{contactId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "contactId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Contact ID"
            },
            {
              "name": "companyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Company ID"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Remove a contact"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "companyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Company ID"
            },
            {
              "name": "contactId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Contact ID"
            }
          ],
          "responseType": "Partner.Contact",
          "noAuthentication": false,
          "description": "Get information on a created contact"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "otherNics",
              "dataType": "Partner.Nic[]",
              "paramType": "body",
              "fullType": "Partner.Nic[]",
              "required": false,
              "description": "List of nics to associate with this contact"
            },
            {
              "name": "phone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact's phone number"
            },
            {
              "name": "linkedin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact's linkedin url, must resemble \"https://www.linkedin.com/in/ovh\")"
            },
            {
              "name": "facebook",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact's facebook url, must resemble \"https://www.facebook.com/ovh\")"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact's first name"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact's last name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact's email"
            },
            {
              "name": "role",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact's role in the company"
            },
            {
              "name": "twitter",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact's twitter url, must resemble \"https://twitter.com/ovh\")"
            },
            {
              "name": "newsletter",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Newsletter subscription choice"
            },
            {
              "name": "companyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Company ID"
            },
            {
              "name": "contactId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Contact ID"
            }
          ],
          "responseType": "Partner.Contact",
          "noAuthentication": false,
          "description": "Update some fields on a created contact"
        }
      ],
      "description": "Contact.get"
    }
  ],
  "resourcePath": "/partners",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "Partner.Application": {
      "id": "Application",
      "namespace": "Partner",
      "description": "Partner Application",
      "properties": {
        "tieringLevel": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "You are eligible for the OVH Services Program Partners (OSPP) with the following tiering level",
          "required": true
        }
      }
    },
    "Partner.Company": {
      "id": "Company",
      "namespace": "Partner",
      "description": "Partner company",
      "properties": {
        "OVHCertifications": {
          "type": "Partner.OVHCertifications",
          "fullType": "Partner.OVHCertifications",
          "canBeNull": false,
          "readOnly": true,
          "description": "OVH certification acquired",
          "required": true
        },
        "OVHCustomersAdvised": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Estimation of the number of accompanied customers in using OVH's solutions",
          "required": true
        },
        "OVHKnowledgeResources": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Estimation of the number of resources knowing OVH product the company has",
          "required": true
        },
        "OVHProductsUsed": {
          "type": "Partner.OVHProductsUsed",
          "fullType": "Partner.OVHProductsUsed",
          "canBeNull": false,
          "readOnly": true,
          "description": "OVH's product the company's solutions relies on",
          "required": true
        },
        "OVHTechnicalAdvancedResources": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Estimation of the number of resources that have technical skills on OVH solutions the company has",
          "required": true
        },
        "OVHTechnicalExpertResources": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Estimation of the number of expert resources for OVH solutions the company has",
          "required": true
        },
        "activitySectors": {
          "type": "Partner.activitySectors",
          "fullType": "Partner.activitySectors",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's sector of activity",
          "required": true
        },
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's street address",
          "required": true
        },
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's city",
          "required": true
        },
        "clientKinds": {
          "type": "Partner.clientKinds",
          "fullType": "Partner.clientKinds",
          "canBeNull": false,
          "readOnly": true,
          "description": "Kind of client the company target",
          "required": true
        },
        "commercialName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The commercial name of the company",
          "required": true
        },
        "country": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's country",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's summary",
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's email",
          "required": true
        },
        "employeesNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Estimation of the number of employees",
          "required": true
        },
        "expertises": {
          "type": "Partner.expertisesChoices",
          "fullType": "Partner.expertisesChoices",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's domain of competence",
          "required": true
        },
        "externalCertifications": {
          "type": "Partner.externalCertifications",
          "fullType": "Partner.externalCertifications",
          "canBeNull": false,
          "readOnly": true,
          "description": "Certifications obtained from other enterprises",
          "required": true
        },
        "facebook": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's facebook profile url",
          "required": true
        },
        "linkedin": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's linkedin profile url",
          "required": true
        },
        "logo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's logo",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the company",
          "required": true
        },
        "partnerKnowledges": {
          "type": "Partner.partnerKnowledges",
          "fullType": "Partner.partnerKnowledges",
          "canBeNull": false,
          "readOnly": true,
          "description": "How did you heard about the OVH's partnership program",
          "required": true
        },
        "phone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's phone number",
          "required": true
        },
        "productCountries": {
          "type": "Partner.productCountries",
          "fullType": "Partner.productCountries",
          "canBeNull": false,
          "readOnly": true,
          "description": "In which country the company products of solutions are available",
          "required": true
        },
        "registrationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's registration number",
          "required": true
        },
        "revenue": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Estimation of the revenue of the company",
          "required": true
        },
        "status": {
          "type": "Partner.companyStatusEnum",
          "fullType": "Partner.companyStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Registration status ",
          "required": true
        },
        "twitter": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's twitter profile url",
          "required": true
        },
        "website": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's website",
          "required": true
        },
        "zipCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Company's zipCode",
          "required": true
        }
      }
    },
    "Partner.Contact": {
      "id": "Contact",
      "namespace": "Partner",
      "description": "Partner contact",
      "properties": {
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact's email",
          "required": true
        },
        "facebook": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Contact's facebook url",
          "required": false
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact's first name",
          "required": true
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact's last name",
          "required": true
        },
        "linkedin": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Contact's linkedin url",
          "required": false
        },
        "newsletter": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Newsletter subscription choice",
          "required": true
        },
        "otherNics": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of nics to associate with this contact",
          "required": true
        },
        "phone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact's phone number",
          "required": true
        },
        "role": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact's function in the company",
          "required": true
        },
        "twitter": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Contact's twitter url",
          "required": false
        }
      }
    },
    "Partner.Nic": {
      "id": "Nic",
      "namespace": "Partner",
      "description": "Partner Nic",
      "properties": {
        "nic": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Nic",
          "required": true
        }
      }
    },
    "Partner.OVHCertifications": {
      "id": "OVHCertifications",
      "namespace": "Partner",
      "description": "Possible choices for OVHCertifications",
      "properties": {
        "advanced": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Advanced certification id",
          "required": false
        },
        "business": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Business certification id",
          "required": false
        },
        "technical": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Technical certification id",
          "required": false
        }
      }
    },
    "Partner.OVHCustomersAdvisedEnum": {
      "id": "OVHCustomersAdvisedEnum",
      "namespace": "Partner",
      "description": "Possible choices for OVHCustomersAdvisedEnum",
      "enum": [
        "none",
        "one",
        "from2To3",
        "from4To5",
        "moreThan5"
      ],
      "enumType": "string"
    },
    "Partner.OVHProductsUsed": {
      "id": "OVHProductsUsed",
      "namespace": "Partner",
      "description": "Possible choices for OVHProductsUsed",
      "properties": {
        "cloud": {
          "type": "Partner.OVHProductsUsedCloud",
          "fullType": "Partner.OVHProductsUsedCloud",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cloud solutions",
          "required": true
        },
        "mobileHosting": {
          "type": "Partner.OVHProductsUsedMobileHosting",
          "fullType": "Partner.OVHProductsUsedMobileHosting",
          "canBeNull": false,
          "readOnly": false,
          "description": "Mobile Hosting solutions",
          "required": true
        },
        "telecom": {
          "type": "Partner.OVHProductsUsedTelecom",
          "fullType": "Partner.OVHProductsUsedTelecom",
          "canBeNull": false,
          "readOnly": false,
          "description": "Telecom solutions",
          "required": true
        },
        "web": {
          "type": "Partner.OVHProductsUsedWeb",
          "fullType": "Partner.OVHProductsUsedWeb",
          "canBeNull": false,
          "readOnly": false,
          "description": "WEB solutions",
          "required": true
        }
      }
    },
    "Partner.OVHProductsUsedCloud": {
      "id": "OVHProductsUsedCloud",
      "namespace": "Partner",
      "description": "Possible options for OVHProductsUsed_cloud",
      "properties": {
        "cloudDesktop": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cloud Desktop",
          "required": true
        },
        "cloudDesktopInfrastructure": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cloud Desktop Infrastructure",
          "required": true
        },
        "dedicated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Dedicated Serveurs",
          "required": true
        },
        "nas": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "NAS",
          "required": true
        },
        "networkAndSecurity": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Network and security solutions",
          "required": true
        },
        "privateCloud": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Private Cloud",
          "required": true
        },
        "publicCloud": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Public Cloud",
          "required": true
        },
        "vps": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "VPS",
          "required": true
        },
        "vrack": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "vRack / vRack Connect",
          "required": true
        }
      }
    },
    "Partner.OVHProductsUsedMobileHosting": {
      "id": "OVHProductsUsedMobileHosting",
      "namespace": "Partner",
      "description": "Possible ranges for OVHProductsUsed_mobileHosting",
      "properties": {
        "logs": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Logs Data Platforms",
          "required": true
        },
        "metrics": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Metrics Data Platforms",
          "required": true
        }
      }
    },
    "Partner.OVHProductsUsedTelecom": {
      "id": "OVHProductsUsedTelecom",
      "namespace": "Partner",
      "description": "Possible ranges for OVHProductsUsed_telecom",
      "properties": {
        "dsl": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "ADSL / SDSL",
          "required": true
        },
        "fax": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Fax",
          "required": true
        },
        "overTheBox": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "OverTheBox",
          "required": true
        },
        "sms": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "SMS",
          "required": true
        },
        "voip": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "VoIP",
          "required": true
        }
      }
    },
    "Partner.OVHProductsUsedWeb": {
      "id": "OVHProductsUsedWeb",
      "namespace": "Partner",
      "description": "Possible ranges for OVHProductsUsed_web",
      "properties": {
        "domainName": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Domain name",
          "required": true
        },
        "exchange": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Microsoft Exchange 2016",
          "required": true
        },
        "office": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Microsoft Office 365 (CSP2)",
          "required": true
        },
        "sharepoint": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Microsoft Sharepoint 2016",
          "required": true
        },
        "webHosting": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Web Hosting",
          "required": true
        }
      }
    },
    "Partner.activitySectors": {
      "id": "activitySectors",
      "namespace": "Partner",
      "description": "Possible choices for activitySectors",
      "properties": {
        "bankInsuranceFinance": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Bank / Insurance / Finance",
          "required": true
        },
        "businessServiceOrIndividuals": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Business Services / Individuals",
          "required": true
        },
        "communicationOrMedia": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Communication / Media",
          "required": true
        },
        "digitalServicesCompanies": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Digital Services Companies",
          "required": true
        },
        "ecommerce": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "E-commerce",
          "required": true
        },
        "health": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Health",
          "required": true
        },
        "industryTransportationEnegy": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Industry / Transportation / Energy",
          "required": true
        },
        "other": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Other (specify)",
          "required": false
        },
        "otherITOrTelecom": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Other IT / Telecom professions",
          "required": true
        },
        "publicSectorOrEducation": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Public Sector / Education",
          "required": true
        },
        "resellerITOrTelecom": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Reseller of IT / Telecom services",
          "required": true
        },
        "softwareEditor": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Software editor",
          "required": true
        },
        "tradeTradingDistribution": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Trade / Trading / Distribution",
          "required": true
        },
        "videoGames": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Video games / Online games",
          "required": true
        },
        "webAgency": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Web Agency",
          "required": true
        }
      }
    },
    "Partner.clientKinds": {
      "id": "clientKinds",
      "namespace": "Partner",
      "description": "Possible choices for clientKinds",
      "properties": {
        "association": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Associations",
          "required": true
        },
        "individual": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Individual",
          "required": true
        },
        "largeGroup": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Large Group",
          "required": true
        },
        "mediumBusiness": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Medium Business",
          "required": true
        },
        "other": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Other (specify)",
          "required": false
        },
        "publicSector": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Public Sector",
          "required": true
        },
        "startup": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Startup",
          "required": true
        }
      }
    },
    "Partner.companyStatusEnum": {
      "id": "companyStatusEnum",
      "namespace": "Partner",
      "description": "Possible choices for companyStatusEnum",
      "enum": [
        "draft",
        "submitted",
        "validated",
        "rejected"
      ],
      "enumType": "string"
    },
    "Partner.employeesNumberEnum": {
      "id": "employeesNumberEnum",
      "namespace": "Partner",
      "description": "Possible ranges for company employees number",
      "enum": [
        "from1To10",
        "from11To50",
        "from51To100",
        "from101To500",
        "moreThan500"
      ],
      "enumType": "string"
    },
    "Partner.expertisesChoices": {
      "id": "expertisesChoices",
      "namespace": "Partner",
      "description": "Possible choices for expertises",
      "properties": {
        "consulting": {
          "type": "Partner.expertisesChoicesConsulting",
          "fullType": "Partner.expertisesChoicesConsulting",
          "canBeNull": false,
          "readOnly": false,
          "description": "Consulting",
          "required": true
        },
        "installationAndIntegration": {
          "type": "Partner.expertisesChoicesInstallationAndIntegration",
          "fullType": "Partner.expertisesChoicesInstallationAndIntegration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Installation and integration",
          "required": true
        },
        "outsourcingAndMaintenance": {
          "type": "Partner.expertisesChoicesOutsourcingAndMaintenance",
          "fullType": "Partner.expertisesChoicesOutsourcingAndMaintenance",
          "canBeNull": false,
          "readOnly": false,
          "description": "Outsourcing And Maintenance",
          "required": true
        },
        "softwareAndDevelopment": {
          "type": "Partner.expertisesChoicesSoftwareAndDevelopment",
          "fullType": "Partner.expertisesChoicesSoftwareAndDevelopment",
          "canBeNull": false,
          "readOnly": false,
          "description": "Software And Development",
          "required": true
        }
      }
    },
    "Partner.expertisesChoicesConsulting": {
      "id": "expertisesChoicesConsulting",
      "namespace": "Partner",
      "description": "Possible options for consulting expertises",
      "properties": {
        "ITSecurity": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "IT security",
          "required": true
        },
        "auditAndConsulting": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Audit and Consulting",
          "required": true
        },
        "infrastructureArchitecture": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Infrastructure Architecture",
          "required": true
        },
        "marketingCommerceAndCommunication": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Marketing, Commerce and Communication",
          "required": true
        },
        "searchEngineOptimization": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "SEO-SEA Search Engine Optimization",
          "required": true
        }
      }
    },
    "Partner.expertisesChoicesInstallationAndIntegration": {
      "id": "expertisesChoicesInstallationAndIntegration",
      "namespace": "Partner",
      "description": "Possible options for installation and integration expertises",
      "properties": {
        "cloudInfrastructure": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cloud infrastructure installation and integration",
          "required": true
        },
        "networkEquipment": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Installation and integration of network equipment",
          "required": true
        },
        "peripheralsAndMobilitySolutions": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Installation and integration of peripherals and mobility solutions",
          "required": true
        },
        "telecomEquipmentAndInfrastructure": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Installation and integration of telecom equipment and infrastructure",
          "required": true
        }
      }
    },
    "Partner.expertisesChoicesOutsourcingAndMaintenance": {
      "id": "expertisesChoicesOutsourcingAndMaintenance",
      "namespace": "Partner",
      "description": "Possible options for outsourcing and maintenance expertises",
      "properties": {
        "cmputerSupport": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Computer support",
          "required": true
        },
        "maintenanceOfNetworkEquipment": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maintenance of network equipment / servers",
          "required": true
        },
        "outsourcing": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Outsourcing",
          "required": true
        }
      }
    },
    "Partner.expertisesChoicesSoftwareAndDevelopment": {
      "id": "expertisesChoicesSoftwareAndDevelopment",
      "namespace": "Partner",
      "description": "Possible options for software and development expertises",
      "properties": {
        "adviceAndexpertises": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Advice and expertises",
          "required": true
        },
        "maintenanceOrApplicationManagement": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maintenance / Application Management",
          "required": true
        },
        "networkEquipment": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Installation and integration of network equipment",
          "required": true
        },
        "softwareSolutions": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Software solutions (collaborative solutions, virtual offices)",
          "required": true
        }
      }
    },
    "Partner.externalCertifications": {
      "id": "externalCertifications",
      "namespace": "Partner",
      "description": "Possible choices for externalCertifications",
      "properties": {
        "aws": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "AWS",
          "required": true
        },
        "cisco": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cisco",
          "required": true
        },
        "intel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Intel",
          "required": true
        },
        "microsoft": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Microsoft",
          "required": true
        },
        "other": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Other (specify)",
          "required": false
        },
        "vmware": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "VMWare",
          "required": true
        }
      }
    },
    "Partner.knowledgeResourcesRangeEnum": {
      "id": "knowledgeResourcesRangeEnum",
      "namespace": "Partner",
      "description": "Possible ranges for knowledgeResources",
      "enum": [
        "none",
        "from1To3",
        "from4To10",
        "moreThan10"
      ],
      "enumType": "string"
    },
    "Partner.partnerKnowledges": {
      "id": "partnerKnowledges",
      "namespace": "Partner",
      "description": "Possible choices for partnerKnowledges",
      "properties": {
        "events": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Events",
          "required": true
        },
        "forum": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Forum",
          "required": true
        },
        "media": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Media",
          "required": true
        },
        "other": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Other (specify)",
          "required": false
        },
        "searchEngine": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Search engine",
          "required": true
        },
        "socialNetwork": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Social Networks",
          "required": true
        },
        "website": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "OVH website",
          "required": true
        }
      }
    },
    "Partner.productCountries": {
      "id": "productCountries",
      "namespace": "Partner",
      "description": "Possible choices for productCountries",
      "properties": {
        "australia": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Australia",
          "required": true
        },
        "brazil": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Brazil",
          "required": true
        },
        "canada": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Canada",
          "required": true
        },
        "czechRepublic": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Czech republic",
          "required": true
        },
        "finland": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Finland",
          "required": true
        },
        "france": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "France",
          "required": true
        },
        "germany": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Germany",
          "required": true
        },
        "ireland": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ireland",
          "required": true
        },
        "italy": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Italy",
          "required": true
        },
        "lithuania": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Lithuania",
          "required": true
        },
        "morocco": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Morocco",
          "required": true
        },
        "netherlands": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Netherlands",
          "required": true
        },
        "other": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Other (specify)",
          "required": false
        },
        "poland": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Poland",
          "required": true
        },
        "portugal": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Portugal",
          "required": true
        },
        "senegal": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Senegal",
          "required": true
        },
        "singapore": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Singapore",
          "required": true
        },
        "spain": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Spain",
          "required": true
        },
        "tunisia": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Tunisia",
          "required": true
        },
        "uk": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "UK",
          "required": true
        }
      }
    },
    "Partner.revenueRangeEnum": {
      "id": "revenueRangeEnum",
      "namespace": "Partner",
      "description": "Possible ranges for revenue",
      "enum": [
        "lessThan50000Euros",
        "from50000To500000Euros",
        "from500000To5000000Euros",
        "moreThan5000000Euros",
        "IDoNotWishToDiscloseThisInformation"
      ],
      "enumType": "string"
    },
    "Partner.technicalAdvancedResourcesRangeEnum": {
      "id": "technicalAdvancedResourcesRangeEnum",
      "namespace": "Partner",
      "description": "Possible ranges for AdvancedResources",
      "enum": [
        "none",
        "from1To3",
        "from4To10",
        "moreThan10"
      ],
      "enumType": "string"
    },
    "Partner.technicalExpertResourcesRangeEnum": {
      "id": "technicalExpertResourcesRangeEnum",
      "namespace": "Partner",
      "description": "Possible ranges for revenue",
      "enum": [
        "none",
        "from1To3",
        "from4To10",
        "moreThan10"
      ],
      "enumType": "string"
    },
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
    }
  }
}