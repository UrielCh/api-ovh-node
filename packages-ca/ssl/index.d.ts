import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /ssl Models
 * Source: https://ca.api.ovh.com/1.0/ssl.json
 */
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
    }
}
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
     * All authorities from which an SSL certificate can be issued
     * type fullname: ssl.CertificateAuthorityEnum
     */
    export type CertificateAuthorityEnum = "comodo" | "sectigo"
    /**
     * All statuses an SSL certificate can be in
     * type fullname: ssl.CertificateStatusEnum
     */
    export type CertificateStatusEnum = "creating" | "error" | "ok" | "validating"
    /**
     * All types an SSL certificate can be
     * type fullname: ssl.CertificateTypeEnum
     */
    export type CertificateTypeEnum = "DV" | "EV" | "OV"
    /**
     * Certificate of an SSL customer
     * interface fullName: ssl.CertificateWithIAM.CertificateWithIAM
     */
    export interface CertificateWithIAM {
        authority: ssl.CertificateAuthorityEnum;
        certificate?: string;
        chain?: string;
        commonName: string;
        csr: string;
        iam?: iam.ResourceMetadata;
        serviceName: string;
        status: ssl.CertificateStatusEnum;
        subjectAltName: string[];
        type: ssl.CertificateTypeEnum;
        validityEnd?: string;
        validityStart?: string;
    }
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
     * All functions an SSL operation can handle
     * type fullname: ssl.OperationFunctionEnum
     */
    export type OperationFunctionEnum = "acme_order_certificate" | "sectigo_deliver_certificate" | "sectigo_deliver_certificate_from_api" | "sectigo_order_certificate"
    /**
     * All statuses an SSL operation can be in
     * type fullname: ssl.OperationStatusEnum
     */
    export type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
}
/**
 * Api model for /ssl
 */
export interface Ssl {
    /**
     * List SSL
     * GET /ssl
     */
    $get(params?: { iamTags?: any }): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): void;
    $(serviceName: string): {
        /**
         * Get SSL details
         * GET /ssl/{serviceName}
         */
        $get(): Promise<ssl.Certificate>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        serviceInfos: {
            /**
             * Get service information
             * GET /ssl/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Update service information
             * PUT /ssl/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        tasks: {
            /**
             * List tasks of an SSL
             * GET /ssl/{serviceName}/tasks
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(taskId: number): {
                /**
                 * Get a task of an SSL
                 * GET /ssl/{serviceName}/tasks/{taskId}
                 */
                $get(): Promise<ssl.Operation>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            };
        }
    };
}

export declare function proxySsl(ovhEngine: OvhRequestable): Ssl;
export default proxySsl;
