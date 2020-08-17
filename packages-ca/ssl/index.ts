import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /ssl Models
 * Source: https://ca.api.ovh.com/1.0/ssl.json
 */
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
    export interface Service {
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
export namespace ssl {
    /**
     * Certificate of an SSL customer
     * interface fullName: ssl.Certificate.Certificate
     */
    export interface Certificate {
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
    /**
     * All authority a SSL certificate can be issued from
     * type fullname: ssl.CertificateAuthorityEnum
     */
    export type CertificateAuthorityEnum = "comodo" | "sectigo"
    /**
     * All status a SSL certificate can be in
     * type fullname: ssl.CertificateStatusEnum
     */
    export type CertificateStatusEnum = "creating" | "error" | "ok" | "validating"
    /**
     * All type a SSL certificate can be
     * type fullname: ssl.CertificateTypeEnum
     */
    export type CertificateTypeEnum = "DV" | "EV" | "OV"
    /**
     * Task on a SSL
     * interface fullName: ssl.Operation.Operation
     */
    export interface Operation {
        doneDate?: string;
        function: ssl.OperationFunctionEnum;
        lastUpdate: string;
        startDate: string;
        status: ssl.OperationStatusEnum;
        taskId: number;
    }
    /**
     * All functions a SSL operation can handle
     * type fullname: ssl.OperationFunctionEnum
     */
    export type OperationFunctionEnum = "createCertificate"
    /**
     * All status a SSL operation can be in
     * type fullname: ssl.OperationStatusEnum
     */
    export type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
}

/**
 * END API /ssl Models
 */
export function proxySsl(ovhEngine: OvhRequestable): Ssl {
    return buildOvhProxy(ovhEngine, '/ssl');
}
export default proxySsl;
/**
 * Api model for /ssl
 */
export interface Ssl {
    /**
     * List available services
     * GET /ssl
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /ssl/{serviceName}
         */
        $get(): Promise<ssl.Certificate>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        serviceInfos: {
            /**
             * Get this object properties
             * GET /ssl/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /ssl/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        tasks: {
            /**
             * Tasks associated to this ssl
             * GET /ssl/{serviceName}/tasks
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: number): {
                /**
                 * Get this object properties
                 * GET /ssl/{serviceName}/tasks/{taskId}
                 */
                $get(): Promise<ssl.Operation>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    };
}
