import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /store Models
 * Source: https://eu.api.kimsufi.com/1.0/store.json
 */
export namespace MarketPlace {
    /**
     * Document
     * interface fullName: MarketPlace.Document.Document
     */
    export interface Document {
        creationDate?: string;
        getUrl?: string;
        id: string;
        name?: string;
        putUrl?: string;
        size?: string;
        tags?: complexType.SafeKeyValue<string>[];
    }
    /**
     * partner
     * interface fullName: MarketPlace.Partner.Partner
     */
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
    /**
     * Contact information
     * interface fullName: MarketPlaceContact.Contact.Contact
     */
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
    /**
     * product
     * interface fullName: MarketPlacePartnerProduct.edit_response.edit_response
     */
    export interface edit_response {
        category: string;
        description: string;
        name: string;
        otherDetails?: string;
    }
}
export namespace complexType {
    /**
     * Key and value, with proper key strings
     * interface fullName: complexType.SafeKeyValue.SafeKeyValue
     */
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
 * Api model for /store
 */
export interface Store {
    contact: {
        /**
         * List current customer contacts
         * GET /store/contact
         */
        $get(): Promise<MarketPlaceContact.Contact[]>;
        /**
         * Create a 'marketplace' contact for current nic
         * POST /store/contact
         */
        $post(params: { city?: string, country?: string, email: string, firstname: string, lastname: string, phone?: string, province?: string, street?: string, title: string, zip?: string }): Promise<MarketPlaceContact.Contact>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(contactId: string): {
            /**
             * Remove an existing contact
             * DELETE /store/contact/{contactId}
             */
            $delete(): Promise<string>;
            /**
             * Get contact details
             * GET /store/contact/{contactId}
             */
            $get(): Promise<MarketPlaceContact.Contact>;
            /**
             * Edit contact information
             * PUT /store/contact/{contactId}
             */
            $put(params?: { city?: string, country?: string, email?: string, firstname?: string, lastname?: string, phone?: string, province?: string, street?: string, title?: string, zip?: string }): Promise<MarketPlaceContact.Contact>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            document: {
                /**
                 * List document associated with contact
                 * GET /store/contact/{contactId}/document
                 */
                $get(): Promise<string[]>;
                /**
                 * Add a document to a contact
                 * POST /store/contact/{contactId}/document
                 */
                $post(params: { documentId: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(documentId: string): {
                    /**
                     * Unlink a document from a contact
                     * DELETE /store/contact/{contactId}/document/{documentId}
                     */
                    $delete(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        };
    }
    document: {
        /**
         * List current customer documents
         * GET /store/document
         */
        $get(): Promise<MarketPlace.Document[]>;
        /**
         * Create a document
         * POST /store/document
         */
        $post(params: { name: string, tags?: complexType.SafeKeyValue<string>[] }): Promise<MarketPlace.Document>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        cors: {
            /**
             * Add CORS support on your container
             * POST /store/document/cors
             */
            $post(params: { origin: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(documentId: string): {
            /**
             * Delete document
             * DELETE /store/document/{documentId}
             */
            $delete(): Promise<string>;
            /**
             * Get document info
             * GET /store/document/{documentId}
             */
            $get(): Promise<MarketPlace.Document>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    partner: {
        /**
         * List current customer partners
         * GET /store/partner
         */
        $get(): Promise<MarketPlace.Partner[]>;
        /**
         * Create a 'marketplace' partner for current nic
         * POST /store/partner
         */
        $post(params: { category?: string, city: string, companyNationalIdentificationNumber?: string, contact?: string, country: string, description?: string, language?: string, legalForm: string, organisationDisplayName?: string, organisationName: string, otherDetails?: string, province: string, street: string, url?: string, vat?: string, zip: string }): Promise<MarketPlace.Partner>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(partnerId: string): {
            /**
             * Delete partner
             * DELETE /store/partner/{partnerId}
             */
            $delete(): Promise<string>;
            /**
             * Get partner info
             * GET /store/partner/{partnerId}
             */
            $get(): Promise<MarketPlace.Partner>;
            /**
             * Edit partner info
             * PUT /store/partner/{partnerId}
             */
            $put(params?: { category?: string, city?: string, companyNationalIdentificationNumber?: string, contact?: string, country?: string, description?: string, language?: string, legalForm?: string, organisationDisplayName?: string, organisationName?: string, otherDetails?: string, province?: string, street?: string, url?: string, vat?: string, zip?: string }): Promise<MarketPlace.Partner>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            document: {
                /**
                 * List document associated with partner
                 * GET /store/partner/{partnerId}/document
                 */
                $get(): Promise<string[]>;
                /**
                 * Add a document to a partner
                 * POST /store/partner/{partnerId}/document
                 */
                $post(params: { documentId: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(documentId: string): {
                    /**
                     * Unlink a document from a partner
                     * DELETE /store/partner/{partnerId}/document/{documentId}
                     */
                    $delete(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            product: {
                /**
                 * List partner's products
                 * GET /store/partner/{partnerId}/product
                 */
                $get(): Promise<MarketPlacePartnerProduct.edit_response[]>;
                /**
                 * Create a new product for partner
                 * POST /store/partner/{partnerId}/product
                 */
                $post(params: { category: string, description: string, name: string, otherDetails?: string }): Promise<MarketPlacePartnerProduct.edit_response>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(productId: string): {
                    /**
                     * Delete product
                     * DELETE /store/partner/{partnerId}/product/{productId}
                     */
                    $delete(): Promise<string>;
                    /**
                     * Get partner info
                     * GET /store/partner/{partnerId}/product/{productId}
                     */
                    $get(): Promise<MarketPlacePartnerProduct.edit_response>;
                    /**
                     * Edit product info
                     * PUT /store/partner/{partnerId}/product/{productId}
                     */
                    $put(params?: { category?: string, description?: string, name?: string, otherDetails?: string }): Promise<MarketPlacePartnerProduct.edit_response>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    document: {
                        /**
                         * List document associated with product
                         * GET /store/partner/{partnerId}/product/{productId}/document
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Add a document to a product
                         * POST /store/partner/{partnerId}/product/{productId}/document
                         */
                        $post(params: { documentId: string }): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(documentId: string): {
                            /**
                             * Unlink a document from a product
                             * DELETE /store/partner/{partnerId}/product/{productId}/document/{documentId}
                             */
                            $delete(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
        };
    }
}
