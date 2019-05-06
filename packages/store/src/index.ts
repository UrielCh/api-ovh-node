import { ApiCommon } from '@ovh-api/common';
/**
 * Contact information
 */
export interface MarketPlaceContact {
  /**
   * Zipcode
   *
   */
  zip?: string;
  /**
   * Country
   *
   */
  country?: string;
  /**
   * First name
   *
   */
  firstname?: string;
  /**
   * Province name
   *
   */
  province?: string;
  /**
   * City
   *
   */
  city?: string;
  /**
   * Phone number
   *
   */
  phone?: string;
  /**
   * Street address
   *
   */
  street?: string;
  /**
   * Unique identifier
   *
   */
  id?: string;
  /**
   * Title
   *
   */
  title?: string;
  /**
   * Email address
   *
   */
  email?: string;
  /**
   * Last name
   *
   */
  lastname?: string;
}
/**
 * Document
 */
export interface MarketPlaceDocument {
  /**
   * str
   *
   */
  getUrl?: string;
  /**
   * str
   *
   */
  size?: string;
  /**
   * str
   *
   */
  putUrl?: string;
  /**
   * str
   *
   */
  name?: string;
  /**
   * Unique identifier
   *
   */
  id?: string;
  /**
   * str
   *
   */
  creationDate?: string;
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
   * ZipCode
   *
   */
  zip?: string;
  /**
   * Country
   *
   */
  country?: string;
  /**
   * City
   *
   */
  city?: string;
  /**
   * Complementary information
   *
   */
  otherDetails?: string;
  /**
   * VAT number
   *
   */
  vat?: string;
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
   * Company national identification number
   *
   */
  companyNationalIdentificationNumber?: string;
  /**
   * Legal form
   *
   */
  legalForm?: string;
  /**
   * Website address
   *
   */
  url?: string;
  /**
   * Organisation name
   *
   */
  organisationName?: string;
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
   * str
   *
   */
  contact?: string;
  /**
   * Organisation display name
   *
   */
  organisationDisplayName?: string;
  /**
   * Category
   *
   */
  category?: string;
}
/**
 * product
 */
export interface MarketPlacePartnerProduct {
  /**
   * Additional information
   *
   */
  otherDetails?: string;
  /**
   * Name of product
   *
   */
  name?: string;
  /**
   * Description of product
   *
   */
  description?: string;
  /**
   * Name of product category
   *
   */
  category?: string;
}
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  /**
   */
  value?: T;
  /**
   */
  key?: string;
}
type PathsstoreGET = '/store/document' | 
'/store/document/{documentId}' | 
'/store/contact' | 
'/store/contact/{contactId}/document' | 
'/store/contact/{contactId}' | 
'/store/partner' | 
'/store/partner/{partnerId}' | 
'/store/partner/{partnerId}/product' | 
'/store/partner/{partnerId}/product/{productId}/document' | 
'/store/partner/{partnerId}/product/{productId}' | 
'/store/partner/{partnerId}/document';

type PathsstorePUT = '/store/contact/{contactId}' | 
'/store/partner/{partnerId}' | 
'/store/partner/{partnerId}/product/{productId}';

type PathsstorePOST = '/store/document' | 
'/store/document/cors' | 
'/store/contact' | 
'/store/contact/{contactId}/document' | 
'/store/partner' | 
'/store/partner/{partnerId}/product' | 
'/store/partner/{partnerId}/product/{productId}/document' | 
'/store/partner/{partnerId}/document';

type PathsstoreDELETE = '/store/document/{documentId}' | 
'/store/contact/{contactId}/document/{documentId}' | 
'/store/contact/{contactId}' | 
'/store/partner/{partnerId}' | 
'/store/partner/{partnerId}/product/{productId}/document/{documentId}' | 
'/store/partner/{partnerId}/product/{productId}' | 
'/store/partner/{partnerId}/document/{documentId}';

class Apistore extends ApiCommon {
  /**
  MarketPlaceDocument
  List current customer documents
  **/
  public get(path: '/store/document', pathParams: null, queryParams: null): Promise<MarketPlaceDocument[]>;
  /**
  MarketPlaceDocument.documentId
  Get document info
  **/
  public get(path: '/store/document/{documentId}', pathParams: {documentId?: string}, queryParams: null): Promise<MarketPlaceDocument>;
  /**
  MarketPlaceContact
  List current customer contacts
  **/
  public get(path: '/store/contact', pathParams: null, queryParams: null): Promise<MarketPlaceContact[]>;
  /**
  MarketPlaceContact.doc
  List document associated with contact
  **/
  public get(path: '/store/contact/{contactId}/document', pathParams: {contactId?: string}, queryParams: null): Promise<string[]>;
  /**
  MarketPlaceContact.contactId
  Get contact details
  **/
  public get(path: '/store/contact/{contactId}', pathParams: {contactId?: string}, queryParams: null): Promise<MarketPlaceContact>;
  /**
  MarketPlacePartner.search
  List current customer partners
  **/
  public get(path: '/store/partner', pathParams: null, queryParams: null): Promise<MarketPlacePartner[]>;
  /**
  MarketPlacePartner.get
  Get partner info
  **/
  public get(path: '/store/partner/{partnerId}', pathParams: {partnerId?: string}, queryParams: null): Promise<MarketPlacePartner>;
  /**
  MarketPlacePartnerProduct.search
  List partner's products
  **/
  public get(path: '/store/partner/{partnerId}/product', pathParams: {partnerId?: string}, queryParams: null): Promise<MarketPlacePartnerProduct[]>;
  /**
  MarketPlacePartnerProduct.doc
  List document associated with product
  **/
  public get(path: '/store/partner/{partnerId}/product/{productId}/document', pathParams: {partnerId?: string, productId?: string}, queryParams: null): Promise<string[]>;
  /**
  MarketPlacePartnerProduct.get
  Get partner info
  **/
  public get(path: '/store/partner/{partnerId}/product/{productId}', pathParams: {partnerId?: string, productId?: string}, queryParams: null): Promise<MarketPlacePartnerProduct>;
  /**
  MarketPlacePartner.doc
  List document associated with partner
  **/
  public get(path: '/store/partner/{partnerId}/document', pathParams: {partnerId?: string}, queryParams: null): Promise<string[]>;
  public get(path: PathsstoreGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  MarketPlaceContact.contactId
  Edit contact information
  **/
  public put(path: '/store/contact/{contactId}', pathParams: {contactId?: string}, bodyParams: null): Promise<MarketPlaceContact>;
  /**
  MarketPlacePartner.get
  Edit partner info
  **/
  public put(path: '/store/partner/{partnerId}', pathParams: {partnerId?: string}, bodyParams: null): Promise<MarketPlacePartner>;
  /**
  MarketPlacePartnerProduct.get
  Edit product info
  **/
  public put(path: '/store/partner/{partnerId}/product/{productId}', pathParams: {partnerId?: string, productId?: string}, bodyParams: null): Promise<MarketPlacePartnerProduct>;
  public put(path: PathsstorePUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  MarketPlaceDocument
  Create a document
  **/
  public post(path: '/store/document', pathParams: null, bodyParams: null): Promise<MarketPlaceDocument>;
  /**
  MarketPlaceDocument
  Add CORS support on your container
  **/
  public post(path: '/store/document/cors', pathParams: null, bodyParams: null): Promise<void>;
  /**
  MarketPlaceContact
  Create a 'marketplace' contact for current nic
  **/
  public post(path: '/store/contact', pathParams: null, bodyParams: null): Promise<MarketPlaceContact>;
  /**
  MarketPlaceContact.doc
  Add a document to a contact
  **/
  public post(path: '/store/contact/{contactId}/document', pathParams: {contactId?: string}, bodyParams: null): Promise<string[]>;
  /**
  MarketPlacePartner.search
  Create a 'marketplace' partner for current nic
  **/
  public post(path: '/store/partner', pathParams: null, bodyParams: null): Promise<MarketPlacePartner>;
  /**
  MarketPlacePartnerProduct.search
  Create a new product for partner
  **/
  public post(path: '/store/partner/{partnerId}/product', pathParams: {partnerId?: string}, bodyParams: null): Promise<MarketPlacePartnerProduct>;
  /**
  MarketPlacePartnerProduct.doc
  Add a document to a product
  **/
  public post(path: '/store/partner/{partnerId}/product/{productId}/document', pathParams: {partnerId?: string, productId?: string}, bodyParams: null): Promise<string[]>;
  /**
  MarketPlacePartner.doc
  Add a document to a partner
  **/
  public post(path: '/store/partner/{partnerId}/document', pathParams: {partnerId?: string}, bodyParams: null): Promise<string[]>;
  public post(path: PathsstorePOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  MarketPlaceDocument.documentId
  Delete document
  **/
  public delete(path: '/store/document/{documentId}', pathParams: {documentId?: string}, bodyParams: null): Promise<string>;
  /**
  MarketPlaceContact.doc_id
  Unlink a document from a contact
  **/
  public delete(path: '/store/contact/{contactId}/document/{documentId}', pathParams: {contactId?: string, documentId?: string}, bodyParams: null): Promise<string[]>;
  /**
  MarketPlaceContact.contactId
  Remove an existing contact
  **/
  public delete(path: '/store/contact/{contactId}', pathParams: {contactId?: string}, bodyParams: null): Promise<string>;
  /**
  MarketPlacePartner.get
  Delete partner
  **/
  public delete(path: '/store/partner/{partnerId}', pathParams: {partnerId?: string}, bodyParams: null): Promise<string>;
  /**
  MarketPlacePartnerProduct.doc_id
  Unlink a document from a product
  **/
  public delete(path: '/store/partner/{partnerId}/product/{productId}/document/{documentId}', pathParams: {partnerId?: string, productId?: string, documentId?: string}, bodyParams: null): Promise<string[]>;
  /**
  MarketPlacePartnerProduct.get
  Delete product
  **/
  public delete(path: '/store/partner/{partnerId}/product/{productId}', pathParams: {partnerId?: string, productId?: string}, bodyParams: null): Promise<string>;
  /**
  MarketPlacePartner.doc_id
  Unlink a document from a partner
  **/
  public delete(path: '/store/partner/{partnerId}/document/{documentId}', pathParams: {partnerId?: string, documentId?: string}, bodyParams: null): Promise<string[]>;
  public delete(path: PathsstoreDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
