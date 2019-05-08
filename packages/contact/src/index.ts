import { ApiCommon, OvhEngine, OvhParamType } from '@ovh-api/common';
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
  constructor(engine: OvhEngine) {
    super(engine);
  }
  /**
  Get form characteristics
  Get form characteristics
  **/
  public get(path: '/contact/form'): Promise<ContactFormCharacteristic[]>;
  public get(path: PathsContactGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Send form following characteristics of /contact/form
  Send form following characteristics of /contact/form
  **/
  public post(path: '/contact/form/send'): Promise<void>;
  public post(path: PathsContactPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
}
