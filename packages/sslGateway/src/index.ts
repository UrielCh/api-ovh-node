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
   * period of renew in month
   *
   */
  period?: Number;
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
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
  id?: Number;
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
   * Eligible IP(s) v6 for this domain
   *
   */
  ip6s?: string[];
  /**
   * Whether this domain is hosted by Ovh or not
   *
   */
  isHostedByOvh?: boolean;
  /**
   * Customer domain name
   *
   */
  domain?: string;
  /**
   * Eligible IP(s) for this domain
   *
   */
  ips?: string[];
}
/**
 * a list of {zone, nat Ip}
 */
export interface SslGatewayNatIps {
  /**
   */
  zone?: string;
  /**
   */
  ip?: string[];
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
   * Port of your server attached to your SSL Gateway
   *
   */
  port?: Number;
  /**
   * Id of your server
   *
   */
  id?: Number;
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
   * The metrics token associated with your SSL Gateway
   *
   */
  metricsToken?: string;
  /**
   * Custom name of your SSL Gateway
   *
   */
  displayName?: string;
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
   * Zones of your SSL Gateway
   *
   */
  zones?: string[];
  /**
   * Custom reverse for your SSL Gateway
   *
   */
  reverse?: string;
  /**
   * Current offer for your SSL Gateway
   *
   */
  offer?: SslGatewayOfferEnum;
  /**
   * Modern oldest compatible clients : Firefox 27, Chrome 30, IE 11 on Windows 7, Edge, Opera 17, Safari 9, Android 5.0, and Java 8. Intermediate oldest compatible clients : Firefox 1, Chrome 1, IE 7, Opera 5, Safari 1, Windows XP IE8, Android 2.3, Java 7. Intermediate if null.
   *
   */
  sslConfiguration?: SslGatewaySslConfigurationEnum;
  /**
   * The IPv4 you need to put in the A field of your domain name
   *
   */
  ipv4?: string;
  /**
   * Restrict SSL Gateway access to these ip block. No restriction if null
   *
   */
  allowedSource?: string[];
  /**
   * Set to true to enable https redirect
   *
   */
  httpsRedirect?: boolean;
  /**
   * The IPv6 you need to put in the AAAA field of your domain name
   *
   */
  ipv6?: string;
  /**
   * Current state of your SSL Gateway
   *
   */
  state?: SslGatewayStateEnum;
  /**
   * Set to true to enable Strict-Transport-Security HTTP header
   *
   */
  hsts?: boolean;
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
   * Task progress percentage
   *
   */
  progress?: Number;
  /**
   * Id of the task
   *
   */
  id?: Number;
  /**
   * Creation date of your task
   *
   */
  creationDate?: Date;
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
type PathssslGatewayGET = '/sslGateway/eligibility' | 
'/sslGateway' | 
'/sslGateway/availableZones' | 
'/sslGateway/{serviceName}/serviceInfos' | 
'/sslGateway/{serviceName}/task' | 
'/sslGateway/{serviceName}/task/{id}' | 
'/sslGateway/{serviceName}/natIp' | 
'/sslGateway/{serviceName}/server' | 
'/sslGateway/{serviceName}/server/{id}' | 
'/sslGateway/{serviceName}' | 
'/sslGateway/{serviceName}/domain/{id}' | 
'/sslGateway/{serviceName}/domain';

type PathssslGatewayPUT = '/sslGateway/{serviceName}/serviceInfos' | 
'/sslGateway/{serviceName}/server/{id}' | 
'/sslGateway/{serviceName}';

type PathssslGatewayPOST = '/sslGateway/{serviceName}/changeContact' | 
'/sslGateway/{serviceName}/confirmTermination' | 
'/sslGateway/{serviceName}/server' | 
'/sslGateway/{serviceName}/terminate' | 
'/sslGateway/{serviceName}/renewCertificate' | 
'/sslGateway/{serviceName}/domain';

type PathssslGatewayDELETE = '/sslGateway/{serviceName}/server/{id}' | 
'/sslGateway/{serviceName}/domain/{id}';

class ApisslGateway extends ApiCommon {
  /**
  Check domain eligibility. Return list of eligible IP(s) for this domain.
  Check domain eligibility. Return list of eligible IP(s) for this domain.
  **/
  public get(path: '/sslGateway/eligibility', pathParams: null, queryParams: {domain?: string}): Promise<SslGatewayEligibilityStatus>;
  /**
  Operations about the SSLGATEWAY service
  List available services
  **/
  public get(path: '/sslGateway', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List of zone available for an SSL Gateway
  List of zone available for an SSL Gateway
  **/
  public get(path: '/sslGateway/availableZones', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/sslGateway/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the sslGateway.Task objects
  Task for this SSL Gateway
  **/
  public get(path: '/sslGateway/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  SSL Gateway tasks
  Get this object properties
  **/
  public get(path: '/sslGateway/{serviceName}/task/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SslGatewayTask>;
  /**
  natIp operations
  Ip subnet used by OVH to nat requests to your SSL Gateway backends.
  **/
  public get(path: '/sslGateway/{serviceName}/natIp', pathParams: {serviceName?: string}, queryParams: null): Promise<SslGatewayNatIps[]>;
  /**
  List the sslGateway.Server objects
  Servers attached to your SSL Gateway
  **/
  public get(path: '/sslGateway/{serviceName}/server', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Server attached to an SSL Gateway
  Get this object properties
  **/
  public get(path: '/sslGateway/{serviceName}/server/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SslGatewayServer>;
  /**
  Your SSL Gateway
  Get this object properties
  **/
  public get(path: '/sslGateway/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<SslGatewaySslGateway>;
  /**
  Domain attached to an SSL Gateway
  Get this object properties
  **/
  public get(path: '/sslGateway/{serviceName}/domain/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SslGatewayDomain>;
  /**
  List the sslGateway.Domain objects
  Domains attached to your SSL Gateway
  **/
  public get(path: '/sslGateway/{serviceName}/domain', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  public get(path: PathssslGatewayGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/sslGateway/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Server attached to an SSL Gateway
  Alter this object properties
  **/
  public put(path: '/sslGateway/{serviceName}/server/{id}', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  Your SSL Gateway
  Alter this object properties
  **/
  public put(path: '/sslGateway/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathssslGatewayPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/sslGateway/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/sslGateway/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  List the sslGateway.Server objects
  Add a new server to your SSL Gateway
  **/
  public post(path: '/sslGateway/{serviceName}/server', pathParams: {serviceName?: string}, bodyParams: null): Promise<SslGatewayServer>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/sslGateway/{serviceName}/terminate', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  renewCertificate operations
  Renew your SSL certificates
  **/
  public post(path: '/sslGateway/{serviceName}/renewCertificate', pathParams: {serviceName?: string}, bodyParams: null): Promise<string[]>;
  /**
  List the sslGateway.Domain objects
  Attach a new domain to your SSL Gateway
  **/
  public post(path: '/sslGateway/{serviceName}/domain', pathParams: {serviceName?: string}, bodyParams: null): Promise<SslGatewayDomain>;
  public post(path: PathssslGatewayPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Server attached to an SSL Gateway
  Remove a server
  **/
  public delete(path: '/sslGateway/{serviceName}/server/{id}', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  Domain attached to an SSL Gateway
  Detach a domain from your SSL Gateway
  **/
  public delete(path: '/sslGateway/{serviceName}/domain/{id}', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  public delete(path: PathssslGatewayDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
