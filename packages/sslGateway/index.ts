import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
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
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
export namespace sslGateway {
    //sslGateway.Domain
    // fullName: sslGateway.Domain.Domain
    export interface Domain {
        domain?: string;
        id?: number;
        state?: OVH.sslGateway.DomainStateEnum;
    }
    //sslGateway.DomainStateEnum
    export type DomainStateEnum = "creating" | "deleted" | "deleting" | "http-only" | "internal" | "ok"
    //sslGateway.EligibilityStatus
    // fullName: sslGateway.EligibilityStatus.EligibilityStatus
    export interface EligibilityStatus {
        domain?: string;
        ip6s?: string[];
        ips?: string[];
        isHostedByOvh?: boolean;
    }
    //sslGateway.NatIps
    // fullName: sslGateway.NatIps.NatIps
    export interface NatIps {
        ip?: string[];
        zone?: string;
    }
    //sslGateway.OfferEnum
    export type OfferEnum = "advanced" | "enterprise" | "free" | "internal"
    //sslGateway.Server
    // fullName: sslGateway.Server.Server
    export interface Server {
        address?: string;
        id?: number;
        port?: number;
        state?: OVH.sslGateway.ServerStateEnum;
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
        hsts?: boolean;
        httpsRedirect?: boolean;
        ipv4?: string;
        ipv6?: string;
        metricsToken?: string;
        offer?: OVH.sslGateway.OfferEnum;
        reverse?: string;
        serverHttps?: boolean;
        serviceName?: string;
        sslConfiguration?: OVH.sslGateway.SslConfigurationEnum;
        state?: OVH.sslGateway.StateEnum;
        zones?: string[];
    }
    //sslGateway.StateEnum
    export type StateEnum = "creating" | "deleted" | "deleting" | "http-only" | "internal" | "ok" | "suspended" | "upgrading"
    //sslGateway.Task
    // fullName: sslGateway.Task.Task
    export interface Task {
        action?: OVH.sslGateway.TaskActionEnum;
        creationDate?: string;
        id?: number;
        progress?: number;
        status?: OVH.sslGateway.TaskStatusEnum;
    }
    //sslGateway.TaskActionEnum
    export type TaskActionEnum = "addDomain" | "addPaidCertificate" | "addServer" | "createService" | "deleteDomain" | "deleteServer" | "deleteService" | "internalTask" | "updateServer" | "updateService" | "upgrade"
    //sslGateway.TaskStatusEnum
    export type TaskStatusEnum = "blocked" | "cancelled" | "doing" | "done" | "error" | "paused" | "todo"
}
// Apis harmony
// path /sslGateway
export interface SslGateway {
    // GET /sslGateway
    GET(): Promise<string[]>;
    [keys: string]: {
        // GET /sslGateway/{serviceName}
        GET(): Promise<sslGateway.SslGateway>;
        // PUT /sslGateway/{serviceName}
        PUT(body?: {body: sslGateway.SslGateway}): Promise<void>;
        renewCertificate:  {
            // POST /sslGateway/{serviceName}/renewCertificate
            POST(body?: {domain?: string}): Promise<string[]>;
        }
        server:  {
            // GET /sslGateway/{serviceName}/server
            GET(): Promise<number[]>;
            // POST /sslGateway/{serviceName}/server
            POST(body?: {address: string, port: number}): Promise<sslGateway.Server>;
            [keys: string]: {
                // GET /sslGateway/{serviceName}/server/{id}
                GET(): Promise<sslGateway.Server>;
                // PUT /sslGateway/{serviceName}/server/{id}
                PUT(body?: {body: sslGateway.Server}): Promise<void>;
                // DELETE /sslGateway/{serviceName}/server/{id}
                DELETE(): Promise<void>;
            } | any
        }
        changeContact:  {
            // POST /sslGateway/{serviceName}/changeContact
            POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
        }
        task:  {
            // GET /sslGateway/{serviceName}/task
            GET(): Promise<number[]>;
            [keys: string]: {
                // GET /sslGateway/{serviceName}/task/{id}
                GET(): Promise<sslGateway.Task>;
            } | any
        }
        domain:  {
            // GET /sslGateway/{serviceName}/domain
            GET(): Promise<number[]>;
            // POST /sslGateway/{serviceName}/domain
            POST(body?: {domain: string}): Promise<sslGateway.Domain>;
            [keys: string]: {
                // GET /sslGateway/{serviceName}/domain/{id}
                GET(): Promise<sslGateway.Domain>;
                // DELETE /sslGateway/{serviceName}/domain/{id}
                DELETE(): Promise<void>;
            } | any
        }
        serviceInfos:  {
            // GET /sslGateway/{serviceName}/serviceInfos
            GET(): Promise<services.Service>;
            // PUT /sslGateway/{serviceName}/serviceInfos
            PUT(body?: {body: services.Service}): Promise<void>;
        }
        natIp:  {
            // GET /sslGateway/{serviceName}/natIp
            GET(): Promise<sslGateway.NatIps[]>;
        }
        confirmTermination:  {
            // POST /sslGateway/{serviceName}/confirmTermination
            POST(body?: {futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, commentary?: string, token: string}): Promise<string>;
        }
        terminate:  {
            // POST /sslGateway/{serviceName}/terminate
            POST(): Promise<string>;
        }
    } | any
    availableZones:  {
        // GET /sslGateway/availableZones
        GET(): Promise<string[]>;
    }
    eligibility:  {
        // GET /sslGateway/eligibility
        GET(param?: {domain: string}): Promise<sslGateway.EligibilityStatus>;
    }
}
// Api
type PathsSslGatewayGET = '/sslGateway/{serviceName}/server' |
  '/sslGateway/{serviceName}/server/{id}' |
  '/sslGateway/{serviceName}/task' |
  '/sslGateway/{serviceName}/task/{id}' |
  '/sslGateway/{serviceName}/domain' |
  '/sslGateway/{serviceName}/domain/{id}' |
  '/sslGateway/{serviceName}/serviceInfos' |
  '/sslGateway/{serviceName}/natIp' |
  '/sslGateway/{serviceName}' |
  '/sslGateway/availableZones' |
  '/sslGateway' |
  '/sslGateway/eligibility';

type PathsSslGatewayPUT = '/sslGateway/{serviceName}/server/{id}' |
  '/sslGateway/{serviceName}/serviceInfos' |
  '/sslGateway/{serviceName}';

type PathsSslGatewayPOST = '/sslGateway/{serviceName}/renewCertificate' |
  '/sslGateway/{serviceName}/server' |
  '/sslGateway/{serviceName}/changeContact' |
  '/sslGateway/{serviceName}/domain' |
  '/sslGateway/{serviceName}/confirmTermination' |
  '/sslGateway/{serviceName}/terminate';

type PathsSslGatewayDELETE = '/sslGateway/{serviceName}/server/{id}' |
  '/sslGateway/{serviceName}/domain/{id}';

export class ApiSslGateway extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the SSLGATEWAY service
   * List available services
   */
  public get(path: '/sslGateway'): Promise<string[]>;
  /**
   * Your SSL Gateway
   * Get this object properties
   */
  public get(path: '/sslGateway/{serviceName}', params: {serviceName: string}): Promise<sslGateway.SslGateway>;
  /**
   * List the sslGateway.Domain objects
   * Domains attached to your SSL Gateway
   */
  public get(path: '/sslGateway/{serviceName}/domain', params: {serviceName: string}): Promise<number[]>;
  /**
   * Domain attached to an SSL Gateway
   * Get this object properties
   */
  public get(path: '/sslGateway/{serviceName}/domain/{id}', params: {serviceName: string, id: string}): Promise<sslGateway.Domain>;
  /**
   * natIp operations
   * Ip subnet used by OVH to nat requests to your SSL Gateway backends.
   */
  public get(path: '/sslGateway/{serviceName}/natIp', params: {serviceName: string}): Promise<sslGateway.NatIps[]>;
  /**
   * List the sslGateway.Server objects
   * Servers attached to your SSL Gateway
   */
  public get(path: '/sslGateway/{serviceName}/server', params: {serviceName: string}): Promise<number[]>;
  /**
   * Server attached to an SSL Gateway
   * Get this object properties
   */
  public get(path: '/sslGateway/{serviceName}/server/{id}', params: {serviceName: string, id: string}): Promise<sslGateway.Server>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/sslGateway/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the sslGateway.Task objects
   * Task for this SSL Gateway
   */
  public get(path: '/sslGateway/{serviceName}/task', params: {serviceName: string}): Promise<number[]>;
  /**
   * SSL Gateway tasks
   * Get this object properties
   */
  public get(path: '/sslGateway/{serviceName}/task/{id}', params: {serviceName: string, id: string}): Promise<sslGateway.Task>;
  /**
   * List of zone available for an SSL Gateway
   * List of zone available for an SSL Gateway
   */
  public get(path: '/sslGateway/availableZones'): Promise<string[]>;
  /**
   * Check domain eligibility. Return list of eligible IP(s) for this domain.
   * Check domain eligibility. Return list of eligible IP(s) for this domain.
   */
  public get(path: '/sslGateway/eligibility', params: {domain: string}): Promise<sslGateway.EligibilityStatus>;
  public get(path: PathsSslGatewayGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Your SSL Gateway
   * Alter this object properties
   */
  public put(path: '/sslGateway/{serviceName}', params: {serviceName: string, allowedSource?: string[], displayName?: string, hsts?: boolean, httpsRedirect?: boolean, ipv4?: string, ipv6?: string, metricsToken?: string, offer?: OVH.sslGateway.OfferEnum, reverse?: string, serverHttps?: boolean, sslConfiguration?: OVH.sslGateway.SslConfigurationEnum, state?: OVH.sslGateway.StateEnum, zones?: string[]}): Promise<void>;
  /**
   * Server attached to an SSL Gateway
   * Alter this object properties
   */
  public put(path: '/sslGateway/{serviceName}/server/{id}', params: {serviceName: string, id: string, address?: string, port?: number, state?: OVH.sslGateway.ServerStateEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/sslGateway/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsSslGatewayPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/sslGateway/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/sslGateway/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * List the sslGateway.Domain objects
   * Attach a new domain to your SSL Gateway
   */
  public post(path: '/sslGateway/{serviceName}/domain', params: {serviceName: string, domain: string}): Promise<sslGateway.Domain>;
  /**
   * renewCertificate operations
   * Renew your SSL certificates
   */
  public post(path: '/sslGateway/{serviceName}/renewCertificate', params: {serviceName: string, domain?: string}): Promise<string[]>;
  /**
   * List the sslGateway.Server objects
   * Add a new server to your SSL Gateway
   */
  public post(path: '/sslGateway/{serviceName}/server', params: {serviceName: string, address: string, port: number}): Promise<sslGateway.Server>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/sslGateway/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsSslGatewayPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Domain attached to an SSL Gateway
   * Detach a domain from your SSL Gateway
   */
  public delete(path: '/sslGateway/{serviceName}/domain/{id}', params: {serviceName: string, id: string}): Promise<void>;
  /**
   * Server attached to an SSL Gateway
   * Remove a server
   */
  public delete(path: '/sslGateway/{serviceName}/server/{id}', params: {serviceName: string, id: string}): Promise<void>;
  public delete(path: PathsSslGatewayDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}