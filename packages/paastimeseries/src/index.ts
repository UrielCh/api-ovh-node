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
  text?: string;
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  value?: Number;
}
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
 * Tokens permissions
 */
export type PaasTimeseriesPermissionEnum = 'READ' | 'WRITE';
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
   * Id
   *
   */
  serviceName?: string;
  /**
   * Region
   *
   */
  region?: PaasTimeseriesRegion;
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
 * Metric name
 */
export type PaasTimeseriesConsumptionItemMetricNameEnum = 'storage' | 'input' | 'output';
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
   * description of your project
   *
   */
  description?: string;
  /**
   * subscribed offer
   *
   */
  offerId?: string;
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
type PathspaastimeseriesGET = '/paas/timeseries' | 
'/paas/timeseries/region' | 
'/paas/timeseries/{serviceName}/consumption' | 
'/paas/timeseries/{serviceName}/quota' | 
'/paas/timeseries/{serviceName}/serviceInfos' | 
'/paas/timeseries/{serviceName}/key' | 
'/paas/timeseries/{serviceName}/key/{keyId}' | 
'/paas/timeseries/{serviceName}';

type PathspaastimeseriesPUT = '/paas/timeseries/{serviceName}/serviceInfos' | 
'/paas/timeseries/{serviceName}/key/{keyId}' | 
'/paas/timeseries/{serviceName}';

type PathspaastimeseriesPOST = '/paas/timeseries/{serviceName}/setup' | 
'/paas/timeseries/{serviceName}/changeContact' | 
'/paas/timeseries/{serviceName}/key';

type PathspaastimeseriesDELETE = '/paas/timeseries/{serviceName}/key/{keyId}';

class Apipaastimeseries extends ApiCommon {
  /**
  Operations about the PAAS_TIMESERIES service
  List available services
  **/
  public get(path: '/paas/timeseries', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Regions
  Get available regions
  **/
  public get(path: '/paas/timeseries/region', pathParams: null, queryParams: null): Promise<PaasTimeseriesRegion[]>;
  /**
  Consumption
  Get consumption
  **/
  public get(path: '/paas/timeseries/{serviceName}/consumption', pathParams: {serviceName?: string}, queryParams: null): Promise<PaasTimeseriesConsumption[]>;
  /**
  Quotas
  Get quotas
  **/
  public get(path: '/paas/timeseries/{serviceName}/quota', pathParams: {serviceName?: string}, queryParams: null): Promise<PaasTimeseriesQuota[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/paas/timeseries/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
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
  Timeseries project
  Get this object properties
  **/
  public get(path: '/paas/timeseries/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<TimeseriesProject>;
  public get(path: PathspaastimeseriesGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/paas/timeseries/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Key
  Create a key
  **/
  public put(path: '/paas/timeseries/{serviceName}/key/{keyId}', pathParams: {serviceName?: string, keyId?: string}, bodyParams: null): Promise<PaasTimeseriesKey>;
  /**
  Timeseries project
  Alter this object properties
  **/
  public put(path: '/paas/timeseries/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathspaastimeseriesPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Setup your project on our platform
  Setup a project
  **/
  public post(path: '/paas/timeseries/{serviceName}/setup', pathParams: {serviceName?: string}, bodyParams: null): Promise<PaasTimeseriesProject>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/paas/timeseries/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  Keys
  Create a key for a project
  **/
  public post(path: '/paas/timeseries/{serviceName}/key', pathParams: {serviceName?: string}, bodyParams: null): Promise<PaasTimeseriesKey>;
  public post(path: PathspaastimeseriesPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Key
  Delete a OpenTSDB token
  **/
  public delete(path: '/paas/timeseries/{serviceName}/key/{keyId}', pathParams: {serviceName?: string, keyId?: string}, bodyParams: null): Promise<boolean>;
  public delete(path: PathspaastimeseriesDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
