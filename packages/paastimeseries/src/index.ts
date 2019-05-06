import { ApiCommon } from '@ovh-api/common';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Project quotas
 */
export type PaasTimeseriesQuotaTypeEnum = 'ddp' | 'mads';
/**
 * Tokens permissions
 */
export type PaasTimeseriesPermissionEnum = 'READ' | 'WRITE';
/**
 * Consumption
 */
export interface PaasTimeseriesConsumption {
  /**
   * Total
   *
   */
  total?: OrderPrice;
  /**
   * Timestamp of consumption generation
   *
   */
  generated?: Date;
  /**
   * Consumption start date
   *
   */
  from?: Date;
  /**
   * Consumption end date
   *
   */
  to?: Date;
  /**
   * List of consumption items
   *
   */
  items?: PaasTimeseriesConsumptionItem[];
}
/**
 * Tag
 */
export interface PaasTimeseriesTag {
  /**
   * Value
   *
   */
  value?: string;
  /**
   * Key
   *
   */
  key?: string;
}
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
 * Timeseries project
 */
export interface TimeseriesProject {
  /**
   * region where your data are located
   *
   */
  regionId?: string;
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
   * description of your project
   *
   */
  description?: string;
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
 * Project
 */
export interface PaasTimeseriesProject {
  /**
   * Name
   *
   */
  displayName?: string;
  /**
   * Description
   *
   */
  description?: string;
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
 * Key
 */
export interface PaasTimeseriesKey {
  /**
   * List of permissions
   *
   */
  permissions?: PaasTimeseriesPermissionEnum[];
  /**
   * Description
   *
   */
  description?: string;
  /**
   * Secret part
   *
   */
  secret?: string;
  /**
   * Id
   *
   */
  id?: string;
  /**
   * List of tags
   *
   */
  tags?: PaasTimeseriesTag[];
}
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
 * The current status for the project
 */
export type TimeseriesStatusTypeEnum = 'ACTIVE' | 'CREATION' | 'DELETED' | 'UNCONFIGURED';
/**
 * ConsumptionItem
 */
export interface PaasTimeseriesConsumptionItem {
  /**
   * Unit price
   *
   */
  unitPrice?: OrderPrice;
  /**
   * Metric name
   *
   */
  metricName?: PaasTimeseriesConsumptionItemMetricNameEnum;
  /**
   * Quantity consumed in unit
   *
   */
  quantity?: ComplexTypeUnitAndValue<Number>;
  /**
   * Price
   *
   */
  price?: OrderPrice;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  text?: string;
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  value?: Number;
}
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
 * Metric name
 */
export type PaasTimeseriesConsumptionItemMetricNameEnum = 'storage' | 'input' | 'output';
type PathspaastimeseriesGET = '/paas/timeseries/{serviceName}' | 
'/paas/timeseries/{serviceName}/quota' | 
'/paas/timeseries/{serviceName}/consumption' | 
'/paas/timeseries/{serviceName}/key' | 
'/paas/timeseries/{serviceName}/key/{keyId}' | 
'/paas/timeseries/{serviceName}/serviceInfos' | 
'/paas/timeseries/region' | 
'/paas/timeseries';

type PathspaastimeseriesPUT = '/paas/timeseries/{serviceName}' | 
'/paas/timeseries/{serviceName}/key/{keyId}' | 
'/paas/timeseries/{serviceName}/serviceInfos';

type PathspaastimeseriesPOST = '/paas/timeseries/{serviceName}/changeContact' | 
'/paas/timeseries/{serviceName}/setup' | 
'/paas/timeseries/{serviceName}/key';

type PathspaastimeseriesDELETE = '/paas/timeseries/{serviceName}/key/{keyId}';

class Apipaastimeseries extends ApiCommon {
  /**
  Timeseries project
  Get this object properties
  **/
  public get(path: '/paas/timeseries/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<TimeseriesProject>;
  /**
  Quotas
  Get quotas
  **/
  public get(path: '/paas/timeseries/{serviceName}/quota', pathParams: {serviceName?: string}, queryParams: null): Promise<PaasTimeseriesQuota[]>;
  /**
  Consumption
  Get consumption
  **/
  public get(path: '/paas/timeseries/{serviceName}/consumption', pathParams: {serviceName?: string}, queryParams: null): Promise<PaasTimeseriesConsumption[]>;
  /**
  Keys
  Get keys for a project
  **/
  public get(path: '/paas/timeseries/{serviceName}/key', pathParams: {serviceName?: string}, queryParams: null): Promise<PaasTimeseriesKey[]>;
  /**
  Key
  Get a key
  **/
  public get(path: '/paas/timeseries/{serviceName}/key/{keyId}', pathParams: {serviceName?: string, keyId?: string}, queryParams: null): Promise<PaasTimeseriesKey>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/paas/timeseries/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Regions
  Get available regions
  **/
  public get(path: '/paas/timeseries/region', pathParams: null, queryParams: null): Promise<PaasTimeseriesRegion[]>;
  /**
  Operations about the PAAS_TIMESERIES service
  List available services
  **/
  public get(path: '/paas/timeseries', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathspaastimeseriesGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Timeseries project
  Alter this object properties
  **/
  public put(path: '/paas/timeseries/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Key
  Create a key
  **/
  public put(path: '/paas/timeseries/{serviceName}/key/{keyId}', pathParams: {serviceName?: string, keyId?: string}, queryParams: null, bodyParams: null): Promise<PaasTimeseriesKey>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/paas/timeseries/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathspaastimeseriesPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/paas/timeseries/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  Setup your project on our platform
  Setup a project
  **/
  public post(path: '/paas/timeseries/{serviceName}/setup', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<PaasTimeseriesProject>;
  /**
  Keys
  Create a key for a project
  **/
  public post(path: '/paas/timeseries/{serviceName}/key', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<PaasTimeseriesKey>;
  public post(path: PathspaastimeseriesPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Key
  Delete a OpenTSDB token
  **/
  public delete(path: '/paas/timeseries/{serviceName}/key/{keyId}', pathParams: {serviceName?: string, keyId?: string}, queryParams: null, bodyParams: null): Promise<boolean>;
  public delete(path: PathspaastimeseriesDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
