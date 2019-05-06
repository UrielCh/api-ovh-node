import { ApiCommon } from '@ovh-api/common';
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
  email?: string;
  /**
   * First name
   *
   */
  firstname?: string;
  /**
   * Unique identifier
   *
   */
  id?: string;
  /**
   * Last name
   *
   */
  lastname?: string;
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
  title?: string;
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
  id?: string;
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
  category?: string;
  /**
   * Description of product
   *
   */
  description?: string;
  /**
   * Name of product
   *
   */
  name?: string;
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
  key?: string;
  /**
   */
  value?: T;
}
type PathsStoreGET = '/store/contact' | 
'/store/contact/{contactId}' | 
'/store/contact/{contactId}/document' | 
'/store/document/{documentId}' | 
'/store/document' | 
'/store/partner/{partnerId}/product' | 
'/store/partner/{partnerId}/product/{productId}/document' | 
'/store/partner/{partnerId}/product/{productId}' | 
'/store/partner/{partnerId}/document' | 
'/store/partner/{partnerId}' | 
'/store/partner';

type PathsStorePUT = '/store/contact/{contactId}' | 
'/store/partner/{partnerId}/product/{productId}' | 
'/store/partner/{partnerId}';

type PathsStorePOST = '/store/contact' | 
'/store/contact/{contactId}/document' | 
'/store/document/cors' | 
'/store/document' | 
'/store/partner/{partnerId}/product' | 
'/store/partner/{partnerId}/product/{productId}/document' | 
'/store/partner/{partnerId}/document' | 
'/store/partner';

type PathsStoreDELETE = '/store/contact/{contactId}' | 
'/store/contact/{contactId}/document/{documentId}' | 
'/store/document/{documentId}' | 
'/store/partner/{partnerId}/product/{productId}/document/{documentId}' | 
'/store/partner/{partnerId}/product/{productId}' | 
'/store/partner/{partnerId}/document/{documentId}' | 
'/store/partner/{partnerId}';

export class ApiStore extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  MarketPlaceContact
  List current customer contacts
  **/
  public get(path: '/store/contact'): Promise<MarketPlaceContact[]>;
  /**
  MarketPlaceContact.contactId
  Get contact details
  **/
  public get(path: '/store/contact/{contactId}', pathParams: {contactId: string}): Promise<MarketPlaceContact>;
  /**
  MarketPlaceContact.doc
  List document associated with contact
  **/
  public get(path: '/store/contact/{contactId}/document', pathParams: {contactId: string}): Promise<string[]>;
  /**
  MarketPlaceDocument.documentId
  Get document info
  **/
  public get(path: '/store/document/{documentId}', pathParams: {documentId: string}): Promise<MarketPlaceDocument>;
  /**
  MarketPlaceDocument
  List current customer documents
  **/
  public get(path: '/store/document'): Promise<MarketPlaceDocument[]>;
  /**
  MarketPlacePartnerProduct.search
  List partner's products
  **/
  public get(path: '/store/partner/{partnerId}/product', pathParams: {partnerId: string}): Promise<MarketPlacePartnerProduct[]>;
  /**
  MarketPlacePartnerProduct.doc
  List document associated with product
  **/
  public get(path: '/store/partner/{partnerId}/product/{productId}/document', pathParams: {partnerId: string, productId: string}): Promise<string[]>;
  /**
  MarketPlacePartnerProduct.get
  Get partner info
  **/
  public get(path: '/store/partner/{partnerId}/product/{productId}', pathParams: {partnerId: string, productId: string}): Promise<MarketPlacePartnerProduct>;
  /**
  MarketPlacePartner.doc
  List document associated with partner
  **/
  public get(path: '/store/partner/{partnerId}/document', pathParams: {partnerId: string}): Promise<string[]>;
  /**
  MarketPlacePartner.get
  Get partner info
  **/
  public get(path: '/store/partner/{partnerId}', pathParams: {partnerId: string}): Promise<MarketPlacePartner>;
  /**
  MarketPlacePartner.search
  List current customer partners
  **/
  public get(path: '/store/partner'): Promise<MarketPlacePartner[]>;
  public get(path: PathsStoreGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  MarketPlaceContact.contactId
  Edit contact information
  **/
  public put(path: '/store/contact/{contactId}', pathParams: {contactId: string}): Promise<MarketPlaceContact>;
  /**
  MarketPlacePartnerProduct.get
  Edit product info
  **/
  public put(path: '/store/partner/{partnerId}/product/{productId}', pathParams: {partnerId: string, productId: string}): Promise<MarketPlacePartnerProduct>;
  /**
  MarketPlacePartner.get
  Edit partner info
  **/
  public put(path: '/store/partner/{partnerId}', pathParams: {partnerId: string}): Promise<MarketPlacePartner>;
  public put(path: PathsStorePUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  MarketPlaceContact
  Create a 'marketplace' contact for current nic
  **/
  public post(path: '/store/contact'): Promise<MarketPlaceContact>;
  /**
  MarketPlaceContact.doc
  Add a document to a contact
  **/
  public post(path: '/store/contact/{contactId}/document', pathParams: {contactId: string}): Promise<string[]>;
  /**
  MarketPlaceDocument
  Add CORS support on your container
  **/
  public post(path: '/store/document/cors'): Promise<void>;
  /**
  MarketPlaceDocument
  Create a document
  **/
  public post(path: '/store/document'): Promise<MarketPlaceDocument>;
  /**
  MarketPlacePartnerProduct.search
  Create a new product for partner
  **/
  public post(path: '/store/partner/{partnerId}/product', pathParams: {partnerId: string}): Promise<MarketPlacePartnerProduct>;
  /**
  MarketPlacePartnerProduct.doc
  Add a document to a product
  **/
  public post(path: '/store/partner/{partnerId}/product/{productId}/document', pathParams: {partnerId: string, productId: string}): Promise<string[]>;
  /**
  MarketPlacePartner.doc
  Add a document to a partner
  **/
  public post(path: '/store/partner/{partnerId}/document', pathParams: {partnerId: string}): Promise<string[]>;
  /**
  MarketPlacePartner.search
  Create a 'marketplace' partner for current nic
  **/
  public post(path: '/store/partner'): Promise<MarketPlacePartner>;
  public post(path: PathsStorePOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  MarketPlaceContact.contactId
  Remove an existing contact
  **/
  public delete(path: '/store/contact/{contactId}', pathParams: {contactId: string}): Promise<string>;
  /**
  MarketPlaceContact.doc_id
  Unlink a document from a contact
  **/
  public delete(path: '/store/contact/{contactId}/document/{documentId}', pathParams: {contactId: string, documentId: string}): Promise<string[]>;
  /**
  MarketPlaceDocument.documentId
  Delete document
  **/
  public delete(path: '/store/document/{documentId}', pathParams: {documentId: string}): Promise<string>;
  /**
  MarketPlacePartnerProduct.doc_id
  Unlink a document from a product
  **/
  public delete(path: '/store/partner/{partnerId}/product/{productId}/document/{documentId}', pathParams: {partnerId: string, productId: string, documentId: string}): Promise<string[]>;
  /**
  MarketPlacePartnerProduct.get
  Delete product
  **/
  public delete(path: '/store/partner/{partnerId}/product/{productId}', pathParams: {partnerId: string, productId: string}): Promise<string>;
  /**
  MarketPlacePartner.doc_id
  Unlink a document from a partner
  **/
  public delete(path: '/store/partner/{partnerId}/document/{documentId}', pathParams: {partnerId: string, documentId: string}): Promise<string[]>;
  /**
  MarketPlacePartner.get
  Delete partner
  **/
  public delete(path: '/store/partner/{partnerId}', pathParams: {partnerId: string}): Promise<string>;
  public delete(path: PathsStoreDELETE, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
