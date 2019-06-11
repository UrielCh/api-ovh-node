import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit: string;
  /**
   */
  value: T;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  currencyCode: OrderCurrencyCodeEnum;
  /**
   */
  text: string;
  /**
   */
  value: number;
}
/**
 * Consumption
 */
export interface PaasTimeseriesConsumption {
  /**
   * Consumption start date
   *
   */
  from: string;
  /**
   * Timestamp of consumption generation
   *
   */
  generated: string;
  /**
   * List of consumption items
   *
   */
  items: PaasTimeseriesConsumptionItem[];
  /**
   * Consumption end date
   *
   */
  to: string;
  /**
   * Total
   *
   */
  total: OrderPrice;
}
/**
 * ConsumptionItem
 */
export interface PaasTimeseriesConsumptionItem {
  /**
   * Metric name
   *
   */
  metricName: PaasTimeseriesConsumptionItemMetricNameEnum;
  /**
   * Price
   *
   */
  price: OrderPrice;
  /**
   * Quantity consumed in unit
   *
   */
  quantity: ComplexTypeUnitAndValue<number>;
  /**
   * Unit price
   *
   */
  unitPrice: OrderPrice;
}
/**
 * Key
 */
export interface PaasTimeseriesKey {
  /**
   * Description
   *
   */
  description: string;
  /**
   * Id
   *
   */
  id: string;
  /**
   * List of permissions
   *
   */
  permissions: PaasTimeseriesPermissionEnum[];
  /**
   * Secret part
   *
   */
  secret: string;
  /**
   * List of tags
   *
   */
  tags: PaasTimeseriesTag[];
}
/**
 * Description not available
 */
export interface PaasTimeseriesOpenTSDBToken {
  /**
   * Description
   *
   */
  description: string;
  /**
   * Id
   *
   */
  id: string;
  /**
   */
  permission: string;
  /**
   * protocol
   *
   */
  protocol: string;
  /**
   * Secret part
   *
   */
  secret: string;
  /**
   * List of tags
   *
   */
  tags: PaasTimeseriesTag[];
}
/**
 * Tokens permissions
 */
export type PaasTimeseriesPermissionEnum = 'READ' | 'WRITE';
/**
 * Project
 */
export interface PaasTimeseriesProject {
  /**
   * Description
   *
   */
  description?: string;
  /**
   * Name
   *
   */
  displayName: string;
  /**
   * Region
   *
   */
  region: PaasTimeseriesRegion;
  /**
   * Id
   *
   */
  serviceName: string;
}
/**
 * Quota
 */
export interface PaasTimeseriesQuota {
  /**
   * Current value
   *
   */
  current: number;
  /**
   * Max allowed
   *
   */
  max: number;
  /**
   * Type (ie: mads, ddp, ...)
   *
   */
  type: PaasTimeseriesQuotaTypeEnum;
}
/**
 * Project quotas
 */
export type PaasTimeseriesQuotaTypeEnum = 'ddp' | 'mads';
/**
 * Region
 */
export interface PaasTimeseriesRegion {
  /**
   * Name
   *
   */
  displayName: string;
  /**
   * Id
   *
   */
  id: string;
  /**
   * URL
   *
   */
  url: string;
}
/**
 * Tag
 */
export interface PaasTimeseriesTag {
  /**
   * Key
   *
   */
  key: string;
  /**
   * Value
   *
   */
  value: string;
}
/**
 * Token to use Warp10 functions
 */
export interface PaasTimeseriesWarp10Token {
  /**
   * Description
   *
   */
  description: string;
  /**
   * Timestamp of expiration of the token
   *
   */
  expiryTimestamp: string;
  /**
   * Id
   *
   */
  id: string;
  /**
   * Maximum depth of the stack allowed
   *
   */
  maxFetch: number;
  /**
   * Maximum number of GTS retrieved allowed
   *
   */
  maxGts: number;
  /**
   * maximum number of operations allowed
   *
   */
  maxOps: number;
  /**
   * permission
   *
   */
  permissions: string;
  /**
   * protocol
   *
   */
  protocol: string;
  /**
   * Query token used to authentificate queries
   *
   */
  queryToken: string;
  /**
   * Secret part
   *
   */
  secret: string;
}
/**
 * Metric name
 */
export type PaasTimeseriesConsumptionItemMetricNameEnum = 'input' | 'output' | 'storage';
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced: boolean;
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
 * Details about a Service
 */
export interface ServicesService {
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration: boolean;
  /**
   */
  contactAdmin: string;
  /**
   */
  contactBilling: string;
  /**
   */
  contactTech: string;
  /**
   */
  creation: string;
  /**
   */
  domain: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration: string;
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
  renewalType: ServiceRenewalTypeEnum;
  /**
   */
  serviceId: number;
  /**
   */
  status: ServiceStateEnum;
}
/**
 * Timeseries project
 */
export interface TimeseriesProject {
  /**
   * description of your project
   *
   */
  description?: string;
  /**
   * name of your project
   *
   */
  displayName?: string;
  /**
   * subscribed offer
   *
   */
  offerId?: string;
  /**
   * region where your data are located
   *
   */
  regionId?: string;
  /**
   * timeseries Project id
   *
   */
  serviceName: string;
  /**
   * project status
   *
   */
  status?: TimeseriesStatusTypeEnum;
}
/**
 * The current status for the project
 */
export type TimeseriesStatusTypeEnum = 'ACTIVE' | 'CREATION' | 'DELETED' | 'UNCONFIGURED';
type PathsDbaasTimeseriesGET = '/dbaas/timeseries' | 
'/dbaas/timeseries/region' | 
'/dbaas/timeseries/{serviceName}' | 
'/dbaas/timeseries/{serviceName}/consumption' | 
'/dbaas/timeseries/{serviceName}/key' | 
'/dbaas/timeseries/{serviceName}/key/{keyId}' | 
'/dbaas/timeseries/{serviceName}/quota' | 
'/dbaas/timeseries/{serviceName}/serviceInfos' | 
'/dbaas/timeseries/{serviceName}/token/opentsdb' | 
'/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}';

type PathsDbaasTimeseriesPUT = '/dbaas/timeseries/{serviceName}' | 
'/dbaas/timeseries/{serviceName}/key/{keyId}' | 
'/dbaas/timeseries/{serviceName}/serviceInfos';

type PathsDbaasTimeseriesPOST = '/dbaas/timeseries/{serviceName}/changeContact' | 
'/dbaas/timeseries/{serviceName}/key' | 
'/dbaas/timeseries/{serviceName}/setup' | 
'/dbaas/timeseries/{serviceName}/token/opentsdb';

type PathsDbaasTimeseriesDELETE = '/dbaas/timeseries/{serviceName}/key/{keyId}' | 
'/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}';

export class ApiDbaasTimeseries extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the PAAS_TIMESERIES service
  List available services
  **/
  public get(path: '/dbaas/timeseries'): Promise<string[]>;
  /**
  Regions
  Get available regions
  **/
  public get(path: '/dbaas/timeseries/region'): Promise<PaasTimeseriesRegion[]>;
  /**
  Timeseries project
  Get this object properties
  **/
  public get(path: '/dbaas/timeseries/{serviceName}', params: {serviceName: string}): Promise<TimeseriesProject>;
  /**
  Consumption
  Get consumption
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/consumption', params: {serviceName: string}): Promise<PaasTimeseriesConsumption[]>;
  /**
  Keys
  Get keys for a project
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/key', params: {serviceName: string}): Promise<PaasTimeseriesKey[]>;
  /**
  Key
  Get a key
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/key/{keyId}', params: {serviceName: string, keyId: string}): Promise<PaasTimeseriesKey>;
  /**
  Quotas
  Get quotas
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/quota', params: {serviceName: string}): Promise<PaasTimeseriesQuota[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  OpenTSDBTokens
  Get OpenTSDB tokens
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/token/opentsdb', params: {serviceName: string}): Promise<PaasTimeseriesOpenTSDBToken[]>;
  /**
  Key
  Get a OpenTSDB token
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}', params: {serviceName: string, tokenId: string}): Promise<PaasTimeseriesOpenTSDBToken>;
  public get(path: PathsDbaasTimeseriesGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Timeseries project
  Alter this object properties
  **/
  public put(path: '/dbaas/timeseries/{serviceName}', params: {serviceName: string, description?: string, displayName?: string, offerId?: string, regionId?: string, status?: TimeseriesStatusTypeEnum}): Promise<void>;
  /**
  Key
  Create a key
  **/
  public put(path: '/dbaas/timeseries/{serviceName}/key/{keyId}', params: {serviceName: string, keyId: string, description?: string, permissions: PaasTimeseriesPermissionEnum[], tags: PaasTimeseriesTag[]}): Promise<PaasTimeseriesKey>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dbaas/timeseries/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: ServiceRenewType, renewalType?: ServiceRenewalTypeEnum, serviceId?: number, status?: ServiceStateEnum}): Promise<void>;
  public put(path: PathsDbaasTimeseriesPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
  Keys
  Create a key for a project
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/key', params: {serviceName: string, description?: string, permissions: string[], tags: PaasTimeseriesTag[]}): Promise<PaasTimeseriesKey>;
  /**
  Setup your project on our platform
  Setup a project
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/setup', params: {serviceName: string, description?: string, displayName: string, raTokenId?: string, raTokenKey?: string, regionId?: string}): Promise<PaasTimeseriesProject>;
  /**
  OpenTSDBTokens
  Create a OpenTSDB token
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/token/opentsdb', params: {serviceName: string, description?: string, permission: string, tags: PaasTimeseriesTag[]}): Promise<PaasTimeseriesOpenTSDBToken>;
  public post(path: PathsDbaasTimeseriesPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Key
  Delete a OpenTSDB token
  **/
  public delete(path: '/dbaas/timeseries/{serviceName}/key/{keyId}', params: {serviceName: string, keyId: string}): Promise<boolean>;
  /**
  Key
  Delete an OpenTSDB token
  **/
  public delete(path: '/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}', params: {serviceName: string, tokenId: string}): Promise<boolean>;
  public delete(path: PathsDbaasTimeseriesDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiDbaasTimeseries;
