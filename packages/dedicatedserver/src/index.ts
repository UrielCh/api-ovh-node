import { ApiCommon } from '@ovh-api/common';
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
  timestamp?: Number;
  /**
   */
  value?: Number;
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
 * A structure describing the availabilities of dedicated server
 */
export interface DedicatedAvailabilities {
  /**
   * The hardware availability for each datacenter which composed a region
   *
   */
  datacenters?: DedicatedAvailabilityDatacenter[];
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
  availability?: DedicatedAvailabilityEnum;
  /**
   * Real stock in database
   *
   */
  available?: Number;
  /**
   * Stock in datacenter
   *
   */
  incomingDatacenter?: Number;
  /**
   * Last availability rule applied
   *
   */
  lastRule?: string;
  /**
   * Ordered count
   *
   */
  ordered?: Number;
  /**
   * Validating order count
   *
   */
  orderedCheck?: Number;
  /**
   * Blockbuster stock count
   *
   */
  parentAvailable?: Number;
  /**
   * Product reference
   *
   */
  reference?: string;
  /**
   * Real stock (considering order in validating)
   *
   */
  trueAvailable?: Number;
  /**
   * 24H count
   *
   */
  trueAvailable24H?: Number;
  /**
   * 4H count
   *
   */
  trueAvailable4H?: Number;
  /**
   * Region where is located the product
   *
   */
  zone?: DedicatedAvailabilityRegionEnum;
}
/**
 * A structure describing the hardware availability for each datacenter
 */
export interface DedicatedAvailabilityDatacenter {
  /**
   * Availability status
   *
   */
  availability?: DedicatedAvailabilityEnum;
  /**
   * Datacenter code
   *
   */
  datacenter?: DedicatedAvailabilityDatacenterEnum;
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
  asa?: string[];
  /**
   * List of compatible asdm binaries names
   *
   */
  asdm?: string[];
  /**
   */
  type?: DedicatedProfileFirewallEnum;
}
/**
 * Get temporary URL link to download binary
 */
export interface DedicatedBinaryFirewallLink {
  /**
   * Temporary URL to download binary
   *
   */
  url?: string;
}
/**
 * A structure describing the availabilities of dedicated server
 */
export interface DedicatedDatacenterAvailability {
  /**
   * The hardware availability for each datacenter
   *
   */
  datacenters?: DedicatedAvailabilityDatacenter[];
  /**
   * Fully qualified and unique name of the hardware
   *
   */
  fqn?: string;
  /**
   * Name of the memory hardware part
   *
   */
  memory?: string;
  /**
   * Plan code in which the hardware is involved
   *
   */
  planCode?: string;
  /**
   * Name of the base hardware
   *
   */
  server?: string;
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
  linkType?: DedicatedNetworkInterfaceControllerNetworkInterfaceControllerLinkTypeEnum;
  /**
   * NetworkInterfaceController mac
   *
   */
  mac?: string;
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
  password?: string;
  /**
   * Application access type
   *
   */
  type?: DedicatedServerAccessTypeEnum;
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
  agreements?: Number[];
  /**
   * Archive space info.
   *
   */
  archive?: DedicatedServerBackupBackupContainer;
  /**
   * Status of the container.
   *
   */
  status?: DedicatedServerBackupBackupStatus;
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
  ftpBackupName?: string;
  /**
   * The disk space available in gigabytes
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * If not-null, gives the date since when your account was set in read-only mode because the quota was exceeded
   *
   */
  readOnlyDate?: Date;
  /**
   * The backup FTP type
   *
   */
  type?: DedicatedServerBackupStorageTypeEnum;
  /**
   * The disk space currently used on your backup FTP in percent
   *
   */
  usage?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Backup Ftp ACL for this server and Backup Ftp
 */
export interface DedicatedServerBackupFtpAcl {
  /**
   * Wether to allow the CIFS (SMB) protocol for this ACL
   *
   */
  cifs?: boolean;
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
   * Whether the rule has been applied on the Backup Ftp
   *
   */
  isApplied?: boolean;
  /**
   * Date of the last object modification
   *
   */
  lastUpdate?: Date;
  /**
   * Wether to allow the NFS protocol for this ACL
   *
   */
  nfs?: boolean;
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
  orderable?: boolean;
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
  InternetToOvh?: ComplexTypeUnitAndValue<Number>;
  /**
   * bandwidth limitation OVH to Internet
   *
   */
  OvhToInternet?: ComplexTypeUnitAndValue<Number>;
  /**
   * bandwidth limitation OVH to OVH
   *
   */
  OvhToOvh?: ComplexTypeUnitAndValue<Number>;
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
  orderable?: boolean;
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
  bandwidth?: ComplexTypeUnitAndValue<Number>;
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
  orderable?: boolean;
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
  bootId?: Number;
  /**
   * dedicater server commercial range
   *
   */
  commercialRange?: string;
  /**
   * dedicated datacenter localisation
   *
   */
  datacenter?: DedicatedDatacenterEnum;
  /**
   * dedicated server ip
   *
   */
  ip?: string;
  /**
   */
  linkSpeed?: Number;
  /**
   * Icmp monitoring state
   *
   */
  monitoring?: boolean;
  /**
   * dedicated server name
   *
   */
  name?: string;
  /**
   * Operating system
   *
   */
  os?: string;
  /**
   * Does this server have professional use option
   *
   */
  professionalUse?: boolean;
  /**
   */
  rack?: string;
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
  serverId?: Number;
  /**
   */
  state?: DedicatedServerStateEnum;
  /**
   * Dedicated server support level
   *
   */
  supportLevel?: DedicatedServerSupportLevelEnum;
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
  enabled?: boolean;
  /**
   */
  firewall?: string;
  /**
   * Firewall management IP
   *
   */
  ip?: string;
  /**
   * transparent mode : device is invisible on the network; routed mode : the security appliance is considered to be a router hop in the network
   *
   */
  mode?: DedicatedServerFirewallModeEnum;
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
  capacity?: ComplexTypeUnitAndValue<Number>;
  /**
   * Disk count
   *
   */
  diskCount?: Number;
  /**
   * Disk capacity
   *
   */
  diskSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * Size of disk spans on RAID
   *
   */
  diskSpanSize?: Number;
  /**
   * RAID mode
   *
   */
  mode?: DedicatedServerHardwareSpecificationsRaidHardEnum;
  /**
   * RAID configuration name
   *
   */
  name?: string;
  /**
   * RAID controller type
   *
   */
  type?: string;
}
/**
 * RAID controller configuration
 */
export interface DedicatedServerHardwareRaidController {
  /**
   * Connected disk type
   *
   */
  disks?: DedicatedServerHardwareRaidDiskGroup[];
  /**
   * Raid controler model
   *
   */
  model?: string;
  /**
   * Raid controler type
   *
   */
  type?: string;
}
/**
 * Disk attached to a RAID controller
 */
export interface DedicatedServerHardwareRaidDiskGroup {
  /**
   * Disk capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<Number>;
  /**
   * Disk names
   *
   */
  names?: string[];
  /**
   * Disk insterface speed
   *
   */
  speed?: ComplexTypeUnitAndValue<string>;
  /**
   * Disk type
   *
   */
  type?: DedicatedServerDiskTypeEnum;
}
/**
 * A structure describing the server's hardware RAID configuration
 */
export interface DedicatedServerHardwareRaidProfile {
  /**
   * Hardware RAID controller list
   *
   */
  controllers?: DedicatedServerHardwareRaidController[];
}
/**
 * A structure describing the server's resulting layout after RAID configuration
 */
export interface DedicatedServerHardwareRaidSize {
  /**
   * Hardware RAID configuration list
   *
   */
  configurations?: DedicatedServerHardwareRaidConfiguration[];
}
/**
 * A structure describing informations about this dedicated server
 */
export interface DedicatedServerHardwareSpecifications {
  /**
   * Server boot mode
   *
   */
  bootMode?: DedicatedServerBootModeEnum;
  /**
   * number of cores per processor
   *
   */
  coresPerProcessor?: Number;
  /**
   * Default hardware raid size for this server
   *
   */
  defaultHardwareRaidSize?: ComplexTypeUnitAndValue<Number>;
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
  memorySize?: ComplexTypeUnitAndValue<Number>;
  /**
   * server motherboard
   *
   */
  motherboard?: string;
  /**
   * number of processors in this dedicated server
   *
   */
  numberOfProcessors?: Number;
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
  threadsPerProcessor?: Number;
  /**
   * Capacity of the USB keys installed on your server, if any
   *
   */
  usbKeys?: ComplexTypeUnitAndValue<Number>[];
}
/**
 * A structure describing informations about server disks
 */
export interface DedicatedServerHardwareSpecificationsDisk {
  /**
   * default hardware raid size for this disk group
   *
   */
  defaultHardwareRaidSize?: ComplexTypeUnitAndValue<Number>;
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
  diskGroupId?: Number;
  /**
   * disk capacity
   *
   */
  diskSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * type of the disk (SSD, SATA, SAS, ...)
   *
   */
  diskType?: string;
  /**
   * number of disks in this group
   *
   */
  numberOfDisks?: Number;
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
  description?: string;
  /**
   * expansion card type
   *
   */
  type?: DedicatedServerHardwareSpecificationsExpansionCardTypeEnum;
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
  diskGroupId?: Number;
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
  softRaidDevices?: Number;
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
  elapsedTime?: Number;
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
  comment?: string;
  /**
   * Error details if state is error
   *
   */
  error?: string;
  /**
   * Status of this installation step
   *
   */
  status?: DedicatedServerInstallationProgressStatusEnum;
}
/**
 * Intervention made on this server
 */
export interface DedicatedServerIntervention {
  /**
   * the intervention start date
   *
   */
  date?: Date;
  /**
   * The intervention id
   *
   */
  interventionId?: Number;
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
  blockSizes?: DedicatedServerIpBlockSizeEnum[];
  /**
   * Are those IP included with your offer
   *
   */
  included?: boolean;
  /**
   * Total number of IP that can be routed to this server
   *
   */
  ipNumber?: Number;
  /**
   * Total number of prefixes that can be routed to this server
   *
   */
  number?: Number;
  /**
   * Which option is required to order this type of IP
   *
   */
  optionRequired?: DedicatedServerOptionRequiredEnum;
  /**
   * this IP type
   *
   */
  type?: DedicatedServerIpTypeOrderableEnum;
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
  activated?: boolean;
  /**
   * A structure describing the IPMI supported features
   *
   */
  supportedFeatures?: DedicatedServerIpmiSupportedFeatures;
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
  expiration?: Date;
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
  kvmipHtml5URL?: boolean;
  /**
   * Access to the KVM through a Java web launch application
   *
   */
  kvmipJnlp?: boolean;
  /**
   * Access to the virtual serial port of your server through an SSH client
   *
   */
  serialOverLanSshKey?: boolean;
  /**
   * Access to the virtual serial port of your server through an HTML command line interface
   *
   */
  serialOverLanURL?: boolean;
}
/**
 * A structure describing IPMI test result
 */
export interface DedicatedServerIpmiTestResult {
  /**
   * Test running date
   *
   */
  date?: Date;
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
  timestamp?: Number;
  /**
   */
  value?: ComplexTypeUnitAndValue<Number>;
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
  bootId?: Number;
  /**
   * the boot system
   *
   */
  bootType?: DedicatedServerBootTypeEnum;
  /**
   * the boot description
   *
   */
  description?: string;
  /**
   * The boot kernel
   *
   */
  kernel?: string;
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
  connection?: ComplexTypeUnitAndValue<Number>;
  /**
   * Routing details
   *
   */
  routing?: DedicatedServerRoutingDetails;
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
  option?: DedicatedServerOptionEnum;
  /**
   * The state of the option
   *
   */
  state?: DedicatedServerOptionStateEnum;
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
  needsUpdate?: boolean;
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
  memory?: ComplexTypeUnitAndValue<Number>;
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
  pid?: Number;
  /**
   * Port opened
   *
   */
  port?: Number;
  /**
   * Name of the process
   *
   */
  procname?: string;
  /**
   * System user ID
   *
   */
  uid?: Number;
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
  cache?: ComplexTypeUnitAndValue<Number>;
  /**
   * CPU core number
   *
   */
  core?: Number;
  /**
   * CPU frequency
   *
   */
  freq?: ComplexTypeUnitAndValue<Number>;
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
  capacity?: ComplexTypeUnitAndValue<Number>;
  /**
   * Disk
   *
   */
  disk?: string;
  /**
   * Disk model
   *
   */
  model?: string;
  /**
   * Disk temperature
   *
   */
  temperature?: ComplexTypeUnitAndValue<Number>;
}
/**
 * A structure describing SMART health disk status
 */
export interface DedicatedServerRtmDiskSmart {
  /**
   * Current pending sectors
   *
   */
  current_pending_sector?: Number;
  /**
   * Multizone error rate
   *
   */
  multizone_error_rate?: Number;
  /**
   * Offline seek rate
   *
   */
  offline_seek_performance?: Number;
  /**
   * Offline uncorrectable
   *
   */
  offline_uncorrectable?: Number;
  /**
   * Other errors
   *
   */
  other_errors?: Number;
  /**
   * Realocated event count
   *
   */
  realocated_event_count?: Number;
  /**
   * temperature
   *
   */
  temperature_celsius?: Number;
  /**
   * UDMA crc error
   *
   */
  udma_crc_error?: Number;
  /**
   * Uncorrected read errors
   *
   */
  uncorrected_read_errors?: Number;
  /**
   * Uncorrected write errors
   *
   */
  uncorrected_write_errors?: Number;
}
/**
 * A structure describing informations about server load
 */
export interface DedicatedServerRtmLoad {
  /**
   * CPU usage
   *
   */
  cpu?: ComplexTypeUnitAndValue<Number>;
  /**
   * Load average in the last 1 minute
   *
   */
  loadavg1?: Number;
  /**
   * Load average in the last 15 minutes
   *
   */
  loadavg15?: Number;
  /**
   * Load average in the last 5 minutes
   *
   */
  loadavg5?: Number;
  /**
   * Memory usage
   *
   */
  memory?: ComplexTypeUnitAndValue<Number>;
  /**
   * Number of processes using or waiting for CPU time
   *
   */
  processCount?: Number;
  /**
   * Number of process running
   *
   */
  processRunning?: Number;
  /**
   * Swap usage
   *
   */
  swap?: ComplexTypeUnitAndValue<Number>;
  /**
   * Server uptime
   *
   */
  uptime?: Number;
}
/**
 * A structure describing informations about server memory
 */
export interface DedicatedServerRtmMemory {
  /**
   * Memory capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<Number>;
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
  inodeUsage?: ComplexTypeUnitAndValue<Number>;
  /**
   * Partition mount point
   *
   */
  mountPoint?: string;
  /**
   * Partition
   *
   */
  partition?: string;
  /**
   * Partition usage
   *
   */
  usage?: ComplexTypeUnitAndValue<Number>;
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
  unit?: string;
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
  capacity?: ComplexTypeUnitAndValue<Number>;
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
  capacity?: ComplexTypeUnitAndValue<Number>;
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
  capacity?: ComplexTypeUnitAndValue<Number>;
  /**
   * indicates wether burstable bandwidth is currently active, allowing it to temporarily exceed the normally included bandwidth.OvhToInternet amount, within the limits indicated by the burst.capacity item. It can also be inactiveLocked when temporarily disabled due to overuse, capping it to the included non-burstable bandwidth capacity of bandwidth.OvhToInternet
   *
   */
  status?: DedicatedServerBurstStatusEnum;
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
  orderable?: boolean;
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
  disk_serial?: string;
  /**
   * Disk slotId (if any)
   *
   */
  slot_id?: Number;
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
  doneDate?: Date;
  /**
   * Function name
   *
   */
  function?: DedicatedTaskFunctionEnum;
  /**
   * last update
   *
   */
  lastUpdate?: Date;
  /**
   * Task Creation date
   *
   */
  startDate?: Date;
  /**
   * Task status
   *
   */
  status?: DedicatedTaskStatusEnum;
  /**
   * the id of the task
   *
   */
  taskId?: Number;
}
/**
 * Miscellaneous template capabilities regarding the server.
 */
export interface DedicatedServerTemplateCaps {
  /**
   * This boolean tells if the template supports hybrid install for the considered server.
   *
   */
  hybridSupport?: boolean;
}
/**
 * A structure describing traffic informations about this dedicated server
 */
export interface DedicatedServerTrafficDetails {
  /**
   * Monthly input traffic quota allowed
   *
   */
  inputQuotaSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * Monthly input traffic consumed this month
   *
   */
  inputQuotaUsed?: ComplexTypeUnitAndValue<Number>;
  /**
   * Is bandwidth throttleted for being over quota
   *
   */
  isThrottled?: boolean;
  /**
   * Monthly output traffic quota allowed
   *
   */
  outputQuotaSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * Monthly output traffic consumed this month
   *
   */
  outputQuotaUsed?: ComplexTypeUnitAndValue<Number>;
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
  orderable?: boolean;
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
  capacity?: DedicatedServerUsbKeyCapacityEnum[];
  /**
   * Number of USB keys that can be ordered for this server
   *
   */
  number?: Number;
  /**
   * Which option is required to order an USB key
   *
   */
  optionRequired?: DedicatedServerOptionRequiredEnum;
  /**
   * Is USB keys orderable for this server
   *
   */
  orderable?: boolean;
}
/**
 * A virtual MAC address associated to one or more IPs
 */
export interface DedicatedServerVirtualMac {
  /**
   * Virtual MAC address in 00:00:00:00:00:00 format
   *
   */
  macAddress?: string;
  /**
   * Virtual MAC address type
   *
   */
  type?: DedicatedServerVmacTypeEnum;
}
/**
 *  ip address linked with this virtual mac address
 */
export interface DedicatedServerVirtualMacManagement {
  /**
   * IP address
   *
   */
  ipAddress?: string;
  /**
   * Friendly name of your Virtual Machine behind this IP/MAC
   *
   */
  virtualMachineName?: string;
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
  maxArchive?: ComplexTypeUnitAndValue<Number>;
  /**
   * Archive volume r/w bandwidth limit: read/write volume offered per month on the container.
   *
   */
  maxBandwidthArchive?: ComplexTypeUnitAndValue<Number>;
  /**
   * Storage volume r/w bandwidth limit: read/write volume offered per month on the container.
   *
   */
  maxBandwidthStorage?: ComplexTypeUnitAndValue<Number>;
  /**
   * Storage container max size.
   *
   */
  maxStorage?: ComplexTypeUnitAndValue<Number>;
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
  maxBandwidth?: ComplexTypeUnitAndValue<Number>;
  /**
   * Container max size.
   *
   */
  maxStorage?: ComplexTypeUnitAndValue<Number>;
  /**
   * Volume usage.
   *
   */
  storageUsed?: ComplexTypeUnitAndValue<Number>;
  /**
   * Volume usage in percent
   *
   */
  usagePercent?: Number;
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
  code?: DedicatedServerBackupBackupStatusCodeEnum;
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
  alertId?: Number;
  /**
   * Alert destination
   *
   */
  email?: string;
  /**
   * Is this monitor enabled
   *
   */
  enabled?: boolean;
  /**
   * Alert language
   *
   */
  language?: DedicatedServerAlertLanguageEnum;
}
/**
 * Physical KVM
 */
export interface DedicatedServerKvm {
  /**
   * KVM expiration date
   *
   */
  expiration?: Date;
  /**
   * KVM access ip
   *
   */
  ip?: string;
  /**
   * KVM hostname
   *
   */
  name?: string;
}
/**
 * Available boot options
 */
export interface DedicatedServerNetbootOption {
  /**
   * The option of this boot
   *
   */
  option?: DedicatedServerBootOptionEnum;
  /**
   * the value of this option
   *
   */
  value?: string;
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
  enabled?: boolean;
  /**
   * The test interval in seconds
   *
   */
  interval?: DedicatedServerMonitoringIntervalEnum;
  /**
   * The ip to monitor
   *
   */
  ip?: string;
  /**
   * This monitoring id
   *
   */
  monitoringId?: Number;
  /**
   * The service port to monitor
   *
   */
  port?: Number;
  /**
   * The protocol to use
   *
   */
  protocol?: DedicatedServerMonitoringProtocolEnum;
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
  alertId?: Number;
  /**
   * Is this alert enabled
   *
   */
  enabled?: boolean;
  /**
   * Daily hour end time for SMS notification
   *
   */
  fromHour?: Number;
  /**
   * Alert language
   *
   */
  language?: DedicatedServerAlertLanguageEnum;
  /**
   * Alert destination
   *
   */
  phoneNumberTo?: string;
  /**
   * Your SMS account
   *
   */
  smsAccount?: string;
  /**
   * Daily hour start time for SMS notification
   *
   */
  toHour?: Number;
}
/**
 * SPLA licenses management
 */
export interface DedicatedServerSpla {
  /**
   * License id
   *
   */
  id?: Number;
  /**
   * Last update timestamp
   *
   */
  lastUpdate?: Date;
  /**
   * License serial number
   *
   */
  serialNumber?: string;
  /**
   * Status of license
   *
   */
  status?: DedicatedServerSplaStatusEnum;
  /**
   * License type
   *
   */
  type?: DedicatedServerSplaTypeEnum;
}
/**
 * Your VirtualNetworkInterface
 */
export interface DedicatedVirtualNetworkInterfaceVirtualNetworkInterface {
  /**
   * VirtualNetworkInterface mode
   *
   */
  mode?: DedicatedVirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum;
  /**
   * User defined VirtualNetworkInterface name
   *
   */
  name?: string;
  /**
   * Server bound to this VirtualNetworkInterface
   *
   */
  serverName?: string;
  /**
   * VirtualNetworkInterface unique id
   *
   */
  uuid?: string;
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
  creationDate?: Date;
  /**
   * secondary dns server
   *
   */
  dns?: string;
  /**
   * domain on slave server
   *
   */
  domain?: string;
  /**
   * master ip
   *
   */
  ipMaster?: string;
}
/**
 * A structure describing informations about secondary dns check field
 */
export interface SecondaryDnsSecondaryDNSCheckField {
  /**
   * The field type to add on your DNS zone for this subDomain
   *
   */
  fieldType?: ZoneNamedResolutionFieldTypeEnum;
  /**
   * The field value to add on your DNS zone for this subDomain
   *
   */
  fieldValue?: string;
  /**
   * The subdomain to add on your DNS zone for the domain
   *
   */
  subDomain?: string;
}
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
  ip?: string;
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
  creation?: Date;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  expiration?: Date;
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
 * Newly created support identifiers
 */
export interface SupportNewMessageInfo {
  /**
   * Message identifier
   *
   */
  messageId?: Number;
  /**
   * Ticket identifier
   *
   */
  ticketId?: Number;
  /**
   * Ticket external number
   *
   */
  ticketNumber?: Number;
}
/**
 * vrack tasks
 */
export interface VrackTask {
  /**
   */
  function?: string;
  /**
   */
  id?: Number;
  /**
   */
  lastUpdate?: Date;
  /**
   */
  orderId?: Number;
  /**
   */
  serviceName?: string;
  /**
   * Task status
   *
   */
  status?: VrackTaskStatusEnum;
  /**
   */
  targetDomain?: string;
  /**
   */
  todoDate?: Date;
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
  dedicatedServer?: string;
  /**
   * vrack name
   *
   */
  vrack?: string;
}
/**
 * Resource record fieldType
 */
export type ZoneNamedResolutionFieldTypeEnum = 'A' | 'AAAA' | 'CAA' | 'CNAME' | 'DKIM' | 'DMARC' | 'LOC' | 'MX' | 'NAPTR' | 'NS' | 'PTR' | 'SPF' | 'SRV' | 'SSHFP' | 'TLSA' | 'TXT';
type PathsDedicatedserverGET = '/dedicated/server/osAvailabilities' | 
'/dedicated/server/{serviceName}/features/firewall' | 
'/dedicated/server/{serviceName}/features/ipmi/access' | 
'/dedicated/server/{serviceName}/features/ipmi' | 
'/dedicated/server/{serviceName}/features/ipmi/test' | 
'/dedicated/server/{serviceName}/features/kvm' | 
'/dedicated/server/{serviceName}/features/backupFTP/access' | 
'/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/server/{serviceName}/features/backupFTP' | 
'/dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks' | 
'/dedicated/server/{serviceName}/features/backupCloud' | 
'/dedicated/server/{serviceName}' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}' | 
'/dedicated/server/{serviceName}/virtualMac' | 
'/dedicated/server/{serviceName}/install/templateCapabilities' | 
'/dedicated/server/{serviceName}/install/hardwareRaidSize' | 
'/dedicated/server/{serviceName}/install/hardwareRaidProfile' | 
'/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes' | 
'/dedicated/server/{serviceName}/install/status' | 
'/dedicated/server/{serviceName}/install/compatibleTemplates' | 
'/dedicated/server/{serviceName}/task/{taskId}' | 
'/dedicated/server/{serviceName}/task' | 
'/dedicated/server/{serviceName}/license/compliantWindows' | 
'/dedicated/server/{serviceName}/license/compliantWindowsSqlServer' | 
'/dedicated/server/{serviceName}/intervention/{interventionId}' | 
'/dedicated/server/{serviceName}/intervention' | 
'/dedicated/server/{serviceName}/burst' | 
'/dedicated/server/{serviceName}/serviceInfos' | 
'/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable' | 
'/dedicated/server/{serviceName}/secondaryDnsNameDomainToken' | 
'/dedicated/server/{serviceName}/ipCanBeMovedTo' | 
'/dedicated/server/{serviceName}/spla' | 
'/dedicated/server/{serviceName}/spla/{id}' | 
'/dedicated/server/{serviceName}/firewall/binary/compatible' | 
'/dedicated/server/{serviceName}/firewall/binary/link' | 
'/dedicated/server/{serviceName}/ipCountryAvailable' | 
'/dedicated/server/{serviceName}/mrtg' | 
'/dedicated/server/{serviceName}/statistics/load' | 
'/dedicated/server/{serviceName}/statistics/pci' | 
'/dedicated/server/{serviceName}/statistics/motherboard' | 
'/dedicated/server/{serviceName}/statistics' | 
'/dedicated/server/{serviceName}/statistics/memory' | 
'/dedicated/server/{serviceName}/statistics/partition' | 
'/dedicated/server/{serviceName}/statistics/partition/{partition}' | 
'/dedicated/server/{serviceName}/statistics/partition/{partition}/chart' | 
'/dedicated/server/{serviceName}/statistics/os' | 
'/dedicated/server/{serviceName}/statistics/connection' | 
'/dedicated/server/{serviceName}/statistics/chart' | 
'/dedicated/server/{serviceName}/statistics/cpu' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}' | 
'/dedicated/server/{serviceName}/statistics/raid' | 
'/dedicated/server/{serviceName}/statistics/disk' | 
'/dedicated/server/{serviceName}/statistics/disk/{disk}' | 
'/dedicated/server/{serviceName}/statistics/disk/{disk}/smart' | 
'/dedicated/server/{serviceName}/statistics/process' | 
'/dedicated/server/{serviceName}/ips' | 
'/dedicated/server/{serviceName}/option/{option}' | 
'/dedicated/server/{serviceName}/option' | 
'/dedicated/server/{serviceName}/specifications/hardware' | 
'/dedicated/server/{serviceName}/specifications/ip' | 
'/dedicated/server/{serviceName}/specifications/network' | 
'/dedicated/server/{serviceName}/networkInterfaceController' | 
'/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg' | 
'/dedicated/server/{serviceName}/networkInterfaceController/{mac}' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains' | 
'/dedicated/server/{serviceName}/backupCloudOfferDetails' | 
'/dedicated/server/{serviceName}/orderable/professionalUse' | 
'/dedicated/server/{serviceName}/orderable/kvm' | 
'/dedicated/server/{serviceName}/orderable/kvmExpress' | 
'/dedicated/server/{serviceName}/orderable/usbKey' | 
'/dedicated/server/{serviceName}/orderable/backupStorage' | 
'/dedicated/server/{serviceName}/orderable/ip' | 
'/dedicated/server/{serviceName}/orderable/feature' | 
'/dedicated/server/{serviceName}/orderable/traffic' | 
'/dedicated/server/{serviceName}/orderable/bandwidthvRack' | 
'/dedicated/server/{serviceName}/orderable/bandwidth' | 
'/dedicated/server/{serviceName}/vrack/{vrack}' | 
'/dedicated/server/{serviceName}/vrack/{vrack}/mrtg' | 
'/dedicated/server/{serviceName}/vrack' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring' | 
'/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}' | 
'/dedicated/server/{serviceName}/virtualNetworkInterface' | 
'/dedicated/server/{serviceName}/boot/{bootId}' | 
'/dedicated/server/{serviceName}/boot/{bootId}/option/{option}' | 
'/dedicated/server/{serviceName}/boot/{bootId}/option' | 
'/dedicated/server/{serviceName}/boot' | 
'/dedicated/server/availabilities' | 
'/dedicated/server/availabilities/raw' | 
'/dedicated/server' | 
'/dedicated/server/datacenter/availabilities' | 
'/dedicated/server/virtualNetworkInterface/{uuid}';

type PathsDedicatedserverPUT = '/dedicated/server/{serviceName}/features/firewall' | 
'/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/server/{serviceName}' | 
'/dedicated/server/{serviceName}/burst' | 
'/dedicated/server/{serviceName}/serviceInfos' | 
'/dedicated/server/{serviceName}/spla/{id}' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}';

type PathsDedicatedserverPOST = '/dedicated/server/{serviceName}/features/ipmi/access' | 
'/dedicated/server/{serviceName}/features/ipmi/resetInterface' | 
'/dedicated/server/{serviceName}/features/ipmi/test' | 
'/dedicated/server/{serviceName}/features/ipmi/resetSessions' | 
'/dedicated/server/{serviceName}/features/backupFTP/access' | 
'/dedicated/server/{serviceName}/features/backupFTP' | 
'/dedicated/server/{serviceName}/features/backupFTP/password' | 
'/dedicated/server/{serviceName}/features/backupCloud/password' | 
'/dedicated/server/{serviceName}/features/backupCloud' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress' | 
'/dedicated/server/{serviceName}/virtualMac' | 
'/dedicated/server/{serviceName}/authenticationSecret' | 
'/dedicated/server/{serviceName}/install/start' | 
'/dedicated/server/{serviceName}/task/{taskId}/cancel' | 
'/dedicated/server/{serviceName}/license/windows' | 
'/dedicated/server/{serviceName}/support/replace/hardDiskDrive' | 
'/dedicated/server/{serviceName}/changeContact' | 
'/dedicated/server/{serviceName}/confirmTermination' | 
'/dedicated/server/{serviceName}/spla' | 
'/dedicated/server/{serviceName}/spla/{id}/revoke' | 
'/dedicated/server/{serviceName}/reboot' | 
'/dedicated/server/{serviceName}/ipMove' | 
'/dedicated/server/{serviceName}/terminate' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms' | 
'/dedicated/server/{serviceName}/serviceMonitoring' | 
'/dedicated/server/{serviceName}/ipBlockMerge';

type PathsDedicatedserverDELETE = '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/server/{serviceName}/features/backupFTP' | 
'/dedicated/server/{serviceName}/features/backupCloud' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}' | 
'/dedicated/server/{serviceName}/option/{option}' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}' | 
'/dedicated/server/{serviceName}/vrack/{vrack}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}';

export class ApiDedicatedserver extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  List the operating systems available for a specified hardware reference
  List the os available for a specified hardware reference
  **/
  public get(path: '/dedicated/server/osAvailabilities', pathParams: null, queryParams: {hardware?: string}): Promise<DedicatedOsAvailabilitiesEnum[]>;
  /**
  Firewall attached to this server
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/firewall', pathParams: {serviceName: string}): Promise<DedicatedServerFirewall>;
  /**
  access operations
  IPMI access method
  **/
  public get(path: '/dedicated/server/{serviceName}/features/ipmi/access', pathParams: {serviceName: string}, queryParams: {type?: DedicatedServerIpmiAccessTypeEnum}): Promise<DedicatedServerIpmiAccessValue>;
  /**
  Server IPMI interface
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/ipmi', pathParams: {serviceName: string}): Promise<DedicatedServerIpmi>;
  /**
  test operations
  Result of http, ping and identification tests on IPMI interface
  **/
  public get(path: '/dedicated/server/{serviceName}/features/ipmi/test', pathParams: {serviceName: string}, queryParams: {type?: DedicatedServerIpmiTestTypeEnum}): Promise<DedicatedServerIpmiTestResult>;
  /**
  Physical KVM
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/kvm', pathParams: {serviceName: string}): Promise<DedicatedServerKvm>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
  **/
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP/access', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName: string, ipBlock: string}): Promise<DedicatedServerBackupFtpAcl>;
  /**
  Backup Ftp assigned to this server
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP', pathParams: {serviceName: string}): Promise<DedicatedServerBackupFtp>;
  /**
  authorizableBlocks operations
  Get all IP blocks that can be used in the ACL
  **/
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Backup Cloud assigned to this server
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/backupCloud', pathParams: {serviceName: string}): Promise<DedicatedServerBackupCloud>;
  /**
  Server informations
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}', pathParams: {serviceName: string}): Promise<DedicatedServerDedicated>;
  /**
  A virtual MAC address associated to one or more IPs
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}', pathParams: {serviceName: string, macAddress: string}): Promise<DedicatedServerVirtualMac>;
  /**
  List the dedicated.server.VirtualMacManagement objects
  List of IPs associated to this Virtual MAC
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress', pathParams: {serviceName: string, macAddress: string}): Promise<string[]>;
  /**
   ip address linked with this virtual mac address
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}', pathParams: {serviceName: string, macAddress: string, ipAddress: string}): Promise<DedicatedServerVirtualMacManagement>;
  /**
  List the dedicated.server.VirtualMac objects
  Virtual MAC addresses of the server
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualMac', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  templateCapabilities operations
  Gives some capabilities regarding the template for the current dedicated server.
  **/
  public get(path: '/dedicated/server/{serviceName}/install/templateCapabilities', pathParams: {serviceName: string}, queryParams: {templateName?: string}): Promise<DedicatedServerTemplateCaps>;
  /**
  hardwareRaidSize operations
  Get hardware RAID size for a given configuration
  **/
  public get(path: '/dedicated/server/{serviceName}/install/hardwareRaidSize', pathParams: {serviceName: string}, queryParams: {partitionSchemeName?: string, templateName?: string}): Promise<DedicatedServerHardwareRaidSize>;
  /**
  hardwareRaidProfile operations
  Retrieve hardware RAID profile
  **/
  public get(path: '/dedicated/server/{serviceName}/install/hardwareRaidProfile', pathParams: {serviceName: string}): Promise<DedicatedServerHardwareRaidProfile>;
  /**
  compatibleTemplatePartitionSchemes operations
  Retrieve compatible  install template partitions scheme
  **/
  public get(path: '/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes', pathParams: {serviceName: string}, queryParams: {templateName?: string}): Promise<string[]>;
  /**
  status operations
  Get installation status
  **/
  public get(path: '/dedicated/server/{serviceName}/install/status', pathParams: {serviceName: string}): Promise<DedicatedServerInstallationProgressStatus>;
  /**
  compatibleTemplates operations
  Retrieve compatible  install templates names
  **/
  public get(path: '/dedicated/server/{serviceName}/install/compatibleTemplates', pathParams: {serviceName: string}): Promise<DedicatedServerInstallTemplate>;
  /**
  Server tasks
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/task/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<DedicatedServerTask>;
  /**
  List the dedicated.server.Task objects
  Dedicated server todos
  **/
  public get(path: '/dedicated/server/{serviceName}/task', pathParams: {serviceName: string}, queryParams: {status?: DedicatedTaskStatusEnum, function?: DedicatedTaskFunctionEnum}): Promise<Number[]>;
  /**
  compliantWindows operations
  Get the windows license compliant with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/license/compliantWindows', pathParams: {serviceName: string}): Promise<LicenseWindowsOsVersionEnum[]>;
  /**
  compliantWindowsSqlServer operations
  Get the windows SQL server license compliant with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/license/compliantWindowsSqlServer', pathParams: {serviceName: string}): Promise<LicenseWindowsSqlVersionEnum[]>;
  /**
  Intervention made on this server
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/intervention/{interventionId}', pathParams: {serviceName: string, interventionId: Number}): Promise<DedicatedServerIntervention>;
  /**
  List the dedicated.server.Intervention objects
  technical intervention history
  **/
  public get(path: '/dedicated/server/{serviceName}/intervention', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Server bandwidth burst details
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/burst', pathParams: {serviceName: string}): Promise<DedicatedServerServerBurst>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  secondaryDnsNameServerAvailable operations
  Secondary nameServer available for your Server
  **/
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable', pathParams: {serviceName: string}): Promise<SecondaryDnsSecondaryDNSNameServer>;
  /**
  secondaryDnsNameDomainToken operations
  DNS field to temporarily add to your zone so that we can verify you are the owner of this domain
  **/
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsNameDomainToken', pathParams: {serviceName: string}, queryParams: {domain?: string}): Promise<SecondaryDnsSecondaryDNSCheckField>;
  /**
  ipCanBeMovedTo operations
  Check if given IP can be moved to this server
  **/
  public get(path: '/dedicated/server/{serviceName}/ipCanBeMovedTo', pathParams: {serviceName: string}, queryParams: {ip?: string}): Promise<void>;
  /**
  List the dedicated.server.spla objects
  Your own SPLA licenses attached to this dedicated server
  **/
  public get(path: '/dedicated/server/{serviceName}/spla', pathParams: {serviceName: string}, queryParams: {status?: DedicatedServerSplaStatusEnum, type?: DedicatedServerSplaTypeEnum}): Promise<Number[]>;
  /**
  SPLA licenses management
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/spla/{id}', pathParams: {serviceName: string, id: Number}): Promise<DedicatedServerSpla>;
  /**
  compatible operations
  Get name binary for asa
  **/
  public get(path: '/dedicated/server/{serviceName}/firewall/binary/compatible', pathParams: {serviceName: string}): Promise<DedicatedBinaryFirewall>;
  /**
  link operations
  Get url of binary to update firewall asa
  **/
  public get(path: '/dedicated/server/{serviceName}/firewall/binary/link', pathParams: {serviceName: string}, queryParams: {binaryName?: string}): Promise<DedicatedBinaryFirewallLink>;
  /**
  ipCountryAvailable operations
  Retrieve available country for IP order
  **/
  public get(path: '/dedicated/server/{serviceName}/ipCountryAvailable', pathParams: {serviceName: string}): Promise<DedicatedServerIpCountryEnum[]>;
  /**
  mrtg operations
  Retrieve traffic graph values
  **/
  public get(path: '/dedicated/server/{serviceName}/mrtg', pathParams: {serviceName: string}, queryParams: {period?: DedicatedServerMrtgPeriodEnum, type?: DedicatedServerMrtgTypeEnum}): Promise<DedicatedServerMrtgTimestampValue[]>;
  /**
  load operations
  Get server load
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/load', pathParams: {serviceName: string}): Promise<DedicatedServerRtmLoad>;
  /**
  pci operations
  Get server PCI devices informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/pci', pathParams: {serviceName: string}): Promise<DedicatedServerRtmPci[]>;
  /**
  motherboard operations
  Get server motherboard hardware informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/motherboard', pathParams: {serviceName: string}): Promise<DedicatedServerRtmMotherboardHw>;
  /**
  Servers statistics sent by RTM (Real Time Monitoring)
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics', pathParams: {serviceName: string}): Promise<DedicatedServerRtm>;
  /**
  memory operations
  Get server memory informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/memory', pathParams: {serviceName: string}): Promise<DedicatedServerRtmMemory[]>;
  /**
  List the dedicated.server.RtmPartition objects
  Server partitions
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/partition', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Server partitions informations
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}', pathParams: {serviceName: string, partition: string}): Promise<DedicatedServerRtmPartition>;
  /**
  chart operations
  Retrieve partition charts
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}/chart', pathParams: {serviceName: string, partition: string}, queryParams: {period?: DedicatedServerRtmChartPeriodEnum}): Promise<ComplexTypeChartReturn>;
  /**
  os operations
  Get server os informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/os', pathParams: {serviceName: string}): Promise<DedicatedServerRtmOs>;
  /**
  connection operations
  Get server opened connections
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/connection', pathParams: {serviceName: string}): Promise<DedicatedServerRtmConnection[]>;
  /**
  chart operations
  Retrieve RTM graph values
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/chart', pathParams: {serviceName: string}, queryParams: {type?: DedicatedServerRtmChartTypeEnum, period?: DedicatedServerRtmChartPeriodEnum}): Promise<ComplexTypeChartReturn>;
  /**
  cpu operations
  Get server cpu informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/cpu', pathParams: {serviceName: string}): Promise<DedicatedServerRtmCpu>;
  /**
  Server raid volume port informations
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}', pathParams: {serviceName: string, unit: string, volume: string, port: string}): Promise<DedicatedServerRtmRaidVolumePort>;
  /**
  List the dedicated.server.RtmRaidVolumePort objects
  Raid unit volume ports
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port', pathParams: {serviceName: string, unit: string, volume: string}): Promise<string[]>;
  /**
  Server raid volume information
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}', pathParams: {serviceName: string, unit: string, volume: string}): Promise<DedicatedServerRtmRaidVolume>;
  /**
  List the dedicated.server.RtmRaidVolume objects
  Raid unit volumes
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume', pathParams: {serviceName: string, unit: string}): Promise<string[]>;
  /**
  Server raid informations
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}', pathParams: {serviceName: string, unit: string}): Promise<DedicatedServerRtmRaid>;
  /**
  List the dedicated.server.RtmRaid objects
  Server raid informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  List the dedicated.server.RtmDisk objects
  Server disks
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/disk', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Server disks informations
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}', pathParams: {serviceName: string, disk: string}): Promise<DedicatedServerRtmDisk>;
  /**
  smart operations
  Get disk smart informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}/smart', pathParams: {serviceName: string, disk: string}): Promise<DedicatedServerRtmDiskSmart>;
  /**
  process operations
  Get server process
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/process', pathParams: {serviceName: string}): Promise<DedicatedServerRtmCommandSize[]>;
  /**
  ips operations
  List all ip from server
  **/
  public get(path: '/dedicated/server/{serviceName}/ips', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Information about the options of a dedicated server
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/option/{option}', pathParams: {serviceName: string, option: DedicatedServerOptionEnum}): Promise<DedicatedServerOption>;
  /**
  List the dedicated.server.Option objects
  List of dedicated server options
  **/
  public get(path: '/dedicated/server/{serviceName}/option', pathParams: {serviceName: string}): Promise<DedicatedServerOptionEnum[]>;
  /**
  hardware operations
  Retrieve hardware informations about this dedicated server
  **/
  public get(path: '/dedicated/server/{serviceName}/specifications/hardware', pathParams: {serviceName: string}): Promise<DedicatedServerHardwareSpecifications>;
  /**
  ip operations
  Retrieve IP capabilities about this dedicated server
  **/
  public get(path: '/dedicated/server/{serviceName}/specifications/ip', pathParams: {serviceName: string}): Promise<DedicatedServerIpOrderable>;
  /**
  network operations
  Retrieve network informations about this dedicated server
  **/
  public get(path: '/dedicated/server/{serviceName}/specifications/network', pathParams: {serviceName: string}): Promise<DedicatedServerNetworkSpecifications>;
  /**
  List the dedicated.networkInterfaceController.NetworkInterfaceController objects
  List server networkInterfaceController
  **/
  public get(path: '/dedicated/server/{serviceName}/networkInterfaceController', pathParams: {serviceName: string}, queryParams: {linkType?: DedicatedNetworkInterfaceControllerNetworkInterfaceControllerLinkTypeEnum}): Promise<string[]>;
  /**
  mrtg operations
  Retrieve traffic graph values
  **/
  public get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg', pathParams: {serviceName: string, mac: string}, queryParams: {type?: DedicatedServerMrtgTypeEnum, period?: DedicatedServerMrtgPeriodEnum}): Promise<DedicatedServerMrtgTimestampValue[]>;
  /**
  Your networkInterfaceController
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}', pathParams: {serviceName: string, mac: string}): Promise<DedicatedNetworkInterfaceControllerNetworkInterfaceController>;
  /**
  dnsServer operations
  domain name server informations
  **/
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer', pathParams: {serviceName: string, domain: string}): Promise<SecondaryDnsSecondaryDNSNameServer>;
  /**
  Secondary dns infos
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName: string, domain: string}): Promise<SecondaryDnsSecondaryDNS>;
  /**
  List the secondaryDns.SecondaryDNS objects
  List of secondary dns domain name
  **/
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  backupCloudOfferDetails operations
  Get details on offered backup cloud if available for the current server
  **/
  public get(path: '/dedicated/server/{serviceName}/backupCloudOfferDetails', pathParams: {serviceName: string}): Promise<DedicatedServerBackupBackupOffer>;
  /**
  professionalUse operations
  Is professional use orderable with your server
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/professionalUse', pathParams: {serviceName: string}): Promise<boolean>;
  /**
  kvm operations
  Is a KVM orderable with your server
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/kvm', pathParams: {serviceName: string}): Promise<boolean>;
  /**
  kvmExpress operations
  Is a KVM express orderable with your server
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/kvmExpress', pathParams: {serviceName: string}): Promise<boolean>;
  /**
  usbKey operations
  Get USB keys orderable with your server
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/usbKey', pathParams: {serviceName: string}): Promise<DedicatedServerUsbKeyOrderableDetails>;
  /**
  backupStorage operations
  Get the backup storage orderable with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/backupStorage', pathParams: {serviceName: string}): Promise<DedicatedServerBackupStorageOrderable>;
  /**
  ip operations
  Get IP orderable with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/ip', pathParams: {serviceName: string}): Promise<DedicatedServerIpOrderable>;
  /**
  feature operations
  Is this feature orderable with your server
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/feature', pathParams: {serviceName: string}, queryParams: {feature?: DedicatedServerOrderableSysFeatureEnum}): Promise<boolean>;
  /**
  traffic operations
  Get orderable traffic with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/traffic', pathParams: {serviceName: string}): Promise<DedicatedServerTrafficOrderable>;
  /**
  bandwidthvRack operations
  Get vRack bandwidth orderable with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/bandwidthvRack', pathParams: {serviceName: string}): Promise<DedicatedServerBandwidthvRackOrderable>;
  /**
  bandwidth operations
  Get bandwidth orderable with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/bandwidth', pathParams: {serviceName: string}): Promise<DedicatedServerBandwidthOrderable>;
  /**
  vrack dedicated server interfaces
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/vrack/{vrack}', pathParams: {serviceName: string, vrack: string}): Promise<VrackDedicatedServer>;
  /**
  mrtg operations
  Retrieve vrack traffic graph values
  **/
  public get(path: '/dedicated/server/{serviceName}/vrack/{vrack}/mrtg', pathParams: {serviceName: string, vrack: string}, queryParams: {period?: DedicatedServerMrtgPeriodEnum, type?: DedicatedServerMrtgTypeEnum}): Promise<DedicatedServerMrtgTimestampValue[]>;
  /**
  List the vrack.dedicatedServer objects
  Server Vracks
  **/
  public get(path: '/dedicated/server/{serviceName}/vrack', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Service monitoring Email alert
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}', pathParams: {serviceName: string, monitoringId: Number, alertId: Number}): Promise<DedicatedServerEmailAlert>;
  /**
  List the dedicated.server.emailAlert objects
  Service monitoring alert by email
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email', pathParams: {serviceName: string, monitoringId: Number}): Promise<Number[]>;
  /**
  Monitoring SMS alert details, This service is currently not supported for servers at BHS 
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}', pathParams: {serviceName: string, monitoringId: Number, alertId: Number}): Promise<DedicatedServerSmsAlert>;
  /**
  List the dedicated.server.smsAlert objects
  Service monitoring alert by SMS
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms', pathParams: {serviceName: string, monitoringId: Number}): Promise<Number[]>;
  /**
  Service monitoring details
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}', pathParams: {serviceName: string, monitoringId: Number}): Promise<DedicatedServerServiceMonitoring>;
  /**
  List the dedicated.server.serviceMonitoring objects
  Service monitoring details
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Your VirtualNetworkInterface
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}', pathParams: {serviceName: string, uuid: string}): Promise<DedicatedVirtualNetworkInterfaceVirtualNetworkInterface>;
  /**
  List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects
  List server VirtualNetworkInterfaces
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface', pathParams: {serviceName: string}, queryParams: {name?: string, vrack?: string, mode?: DedicatedVirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum}): Promise<string[]>;
  /**
  Available boots
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/boot/{bootId}', pathParams: {serviceName: string, bootId: Number}): Promise<DedicatedServerNetboot>;
  /**
  Available boot options
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option/{option}', pathParams: {serviceName: string, bootId: Number, option: DedicatedServerBootOptionEnum}): Promise<DedicatedServerNetbootOption>;
  /**
  List the dedicated.server.netbootOption objects
  Option used on this netboot
  **/
  public get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option', pathParams: {serviceName: string, bootId: Number}): Promise<DedicatedServerBootOptionEnum[]>;
  /**
  List the dedicated.server.Netboot objects
  Server compatibles netboots
  **/
  public get(path: '/dedicated/server/{serviceName}/boot', pathParams: {serviceName: string}, queryParams: {bootType?: DedicatedServerBootTypeEnum}): Promise<Number[]>;
  /**
  List the availability of dedicated server
  List the availability of dedicated server
  **/
  public get(path: '/dedicated/server/availabilities', pathParams: null, queryParams: {country?: NichandleOvhSubsidiaryEnum, hardware?: string}): Promise<DedicatedAvailabilities[]>;
  /**
  List the availability of dedicated server (RAW)
  List the availability of dedicated server
  **/
  public get(path: '/dedicated/server/availabilities/raw'): Promise<DedicatedAvailabilitiesRaw[]>;
  /**
  Operations about the DEDICATED service
  List available services
  **/
  public get(path: '/dedicated/server'): Promise<string[]>;
  /**
  List the availability of dedicated server
  List the availability of dedicated server
  **/
  public get(path: '/dedicated/server/datacenter/availabilities', pathParams: null, queryParams: {planCode?: string, server?: string, memory?: string, storage?: string, datacenters?: string, excludeDatacenters?: boolean}): Promise<DedicatedDatacenterAvailability[]>;
  /**
  Get a VirtualNetworkInterface details
  Get VirtualNetworkInterface details
  **/
  public get(path: '/dedicated/server/virtualNetworkInterface/{uuid}', pathParams: {uuid: string}): Promise<DedicatedVirtualNetworkInterfaceVirtualNetworkInterface>;
  public get(path: PathsDedicatedserverGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Firewall attached to this server
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/features/firewall', pathParams: {serviceName: string}): Promise<void>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName: string, ipBlock: string}): Promise<void>;
  /**
  Server informations
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  /**
  Server bandwidth burst details
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/burst', pathParams: {serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  SPLA licenses management
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/spla/{id}', pathParams: {serviceName: string, id: Number}): Promise<void>;
  /**
  Secondary dns infos
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName: string, domain: string}): Promise<void>;
  /**
  Service monitoring Email alert
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}', pathParams: {serviceName: string, monitoringId: Number, alertId: Number}): Promise<void>;
  /**
  Monitoring SMS alert details, This service is currently not supported for servers at BHS 
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}', pathParams: {serviceName: string, monitoringId: Number, alertId: Number}): Promise<void>;
  /**
  Service monitoring details
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}', pathParams: {serviceName: string, monitoringId: Number}): Promise<void>;
  public put(path: PathsDedicatedserverPUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  access operations
  Request an acces on KVM IPMI interface
  **/
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/access', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  resetInterface operations
  Reset KVM IPMI interface
  **/
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/resetInterface', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  test operations
  Launch test on KVM IPMI interface
  **/
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/test', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  resetSessions operations
  Reset KVM IPMI sessions
  **/
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/resetSessions', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  Create a new Backup FTP ACL
  **/
  public post(path: '/dedicated/server/{serviceName}/features/backupFTP/access', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  Backup Ftp assigned to this server
  Create a new Backup FTP space
  **/
  public post(path: '/dedicated/server/{serviceName}/features/backupFTP', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  password operations
  Change your Backup FTP password
  **/
  public post(path: '/dedicated/server/{serviceName}/features/backupFTP/password', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  password operations
  Change your cloud account password
  **/
  public post(path: '/dedicated/server/{serviceName}/features/backupCloud/password', pathParams: {serviceName: string}): Promise<DedicatedServerBackupBackupPassword>;
  /**
  Backup Cloud assigned to this server
  Create a new storage backup space associated to server
  **/
  public post(path: '/dedicated/server/{serviceName}/features/backupCloud', pathParams: {serviceName: string}): Promise<DedicatedServerBackupCloud>;
  /**
  List the dedicated.server.VirtualMacManagement objects
  Add an IP to this Virtual MAC
  **/
  public post(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress', pathParams: {serviceName: string, macAddress: string}): Promise<DedicatedServerTask>;
  /**
  List the dedicated.server.VirtualMac objects
  Add a virtual mac to an IP address
  **/
  public post(path: '/dedicated/server/{serviceName}/virtualMac', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  authenticationSecret operations
  Retrieve secret to connect to the server / application
  **/
  public post(path: '/dedicated/server/{serviceName}/authenticationSecret', pathParams: {serviceName: string}): Promise<DedicatedServerAccess[]>;
  /**
  start operations
  Start an install
  **/
  public post(path: '/dedicated/server/{serviceName}/install/start', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  cancel operations
  this action stop the task progression if it's possible
  **/
  public post(path: '/dedicated/server/{serviceName}/task/{taskId}/cancel', pathParams: {serviceName: string, taskId: Number}): Promise<void>;
  /**
  windows operations
  Add your existing windows license serial to this dedicated server. Will be manageable in /license/windows.
  **/
  public post(path: '/dedicated/server/{serviceName}/license/windows', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  hardDiskDrive operations
  Ask for a broken HDD replacement
  **/
  public post(path: '/dedicated/server/{serviceName}/support/replace/hardDiskDrive', pathParams: {serviceName: string}): Promise<SupportNewMessageInfo>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/dedicated/server/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/dedicated/server/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  List the dedicated.server.spla objects
  Add a new SPLA license
  **/
  public post(path: '/dedicated/server/{serviceName}/spla', pathParams: {serviceName: string}): Promise<Number>;
  /**
  revoke operations
  Revoke an SPLA license
  **/
  public post(path: '/dedicated/server/{serviceName}/spla/{id}/revoke', pathParams: {serviceName: string, id: Number}): Promise<void>;
  /**
  reboot operations
  Hard reboot this server
  **/
  public post(path: '/dedicated/server/{serviceName}/reboot', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  ipMove operations
  Move an Ip failover to this server
  **/
  public post(path: '/dedicated/server/{serviceName}/ipMove', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/dedicated/server/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  /**
  List the secondaryDns.SecondaryDNS objects
  add a domain on secondary dns
  **/
  public post(path: '/dedicated/server/{serviceName}/secondaryDnsDomains', pathParams: {serviceName: string}): Promise<void>;
  /**
  List the dedicated.server.emailAlert objects
  Add a new email alert
  **/
  public post(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email', pathParams: {serviceName: string, monitoringId: Number}): Promise<DedicatedServerEmailAlert>;
  /**
  List the dedicated.server.smsAlert objects
  Create a SMS alert
  **/
  public post(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms', pathParams: {serviceName: string, monitoringId: Number}): Promise<DedicatedServerSmsAlert>;
  /**
  List the dedicated.server.serviceMonitoring objects
  Add a new service monitoring
  **/
  public post(path: '/dedicated/server/{serviceName}/serviceMonitoring', pathParams: {serviceName: string}): Promise<DedicatedServerServiceMonitoring>;
  /**
  ipBlockMerge operations
  Merge a splitted block and route it to the choosen server. You cannot undo this operation
  **/
  public post(path: '/dedicated/server/{serviceName}/ipBlockMerge', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  public post(path: PathsDedicatedserverPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Revoke this ACL
  **/
  public delete(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName: string, ipBlock: string}): Promise<DedicatedServerTask>;
  /**
  Backup Ftp assigned to this server
  Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
  **/
  public delete(path: '/dedicated/server/{serviceName}/features/backupFTP', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  Backup Cloud assigned to this server
  Deactivate the cloud backup associated to the server. This does not delete container data.
  **/
  public delete(path: '/dedicated/server/{serviceName}/features/backupCloud', pathParams: {serviceName: string}): Promise<void>;
  /**
   ip address linked with this virtual mac address
  Remove this ip from virtual mac , if you remove the last linked Ip, virtualmac will be deleted
  **/
  public delete(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}', pathParams: {serviceName: string, macAddress: string, ipAddress: string}): Promise<DedicatedServerTask>;
  /**
  Information about the options of a dedicated server
  Release a given option
  **/
  public delete(path: '/dedicated/server/{serviceName}/option/{option}', pathParams: {serviceName: string, option: DedicatedServerOptionEnum}): Promise<void>;
  /**
  Secondary dns infos
  remove this domain
  **/
  public delete(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName: string, domain: string}): Promise<void>;
  /**
  vrack dedicated server interfaces
  remove this server from this vrack
  **/
  public delete(path: '/dedicated/server/{serviceName}/vrack/{vrack}', pathParams: {serviceName: string, vrack: string}): Promise<VrackTask>;
  /**
  Service monitoring Email alert
  Remove this Email alert monitoring
  **/
  public delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}', pathParams: {serviceName: string, monitoringId: Number, alertId: Number}): Promise<void>;
  /**
  Monitoring SMS alert details, This service is currently not supported for servers at BHS 
  Remove this SMS alert
  **/
  public delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}', pathParams: {serviceName: string, monitoringId: Number, alertId: Number}): Promise<void>;
  /**
  Service monitoring details
  Remove this service monitoring
  **/
  public delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}', pathParams: {serviceName: string, monitoringId: Number}): Promise<void>;
  public delete(path: PathsDedicatedserverDELETE, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
