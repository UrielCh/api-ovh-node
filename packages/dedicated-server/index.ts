import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Chart
 */
export interface ComplexTypeChartReturn {
  /**
   */
  unit?: string;
  /**
   */
  values?: ComplexTypeChartTimestampValue[];
}
/**
 * A timestamp associated to a value
 */
export interface ComplexTypeChartTimestampValue {
  /**
   */
  timestamp: number;
  /**
   */
  value?: number;
}
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
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * A structure describing the availabilities of dedicated server
 */
export interface DedicatedAvailabilities {
  /**
   * The hardware availability for each datacenter which composed a region
   *
   */
  datacenters: DedicatedAvailabilityDatacenter[];
  /**
   * Name of the hardware
   *
   */
  hardware?: string;
  /**
   * Region where is located the hardware
   *
   */
  region?: DedicatedAvailabilityRegionEnum;
}
/**
 * A structure describing the availabilities of dedicated server
 */
export interface DedicatedAvailabilitiesRaw {
  /**
   * The availability
   *
   */
  availability: DedicatedAvailabilityEnum;
  /**
   * Real stock in database
   *
   */
  available: number;
  /**
   * Stock in datacenter
   *
   */
  incomingDatacenter: number;
  /**
   * Last availability rule applied
   *
   */
  lastRule?: string;
  /**
   * Ordered count
   *
   */
  ordered: number;
  /**
   * Validating order count
   *
   */
  orderedCheck: number;
  /**
   * Blockbuster stock count
   *
   */
  parentAvailable: number;
  /**
   * Product reference
   *
   */
  reference: string;
  /**
   * Real stock (considering order in validating)
   *
   */
  trueAvailable: number;
  /**
   * 24H count
   *
   */
  trueAvailable24H: number;
  /**
   * 4H count
   *
   */
  trueAvailable4H: number;
  /**
   * Region where is located the product
   *
   */
  zone: DedicatedAvailabilityRegionEnum;
}
/**
 * A structure describing the hardware availability for each datacenter
 */
export interface DedicatedAvailabilityDatacenter {
  /**
   * Availability status
   *
   */
  availability: DedicatedAvailabilityEnum;
  /**
   * Datacenter code
   *
   */
  datacenter: DedicatedAvailabilityDatacenterEnum;
}
/**
 * The datacenter
 */
export type DedicatedAvailabilityDatacenterEnum = 'bhs' | 'default' | 'fra' | 'gra' | 'hil' | 'lon' | 'rbx' | 'rbx-hz' | 'sbg' | 'sgp' | 'syd' | 'vin' | 'waw';
/**
 * The availability
 */
export type DedicatedAvailabilityEnum = '1H-high' | '1H-low' | '240H' | '24H' | '72H' | 'unavailable' | 'unknown';
/**
 * The region
 */
export type DedicatedAvailabilityRegionEnum = 'europe' | 'northAmerica';
/**
 * Get list of compatible firewall binaries
 */
export interface DedicatedBinaryFirewall {
  /**
   * List of compatible asa binaries names
   *
   */
  asa: string[];
  /**
   * List of compatible asdm binaries names
   *
   */
  asdm: string[];
  /**
   */
  type: DedicatedProfileFirewallEnum;
}
/**
 * Get temporary URL link to download binary
 */
export interface DedicatedBinaryFirewallLink {
  /**
   * Temporary URL to download binary
   *
   */
  url: string;
}
/**
 * A structure describing the availabilities of dedicated server
 */
export interface DedicatedDatacenterAvailability {
  /**
   * The hardware availability for each datacenter
   *
   */
  datacenters: DedicatedAvailabilityDatacenter[];
  /**
   * Fully qualified and unique name of the hardware
   *
   */
  fqn: string;
  /**
   * Name of the memory hardware part
   *
   */
  memory?: string;
  /**
   * Plan code in which the hardware is involved
   *
   */
  planCode: string;
  /**
   * Name of the base hardware
   *
   */
  server: string;
  /**
   * Name of the storage hardware part
   *
   */
  storage?: string;
}
/**
 * ovh datacenter
 */
export type DedicatedDatacenterEnum = 'bhs1' | 'bhs2' | 'bhs3' | 'bhs4' | 'bhs5' | 'bhs6' | 'bhs7' | 'dc1' | 'eri1' | 'gra1' | 'gra2' | 'gsw' | 'hil1' | 'lim1' | 'p19' | 'rbx-hz' | 'rbx1' | 'rbx2' | 'rbx3' | 'rbx4' | 'rbx5' | 'rbx6' | 'rbx7' | 'sbg1' | 'sbg2' | 'sbg3' | 'sbg4' | 'sgp1' | 'syd1' | 'vin1' | 'waw1';
/**
 * Operating system name
 */
export type DedicatedOsAvailabilitiesEnum = 'archlinux-installer_64' | 'centos5_64' | 'centos6-cpanel-latest_64' | 'centos6-ovh_64' | 'centos6-plesk12_64' | 'centos6_64' | 'centos7-cpanel-latest_64' | 'centos7-directadmin_64' | 'centos7-fpga-accelize_64' | 'centos7-fpga-intel-opencl_64' | 'centos7-plesk125_64' | 'centos7-plesk12_64' | 'centos7-plesk17_64' | 'centos7_64' | 'cloudlinux6_64' | 'cloudlinux7_64' | 'coreos-alpha_64' | 'coreos_64' | 'debian7-ispconfig3_64' | 'debian7-minecraft_64' | 'debian7-plesk12_64' | 'debian7_64' | 'debian8-ispconfig3_64' | 'debian8-plesk125_64' | 'debian8_64' | 'debian8_armhf_32' | 'debian9-ispconfig3_64' | 'debian9_64' | 'debian9_armhf_32' | 'dgx1-os-3_64' | 'esxi51_64' | 'esxi55_64' | 'esxi5_64' | 'esxi60_64' | 'esxi65_64' | 'fedora26_64' | 'fedora27_64' | 'freebsd10-zfs_64' | 'freebsd10_64' | 'freebsd11-zfs_64' | 'gentoo11_64' | 'openmediavault3_armhf_32' | 'openmediavault_armhf_32' | 'opensuse42_64' | 'proxmox4-zfs_64' | 'proxmox4_64' | 'proxmox5-zfs_64' | 'proxmox5_64' | 'slackware14_64' | 'smartos_64' | 'solusvm-master-vz_64' | 'solusvm-slave-vz_64' | 'ubuntu1404-plesk125_64' | 'ubuntu1404-server_64' | 'ubuntu1510-server_arm64_64' | 'ubuntu1510-server_ppc64el_64' | 'ubuntu1604-desktop_64' | 'ubuntu1604-server_64' | 'ubuntu1604-server_armhf_32' | 'ubuntu1604-server_ppc64el_64' | 'ubuntu1710-server_64' | 'win2008r2-dc-virtuozzo46_64' | 'win2008r2-dc_64' | 'win2008r2-ent-plesk10_64' | 'win2008r2-ent-plesk11_64' | 'win2008r2-ent-plesk12_64' | 'win2008r2-ent-sp2010found_64' | 'win2008r2-ent-virtuozzo46_64' | 'win2008r2-ent_64' | 'win2008r2-std-plesk11_64' | 'win2008r2-std-plesk12_64' | 'win2008r2-std-sp2010found_64' | 'win2008r2-std_64' | 'win2008r2-web-plesk11_64' | 'win2008r2-web-plesk12_64' | 'win2008r2-web-sp2010found_64' | 'win2008r2-web_64' | 'win2008r2core-dc_64' | 'win2008r2core-ent_64' | 'win2008r2core-hyperv_64' | 'win2008r2core-std_64' | 'win2008r2core-web_64' | 'win2012-dc_64' | 'win2012-hyperv3_64' | 'win2012-std-plesk11_64' | 'win2012-std-plesk12_64' | 'win2012-std_64' | 'win2012r2-dc_64' | 'win2012r2-hyperv3_64' | 'win2012r2-std-plesk12_64' | 'win2012r2-std_64' | 'win2016-dc_64' | 'win2016-std_64' | 'win81-pro-sysprep_64' | 'xenserver6_64';
/**
 * profile firewall asa
 */
export type DedicatedProfileFirewallEnum = 'cisco.asa5505' | 'cisco.asa5510' | 'cisco.asa5520';
/**
 * enable or disable
 */
export type DedicatedStatusEnum = 'disable' | 'enable';
/**
 * different task operation
 */
export type DedicatedTaskFunctionEnum = 'addVirtualMac' | 'addWindowSplaFromExistingSerial' | 'applyBackupFtpAcls' | 'applyBackupFtpQuota' | 'bypassAntiDDosGame' | 'changePasswordBackupFTP' | 'changeRipeOrg' | 'checkAndReleaseIp' | 'createBackupFTP' | 'createOrUpdateRipeOrg' | 'createPrivateNetwork' | 'disableFirewall' | 'enableFirewall' | 'genericMoveFloatingIp' | 'hardReboot' | 'migrateBackupFTP' | 'moveFloatingIp' | 'moveVirtualMac' | 'rebootPower8To' | 'reinstallServer' | 'releaseIp' | 'removeBackupFTP' | 'removeVirtualMac' | 'requestAccessIPMI' | 'resetIPMI' | 'resetIPMISession' | 'testIPMIhttp' | 'testIPMIpassword' | 'testIPMIping' | 'virtualMacAdd' | 'virtualMacDelete';
/**
 * different task status
 */
export type DedicatedTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
/**
 * Your networkInterfaceController
 */
export interface DedicatedNetworkInterfaceControllerNetworkInterfaceController {
  /**
   * NetworkInterfaceController linkType
   *
   */
  linkType: DedicatedNetworkInterfaceControllerNetworkInterfaceControllerLinkTypeEnum;
  /**
   * NetworkInterfaceController mac
   *
   */
  mac: string;
}
/**
 * List NetworkInterfaceController linktype
 */
export type DedicatedNetworkInterfaceControllerNetworkInterfaceControllerLinkTypeEnum = 'private' | 'public';
/**
 * A structure describing the server's access
 */
export interface DedicatedServerAccess {
  /**
   * Password
   *
   */
  password: string;
  /**
   * Application access type
   *
   */
  type: DedicatedServerAccessTypeEnum;
  /**
   * Url
   *
   */
  url?: string;
  /**
   * Login
   *
   */
  user?: string;
}
/**
 * Application access type
 */
export type DedicatedServerAccessTypeEnum = 'DIRECTADMIN_PANEL' | 'PLESK_PANEL' | 'PROXMOX_PANEL' | 'RDP' | 'SQL_SERVER' | 'SSH' | 'WEB_PANEL';
/**
 * Monitoring alert language
 */
export type DedicatedServerAlertLanguageEnum = 'cz' | 'de' | 'en' | 'es' | 'fi' | 'fr' | 'it' | 'lt' | 'nl' | 'pl' | 'pt';
/**
 * Backup Cloud assigned to this server
 */
export interface DedicatedServerBackupCloud {
  /**
   * Agreement ids waiting for validation
   *
   */
  agreements?: number[];
  /**
   * Archive space info.
   *
   */
  archive?: DedicatedServerBackupBackupContainer;
  /**
   * Status of the container.
   *
   */
  status: DedicatedServerBackupBackupStatus;
  /**
   * Storage space info.
   *
   */
  storage?: DedicatedServerBackupBackupContainer;
}
/**
 * Backup Ftp assigned to this server
 */
export interface DedicatedServerBackupFtp {
  /**
   * The backup FTP server name
   *
   */
  ftpBackupName: string;
  /**
   * The disk space available in gigabytes
   *
   */
  quota?: ComplexTypeUnitAndValue<number>;
  /**
   * If not-null, gives the date since when your account was set in read-only mode because the quota was exceeded
   *
   */
  readOnlyDate?: string;
  /**
   * The backup FTP type
   *
   */
  type: DedicatedServerBackupStorageTypeEnum;
  /**
   * The disk space currently used on your backup FTP in percent
   *
   */
  usage?: ComplexTypeUnitAndValue<number>;
}
/**
 * Backup Ftp ACL for this server and Backup Ftp
 */
export interface DedicatedServerBackupFtpAcl {
  /**
   * Wether to allow the CIFS (SMB) protocol for this ACL
   *
   */
  cifs: boolean;
  /**
   * Wether to allow the FTP protocol for this ACL
   *
   */
  ftp: boolean;
  /**
   * The IP Block specific to this ACL
   *
   */
  ipBlock: string;
  /**
   * Whether the rule has been applied on the Backup Ftp
   *
   */
  isApplied: boolean;
  /**
   * Date of the last object modification
   *
   */
  lastUpdate: string;
  /**
   * Wether to allow the NFS protocol for this ACL
   *
   */
  nfs: boolean;
}
/**
 * Different backup storage capacity in gigabytes
 */
export type DedicatedServerBackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000;
/**
 * A structure describing informations storage backup orderable for this dedicated server
 */
export interface DedicatedServerBackupStorageOrderable {
  /**
   * Backup storage orderable capacities in gigabytes
   *
   */
  capacities?: DedicatedServerBackupStorageCapacityEnum[];
  /**
   * Is a backup storage is orderable for this server
   *
   */
  orderable: boolean;
}
/**
 * Different backup storage type
 */
export type DedicatedServerBackupStorageTypeEnum = 'included' | 'storage';
/**
 * A structure describing bandwidth informations about this dedicated server
 */
export interface DedicatedServerBandwidthDetails {
  /**
   * bandwidth limitation Internet to OVH
   *
   */
  InternetToOvh?: ComplexTypeUnitAndValue<number>;
  /**
   * bandwidth limitation OVH to Internet
   *
   */
  OvhToInternet?: ComplexTypeUnitAndValue<number>;
  /**
   * bandwidth limitation OVH to OVH
   *
   */
  OvhToOvh?: ComplexTypeUnitAndValue<number>;
  /**
   * bandwidth offer type
   *
   */
  type?: DedicatedServerBandwidthTypeEnum;
}
/**
 *  Different Bandwidth orderable in Mbps
 */
export type DedicatedServerBandwidthOrderEnum = 1000 | 2000 | 3000;
/**
 * A structure describing informations bandwidth orderable for this dedicated server
 */
export interface DedicatedServerBandwidthOrderable {
  /**
   * Is bandwidth orderable for this server
   *
   */
  orderable: boolean;
  /**
   * Bandwidth "platinum" orderable in mbps
   *
   */
  platinum?: DedicatedServerBandwidthOrderEnum[];
  /**
   * Bandwidth "premium" orderable in mbps
   *
   */
  premium?: DedicatedServerBandwidthOrderEnum[];
  /**
   * Bandwidth "ultimate" orderable in mbps
   *
   */
  ultimate?: DedicatedServerBandwidthOrderEnum[];
}
/**
 *  Different Bandwidth type
 */
export type DedicatedServerBandwidthTypeEnum = 'included' | 'platinum' | 'premium' | 'standard' | 'ultimate';
/**
 * A structure describing vRack bandwidth informations about this dedicated server
 */
export interface DedicatedServerBandwidthvRackDetails {
  /**
   * vrack bandwidth limitation
   *
   */
  bandwidth?: ComplexTypeUnitAndValue<number>;
  /**
   * bandwidth offer type
   *
   */
  type?: DedicatedServerBandwidthvRackTypeEnum;
}
/**
 *  Different vRack Bandwidth orderable in Mbps
 */
export type DedicatedServerBandwidthvRackOrderEnum = 1000 | 3000;
/**
 * A structure describing informations bandwidth orderable for this dedicated server
 */
export interface DedicatedServerBandwidthvRackOrderable {
  /**
   * Is bandwidth orderable for this server
   *
   */
  orderable: boolean;
  /**
   * vRack Bandwidth orderable in mbps
   *
   */
  vrack?: DedicatedServerBandwidthvRackOrderEnum[];
}
/**
 *  Different Bandwidth type
 */
export type DedicatedServerBandwidthvRackTypeEnum = 'included' | 'standard';
/**
 * Server boot mode
 */
export type DedicatedServerBootModeEnum = 'legacy' | 'uefi' | 'uefi-legacy';
/**
 * Different option activated on netboot 
 */
export type DedicatedServerBootOptionEnum = 'cpufamily' | 'grsec' | 'ipv6' | 'smp';
/**
 *  Different netboot boot
 */
export type DedicatedServerBootTypeEnum = 'harddisk' | 'internal' | 'ipxeCustomerScript' | 'network' | 'rescue';
/**
 * Dedicated server bandwidth burst
 */
export type DedicatedServerBurstStatusEnum = 'active' | 'inactive' | 'inactiveLocked';
/**
 * Time to live in minutes for cache
 */
export type DedicatedServerCacheTTLEnum = 1 | 10 | 15 | 3 | 5;
/**
 * cpu family 
 */
export type DedicatedServerCpuFamilyEnum = 'arm64' | 'armhf32' | 'ppc64' | 'x86' | 'x86-ht' | 'x86_64';
/**
 * Server informations
 */
export interface DedicatedServerDedicated {
  /**
   */
  bootId?: number;
  /**
   * dedicater server commercial range
   *
   */
  commercialRange?: string;
  /**
   * dedicated datacenter localisation
   *
   */
  datacenter: DedicatedDatacenterEnum;
  /**
   * dedicated server ip
   *
   */
  ip: string;
  /**
   */
  linkSpeed?: number;
  /**
   * Icmp monitoring state
   *
   */
  monitoring: boolean;
  /**
   * dedicated server name
   *
   */
  name: string;
  /**
   * Operating system
   *
   */
  os: string;
  /**
   * Does this server have professional use option
   *
   */
  professionalUse: boolean;
  /**
   */
  rack: string;
  /**
   */
  rescueMail?: string;
  /**
   * dedicated server reverse
   *
   */
  reverse?: string;
  /**
   */
  rootDevice?: string;
  /**
   * your server id
   *
   */
  serverId: number;
  /**
   */
  state: DedicatedServerStateEnum;
  /**
   * Dedicated server support level
   *
   */
  supportLevel: DedicatedServerSupportLevelEnum;
}
/**
 * Disk interface type enum
 */
export type DedicatedServerDiskTypeEnum = 'NVMe' | 'SAS' | 'SATA' | 'SSD' | 'Unknown';
/**
 * Firewall attached to this server
 */
export interface DedicatedServerFirewall {
  /**
   */
  enabled: boolean;
  /**
   */
  firewall: string;
  /**
   * Firewall management IP
   *
   */
  ip: string;
  /**
   * transparent mode : device is invisible on the network; routed mode : the security appliance is considered to be a router hop in the network
   *
   */
  mode: DedicatedServerFirewallModeEnum;
  /**
   * Firewall model
   *
   */
  model?: DedicatedServerFirewallModelEnum;
}
/**
 * Dedicated server firewall mode
 */
export type DedicatedServerFirewallModeEnum = 'routed' | 'transparent';
/**
 * Firewall model name
 */
export type DedicatedServerFirewallModelEnum = 'asa5505' | 'asa5510' | 'asa5520';
/**
 * Server form factor
 */
export type DedicatedServerFormFactorEnum = '0.25u' | '0.5u' | '1u' | '2u' | '3u' | '4u';
/**
 * Simulated result of how the hardware RAID template will be configured on this server
 */
export interface DedicatedServerHardwareRaidConfiguration {
  /**
   * RAID total capacity
   *
   */
  capacity: ComplexTypeUnitAndValue<number>;
  /**
   * Disk count
   *
   */
  diskCount: number;
  /**
   * Disk capacity
   *
   */
  diskSize: ComplexTypeUnitAndValue<number>;
  /**
   * Size of disk spans on RAID
   *
   */
  diskSpanSize: number;
  /**
   * RAID mode
   *
   */
  mode: DedicatedServerHardwareSpecificationsRaidHardEnum;
  /**
   * RAID configuration name
   *
   */
  name: string;
  /**
   * RAID controller type
   *
   */
  type: string;
}
/**
 * RAID controller configuration
 */
export interface DedicatedServerHardwareRaidController {
  /**
   * Connected disk type
   *
   */
  disks: DedicatedServerHardwareRaidDiskGroup[];
  /**
   * Raid controler model
   *
   */
  model: string;
  /**
   * Raid controler type
   *
   */
  type: string;
}
/**
 * Disk attached to a RAID controller
 */
export interface DedicatedServerHardwareRaidDiskGroup {
  /**
   * Disk capacity
   *
   */
  capacity: ComplexTypeUnitAndValue<number>;
  /**
   * Disk names
   *
   */
  names: string[];
  /**
   * Disk insterface speed
   *
   */
  speed: ComplexTypeUnitAndValue<string>;
  /**
   * Disk type
   *
   */
  type: DedicatedServerDiskTypeEnum;
}
/**
 * A structure describing the server's hardware RAID configuration
 */
export interface DedicatedServerHardwareRaidProfile {
  /**
   * Hardware RAID controller list
   *
   */
  controllers: DedicatedServerHardwareRaidController[];
}
/**
 * A structure describing the server's resulting layout after RAID configuration
 */
export interface DedicatedServerHardwareRaidSize {
  /**
   * Hardware RAID configuration list
   *
   */
  configurations: DedicatedServerHardwareRaidConfiguration[];
}
/**
 * A structure describing informations about this dedicated server
 */
export interface DedicatedServerHardwareSpecifications {
  /**
   * Server boot mode
   *
   */
  bootMode: DedicatedServerBootModeEnum;
  /**
   * number of cores per processor
   *
   */
  coresPerProcessor?: number;
  /**
   * Default hardware raid size for this server
   *
   */
  defaultHardwareRaidSize?: ComplexTypeUnitAndValue<number>;
  /**
   * Default hardware raid type configured on this server
   *
   */
  defaultHardwareRaidType?: DedicatedServerHardwareSpecificationsRaidHardEnum;
  /**
   * commercial name of this server
   *
   */
  description?: string;
  /**
   * details about the groups of disks in the server
   *
   */
  diskGroups?: DedicatedServerHardwareSpecificationsDisk[];
  /**
   * details about the server's expansion cards
   *
   */
  expansionCards?: DedicatedServerHardwareSpecificationsExpansionCard[];
  /**
   * Server form factor
   *
   */
  formFactor?: DedicatedServerFormFactorEnum;
  /**
   * ram capacity
   *
   */
  memorySize?: ComplexTypeUnitAndValue<number>;
  /**
   * server motherboard
   *
   */
  motherboard?: string;
  /**
   * number of processors in this dedicated server
   *
   */
  numberOfProcessors?: number;
  /**
   * processor architecture bit
   *
   */
  processorArchitecture?: DedicatedServerCpuFamilyEnum;
  /**
   * processor name
   *
   */
  processorName?: string;
  /**
   * number of threads per processor
   *
   */
  threadsPerProcessor?: number;
  /**
   * Capacity of the USB keys installed on your server, if any
   *
   */
  usbKeys?: ComplexTypeUnitAndValue<number>[];
}
/**
 * A structure describing informations about server disks
 */
export interface DedicatedServerHardwareSpecificationsDisk {
  /**
   * default hardware raid size for this disk group
   *
   */
  defaultHardwareRaidSize?: ComplexTypeUnitAndValue<number>;
  /**
   * default hardware raid type for this disk group
   *
   */
  defaultHardwareRaidType?: DedicatedServerHardwareSpecificationsRaidHardEnum;
  /**
   * human readable description of this disk group
   *
   */
  description?: string;
  /**
   * identifier of this disk group
   *
   */
  diskGroupId?: number;
  /**
   * disk capacity
   *
   */
  diskSize?: ComplexTypeUnitAndValue<number>;
  /**
   * type of the disk (SSD, SATA, SAS, ...)
   *
   */
  diskType?: string;
  /**
   * number of disks in this group
   *
   */
  numberOfDisks?: number;
  /**
   * raid controller, if any, managing this group of disks
   *
   */
  raidController?: string;
}
/**
 * A structure describing informations about server expansion cards
 */
export interface DedicatedServerHardwareSpecificationsExpansionCard {
  /**
   * expansion card description
   *
   */
  description: string;
  /**
   * expansion card type
   *
   */
  type: DedicatedServerHardwareSpecificationsExpansionCardTypeEnum;
}
/**
 * Expansion card type enum
 */
export type DedicatedServerHardwareSpecificationsExpansionCardTypeEnum = 'fpga' | 'gpu';
/**
 * Raid hard configuration
 */
export type DedicatedServerHardwareSpecificationsRaidHardEnum = 'raid0' | 'raid1' | 'raid10' | 'raid1E' | 'raid5' | 'raid50' | 'raid6' | 'raid60';
/**
 * A structure describing informations about installation custom
 */
export interface DedicatedServerInstallCustom {
  /**
   * Personnal hostname to use in server reinstallation
   *
   */
  customHostname?: string;
  /**
   * Disk group id to process install on (only available for some templates)
   *
   */
  diskGroupId?: number;
  /**
   * true if you want to install windows with sql feature
   *
   */
  installSqlServer?: boolean;
  /**
   * install language for ovh install choice
   *
   */
  language?: string;
  /**
   * true if you want to install only on the first disk
   *
   */
  noRaid?: boolean;
  /**
   * the url to your custom install script
   *
   */
  postInstallationScriptLink?: string;
  /**
   * the return of your script if everythings ok. Advice: your script should return a unique validation string in case of succes. A good example is "loh1Xee7eo OK OK OK UGh8Ang1Gu
   *
   */
  postInstallationScriptReturn?: string;
  /**
   * Specify if we should attempt to reset hw raid on install.
   *
   */
  resetHwRaid?: boolean;
  /**
   * Number of devices to use for system's software RAID
   *
   */
  softRaidDevices?: number;
  /**
   * The name of ssh key to install
   *
   */
  sshKeyName?: string;
  /**
   * true if you want to install with distrib kernel
   *
   */
  useDistribKernel?: boolean;
  /**
   * true if you want to install windows with your spla license
   *
   */
  useSpla?: boolean;
}
/**
 * A structure describing informations about an Installation templates
 */
export interface DedicatedServerInstallTemplate {
  /**
   * Names list of ovh installationtemplates compatibles with this server
   *
   */
  ovh?: string[];
  /**
   * Names list of yours installation templates compatibles with this server
   *
   */
  personal?: string[];
}
/**
 * A structure describing informations about this dedicated server installation status
 */
export interface DedicatedServerInstallationProgressStatus {
  /**
   * Elapsed time in seconds since installation beggining
   *
   */
  elapsedTime: number;
  /**
   * Installation steps
   *
   */
  progress?: DedicatedServerInstallationProgressSteps[];
}
/**
 * Distinct Installation status
 */
export type DedicatedServerInstallationProgressStatusEnum = 'doing' | 'done' | 'error' | 'expired' | 'idle' | 'pending' | 'stopping' | 'todo';
/**
 * A structure describing informations about this dedicated server installation steps
 */
export interface DedicatedServerInstallationProgressSteps {
  /**
   * Informations about this installation step
   *
   */
  comment: string;
  /**
   * Error details if state is error
   *
   */
  error?: string;
  /**
   * Status of this installation step
   *
   */
  status: DedicatedServerInstallationProgressStatusEnum;
}
/**
 * Intervention made on this server
 */
export interface DedicatedServerIntervention {
  /**
   * the intervention start date
   *
   */
  date?: string;
  /**
   * The intervention id
   *
   */
  interventionId: number;
  /**
   * the intervention type
   *
   */
  type?: string;
}
/**
 * IP block size
 */
export type DedicatedServerIpBlockSizeEnum = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8;
/**
 * Available localization for this static IP
 */
export type DedicatedServerIpCountryEnum = 'au' | 'be' | 'ca' | 'cz' | 'de' | 'es' | 'fi' | 'fr' | 'ie' | 'it' | 'lt' | 'nl' | 'pl' | 'pt' | 'sg' | 'uk' | 'us';
/**
 * A structure describing informations about orderable IP address
 */
export interface DedicatedServerIpOrderable {
  /**
   * Orderable IP v4 details
   *
   */
  ipv4?: DedicatedServerIpOrderableDetails[];
  /**
   * Orderable IP v6 details
   *
   */
  ipv6?: DedicatedServerIpOrderableDetails[];
}
/**
 * A structure describing informations about orderable IP address
 */
export interface DedicatedServerIpOrderableDetails {
  /**
   * Orderable IP blocks sizes
   *
   */
  blockSizes: DedicatedServerIpBlockSizeEnum[];
  /**
   * Are those IP included with your offer
   *
   */
  included: boolean;
  /**
   * Total number of IP that can be routed to this server
   *
   */
  ipNumber?: number;
  /**
   * Total number of prefixes that can be routed to this server
   *
   */
  number: number;
  /**
   * Which option is required to order this type of IP
   *
   */
  optionRequired?: DedicatedServerOptionRequiredEnum;
  /**
   * this IP type
   *
   */
  type: DedicatedServerIpTypeOrderableEnum;
}
/**
 * Orderable IP type
 */
export type DedicatedServerIpTypeOrderableEnum = 'failover' | 'static' | 'unshielded';
/**
 * Server IPMI interface
 */
export interface DedicatedServerIpmi {
  /**
   * true, if IPMI is available on this server
   *
   */
  activated: boolean;
  /**
   * A structure describing the IPMI supported features
   *
   */
  supportedFeatures: DedicatedServerIpmiSupportedFeatures;
}
/**
 * Distinct way to acces a KVM IPMI session
 */
export type DedicatedServerIpmiAccessTypeEnum = 'kvmipHtml5URL' | 'kvmipJnlp' | 'serialOverLanSshKey' | 'serialOverLanURL';
/**
 * A structure describing ipmi access value
 */
export interface DedicatedServerIpmiAccessValue {
  /**
   * Session expiration date
   *
   */
  expiration?: string;
  /**
   * value
   *
   */
  value?: string;
}
/**
 * A structure describing the IPMI supported features
 */
export interface DedicatedServerIpmiSupportedFeatures {
  /**
   * Access to the KVM through an HTML web interface
   *
   */
  kvmipHtml5URL: boolean;
  /**
   * Access to the KVM through a Java web launch application
   *
   */
  kvmipJnlp: boolean;
  /**
   * Access to the virtual serial port of your server through an SSH client
   *
   */
  serialOverLanSshKey: boolean;
  /**
   * Access to the virtual serial port of your server through an HTML command line interface
   *
   */
  serialOverLanURL: boolean;
}
/**
 * A structure describing IPMI test result
 */
export interface DedicatedServerIpmiTestResult {
  /**
   * Test running date
   *
   */
  date?: string;
  /**
   * Test result
   *
   */
  status?: string;
}
/**
 * Different test can be made on IPMI interface
 */
export type DedicatedServerIpmiTestTypeEnum = 'http' | 'password' | 'ping';
/**
 * Monitoring interval in seconds
 */
export type DedicatedServerMonitoringIntervalEnum = '1800' | '21600' | '300' | '3600';
/**
 * Monitoring protocol
 */
export type DedicatedServerMonitoringProtocolEnum = 'DNS' | 'FTP' | 'HTTP' | 'IMAP' | 'POP' | 'SMTP' | 'SSH' | 'openTCP';
/**
 * distincts MRTG period
 */
export type DedicatedServerMrtgPeriodEnum = 'daily' | 'hourly' | 'monthly' | 'weekly' | 'yearly';
/**
 * A timestamp associated to a value
 */
export interface DedicatedServerMrtgTimestampValue {
  /**
   */
  timestamp: number;
  /**
   */
  value?: ComplexTypeUnitAndValue<number>;
}
/**
 * distincts MRTG type
 */
export type DedicatedServerMrtgTypeEnum = 'errors:download' | 'errors:upload' | 'packets:download' | 'packets:upload' | 'traffic:download' | 'traffic:upload';
/**
 * Available boots
 */
export interface DedicatedServerNetboot {
  /**
   * boot id
   *
   */
  bootId: number;
  /**
   * the boot system
   *
   */
  bootType: DedicatedServerBootTypeEnum;
  /**
   * the boot description
   *
   */
  description: string;
  /**
   * The boot kernel
   *
   */
  kernel: string;
}
/**
 * A structure describing network informations about this dedicated server
 */
export interface DedicatedServerNetworkSpecifications {
  /**
   * Bandwidth details
   *
   */
  bandwidth?: DedicatedServerBandwidthDetails;
  /**
   * Network connection flow rate
   *
   */
  connection?: ComplexTypeUnitAndValue<number>;
  /**
   * Routing details
   *
   */
  routing?: DedicatedServerRoutingDetails;
  /**
   * Switching details
   *
   */
  switching?: DedicatedServerSwitchingDetails;
  /**
   * Traffic details
   *
   */
  traffic?: DedicatedServerTrafficDetails;
  /**
   * vRack details
   *
   */
  vrack?: DedicatedServerBandwidthvRackDetails;
}
/**
 * Information about the options of a dedicated server
 */
export interface DedicatedServerOption {
  /**
   * The option name
   *
   */
  option: DedicatedServerOptionEnum;
  /**
   * The state of the option
   *
   */
  state: DedicatedServerOptionStateEnum;
}
/**
 * All options a dedicated server can have and release
 */
export type DedicatedServerOptionEnum = 'BACKUPPROTOCOL' | 'BANDWIDTH' | 'BANDWIDTH_VRACK' | 'TRAFFIC' | 'TRAFFIC_DISCOVER' | 'TUNING' | 'TUNING_FIREWALL' | 'TUNING_KVM' | 'USB_KVM_IP';
/**
 * Required option
 */
export type DedicatedServerOptionRequiredEnum = 'professionalUse';
/**
 * All states a dedicated server option can be in
 */
export type DedicatedServerOptionStateEnum = 'released' | 'subscribed';
/**
 * Dedicated server orderable features
 */
export type DedicatedServerOrderableSysFeatureEnum = 'backupProtocol' | 'monitoring';
/**
 * A structure describing routing informations about this dedicated server
 */
export interface DedicatedServerRoutingDetails {
  /**
   * Ipv4 routing details
   *
   */
  ipv4?: DedicatedServerRoutingDetailsIpv4;
  /**
   * Ipv6 routing details
   *
   */
  ipv6?: DedicatedServerRoutingDetailsIpv6;
}
/**
 * A structure describing IPv4 routing informations about this dedicated server
 */
export interface DedicatedServerRoutingDetailsIpv4 {
  /**
   * Server gateway
   *
   */
  gateway?: string;
  /**
   * Server main IP
   *
   */
  ip?: string;
  /**
   * Server network
   *
   */
  network?: string;
}
/**
 * A structure describing IPv6 routing informations about this dedicated server
 */
export interface DedicatedServerRoutingDetailsIpv6 {
  /**
   * Server gateway
   *
   */
  gateway?: string;
  /**
   * Server main IP
   *
   */
  ip?: string;
  /**
   * Server network
   *
   */
  network?: string;
}
/**
 * Servers statistics sent by RTM (Real Time Monitoring)
 */
export interface DedicatedServerRtm {
  /**
   * RTM current version
   *
   */
  currentVersion?: string;
  /**
   * RTM currently installed version
   *
   */
  installedVersion?: string;
  /**
   * You need to update RTM script on your server
   *
   */
  needsUpdate: boolean;
}
/**
 * distincts RTM charts period
 */
export type DedicatedServerRtmChartPeriodEnum = 'daily' | 'monthly' | 'weekly' | 'yearly';
/**
 * distincts probes type
 */
export type DedicatedServerRtmChartTypeEnum = 'cpu' | 'loadavg1' | 'loadavg15' | 'loadavg5' | 'memory' | 'processCount' | 'processRunning' | 'swap';
/**
 * A structure describing informations about RTM
 */
export interface DedicatedServerRtmCommandSize {
  /**
   * Complete command line used for starting this process
   *
   */
  command?: string;
  /**
   * Memory used by this process
   *
   */
  memory?: ComplexTypeUnitAndValue<number>;
}
/**
 * A structure describing informations about opened sockets on the server
 */
export interface DedicatedServerRtmConnection {
  /**
   * Complete command line used for starting this process
   *
   */
  cmdline?: string;
  /**
   * Domain used by the process
   *
   */
  domain?: string;
  /**
   * Path to the program
   *
   */
  exe?: string;
  /**
   * The IP address connected
   *
   */
  ip?: string;
  /**
   * Process ID
   *
   */
  pid?: number;
  /**
   * Port opened
   *
   */
  port?: number;
  /**
   * Name of the process
   *
   */
  procname?: string;
  /**
   * System user ID
   *
   */
  uid?: number;
  /**
   * Username used to start the process
   *
   */
  username?: string;
}
/**
 * A structure describing informations about server cpu
 */
export interface DedicatedServerRtmCpu {
  /**
   * CPU cache size
   *
   */
  cache?: ComplexTypeUnitAndValue<number>;
  /**
   * CPU core number
   *
   */
  core?: number;
  /**
   * CPU frequency
   *
   */
  freq?: ComplexTypeUnitAndValue<number>;
  /**
   * CPU  name
   *
   */
  name?: string;
}
/**
 * Server disks informations
 */
export interface DedicatedServerRtmDisk {
  /**
   * Disk capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<number>;
  /**
   * Disk
   *
   */
  disk: string;
  /**
   * Disk model
   *
   */
  model?: string;
  /**
   * Disk temperature
   *
   */
  temperature?: ComplexTypeUnitAndValue<number>;
}
/**
 * A structure describing SMART health disk status
 */
export interface DedicatedServerRtmDiskSmart {
  /**
   * Current pending sectors
   *
   */
  current_pending_sector?: number;
  /**
   * Multizone error rate
   *
   */
  multizone_error_rate?: number;
  /**
   * Offline seek rate
   *
   */
  offline_seek_performance?: number;
  /**
   * Offline uncorrectable
   *
   */
  offline_uncorrectable?: number;
  /**
   * Other errors
   *
   */
  other_errors?: number;
  /**
   * Realocated event count
   *
   */
  realocated_event_count?: number;
  /**
   * temperature
   *
   */
  temperature_celsius?: number;
  /**
   * UDMA crc error
   *
   */
  udma_crc_error?: number;
  /**
   * Uncorrected read errors
   *
   */
  uncorrected_read_errors?: number;
  /**
   * Uncorrected write errors
   *
   */
  uncorrected_write_errors?: number;
}
/**
 * A structure describing informations about server load
 */
export interface DedicatedServerRtmLoad {
  /**
   * CPU usage
   *
   */
  cpu?: ComplexTypeUnitAndValue<number>;
  /**
   * Load average in the last 1 minute
   *
   */
  loadavg1?: number;
  /**
   * Load average in the last 15 minutes
   *
   */
  loadavg15?: number;
  /**
   * Load average in the last 5 minutes
   *
   */
  loadavg5?: number;
  /**
   * Memory usage
   *
   */
  memory?: ComplexTypeUnitAndValue<number>;
  /**
   * Number of processes using or waiting for CPU time
   *
   */
  processCount?: number;
  /**
   * Number of process running
   *
   */
  processRunning?: number;
  /**
   * Swap usage
   *
   */
  swap?: ComplexTypeUnitAndValue<number>;
  /**
   * Server uptime
   *
   */
  uptime?: number;
}
/**
 * A structure describing informations about server memory
 */
export interface DedicatedServerRtmMemory {
  /**
   * Memory capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<number>;
  /**
   * Memory slot
   *
   */
  slot?: string;
}
/**
 * A structure describing informations about motherboard
 */
export interface DedicatedServerRtmMotherboardHw {
  /**
   * Motherboard manufacturer
   *
   */
  manufacturer?: string;
  /**
   * Motherboard name
   *
   */
  name?: string;
}
/**
 * A structure describing informations about Rtm os
 */
export interface DedicatedServerRtmOs {
  /**
   * OS kernel release
   *
   */
  kernelRelease?: string;
  /**
   * OS kernel version
   *
   */
  kernelVersion?: string;
  /**
   * OS release
   *
   */
  release?: string;
}
/**
 * Server partitions informations
 */
export interface DedicatedServerRtmPartition {
  /**
   * Partition inode
   *
   */
  inodeUsage?: ComplexTypeUnitAndValue<number>;
  /**
   * Partition mount point
   *
   */
  mountPoint?: string;
  /**
   * Partition
   *
   */
  partition: string;
  /**
   * Partition usage
   *
   */
  usage?: ComplexTypeUnitAndValue<number>;
}
/**
 * A structure describing informations about server PCI devices
 */
export interface DedicatedServerRtmPci {
  /**
   * PCI bus device
   *
   */
  bus?: string;
  /**
   * PCI device information
   *
   */
  device?: string;
}
/**
 * Server raid informations
 */
export interface DedicatedServerRtmRaid {
  /**
   * Raid unit
   *
   */
  unit: string;
}
/**
 *  Different RAID status
 */
export type DedicatedServerRtmRaidStatusEnum = 'KO' | 'OK' | 'REBUILDING' | 'UNKNOWN';
/**
 * Server raid volume information
 */
export interface DedicatedServerRtmRaidVolume {
  /**
   * Raid volume capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<number>;
  /**
   * Raid volume chunks
   *
   */
  chunks?: string;
  /**
   * Raid volume label
   *
   */
  label?: string;
  /**
   * Raid volume letter
   *
   */
  letter?: string;
  /**
   * Raid volume phys
   *
   */
  phys?: string;
  /**
   * Raid volume status
   *
   */
  status?: DedicatedServerRtmRaidStatusEnum;
  /**
   * Raid volume stripe
   *
   */
  stripe?: string;
  /**
   * Raid volume synchronization progress
   *
   */
  syncprogress?: string;
  /**
   * Raid volume type
   *
   */
  type?: string;
  /**
   * Raid volume name
   *
   */
  volume?: string;
}
/**
 * Server raid volume port informations
 */
export interface DedicatedServerRtmRaidVolumePort {
  /**
   * Port capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<number>;
  /**
   * Port disk
   *
   */
  disk?: string;
  /**
   * Port model name
   *
   */
  model?: string;
  /**
   * Raid volume port
   *
   */
  port?: string;
  /**
   * Serial of this port
   *
   */
  serial?: string;
  /**
   * Status of this port
   *
   */
  status?: DedicatedServerRtmRaidStatusEnum;
  /**
   * Raid port synchronization progress
   *
   */
  syncprogress?: string;
}
/**
 * Server bandwidth burst details
 */
export interface DedicatedServerServerBurst {
  /**
   * Bandwidth busrt capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<number>;
  /**
   * indicates wether burstable bandwidth is currently active, allowing it to temporarily exceed the normally included bandwidth.OvhToInternet amount, within the limits indicated by the burst.capacity item. It can also be inactiveLocked when temporarily disabled due to overuse, capping it to the included non-burstable bandwidth capacity of bandwidth.OvhToInternet
   *
   */
  status: DedicatedServerBurstStatusEnum;
}
/**
 * SPLA license status
 */
export type DedicatedServerSplaStatusEnum = 'terminated' | 'used' | 'waitingToCheck';
/**
 * SPLA license type
 */
export type DedicatedServerSplaTypeEnum = 'os' | 'sqlstd' | 'sqlweb';
/**
 * All states a Dedicated can in
 */
export type DedicatedServerStateEnum = 'error' | 'hacked' | 'hackedBlocked' | 'ok';
/**
 * distincts support level
 */
export type DedicatedServerSupportLevelEnum = 'critical' | 'fastpath' | 'gs' | 'pro';
/**
 * A structure describing informations support level orderable for this dedicated server
 */
export interface DedicatedServerSupportLevelOrderable {
  /**
   * Support level  orderable
   *
   */
  levels?: DedicatedServerSupportLevelOrderableEnum[];
  /**
   * Is a support level is orderable for this server
   *
   */
  orderable: boolean;
}
/**
 * distincts support level
 */
export type DedicatedServerSupportLevelOrderableEnum = 'critical' | 'fastpath' | 'gs';
/**
 * Hdd replace support request details. 
 */
export interface DedicatedServerSupportReplaceHddInfo {
  /**
   * Disk serial number
   *
   */
  disk_serial: string;
  /**
   * Disk slotId (if any)
   *
   */
  slot_id?: number;
}
/**
 * A structure describing switching informations about this dedicated server
 */
export interface DedicatedServerSwitchingDetails {
  /**
   * Switch name
   *
   */
  name?: string;
}
/**
 * Server tasks
 */
export interface DedicatedServerTask {
  /**
   * Details of this task
   *
   */
  comment?: string;
  /**
   * Completion date
   *
   */
  doneDate?: string;
  /**
   * Function name
   *
   */
  function: DedicatedTaskFunctionEnum;
  /**
   * last update
   *
   */
  lastUpdate?: string;
  /**
   * Task Creation date
   *
   */
  startDate: string;
  /**
   * Task status
   *
   */
  status: DedicatedTaskStatusEnum;
  /**
   * the id of the task
   *
   */
  taskId: number;
}
/**
 * Miscellaneous template capabilities regarding the server.
 */
export interface DedicatedServerTemplateCaps {
  /**
   * This boolean tells if the template supports hybrid install for the considered server.
   *
   */
  hybridSupport: boolean;
}
/**
 * A structure describing traffic informations about this dedicated server
 */
export interface DedicatedServerTrafficDetails {
  /**
   * Monthly input traffic quota allowed
   *
   */
  inputQuotaSize?: ComplexTypeUnitAndValue<number>;
  /**
   * Monthly input traffic consumed this month
   *
   */
  inputQuotaUsed?: ComplexTypeUnitAndValue<number>;
  /**
   * Is bandwidth throttleted for being over quota
   *
   */
  isThrottled?: boolean;
  /**
   * Monthly output traffic quota allowed
   *
   */
  outputQuotaSize?: ComplexTypeUnitAndValue<number>;
  /**
   * Monthly output traffic consumed this month
   *
   */
  outputQuotaUsed?: ComplexTypeUnitAndValue<number>;
  /**
   * Next reset quota date for traffic counter
   *
   */
  resetQuotaDate?: string;
}
/**
 *  traffic orderable 
 */
export type DedicatedServerTrafficOrderEnum = '100Mbps-Unlimited' | '250Mbps-Unlimited' | '500Mbps-Unlimited';
/**
 * A structure describing informations bandwidth orderable for this dedicated server
 */
export interface DedicatedServerTrafficOrderable {
  /**
   * Is traffic orderable for this server
   *
   */
  orderable: boolean;
  /**
   * traffic orderable
   *
   */
  traffic?: DedicatedServerTrafficOrderEnum[];
}
/**
 *  Different USB key capacity in gigabytes
 */
export type DedicatedServerUsbKeyCapacityEnum = 128 | 16 | 256 | 32 | 64;
/**
 * A structure describing informations about orderable USB keys
 */
export interface DedicatedServerUsbKeyOrderableDetails {
  /**
   * Orderable USB keys capacity in gigabytes
   *
   */
  capacity: DedicatedServerUsbKeyCapacityEnum[];
  /**
   * Number of USB keys that can be ordered for this server
   *
   */
  number: number;
  /**
   * Which option is required to order an USB key
   *
   */
  optionRequired?: DedicatedServerOptionRequiredEnum;
  /**
   * Is USB keys orderable for this server
   *
   */
  orderable: boolean;
}
/**
 * A virtual MAC address associated to one or more IPs
 */
export interface DedicatedServerVirtualMac {
  /**
   * Virtual MAC address in 00:00:00:00:00:00 format
   *
   */
  macAddress: string;
  /**
   * Virtual MAC address type
   *
   */
  type: DedicatedServerVmacTypeEnum;
}
/**
 *  ip address linked with this virtual mac address
 */
export interface DedicatedServerVirtualMacManagement {
  /**
   * IP address
   *
   */
  ipAddress: string;
  /**
   * Friendly name of your Virtual Machine behind this IP/MAC
   *
   */
  virtualMachineName: string;
}
/**
 * Distinct type of virtual mac
 */
export type DedicatedServerVmacTypeEnum = 'ovh' | 'vmware';
/**
 * A structure describing informations about the backup cloud feature
 */
export interface DedicatedServerBackupBackupContainer {
  /**
   * /cloud project which the container belongs to.
   *
   */
  cloudProject?: DedicatedServerBackupBackupProject;
  /**
   * Container id (can also be used to retrieve the resource in the /cloud api).
   *
   */
  id?: string;
  /**
   * Container name.
   *
   */
  name?: string;
  /**
   * Quota on the current container
   *
   */
  quota?: DedicatedServerBackupBackupQuota;
  /**
   * The cloud region which the container belongs to.
   *
   */
  region?: string;
  /**
   * Sftp connection info
   *
   */
  sftp?: DedicatedServerBackupBackupSftp;
  /**
   * Swift related information to reach the container
   *
   */
  swift?: DedicatedServerBackupBackupSwift;
}
/**
 * Backup cloud offer description for a dedicated server
 */
export interface DedicatedServerBackupBackupOffer {
  /**
   * Archive container max size.
   *
   */
  maxArchive?: ComplexTypeUnitAndValue<number>;
  /**
   * Archive volume r/w bandwidth limit: read/write volume offered per month on the container.
   *
   */
  maxBandwidthArchive?: ComplexTypeUnitAndValue<number>;
  /**
   * Storage volume r/w bandwidth limit: read/write volume offered per month on the container.
   *
   */
  maxBandwidthStorage?: ComplexTypeUnitAndValue<number>;
  /**
   * Storage container max size.
   *
   */
  maxStorage?: ComplexTypeUnitAndValue<number>;
}
/**
 * A structure describing regenerated passwords
 */
export interface DedicatedServerBackupBackupPassword {
  /**
   * Password to reach the archive container through the sftp gw.
   *
   */
  sftpArchive?: string;
  /**
   * Password to reach the storage container through the sftp gw.
   *
   */
  sftpStorage?: string;
  /**
   * Password to reach the archive container through swift.
   *
   */
  swiftArchive?: string;
  /**
   * Password to reach the storage container through swift.
   *
   */
  swiftStorage?: string;
}
/**
 * Cloud project struct.
 */
export interface DedicatedServerBackupBackupProject {
  /**
   * Project description.
   *
   */
  description?: string;
  /**
   * Project id.
   *
   */
  projectId?: string;
}
/**
 * A structure describing quota associated to the current container
 */
export interface DedicatedServerBackupBackupQuota {
  /**
   * Volume r/w bandwidth limit: read/write volume offered per month on the container.
   *
   */
  maxBandwidth?: ComplexTypeUnitAndValue<number>;
  /**
   * Container max size.
   *
   */
  maxStorage?: ComplexTypeUnitAndValue<number>;
  /**
   * Volume usage.
   *
   */
  storageUsed?: ComplexTypeUnitAndValue<number>;
  /**
   * Volume usage in percent
   *
   */
  usagePercent?: number;
}
/**
 * A structure describing the SFTP access to a container
 */
export interface DedicatedServerBackupBackupSftp {
  /**
   * Sftp password.
   *
   */
  password?: string;
  /**
   * Url
   *
   */
  url?: string;
  /**
   * Username
   *
   */
  username?: string;
}
/**
 * A structure describing the status of your backup
 */
export interface DedicatedServerBackupBackupStatus {
  /**
   * Status code
   *
   */
  code: DedicatedServerBackupBackupStatusCodeEnum;
  /**
   * Status code reason (when not ok)
   *
   */
  reason?: string;
}
/**
 * Possible values for backup status code
 */
export type DedicatedServerBackupBackupStatusCodeEnum = 'DELETING' | 'ERROR' | 'OK' | 'SUSPENDED' | 'SUSPENDING' | 'UNKNOWN' | 'WAITING_AGREEMENTS_VALIDATION';
/**
 * A structure describing the information related to Openstack to reach the container.
 */
export interface DedicatedServerBackupBackupSwift {
  /**
   * Auth url.
   *
   */
  authUrl?: string;
  /**
   * Openstack password.
   *
   */
  password?: string;
  /**
   * Openstack username to use swift.
   *
   */
  username?: string;
}
/**
 * Service monitoring Email alert
 */
export interface DedicatedServerEmailAlert {
  /**
   * This monitoring id
   *
   */
  alertId: number;
  /**
   * Alert destination
   *
   */
  email: string;
  /**
   * Is this monitor enabled
   *
   */
  enabled: boolean;
  /**
   * Alert language
   *
   */
  language: DedicatedServerAlertLanguageEnum;
}
/**
 * Physical KVM
 */
export interface DedicatedServerKvm {
  /**
   * KVM expiration date
   *
   */
  expiration: string;
  /**
   * KVM access ip
   *
   */
  ip?: string;
  /**
   * KVM hostname
   *
   */
  name: string;
}
/**
 * Available boot options
 */
export interface DedicatedServerNetbootOption {
  /**
   * The option of this boot
   *
   */
  option: DedicatedServerBootOptionEnum;
  /**
   * the value of this option
   *
   */
  value: string;
}
/**
 * Service monitoring details
 */
export interface DedicatedServerServiceMonitoring {
  /**
   * The expected return
   *
   */
  challengeText?: string;
  /**
   * Is this service monitoring is enabled
   *
   */
  enabled: boolean;
  /**
   * The test interval in seconds
   *
   */
  interval: DedicatedServerMonitoringIntervalEnum;
  /**
   * The ip to monitor
   *
   */
  ip: string;
  /**
   * This monitoring id
   *
   */
  monitoringId: number;
  /**
   * The service port to monitor
   *
   */
  port: number;
  /**
   * The protocol to use
   *
   */
  protocol: DedicatedServerMonitoringProtocolEnum;
  /**
   * The URL to test
   *
   */
  url?: string;
}
/**
 * Monitoring SMS alert details, This service is currently not supported for servers at BHS 
 */
export interface DedicatedServerSmsAlert {
  /**
   * Id of this alert
   *
   */
  alertId: number;
  /**
   * Is this alert enabled
   *
   */
  enabled: boolean;
  /**
   * Daily hour end time for SMS notification
   *
   */
  fromHour?: number;
  /**
   * Alert language
   *
   */
  language: DedicatedServerAlertLanguageEnum;
  /**
   * Alert destination
   *
   */
  phoneNumberTo: string;
  /**
   * Your SMS account
   *
   */
  smsAccount: string;
  /**
   * Daily hour start time for SMS notification
   *
   */
  toHour?: number;
}
/**
 * SPLA licenses management
 */
export interface DedicatedServerSpla {
  /**
   * License id
   *
   */
  id: number;
  /**
   * Last update timestamp
   *
   */
  lastUpdate: string;
  /**
   * License serial number
   *
   */
  serialNumber: string;
  /**
   * Status of license
   *
   */
  status: DedicatedServerSplaStatusEnum;
  /**
   * License type
   *
   */
  type: DedicatedServerSplaTypeEnum;
}
/**
 * Your VirtualNetworkInterface
 */
export interface DedicatedVirtualNetworkInterfaceVirtualNetworkInterface {
  /**
   * VirtualNetworkInterface mode
   *
   */
  mode: DedicatedVirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum;
  /**
   * User defined VirtualNetworkInterface name
   *
   */
  name: string;
  /**
   * Server bound to this VirtualNetworkInterface
   *
   */
  serverName: string;
  /**
   * VirtualNetworkInterface unique id
   *
   */
  uuid: string;
  /**
   * vRack name
   *
   */
  vrack?: string;
}
/**
 * Available VirtualNetworkInterface modes
 */
export type DedicatedVirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum = 'public' | 'vrack';
/**
 * All versions for Windows products
 */
export type LicenseWindowsOsVersionEnum = 'WINDOWS_SERVER_2003_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2003_STANDARD_EDITION' | 'WINDOWS_SERVER_2003_WEB_EDITION' | 'WINDOWS_SERVER_2003_WEB_EDITION_2_CPU' | 'WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION' | 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION' | 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_STANDARD_EDITION' | 'WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_WEB_EDITION' | 'WINDOWS_SERVER_2008_WEB_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_WEB_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_WEB_STANDARD_EDITION' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU' | 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_STANDARD_EDITION' | 'WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU' | 'WINDOWS_SERVER_2012_WEB_EDITION' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES' | 'windows-server-2008-license-datacenter-edition-1-cpu' | 'windows-server-2008-license-datacenter-edition-2-cpu' | 'windows-server-2008-license-datacenter-edition-4-cpu' | 'windows-server-2008-license-enterprise-edition-1-cpu' | 'windows-server-2008-license-enterprise-edition-2-cpu' | 'windows-server-2008-license-enterprise-edition-4-cpu' | 'windows-server-2008-license-standard-edition-1-cpu' | 'windows-server-2008-license-standard-edition-2-cpu' | 'windows-server-2008-license-standard-edition-4-cpu' | 'windows-server-2008-license-web-edition-1-cpu' | 'windows-server-2008-license-web-edition-2-cpu' | 'windows-server-2008-license-web-edition-4-cpu' | 'windows-server-2012-license-datacenter-edition-1-cpu' | 'windows-server-2012-license-datacenter-edition-2-cpu' | 'windows-server-2012-license-datacenter-edition-4-cpu' | 'windows-server-2012-license-standard-edition-1-cpu' | 'windows-server-2012-license-standard-edition-2-cpu' | 'windows-server-2012-license-standard-edition-4-cpu' | 'windows-server-2016-license-datacenter-edition-1-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-8-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-8-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-8-cores' | 'windows-server-2016-license-standard-edition-1-cpu-10-cores' | 'windows-server-2016-license-standard-edition-1-cpu-12-cores' | 'windows-server-2016-license-standard-edition-1-cpu-14-cores' | 'windows-server-2016-license-standard-edition-1-cpu-16-cores' | 'windows-server-2016-license-standard-edition-1-cpu-18-cores' | 'windows-server-2016-license-standard-edition-1-cpu-20-cores' | 'windows-server-2016-license-standard-edition-1-cpu-22-cores' | 'windows-server-2016-license-standard-edition-1-cpu-24-cores' | 'windows-server-2016-license-standard-edition-1-cpu-8-cores' | 'windows-server-2016-license-standard-edition-2-cpu-10-cores' | 'windows-server-2016-license-standard-edition-2-cpu-12-cores' | 'windows-server-2016-license-standard-edition-2-cpu-14-cores' | 'windows-server-2016-license-standard-edition-2-cpu-16-cores' | 'windows-server-2016-license-standard-edition-2-cpu-18-cores' | 'windows-server-2016-license-standard-edition-2-cpu-20-cores' | 'windows-server-2016-license-standard-edition-2-cpu-22-cores' | 'windows-server-2016-license-standard-edition-2-cpu-24-cores' | 'windows-server-2016-license-standard-edition-2-cpu-8-cores' | 'windows-server-2016-license-standard-edition-4-cpu-10-cores' | 'windows-server-2016-license-standard-edition-4-cpu-12-cores' | 'windows-server-2016-license-standard-edition-4-cpu-14-cores' | 'windows-server-2016-license-standard-edition-4-cpu-16-cores' | 'windows-server-2016-license-standard-edition-4-cpu-18-cores' | 'windows-server-2016-license-standard-edition-4-cpu-20-cores' | 'windows-server-2016-license-standard-edition-4-cpu-22-cores' | 'windows-server-2016-license-standard-edition-4-cpu-24-cores' | 'windows-server-2016-license-standard-edition-4-cpu-8-cores' | 'windows-server-2019-license-datacenter-edition-10-cores' | 'windows-server-2019-license-datacenter-edition-12-cores' | 'windows-server-2019-license-datacenter-edition-14-cores' | 'windows-server-2019-license-datacenter-edition-16-cores' | 'windows-server-2019-license-datacenter-edition-18-cores' | 'windows-server-2019-license-datacenter-edition-20-cores' | 'windows-server-2019-license-datacenter-edition-22-cores' | 'windows-server-2019-license-datacenter-edition-24-cores' | 'windows-server-2019-license-datacenter-edition-26-cores' | 'windows-server-2019-license-datacenter-edition-28-cores' | 'windows-server-2019-license-datacenter-edition-30-cores' | 'windows-server-2019-license-datacenter-edition-32-cores' | 'windows-server-2019-license-datacenter-edition-34-cores' | 'windows-server-2019-license-datacenter-edition-36-cores' | 'windows-server-2019-license-datacenter-edition-38-cores' | 'windows-server-2019-license-datacenter-edition-40-cores' | 'windows-server-2019-license-datacenter-edition-42-cores' | 'windows-server-2019-license-datacenter-edition-44-cores' | 'windows-server-2019-license-datacenter-edition-46-cores' | 'windows-server-2019-license-datacenter-edition-48-cores' | 'windows-server-2019-license-datacenter-edition-50-cores' | 'windows-server-2019-license-datacenter-edition-52-cores' | 'windows-server-2019-license-datacenter-edition-54-cores' | 'windows-server-2019-license-datacenter-edition-56-cores' | 'windows-server-2019-license-datacenter-edition-58-cores' | 'windows-server-2019-license-datacenter-edition-60-cores' | 'windows-server-2019-license-datacenter-edition-62-cores' | 'windows-server-2019-license-datacenter-edition-64-cores' | 'windows-server-2019-license-datacenter-edition-8-cores' | 'windows-server-2019-license-standard-edition-10-cores' | 'windows-server-2019-license-standard-edition-12-cores' | 'windows-server-2019-license-standard-edition-14-cores' | 'windows-server-2019-license-standard-edition-16-cores' | 'windows-server-2019-license-standard-edition-18-cores' | 'windows-server-2019-license-standard-edition-20-cores' | 'windows-server-2019-license-standard-edition-22-cores' | 'windows-server-2019-license-standard-edition-24-cores' | 'windows-server-2019-license-standard-edition-26-cores' | 'windows-server-2019-license-standard-edition-28-cores' | 'windows-server-2019-license-standard-edition-30-cores' | 'windows-server-2019-license-standard-edition-32-cores' | 'windows-server-2019-license-standard-edition-34-cores' | 'windows-server-2019-license-standard-edition-36-cores' | 'windows-server-2019-license-standard-edition-38-cores' | 'windows-server-2019-license-standard-edition-40-cores' | 'windows-server-2019-license-standard-edition-42-cores' | 'windows-server-2019-license-standard-edition-44-cores' | 'windows-server-2019-license-standard-edition-46-cores' | 'windows-server-2019-license-standard-edition-48-cores' | 'windows-server-2019-license-standard-edition-50-cores' | 'windows-server-2019-license-standard-edition-52-cores' | 'windows-server-2019-license-standard-edition-54-cores' | 'windows-server-2019-license-standard-edition-56-cores' | 'windows-server-2019-license-standard-edition-58-cores' | 'windows-server-2019-license-standard-edition-60-cores' | 'windows-server-2019-license-standard-edition-62-cores' | 'windows-server-2019-license-standard-edition-64-cores' | 'windows-server-2019-license-standard-edition-8-cores';
/**
 * All SQL Server versions for Windows products
 */
export type LicenseWindowsSqlVersionEnum = 'SQL_SERVER_2008_STANDARD_EDITION' | 'SQL_SERVER_2008_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2008_WEB_EDITION' | 'SQL_SERVER_2008_WEB_EDITION_2_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION' | 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2012_WEB_EDITION_12_CORES' | 'SQL_SERVER_2012_WEB_EDITION_16_CORES' | 'SQL_SERVER_2012_WEB_EDITION_18_CORES' | 'SQL_SERVER_2012_WEB_EDITION_20_CORES' | 'SQL_SERVER_2012_WEB_EDITION_24_CORES' | 'SQL_SERVER_2012_WEB_EDITION_32_CORES' | 'SQL_SERVER_2012_WEB_EDITION_4_CORES' | 'SQL_SERVER_2012_WEB_EDITION_6_CORES' | 'SQL_SERVER_2012_WEB_EDITION_8_CORES';
/**
 * OVH subsidiaries
 */
export type NichandleOvhSubsidiaryEnum = 'ASIA' | 'AU' | 'CA' | 'CZ' | 'DE' | 'ES' | 'EU' | 'FI' | 'FR' | 'GB' | 'IE' | 'IT' | 'LT' | 'MA' | 'NL' | 'PL' | 'PT' | 'QC' | 'SG' | 'SN' | 'TN' | 'US' | 'WE' | 'WS';
/**
 * Secondary dns infos
 */
export interface SecondaryDnsSecondaryDNS {
  /**
   */
  creationDate: string;
  /**
   * secondary dns server
   *
   */
  dns: string;
  /**
   * domain on slave server
   *
   */
  domain: string;
  /**
   * master ip
   *
   */
  ipMaster: string;
}
/**
 * A structure describing informations about secondary dns check field
 */
export interface SecondaryDnsSecondaryDNSCheckField {
  /**
   * The field type to add on your DNS zone for this subDomain
   *
   */
  fieldType: ZoneNamedResolutionFieldTypeEnum;
  /**
   * The field value to add on your DNS zone for this subDomain
   *
   */
  fieldValue: string;
  /**
   * The subdomain to add on your DNS zone for the domain
   *
   */
  subDomain: string;
}
/**
 * A structure describing informations about available nameserver for secondary dns 
 */
export interface SecondaryDnsSecondaryDNSNameServer {
  /**
   * the name server
   *
   */
  hostname: string;
  /**
   */
  ip: string;
  /**
   */
  ipv6?: string;
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
/**
 * Newly created support identifiers
 */
export interface SupportNewMessageInfo {
  /**
   * Message identifier
   *
   */
  messageId: number;
  /**
   * Ticket identifier
   *
   */
  ticketId: number;
  /**
   * Ticket external number
   *
   */
  ticketNumber: number;
}
/**
 * vrack tasks
 */
export interface VrackTask {
  /**
   */
  function: string;
  /**
   */
  id: number;
  /**
   */
  lastUpdate?: string;
  /**
   */
  orderId?: number;
  /**
   */
  serviceName?: string;
  /**
   * Task status
   *
   */
  status: VrackTaskStatusEnum;
  /**
   */
  targetDomain?: string;
  /**
   */
  todoDate?: string;
}
/**
 * All states a vRack Task can be in
 */
export type VrackTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'init' | 'todo';
/**
 * vrack dedicated server interfaces
 */
export interface VrackDedicatedServer {
  /**
   * Dedicated Server
   *
   */
  dedicatedServer: string;
  /**
   * vrack name
   *
   */
  vrack: string;
}
/**
 * Resource record fieldType
 */
export type ZoneNamedResolutionFieldTypeEnum = 'A' | 'AAAA' | 'CAA' | 'CNAME' | 'DKIM' | 'DMARC' | 'LOC' | 'MX' | 'NAPTR' | 'NS' | 'PTR' | 'SPF' | 'SRV' | 'SSHFP' | 'TLSA' | 'TXT';
type PathsDedicatedServerGET = '/dedicated/server' | 
'/dedicated/server/availabilities' | 
'/dedicated/server/availabilities/raw' | 
'/dedicated/server/datacenter/availabilities' | 
'/dedicated/server/osAvailabilities' | 
'/dedicated/server/virtualNetworkInterface/{uuid}' | 
'/dedicated/server/{serviceName}' | 
'/dedicated/server/{serviceName}/backupCloudOfferDetails' | 
'/dedicated/server/{serviceName}/boot' | 
'/dedicated/server/{serviceName}/boot/{bootId}' | 
'/dedicated/server/{serviceName}/boot/{bootId}/option' | 
'/dedicated/server/{serviceName}/boot/{bootId}/option/{option}' | 
'/dedicated/server/{serviceName}/burst' | 
'/dedicated/server/{serviceName}/features/backupCloud' | 
'/dedicated/server/{serviceName}/features/backupFTP' | 
'/dedicated/server/{serviceName}/features/backupFTP/access' | 
'/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks' | 
'/dedicated/server/{serviceName}/features/firewall' | 
'/dedicated/server/{serviceName}/features/ipmi' | 
'/dedicated/server/{serviceName}/features/ipmi/access' | 
'/dedicated/server/{serviceName}/features/ipmi/test' | 
'/dedicated/server/{serviceName}/features/kvm' | 
'/dedicated/server/{serviceName}/firewall/binary/compatible' | 
'/dedicated/server/{serviceName}/firewall/binary/link' | 
'/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes' | 
'/dedicated/server/{serviceName}/install/compatibleTemplates' | 
'/dedicated/server/{serviceName}/install/hardwareRaidProfile' | 
'/dedicated/server/{serviceName}/install/hardwareRaidSize' | 
'/dedicated/server/{serviceName}/install/status' | 
'/dedicated/server/{serviceName}/install/templateCapabilities' | 
'/dedicated/server/{serviceName}/intervention' | 
'/dedicated/server/{serviceName}/intervention/{interventionId}' | 
'/dedicated/server/{serviceName}/ipCanBeMovedTo' | 
'/dedicated/server/{serviceName}/ipCountryAvailable' | 
'/dedicated/server/{serviceName}/ips' | 
'/dedicated/server/{serviceName}/license/compliantWindows' | 
'/dedicated/server/{serviceName}/license/compliantWindowsSqlServer' | 
'/dedicated/server/{serviceName}/mrtg' | 
'/dedicated/server/{serviceName}/networkInterfaceController' | 
'/dedicated/server/{serviceName}/networkInterfaceController/{mac}' | 
'/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg' | 
'/dedicated/server/{serviceName}/option' | 
'/dedicated/server/{serviceName}/option/{option}' | 
'/dedicated/server/{serviceName}/orderable/backupStorage' | 
'/dedicated/server/{serviceName}/orderable/bandwidth' | 
'/dedicated/server/{serviceName}/orderable/bandwidthvRack' | 
'/dedicated/server/{serviceName}/orderable/feature' | 
'/dedicated/server/{serviceName}/orderable/ip' | 
'/dedicated/server/{serviceName}/orderable/kvm' | 
'/dedicated/server/{serviceName}/orderable/kvmExpress' | 
'/dedicated/server/{serviceName}/orderable/professionalUse' | 
'/dedicated/server/{serviceName}/orderable/traffic' | 
'/dedicated/server/{serviceName}/orderable/usbKey' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer' | 
'/dedicated/server/{serviceName}/secondaryDnsNameDomainToken' | 
'/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable' | 
'/dedicated/server/{serviceName}/serviceInfos' | 
'/dedicated/server/{serviceName}/serviceMonitoring' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}' | 
'/dedicated/server/{serviceName}/specifications/hardware' | 
'/dedicated/server/{serviceName}/specifications/ip' | 
'/dedicated/server/{serviceName}/specifications/network' | 
'/dedicated/server/{serviceName}/spla' | 
'/dedicated/server/{serviceName}/spla/{id}' | 
'/dedicated/server/{serviceName}/statistics' | 
'/dedicated/server/{serviceName}/statistics/chart' | 
'/dedicated/server/{serviceName}/statistics/connection' | 
'/dedicated/server/{serviceName}/statistics/cpu' | 
'/dedicated/server/{serviceName}/statistics/disk' | 
'/dedicated/server/{serviceName}/statistics/disk/{disk}' | 
'/dedicated/server/{serviceName}/statistics/disk/{disk}/smart' | 
'/dedicated/server/{serviceName}/statistics/load' | 
'/dedicated/server/{serviceName}/statistics/memory' | 
'/dedicated/server/{serviceName}/statistics/motherboard' | 
'/dedicated/server/{serviceName}/statistics/os' | 
'/dedicated/server/{serviceName}/statistics/partition' | 
'/dedicated/server/{serviceName}/statistics/partition/{partition}' | 
'/dedicated/server/{serviceName}/statistics/partition/{partition}/chart' | 
'/dedicated/server/{serviceName}/statistics/pci' | 
'/dedicated/server/{serviceName}/statistics/process' | 
'/dedicated/server/{serviceName}/statistics/raid' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}' | 
'/dedicated/server/{serviceName}/task' | 
'/dedicated/server/{serviceName}/task/{taskId}' | 
'/dedicated/server/{serviceName}/virtualMac' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}' | 
'/dedicated/server/{serviceName}/virtualNetworkInterface' | 
'/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}' | 
'/dedicated/server/{serviceName}/vrack' | 
'/dedicated/server/{serviceName}/vrack/{vrack}' | 
'/dedicated/server/{serviceName}/vrack/{vrack}/mrtg';

type PathsDedicatedServerPUT = '/dedicated/server/{serviceName}' | 
'/dedicated/server/{serviceName}/burst' | 
'/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/server/{serviceName}/features/firewall' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}' | 
'/dedicated/server/{serviceName}/serviceInfos' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}' | 
'/dedicated/server/{serviceName}/spla/{id}';

type PathsDedicatedServerPOST = '/dedicated/server/{serviceName}/authenticationSecret' | 
'/dedicated/server/{serviceName}/changeContact' | 
'/dedicated/server/{serviceName}/confirmTermination' | 
'/dedicated/server/{serviceName}/features/backupCloud' | 
'/dedicated/server/{serviceName}/features/backupCloud/password' | 
'/dedicated/server/{serviceName}/features/backupFTP' | 
'/dedicated/server/{serviceName}/features/backupFTP/access' | 
'/dedicated/server/{serviceName}/features/backupFTP/password' | 
'/dedicated/server/{serviceName}/features/ipmi/access' | 
'/dedicated/server/{serviceName}/features/ipmi/resetInterface' | 
'/dedicated/server/{serviceName}/features/ipmi/resetSessions' | 
'/dedicated/server/{serviceName}/features/ipmi/test' | 
'/dedicated/server/{serviceName}/install/start' | 
'/dedicated/server/{serviceName}/ipBlockMerge' | 
'/dedicated/server/{serviceName}/ipMove' | 
'/dedicated/server/{serviceName}/license/windows' | 
'/dedicated/server/{serviceName}/reboot' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains' | 
'/dedicated/server/{serviceName}/serviceMonitoring' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms' | 
'/dedicated/server/{serviceName}/spla' | 
'/dedicated/server/{serviceName}/spla/{id}/revoke' | 
'/dedicated/server/{serviceName}/support/replace/hardDiskDrive' | 
'/dedicated/server/{serviceName}/task/{taskId}/cancel' | 
'/dedicated/server/{serviceName}/terminate' | 
'/dedicated/server/{serviceName}/virtualMac' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress';

type PathsDedicatedServerDELETE = '/dedicated/server/{serviceName}/features/backupCloud' | 
'/dedicated/server/{serviceName}/features/backupFTP' | 
'/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/server/{serviceName}/option/{option}' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}' | 
'/dedicated/server/{serviceName}/vrack/{vrack}';

export class ApiDedicatedServer extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the DEDICATED service
   * List available services
   */
  public get(path: '/dedicated/server'): Promise<string[]>;
  /**
   * List the availability of dedicated server
   * List the availability of dedicated server
   */
  public get(path: '/dedicated/server/availabilities', params: {country: NichandleOvhSubsidiaryEnum, hardware?: string}): Promise<DedicatedAvailabilities[]>;
  /**
   * List the availability of dedicated server (RAW)
   * List the availability of dedicated server
   */
  public get(path: '/dedicated/server/availabilities/raw'): Promise<DedicatedAvailabilitiesRaw[]>;
  /**
   * List the availability of dedicated server
   * List the availability of dedicated server
   */
  public get(path: '/dedicated/server/datacenter/availabilities', params: {datacenters?: string, excludeDatacenters?: boolean, memory?: string, planCode?: string, server?: string, storage?: string}): Promise<DedicatedDatacenterAvailability[]>;
  /**
   * List the operating systems available for a specified hardware reference
   * List the os available for a specified hardware reference
   */
  public get(path: '/dedicated/server/osAvailabilities', params: {hardware: string}): Promise<DedicatedOsAvailabilitiesEnum[]>;
  /**
   * Get a VirtualNetworkInterface details
   * Get VirtualNetworkInterface details
   */
  public get(path: '/dedicated/server/virtualNetworkInterface/{uuid}', params: {uuid: string}): Promise<DedicatedVirtualNetworkInterfaceVirtualNetworkInterface>;
  /**
   * Server informations
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}', params: {serviceName: string}): Promise<DedicatedServerDedicated>;
  /**
   * backupCloudOfferDetails operations
   * Get details on offered backup cloud if available for the current server
   */
  public get(path: '/dedicated/server/{serviceName}/backupCloudOfferDetails', params: {serviceName: string}): Promise<DedicatedServerBackupBackupOffer>;
  /**
   * List the dedicated.server.Netboot objects
   * Server compatibles netboots
   */
  public get(path: '/dedicated/server/{serviceName}/boot', params: {serviceName: string, bootType?: DedicatedServerBootTypeEnum}): Promise<number[]>;
  /**
   * Available boots
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/boot/{bootId}', params: {serviceName: string, bootId: number}): Promise<DedicatedServerNetboot>;
  /**
   * List the dedicated.server.netbootOption objects
   * Option used on this netboot
   */
  public get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option', params: {serviceName: string, bootId: number}): Promise<DedicatedServerBootOptionEnum[]>;
  /**
   * Available boot options
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option/{option}', params: {serviceName: string, bootId: number, option: DedicatedServerBootOptionEnum}): Promise<DedicatedServerNetbootOption>;
  /**
   * Server bandwidth burst details
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/burst', params: {serviceName: string}): Promise<DedicatedServerServerBurst>;
  /**
   * Backup Cloud assigned to this server
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/features/backupCloud', params: {serviceName: string}): Promise<DedicatedServerBackupCloud>;
  /**
   * Backup Ftp assigned to this server
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP', params: {serviceName: string}): Promise<DedicatedServerBackupFtp>;
  /**
   * List the dedicated.server.BackupFtpAcl objects
   * List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
   */
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP/access', params: {serviceName: string}): Promise<string[]>;
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}', params: {serviceName: string, ipBlock: string}): Promise<DedicatedServerBackupFtpAcl>;
  /**
   * authorizableBlocks operations
   * Get all IP blocks that can be used in the ACL
   */
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks', params: {serviceName: string}): Promise<string[]>;
  /**
   * Firewall attached to this server
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/features/firewall', params: {serviceName: string}): Promise<DedicatedServerFirewall>;
  /**
   * Server IPMI interface
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/features/ipmi', params: {serviceName: string}): Promise<DedicatedServerIpmi>;
  /**
   * access operations
   * IPMI access method
   */
  public get(path: '/dedicated/server/{serviceName}/features/ipmi/access', params: {serviceName: string, type: DedicatedServerIpmiAccessTypeEnum}): Promise<DedicatedServerIpmiAccessValue>;
  /**
   * test operations
   * Result of http, ping and identification tests on IPMI interface
   */
  public get(path: '/dedicated/server/{serviceName}/features/ipmi/test', params: {serviceName: string, type: DedicatedServerIpmiTestTypeEnum}): Promise<DedicatedServerIpmiTestResult>;
  /**
   * Physical KVM
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/features/kvm', params: {serviceName: string}): Promise<DedicatedServerKvm>;
  /**
   * compatible operations
   * Get name binary for asa
   */
  public get(path: '/dedicated/server/{serviceName}/firewall/binary/compatible', params: {serviceName: string}): Promise<DedicatedBinaryFirewall>;
  /**
   * link operations
   * Get url of binary to update firewall asa
   */
  public get(path: '/dedicated/server/{serviceName}/firewall/binary/link', params: {serviceName: string, binaryName: string}): Promise<DedicatedBinaryFirewallLink>;
  /**
   * compatibleTemplatePartitionSchemes operations
   * Retrieve compatible  install template partitions scheme
   */
  public get(path: '/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes', params: {serviceName: string, templateName: string}): Promise<string[]>;
  /**
   * compatibleTemplates operations
   * Retrieve compatible  install templates names
   */
  public get(path: '/dedicated/server/{serviceName}/install/compatibleTemplates', params: {serviceName: string}): Promise<DedicatedServerInstallTemplate>;
  /**
   * hardwareRaidProfile operations
   * Retrieve hardware RAID profile
   */
  public get(path: '/dedicated/server/{serviceName}/install/hardwareRaidProfile', params: {serviceName: string}): Promise<DedicatedServerHardwareRaidProfile>;
  /**
   * hardwareRaidSize operations
   * Get hardware RAID size for a given configuration
   */
  public get(path: '/dedicated/server/{serviceName}/install/hardwareRaidSize', params: {serviceName: string, partitionSchemeName: string, templateName: string}): Promise<DedicatedServerHardwareRaidSize>;
  /**
   * status operations
   * Get installation status
   */
  public get(path: '/dedicated/server/{serviceName}/install/status', params: {serviceName: string}): Promise<DedicatedServerInstallationProgressStatus>;
  /**
   * templateCapabilities operations
   * Gives some capabilities regarding the template for the current dedicated server.
   */
  public get(path: '/dedicated/server/{serviceName}/install/templateCapabilities', params: {serviceName: string, templateName: string}): Promise<DedicatedServerTemplateCaps>;
  /**
   * List the dedicated.server.Intervention objects
   * technical intervention history
   */
  public get(path: '/dedicated/server/{serviceName}/intervention', params: {serviceName: string}): Promise<number[]>;
  /**
   * Intervention made on this server
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/intervention/{interventionId}', params: {serviceName: string, interventionId: number}): Promise<DedicatedServerIntervention>;
  /**
   * ipCanBeMovedTo operations
   * Check if given IP can be moved to this server
   */
  public get(path: '/dedicated/server/{serviceName}/ipCanBeMovedTo', params: {serviceName: string, ip: string}): Promise<void>;
  /**
   * ipCountryAvailable operations
   * Retrieve available country for IP order
   */
  public get(path: '/dedicated/server/{serviceName}/ipCountryAvailable', params: {serviceName: string}): Promise<DedicatedServerIpCountryEnum[]>;
  /**
   * ips operations
   * List all ip from server
   */
  public get(path: '/dedicated/server/{serviceName}/ips', params: {serviceName: string}): Promise<string[]>;
  /**
   * compliantWindows operations
   * Get the windows license compliant with your server.
   */
  public get(path: '/dedicated/server/{serviceName}/license/compliantWindows', params: {serviceName: string}): Promise<LicenseWindowsOsVersionEnum[]>;
  /**
   * compliantWindowsSqlServer operations
   * Get the windows SQL server license compliant with your server.
   */
  public get(path: '/dedicated/server/{serviceName}/license/compliantWindowsSqlServer', params: {serviceName: string}): Promise<LicenseWindowsSqlVersionEnum[]>;
  /**
   * mrtg operations
   * Retrieve traffic graph values
   */
  public get(path: '/dedicated/server/{serviceName}/mrtg', params: {serviceName: string, period: DedicatedServerMrtgPeriodEnum, type: DedicatedServerMrtgTypeEnum}): Promise<DedicatedServerMrtgTimestampValue[]>;
  /**
   * List the dedicated.networkInterfaceController.NetworkInterfaceController objects
   * List server networkInterfaceController
   */
  public get(path: '/dedicated/server/{serviceName}/networkInterfaceController', params: {serviceName: string, linkType?: DedicatedNetworkInterfaceControllerNetworkInterfaceControllerLinkTypeEnum}): Promise<string[]>;
  /**
   * Your networkInterfaceController
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}', params: {serviceName: string, mac: string}): Promise<DedicatedNetworkInterfaceControllerNetworkInterfaceController>;
  /**
   * mrtg operations
   * Retrieve traffic graph values
   */
  public get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg', params: {serviceName: string, mac: string, period: DedicatedServerMrtgPeriodEnum, type: DedicatedServerMrtgTypeEnum}): Promise<DedicatedServerMrtgTimestampValue[]>;
  /**
   * List the dedicated.server.Option objects
   * List of dedicated server options
   */
  public get(path: '/dedicated/server/{serviceName}/option', params: {serviceName: string}): Promise<DedicatedServerOptionEnum[]>;
  /**
   * Information about the options of a dedicated server
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/option/{option}', params: {serviceName: string, option: DedicatedServerOptionEnum}): Promise<DedicatedServerOption>;
  /**
   * backupStorage operations
   * Get the backup storage orderable with your server.
   */
  public get(path: '/dedicated/server/{serviceName}/orderable/backupStorage', params: {serviceName: string}): Promise<DedicatedServerBackupStorageOrderable>;
  /**
   * bandwidth operations
   * Get bandwidth orderable with your server.
   */
  public get(path: '/dedicated/server/{serviceName}/orderable/bandwidth', params: {serviceName: string}): Promise<DedicatedServerBandwidthOrderable>;
  /**
   * bandwidthvRack operations
   * Get vRack bandwidth orderable with your server.
   */
  public get(path: '/dedicated/server/{serviceName}/orderable/bandwidthvRack', params: {serviceName: string}): Promise<DedicatedServerBandwidthvRackOrderable>;
  /**
   * feature operations
   * Is this feature orderable with your server
   */
  public get(path: '/dedicated/server/{serviceName}/orderable/feature', params: {serviceName: string, feature: DedicatedServerOrderableSysFeatureEnum}): Promise<boolean>;
  /**
   * ip operations
   * Get IP orderable with your server.
   */
  public get(path: '/dedicated/server/{serviceName}/orderable/ip', params: {serviceName: string}): Promise<DedicatedServerIpOrderable>;
  /**
   * kvm operations
   * Is a KVM orderable with your server
   */
  public get(path: '/dedicated/server/{serviceName}/orderable/kvm', params: {serviceName: string}): Promise<boolean>;
  /**
   * kvmExpress operations
   * Is a KVM express orderable with your server
   */
  public get(path: '/dedicated/server/{serviceName}/orderable/kvmExpress', params: {serviceName: string}): Promise<boolean>;
  /**
   * professionalUse operations
   * Is professional use orderable with your server
   */
  public get(path: '/dedicated/server/{serviceName}/orderable/professionalUse', params: {serviceName: string}): Promise<boolean>;
  /**
   * traffic operations
   * Get orderable traffic with your server.
   */
  public get(path: '/dedicated/server/{serviceName}/orderable/traffic', params: {serviceName: string}): Promise<DedicatedServerTrafficOrderable>;
  /**
   * usbKey operations
   * Get USB keys orderable with your server
   */
  public get(path: '/dedicated/server/{serviceName}/orderable/usbKey', params: {serviceName: string}): Promise<DedicatedServerUsbKeyOrderableDetails>;
  /**
   * List the secondaryDns.SecondaryDNS objects
   * List of secondary dns domain name
   */
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains', params: {serviceName: string}): Promise<string[]>;
  /**
   * Secondary dns infos
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}', params: {serviceName: string, domain: string}): Promise<SecondaryDnsSecondaryDNS>;
  /**
   * dnsServer operations
   * domain name server informations
   */
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer', params: {serviceName: string, domain: string}): Promise<SecondaryDnsSecondaryDNSNameServer>;
  /**
   * secondaryDnsNameDomainToken operations
   * DNS field to temporarily add to your zone so that we can verify you are the owner of this domain
   */
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsNameDomainToken', params: {serviceName: string, domain: string}): Promise<SecondaryDnsSecondaryDNSCheckField>;
  /**
   * secondaryDnsNameServerAvailable operations
   * Secondary nameServer available for your Server
   */
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable', params: {serviceName: string}): Promise<SecondaryDnsSecondaryDNSNameServer>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
   * List the dedicated.server.serviceMonitoring objects
   * Service monitoring details
   */
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring', params: {serviceName: string}): Promise<number[]>;
  /**
   * Service monitoring details
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}', params: {serviceName: string, monitoringId: number}): Promise<DedicatedServerServiceMonitoring>;
  /**
   * List the dedicated.server.emailAlert objects
   * Service monitoring alert by email
   */
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email', params: {serviceName: string, monitoringId: number}): Promise<number[]>;
  /**
   * Service monitoring Email alert
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}', params: {serviceName: string, monitoringId: number, alertId: number}): Promise<DedicatedServerEmailAlert>;
  /**
   * List the dedicated.server.smsAlert objects
   * Service monitoring alert by SMS
   */
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms', params: {serviceName: string, monitoringId: number}): Promise<number[]>;
  /**
   * Monitoring SMS alert details, This service is currently not supported for servers at BHS 
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}', params: {serviceName: string, monitoringId: number, alertId: number}): Promise<DedicatedServerSmsAlert>;
  /**
   * hardware operations
   * Retrieve hardware informations about this dedicated server
   */
  public get(path: '/dedicated/server/{serviceName}/specifications/hardware', params: {serviceName: string}): Promise<DedicatedServerHardwareSpecifications>;
  /**
   * ip operations
   * Retrieve IP capabilities about this dedicated server
   */
  public get(path: '/dedicated/server/{serviceName}/specifications/ip', params: {serviceName: string}): Promise<DedicatedServerIpOrderable>;
  /**
   * network operations
   * Retrieve network informations about this dedicated server
   */
  public get(path: '/dedicated/server/{serviceName}/specifications/network', params: {serviceName: string}): Promise<DedicatedServerNetworkSpecifications>;
  /**
   * List the dedicated.server.spla objects
   * Your own SPLA licenses attached to this dedicated server
   */
  public get(path: '/dedicated/server/{serviceName}/spla', params: {serviceName: string, status?: DedicatedServerSplaStatusEnum, type?: DedicatedServerSplaTypeEnum}): Promise<number[]>;
  /**
   * SPLA licenses management
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/spla/{id}', params: {serviceName: string, id: number}): Promise<DedicatedServerSpla>;
  /**
   * Servers statistics sent by RTM (Real Time Monitoring)
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/statistics', params: {serviceName: string}): Promise<DedicatedServerRtm>;
  /**
   * chart operations
   * Retrieve RTM graph values
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/chart', params: {serviceName: string, period: DedicatedServerRtmChartPeriodEnum, type: DedicatedServerRtmChartTypeEnum}): Promise<ComplexTypeChartReturn>;
  /**
   * connection operations
   * Get server opened connections
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/connection', params: {serviceName: string}): Promise<DedicatedServerRtmConnection[]>;
  /**
   * cpu operations
   * Get server cpu informations
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/cpu', params: {serviceName: string}): Promise<DedicatedServerRtmCpu>;
  /**
   * List the dedicated.server.RtmDisk objects
   * Server disks
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/disk', params: {serviceName: string}): Promise<string[]>;
  /**
   * Server disks informations
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}', params: {serviceName: string, disk: string}): Promise<DedicatedServerRtmDisk>;
  /**
   * smart operations
   * Get disk smart informations
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}/smart', params: {serviceName: string, disk: string}): Promise<DedicatedServerRtmDiskSmart>;
  /**
   * load operations
   * Get server load
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/load', params: {serviceName: string}): Promise<DedicatedServerRtmLoad>;
  /**
   * memory operations
   * Get server memory informations
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/memory', params: {serviceName: string}): Promise<DedicatedServerRtmMemory[]>;
  /**
   * motherboard operations
   * Get server motherboard hardware informations
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/motherboard', params: {serviceName: string}): Promise<DedicatedServerRtmMotherboardHw>;
  /**
   * os operations
   * Get server os informations
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/os', params: {serviceName: string}): Promise<DedicatedServerRtmOs>;
  /**
   * List the dedicated.server.RtmPartition objects
   * Server partitions
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/partition', params: {serviceName: string}): Promise<string[]>;
  /**
   * Server partitions informations
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}', params: {serviceName: string, partition: string}): Promise<DedicatedServerRtmPartition>;
  /**
   * chart operations
   * Retrieve partition charts
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}/chart', params: {serviceName: string, partition: string, period: DedicatedServerRtmChartPeriodEnum}): Promise<ComplexTypeChartReturn>;
  /**
   * pci operations
   * Get server PCI devices informations
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/pci', params: {serviceName: string}): Promise<DedicatedServerRtmPci[]>;
  /**
   * process operations
   * Get server process
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/process', params: {serviceName: string}): Promise<DedicatedServerRtmCommandSize[]>;
  /**
   * List the dedicated.server.RtmRaid objects
   * Server raid informations
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/raid', params: {serviceName: string}): Promise<string[]>;
  /**
   * Server raid informations
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}', params: {serviceName: string, unit: string}): Promise<DedicatedServerRtmRaid>;
  /**
   * List the dedicated.server.RtmRaidVolume objects
   * Raid unit volumes
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume', params: {serviceName: string, unit: string}): Promise<string[]>;
  /**
   * Server raid volume information
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}', params: {serviceName: string, unit: string, volume: string}): Promise<DedicatedServerRtmRaidVolume>;
  /**
   * List the dedicated.server.RtmRaidVolumePort objects
   * Raid unit volume ports
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port', params: {serviceName: string, unit: string, volume: string}): Promise<string[]>;
  /**
   * Server raid volume port informations
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}', params: {serviceName: string, unit: string, volume: string, port: string}): Promise<DedicatedServerRtmRaidVolumePort>;
  /**
   * List the dedicated.server.Task objects
   * Dedicated server todos
   */
  public get(path: '/dedicated/server/{serviceName}/task', params: {serviceName: string, function?: DedicatedTaskFunctionEnum, status?: DedicatedTaskStatusEnum}): Promise<number[]>;
  /**
   * Server tasks
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: number}): Promise<DedicatedServerTask>;
  /**
   * List the dedicated.server.VirtualMac objects
   * Virtual MAC addresses of the server
   */
  public get(path: '/dedicated/server/{serviceName}/virtualMac', params: {serviceName: string}): Promise<string[]>;
  /**
   * A virtual MAC address associated to one or more IPs
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}', params: {serviceName: string, macAddress: string}): Promise<DedicatedServerVirtualMac>;
  /**
   * List the dedicated.server.VirtualMacManagement objects
   * List of IPs associated to this Virtual MAC
   */
  public get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress', params: {serviceName: string, macAddress: string}): Promise<string[]>;
  /**
   *  ip address linked with this virtual mac address
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}', params: {serviceName: string, macAddress: string, ipAddress: string}): Promise<DedicatedServerVirtualMacManagement>;
  /**
   * List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects
   * List server VirtualNetworkInterfaces
   */
  public get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface', params: {serviceName: string, mode?: DedicatedVirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum, name?: string, vrack?: string}): Promise<string[]>;
  /**
   * Your VirtualNetworkInterface
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}', params: {serviceName: string, uuid: string}): Promise<DedicatedVirtualNetworkInterfaceVirtualNetworkInterface>;
  /**
   * List the vrack.dedicatedServer objects
   * Server Vracks
   */
  public get(path: '/dedicated/server/{serviceName}/vrack', params: {serviceName: string}): Promise<string[]>;
  /**
   * vrack dedicated server interfaces
   * Get this object properties
   */
  public get(path: '/dedicated/server/{serviceName}/vrack/{vrack}', params: {serviceName: string, vrack: string}): Promise<VrackDedicatedServer>;
  /**
   * mrtg operations
   * Retrieve vrack traffic graph values
   */
  public get(path: '/dedicated/server/{serviceName}/vrack/{vrack}/mrtg', params: {serviceName: string, vrack: string, period: DedicatedServerMrtgPeriodEnum, type: DedicatedServerMrtgTypeEnum}): Promise<DedicatedServerMrtgTimestampValue[]>;
  public get(path: PathsDedicatedServerGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params
  );}
  /**
   * Server informations
   * Alter this object properties
   */
  public put(path: '/dedicated/server/{serviceName}', params: {serviceName: string, bootId?: number, commercialRange?: string, datacenter?: DedicatedDatacenterEnum, ip?: string, linkSpeed?: number, monitoring?: boolean, name?: string, os?: string, professionalUse?: boolean, rack?: string, rescueMail?: string, reverse?: string, rootDevice?: string, serverId?: number, state?: DedicatedServerStateEnum, supportLevel?: DedicatedServerSupportLevelEnum}): Promise<void>;
  /**
   * Server bandwidth burst details
   * Alter this object properties
   */
  public put(path: '/dedicated/server/{serviceName}/burst', params: {serviceName: string, capacity?: ComplexTypeUnitAndValue<number>, status?: DedicatedServerBurstStatusEnum}): Promise<void>;
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Alter this object properties
   */
  public put(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}', params: {serviceName: string, ipBlock: string, cifs?: boolean, ftp?: boolean, isApplied?: boolean, lastUpdate?: string, nfs?: boolean}): Promise<void>;
  /**
   * Firewall attached to this server
   * Alter this object properties
   */
  public put(path: '/dedicated/server/{serviceName}/features/firewall', params: {serviceName: string, enabled?: boolean, firewall?: string, ip?: string, mode?: DedicatedServerFirewallModeEnum, model?: DedicatedServerFirewallModelEnum}): Promise<void>;
  /**
   * Secondary dns infos
   * Alter this object properties
   */
  public put(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}', params: {serviceName: string, domain: string, creationDate?: string, dns?: string, ipMaster?: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/dedicated/server/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: ServiceRenewType, renewalType?: ServiceRenewalTypeEnum, serviceId?: number, status?: ServiceStateEnum}): Promise<void>;
  /**
   * Service monitoring details
   * Alter this object properties
   */
  public put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}', params: {serviceName: string, monitoringId: number, challengeText?: string, enabled?: boolean, interval?: DedicatedServerMonitoringIntervalEnum, ip?: string, port?: number, protocol?: DedicatedServerMonitoringProtocolEnum, url?: string}): Promise<void>;
  /**
   * Service monitoring Email alert
   * Alter this object properties
   */
  public put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}', params: {serviceName: string, monitoringId: number, alertId: number, email?: string, enabled?: boolean, language?: DedicatedServerAlertLanguageEnum}): Promise<void>;
  /**
   * Monitoring SMS alert details, This service is currently not supported for servers at BHS 
   * Alter this object properties
   */
  public put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}', params: {serviceName: string, monitoringId: number, alertId: number, enabled?: boolean, fromHour?: number, language?: DedicatedServerAlertLanguageEnum, phoneNumberTo?: string, smsAccount?: string, toHour?: number}): Promise<void>;
  /**
   * SPLA licenses management
   * Alter this object properties
   */
  public put(path: '/dedicated/server/{serviceName}/spla/{id}', params: {serviceName: string, id: number, lastUpdate?: string, serialNumber?: string, status?: DedicatedServerSplaStatusEnum, type?: DedicatedServerSplaTypeEnum}): Promise<void>;
  public put(path: PathsDedicatedServerPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params
  );}
  /**
   * authenticationSecret operations
   * Retrieve secret to connect to the server / application
   */
  public post(path: '/dedicated/server/{serviceName}/authenticationSecret', params: {serviceName: string}): Promise<DedicatedServerAccess[]>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/dedicated/server/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/dedicated/server/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum, token: string}): Promise<string>;
  /**
   * Backup Cloud assigned to this server
   * Create a new storage backup space associated to server
   */
  public post(path: '/dedicated/server/{serviceName}/features/backupCloud', params: {serviceName: string, cloudProjectId?: string, projectDescription?: string}): Promise<DedicatedServerBackupCloud>;
  /**
   * password operations
   * Change your cloud account password
   */
  public post(path: '/dedicated/server/{serviceName}/features/backupCloud/password', params: {serviceName: string}): Promise<DedicatedServerBackupBackupPassword>;
  /**
   * Backup Ftp assigned to this server
   * Create a new Backup FTP space
   */
  public post(path: '/dedicated/server/{serviceName}/features/backupFTP', params: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
   * List the dedicated.server.BackupFtpAcl objects
   * Create a new Backup FTP ACL
   */
  public post(path: '/dedicated/server/{serviceName}/features/backupFTP/access', params: {serviceName: string, cifs: boolean, ftp?: boolean, ipBlock: string, nfs: boolean}): Promise<DedicatedServerTask>;
  /**
   * password operations
   * Change your Backup FTP password
   */
  public post(path: '/dedicated/server/{serviceName}/features/backupFTP/password', params: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
   * access operations
   * Request an acces on KVM IPMI interface
   */
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/access', params: {serviceName: string, ipToAllow?: string, sshKey?: string, ttl: DedicatedServerCacheTTLEnum, type: DedicatedServerIpmiAccessTypeEnum}): Promise<DedicatedServerTask>;
  /**
   * resetInterface operations
   * Reset KVM IPMI interface
   */
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/resetInterface', params: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
   * resetSessions operations
   * Reset KVM IPMI sessions
   */
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/resetSessions', params: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
   * test operations
   * Launch test on KVM IPMI interface
   */
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/test', params: {serviceName: string, ttl: DedicatedServerCacheTTLEnum, type: DedicatedServerIpmiTestTypeEnum}): Promise<DedicatedServerTask>;
  /**
   * start operations
   * Start an install
   */
  public post(path: '/dedicated/server/{serviceName}/install/start', params: {serviceName: string, details?: DedicatedServerInstallCustom, partitionSchemeName?: string, templateName: string}): Promise<DedicatedServerTask>;
  /**
   * ipBlockMerge operations
   * Merge a splitted block and route it to the choosen server. You cannot undo this operation
   */
  public post(path: '/dedicated/server/{serviceName}/ipBlockMerge', params: {serviceName: string, block: string}): Promise<DedicatedServerTask>;
  /**
   * ipMove operations
   * Move an Ip failover to this server
   */
  public post(path: '/dedicated/server/{serviceName}/ipMove', params: {serviceName: string, ip: string}): Promise<DedicatedServerTask>;
  /**
   * windows operations
   * Add your existing windows license serial to this dedicated server. Will be manageable in /license/windows.
   */
  public post(path: '/dedicated/server/{serviceName}/license/windows', params: {serviceName: string, licenseId: string, version: LicenseWindowsOsVersionEnum}): Promise<DedicatedServerTask>;
  /**
   * reboot operations
   * Hard reboot this server
   */
  public post(path: '/dedicated/server/{serviceName}/reboot', params: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
   * List the secondaryDns.SecondaryDNS objects
   * add a domain on secondary dns
   */
  public post(path: '/dedicated/server/{serviceName}/secondaryDnsDomains', params: {serviceName: string, domain: string, ip?: string}): Promise<void>;
  /**
   * List the dedicated.server.serviceMonitoring objects
   * Add a new service monitoring
   */
  public post(path: '/dedicated/server/{serviceName}/serviceMonitoring', params: {serviceName: string, challengeText?: string, enabled: boolean, interval: DedicatedServerMonitoringIntervalEnum, ip: string, port: number, protocol: DedicatedServerMonitoringProtocolEnum, url?: string}): Promise<DedicatedServerServiceMonitoring>;
  /**
   * List the dedicated.server.emailAlert objects
   * Add a new email alert
   */
  public post(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email', params: {serviceName: string, monitoringId: number, email: string, language: DedicatedServerAlertLanguageEnum}): Promise<DedicatedServerEmailAlert>;
  /**
   * List the dedicated.server.smsAlert objects
   * Create a SMS alert
   */
  public post(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms', params: {serviceName: string, monitoringId: number, fromHour?: number, language: DedicatedServerAlertLanguageEnum, phoneNumberTo: string, smsAccount: string, toHour?: number}): Promise<DedicatedServerSmsAlert>;
  /**
   * List the dedicated.server.spla objects
   * Add a new SPLA license
   */
  public post(path: '/dedicated/server/{serviceName}/spla', params: {serviceName: string, serialNumber: string, type: DedicatedServerSplaTypeEnum}): Promise<number>;
  /**
   * revoke operations
   * Revoke an SPLA license
   */
  public post(path: '/dedicated/server/{serviceName}/spla/{id}/revoke', params: {serviceName: string, id: number}): Promise<void>;
  /**
   * hardDiskDrive operations
   * Ask for a broken HDD replacement
   */
  public post(path: '/dedicated/server/{serviceName}/support/replace/hardDiskDrive', params: {serviceName: string, comment: string, disks: DedicatedServerSupportReplaceHddInfo[], inverse: boolean}): Promise<SupportNewMessageInfo>;
  /**
   * cancel operations
   * this action stop the task progression if it's possible
   */
  public post(path: '/dedicated/server/{serviceName}/task/{taskId}/cancel', params: {serviceName: string, taskId: number}): Promise<void>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/dedicated/server/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
   * List the dedicated.server.VirtualMac objects
   * Add a virtual mac to an IP address
   */
  public post(path: '/dedicated/server/{serviceName}/virtualMac', params: {serviceName: string, ipAddress: string, type: DedicatedServerVmacTypeEnum, virtualMachineName: string}): Promise<DedicatedServerTask>;
  /**
   * List the dedicated.server.VirtualMacManagement objects
   * Add an IP to this Virtual MAC
   */
  public post(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress', params: {serviceName: string, macAddress: string, ipAddress: string, virtualMachineName: string}): Promise<DedicatedServerTask>;
  public post(path: PathsDedicatedServerPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params
  );}
  /**
   * Backup Cloud assigned to this server
   * Deactivate the cloud backup associated to the server. This does not delete container data.
   */
  public delete(path: '/dedicated/server/{serviceName}/features/backupCloud', params: {serviceName: string}): Promise<void>;
  /**
   * Backup Ftp assigned to this server
   * Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
   */
  public delete(path: '/dedicated/server/{serviceName}/features/backupFTP', params: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Revoke this ACL
   */
  public delete(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}', params: {serviceName: string, ipBlock: string}): Promise<DedicatedServerTask>;
  /**
   * Information about the options of a dedicated server
   * Release a given option
   */
  public delete(path: '/dedicated/server/{serviceName}/option/{option}', params: {serviceName: string, option: DedicatedServerOptionEnum}): Promise<void>;
  /**
   * Secondary dns infos
   * remove this domain
   */
  public delete(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}', params: {serviceName: string, domain: string}): Promise<void>;
  /**
   * Service monitoring details
   * Remove this service monitoring
   */
  public delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}', params: {serviceName: string, monitoringId: number}): Promise<void>;
  /**
   * Service monitoring Email alert
   * Remove this Email alert monitoring
   */
  public delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}', params: {serviceName: string, monitoringId: number, alertId: number}): Promise<void>;
  /**
   * Monitoring SMS alert details, This service is currently not supported for servers at BHS 
   * Remove this SMS alert
   */
  public delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}', params: {serviceName: string, monitoringId: number, alertId: number}): Promise<void>;
  /**
   *  ip address linked with this virtual mac address
   * Remove this ip from virtual mac , if you remove the last linked Ip, virtualmac will be deleted
   */
  public delete(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}', params: {serviceName: string, macAddress: string, ipAddress: string}): Promise<DedicatedServerTask>;
  /**
   * vrack dedicated server interfaces
   * remove this server from this vrack
   */
  public delete(path: '/dedicated/server/{serviceName}/vrack/{vrack}', params: {serviceName: string, vrack: string}): Promise<VrackTask>;
  public delete(path: PathsDedicatedServerDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiDedicatedServer;
