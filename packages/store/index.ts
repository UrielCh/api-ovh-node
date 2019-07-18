import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /store Models
 */
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
        tags?: complexType.SafeKeyValue<string>[];
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

/**
 * END API /store Models
 */
export function proxyStore(ovhEngine: OvhRequestable): Store {
    return buildOvhProxy(ovhEngine, '/store');
}
export default proxyStore;
/**
 * Api Proxy model
 */// Apis harmony
// path /store
export interface Store{
    contact: {
        // GET /store/contact
        $get(): Promise<MarketPlaceContact.Contact[]>;
        // POST /store/contact
        $post(params: {city?: string, country?: string, email: string, firstname: string, lastname: string, phone?: string, province?: string, street?: string, title: string, zip?: string}): Promise<MarketPlaceContact.Contact>;
        $(contactId: string): {
            // DELETE /store/contact/{contactId}
            $delete(): Promise<string>;
            // GET /store/contact/{contactId}
            $get(): Promise<MarketPlaceContact.Contact>;
            // PUT /store/contact/{contactId}
            $put(params?: {city?: string, country?: string, email?: string, firstname?: string, lastname?: string, phone?: string, province?: string, street?: string, title?: string, zip?: string}): Promise<MarketPlaceContact.Contact>;
            document: {
                // GET /store/contact/{contactId}/document
                $get(): Promise<string[]>;
                // POST /store/contact/{contactId}/document
                $post(params: {documentId: string}): Promise<string[]>;
                $(documentId: string): {
                    // DELETE /store/contact/{contactId}/document/{documentId}
                    $delete(): Promise<string[]>;
                };
            }
        };
    }
    document: {
        // GET /store/document
        $get(): Promise<MarketPlace.Document[]>;
        // POST /store/document
        $post(params: {name: string, tags?: complexType.SafeKeyValue<string>[]}): Promise<MarketPlace.Document>;
        cors: {
            // POST /store/document/cors
            $post(params: {origin: string}): Promise<void>;
        }
        $(documentId: string): {
            // DELETE /store/document/{documentId}
            $delete(): Promise<string>;
            // GET /store/document/{documentId}
            $get(): Promise<MarketPlace.Document>;
        };
    }
    partner: {
        // GET /store/partner
        $get(): Promise<MarketPlace.Partner[]>;
        // POST /store/partner
        $post(params: {category?: string, city: string, companyNationalIdentificationNumber?: string, contact?: string, country: string, description?: string, language?: string, legalForm: string, organisationDisplayName?: string, organisationName: string, otherDetails?: string, province: string, street: string, url?: string, vat?: string, zip: string}): Promise<MarketPlace.Partner>;
        $(partnerId: string): {
            // DELETE /store/partner/{partnerId}
            $delete(): Promise<string>;
            // GET /store/partner/{partnerId}
            $get(): Promise<MarketPlace.Partner>;
            // PUT /store/partner/{partnerId}
            $put(params?: {category?: string, city?: string, companyNationalIdentificationNumber?: string, contact?: string, country?: string, description?: string, language?: string, legalForm?: string, organisationDisplayName?: string, organisationName?: string, otherDetails?: string, province?: string, street?: string, url?: string, vat?: string, zip?: string}): Promise<MarketPlace.Partner>;
            document: {
                // GET /store/partner/{partnerId}/document
                $get(): Promise<string[]>;
                // POST /store/partner/{partnerId}/document
                $post(params: {documentId: string}): Promise<string[]>;
                $(documentId: string): {
                    // DELETE /store/partner/{partnerId}/document/{documentId}
                    $delete(): Promise<string[]>;
                };
            }
            product: {
                // GET /store/partner/{partnerId}/product
                $get(): Promise<MarketPlacePartnerProduct.edit_response[]>;
                // POST /store/partner/{partnerId}/product
                $post(params: {category: string, description: string, name: string, otherDetails?: string}): Promise<MarketPlacePartnerProduct.edit_response>;
                $(productId: string): {
                    // DELETE /store/partner/{partnerId}/product/{productId}
                    $delete(): Promise<string>;
                    // GET /store/partner/{partnerId}/product/{productId}
                    $get(): Promise<MarketPlacePartnerProduct.edit_response>;
                    // PUT /store/partner/{partnerId}/product/{productId}
                    $put(params?: {category?: string, description?: string, name?: string, otherDetails?: string}): Promise<MarketPlacePartnerProduct.edit_response>;
                    document: {
                        // GET /store/partner/{partnerId}/product/{productId}/document
                        $get(): Promise<string[]>;
                        // POST /store/partner/{partnerId}/product/{productId}/document
                        $post(params: {documentId: string}): Promise<string[]>;
                        $(documentId: string): {
                            // DELETE /store/partner/{partnerId}/product/{productId}/document/{documentId}
                            $delete(): Promise<string[]>;
                        };
                    }
                };
            }
        };
    }
// Api
  /**
   * MarketPlaceContact
   * List current customer contacts
   */
  get(path: '/store/contact'): () => Promise<MarketPlaceContact.Contact[]>;
  /**
   * MarketPlaceContact.contactId
   * Get contact details
   */
  get(path: '/store/contact/{contactId}'): (params: {contactId: string}) => Promise<MarketPlaceContact.Contact>;
  /**
   * MarketPlaceContact.doc
   * List document associated with contact
   */
  get(path: '/store/contact/{contactId}/document'): (params: {contactId: string}) => Promise<string[]>;
  /**
   * MarketPlaceDocument
   * List current customer documents
   */
  get(path: '/store/document'): () => Promise<MarketPlace.Document[]>;
  /**
   * MarketPlaceDocument.documentId
   * Get document info
   */
  get(path: '/store/document/{documentId}'): (params: {documentId: string}) => Promise<MarketPlace.Document>;
  /**
   * MarketPlacePartner.search
   * List current customer partners
   */
  get(path: '/store/partner'): () => Promise<MarketPlace.Partner[]>;
  /**
   * MarketPlacePartner.get
   * Get partner info
   */
  get(path: '/store/partner/{partnerId}'): (params: {partnerId: string}) => Promise<MarketPlace.Partner>;
  /**
   * MarketPlacePartner.doc
   * List document associated with partner
   */
  get(path: '/store/partner/{partnerId}/document'): (params: {partnerId: string}) => Promise<string[]>;
  /**
   * MarketPlacePartnerProduct.search
   * List partner's products
   */
  get(path: '/store/partner/{partnerId}/product'): (params: {partnerId: string}) => Promise<MarketPlacePartnerProduct.edit_response[]>;
  /**
   * MarketPlacePartnerProduct.get
   * Get partner info
   */
  get(path: '/store/partner/{partnerId}/product/{productId}'): (params: {partnerId: string, productId: string}) => Promise<MarketPlacePartnerProduct.edit_response>;
  /**
   * MarketPlacePartnerProduct.doc
   * List document associated with product
   */
  get(path: '/store/partner/{partnerId}/product/{productId}/document'): (params: {partnerId: string, productId: string}) => Promise<string[]>;
  /**
   * MarketPlaceContact.contactId
   * Edit contact information
   */
  put(path: '/store/contact/{contactId}'): (params: {contactId: string, city?: string, country?: string, email?: string, firstname?: string, lastname?: string, phone?: string, province?: string, street?: string, title?: string, zip?: string}) => Promise<MarketPlaceContact.Contact>;
  /**
   * MarketPlacePartner.get
   * Edit partner info
   */
  put(path: '/store/partner/{partnerId}'): (params: {partnerId: string, category?: string, city?: string, companyNationalIdentificationNumber?: string, contact?: string, country?: string, description?: string, language?: string, legalForm?: string, organisationDisplayName?: string, organisationName?: string, otherDetails?: string, province?: string, street?: string, url?: string, vat?: string, zip?: string}) => Promise<MarketPlace.Partner>;
  /**
   * MarketPlacePartnerProduct.get
   * Edit product info
   */
  put(path: '/store/partner/{partnerId}/product/{productId}'): (params: {partnerId: string, productId: string, category?: string, description?: string, name?: string, otherDetails?: string}) => Promise<MarketPlacePartnerProduct.edit_response>;
  /**
   * MarketPlaceContact
   * Create a 'marketplace' contact for current nic
   */
  post(path: '/store/contact'): (params: {city?: string, country?: string, email: string, firstname: string, lastname: string, phone?: string, province?: string, street?: string, title: string, zip?: string}) => Promise<MarketPlaceContact.Contact>;
  /**
   * MarketPlaceContact.doc
   * Add a document to a contact
   */
  post(path: '/store/contact/{contactId}/document'): (params: {contactId: string, documentId: string}) => Promise<string[]>;
  /**
   * MarketPlaceDocument
   * Create a document
   */
  post(path: '/store/document'): (params: {name: string, tags?: complexType.SafeKeyValue<string>[]}) => Promise<MarketPlace.Document>;
  /**
   * MarketPlaceDocument
   * Add CORS support on your container
   */
  post(path: '/store/document/cors'): (params: {origin: string}) => Promise<void>;
  /**
   * MarketPlacePartner.search
   * Create a 'marketplace' partner for current nic
   */
  post(path: '/store/partner'): (params: {category?: string, city: string, companyNationalIdentificationNumber?: string, contact?: string, country: string, description?: string, language?: string, legalForm: string, organisationDisplayName?: string, organisationName: string, otherDetails?: string, province: string, street: string, url?: string, vat?: string, zip: string}) => Promise<MarketPlace.Partner>;
  /**
   * MarketPlacePartner.doc
   * Add a document to a partner
   */
  post(path: '/store/partner/{partnerId}/document'): (params: {partnerId: string, documentId: string}) => Promise<string[]>;
  /**
   * MarketPlacePartnerProduct.search
   * Create a new product for partner
   */
  post(path: '/store/partner/{partnerId}/product'): (params: {partnerId: string, category: string, description: string, name: string, otherDetails?: string}) => Promise<MarketPlacePartnerProduct.edit_response>;
  /**
   * MarketPlacePartnerProduct.doc
   * Add a document to a product
   */
  post(path: '/store/partner/{partnerId}/product/{productId}/document'): (params: {partnerId: string, productId: string, documentId: string}) => Promise<string[]>;
  /**
   * MarketPlaceContact.contactId
   * Remove an existing contact
   */
  delete(path: '/store/contact/{contactId}'): (params: {contactId: string}) => Promise<string>;
  /**
   * MarketPlaceContact.doc_id
   * Unlink a document from a contact
   */
  delete(path: '/store/contact/{contactId}/document/{documentId}'): (params: {contactId: string, documentId: string}) => Promise<string[]>;
  /**
   * MarketPlaceDocument.documentId
   * Delete document
   */
  delete(path: '/store/document/{documentId}'): (params: {documentId: string}) => Promise<string>;
  /**
   * MarketPlacePartner.get
   * Delete partner
   */
  delete(path: '/store/partner/{partnerId}'): (params: {partnerId: string}) => Promise<string>;
  /**
   * MarketPlacePartner.doc_id
   * Unlink a document from a partner
   */
  delete(path: '/store/partner/{partnerId}/document/{documentId}'): (params: {documentId: string, partnerId: string}) => Promise<string[]>;
  /**
   * MarketPlacePartnerProduct.get
   * Delete product
   */
  delete(path: '/store/partner/{partnerId}/product/{productId}'): (params: {partnerId: string, productId: string}) => Promise<string>;
  /**
   * MarketPlacePartnerProduct.doc_id
   * Unlink a document from a product
   */
  delete(path: '/store/partner/{partnerId}/product/{productId}/document/{documentId}'): (params: {documentId: string, partnerId: string, productId: string}) => Promise<string[]>;
}
/**
 * classic Model
 */