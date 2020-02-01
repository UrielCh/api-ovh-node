import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /sslGateway Models
 * Source: https://eu.api.ovh.com/1.0/sslGateway.json
 */
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    // type fullname: service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    // interface fullName: services.Service.Service
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
    // interface fullName: sslGateway.Domain.Domain
    export interface Domain {
        domain: string;
        id: number;
        state: sslGateway.DomainStateEnum;
    }
    // type fullname: sslGateway.DomainStateEnum
    export type DomainStateEnum = "creating" | "deleted" | "deleting" | "http-only" | "internal" | "ok"
    // interface fullName: sslGateway.EligibilityStatus.EligibilityStatus
    export interface EligibilityStatus {
        domain: string;
        ip6s: string[];
        ips: string[];
        isHostedByOvh: boolean;
    }
    // interface fullName: sslGateway.NatIps.NatIps
    export interface NatIps {
        ip: string[];
        zone: string;
    }
    // type fullname: sslGateway.OfferEnum
    export type OfferEnum = "advanced" | "enterprise" | "free" | "internal"
    // interface fullName: sslGateway.Server.Server
    export interface Server {
        address: string;
        id: number;
        port: number;
        state: sslGateway.ServerStateEnum;
    }
    // type fullname: sslGateway.ServerStateEnum
    export type ServerStateEnum = "creating" | "deleted" | "deleting" | "internal" | "ok" | "updating"
    // type fullname: sslGateway.SslConfigurationEnum
    export type SslConfigurationEnum = "intermediate" | "internal" | "modern"
    // interface fullName: sslGateway.SslGateway.SslGateway
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
    // type fullname: sslGateway.StateEnum
    export type StateEnum = "creating" | "deleted" | "deleting" | "http-only" | "internal" | "ok" | "suspended" | "upgrading"
    // interface fullName: sslGateway.Task.Task
    export interface Task {
        action: sslGateway.TaskActionEnum;
        creationDate: string;
        id: number;
        progress: number;
        status: sslGateway.TaskStatusEnum;
    }
    // type fullname: sslGateway.TaskActionEnum
    export type TaskActionEnum = "addDomain" | "addPaidCertificate" | "addServer" | "createService" | "deleteDomain" | "deleteServer" | "deleteService" | "internalTask" | "updateServer" | "updateService" | "upgrade"
    // type fullname: sslGateway.TaskStatusEnum
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
 * Api Proxy model
 */// Apis harmony
// path /sslGateway
export interface SslGateway{
    // GET /sslGateway
    $get(): Promise<string[]>;
    availableZones: {
        // GET /sslGateway/availableZones
        $get(): Promise<string[]>;
    }
    eligibility: {
        // GET /sslGateway/eligibility
        $get(params: {domain: string}): Promise<sslGateway.EligibilityStatus>;
    }
    $(serviceName: string): {
        // GET /sslGateway/{serviceName}
        $get(): Promise<sslGateway.SslGateway>;
        // PUT /sslGateway/{serviceName}
        $put(params?: {allowedSource?: string[], displayName?: string, hsts?: boolean, httpsRedirect?: boolean, ipv4?: string, ipv6?: string, metricsToken?: string, offer?: sslGateway.OfferEnum, reverse?: string, serverHttps?: boolean, serviceName?: string, sslConfiguration?: sslGateway.SslConfigurationEnum, state?: sslGateway.StateEnum, zones?: string[]}): Promise<void>;
        changeContact: {
            // POST /sslGateway/{serviceName}/changeContact
            $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        confirmTermination: {
            // POST /sslGateway/{serviceName}/confirmTermination
            $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        domain: {
            // GET /sslGateway/{serviceName}/domain
            $get(): Promise<number[]>;
            // POST /sslGateway/{serviceName}/domain
            $post(params: {domain: string}): Promise<sslGateway.Domain>;
            $(id: number): {
                // DELETE /sslGateway/{serviceName}/domain/{id}
                $delete(): Promise<void>;
                // GET /sslGateway/{serviceName}/domain/{id}
                $get(): Promise<sslGateway.Domain>;
            };
        }
        natIp: {
            // GET /sslGateway/{serviceName}/natIp
            $get(): Promise<sslGateway.NatIps[]>;
        }
        renewCertificate: {
            // POST /sslGateway/{serviceName}/renewCertificate
            $post(params?: {domain?: string}): Promise<string[]>;
        }
        server: {
            // GET /sslGateway/{serviceName}/server
            $get(): Promise<number[]>;
            // POST /sslGateway/{serviceName}/server
            $post(params: {address: string, port: number}): Promise<sslGateway.Server>;
            $(id: number): {
                // DELETE /sslGateway/{serviceName}/server/{id}
                $delete(): Promise<void>;
                // GET /sslGateway/{serviceName}/server/{id}
                $get(): Promise<sslGateway.Server>;
                // PUT /sslGateway/{serviceName}/server/{id}
                $put(params?: {address?: string, id?: number, port?: number, state?: sslGateway.ServerStateEnum}): Promise<void>;
            };
        }
        serviceInfos: {
            // GET /sslGateway/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /sslGateway/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        task: {
            // GET /sslGateway/{serviceName}/task
            $get(): Promise<number[]>;
            $(id: number): {
                // GET /sslGateway/{serviceName}/task/{id}
                $get(): Promise<sslGateway.Task>;
            };
        }
        terminate: {
            // POST /sslGateway/{serviceName}/terminate
            $post(): Promise<string>;
        }
    };
}
