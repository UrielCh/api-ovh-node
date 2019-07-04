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
export namespace ssl {
    //ssl.Certificate
    // fullName: ssl.Certificate.Certificate
    export interface Certificate {
        authority?: OVH.ssl.CertificateAuthorityEnum;
        certificate?: string;
        chain?: string;
        commonName?: string;
        csr?: string;
        serviceName?: string;
        status?: OVH.ssl.CertificateStatusEnum;
        subjectAltName?: string[];
        type?: OVH.ssl.CertificateTypeEnum;
        validityEnd?: string;
        validityStart?: string;
    }
    //ssl.CertificateAuthorityEnum
    export type CertificateAuthorityEnum = "comodo" | "sectigo"
    //ssl.CertificateStatusEnum
    export type CertificateStatusEnum = "creating" | "error" | "ok" | "validating"
    //ssl.CertificateTypeEnum
    export type CertificateTypeEnum = "DV" | "EV" | "OV"
    //ssl.Operation
    // fullName: ssl.Operation.Operation
    export interface Operation {
        doneDate?: string;
        function?: OVH.ssl.OperationFunctionEnum;
        lastUpdate?: string;
        startDate?: string;
        status?: OVH.ssl.OperationStatusEnum;
        taskId?: number;
    }
    //ssl.OperationFunctionEnum
    export type OperationFunctionEnum = "createCertificate"
    //ssl.OperationStatusEnum
    export type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
}
// Apis harmony
// path /ssl
export interface Ssl {
    // GET /ssl
    $get(): Promise<string[]>;
    [keys: string]: {
        // GET /ssl/{serviceName}
        $get(): Promise<ssl.Certificate>;
        serviceInfos:  {
            // GET /ssl/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /ssl/{serviceName}/serviceInfos
            $put(body?: {body: services.Service}): Promise<void>;
        }
        tasks:  {
            // GET /ssl/{serviceName}/tasks
            $get(): Promise<number[]>;
            [keys: string]: {
                // GET /ssl/{serviceName}/tasks/{taskId}
                $get(): Promise<ssl.Operation>;
            } | any
        }
    } | any
}
// Api
type PathsSslGET = '/ssl/{serviceName}/serviceInfos' |
  '/ssl/{serviceName}' |
  '/ssl/{serviceName}/tasks/{taskId}' |
  '/ssl/{serviceName}/tasks' |
  '/ssl';

type PathsSslPUT = '/ssl/{serviceName}/serviceInfos';

export class ApiSsl extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the SSL service
   * List available services
   */
  public get(path: '/ssl'): Promise<string[]>;
  /**
   * Certificate of an SSL customer
   * Get this object properties
   */
  public get(path: '/ssl/{serviceName}', params: {serviceName: string}): Promise<ssl.Certificate>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/ssl/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the ssl.Operation objects
   * Tasks associated to this ssl
   */
  public get(path: '/ssl/{serviceName}/tasks', params: {serviceName: string}): Promise<number[]>;
  /**
   * Task on a SSL
   * Get this object properties
   */
  public get(path: '/ssl/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: string}): Promise<ssl.Operation>;
  public get(path: PathsSslGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/ssl/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsSslPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
}
}