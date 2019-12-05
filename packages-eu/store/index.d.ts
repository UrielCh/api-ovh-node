import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /store Models
 */
export declare namespace MarketPlace {
    interface Document {
        creationDate?: string;
        getUrl?: string;
        id: string;
        name?: string;
        putUrl?: string;
        size?: string;
        tags?: complexType.SafeKeyValue<string>[];
    }
    interface Partner {
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
export declare namespace MarketPlaceContact {
    interface Contact {
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
export declare namespace MarketPlacePartnerProduct {
    interface edit_response {
        category: string;
        description: string;
        name: string;
        otherDetails?: string;
    }
}
export declare namespace complexType {
    interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
/**
 * END API /store Models
 */
export declare function proxyStore(ovhEngine: OvhRequestable): Store;
export default proxyStore;
/**
 * Api Proxy model
 */ export interface Store {
    contact: {
        $get(): Promise<MarketPlaceContact.Contact[]>;
        $post(params: {
            city?: string;
            country?: string;
            email: string;
            firstname: string;
            lastname: string;
            phone?: string;
            province?: string;
            street?: string;
            title: string;
            zip?: string;
        }): Promise<MarketPlaceContact.Contact>;
        $(contactId: string): {
            $delete(): Promise<string>;
            $get(): Promise<MarketPlaceContact.Contact>;
            $put(params?: {
                city?: string;
                country?: string;
                email?: string;
                firstname?: string;
                lastname?: string;
                phone?: string;
                province?: string;
                street?: string;
                title?: string;
                zip?: string;
            }): Promise<MarketPlaceContact.Contact>;
            document: {
                $get(): Promise<string[]>;
                $post(params: {
                    documentId: string;
                }): Promise<string[]>;
                $(documentId: string): {
                    $delete(): Promise<string[]>;
                };
            };
        };
    };
    document: {
        $get(): Promise<MarketPlace.Document[]>;
        $post(params: {
            name: string;
            tags?: complexType.SafeKeyValue<string>[];
        }): Promise<MarketPlace.Document>;
        cors: {
            $post(params: {
                origin: string;
            }): Promise<void>;
        };
        $(documentId: string): {
            $delete(): Promise<string>;
            $get(): Promise<MarketPlace.Document>;
        };
    };
    partner: {
        $get(): Promise<MarketPlace.Partner[]>;
        $post(params: {
            category?: string;
            city: string;
            companyNationalIdentificationNumber?: string;
            contact?: string;
            country: string;
            description?: string;
            language?: string;
            legalForm: string;
            organisationDisplayName?: string;
            organisationName: string;
            otherDetails?: string;
            province: string;
            street: string;
            url?: string;
            vat?: string;
            zip: string;
        }): Promise<MarketPlace.Partner>;
        $(partnerId: string): {
            $delete(): Promise<string>;
            $get(): Promise<MarketPlace.Partner>;
            $put(params?: {
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
            }): Promise<MarketPlace.Partner>;
            document: {
                $get(): Promise<string[]>;
                $post(params: {
                    documentId: string;
                }): Promise<string[]>;
                $(documentId: string): {
                    $delete(): Promise<string[]>;
                };
            };
            product: {
                $get(): Promise<MarketPlacePartnerProduct.edit_response[]>;
                $post(params: {
                    category: string;
                    description: string;
                    name: string;
                    otherDetails?: string;
                }): Promise<MarketPlacePartnerProduct.edit_response>;
                $(productId: string): {
                    $delete(): Promise<string>;
                    $get(): Promise<MarketPlacePartnerProduct.edit_response>;
                    $put(params?: {
                        category?: string;
                        description?: string;
                        name?: string;
                        otherDetails?: string;
                    }): Promise<MarketPlacePartnerProduct.edit_response>;
                    document: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            documentId: string;
                        }): Promise<string[]>;
                        $(documentId: string): {
                            $delete(): Promise<string[]>;
                        };
                    };
                };
            };
        };
    };
    /**
     * MarketPlaceContact
     * List current customer contacts
     */
    get(path: '/store/contact'): () => Promise<MarketPlaceContact.Contact[]>;
    /**
     * MarketPlaceContact.contactId
     * Get contact details
     */
    get(path: '/store/contact/{contactId}'): (params: {
        contactId: string;
    }) => Promise<MarketPlaceContact.Contact>;
    /**
     * MarketPlaceContact.doc
     * List document associated with contact
     */
    get(path: '/store/contact/{contactId}/document'): (params: {
        contactId: string;
    }) => Promise<string[]>;
    /**
     * MarketPlaceDocument
     * List current customer documents
     */
    get(path: '/store/document'): () => Promise<MarketPlace.Document[]>;
    /**
     * MarketPlaceDocument.documentId
     * Get document info
     */
    get(path: '/store/document/{documentId}'): (params: {
        documentId: string;
    }) => Promise<MarketPlace.Document>;
    /**
     * MarketPlacePartner.search
     * List current customer partners
     */
    get(path: '/store/partner'): () => Promise<MarketPlace.Partner[]>;
    /**
     * MarketPlacePartner.get
     * Get partner info
     */
    get(path: '/store/partner/{partnerId}'): (params: {
        partnerId: string;
    }) => Promise<MarketPlace.Partner>;
    /**
     * MarketPlacePartner.doc
     * List document associated with partner
     */
    get(path: '/store/partner/{partnerId}/document'): (params: {
        partnerId: string;
    }) => Promise<string[]>;
    /**
     * MarketPlacePartnerProduct.search
     * List partner's products
     */
    get(path: '/store/partner/{partnerId}/product'): (params: {
        partnerId: string;
    }) => Promise<MarketPlacePartnerProduct.edit_response[]>;
    /**
     * MarketPlacePartnerProduct.get
     * Get partner info
     */
    get(path: '/store/partner/{partnerId}/product/{productId}'): (params: {
        partnerId: string;
        productId: string;
    }) => Promise<MarketPlacePartnerProduct.edit_response>;
    /**
     * MarketPlacePartnerProduct.doc
     * List document associated with product
     */
    get(path: '/store/partner/{partnerId}/product/{productId}/document'): (params: {
        partnerId: string;
        productId: string;
    }) => Promise<string[]>;
    /**
     * MarketPlaceContact.contactId
     * Edit contact information
     */
    put(path: '/store/contact/{contactId}'): (params: {
        contactId: string;
        city?: string;
        country?: string;
        email?: string;
        firstname?: string;
        lastname?: string;
        phone?: string;
        province?: string;
        street?: string;
        title?: string;
        zip?: string;
    }) => Promise<MarketPlaceContact.Contact>;
    /**
     * MarketPlacePartner.get
     * Edit partner info
     */
    put(path: '/store/partner/{partnerId}'): (params: {
        partnerId: string;
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
    }) => Promise<MarketPlace.Partner>;
    /**
     * MarketPlacePartnerProduct.get
     * Edit product info
     */
    put(path: '/store/partner/{partnerId}/product/{productId}'): (params: {
        partnerId: string;
        productId: string;
        category?: string;
        description?: string;
        name?: string;
        otherDetails?: string;
    }) => Promise<MarketPlacePartnerProduct.edit_response>;
    /**
     * MarketPlaceContact
     * Create a 'marketplace' contact for current nic
     */
    post(path: '/store/contact'): (params: {
        city?: string;
        country?: string;
        email: string;
        firstname: string;
        lastname: string;
        phone?: string;
        province?: string;
        street?: string;
        title: string;
        zip?: string;
    }) => Promise<MarketPlaceContact.Contact>;
    /**
     * MarketPlaceContact.doc
     * Add a document to a contact
     */
    post(path: '/store/contact/{contactId}/document'): (params: {
        contactId: string;
        documentId: string;
    }) => Promise<string[]>;
    /**
     * MarketPlaceDocument
     * Create a document
     */
    post(path: '/store/document'): (params: {
        name: string;
        tags?: complexType.SafeKeyValue<string>[];
    }) => Promise<MarketPlace.Document>;
    /**
     * MarketPlaceDocument
     * Add CORS support on your container
     */
    post(path: '/store/document/cors'): (params: {
        origin: string;
    }) => Promise<void>;
    /**
     * MarketPlacePartner.search
     * Create a 'marketplace' partner for current nic
     */
    post(path: '/store/partner'): (params: {
        category?: string;
        city: string;
        companyNationalIdentificationNumber?: string;
        contact?: string;
        country: string;
        description?: string;
        language?: string;
        legalForm: string;
        organisationDisplayName?: string;
        organisationName: string;
        otherDetails?: string;
        province: string;
        street: string;
        url?: string;
        vat?: string;
        zip: string;
    }) => Promise<MarketPlace.Partner>;
    /**
     * MarketPlacePartner.doc
     * Add a document to a partner
     */
    post(path: '/store/partner/{partnerId}/document'): (params: {
        partnerId: string;
        documentId: string;
    }) => Promise<string[]>;
    /**
     * MarketPlacePartnerProduct.search
     * Create a new product for partner
     */
    post(path: '/store/partner/{partnerId}/product'): (params: {
        partnerId: string;
        category: string;
        description: string;
        name: string;
        otherDetails?: string;
    }) => Promise<MarketPlacePartnerProduct.edit_response>;
    /**
     * MarketPlacePartnerProduct.doc
     * Add a document to a product
     */
    post(path: '/store/partner/{partnerId}/product/{productId}/document'): (params: {
        partnerId: string;
        productId: string;
        documentId: string;
    }) => Promise<string[]>;
    /**
     * MarketPlaceContact.contactId
     * Remove an existing contact
     */
    delete(path: '/store/contact/{contactId}'): (params: {
        contactId: string;
    }) => Promise<string>;
    /**
     * MarketPlaceContact.doc_id
     * Unlink a document from a contact
     */
    delete(path: '/store/contact/{contactId}/document/{documentId}'): (params: {
        contactId: string;
        documentId: string;
    }) => Promise<string[]>;
    /**
     * MarketPlaceDocument.documentId
     * Delete document
     */
    delete(path: '/store/document/{documentId}'): (params: {
        documentId: string;
    }) => Promise<string>;
    /**
     * MarketPlacePartner.get
     * Delete partner
     */
    delete(path: '/store/partner/{partnerId}'): (params: {
        partnerId: string;
    }) => Promise<string>;
    /**
     * MarketPlacePartner.doc_id
     * Unlink a document from a partner
     */
    delete(path: '/store/partner/{partnerId}/document/{documentId}'): (params: {
        documentId: string;
        partnerId: string;
    }) => Promise<string[]>;
    /**
     * MarketPlacePartnerProduct.get
     * Delete product
     */
    delete(path: '/store/partner/{partnerId}/product/{productId}'): (params: {
        partnerId: string;
        productId: string;
    }) => Promise<string>;
    /**
     * MarketPlacePartnerProduct.doc_id
     * Unlink a document from a product
     */
    delete(path: '/store/partner/{partnerId}/product/{productId}/document/{documentId}'): (params: {
        documentId: string;
        partnerId: string;
        productId: string;
    }) => Promise<string[]>;
}
