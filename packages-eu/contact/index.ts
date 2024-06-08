import { buildOvhProxy } from '@ovh-api/common';
import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /contact Models
 * Source: https://eu.api.ovh.com/1.0/contact.json
 */
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
export namespace contact {
    /**
     * Form characteristics
     * interface fullName: contact.FormCharacteristic.FormCharacteristic
     */
    export interface FormCharacteristic {
        keys: contact.KeyFormCharacteristic[];
        type: string;
    }
    /**
     * Form key description
     * interface fullName: contact.KeyFormCharacteristic.KeyFormCharacteristic
     */
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
 * Api model for /contact
 */
export interface Contact {
    form: {
        /**
         * Get form characteristics
         * GET /contact/form
         */
        $get(): Promise<contact.FormCharacteristic[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        send: {
            /**
             * Send form following characteristics of /contact/form
             * POST /contact/form/send
             */
            $post(params: { form: complexType.SafeKeyValue<string>[], type: string }): Promise<void>;
        }
    }
}
