import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /sslGateway Models
 */
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
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
    //sslGateway.Domain
    // fullName: sslGateway.Domain.Domain
    export interface Domain {
        domain: string;
        id: number;
        state: sslGateway.DomainStateEnum;
    }
    //sslGateway.DomainStateEnum
    export type DomainStateEnum = "creating" | "deleted" | "deleting" | "http-only" | "internal" | "ok"
    //sslGateway.EligibilityStatus
    // fullName: sslGateway.EligibilityStatus.EligibilityStatus
    export interface EligibilityStatus {
        domain: string;
        ip6s: string[];
        ips: string[];
        isHostedByOvh: boolean;
    }
    //sslGateway.NatIps
    // fullName: sslGateway.NatIps.NatIps
    export interface NatIps {
        ip: string[];
        zone: string;
    }
    //sslGateway.OfferEnum
    export type OfferEnum = "advanced" | "enterprise" | "free" | "internal"
    //sslGateway.Server
    // fullName: sslGateway.Server.Server
    export interface Server {
        address: string;
        id: number;
        port: number;
        state: sslGateway.ServerStateEnum;
    }
    //sslGateway.ServerStateEnum
    export type ServerStateEnum = "creating" | "deleted" | "deleting" | "internal" | "ok" | "updating"
    //sslGateway.SslConfigurationEnum
    export type SslConfigurationEnum = "intermediate" | "internal" | "modern"
    //sslGateway.SslGateway
    // fullName: sslGateway.SslGateway.SslGateway
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
    //sslGateway.StateEnum
    export type StateEnum = "creating" | "deleted" | "deleting" | "http-only" | "internal" | "ok" | "suspended" | "upgrading"
    //sslGateway.Task
    // fullName: sslGateway.Task.Task
    export interface Task {
        action: sslGateway.TaskActionEnum;
        creationDate: string;
        id: number;
        progress: number;
        status: sslGateway.TaskStatusEnum;
    }
    //sslGateway.TaskActionEnum
    export type TaskActionEnum = "addDomain" | "addPaidCertificate" | "addServer" | "createService" | "deleteDomain" | "deleteServer" | "deleteService" | "internalTask" | "updateServer" | "updateService" | "upgrade"
    //sslGateway.TaskStatusEnum
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
        $get(param?: {domain: string}): Promise<sslGateway.EligibilityStatus>;
    }
    $(serviceName: string): {
        // GET /sslGateway/{serviceName}
        $get(): Promise<sslGateway.SslGateway>;
        // PUT /sslGateway/{serviceName}
        $put(body?: {body: sslGateway.SslGateway}): Promise<void>;
        changeContact: {
            // POST /sslGateway/{serviceName}/changeContact
            $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        confirmTermination: {
            // POST /sslGateway/{serviceName}/confirmTermination
            $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        domain: {
            // GET /sslGateway/{serviceName}/domain
            $get(): Promise<number[]>;
            // POST /sslGateway/{serviceName}/domain
            $post(body?: {domain: string}): Promise<sslGateway.Domain>;
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
            $post(body?: {domain?: string}): Promise<string[]>;
        }
        server: {
            // GET /sslGateway/{serviceName}/server
            $get(): Promise<number[]>;
            // POST /sslGateway/{serviceName}/server
            $post(body?: {address: string, port: number}): Promise<sslGateway.Server>;
            $(id: number): {
                // DELETE /sslGateway/{serviceName}/server/{id}
                $delete(): Promise<void>;
                // GET /sslGateway/{serviceName}/server/{id}
                $get(): Promise<sslGateway.Server>;
                // PUT /sslGateway/{serviceName}/server/{id}
                $put(body?: {body: sslGateway.Server}): Promise<void>;
            };
        }
        serviceInfos: {
            // GET /sslGateway/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /sslGateway/{serviceName}/serviceInfos
            $put(body?: {body: services.Service}): Promise<void>;
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
// Api
  /**
   * Operations about the SSLGATEWAY service
   * List available services
   */
  get(path: '/sslGateway'): () => Promise<string[]>;
  /**
   * Your SSL Gateway
   * Get this object properties
   */
  get(path: '/sslGateway/{serviceName}'): (params: {serviceName: string}) => Promise<sslGateway.SslGateway>;
  /**
   * List the sslGateway.Domain objects
   * Domains attached to your SSL Gateway
   */
  get(path: '/sslGateway/{serviceName}/domain'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Domain attached to an SSL Gateway
   * Get this object properties
   */
  get(path: '/sslGateway/{serviceName}/domain/{id}'): (params: {id: number, serviceName: string}) => Promise<sslGateway.Domain>;
  /**
   * natIp operations
   * Ip subnet used by OVH to nat requests to your SSL Gateway backends.
   */
  get(path: '/sslGateway/{serviceName}/natIp'): (params: {serviceName: string}) => Promise<sslGateway.NatIps[]>;
  /**
   * List the sslGateway.Server objects
   * Servers attached to your SSL Gateway
   */
  get(path: '/sslGateway/{serviceName}/server'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Server attached to an SSL Gateway
   * Get this object properties
   */
  get(path: '/sslGateway/{serviceName}/server/{id}'): (params: {id: number, serviceName: string}) => Promise<sslGateway.Server>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/sslGateway/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the sslGateway.Task objects
   * Task for this SSL Gateway
   */
  get(path: '/sslGateway/{serviceName}/task'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * SSL Gateway tasks
   * Get this object properties
   */
  get(path: '/sslGateway/{serviceName}/task/{id}'): (params: {id: number, serviceName: string}) => Promise<sslGateway.Task>;
  /**
   * List of zone available for an SSL Gateway
   * List of zone available for an SSL Gateway
   */
  get(path: '/sslGateway/availableZones'): () => Promise<string[]>;
  /**
   * Check domain eligibility. Return list of eligible IP(s) for this domain.
   * Check domain eligibility. Return list of eligible IP(s) for this domain.
   */
  get(path: '/sslGateway/eligibility'): (params: {domain: string}) => Promise<sslGateway.EligibilityStatus>;
  /**
   * Your SSL Gateway
   * Alter this object properties
   */
  put(path: '/sslGateway/{serviceName}'): (params: {serviceName: string, allowedSource?: string[], displayName?: string, hsts?: boolean, httpsRedirect?: boolean, ipv4?: string, ipv6?: string, metricsToken?: string, offer?: sslGateway.OfferEnum, reverse?: string, serverHttps?: boolean, sslConfiguration?: sslGateway.SslConfigurationEnum, state?: sslGateway.StateEnum, zones?: string[]}) => Promise<void>;
  /**
   * Server attached to an SSL Gateway
   * Alter this object properties
   */
  put(path: '/sslGateway/{serviceName}/server/{id}'): (params: {id: number, serviceName: string, address?: string, port?: number, state?: sslGateway.ServerStateEnum}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/sslGateway/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/sslGateway/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/sslGateway/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * List the sslGateway.Domain objects
   * Attach a new domain to your SSL Gateway
   */
  post(path: '/sslGateway/{serviceName}/domain'): (params: {serviceName: string, domain: string}) => Promise<sslGateway.Domain>;
  /**
   * renewCertificate operations
   * Renew your SSL certificates
   */
  post(path: '/sslGateway/{serviceName}/renewCertificate'): (params: {serviceName: string, domain?: string}) => Promise<string[]>;
  /**
   * List the sslGateway.Server objects
   * Add a new server to your SSL Gateway
   */
  post(path: '/sslGateway/{serviceName}/server'): (params: {serviceName: string, address: string, port: number}) => Promise<sslGateway.Server>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/sslGateway/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * Domain attached to an SSL Gateway
   * Detach a domain from your SSL Gateway
   */
  delete(path: '/sslGateway/{serviceName}/domain/{id}'): (params: {id: number, serviceName: string}) => Promise<void>;
  /**
   * Server attached to an SSL Gateway
   * Remove a server
   */
  delete(path: '/sslGateway/{serviceName}/server/{id}'): (params: {id: number, serviceName: string}) => Promise<void>;
}
/**
 * classic Model
 */