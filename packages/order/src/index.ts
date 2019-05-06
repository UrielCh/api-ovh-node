import { ApiCommon } from '@ovh-api/common';
/**
 * Available storage order
 */
export type CdnWebstorageOrderStorageEnum = '100GB' | '10TB' | '1TB' | '500GB' | '50TB' | '5TB';
/**
 * Available traffic order in TB
 */
export type CdnWebstorageOrderTrafficEnum = 1 | 10 | 100 | 1000 | 10000;
/**
 * Available number for cacheRule upgrade
 */
export type CdnanycastOrderCacheRuleEnum = 100 | 1000;
/**
 * Available number for quota order
 */
export type CdnanycastOrderQuotaEnum = 1 | 10 | 100 | 1000;
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  /**
   */
  key?: string;
  /**
   */
  value?: T;
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
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * ovh Nas HA offer
 */
export type DedicatedNasHAOfferEnum = '1200g' | '13200g' | '19200g' | '2400g' | '26400g' | '3600g' | '7200g';
/**
 * Nas HA localization
 */
export type DedicatedNasHAZoneEnum = 'bhs' | 'rbx' | 'sbg';
/**
 * Housing bay High Availablility offers
 */
export type DedicatedHousingHaRoutingOfferEnum = 'ha2x2' | 'ha2x4';
/**
 * Different backup storage capacity in gigabytes
 */
export type DedicatedServerBackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000;
/**
 *  Different Bandwidth orderable in Mbps
 */
export type DedicatedServerBandwidthOrderEnum = 1000 | 2000 | 3000;
/**
 *  Different Bandwidth type orderable
 */
export type DedicatedServerBandwidthOrderTypeEnum = 'platinum' | 'premium' | 'ultimate';
/**
 *  Different vRack Bandwidth orderable in Mbps
 */
export type DedicatedServerBandwidthvRackOrderEnum = 1000 | 3000;
/**
 * Firewall model name
 */
export type DedicatedServerFirewallModelEnum = 'asa5505' | 'asa5510' | 'asa5520';
/**
 * IP block size
 */
export type DedicatedServerIpBlockSizeEnum = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8;
/**
 * Available localization for this static IP
 */
export type DedicatedServerIpCountryEnum = 'au' | 'be' | 'ca' | 'cz' | 'de' | 'es' | 'fi' | 'fr' | 'ie' | 'it' | 'lt' | 'nl' | 'pl' | 'pt' | 'sg' | 'uk' | 'us';
/**
 * Available localization for this static IP
 */
export type DedicatedServerIpStaticCountryEnum = 'be' | 'cz' | 'de' | 'es' | 'fi' | 'fr' | 'ie' | 'it' | 'lt' | 'nl' | 'pl' | 'pt' | 'uk';
/**
 * Orderable IP type
 */
export type DedicatedServerIpTypeOrderableEnum = 'failover' | 'static' | 'unshielded';
/**
 * Dedicated server orderable features
 */
export type DedicatedServerOrderableSysFeatureEnum = 'backupProtocol' | 'monitoring';
/**
 * distincts support level
 */
export type DedicatedServerSupportLevelOrderableEnum = 'critical' | 'fastpath' | 'gs';
/**
 *  traffic orderable 
 */
export type DedicatedServerTrafficOrderEnum = '100Mbps-Unlimited' | '250Mbps-Unlimited' | '500Mbps-Unlimited';
/**
 *  Different USB key capacity in gigabytes
 */
export type DedicatedServerUsbKeyCapacityEnum = 128 | 16 | 256 | 32 | 64;
/**
 * All available additional bandwidth amounts in Mbps
 */
export type DedicatedCloudAdditionalBandwidthEnum = '1500';
/**
 * All countries in which an Ip Block may be ordered
 */
export type DedicatedCloudIpCountriesEnum = 'be' | 'ca' | 'ch' | 'cz' | 'de' | 'es' | 'fi' | 'fr' | 'gb' | 'ie' | 'it' | 'lt' | 'nl' | 'pl' | 'pt' | 'us';
/**
 * All orderable IP Block ranges in your Dedicated Cloud
 */
export type DedicatedCloudOrderableIpBlockRangeEnum = '24' | '25' | '26' | '27' | '28';
/**
 * The Dedicated Cloud ressource types that can be upgraded
 */
export type DedicatedCloudRessourcesUpgradeRessourceTypeEnum = 'account' | 'all' | 'filer' | 'host';
/**
 * The available billing type upgrade for Dedicated Cloud ressource
 */
export type DedicatedCloudRessourcesUpgradeTypeEnum = 'demoToMonthly' | 'freeSpareToHourly' | 'hourlyToMonthly';
/**
 * Mx plan offers
 */
export type EmailDomainOfferEnum = '100' | '25' | '5' | 'FULL';
/**
 * Outlook version
 */
export type EmailExchangeOutlookVersionEnum = 'mac_x86_2011' | 'mac_x86_2016' | 'windows_x64_2013' | 'windows_x64_2016' | 'windows_x86_2013' | 'windows_x86_2016';
/**
 * OVH licence account
 */
export type EmailExchangeOvhLicenceEnum = 'basic' | 'enterprise' | 'standard';
/**
 * Storage quota options in GB
 */
export type EmailExchangeAccountQuotaEnum = 300 | 50;
/**
 * Available quantity of fax to purchase
 */
export type FreefaxQuantityEnum = 10 | 100 | 1000 | 10000 | 100000 | 200 | 2000 | 50 | 500 | 5000;
/**
 * Private database available ram sizes
 */
export type HostingPrivateDatabaseAvailableRamSizeEnum = '1024' | '2048' | '4096' | '512';
/**
 * Available datacenters
 */
export type HostingPrivateDatabaseDatacenterEnum = 'gra1' | 'gra2' | 'p19';
/**
 * Available offers
 */
export type HostingPrivateDatabaseOfferEnum = 'classic' | 'public';
/**
 * Private database orderable versions
 */
export type HostingPrivateDatabaseOrderableVersionEnum = 'mariadb_10.1' | 'mariadb_10.2' | 'mongodb_3.4' | 'mongodb_4.0' | 'mysql_5.5' | 'mysql_5.6' | 'mysql_5.7' | 'postgresql_10' | 'postgresql_11' | 'postgresql_9.4' | 'postgresql_9.5' | 'postgresql_9.6' | 'redis_3.2' | 'redis_4.0';
/**
 * Available offers to increase bandwidth quota (unit in GB)
 */
export type HostingWebBandwidthOfferEnum = 10 | 100 | 1000 | 10000 | 20 | 250 | 30 | 40 | 50 | 500;
/**
 * Struct which describs an offer
 */
export interface HostingWebCapabilities {
  /**
   * Number of domains you can attach to your hosting
   *
   */
  attachedDomains?: Number;
  /**
   * Does the offer allow crontab
   *
   */
  crontab?: boolean;
  /**
   * Number of database engines allowed for your hosting
   *
   */
  databaseEngines?: Number;
  /**
   * Describe all databases type you can have
   *
   */
  databases?: HostingWebDatabaseCreationDatabaseCapabilities[];
  /**
   * Disk capacity and type available for your hosting ( null for unlimited )
   *
   */
  disk?: HostingWebDiskType;
  /**
   * Describe all email offer you can have
   *
   */
  emails?: HostingWebCreationEmailCapabilities;
  /**
   * Number of environment variables allowed for your hosting
   *
   */
  envVars?: Number;
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
   * Marketing information about the current offer
   *
   */
  highlight?: HostingWebHighLightEnum;
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
   * Describe all privateDatabases type you can have
   *
   */
  privateDatabases?: HostingWebDatabaseCreationDatabaseCapabilities[];
  /**
   * Number of runtimes allowed for your hosting
   *
   */
  runtimes?: Number;
  /**
   * Number of sites recommended for your hosting ( -1 for unlimited )
   *
   */
  sitesRecommended?: Number;
  /**
   * Does the offer allow SSH access
   *
   */
  ssh?: boolean;
  /**
   * Traffic quota size for your hosting ( null for unlimited )
   *
   */
  traffic?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Hosting's CDN offer
 */
export type HostingWebCdnOfferEnum = 'CDN_BUSINESS' | 'CDN_BUSINESS_FREE';
/**
 * Struct which describes mail offer available and his quota
 */
export interface HostingWebCreationEmailCapabilities {
  /**
   * Number of email available for creation
   *
   */
  available?: Number;
  /**
   * Email account capacity
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Language available for cron script
 */
export interface HostingWebCronLanguageAvailable {
  /**
   * NodeJS versions
   *
   */
  nodejs?: HostingWebNodejsVersionAvailableEnum[];
  /**
   * Php versions
   *
   */
  php?: HostingWebPhpVersionAvailableEnum[];
}
/**
 * Disk properties (size and type of disk)
 */
export interface HostingWebDiskType {
  /**
   * Type of the disk
   *
   */
  type?: HostingWebDiskTypeEnum;
  /**
   * Unit for disk size
   *
   */
  unit?: string;
  /**
   * Size of the disk
   *
   */
  value?: Number;
}
/**
 * Disk type available
 */
export type HostingWebDiskTypeEnum = 'HDD' | 'SSD';
/**
 * Dns zone modification possibilities when installing a new hosting
 */
export type HostingWebDnsZoneEnum = 'NO_CHANGE' | 'RESET_ALL' | 'RESET_ONLY_A' | 'RESET_ONLY_MX';
/**
 * Highlight tips for offer
 */
export type HostingWebHighLightEnum = 'best-seller' | 'new';
/**
 * Different NodeJs versions available
 */
export type HostingWebNodejsVersionAvailableEnum = 'nodejs-10' | 'nodejs-11' | 'nodejs-8' | 'nodejs-9';
/**
 * Hosting's offer
 */
export type HostingWebOfferEnum = 'CLOUDWEB_1' | 'CLOUDWEB_2' | 'CLOUDWEB_3' | 'KS' | 'PERFORMANCE_1' | 'PERFORMANCE_2' | 'PERFORMANCE_3' | 'PERFORMANCE_4' | 'PERSO' | 'PRO' | 'START';
/**
 * Different PHP versions available
 */
export type HostingWebPhpVersionAvailableEnum = 'phpfpm-5.6' | 'phpfpm-7.0' | 'phpfpm-7.1' | 'phpfpm-7.2' | 'phpfpm-7.3';
/**
 * Struct which describs quota and available for a specific type of database
 */
export interface HostingWebDatabaseCreationDatabaseCapabilities {
  /**
   * Number of database left for creation
   *
   */
  available?: Number;
  /**
   * Database software available on this platform
   *
   */
  engines?: HostingWebDatabaseDatabaseTypeEnum[];
  /**
   * Technology use to isolate differents webhosting accounts
   *
   */
  isolation?: HostingWebDatabaseDatabaseIsolationEnum;
  /**
   * Size of data can be used
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * Database offer name
   *
   */
  type?: HostingWebDatabaseDatabaseCapabilitiesTypeEnum;
}
/**
 * Database capabitities type enum
 */
export type HostingWebDatabaseDatabaseCapabilitiesTypeEnum = 'extraSqlPerso' | 'local' | 'privateDatabase' | 'sqlLocal' | 'sqlPerso' | 'sqlPro';
/**
 * Database Isolation enum
 */
export type HostingWebDatabaseDatabaseIsolationEnum = 'dedicated' | 'local' | 'shared';
/**
 * Database Type enum
 */
export type HostingWebDatabaseDatabaseTypeEnum = 'mariadb' | 'mongodb' | 'mysql' | 'postgresql' | 'redis';
/**
 * Sql perso's offer enum
 */
export type HostingWebDatabaseSqlPersoOfferEnum = 'SQLPERSO_1_BASES_400_MB' | 'SQLPERSO_1_BASES_800_MB' | 'SQLPERSO_20_BASES_100_MB' | 'SQLPERSO_20_BASES_200_MB' | 'SQLPERSO_2_BASES_400_MB' | 'SQLPERSO_2_BASES_800_MB' | 'SQLPERSO_50_BASES_100_MB' | 'SQLPERSO_50_BASES_200_MB' | 'SQLPERSO_5_BASES_100_MB' | 'SQLPERSO_5_BASES_200_MB' | 'SQLPERSO_5_BASES_400_MB' | 'SQLPERSO_5_BASES_800_MB';
/**
 * Module's name orderable when order a new hosting
 */
export type HostingWebModuleOrderableNameEnum = 'DRUPAL' | 'JOOMLA' | 'PRESTASHOP' | 'WORDPRESS';
/**
 * MX plan linked to the new main domain
 */
export type HostingWebOrderMxPlanEnum = '005' | '025' | '100' | 'delete' | 'full';
/**
 * All versions for CloudLinux product
 */
export type LicenseCloudLinuxVersionEnum = 'SINGLE' | 'WITH_CPANEL' | 'WITH_PLESK12' | 'cloudlinux-license';
/**
 * Possible values for license type
 */
export type LicenseLicenseTypeEnum = 'dedicated' | 'dedicatedCloud' | 'dedicatedFailover' | 'failover' | 'vm' | 'vps' | 'vps_ceph' | 'vps_classic' | 'vps_cloud' | 'vps_cloud_2016' | 'vps_ssd';
/**
 * All antispam available for Plesk products
 */
export type LicenseOrderableAntispamEnum = 'SPAM_ASSASSIN';
/**
 * All antivirus available for Plesk products
 */
export type LicenseOrderableAntivirusEnum = 'DR_WEB' | 'KASPERSKY_UNLIMITED_MAILBOXES' | 'kaspersky';
/**
 * All versions available for Cpanel products
 */
export type LicenseOrderableCpanelVersionEnum = 'VERSION_11_FOR_LINUX' | 'VERSION_11_FOR_VIRTUOZZO' | 'VERSION_11_FOR_VPS' | 'cpanel-license-version-11' | 'cpanel-license-version-11-for-virtuozzo' | 'cpanel-license-version-11-for-vps';
/**
 * All versions available for DirectAdmin products
 */
export type LicenseOrderableDirectAdminVersionEnum = 'DIRECTADMIN_1' | 'directadmin-license';
/**
 * All domain available for Plesk products
 */
export type LicenseOrderablePleskDomainNumberEnum = '10' | '100' | '30' | '300' | 'hostingsuite' | 'unlimited';
/**
 * All language pack numbers available for Plesk products
 */
export type LicenseOrderablePleskLanguagePackEnum = '1' | '1-extra-language-for-plesk12' | '2' | '2-extra-languages-for-plesk12' | '3' | '3-extra-languages-for-plesk12' | '4' | '4-extra-languages-for-plesk12' | '5' | '5-extra-languages-for-plesk12' | 'unlimited' | 'unlimited-extra-languages-for-plesk12';
/**
 * All quantities of container available for a Virtuozzo license
 */
export type LicenseOrderableVirtuozzoContainerNumberEnum = '2_CPU_001_CONTAINER' | '2_CPU_003_CONTAINER' | '2_CPU_010_CONTAINER' | '2_CPU_030_CONTAINER' | '2_CPU_060_CONTAINER' | '2_CPU_100_CONTAINER';
/**
 * All versions available for Virtuozzo products
 */
export type LicenseOrderableVirtuozzoVersionEnum = 'VIRTUOZZO_CONTAINERS_4_FOR_LINUX' | 'VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS' | 'virtuozzo-4' | 'virtuozzo-4-for-windows';
/**
 * Application set available for Plesk products
 */
export type LicensePleskApplicationSetEnum = 'applicationpack' | 'developerpack' | 'power-pack-for-plesk12' | 'powerpack';
/**
 * All versions available for Plesk products
 */
export type LicensePleskVersionEnum = 'PLESK_10_AND_LATER' | 'PLESK_10_AND_LATER_FOR_KVM' | 'PLESK_10_AND_LATER_FOR_VMWARE' | 'PLESK_10_AND_LATER_FOR_VZ' | 'PLESK_10_AND_LATER_FOR_WIN' | 'PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE' | 'PLESK_10_AND_LATER_FOR_WIN_FOR_VZ' | 'PLESK_10_AND_LATER_FOR_WIN_FOR_XEN' | 'PLESK_10_AND_LATER_FOR_XEN' | 'PLESK_12_VPS_WEB_ADMIN' | 'PLESK_12_VPS_WEB_APP' | 'PLESK_12_VPS_WEB_HOST' | 'PLESK_12_VPS_WEB_HOST_CLNX' | 'PLESK_12_VPS_WEB_PRO' | 'PLESK_12_VPS_WEB_PRO_CLNX' | 'PLESK_12_WEB_ADMIN' | 'PLESK_12_WEB_APP' | 'PLESK_12_WEB_HOST' | 'PLESK_12_WEB_HOST_CLNX' | 'PLESK_12_WEB_PRO' | 'PLESK_12_WEB_PRO_CLNX' | 'PLESK_75_RELOADED' | 'PLESK_80' | 'PLESK_80_FOR_VZ' | 'PLESK_81_FOR_WIN' | 'PLESK_9' | 'PLESK_95' | 'PLESK_95_FOR_VZ' | 'PLESK_95_FOR_WIN' | 'PLESK_9_FOR_VZ' | 'PLESK_9_FOR_WIN' | 'PLESK_ONYX_VPS_WEB_ADMIN' | 'PLESK_ONYX_VPS_WEB_APP' | 'PLESK_ONYX_VPS_WEB_HOST' | 'PLESK_ONYX_VPS_WEB_HOST_CLNX' | 'PLESK_ONYX_VPS_WEB_PRO' | 'PLESK_ONYX_VPS_WEB_PRO_CLNX' | 'PLESK_ONYX_WEB_ADMIN' | 'PLESK_ONYX_WEB_APP' | 'PLESK_ONYX_WEB_HOST' | 'PLESK_ONYX_WEB_HOST_CLNX' | 'PLESK_ONYX_WEB_PRO' | 'PLESK_ONYX_WEB_PRO_CLNX' | 'plesk-12-webadmin-for-vps' | 'plesk-12-webhost' | 'plesk-12-webhost-for-vps' | 'plesk-12-webpro' | 'plesk-12-webpro-for-vps';
/**
 * All versions for SQL Server product
 */
export type LicenseSqlServerVersionEnum = 'SQL_SERVER_2008_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2008_STANDARD_EDITION_4_CPU' | 'SQL_SERVER_2008_WEB_EDITION_2_CPU' | 'SQL_SERVER_2008_WEB_EDITION_4_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION_10_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2012_WEB_EDITION_10_CORES' | 'SQL_SERVER_2012_WEB_EDITION_12_CORES' | 'SQL_SERVER_2012_WEB_EDITION_16_CORES' | 'SQL_SERVER_2012_WEB_EDITION_18_CORES' | 'SQL_SERVER_2012_WEB_EDITION_20_CORES' | 'SQL_SERVER_2012_WEB_EDITION_24_CORES' | 'SQL_SERVER_2012_WEB_EDITION_32_CORES' | 'SQL_SERVER_2012_WEB_EDITION_4_CORES' | 'SQL_SERVER_2012_WEB_EDITION_6_CORES' | 'SQL_SERVER_2012_WEB_EDITION_8_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_10_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_18_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_20_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_24_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2014_WEB_EDITION_10_CORES' | 'SQL_SERVER_2014_WEB_EDITION_12_CORES' | 'SQL_SERVER_2014_WEB_EDITION_16_CORES' | 'SQL_SERVER_2014_WEB_EDITION_18_CORES' | 'SQL_SERVER_2014_WEB_EDITION_20_CORES' | 'SQL_SERVER_2014_WEB_EDITION_24_CORES' | 'SQL_SERVER_2014_WEB_EDITION_4_CORES' | 'SQL_SERVER_2014_WEB_EDITION_6_CORES' | 'SQL_SERVER_2014_WEB_EDITION_8_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_10_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_14_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2016_WEB_EDITION_10_CORES' | 'SQL_SERVER_2016_WEB_EDITION_12_CORES' | 'SQL_SERVER_2016_WEB_EDITION_14_CORES' | 'SQL_SERVER_2016_WEB_EDITION_16_CORES' | 'SQL_SERVER_2016_WEB_EDITION_4_CORES' | 'SQL_SERVER_2016_WEB_EDITION_6_CORES' | 'SQL_SERVER_2016_WEB_EDITION_8_CORES' | 'sql-server-2008-license-standard-edition-2-cpu' | 'sql-server-2008-license-standard-edition-4-cpu' | 'sql-server-2008-license-web-edition-2-cpu' | 'sql-server-2008-license-web-edition-4-cpu' | 'sql-server-2012-license-standard-edition-10-cores' | 'sql-server-2012-license-standard-edition-12-cores' | 'sql-server-2012-license-standard-edition-16-cores' | 'sql-server-2012-license-standard-edition-18-cores' | 'sql-server-2012-license-standard-edition-2-cpu' | 'sql-server-2012-license-standard-edition-20-cores' | 'sql-server-2012-license-standard-edition-24-cores' | 'sql-server-2012-license-standard-edition-32-cores' | 'sql-server-2012-license-standard-edition-4-cores' | 'sql-server-2012-license-standard-edition-6-cores' | 'sql-server-2012-license-standard-edition-8-cores' | 'sql-server-2012-license-web-edition-10-cores' | 'sql-server-2012-license-web-edition-12-cores' | 'sql-server-2012-license-web-edition-16-cores' | 'sql-server-2012-license-web-edition-18-cores' | 'sql-server-2012-license-web-edition-20-cores' | 'sql-server-2012-license-web-edition-24-cores' | 'sql-server-2012-license-web-edition-32-cores' | 'sql-server-2012-license-web-edition-4-cores' | 'sql-server-2012-license-web-edition-6-cores' | 'sql-server-2012-license-web-edition-8-cores' | 'sql-server-2014-license-standard-edition-10-cores' | 'sql-server-2014-license-standard-edition-12-cores' | 'sql-server-2014-license-standard-edition-16-cores' | 'sql-server-2014-license-standard-edition-18-cores' | 'sql-server-2014-license-standard-edition-20-cores' | 'sql-server-2014-license-standard-edition-24-cores' | 'sql-server-2014-license-standard-edition-4-cores' | 'sql-server-2014-license-standard-edition-6-cores' | 'sql-server-2014-license-standard-edition-8-cores' | 'sql-server-2014-license-web-edition-10-cores' | 'sql-server-2014-license-web-edition-12-cores' | 'sql-server-2014-license-web-edition-16-cores' | 'sql-server-2014-license-web-edition-18-cores' | 'sql-server-2014-license-web-edition-20-cores' | 'sql-server-2014-license-web-edition-24-cores' | 'sql-server-2014-license-web-edition-4-cores' | 'sql-server-2014-license-web-edition-6-cores' | 'sql-server-2014-license-web-edition-8-cores' | 'sql-server-2016-license-standard-edition-10-cores' | 'sql-server-2016-license-standard-edition-12-cores' | 'sql-server-2016-license-standard-edition-14-cores' | 'sql-server-2016-license-standard-edition-16-cores' | 'sql-server-2016-license-standard-edition-4-cores' | 'sql-server-2016-license-standard-edition-6-cores' | 'sql-server-2016-license-standard-edition-8-cores' | 'sql-server-2016-license-web-edition-10-cores' | 'sql-server-2016-license-web-edition-12-cores' | 'sql-server-2016-license-web-edition-14-cores' | 'sql-server-2016-license-web-edition-16-cores' | 'sql-server-2016-license-web-edition-4-cores' | 'sql-server-2016-license-web-edition-6-cores' | 'sql-server-2016-license-web-edition-8-cores';
/**
 * All versions for Windows products
 */
export type LicenseWindowsOsVersionEnum = 'WINDOWS_SERVER_2003_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2003_STANDARD_EDITION' | 'WINDOWS_SERVER_2003_WEB_EDITION' | 'WINDOWS_SERVER_2003_WEB_EDITION_2_CPU' | 'WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION' | 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION' | 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_STANDARD_EDITION' | 'WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_WEB_EDITION' | 'WINDOWS_SERVER_2008_WEB_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_WEB_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_WEB_STANDARD_EDITION' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU' | 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_STANDARD_EDITION' | 'WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU' | 'WINDOWS_SERVER_2012_WEB_EDITION' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES' | 'windows-server-2008-license-datacenter-edition-1-cpu' | 'windows-server-2008-license-datacenter-edition-2-cpu' | 'windows-server-2008-license-datacenter-edition-4-cpu' | 'windows-server-2008-license-enterprise-edition-1-cpu' | 'windows-server-2008-license-enterprise-edition-2-cpu' | 'windows-server-2008-license-enterprise-edition-4-cpu' | 'windows-server-2008-license-standard-edition-1-cpu' | 'windows-server-2008-license-standard-edition-2-cpu' | 'windows-server-2008-license-standard-edition-4-cpu' | 'windows-server-2008-license-web-edition-1-cpu' | 'windows-server-2008-license-web-edition-2-cpu' | 'windows-server-2008-license-web-edition-4-cpu' | 'windows-server-2012-license-datacenter-edition-1-cpu' | 'windows-server-2012-license-datacenter-edition-2-cpu' | 'windows-server-2012-license-datacenter-edition-4-cpu' | 'windows-server-2012-license-standard-edition-1-cpu' | 'windows-server-2012-license-standard-edition-2-cpu' | 'windows-server-2012-license-standard-edition-4-cpu' | 'windows-server-2016-license-datacenter-edition-1-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-8-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-8-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-8-cores' | 'windows-server-2016-license-standard-edition-1-cpu-10-cores' | 'windows-server-2016-license-standard-edition-1-cpu-12-cores' | 'windows-server-2016-license-standard-edition-1-cpu-14-cores' | 'windows-server-2016-license-standard-edition-1-cpu-16-cores' | 'windows-server-2016-license-standard-edition-1-cpu-18-cores' | 'windows-server-2016-license-standard-edition-1-cpu-20-cores' | 'windows-server-2016-license-standard-edition-1-cpu-22-cores' | 'windows-server-2016-license-standard-edition-1-cpu-24-cores' | 'windows-server-2016-license-standard-edition-1-cpu-8-cores' | 'windows-server-2016-license-standard-edition-2-cpu-10-cores' | 'windows-server-2016-license-standard-edition-2-cpu-12-cores' | 'windows-server-2016-license-standard-edition-2-cpu-14-cores' | 'windows-server-2016-license-standard-edition-2-cpu-16-cores' | 'windows-server-2016-license-standard-edition-2-cpu-18-cores' | 'windows-server-2016-license-standard-edition-2-cpu-20-cores' | 'windows-server-2016-license-standard-edition-2-cpu-22-cores' | 'windows-server-2016-license-standard-edition-2-cpu-24-cores' | 'windows-server-2016-license-standard-edition-2-cpu-8-cores' | 'windows-server-2016-license-standard-edition-4-cpu-10-cores' | 'windows-server-2016-license-standard-edition-4-cpu-12-cores' | 'windows-server-2016-license-standard-edition-4-cpu-14-cores' | 'windows-server-2016-license-standard-edition-4-cpu-16-cores' | 'windows-server-2016-license-standard-edition-4-cpu-18-cores' | 'windows-server-2016-license-standard-edition-4-cpu-20-cores' | 'windows-server-2016-license-standard-edition-4-cpu-22-cores' | 'windows-server-2016-license-standard-edition-4-cpu-24-cores' | 'windows-server-2016-license-standard-edition-4-cpu-8-cores' | 'windows-server-2019-license-datacenter-edition-10-cores' | 'windows-server-2019-license-datacenter-edition-12-cores' | 'windows-server-2019-license-datacenter-edition-14-cores' | 'windows-server-2019-license-datacenter-edition-16-cores' | 'windows-server-2019-license-datacenter-edition-18-cores' | 'windows-server-2019-license-datacenter-edition-20-cores' | 'windows-server-2019-license-datacenter-edition-22-cores' | 'windows-server-2019-license-datacenter-edition-24-cores' | 'windows-server-2019-license-datacenter-edition-26-cores' | 'windows-server-2019-license-datacenter-edition-28-cores' | 'windows-server-2019-license-datacenter-edition-30-cores' | 'windows-server-2019-license-datacenter-edition-32-cores' | 'windows-server-2019-license-datacenter-edition-34-cores' | 'windows-server-2019-license-datacenter-edition-36-cores' | 'windows-server-2019-license-datacenter-edition-38-cores' | 'windows-server-2019-license-datacenter-edition-40-cores' | 'windows-server-2019-license-datacenter-edition-42-cores' | 'windows-server-2019-license-datacenter-edition-44-cores' | 'windows-server-2019-license-datacenter-edition-46-cores' | 'windows-server-2019-license-datacenter-edition-48-cores' | 'windows-server-2019-license-datacenter-edition-50-cores' | 'windows-server-2019-license-datacenter-edition-52-cores' | 'windows-server-2019-license-datacenter-edition-54-cores' | 'windows-server-2019-license-datacenter-edition-56-cores' | 'windows-server-2019-license-datacenter-edition-58-cores' | 'windows-server-2019-license-datacenter-edition-60-cores' | 'windows-server-2019-license-datacenter-edition-62-cores' | 'windows-server-2019-license-datacenter-edition-64-cores' | 'windows-server-2019-license-datacenter-edition-8-cores' | 'windows-server-2019-license-standard-edition-10-cores' | 'windows-server-2019-license-standard-edition-12-cores' | 'windows-server-2019-license-standard-edition-14-cores' | 'windows-server-2019-license-standard-edition-16-cores' | 'windows-server-2019-license-standard-edition-18-cores' | 'windows-server-2019-license-standard-edition-20-cores' | 'windows-server-2019-license-standard-edition-22-cores' | 'windows-server-2019-license-standard-edition-24-cores' | 'windows-server-2019-license-standard-edition-26-cores' | 'windows-server-2019-license-standard-edition-28-cores' | 'windows-server-2019-license-standard-edition-30-cores' | 'windows-server-2019-license-standard-edition-32-cores' | 'windows-server-2019-license-standard-edition-34-cores' | 'windows-server-2019-license-standard-edition-36-cores' | 'windows-server-2019-license-standard-edition-38-cores' | 'windows-server-2019-license-standard-edition-40-cores' | 'windows-server-2019-license-standard-edition-42-cores' | 'windows-server-2019-license-standard-edition-44-cores' | 'windows-server-2019-license-standard-edition-46-cores' | 'windows-server-2019-license-standard-edition-48-cores' | 'windows-server-2019-license-standard-edition-50-cores' | 'windows-server-2019-license-standard-edition-52-cores' | 'windows-server-2019-license-standard-edition-54-cores' | 'windows-server-2019-license-standard-edition-56-cores' | 'windows-server-2019-license-standard-edition-58-cores' | 'windows-server-2019-license-standard-edition-60-cores' | 'windows-server-2019-license-standard-edition-62-cores' | 'windows-server-2019-license-standard-edition-64-cores' | 'windows-server-2019-license-standard-edition-8-cores';
/**
 * All SQL Server versions for Windows products
 */
export type LicenseWindowsSqlVersionEnum = 'SQL_SERVER_2008_STANDARD_EDITION' | 'SQL_SERVER_2008_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2008_WEB_EDITION' | 'SQL_SERVER_2008_WEB_EDITION_2_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION' | 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2012_WEB_EDITION_12_CORES' | 'SQL_SERVER_2012_WEB_EDITION_16_CORES' | 'SQL_SERVER_2012_WEB_EDITION_18_CORES' | 'SQL_SERVER_2012_WEB_EDITION_20_CORES' | 'SQL_SERVER_2012_WEB_EDITION_24_CORES' | 'SQL_SERVER_2012_WEB_EDITION_32_CORES' | 'SQL_SERVER_2012_WEB_EDITION_4_CORES' | 'SQL_SERVER_2012_WEB_EDITION_6_CORES' | 'SQL_SERVER_2012_WEB_EDITION_8_CORES';
/**
 * All versions for WorkLight product
 */
export type LicenseWorkLightVersionEnum = 'VERSION-6.1U.1CPU' | 'VERSION-6.1U.2CPU' | 'VERSION-6.2U.1CPU' | 'VERSION-6.2U.2CPU' | 'VERSION-6.EVALUATION' | 'worklight-license-version-6-1cpu-1u' | 'worklight-license-version-6-1cpu-2u' | 'worklight-license-version-6-2cpu-1u' | 'worklight-license-version-6-2cpu-2u';
/**
 * Countries a nichandle can choose
 */
export type NichandleCountryEnum = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DG' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EA' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'IC' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'UNKNOWN' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';
/**
 * Legal forms a nichandle can be registered as
 */
export type NichandleLegalFormEnum = 'administration' | 'association' | 'corporation' | 'individual' | 'other' | 'personalcorporation';
/**
 * OVH subsidiaries
 */
export type NichandleOvhSubsidiaryEnum = 'ASIA' | 'AU' | 'CA' | 'CZ' | 'DE' | 'ES' | 'EU' | 'FI' | 'FR' | 'GB' | 'IE' | 'IT' | 'LT' | 'MA' | 'NL' | 'PL' | 'PT' | 'QC' | 'SG' | 'SN' | 'TN' | 'US' | 'WE' | 'WS';
/**
 * A contract
 */
export interface OrderContract {
  /**
   */
  content?: string;
  /**
   */
  name?: string;
  /**
   */
  url?: string;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * An order
 */
export interface OrderOrder {
  /**
   */
  contracts?: OrderContract[];
  /**
   */
  details?: OrderOrderDetail[];
  /**
   */
  orderId?: Number;
  /**
   */
  prices?: OrderOrderPrices;
  /**
   */
  url?: string;
}
/**
 * Detail of an order
 */
export interface OrderOrderDetail {
  /**
   */
  description?: string;
  /**
   */
  detailType?: OrderOrderDetailTypeEnum;
  /**
   */
  domain?: string;
  /**
   */
  quantity?: Number;
  /**
   */
  totalPrice?: OrderPrice;
  /**
   */
  unitPrice?: OrderPrice;
}
/**
 * Product type of item in order
 */
export type OrderOrderDetailTypeEnum = 'ACCESSORY' | 'CAUTION' | 'CHOOSED' | 'CONSUMPTION' | 'CREATION' | 'DELIVERY' | 'DURATION' | 'GIFT' | 'INSTALLATION' | 'LICENSE' | 'MUTE' | 'OTHER' | 'OUTPLAN' | 'QUANTITY' | 'REFUND' | 'RENEW' | 'SPECIAL' | 'SWITCH' | 'TRANSFER' | 'VOUCHER';
/**
 * Prices of an order
 */
export interface OrderOrderPrices {
  /**
   */
  tax?: OrderPrice;
  /**
   */
  withTax?: OrderPrice;
  /**
   */
  withoutTax?: OrderPrice;
}
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
 * A shopping cart
 */
export interface OrderCartCart {
  /**
   * Cart identifier
   *
   */
  cartId?: string;
  /**
   * Description of your cart
   *
   */
  description?: string;
  /**
   * Expiration time
   *
   */
  expire?: Date;
  /**
   * Items of your cart
   *
   */
  items?: Number[];
  /**
   * Indicates if the cart has already been validated
   *
   */
  readOnly?: boolean;
}
/**
 * Representation of a configuration item for personalizing product
 */
export interface OrderCartConfigurationItem {
  /**
   * Configuration ID
   *
   */
  id?: Number;
  /**
   * Identifier of the resource
   *
   */
  label?: string;
  /**
   * Path to the resource in API.OVH.COM
   *
   */
  value?: string;
}
/**
 * Information about a configuration
 */
export interface OrderCartConfigurationRequirements {
  /**
   * Indicates if some particular fields have to be inputed during the creation of `type` resource
   *
   */
  fields?: string[];
  /**
   * Label for your configuration item
   *
   */
  label?: string;
  /**
   * Indicates if the configuration item is required
   *
   */
  required?: boolean;
  /**
   * Type of the configuration item
   *
   */
  type?: string;
}
/**
 * Specific details about domain packs offer
 */
export interface OrderCartDomainPacksDescription {
  /**
   * Informations about domains availability
   *
   */
  domains?: OrderCartDomainPacksDescriptionItem[];
}
/**
 * Describe the eligibility of each domain in the packs
 */
export interface OrderCartDomainPacksDescriptionItem {
  /**
   * Indicates if domain is available and will be included in the pack
   *
   */
  available?: boolean;
  /**
   * Domain concerned by the availability
   *
   */
  domain?: string;
}
/**
 * Information about a Domain Packs offer information
 */
export interface OrderCartDomainPacksProductInformation {
  /**
   * Specific details about domain packs offer
   *
   */
  description?: OrderCartDomainPacksDescription;
  /**
   * Identifier of the offer
   *
   */
  planCode?: string;
  /**
   * Prices of the offer
   *
   */
  prices?: OrderCartGenericProductPricing[];
}
/**
 * Representation of domain name order properties
 */
export interface OrderCartDomainSettings {
  /**
   * Domain name requested
   *
   */
  domain?: string;
}
/**
 * Unit that correspond to a duration range
 */
export type OrderCartDurationUnitEnum = 'month' | 'day' | 'none';
/**
 * Representation of a generic product option
 */
export interface OrderCartGenericOptionDefinition {
  /**
   * Define if options of this family are exclusive with each other
   *
   */
  exclusive?: boolean;
  /**
   * Option family
   *
   */
  family?: string;
  /**
   * Define if an option of this family is mandatory
   *
   */
  mandatory?: boolean;
  /**
   * Product offer identifier
   *
   */
  planCode?: string;
  /**
   * Prices of the product offer
   *
   */
  prices?: OrderCartGenericProductPricing[];
  /**
   * Name of the product
   *
   */
  productName?: string;
  /**
   * Product type
   *
   */
  productType?: OrderCartGenericProductTypeEnum;
}
/**
 * Representation of a generic product
 */
export interface OrderCartGenericProductDefinition {
  /**
   * Product offer identifier
   *
   */
  planCode?: string;
  /**
   * Prices of the product offer
   *
   */
  prices?: OrderCartGenericProductPricing[];
  /**
   * Name of the product
   *
   */
  productName?: string;
  /**
   * Product type
   *
   */
  productType?: OrderCartGenericProductTypeEnum;
}
/**
 * Representation of a product pricing
 */
export interface OrderCartGenericProductPricing {
  /**
   * Capacities of the pricing (type of pricing)
   *
   */
  capacities?: OrderCartGenericProductPricingCapacitiesEnum[];
  /**
   * Description of the pricing
   *
   */
  description?: string;
  /**
   * Duration for ordering the product
   *
   */
  duration?: string;
  /**
   * Interval of renewal
   *
   */
  interval?: Number;
  /**
   * Maximum quantity that can be ordered
   *
   */
  maximumQuantity?: Number;
  /**
   * Maximum repeat for renewal
   *
   */
  maximumRepeat?: Number;
  /**
   * Minimum quantity that can be ordered
   *
   */
  minimumQuantity?: Number;
  /**
   * Minimum repeat for renewal
   *
   */
  minimumRepeat?: Number;
  /**
   * Price of the product
   *
   */
  price?: OrderPrice;
  /**
   * Price of the product in micro-centims
   *
   */
  priceInUcents?: Number;
  /**
   * Pricing model identifier
   *
   */
  pricingMode?: string;
  /**
   * Pricing type
   *
   */
  pricingType?: OrderCartGenericProductPricingTypeEnum;
}
/**
 * Capacity of a pricing (type)
 */
export type OrderCartGenericProductPricingCapacitiesEnum = 'installation' | 'renew' | 'upgrade' | 'downgrade';
/**
 * Strategy of a Pricing
 */
export type OrderCartGenericProductPricingStrategyEnum = 'stairstep' | 'volume' | 'tiered';
/**
 * Type of a pricing
 */
export type OrderCartGenericProductPricingTypeEnum = 'rental' | 'consumption' | 'purchase';
/**
 * Type of a product
 */
export type OrderCartGenericProductTypeEnum = 'delivery' | 'deposit' | 'shipping' | 'cloud_service' | 'saas_license' | 'storage' | 'domain';
/**
 * Representation of a cart item
 */
export interface OrderCartItem {
  /**
   * Cart identifier
   *
   */
  cartId?: string;
  /**
   * Configuration set for this product
   *
   */
  configurations?: Number[];
  /**
   * Duration for the service
   *
   */
  duration?: duration:string;
  /**
   * Current product identifier
   *
   */
  itemId?: Number;
  /**
   * Offer unique identifier of the product added
   *
   */
  offerId?: string;
  /**
   * Options item ID attached to this item
   *
   */
  options?: Number[];
  /**
   * Id of parent item (if item is an option)
   *
   */
  parentItemId?: Number;
  /**
   * Price of the item
   *
   */
  prices?: OrderCartPrice[];
  /**
   * Type of the product added
   *
   */
  productId?: string;
  /**
   * Domain related settings
   *
   */
  settings?: OrderCartDomainSettings;
}
/**
 * Price informations with label
 */
export interface OrderCartPrice {
  /**
   * Label corresponding to a price
   *
   */
  label?: OrderCartPriceLabelEnum;
  /**
   * Price of the product
   *
   */
  price?: OrderPrice;
}
/**
 * Label corresponding to different type of price
 */
export type OrderCartPriceLabelEnum = 'PRICE' | 'DISCOUNT' | 'FEE' | 'TOTAL' | 'RENEW';
/**
 * Information about a product for Order/Cart
 */
export interface OrderCartProductInformation {
  /**
   * Informations about the configurations required
   *
   */
  configurations?: OrderCartConfigurationRequirements[];
  /**
   * Informations about the estimated delivery time for the product
   *
   */
  deliveryTime?: string;
  /**
   * List all the duration allowed for the product
   *
   */
  duration?: duration[]:string[];
  /**
   * Informations about the domain's offer (gold|diamond|platinium)
   *
   */
  offer?: string;
  /**
   * Indicates if the product is orderable or not
   *
   */
  orderable?: boolean;
  /**
   * Informations about the domain phase
   *
   */
  phase?: string;
  /**
   * Price details of the product
   *
   */
  prices?: OrderCartPrice[];
  /**
   * Pricing model identifier for this product
   *
   */
  pricingMode?: string;
  /**
   * Product identifier
   *
   */
  productId?: string;
  /**
   * Maximum quantity purchasable for this product
   *
   */
  quantityMax?: Number;
}
/**
 * Information about a Web Hosting offer information
 */
export interface OrderCartWebHostingProductInformation {
  /**
   * Specific details about web hosting offer
   *
   */
  description?: HostingWebCapabilities;
  /**
   * Identifier of the offer
   *
   */
  planCode?: string;
  /**
   * Prices of the offer
   *
   */
  prices?: OrderCartGenericProductPricing[];
}
/**
 * Describes an Addon
 */
export interface OrderCatalogAddonItem {
  /**
   * List of the addons of this family
   *
   */
  addons?: OrderCatalogAddonOffer[];
  /**
   * Whether you can only have one instance of this addon family (xor)
   *
   */
  exclusive?: boolean;
  /**
   * Addon family name
   *
   */
  family?: string;
  /**
   * Indicated if addon family must be contracted
   *
   */
  mandatory?: boolean;
}
/**
 * Describes of Addon offer
 */
export interface OrderCatalogAddonOffer {
  /**
   * Name that appears on invoice
   *
   */
  invoiceName?: string;
  /**
   * Describes of commercial offer of a product
   *
   */
  plan?: OrderCatalogProductPlan;
}
/**
 * Describes a Catalog
 */
export interface OrderCatalogCatalog {
  /**
   * Identifier of the catalog
   *
   */
  catalogId?: Number;
  /**
   * OVH Subsidiary concerned by this catalog
   *
   */
  merchantCode?: string;
  /**
   * List of plans of the catalog
   *
   */
  plansFamily?: OrderCatalogPlansItem[];
}
/**
 * Composition of a configuration
 */
export interface OrderCatalogConfigurationItem {
  /**
   * Default value of the configuration if not provided
   *
   */
  defaultValue?: string;
  /**
   * Indicates if the configuration is free for writing (true) or have to follow an enum (false - have to follow values field)
   *
   */
  isCustom?: boolean;
  /**
   * Indicates if configuration is required
   *
   */
  isMandatory?: boolean;
  /**
   * Label of the configuration
   *
   */
  name?: string;
  /**
   * Values allowed if configuration isn't custom
   *
   */
  values?: string[];
}
/**
 * Describe an item that contains multiple plans
 */
export interface OrderCatalogPlansItem {
  /**
   * Family of the product
   *
   */
  family?: string;
  /**
   * List of the plans for this catalog
   *
   */
  plans?: OrderCatalogProductPlan[];
}
/**
 * Describes a pricing
 */
export interface OrderCatalogPricing {
  /**
   * Install, renew ... What the pricing can be used for
   *
   */
  capacities?: string[];
  /**
   * Engagement period
   *
   */
  commitment?: Number;
  /**
   * Description
   *
   */
  description?: string;
  /**
   * Number length of the interval
   *
   */
  interval?: Number;
  /**
   * Unit interval for duration
   *
   */
  intervalUnit?: string;
  /**
   * Maximum quantity buyable
   *
   */
  maximumQuantity?: Number;
  /**
   * Maximum repeat duration
   *
   */
  maximumRepeat?: Number;
  /**
   * Minimum quantity
   *
   */
  minimumQuantity?: Number;
  /**
   * Minimum repeat duration
   *
   */
  minimumRepeat?: Number;
  /**
   * Whether the catalog must reach max repeat before subscription can use another one
   *
   */
  mustBeCompleted?: boolean;
  /**
   * Price of the product
   *
   */
  price?: OrderPrice;
  /**
   * Max price customer will pay at the end of the period (cap)
   *
   */
  priceCapInUcents?: Number;
  /**
   * Price in microcents
   *
   */
  priceInUcents?: Number;
  /**
   * Strategy on which the pricing can change
   *
   */
  pricingStrategy?: string;
}
/**
 * Describe default pricings
 */
export interface OrderCatalogPricingDefault {
  /**
   * Information about default pricing
   *
   */
  default?: OrderCatalogPricing[];
}
/**
 * Describe a Product in the Catalog
 */
export interface OrderCatalogProduct {
  /**
   * List of the configurations available for the product
   *
   */
  configurations?: OrderCatalogConfigurationItem[];
  /**
   * Designation of the product
   *
   */
  description?: string;
  /**
   * Plan code identifier of the product
   *
   */
  name?: string;
  /**
   * Technicals details about product
   *
   */
  technicalDetails?: ComplexTypeSafeKeyValue<string>[];
}
/**
 * Describe the details of a commercial offer
 */
export interface OrderCatalogProductOfferDetails {
  /**
   * List of the metadatas attached
   *
   */
  metadatas?: ComplexTypeSafeKeyValue<string>[];
  /**
   * Describe default pricings
   *
   */
  pricings?: OrderCatalogPricingDefault;
  /**
   * Information about the product
   *
   */
  product?: OrderCatalogProduct;
}
/**
 * Describes of commercial offer of a product
 */
export interface OrderCatalogProductPlan {
  /**
   * List of addons
   *
   */
  addonsFamily?: OrderCatalogAddonItem[];
  /**
   * Strategy that follow the pricing when product is in consumption mode
   *
   */
  consumptionBillingStrategy?: string;
  /**
   * Describe the details of a commercial offer
   *
   */
  details?: OrderCatalogProductOfferDetails;
  /**
   * Name that appears on invoice
   *
   */
  invoiceName?: string;
  /**
   * Plan code identifier
   *
   */
  planCode?: string;
  /**
   * Main mode: rental, consumption
   *
   */
  pricingType?: string;
}
/**
 * Describe a Private Cloud commercial catalog
 */
export interface OrderCatalogPccCatalog {
  /**
   * Catalog ID
   *
   */
  catalogId?: Number;
  /**
   * Catalog name
   *
   */
  catalogName?: string;
  /**
   * Describes Commercial Ranges of a Private Cloud
   *
   */
  commercialRanges?: OrderCatalogPccCommercialRange[];
  /**
   * OVH Subsidiary of the Catalog
   *
   */
  merchantCode?: string;
  /**
   * Commercial offers
   *
   */
  plans?: OrderCatalogProductPlan[];
}
/**
 * Describes the Commercial Range of a Private Cloud
 */
export interface OrderCatalogPccCommercialRange {
  /**
   * Describes Private Cloud Datacenters
   *
   */
  datacenters?: OrderCatalogPccDatacenter[];
  /**
   * Default datacenter of the commercial range
   *
   */
  defaultZone?: string;
  /**
   * Name of the commercial range
   *
   */
  name?: string;
}
/**
 * Describes a Private Cloud Datacenter
 */
export interface OrderCatalogPccDatacenter {
  /**
   * City Code of a Datacenter
   *
   */
  cityCode?: string;
  /**
   * City Name of a Datacenter
   *
   */
  cityName?: string;
  /**
   * Country Code of a Datacenter
   *
   */
  countryCode?: NichandleCountryEnum;
  /**
   * Name of the default hypervisor of a Datacenter
   *
   */
  defaultHypervisor?: string;
  /**
   * Describes Private Cloud Hypervisors
   *
   */
  hypervisors?: OrderCatalogPccHypervisor[];
  /**
   * Main plan code to use for a Datacenter
   *
   */
  mainPlan?: string;
  /**
   * Describes if a Private Cloud can be ordered on a Datacenter
   *
   */
  orderable?: boolean;
  /**
   * Describes if options can be ordered on a Datacenter
   *
   */
  orderableOptions?: boolean;
  /**
   * Describes if resources can be ordered on a Datacenter
   *
   */
  orderableResources?: boolean;
  /**
   * List of filers add in case of a No Pack order
   *
   */
  storagesNoPack?: string[];
  /**
   * Zone Code of a datacenter
   *
   */
  zoneFullName?: string;
  /**
   * Zone Name of a datacenter
   *
   */
  zoneName?: string;
}
/**
 * Describes a Private Cloud Host
 */
export interface OrderCatalogPccHost {
  /**
   * Name of the host
   *
   */
  name?: string;
  /**
   * Describes if host is orderable on a initial Order
   *
   */
  onInitialOrder?: boolean;
  /**
   * Describes if host is orderable on a upgrade order
   *
   */
  onUpgradeOrder?: boolean;
  /**
   * Plan Code
   *
   */
  planCode?: string;
  /**
   * Describes Private Cloud Host specifications
   *
   */
  specifications?: OrderCatalogPccHostSpecifications;
  /**
   * List of filers add in case of a Pack order
   *
   */
  storagesPack?: string[];
}
/**
 * Describes a Private Cloud Host CPU
 */
export interface OrderCatalogPccHostCpuSpecifications {
  /**
   * Number of CPU Cores
   *
   */
  cores?: Number;
  /**
   * CPU Frequency
   *
   */
  frequency?: ComplexTypeUnitAndValue<Number>;
  /**
   * CPU Generation
   *
   */
  generation?: string;
  /**
   * CPU Model
   *
   */
  model?: string;
  /**
   * Number of CPU
   *
   */
  socket?: Number;
  /**
   * Number of CPU Threads
   *
   */
  threads?: Number;
}
/**
 * Describes a Private Cloud Host Memory
 */
export interface OrderCatalogPccHostMemorySpecifications {
  /**
   * Memory Size
   *
   */
  ram?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Describes a Private Cloud Host Network
 */
export interface OrderCatalogPccHostNetworkSpecifications {
  /**
   * Number of network interfaces
   *
   */
  nics?: Number;
  /**
   * Speed of the network interfaces
   *
   */
  speed?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Describes a Private Cloud Host Hardware
 */
export interface OrderCatalogPccHostSpecifications {
  /**
   * Describes the CPU specification of a Host
   *
   */
  cpu?: OrderCatalogPccHostCpuSpecifications;
  /**
   * Describes the memory specification of a Host
   *
   */
  memory?: OrderCatalogPccHostMemorySpecifications;
  /**
   * Describes the network specification of a Host
   *
   */
  network?: OrderCatalogPccHostNetworkSpecifications[];
}
/**
 * Describes a Private Cloud Hypervisor
 */
export interface OrderCatalogPccHypervisor {
  /**
   * Describes Private Cloud Hosts
   *
   */
  hosts?: OrderCatalogPccHost[];
  /**
   * Name of the hypervisor
   *
   */
  name?: string;
  /**
   * Describes Private Cloud Options
   *
   */
  options?: OrderCatalogPccOption[];
  /**
   * Describes if an hypervisor is orderable
   *
   */
  orderable?: boolean;
  /**
   * Describes Private Cloud Service Packs
   *
   */
  servicePacks?: OrderCatalogPccServicePack[];
  /**
   * Short Name of the hypervisor
   *
   */
  shortName?: string;
  /**
   * Describes Private Cloud Storages
   *
   */
  storages?: OrderCatalogPccStorage[];
  /**
   * Type of the hypervisor
   *
   */
  type?: string;
}
/**
 * Describes a Private Cloud Option
 */
export interface OrderCatalogPccOption {
  /**
   * Describes the maximum quantity on the initial order
   *
   */
  maxInitialQuantity?: Number;
  /**
   * Name of the option
   *
   */
  name?: string;
  /**
   * Describes if option is orderable on a initial order
   *
   */
  onInitialOrder?: boolean;
  /**
   * Describes if option is orderable on a upgrade order
   *
   */
  onUpgradeOrder?: boolean;
  /**
   * Plan Code
   *
   */
  planCode?: string;
  /**
   * Category of the option
   *
   */
  type?: string;
}
/**
 * Describes a Private Cloud Service Pack
 */
export interface OrderCatalogPccServicePack {
  /**
   * Name of the service pack
   *
   */
  name?: string;
  /**
   * Describes Option include in the service pack
   *
   */
  options?: OrderCatalogPccServicePackOption[];
  /**
   * Plan Code
   *
   */
  planCode?: string;
  /**
   * List of available service pack upgrades
   *
   */
  upgradableTo?: string[];
}
/**
 * Describes a Private Cloud service pack option
 */
export interface OrderCatalogPccServicePackOption {
  /**
   * Name of the option
   *
   */
  name?: string;
  /**
   * Plan Code
   *
   */
  planCode?: string;
  /**
   * Category of the option
   *
   */
  type?: string;
}
/**
 * Describes a Private Cloud Storage
 */
export interface OrderCatalogPccStorage {
  /**
   * Name of the filer
   *
   */
  name?: string;
  /**
   * Describes if filer is orderable on a initial Order
   *
   */
  onInitialOrder?: boolean;
  /**
   * Describes if filer is orderable on a upgrade order
   *
   */
  onUpgradeOrder?: boolean;
  /**
   * Plan Code
   *
   */
  planCode?: string;
  /**
   * Describes Private Cloud Storage specifications
   *
   */
  specifications?: OrderCatalogPccStorageSpecifications;
}
/**
 * Describes a Private Cloud Storage
 */
export interface OrderCatalogPccStorageSpecifications {
  /**
   * Size of the storage
   *
   */
  size?: ComplexTypeUnitAndValue<Number>;
  /**
   * Type of the storage
   *
   */
  type?: string;
}
/**
 * Describes capabilities of a Private Cloud type of service
 */
export interface OrderCatalogPrivateCloudCapabilities {
  /**
   * Define if HDS is part of this type of service
   *
   */
  hds?: boolean;
  /**
   * Define if HIPAA is part of this type of service
   *
   */
  hipaa?: boolean;
  /**
   * Define if NSX is part of this type of service
   *
   */
  nsx?: boolean;
  /**
   * Define if PCI-DSS is part of this type of service
   *
   */
  pcidss?: boolean;
  /**
   * Define if VROPS is part of this type of service
   *
   */
  vrops?: boolean;
}
/**
 * Describe all capabilities of different types of service
 */
export interface OrderCatalogPrivateCloudCapabilitiesListing {
  /**
   * Describe capabilities of 2016v1 type of service
   *
   */
  2016v1?: OrderCatalogPrivateCloudCapabilities;
  /**
   * Describe capabilities of 2016v2 type of service
   *
   */
  2016v2?: OrderCatalogPrivateCloudCapabilities;
  /**
   * Describe capabilities of 2016v3 type of service
   *
   */
  2016v3?: OrderCatalogPrivateCloudCapabilities;
  /**
   * Describe capabilities of 2016v4 type of service
   *
   */
  2016v4?: OrderCatalogPrivateCloudCapabilities;
  /**
   * Describe capabilities of 2016v5 type of service
   *
   */
  2016v5?: OrderCatalogPrivateCloudCapabilities;
  /**
   * Describe capabilities of 2016v6 type of service
   *
   */
  2016v6?: OrderCatalogPrivateCloudCapabilities;
  /**
   * Describe capabilities of 2016v7 type of service
   *
   */
  2016v7?: OrderCatalogPrivateCloudCapabilities;
  /**
   * Describe capabilities of default type of service
   *
   */
  default?: OrderCatalogPrivateCloudCapabilities;
}
/**
 * Describe a Private Cloud commercial catalog
 */
export interface OrderCatalogPrivateCloudCatalog {
  /**
   * Catalog ID
   *
   */
  catalogId?: Number;
  /**
   * Catalog name
   *
   */
  catalogName?: string;
  /**
   * Default hypervisor for this catalog
   *
   */
  defaultHypervisor?: string;
  /**
   * Default datacenter for this catalog
   *
   */
  defaultZone?: string;
  /**
   * OVH Subsidiary of the Catalog
   *
   */
  merchantCode?: string;
  /**
   * Describe all capabilities of different types of service
   *
   */
  options?: OrderCatalogPrivateCloudCapabilitiesListing;
  /**
   * Zone definitions per datacenters
   *
   */
  zones?: OrderCatalogPrivateCloudZonesListing;
}
/**
 * Describe a Private Cloud zone
 */
export interface OrderCatalogPrivateCloudZone {
  /**
   * City where Private Cloud instance will be delivered
   *
   */
  cityName?: string;
  /**
   * Country where Private Cloud instance will be delivered
   *
   */
  country?: string;
  /**
   * Default hypervisor for this Private Cloud zone
   *
   */
  defaultHypervisor?: string;
  /**
   * Default version for this Private Cloud zone
   *
   */
  defaultVersion?: string;
  /**
   * Internal name of the zone
   *
   */
  internalName?: string;
  /**
   * Commercial offers on this zone
   *
   */
  plans?: OrderCatalogProductPlan[];
}
/**
 * Zone definitions per datacenters
 */
export interface OrderCatalogPrivateCloudZonesListing {
  /**
   * Zone definition for BHS datacenter
   *
   */
  bhs?: OrderCatalogPrivateCloudZone;
  /**
   * Zone definition for ERI datacenter
   *
   */
  eri?: OrderCatalogPrivateCloudZone;
  /**
   * Zone definition for LIM datacenter
   *
   */
  lim?: OrderCatalogPrivateCloudZone;
  /**
   * Zone definition for RBX datacenter
   *
   */
  rbx?: OrderCatalogPrivateCloudZone;
  /**
   * Zone definition for SBG datacenter
   *
   */
  sbg?: OrderCatalogPrivateCloudZone;
  /**
   * Zone definition for WAW datacenter
   *
   */
  waw?: OrderCatalogPrivateCloudZone;
}
/**
 * Describes an Addon family for a Commercial offer
 */
export interface OrderCatalogPublicAddonFamily {
  /**
   * List of Commercial offers that can be ordered as an Addon of the current Commerical offer for the current Family
   *
   */
  addons?: string[];
  /**
   * Default Commercial offer that can be ordered as an Addon of the current Commercial offer for the current Family
   *
   */
  default?: string;
  /**
   * Whether this Addon family is exclusive and can be ordered only once for the main Commercial offer
   *
   */
  exclusive?: boolean;
  /**
   * Whether this Addon family is mandatory
   *
   */
  mandatory?: boolean;
  /**
   * Family name
   *
   */
  name?: string;
}
/**
 * Describes a Catalog inside a Subsidiary
 */
export interface OrderCatalogPublicCatalog {
  /**
   * List of addons of the catalog
   *
   */
  addons?: OrderCatalogPublicPlan[];
  /**
   * Identifier of the catalog
   *
   */
  catalogId?: Number;
  /**
   * Subsidiary specific information
   *
   */
  locale?: OrderCatalogPublicLocale;
  /**
   * List of plan families of the catalog
   *
   */
  planFamilies?: OrderCatalogPublicPlanFamily[];
  /**
   * List of main plans of the catalog
   *
   */
  plans?: OrderCatalogPublicPlan[];
  /**
   * List of products of the catalog
   *
   */
  products?: OrderCatalogPublicProduct[];
}
/**
 * Describes the Configuration for a Commercial offer
 */
export interface OrderCatalogPublicConfiguration {
  /**
   * Whether the value of this Configuration is custom
   *
   */
  isCustom?: boolean;
  /**
   * Whether this Configuration is mandatory
   *
   */
  isMandatory?: boolean;
  /**
   * Identifier of the Configuration
   *
   */
  name?: string;
  /**
   * Possible values for this Configuration, if not custom
   *
   */
  values?: string[];
}
/**
 * Describes a Dedicated server Catalog inside a Subsidiary
 */
export interface OrderCatalogPublicDedicatedServerCatalog {
  /**
   * List of addons of the catalog
   *
   */
  addons?: OrderCatalogPublicPlan[];
  /**
   * Identifier of the catalog
   *
   */
  catalogId?: Number;
  /**
   * Subsidiary specific information
   *
   */
  locale?: OrderCatalogPublicLocale;
  /**
   * List of plan families of the catalog
   *
   */
  planFamilies?: OrderCatalogPublicAddonFamily[];
  /**
   * List of main plans of the catalog
   *
   */
  plans?: OrderCatalogPublicPlan[];
  /**
   * List of products of the catalog
   *
   */
  products?: OrderCatalogPublicDedicatedServerProduct[];
}
/**
 * Describes a Dedicated Server Product
 */
export interface OrderCatalogPublicDedicatedServerProduct {
  /**
   * Additional information for this Product
   *
   */
  blobs?: OrderCatalogPublicDedicatedServerProductBlob;
  /**
   * Description of the Product
   *
   */
  description?: string;
  /**
   * Identifier of the Product
   *
   */
  name?: string;
}
/**
 * Describes a Blob for a Dedicated Server
 */
export interface OrderCatalogPublicDedicatedServerProductBlob {
  /**
   * Technical information for Dedicated Server Product
   *
   */
  technical?: OrderCatalogPublicDedicatedServerProductBlobTechnical;
}
/**
 * Describes a Technical Blob for a Dedicated Server
 */
export interface OrderCatalogPublicDedicatedServerProductBlobTechnical {
  /**
   * Network informations
   *
   */
  bandwidth?: OrderCatalogPublicDedicatedServerProductBlobTechnicalNetwork;
  /**
   * CPU informations
   *
   */
  cpu?: OrderCatalogPublicDedicatedServerProductBlobTechnicalCPU;
  /**
   * GPU informations
   *
   */
  gpu?: OrderCatalogPublicDedicatedServerProductBlobTechnicalGPU;
  /**
   * Memory informations
   *
   */
  memory?: OrderCatalogPublicDedicatedServerProductBlobTechnicalMemory;
  /**
   * Hardware informations
   *
   */
  server?: OrderCatalogPublicDedicatedServerProductBlobTechnicalServer;
  /**
   * Disks informations
   *
   */
  storage?: OrderCatalogPublicDedicatedServerProductBlobTechnicalStorage;
  /**
   * vRack informations
   *
   */
  vrack?: OrderCatalogPublicDedicatedServerProductBlobTechnicalNetwork;
}
/**
 * Describes a CPU for a Dedicated Server
 */
export interface OrderCatalogPublicDedicatedServerProductBlobTechnicalCPU {
  /**
   * CPU Boost
   *
   */
  boost?: Number;
  /**
   * CPU Brand
   *
   */
  brand?: string;
  /**
   * Number of cores
   *
   */
  cores?: Number;
  /**
   * Frequency of CPU in GHz
   *
   */
  frequency?: Number;
  /**
   * Displayable name
   *
   */
  model?: string;
  /**
   * CPU score
   *
   */
  score?: Number;
  /**
   * Number of threads
   *
   */
  threads?: Number;
}
/**
 * Describes a Disk for a Dedicated Server
 */
export interface OrderCatalogPublicDedicatedServerProductBlobTechnicalDisk {
  /**
   * Disk capacity in Gb
   *
   */
  capacity?: Number;
  /**
   * Disk interface
   *
   */
  interface?: string;
  /**
   * Number of disks
   *
   */
  number?: Number;
  /**
   * Disk specs
   *
   */
  specs?: string;
  /**
   * Disk technology
   *
   */
  technology?: string;
}
/**
 * Describes a Frame for a Dedicated Server
 */
export interface OrderCatalogPublicDedicatedServerProductBlobTechnicalFrame {
  /**
   * Frame model
   *
   */
  model?: string;
  /**
   * Frame size
   *
   */
  size?: string;
}
/**
 * Describes a GPU for a Dedicated Server
 */
export interface OrderCatalogPublicDedicatedServerProductBlobTechnicalGPU {
  /**
   * GPU memory size
   *
   */
  memory?: Number;
}
/**
 * Describes a Memory technical Blob for a Dedicated Server
 */
export interface OrderCatalogPublicDedicatedServerProductBlobTechnicalMemory {
  /**
   * ECC
   *
   */
  ecc?: boolean;
  /**
   * RAM Frequency
   *
   */
  frequency?: Number;
  /**
   * RAM Type (DDRx...)
   *
   */
  ramType?: string;
  /**
   * Size of the RAM in Gb
   *
   */
  size?: Number;
}
/**
 * Describes a Network technical Blob for a Dedicated Server
 */
export interface OrderCatalogPublicDedicatedServerProductBlobTechnicalNetwork {
  /**
   * Network burst
   *
   */
  burst?: Number;
  /**
   * Guaranteed Network
   *
   */
  guaranteed?: boolean;
  /**
   * Network level
   *
   */
  level?: Number;
  /**
   * Network limit
   *
   */
  limit?: Number;
}
/**
 * Describes some technicals informations of a Dedicated Server
 */
export interface OrderCatalogPublicDedicatedServerProductBlobTechnicalServer {
  /**
   * CPU properties
   *
   */
  cpu?: OrderCatalogPublicDedicatedServerProductBlobTechnicalCPU;
  /**
   * Frame properties
   *
   */
  frame?: OrderCatalogPublicDedicatedServerProductBlobTechnicalFrame;
  /**
   * Dedicated server series
   *
   */
  range?: string;
}
/**
 * Describes a Storage technical Blob for a Dedicated Server
 */
export interface OrderCatalogPublicDedicatedServerProductBlobTechnicalStorage {
  /**
   * Disk properties
   *
   */
  disks?: OrderCatalogPublicDedicatedServerProductBlobTechnicalDisk[];
  /**
   * Raid
   *
   */
  raid?: string;
}
/**
 * Describes specifics for a given Subsidiary
 */
export interface OrderCatalogPublicLocale {
  /**
   * Currency used by the Subsidiary
   *
   */
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   * Current Subsidiary
   *
   */
  subsidiary?: NichandleOvhSubsidiaryEnum;
  /**
   * Default VAT rate used by the Subsidiary
   *
   */
  taxRate?: Number;
}
/**
 * Describes a Commercial offer inside a Catalog
 */
export interface OrderCatalogPublicPlan {
  /**
   * Addon families for this offer
   *
   */
  addonFamilies?: OrderCatalogPublicAddonFamily[];
  /**
   * List of possible Configurations for this Commercial offer
   *
   */
  configurations?: OrderCatalogPublicConfiguration[];
  /**
   * Name of the family this Commercial offer belongs to
   *
   */
  family?: string;
  /**
   * Commercial offer description
   *
   */
  invoiceName?: string;
  /**
   * Commercial offer identifier
   *
   */
  planCode?: string;
  /**
   * Type of Pricing used by this Commercial offer
   *
   */
  pricingType?: OrderCartGenericProductPricingTypeEnum;
  /**
   * List of possible Pricings for this Commercial offer
   *
   */
  pricings?: OrderCatalogPublicPricing[];
  /**
   * Identifier of the Product linked to this Commercial offer
   *
   */
  product?: string;
}
/**
 * Describes a PlanFamily for a Catalog
 */
export interface OrderCatalogPublicPlanFamily {
  /**
   * Family name
   *
   */
  name?: string;
}
/**
 * Describes a Pricing for a Commercial offer
 */
export interface OrderCatalogPublicPricing {
  /**
   * Capacities of the Pricing, describes what the Pricing can be used for
   *
   */
  capacities?: OrderCartGenericProductPricingCapacitiesEnum[];
  /**
   * Engagement period
   *
   */
  commitment?: Number;
  /**
   * Pricing description
   *
   */
  description?: string;
  /**
   * Length of the interval
   *
   */
  interval?: Number;
  /**
   * Unit of the interval
   *
   */
  intervalUnit?: OrderCartDurationUnitEnum;
  /**
   * Pricing mode
   *
   */
  mode?: string;
  /**
   * Pricing must be completed
   *
   */
  mustBeCompleted?: boolean;
  /**
   * Phase for the Pricing
   *
   */
  phase?: Number;
  /**
   * Price, in micro-cents
   *
   */
  price?: Number;
  /**
   * Describes how many times the Commercial offer can be added to the Cart
   *
   */
  quantity?: OrderCatalogPublicPricingMinMax;
  /**
   * Describes how many times the interval can be repeated
   *
   */
  repeat?: OrderCatalogPublicPricingMinMax;
  /**
   * Pricing strategy
   *
   */
  strategy?: OrderCartGenericProductPricingStrategyEnum;
  /**
   * Tax that can be applied, in micro-cents
   *
   */
  tax?: Number;
  /**
   * Pricing type
   *
   */
  type?: OrderCartGenericProductPricingTypeEnum;
}
/**
 * Describes minimal and maximal values for a Pricing
 */
export interface OrderCatalogPublicPricingMinMax {
  /**
   * Maximal value
   *
   */
  max?: Number;
  /**
   * Minimal value
   *
   */
  min?: Number;
}
/**
 * Describes a Product attached to a Commercial offer
 */
export interface OrderCatalogPublicProduct {
  /**
   * Description of the Product
   *
   */
  description?: string;
  /**
   * Identifier of the Product
   *
   */
  name?: string;
}
/**
 * Describes an operation
 */
export interface OrderUpgradeOperation {
  /**
   * Identifier of the operation
   *
   */
  id?: Number;
  /**
   * Product concerned by the operation
   *
   */
  product?: OrderUpgradeOperationProduct;
  /**
   * Status of the operation
   *
   */
  status?: OrderUpgradeOperationStatusEnum;
  /**
   * Type of the operation
   *
   */
  type?: OrderUpgradeOperationTypeEnum;
}
/**
 * Describes an Operation and the associated Order
 */
export interface OrderUpgradeOperationAndOrder {
  /**
   * Upgrade operation
   *
   */
  operation?: OrderUpgradeOperation;
  /**
   * Order placed
   *
   */
  order?: OrderOrder;
}
/**
 * Describes a product inside a operation
 */
export interface OrderUpgradeOperationProduct {
  /**
   * Detailled description of a product
   *
   */
  description?: string;
  /**
   * Name of the product
   *
   */
  name?: string;
}
/**
 * Unit that represent the status of an operation
 */
export type OrderUpgradeOperationStatusEnum = 'TODO' | 'DOING' | 'DONE' | 'ERROR' | 'DELAYED' | 'CANCELLED' | 'SCHEDULED';
/**
 * Unit that represent the type of an operation
 */
export type OrderUpgradeOperationTypeEnum = 'UPGRADE';
/**
 * How do you want your shipment shipped
 */
export type OverTheBoxShippingMethodEnum = 'dhl' | 'mondialRelay';
/**
 * Typology of number
 */
export type TelephonyLineTypeEnum = 'geographic' | 'nogeographic';
/**
 * Number country
 */
export type TelephonyNumberCountryEnum = 'be' | 'ch' | 'de' | 'es' | 'fr' | 'gb' | 'it' | 'uk';
/**
 * Number offer
 */
export type TelephonyNumberOffer = 'alias' | 'didsOnly';
/**
 * Number quantity contained in the pool
 */
export type TelephonyNumberPoolEnum = 10 | 100 | 50;
/**
 * Number special typology
 */
export type TelephonyNumberSpecialTypologyEnum = 'be_adults' | 'be_content' | 'be_games' | 'be_general' | 'be_relaxing' | 'fr_access' | 'fr_adults' | 'fr_announced' | 'fr_conferencing' | 'fr_contentsAuto' | 'fr_contentsManual' | 'fr_games' | 'fr_linking' | 'fr_m2m' | 'fr_relationship';
/**
 * Available amounts for security deposit crediting
 */
export type TelephonySecurityDepositAmountsEnum = 10 | 100 | 1000 | 10000 | 20 | 200 | 2000 | 30 | 300 | 3000 | 40 | 400 | 4000 | 50 | 500 | 5000;
/**
 * Country of number to port
 */
export type TelephonyPortabilityCountriesAvailable = 'belgium' | 'france' | 'switzerland';
/**
 * Type of number
 */
export type TelephonyPortabilityNumberType = 'landline' | 'special';
/**
 * Type of your service offer
 */
export type TelephonyPortabilityOfferType = 'company' | 'individual';
/**
 * Social reason
 */
export type TelephonyPortabilitySocialReason = 'corporation' | 'individual' | 'professional';
/**
 * Special number category
 */
export type TelephonyPortabilitySpecialNumberCategoryEnum = 'access' | 'adults' | 'announced' | 'be_adults' | 'be_content' | 'be_games' | 'be_general' | 'be_relaxing' | 'conferencing' | 'contentsAuto' | 'contentsManual' | 'directory' | 'games' | 'linking' | 'm2m' | 'relationship';
/**
 * All orderable Veeam Cloud Connect offers
 */
export type VeeamCloudConnectOffer = 'advanced' | 'demo' | 'starter';
/**
 * Domain number the plesk license will be valid for
 */
export type VpsPleskLicenseDomainNumberEnum = '10' | '100' | '300' | 'hostingsuite';
/**
 * Size of the additional disk in GB
 */
export type VpsAdditionalDiskAdditionalDiskSizeEnum = '100' | '200' | '50' | '500';
/**
 * Geolocation of the IP Address
 */
export type VpsIpGeolocationEnum = 'au' | 'be' | 'ca' | 'cz' | 'de' | 'es' | 'fi' | 'fr' | 'ie' | 'it' | 'lt' | 'nl' | 'pl' | 'pt' | 'sg' | 'uk' | 'us';
/**
 * Possible localization for block
 */
export type VrackBlockCountryEnum = 'be' | 'cz' | 'de' | 'es' | 'fi' | 'fr' | 'ie' | 'it' | 'lt' | 'nl' | 'pl' | 'pt' | 'uk';
/**
 * Possible values for block size
 */
export type VrackBlockSizeEnum = '128' | '16' | '256' | '32' | '4' | '64' | '8';
type PathsOrderGET = '/order/xdsl/spare/new' | 
'/order/saas/csp2/new' | 
'/order/saas/csp2/new/{duration}' | 
'/order/vps' | 
'/order/vps/{serviceName}/additionalDisk' | 
'/order/vps/{serviceName}/additionalDisk/{duration}' | 
'/order/vps/{serviceName}' | 
'/order/vps/{serviceName}/upgrade/{duration}' | 
'/order/vps/{serviceName}/upgrade' | 
'/order/vps/{serviceName}/windows/{duration}' | 
'/order/vps/{serviceName}/windows' | 
'/order/vps/{serviceName}/snapshot' | 
'/order/vps/{serviceName}/snapshot/{duration}' | 
'/order/vps/{serviceName}/veeam/{duration}' | 
'/order/vps/{serviceName}/veeam' | 
'/order/vps/{serviceName}/automatedBackup/{duration}' | 
'/order/vps/{serviceName}/automatedBackup' | 
'/order/vps/{serviceName}/ftpbackup/{duration}' | 
'/order/vps/{serviceName}/ftpbackup' | 
'/order/vps/{serviceName}/ip/{duration}' | 
'/order/vps/{serviceName}/ip' | 
'/order/vps/{serviceName}/plesk/{duration}' | 
'/order/vps/{serviceName}/plesk' | 
'/order/vps/{serviceName}/cpanel/{duration}' | 
'/order/vps/{serviceName}/cpanel' | 
'/order/dedicated/housing/{serviceName}/APC' | 
'/order/dedicated/housing/{serviceName}/APC/{duration}' | 
'/order/dedicated/housing/{serviceName}' | 
'/order/dedicated/housing' | 
'/order/dedicated/nasha/new/{duration}' | 
'/order/dedicated/nasha/new' | 
'/order/dedicated/server/{serviceName}/usbKey/{duration}' | 
'/order/dedicated/server/{serviceName}/usbKey' | 
'/order/dedicated/server/{serviceName}/ipMigration/{duration}' | 
'/order/dedicated/server/{serviceName}/ipMigration' | 
'/order/dedicated/server/{serviceName}/traffic' | 
'/order/dedicated/server/{serviceName}/traffic/{duration}' | 
'/order/dedicated/server/{serviceName}/bandwidthvRack' | 
'/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}' | 
'/order/dedicated/server/{serviceName}/failoverIP' | 
'/order/dedicated/server/{serviceName}/failoverIP/{duration}' | 
'/order/dedicated/server/{serviceName}/professionalUse/{duration}' | 
'/order/dedicated/server/{serviceName}/professionalUse' | 
'/order/dedicated/server/{serviceName}/staticIP/{duration}' | 
'/order/dedicated/server/{serviceName}/staticIP' | 
'/order/dedicated/server/{serviceName}/backupStorage' | 
'/order/dedicated/server/{serviceName}/backupStorage/{duration}' | 
'/order/dedicated/server/{serviceName}' | 
'/order/dedicated/server/{serviceName}/feature' | 
'/order/dedicated/server/{serviceName}/feature/{duration}' | 
'/order/dedicated/server/{serviceName}/kvmExpress/{duration}' | 
'/order/dedicated/server/{serviceName}/kvmExpress' | 
'/order/dedicated/server/{serviceName}/kvm/{duration}' | 
'/order/dedicated/server/{serviceName}/kvm' | 
'/order/dedicated/server/{serviceName}/firewall/{duration}' | 
'/order/dedicated/server/{serviceName}/firewall' | 
'/order/dedicated/server/{serviceName}/bandwidth/{duration}' | 
'/order/dedicated/server/{serviceName}/bandwidth' | 
'/order/dedicated/server/{serviceName}/ip' | 
'/order/dedicated/server/{serviceName}/ip/{duration}' | 
'/order/dedicated/server' | 
'/order/domain/zone/{zoneName}' | 
'/order/domain/zone/{zoneName}/dnsAnycast/{duration}' | 
'/order/domain/zone/{zoneName}/dnsAnycast' | 
'/order/domain/zone' | 
'/order/domain/zone/new' | 
'/order/telephony/lines/{serviceName}/hardware' | 
'/order/telephony/lines/{serviceName}' | 
'/order/telephony/lines/{serviceName}/addSimultaneousLines' | 
'/order/telephony/lines/{serviceName}/updateSimultaneousChannels' | 
'/order/telephony/lines' | 
'/order/telephony/{billingAccount}/numberNogeographic' | 
'/order/telephony/{billingAccount}/numberSpecial' | 
'/order/telephony/{billingAccount}/accessories' | 
'/order/telephony/{billingAccount}' | 
'/order/telephony/{billingAccount}/portability' | 
'/order/telephony/{billingAccount}/line' | 
'/order/telephony/{billingAccount}/numberGeographic' | 
'/order/telephony/{billingAccount}/securityDeposit' | 
'/order/telephony/trunks/{serviceName}/hardware' | 
'/order/telephony/trunks/{serviceName}' | 
'/order/telephony/trunks/{serviceName}/addSimultaneousLines' | 
'/order/telephony/trunks/{serviceName}/updateSimultaneousChannels' | 
'/order/telephony/trunks' | 
'/order/telephony/spare/new' | 
'/order/telephony' | 
'/order/telephony/new' | 
'/order/sms/{serviceName}/credits' | 
'/order/sms/{serviceName}' | 
'/order/sms' | 
'/order/sms/new' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/account' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/outlook' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}' | 
'/order/email/exchange/{organizationName}/service' | 
'/order/email/exchange' | 
'/order/email/domain/new' | 
'/order/email/domain/new/{duration}' | 
'/order/email/domain' | 
'/order/email/pro/{service}/account/{duration}' | 
'/order/email/pro/{service}/account' | 
'/order/email/pro/{service}' | 
'/order/email/pro' | 
'/order/overTheBox/{serviceName}' | 
'/order/overTheBox/{serviceName}/migrate' | 
'/order/overTheBox' | 
'/order/overTheBox/new/{duration}' | 
'/order/overTheBox/new' | 
'/order/hosting/web/{serviceName}/bandwidth' | 
'/order/hosting/web/{serviceName}/bandwidth/{duration}' | 
'/order/hosting/web/{serviceName}/cdn' | 
'/order/hosting/web/{serviceName}/cdn/{duration}' | 
'/order/hosting/web/{serviceName}/upgrade' | 
'/order/hosting/web/{serviceName}/upgrade/{duration}' | 
'/order/hosting/web/{serviceName}/ssl' | 
'/order/hosting/web/{serviceName}/ssl/{duration}' | 
'/order/hosting/web/{serviceName}/extraSqlPerso/{duration}' | 
'/order/hosting/web/{serviceName}/extraSqlPerso' | 
'/order/hosting/web/{serviceName}/changeMainDomain' | 
'/order/hosting/web/{serviceName}/changeMainDomain/{duration}' | 
'/order/hosting/web/{serviceName}' | 
'/order/hosting/web' | 
'/order/hosting/web/new' | 
'/order/hosting/web/new/{duration}' | 
'/order/hosting/privateDatabase/{serviceName}' | 
'/order/hosting/privateDatabase/{serviceName}/ram/{duration}' | 
'/order/hosting/privateDatabase/{serviceName}/ram' | 
'/order/hosting/privateDatabase' | 
'/order/hosting/privateDatabase/new/{duration}' | 
'/order/hosting/privateDatabase/new' | 
'/order/cartServiceOption/office365Prepaid' | 
'/order/cartServiceOption/office365Prepaid/{serviceName}' | 
'/order/cartServiceOption/dedicated' | 
'/order/cartServiceOption/dedicated/{serviceName}' | 
'/order/cartServiceOption/domain/{serviceName}' | 
'/order/cartServiceOption/domain' | 
'/order/cartServiceOption/logs/{serviceName}' | 
'/order/cartServiceOption/logs' | 
'/order/cartServiceOption/emailpro' | 
'/order/cartServiceOption/emailpro/{serviceName}' | 
'/order/cartServiceOption/microsoftExchange' | 
'/order/cartServiceOption/microsoftExchange/{serviceName}' | 
'/order/cartServiceOption/ipLoadbalancing/{serviceName}' | 
'/order/cartServiceOption/ipLoadbalancing' | 
'/order/cartServiceOption/cloud' | 
'/order/cartServiceOption/cloud/{serviceName}' | 
'/order/cartServiceOption/privateCloudReseller' | 
'/order/cartServiceOption/privateCloudReseller/{serviceName}' | 
'/order/cartServiceOption/microsoft' | 
'/order/cartServiceOption/microsoft/{serviceName}' | 
'/order/cartServiceOption/vdi' | 
'/order/cartServiceOption/vdi/{serviceName}' | 
'/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}' | 
'/order/cartServiceOption/privateCloudResellerEnterprise' | 
'/order/cartServiceOption/sslGateway/{serviceName}' | 
'/order/cartServiceOption/sslGateway' | 
'/order/cartServiceOption/privateCloud/{serviceName}' | 
'/order/cartServiceOption/privateCloud' | 
'/order/cartServiceOption/sharepoint/{serviceName}' | 
'/order/cartServiceOption/sharepoint' | 
'/order/cartServiceOption/webHosting/{serviceName}' | 
'/order/cartServiceOption/webHosting' | 
'/order/catalog/public/baremetalServers' | 
'/order/catalog/formatted/ip' | 
'/order/catalog/formatted/licensePlesk' | 
'/order/catalog/formatted/licensecPanel' | 
'/order/catalog/formatted/licenseVirtuozzo' | 
'/order/catalog/formatted/privateCloudResellerEnterprise' | 
'/order/catalog/formatted/reseller' | 
'/order/catalog/formatted/deskaas' | 
'/order/catalog/formatted/licenseDirectadmin' | 
'/order/catalog/formatted/licenseWorklight' | 
'/order/catalog/formatted/discover' | 
'/order/catalog/formatted/licenseWindows' | 
'/order/catalog/formatted/licenseCloudLinux' | 
'/order/catalog/formatted' | 
'/order/catalog/formatted/vps' | 
'/order/catalog/formatted/dedicated' | 
'/order/catalog/formatted/privateCloudCDI' | 
'/order/catalog/formatted/logs' | 
'/order/catalog/formatted/licenseSqlServer' | 
'/order/catalog/formatted/privateCloudSDDC' | 
'/order/catalog/formatted/privateCloudDC' | 
'/order/catalog/formatted/privateCloudReseller' | 
'/order/catalog/formatted/cloud' | 
'/order/dedicatedCloud' | 
'/order/dedicatedCloud/{serviceName}/spla' | 
'/order/dedicatedCloud/{serviceName}' | 
'/order/dedicatedCloud/{serviceName}/filer' | 
'/order/dedicatedCloud/{serviceName}/filer/{duration}' | 
'/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}' | 
'/order/dedicatedCloud/{serviceName}/additionalBandwidth' | 
'/order/dedicatedCloud/{serviceName}/upgradeRessource' | 
'/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}' | 
'/order/dedicatedCloud/{serviceName}/vdi' | 
'/order/dedicatedCloud/{serviceName}/host/{duration}' | 
'/order/dedicatedCloud/{serviceName}/host' | 
'/order/dedicatedCloud/{serviceName}/ip' | 
'/order/dedicatedCloud/{serviceName}/ip/{duration}' | 
'/order/license/windows/{serviceName}' | 
'/order/license/windows/{serviceName}/upgrade' | 
'/order/license/windows/{serviceName}/upgrade/{duration}' | 
'/order/license/windows/new/{duration}' | 
'/order/license/windows/new' | 
'/order/license/windows' | 
'/order/license/virtuozzo/{serviceName}/upgrade/{duration}' | 
'/order/license/virtuozzo/{serviceName}/upgrade' | 
'/order/license/virtuozzo/{serviceName}' | 
'/order/license/virtuozzo/new/{duration}' | 
'/order/license/virtuozzo/new' | 
'/order/license/virtuozzo' | 
'/order/license/plesk/{serviceName}/upgrade/{duration}' | 
'/order/license/plesk/{serviceName}/upgrade' | 
'/order/license/plesk/{serviceName}' | 
'/order/license/plesk/new/{duration}' | 
'/order/license/plesk/new' | 
'/order/license/plesk' | 
'/order/license/office/new' | 
'/order/license/office/new/{duration}' | 
'/order/license/sqlserver/{serviceName}/upgrade/{duration}' | 
'/order/license/sqlserver/{serviceName}/upgrade' | 
'/order/license/sqlserver/{serviceName}' | 
'/order/license/sqlserver/new/{duration}' | 
'/order/license/sqlserver/new' | 
'/order/license/sqlserver' | 
'/order/license/cpanel/new/{duration}' | 
'/order/license/cpanel/new' | 
'/order/license/worklight' | 
'/order/license/worklight/new/{duration}' | 
'/order/license/worklight/new' | 
'/order/license/worklight/{serviceName}' | 
'/order/license/worklight/{serviceName}/upgrade/{duration}' | 
'/order/license/worklight/{serviceName}/upgrade' | 
'/order/license/directadmin/new' | 
'/order/license/directadmin/new/{duration}' | 
'/order/license/cloudLinux/new/{duration}' | 
'/order/license/cloudLinux/new' | 
'/order/freefax' | 
'/order/freefax/new' | 
'/order/freefax/{serviceName}/convertToVoicefax' | 
'/order/freefax/{serviceName}' | 
'/order/cloud/project' | 
'/order/cloud/project/{serviceName}/ip' | 
'/order/cloud/project/{serviceName}/credit' | 
'/order/cloud/project/{serviceName}' | 
'/order/hpcspot/new/{duration}' | 
'/order/hpcspot/new' | 
'/order/veeamCloudConnect' | 
'/order/veeamCloudConnect/{serviceName}/upgrade' | 
'/order/veeamCloudConnect/{serviceName}/upgrade/{duration}' | 
'/order/veeamCloudConnect/{serviceName}' | 
'/order/vrack' | 
'/order/vrack/new' | 
'/order/vrack/{serviceName}' | 
'/order/cdn/webstorage' | 
'/order/cdn/webstorage/{serviceName}/storage/{duration}' | 
'/order/cdn/webstorage/{serviceName}/storage' | 
'/order/cdn/webstorage/{serviceName}/traffic' | 
'/order/cdn/webstorage/{serviceName}' | 
'/order/cdn/dedicated' | 
'/order/cdn/dedicated/new' | 
'/order/cdn/dedicated/new/{duration}' | 
'/order/cdn/dedicated/{serviceName}/quota' | 
'/order/cdn/dedicated/{serviceName}/quota/{duration}' | 
'/order/cdn/dedicated/{serviceName}' | 
'/order/cdn/dedicated/{serviceName}/backend' | 
'/order/cdn/dedicated/{serviceName}/backend/{duration}' | 
'/order/cdn/dedicated/{serviceName}/cacheRule/{duration}' | 
'/order/cdn/dedicated/{serviceName}/cacheRule' | 
'/order/cart/{cartId}/ipLoadbalancing' | 
'/order/cart/{cartId}/ipLoadbalancing/options' | 
'/order/cart/{cartId}/office365/options' | 
'/order/cart/{cartId}/office365' | 
'/order/cart/{cartId}/privateCloudReseller' | 
'/order/cart/{cartId}/privateCloudReseller/options' | 
'/order/cart/{cartId}/summary' | 
'/order/cart/{cartId}/licenseSqlServer' | 
'/order/cart/{cartId}/cloudweb/options' | 
'/order/cart/{cartId}/cloudweb' | 
'/order/cart/{cartId}/veeamcc/options' | 
'/order/cart/{cartId}/veeamcc' | 
'/order/cart/{cartId}/exchangeEnterprise' | 
'/order/cart/{cartId}/exchangeEnterprise/options' | 
'/order/cart/{cartId}/sslGateway/options' | 
'/order/cart/{cartId}/sslGateway' | 
'/order/cart/{cartId}/domainTransfer' | 
'/order/cart/{cartId}/domainTransfer/options' | 
'/order/cart/{cartId}/domainPacks' | 
'/order/cart/{cartId}/dbaasTimeseries' | 
'/order/cart/{cartId}/vrackReseller' | 
'/order/cart/{cartId}/logs' | 
'/order/cart/{cartId}/logs/options' | 
'/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}' | 
'/order/cart/{cartId}/item/{itemId}/configuration' | 
'/order/cart/{cartId}/item/{itemId}' | 
'/order/cart/{cartId}/item/{itemId}/requiredConfiguration' | 
'/order/cart/{cartId}/item' | 
'/order/cart/{cartId}/coupon' | 
'/order/cart/{cartId}/veeamEnterprise' | 
'/order/cart/{cartId}/veeamEnterprise/options' | 
'/order/cart/{cartId}/licenseVirtuozzo' | 
'/order/cart/{cartId}/paasmon' | 
'/order/cart/{cartId}/microsoft/options' | 
'/order/cart/{cartId}/microsoft' | 
'/order/cart/{cartId}/ip/options' | 
'/order/cart/{cartId}/ip' | 
'/order/cart/{cartId}/licensePlesk' | 
'/order/cart/{cartId}/licensePlesk/options' | 
'/order/cart/{cartId}/licenseWorklight' | 
'/order/cart/{cartId}/reseller' | 
'/order/cart/{cartId}/privateCloudSDDC/options' | 
'/order/cart/{cartId}/privateCloudSDDC' | 
'/order/cart/{cartId}/domain/options' | 
'/order/cart/{cartId}/domain' | 
'/order/cart/{cartId}/dedicatedReseller' | 
'/order/cart/{cartId}/dedicatedReseller/options' | 
'/order/cart/{cartId}/privateCloudCDI' | 
'/order/cart/{cartId}/privateCloudCDI/options' | 
'/order/cart/{cartId}/sms' | 
'/order/cart/{cartId}/vrack' | 
'/order/cart/{cartId}/licenseWindows' | 
'/order/cart/{cartId}/sharepoint' | 
'/order/cart/{cartId}/sharepoint/options' | 
'/order/cart/{cartId}/dedicatedLabs/options' | 
'/order/cart/{cartId}/dedicatedLabs' | 
'/order/cart/{cartId}/exchange/options' | 
'/order/cart/{cartId}/exchange' | 
'/order/cart/{cartId}' | 
'/order/cart/{cartId}/licenseCloudLinux' | 
'/order/cart/{cartId}/nasha/options' | 
'/order/cart/{cartId}/nasha' | 
'/order/cart/{cartId}/dns' | 
'/order/cart/{cartId}/managedServices/options' | 
'/order/cart/{cartId}/managedServices' | 
'/order/cart/{cartId}/cephaas/options' | 
'/order/cart/{cartId}/cephaas' | 
'/order/cart/{cartId}/vdi' | 
'/order/cart/{cartId}/vdi/options' | 
'/order/cart/{cartId}/discover' | 
'/order/cart/{cartId}/discover/options' | 
'/order/cart/{cartId}/licenseDirectadmin' | 
'/order/cart/{cartId}/deskaas' | 
'/order/cart/{cartId}/hostingReseller' | 
'/order/cart/{cartId}/privateCloudResellerEnterprise/options' | 
'/order/cart/{cartId}/privateCloudResellerEnterprise' | 
'/order/cart/{cartId}/baremetalServers' | 
'/order/cart/{cartId}/baremetalServers/options' | 
'/order/cart/{cartId}/emailpro/options' | 
'/order/cart/{cartId}/emailpro' | 
'/order/cart/{cartId}/cloud' | 
'/order/cart/{cartId}/cloud/options' | 
'/order/cart/{cartId}/privateCloudDC' | 
'/order/cart/{cartId}/privateCloudDC/options' | 
'/order/cart/{cartId}/otb' | 
'/order/cart/{cartId}/otb/options' | 
'/order/cart/{cartId}/domainRestore' | 
'/order/cart/{cartId}/ovhCloudConnect' | 
'/order/cart/{cartId}/telephony/options' | 
'/order/cart/{cartId}/telephony' | 
'/order/cart/{cartId}/office365Prepaid' | 
'/order/cart/{cartId}/office365Prepaid/options' | 
'/order/cart/{cartId}/xdsl' | 
'/order/cart/{cartId}/xdsl/options' | 
'/order/cart/{cartId}/vps' | 
'/order/cart/{cartId}/vps/options' | 
'/order/cart/{cartId}/dedicated' | 
'/order/cart/{cartId}/dedicated/options' | 
'/order/cart/{cartId}/kubernetes/options' | 
'/order/cart/{cartId}/kubernetes' | 
'/order/cart/{cartId}/cdn' | 
'/order/cart/{cartId}/cdn/options' | 
'/order/cart/{cartId}/webHosting' | 
'/order/cart/{cartId}/webHosting/options' | 
'/order/cart/{cartId}/checkout' | 
'/order/cart/{cartId}/sslComodo' | 
'/order/cart/{cartId}/sslComodo/options' | 
'/order/cart/{cartId}/metrics' | 
'/order/cart/{cartId}/metrics/options' | 
'/order/cart/{cartId}/csp2/options' | 
'/order/cart/{cartId}/csp2' | 
'/order/cart/{cartId}/vco' | 
'/order/cart/{cartId}/licensecPanel' | 
'/order/cart' | 
'/order/upgrade/microsoftExchange' | 
'/order/upgrade/microsoftExchange/{serviceName}/{planCode}' | 
'/order/upgrade/microsoftExchange/{serviceName}' | 
'/order/upgrade/ipLoadbalancing' | 
'/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}' | 
'/order/upgrade/ipLoadbalancing/{serviceName}' | 
'/order/upgrade/logs' | 
'/order/upgrade/logs/{serviceName}' | 
'/order/upgrade/logs/{serviceName}/{planCode}' | 
'/order/upgrade/sslGateway/{serviceName}/{planCode}' | 
'/order/upgrade/sslGateway/{serviceName}' | 
'/order/upgrade/sslGateway' | 
'/order/upgrade/privateCloud/{serviceName}/{planCode}' | 
'/order/upgrade/privateCloud/{serviceName}' | 
'/order/upgrade/privateCloud' | 
'/order/upgrade/baremetalPrivateBandwidth' | 
'/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}' | 
'/order/upgrade/baremetalPrivateBandwidth/{serviceName}' | 
'/order/upgrade/metrics' | 
'/order/upgrade/metrics/{serviceName}/{planCode}' | 
'/order/upgrade/metrics/{serviceName}' | 
'/order/upgrade/cephaas' | 
'/order/upgrade/cephaas/{serviceName}/{planCode}' | 
'/order/upgrade/cephaas/{serviceName}' | 
'/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}' | 
'/order/upgrade/baremetalPublicBandwidth/{serviceName}' | 
'/order/upgrade/baremetalPublicBandwidth' | 
'/order/router/new/{duration}' | 
'/order/router/new';

type PathsOrderPUT = '/order/cart/{cartId}/item/{itemId}' | 
'/order/cart/{cartId}';

type PathsOrderPOST = '/order/xdsl/spare/new' | 
'/order/saas/csp2/new/{duration}' | 
'/order/vps/{serviceName}/additionalDisk/{duration}' | 
'/order/vps/{serviceName}/upgrade/{duration}' | 
'/order/vps/{serviceName}/windows/{duration}' | 
'/order/vps/{serviceName}/snapshot/{duration}' | 
'/order/vps/{serviceName}/veeam/{duration}' | 
'/order/vps/{serviceName}/automatedBackup/{duration}' | 
'/order/vps/{serviceName}/ftpbackup/{duration}' | 
'/order/vps/{serviceName}/ip/{duration}' | 
'/order/vps/{serviceName}/plesk/{duration}' | 
'/order/vps/{serviceName}/cpanel/{duration}' | 
'/order/dedicated/housing/{serviceName}/APC/{duration}' | 
'/order/dedicated/nasha/new/{duration}' | 
'/order/dedicated/server/{serviceName}/usbKey/{duration}' | 
'/order/dedicated/server/{serviceName}/ipMigration/{duration}' | 
'/order/dedicated/server/{serviceName}/traffic/{duration}' | 
'/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}' | 
'/order/dedicated/server/{serviceName}/failoverIP/{duration}' | 
'/order/dedicated/server/{serviceName}/professionalUse/{duration}' | 
'/order/dedicated/server/{serviceName}/staticIP/{duration}' | 
'/order/dedicated/server/{serviceName}/backupStorage/{duration}' | 
'/order/dedicated/server/{serviceName}/feature/{duration}' | 
'/order/dedicated/server/{serviceName}/kvmExpress/{duration}' | 
'/order/dedicated/server/{serviceName}/kvm/{duration}' | 
'/order/dedicated/server/{serviceName}/firewall/{duration}' | 
'/order/dedicated/server/{serviceName}/bandwidth/{duration}' | 
'/order/dedicated/server/{serviceName}/ip/{duration}' | 
'/order/domain/zone/{zoneName}/dnsAnycast/{duration}' | 
'/order/domain/zone/new' | 
'/order/telephony/lines/{serviceName}/hardware' | 
'/order/telephony/lines/{serviceName}/addSimultaneousLines' | 
'/order/telephony/lines/{serviceName}/updateSimultaneousChannels' | 
'/order/telephony/{billingAccount}/numberNogeographic' | 
'/order/telephony/{billingAccount}/numberSpecial' | 
'/order/telephony/{billingAccount}/accessories' | 
'/order/telephony/{billingAccount}/portability' | 
'/order/telephony/{billingAccount}/line' | 
'/order/telephony/{billingAccount}/numberGeographic' | 
'/order/telephony/{billingAccount}/securityDeposit' | 
'/order/telephony/trunks/{serviceName}/hardware' | 
'/order/telephony/trunks/{serviceName}/addSimultaneousLines' | 
'/order/telephony/trunks/{serviceName}/updateSimultaneousChannels' | 
'/order/telephony/spare/new' | 
'/order/telephony/new' | 
'/order/sms/{serviceName}/credits' | 
'/order/sms/new' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace' | 
'/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}' | 
'/order/email/domain/new/{duration}' | 
'/order/email/pro/{service}/account/{duration}' | 
'/order/overTheBox/{serviceName}/migrate' | 
'/order/overTheBox/new/{duration}' | 
'/order/hosting/web/{serviceName}/bandwidth/{duration}' | 
'/order/hosting/web/{serviceName}/cdn/{duration}' | 
'/order/hosting/web/{serviceName}/upgrade/{duration}' | 
'/order/hosting/web/{serviceName}/ssl/{duration}' | 
'/order/hosting/web/{serviceName}/extraSqlPerso/{duration}' | 
'/order/hosting/web/{serviceName}/changeMainDomain/{duration}' | 
'/order/hosting/web/new/{duration}' | 
'/order/hosting/privateDatabase/{serviceName}/ram/{duration}' | 
'/order/hosting/privateDatabase/new/{duration}' | 
'/order/cartServiceOption/office365Prepaid/{serviceName}' | 
'/order/cartServiceOption/dedicated/{serviceName}' | 
'/order/cartServiceOption/domain/{serviceName}' | 
'/order/cartServiceOption/logs/{serviceName}' | 
'/order/cartServiceOption/emailpro/{serviceName}' | 
'/order/cartServiceOption/microsoftExchange/{serviceName}' | 
'/order/cartServiceOption/ipLoadbalancing/{serviceName}' | 
'/order/cartServiceOption/cloud/{serviceName}' | 
'/order/cartServiceOption/privateCloudReseller/{serviceName}' | 
'/order/cartServiceOption/microsoft/{serviceName}' | 
'/order/cartServiceOption/vdi/{serviceName}' | 
'/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}' | 
'/order/cartServiceOption/sslGateway/{serviceName}' | 
'/order/cartServiceOption/privateCloud/{serviceName}' | 
'/order/cartServiceOption/sharepoint/{serviceName}' | 
'/order/cartServiceOption/webHosting/{serviceName}' | 
'/order/dedicatedCloud/{serviceName}/spla' | 
'/order/dedicatedCloud/{serviceName}/filer/{duration}' | 
'/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}' | 
'/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}' | 
'/order/dedicatedCloud/{serviceName}/vdi' | 
'/order/dedicatedCloud/{serviceName}/host/{duration}' | 
'/order/dedicatedCloud/{serviceName}/ip/{duration}' | 
'/order/license/windows/{serviceName}/upgrade/{duration}' | 
'/order/license/windows/new/{duration}' | 
'/order/license/virtuozzo/{serviceName}/upgrade/{duration}' | 
'/order/license/virtuozzo/new/{duration}' | 
'/order/license/plesk/{serviceName}/upgrade/{duration}' | 
'/order/license/plesk/new/{duration}' | 
'/order/license/office/new/{duration}' | 
'/order/license/sqlserver/{serviceName}/upgrade/{duration}' | 
'/order/license/sqlserver/new/{duration}' | 
'/order/license/cpanel/new/{duration}' | 
'/order/license/worklight/new/{duration}' | 
'/order/license/worklight/{serviceName}/upgrade/{duration}' | 
'/order/license/directadmin/new/{duration}' | 
'/order/license/cloudLinux/new/{duration}' | 
'/order/freefax/new' | 
'/order/freefax/{serviceName}/convertToVoicefax' | 
'/order/cloud/project/{serviceName}/ip' | 
'/order/cloud/project/{serviceName}/credit' | 
'/order/hpcspot/new/{duration}' | 
'/order/veeamCloudConnect/{serviceName}/upgrade/{duration}' | 
'/order/vrack/new' | 
'/order/cdn/webstorage/{serviceName}/storage/{duration}' | 
'/order/cdn/webstorage/{serviceName}/traffic' | 
'/order/cdn/dedicated/new/{duration}' | 
'/order/cdn/dedicated/{serviceName}/quota/{duration}' | 
'/order/cdn/dedicated/{serviceName}/backend/{duration}' | 
'/order/cdn/dedicated/{serviceName}/cacheRule/{duration}' | 
'/order/cart/{cartId}/ipLoadbalancing' | 
'/order/cart/{cartId}/ipLoadbalancing/options' | 
'/order/cart/{cartId}/office365/options' | 
'/order/cart/{cartId}/office365' | 
'/order/cart/{cartId}/privateCloudReseller' | 
'/order/cart/{cartId}/privateCloudReseller/options' | 
'/order/cart/{cartId}/licenseSqlServer' | 
'/order/cart/{cartId}/cloudweb/options' | 
'/order/cart/{cartId}/cloudweb' | 
'/order/cart/{cartId}/veeamcc/options' | 
'/order/cart/{cartId}/veeamcc' | 
'/order/cart/{cartId}/exchangeEnterprise' | 
'/order/cart/{cartId}/exchangeEnterprise/options' | 
'/order/cart/{cartId}/sslGateway/options' | 
'/order/cart/{cartId}/sslGateway' | 
'/order/cart/{cartId}/domainTransfer' | 
'/order/cart/{cartId}/domainTransfer/options' | 
'/order/cart/{cartId}/domainPacks' | 
'/order/cart/{cartId}/dbaasTimeseries' | 
'/order/cart/{cartId}/vrackReseller' | 
'/order/cart/{cartId}/logs' | 
'/order/cart/{cartId}/logs/options' | 
'/order/cart/{cartId}/item/{itemId}/configuration' | 
'/order/cart/{cartId}/coupon' | 
'/order/cart/{cartId}/veeamEnterprise' | 
'/order/cart/{cartId}/veeamEnterprise/options' | 
'/order/cart/{cartId}/licenseVirtuozzo' | 
'/order/cart/{cartId}/paasmon' | 
'/order/cart/{cartId}/microsoft/options' | 
'/order/cart/{cartId}/microsoft' | 
'/order/cart/{cartId}/ip/options' | 
'/order/cart/{cartId}/ip' | 
'/order/cart/{cartId}/licensePlesk' | 
'/order/cart/{cartId}/licensePlesk/options' | 
'/order/cart/{cartId}/licenseWorklight' | 
'/order/cart/{cartId}/reseller' | 
'/order/cart/{cartId}/privateCloudSDDC/options' | 
'/order/cart/{cartId}/privateCloudSDDC' | 
'/order/cart/{cartId}/domain/options' | 
'/order/cart/{cartId}/domain' | 
'/order/cart/{cartId}/dedicatedReseller' | 
'/order/cart/{cartId}/dedicatedReseller/options' | 
'/order/cart/{cartId}/privateCloudCDI' | 
'/order/cart/{cartId}/privateCloudCDI/options' | 
'/order/cart/{cartId}/sms' | 
'/order/cart/{cartId}/vrack' | 
'/order/cart/{cartId}/licenseWindows' | 
'/order/cart/{cartId}/sharepoint' | 
'/order/cart/{cartId}/sharepoint/options' | 
'/order/cart/{cartId}/dedicatedLabs/options' | 
'/order/cart/{cartId}/dedicatedLabs' | 
'/order/cart/{cartId}/exchange/options' | 
'/order/cart/{cartId}/exchange' | 
'/order/cart/{cartId}/licenseCloudLinux' | 
'/order/cart/{cartId}/nasha/options' | 
'/order/cart/{cartId}/nasha' | 
'/order/cart/{cartId}/dns' | 
'/order/cart/{cartId}/managedServices/options' | 
'/order/cart/{cartId}/managedServices' | 
'/order/cart/{cartId}/cephaas/options' | 
'/order/cart/{cartId}/cephaas' | 
'/order/cart/{cartId}/vdi' | 
'/order/cart/{cartId}/vdi/options' | 
'/order/cart/{cartId}/discover' | 
'/order/cart/{cartId}/discover/options' | 
'/order/cart/{cartId}/licenseDirectadmin' | 
'/order/cart/{cartId}/deskaas' | 
'/order/cart/{cartId}/hostingReseller' | 
'/order/cart/{cartId}/privateCloudResellerEnterprise/options' | 
'/order/cart/{cartId}/privateCloudResellerEnterprise' | 
'/order/cart/{cartId}/baremetalServers' | 
'/order/cart/{cartId}/baremetalServers/options' | 
'/order/cart/{cartId}/emailpro/options' | 
'/order/cart/{cartId}/emailpro' | 
'/order/cart/{cartId}/cloud' | 
'/order/cart/{cartId}/cloud/options' | 
'/order/cart/{cartId}/privateCloudDC' | 
'/order/cart/{cartId}/privateCloudDC/options' | 
'/order/cart/{cartId}/otb' | 
'/order/cart/{cartId}/otb/options' | 
'/order/cart/{cartId}/ovhCloudConnect' | 
'/order/cart/{cartId}/telephony/options' | 
'/order/cart/{cartId}/telephony' | 
'/order/cart/{cartId}/office365Prepaid' | 
'/order/cart/{cartId}/office365Prepaid/options' | 
'/order/cart/{cartId}/xdsl' | 
'/order/cart/{cartId}/xdsl/options' | 
'/order/cart/{cartId}/vps' | 
'/order/cart/{cartId}/vps/options' | 
'/order/cart/{cartId}/dedicated' | 
'/order/cart/{cartId}/dedicated/options' | 
'/order/cart/{cartId}/kubernetes/options' | 
'/order/cart/{cartId}/kubernetes' | 
'/order/cart/{cartId}/cdn' | 
'/order/cart/{cartId}/cdn/options' | 
'/order/cart/{cartId}/webHosting' | 
'/order/cart/{cartId}/webHosting/options' | 
'/order/cart/{cartId}/checkout' | 
'/order/cart/{cartId}/sslComodo' | 
'/order/cart/{cartId}/sslComodo/options' | 
'/order/cart/{cartId}/metrics' | 
'/order/cart/{cartId}/metrics/options' | 
'/order/cart/{cartId}/csp2/options' | 
'/order/cart/{cartId}/csp2' | 
'/order/cart/{cartId}/vco' | 
'/order/cart/{cartId}/licensecPanel' | 
'/order/cart/{cartId}/assign' | 
'/order/cart' | 
'/order/upgrade/microsoftExchange/{serviceName}/{planCode}' | 
'/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}' | 
'/order/upgrade/logs/{serviceName}/{planCode}' | 
'/order/upgrade/sslGateway/{serviceName}/{planCode}' | 
'/order/upgrade/privateCloud/{serviceName}/{planCode}' | 
'/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}' | 
'/order/upgrade/metrics/{serviceName}/{planCode}' | 
'/order/upgrade/cephaas/{serviceName}/{planCode}' | 
'/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}' | 
'/order/router/new/{duration}';

type PathsOrderDELETE = '/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}' | 
'/order/cart/{cartId}/item/{itemId}' | 
'/order/cart/{cartId}/coupon' | 
'/order/cart/{cartId}';

export class ApiOrder extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Purchase spare modem
  Get prices and contracts information
  **/
  public get(path: '/order/xdsl/spare/new', pathParams: null, queryParams: {quantity?: Number, mondialRelayId?: string, brand?: string, shippingContactId?: Number}): Promise<OrderOrder>;
  /**
  Create an order for a new office tenant
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/saas/csp2/new', pathParams: null, queryParams: {officeBusinessQuantity?: Number, giftCode?: string, officeProPlusQuantity?: Number}): Promise<string[]>;
  /**
  Create an order for a new office tenant
  Get prices and contracts information
  **/
  public get(path: '/order/saas/csp2/new/{duration}', pathParams: {duration: string}, queryParams: {officeBusinessQuantity?: Number, giftCode?: string, officeProPlusQuantity?: Number}): Promise<OrderOrder>;
  /**
  Operations about the VPS service
  List available services
  **/
  public get(path: '/order/vps'): Promise<string[]>;
  /**
  Order additional disk
  Get allowed durations for 'additionalDisk' option
  **/
  public get(path: '/order/vps/{serviceName}/additionalDisk', pathParams: {serviceName: string}, queryParams: {additionalDiskSize?: VpsAdditionalDiskAdditionalDiskSizeEnum}): Promise<string[]>;
  /**
  Order additional disk
  Get prices and contracts information
  **/
  public get(path: '/order/vps/{serviceName}/additionalDisk/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {additionalDiskSize?: VpsAdditionalDiskAdditionalDiskSizeEnum}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/vps/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order Upgrade
  Get prices and contracts information
  **/
  public get(path: '/order/vps/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {model?: string}): Promise<OrderOrder>;
  /**
  Order Upgrade
  Get allowed durations for 'upgrade' option
  **/
  public get(path: '/order/vps/{serviceName}/upgrade', pathParams: {serviceName: string}, queryParams: {model?: string}): Promise<string[]>;
  /**
  Order Windows Option (2015 only)
  Get prices and contracts information
  **/
  public get(path: '/order/vps/{serviceName}/windows/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Windows Option (2015 only)
  Get allowed durations for 'windows' option
  **/
  public get(path: '/order/vps/{serviceName}/windows', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order Snapshot Option
  Get allowed durations for 'snapshot' option
  **/
  public get(path: '/order/vps/{serviceName}/snapshot', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order Snapshot Option
  Get prices and contracts information
  **/
  public get(path: '/order/vps/{serviceName}/snapshot/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Veeam Option
  Get prices and contracts information
  **/
  public get(path: '/order/vps/{serviceName}/veeam/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Veeam Option
  Get allowed durations for 'veeam' option
  **/
  public get(path: '/order/vps/{serviceName}/veeam', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order Automated Backup Option (vps Cloud only)
  Get prices and contracts information
  **/
  public get(path: '/order/vps/{serviceName}/automatedBackup/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Automated Backup Option (vps Cloud only)
  Get allowed durations for 'automatedBackup' option
  **/
  public get(path: '/order/vps/{serviceName}/automatedBackup', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order FtpBackup Option
  Get prices and contracts information
  **/
  public get(path: '/order/vps/{serviceName}/ftpbackup/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order FtpBackup Option
  Get allowed durations for 'ftpbackup' option
  **/
  public get(path: '/order/vps/{serviceName}/ftpbackup', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order Additional IP
  Get prices and contracts information
  **/
  public get(path: '/order/vps/{serviceName}/ip/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {number?: Number, country?: VpsIpGeolocationEnum}): Promise<OrderOrder>;
  /**
  Order Additional IP
  Get allowed durations for 'ip' option
  **/
  public get(path: '/order/vps/{serviceName}/ip', pathParams: {serviceName: string}, queryParams: {number?: Number, country?: VpsIpGeolocationEnum}): Promise<string[]>;
  /**
  Create an order for a PLESK license
  Get prices and contracts information
  **/
  public get(path: '/order/vps/{serviceName}/plesk/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {domainNumber?: VpsPleskLicenseDomainNumberEnum}): Promise<OrderOrder>;
  /**
  Create an order for a PLESK license
  Get allowed durations for 'plesk' option
  **/
  public get(path: '/order/vps/{serviceName}/plesk', pathParams: {serviceName: string}, queryParams: {domainNumber?: VpsPleskLicenseDomainNumberEnum}): Promise<string[]>;
  /**
  Create an order for a cPanel license
  Get prices and contracts information
  **/
  public get(path: '/order/vps/{serviceName}/cpanel/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Create an order for a cPanel license
  Get allowed durations for 'cpanel' option
  **/
  public get(path: '/order/vps/{serviceName}/cpanel', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order an APC for this bay
  Get allowed durations for 'APC' option
  **/
  public get(path: '/order/dedicated/housing/{serviceName}/APC', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order an APC for this bay
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/housing/{serviceName}/APC/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/dedicated/housing/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Operations about the HOUSING service
  List available services
  **/
  public get(path: '/order/dedicated/housing'): Promise<string[]>;
  /**
  Order a new Nas HA
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/nasha/new/{duration}', pathParams: {duration: string}, queryParams: {datacenter?: DedicatedNasHAZoneEnum, model?: DedicatedNasHAOfferEnum}): Promise<OrderOrder>;
  /**
  Order a new Nas HA
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/dedicated/nasha/new', pathParams: null, queryParams: {datacenter?: DedicatedNasHAZoneEnum, model?: DedicatedNasHAOfferEnum}): Promise<string[]>;
  /**
  Order an USB key for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/usbKey/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {capacity?: DedicatedServerUsbKeyCapacityEnum}): Promise<OrderOrder>;
  /**
  Order an USB key for this server
  Get allowed durations for 'usbKey' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/usbKey', pathParams: {serviceName: string}, queryParams: {capacity?: DedicatedServerUsbKeyCapacityEnum}): Promise<string[]>;
  /**
  Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/ipMigration/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {ip?: string, token?: string}): Promise<OrderOrder>;
  /**
  Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted
  Get allowed durations for 'ipMigration' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/ipMigration', pathParams: {serviceName: string}, queryParams: {ip?: string, token?: string}): Promise<string[]>;
  /**
  Order additionall traffic for this server
  Get allowed durations for 'traffic' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/traffic', pathParams: {serviceName: string}, queryParams: {traffic?: DedicatedServerTrafficOrderEnum}): Promise<string[]>;
  /**
  Order additionall traffic for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/traffic/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {traffic?: DedicatedServerTrafficOrderEnum}): Promise<OrderOrder>;
  /**
  Order vRack bandwidth for this server
  Get allowed durations for 'bandwidthvRack' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/bandwidthvRack', pathParams: {serviceName: string}, queryParams: {bandwidth?: DedicatedServerBandwidthvRackOrderEnum}): Promise<string[]>;
  /**
  Order vRack bandwidth for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {bandwidth?: DedicatedServerBandwidthvRackOrderEnum}): Promise<OrderOrder>;
  /**
  Order a failover IP for this server
  Get allowed durations for 'failoverIP' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/failoverIP', pathParams: {serviceName: string}, queryParams: {country?: DedicatedServerIpCountryEnum}): Promise<string[]>;
  /**
  Order a failover IP for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/failoverIP/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {country?: DedicatedServerIpCountryEnum}): Promise<OrderOrder>;
  /**
  Order professional use option
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/professionalUse/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order professional use option
  Get allowed durations for 'professionalUse' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/professionalUse', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order a static IP for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/staticIP/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {country?: DedicatedServerIpStaticCountryEnum}): Promise<OrderOrder>;
  /**
  Order a static IP for this server
  Get allowed durations for 'staticIP' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/staticIP', pathParams: {serviceName: string}, queryParams: {country?: DedicatedServerIpStaticCountryEnum}): Promise<string[]>;
  /**
  Order a backup storage for this server
  Get allowed durations for 'backupStorage' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/backupStorage', pathParams: {serviceName: string}, queryParams: {capacity?: DedicatedServerBackupStorageCapacityEnum}): Promise<string[]>;
  /**
  Order a backup storage for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/backupStorage/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {capacity?: DedicatedServerBackupStorageCapacityEnum}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/dedicated/server/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order a feature for this server
  Get allowed durations for 'feature' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/feature', pathParams: {serviceName: string}, queryParams: {feature?: DedicatedServerOrderableSysFeatureEnum}): Promise<string[]>;
  /**
  Order a feature for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/feature/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {feature?: DedicatedServerOrderableSysFeatureEnum}): Promise<OrderOrder>;
  /**
  Order a kvmip express for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/kvmExpress/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a kvmip express for this server
  Get allowed durations for 'kvmExpress' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/kvmExpress', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order a kvm for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/kvm/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a kvm for this server
  Get allowed durations for 'kvm' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/kvm', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  order a Firewall for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/firewall/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {firewallModel?: DedicatedServerFirewallModelEnum}): Promise<OrderOrder>;
  /**
  order a Firewall for this server
  Get allowed durations for 'firewall' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/firewall', pathParams: {serviceName: string}, queryParams: {firewallModel?: DedicatedServerFirewallModelEnum}): Promise<string[]>;
  /**
  Order bandwidth for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/bandwidth/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {bandwidth?: DedicatedServerBandwidthOrderEnum, type?: DedicatedServerBandwidthOrderTypeEnum}): Promise<OrderOrder>;
  /**
  Order bandwidth for this server
  Get allowed durations for 'bandwidth' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/bandwidth', pathParams: {serviceName: string}, queryParams: {bandwidth?: DedicatedServerBandwidthOrderEnum, type?: DedicatedServerBandwidthOrderTypeEnum}): Promise<string[]>;
  /**
  Order IP for this server
  Get allowed durations for 'ip' option
  **/
  public get(path: '/order/dedicated/server/{serviceName}/ip', pathParams: {serviceName: string}, queryParams: {blockSize?: DedicatedServerIpBlockSizeEnum, type?: DedicatedServerIpTypeOrderableEnum, organisationId?: string, country?: DedicatedServerIpCountryEnum}): Promise<string[]>;
  /**
  Order IP for this server
  Get prices and contracts information
  **/
  public get(path: '/order/dedicated/server/{serviceName}/ip/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {blockSize?: DedicatedServerIpBlockSizeEnum, type?: DedicatedServerIpTypeOrderableEnum, organisationId?: string, country?: DedicatedServerIpCountryEnum}): Promise<OrderOrder>;
  /**
  Operations about the DEDICATED service
  List available services
  **/
  public get(path: '/order/dedicated/server'): Promise<string[]>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/domain/zone/{zoneName}', pathParams: {zoneName: string}): Promise<string[]>;
  /**
  Order Anycast
  Get prices and contracts information
  **/
  public get(path: '/order/domain/zone/{zoneName}/dnsAnycast/{duration}', pathParams: {zoneName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Anycast
  Get allowed durations for 'dnsAnycast' option
  **/
  public get(path: '/order/domain/zone/{zoneName}/dnsAnycast', pathParams: {zoneName: string}): Promise<string[]>;
  /**
  Operations about the HOSTING service
  List available services
  **/
  public get(path: '/order/domain/zone'): Promise<string[]>;
  /**
  Order a new DNS zone
  Get prices and contracts information
  **/
  public get(path: '/order/domain/zone/new', pathParams: null, queryParams: {minimized?: boolean, zoneName?: string}): Promise<OrderOrder>;
  /**
  Order a phone for this specific line
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/lines/{serviceName}/hardware', pathParams: {serviceName: string}, queryParams: {hardware?: string, shippingContactId?: string, retractation?: boolean, mondialRelayId?: string}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/telephony/lines/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Add extra simultaneous lines for a specifical line
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/lines/{serviceName}/addSimultaneousLines', pathParams: {serviceName: string}, queryParams: {quantity?: Number, billingAccount?: string}): Promise<OrderOrder>;
  /**
  Update extra simultaneous channels for a specifical service to the requested amount
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/lines/{serviceName}/updateSimultaneousChannels', pathParams: {serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderOrder>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/order/telephony/lines'): Promise<string[]>;
  /**
  Purchase a new standard alias number
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/{billingAccount}/numberNogeographic', pathParams: {billingAccount: string}, queryParams: {offer?: TelephonyNumberOffer, organisation?: string, pool?: TelephonyNumberPoolEnum, streetNumber?: string, city?: string, country?: TelephonyNumberCountryEnum, phone?: string, firstname?: string, displayUniversalDirectory?: boolean, ape?: string, socialNomination?: string, legalform?: NichandleLegalFormEnum, name?: string, email?: string, zip?: string, siret?: string, specificNumber?: string, streetName?: string, retractation?: boolean}): Promise<OrderOrder>;
  /**
  Purchase a new standard alias number
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/{billingAccount}/numberSpecial', pathParams: {billingAccount: string}, queryParams: {legalform?: NichandleLegalFormEnum, socialNomination?: string, displayUniversalDirectory?: boolean, ape?: string, zip?: string, name?: string, email?: string, specificNumber?: string, streetName?: string, siret?: string, range?: string, retractation?: boolean, typology?: TelephonyNumberSpecialTypologyEnum, organisation?: string, pool?: TelephonyNumberPoolEnum, streetNumber?: string, city?: string, country?: TelephonyNumberCountryEnum, firstname?: string, phone?: string}): Promise<OrderOrder>;
  /**
  Purchase new accessories
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/{billingAccount}/accessories', pathParams: {billingAccount: string}, queryParams: {accessories?: string[], mondialRelayId?: string, retractation?: boolean, shippingContactId?: Number}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/telephony/{billingAccount}', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Order a new portability
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/{billingAccount}/portability', pathParams: {billingAccount: string}, queryParams: {streetNumberExtra?: string, listNumbers?: string, lineToRedirectAliasTo?: string, offer?: TelephonyPortabilityOfferType, door?: string, building?: string, streetNumber?: Number, country?: TelephonyPortabilityCountriesAvailable, city?: string, mobilePhone?: string, name?: string, floor?: Number, stair?: Number, desireDate?: Date, contactNumber?: string, zip?: string, specialNumberCategory?: TelephonyPortabilitySpecialNumberCategoryEnum, displayUniversalDirectory?: boolean, executeAsSoonAsPossible?: boolean, firstName?: string, fiabilisation?: boolean, callNumber?: string, type?: TelephonyPortabilityNumberType, contactName?: string, streetType?: string, rio?: string, socialReason?: TelephonyPortabilitySocialReason, siret?: string, streetName?: string}): Promise<OrderOrder>;
  /**
  Purchase a new line offer
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/{billingAccount}/line', pathParams: {billingAccount: string}, queryParams: {extraSimultaneousLines?: Number[], types?: TelephonyLineTypeEnum[], shippingContactId?: Number, quantity?: Number, offers?: string[], zones?: string[], brand?: string, displayUniversalDirectories?: boolean[], mondialRelayId?: string, retractation?: boolean, ownerContactIds?: Number[]}): Promise<OrderOrder>;
  /**
  Purchase a new standard alias number
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/{billingAccount}/numberGeographic', pathParams: {billingAccount: string}, queryParams: {phone?: string, firstname?: string, city?: string, country?: TelephonyNumberCountryEnum, streetNumber?: string, pool?: TelephonyNumberPoolEnum, organisation?: string, offer?: TelephonyNumberOffer, retractation?: boolean, siret?: string, streetName?: string, specificNumber?: string, email?: string, name?: string, zip?: string, displayUniversalDirectory?: boolean, ape?: string, zone?: string, legalform?: NichandleLegalFormEnum, socialNomination?: string}): Promise<OrderOrder>;
  /**
  Credit security deposit
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/{billingAccount}/securityDeposit', pathParams: {billingAccount: string}, queryParams: {amount?: TelephonySecurityDepositAmountsEnum}): Promise<OrderOrder>;
  /**
  Order a phone for this specific line
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/trunks/{serviceName}/hardware', pathParams: {serviceName: string}, queryParams: {hardware?: string, shippingContactId?: string, retractation?: boolean, mondialRelayId?: string}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/telephony/trunks/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Add extra simultaneous lines for a specifical line
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/trunks/{serviceName}/addSimultaneousLines', pathParams: {serviceName: string}, queryParams: {quantity?: Number, billingAccount?: string}): Promise<OrderOrder>;
  /**
  Update extra simultaneous channels for a specifical service to the requested amount
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/trunks/{serviceName}/updateSimultaneousChannels', pathParams: {serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderOrder>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/order/telephony/trunks'): Promise<string[]>;
  /**
  Purchase spare phone
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/spare/new', pathParams: null, queryParams: {mondialRelayId?: string, quantity?: Number, shippingContactId?: Number, brand?: string}): Promise<OrderOrder>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/order/telephony'): Promise<string[]>;
  /**
  Purchase a new billing account
  Get prices and contracts information
  **/
  public get(path: '/order/telephony/new'): Promise<OrderOrder>;
  /**
  Order credits on an existing SMS account
  Get prices and contracts information
  **/
  public get(path: '/order/sms/{serviceName}/credits', pathParams: {serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/sms/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/order/sms'): Promise<string[]>;
  /**
  Create and credit a new SMS Account
  Get prices and contracts information
  **/
  public get(path: '/order/sms/new', pathParams: null, queryParams: {quantity?: Number}): Promise<OrderOrder>;
  /**
  Create an order for an exchange account
  Get prices and contracts information
  **/
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}', pathParams: {organizationName: string, exchangeService: string, duration: string}, queryParams: {licence?: EmailExchangeOvhLicenceEnum, storageQuota?: EmailExchangeAccountQuotaEnum, number?: Number}): Promise<OrderOrder>;
  /**
  Create an order for an exchange account
  Get allowed durations for 'account' option
  **/
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/account', pathParams: {organizationName: string, exchangeService: string}, queryParams: {licence?: EmailExchangeOvhLicenceEnum, storageQuota?: EmailExchangeAccountQuotaEnum, number?: Number}): Promise<string[]>;
  /**
  Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016)
  Get prices and contracts information
  **/
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade', pathParams: {organizationName: string, exchangeService: string}): Promise<OrderOrder>;
  /**
  Create an order for a outlook licence.
  Get allowed durations for 'outlook' option
  **/
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook', pathParams: {organizationName: string, exchangeService: string}, queryParams: {licence?: EmailExchangeOutlookVersionEnum, primaryEmailAddress?: string}): Promise<string[]>;
  /**
  Create an order for a outlook licence.
  Get prices and contracts information
  **/
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}', pathParams: {organizationName: string, exchangeService: string, duration: string}, queryParams: {licence?: EmailExchangeOutlookVersionEnum, primaryEmailAddress?: string}): Promise<OrderOrder>;
  /**
  Create an order for a additional 50GB of space (Exchange 2010 reseller only)
  Get prices and contracts information
  **/
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace', pathParams: {organizationName: string, exchangeService: string}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}', pathParams: {organizationName: string, exchangeService: string}): Promise<string[]>;
  /**
  Create an order to upgrade your hosted account storage
  Get allowed durations for 'accountUpgrade' option
  **/
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade', pathParams: {organizationName: string, exchangeService: string}, queryParams: {primaryEmailAddress?: string, newQuota?: EmailExchangeAccountQuotaEnum}): Promise<string[]>;
  /**
  Create an order to upgrade your hosted account storage
  Get prices and contracts information
  **/
  public get(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}', pathParams: {organizationName: string, exchangeService: string, duration: string}, queryParams: {primaryEmailAddress?: string, newQuota?: EmailExchangeAccountQuotaEnum}): Promise<OrderOrder>;
  /**
  Operations about the EXCHANGE service
  List available services
  **/
  public get(path: '/order/email/exchange/{organizationName}/service', pathParams: {organizationName: string}): Promise<string[]>;
  /**
  Operations about the MSSERVICES service
  List available services
  **/
  public get(path: '/order/email/exchange'): Promise<string[]>;
  /**
  Order a new mx plan
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/email/domain/new', pathParams: null, queryParams: {offer?: EmailDomainOfferEnum, domain?: string}): Promise<string[]>;
  /**
  Order a new mx plan
  Get prices and contracts information
  **/
  public get(path: '/order/email/domain/new/{duration}', pathParams: {duration: string}, queryParams: {offer?: EmailDomainOfferEnum, domain?: string}): Promise<OrderOrder>;
  /**
  Operations about the MX service
  List available services
  **/
  public get(path: '/order/email/domain'): Promise<string[]>;
  /**
  Create an order for a pro account
  Get prices and contracts information
  **/
  public get(path: '/order/email/pro/{service}/account/{duration}', pathParams: {service: string, duration: string}, queryParams: {number?: Number}): Promise<OrderOrder>;
  /**
  Create an order for a pro account
  Get allowed durations for 'account' option
  **/
  public get(path: '/order/email/pro/{service}/account', pathParams: {service: string}, queryParams: {number?: Number}): Promise<string[]>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/email/pro/{service}', pathParams: {service: string}): Promise<string[]>;
  /**
  Operations about the PROEMAIL service
  List available services
  **/
  public get(path: '/order/email/pro'): Promise<string[]>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/overTheBox/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Create an order to upgrade your overTheBox service
  Get prices and contracts information
  **/
  public get(path: '/order/overTheBox/{serviceName}/migrate', pathParams: {serviceName: string}, queryParams: {hardware?: boolean, offer?: string, shippingMethod?: OverTheBoxShippingMethodEnum, shippingRelayID?: Number, shippingContactID?: string}): Promise<OrderOrder>;
  /**
  Operations about the OVERTHEBOX service
  List available services
  **/
  public get(path: '/order/overTheBox'): Promise<string[]>;
  /**
  Subscribe to overTheBox service
  Get prices and contracts information
  **/
  public get(path: '/order/overTheBox/new/{duration}', pathParams: {duration: string}, queryParams: {offer?: string, deviceId?: string, voucher?: string}): Promise<OrderOrder>;
  /**
  Subscribe to overTheBox service
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/overTheBox/new', pathParams: null, queryParams: {offer?: string, deviceId?: string, voucher?: string}): Promise<string[]>;
  /**
  Order additional bandwidth
  Get allowed durations for 'bandwidth' option
  **/
  public get(path: '/order/hosting/web/{serviceName}/bandwidth', pathParams: {serviceName: string}, queryParams: {traffic?: HostingWebBandwidthOfferEnum}): Promise<string[]>;
  /**
  Order additional bandwidth
  Get prices and contracts information
  **/
  public get(path: '/order/hosting/web/{serviceName}/bandwidth/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {traffic?: HostingWebBandwidthOfferEnum}): Promise<OrderOrder>;
  /**
  Create an order for cdn option
  Get allowed durations for 'cdn' option
  **/
  public get(path: '/order/hosting/web/{serviceName}/cdn', pathParams: {serviceName: string}, queryParams: {offer?: HostingWebCdnOfferEnum}): Promise<string[]>;
  /**
  Create an order for cdn option
  Get prices and contracts information
  **/
  public get(path: '/order/hosting/web/{serviceName}/cdn/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {offer?: HostingWebCdnOfferEnum}): Promise<OrderOrder>;
  /**
  Create an order for upgrade your hosting account
  Get allowed durations for 'upgrade' option
  **/
  public get(path: '/order/hosting/web/{serviceName}/upgrade', pathParams: {serviceName: string}, queryParams: {offer?: HostingWebOfferEnum, waiveRetractationPeriod?: boolean}): Promise<string[]>;
  /**
  Create an order for upgrade your hosting account
  Get prices and contracts information
  **/
  public get(path: '/order/hosting/web/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {offer?: HostingWebOfferEnum, waiveRetractationPeriod?: boolean}): Promise<OrderOrder>;
  /**
  Create an order for hosted ssl option
  Get allowed durations for 'ssl' option
  **/
  public get(path: '/order/hosting/web/{serviceName}/ssl', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Create an order for hosted ssl option
  Get prices and contracts information
  **/
  public get(path: '/order/hosting/web/{serviceName}/ssl/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Create an order for extra sql perso
  Get prices and contracts information
  **/
  public get(path: '/order/hosting/web/{serviceName}/extraSqlPerso/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {offer?: HostingWebDatabaseSqlPersoOfferEnum}): Promise<OrderOrder>;
  /**
  Create an order for extra sql perso
  Get allowed durations for 'extraSqlPerso' option
  **/
  public get(path: '/order/hosting/web/{serviceName}/extraSqlPerso', pathParams: {serviceName: string}, queryParams: {offer?: HostingWebDatabaseSqlPersoOfferEnum}): Promise<string[]>;
  /**
  Create an order for change the hosting main domain
  Get allowed durations for 'changeMainDomain' option
  **/
  public get(path: '/order/hosting/web/{serviceName}/changeMainDomain', pathParams: {serviceName: string}, queryParams: {domain?: string, mxplan?: HostingWebOrderMxPlanEnum}): Promise<string[]>;
  /**
  Create an order for change the hosting main domain
  Get prices and contracts information
  **/
  public get(path: '/order/hosting/web/{serviceName}/changeMainDomain/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {domain?: string, mxplan?: HostingWebOrderMxPlanEnum}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/hosting/web/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Operations about the HOSTING service
  List available services
  **/
  public get(path: '/order/hosting/web'): Promise<string[]>;
  /**
  Order a new hosting account
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/hosting/web/new', pathParams: null, queryParams: {waiveRetractationPeriod?: boolean, offer?: HostingWebOfferEnum, domain?: string, module?: HostingWebModuleOrderableNameEnum, dnsZone?: HostingWebDnsZoneEnum}): Promise<string[]>;
  /**
  Order a new hosting account
  Get prices and contracts information
  **/
  public get(path: '/order/hosting/web/new/{duration}', pathParams: {duration: string}, queryParams: {waiveRetractationPeriod?: boolean, offer?: HostingWebOfferEnum, domain?: string, module?: HostingWebModuleOrderableNameEnum, dnsZone?: HostingWebDnsZoneEnum}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/hosting/privateDatabase/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Create an order for change ram size on your private database
  Get prices and contracts information
  **/
  public get(path: '/order/hosting/privateDatabase/{serviceName}/ram/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {ram?: HostingPrivateDatabaseAvailableRamSizeEnum}): Promise<OrderOrder>;
  /**
  Create an order for change ram size on your private database
  Get allowed durations for 'ram' option
  **/
  public get(path: '/order/hosting/privateDatabase/{serviceName}/ram', pathParams: {serviceName: string}, queryParams: {ram?: HostingPrivateDatabaseAvailableRamSizeEnum}): Promise<string[]>;
  /**
  Operations about the SQLPRIVE service
  List available services
  **/
  public get(path: '/order/hosting/privateDatabase'): Promise<string[]>;
  /**
  Order new private database
  Get prices and contracts information
  **/
  public get(path: '/order/hosting/privateDatabase/new/{duration}', pathParams: {duration: string}, queryParams: {datacenter?: HostingPrivateDatabaseDatacenterEnum, offer?: HostingPrivateDatabaseOfferEnum, version?: HostingPrivateDatabaseOrderableVersionEnum, ram?: HostingPrivateDatabaseAvailableRamSizeEnum}): Promise<OrderOrder>;
  /**
  Order new private database
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/hosting/privateDatabase/new', pathParams: null, queryParams: {datacenter?: HostingPrivateDatabaseDatacenterEnum, offer?: HostingPrivateDatabaseOfferEnum, version?: HostingPrivateDatabaseOrderableVersionEnum, ram?: HostingPrivateDatabaseAvailableRamSizeEnum}): Promise<string[]>;
  /**
  Operations about the OFFICE service
  List available services
  **/
  public get(path: '/order/cartServiceOption/office365Prepaid'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/office365/#serviceName#
  Get informations about additional Office offer for your service
  **/
  public get(path: '/order/cartServiceOption/office365Prepaid/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the DEDICATED service
  List available services
  **/
  public get(path: '/order/cartServiceOption/dedicated'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/dedicated/#serviceName#
  Get informations about additional dedicated offer for your service
  **/
  public get(path: '/order/cartServiceOption/dedicated/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Listing offers /order/cartServiceOptions/domain/#serviceName#
  Get informations about additional Domain offer for your service
  **/
  public get(path: '/order/cartServiceOption/domain/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the DOMAIN service
  List available services
  **/
  public get(path: '/order/cartServiceOption/domain', pathParams: null, queryParams: {whoisOwner?: string}): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/logs/#serviceName#
  Get informations about additional Logs offer for your service
  **/
  public get(path: '/order/cartServiceOption/logs/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the DBAAS-LOGS service
  List available services
  **/
  public get(path: '/order/cartServiceOption/logs'): Promise<string[]>;
  /**
  Operations about the PROEMAIL service
  List available services
  **/
  public get(path: '/order/cartServiceOption/emailpro'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/emailpro/#serviceName#
  Get informations about additional EmailPro offer for your service
  **/
  public get(path: '/order/cartServiceOption/emailpro/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the EXCHANGE service
  List available services
  **/
  public get(path: '/order/cartServiceOption/microsoftExchange'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/microsoftExchange/#serviceName#
  Get informations about additional Microsoft offer for your service
  **/
  public get(path: '/order/cartServiceOption/microsoftExchange/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName#
  Get informations about additional IP Load-Balancing offer for your service
  **/
  public get(path: '/order/cartServiceOption/ipLoadbalancing/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the IPLB service
  List available services
  **/
  public get(path: '/order/cartServiceOption/ipLoadbalancing'): Promise<string[]>;
  /**
  Operations about the PUBLICCLOUD service
  List available services
  **/
  public get(path: '/order/cartServiceOption/cloud'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/cloud/#serviceName#
  Get informations about additional Cloud offer for your service
  **/
  public get(path: '/order/cartServiceOption/cloud/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the PCC service
  List available services
  **/
  public get(path: '/order/cartServiceOption/privateCloudReseller'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName#
  Get informations about additional Private Cloud offer for your service
  **/
  public get(path: '/order/cartServiceOption/privateCloudReseller/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the MSSERVICES service
  List available services
  **/
  public get(path: '/order/cartServiceOption/microsoft'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/microsoft/#serviceName#
  Get informations about additional Microsoft offer for your service
  **/
  public get(path: '/order/cartServiceOption/microsoft/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the HORIZONVIEW service
  List available services
  **/
  public get(path: '/order/cartServiceOption/vdi'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/vdi/#serviceName#
  Get informations about additional Horizon View offer for your service
  **/
  public get(path: '/order/cartServiceOption/vdi/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName#
  Get informations about additional Private Cloud Enterprise offer for your service
  **/
  public get(path: '/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the PCC service
  List available services
  **/
  public get(path: '/order/cartServiceOption/privateCloudResellerEnterprise'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/sslGateway/#serviceName#
  Get informations about additional SSL Gateway offer for your service
  **/
  public get(path: '/order/cartServiceOption/sslGateway/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the SSLGATEWAY service
  List available services
  **/
  public get(path: '/order/cartServiceOption/sslGateway'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/privateCloud/#serviceName#
  Get informations about additional Private Cloud offer for your service
  **/
  public get(path: '/order/cartServiceOption/privateCloud/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the PCC service
  List available services
  **/
  public get(path: '/order/cartServiceOption/privateCloud'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/sharepoint/#serviceName#
  Get informations about additional Sharepoint offer for your service
  **/
  public get(path: '/order/cartServiceOption/sharepoint/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the SHAREPOINT service
  List available services
  **/
  public get(path: '/order/cartServiceOption/sharepoint'): Promise<string[]>;
  /**
  Listing offers /order/cartServiceOptions/webHosting/#serviceName#
  Get informations about additional Web Hosting offer for your service
  **/
  public get(path: '/order/cartServiceOption/webHosting/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Operations about the HOSTING service
  List available services
  **/
  public get(path: '/order/cartServiceOption/webHosting'): Promise<string[]>;
  /**
  Missing description
  Retrieve bare-metal servers catalog
  **/
  public get(path: '/order/catalog/public/baremetalServers', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogPublicDedicatedServerCatalog>;
  /**
  Missing description
  Retrieve information of IP addresses catalog
  **/
  public get(path: '/order/catalog/formatted/ip', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of Plesk licenses catalog
  **/
  public get(path: '/order/catalog/formatted/licensePlesk', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of cPanel licenses catalog
  **/
  public get(path: '/order/catalog/formatted/licensecPanel', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of Virtuozzo licenses catalog
  **/
  public get(path: '/order/catalog/formatted/licenseVirtuozzo', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of Private Cloud Reseller Enterprise catalog
  **/
  public get(path: '/order/catalog/formatted/privateCloudResellerEnterprise', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogPccCatalog>;
  /**
  Missing description
  Retrieve information of Reseller catalog
  **/
  public get(path: '/order/catalog/formatted/reseller', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of Desk as a service catalog
  **/
  public get(path: '/order/catalog/formatted/deskaas', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of Directadmin licenses offers catalog
  **/
  public get(path: '/order/catalog/formatted/licenseDirectadmin', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of Worklight licenses catalog
  **/
  public get(path: '/order/catalog/formatted/licenseWorklight', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of dedicated discover offer server catalog
  **/
  public get(path: '/order/catalog/formatted/discover', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of Windows licenses catalog
  **/
  public get(path: '/order/catalog/formatted/licenseWindows', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of CloudLinux licenses catalog
  **/
  public get(path: '/order/catalog/formatted/licenseCloudLinux', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve list of catalog name
  **/
  public get(path: '/order/catalog/formatted'): Promise<string[]>;
  /**
  Missing description
  Retrieve information of VPS catalog
  **/
  public get(path: '/order/catalog/formatted/vps', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of dedicated server catalog
  **/
  public get(path: '/order/catalog/formatted/dedicated', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of Private Cloud CDI catalog
  **/
  public get(path: '/order/catalog/formatted/privateCloudCDI', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogPrivateCloudCatalog>;
  /**
  Missing description
  Retrieve information of Logs Data Platform catalog
  **/
  public get(path: '/order/catalog/formatted/logs', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of SqlServer licenses catalog
  **/
  public get(path: '/order/catalog/formatted/licenseSqlServer', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Missing description
  Retrieve information of Private Cloud SDDC catalog
  **/
  public get(path: '/order/catalog/formatted/privateCloudSDDC', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogPrivateCloudCatalog>;
  /**
  Missing description
  Retrieve information of Private Cloud Dedicated Cloud catalog
  **/
  public get(path: '/order/catalog/formatted/privateCloudDC', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogPrivateCloudCatalog>;
  /**
  Missing description
  Retrieve information of Private Cloud Reseller catalog
  **/
  public get(path: '/order/catalog/formatted/privateCloudReseller', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogPccCatalog>;
  /**
  Missing description
  Retrieve information of Public Cloud catalog
  **/
  public get(path: '/order/catalog/formatted/cloud', pathParams: null, queryParams: {ovhSubsidiary?: NichandleOvhSubsidiaryEnum}): Promise<OrderCatalogCatalog>;
  /**
  Operations about the PCC service
  List available services
  **/
  public get(path: '/order/dedicatedCloud'): Promise<string[]>;
  /**
  Enable windows templates (SPLA) in your Private Cloud
  Get prices and contracts information
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/spla', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)
  Get allowed durations for 'filer' option
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/filer', pathParams: {serviceName: string}, queryParams: {datacenterId?: Number, quantity?: Number, name?: string}): Promise<string[]>;
  /**
  Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)
  Get prices and contracts information
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/filer/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {datacenterId?: Number, quantity?: Number, name?: string}): Promise<OrderOrder>;
  /**
  Order additional bandwidth in your Private Cloud
  Get prices and contracts information
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {bandwidth?: DedicatedCloudAdditionalBandwidthEnum}): Promise<OrderOrder>;
  /**
  Order additional bandwidth in your Private Cloud
  Get allowed durations for 'additionalBandwidth' option
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/additionalBandwidth', pathParams: {serviceName: string}, queryParams: {bandwidth?: DedicatedCloudAdditionalBandwidthEnum}): Promise<string[]>;
  /**
  Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month
  Get allowed durations for 'upgradeRessource' option
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/upgradeRessource', pathParams: {serviceName: string}, queryParams: {upgradeType?: DedicatedCloudRessourcesUpgradeTypeEnum, upgradedRessourceId?: Number, upgradedRessourceType?: DedicatedCloudRessourcesUpgradeRessourceTypeEnum}): Promise<string[]>;
  /**
  Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month
  Get prices and contracts information
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {upgradeType?: DedicatedCloudRessourcesUpgradeTypeEnum, upgradedRessourceId?: Number, upgradedRessourceType?: DedicatedCloudRessourcesUpgradeRessourceTypeEnum}): Promise<OrderOrder>;
  /**
  Order VDI option in a given Datacenter
  Get prices and contracts information
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/vdi', pathParams: {serviceName: string}, queryParams: {firstPublicIpAddress?: string, datacenterId?: Number, secondPublicIpAddress?: string}): Promise<OrderOrder>;
  /**
  Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)
  Get prices and contracts information
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/host/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {datacenterId?: Number, quantity?: Number, name?: string}): Promise<OrderOrder>;
  /**
  Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)
  Get allowed durations for 'host' option
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/host', pathParams: {serviceName: string}, queryParams: {datacenterId?: Number, quantity?: Number, name?: string}): Promise<string[]>;
  /**
  Order an IP block for your Private Cloud
  Get allowed durations for 'ip' option
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/ip', pathParams: {serviceName: string}, queryParams: {description?: string, usage?: string, size?: DedicatedCloudOrderableIpBlockRangeEnum, estimatedClientsNumber?: Number, country?: DedicatedCloudIpCountriesEnum, networkName?: string}): Promise<string[]>;
  /**
  Order an IP block for your Private Cloud
  Get prices and contracts information
  **/
  public get(path: '/order/dedicatedCloud/{serviceName}/ip/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {description?: string, usage?: string, size?: DedicatedCloudOrderableIpBlockRangeEnum, estimatedClientsNumber?: Number, country?: DedicatedCloudIpCountriesEnum, networkName?: string}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/license/windows/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Upgrade this license with some given options
  Get allowed durations for 'upgrade' option
  **/
  public get(path: '/order/license/windows/{serviceName}/upgrade', pathParams: {serviceName: string}, queryParams: {sqlVersion?: LicenseWindowsSqlVersionEnum, version?: LicenseWindowsOsVersionEnum}): Promise<string[]>;
  /**
  Upgrade this license with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/windows/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {sqlVersion?: LicenseWindowsSqlVersionEnum, version?: LicenseWindowsOsVersionEnum}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/windows/new/{duration}', pathParams: {duration: string}, queryParams: {sqlVersion?: LicenseWindowsSqlVersionEnum, version?: LicenseWindowsOsVersionEnum, serviceType?: LicenseLicenseTypeEnum, ip?: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/license/windows/new', pathParams: null, queryParams: {sqlVersion?: LicenseWindowsSqlVersionEnum, version?: LicenseWindowsOsVersionEnum, serviceType?: LicenseLicenseTypeEnum, ip?: string}): Promise<string[]>;
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/order/license/windows'): Promise<string[]>;
  /**
  Upgrade this license with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/virtuozzo/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {containerNumber?: LicenseOrderableVirtuozzoContainerNumberEnum}): Promise<OrderOrder>;
  /**
  Upgrade this license with some given options
  Get allowed durations for 'upgrade' option
  **/
  public get(path: '/order/license/virtuozzo/{serviceName}/upgrade', pathParams: {serviceName: string}, queryParams: {containerNumber?: LicenseOrderableVirtuozzoContainerNumberEnum}): Promise<string[]>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/license/virtuozzo/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order a new license on a given Ip with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/virtuozzo/new/{duration}', pathParams: {duration: string}, queryParams: {ip?: string, version?: LicenseOrderableVirtuozzoVersionEnum, containerNumber?: LicenseOrderableVirtuozzoContainerNumberEnum, serviceType?: LicenseLicenseTypeEnum}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/license/virtuozzo/new', pathParams: null, queryParams: {ip?: string, version?: LicenseOrderableVirtuozzoVersionEnum, containerNumber?: LicenseOrderableVirtuozzoContainerNumberEnum, serviceType?: LicenseLicenseTypeEnum}): Promise<string[]>;
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/order/license/virtuozzo'): Promise<string[]>;
  /**
  Upgrade this license with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/plesk/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {antispam?: LicenseOrderableAntispamEnum, resellerManagement?: boolean, domainNumber?: LicenseOrderablePleskDomainNumberEnum, applicationSet?: LicensePleskApplicationSetEnum, powerpack?: boolean, wordpressToolkit?: boolean, languagePackNumber?: LicenseOrderablePleskLanguagePackEnum, version?: LicensePleskVersionEnum, antivirus?: LicenseOrderableAntivirusEnum}): Promise<OrderOrder>;
  /**
  Upgrade this license with some given options
  Get allowed durations for 'upgrade' option
  **/
  public get(path: '/order/license/plesk/{serviceName}/upgrade', pathParams: {serviceName: string}, queryParams: {antispam?: LicenseOrderableAntispamEnum, resellerManagement?: boolean, domainNumber?: LicenseOrderablePleskDomainNumberEnum, applicationSet?: LicensePleskApplicationSetEnum, powerpack?: boolean, wordpressToolkit?: boolean, languagePackNumber?: LicenseOrderablePleskLanguagePackEnum, version?: LicensePleskVersionEnum, antivirus?: LicenseOrderableAntivirusEnum}): Promise<string[]>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/license/plesk/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order a new license on a given Ip with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/plesk/new/{duration}', pathParams: {duration: string}, queryParams: {applicationSet?: LicensePleskApplicationSetEnum, powerpack?: boolean, ip?: string, wordpressToolkit?: boolean, languagePackNumber?: LicenseOrderablePleskLanguagePackEnum, version?: LicensePleskVersionEnum, antivirus?: LicenseOrderableAntivirusEnum, serviceType?: LicenseLicenseTypeEnum, domainNumber?: LicenseOrderablePleskDomainNumberEnum, resellerManagement?: boolean}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/license/plesk/new', pathParams: null, queryParams: {applicationSet?: LicensePleskApplicationSetEnum, powerpack?: boolean, ip?: string, wordpressToolkit?: boolean, languagePackNumber?: LicenseOrderablePleskLanguagePackEnum, version?: LicensePleskVersionEnum, antivirus?: LicenseOrderableAntivirusEnum, serviceType?: LicenseLicenseTypeEnum, domainNumber?: LicenseOrderablePleskDomainNumberEnum, resellerManagement?: boolean}): Promise<string[]>;
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/order/license/plesk'): Promise<string[]>;
  /**
  Create an order for an new office tenant
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/license/office/new', pathParams: null, queryParams: {officeBusinessQuantity?: Number, giftCode?: string, officeProPlusQuantity?: Number}): Promise<string[]>;
  /**
  Create an order for an new office tenant
  Get prices and contracts information
  **/
  public get(path: '/order/license/office/new/{duration}', pathParams: {duration: string}, queryParams: {officeBusinessQuantity?: Number, giftCode?: string, officeProPlusQuantity?: Number}): Promise<OrderOrder>;
  /**
  Upgrade this license with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/sqlserver/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {version?: LicenseSqlServerVersionEnum}): Promise<OrderOrder>;
  /**
  Upgrade this license with some given options
  Get allowed durations for 'upgrade' option
  **/
  public get(path: '/order/license/sqlserver/{serviceName}/upgrade', pathParams: {serviceName: string}, queryParams: {version?: LicenseSqlServerVersionEnum}): Promise<string[]>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/license/sqlserver/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order a new license on a given Ip with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/sqlserver/new/{duration}', pathParams: {duration: string}, queryParams: {version?: LicenseSqlServerVersionEnum, ip?: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/license/sqlserver/new', pathParams: null, queryParams: {version?: LicenseSqlServerVersionEnum, ip?: string}): Promise<string[]>;
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/order/license/sqlserver'): Promise<string[]>;
  /**
  Order a new license on a given Ip with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/cpanel/new/{duration}', pathParams: {duration: string}, queryParams: {version?: LicenseOrderableCpanelVersionEnum, serviceType?: LicenseLicenseTypeEnum, ip?: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/license/cpanel/new', pathParams: null, queryParams: {version?: LicenseOrderableCpanelVersionEnum, serviceType?: LicenseLicenseTypeEnum, ip?: string}): Promise<string[]>;
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/order/license/worklight'): Promise<string[]>;
  /**
  Order a new license on a given Ip with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/worklight/new/{duration}', pathParams: {duration: string}, queryParams: {version?: LicenseWorkLightVersionEnum, lessThan1000Users?: boolean, ip?: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/license/worklight/new', pathParams: null, queryParams: {version?: LicenseWorkLightVersionEnum, lessThan1000Users?: boolean, ip?: string}): Promise<string[]>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/license/worklight/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Upgrade this license with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/worklight/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {version?: LicenseWorkLightVersionEnum}): Promise<OrderOrder>;
  /**
  Upgrade this license with some given options
  Get allowed durations for 'upgrade' option
  **/
  public get(path: '/order/license/worklight/{serviceName}/upgrade', pathParams: {serviceName: string}, queryParams: {version?: LicenseWorkLightVersionEnum}): Promise<string[]>;
  /**
  Order a new license on a given Ip with some given options
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/license/directadmin/new', pathParams: null, queryParams: {version?: LicenseOrderableDirectAdminVersionEnum, serviceType?: LicenseLicenseTypeEnum, ip?: string}): Promise<string[]>;
  /**
  Order a new license on a given Ip with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/directadmin/new/{duration}', pathParams: {duration: string}, queryParams: {version?: LicenseOrderableDirectAdminVersionEnum, serviceType?: LicenseLicenseTypeEnum, ip?: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Get prices and contracts information
  **/
  public get(path: '/order/license/cloudLinux/new/{duration}', pathParams: {duration: string}, queryParams: {version?: LicenseCloudLinuxVersionEnum, ip?: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/license/cloudLinux/new', pathParams: null, queryParams: {version?: LicenseCloudLinuxVersionEnum, ip?: string}): Promise<string[]>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/order/freefax'): Promise<string[]>;
  /**
  Credit freefax account pages
  Get prices and contracts information
  **/
  public get(path: '/order/freefax/new', pathParams: null, queryParams: {quantity?: FreefaxQuantityEnum}): Promise<OrderOrder>;
  /**
  Convert the freefax service to a /telephony voicefax service
  Get prices and contracts information
  **/
  public get(path: '/order/freefax/{serviceName}/convertToVoicefax', pathParams: {serviceName: string}, queryParams: {billingAccount?: string}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/freefax/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Operations about the PUBLICCLOUD service
  List available services
  **/
  public get(path: '/order/cloud/project'): Promise<string[]>;
  /**
  Order failover ip on your Cloud project
  Get prices and contracts information
  **/
  public get(path: '/order/cloud/project/{serviceName}/ip', pathParams: {serviceName: string}, queryParams: {quantity?: Number, country?: VpsIpGeolocationEnum, instanceId?: string}): Promise<OrderOrder>;
  /**
  Order credit usable on your Cloud project
  Get prices and contracts information
  **/
  public get(path: '/order/cloud/project/{serviceName}/credit', pathParams: {serviceName: string}, queryParams: {amount?: Number}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/cloud/project/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order a HPC Spot Account
  Get prices and contracts information
  **/
  public get(path: '/order/hpcspot/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Order a HPC Spot Account
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/hpcspot/new'): Promise<string[]>;
  /**
  Operations about the VEEAMCC service
  List available services
  **/
  public get(path: '/order/veeamCloudConnect'): Promise<string[]>;
  /**
  Order an upgrade upon your Veeam Cloud Connect account
  Get allowed durations for 'upgrade' option
  **/
  public get(path: '/order/veeamCloudConnect/{serviceName}/upgrade', pathParams: {serviceName: string}, queryParams: {offer?: VeeamCloudConnectOffer}): Promise<string[]>;
  /**
  Order an upgrade upon your Veeam Cloud Connect account
  Get prices and contracts information
  **/
  public get(path: '/order/veeamCloudConnect/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {offer?: VeeamCloudConnectOffer}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/veeamCloudConnect/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Operations about the VRACK service
  List available services
  **/
  public get(path: '/order/vrack'): Promise<string[]>;
  /**
  Order new vrack
  Get prices and contracts information
  **/
  public get(path: '/order/vrack/new', pathParams: null, queryParams: {quantity?: Number}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/vrack/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Operations about the CDNSTATIC service
  List available services
  **/
  public get(path: '/order/cdn/webstorage'): Promise<string[]>;
  /**
  Upgrade Storage Option
  Get prices and contracts information
  **/
  public get(path: '/order/cdn/webstorage/{serviceName}/storage/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {storage?: CdnWebstorageOrderStorageEnum}): Promise<OrderOrder>;
  /**
  Upgrade Storage Option
  Get allowed durations for 'storage' option
  **/
  public get(path: '/order/cdn/webstorage/{serviceName}/storage', pathParams: {serviceName: string}, queryParams: {storage?: CdnWebstorageOrderStorageEnum}): Promise<string[]>;
  /**
  Order Traffic
  Get prices and contracts information
  **/
  public get(path: '/order/cdn/webstorage/{serviceName}/traffic', pathParams: {serviceName: string}, queryParams: {bandwidth?: CdnWebstorageOrderTrafficEnum}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/cdn/webstorage/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Operations about the CDNANYCAST service
  List available services
  **/
  public get(path: '/order/cdn/dedicated'): Promise<string[]>;
  /**
  Order a New Dedicated CDN Service
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/cdn/dedicated/new'): Promise<string[]>;
  /**
  Order a New Dedicated CDN Service
  Get prices and contracts information
  **/
  public get(path: '/order/cdn/dedicated/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Order Quota
  Get allowed durations for 'quota' option
  **/
  public get(path: '/order/cdn/dedicated/{serviceName}/quota', pathParams: {serviceName: string}, queryParams: {quota?: CdnanycastOrderQuotaEnum}): Promise<string[]>;
  /**
  Order Quota
  Get prices and contracts information
  **/
  public get(path: '/order/cdn/dedicated/{serviceName}/quota/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {quota?: CdnanycastOrderQuotaEnum}): Promise<OrderOrder>;
  /**
  List available options for this service
  Get allowed options
  **/
  public get(path: '/order/cdn/dedicated/{serviceName}', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Order Backend Option
  Get allowed durations for 'backend' option
  **/
  public get(path: '/order/cdn/dedicated/{serviceName}/backend', pathParams: {serviceName: string}, queryParams: {backend?: Number}): Promise<string[]>;
  /**
  Order Backend Option
  Get prices and contracts information
  **/
  public get(path: '/order/cdn/dedicated/{serviceName}/backend/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {backend?: Number}): Promise<OrderOrder>;
  /**
  Upgrade cacheRule Option
  Get prices and contracts information
  **/
  public get(path: '/order/cdn/dedicated/{serviceName}/cacheRule/{duration}', pathParams: {serviceName: string, duration: string}, queryParams: {cacheRule?: CdnanycastOrderCacheRuleEnum}): Promise<OrderOrder>;
  /**
  Upgrade cacheRule Option
  Get allowed durations for 'cacheRule' option
  **/
  public get(path: '/order/cdn/dedicated/{serviceName}/cacheRule', pathParams: {serviceName: string}, queryParams: {cacheRule?: CdnanycastOrderCacheRuleEnum}): Promise<string[]>;
  /**
  Missing description
  Get informations about IP Load-Balancing offers
  **/
  public get(path: '/order/cart/{cartId}/ipLoadbalancing', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about IP Load-Balancing options
  **/
  public get(path: '/order/cart/{cartId}/ipLoadbalancing/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Office 365 options
  **/
  public get(path: '/order/cart/{cartId}/office365/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Office 365 licenses
  **/
  public get(path: '/order/cart/{cartId}/office365', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Private Cloud Reseller offers
  **/
  public get(path: '/order/cart/{cartId}/privateCloudReseller', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Private Cloud Reseller options
  **/
  public get(path: '/order/cart/{cartId}/privateCloudReseller/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get a summary of your current order
  **/
  public get(path: '/order/cart/{cartId}/summary', pathParams: {cartId: string}): Promise<OrderOrder>;
  /**
  Missing description
  Get informations about SqlServer licenses offers
  **/
  public get(path: '/order/cart/{cartId}/licenseSqlServer', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Cloud Web options
  **/
  public get(path: '/order/cart/{cartId}/cloudweb/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Cloud Web offers
  **/
  public get(path: '/order/cart/{cartId}/cloudweb', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Veeam Cloud Connect options
  **/
  public get(path: '/order/cart/{cartId}/veeamcc/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Veeam Cloud Connect offers
  **/
  public get(path: '/order/cart/{cartId}/veeamcc', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Exchange Enterprise offers
  **/
  public get(path: '/order/cart/{cartId}/exchangeEnterprise', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Exchange Enterprise options
  **/
  public get(path: '/order/cart/{cartId}/exchangeEnterprise/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about SSL Gateway options
  **/
  public get(path: '/order/cart/{cartId}/sslGateway/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about SSL Gateway offers
  **/
  public get(path: '/order/cart/{cartId}/sslGateway', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about a domain name transfer
  **/
  public get(path: '/order/cart/{cartId}/domainTransfer', pathParams: {cartId: string}, queryParams: {domain?: string}): Promise<OrderCartProductInformation[]>;
  /**
  Missing description
  Get informations about domain names transfer options
  **/
  public get(path: '/order/cart/{cartId}/domainTransfer/options', pathParams: {cartId: string}, queryParams: {domain?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Domain packs offers (AllDom)
  **/
  public get(path: '/order/cart/{cartId}/domainPacks', pathParams: {cartId: string}, queryParams: {domain?: string}): Promise<OrderCartDomainPacksProductInformation[]>;
  /**
  Missing description
  Get informations about a timeseries offer
  **/
  public get(path: '/order/cart/{cartId}/dbaasTimeseries', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about vRack offers
  **/
  public get(path: '/order/cart/{cartId}/vrackReseller', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Logs offers
  **/
  public get(path: '/order/cart/{cartId}/logs', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Logs options
  **/
  public get(path: '/order/cart/{cartId}/logs/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Retrieve configuration item
  **/
  public get(path: '/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}', pathParams: {cartId: string, itemId: Number, configurationId: Number}): Promise<OrderCartConfigurationItem>;
  /**
  Missing description
  Retrieve all configuration item of the cart item
  **/
  public get(path: '/order/cart/{cartId}/item/{itemId}/configuration', pathParams: {cartId: string, itemId: Number}, queryParams: {label?: string}): Promise<Number[]>;
  /**
  Missing description
  Retrieve information about a specific item of a cart
  **/
  public get(path: '/order/cart/{cartId}/item/{itemId}', pathParams: {cartId: string, itemId: Number}): Promise<OrderCartItem>;
  /**
  Missing description
  Retrieve all required configuration item of the cart item
  **/
  public get(path: '/order/cart/{cartId}/item/{itemId}/requiredConfiguration', pathParams: {cartId: string, itemId: Number}): Promise<OrderCartConfigurationRequirements[]>;
  /**
  Missing description
  List all the items of a cart
  **/
  public get(path: '/order/cart/{cartId}/item', pathParams: {cartId: string}): Promise<Number[]>;
  /**
  Missing description
  Retrieve coupons associated to cart
  **/
  public get(path: '/order/cart/{cartId}/coupon', pathParams: {cartId: string}): Promise<string[]>;
  /**
  Missing description
  Get informations about Veeam Enterprise offers
  **/
  public get(path: '/order/cart/{cartId}/veeamEnterprise', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Veeam Enterprise options
  **/
  public get(path: '/order/cart/{cartId}/veeamEnterprise/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Virtuozzo licenses offers
  **/
  public get(path: '/order/cart/{cartId}/licenseVirtuozzo', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about PaaS Monitoring offers
  **/
  public get(path: '/order/cart/{cartId}/paasmon', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Microsoft options
  **/
  public get(path: '/order/cart/{cartId}/microsoft/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Microsoft offers
  **/
  public get(path: '/order/cart/{cartId}/microsoft', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about IP addresses options
  **/
  public get(path: '/order/cart/{cartId}/ip/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about IP addresses offers
  **/
  public get(path: '/order/cart/{cartId}/ip', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Plesk licenses offers
  **/
  public get(path: '/order/cart/{cartId}/licensePlesk', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Plesk license options
  **/
  public get(path: '/order/cart/{cartId}/licensePlesk/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Worklight licenses offers
  **/
  public get(path: '/order/cart/{cartId}/licenseWorklight', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Reseller offers
  **/
  public get(path: '/order/cart/{cartId}/reseller', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Private Cloud SDDC options
  **/
  public get(path: '/order/cart/{cartId}/privateCloudSDDC/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Private Cloud SDDC offers
  **/
  public get(path: '/order/cart/{cartId}/privateCloudSDDC', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about domain names options
  **/
  public get(path: '/order/cart/{cartId}/domain/options', pathParams: {cartId: string}, queryParams: {domain?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about a domain name
  **/
  public get(path: '/order/cart/{cartId}/domain', pathParams: {cartId: string}, queryParams: {domain?: string}): Promise<OrderCartProductInformation[]>;
  /**
  Missing description
  Get informations about a dedicated server for US Reseller
  **/
  public get(path: '/order/cart/{cartId}/dedicatedReseller', pathParams: {cartId: string}, queryParams: {planCode?: string, family?: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about dedicated server options
  **/
  public get(path: '/order/cart/{cartId}/dedicatedReseller/options', pathParams: {cartId: string}, queryParams: {planCode?: string, family?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Private Cloud CDI offers
  **/
  public get(path: '/order/cart/{cartId}/privateCloudCDI', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Private Cloud CDI options
  **/
  public get(path: '/order/cart/{cartId}/privateCloudCDI/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about SMS offers
  **/
  public get(path: '/order/cart/{cartId}/sms', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about vRack offers
  **/
  public get(path: '/order/cart/{cartId}/vrack', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Windows licenses offers
  **/
  public get(path: '/order/cart/{cartId}/licenseWindows', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Sharepoint offers
  **/
  public get(path: '/order/cart/{cartId}/sharepoint', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Sharepoint options
  **/
  public get(path: '/order/cart/{cartId}/sharepoint/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about dedicated labs server options
  **/
  public get(path: '/order/cart/{cartId}/dedicatedLabs/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about a dedicated labs server
  **/
  public get(path: '/order/cart/{cartId}/dedicatedLabs', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Exchange options
  **/
  public get(path: '/order/cart/{cartId}/exchange/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Exchange offers
  **/
  public get(path: '/order/cart/{cartId}/exchange', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Retrieve information about a specific cart
  **/
  public get(path: '/order/cart/{cartId}', pathParams: {cartId: string}): Promise<OrderCartCart>;
  /**
  Missing description
  Get informations about CloudLinux licenses offers
  **/
  public get(path: '/order/cart/{cartId}/licenseCloudLinux', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about NAS HA options
  **/
  public get(path: '/order/cart/{cartId}/nasha/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about NAS HA offers
  **/
  public get(path: '/order/cart/{cartId}/nasha', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about DNS zone offer
  **/
  public get(path: '/order/cart/{cartId}/dns', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Managed Services options
  **/
  public get(path: '/order/cart/{cartId}/managedServices/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Managed Services offers
  **/
  public get(path: '/order/cart/{cartId}/managedServices', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Ceph as a Service options
  **/
  public get(path: '/order/cart/{cartId}/cephaas/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Ceph as a Service offers
  **/
  public get(path: '/order/cart/{cartId}/cephaas', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Horizon View offers
  **/
  public get(path: '/order/cart/{cartId}/vdi', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Horizon View options
  **/
  public get(path: '/order/cart/{cartId}/vdi/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Dedicated Discover server offers
  **/
  public get(path: '/order/cart/{cartId}/discover', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Dedicated Discover server options
  **/
  public get(path: '/order/cart/{cartId}/discover/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Directadmin licenses offers
  **/
  public get(path: '/order/cart/{cartId}/licenseDirectadmin', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Desk As A Service offers
  **/
  public get(path: '/order/cart/{cartId}/deskaas', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Hosting Reseller offers
  **/
  public get(path: '/order/cart/{cartId}/hostingReseller', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Private Cloud Reseller Enterprise options
  **/
  public get(path: '/order/cart/{cartId}/privateCloudResellerEnterprise/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Private Cloud Reseller Enterprise offers
  **/
  public get(path: '/order/cart/{cartId}/privateCloudResellerEnterprise', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about a baremetal server
  **/
  public get(path: '/order/cart/{cartId}/baremetalServers', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about baremetal server options
  **/
  public get(path: '/order/cart/{cartId}/baremetalServers/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about EmailPro options
  **/
  public get(path: '/order/cart/{cartId}/emailpro/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about EmailPro offers
  **/
  public get(path: '/order/cart/{cartId}/emailpro', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Public Cloud offers
  **/
  public get(path: '/order/cart/{cartId}/cloud', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Public Cloud options
  **/
  public get(path: '/order/cart/{cartId}/cloud/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Private Cloud Dedicated Cloud offers
  **/
  public get(path: '/order/cart/{cartId}/privateCloudDC', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Private Cloud Dedicated Cloud options
  **/
  public get(path: '/order/cart/{cartId}/privateCloudDC/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Over The Box offers
  **/
  public get(path: '/order/cart/{cartId}/otb', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Over The Box options
  **/
  public get(path: '/order/cart/{cartId}/otb/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Domain Restore
  **/
  public get(path: '/order/cart/{cartId}/domainRestore', pathParams: {cartId: string}, queryParams: {domain?: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  List of OVHcloud Connect product
  Get informations about OVHcloud Connect offers
  **/
  public get(path: '/order/cart/{cartId}/ovhCloudConnect', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about VoIP options
  **/
  public get(path: '/order/cart/{cartId}/telephony/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about VoIP offers
  **/
  public get(path: '/order/cart/{cartId}/telephony', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Office 365 Prepaid licenses
  **/
  public get(path: '/order/cart/{cartId}/office365Prepaid', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Office 365 Prepaid options
  **/
  public get(path: '/order/cart/{cartId}/office365Prepaid/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  List of xdsl product
  Get informations about xdsl offers
  **/
  public get(path: '/order/cart/{cartId}/xdsl', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  List of xdsl addon
  Get informations about xdsl options
  **/
  public get(path: '/order/cart/{cartId}/xdsl/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about VPS offers
  **/
  public get(path: '/order/cart/{cartId}/vps', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about VPS options
  **/
  public get(path: '/order/cart/{cartId}/vps/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about a dedicated server
  **/
  public get(path: '/order/cart/{cartId}/dedicated', pathParams: {cartId: string}, queryParams: {planCode?: string, family?: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about dedicated server options
  **/
  public get(path: '/order/cart/{cartId}/dedicated/options', pathParams: {cartId: string}, queryParams: {planCode?: string, family?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Kubernetes options
  **/
  public get(path: '/order/cart/{cartId}/kubernetes/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Kubernetes offers
  **/
  public get(path: '/order/cart/{cartId}/kubernetes', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about CDN offers
  **/
  public get(path: '/order/cart/{cartId}/cdn', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about CDN options
  **/
  public get(path: '/order/cart/{cartId}/cdn/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about webHosting offers
  **/
  public get(path: '/order/cart/{cartId}/webHosting', pathParams: {cartId: string}): Promise<OrderCartWebHostingProductInformation[]>;
  /**
  Missing description
  Get informations about webHosting options
  **/
  public get(path: '/order/cart/{cartId}/webHosting/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get prices and contracts information for your cart
  **/
  public get(path: '/order/cart/{cartId}/checkout', pathParams: {cartId: string}): Promise<OrderOrder>;
  /**
  Missing description
  Get informations about SSL Comodo offers
  **/
  public get(path: '/order/cart/{cartId}/sslComodo', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about SSL Comodo options
  **/
  public get(path: '/order/cart/{cartId}/sslComodo/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about Metrics offers
  **/
  public get(path: '/order/cart/{cartId}/metrics', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about Metrics options
  **/
  public get(path: '/order/cart/{cartId}/metrics/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about SaaS CSP2 options
  **/
  public get(path: '/order/cart/{cartId}/csp2/options', pathParams: {cartId: string}, queryParams: {planCode?: string}): Promise<OrderCartGenericOptionDefinition[]>;
  /**
  Missing description
  Get informations about SaaS CSP2 offers
  **/
  public get(path: '/order/cart/{cartId}/csp2', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  List of OVHcloud Connect product
  Get informations about OVHcloud Connect offers
  **/
  public get(path: '/order/cart/{cartId}/vco', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  Get informations about cPanel licenses offers
  **/
  public get(path: '/order/cart/{cartId}/licensecPanel', pathParams: {cartId: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Missing description
  List of your OVH order carts
  **/
  public get(path: '/order/cart', pathParams: null, queryParams: {description?: string}): Promise<string[]>;
  /**
  Operations about the EXCHANGE service
  List available services
  **/
  public get(path: '/order/upgrade/microsoftExchange'): Promise<string[]>;
  /**
  Listing offers /order/upgrade/microsoftExchange/#serviceName#
  Get a provisional order for the selected upgrade of your service
  **/
  public get(path: '/order/upgrade/microsoftExchange/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/microsoftExchange
  Retrieve available offers to upgrade your service to
  **/
  public get(path: '/order/upgrade/microsoftExchange/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Operations about the IPLB service
  List available services
  **/
  public get(path: '/order/upgrade/ipLoadbalancing'): Promise<string[]>;
  /**
  Listing offers /order/upgrade/ipLoadbalancing/#serviceName#
  Get a provisional order for the selected upgrade of your service
  **/
  public get(path: '/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/ipLoadbalancing
  Retrieve available offers to upgrade your service to
  **/
  public get(path: '/order/upgrade/ipLoadbalancing/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Operations about the DBAAS-LOGS service
  List available services
  **/
  public get(path: '/order/upgrade/logs'): Promise<string[]>;
  /**
  Listing offers /order/upgrade/logs
  Retrieve available offers to upgrade your service to
  **/
  public get(path: '/order/upgrade/logs/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Listing offers /order/upgrade/logs/#serviceName#
  Get a provisional order for the selected upgrade of your service
  **/
  public get(path: '/order/upgrade/logs/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/sslGateway/#serviceName#
  Get a provisional order for the selected upgrade of your service
  **/
  public get(path: '/order/upgrade/sslGateway/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/sslGateway
  Retrieve available offers to upgrade your service to
  **/
  public get(path: '/order/upgrade/sslGateway/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Operations about the SSLGATEWAY service
  List available services
  **/
  public get(path: '/order/upgrade/sslGateway'): Promise<string[]>;
  /**
  Listing offers /order/upgrade/privateCloud/#serviceName#
  Get a provisional order for the selected upgrade of your service
  **/
  public get(path: '/order/upgrade/privateCloud/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/privateCloud
  Retrieve available offers to upgrade your service to
  **/
  public get(path: '/order/upgrade/privateCloud/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Operations about the PCC service
  List available services
  **/
  public get(path: '/order/upgrade/privateCloud'): Promise<string[]>;
  /**
  Operations about the DEDICATED-OPTION service
  List available services
  **/
  public get(path: '/order/upgrade/baremetalPrivateBandwidth'): Promise<string[]>;
  /**
  Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName#
  Get a provisional order for the selected upgrade of your service
  **/
  public get(path: '/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/baremetalPrivateBandwidth
  Retrieve available offers to upgrade your service to
  **/
  public get(path: '/order/upgrade/baremetalPrivateBandwidth/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Operations about the METRICS service
  List available services
  **/
  public get(path: '/order/upgrade/metrics'): Promise<string[]>;
  /**
  Listing offers /order/upgrade/metrics/#serviceName#
  Get a provisional order for the selected upgrade of your service
  **/
  public get(path: '/order/upgrade/metrics/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/metrics
  Retrieve available offers to upgrade your service to
  **/
  public get(path: '/order/upgrade/metrics/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Operations about the CEPH service
  List available services
  **/
  public get(path: '/order/upgrade/cephaas'): Promise<string[]>;
  /**
  Listing offers /order/upgrade/cephaas/#serviceName#
  Get a provisional order for the selected upgrade of your service
  **/
  public get(path: '/order/upgrade/cephaas/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/cephaas
  Retrieve available offers to upgrade your service to
  **/
  public get(path: '/order/upgrade/cephaas/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName#
  Get a provisional order for the selected upgrade of your service
  **/
  public get(path: '/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}, queryParams: {quantity?: Number}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/baremetalPublicBandwidth
  Retrieve available offers to upgrade your service to
  **/
  public get(path: '/order/upgrade/baremetalPublicBandwidth/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartGenericProductDefinition[]>;
  /**
  Operations about the DEDICATED-OPTION service
  List available services
  **/
  public get(path: '/order/upgrade/baremetalPublicBandwidth'): Promise<string[]>;
  /**
  Order router vpn
  Get prices and contracts information
  **/
  public get(path: '/order/router/new/{duration}', pathParams: {duration: string}, queryParams: {vrack?: string}): Promise<OrderOrder>;
  /**
  Order router vpn
  Get allowed durations for 'new' option
  **/
  public get(path: '/order/router/new', pathParams: null, queryParams: {vrack?: string}): Promise<string[]>;
  public get(path: PathsOrderGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Missing description
  Update some values on a cart item
  **/
  public put(path: '/order/cart/{cartId}/item/{itemId}', pathParams: {cartId: string, itemId: Number}): Promise<OrderCartItem>;
  /**
  Missing description
  Modify information about a specific cart
  **/
  public put(path: '/order/cart/{cartId}', pathParams: {cartId: string}): Promise<OrderCartCart>;
  public put(path: PathsOrderPUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Purchase spare modem
  Create order
  **/
  public post(path: '/order/xdsl/spare/new'): Promise<OrderOrder>;
  /**
  Create an order for a new office tenant
  Create order
  **/
  public post(path: '/order/saas/csp2/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Order additional disk
  Create order
  **/
  public post(path: '/order/vps/{serviceName}/additionalDisk/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Upgrade
  Create order
  **/
  public post(path: '/order/vps/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Windows Option (2015 only)
  Create order
  **/
  public post(path: '/order/vps/{serviceName}/windows/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Snapshot Option
  Create order
  **/
  public post(path: '/order/vps/{serviceName}/snapshot/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Veeam Option
  Create order
  **/
  public post(path: '/order/vps/{serviceName}/veeam/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Automated Backup Option (vps Cloud only)
  Create order
  **/
  public post(path: '/order/vps/{serviceName}/automatedBackup/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order FtpBackup Option
  Create order
  **/
  public post(path: '/order/vps/{serviceName}/ftpbackup/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Additional IP
  Create order
  **/
  public post(path: '/order/vps/{serviceName}/ip/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Create an order for a PLESK license
  Create order
  **/
  public post(path: '/order/vps/{serviceName}/plesk/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Create an order for a cPanel license
  Create order
  **/
  public post(path: '/order/vps/{serviceName}/cpanel/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order an APC for this bay
  Create order
  **/
  public post(path: '/order/dedicated/housing/{serviceName}/APC/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a new Nas HA
  Create order
  **/
  public post(path: '/order/dedicated/nasha/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Order an USB key for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/usbKey/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/ipMigration/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order additionall traffic for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/traffic/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order vRack bandwidth for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a failover IP for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/failoverIP/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order professional use option
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/professionalUse/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a static IP for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/staticIP/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a backup storage for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/backupStorage/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a feature for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/feature/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a kvmip express for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/kvmExpress/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a kvm for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/kvm/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  order a Firewall for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/firewall/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order bandwidth for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/bandwidth/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order IP for this server
  Create order
  **/
  public post(path: '/order/dedicated/server/{serviceName}/ip/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Anycast
  Create order
  **/
  public post(path: '/order/domain/zone/{zoneName}/dnsAnycast/{duration}', pathParams: {zoneName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a new DNS zone
  Create order
  **/
  public post(path: '/order/domain/zone/new'): Promise<OrderOrder>;
  /**
  Order a phone for this specific line
  Create order
  **/
  public post(path: '/order/telephony/lines/{serviceName}/hardware', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Add extra simultaneous lines for a specifical line
  Create order
  **/
  public post(path: '/order/telephony/lines/{serviceName}/addSimultaneousLines', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Update extra simultaneous channels for a specifical service to the requested amount
  Create order
  **/
  public post(path: '/order/telephony/lines/{serviceName}/updateSimultaneousChannels', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Purchase a new standard alias number
  Create order
  **/
  public post(path: '/order/telephony/{billingAccount}/numberNogeographic', pathParams: {billingAccount: string}): Promise<OrderOrder>;
  /**
  Purchase a new standard alias number
  Create order
  **/
  public post(path: '/order/telephony/{billingAccount}/numberSpecial', pathParams: {billingAccount: string}): Promise<OrderOrder>;
  /**
  Purchase new accessories
  Create order
  **/
  public post(path: '/order/telephony/{billingAccount}/accessories', pathParams: {billingAccount: string}): Promise<OrderOrder>;
  /**
  Order a new portability
  Create order
  **/
  public post(path: '/order/telephony/{billingAccount}/portability', pathParams: {billingAccount: string}): Promise<OrderOrder>;
  /**
  Purchase a new line offer
  Create order
  **/
  public post(path: '/order/telephony/{billingAccount}/line', pathParams: {billingAccount: string}): Promise<OrderOrder>;
  /**
  Purchase a new standard alias number
  Create order
  **/
  public post(path: '/order/telephony/{billingAccount}/numberGeographic', pathParams: {billingAccount: string}): Promise<OrderOrder>;
  /**
  Credit security deposit
  Create order
  **/
  public post(path: '/order/telephony/{billingAccount}/securityDeposit', pathParams: {billingAccount: string}): Promise<OrderOrder>;
  /**
  Order a phone for this specific line
  Create order
  **/
  public post(path: '/order/telephony/trunks/{serviceName}/hardware', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Add extra simultaneous lines for a specifical line
  Create order
  **/
  public post(path: '/order/telephony/trunks/{serviceName}/addSimultaneousLines', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Update extra simultaneous channels for a specifical service to the requested amount
  Create order
  **/
  public post(path: '/order/telephony/trunks/{serviceName}/updateSimultaneousChannels', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Purchase spare phone
  Create order
  **/
  public post(path: '/order/telephony/spare/new'): Promise<OrderOrder>;
  /**
  Purchase a new billing account
  Create order
  **/
  public post(path: '/order/telephony/new'): Promise<OrderOrder>;
  /**
  Order credits on an existing SMS account
  Create order
  **/
  public post(path: '/order/sms/{serviceName}/credits', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Create and credit a new SMS Account
  Create order
  **/
  public post(path: '/order/sms/new'): Promise<OrderOrder>;
  /**
  Create an order for an exchange account
  Create order
  **/
  public post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}', pathParams: {organizationName: string, exchangeService: string, duration: string}): Promise<OrderOrder>;
  /**
  Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016)
  Create order
  **/
  public post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade', pathParams: {organizationName: string, exchangeService: string}): Promise<OrderOrder>;
  /**
  Create an order for a outlook licence.
  Create order
  **/
  public post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}', pathParams: {organizationName: string, exchangeService: string, duration: string}): Promise<OrderOrder>;
  /**
  Create an order for a additional 50GB of space (Exchange 2010 reseller only)
  Create order
  **/
  public post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace', pathParams: {organizationName: string, exchangeService: string}): Promise<OrderOrder>;
  /**
  Create an order to upgrade your hosted account storage
  Create order
  **/
  public post(path: '/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}', pathParams: {organizationName: string, exchangeService: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a new mx plan
  Create order
  **/
  public post(path: '/order/email/domain/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Create an order for a pro account
  Create order
  **/
  public post(path: '/order/email/pro/{service}/account/{duration}', pathParams: {service: string, duration: string}): Promise<OrderOrder>;
  /**
  Create an order to upgrade your overTheBox service
  Create order
  **/
  public post(path: '/order/overTheBox/{serviceName}/migrate', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Subscribe to overTheBox service
  Create order
  **/
  public post(path: '/order/overTheBox/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Order additional bandwidth
  Create order
  **/
  public post(path: '/order/hosting/web/{serviceName}/bandwidth/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Create an order for cdn option
  Create order
  **/
  public post(path: '/order/hosting/web/{serviceName}/cdn/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Create an order for upgrade your hosting account
  Create order
  **/
  public post(path: '/order/hosting/web/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Create an order for hosted ssl option
  Create order
  **/
  public post(path: '/order/hosting/web/{serviceName}/ssl/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Create an order for extra sql perso
  Create order
  **/
  public post(path: '/order/hosting/web/{serviceName}/extraSqlPerso/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Create an order for change the hosting main domain
  Create order
  **/
  public post(path: '/order/hosting/web/{serviceName}/changeMainDomain/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a new hosting account
  Create order
  **/
  public post(path: '/order/hosting/web/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Create an order for change ram size on your private database
  Create order
  **/
  public post(path: '/order/hosting/privateDatabase/{serviceName}/ram/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order new private database
  Create order
  **/
  public post(path: '/order/hosting/privateDatabase/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Listing offers /order/cartServiceOptions/office365/#serviceName#
  Post an additional Office option in your cart
  **/
  public post(path: '/order/cartServiceOption/office365Prepaid/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/dedicated/#serviceName#
  Post an additional dedicated option in your cart
  **/
  public post(path: '/order/cartServiceOption/dedicated/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/domain/#serviceName#
  Post an additional Domain option in your cart
  **/
  public post(path: '/order/cartServiceOption/domain/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/logs/#serviceName#
  Post an additional Logs option in your cart
  **/
  public post(path: '/order/cartServiceOption/logs/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/emailpro/#serviceName#
  Post an additional EmailPro option in your cart
  **/
  public post(path: '/order/cartServiceOption/emailpro/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/microsoftExchange/#serviceName#
  Post an additional Microsoft option in your cart
  **/
  public post(path: '/order/cartServiceOption/microsoftExchange/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName#
  Post an additional IP Load-Balancing option in your cart
  **/
  public post(path: '/order/cartServiceOption/ipLoadbalancing/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/cloud/#serviceName#
  Post an additional Cloud option in your cart
  **/
  public post(path: '/order/cartServiceOption/cloud/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName#
  Post an additional Private Cloud option in your cart
  **/
  public post(path: '/order/cartServiceOption/privateCloudReseller/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/microsoft/#serviceName#
  Post an additional Microsoft option in your cart
  **/
  public post(path: '/order/cartServiceOption/microsoft/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/vdi/#serviceName#
  Post an additional Horizon View option in your cart
  **/
  public post(path: '/order/cartServiceOption/vdi/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName#
  Post an additional Private Cloud Enterprise option in your cart
  **/
  public post(path: '/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/sslGateway/#serviceName#
  Post an additional SSL Gateway option in your cart
  **/
  public post(path: '/order/cartServiceOption/sslGateway/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/privateCloud/#serviceName#
  Post an additional Private Cloud option in your cart
  **/
  public post(path: '/order/cartServiceOption/privateCloud/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/sharepoint/#serviceName#
  Post an additional Sharepoint option in your cart
  **/
  public post(path: '/order/cartServiceOption/sharepoint/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Listing offers /order/cartServiceOptions/webHosting/#serviceName#
  Post an additional Web Hosting option in your cart
  **/
  public post(path: '/order/cartServiceOption/webHosting/{serviceName}', pathParams: {serviceName: string}): Promise<OrderCartItem>;
  /**
  Enable windows templates (SPLA) in your Private Cloud
  Create order
  **/
  public post(path: '/order/dedicatedCloud/{serviceName}/spla', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)
  Create order
  **/
  public post(path: '/order/dedicatedCloud/{serviceName}/filer/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order additional bandwidth in your Private Cloud
  Create order
  **/
  public post(path: '/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month
  Create order
  **/
  public post(path: '/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order VDI option in a given Datacenter
  Create order
  **/
  public post(path: '/order/dedicatedCloud/{serviceName}/vdi', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)
  Create order
  **/
  public post(path: '/order/dedicatedCloud/{serviceName}/host/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order an IP block for your Private Cloud
  Create order
  **/
  public post(path: '/order/dedicatedCloud/{serviceName}/ip/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Upgrade this license with some given options
  Create order
  **/
  public post(path: '/order/license/windows/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Create order
  **/
  public post(path: '/order/license/windows/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Upgrade this license with some given options
  Create order
  **/
  public post(path: '/order/license/virtuozzo/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Create order
  **/
  public post(path: '/order/license/virtuozzo/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Upgrade this license with some given options
  Create order
  **/
  public post(path: '/order/license/plesk/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Create order
  **/
  public post(path: '/order/license/plesk/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Create an order for an new office tenant
  Create order
  **/
  public post(path: '/order/license/office/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Upgrade this license with some given options
  Create order
  **/
  public post(path: '/order/license/sqlserver/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Create order
  **/
  public post(path: '/order/license/sqlserver/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Create order
  **/
  public post(path: '/order/license/cpanel/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Create order
  **/
  public post(path: '/order/license/worklight/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Upgrade this license with some given options
  Create order
  **/
  public post(path: '/order/license/worklight/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Create order
  **/
  public post(path: '/order/license/directadmin/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Order a new license on a given Ip with some given options
  Create order
  **/
  public post(path: '/order/license/cloudLinux/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Credit freefax account pages
  Create order
  **/
  public post(path: '/order/freefax/new'): Promise<OrderOrder>;
  /**
  Convert the freefax service to a /telephony voicefax service
  Create order
  **/
  public post(path: '/order/freefax/{serviceName}/convertToVoicefax', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Order failover ip on your Cloud project
  Create order
  **/
  public post(path: '/order/cloud/project/{serviceName}/ip', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Order credit usable on your Cloud project
  Create order
  **/
  public post(path: '/order/cloud/project/{serviceName}/credit', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Order a HPC Spot Account
  Create order
  **/
  public post(path: '/order/hpcspot/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Order an upgrade upon your Veeam Cloud Connect account
  Create order
  **/
  public post(path: '/order/veeamCloudConnect/{serviceName}/upgrade/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order new vrack
  Create order
  **/
  public post(path: '/order/vrack/new'): Promise<OrderOrder>;
  /**
  Upgrade Storage Option
  Create order
  **/
  public post(path: '/order/cdn/webstorage/{serviceName}/storage/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Traffic
  Create order
  **/
  public post(path: '/order/cdn/webstorage/{serviceName}/traffic', pathParams: {serviceName: string}): Promise<OrderOrder>;
  /**
  Order a New Dedicated CDN Service
  Create order
  **/
  public post(path: '/order/cdn/dedicated/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  /**
  Order Quota
  Create order
  **/
  public post(path: '/order/cdn/dedicated/{serviceName}/quota/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Order Backend Option
  Create order
  **/
  public post(path: '/order/cdn/dedicated/{serviceName}/backend/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Upgrade cacheRule Option
  Create order
  **/
  public post(path: '/order/cdn/dedicated/{serviceName}/cacheRule/{duration}', pathParams: {serviceName: string, duration: string}): Promise<OrderOrder>;
  /**
  Missing description
  Post a new IP Load-Balancing item in your cart
  **/
  public post(path: '/order/cart/{cartId}/ipLoadbalancing', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new IP Load-Balancing option in your cart
  **/
  public post(path: '/order/cart/{cartId}/ipLoadbalancing/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Office 365 option in your cart
  **/
  public post(path: '/order/cart/{cartId}/office365/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Office 365 item in your cart
  **/
  public post(path: '/order/cart/{cartId}/office365', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Private Cloud Reseller item in your cart
  **/
  public post(path: '/order/cart/{cartId}/privateCloudReseller', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Private Cloud Reseller option in your cart
  **/
  public post(path: '/order/cart/{cartId}/privateCloudReseller/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new SqlServer license item in your cart
  **/
  public post(path: '/order/cart/{cartId}/licenseSqlServer', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Cloud Web option in your cart
  **/
  public post(path: '/order/cart/{cartId}/cloudweb/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Cloud Web item in your cart
  **/
  public post(path: '/order/cart/{cartId}/cloudweb', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Veeam Cloud Connect option in your cart
  **/
  public post(path: '/order/cart/{cartId}/veeamcc/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Veeam Cloud Connect item in your cart
  **/
  public post(path: '/order/cart/{cartId}/veeamcc', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Exchange Enterprise item in your cart
  **/
  public post(path: '/order/cart/{cartId}/exchangeEnterprise', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Exchange Enterprise option in your cart
  **/
  public post(path: '/order/cart/{cartId}/exchangeEnterprise/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new SSL Gateway option in your cart
  **/
  public post(path: '/order/cart/{cartId}/sslGateway/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new SSL Gateway item in your cart
  **/
  public post(path: '/order/cart/{cartId}/sslGateway', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new domain tranfer in your cart
  **/
  public post(path: '/order/cart/{cartId}/domainTransfer', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new domain name transfer option in your cart
  **/
  public post(path: '/order/cart/{cartId}/domainTransfer/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Domain Packs item (AllDom) in your cart
  **/
  public post(path: '/order/cart/{cartId}/domainPacks', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new timeseries offer item in your cart
  **/
  public post(path: '/order/cart/{cartId}/dbaasTimeseries', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new vRack item in your cart
  **/
  public post(path: '/order/cart/{cartId}/vrackReseller', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Logs item in your cart
  **/
  public post(path: '/order/cart/{cartId}/logs', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Logs option in your cart
  **/
  public post(path: '/order/cart/{cartId}/logs/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Setup configuration item for the product
  **/
  public post(path: '/order/cart/{cartId}/item/{itemId}/configuration', pathParams: {cartId: string, itemId: Number}): Promise<OrderCartConfigurationItem>;
  /**
  Missing description
  Add a new coupon to cart
  **/
  public post(path: '/order/cart/{cartId}/coupon', pathParams: {cartId: string}): Promise<string[]>;
  /**
  Missing description
  Post a new Veeam Enterprise item in your cart
  **/
  public post(path: '/order/cart/{cartId}/veeamEnterprise', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Veeam Enterprise option in your cart
  **/
  public post(path: '/order/cart/{cartId}/veeamEnterprise/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Virtuozzo license item in your cart
  **/
  public post(path: '/order/cart/{cartId}/licenseVirtuozzo', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new PaaS Monitoring item in your cart
  **/
  public post(path: '/order/cart/{cartId}/paasmon', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Microsoft option in your cart
  **/
  public post(path: '/order/cart/{cartId}/microsoft/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Microsoft offer item in your cart
  **/
  public post(path: '/order/cart/{cartId}/microsoft', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new IP addresses option in your cart
  **/
  public post(path: '/order/cart/{cartId}/ip/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new IP addresses item in your cart
  **/
  public post(path: '/order/cart/{cartId}/ip', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Plesk license item in your cart
  **/
  public post(path: '/order/cart/{cartId}/licensePlesk', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Plesk license option in your cart
  **/
  public post(path: '/order/cart/{cartId}/licensePlesk/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Worklight license item in your cart
  **/
  public post(path: '/order/cart/{cartId}/licenseWorklight', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Reseller offer item in your cart
  **/
  public post(path: '/order/cart/{cartId}/reseller', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Private Cloud SDDC option in your cart
  **/
  public post(path: '/order/cart/{cartId}/privateCloudSDDC/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Private Cloud SDDC item in your cart
  **/
  public post(path: '/order/cart/{cartId}/privateCloudSDDC', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new domain name option in your cart
  **/
  public post(path: '/order/cart/{cartId}/domain/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new domain in your cart
  **/
  public post(path: '/order/cart/{cartId}/domain', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new dedicated server item in your cart
  **/
  public post(path: '/order/cart/{cartId}/dedicatedReseller', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new dedicated server option in your cart
  **/
  public post(path: '/order/cart/{cartId}/dedicatedReseller/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Private Cloud CDI item in your cart
  **/
  public post(path: '/order/cart/{cartId}/privateCloudCDI', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Private Cloud CDI option in your cart
  **/
  public post(path: '/order/cart/{cartId}/privateCloudCDI/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new SMS item in your cart
  **/
  public post(path: '/order/cart/{cartId}/sms', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new vRack item in your cart
  **/
  public post(path: '/order/cart/{cartId}/vrack', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Windows license item in your cart
  **/
  public post(path: '/order/cart/{cartId}/licenseWindows', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Sharepoint offer item in your cart
  **/
  public post(path: '/order/cart/{cartId}/sharepoint', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Sharepoint option in your cart
  **/
  public post(path: '/order/cart/{cartId}/sharepoint/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new dedicated labs server option in your cart
  **/
  public post(path: '/order/cart/{cartId}/dedicatedLabs/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new dedicated labs server item in your cart
  **/
  public post(path: '/order/cart/{cartId}/dedicatedLabs', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Exchange option in your cart
  **/
  public post(path: '/order/cart/{cartId}/exchange/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Exchange item in your cart
  **/
  public post(path: '/order/cart/{cartId}/exchange', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new CloudLinux license item in your cart
  **/
  public post(path: '/order/cart/{cartId}/licenseCloudLinux', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new NAS HA option in your cart
  **/
  public post(path: '/order/cart/{cartId}/nasha/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new NAS HA item in your cart
  **/
  public post(path: '/order/cart/{cartId}/nasha', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new DNS zone item in your cart
  **/
  public post(path: '/order/cart/{cartId}/dns', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Managed Services option in your cart
  **/
  public post(path: '/order/cart/{cartId}/managedServices/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Managed Services item in your cart
  **/
  public post(path: '/order/cart/{cartId}/managedServices', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Ceph as a Service option in your cart
  **/
  public post(path: '/order/cart/{cartId}/cephaas/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Ceph as a Service item in your cart
  **/
  public post(path: '/order/cart/{cartId}/cephaas', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Horizon View item in your cart
  **/
  public post(path: '/order/cart/{cartId}/vdi', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Horizon View option in your cart
  **/
  public post(path: '/order/cart/{cartId}/vdi/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Dedicated Discover server item in your cart
  **/
  public post(path: '/order/cart/{cartId}/discover', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Dedicated Discover server option in your cart
  **/
  public post(path: '/order/cart/{cartId}/discover/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Directadmin license item in your cart
  **/
  public post(path: '/order/cart/{cartId}/licenseDirectadmin', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Desk as a service item in your cart
  **/
  public post(path: '/order/cart/{cartId}/deskaas', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Hosting Reseller item in your cart
  **/
  public post(path: '/order/cart/{cartId}/hostingReseller', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Private Cloud Reseller Enterprise option in your cart
  **/
  public post(path: '/order/cart/{cartId}/privateCloudResellerEnterprise/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Private Cloud Reseller Enterprise item in your cart
  **/
  public post(path: '/order/cart/{cartId}/privateCloudResellerEnterprise', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new baremetal server item in your cart
  **/
  public post(path: '/order/cart/{cartId}/baremetalServers', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new baremetal server option in your cart
  **/
  public post(path: '/order/cart/{cartId}/baremetalServers/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new EmailPro option in your cart
  **/
  public post(path: '/order/cart/{cartId}/emailpro/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new EmailPro item in your cart
  **/
  public post(path: '/order/cart/{cartId}/emailpro', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Public Cloud item in your cart
  **/
  public post(path: '/order/cart/{cartId}/cloud', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Public Cloud option in your cart
  **/
  public post(path: '/order/cart/{cartId}/cloud/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Private Cloud Dedicated Cloud item in your cart
  **/
  public post(path: '/order/cart/{cartId}/privateCloudDC', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Private Cloud Dedicated Cloud option in your cart
  **/
  public post(path: '/order/cart/{cartId}/privateCloudDC/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Over The Box item in your cart
  **/
  public post(path: '/order/cart/{cartId}/otb', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Over The Box option in your cart
  **/
  public post(path: '/order/cart/{cartId}/otb/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  List of OVHcloud Connect product
  Post a new OVHcloud Connect item in your cart
  **/
  public post(path: '/order/cart/{cartId}/ovhCloudConnect', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new VoIP option in your cart
  **/
  public post(path: '/order/cart/{cartId}/telephony/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new VoIP item in your cart
  **/
  public post(path: '/order/cart/{cartId}/telephony', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Office 365 Prepaid item in your cart
  **/
  public post(path: '/order/cart/{cartId}/office365Prepaid', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Office 365 Prepaid option in your cart
  **/
  public post(path: '/order/cart/{cartId}/office365Prepaid/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  List of xdsl product
  Post a new xdsl item in your cart
  **/
  public post(path: '/order/cart/{cartId}/xdsl', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  List of xdsl addon
  Post a new xdsl option in your cart
  **/
  public post(path: '/order/cart/{cartId}/xdsl/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new VPS item in your cart
  **/
  public post(path: '/order/cart/{cartId}/vps', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new VPS option in your cart
  **/
  public post(path: '/order/cart/{cartId}/vps/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new dedicated server item in your cart
  **/
  public post(path: '/order/cart/{cartId}/dedicated', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new dedicated server option in your cart
  **/
  public post(path: '/order/cart/{cartId}/dedicated/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Kubernetes option in your cart
  **/
  public post(path: '/order/cart/{cartId}/kubernetes/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Kubernetes item in your cart
  **/
  public post(path: '/order/cart/{cartId}/kubernetes', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new CDN item in your cart
  **/
  public post(path: '/order/cart/{cartId}/cdn', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new CDN option in your cart
  **/
  public post(path: '/order/cart/{cartId}/cdn/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new webHosting item in your cart
  **/
  public post(path: '/order/cart/{cartId}/webHosting', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new webHosting option in your cart
  **/
  public post(path: '/order/cart/{cartId}/webHosting/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Validate your shopping and create order
  **/
  public post(path: '/order/cart/{cartId}/checkout', pathParams: {cartId: string}): Promise<OrderOrder>;
  /**
  Missing description
  Post a new SSL Comodo item in your cart
  **/
  public post(path: '/order/cart/{cartId}/sslComodo', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new SSL Comodo option in your cart
  **/
  public post(path: '/order/cart/{cartId}/sslComodo/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Metrics item in your cart
  **/
  public post(path: '/order/cart/{cartId}/metrics', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new Metrics option in your cart
  **/
  public post(path: '/order/cart/{cartId}/metrics/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new SaaS CSP2 option in your cart
  **/
  public post(path: '/order/cart/{cartId}/csp2/options', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new SaaS CSP2 offer item in your cart
  **/
  public post(path: '/order/cart/{cartId}/csp2', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  List of OVHcloud Connect product
  Post a new OVHcloud Connect item in your cart
  **/
  public post(path: '/order/cart/{cartId}/vco', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Post a new cPanel license item in your cart
  **/
  public post(path: '/order/cart/{cartId}/licensecPanel', pathParams: {cartId: string}): Promise<OrderCartItem>;
  /**
  Missing description
  Assign a shopping cart to an loggedin client
  **/
  public post(path: '/order/cart/{cartId}/assign', pathParams: {cartId: string}): Promise<void>;
  /**
  Missing description
  Create a new OVH order cart
  **/
  public post(path: '/order/cart'): Promise<OrderCartCart>;
  /**
  Listing offers /order/upgrade/microsoftExchange/#serviceName#
  Perform the requested upgrade of your service
  **/
  public post(path: '/order/upgrade/microsoftExchange/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/ipLoadbalancing/#serviceName#
  Perform the requested upgrade of your service
  **/
  public post(path: '/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/logs/#serviceName#
  Perform the requested upgrade of your service
  **/
  public post(path: '/order/upgrade/logs/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/sslGateway/#serviceName#
  Perform the requested upgrade of your service
  **/
  public post(path: '/order/upgrade/sslGateway/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/privateCloud/#serviceName#
  Perform the requested upgrade of your service
  **/
  public post(path: '/order/upgrade/privateCloud/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName#
  Perform the requested upgrade of your service
  **/
  public post(path: '/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/metrics/#serviceName#
  Perform the requested upgrade of your service
  **/
  public post(path: '/order/upgrade/metrics/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/cephaas/#serviceName#
  Perform the requested upgrade of your service
  **/
  public post(path: '/order/upgrade/cephaas/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName#
  Perform the requested upgrade of your service
  **/
  public post(path: '/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}', pathParams: {planCode: string, serviceName: string}): Promise<OrderUpgradeOperationAndOrder>;
  /**
  Order router vpn
  Create order
  **/
  public post(path: '/order/router/new/{duration}', pathParams: {duration: string}): Promise<OrderOrder>;
  public post(path: PathsOrderPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Missing description
  Delete configuration item
  **/
  public delete(path: '/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}', pathParams: {cartId: string, itemId: Number, configurationId: Number}): Promise<void>;
  /**
  Missing description
  Delete an item from a cart
  **/
  public delete(path: '/order/cart/{cartId}/item/{itemId}', pathParams: {cartId: string, itemId: Number}): Promise<void>;
  /**
  Missing description
  Delete a coupon from cart
  **/
  public delete(path: '/order/cart/{cartId}/coupon', pathParams: {cartId: string}, bodyParams: {coupon?: string}): Promise<void>;
  /**
  Missing description
  Delete a cart
  **/
  public delete(path: '/order/cart/{cartId}', pathParams: {cartId: string}): Promise<void>;
  public delete(path: PathsOrderDELETE, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
