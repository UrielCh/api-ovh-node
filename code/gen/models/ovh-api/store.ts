import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/store/contact",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "MarketPlaceContact.Contact[]",
          "noAuthentication": false,
          "description": "List current customer contacts"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "title",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Title"
            },
            {
              "name": "firstname",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "First name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Email address"
            },
            {
              "name": "street",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Street address"
            },
            {
              "name": "zip",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Zipcode"
            },
            {
              "name": "lastname",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Last name"
            },
            {
              "name": "country",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Country"
            },
            {
              "name": "province",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Province name"
            },
            {
              "name": "city",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "City"
            },
            {
              "name": "phone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Phone number"
            }
          ],
          "responseType": "MarketPlaceContact.Contact",
          "noAuthentication": false,
          "description": "Create a 'marketplace' contact for current nic"
        }
      ],
      "description": "MarketPlaceContact"
    },
    {
      "path": "/store/contact/{contactId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Remove an existing contact"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "contactId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Contact ID"
            }
          ],
          "responseType": "MarketPlaceContact.Contact",
          "noAuthentication": false,
          "description": "Get contact details"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "city",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "City"
            },
            {
              "name": "phone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Phone number"
            },
            {
              "name": "title",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Title"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Email address"
            },
            {
              "name": "street",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Street address"
            },
            {
              "name": "country",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Country"
            },
            {
              "name": "zip",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Zipcode"
            },
            {
              "name": "province",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Province name"
            },
            {
              "name": "firstname",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "First name"
            },
            {
              "name": "lastname",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Last name"
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
          "responseType": "MarketPlaceContact.Contact",
          "noAuthentication": false,
          "description": "Edit contact information"
        }
      ],
      "description": "MarketPlaceContact.contactId"
    },
    {
      "path": "/store/contact/{contactId}/document",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "contactId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Contact ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List document associated with contact"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Document id to link"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Add a document to a contact"
        }
      ],
      "description": "MarketPlaceContact.doc"
    },
    {
      "path": "/store/contact/{contactId}/document/{documentId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Document ID"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Unlink a document from a contact"
        }
      ],
      "description": "MarketPlaceContact.doc_id"
    },
    {
      "path": "/store/document",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "MarketPlace.Document[]",
          "noAuthentication": false,
          "description": "List current customer documents"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the document"
            },
            {
              "name": "tags",
              "dataType": "complexType.SafeKeyValue<string>[]",
              "paramType": "body",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "required": false,
              "description": "Optional tags for document"
            }
          ],
          "responseType": "MarketPlace.Document",
          "noAuthentication": false,
          "description": "Create a document"
        }
      ],
      "description": "MarketPlaceDocument"
    },
    {
      "path": "/store/document/cors",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "origin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Allow this origin"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Add CORS support on your container"
        }
      ],
      "description": "MarketPlaceDocument"
    },
    {
      "path": "/store/document/{documentId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Document ID"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Delete document"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Document ID"
            }
          ],
          "responseType": "MarketPlace.Document",
          "noAuthentication": false,
          "description": "Get document info"
        }
      ],
      "description": "MarketPlaceDocument.documentId"
    },
    {
      "path": "/store/partner",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "MarketPlace.Partner[]",
          "noAuthentication": false,
          "description": "List current customer partners"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Complete description"
            },
            {
              "name": "organisationDisplayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Organisation display name"
            },
            {
              "name": "otherDetails",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Complementary information"
            },
            {
              "name": "province",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Province name"
            },
            {
              "name": "contact",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Linked contact id"
            },
            {
              "name": "country",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Country"
            },
            {
              "name": "companyNationalIdentificationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company national identification number"
            },
            {
              "name": "organisationName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Organisation name"
            },
            {
              "name": "street",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Street address"
            },
            {
              "name": "zip",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "ZipCode"
            },
            {
              "name": "language",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Language"
            },
            {
              "name": "category",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Category"
            },
            {
              "name": "legalForm",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Legal form"
            },
            {
              "name": "vat",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "VAT number"
            },
            {
              "name": "url",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Website address"
            },
            {
              "name": "city",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "City"
            }
          ],
          "responseType": "MarketPlace.Partner",
          "noAuthentication": false,
          "description": "Create a 'marketplace' partner for current nic"
        }
      ],
      "description": "MarketPlacePartner.search"
    },
    {
      "path": "/store/partner/{partnerId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Delete partner"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            }
          ],
          "responseType": "MarketPlace.Partner",
          "noAuthentication": false,
          "description": "Get partner info"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "otherDetails",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Complementary information"
            },
            {
              "name": "legalForm",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Legal form"
            },
            {
              "name": "country",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Country"
            },
            {
              "name": "city",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "City"
            },
            {
              "name": "province",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Province name"
            },
            {
              "name": "contact",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Linked contact id"
            },
            {
              "name": "organisationName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Organisation name"
            },
            {
              "name": "zip",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "ZipCode"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Complete description"
            },
            {
              "name": "category",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Category"
            },
            {
              "name": "companyNationalIdentificationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Company national identification number"
            },
            {
              "name": "street",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Street address"
            },
            {
              "name": "language",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Language"
            },
            {
              "name": "vat",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "VAT number"
            },
            {
              "name": "organisationDisplayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Organisation display name"
            },
            {
              "name": "url",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Website address"
            },
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            }
          ],
          "responseType": "MarketPlace.Partner",
          "noAuthentication": false,
          "description": "Edit partner info"
        }
      ],
      "description": "MarketPlacePartner.get"
    },
    {
      "path": "/store/partner/{partnerId}/document",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List document associated with partner"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Document id to link"
            },
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Add a document to a partner"
        }
      ],
      "description": "MarketPlacePartner.doc"
    },
    {
      "path": "/store/partner/{partnerId}/document/{documentId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            },
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Document ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Unlink a document from a partner"
        }
      ],
      "description": "MarketPlacePartner.doc_id"
    },
    {
      "path": "/store/partner/{partnerId}/product",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            }
          ],
          "responseType": "MarketPlacePartnerProduct.edit.response[]",
          "noAuthentication": false,
          "description": "List partner's products"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Description of product"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of product"
            },
            {
              "name": "otherDetails",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Additional information"
            },
            {
              "name": "category",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of product category"
            },
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            }
          ],
          "responseType": "MarketPlacePartnerProduct.edit.response",
          "noAuthentication": false,
          "description": "Create a new product for partner"
        }
      ],
      "description": "MarketPlacePartnerProduct.search"
    },
    {
      "path": "/store/partner/{partnerId}/product/{productId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            },
            {
              "name": "productId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Product ID"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Delete product"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            },
            {
              "name": "productId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Product ID"
            }
          ],
          "responseType": "MarketPlacePartnerProduct.edit.response",
          "noAuthentication": false,
          "description": "Get partner info"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description of product"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Name of product"
            },
            {
              "name": "category",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Name of product category"
            },
            {
              "name": "otherDetails",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Additional information"
            },
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            },
            {
              "name": "productId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Product ID"
            }
          ],
          "responseType": "MarketPlacePartnerProduct.edit.response",
          "noAuthentication": false,
          "description": "Edit product info"
        }
      ],
      "description": "MarketPlacePartnerProduct.get"
    },
    {
      "path": "/store/partner/{partnerId}/product/{productId}/document",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "productId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Product ID"
            },
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List document associated with product"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Document id to link"
            },
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            },
            {
              "name": "productId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Product ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Add a document to a product"
        }
      ],
      "description": "MarketPlacePartnerProduct.doc"
    },
    {
      "path": "/store/partner/{partnerId}/product/{productId}/document/{documentId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Document ID"
            },
            {
              "name": "partnerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Partner ID"
            },
            {
              "name": "productId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Product ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Unlink a document from a product"
        }
      ],
      "description": "MarketPlacePartnerProduct.doc_id"
    }
  ],
  "resourcePath": "/store",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "MarketPlace.Document": {
      "id": "Document",
      "namespace": "MarketPlace",
      "description": "Document",
      "properties": {
        "creationDate": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "str",
          "required": false
        },
        "getUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "str",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Unique identifier",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "str",
          "required": false
        },
        "putUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "str",
          "required": false
        },
        "size": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "str",
          "required": false
        },
        "tags": {
          "type": "complexType.SafeKeyValue<string>[]",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Attached tags",
          "required": false
        }
      }
    },
    "MarketPlace.Partner": {
      "id": "Partner",
      "namespace": "MarketPlace",
      "description": "partner",
      "properties": {
        "category": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Category",
          "required": false
        },
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "City",
          "required": false
        },
        "companyNationalIdentificationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Company national identification number",
          "required": false
        },
        "contact": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "str",
          "required": false
        },
        "country": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Country",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Complete description",
          "required": false
        },
        "language": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Language",
          "required": false
        },
        "legalForm": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Legal form",
          "required": false
        },
        "organisationDisplayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Organisation display name",
          "required": false
        },
        "organisationName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Organisation name",
          "required": false
        },
        "otherDetails": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Complementary information",
          "required": false
        },
        "province": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Province name",
          "required": false
        },
        "street": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Street address",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Website address",
          "required": false
        },
        "vat": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "VAT number",
          "required": false
        },
        "zip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "ZipCode",
          "required": false
        }
      }
    },
    "MarketPlaceContact.Contact": {
      "id": "Contact",
      "namespace": "MarketPlaceContact",
      "description": "Contact information",
      "properties": {
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "City",
          "required": false
        },
        "country": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Country",
          "required": false
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email address",
          "required": true
        },
        "firstname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "First name",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Unique identifier",
          "required": true
        },
        "lastname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last name",
          "required": true
        },
        "phone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Phone number",
          "required": false
        },
        "province": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Province name",
          "required": false
        },
        "street": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Street address",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Title",
          "required": true
        },
        "zip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Zipcode",
          "required": false
        }
      }
    },
    "MarketPlacePartnerProduct.edit.response": {
      "id": "response",
      "namespace": "MarketPlacePartnerProduct.edit",
      "description": "product",
      "properties": {
        "category": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of product category",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of product",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of product",
          "required": true
        },
        "otherDetails": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Additional information",
          "required": false
        }
      }
    },
    "complexType.SafeKeyValue<T>": {
      "id": "SafeKeyValue",
      "namespace": "complexType",
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "properties": {
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    }
  }
}