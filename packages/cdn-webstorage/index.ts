import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace cdn {
    export namespace webstorage {
        //cdn.webstorage.Account
        // fullName: cdn.webstorage.Account.Account
        export interface Account {
            domain: string;
            server: string;
            storageLimit: number;
            storageUsage: number;
        }
        //cdn.webstorage.AccountCredentials
        // fullName: cdn.webstorage.AccountCredentials.AccountCredentials
        export interface AccountCredentials {
            endpoint: string;
            login: string;
            password: string;
            tenant: string;
        }
        //cdn.webstorage.StatsDataType
        // fullName: cdn.webstorage.StatsDataType.StatsDataType
        export interface StatsDataType {
            date: string;
            value: number;
        }
        //cdn.webstorage.StatsPeriodEnum
        export type StatsPeriodEnum = "day" | "month" | "week"
        //cdn.webstorage.StatsTypeEnum
        export type StatsTypeEnum = "backend" | "cdn" | "quota"
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
// Apis harmony
// path /cdn
export interface Cdn{
    webstorage: {
        // GET /cdn/webstorage
        $get(): Promise<string[]>;
        [keys: string]:{
            // GET /cdn/webstorage/{serviceName}
            $get(): Promise<cdn.webstorage.Account>;
            credentials: {
                // GET /cdn/webstorage/{serviceName}/credentials
                $get(): Promise<cdn.webstorage.AccountCredentials>;
            }
            serviceInfos: {
                // GET /cdn/webstorage/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /cdn/webstorage/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            statistics: {
                // GET /cdn/webstorage/{serviceName}/statistics
                $get(param?: {period: cdn.webstorage.StatsPeriodEnum, type: cdn.webstorage.StatsTypeEnum}): Promise<cdn.webstorage.StatsDataType[]>;
            }
        } | any
    }
}
// Api
type PathsCdnWebstorageGET = '/cdn/webstorage' |
  '/cdn/webstorage/{serviceName}' |
  '/cdn/webstorage/{serviceName}/credentials' |
  '/cdn/webstorage/{serviceName}/serviceInfos' |
  '/cdn/webstorage/{serviceName}/statistics';

type PathsCdnWebstoragePUT = '/cdn/webstorage/{serviceName}/serviceInfos';

export class ApiCdnWebstorage extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the CDNSTATIC service
   * List available services
   */
  public get(path: '/cdn/webstorage'): Promise<string[]>;
  /**
   * Static CDN
   * Get this object properties
   */
  public get(path: '/cdn/webstorage/{serviceName}', params: {serviceName: string}): Promise<cdn.webstorage.Account>;
  /**
   * credentials operations
   * Gives for customer credentials to accesss swift account
   */
  public get(path: '/cdn/webstorage/{serviceName}/credentials', params: {serviceName: string}): Promise<cdn.webstorage.AccountCredentials>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/cdn/webstorage/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * statistics operations
   * Return stats about bandwidth consumption
   */
  public get(path: '/cdn/webstorage/{serviceName}/statistics', params: {serviceName: string, period: cdn.webstorage.StatsPeriodEnum, type: cdn.webstorage.StatsTypeEnum}): Promise<cdn.webstorage.StatsDataType[]>;
  public get(path: PathsCdnWebstorageGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/cdn/webstorage/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
  public put(path: PathsCdnWebstoragePUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
}
