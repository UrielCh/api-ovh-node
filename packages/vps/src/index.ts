import { ApiCommon } from '@ovh-api/common';
/**
 * A value set tagged with its unit
 */
export interface ComplexTypeUnitAndValues<T> {
  /**
   */
  unit?: string;
  /**
   */
  values?: T[];
}
/**
 * All type a VPS task can be
 */
export type VpsTaskTypeEnum = 'addVeeamBackupJob' | 'changeRootPassword' | 'createSnapshot' | 'deleteSnapshot' | 'deliverVm' | 'getConsoleUrl' | 'internalTask' | 'openConsoleAccess' | 'provisioningAdditionalIp' | 'reOpenVm' | 'rebootVm' | 'reinstallVm' | 'removeVeeamBackup' | 'restoreFullVeeamBackup' | 'restoreVeeamBackup' | 'restoreVm' | 'revertSnapshot' | 'setMonitoring' | 'setNetboot' | 'startVm' | 'stopVm' | 'upgradeVm';
/**
 * All supported VNC protocols by VPS
 */
export type VpsVncProtocolEnum = 'VNC' | 'VNCOverWebSocket';
/**
 * All states a VPS task can be in
 */
export type VpsTaskStateEnum = 'blocked' | 'cancelled' | 'doing' | 'done' | 'error' | 'paused' | 'todo' | 'waitingAck';
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * Backup your VPS
 */
export interface VpsAutomatedBackup {
  /**
   * Scheduled time of your daily backup
   *
   */
  schedule?: Date;
  /**
   * Backup state
   *
   */
  state?: VpsBackupStateEnum;
}
/**
 * Possible states the disk can be in
 */
export type VpsDiskStateEnum = 'connected' | 'disconnected' | 'pending';
/**
 * Informations about a VPS Veeam backups
 */
export interface VpsVeeam {
  /**
   * Backup state
   *
   */
  backup?: boolean;
}
/**
 * All values keymap can be in
 */
export type VpsVpsKeymapEnum = 'fr' | 'us';
/**
 * All offers a VPS can have
 */
export type VpsVpsOfferEnum = 'beta-classic' | 'classic' | 'cloud' | 'cloudram' | 'game-classic' | 'lowlat' | 'ssd';
/**
 * Operation on a VPS Virtual Machine
 */
export interface VpsTask {
  /**
   */
  progress?: Number;
  /**
   */
  state?: VpsTaskStateEnum;
  /**
   */
  id?: Number;
  /**
   */
  type?: VpsTaskTypeEnum;
}
/**
 * Ip versions
 */
export type CoreTypesIpVersionEnum = 'v4' | 'v6';
/**
 * Informations about a VPS Veeam restore points
 */
export interface VpsVeeamRestorePoint {
  /**
   * The restore point's creation time
   *
   */
  creationTime?: Date;
  /**
   * The restore point's id
   *
   */
  id?: Number;
}
/**
 * Available restore types
 */
export type VpsRestoreTypeEnum = 'file' | 'full';
/**
 * Possible states of a service (ping, port)
 */
export type VpsIpServiceStatusStateEnum = 'down' | 'up';
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
 * All states a VPS can be in
 */
export type VpsVpsStateEnum = 'installing' | 'maintenance' | 'rebooting' | 'running' | 'stopped' | 'stopping' | 'upgrading';
/**
 * Installation template for a VPS Virtual Machine
 */
export interface VpsTemplate {
  /**
   */
  bitFormat?: VpsTemplateBitFormatEnum;
  /**
   */
  name?: string;
  /**
   */
  id?: Number;
  /**
   */
  distribution?: string;
  /**
   */
  locale?: string;
  /**
   */
  availableLanguage?: string[];
}
/**
 * A structure describing a Veeam backup's access informations
 */
export interface VpsVeeamInfos {
  /**
   * SMB URL of the backup
   *
   */
  smb?: string;
  /**
   * NFS URL of the backup
   *
   */
  nfs?: string;
}
/**
 * Possible type a disk can be in
 */
export type VpsDiskTypeEnum = 'additional' | 'primary';
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
 * Available softwares on a Template
 */
export interface VpsSoftware {
  /**
   */
  name?: string;
  /**
   */
  id?: Number;
  /**
   */
  type?: VpsSoftwareTypeEnum;
  /**
   */
  status?: VpsSoftwareStatusEnum;
}
/**
 * Backup Ftp assigned to this VPS
 */
export interface VpsBackupFtp {
  /**
   * If not-null, gives the date since when your account was set in read-only mode because the quota was exceeded
   *
   */
  readOnlyDate?: Date;
  /**
   * The disk space available on your backup FTP
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * The disk space currently used on your backup FTP
   *
   */
  usage?: ComplexTypeUnitAndValue<Number>;
  /**
   * The backup FTP server name
   *
   */
  ftpBackupName?: string;
  /**
   * The backup FTP type
   *
   */
  type?: string;
}
/**
 * All options a VPS can have
 */
export type VpsVpsOptionEnum = 'additionalDisk' | 'automatedBackup' | 'cpanel' | 'ftpbackup' | 'plesk' | 'snapshot' | 'veeam' | 'windows';
/**
 * Geolocation of the IP Address
 */
export type VpsIpGeolocationEnum = 'au' | 'be' | 'ca' | 'cz' | 'de' | 'es' | 'fi' | 'fr' | 'ie' | 'it' | 'lt' | 'nl' | 'pl' | 'pt' | 'sg' | 'uk' | 'us';
/**
 * Installation image for a VPS
 */
export interface VpsImage {
  /**
   */
  name?: string;
  /**
   */
  id?: string;
}
/**
 * Bitness of a VPS template
 */
export type VpsTemplateBitFormatEnum = 32 | 64;
/**
 * Information about the snapshot of a VPS Virtual Machine
 */
export interface VpsSnapshot {
  /**
   */
  description?: string;
  /**
   */
  creationDate?: Date;
}
/**
 * Available types for the Disk monitoring and use
 */
export type VpsDiskStatisticTypeEnum = 'max' | 'used';
/**
 * Available types for the VPS monitoring and use
 */
export type VpsVpsStatisticTypeEnum = 'cpu:iowait' | 'cpu:max' | 'cpu:nice' | 'cpu:sys' | 'cpu:used' | 'cpu:user' | 'mem:max' | 'mem:used' | 'net:rx' | 'net:tx';
/**
 * A backup attached to your VPS
 */
export interface VpsAutomatedBackupAttached {
  /**
   */
  restorePoint?: Date;
  /**
   */
  access?: VpsAutomatedBackupAttachedInfos;
}
/**
 * All states a VPS Option can be in
 */
export type VpsVpsOptionStateEnum = 'released' | 'subscribed';
/**
 * A timestamp associated to a value
 */
export interface VpsVpsTimestampValue {
  /**
   */
  value?: Number;
  /**
   */
  timestamp?: Number;
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
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * A VNC connection informations
 */
export interface VpsVnc {
  /**
   */
  password?: string;
  /**
   */
  port?: Number;
  /**
   */
  host?: string;
}
/**
 * A structure describing characteristics of a VPS model
 */
export interface VpsModel {
  /**
   */
  offer?: string;
  /**
   */
  disk?: Number;
  /**
   */
  memory?: Number;
  /**
   */
  name?: string;
  /**
   */
  vcore?: Number;
  /**
   */
  datacenter?: string[];
  /**
   */
  maximumAdditionnalIp?: Number;
  /**
   */
  version?: VpsVpsVersionEnum;
  /**
   */
  availableOptions?: VpsVpsOptionEnum[];
}
/**
 * Currently restored backup
 */
export interface VpsVeeamRestoredBackup {
  /**
   * The restored backup state
   *
   */
  state?: VpsVeeamStateEnum;
  /**
   * The restore point id
   *
   */
  restorePointId?: Number;
  /**
   * Backup access informations
   *
   */
  accessInfos?: VpsVeeamInfos;
}
/**
 * different task status
 */
export type DedicatedTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
/**
 * A structure describing informations about available nameserver for secondary dns 
 */
export interface SecondaryDnsSecondaryDNSNameServer {
  /**
   * the name server
   *
   */
  hostname?: string;
  /**
   */
  ipv6?: string;
  /**
   */
  ip?: string;
}
/**
 * Available Type for a vps Software
 */
export type VpsSoftwareTypeEnum = 'database' | 'environment' | 'webserver';
/**
 * Description not available
 */
export interface VpsMigrationMigration {
  /**
   * The planned date of the migration
   *
   */
  date?: Date;
  /**
   * Migration Id
   *
   */
  id?: string;
}
/**
 * Countries a nichandle can choose
 */
export type NichandleCountryEnum = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DG' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EA' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'IC' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'UNKNOWN' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';
/**
 * VPS billing version
 */
export interface VpsVpsBillingVersion {
  /**
   */
  version?: Number;
}
/**
 * Available Status for a vps Software
 */
export type VpsSoftwareStatusEnum = 'deprecated' | 'stable' | 'testing';
/**
 * VPS Virtual Machine
 */
export interface VpsVPS {
  /**
   * Ip blocks for OVH monitoring servers
   *
   */
  monitoringIpBlocks?: string[];
  /**
   */
  cluster?: string;
  /**
   * Set KVM keyboard layout on VPS Cloud. Reboot your VPS after change
   *
   */
  keymap?: VpsVpsKeymapEnum;
  /**
   * Set the name displayed in ManagerV6 for your VPS (max 50 chars)
   *
   */
  displayName?: string;
  /**
   * Reboot your VPS 'Cloud' after change, VPS 'Classic/LowLat' will reboot automatically. Credentials for rescue mode will be sent by mail
   *
   */
  netbootMode?: VpsVpsNetbootEnum;
  /**
   */
  offerType?: VpsVpsOfferEnum;
  /**
   */
  zone?: string;
  /**
   */
  name?: string;
  /**
   */
  vcore?: Number;
  /**
   */
  memoryLimit?: Number;
  /**
   */
  model?: VpsModel;
  /**
   */
  state?: VpsVpsStateEnum;
  /**
   */
  slaMonitoring?: boolean;
}
/**
 * Available periods for the VPS monitoring
 */
export type VpsVpsMonitoringPeriodEnum = 'lastday' | 'lastmonth' | 'lastweek' | 'lastyear' | 'today';
/**
 * Available restore state
 */
export type VpsRestoreStateEnum = 'available' | 'restored' | 'restoring';
/**
 * Information about the options of a VPS Virtual Machine
 */
export interface VpsOption {
  /**
   * The state of the option
   *
   */
  state?: VpsVpsOptionStateEnum;
  /**
   * The option name
   *
   */
  option?: VpsVpsOptionEnum;
}
/**
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Backup Ftp ACL for this server and Backup Ftp
 */
export interface DedicatedServerBackupFtpAcl {
  /**
   * Wether to allow the FTP protocol for this ACL
   *
   */
  ftp?: boolean;
  /**
   * The IP Block specific to this ACL
   *
   */
  ipBlock?: string;
  /**
   * Date of the last object modification
   *
   */
  lastUpdate?: Date;
  /**
   * Whether the rule has been applied on the Backup Ftp
   *
   */
  isApplied?: boolean;
  /**
   * Wether to allow the NFS protocol for this ACL
   *
   */
  nfs?: boolean;
  /**
   * Wether to allow the CIFS (SMB) protocol for this ACL
   *
   */
  cifs?: boolean;
}
/**
 * Ip types on a VPS
 */
export type VpsIpTypeEnum = 'additional' | 'primary';
/**
 * A structure describing a Veeam backup's export options
 */
export type VpsVeeamExportTypeEnum = 'nfs' | 'smb';
/**
 * A structure describing a Veeam restored backup's state
 */
export type VpsVeeamStateEnum = 'mounted' | 'restoring' | 'unmounted' | 'unmounting';
/**
 * Available AutomatedBackup states
 */
export type VpsBackupStateEnum = 'disabled' | 'enabled';
/**
 * A structure describing a backup's access informations
 */
export interface VpsAutomatedBackupAttachedInfos {
  /**
   * SMB URL of the backup
   *
   */
  smb?: string;
  /**
   * NFS URL of the backup
   *
   */
  nfs?: string;
  /**
   * Additional Disk details
   *
   */
  additionalDisk?: string;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Secondary dns infos
 */
export interface SecondaryDnsSecondaryDNS {
  /**
   * domain on slave server
   *
   */
  domain?: string;
  /**
   * secondary dns server
   *
   */
  dns?: string;
  /**
   */
  creationDate?: Date;
  /**
   * master ip
   *
   */
  ipMaster?: string;
}
/**
 * Information about an IP address for a VPS Virtual Machine
 */
export interface VpsIp {
  /**
   */
  macAddress?: string;
  /**
   * The effective ip address of the Ip object
   *
   */
  ipAddress?: string;
  /**
   */
  type?: VpsIpTypeEnum;
  /**
   */
  reverse?: string;
  /**
   */
  version?: CoreTypesIpVersionEnum;
  /**
   */
  gateway?: string;
  /**
   */
  geolocation?: VpsIpGeolocationEnum;
}
/**
 * different task operation
 */
export type DedicatedTaskFunctionEnum = 'addVirtualMac' | 'addWindowSplaFromExistingSerial' | 'applyBackupFtpAcls' | 'applyBackupFtpQuota' | 'bypassAntiDDosGame' | 'changePasswordBackupFTP' | 'changeRipeOrg' | 'checkAndReleaseIp' | 'createBackupFTP' | 'createOrUpdateRipeOrg' | 'createPrivateNetwork' | 'disableFirewall' | 'enableFirewall' | 'genericMoveFloatingIp' | 'hardReboot' | 'migrateBackupFTP' | 'moveFloatingIp' | 'moveVirtualMac' | 'rebootPower8To' | 'reinstallServer' | 'releaseIp' | 'removeBackupFTP' | 'removeVirtualMac' | 'requestAccessIPMI' | 'resetIPMI' | 'resetIPMISession' | 'testIPMIhttp' | 'testIPMIpassword' | 'testIPMIping' | 'virtualMacAdd' | 'virtualMacDelete';
/**
 * Information about a datacenter of a VPS Virtual Machine
 */
export interface VpsDatacenter {
  /**
   */
  name?: string;
  /**
   */
  longName?: string;
}
/**
 * All values a VPS netboot mode can be in
 */
export type VpsVpsNetbootEnum = 'local' | 'rescue';
/**
 * All versions that VPS can have
 */
export type VpsVpsVersionEnum = '2013v1' | '2014v1' | '2015v1' | '2017v1' | '2017v2' | '2017v3' | '2018v1' | '2018v2' | '2019v1';
/**
 * Server tasks
 */
export interface DedicatedServerTask {
  /**
   * last update
   *
   */
  lastUpdate?: Date;
  /**
   * Function name
   *
   */
  function?: DedicatedTaskFunctionEnum;
  /**
   * Details of this task
   *
   */
  comment?: string;
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
   * the id of the task
   *
   */
  taskId?: Number;
  /**
   * Task status
   *
   */
  status?: DedicatedTaskStatusEnum;
}
/**
 * Port and state of a service on an IP
 */
export interface VpsIpServiceStatusService {
  /**
   */
  port?: Number;
  /**
   */
  state?: VpsIpServiceStatusStateEnum;
}
/**
 * Information about a disk of a VPS Virtual Machine
 */
export interface VpsDisk {
  /**
   * The low disk free space threshold in MiB
   *
   */
  lowFreeSpaceThreshold?: Number;
  /**
   */
  size?: Number;
  /**
   */
  bandwidthLimit?: Number;
  /**
   */
  state?: VpsDiskStateEnum;
  /**
   */
  id?: Number;
  /**
   * The monitoring state of this disk
   *
   */
  monitoring?: boolean;
  /**
   */
  type?: VpsDiskTypeEnum;
}
/**
 * Service states for an Ip
 */
export interface VpsIpServiceStatus {
  /**
   */
  smtp?: VpsIpServiceStatusService;
  /**
   */
  ping?: VpsIpServiceStatusStateEnum;
  /**
   */
  dns?: VpsIpServiceStatusService;
  /**
   */
  http?: VpsIpServiceStatusService;
  /**
   */
  ssh?: VpsIpServiceStatusService;
  /**
   */
  https?: VpsIpServiceStatusService;
  /**
   */
  tools?: VpsIpServiceStatusStateEnum;
}
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
type PathsvpsGET = '/vps' | 
'/vps/{serviceName}/availableUpgrade' | 
'/vps/{serviceName}/monitoring' | 
'/vps/{serviceName}/ipCountryAvailable' | 
'/vps/{serviceName}/templates' | 
'/vps/{serviceName}/templates/{id}' | 
'/vps/{serviceName}/templates/{id}/software/{softwareId}' | 
'/vps/{serviceName}/templates/{id}/software' | 
'/vps/{serviceName}/snapshot' | 
'/vps/{serviceName}' | 
'/vps/{serviceName}/veeam/restoredBackup' | 
'/vps/{serviceName}/veeam' | 
'/vps/{serviceName}/veeam/restorePoints/{id}' | 
'/vps/{serviceName}/veeam/restorePoints' | 
'/vps/{serviceName}/distribution' | 
'/vps/{serviceName}/distribution/software/{softwareId}' | 
'/vps/{serviceName}/distribution/software' | 
'/vps/{serviceName}/serviceInfos' | 
'/vps/{serviceName}/secondaryDnsNameServerAvailable' | 
'/vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer' | 
'/vps/{serviceName}/secondaryDnsDomains/{domain}' | 
'/vps/{serviceName}/secondaryDnsDomains' | 
'/vps/{serviceName}/datacenter' | 
'/vps/{serviceName}/status' | 
'/vps/{serviceName}/use' | 
'/vps/{serviceName}/models' | 
'/vps/{serviceName}/disks' | 
'/vps/{serviceName}/disks/{id}' | 
'/vps/{serviceName}/disks/{id}/use' | 
'/vps/{serviceName}/disks/{id}/monitoring' | 
'/vps/{serviceName}/ips/{ipAddress}' | 
'/vps/{serviceName}/ips' | 
'/vps/{serviceName}/backupftp' | 
'/vps/{serviceName}/backupftp/access/{ipBlock}' | 
'/vps/{serviceName}/backupftp/access' | 
'/vps/{serviceName}/backupftp/authorizableBlocks' | 
'/vps/{serviceName}/tasks/{id}' | 
'/vps/{serviceName}/tasks' | 
'/vps/{serviceName}/option/{option}' | 
'/vps/{serviceName}/option' | 
'/vps/{serviceName}/automatedBackup' | 
'/vps/{serviceName}/automatedBackup/restorePoints' | 
'/vps/{serviceName}/automatedBackup/attachedBackup' | 
'/vps/{serviceName}/activeOptions' | 
'/vps/datacenter';

type PathsvpsPUT = '/vps/{serviceName}/snapshot' | 
'/vps/{serviceName}' | 
'/vps/{serviceName}/serviceInfos' | 
'/vps/{serviceName}/secondaryDnsDomains/{domain}' | 
'/vps/{serviceName}/disks/{id}' | 
'/vps/{serviceName}/ips/{ipAddress}' | 
'/vps/{serviceName}/backupftp/access/{ipBlock}';

type PathsvpsPOST = '/vps/{serviceName}/stop' | 
'/vps/{serviceName}/createSnapshot' | 
'/vps/{serviceName}/reboot' | 
'/vps/{serviceName}/terminate' | 
'/vps/{serviceName}/snapshot/revert' | 
'/vps/{serviceName}/getConsoleUrl' | 
'/vps/{serviceName}/veeam/restorePoints/{id}/restore' | 
'/vps/{serviceName}/confirmTermination' | 
'/vps/{serviceName}/secondaryDnsDomains' | 
'/vps/{serviceName}/openConsoleAccess' | 
'/vps/{serviceName}/setPassword' | 
'/vps/{serviceName}/reinstall' | 
'/vps/{serviceName}/start' | 
'/vps/{serviceName}/backupftp/access' | 
'/vps/{serviceName}/backupftp/password' | 
'/vps/{serviceName}/automatedBackup/detachBackup' | 
'/vps/{serviceName}/automatedBackup/restore' | 
'/vps/{serviceName}/changeContact';

type PathsvpsDELETE = '/vps/{serviceName}/snapshot' | 
'/vps/{serviceName}/veeam/restoredBackup' | 
'/vps/{serviceName}/secondaryDnsDomains/{domain}' | 
'/vps/{serviceName}/ips/{ipAddress}' | 
'/vps/{serviceName}/backupftp/access/{ipBlock}' | 
'/vps/{serviceName}/option/{option}';

class Apivps extends ApiCommon {
  /**
  Operations about the VPS service
  List available services
  **/
  public get(path: '/vps', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  availableUpgrade operations
  Return all models the virtual server can be upgraded to
  **/
  public get(path: '/vps/{serviceName}/availableUpgrade', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsModel[]>;
  /**
  monitoring operations
  Return many statistics about the virtual machine for a given period
  **/
  public get(path: '/vps/{serviceName}/monitoring', pathParams: {serviceName?: string}, queryParams: {type?: VpsVpsStatisticTypeEnum, period?: VpsVpsMonitoringPeriodEnum}): Promise<ComplexTypeUnitAndValues<VpsVpsTimestampValue>>;
  /**
  ipCountryAvailable operations
  Get the countries you can select for your IPs geolocation
  **/
  public get(path: '/vps/{serviceName}/ipCountryAvailable', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsIpGeolocationEnum[]>;
  /**
  List the vps.Template objects
  Templates available for this virtual server
  **/
  public get(path: '/vps/{serviceName}/templates', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Installation template for a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/templates/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<VpsTemplate>;
  /**
  Available softwares on a Template
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/templates/{id}/software/{softwareId}', pathParams: {serviceName?: string, id?: Number, softwareId?: Number}, queryParams: null): Promise<VpsSoftware>;
  /**
  List the vps.Software objects
  List available softwares for this template Id
  **/
  public get(path: '/vps/{serviceName}/templates/{id}/software', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Information about the snapshot of a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/snapshot', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsSnapshot>;
  /**
  VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsVPS>;
  /**
  Currently restored backup
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/veeam/restoredBackup', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsVeeamRestoredBackup>;
  /**
  Informations about a VPS Veeam backups
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/veeam', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsVeeam>;
  /**
  Informations about a VPS Veeam restore points
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/veeam/restorePoints/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<VpsVeeamRestorePoint>;
  /**
  List the vps.veeam.RestorePoint objects
  Veeam restore points for the VPS
  **/
  public get(path: '/vps/{serviceName}/veeam/restorePoints', pathParams: {serviceName?: string}, queryParams: {creationTime?: Date}): Promise<Number[]>;
  /**
  Installation template for a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/distribution', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsTemplate>;
  /**
  Available softwares on a Template
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/distribution/software/{softwareId}', pathParams: {serviceName?: string, softwareId?: Number}, queryParams: null): Promise<VpsSoftware>;
  /**
  List the vps.Software objects
  List available softwares for this template Id
  **/
  public get(path: '/vps/{serviceName}/distribution/software', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  secondaryDnsNameServerAvailable operations
  Secondary nameServer available for your Server
  **/
  public get(path: '/vps/{serviceName}/secondaryDnsNameServerAvailable', pathParams: {serviceName?: string}, queryParams: null): Promise<SecondaryDnsSecondaryDNSNameServer>;
  /**
  dnsServer operations
  domain name server informations
  **/
  public get(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer', pathParams: {serviceName?: string, domain?: string}, queryParams: null): Promise<SecondaryDnsSecondaryDNSNameServer>;
  /**
  Secondary dns infos
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null): Promise<SecondaryDnsSecondaryDNS>;
  /**
  List the secondaryDns.SecondaryDNS objects
  List of secondary dns domain name
  **/
  public get(path: '/vps/{serviceName}/secondaryDnsDomains', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Information about a datacenter of a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/datacenter', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsDatacenter>;
  /**
  status operations
  Give the status of the services of the main IP
  **/
  public get(path: '/vps/{serviceName}/status', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsIpServiceStatus>;
  /**
  use operations
  Return many statistics about the virtual machine at that time
  **/
  public get(path: '/vps/{serviceName}/use', pathParams: {serviceName?: string}, queryParams: {type?: VpsVpsStatisticTypeEnum}): Promise<ComplexTypeUnitAndValue<Number>>;
  /**
  models operations
  Return all models for the range of the virtual server
  **/
  public get(path: '/vps/{serviceName}/models', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsModel[]>;
  /**
  List the vps.Disk objects
  Disks associated to this virtual server
  **/
  public get(path: '/vps/{serviceName}/disks', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Information about a disk of a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/disks/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<VpsDisk>;
  /**
  use operations
  Return many statistics about the disk at that time
  **/
  public get(path: '/vps/{serviceName}/disks/{id}/use', pathParams: {serviceName?: string, id?: Number}, queryParams: {type?: VpsDiskStatisticTypeEnum}): Promise<ComplexTypeUnitAndValue<Number>>;
  /**
  monitoring operations
  Return many statistics about the disk for a given period
  **/
  public get(path: '/vps/{serviceName}/disks/{id}/monitoring', pathParams: {serviceName?: string, id?: Number}, queryParams: {period?: VpsVpsMonitoringPeriodEnum, type?: VpsDiskStatisticTypeEnum}): Promise<ComplexTypeUnitAndValues<VpsVpsTimestampValue>>;
  /**
  Information about an IP address for a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/ips/{ipAddress}', pathParams: {serviceName?: string, ipAddress?: string}, queryParams: null): Promise<VpsIp>;
  /**
  List the vps.Ip objects
  Ips associated to this virtual server
  **/
  public get(path: '/vps/{serviceName}/ips', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Backup Ftp assigned to this VPS
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/backupftp', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsBackupFtp>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/backupftp/access/{ipBlock}', pathParams: {serviceName?: string, ipBlock?: string}, queryParams: null): Promise<DedicatedServerBackupFtpAcl>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
  **/
  public get(path: '/vps/{serviceName}/backupftp/access', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  authorizableBlocks operations
  Get all IP blocks that can be used in the ACL
  **/
  public get(path: '/vps/{serviceName}/backupftp/authorizableBlocks', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Operation on a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/tasks/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<VpsTask>;
  /**
  List the vps.Task objects
  Tasks associated to this virtual server
  **/
  public get(path: '/vps/{serviceName}/tasks', pathParams: {serviceName?: string}, queryParams: {type?: VpsTaskTypeEnum, state?: VpsTaskStateEnum}): Promise<Number[]>;
  /**
  Information about the options of a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/option/{option}', pathParams: {serviceName?: string, option?: VpsVpsOptionEnum}, queryParams: null): Promise<VpsOption>;
  /**
  List the vps.Option objects
  List of VPS options
  **/
  public get(path: '/vps/{serviceName}/option', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsVpsOptionEnum[]>;
  /**
  Backup your VPS
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/automatedBackup', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsAutomatedBackup>;
  /**
  restorePoints operations
  Get available Restore Points
  **/
  public get(path: '/vps/{serviceName}/automatedBackup/restorePoints', pathParams: {serviceName?: string}, queryParams: {state?: VpsRestoreStateEnum}): Promise<Date[]>;
  /**
  attachedBackup operations
  Backup attached to your VPS
  **/
  public get(path: '/vps/{serviceName}/automatedBackup/attachedBackup', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsAutomatedBackupAttached[]>;
  /**
  activeOptions operations
  Return all active options for the virtual server
  **/
  public get(path: '/vps/{serviceName}/activeOptions', pathParams: {serviceName?: string}, queryParams: null): Promise<VpsVpsOptionEnum[]>;
  /**
  Missing description
  List all the datacenters for a specific country
  **/
  public get(path: '/vps/datacenter', pathParams: null, queryParams: {country?: NichandleCountryEnum}): Promise<string[]>;
  public get(path: PathsvpsGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Information about the snapshot of a VPS Virtual Machine
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/snapshot', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  VPS Virtual Machine
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Secondary dns infos
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Information about a disk of a VPS Virtual Machine
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/disks/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Information about an IP address for a VPS Virtual Machine
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/ips/{ipAddress}', pathParams: {serviceName?: string, ipAddress?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/backupftp/access/{ipBlock}', pathParams: {serviceName?: string, ipBlock?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsvpsPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  stop operations
  Request the machine to stop
  **/
  public post(path: '/vps/{serviceName}/stop', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  createSnapshot operations
  Create a snapshot of the Virtual Server if the snapshot option is enabled and if there is no existing snapshot
  **/
  public post(path: '/vps/{serviceName}/createSnapshot', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  reboot operations
  Request a reboot of the machine
  **/
  public post(path: '/vps/{serviceName}/reboot', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/vps/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  revert operations
  Revert the Virtual Server to this snapshot
  **/
  public post(path: '/vps/{serviceName}/snapshot/revert', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  getConsoleUrl operations
  Return the VPS console URL
  **/
  public post(path: '/vps/{serviceName}/getConsoleUrl', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  restore operations
  Creates a VPS.Task that will restore the given restorePoint
  **/
  public post(path: '/vps/{serviceName}/veeam/restorePoints/{id}/restore', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/vps/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  List the secondaryDns.SecondaryDNS objects
  add a domain on secondary dns
  **/
  public post(path: '/vps/{serviceName}/secondaryDnsDomains', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  openConsoleAccess operations
  Return the necessary informations to open a VNC connection to your VPS
  **/
  public post(path: '/vps/{serviceName}/openConsoleAccess', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsVnc>;
  /**
  setPassword operations
  Start the process in order to set the root password of the virtual machine. Be careful, in case of Cloud model, a reboot is mandatory.
  **/
  public post(path: '/vps/{serviceName}/setPassword', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  reinstall operations
  Reinstall the virtual server
  **/
  public post(path: '/vps/{serviceName}/reinstall', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  start operations
  Request the machine to start
  **/
  public post(path: '/vps/{serviceName}/start', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  Create a new Backup FTP ACL
  **/
  public post(path: '/vps/{serviceName}/backupftp/access', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  password operations
  Change your Backup FTP password
  **/
  public post(path: '/vps/{serviceName}/backupftp/password', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  detachBackup operations
  Create a VPS.Task that will umount a restored backup on your VPS
  **/
  public post(path: '/vps/{serviceName}/automatedBackup/detachBackup', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  restore operations
  Creates a VPS.Task that will restore the given restorePoint
  **/
  public post(path: '/vps/{serviceName}/automatedBackup/restore', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/vps/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  public post(path: PathsvpsPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Information about the snapshot of a VPS Virtual Machine
  Creates a vps.Task that will delete the Snapshot
  **/
  public delete(path: '/vps/{serviceName}/snapshot', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  Currently restored backup
  Creates a VPS.Task that will unmount the backup
  **/
  public delete(path: '/vps/{serviceName}/veeam/restoredBackup', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VpsTask>;
  /**
  Secondary dns infos
  remove this domain
  **/
  public delete(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Information about an IP address for a VPS Virtual Machine
  Release a given Ip (Additional Ip)
  **/
  public delete(path: '/vps/{serviceName}/ips/{ipAddress}', pathParams: {serviceName?: string, ipAddress?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Revoke this ACL
  **/
  public delete(path: '/vps/{serviceName}/backupftp/access/{ipBlock}', pathParams: {serviceName?: string, ipBlock?: string}, queryParams: null, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  Information about the options of a VPS Virtual Machine
  Release a given option
  **/
  public delete(path: '/vps/{serviceName}/option/{option}', pathParams: {serviceName?: string, option?: VpsVpsOptionEnum}, queryParams: null, bodyParams: null): Promise<void>;
  public delete(path: PathsvpsDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
