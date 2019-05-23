import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * A short description of what does the Task on your license
 */
export type LicenseActionType = 'addWindowFromExistingSerial' | 'changeIp' | 'changeOs' | 'installLicense' | 'optionUpgrade' | 'releaseOption' | 'versionUpgrade';
/**
 * Possible values for license type
 */
export type LicenseLicenseTypeEnum = 'dedicated' | 'dedicatedCloud' | 'dedicatedFailover' | 'failover' | 'vm' | 'vps' | 'vps_ceph' | 'vps_classic' | 'vps_cloud' | 'vps_cloud_2016' | 'vps_ssd';
/**
 * Your License options
 */
export interface LicenseOption {
  /**
   * Quantity or corresponding label of the designated option enabled on your license
   *
   */
  amount?: string;
  /**
   * Specifies whether this option can be released or not
   *
   */
  canBeDeleted: boolean;
  /**
   * This option expiration date
   *
   */
  expirationDate: string;
  /**
   * This option designation
   *
   */
  label: LicenseOptionLabel;
  /**
   * This option related version
   *
   */
  version?: string;
}
/**
 * The name of an option currently enabled on your license
 */
export type LicenseOptionLabel = 'ANTISPAM_SPAMASSASSIN' | 'ANTIVIRUS_DRWEB' | 'ANTIVIRUS_KASPERSKY' | 'DOMAINS' | 'LANGUAGE_PACK' | 'POWERPACK' | 'SQL_SERVER' | 'VIRTUOZZO_CONTAINERS';
/**
 * All SQL options available for Windows products
 */
export interface LicenseOrderableWindowsCompatibilityInfos {
  /**
   */
  compliantSql: LicenseWindowsSqlVersionEnum[];
  /**
   */
  version: LicenseWindowsOsVersionEnum;
}
/**
 * All states a license can be in
 */
export type LicenseStateEnum = 'ok' | 'released' | 'terminated' | 'toDeliver';
/**
 * licenses Todos
 */
export interface LicenseTask {
  /**
   * This Task description
   *
   */
  action: LicenseActionType;
  /**
   * When was this Task done
   *
   */
  doneDate?: string;
  /**
   * The last time this Task was updated
   *
   */
  lastUpdate: string;
  /**
   * This Task name
   *
   */
  name: string;
  /**
   * Current Taks status
   *
   */
  status: LicenseTaskStateEnum;
  /**
   * This Task id
   *
   */
  taskId: number;
  /**
   * When was this Task created
   *
   */
  todoDate: string;
}
/**
 * All states a license Task can be in
 */
export type LicenseTaskStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Allowed windows versions and their compliant options per matching serviceTypes
 */
export interface LicenseWindowsOrderConfiguration {
  /**
   */
  orderableVersions: LicenseOrderableWindowsCompatibilityInfos[];
  /**
   */
  serviceType: LicenseLicenseTypeEnum;
}
/**
 * All versions for Windows products
 */
export type LicenseWindowsOsVersionEnum = 'WINDOWS_SERVER_2003_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2003_STANDARD_EDITION' | 'WINDOWS_SERVER_2003_WEB_EDITION' | 'WINDOWS_SERVER_2003_WEB_EDITION_2_CPU' | 'WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION' | 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION' | 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_STANDARD_EDITION' | 'WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_WEB_EDITION' | 'WINDOWS_SERVER_2008_WEB_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_WEB_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_WEB_STANDARD_EDITION' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU' | 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_STANDARD_EDITION' | 'WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU' | 'WINDOWS_SERVER_2012_WEB_EDITION' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES' | 'windows-server-2008-license-datacenter-edition-1-cpu' | 'windows-server-2008-license-datacenter-edition-2-cpu' | 'windows-server-2008-license-datacenter-edition-4-cpu' | 'windows-server-2008-license-enterprise-edition-1-cpu' | 'windows-server-2008-license-enterprise-edition-2-cpu' | 'windows-server-2008-license-enterprise-edition-4-cpu' | 'windows-server-2008-license-standard-edition-1-cpu' | 'windows-server-2008-license-standard-edition-2-cpu' | 'windows-server-2008-license-standard-edition-4-cpu' | 'windows-server-2008-license-web-edition-1-cpu' | 'windows-server-2008-license-web-edition-2-cpu' | 'windows-server-2008-license-web-edition-4-cpu' | 'windows-server-2012-license-datacenter-edition-1-cpu' | 'windows-server-2012-license-datacenter-edition-2-cpu' | 'windows-server-2012-license-datacenter-edition-4-cpu' | 'windows-server-2012-license-standard-edition-1-cpu' | 'windows-server-2012-license-standard-edition-2-cpu' | 'windows-server-2012-license-standard-edition-4-cpu' | 'windows-server-2016-license-datacenter-edition-1-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-8-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-8-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-8-cores' | 'windows-server-2016-license-standard-edition-1-cpu-10-cores' | 'windows-server-2016-license-standard-edition-1-cpu-12-cores' | 'windows-server-2016-license-standard-edition-1-cpu-14-cores' | 'windows-server-2016-license-standard-edition-1-cpu-16-cores' | 'windows-server-2016-license-standard-edition-1-cpu-18-cores' | 'windows-server-2016-license-standard-edition-1-cpu-20-cores' | 'windows-server-2016-license-standard-edition-1-cpu-22-cores' | 'windows-server-2016-license-standard-edition-1-cpu-24-cores' | 'windows-server-2016-license-standard-edition-1-cpu-8-cores' | 'windows-server-2016-license-standard-edition-2-cpu-10-cores' | 'windows-server-2016-license-standard-edition-2-cpu-12-cores' | 'windows-server-2016-license-standard-edition-2-cpu-14-cores' | 'windows-server-2016-license-standard-edition-2-cpu-16-cores' | 'windows-server-2016-license-standard-edition-2-cpu-18-cores' | 'windows-server-2016-license-standard-edition-2-cpu-20-cores' | 'windows-server-2016-license-standard-edition-2-cpu-22-cores' | 'windows-server-2016-license-standard-edition-2-cpu-24-cores' | 'windows-server-2016-license-standard-edition-2-cpu-8-cores' | 'windows-server-2016-license-standard-edition-4-cpu-10-cores' | 'windows-server-2016-license-standard-edition-4-cpu-12-cores' | 'windows-server-2016-license-standard-edition-4-cpu-14-cores' | 'windows-server-2016-license-standard-edition-4-cpu-16-cores' | 'windows-server-2016-license-standard-edition-4-cpu-18-cores' | 'windows-server-2016-license-standard-edition-4-cpu-20-cores' | 'windows-server-2016-license-standard-edition-4-cpu-22-cores' | 'windows-server-2016-license-standard-edition-4-cpu-24-cores' | 'windows-server-2016-license-standard-edition-4-cpu-8-cores' | 'windows-server-2019-license-datacenter-edition-10-cores' | 'windows-server-2019-license-datacenter-edition-12-cores' | 'windows-server-2019-license-datacenter-edition-14-cores' | 'windows-server-2019-license-datacenter-edition-16-cores' | 'windows-server-2019-license-datacenter-edition-18-cores' | 'windows-server-2019-license-datacenter-edition-20-cores' | 'windows-server-2019-license-datacenter-edition-22-cores' | 'windows-server-2019-license-datacenter-edition-24-cores' | 'windows-server-2019-license-datacenter-edition-26-cores' | 'windows-server-2019-license-datacenter-edition-28-cores' | 'windows-server-2019-license-datacenter-edition-30-cores' | 'windows-server-2019-license-datacenter-edition-32-cores' | 'windows-server-2019-license-datacenter-edition-34-cores' | 'windows-server-2019-license-datacenter-edition-36-cores' | 'windows-server-2019-license-datacenter-edition-38-cores' | 'windows-server-2019-license-datacenter-edition-40-cores' | 'windows-server-2019-license-datacenter-edition-42-cores' | 'windows-server-2019-license-datacenter-edition-44-cores' | 'windows-server-2019-license-datacenter-edition-46-cores' | 'windows-server-2019-license-datacenter-edition-48-cores' | 'windows-server-2019-license-datacenter-edition-50-cores' | 'windows-server-2019-license-datacenter-edition-52-cores' | 'windows-server-2019-license-datacenter-edition-54-cores' | 'windows-server-2019-license-datacenter-edition-56-cores' | 'windows-server-2019-license-datacenter-edition-58-cores' | 'windows-server-2019-license-datacenter-edition-60-cores' | 'windows-server-2019-license-datacenter-edition-62-cores' | 'windows-server-2019-license-datacenter-edition-64-cores' | 'windows-server-2019-license-datacenter-edition-8-cores' | 'windows-server-2019-license-standard-edition-10-cores' | 'windows-server-2019-license-standard-edition-12-cores' | 'windows-server-2019-license-standard-edition-14-cores' | 'windows-server-2019-license-standard-edition-16-cores' | 'windows-server-2019-license-standard-edition-18-cores' | 'windows-server-2019-license-standard-edition-20-cores' | 'windows-server-2019-license-standard-edition-22-cores' | 'windows-server-2019-license-standard-edition-24-cores' | 'windows-server-2019-license-standard-edition-26-cores' | 'windows-server-2019-license-standard-edition-28-cores' | 'windows-server-2019-license-standard-edition-30-cores' | 'windows-server-2019-license-standard-edition-32-cores' | 'windows-server-2019-license-standard-edition-34-cores' | 'windows-server-2019-license-standard-edition-36-cores' | 'windows-server-2019-license-standard-edition-38-cores' | 'windows-server-2019-license-standard-edition-40-cores' | 'windows-server-2019-license-standard-edition-42-cores' | 'windows-server-2019-license-standard-edition-44-cores' | 'windows-server-2019-license-standard-edition-46-cores' | 'windows-server-2019-license-standard-edition-48-cores' | 'windows-server-2019-license-standard-edition-50-cores' | 'windows-server-2019-license-standard-edition-52-cores' | 'windows-server-2019-license-standard-edition-54-cores' | 'windows-server-2019-license-standard-edition-56-cores' | 'windows-server-2019-license-standard-edition-58-cores' | 'windows-server-2019-license-standard-edition-60-cores' | 'windows-server-2019-license-standard-edition-62-cores' | 'windows-server-2019-license-standard-edition-64-cores' | 'windows-server-2019-license-standard-edition-8-cores';
/**
 * All SQL Server versions for Windows products
 */
export type LicenseWindowsSqlVersionEnum = 'SQL_SERVER_2008_STANDARD_EDITION' | 'SQL_SERVER_2008_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2008_WEB_EDITION' | 'SQL_SERVER_2008_WEB_EDITION_2_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION' | 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2012_WEB_EDITION_12_CORES' | 'SQL_SERVER_2012_WEB_EDITION_16_CORES' | 'SQL_SERVER_2012_WEB_EDITION_18_CORES' | 'SQL_SERVER_2012_WEB_EDITION_20_CORES' | 'SQL_SERVER_2012_WEB_EDITION_24_CORES' | 'SQL_SERVER_2012_WEB_EDITION_32_CORES' | 'SQL_SERVER_2012_WEB_EDITION_4_CORES' | 'SQL_SERVER_2012_WEB_EDITION_6_CORES' | 'SQL_SERVER_2012_WEB_EDITION_8_CORES';
/**
 * Your Windows license
 */
export interface LicenseWindowsWindows {
  /**
   * This license creation date
   *
   */
  creation: string;
  /**
   * Shall we delete this on expiration ?
   *
   */
  deleteAtExpiration: boolean;
  /**
   * The internal name of your license
   *
   */
  domain: string;
  /**
   * The ip on which this license is attached
   *
   */
  ip: string;
  /**
   * The license id on license provider side
   *
   */
  licenseId: string;
  /**
   * This license state
   *
   */
  status: LicenseStateEnum;
  /**
   * This license version
   *
   */
  version: LicenseWindowsOsVersionEnum;
}
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
type PathsLicenseWindowsGET = '/license/windows' | 
'/license/windows/orderableVersions' | 
'/license/windows/{serviceName}' | 
'/license/windows/{serviceName}/option' | 
'/license/windows/{serviceName}/option/{label}' | 
'/license/windows/{serviceName}/serviceInfos' | 
'/license/windows/{serviceName}/tasks' | 
'/license/windows/{serviceName}/tasks/{taskId}';

type PathsLicenseWindowsPUT = '/license/windows/{serviceName}' | 
'/license/windows/{serviceName}/serviceInfos';

type PathsLicenseWindowsPOST = '/license/windows/{serviceName}/confirmTermination' | 
'/license/windows/{serviceName}/sqlServer' | 
'/license/windows/{serviceName}/terminate';

type PathsLicenseWindowsDELETE = '/license/windows/{serviceName}/option/{label}';

export class ApiLicenseWindows extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/windows'): Promise<string[]>;
  /**
  Get the orderable Windows versions
  Get the orderable Windows versions
  **/
  public get(path: '/license/windows/orderableVersions'): Promise<LicenseWindowsOrderConfiguration[]>;
  /**
  Your Windows license
  Get this object properties
  **/
  public get(path: '/license/windows/{serviceName}', params: {serviceName: string}): Promise<LicenseWindowsWindows>;
  /**
  List the license.Option objects
  options attached to this license
  **/
  public get(path: '/license/windows/{serviceName}/option', params: {serviceName: string}): Promise<LicenseOptionLabel[]>;
  /**
  Your License options
  Get this object properties
  **/
  public get(path: '/license/windows/{serviceName}/option/{label}', params: {serviceName: string, label: LicenseOptionLabel}): Promise<LicenseOption>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/windows/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  List the license.Task objects
  tasks linked to this license
  **/
  public get(path: '/license/windows/{serviceName}/tasks', params: {serviceName: string, action?: LicenseActionType, status?: LicenseTaskStateEnum}): Promise<number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/windows/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: number}): Promise<LicenseTask>;
  public get(path: PathsLicenseWindowsGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Your Windows license
  Alter this object properties
  **/
  public put(path: '/license/windows/{serviceName}', params: {serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/windows/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsLicenseWindowsPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/windows/{serviceName}/confirmTermination', params: {serviceName: string}): Promise<string>;
  /**
  sqlServer operations
  Link your own sql server license to this Windows license
  **/
  public post(path: '/license/windows/{serviceName}/sqlServer', params: {serviceName: string}): Promise<LicenseTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/windows/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseWindowsPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Your License options
  release this Option
  **/
  public delete(path: '/license/windows/{serviceName}/option/{label}', params: {serviceName: string, label: LicenseOptionLabel}): Promise<LicenseTask>;
  public delete(path: PathsLicenseWindowsDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiLicenseWindows;
