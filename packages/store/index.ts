import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace MarketPlace {
    //MarketPlace.Document
    // fullName: MarketPlace.Document.Document
    export interface Document {
        creationDate?: string;
        getUrl?: string;
        id: string;
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
        email: string;
        firstname: string;
        id: string;
        lastname: string;
        phone?: string;
        province?: string;
        street?: string;
        title: string;
        zip?: string;
    }
}
export namespace MarketPlacePartnerProduct {
    //MarketPlacePartnerProduct.edit_response
    // fullName: MarketPlacePartnerProduct.edit_response.edit_response
    export interface edit_response {
        category: string;
        description: string;
        name: string;
        otherDetails?: string;
    }
}
export namespace complexType {
    //complexType.SafeKeyValue
    // fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
// Apis harmony
// path /store
export interface Store{
    contact: {
        // GET /store/contact
        $get(): Promise<MarketPlaceContact.Contact[]>;
        // POST /store/contact
        $post(body?: {city?: string, country?: string, email: string, firstname: string, lastname: string, phone?: string, province?: string, street?: string, title: string, zip?: string}): Promise<MarketPlaceContact.Contact>;
        [keys: string]:{
            // DELETE /store/contact/{contactId}
            $delete(): Promise<string>;
            // GET /store/contact/{contactId}
            $get(): Promise<MarketPlaceContact.Contact>;
            // PUT /store/contact/{contactId}
            $put(body?: {city?: string, country?: string, email?: string, firstname?: string, lastname?: string, phone?: string, province?: string, street?: string, title?: string, zip?: string}): Promise<MarketPlaceContact.Contact>;
            document: {
                // GET /store/contact/{contactId}/document
                $get(): Promise<string[]>;
                // POST /store/contact/{contactId}/document
                $post(body?: {documentId: string}): Promise<string[]>;
                [keys: string]:{
                    // DELETE /store/contact/{contactId}/document/{documentId}
                    $delete(): Promise<string[]>;
                } | any
            }
        } | any
    }
    document: {
        // GET /store/document
        $get(): Promise<MarketPlace.Document[]>;
        // POST /store/document
        $post(body?: {name: string, tags?: complexType.SafeKeyValue<string>[]}): Promise<MarketPlace.Document>;
        cors: {
            // POST /store/document/cors
            $post(body?: {origin: string}): Promise<void>;
        }
        [keys: string]:{
            // DELETE /store/document/{documentId}
            $delete(): Promise<string>;
            // GET /store/document/{documentId}
            $get(): Promise<MarketPlace.Document>;
        } | any
    }
    partner: {
        // GET /store/partner
        $get(): Promise<MarketPlace.Partner[]>;
        // POST /store/partner
        $post(body?: {category?: string, city: string, companyNationalIdentificationNumber?: string, contact?: string, country: string, description?: string, language?: string, legalForm: string, organisationDisplayName?: string, organisationName: string, otherDetails?: string, province: string, street: string, url?: string, vat?: string, zip: string}): Promise<MarketPlace.Partner>;
        [keys: string]:{
            // DELETE /store/partner/{partnerId}
            $delete(): Promise<string>;
            // GET /store/partner/{partnerId}
            $get(): Promise<MarketPlace.Partner>;
            // PUT /store/partner/{partnerId}
            $put(body?: {category?: string, city?: string, companyNationalIdentificationNumber?: string, contact?: string, country?: string, description?: string, language?: string, legalForm?: string, organisationDisplayName?: string, organisationName?: string, otherDetails?: string, province?: string, street?: string, url?: string, vat?: string, zip?: string}): Promise<MarketPlace.Partner>;
            document: {
                // GET /store/partner/{partnerId}/document
                $get(): Promise<string[]>;
                // POST /store/partner/{partnerId}/document
                $post(body?: {documentId: string}): Promise<string[]>;
                [keys: string]:{
                    // DELETE /store/partner/{partnerId}/document/{documentId}
                    $delete(): Promise<string[]>;
                } | any
            }
            product: {
                // GET /store/partner/{partnerId}/product
                $get(): Promise<MarketPlacePartnerProduct.edit_response[]>;
                // POST /store/partner/{partnerId}/product
                $post(body?: {category: string, description: string, name: string, otherDetails?: string}): Promise<MarketPlacePartnerProduct.edit_response>;
                [keys: string]:{
                    // DELETE /store/partner/{partnerId}/product/{productId}
                    $delete(): Promise<string>;
                    // GET /store/partner/{partnerId}/product/{productId}
                    $get(): Promise<MarketPlacePartnerProduct.edit_response>;
                    // PUT /store/partner/{partnerId}/product/{productId}
                    $put(body?: {category?: string, description?: string, name?: string, otherDetails?: string}): Promise<MarketPlacePartnerProduct.edit_response>;
                    document: {
                        // GET /store/partner/{partnerId}/product/{productId}/document
                        $get(): Promise<string[]>;
                        // POST /store/partner/{partnerId}/product/{productId}/document
                        $post(body?: {documentId: string}): Promise<string[]>;
                        [keys: string]:{
                            // DELETE /store/partner/{partnerId}/product/{productId}/document/{documentId}
                            $delete(): Promise<string[]>;
                        } | any
                    }
                } | any
            }
        } | any
    }
}
// Api
type PathsStoreGET = '/store/contact' |
  '/store/contact/{contactId}' |
  '/store/contact/{contactId}/document' |
  '/store/document' |
  '/store/document/{documentId}' |
  '/store/partner' |
  '/store/partner/{partnerId}' |
  '/store/partner/{partnerId}/document' |
  '/store/partner/{partnerId}/product' |
  '/store/partner/{partnerId}/product/{productId}' |
  '/store/partner/{partnerId}/product/{productId}/document';

type PathsStorePUT = '/store/contact/{contactId}' |
  '/store/partner/{partnerId}' |
  '/store/partner/{partnerId}/product/{productId}';

type PathsStorePOST = '/store/contact' |
  '/store/contact/{contactId}/document' |
  '/store/document' |
  '/store/document/cors' |
  '/store/partner' |
  '/store/partner/{partnerId}/document' |
  '/store/partner/{partnerId}/product' |
  '/store/partner/{partnerId}/product/{productId}/document';

type PathsStoreDELETE = '/store/contact/{contactId}' |
  '/store/contact/{contactId}/document/{documentId}' |
  '/store/document/{documentId}' |
  '/store/partner/{partnerId}' |
  '/store/partner/{partnerId}/document/{documentId}' |
  '/store/partner/{partnerId}/product/{productId}' |
  '/store/partner/{partnerId}/product/{productId}/document/{documentId}';

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
  public delete(path: '/store/partner/{partnerId}/document/{documentId}', params: {documentId: string, partnerId: string}): Promise<string[]>;
  /**
   * MarketPlacePartnerProduct.get
   * Delete product
   */
  public delete(path: '/store/partner/{partnerId}/product/{productId}', params: {partnerId: string, productId: string}): Promise<string>;
  /**
   * MarketPlacePartnerProduct.doc_id
   * Unlink a document from a product
   */
  public delete(path: '/store/partner/{partnerId}/product/{productId}/document/{documentId}', params: {documentId: string, partnerId: string, productId: string}): Promise<string[]>;
  public delete(path: PathsStoreDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}