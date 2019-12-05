import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /contact Models
 */
export declare namespace complexType {
    interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
export declare namespace contact {
    interface FormCharacteristic {
        keys: contact.KeyFormCharacteristic[];
        type: string;
    }
    interface KeyFormCharacteristic {
        key: string;
        required: boolean;
    }
}
/**
 * END API /contact Models
 */
export declare function proxyContact(ovhEngine: OvhRequestable): Contact;
export default proxyContact;
/**
 * Api Proxy model
 */ export interface Contact {
    form: {
        $get(): Promise<contact.FormCharacteristic[]>;
        send: {
            $post(params: {
                form: complexType.SafeKeyValue<string>[];
                type: string;
            }): Promise<void>;
        };
    };
    /**
     * Get form characteristics
     * Get form characteristics
     */
    get(path: '/contact/form'): () => Promise<contact.FormCharacteristic[]>;
    /**
     * Send form following characteristics of /contact/form
     * Send form following characteristics of /contact/form
     */
    post(path: '/contact/form/send'): (params: {
        form: complexType.SafeKeyValue<string>[];
        type: string;
    }) => Promise<void>;
}
