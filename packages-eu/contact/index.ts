import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /contact Models
 */
export namespace complexType {
    // interface fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
export namespace contact {
    // interface fullName: contact.FormCharacteristic.FormCharacteristic
    export interface FormCharacteristic {
        keys: contact.KeyFormCharacteristic[];
        type: string;
    }
    // interface fullName: contact.KeyFormCharacteristic.KeyFormCharacteristic
    export interface KeyFormCharacteristic {
        key: string;
        required: boolean;
    }
}

/**
 * END API /contact Models
 */
export function proxyContact(ovhEngine: OvhRequestable): Contact {
    return buildOvhProxy(ovhEngine, '/contact');
}
export default proxyContact;
/**
 * Api Proxy model
 */// Apis harmony
// path /contact
export interface Contact{
    form: {
        // GET /contact/form
        $get(): Promise<contact.FormCharacteristic[]>;
        send: {
            // POST /contact/form/send
            $post(params: {form: complexType.SafeKeyValue<string>[], type: string}): Promise<void>;
        }
    }
// Api
  /**
   * Get form characteristics
   * Get form characteristics
   */
  get(path: '/contact/form'): () => Promise<contact.FormCharacteristic[]>;
  /**
   * Send form following characteristics of /contact/form
   * Send form following characteristics of /contact/form
   */
  post(path: '/contact/form/send'): (params: {form: complexType.SafeKeyValue<string>[], type: string}) => Promise<void>;
}
