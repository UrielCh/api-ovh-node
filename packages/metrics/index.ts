import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace metrics {
    export namespace api {
        //metrics.api.Consumption
        // fullName: metrics.api.Consumption.Consumption
        export interface Consumption {
            ddp: number;
            mads: number;
        }
        //metrics.api.Label
        // fullName: metrics.api.Label.Label
        export interface Label {
            key: string;
            value: string;
        }
        //metrics.api.OfferTypeEnum
        export type OfferTypeEnum = "cloud" | "live"
        //metrics.api.Option
        // fullName: metrics.api.Option.Option
        export interface Option {
            ddp: number;
            lastModification: string;
            mads: number;
        }
        //metrics.api.PermissionEnum
        export type PermissionEnum = "read" | "write"
        //metrics.api.Region
        // fullName: metrics.api.Region.Region
        export interface Region {
            description: string;
            name: string;
        }
        //metrics.api.Service
        // fullName: metrics.api.Service.Service
        export interface Service {
            description: string;
            name: string;
            offer: string;
            quota: OVH.metrics.api.Option;
            region: OVH.metrics.api.Region;
            shouldUpgrade: boolean;
            status: OVH.metrics.api.ServiceStatusEnum;
            type: OVH.metrics.api.OfferTypeEnum;
        }
        //metrics.api.ServiceStatusEnum
        export type ServiceStatusEnum = "new" | "alive" | "disabled" | "dead"
        //metrics.api.Token
        // fullName: metrics.api.Token.Token
        export interface Token {
            access: string;
            createdAt: string;
            description: string;
            expiredAt: string;
            id: string;
            isRevoked: boolean;
            labels: OVH.metrics.api.Label[];
            type: OVH.metrics.api.PermissionEnum;
        }
    }
}
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
        renew?: OVH.service.RenewType;
        renewalType: OVH.service.RenewalTypeEnum;
        serviceId: number;
        status: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /metrics
export interface Metrics{
    // GET /metrics
    $get(): Promise<string[]>;
    [keys: string]:{
        // GET /metrics/{serviceName}
        $get(): Promise<metrics.api.Service>;
        // PUT /metrics/{serviceName}
        $put(body?: {description?: string}): Promise<metrics.api.Service>;
        changeContact: {
            // POST /metrics/{serviceName}/changeContact
            $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        confirmTermination: {
            // POST /metrics/{serviceName}/confirmTermination
            $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        consumption: {
            // GET /metrics/{serviceName}/consumption
            $get(param?: {duration?: number}): Promise<metrics.api.Consumption>;
        }
        lookup: {
            token: {
                // POST /metrics/{serviceName}/lookup/token
                $post(body?: {accessToken: string}): Promise<string[]>;
            }
        }
        quota: {
            // PUT /metrics/{serviceName}/quota
            $put(body?: {quota: number}): Promise<string>;
        }
        serviceInfos: {
            // GET /metrics/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /metrics/{serviceName}/serviceInfos
            $put(body?: {body: services.Service}): Promise<void>;
        }
        terminate: {
            // POST /metrics/{serviceName}/terminate
            $post(): Promise<string>;
        }
        token: {
            // GET /metrics/{serviceName}/token
            $get(): Promise<string[]>;
            // POST /metrics/{serviceName}/token
            $post(body?: {description?: string, labels?: metrics.api.Label[], permission: metrics.api.PermissionEnum}): Promise<metrics.api.Token>;
            [keys: string]:{
                // DELETE /metrics/{serviceName}/token/{tokenId}
                $delete(): Promise<void>;
                // GET /metrics/{serviceName}/token/{tokenId}
                $get(): Promise<metrics.api.Token>;
                // PUT /metrics/{serviceName}/token/{tokenId}
                $put(body?: {description?: string}): Promise<metrics.api.Token>;
            } | any
        }
    } | any
}
// Api
type PathsMetricsGET = '/metrics' |
  '/metrics/{serviceName}' |
  '/metrics/{serviceName}/consumption' |
  '/metrics/{serviceName}/serviceInfos' |
  '/metrics/{serviceName}/token' |
  '/metrics/{serviceName}/token/{tokenId}';

type PathsMetricsPUT = '/metrics/{serviceName}' |
  '/metrics/{serviceName}/quota' |
  '/metrics/{serviceName}/serviceInfos' |
  '/metrics/{serviceName}/token/{tokenId}';

type PathsMetricsPOST = '/metrics/{serviceName}/changeContact' |
  '/metrics/{serviceName}/confirmTermination' |
  '/metrics/{serviceName}/lookup/token' |
  '/metrics/{serviceName}/terminate' |
  '/metrics/{serviceName}/token';

type PathsMetricsDELETE = '/metrics/{serviceName}/token/{tokenId}';

export class ApiMetrics extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the METRICS service
   * List available services
   */
  public get(path: '/metrics'): Promise<string[]>;
  /**
   * Missing description
   * Get service
   */
  public get(path: '/metrics/{serviceName}', params: {serviceName: string}): Promise<metrics.api.Service>;
  /**
   * Missing description
   * Get consumption for your service
   */
  public get(path: '/metrics/{serviceName}/consumption', params: {serviceName: string, duration?: number}): Promise<metrics.api.Consumption>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/metrics/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Missing description
   * Get list of tokens
   */
  public get(path: '/metrics/{serviceName}/token', params: {serviceName: string}): Promise<string[]>;
  /**
   * Missing description
   * Get a specific token
   */
  public get(path: '/metrics/{serviceName}/token/{tokenId}', params: {serviceName: string, tokenId: string}): Promise<metrics.api.Token>;
  public get(path: PathsMetricsGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Missing description
   * Modify service
   */
  public put(path: '/metrics/{serviceName}', params: {serviceName: string, description?: string}): Promise<metrics.api.Service>;
  /**
   * Missing description
   * Set overquota
   */
  public put(path: '/metrics/{serviceName}/quota', params: {serviceName: string, quota: number}): Promise<string>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/metrics/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Missing description
   * Modify a token
   */
  public put(path: '/metrics/{serviceName}/token/{tokenId}', params: {serviceName: string, tokenId: string, description?: string}): Promise<metrics.api.Token>;
  public put(path: PathsMetricsPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/metrics/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/metrics/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * Missing description
   * Find TokenID for a specific token
   */
  public post(path: '/metrics/{serviceName}/lookup/token', params: {serviceName: string, accessToken: string}): Promise<string[]>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/metrics/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
   * Missing description
   * Create a token
   */
  public post(path: '/metrics/{serviceName}/token', params: {serviceName: string, description?: string, labels?: OVH.metrics.api.Label[], permission: OVH.metrics.api.PermissionEnum}): Promise<metrics.api.Token>;
  public post(path: PathsMetricsPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Missing description
   * Revoke a token
   */
  public delete(path: '/metrics/{serviceName}/token/{tokenId}', params: {serviceName: string, tokenId: string}): Promise<void>;
  public delete(path: PathsMetricsDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}