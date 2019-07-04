import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Contact information
 */
export interface MarketPlaceContact {
  /**
   * City
   *
   */
  city?: string;
  /**
   * Country
   *
   */
  country?: string;
  /**
   * Email address
   *
   */
  email: string;
  /**
   * First name
   *
   */
  firstname: string;
  /**
   * Unique identifier
   *
   */
  id: string;
  /**
   * Last name
   *
   */
  lastname: string;
  /**
   * Phone number
   *
   */
  phone?: string;
  /**
   * Province name
   *
   */
  province?: string;
  /**
   * Street address
   *
   */
  street?: string;
  /**
   * Title
   *
   */
  title: string;
  /**
   * Zipcode
   *
   */
  zip?: string;
}
/**
 * Document
 */
export interface MarketPlaceDocument {
  /**
   * str
   *
   */
  creationDate?: string;
  /**
   * str
   *
   */
  getUrl?: string;
  /**
   * Unique identifier
   *
   */
  id: string;
  /**
   * str
   *
   */
  name?: string;
  /**
   * str
   *
   */
  putUrl?: string;
  /**
   * str
   *
   */
  size?: string;
  /**
   * Attached tags
   *
   */
  tags?: ComplexTypeSafeKeyValue<string>[];
}
/**
 * partner
 */
export interface MarketPlacePartner {
  /**
   * Category
   *
   */
  category?: string;
  /**
   * City
   *
   */
  city?: string;
  /**
   * Company national identification number
   *
   */
  companyNationalIdentificationNumber?: string;
  /**
   * str
   *
   */
  contact?: string;
  /**
   * Country
   *
   */
  country?: string;
  /**
   * Complete description
   *
   */
  description?: string;
  /**
   * Language
   *
   */
  language?: string;
  /**
   * Legal form
   *
   */
  legalForm?: string;
  /**
   * Organisation display name
   *
   */
  organisationDisplayName?: string;
  /**
   * Organisation name
   *
   */
  organisationName?: string;
  /**
   * Complementary information
   *
   */
  otherDetails?: string;
  /**
   * Province name
   *
   */
  province?: string;
  /**
   * Street address
   *
   */
  street?: string;
  /**
   * Website address
   *
   */
  url?: string;
  /**
   * VAT number
   *
   */
  vat?: string;
  /**
   * ZipCode
   *
   */
  zip?: string;
}
/**
 * product
 */
export interface MarketPlacePartnerProduct {
  /**
   * Name of product category
   *
   */
  category: string;
  /**
   * Description of product
   *
   */
  description: string;
  /**
   * Name of product
   *
   */
  name: string;
  /**
   * Additional information
   *
   */
  otherDetails?: string;
}
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  /**
   */
  key: string;
  /**
   */
  value: T;
}
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
  public get(path: '/store/contact'): Promise<MarketPlaceContact[]>;
  /**
   * MarketPlaceContact.contactId
   * Get contact details
   */
  public get(path: '/store/contact/{contactId}', params: {contactId: string}): Promise<MarketPlaceContact>;
  /**
   * MarketPlaceContact.doc
   * List document associated with contact
   */
  public get(path: '/store/contact/{contactId}/document', params: {contactId: string}): Promise<string[]>;
  /**
   * MarketPlaceDocument
   * List current customer documents
   */
  public get(path: '/store/document'): Promise<MarketPlaceDocument[]>;
  /**
   * MarketPlaceDocument.documentId
   * Get document info
   */
  public get(path: '/store/document/{documentId}', params: {documentId: string}): Promise<MarketPlaceDocument>;
  /**
   * MarketPlacePartner.search
   * List current customer partners
   */
  public get(path: '/store/partner'): Promise<MarketPlacePartner[]>;
  /**
   * MarketPlacePartner.get
   * Get partner info
   */
  public get(path: '/store/partner/{partnerId}', params: {partnerId: string}): Promise<MarketPlacePartner>;
  /**
   * MarketPlacePartner.doc
   * List document associated with partner
   */
  public get(path: '/store/partner/{partnerId}/document', params: {partnerId: string}): Promise<string[]>;
  /**
   * MarketPlacePartnerProduct.search
   * List partner's products
   */
  public get(path: '/store/partner/{partnerId}/product', params: {partnerId: string}): Promise<MarketPlacePartnerProduct[]>;
  /**
   * MarketPlacePartnerProduct.get
   * Get partner info
   */
  public get(path: '/store/partner/{partnerId}/product/{productId}', params: {partnerId: string, productId: string}): Promise<MarketPlacePartnerProduct>;
  /**
   * MarketPlacePartnerProduct.doc
   * List document associated with product
   */
  public get(path: '/store/partner/{partnerId}/product/{productId}/document', params: {partnerId: string, productId: string}): Promise<string[]>;
  public get(path: PathsStoreGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params
  );}
  /**
   * MarketPlaceContact.contactId
   * Edit contact information
   */
  public put(path: '/store/contact/{contactId}', params: {contactId: string, city?: string, country?: string, email?: string, firstname?: string, lastname?: string, phone?: string, province?: string, street?: string, title?: string, zip?: string}): Promise<MarketPlaceContact>;
  /**
   * MarketPlacePartner.get
   * Edit partner info
   */
  public put(path: '/store/partner/{partnerId}', params: {partnerId: string, category?: string, city?: string, companyNationalIdentificationNumber?: string, contact?: string, country?: string, description?: string, language?: string, legalForm?: string, organisationDisplayName?: string, organisationName?: string, otherDetails?: string, province?: string, street?: string, url?: string, vat?: string, zip?: string}): Promise<MarketPlacePartner>;
  /**
   * MarketPlacePartnerProduct.get
   * Edit product info
   */
  public put(path: '/store/partner/{partnerId}/product/{productId}', params: {partnerId: string, productId: string, category?: string, description?: string, name?: string, otherDetails?: string}): Promise<MarketPlacePartnerProduct>;
  public put(path: PathsStorePUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params
  );}
  /**
   * MarketPlaceContact
   * Create a 'marketplace' contact for current nic
   */
  public post(path: '/store/contact', params: {city?: string, country?: string, email: string, firstname: string, lastname: string, phone?: string, province?: string, street?: string, title: string, zip?: string}): Promise<MarketPlaceContact>;
  /**
   * MarketPlaceContact.doc
   * Add a document to a contact
   */
  public post(path: '/store/contact/{contactId}/document', params: {contactId: string, documentId: string}): Promise<string[]>;
  /**
   * MarketPlaceDocument
   * Create a document
   */
  public post(path: '/store/document', params: {name: string, tags?: ComplexTypeSafeKeyValue<string>[]}): Promise<MarketPlaceDocument>;
  /**
   * MarketPlaceDocument
   * Add CORS support on your container
   */
  public post(path: '/store/document/cors', params: {origin: string}): Promise<void>;
  /**
   * MarketPlacePartner.search
   * Create a 'marketplace' partner for current nic
   */
  public post(path: '/store/partner', params: {category?: string, city: string, companyNationalIdentificationNumber?: string, contact?: string, country: string, description?: string, language?: string, legalForm: string, organisationDisplayName?: string, organisationName: string, otherDetails?: string, province: string, street: string, url?: string, vat?: string, zip: string}): Promise<MarketPlacePartner>;
  /**
   * MarketPlacePartner.doc
   * Add a document to a partner
   */
  public post(path: '/store/partner/{partnerId}/document', params: {partnerId: string, documentId: string}): Promise<string[]>;
  /**
   * MarketPlacePartnerProduct.search
   * Create a new product for partner
   */
  public post(path: '/store/partner/{partnerId}/product', params: {partnerId: string, category: string, description: string, name: string, otherDetails?: string}): Promise<MarketPlacePartnerProduct>;
  /**
   * MarketPlacePartnerProduct.doc
   * Add a document to a product
   */
  public post(path: '/store/partner/{partnerId}/product/{productId}/document', params: {partnerId: string, productId: string, documentId: string}): Promise<string[]>;
  public post(path: PathsStorePOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params
  );}
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
    return super.delete(path, params
  );}
}
export default ApiStore;
