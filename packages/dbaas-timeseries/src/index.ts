import { ApiCommon } from '@ovh-api/common';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit?: string;
  /**
   */
  value?: T;
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
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  text?: string;
  /**
   */
  value?: Number;
}
/**
 * Consumption
 */
export interface PaasTimeseriesConsumption {
  /**
   * Consumption start date
   *
   */
  from?: string;
  /**
   * Timestamp of consumption generation
   *
   */
  generated?: string;
  /**
   * List of consumption items
   *
   */
  items?: PaasTimeseriesConsumptionItem[];
  /**
   * Consumption end date
   *
   */
  to?: string;
  /**
   * Total
   *
   */
  total?: OrderPrice;
}
/**
 * ConsumptionItem
 */
export interface PaasTimeseriesConsumptionItem {
  /**
   * Metric name
   *
   */
  metricName?: PaasTimeseriesConsumptionItemMetricNameEnum;
  /**
   * Price
   *
   */
  price?: OrderPrice;
  /**
   * Quantity consumed in unit
   *
   */
  quantity?: ComplexTypeUnitAndValue<Number>;
  /**
   * Unit price
   *
   */
  unitPrice?: OrderPrice;
}
/**
 * Key
 */
export interface PaasTimeseriesKey {
  /**
   * Description
   *
   */
  description?: string;
  /**
   * Id
   *
   */
  id?: string;
  /**
   * List of permissions
   *
   */
  permissions?: PaasTimeseriesPermissionEnum[];
  /**
   * Secret part
   *
   */
  secret?: string;
  /**
   * List of tags
   *
   */
  tags?: PaasTimeseriesTag[];
}
/**
 * Description not available
 */
export interface PaasTimeseriesOpenTSDBToken {
  /**
   * Description
   *
   */
  description?: string;
  /**
   * Id
   *
   */
  id?: string;
  /**
   */
  permission?: string;
  /**
   * protocol
   *
   */
  protocol?: string;
  /**
   * Secret part
   *
   */
  secret?: string;
  /**
   * List of tags
   *
   */
  tags?: PaasTimeseriesTag[];
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
  displayName?: string;
  /**
   * Region
   *
   */
  region?: PaasTimeseriesRegion;
  /**
   * Id
   *
   */
  serviceName?: string;
}
/**
 * Quota
 */
export interface PaasTimeseriesQuota {
  /**
   * Current value
   *
   */
  current?: Number;
  /**
   * Max allowed
   *
   */
  max?: Number;
  /**
   * Type (ie: mads, ddp, ...)
   *
   */
  type?: PaasTimeseriesQuotaTypeEnum;
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
  displayName?: string;
  /**
   * Id
   *
   */
  id?: string;
  /**
   * URL
   *
   */
  url?: string;
}
/**
 * Tag
 */
export interface PaasTimeseriesTag {
  /**
   * Key
   *
   */
  key?: string;
  /**
   * Value
   *
   */
  value?: string;
}
/**
 * Token to use Warp10 functions
 */
export interface PaasTimeseriesWarp10Token {
  /**
   * Description
   *
   */
  description?: string;
  /**
   * Timestamp of expiration of the token
   *
   */
  expiryTimestamp?: string;
  /**
   * Id
   *
   */
  id?: string;
  /**
   * Maximum depth of the stack allowed
   *
   */
  maxFetch?: Number;
  /**
   * Maximum number of GTS retrieved allowed
   *
   */
  maxGts?: Number;
  /**
   * maximum number of operations allowed
   *
   */
  maxOps?: Number;
  /**
   * permission
   *
   */
  permissions?: string;
  /**
   * protocol
   *
   */
  protocol?: string;
  /**
   * Query token used to authentificate queries
   *
   */
  queryToken?: string;
  /**
   * Secret part
   *
   */
  secret?: string;
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
  serviceName?: string;
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

export class ApiDbaasTimeseries extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
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
  Consumption
  Get consumption
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/consumption', pathParams: {serviceName: string}): Promise<PaasTimeseriesConsumption[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Keys
  Get keys for a project
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/key', pathParams: {serviceName: string}): Promise<PaasTimeseriesKey[]>;
  /**
  Key
  Get a key
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/key/{keyId}', pathParams: {serviceName: string, keyId: string}): Promise<PaasTimeseriesKey>;
  /**
  OpenTSDBTokens
  Get OpenTSDB tokens
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/token/opentsdb', pathParams: {serviceName: string}): Promise<PaasTimeseriesOpenTSDBToken[]>;
  /**
  Key
  Get a OpenTSDB token
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}', pathParams: {serviceName: string, tokenId: string}): Promise<PaasTimeseriesOpenTSDBToken>;
  /**
  Timeseries project
  Get this object properties
  **/
  public get(path: '/dbaas/timeseries/{serviceName}', pathParams: {serviceName: string}): Promise<TimeseriesProject>;
  /**
  Quotas
  Get quotas
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/quota', pathParams: {serviceName: string}): Promise<PaasTimeseriesQuota[]>;
  public get(path: PathsDbaasTimeseriesGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dbaas/timeseries/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Key
  Create a key
  **/
  public put(path: '/dbaas/timeseries/{serviceName}/key/{keyId}', pathParams: {serviceName: string, keyId: string}): Promise<PaasTimeseriesKey>;
  /**
  Timeseries project
  Alter this object properties
  **/
  public put(path: '/dbaas/timeseries/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsDbaasTimeseriesPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Setup your project on our platform
  Setup a project
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/setup', pathParams: {serviceName: string}): Promise<PaasTimeseriesProject>;
  /**
  Keys
  Create a key for a project
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/key', pathParams: {serviceName: string}): Promise<PaasTimeseriesKey>;
  /**
  OpenTSDBTokens
  Create a OpenTSDB token
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/token/opentsdb', pathParams: {serviceName: string}): Promise<PaasTimeseriesOpenTSDBToken>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  public post(path: PathsDbaasTimeseriesPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Key
  Delete a OpenTSDB token
  **/
  public delete(path: '/dbaas/timeseries/{serviceName}/key/{keyId}', pathParams: {serviceName: string, keyId: string}): Promise<boolean>;
  /**
  Key
  Delete an OpenTSDB token
  **/
  public delete(path: '/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}', pathParams: {serviceName: string, tokenId: string}): Promise<boolean>;
  public delete(path: PathsDbaasTimeseriesDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
