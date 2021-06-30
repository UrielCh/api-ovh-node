import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /sslGateway Models
 * Source: https://ca.api.ovh.com/1.0/sslGateway.json
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
    /**
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
export namespace sslGateway {
    /**
     * Domain attached to an SSL Gateway
     * interface fullName: sslGateway.Domain.Domain
     */
    export interface Domain {
        domain: string;
        id: number;
        state: sslGateway.DomainStateEnum;
    }
    /**
     * Possible values for SSL Gateway domain state
     * type fullname: sslGateway.DomainStateEnum
     */
    export type DomainStateEnum = "creating" | "deleted" | "deleting" | "http-only" | "internal" | "ok"
    /**
     * A structure describing the eligibility status of a domain
     * interface fullName: sslGateway.EligibilityStatus.EligibilityStatus
     */
    export interface EligibilityStatus {
        domain: string;
        ip6s: string[];
        ips: string[];
        isHostedByOvh: boolean;
    }
    /**
     * a list of {zone, nat Ip}
     * interface fullName: sslGateway.NatIps.NatIps
     */
    export interface NatIps {
        ip: string[];
        zone: string;
    }
    /**
     * List of SSL Gateway offers
     * type fullname: sslGateway.OfferEnum
     */
    export type OfferEnum = "advanced" | "enterprise" | "free" | "internal"
    /**
     * Server attached to an SSL Gateway
     * interface fullName: sslGateway.Server.Server
     */
    export interface Server {
        address: string;
        id: number;
        port: number;
        state: sslGateway.ServerStateEnum;
    }
    /**
     * Possible values for SSL Gateway server state
     * type fullname: sslGateway.ServerStateEnum
     */
    export type ServerStateEnum = "creating" | "deleted" | "deleting" | "internal" | "ok" | "updating"
    /**
     * Possible values for ssl ciphers
     * type fullname: sslGateway.SslConfigurationEnum
     */
    export type SslConfigurationEnum = "intermediate" | "internal" | "modern"
    /**
     * Your SSL Gateway
     * interface fullName: sslGateway.SslGateway.SslGateway
     */
    export interface SslGateway {
        allowedSource?: string[];
        displayName?: string;
        hsts: boolean;
        httpsRedirect: boolean;
        ipv4: string;
        ipv6?: string;
        metricsToken?: string;
        offer: sslGateway.OfferEnum;
        reverse?: string;
        serverHttps: boolean;
        serviceName: string;
        sslConfiguration?: sslGateway.SslConfigurationEnum;
        state: sslGateway.StateEnum;
        zones: string[];
    }
    /**
     * Possible values for SSL Gateway state
     * type fullname: sslGateway.StateEnum
     */
    export type StateEnum = "creating" | "deleted" | "deleting" | "http-only" | "internal" | "ok" | "suspended" | "upgrading"
    /**
     * SSL Gateway tasks
     * interface fullName: sslGateway.Task.Task
     */
    export interface Task {
        action: sslGateway.TaskActionEnum;
        creationDate: string;
        id: number;
        progress: number;
        status: sslGateway.TaskStatusEnum;
    }
    /**
     * Possible task action
     * type fullname: sslGateway.TaskActionEnum
     */
    export type TaskActionEnum = "addDomain" | "addPaidCertificate" | "addServer" | "createService" | "deleteDomain" | "deleteServer" | "deleteService" | "internalTask" | "updateServer" | "updateService" | "upgrade"
    /**
     * Possible task status
     * type fullname: sslGateway.TaskStatusEnum
     */
    export type TaskStatusEnum = "blocked" | "cancelled" | "doing" | "done" | "error" | "paused" | "todo"
}

/**
 * END API /sslGateway Models
 */
export function proxySslGateway(ovhEngine: OvhRequestable): SslGateway {
    return buildOvhProxy(ovhEngine, '/sslGateway');
}
export default proxySslGateway;
/**
 * Api model for /sslGateway
 */
export interface SslGateway {
    /**
     * List available services
     * GET /sslGateway
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    availableZones: {
        /**
         * List of zone available for an SSL Gateway
         * GET /sslGateway/availableZones
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    eligibility: {
        /**
         * Check domain eligibility. Return list of eligible IP(s) for this domain.
         * GET /sslGateway/eligibility
         */
        $get(params: { domain: string }): Promise<sslGateway.EligibilityStatus>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /sslGateway/{serviceName}
         */
        $get(): Promise<sslGateway.SslGateway>;
        /**
         * Alter this object properties
         * PUT /sslGateway/{serviceName}
         */
        $put(params?: { allowedSource?: string[], displayName?: string, hsts?: boolean, httpsRedirect?: boolean, ipv4?: string, ipv6?: string, metricsToken?: string, offer?: sslGateway.OfferEnum, reverse?: string, serverHttps?: boolean, serviceName?: string, sslConfiguration?: sslGateway.SslConfigurationEnum, state?: sslGateway.StateEnum, zones?: string[] }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /sslGateway/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
        }
        confirmTermination: {
            /**
             * Confirm termination of your service
             * POST /sslGateway/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
        }
        domain: {
            /**
             * Domains attached to your SSL Gateway
             * GET /sslGateway/{serviceName}/domain
             */
            $get(): Promise<number[]>;
            /**
             * Attach a new domain to your SSL Gateway
             * POST /sslGateway/{serviceName}/domain
             */
            $post(params: { domain: string }): Promise<sslGateway.Domain>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Detach a domain from your SSL Gateway
                 * DELETE /sslGateway/{serviceName}/domain/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /sslGateway/{serviceName}/domain/{id}
                 */
                $get(): Promise<sslGateway.Domain>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        natIp: {
            /**
             * Ip subnet used by OVH to nat requests to your SSL Gateway backends.
             * GET /sslGateway/{serviceName}/natIp
             */
            $get(): Promise<sslGateway.NatIps[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        renewCertificate: {
            /**
             * Renew your SSL certificates
             * POST /sslGateway/{serviceName}/renewCertificate
             */
            $post(params?: { domain?: string }): Promise<string[]>;
        }
        server: {
            /**
             * Servers attached to your SSL Gateway
             * GET /sslGateway/{serviceName}/server
             */
            $get(): Promise<number[]>;
            /**
             * Add a new server to your SSL Gateway
             * POST /sslGateway/{serviceName}/server
             */
            $post(params: { address: string, port: number }): Promise<sslGateway.Server>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Remove a server
                 * DELETE /sslGateway/{serviceName}/server/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /sslGateway/{serviceName}/server/{id}
                 */
                $get(): Promise<sslGateway.Server>;
                /**
                 * Alter this object properties
                 * PUT /sslGateway/{serviceName}/server/{id}
                 */
                $put(params?: { address?: string, id?: number, port?: number, state?: sslGateway.ServerStateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /sslGateway/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /sslGateway/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        task: {
            /**
             * Task for this SSL Gateway
             * GET /sslGateway/{serviceName}/task
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /sslGateway/{serviceName}/task/{id}
                 */
                $get(): Promise<sslGateway.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        terminate: {
            /**
             * Terminate your service
             * POST /sslGateway/{serviceName}/terminate
             */
            $post(): Promise<string>;
        }
    };
}
