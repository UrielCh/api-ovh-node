import { ApiCommon } from '@ovh-api/common';
/**
 * CDN service
 */
export interface HostingWebCdn {
  /**
   * Domain of this CDN
   *
   */
  domain?: string;
  /**
   * Option CDN free with the hosting ?
   *
   */
  free?: boolean;
  /**
   * Type of the CDN
   *
   */
  type?: string;
  /**
   * Version of the CDN
   *
   */
  version?: string;
  /**
   * The task ID working on this CDN
   *
   */
  taskId?: Number;
  /**
   * Status of the CDN option
   *
   */
  status?: HostingWebCdnStatusEnum;
}
/**
 * Dependency parameters. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
 */
export interface HostingWebModuleDependencyType {
  /**
   * The server on where your dependency is hosted
   *
   */
  server?: string;
  /**
   * The password associated with the user
   *
   */
  password?: string;
  /**
   * The port on where to contact this dependency
   *
   */
  port?: Number;
  /**
   * The prefix to set to the data to distinguish between the data from the module and the rest
   *
   */
  prefix?: string;
  /**
   * The name of this dependency
   *
   */
  name?: string;
  /**
   * Type
   *
   */
  type?: HostingWebModuleDependencyTypeEnum;
  /**
   * The user to use to connect to this dependency
   *
   */
  user?: string;
}
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * The volume history type
 */
export interface HostingWebMailBounce {
  /**
   * The datetime of this bounce
   *
   */
  date?: Date;
  /**
   * The email where you have the bounce
   *
   */
  to?: string;
  /**
   * The return message for this bounce
   *
   */
  message?: string;
}
/**
 * Hosting's state
 */
export type HostingWebStateEnum = 'active' | 'bloqued' | 'maintenance';
/**
 * Available cluster countries
 */
export type HostingWebCountryEnum = 'BE' | 'CZ' | 'DE' | 'ES' | 'FI' | 'FR' | 'IE' | 'IT' | 'LT' | 'NL' | 'PL' | 'PT' | 'UK';
/**
 * Hosting available configuration version
 */
export type HostingWebOvhConfigAvailableEngineVersionEnum = '5.4' | '5.5' | '5.6' | '7.0' | '7.1' | '7.2' | '7.3';
/**
 * A module specifically packaged by OVH
 */
export interface HostingWebModuleList {
  /**
   * The IDs of the module you can upgrade to
   *
   */
  upgradeFrom?: Number[];
  /**
   * The keywords for this module
   *
   */
  keywords?: string[];
  /**
   * The packager of this module for OVH
   *
   */
  author?: string;
  /**
   * Is the module available?
   *
   */
  active?: boolean;
  /**
   * All available languages for this module
   *
   */
  language?: HostingWebModuleLanguageEnum[];
  /**
   * The branch of the module
   *
   */
  branch?: HostingWebModuleBranchEnum;
  /**
   * Minimal language version required to run this module
   *
   */
  languageRequirement?: ComplexTypeUnitAndValue<string>;
  /**
   * The version of the module
   *
   */
  version?: string;
  /**
   * The type of the admin name
   *
   */
  adminNameType?: HostingWebModuleAdminNameTypeEnum;
  /**
   * Size of the module
   *
   */
  size?: ComplexTypeUnitAndValue<Number>;
  /**
   * The name of the module
   *
   */
  name?: string;
  /**
   * The ID of the module
   *
   */
  id?: Number;
  /**
   * Is this the latest version available?
   *
   */
  latest?: boolean;
}
/**
 * Hosting configuration version
 */
export type HostingWebOvhConfigEngineVersionEnum = '4.4' | '5.0' | '5.1' | '5.2' | '5.3' | '5.4' | '5.5' | '5.6' | '7.0' | '7.1' | '7.2' | '7.3' | 'AUTO';
/**
 * Database state
 */
export type HostingWebDatabaseStateEnum = 'close' | 'ok' | 'readonly';
/**
 * Types of statistics available for the database
 */
export type HostingWebDatabaseStatisticsTypeEnum = 'statement' | 'statementMeanTime';
/**
 * Language available for cron script
 */
export interface HostingWebCronLanguageAvailable {
  /**
   * Php versions
   *
   */
  php?: HostingWebPhpVersionAvailableEnum[];
  /**
   * NodeJS versions
   *
   */
  nodejs?: HostingWebNodejsVersionAvailableEnum[];
}
/**
 * Environment variables set into your webhosting account
 */
export interface HostingWebEnvVar {
  /**
   * Type of variable set
   *
   */
  type?: HostingWebEnvVarTypeEnum;
  /**
   * Value of the variable
   *
   */
  value?: string;
  /**
   * The task ID working on this variable
   *
   */
  taskId?: Number;
  /**
   * Name of the variable
   *
   */
  key?: string;
  /**
   * The environnement variable status
   *
   */
  status?: HostingWebEnvVarStatusEnum;
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
 * Url and port of a service
 */
export interface HostingWebAddress {
  /**
   * Port to use to access to the service
   *
   */
  port?: Number;
  /**
   * Url to contact the service
   *
   */
  url?: string;
}
/**
 * Types of action you can request for your web hosting
 */
export type HostingWebRequestActionEnum = 'CHECK_QUOTA' | 'FLUSH_CACHE' | 'SCAN_ANTIHACK';
/**
 * Different NodeJs versions available
 */
export type HostingWebNodejsVersionAvailableEnum = 'nodejs-10' | 'nodejs-11' | 'nodejs-8' | 'nodejs-9';
/**
 * The volume history type
 */
export interface HostingWebMailVolumeHistory {
  /**
   * The volume history size
   *
   */
  volume?: Number;
  /**
   * The datetime of this volume history point
   *
   */
  date?: Date;
}
/**
 * Struct which describs an offer
 */
export interface HostingWebCapabilities {
  /**
   * Describe all databases type you can have
   *
   */
  databases?: HostingWebDatabaseCreationDatabaseCapabilities[];
  /**
   * Language available for cron script
   *
   */
  languages?: HostingWebCronLanguageAvailable;
  /**
   * Does the offer allow 1-click modules?
   *
   */
  moduleOneClick?: boolean;
  /**
   * Does the offer allow crontab
   *
   */
  crontab?: boolean;
  /**
   * Number of domains you can attach to your hosting
   *
   */
  attachedDomains?: Number;
  /**
   * Number of environment variables allowed for your hosting
   *
   */
  envVars?: Number;
  /**
   * Does the offer allow SSH access
   *
   */
  ssh?: boolean;
  /**
   * Describe all privateDatabases type you can have
   *
   */
  privateDatabases?: HostingWebDatabaseCreationDatabaseCapabilities[];
  /**
   * Number of sites recommended for your hosting ( -1 for unlimited )
   *
   */
  sitesRecommended?: Number;
  /**
   * Describe all email offer you can have
   *
   */
  emails?: HostingWebCreationEmailCapabilities;
  /**
   * Marketing information about the current offer
   *
   */
  highlight?: HostingWebHighLightEnum;
  /**
   * Disk capacity and type available for your hosting ( null for unlimited )
   *
   */
  disk?: HostingWebDiskType;
  /**
   * Number of runtimes allowed for your hosting
   *
   */
  runtimes?: Number;
  /**
   * Number of database engines allowed for your hosting
   *
   */
  databaseEngines?: Number;
  /**
   * Number of ftp user you can create
   *
   */
  extraUsers?: Number;
  /**
   * Does the offer allow access to web files browser?
   *
   */
  filesBrowser?: boolean;
  /**
   * Traffic quota size for your hosting ( null for unlimited )
   *
   */
  traffic?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Struct describing the response for a visibility check request
 */
export interface HostingWebLocalSeoVisibilityCheckResponse {
  /**
   * Is the searched location already managed ?
   *
   */
  alreadyManaged?: boolean;
  /**
   * Searched location data
   *
   */
  searchData?: HostingWebLocalSeoSearchData;
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
 * OwnLogs status
 */
export type HostingWebOwnLogsStatusEnum = 'created' | 'creating' | 'deleting';
/**
 * Mail state enum
 */
export type HostingWebMailStateEnum = 'bounce' | 'force' | 'ko' | 'ok' | 'purging' | 'spam';
/**
 * Cron status
 */
export type HostingWebCronStatusEnum = 'disabled' | 'enabled' | 'suspended';
/**
 * Dump
 */
export interface HostingWebDatabaseDump {
  /**
   * Automatic deletion date of the dump
   *
   */
  deletionDate?: Date;
  /**
   * Dump id
   *
   */
  id?: Number;
  /**
   * Dump type
   *
   */
  type?: HostingWebDatabaseDumpDateEnum;
  /**
   * Creation date of the dump
   *
   */
  creationDate?: Date;
  /**
   * The task ID working on this dump
   *
   */
  taskId?: Number;
  /**
   * Dump url access
   *
   */
  url?: string;
  /**
   * The dump status
   *
   */
  status?: HostingWebDatabaseDumpStatusEnum;
}
/**
 * Available periods for statistics
 */
export type HostingWebStatisticsPeriodEnum = 'daily' | 'monthly' | 'weekly' | 'yearly';
/**
 * The type of the dependency. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
 */
export type HostingWebModuleDependencyTypeEnum = 'mysql';
/**
 * Virtual service
 */
export interface HostingWebAttachedDomain {
  /**
   * Domain path, relative to your home directory
   *
   */
  path?: string;
  /**
   * Put domain for separate the logs
   *
   */
  ownLog?: string;
  /**
   * IP location of the domain linked
   *
   */
  ipLocation?: HostingWebCountryEnum;
  /**
   * Firewall state for this path
   *
   */
  firewall?: HostingWebAttachedDomainFirewallEnum;
  /**
   * Domain linked (fqdn)
   *
   */
  domain?: string;
  /**
   * Is linked to the hosting cdn
   *
   */
  cdn?: HostingWebAttachedDomainCdnEnum;
  /**
   * Put domain in ssl certificate
   *
   */
  ssl?: boolean;
  /**
   * The runtime configuration ID used on this domain
   *
   */
  runtimeId?: Number;
  /**
   * The task ID working on this domain
   *
   */
  taskId?: Number;
  /**
   * The domain status
   *
   */
  status?: HostingWebAttachedDomainStatusEnum;
}
/**
 * Location offer
 */
export type HostingWebLocalSeoLocationOfferEnum = 'normal';
/**
 * Types of action you can request for your database
 */
export type HostingWebDatabaseRequestActionEnum = 'CHECK_QUOTA';
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
 * Struct which describs quota and available for a specific type of database
 */
export interface HostingWebDatabaseCreationDatabaseCapabilities {
  /**
   * Database software available on this platform
   *
   */
  engines?: HostingWebDatabaseDatabaseTypeEnum[];
  /**
   * Size of data can be used
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * Number of database left for creation
   *
   */
  available?: Number;
  /**
   * Technology use to isolate differents webhosting accounts
   *
   */
  isolation?: HostingWebDatabaseDatabaseIsolationEnum;
  /**
   * Database offer name
   *
   */
  type?: HostingWebDatabaseDatabaseCapabilitiesTypeEnum;
}
/**
 * EnvVar status
 */
export type HostingWebEnvVarStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * ExtraSqlPerso quota enum
 */
export type HostingWebDatabaseExtraSqlQuotaEnum = 100 | 200 | 25 | 400 | 800;
/**
 * Task object type listing
 */
export type HostingWebTaskObjectTypeEnum = 'Abuse' | 'AttachedDomain' | 'BlockedIp' | 'Cdn' | 'Cron' | 'Database' | 'Dump' | 'EnvVar' | 'Filerz' | 'Hostedssl' | 'Hosting' | 'Indy' | 'Infra' | 'Minor' | 'Module' | 'Other' | 'OvhConfig' | 'OvhOrg' | 'OwnLogs' | 'Runtime' | 'Scan' | 'Sqlperso' | 'User' | 'UserLogs' | 'Web' | 'Webd';
/**
 * A timestamp associated to a value
 */
export interface ComplexTypeChartTimestampValue {
  /**
   */
  value?: Number;
  /**
   */
  timestamp?: Number;
}
/**
 * Hosting configuration environment
 */
export type HostingWebOvhConfigEnvironmentEnum = 'development' | 'production';
/**
 * Available status for freedoms
 */
export type HostingWebFreedomStatusEnum = 'blockedByCustomer' | 'blockedBySystem' | 'ok' | 'preset';
/**
 * Local SEO locations
 */
export interface HostingWebLocalSeoLocation {
  /**
   * Local SEO offer for this location
   *
   */
  offer?: HostingWebLocalSeoLocationOfferEnum;
  /**
   * Country of the location
   *
   */
  country?: HostingWebLocalSeoLocationCountryEnum;
  /**
   * Account id
   *
   */
  accountId?: Number;
  /**
   * Address of the location
   *
   */
  address?: string;
  /**
   * Date of the last location's update
   *
   */
  lastUpdate?: Date;
  /**
   * Name of the location
   *
   */
  name?: string;
  /**
   * Location id
   *
   */
  id?: Number;
  /**
   * Date of the installation of the location
   *
   */
  creationDate?: Date;
  /**
   * Running task associated to the location
   *
   */
  taskId?: Number;
  /**
   * Current status of the location
   *
   */
  status?: HostingWebLocalSeoLocationStatusEnum;
}
/**
 * AttachedDomain status
 */
export type HostingWebAttachedDomainStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * Struct which describes mail offer available and his quota
 */
export interface HostingWebCreationEmailCapabilities {
  /**
   * Email account capacity
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * Number of email available for creation
   *
   */
  available?: Number;
}
/**
 * Attached domain firewall enum
 */
export type HostingWebAttachedDomainFirewallEnum = 'active' | 'none';
/**
 * Dump
 */
export interface HostingWebDump {
  /**
   * Source database name
   *
   */
  databaseName?: string;
  /**
   * Automatic deletion date of the dump
   *
   */
  deletionDate?: Date;
  /**
   * Dump id
   *
   */
  id?: Number;
  /**
   * Creation date of the dump
   *
   */
  creationDate?: Date;
  /**
   * Dump type
   *
   */
  type?: HostingWebDatabaseDumpDateEnum;
  /**
   * If source database was deleted
   *
   */
  orphan?: boolean;
  /**
   * Dump url access
   *
   */
  url?: string;
  /**
   * The task ID working on this dump
   *
   */
  taskId?: Number;
  /**
   * The dump status
   *
   */
  status?: HostingWebDatabaseDumpStatusEnum;
}
/**
 * Sqlperso service
 */
export interface HostingWebExtrasqlperso {
  /**
   * Number of database allowed by this option
   *
   */
  database?: Number;
  /**
   * Quota size allowed per each database by this option
   *
   */
  size?: ComplexTypeUnitAndValue<Number>;
  /**
   * The extraSqlPerso option name
   *
   */
  name?: string;
  /**
   * The task ID working on this extraSqlPerso
   *
   */
  taskId?: Number;
  /**
   * The extraSqlPerso option status
   *
   */
  status?: string;
}
/**
 * Struct which describs an boost offer from a service
 */
export interface HostingWebAvailableOfferStruct {
  /**
   * Available boost offer
   *
   */
  offer?: HostingWebOfferEnum;
  /**
   * The price in month for this boost offer
   *
   */
  price?: OrderPrice;
}
/**
 * Database dump status
 */
export type HostingWebDatabaseDumpStatusEnum = 'created' | 'creating' | 'deleting';
/**
 * Cdn status
 */
export type HostingWebCdnStatusEnum = 'created' | 'creating' | 'deleting' | 'flushing';
/**
 * Types of statistics available for the web hosting
 */
export type HostingWebStatisticsTypeEnum = 'in.ftpCommands' | 'in.httpHits' | 'in.httpMeanResponseTime' | 'out.tcpConn' | 'sys.cpuUsage' | 'sys.workerSpawnOverload';
/**
 * Database Type enum
 */
export type HostingWebDatabaseDatabaseTypeEnum = 'mariadb' | 'mongodb' | 'mysql' | 'postgresql' | 'redis';
/**
 * Struct describing a directory
 */
export interface HostingWebLocalSeoDirectory {
  /**
   * Identifier to use to get the result of a visibility check for the directory
   *
   */
  code?: string;
  /**
   * Human-readable name of the directory
   *
   */
  displayName?: string;
}
/**
 * Struct which describe available features for a database
 */
export interface HostingWebDatabaseDatabaseCapabilities {
  /**
   * URL of the database management tool
   *
   */
  guiURL?: string;
  /**
   * Availability of the getQuota function
   *
   */
  getRight?: boolean;
  /**
   * Availability of the restore function
   *
   */
  restore?: boolean;
  /**
   * Availability of the optimize function
   *
   */
  optimize?: boolean;
  /**
   * Availability of the changeRight function
   *
   */
  changeRight?: boolean;
  /**
   * Availability of the dump function
   *
   */
  dump?: boolean;
  /**
   * Availability of the delete function
   *
   */
  delete?: boolean;
  /**
   * Availability of the getQuota function
   *
   */
  getQuota?: boolean;
  /**
   * Availability of the changePassword function
   *
   */
  changePassword?: boolean;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Hostedssl
 */
export interface HostingWebSsl {
  /**
   * Provider of the HostedSsl
   *
   */
  provider?: string;
  /**
   * If the hostedssl is currently bound to a report
   *
   */
  isReportable?: boolean;
  /**
   * Type of the HostedSsl
   *
   */
  type?: string;
  /**
   * The task ID working on this HostedSsl
   *
   */
  taskId?: Number;
  /**
   * Status of the HostedSsl
   *
   */
  status?: HostingWebHostedsslStatusEnum;
  /**
   * Regenerable flag
   *
   */
  regenerable?: boolean;
}
/**
 * Struct describing a location being checked for visibility
 */
export interface HostingWebLocalSeoSearchData {
  /**
   * Zipcode of the location
   *
   */
  zip?: string;
  /**
   * Country of the location
   *
   */
  country?: string;
  /**
   * Province of the location
   *
   */
  province?: string;
  /**
   * Street numero of the location
   *
   */
  streetNo?: string;
  /**
   * City of the location
   *
   */
  city?: string;
  /**
   * Street of the location
   *
   */
  street?: string;
  /**
   * Name of the location
   *
   */
  name?: string;
  /**
   * Id of the search
   *
   */
  id?: Number;
  /**
   * Token to use to get the results of the search
   *
   */
  token?: string;
}
/**
 * Hosting automated emails
 */
export interface HostingWebEmail {
  /**
   * Bounce
   *
   */
  bounce?: Number;
  /**
   * Email state
   *
   */
  state?: HostingWebMailStateEnum;
  /**
   * Max email to sent per day
   *
   */
  maxPerDay?: Number;
  /**
   * Email sent since hosting creation
   *
   */
  sent?: Number;
  /**
   * Email sent today
   *
   */
  sentToday?: Number;
  /**
   * Email used to receive errors
   *
   */
  email?: string;
}
/**
 * Different credentials to manage your service
 */
export interface HostingWebUserServiceCredentials {
  /**
   * Credentials to manage files by ftp
   *
   */
  ftp?: HostingWebUserCredentials;
  /**
   * Credentials to manage webhosting by ssh
   *
   */
  ssh?: HostingWebUserCredentials;
}
/**
 * Struct describing the availability of an email address for a local SEO order
 */
export interface HostingWebLocalSeoEmailAvailability {
  /**
   * Availability of the email address
   *
   */
  availability?: HostingWebLocalSeoAccountEmailAvailabilityEnum;
  /**
   * Hosting on which the email address is used
   *
   */
  serviceName?: string;
}
/**
 * A value set tagged with its unit and serie name
 */
export interface ComplexTypeChartSerie<T> {
  /**
   */
  unit?: string;
  /**
   */
  values?: T[];
  /**
   */
  serieName?: string;
}
/**
 * Location status
 */
export type HostingWebLocalSeoLocationStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * Status of a listing
 */
export type HostingWebLocalSeoFlowStatusEnum = 'ALL_INFORMATION_SUBMITTED' | 'DONT_REMOVE' | 'INACTIVE' | 'MANUALLY_DEACTIVATED' | 'NEEDS_REVIEW' | 'NOT_SUPPORTED' | 'NO_ACTION_NEEDED' | 'REMOVAL_NEEDED' | 'REMOVAL_REVIEW_NEEDED' | 'REMOVAL_SUBMITTED' | 'REMOVED' | 'SUBMISSION_NEEDED' | 'WAITING_DIRECTORY_ACTION' | 'WAITING_USER_ACTION';
/**
 * Hostedssl report value
 */
export type HostingWebHostedsslReportValueEnum = 'completed' | 'in-progress' | 'non-completed' | 'non-required' | 'not-applicable' | 'not-provided';
/**
 * Hosting configuration engine
 */
export type HostingWebOvhConfigEngineNameEnum = 'php' | 'phpcgi';
/**
 * Web Hosting
 */
export interface HostingWebService {
  /**
   * Traffic quota allowed ( null = unlimited )
   *
   */
  trafficQuotaSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * Cluster name
   *
   */
  cluster?: string;
  /**
   * Has a HostedSSL service linked on the hosting
   *
   */
  hasHostedSsl?: boolean;
  /**
   * Traffic quota used
   *
   */
  trafficQuotaUsed?: ComplexTypeUnitAndValue<Number>;
  /**
   * Set the name displayed in ManagerV6 for your hosting (max 50 chars)
   *
   */
  displayName?: string;
  /**
   * The recommended ip for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL )
   *
   */
  hostingIp?: string;
  /**
   * List of updates on your hosting
   *
   */
  updates?: string[];
  /**
   * Hosting's OS
   *
   */
  operatingSystem?: HostingWebOperatingSystemEnum;
  /**
   * Hosting's main login
   *
   */
  primaryLogin?: string;
  /**
   * Hosting offer
   *
   */
  offer?: HostingWebOfferCapabilitiesEnum;
  /**
   * Available clusterIp by countries
   *
   */
  countriesIp?: HostingWebCountriesIp[];
  /**
   * State of your hosting
   *
   */
  state?: HostingWebStateEnum;
  /**
   * Current boost offer
   *
   */
  boostOffer?: HostingWebOfferCapabilitiesEnum;
  /**
   * Datacenter where this account is located
   *
   */
  datacenter?: HostingWebDatacenterEnum;
  /**
   * Service name
   *
   */
  serviceName?: string;
  /**
   * State of available php versions for this account
   *
   */
  phpVersions?: HostingWebPhpVersion[];
  /**
   * Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )
   *
   */
  token?: string;
  /**
   * Path of your home
   *
   */
  home?: string;
  /**
   * This direct ipv6 to your cluster ( usefull for application like api )
   *
   */
  clusterIpv6?: string;
  /**
   * Available offers for boost option
   *
   */
  availableBoostOffer?: HostingWebAvailableOfferStruct[];
  /**
   * /hosting/web/{serviceName}/ovhConfig is stored in cache. This date is the last refresh of this data
   *
   */
  lastOvhConfigScan?: Date;
  /**
   * Space used
   *
   */
  quotaUsed?: ComplexTypeUnitAndValue<Number>;
  /**
   * Has a CDN service linked on the hosting
   *
   */
  hasCdn?: boolean;
  /**
   * Filer name
   *
   */
  filer?: string;
  /**
   * If your offer is old, return a recommended offer to migrate on
   *
   */
  recommendedOffer?: HostingWebOfferEnum;
  /**
   * The recommended ipv6 for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL )
   *
   */
  hostingIpv6?: string;
  /**
   * Space allowed
   *
   */
  quotaSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * URLs to use to manage your webhosting
   *
   */
  serviceManagementAccess?: HostingWebServiceAccess;
  /**
   * Hosting resource type
   *
   */
  resourceType?: HostingWebResourceEnum;
  /**
   * This direct ip to your cluster ( usefull for application like api )
   *
   */
  clusterIp?: string;
}
/**
 * Local SEO accounts
 */
export interface HostingWebLocalSeoAccount {
  /**
   * Date of the last account's update
   *
   */
  lastUpdate?: Date;
  /**
   * Account id
   *
   */
  id?: Number;
  /**
   * Date of creation of the account
   *
   */
  creationDate?: Date;
  /**
   * Running task associated to the account
   *
   */
  taskId?: Number;
  /**
   * Email address associated to the account
   *
   */
  email?: string;
  /**
   * Current status of the account
   *
   */
  status?: HostingWebLocalSeoAccountStatusEnum;
}
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
/**
 * Runtime state enum
 */
export type HostingWebRuntimeStateEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * User, url and port of a service
 */
export interface HostingWebUserCredentials {
  /**
   * Port to use to access to the service
   *
   */
  port?: Number;
  /**
   * Login to authentificate you on the service
   *
   */
  user?: string;
  /**
   * Url to contact the service
   *
   */
  url?: string;
}
/**
 * Hosting users
 */
export interface HostingWebUser {
  /**
   * Is this user primary
   *
   */
  isPrimaryAccount?: boolean;
  /**
   * Credentials to manage your webhosting
   *
   */
  serviceManagementCredentials?: HostingWebUserServiceCredentials;
  /**
   * User ssh status
   *
   */
  sshState?: HostingWebUserSshStateEnum;
  /**
   * User state
   *
   */
  state?: HostingWebUserStateEnum;
  /**
   * Login used to connect on FTP and SSH
   *
   */
  login?: string;
  /**
   * The task ID working on this user
   *
   */
  taskId?: Number;
  /**
   * The user status
   *
   */
  status?: HostingWebUserStatusEnum;
  /**
   * Home directory
   *
   */
  home?: string;
}
/**
 * Account's state
 */
export type HostingWebUserStateEnum = 'off' | 'rw';
/**
 * Location country
 */
export type HostingWebLocalSeoLocationCountryEnum = 'FR';
/**
 * UserLogs status
 */
export type HostingWebUserLogsStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * Indicates the current support state of your database version
 */
export type HostingWebDatabaseSupportedVersionEnum = 'beta' | 'deprecated' | 'stable';
/**
 * Hosting's OS
 */
export type HostingWebOperatingSystemEnum = 'linux';
/**
 * Sync status of a listing
 */
export type HostingWebLocalSeoListingStatusEnum = 'IN_SYNC' | 'NOT_FOUND' | 'NOT_IN_SYNC' | 'NOT_SUPPORTED' | 'NO_ONLINE_LISTING' | 'TECHNICAL_PROBLEMS';
/**
 * Database Version enum
 */
export type HostingWebDatabaseVersionEnum = '3.4' | '4.0' | '5.1' | '5.5' | '5.6' | '8.4';
/**
 * Hostedssl status
 */
export type HostingWebHostedsslStatusEnum = 'created' | 'creating' | 'deleting' | 'importing' | 'regenerating';
/**
 * History of your boost requests
 */
export interface HostingWebBoostHistory {
  /**
   * The date when the change has been requested
   *
   */
  date?: Date;
  /**
   * Offer when the change was made
   *
   */
  offer?: HostingWebOfferCapabilitiesEnum;
  /**
   * Account who requested the change
   *
   */
  accountId?: string;
  /**
   * Boost offer used
   *
   */
  boostOffer?: HostingWebOfferCapabilitiesEnum;
}
/**
 * Private database orderable versions
 */
export type HostingPrivateDatabaseOrderableVersionEnum = 'mariadb_10.1' | 'mariadb_10.2' | 'mongodb_3.4' | 'mongodb_4.0' | 'mysql_5.5' | 'mysql_5.6' | 'mysql_5.7' | 'postgresql_10' | 'postgresql_11' | 'postgresql_9.4' | 'postgresql_9.5' | 'postgresql_9.6' | 'redis_3.2' | 'redis_4.0';
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
 * List of dump types
 */
export type HostingWebDatabaseDumpDateEnum = 'daily.1' | 'now' | 'weekly.1';
/**
 * Module status
 */
export type HostingWebModuleStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * Hostedssl Report
 */
export interface HostingWebSslReport {
  /**
   * Trade name verified directly with registration agency or through a verified third party
   *
   */
  tradeNameVerificationStatus?: HostingWebHostedsslReportValueEnum;
  /**
   * Applicant's legal status obtained or verified directly with registration agency
   *
   */
  organizationValidationStatus?: HostingWebHostedsslReportValueEnum;
  /**
   * Terms and conditions agreements acceptance
   *
   */
  termsAndConditionsAcceptanceStatus?: HostingWebHostedsslReportValueEnum;
  /**
   * The order ID from given hostedssl provider
   *
   */
  providerOrderId?: string;
  /**
   * Approval verified through a phone call to the contract signer
   *
   */
  phoneCallApprovalStatus?: HostingWebHostedsslReportValueEnum;
  /**
   * "Domain control validation" test status done by certification authority
   *
   */
  domainControlValidationStatus?: HostingWebHostedsslReportValueEnum;
  /**
   * "Certificate signing request" test status done by certification authority
   *
   */
  certificateSigningRequestStatus?: HostingWebHostedsslReportValueEnum;
}
/**
 * Types of action you can request for your mail
 */
export type HostingWebMailActionEnum = 'BLOCK' | 'PURGE' | 'UNBLOCK';
/**
 * Ovhconfig status
 */
export type HostingWebOvhConfigStatusEnum = 'created' | 'rollbacking' | 'updating';
/**
 * Cron's language
 */
export type HostingWebCronLanguageEnum = 'node10' | 'node11' | 'node8' | 'node9' | 'other' | 'php4' | 'php5.2' | 'php5.3' | 'php5.4' | 'php5.5' | 'php5.6' | 'php7.0' | 'php7.1' | 'php7.2' | 'php7.3' | 'python2' | 'python3' | 'ruby2.4' | 'ruby2.5' | 'ruby2.6';
/**
 * Database capabitities type enum
 */
export type HostingWebDatabaseDatabaseCapabilitiesTypeEnum = 'extraSqlPerso' | 'local' | 'privateDatabase' | 'sqlLocal' | 'sqlPerso' | 'sqlPro';
/**
 * Highlight tips for offer
 */
export type HostingWebHighLightEnum = 'best-seller' | 'new';
/**
 * Branch enum
 */
export type HostingWebModuleBranchEnum = 'old' | 'stable' | 'testing';
/**
 * User status
 */
export type HostingWebUserStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Database status
 */
export type HostingWebDatabaseStatusEnum = 'checking' | 'created' | 'creating' | 'deleting' | 'dumping' | 'importing' | 'locked' | 'optimizing' | 'restoring' | 'updating';
/**
 * EnvVar type
 */
export type HostingWebEnvVarTypeEnum = 'integer' | 'password' | 'string';
/**
 * The runtime configuration of an attached domain for cloud web offer
 */
export interface HostingWebRuntime {
  /**
   * Return if the runtime configuration can be deleted
   *
   */
  isDeletable?: boolean;
  /**
   * Is the runtime configuration is the one by default for the hosting
   *
   */
  isDefault?: boolean;
  /**
   * The last update date of the runtime configuration
   *
   */
  lastUpdate?: Date;
  /**
   * The custom display name of the runtime configuration
   *
   */
  name?: string;
  /**
   * The client application environment
   *
   */
  appEnv?: HostingWebRuntimeEnvEnum;
  /**
   * The client application public directory
   *
   */
  publicDir?: string;
  /**
   * The client application bootstrap script
   *
   */
  appBootstrap?: string;
  /**
   * The runtime configuration ID
   *
   */
  id?: Number;
  /**
   * The creation date of the runtime configuration
   *
   */
  creationDate?: Date;
  /**
   * The backend type of the runtime
   *
   */
  type?: HostingWebRuntimeTypeEnum;
  /**
   * The link current task for the runtime configuration
   *
   */
  taskId?: Number;
  /**
   * The status of the runtime
   *
   */
  status?: HostingWebRuntimeStateEnum;
}
/**
 * Sync status of a location field
 */
export type HostingWebLocalSeoFieldStatusEnum = 'MATCH' | 'MISMATCH' | 'MISSING' | 'NOT_APPLICABLE' | 'PRESENT';
/**
 * State of available php versions for this account
 */
export interface HostingWebPhpVersion {
  /**
   * PHP version
   *
   */
  version?: string;
  /**
   * Current support of this php version
   *
   */
  support?: HostingWebPhpVersionStateEnum;
}
/**
 * Account's ssh state
 */
export type HostingWebUserSshStateEnum = 'active' | 'none' | 'sftponly';
/**
 * List of backup types
 */
export type HostingWebBackupTypeEnum = 'daily.1' | 'daily.2' | 'daily.3' | 'weekly.1' | 'weekly.2';
/**
 * Struct describing a list of directories ordered by type
 */
export interface HostingWebLocalSeoDirectoriesList {
  /**
   * Search engines
   *
   */
  searchEngines?: HostingWebLocalSeoDirectory[];
  /**
   * Social networks
   *
   */
  socialNetworks?: HostingWebLocalSeoDirectory[];
  /**
   * Navigation systems
   *
   */
  navigationSystems?: HostingWebLocalSeoDirectory[];
}
/**
 * Availability of an email address for a local SEO order
 */
export type HostingWebLocalSeoAccountEmailAvailabilityEnum = 'available' | 'merge' | 'nic' | 'taken';
/**
 * Tasks
 */
export interface HostingWebTask {
  /**
   * last update
   *
   */
  lastUpdate?: Date;
  /**
   * Function name
   *
   */
  function?: string;
  /**
   * the id of the task
   *
   */
  id?: Number;
  /**
   * Completion date
   *
   */
  doneDate?: Date;
  /**
   * Task Creation date
   *
   */
  startDate?: Date;
  /**
   * Task related object ID
   *
   */
  objectId?: string;
  /**
   * Task status
   *
   */
  status?: HostingWebTaskStatusEnum;
  /**
   * Task object type
   *
   */
  objectType?: HostingWebTaskObjectTypeEnum;
}
/**
 * Freedoms linked to this hosting account
 */
export interface HostingWebFreedom {
  /**
   * Freedom domain
   *
   */
  domain?: string;
  /**
   * Freedom type
   *
   */
  type?: string;
  /**
   * Available status for freedom
   *
   */
  status?: HostingWebFreedomStatusEnum;
}
/**
 * Hosting configuration firewall
 */
export type HostingWebOvhConfigHttpFirewallEnum = 'none' | 'security';
/**
 * Runtime env enum
 */
export type HostingWebRuntimeEnvEnum = 'development' | 'production';
/**
 * Runtime backend type enum
 */
export type HostingWebRuntimeTypeEnum = 'nodejs-10' | 'nodejs-11' | 'nodejs-8' | 'nodejs-9' | 'phpfpm-5.6' | 'phpfpm-7.0' | 'phpfpm-7.1' | 'phpfpm-7.2' | 'phpfpm-7.3' | 'python-2' | 'python-3' | 'ruby-2.4' | 'ruby-2.5' | 'ruby-2.6';
/**
 * Hosting modules installed
 */
export interface HostingWebModule {
  /**
   * Login for the admin account
   *
   */
  adminName?: string;
  /**
   * Where the module is installed, relative to your home directory
   *
   */
  path?: string;
  /**
   * Date of the last module's upgrade
   *
   */
  lastUpdate?: Date;
  /**
   * The language of the module
   *
   */
  language?: HostingWebModuleLanguageEnum;
  /**
   * Installation ID
   *
   */
  id?: Number;
  /**
   * The admin folder, relative to the module's installation path
   *
   */
  adminFolder?: string;
  /**
   * ID of the module associated with this installation
   *
   */
  moduleId?: Number;
  /**
   * Date of the installation of the module
   *
   */
  creationDate?: Date;
  /**
   * The URL from where your module can be reached
   *
   */
  targetUrl?: string;
  /**
   * The task ID working on this module
   *
   */
  taskId?: Number;
  /**
   * The module status
   *
   */
  status?: HostingWebModuleStatusEnum;
  /**
   * The dependencies to which the module has access. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
   *
   */
  dependencies?: HostingWebModuleDependencyType[];
}
/**
 * Hosting crons
 */
export interface HostingWebCron {
  /**
   * Description field for you
   *
   */
  description?: string;
  /**
   * Cron language
   *
   */
  language?: HostingWebCronLanguageEnum;
  /**
   * Cron's id
   *
   */
  id?: Number;
  /**
   * Email used to receive error log ( stderr )
   *
   */
  email?: string;
  /**
   * Command to execute
   *
   */
  command?: string;
  /**
   * Frequency ( crontab format ) defined for the script ( minutes are ignored )
   *
   */
  frequency?: string;
  /**
   * Cron status
   *
   */
  status?: HostingWebCronStatusEnum;
}
/**
 * Private database available ram sizes
 */
export type HostingPrivateDatabaseAvailableRamSizeEnum = '1024' | '2048' | '4096' | '512';
/**
 * Hosting own logs
 */
export interface HostingWebOwnLogs {
  /**
   * The ownlogs fqdn available on logs.clusterXX.hosting.ovh.net
   *
   */
  fqdn?: string;
  /**
   * Identifier of this ownLogs
   *
   */
  id?: Number;
  /**
   * The task ID working on this ownLogs
   *
   */
  taskId?: Number;
  /**
   * Status of this ownLogs
   *
   */
  status?: HostingWebOwnLogsStatusEnum;
}
/**
 * Task's status
 */
export type HostingWebTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'init' | 'todo';
/**
 * Different PHP versions available
 */
export type HostingWebPhpVersionAvailableEnum = 'phpfpm-5.6' | 'phpfpm-7.0' | 'phpfpm-7.1' | 'phpfpm-7.2' | 'phpfpm-7.3';
/**
 * Different url to manage your service
 */
export interface HostingWebServiceAccess {
  /**
   * Address with url and port to manage files by ftp
   *
   */
  ftp?: HostingWebAddress;
  /**
   * Address with url and port to manage webhosting by ssh
   *
   */
  ssh?: HostingWebAddress;
  /**
   * Address to see your webhosting without domain
   *
   */
  http?: HostingWebAddress;
}
/**
 * Install language
 */
export type HostingWebModuleLanguageEnum = 'cz' | 'de' | 'en' | 'es' | 'fi' | 'fr' | 'it' | 'lt' | 'nl' | 'pl' | 'pt';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Database Available and Default version
 */
export interface HostingWebDatabaseAvailableVersionStruct {
  /**
   * Database default version
   *
   */
  default?: HostingWebDatabaseVersionEnum;
  /**
   * Database available version
   *
   */
  list?: HostingWebDatabaseVersionEnum[];
}
/**
 * Hosting's type
 */
export type HostingWebResourceEnum = 'bestEffort' | 'cloud' | 'dedicated' | 'shared';
/**
 * Hosting indys
 */
export interface HostingWebIndy {
  /**
   * AttachedDomain IDs linked to this multidomain
   *
   */
  attachedDomains?: string[];
  /**
   * User status
   *
   */
  state?: HostingWebUserStateEnum;
  /**
   * Login of the multidomain independent user
   *
   */
  login?: string;
  /**
   * Home directory
   *
   */
  home?: string;
}
/**
 * The type of the admin name
 */
export type HostingWebModuleAdminNameTypeEnum = 'email' | 'string';
/**
 * Available clusterIp by country
 */
export interface HostingWebCountriesIp {
  /**
   * The whois country of the ip
   *
   */
  country?: HostingWebCountryEnum;
  /**
   * The cluster ipv6
   *
   */
  ipv6?: string;
  /**
   * The cluster ip
   *
   */
  ip?: string;
}
/**
 * Database mode
 */
export type HostingWebDatabaseModeEnum = 'besteffort' | 'classic' | 'module';
/**
 * Database Isolation enum
 */
export type HostingWebDatabaseDatabaseIsolationEnum = 'dedicated' | 'local' | 'shared';
/**
 * Different support of PHP versions
 */
export type HostingWebPhpVersionStateEnum = 'BETA' | 'END_OF_LIFE' | 'SECURITY_FIXES' | 'SUPPORTED';
/**
 * Disk properties (size and type of disk)
 */
export interface HostingWebDiskType {
  /**
   * Unit for disk size
   *
   */
  unit?: string;
  /**
   * Type of the disk
   *
   */
  type?: HostingWebDiskTypeEnum;
  /**
   * Size of the disk
   *
   */
  value?: Number;
}
/**
 * Struct describing a visibility check result
 */
export interface HostingWebLocalSeoVisibilityCheckResultResponse {
  /**
   * Country of the location
   *
   */
  country?: string;
  /**
   * The location's street number (sync status)
   *
   */
  streetNoStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * City of the location
   *
   */
  city?: string;
  /**
   * A valid url for the location's website (sync status)
   *
   */
  websiteStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * A localized combination of street and streetNo (sync status)
   *
   */
  streetAndNoStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The directory where this listing appears
   *
   */
  directoryType?: string;
  /**
   * The date and time the listing was created in database
   *
   */
  dateCreated?: Date;
  /**
   * Province of the location
   *
   */
  province?: string;
  /**
   * The location's street address
   *
   */
  street?: string;
  /**
   * Zipcode of the location (sync status)
   *
   */
  zipStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * A localized combination of street and streetNo
   *
   */
  streetAndNo?: string;
  /**
   * The location's contact phone number (sync status)
   *
   */
  phoneStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * A contact email for the location
   *
   */
  email?: string;
  /**
   * Zipcode of the location
   *
   */
  zip?: string;
  /**
   * A valid url for the location's website
   *
   */
  website?: string;
  /**
   * The street type for Spain
   *
   */
  streetType?: string;
  /**
   * The location's street number
   *
   */
  streetNo?: string;
  /**
   * The listing id in the directory database
   *
   */
  listingId?: string;
  /**
   * The location's street address (sync status)
   *
   */
  streetStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * A contact email for the location (sync status)
   *
   */
  emailStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The street type for Spain (sync status)
   *
   */
  streetTypeStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The location's contact phone number
   *
   */
  phone?: string;
  /**
   * Province of the location (sync status)
   *
   */
  provinceStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * City of the location (sync status)
   *
   */
  cityStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The location's name used for this listing
   *
   */
  name?: string;
  /**
   * The location's name used for this listing (sync status)
   *
   */
  nameStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The listing url on the directory website
   *
   */
  listingUrl?: string;
  /**
   * Country of the location (sync status)
   *
   */
  countryStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The status of the current listing
   *
   */
  flowStatus?: HostingWebLocalSeoFlowStatusEnum;
  /**
   * The sync status of the listing
   *
   */
  syncStatus?: HostingWebLocalSeoListingStatusEnum;
}
/**
 * Database
 */
export interface HostingWebDatabase {
  /**
   * Your database server name
   *
   */
  server?: string;
  /**
   * Date of the last check quota
   *
   */
  lastCheck?: Date;
  /**
   * The number of available dumps associated to this database
   *
   */
  dumps?: Number;
  /**
   * Indicates the current support state of your database version
   *
   */
  versionSupport?: HostingWebDatabaseSupportedVersionEnum;
  /**
   * Type of your database
   *
   */
  type?: HostingWebDatabaseDatabaseTypeEnum;
  /**
   * Database version following the database type
   *
   */
  version?: HostingWebDatabaseVersionEnum;
  /**
   * Mode of your database
   *
   */
  mode?: HostingWebDatabaseModeEnum;
  /**
   * URL for the graphical user interface
   *
   */
  guiURL?: string;
  /**
   * The port on where to contact this database
   *
   */
  port?: Number;
  /**
   * Space used
   *
   */
  quotaUsed?: ComplexTypeUnitAndValue<Number>;
  /**
   * Database name (like mydb.mysql.db or mydb.postgres.db)
   *
   */
  name?: string;
  /**
   * Space allowed
   *
   */
  quotaSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * Database state
   *
   */
  state?: HostingWebDatabaseStateEnum;
  /**
   * Database user name
   *
   */
  user?: string;
  /**
   * The task ID working on this database
   *
   */
  taskId?: Number;
  /**
   * The database status
   *
   */
  status?: HostingWebDatabaseStatusEnum;
}
/**
 * Hosting's offer
 */
export type HostingWebOfferEnum = 'CLOUDWEB_1' | 'CLOUDWEB_2' | 'CLOUDWEB_3' | 'KS' | 'PERFORMANCE_1' | 'PERFORMANCE_2' | 'PERFORMANCE_3' | 'PERFORMANCE_4' | 'PERSO' | 'PRO' | 'START';
/**
 * Attached domain cdn enum
 */
export type HostingWebAttachedDomainCdnEnum = 'active' | 'none';
/**
 * Available datacenters
 */
export type HostingWebDatacenterEnum = 'gra1' | 'gra2' | 'p19';
/**
 * Account status
 */
export type HostingWebLocalSeoAccountStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * Disk type available
 */
export type HostingWebDiskTypeEnum = 'HDD' | 'SSD';
/**
 * Virtual service
 */
export interface HostingWebOvhConfig {
  /**
   * Name of engine you want
   *
   */
  engineVersion?: HostingWebOvhConfigEngineVersionEnum;
  /**
   * Container to run this website
   *
   */
  container?: string;
  /**
   * Config path, relative to your home directory
   *
   */
  path?: string;
  /**
   * Environment configuration you want
   *
   */
  environment?: HostingWebOvhConfigEnvironmentEnum;
  /**
   * If .ovhConfig exists
   *
   */
  fileExist?: boolean;
  /**
   * If this configuration is an old configuration
   *
   */
  historical?: boolean;
  /**
   * Configuration's id
   *
   */
  id?: Number;
  /**
   * Configuration you want for http firewall
   *
   */
  httpFirewall?: HostingWebOvhConfigHttpFirewallEnum;
  /**
   * Version of engine you want
   *
   */
  engineName?: HostingWebOvhConfigEngineNameEnum;
  /**
   * When ovhconfig was created, or found for the first time, on the hosting servers
   *
   */
  creationDate?: Date;
  /**
   * The task ID working on this configuration
   *
   */
  taskId?: Number;
  /**
   * The configuration status
   *
   */
  status?: HostingWebOvhConfigStatusEnum;
}
/**
 * Hosting users logs
 */
export interface HostingWebUserLogs {
  /**
   * OwnLogs where this userLogs will be enable. Default : main domain ownlogs
   *
   */
  ownLogsId?: Number;
  /**
   * Description field for you
   *
   */
  description?: string;
  /**
   * The userLogs login used to connect to logs.ovh.net
   *
   */
  login?: string;
  /**
   * Date of the user creation
   *
   */
  creationDate?: Date;
  /**
   * The task ID working on this userLogs
   *
   */
  taskId?: Number;
  /**
   * Status of this userLogs
   *
   */
  status?: HostingWebUserLogsStatusEnum;
}
/**
 * Hosting configuration image to run website
 */
export type HostingWebOvhconfigContainerEnum = 'jessie.i386' | 'legacy' | 'stable' | 'testing';
/**
 * Hosting's offer
 */
export type HostingWebOfferCapabilitiesEnum = '1000gp' | '20gp' | '240gp' | '240pack' | '240plan' | '300gp' | '60gp' | '720pack' | '720plan' | '90pack' | '90plan' | 'CLOUDWEB_1' | 'CLOUDWEB_2' | 'CLOUDWEB_3' | 'KS' | 'PERFORMANCE_1' | 'PERFORMANCE_2' | 'PERFORMANCE_3' | 'PERFORMANCE_4' | 'PERSO' | 'PRO' | 'START' | 'business' | 'cloudweb1' | 'cloudweb2' | 'cloudweb3' | 'cloudwebbetax1' | 'depro2012' | 'deprol2012' | 'deproxl2012' | 'deproxxl2012' | 'destart2012' | 'destartl2012' | 'destartxl2012' | 'domainpack' | 'itbusiness2012' | 'itperso2012' | 'itpremium2012' | 'kimsufi2015' | 'mailpack' | 'mailplan' | 'mediapack' | 'mediaplan' | 'ovhpro1To' | 'ovhpro2To' | 'ovhpro5To' | 'paas2014beta' | 'perf2014x1' | 'perf2014x2' | 'perf2014x3' | 'perf2014x4' | 'perso2010' | 'perso2014' | 'premium' | 'pro2010' | 'pro2014' | 'start10g' | 'start10m' | 'start1g' | 'start1ges' | 'start1m' | 'start5g' | 'starter' | 'xxlpack' | 'xxlplan';
type PathshostingwebGET = '/hosting/web' | 
'/hosting/web/offerCapabilities' | 
'/hosting/web/moduleList' | 
'/hosting/web/moduleList/{id}' | 
'/hosting/web/availableOffer' | 
'/hosting/web/{serviceName}/user' | 
'/hosting/web/{serviceName}/user/{login}' | 
'/hosting/web/{serviceName}/extraSqlPerso' | 
'/hosting/web/{serviceName}/extraSqlPerso/{name}' | 
'/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfos' | 
'/hosting/web/{serviceName}/extraSqlPerso/{name}/databases' | 
'/hosting/web/{serviceName}/boostHistory/{date}' | 
'/hosting/web/{serviceName}/boostHistory' | 
'/hosting/web/{serviceName}/ssl/domains' | 
'/hosting/web/{serviceName}/ssl/report' | 
'/hosting/web/{serviceName}/ssl' | 
'/hosting/web/{serviceName}/email/bounces' | 
'/hosting/web/{serviceName}/email/volumes' | 
'/hosting/web/{serviceName}/email' | 
'/hosting/web/{serviceName}/envVar' | 
'/hosting/web/{serviceName}/envVar/{key}' | 
'/hosting/web/{serviceName}/databaseAvailableVersion' | 
'/hosting/web/{serviceName}/statistics' | 
'/hosting/web/{serviceName}/attachedDomain' | 
'/hosting/web/{serviceName}/attachedDomain/{domain}' | 
'/hosting/web/{serviceName}/runtimeAvailableTypes' | 
'/hosting/web/{serviceName}/ownLogs/{id}' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs' | 
'/hosting/web/{serviceName}/ownLogs' | 
'/hosting/web/{serviceName}/ovhConfig/{id}' | 
'/hosting/web/{serviceName}/ovhConfig' | 
'/hosting/web/{serviceName}/cdn' | 
'/hosting/web/{serviceName}/cdn/serviceInfos' | 
'/hosting/web/{serviceName}/freedom/{domain}' | 
'/hosting/web/{serviceName}/freedom' | 
'/hosting/web/{serviceName}/cron' | 
'/hosting/web/{serviceName}/cron/{id}' | 
'/hosting/web/{serviceName}/serviceInfos' | 
'/hosting/web/{serviceName}/dump' | 
'/hosting/web/{serviceName}/dump/{id}' | 
'/hosting/web/{serviceName}/tasks/{id}' | 
'/hosting/web/{serviceName}/tasks' | 
'/hosting/web/{serviceName}/indy' | 
'/hosting/web/{serviceName}/indy/{login}' | 
'/hosting/web/{serviceName}/module/{id}' | 
'/hosting/web/{serviceName}/module' | 
'/hosting/web/{serviceName}/databaseCreationCapabilities' | 
'/hosting/web/{serviceName}/databaseAvailableType' | 
'/hosting/web/{serviceName}/cronAvailableLanguage' | 
'/hosting/web/{serviceName}' | 
'/hosting/web/{serviceName}/runtime/{id}/attachedDomains' | 
'/hosting/web/{serviceName}/runtime/{id}' | 
'/hosting/web/{serviceName}/runtime' | 
'/hosting/web/{serviceName}/localSeo/emailAvailability' | 
'/hosting/web/{serviceName}/localSeo/location/{id}' | 
'/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfos' | 
'/hosting/web/{serviceName}/localSeo/location' | 
'/hosting/web/{serviceName}/localSeo/account' | 
'/hosting/web/{serviceName}/localSeo/account/{id}' | 
'/hosting/web/{serviceName}/database' | 
'/hosting/web/{serviceName}/database/{name}/statistics' | 
'/hosting/web/{serviceName}/database/{name}' | 
'/hosting/web/{serviceName}/database/{name}/capabilities' | 
'/hosting/web/{serviceName}/database/{name}/dump/{id}' | 
'/hosting/web/{serviceName}/database/{name}/dump' | 
'/hosting/web/{serviceName}/token' | 
'/hosting/web/{serviceName}/userLogsToken' | 
'/hosting/web/{serviceName}/privateDatabases' | 
'/hosting/web/{serviceName}/userLogs/{login}' | 
'/hosting/web/{serviceName}/userLogs' | 
'/hosting/web/{serviceName}/privateDatabaseCreationCapabilities' | 
'/hosting/web/incident' | 
'/hosting/web/attachedDomain' | 
'/hosting/web/localSeo/visibilityCheckResult' | 
'/hosting/web/localSeo/directoriesList' | 
'/hosting/web/localSeo/emailAvailability';

type PathshostingwebPUT = '/hosting/web/{serviceName}/user/{login}' | 
'/hosting/web/{serviceName}/email' | 
'/hosting/web/{serviceName}/envVar/{key}' | 
'/hosting/web/{serviceName}/attachedDomain/{domain}' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}' | 
'/hosting/web/{serviceName}/cron/{id}' | 
'/hosting/web/{serviceName}/serviceInfos' | 
'/hosting/web/{serviceName}' | 
'/hosting/web/{serviceName}/runtime/{id}' | 
'/hosting/web/{serviceName}/userLogs/{login}';

type PathshostingwebPOST = '/hosting/web/{serviceName}/changeContact' | 
'/hosting/web/{serviceName}/user' | 
'/hosting/web/{serviceName}/user/{login}/changePassword' | 
'/hosting/web/{serviceName}/extraSqlPerso/{name}/terminate' | 
'/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfosUpdate' | 
'/hosting/web/{serviceName}/ssl/regenerate' | 
'/hosting/web/{serviceName}/ssl' | 
'/hosting/web/{serviceName}/email/request' | 
'/hosting/web/{serviceName}/envVar' | 
'/hosting/web/{serviceName}/attachedDomain' | 
'/hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache' | 
'/hosting/web/{serviceName}/attachedDomain/{domain}/restart' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs' | 
'/hosting/web/{serviceName}/restoreSnapshot' | 
'/hosting/web/{serviceName}/ovhConfig/{id}/rollback' | 
'/hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration' | 
'/hosting/web/{serviceName}/cdn/serviceInfosUpdate' | 
'/hosting/web/{serviceName}/cdn/terminate' | 
'/hosting/web/{serviceName}/cron' | 
'/hosting/web/{serviceName}/terminate' | 
'/hosting/web/{serviceName}/ovhConfigRefresh' | 
'/hosting/web/{serviceName}/activatePrivateDatabase' | 
'/hosting/web/{serviceName}/module/{id}/changePassword' | 
'/hosting/web/{serviceName}/module' | 
'/hosting/web/{serviceName}/confirmTermination' | 
'/hosting/web/{serviceName}/runtime' | 
'/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfosUpdate' | 
'/hosting/web/{serviceName}/localSeo/location/{id}/terminate' | 
'/hosting/web/{serviceName}/localSeo/account/{id}/login' | 
'/hosting/web/{serviceName}/database' | 
'/hosting/web/{serviceName}/database/{name}/restore' | 
'/hosting/web/{serviceName}/database/{name}/changePassword' | 
'/hosting/web/{serviceName}/database/{name}/import' | 
'/hosting/web/{serviceName}/database/{name}/dump/{id}/restore' | 
'/hosting/web/{serviceName}/database/{name}/dump' | 
'/hosting/web/{serviceName}/database/{name}/request' | 
'/hosting/web/{serviceName}/request' | 
'/hosting/web/{serviceName}/userLogs/{login}/changePassword' | 
'/hosting/web/{serviceName}/userLogs' | 
'/hosting/web/{serviceName}/requestBoost' | 
'/hosting/web/localSeo/visibilityCheck';

type PathshostingwebDELETE = '/hosting/web/{serviceName}/user/{login}' | 
'/hosting/web/{serviceName}/ssl' | 
'/hosting/web/{serviceName}/envVar/{key}' | 
'/hosting/web/{serviceName}/attachedDomain/{domain}' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}' | 
'/hosting/web/{serviceName}/freedom/{domain}' | 
'/hosting/web/{serviceName}/cron/{id}' | 
'/hosting/web/{serviceName}/dump/{id}' | 
'/hosting/web/{serviceName}/module/{id}' | 
'/hosting/web/{serviceName}/runtime/{id}' | 
'/hosting/web/{serviceName}/database/{name}' | 
'/hosting/web/{serviceName}/database/{name}/dump/{id}' | 
'/hosting/web/{serviceName}/userLogs/{login}';

class Apihostingweb extends ApiCommon {
  /**
  Operations about the HOSTING service
  List available services
  **/
  public get(path: '/hosting/web', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Get offer capabilities
  Get offer capabilities
  **/
  public get(path: '/hosting/web/offerCapabilities', pathParams: null, queryParams: {offer?: HostingWebOfferCapabilitiesEnum}): Promise<HostingWebCapabilities>;
  /**
  List the hosting.web.ModuleList objects
  IDs of all modules available
  **/
  public get(path: '/hosting/web/moduleList', pathParams: null, queryParams: {branch?: HostingWebModuleBranchEnum, latest?: boolean, active?: boolean}): Promise<Number[]>;
  /**
  A module specifically packaged by OVH
  Get this object properties
  **/
  public get(path: '/hosting/web/moduleList/{id}', pathParams: {id?: Number}, queryParams: null): Promise<HostingWebModuleList>;
  /**
  Get available offer
  Get available offer
  **/
  public get(path: '/hosting/web/availableOffer', pathParams: null, queryParams: {domain?: string}): Promise<HostingWebOfferEnum[]>;
  /**
  List the hosting.web.user objects
  User allowed to connect into your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: {login?: string, home?: string}): Promise<string[]>;
  /**
  Hosting users
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/user/{login}', pathParams: {serviceName?: string, login?: string}, queryParams: null): Promise<HostingWebUser>;
  /**
  List the hosting.web.extrasqlperso objects
  Sqlperso linked to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Sqlperso service
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}', pathParams: {serviceName?: string, name?: string}, queryParams: null): Promise<HostingWebExtrasqlperso>;
  /**
  serviceInfos operations
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfos', pathParams: {serviceName?: string, name?: string}, queryParams: null): Promise<ServicesService>;
  /**
  databases operations
  Get databases linked with this option
  **/
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/databases', pathParams: {serviceName?: string, name?: string}, queryParams: null): Promise<string[]>;
  /**
  History of your boost requests
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/boostHistory/{date}', pathParams: {serviceName?: string, date?: Date}, queryParams: null): Promise<HostingWebBoostHistory>;
  /**
  List the hosting.web.boostHistory objects
  History of your hosting boost
  **/
  public get(path: '/hosting/web/{serviceName}/boostHistory', pathParams: {serviceName?: string}, queryParams: {date?: Date}): Promise<Date[]>;
  /**
  domains operations
  Get domains linked to this HostedSsl
  **/
  public get(path: '/hosting/web/{serviceName}/ssl/domains', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Hostedssl Report
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/ssl/report', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingWebSslReport>;
  /**
  Hostedssl
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/ssl', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingWebSsl>;
  /**
  bounces operations
  Request the last bounces
  **/
  public get(path: '/hosting/web/{serviceName}/email/bounces', pathParams: {serviceName?: string}, queryParams: {limit?: Number}): Promise<HostingWebMailBounce[]>;
  /**
  volumes operations
  Request the history volume of email sent
  **/
  public get(path: '/hosting/web/{serviceName}/email/volumes', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingWebMailVolumeHistory[]>;
  /**
  Hosting automated emails
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/email', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingWebEmail>;
  /**
  List the hosting.web.envVar objects
  Environment variables set on your webhosting
  **/
  public get(path: '/hosting/web/{serviceName}/envVar', pathParams: {serviceName?: string}, queryParams: {type?: HostingWebEnvVarTypeEnum}): Promise<string[]>;
  /**
  Environment variables set into your webhosting account
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/envVar/{key}', pathParams: {serviceName?: string, key?: string}, queryParams: null): Promise<HostingWebEnvVar>;
  /**
  databaseAvailableVersion operations
  List available database version following a type
  **/
  public get(path: '/hosting/web/{serviceName}/databaseAvailableVersion', pathParams: {serviceName?: string}, queryParams: {type?: HostingWebDatabaseDatabaseTypeEnum}): Promise<HostingWebDatabaseAvailableVersionStruct>;
  /**
  statistics operations
  Get statistics about this web hosting
  **/
  public get(path: '/hosting/web/{serviceName}/statistics', pathParams: {serviceName?: string}, queryParams: {period?: HostingWebStatisticsPeriodEnum, type?: HostingWebStatisticsTypeEnum}): Promise<ComplexTypeChartSerie<ComplexTypeChartTimestampValue>[]>;
  /**
  List the hosting.web.attachedDomain objects
  Domains or subdomains attached to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/attachedDomain', pathParams: {serviceName?: string}, queryParams: {path?: string, domain?: string}): Promise<string[]>;
  /**
  Virtual service
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/attachedDomain/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null): Promise<HostingWebAttachedDomain>;
  /**
  runtimeAvailableTypes operations
  List available runtime configurations available backend types
  **/
  public get(path: '/hosting/web/{serviceName}/runtimeAvailableTypes', pathParams: {serviceName?: string}, queryParams: {language?: string}): Promise<HostingWebRuntimeTypeEnum[]>;
  /**
  Hosting own logs
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/ownLogs/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<HostingWebOwnLogs>;
  /**
  Hosting users logs
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}', pathParams: {serviceName?: string, id?: Number, login?: string}, queryParams: null): Promise<HostingWebUserLogs>;
  /**
  List the hosting.web.userLogs objects
  User allowed to connect into your logs interface
  **/
  public get(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs', pathParams: {serviceName?: string, id?: Number}, queryParams: {login?: string}): Promise<string[]>;
  /**
  List the hosting.web.ownLogs objects
  Own Logs linked to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/ownLogs', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Virtual service
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/ovhConfig/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<HostingWebOvhConfig>;
  /**
  List the hosting.web.ovhConfig objects
  Configuration used on your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/ovhConfig', pathParams: {serviceName?: string}, queryParams: {path?: string, historical?: boolean}): Promise<Number[]>;
  /**
  CDN service
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/cdn', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingWebCdn>;
  /**
  serviceInfos operations
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/cdn/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Freedoms linked to this hosting account
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/freedom/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null): Promise<HostingWebFreedom>;
  /**
  List the hosting.web.freedom objects
  Freedom linked to this hosting account
  **/
  public get(path: '/hosting/web/{serviceName}/freedom', pathParams: {serviceName?: string}, queryParams: {status?: HostingWebFreedomStatusEnum}): Promise<string[]>;
  /**
  List the hosting.web.cron objects
  Crons on your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/cron', pathParams: {serviceName?: string}, queryParams: {description?: string, language?: HostingWebCronLanguageEnum, command?: string, email?: string}): Promise<Number[]>;
  /**
  Hosting crons
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/cron/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<HostingWebCron>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the hosting.web.dump objects
  Dumps linked to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/dump', pathParams: {serviceName?: string}, queryParams: {orphan?: boolean, deletionDate?: Date, creationDate?: Date, databaseName?: string}): Promise<Number[]>;
  /**
  Dump
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/dump/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<HostingWebDump>;
  /**
  Tasks
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/tasks/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<HostingWebTask>;
  /**
  List the hosting.web.task objects
  Tasks attached to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/tasks', pathParams: {serviceName?: string}, queryParams: {status?: HostingWebTaskStatusEnum, function?: string}): Promise<Number[]>;
  /**
  List the hosting.web.indy objects
  User of multidomain independent allowed on your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/indy', pathParams: {serviceName?: string}, queryParams: {login?: string}): Promise<string[]>;
  /**
  Hosting indys
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/indy/{login}', pathParams: {serviceName?: string, login?: string}, queryParams: null): Promise<HostingWebIndy>;
  /**
  Hosting modules installed
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/module/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<HostingWebModule>;
  /**
  List the hosting.web.module objects
  Module installed on your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/module', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  databaseCreationCapabilities operations
  List available database you can install
  **/
  public get(path: '/hosting/web/{serviceName}/databaseCreationCapabilities', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingWebDatabaseCreationDatabaseCapabilities[]>;
  /**
  databaseAvailableType operations
  List available database type
  **/
  public get(path: '/hosting/web/{serviceName}/databaseAvailableType', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingWebDatabaseDatabaseTypeEnum[]>;
  /**
  cronAvailableLanguage operations
  List available cron language
  **/
  public get(path: '/hosting/web/{serviceName}/cronAvailableLanguage', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingWebCronLanguageEnum[]>;
  /**
  Web Hosting
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingWebService>;
  /**
  attachedDomains operations
  Get the attached domains linked to this runtime configuration
  **/
  public get(path: '/hosting/web/{serviceName}/runtime/{id}/attachedDomains', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<string[]>;
  /**
  The runtime configuration of an attached domain for cloud web offer
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/runtime/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<HostingWebRuntime>;
  /**
  List the hosting.web.runtime objects
  List of runtime configurations to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/runtime', pathParams: {serviceName?: string}, queryParams: {type?: HostingWebRuntimeTypeEnum, name?: string}): Promise<Number[]>;
  /**
  emailAvailability operations
  Check email availability for a local SEO order
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/emailAvailability', pathParams: {serviceName?: string}, queryParams: {email?: string}): Promise<HostingWebLocalSeoEmailAvailability>;
  /**
  Local SEO locations
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/location/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<HostingWebLocalSeoLocation>;
  /**
  serviceInfos operations
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfos', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<ServicesService>;
  /**
  List the hosting.web.localSeo.location objects
  Local SEO locations associated to the hosting
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/location', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the hosting.web.localSeo.account objects
  Local SEO accounts associated to the hosting
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/account', pathParams: {serviceName?: string}, queryParams: {email?: string}): Promise<Number[]>;
  /**
  Local SEO accounts
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/account/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<HostingWebLocalSeoAccount>;
  /**
  List the hosting.web.database objects
  Databases linked to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/database', pathParams: {serviceName?: string}, queryParams: {name?: string, mode?: HostingWebDatabaseModeEnum, type?: HostingWebDatabaseDatabaseTypeEnum, user?: string, server?: string}): Promise<string[]>;
  /**
  statistics operations
  Get statistics about this database
  **/
  public get(path: '/hosting/web/{serviceName}/database/{name}/statistics', pathParams: {serviceName?: string, name?: string}, queryParams: {type?: HostingWebDatabaseStatisticsTypeEnum, period?: HostingWebStatisticsPeriodEnum}): Promise<ComplexTypeChartSerie<ComplexTypeChartTimestampValue>[]>;
  /**
  Database
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/database/{name}', pathParams: {serviceName?: string, name?: string}, queryParams: null): Promise<HostingWebDatabase>;
  /**
  capabilities operations
  Get available capabilities for this database
  **/
  public get(path: '/hosting/web/{serviceName}/database/{name}/capabilities', pathParams: {serviceName?: string, name?: string}, queryParams: null): Promise<HostingWebDatabaseDatabaseCapabilities>;
  /**
  Dump
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}', pathParams: {serviceName?: string, name?: string, id?: Number}, queryParams: null): Promise<HostingWebDatabaseDump>;
  /**
  List the hosting.web.database.dump objects
  Dump available for your databases
  **/
  public get(path: '/hosting/web/{serviceName}/database/{name}/dump', pathParams: {serviceName?: string, name?: string}, queryParams: {type?: HostingWebDatabaseDumpDateEnum, creationDate?: Date, deletionDate?: Date}): Promise<Number[]>;
  /**
  token operations
  Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )
  **/
  public get(path: '/hosting/web/{serviceName}/token', pathParams: {serviceName?: string}, queryParams: null): Promise<string>;
  /**
  userLogsToken operations
  Get a temporary token to access the your web hosting logs interface
  **/
  public get(path: '/hosting/web/{serviceName}/userLogsToken', pathParams: {serviceName?: string}, queryParams: {remoteCheck?: boolean, ttl?: Number, attachedDomain?: string}): Promise<string>;
  /**
  privateDatabases operations
  List linked privateDatabases
  **/
  public get(path: '/hosting/web/{serviceName}/privateDatabases', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Hosting users logs
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/userLogs/{login}', pathParams: {serviceName?: string, login?: string}, queryParams: null): Promise<HostingWebUserLogs>;
  /**
  List the hosting.web.userLogs objects
  User allowed to connect into your logs interface
  **/
  public get(path: '/hosting/web/{serviceName}/userLogs', pathParams: {serviceName?: string}, queryParams: {login?: string}): Promise<string[]>;
  /**
  privateDatabaseCreationCapabilities operations
  List available privateDatabase you can install
  **/
  public get(path: '/hosting/web/{serviceName}/privateDatabaseCreationCapabilities', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingWebDatabaseCreationDatabaseCapabilities[]>;
  /**
  Get current incident
  Get current incident
  **/
  public get(path: '/hosting/web/incident', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Find hosting service linked to a domain
  Find hosting service linked to a domain
  **/
  public get(path: '/hosting/web/attachedDomain', pathParams: null, queryParams: {domain?: string}): Promise<string[]>;
  /**
  Get the result of a visibility check
  Get the result of a visibility check
  **/
  public get(path: '/hosting/web/localSeo/visibilityCheckResult', pathParams: null, queryParams: {directory?: string, token?: string, id?: Number}): Promise<HostingWebLocalSeoVisibilityCheckResultResponse[]>;
  /**
  Get list of directories associated to a local SEO offer and a country
  Get list of directories associated to a local SEO offer and a country
  **/
  public get(path: '/hosting/web/localSeo/directoriesList', pathParams: null, queryParams: {offer?: HostingWebLocalSeoLocationOfferEnum, country?: HostingWebLocalSeoLocationCountryEnum}): Promise<HostingWebLocalSeoDirectoriesList>;
  /**
  Check email availability for a local SEO order
  Check email availability for a local SEO order
  **/
  public get(path: '/hosting/web/localSeo/emailAvailability', pathParams: null, queryParams: {email?: string}): Promise<HostingWebLocalSeoEmailAvailability>;
  public get(path: PathshostingwebGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Hosting users
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/user/{login}', pathParams: {serviceName?: string, login?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Hosting automated emails
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/email', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Environment variables set into your webhosting account
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/envVar/{key}', pathParams: {serviceName?: string, key?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Virtual service
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/attachedDomain/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Hosting users logs
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}', pathParams: {serviceName?: string, id?: Number, login?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Hosting crons
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/cron/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Web Hosting
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  The runtime configuration of an attached domain for cloud web offer
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/runtime/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Hosting users logs
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/userLogs/{login}', pathParams: {serviceName?: string, login?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathshostingwebPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/hosting/web/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  List the hosting.web.user objects
  Create new ftp/ssh user
  **/
  public post(path: '/hosting/web/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  changePassword operations
  Request a password change
  **/
  public post(path: '/hosting/web/{serviceName}/user/{login}/changePassword', pathParams: {serviceName?: string, login?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  terminate operations
  Terminate your extraSqlPerso sub service
  **/
  public post(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/terminate', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  serviceInfosUpdate operations
  Alter this object properties
  **/
  public post(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfosUpdate', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  regenerate operations
  Request the regeneration of your HostedSsl
  **/
  public post(path: '/hosting/web/{serviceName}/ssl/regenerate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebSsl>;
  /**
  Hostedssl
  Create the free default HostedSsl OR import your proper SSL on your hosting
  **/
  public post(path: '/hosting/web/{serviceName}/ssl', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebSsl>;
  /**
  request operations
  Request specific operation for your email
  **/
  public post(path: '/hosting/web/{serviceName}/email/request', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the hosting.web.envVar objects
  Set a variable to this hosting
  **/
  public post(path: '/hosting/web/{serviceName}/envVar', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  List the hosting.web.attachedDomain objects
  Link a domain to this hosting
  **/
  public post(path: '/hosting/web/{serviceName}/attachedDomain', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  purgeCache operations
  Purge cache for this attached domain
  **/
  public post(path: '/hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache', pathParams: {serviceName?: string, domain?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  restart operations
  Restart the virtual host of the attached domain
  **/
  public post(path: '/hosting/web/{serviceName}/attachedDomain/{domain}/restart', pathParams: {serviceName?: string, domain?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  changePassword operations
  Request a password change
  **/
  public post(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword', pathParams: {serviceName?: string, id?: Number, login?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the hosting.web.userLogs objects
  Create new userLogs
  **/
  public post(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  restoreSnapshot operations
  Restore this snapshot ALL CURRENT DATA WILL BE REPLACED BY YOUR SNAPSHOT
  **/
  public post(path: '/hosting/web/{serviceName}/restoreSnapshot', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  rollback operations
  Rollback to an old configuration
  **/
  public post(path: '/hosting/web/{serviceName}/ovhConfig/{id}/rollback', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  changeConfiguration operations
  Apply a new configuration on this path
  **/
  public post(path: '/hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  serviceInfosUpdate operations
  Alter this object properties
  **/
  public post(path: '/hosting/web/{serviceName}/cdn/serviceInfosUpdate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  terminate operations
  Terminate your cdn sub service
  **/
  public post(path: '/hosting/web/{serviceName}/cdn/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the hosting.web.cron objects
  Create new cron
  **/
  public post(path: '/hosting/web/{serviceName}/cron', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/hosting/web/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  ovhConfigRefresh operations
  Synchronize the configuration listing with content on your hosting
  **/
  public post(path: '/hosting/web/{serviceName}/ovhConfigRefresh', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  activatePrivateDatabase operations
  Activate an included private database on your hosting offer
  **/
  public post(path: '/hosting/web/{serviceName}/activatePrivateDatabase', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  changePassword operations
  Generate a new admin password for your module
  **/
  public post(path: '/hosting/web/{serviceName}/module/{id}/changePassword', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  List the hosting.web.module objects
  Install a new module
  **/
  public post(path: '/hosting/web/{serviceName}/module', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/hosting/web/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the hosting.web.runtime objects
  Request the creation of a new runtime configuration
  **/
  public post(path: '/hosting/web/{serviceName}/runtime', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  serviceInfosUpdate operations
  Alter this object properties
  **/
  public post(path: '/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfosUpdate', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  terminate operations
  Terminate a local SEO sub service
  **/
  public post(path: '/hosting/web/{serviceName}/localSeo/location/{id}/terminate', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  login operations
  Login this location for SSO
  **/
  public post(path: '/hosting/web/{serviceName}/localSeo/account/{id}/login', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the hosting.web.database objects
  Install new database
  **/
  public post(path: '/hosting/web/{serviceName}/database', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  restore operations
  Request the restore from your database backup
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/restore', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  changePassword operations
  Request a password change
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/changePassword', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  import operations
  Import a dump from an specific file uploaded with /me/documents
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/import', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  restore operations
  Request the restore from this dump
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}/restore', pathParams: {serviceName?: string, name?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  List the hosting.web.database.dump objects
  Request the dump from your database
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/dump', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  request operations
  Request specific operation for your database
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/request', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  request operations
  Request specific operation for your hosting
  **/
  public post(path: '/hosting/web/{serviceName}/request', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  changePassword operations
  Request a password change
  **/
  public post(path: '/hosting/web/{serviceName}/userLogs/{login}/changePassword', pathParams: {serviceName?: string, login?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the hosting.web.userLogs objects
  Create new userLogs
  **/
  public post(path: '/hosting/web/{serviceName}/userLogs', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  requestBoost operations
  Allows you to boost your offer.
  **/
  public post(path: '/hosting/web/{serviceName}/requestBoost', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  Check visibility of a location
  Check visibility of a location
  **/
  public post(path: '/hosting/web/localSeo/visibilityCheck', pathParams: null, queryParams: null, bodyParams: null): Promise<HostingWebLocalSeoVisibilityCheckResponse>;
  public post(path: PathshostingwebPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Hosting users
  Delete ftp/ssh user
  **/
  public delete(path: '/hosting/web/{serviceName}/user/{login}', pathParams: {serviceName?: string, login?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  Hostedssl
  Delete the HostedSsl on your hosting
  **/
  public delete(path: '/hosting/web/{serviceName}/ssl', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HostingWebSsl>;
  /**
  Environment variables set into your webhosting account
  Remove variable from hosting
  **/
  public delete(path: '/hosting/web/{serviceName}/envVar/{key}', pathParams: {serviceName?: string, key?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  Virtual service
  Unlink domain from hosting
  **/
  public delete(path: '/hosting/web/{serviceName}/attachedDomain/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  Hosting users logs
  Delete the userLogs
  **/
  public delete(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}', pathParams: {serviceName?: string, id?: Number, login?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Freedoms linked to this hosting account
  Delete the freedom
  **/
  public delete(path: '/hosting/web/{serviceName}/freedom/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Hosting crons
  Delete cron
  **/
  public delete(path: '/hosting/web/{serviceName}/cron/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Dump
  Delete dump before expiration date
  **/
  public delete(path: '/hosting/web/{serviceName}/dump/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  Hosting modules installed
  Delete a module installed
  **/
  public delete(path: '/hosting/web/{serviceName}/module/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  The runtime configuration of an attached domain for cloud web offer
  Delete a runtime configuration of an hosting
  **/
  public delete(path: '/hosting/web/{serviceName}/runtime/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  Database
  Delete database
  **/
  public delete(path: '/hosting/web/{serviceName}/database/{name}', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  Dump
  Delete dump before expiration date
  **/
  public delete(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}', pathParams: {serviceName?: string, name?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<HostingWebTask>;
  /**
  Hosting users logs
  Delete the userLogs
  **/
  public delete(path: '/hosting/web/{serviceName}/userLogs/{login}', pathParams: {serviceName?: string, login?: string}, queryParams: null, bodyParams: null): Promise<string>;
  public delete(path: PathshostingwebDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
