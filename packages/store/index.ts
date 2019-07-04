import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace MarketPlace {
    //MarketPlace.Document
    // fullName: MarketPlace.Document.Document
    export interface Document {
        creationDate?: string;
        getUrl?: string;
        id?: string;
        name?: string;
        putUrl?: string;
        size?: string;
        tags?: OVH.complexType.SafeKeyValue<string>[];
    }
    //MarketPlace.Partner
    // fullName: MarketPlace.Partner.Partner
    export interface Partner {
        category?: string;
        city?: string;
        companyNationalIdentificationNumber?: string;
        contact?: string;
        country?: string;
        description?: string;
        language?: string;
        legalForm?: string;
        organisationDisplayName?: string;
        organisationName?: string;
        otherDetails?: string;
        province?: string;
        street?: string;
        url?: string;
        vat?: string;
        zip?: string;
    }
}
export namespace MarketPlaceContact {
    //MarketPlaceContact.Contact
    // fullName: MarketPlaceContact.Contact.Contact
    export interface Contact {
        city?: string;
        country?: string;
        email?: string;
        firstname?: string;
        id?: string;
        lastname?: string;
        phone?: string;
        province?: string;
        street?: string;
        title?: string;
        zip?: string;
    }
}
export namespace MarketPlacePartnerProduct {
    //MarketPlacePartnerProduct.edit_response
    // fullName: MarketPlacePartnerProduct.edit_response.edit_response
    export interface edit_response {
        category?: string;
        description?: string;
        name?: string;
        otherDetails?: string;
    }
}
export namespace complexType {
    //complexType.SafeKeyValue
    // fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key?: string;
        value?: T;
    }
}
// Apis harmony
// path /store
export interface Store {
    contact:  {
        // GET /store/contact
        GET(): Promise<MarketPlaceContact.Contact[]>;
        // POST /store/contact
        POST(body?: {title: string, firstname: string, lastname: string, email: string, street?: string, country?: string, zip?: string, province?: string, city?: string, phone?: string}): Promise<MarketPlaceContact.Contact>;
        [keys: string]: {
            // GET /store/contact/{contactId}
            GET(): Promise<MarketPlaceContact.Contact>;
            // PUT /store/contact/{contactId}
            PUT(body?: {title?: string, firstname?: string, lastname?: string, email?: string, street?: string, country?: string, zip?: string, province?: string, city?: string, phone?: string}): Promise<MarketPlaceContact.Contact>;
            // DELETE /store/contact/{contactId}
            DELETE(): Promise<string>;
            document:  {
                // GET /store/contact/{contactId}/document
                GET(): Promise<string[]>;
                // POST /store/contact/{contactId}/document
                POST(body?: {documentId: string}): Promise<string[]>;
                [keys: string]: {
                    // DELETE /store/contact/{contactId}/document/{documentId}
                    DELETE(): Promise<string[]>;
                } | any
            }
        } | any
    }
    partner:  {
        // GET /store/partner
        GET(): Promise<MarketPlace.Partner[]>;
        // POST /store/partner
        POST(body?: {legalForm: string, organisationName: string, country: string, city: string, street: string, zip: string, language?: string, description?: string, vat?: string, organisationDisplayName?: string, companyNationalIdentificationNumber?: string, url?: string, otherDetails?: string, category?: string, province: string, contact?: string}): Promise<MarketPlace.Partner>;
        [keys: string]: {
            // GET /store/partner/{partnerId}
            GET(): Promise<MarketPlace.Partner>;
            // PUT /store/partner/{partnerId}
            PUT(body?: {legalForm?: string, organisationName?: string, country?: string, city?: string, street?: string, zip?: string, language?: string, description?: string, vat?: string, category?: string, organisationDisplayName?: string, companyNationalIdentificationNumber?: string, url?: string, otherDetails?: string, province?: string, contact?: string}): Promise<MarketPlace.Partner>;
            // DELETE /store/partner/{partnerId}
            DELETE(): Promise<string>;
            document:  {
                // GET /store/partner/{partnerId}/document
                GET(): Promise<string[]>;
                // POST /store/partner/{partnerId}/document
                POST(body?: {documentId: string}): Promise<string[]>;
                [keys: string]: {
                    // DELETE /store/partner/{partnerId}/document/{documentId}
                    DELETE(): Promise<string[]>;
                } | any
            }
            product:  {
                // GET /store/partner/{partnerId}/product
                GET(): Promise<MarketPlacePartnerProduct.edit_response[]>;
                // POST /store/partner/{partnerId}/product
                POST(body?: {description: string, name: string, otherDetails?: string, category: string}): Promise<MarketPlacePartnerProduct.edit_response>;
                [keys: string]: {
                    // GET /store/partner/{partnerId}/product/{productId}
                    GET(): Promise<MarketPlacePartnerProduct.edit_response>;
                    // PUT /store/partner/{partnerId}/product/{productId}
                    PUT(body?: {description?: string, name?: string, category?: string, otherDetails?: string}): Promise<MarketPlacePartnerProduct.edit_response>;
                    // DELETE /store/partner/{partnerId}/product/{productId}
                    DELETE(): Promise<string>;
                    document:  {
                        // GET /store/partner/{partnerId}/product/{productId}/document
                        GET(): Promise<string[]>;
                        // POST /store/partner/{partnerId}/product/{productId}/document
                        POST(body?: {documentId: string}): Promise<string[]>;
                        [keys: string]: {
                            // DELETE /store/partner/{partnerId}/product/{productId}/document/{documentId}
                            DELETE(): Promise<string[]>;
                        } | any
                    }
                } | any
            }
        } | any
    }
    document:  {
        // GET /store/document
        GET(): Promise<MarketPlace.Document[]>;
        // POST /store/document
        POST(body?: {name: string, tags?: complexType.SafeKeyValue<string>[]}): Promise<MarketPlace.Document>;
        cors:  {
            // POST /store/document/cors
            POST(body?: {origin: string}): Promise<void>;
        }
        [keys: string]: {
            // GET /store/document/{documentId}
            GET(): Promise<MarketPlace.Document>;
            // DELETE /store/document/{documentId}
            DELETE(): Promise<string>;
        } | any
    }
}
// Api
type PathsStoreGET = '/store/contact' |
  '/store/contact/{contactId}' |
  '/store/contact/{contactId}/document' |
  '/store/partner' |
  '/store/partner/{partnerId}/document' |
  '/store/partner/{partnerId}/product' |
  '/store/partner/{partnerId}/product/{productId}/document' |
  '/store/partner/{partnerId}/product/{productId}' |
  '/store/partner/{partnerId}' |
  '/store/document' |
  '/store/document/{documentId}';

type PathsStorePUT = '/store/contact/{contactId}' |
  '/store/partner/{partnerId}/product/{productId}' |
  '/store/partner/{partnerId}';

type PathsStorePOST = '/store/contact' |
  '/store/contact/{contactId}/document' |
  '/store/partner' |
  '/store/partner/{partnerId}/document' |
  '/store/partner/{partnerId}/product' |
  '/store/partner/{partnerId}/product/{productId}/document' |
  '/store/document/cors' |
  '/store/document';

type PathsStoreDELETE = '/store/contact/{contactId}' |
  '/store/contact/{contactId}/document/{documentId}' |
  '/store/partner/{partnerId}/document/{documentId}' |
  '/store/partner/{partnerId}/product/{productId}/document/{documentId}' |
  '/store/partner/{partnerId}/product/{productId}' |
  '/store/partner/{partnerId}' |
  '/store/document/{documentId}';

export class ApiStore extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * MarketPlaceContact
   * List current customer contacts
   */
  public get(path: '/store/contact'): Promise<MarketPlaceContact.Contact[]>;
  /**
   * MarketPlaceContact.contactId
   * Get contact details
   */
  public get(path: '/store/contact/{contactId}', params: {contactId: string}): Promise<MarketPlaceContact.Contact>;
  /**
   * MarketPlaceContact.doc
   * List document associated with contact
   */
  public get(path: '/store/contact/{contactId}/document', params: {contactId: string}): Promise<string[]>;
  /**
   * MarketPlaceDocument
   * List current customer documents
   */
  public get(path: '/store/document'): Promise<MarketPlace.Document[]>;
  /**
   * MarketPlaceDocument.documentId
   * Get document info
   */
  public get(path: '/store/document/{documentId}', params: {documentId: string}): Promise<MarketPlace.Document>;
  /**
   * MarketPlacePartner.search
   * List current customer partners
   */
  public get(path: '/store/partner'): Promise<MarketPlace.Partner[]>;
  /**
   * MarketPlacePartner.get
   * Get partner info
   */
  public get(path: '/store/partner/{partnerId}', params: {partnerId: string}): Promise<MarketPlace.Partner>;
  /**
   * MarketPlacePartner.doc
   * List document associated with partner
   */
  public get(path: '/store/partner/{partnerId}/document', params: {partnerId: string}): Promise<string[]>;
  /**
   * MarketPlacePartnerProduct.search
   * List partner's products
   */
  public get(path: '/store/partner/{partnerId}/product', params: {partnerId: string}): Promise<MarketPlacePartnerProduct.edit_response[]>;
  /**
   * MarketPlacePartnerProduct.get
   * Get partner info
   */
  public get(path: '/store/partner/{partnerId}/product/{productId}', params: {partnerId: string, productId: string}): Promise<MarketPlacePartnerProduct.edit_response>;
  /**
   * MarketPlacePartnerProduct.doc
   * List document associated with product
   */
  public get(path: '/store/partner/{partnerId}/product/{productId}/document', params: {partnerId: string, productId: string}): Promise<string[]>;
  public get(path: PathsStoreGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * MarketPlaceContact.contactId
   * Edit contact information
   */
  public put(path: '/store/contact/{contactId}', params: {contactId: string, city?: string, country?: string, email?: string, firstname?: string, lastname?: string, phone?: string, province?: string, street?: string, title?: string, zip?: string}): Promise<MarketPlaceContact.Contact>;
  /**
   * MarketPlacePartner.get
   * Edit partner info
   */
  public put(path: '/store/partner/{partnerId}', params: {partnerId: string, category?: string, city?: string, companyNationalIdentificationNumber?: string, contact?: string, country?: string, description?: string, language?: string, legalForm?: string, organisationDisplayName?: string, organisationName?: string, otherDetails?: string, province?: string, street?: string, url?: string, vat?: string, zip?: string}): Promise<MarketPlace.Partner>;
  /**
   * MarketPlacePartnerProduct.get
   * Edit product info
   */
  public put(path: '/store/partner/{partnerId}/product/{productId}', params: {partnerId: string, productId: string, category?: string, description?: string, name?: string, otherDetails?: string}): Promise<MarketPlacePartnerProduct.edit_response>;
  public put(path: PathsStorePUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * MarketPlaceContact
   * Create a 'marketplace' contact for current nic
   */
  public post(path: '/store/contact', params: {city?: string, country?: string, email: string, firstname: string, lastname: string, phone?: string, province?: string, street?: string, title: string, zip?: string}): Promise<MarketPlaceContact.Contact>;
  /**
   * MarketPlaceContact.doc
   * Add a document to a contact
   */
  public post(path: '/store/contact/{contactId}/document', params: {contactId: string, documentId: string}): Promise<string[]>;
  /**
   * MarketPlaceDocument
   * Create a document
   */
  public post(path: '/store/document', params: {name: string, tags?: OVH.complexType.SafeKeyValue<string>[]}): Promise<MarketPlace.Document>;
  /**
   * MarketPlaceDocument
   * Add CORS support on your container
   */
  public post(path: '/store/document/cors', params: {origin: string}): Promise<void>;
  /**
   * MarketPlacePartner.search
   * Create a 'marketplace' partner for current nic
   */
  public post(path: '/store/partner', params: {category?: string, city: string, companyNationalIdentificationNumber?: string, contact?: string, country: string, description?: string, language?: string, legalForm: string, organisationDisplayName?: string, organisationName: string, otherDetails?: string, province: string, street: string, url?: string, vat?: string, zip: string}): Promise<MarketPlace.Partner>;
  /**
   * MarketPlacePartner.doc
   * Add a document to a partner
   */
  public post(path: '/store/partner/{partnerId}/document', params: {partnerId: string, documentId: string}): Promise<string[]>;
  /**
   * MarketPlacePartnerProduct.search
   * Create a new product for partner
   */
  public post(path: '/store/partner/{partnerId}/product', params: {partnerId: string, category: string, description: string, name: string, otherDetails?: string}): Promise<MarketPlacePartnerProduct.edit_response>;
  /**
   * MarketPlacePartnerProduct.doc
   * Add a document to a product
   */
  public post(path: '/store/partner/{partnerId}/product/{productId}/document', params: {partnerId: string, productId: string, documentId: string}): Promise<string[]>;
  public post(path: PathsStorePOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * MarketPlaceContact.contactId
   * Remove an existing contact
   */
  public delete(path: '/store/contact/{contactId}', params: {contactId: string}): Promise<string>;
  /**
   * MarketPlaceContact.doc_id
   * Unlink a document from a contact
   */
  public delete(path: '/store/contact/{contactId}/document/{documentId}', params: {contactId: string, documentId: string}): Promise<string[]>;
  /**
   * MarketPlaceDocument.documentId
   * Delete document
   */
  public delete(path: '/store/document/{documentId}', params: {documentId: string}): Promise<string>;
  /**
   * MarketPlacePartner.get
   * Delete partner
   */
  public delete(path: '/store/partner/{partnerId}', params: {partnerId: string}): Promise<string>;
  /**
   * MarketPlacePartner.doc_id
   * Unlink a document from a partner
   */
  public delete(path: '/store/partner/{partnerId}/document/{documentId}', params: {partnerId: string, documentId: string}): Promise<string[]>;
  /**
   * MarketPlacePartnerProduct.get
   * Delete product
   */
  public delete(path: '/store/partner/{partnerId}/product/{productId}', params: {partnerId: string, productId: string}): Promise<string>;
  /**
   * MarketPlacePartnerProduct.doc_id
   * Unlink a document from a product
   */
  public delete(path: '/store/partner/{partnerId}/product/{productId}/document/{documentId}', params: {partnerId: string, productId: string, documentId: string}): Promise<string[]>;
  public delete(path: PathsStoreDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}