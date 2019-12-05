import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /ssl Models
 */
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
}
export declare namespace services {
    interface Service {
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}
export declare namespace ssl {
    interface Certificate {
        authority: ssl.CertificateAuthorityEnum;
        certificate?: string;
        chain?: string;
        commonName: string;
        csr: string;
        serviceName: string;
        status: ssl.CertificateStatusEnum;
        subjectAltName: string[];
        type: ssl.CertificateTypeEnum;
        validityEnd?: string;
        validityStart?: string;
    }
    type CertificateAuthorityEnum = "comodo" | "sectigo";
    type CertificateStatusEnum = "creating" | "error" | "ok" | "validating";
    type CertificateTypeEnum = "DV" | "EV" | "OV";
    interface Operation {
        doneDate?: string;
        function: ssl.OperationFunctionEnum;
        lastUpdate: string;
        startDate: string;
        status: ssl.OperationStatusEnum;
        taskId: number;
    }
    type OperationFunctionEnum = "createCertificate";
    type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo";
}
/**
 * END API /ssl Models
 */
export declare function proxySsl(ovhEngine: OvhRequestable): Ssl;
export default proxySsl;
/**
 * Api Proxy model
 */ export interface Ssl {
    $get(): Promise<string[]>;
    $(serviceName: string): {
        $get(): Promise<ssl.Certificate>;
        serviceInfos: {
            $get(): Promise<services.Service>;
            $put(params?: {
                canDeleteAtExpiration?: boolean;
                contactAdmin?: string;
                contactBilling?: string;
                contactTech?: string;
                creation?: string;
                domain?: string;
                engagedUpTo?: string;
                expiration?: string;
                possibleRenewPeriod?: number[];
                renew?: service.RenewType;
                renewalType?: service.RenewalTypeEnum;
                serviceId?: number;
                status?: service.StateEnum;
            }): Promise<void>;
        };
        tasks: {
            $get(): Promise<number[]>;
            $(taskId: number): {
                $get(): Promise<ssl.Operation>;
            };
        };
    };
    /**
     * Operations about the SSL service
     * List available services
     */
    get(path: '/ssl'): () => Promise<string[]>;
    /**
     * Certificate of an SSL customer
     * Get this object properties
     */
    get(path: '/ssl/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<ssl.Certificate>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/ssl/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the ssl.Operation objects
     * Tasks associated to this ssl
     */
    get(path: '/ssl/{serviceName}/tasks'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Task on a SSL
     * Get this object properties
     */
    get(path: '/ssl/{serviceName}/tasks/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<ssl.Operation>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/ssl/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
}
