import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /store Models
 * Source: https://eu.api.ovh.com/1.0/store.json
 */
export namespace MarketPlace {
    // interface fullName: MarketPlace.Document.Document
    export interface Document {
        creationDate?: string;
        getUrl?: string;
        id: string;
        name?: string;
        putUrl?: string;
        size?: string;
        tags?: complexType.SafeKeyValue<string>[];
    }
    // interface fullName: MarketPlace.Partner.Partner
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
    // interface fullName: MarketPlaceContact.Contact.Contact
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
    // interface fullName: MarketPlacePartnerProduct.edit_response.edit_response
    export interface edit_response {
        category: string;
        description: string;
        name: string;
        otherDetails?: string;
    }
}
export namespace complexType {
    // interface fullName: complexType.SafeKeyValue.SafeKeyValue
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
}
