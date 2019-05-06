import { ApiCommon } from '@ovh-api/common';
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  contactBilling?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  contactAdmin?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   */
  domain?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  expiration?: Date;
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  serviceId?: Number;
  /**
   */
  creation?: Date;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * Certificate of an SSL customer
 */
export interface SslCertificate {
  /**
   * The CN field in your certificate
   *
   */
  commonName?: string;
  /**
   * The issuer chain of your certificate
   *
   */
  chain?: string;
  /**
   * The CSR used to create your certificate
   *
   */
  csr?: string;
  /**
   * Your certificate is invalid from this date
   *
   */
  validityEnd?: Date;
  /**
   * The authority your certificate is issued from
   *
   */
  authority?: SslCertificateAuthorityEnum;
  /**
   * Your certificate
   *
   */
  certificate?: string;
  /**
   * Your certificate is valid from this date
   *
   */
  validityStart?: Date;
  /**
   * The internal name of your certificate offer
   *
   */
  serviceName?: string;
  /**
   * Type of your certificate
   *
   */
  type?: SslCertificateTypeEnum;
  /**
   * Current status of your certificate
   *
   */
  status?: SslCertificateStatusEnum;
  /**
   * The SAN field for multidomain certificate
   *
   */
  subjectAltName?: string[];
}
/**
 * All authority a SSL certificate can be issued from
 */
export type SslCertificateAuthorityEnum = 'comodo' | 'sectigo';
/**
 * All status a SSL certificate can be in
 */
export type SslCertificateStatusEnum = 'creating' | 'error' | 'ok' | 'validating';
/**
 * All type a SSL certificate can be
 */
export type SslCertificateTypeEnum = 'DV' | 'EV' | 'OV';
/**
 * Task on a SSL
 */
export interface SslOperation {
  /**
   * Task function name
   *
   */
  function?: SslOperationFunctionEnum;
  /**
   * Task last update
   *
   */
  lastUpdate?: Date;
  /**
   * Completion date
   *
   */
  doneDate?: Date;
  /**
   */
  taskId?: Number;
  /**
   * Task Creation date
   *
   */
  startDate?: Date;
  /**
   * Task status
   *
   */
  status?: SslOperationStatusEnum;
}
/**
 * All functions a SSL operation can handle
 */
export type SslOperationFunctionEnum = 'createCertificate';
/**
 * All status a SSL operation can be in
 */
export type SslOperationStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
type PathssslGET = '/ssl' | 
'/ssl/{serviceName}/serviceInfos' | 
'/ssl/{serviceName}/tasks' | 
'/ssl/{serviceName}/tasks/{taskId}' | 
'/ssl/{serviceName}';

type PathssslPUT = '/ssl/{serviceName}/serviceInfos';

class Apissl extends ApiCommon {
  /**
  Operations about the SSL service
  List available services
  **/
  public get(path: '/ssl', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/ssl/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the ssl.Operation objects
  Tasks associated to this ssl
  **/
  public get(path: '/ssl/{serviceName}/tasks', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Task on a SSL
  Get this object properties
  **/
  public get(path: '/ssl/{serviceName}/tasks/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<SslOperation>;
  /**
  Certificate of an SSL customer
  Get this object properties
  **/
  public get(path: '/ssl/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<SslCertificate>;
  public get(path: PathssslGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/ssl/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathssslPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
}
