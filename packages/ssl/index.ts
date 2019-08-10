import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /ssl Models
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
export namespace ssl {
    // interface fullName: ssl.Certificate.Certificate
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
    // type fullname: ssl.CertificateAuthorityEnum
    export type CertificateAuthorityEnum = "comodo" | "sectigo"
    // type fullname: ssl.CertificateStatusEnum
    export type CertificateStatusEnum = "creating" | "error" | "ok" | "validating"
    // type fullname: ssl.CertificateTypeEnum
    export type CertificateTypeEnum = "DV" | "EV" | "OV"
    // interface fullName: ssl.Operation.Operation
    export interface Operation {
        doneDate?: string;
        function: ssl.OperationFunctionEnum;
        lastUpdate: string;
        startDate: string;
        status: ssl.OperationStatusEnum;
        taskId: number;
    }
    // type fullname: ssl.OperationFunctionEnum
    export type OperationFunctionEnum = "createCertificate"
    // type fullname: ssl.OperationStatusEnum
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
 * Api Proxy model
 */// Apis harmony
// path /ssl
export interface Ssl{
    // GET /ssl
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /ssl/{serviceName}
        $get(): Promise<ssl.Certificate>;
        serviceInfos: {
            // GET /ssl/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /ssl/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        tasks: {
            // GET /ssl/{serviceName}/tasks
            $get(): Promise<number[]>;
            $(taskId: number): {
                // GET /ssl/{serviceName}/tasks/{taskId}
                $get(): Promise<ssl.Operation>;
            };
        }
    };
// Api
  /**
   * Operations about the SSL service
   * List available services
   */
  get(path: '/ssl'): () => Promise<string[]>;
  /**
   * Certificate of an SSL customer
   * Get this object properties
   */
  get(path: '/ssl/{serviceName}'): (params: {serviceName: string}) => Promise<ssl.Certificate>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/ssl/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the ssl.Operation objects
   * Tasks associated to this ssl
   */
  get(path: '/ssl/{serviceName}/tasks'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Task on a SSL
   * Get this object properties
   */
  get(path: '/ssl/{serviceName}/tasks/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<ssl.Operation>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/ssl/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
}
/**
 * classic Model
 */