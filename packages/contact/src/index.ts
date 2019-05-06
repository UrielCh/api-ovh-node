import { ApiCommon } from '@ovh-api/common';
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
type PathsContactGET = '/contact/form';

type PathsContactPOST = '/contact/form/send';

export class ApiContact extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Get form characteristics
  Get form characteristics
  **/
  public get(path: '/contact/form'): Promise<ContactFormCharacteristic[]>;
  public get(path: PathsContactGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Send form following characteristics of /contact/form
  Send form following characteristics of /contact/form
  **/
  public post(path: '/contact/form/send'): Promise<void>;
  public post(path: PathsContactPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}
