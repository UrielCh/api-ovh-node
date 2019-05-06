import { ApiCommon } from '@ovh-api/common';
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
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
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * Certificate of an SSL customer
 */
export interface SslCertificate {
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
   * The issuer chain of your certificate
   *
   */
  chain?: string;
  /**
   * The CN field in your certificate
   *
   */
  commonName?: string;
  /**
   * The CSR used to create your certificate
   *
   */
  csr?: string;
  /**
   * The internal name of your certificate offer
   *
   */
  serviceName?: string;
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
  /**
   * Type of your certificate
   *
   */
  type?: SslCertificateTypeEnum;
  /**
   * Your certificate is invalid from this date
   *
   */
  validityEnd?: string;
  /**
   * Your certificate is valid from this date
   *
   */
  validityStart?: string;
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
   * Completion date
   *
   */
  doneDate?: string;
  /**
   * Task function name
   *
   */
  function?: SslOperationFunctionEnum;
  /**
   * Task last update
   *
   */
  lastUpdate?: string;
  /**
   * Task Creation date
   *
   */
  startDate?: string;
  /**
   * Task status
   *
   */
  status?: SslOperationStatusEnum;
  /**
   */
  taskId?: Number;
}
/**
 * All functions a SSL operation can handle
 */
export type SslOperationFunctionEnum = 'createCertificate';
/**
 * All status a SSL operation can be in
 */
export type SslOperationStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
type PathsSslGET = '/ssl' | 
'/ssl/{serviceName}' | 
'/ssl/{serviceName}/serviceInfos' | 
'/ssl/{serviceName}/tasks' | 
'/ssl/{serviceName}/tasks/{taskId}';

type PathsSslPUT = '/ssl/{serviceName}/serviceInfos';

export class ApiSsl extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Task on a SSL
  Get this object properties
  **/
  public get(path: '/ssl/{serviceName}/tasks/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<SslOperation>;
  /**
  List the ssl.Operation objects
  Tasks associated to this ssl
  **/
  public get(path: '/ssl/{serviceName}/tasks', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Certificate of an SSL customer
  Get this object properties
  **/
  public get(path: '/ssl/{serviceName}', pathParams: {serviceName: string}): Promise<SslCertificate>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/ssl/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Operations about the SSL service
  List available services
  **/
  public get(path: '/ssl'): Promise<string[]>;
  public get(path: PathsSslGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/ssl/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsSslPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
}
