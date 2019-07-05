import { OvhWrapper, OvhRequestable, OvhParamType, buildOvhProxy } from '@ovh-api/common';

export namespace complexType {
    //complexType.SafeKeyValue
    // fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
export namespace contact {
    //contact.FormCharacteristic
    // fullName: contact.FormCharacteristic.FormCharacteristic
    export interface FormCharacteristic {
        keys: contact.KeyFormCharacteristic[];
        type: string;
    }
    //contact.KeyFormCharacteristic
    // fullName: contact.KeyFormCharacteristic.KeyFormCharacteristic
    export interface KeyFormCharacteristic {
        key: string;
        required: boolean;
    }
}
export function proxyContact(ovhEngine: OvhRequestable): Contact {
    return buildOvhProxy(ovhEngine, '/contact');
}
// Apis harmony
// path /contact
export interface Contact{
    form: {
        // GET /contact/form
        $get(): Promise<contact.FormCharacteristic[]>;
        send: {
            // POST /contact/form/send
            $post(body?: {form: complexType.SafeKeyValue<string>[], type: string}): Promise<void>;
        }
    }
}
// Api
type PathsContactGET = '/contact/form';

type PathsContactPOST = '/contact/form/send';

export class ApiContact extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Get form characteristics
   * Get form characteristics
   */
  public get(path: '/contact/form'): Promise<contact.FormCharacteristic[]>;
  public get(path: PathsContactGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Send form following characteristics of /contact/form
   * Send form following characteristics of /contact/form
   */
  public post(path: '/contact/form/send', params: {form: complexType.SafeKeyValue<string>[], type: string}): Promise<void>;
  public post(path: PathsContactPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
export default ApiContact;
