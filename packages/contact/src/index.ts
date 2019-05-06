import { ApiCommon } from '@ovh-api/common';
/**
 * Form characteristics
 */
export interface ContactFormCharacteristic {
  /**
   * Form keys to send
   *
   */
  keys?: ContactKeyFormCharacteristic[];
  /**
   * Form type
   *
   */
  type?: string;
}
/**
 * Form key description
 */
export interface ContactKeyFormCharacteristic {
  /**
   * Key name
   *
   */
  key?: string;
  /**
   * Key required or not
   *
   */
  required?: boolean;
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
type PathscontactGET = '/contact/form';

type PathscontactPOST = '/contact/form/send';

class Apicontact extends ApiCommon {
  /**
  Get form characteristics
  Get form characteristics
  **/
  public get(path: '/contact/form', pathParams: null, queryParams: null): Promise<ContactFormCharacteristic[]>;
  public get(path: PathscontactGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Send form following characteristics of /contact/form
  Send form following characteristics of /contact/form
  **/
  public post(path: '/contact/form/send', pathParams: null, queryParams: null, bodyParams: null): Promise<void>;
  public post(path: PathscontactPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
}
