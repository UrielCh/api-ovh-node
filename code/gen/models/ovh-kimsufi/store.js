"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
        {
            "description": "MarketPlaceContact",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List current customer contacts",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [],
                    "responseType": "MarketPlace.Contact[]"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Create a 'marketplace' contact for current nic",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "City",
                            "fullType": "string",
                            "name": "city",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Country",
                            "fullType": "string",
                            "name": "country",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Email address",
                            "fullType": "string",
                            "name": "email",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "First name",
                            "fullType": "string",
                            "name": "firstname",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Last name",
                            "fullType": "string",
                            "name": "lastname",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Phone number",
                            "fullType": "string",
                            "name": "phone",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Province name",
                            "fullType": "string",
                            "name": "province",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Street address",
                            "fullType": "string",
                            "name": "street",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Title",
                            "fullType": "string",
                            "name": "title",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Zipcode",
                            "fullType": "string",
                            "name": "zip",
                            "paramType": "body",
                            "required": false
                        }
                    ],
                    "responseType": "MarketPlace.Contact"
                }
            ],
            "path": "/store/contact"
        },
        {
            "description": "MarketPlaceContact.contactId",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Remove an existing contact",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the contact to remove",
                            "fullType": "string",
                            "name": "contactId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get contact details",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the contact to fetch",
                            "fullType": "string",
                            "name": "contactId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "MarketPlace.Contact"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Edit contact information",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "City",
                            "fullType": "string",
                            "name": "city",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Country",
                            "fullType": "string",
                            "name": "country",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Email address",
                            "fullType": "string",
                            "name": "email",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "First name",
                            "fullType": "string",
                            "name": "firstname",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Last name",
                            "fullType": "string",
                            "name": "lastname",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Phone number",
                            "fullType": "string",
                            "name": "phone",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Province name",
                            "fullType": "string",
                            "name": "province",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Street address",
                            "fullType": "string",
                            "name": "street",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Title",
                            "fullType": "string",
                            "name": "title",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Zipcode",
                            "fullType": "string",
                            "name": "zip",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the contact to fetch",
                            "fullType": "string",
                            "name": "contactId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "MarketPlace.Contact"
                }
            ],
            "path": "/store/contact/{contactId}"
        },
        {
            "description": "MarketPlaceContact.doc",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List document associated with contact",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the contact to fetch",
                            "fullType": "string",
                            "name": "contactId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Add a document to a contact",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Document id to link",
                            "fullType": "string",
                            "name": "documentId",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the contact to fetch",
                            "fullType": "string",
                            "name": "contactId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/store/contact/{contactId}/document"
        },
        {
            "description": "MarketPlaceContact.doc_id",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Unlink a document from a contact",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the contact to fetch",
                            "fullType": "string",
                            "name": "contactId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the document",
                            "fullType": "string",
                            "name": "documentId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/store/contact/{contactId}/document/{documentId}"
        },
        {
            "description": "MarketPlaceDocument",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List current customer documents",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [],
                    "responseType": "MarketPlace.Document[]"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Create a document",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of the document",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "complexType.SafeKeyValue<string>[]",
                            "description": "Optional tags for document",
                            "fullType": "complexType.SafeKeyValue<string>[]",
                            "name": "tags",
                            "paramType": "body",
                            "required": false
                        }
                    ],
                    "responseType": "MarketPlace.Document"
                }
            ],
            "path": "/store/document"
        },
        {
            "description": "MarketPlaceDocument",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Add CORS support on your container",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Allow this origin",
                            "fullType": "string",
                            "name": "origin",
                            "paramType": "body",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/store/document/cors"
        },
        {
            "description": "MarketPlaceDocument.documentId",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Delete document",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the object to delete",
                            "fullType": "string",
                            "name": "documentId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get document info",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the document to fetch",
                            "fullType": "string",
                            "name": "documentId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "MarketPlace.Document"
                }
            ],
            "path": "/store/document/{documentId}"
        },
        {
            "description": "MarketPlacePartner.search",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List current customer partners",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [],
                    "responseType": "MarketPlace.Partner[]"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Create a 'marketplace' partner for current nic",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Category",
                            "fullType": "string",
                            "name": "category",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "City",
                            "fullType": "string",
                            "name": "city",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Company national identification number",
                            "fullType": "string",
                            "name": "companyNationalIdentificationNumber",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Linked contact id",
                            "fullType": "string",
                            "name": "contact",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Country",
                            "fullType": "string",
                            "name": "country",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Complete description",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Language",
                            "fullType": "string",
                            "name": "language",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Legal form",
                            "fullType": "string",
                            "name": "legalForm",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Organisation display name",
                            "fullType": "string",
                            "name": "organisationDisplayName",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Organisation name",
                            "fullType": "string",
                            "name": "organisationName",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Complementary information",
                            "fullType": "string",
                            "name": "otherDetails",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Province name",
                            "fullType": "string",
                            "name": "province",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Street address",
                            "fullType": "string",
                            "name": "street",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Website address",
                            "fullType": "string",
                            "name": "url",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "VAT number",
                            "fullType": "string",
                            "name": "vat",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "ZipCode",
                            "fullType": "string",
                            "name": "zip",
                            "paramType": "body",
                            "required": true
                        }
                    ],
                    "responseType": "MarketPlace.Partner"
                }
            ],
            "path": "/store/partner"
        },
        {
            "description": "MarketPlacePartner.get",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Delete partner",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the object to fetch",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get partner info",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "MarketPlace.Partner"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Edit partner info",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Category",
                            "fullType": "string",
                            "name": "category",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "City",
                            "fullType": "string",
                            "name": "city",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Company national identification number",
                            "fullType": "string",
                            "name": "companyNationalIdentificationNumber",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Linked contact id",
                            "fullType": "string",
                            "name": "contact",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Country",
                            "fullType": "string",
                            "name": "country",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Complete description",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Language",
                            "fullType": "string",
                            "name": "language",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Legal form",
                            "fullType": "string",
                            "name": "legalForm",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Organisation display name",
                            "fullType": "string",
                            "name": "organisationDisplayName",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Organisation name",
                            "fullType": "string",
                            "name": "organisationName",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Complementary information",
                            "fullType": "string",
                            "name": "otherDetails",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Province name",
                            "fullType": "string",
                            "name": "province",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Street address",
                            "fullType": "string",
                            "name": "street",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Website address",
                            "fullType": "string",
                            "name": "url",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "VAT number",
                            "fullType": "string",
                            "name": "vat",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "ZipCode",
                            "fullType": "string",
                            "name": "zip",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "MarketPlace.Partner"
                }
            ],
            "path": "/store/partner/{partnerId}"
        },
        {
            "description": "MarketPlacePartner.doc",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List document associated with partner",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Add a document to a partner",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Document id to link",
                            "fullType": "string",
                            "name": "documentId",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/store/partner/{partnerId}/document"
        },
        {
            "description": "MarketPlacePartner.doc_id",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Unlink a document from a partner",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the document",
                            "fullType": "string",
                            "name": "documentId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/store/partner/{partnerId}/document/{documentId}"
        },
        {
            "description": "MarketPlacePartnerProduct.search",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List partner's products",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "MarketPlace.Partner.Product[]"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Create a new product for partner",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of product category",
                            "fullType": "string",
                            "name": "category",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Description of product",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Name of product",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Additional information",
                            "fullType": "string",
                            "name": "otherDetails",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "MarketPlace.Partner.Product"
                }
            ],
            "path": "/store/partner/{partnerId}/product"
        },
        {
            "description": "MarketPlacePartnerProduct.get",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Delete product",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the product",
                            "fullType": "string",
                            "name": "productId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get partner info",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the product",
                            "fullType": "string",
                            "name": "productId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "MarketPlace.Partner.Product"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Edit product info",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of product category",
                            "fullType": "string",
                            "name": "category",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Description of product",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Name of product",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Additional information",
                            "fullType": "string",
                            "name": "otherDetails",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the product",
                            "fullType": "string",
                            "name": "productId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "MarketPlace.Partner.Product"
                }
            ],
            "path": "/store/partner/{partnerId}/product/{productId}"
        },
        {
            "description": "MarketPlacePartnerProduct.doc",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List document associated with product",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the product",
                            "fullType": "string",
                            "name": "productId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Add a document to a product",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Document id to link",
                            "fullType": "string",
                            "name": "documentId",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the product",
                            "fullType": "string",
                            "name": "productId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/store/partner/{partnerId}/product/{productId}/document"
        },
        {
            "description": "MarketPlacePartnerProduct.doc_id",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Unlink a document from a product",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Id of the document",
                            "fullType": "string",
                            "name": "documentId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the partner",
                            "fullType": "string",
                            "name": "partnerId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Id of the product",
                            "fullType": "string",
                            "name": "productId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/store/partner/{partnerId}/product/{productId}/document/{documentId}"
        }
    ],
    "basePath": "https://eu.api.kimsufi.com/1.0",
    "models": {
        "MarketPlace.Contact": {
            "description": "Contact information",
            "id": "Contact",
            "namespace": "MarketPlaceContact",
            "properties": {
                "city": {
                    "canBeNull": true,
                    "description": "City",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "country": {
                    "canBeNull": true,
                    "description": "Country",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "email": {
                    "canBeNull": false,
                    "description": "Email address",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "firstname": {
                    "canBeNull": false,
                    "description": "First name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Unique identifier",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "lastname": {
                    "canBeNull": false,
                    "description": "Last name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "phone": {
                    "canBeNull": true,
                    "description": "Phone number",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "province": {
                    "canBeNull": true,
                    "description": "Province name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "street": {
                    "canBeNull": true,
                    "description": "Street address",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "title": {
                    "canBeNull": false,
                    "description": "Title",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "zip": {
                    "canBeNull": true,
                    "description": "Zipcode",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "MarketPlace.Document": {
            "description": "Document",
            "id": "Document",
            "namespace": "MarketPlace",
            "properties": {
                "creationDate": {
                    "canBeNull": true,
                    "description": "str",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "getUrl": {
                    "canBeNull": true,
                    "description": "str",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Unique identifier",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": true,
                    "description": "str",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "putUrl": {
                    "canBeNull": true,
                    "description": "str",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "size": {
                    "canBeNull": true,
                    "description": "str",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "tags": {
                    "canBeNull": true,
                    "description": "Attached tags",
                    "fullType": "complexType.SafeKeyValue<string>[]",
                    "readOnly": false,
                    "required": false,
                    "type": "complexType.SafeKeyValue<string>[]"
                }
            }
        },
        "MarketPlace.Partner": {
            "description": "partner",
            "id": "Partner",
            "namespace": "MarketPlace",
            "properties": {
                "category": {
                    "canBeNull": true,
                    "description": "Category",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "city": {
                    "canBeNull": true,
                    "description": "City",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "companyNationalIdentificationNumber": {
                    "canBeNull": true,
                    "description": "Company national identification number",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "contact": {
                    "canBeNull": true,
                    "description": "str",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "country": {
                    "canBeNull": true,
                    "description": "Country",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "description": {
                    "canBeNull": true,
                    "description": "Complete description",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "language": {
                    "canBeNull": true,
                    "description": "Language",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "legalForm": {
                    "canBeNull": true,
                    "description": "Legal form",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "organisationDisplayName": {
                    "canBeNull": true,
                    "description": "Organisation display name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "organisationName": {
                    "canBeNull": true,
                    "description": "Organisation name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "otherDetails": {
                    "canBeNull": true,
                    "description": "Complementary information",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "province": {
                    "canBeNull": true,
                    "description": "Province name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "street": {
                    "canBeNull": true,
                    "description": "Street address",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "url": {
                    "canBeNull": true,
                    "description": "Website address",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "vat": {
                    "canBeNull": true,
                    "description": "VAT number",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "zip": {
                    "canBeNull": true,
                    "description": "ZipCode",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "MarketPlace.Partner.Product": {
            "description": "product",
            "id": "edit.response",
            "namespace": "MarketPlacePartnerProduct",
            "properties": {
                "category": {
                    "canBeNull": false,
                    "description": "Name of product category",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description of product",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name of product",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "otherDetails": {
                    "canBeNull": true,
                    "description": "Additional information",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "complexType.SafeKeyValue<T>": {
            "description": "Key and value, with proper key strings",
            "generics": [
                "T"
            ],
            "id": "SafeKeyValue",
            "namespace": "complexType",
            "properties": {
                "key": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "value": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "T"
                }
            }
        }
    },
    "resourcePath": "/store"
};
//# sourceMappingURL=store.js.map