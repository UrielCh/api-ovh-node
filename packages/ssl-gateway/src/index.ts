import { ApiCommon, OvhEngine, OvhParamType } from '@ovh-api/common';
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
  period?: number;
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
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
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
  possibleRenewPeriod?: number[];
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
  serviceId?: number;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * Domain attached to an SSL Gateway
 */
export interface SslGatewayDomain {
  /**
   * Domain name attached to your SSL Gateway
   *
   */
  domain?: string;
  /**
   * Id of your domain
   *
   */
  id?: number;
  /**
   * Domain state
   *
   */
  state?: SslGatewayDomainStateEnum;
}
/**
 * Possible values for SSL Gateway domain state
 */
export type SslGatewayDomainStateEnum = 'creating' | 'deleted' | 'deleting' | 'http-only' | 'internal' | 'ok';
/**
 * A structure describing the eligibility status of a domain
 */
export interface SslGatewayEligibilityStatus {
  /**
   * Customer domain name
   *
   */
  domain?: string;
  /**
   * Eligible IP(s) v6 for this domain
   *
   */
  ip6s?: string[];
  /**
   * Eligible IP(s) for this domain
   *
   */
  ips?: string[];
  /**
   * Whether this domain is hosted by Ovh or not
   *
   */
  isHostedByOvh?: boolean;
}
/**
 * a list of {zone, nat Ip}
 */
export interface SslGatewayNatIps {
  /**
   */
  ip?: string[];
  /**
   */
  zone?: string;
}
/**
 * List of SSL Gateway offers
 */
export type SslGatewayOfferEnum = 'advanced' | 'enterprise' | 'free' | 'internal';
/**
 * Server attached to an SSL Gateway
 */
export interface SslGatewayServer {
  /**
   * IP address of the server attached to your SSL Gateway
   *
   */
  address?: string;
  /**
   * Id of your server
   *
   */
  id?: number;
  /**
   * Port of your server attached to your SSL Gateway
   *
   */
  port?: number;
  /**
   * Server state
   *
   */
  state?: SslGatewayServerStateEnum;
}
/**
 * Possible values for SSL Gateway server state
 */
export type SslGatewayServerStateEnum = 'creating' | 'deleted' | 'deleting' | 'internal' | 'ok' | 'updating';
/**
 * Possible values for ssl ciphers
 */
export type SslGatewaySslConfigurationEnum = 'intermediate' | 'internal' | 'modern';
/**
 * Your SSL Gateway
 */
export interface SslGatewaySslGateway {
  /**
   * Restrict SSL Gateway access to these ip block. No restriction if null
   *
   */
  allowedSource?: string[];
  /**
   * Custom name of your SSL Gateway
   *
   */
  displayName?: string;
  /**
   * Set to true to enable Strict-Transport-Security HTTP header
   *
   */
  hsts?: boolean;
  /**
   * Set to true to enable https redirect
   *
   */
  httpsRedirect?: boolean;
  /**
   * The IPv4 you need to put in the A field of your domain name
   *
   */
  ipv4?: string;
  /**
   * The IPv6 you need to put in the AAAA field of your domain name
   *
   */
  ipv6?: string;
  /**
   * The metrics token associated with your SSL Gateway
   *
   */
  metricsToken?: string;
  /**
   * Current offer for your SSL Gateway
   *
   */
  offer?: SslGatewayOfferEnum;
  /**
   * Custom reverse for your SSL Gateway
   *
   */
  reverse?: string;
  /**
   * Set to true to contact backend servers over HTTPS
   *
   */
  serverHttps?: boolean;
  /**
   * The internal name of your SSL Gateway
   *
   */
  serviceName?: string;
  /**
   * Modern oldest compatible clients : Firefox 27, Chrome 30, IE 11 on Windows 7, Edge, Opera 17, Safari 9, Android 5.0, and Java 8. Intermediate oldest compatible clients : Firefox 1, Chrome 1, IE 7, Opera 5, Safari 1, Windows XP IE8, Android 2.3, Java 7. Intermediate if null.
   *
   */
  sslConfiguration?: SslGatewaySslConfigurationEnum;
  /**
   * Current state of your SSL Gateway
   *
   */
  state?: SslGatewayStateEnum;
  /**
   * Zones of your SSL Gateway
   *
   */
  zones?: string[];
}
/**
 * Possible values for SSL Gateway state
 */
export type SslGatewayStateEnum = 'creating' | 'deleted' | 'deleting' | 'http-only' | 'internal' | 'ok' | 'suspended' | 'upgrading';
/**
 * SSL Gateway tasks
 */
export interface SslGatewayTask {
  /**
   * The action made
   *
   */
  action?: SslGatewayTaskActionEnum;
  /**
   * Creation date of your task
   *
   */
  creationDate?: string;
  /**
   * Id of the task
   *
   */
  id?: number;
  /**
   * Task progress percentage
   *
   */
  progress?: number;
  /**
   * Current status of your task
   *
   */
  status?: SslGatewayTaskStatusEnum;
}
/**
 * Possible task action
 */
export type SslGatewayTaskActionEnum = 'addDomain' | 'addPaidCertificate' | 'addServer' | 'createService' | 'deleteDomain' | 'deleteServer' | 'deleteService' | 'internalTask' | 'updateServer' | 'updateService' | 'upgrade';
/**
 * Possible task status
 */
export type SslGatewayTaskStatusEnum = 'blocked' | 'cancelled' | 'doing' | 'done' | 'error' | 'paused' | 'todo';
type PathsSslGatewayGET = '/sslGateway' | 
'/sslGateway/availableZones' | 
'/sslGateway/eligibility' | 
'/sslGateway/{serviceName}' | 
'/sslGateway/{serviceName}/domain' | 
'/sslGateway/{serviceName}/domain/{id}' | 
'/sslGateway/{serviceName}/natIp' | 
'/sslGateway/{serviceName}/server' | 
'/sslGateway/{serviceName}/server/{id}' | 
'/sslGateway/{serviceName}/serviceInfos' | 
'/sslGateway/{serviceName}/task' | 
'/sslGateway/{serviceName}/task/{id}';

type PathsSslGatewayPUT = '/sslGateway/{serviceName}' | 
'/sslGateway/{serviceName}/server/{id}' | 
'/sslGateway/{serviceName}/serviceInfos';

type PathsSslGatewayPOST = '/sslGateway/{serviceName}/changeContact' | 
'/sslGateway/{serviceName}/confirmTermination' | 
'/sslGateway/{serviceName}/domain' | 
'/sslGateway/{serviceName}/renewCertificate' | 
'/sslGateway/{serviceName}/server' | 
'/sslGateway/{serviceName}/terminate';

type PathsSslGatewayDELETE = '/sslGateway/{serviceName}/domain/{id}' | 
'/sslGateway/{serviceName}/server/{id}';

export class ApiSslGateway extends ApiCommon {
  constructor(engine: OvhEngine) {
    super(engine);
  }
  /**
  Operations about the SSLGATEWAY service
  List available services
  **/
  public get(path: '/sslGateway'): Promise<string[]>;
  /**
  List of zone available for an SSL Gateway
  List of zone available for an SSL Gateway
  **/
  public get(path: '/sslGateway/availableZones'): Promise<string[]>;
  /**
  Check domain eligibility. Return list of eligible IP(s) for this domain.
  Check domain eligibility. Return list of eligible IP(s) for this domain.
  **/
  public get(path: '/sslGateway/eligibility'): Promise<SslGatewayEligibilityStatus>;
  /**
  Your SSL Gateway
  Get this object properties
  **/
  public get(path: '/sslGateway/{serviceName}', params: {serviceName: string}): Promise<SslGatewaySslGateway>;
  /**
  List the sslGateway.Domain objects
  Domains attached to your SSL Gateway
  **/
  public get(path: '/sslGateway/{serviceName}/domain', params: {serviceName: string}): Promise<number[]>;
  /**
  Domain attached to an SSL Gateway
  Get this object properties
  **/
  public get(path: '/sslGateway/{serviceName}/domain/{id}', params: {serviceName: string, id: number}): Promise<SslGatewayDomain>;
  /**
  natIp operations
  Ip subnet used by OVH to nat requests to your SSL Gateway backends.
  **/
  public get(path: '/sslGateway/{serviceName}/natIp', params: {serviceName: string}): Promise<SslGatewayNatIps[]>;
  /**
  List the sslGateway.Server objects
  Servers attached to your SSL Gateway
  **/
  public get(path: '/sslGateway/{serviceName}/server', params: {serviceName: string}): Promise<number[]>;
  /**
  Server attached to an SSL Gateway
  Get this object properties
  **/
  public get(path: '/sslGateway/{serviceName}/server/{id}', params: {serviceName: string, id: number}): Promise<SslGatewayServer>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/sslGateway/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  List the sslGateway.Task objects
  Task for this SSL Gateway
  **/
  public get(path: '/sslGateway/{serviceName}/task', params: {serviceName: string}): Promise<number[]>;
  /**
  SSL Gateway tasks
  Get this object properties
  **/
  public get(path: '/sslGateway/{serviceName}/task/{id}', params: {serviceName: string, id: number}): Promise<SslGatewayTask>;
  public get(path: PathsSslGatewayGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Your SSL Gateway
  Alter this object properties
  **/
  public put(path: '/sslGateway/{serviceName}', params: {serviceName: string}): Promise<void>;
  /**
  Server attached to an SSL Gateway
  Alter this object properties
  **/
  public put(path: '/sslGateway/{serviceName}/server/{id}', params: {serviceName: string, id: number}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/sslGateway/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsSslGatewayPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/sslGateway/{serviceName}/changeContact', params: {serviceName: string}): Promise<number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/sslGateway/{serviceName}/confirmTermination', params: {serviceName: string}): Promise<string>;
  /**
  List the sslGateway.Domain objects
  Attach a new domain to your SSL Gateway
  **/
  public post(path: '/sslGateway/{serviceName}/domain', params: {serviceName: string}): Promise<SslGatewayDomain>;
  /**
  renewCertificate operations
  Renew your SSL certificates
  **/
  public post(path: '/sslGateway/{serviceName}/renewCertificate', params: {serviceName: string}): Promise<string[]>;
  /**
  List the sslGateway.Server objects
  Add a new server to your SSL Gateway
  **/
  public post(path: '/sslGateway/{serviceName}/server', params: {serviceName: string}): Promise<SslGatewayServer>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/sslGateway/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsSslGatewayPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Domain attached to an SSL Gateway
  Detach a domain from your SSL Gateway
  **/
  public delete(path: '/sslGateway/{serviceName}/domain/{id}', params: {serviceName: string, id: number}): Promise<void>;
  /**
  Server attached to an SSL Gateway
  Remove a server
  **/
  public delete(path: '/sslGateway/{serviceName}/server/{id}', params: {serviceName: string, id: number}): Promise<void>;
  public delete(path: PathsSslGatewayDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
