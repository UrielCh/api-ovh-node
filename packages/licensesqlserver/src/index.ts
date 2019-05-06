import { ApiCommon } from '@ovh-api/common';
/**
 * Your SQL Server license
 */
export interface LicenseSqlserverSqlServer {
  /**
   * The internal name of your license
   *
   */
  domain?: string;
  /**
   * The ip on which this license is attached
   *
   */
  ip?: string;
  /**
   * The license id on license provider side
   *
   */
  licenseId?: string;
  /**
   * This license version
   *
   */
  version?: LicenseSqlServerVersionEnum;
  /**
   * This license creation date
   *
   */
  creation?: Date;
  /**
   * This license state
   *
   */
  status?: LicenseStateEnum;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * All options available for SQL Server products
 */
export interface LicenseOrderableSqlServerCompatibilityInfos {
  /**
   */
  version?: LicenseSqlServerVersionEnum;
}
/**
 * A short description of what does the Task on your license
 */
export type LicenseActionType = 'addWindowFromExistingSerial' | 'changeIp' | 'changeOs' | 'installLicense' | 'optionUpgrade' | 'releaseOption' | 'versionUpgrade';
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
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
 * Possible values for license type
 */
export type LicenseLicenseTypeEnum = 'dedicated' | 'dedicatedCloud' | 'dedicatedFailover' | 'failover' | 'vm' | 'vps' | 'vps_ceph' | 'vps_classic' | 'vps_cloud' | 'vps_cloud_2016' | 'vps_ssd';
/**
 * licenses Todos
 */
export interface LicenseTask {
  /**
   * The last time this Task was updated
   *
   */
  lastUpdate?: Date;
  /**
   * This Task name
   *
   */
  name?: string;
  /**
   * When was this Task created
   *
   */
  todoDate?: Date;
  /**
   * This Task description
   *
   */
  action?: LicenseActionType;
  /**
   * When was this Task done
   *
   */
  doneDate?: Date;
  /**
   * This Task id
   *
   */
  taskId?: Number;
  /**
   * Current Taks status
   *
   */
  status?: LicenseTaskStateEnum;
}
/**
 * All states a license can be in
 */
export type LicenseStateEnum = 'ok' | 'released' | 'terminated' | 'toDeliver';
/**
 * All versions for SQL Server product
 */
export type LicenseSqlServerVersionEnum = 'SQL_SERVER_2008_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2008_STANDARD_EDITION_4_CPU' | 'SQL_SERVER_2008_WEB_EDITION_2_CPU' | 'SQL_SERVER_2008_WEB_EDITION_4_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION_10_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2012_WEB_EDITION_10_CORES' | 'SQL_SERVER_2012_WEB_EDITION_12_CORES' | 'SQL_SERVER_2012_WEB_EDITION_16_CORES' | 'SQL_SERVER_2012_WEB_EDITION_18_CORES' | 'SQL_SERVER_2012_WEB_EDITION_20_CORES' | 'SQL_SERVER_2012_WEB_EDITION_24_CORES' | 'SQL_SERVER_2012_WEB_EDITION_32_CORES' | 'SQL_SERVER_2012_WEB_EDITION_4_CORES' | 'SQL_SERVER_2012_WEB_EDITION_6_CORES' | 'SQL_SERVER_2012_WEB_EDITION_8_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_10_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_18_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_20_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_24_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2014_WEB_EDITION_10_CORES' | 'SQL_SERVER_2014_WEB_EDITION_12_CORES' | 'SQL_SERVER_2014_WEB_EDITION_16_CORES' | 'SQL_SERVER_2014_WEB_EDITION_18_CORES' | 'SQL_SERVER_2014_WEB_EDITION_20_CORES' | 'SQL_SERVER_2014_WEB_EDITION_24_CORES' | 'SQL_SERVER_2014_WEB_EDITION_4_CORES' | 'SQL_SERVER_2014_WEB_EDITION_6_CORES' | 'SQL_SERVER_2014_WEB_EDITION_8_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_10_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_14_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2016_WEB_EDITION_10_CORES' | 'SQL_SERVER_2016_WEB_EDITION_12_CORES' | 'SQL_SERVER_2016_WEB_EDITION_14_CORES' | 'SQL_SERVER_2016_WEB_EDITION_16_CORES' | 'SQL_SERVER_2016_WEB_EDITION_4_CORES' | 'SQL_SERVER_2016_WEB_EDITION_6_CORES' | 'SQL_SERVER_2016_WEB_EDITION_8_CORES' | 'sql-server-2008-license-standard-edition-2-cpu' | 'sql-server-2008-license-standard-edition-4-cpu' | 'sql-server-2008-license-web-edition-2-cpu' | 'sql-server-2008-license-web-edition-4-cpu' | 'sql-server-2012-license-standard-edition-10-cores' | 'sql-server-2012-license-standard-edition-12-cores' | 'sql-server-2012-license-standard-edition-16-cores' | 'sql-server-2012-license-standard-edition-18-cores' | 'sql-server-2012-license-standard-edition-2-cpu' | 'sql-server-2012-license-standard-edition-20-cores' | 'sql-server-2012-license-standard-edition-24-cores' | 'sql-server-2012-license-standard-edition-32-cores' | 'sql-server-2012-license-standard-edition-4-cores' | 'sql-server-2012-license-standard-edition-6-cores' | 'sql-server-2012-license-standard-edition-8-cores' | 'sql-server-2012-license-web-edition-10-cores' | 'sql-server-2012-license-web-edition-12-cores' | 'sql-server-2012-license-web-edition-16-cores' | 'sql-server-2012-license-web-edition-18-cores' | 'sql-server-2012-license-web-edition-20-cores' | 'sql-server-2012-license-web-edition-24-cores' | 'sql-server-2012-license-web-edition-32-cores' | 'sql-server-2012-license-web-edition-4-cores' | 'sql-server-2012-license-web-edition-6-cores' | 'sql-server-2012-license-web-edition-8-cores' | 'sql-server-2014-license-standard-edition-10-cores' | 'sql-server-2014-license-standard-edition-12-cores' | 'sql-server-2014-license-standard-edition-16-cores' | 'sql-server-2014-license-standard-edition-18-cores' | 'sql-server-2014-license-standard-edition-20-cores' | 'sql-server-2014-license-standard-edition-24-cores' | 'sql-server-2014-license-standard-edition-4-cores' | 'sql-server-2014-license-standard-edition-6-cores' | 'sql-server-2014-license-standard-edition-8-cores' | 'sql-server-2014-license-web-edition-10-cores' | 'sql-server-2014-license-web-edition-12-cores' | 'sql-server-2014-license-web-edition-16-cores' | 'sql-server-2014-license-web-edition-18-cores' | 'sql-server-2014-license-web-edition-20-cores' | 'sql-server-2014-license-web-edition-24-cores' | 'sql-server-2014-license-web-edition-4-cores' | 'sql-server-2014-license-web-edition-6-cores' | 'sql-server-2014-license-web-edition-8-cores' | 'sql-server-2016-license-standard-edition-10-cores' | 'sql-server-2016-license-standard-edition-12-cores' | 'sql-server-2016-license-standard-edition-14-cores' | 'sql-server-2016-license-standard-edition-16-cores' | 'sql-server-2016-license-standard-edition-4-cores' | 'sql-server-2016-license-standard-edition-6-cores' | 'sql-server-2016-license-standard-edition-8-cores' | 'sql-server-2016-license-web-edition-10-cores' | 'sql-server-2016-license-web-edition-12-cores' | 'sql-server-2016-license-web-edition-14-cores' | 'sql-server-2016-license-web-edition-16-cores' | 'sql-server-2016-license-web-edition-4-cores' | 'sql-server-2016-license-web-edition-6-cores' | 'sql-server-2016-license-web-edition-8-cores';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Allowed SQL Server versions and their compliant options per matching serviceTypes
 */
export interface LicenseSqlServerOrderConfiguration {
  /**
   */
  serviceType?: LicenseLicenseTypeEnum;
  /**
   */
  orderableVersions?: LicenseOrderableSqlServerCompatibilityInfos[];
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
  engagedUpTo?: Date;
  /**
   */
  contactBilling?: string;
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
 * All states a license Task can be in
 */
export type LicenseTaskStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
type PathslicensesqlserverGET = '/license/sqlserver/{serviceName}/tasks' | 
'/license/sqlserver/{serviceName}/tasks/{taskId}' | 
'/license/sqlserver/{serviceName}/serviceInfos' | 
'/license/sqlserver/{serviceName}' | 
'/license/sqlserver/orderableVersions' | 
'/license/sqlserver';

type PathslicensesqlserverPUT = '/license/sqlserver/{serviceName}/serviceInfos';

type PathslicensesqlserverPOST = '/license/sqlserver/{serviceName}/terminate' | 
'/license/sqlserver/{serviceName}/confirmTermination';

class Apilicensesqlserver extends ApiCommon {
  /**
  List the license.Task objects
  Tasks linked to this license
  **/
  public get(path: '/license/sqlserver/{serviceName}/tasks', pathParams: {serviceName?: string}, queryParams: {status?: LicenseTaskStateEnum, action?: LicenseActionType}): Promise<Number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/sqlserver/{serviceName}/tasks/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<LicenseTask>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/sqlserver/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Your SQL Server license
  Get this object properties
  **/
  public get(path: '/license/sqlserver/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<LicenseSqlserverSqlServer>;
  /**
  Get the orderable Sql Server versions
  Get the orderable Sql Server versions
  **/
  public get(path: '/license/sqlserver/orderableVersions', pathParams: null, queryParams: {ip?: string}): Promise<LicenseSqlServerOrderConfiguration[]>;
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/sqlserver', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathslicensesqlserverGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/sqlserver/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathslicensesqlserverPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/sqlserver/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/sqlserver/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  public post(path: PathslicensesqlserverPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
}
