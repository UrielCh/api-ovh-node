import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
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
 * Network allowed to connect to the Private Cloud management interface
 */
export interface DedicatedCloudAllowedNetwork {
  /**
   */
  description?: string;
  /**
   * Network name, e.g. 123.100.200.0/32
   *
   */
  network: string;
  /**
   */
  networkAccessId: number;
  /**
   */
  state: DedicatedCloudAllowedNetworkStateEnum;
}
/**
 * All states an Allowed Network can be in
 */
export type DedicatedCloudAllowedNetworkStateEnum = 'allowed' | 'toDelete' | 'toUpdate';
/**
 * Backup configured on a given Datacenter
 */
export interface DedicatedCloudBackup {
  /**
   * Duration on email report
   *
   */
  backupDurationInReport?: boolean;
  /**
   * Backup offer type
   *
   */
  backupOffer?: DedicatedCloudBackupOfferTypeEnum;
  /**
   * Backup size on day on email report
   *
   */
  backupSizeInReport?: boolean;
  /**
   * Disk size on mail report
   *
   */
  diskSizeInReport?: boolean;
  /**
   * Backup is encrypted
   *
   */
  encryption?: boolean;
  /**
   * Full day on mail report
   *
   */
  fullDayInReport?: boolean;
  /**
   * Name of the backup server virtual machine.
   *
   */
  hostname?: string;
  /**
   * Unique additional email address for backup daily report
   *
   */
  mailAddress?: string;
  /**
   * RestorePoint number on mail report
   *
   */
  restorePointInReport?: boolean;
  /**
   * Schedule hour for start backup
   *
   */
  scheduleHour?: string;
  /**
   * This Backup current state
   *
   */
  state: 'disabled' | 'disabling' | 'enabled' | 'enabling' | 'error' | 'removing';
  /**
   * The moref of the backup server virtual machine
   *
   */
  vmwareVmId?: string;
}
/**
 * Private Cloud Backup Job
 */
export interface DedicatedCloudBackupJob {
  /**
   * Disk space allocated to the virtual machine
   *
   */
  allocatedDisk?: number;
  /**
   * List of days your Virtual Machine will be backuped
   *
   */
  backupDays?: DedicatedCloudBackupBackupDaysEnum[];
  /**
   * Backup is encrypted
   *
   */
  encryption?: boolean;
  /**
   * Offer type of the backup job
   *
   */
  offerType?: DedicatedCloudBackupOfferTypeEnum;
  /**
   * Number of days before the backup is deleted
   *
   */
  retentionTime?: number;
  /**
   * State of the backup job
   *
   */
  state: 'deleting' | 'delivered' | 'disabled' | 'disabling' | 'enabling' | 'error' | 'migrating' | 'pending' | 'removed' | 'stopping' | 'toCreate' | 'toDelete' | 'toDisable' | 'toEnable' | 'toStop' | 'unknown';
  /**
   * Name of the virtual Machine
   *
   */
  vmName?: string;
}
/**
 * All states a Dedicated Cloud Backup can be in
 */
/**
 * The billing type of this Dedicated Cloud
 */
export type DedicatedCloudBillingTypeEnum = 'demo' | 'monthly';
/**
 * The Regional Internet Registry of this IP block
 */
export type DedicatedCloudBlockRegisterEnum = 'arin' | 'ripe';
/**
 * The features available in your Private Cloud
 */
export interface DedicatedCloudCapabilities {
  /**
   * canAddRessource right order status in this Private Cloud
   *
   */
  addRessourceRightStatus: DedicatedCloudCapabilitiesFeatureStatusEnum;
  /**
   * Backup feature order status for this Private Cloud
   *
   */
  backupStatus: DedicatedCloudCapabilitiesFeatureStatusEnum;
  /**
   * if true user can be added in this Private Cloud (with POST /dedicatedCloud/{serviceName}/user
   *
   */
  canAddUser: boolean;
  /**
   * fullAdminRO user right order status in this Private Cloud
   *
   */
  fullAdminRoUserStatus: DedicatedCloudCapabilitiesFeatureStatusEnum;
  /**
   * Nexus 1000v feature order status in this Private Cloud ?
   *
   */
  nexus1000vStatus: DedicatedCloudCapabilitiesFeatureStatusEnum;
  /**
   * Hypervisor upgrade order status in this Private Cloud (upgrade with POST /dedicatedCloud/{serviceName}/upgradeHypervisor)
   *
   */
  upgradable: boolean;
  /**
   * userAccessPolicy property edition status in PUT /dedicatedCloud/{serviceName}
   *
   */
  userAccessPolicyStatus: DedicatedCloudCapabilitiesFeatureStatusEnum;
}
/**
 * The commercial name component
 */
export type DedicatedCloudCommercialNameEnum = 'DC' | 'DC-ANCIENT' | 'DC-ANCIENT-HDS' | 'DC-ANCIENT-HIPAA' | 'DC-ANCIENT-NSX' | 'DC-ANCIENT-NSX-VROPS' | 'DC-ANCIENT-PCIDSS' | 'DC-ANCIENT-UNKNOWN' | 'DC-ANCIENT-VROPS' | 'DC-HDS' | 'DC-HIPAA' | 'DC-LEGACY' | 'DC-LEGACY-HDS' | 'DC-LEGACY-HIPAA' | 'DC-LEGACY-NSX' | 'DC-LEGACY-NSX-VROPS' | 'DC-LEGACY-PCIDSS' | 'DC-LEGACY-UNKNOWN' | 'DC-LEGACY-VROPS' | 'DC-NSX' | 'DC-NSX-VROPS' | 'DC-PCIDSS' | 'DC-UNKNOWN' | 'DC-VROPS' | 'SDDC' | 'SDDC-HDS' | 'SDDC-HIPAA' | 'SDDC-LEGACY' | 'SDDC-LEGACY-HDS' | 'SDDC-LEGACY-HIPAA' | 'SDDC-LEGACY-PCIDSS' | 'SDDC-LEGACY-UNKNOWN' | 'SDDC-LEGACY-VROPS' | 'SDDC-LEGACY-VROPS-WITHOUT-NSX' | 'SDDC-LEGACY-WITHOUT-NSX' | 'SDDC-PCIDSS' | 'SDDC-UNKNOWN' | 'SDDC-VROPS' | 'SDDC-VROPS-WITHOUT-NSX' | 'SDDC-WITHOUT-NSX' | 'UNKNOWN' | 'UNKNOWN-HDS' | 'UNKNOWN-HIPAA' | 'UNKNOWN-NSX' | 'UNKNOWN-NSX-VROPS' | 'UNKNOWN-PCIDSS' | 'UNKNOWN-UNKNOWN' | 'UNKNOWN-VROPS';
/**
 * The commercial ranges actually available in your Private Cloud
 */
export interface DedicatedCloudCommercialRange {
  /**
   * The hypervisor versions compliant with this commercial Range
   *
   */
  allowedHypervisorVersions: DedicatedCloudHypervisorVersionEnum[];
  /**
   * The list of NetworkRoles allowed for one user in this commercial range
   *
   */
  allowedNetworkRoles: DedicatedCloudRightNetworkRoleEnum[];
  /**
   * The name of this commercial range
   *
   */
  commercialRangeName: string;
  /**
   * The name of the dedicated Cloud version associated to this commercial range
   *
   */
  dedicatedCloudVersion: string;
  /**
   * The range of this Datacenter in this Private Cloud version
   *
   */
  range?: string;
}
/**
 * Private Cloud Datacenter
 */
export interface DedicatedCloudDatacenter {
  /**
   * The commercial name of this Datacenter
   *
   */
  commercialName: DedicatedCloudCommercialNameEnum;
  /**
   * The commercial range associated to this Datacenter
   *
   */
  commercialRangeName: string;
  /**
   */
  datacenterId: number;
  /**
   */
  description: string;
  /**
   * Name of the associated Horizon View service if the VDI option is enabled
   *
   */
  horizonViewName?: string;
  /**
   * Check if this datacenter is removable (Need to be Empty)
   *
   */
  isRemovable: boolean;
  /**
   */
  name: string;
  /**
   * Os version installed on your Private Cloud
   *
   */
  version: string;
}
/**
 * Private Cloud Active Directory Federation option
 */
export interface DedicatedCloudFederation {
  /**
   * State of the option
   *
   */
  state: DedicatedCloudOptionStateEnum;
}
/**
 * Private Cloud federation option access network
 */
export interface DedicatedCloudFederationAccessNetwork {
  /**
   * Id of the Active Directory
   *
   */
  activeDirectoryId: number;
  /**
   * Active Directory base DN for groups
   *
   */
  baseDnForGroups: string;
  /**
   * Active Directory base DN for users
   *
   */
  baseDnForUsers: string;
  /**
   * Description of your option access network
   *
   */
  description: string;
  /**
   * Active Directory NetBIOS name
   *
   */
  domainAlias: string;
  /**
   * Active Directory domain name
   *
   */
  domainName: string;
  /**
   * IP address of the remote service
   *
   */
  ip: string;
  /**
   * Active Directory LDAP port
   *
   */
  ldapTcpPort: number;
  /**
   * SSL thumbprint of the remote service
   *
   */
  sslThumbprint?: string;
  /**
   * State of the option
   *
   */
  state: DedicatedCloudOptionAccessNetworkStateEnum;
  /**
   * Active Directory username
   *
   */
  username: string;
}
/**
 * Private Cloud Filer
 */
export interface DedicatedCloudFiler {
  /**
   * Billing type of this filer
   *
   */
  billingType: DedicatedCloudRessourcesBillingTypeEnum;
  /**
   * Filer Id
   *
   */
  filerId: number;
  /**
   * Human-Readable profile name
   *
   */
  fullProfile: string;
  /**
   * Filer name
   *
   */
  name: string;
  /**
   * Commercial profile name
   *
   */
  profile: string;
  /**
   * Filer capacity
   *
   */
  size: ComplexTypeUnitAndValue<number>;
  /**
   * Available space of this datastore, in GB
   *
   */
  spaceFree?: number;
  /**
   * Provisionned space of this datastore, in GB
   *
   */
  spaceProvisionned?: number;
  /**
   * Used Space of this filer, in GB
   *
   */
  spaceUsed?: number;
  /**
   * State of the filer
   *
   */
  state: DedicatedCloudFilerStateEnum;
  /**
   * Number of virtual machine on the filer
   *
   */
  vmTotal?: number;
}
/**
 * The generation of a Private Cloud
 */
export type DedicatedCloudGenerationEnum = '1.0' | '2.0';
/**
 * Private Cloud VMware Hybrid Cloud Extension option
 */
export interface DedicatedCloudHcx {
  /**
   * Build of the VMware Hybrid Cloud Extension
   *
   */
  build?: string;
  /**
   * State of the option
   *
   */
  state: DedicatedCloudOptionStateEnum;
  /**
   * Version of the VMware Hybrid Cloud Extension
   *
   */
  version?: string;
}
/**
 * The Private Cloud Hds option
 */
export interface DedicatedCloudHds {
  /**
   * State of the option
   *
   */
  state: DedicatedCloudOptionStateEnum;
}
/**
 * The Private Cloud Hipaa option
 */
export interface DedicatedCloudHipaa {
  /**
   * State of the option
   *
   */
  state: DedicatedCloudOptionStateEnum;
}
/**
 * Private Cloud Host
 */
export interface DedicatedCloudHost {
  /**
   * Billing type of the host
   *
   */
  billingType: DedicatedCloudRessourcesBillingTypeEnum;
  /**
   * Cluster of the host
   *
   */
  clusterName?: string;
  /**
   * Connection state of the host
   *
   */
  connectionState?: DedicatedCloudHostSystemConnectionState;
  /**
   * CPU total frenquency
   *
   */
  cpu: ComplexTypeUnitAndValue<number>;
  /**
   * The maximum speed of the cpu, in Mhz
   *
   */
  cpuMax?: number;
  /**
   * The speed of the CPU cores. This is an average value if there are multiple speeds. in Mhz
   *
   */
  cpuMaxCore?: number;
  /**
   * Number of physical CPU cores on the host.
   *
   */
  cpuNum?: number;
  /**
   * Current cpu utilization, in Mhz
   *
   */
  cpuUsed?: number;
  /**
   * Id of the host
   *
   */
  hostId: number;
  /**
   * Host is in maintenance mode
   *
   */
  inMaintenance?: boolean;
  /**
   * Amount of used memory. Sum of the memory used by all powered on virtual machines and vSphere services on the host. in MB
   *
   */
  memoryUsed?: number;
  /**
   * Name of the host (IP address)
   *
   */
  name: string;
  /**
   * Id of the parent host (if any)
   *
   */
  parentHostId?: number;
  /**
   * Host profile in a commercial range
   *
   */
  profile: string;
  /**
   * Host profile code
   *
   */
  profileCode: string;
  /**
   * Rack of the host
   *
   */
  rack: string;
  /**
   * Total RAM quantity
   *
   */
  ram: ComplexTypeUnitAndValue<number>;
  /**
   * State of the host
   *
   */
  state: DedicatedCloudHostStateEnum;
  /**
   * Host uptime in second
   *
   */
  uptime?: number;
  /**
   * Number of Virtual Machine on the host
   *
   */
  vmTotal?: number;
  /**
   * Number of Vcpu use by virtual machines on the host
   *
   */
  vmVcpuTotal?: number;
}
/**
 * Host profiles actually available in Private Cloud
 */
export interface DedicatedCloudHostProfile {
  /**
   * Id of Host profile
   *
   */
  id: number;
  /**
   * Name of Host profile
   *
   */
  name: string;
}
/**
 * Hypervisor and their availability
 */
export interface DedicatedCloudHostStockHypervisor {
  /**
   * Number of available hypervisors
   *
   */
  value: number;
  /**
   * Version of hypervisor
   *
   */
  version: string;
}
/**
 * Processor generation and their availability
 */
export interface DedicatedCloudHostStockProcGen {
  /**
   * CPU generation
   *
   */
  cpuGeneration: string;
  /**
   * Number of available hosts
   *
   */
  value: DedicatedCloudHostStockHypervisor[];
}
/**
 * HostProfiles and their availability
 */
export interface DedicatedCloudHostStockProfile {
  /**
   * Id of host profile
   *
   */
  id: number;
  /**
   * Name of host profile
   *
   */
  name: string;
  /**
   * Reference of host profile
   *
   */
  ref: string;
  /**
   * Available hosts
   *
   */
  value: DedicatedCloudHostStockProcGen[];
}
/**
 * The Hypervisor version of this Dedicated Cloud component
 */
export type DedicatedCloudHypervisorVersionEnum = '4.1' | '5.0' | '5.1' | '5.5' | '6.0' | '6.5' | 'hv3.1' | 'hvdc3.1' | 'nc1.0';
/**
 * IP Blocks associated with a Private Cloud
 */
export interface DedicatedCloudIp {
  /**
   */
  country: string;
  /**
   */
  description: string;
  /**
   * IP ex: 213.186.33.34/24
   *
   */
  network: string;
  /**
   * Network name
   *
   */
  networkName: string;
  /**
   * The Regional Internet Registry of this Ip Block
   *
   */
  register: DedicatedCloudBlockRegisterEnum;
  /**
   * Vlan where this network is routed
   *
   */
  vlanNumber: number;
}
/**
 * All countries in which an Ip Block may be ordered
 */
export type DedicatedCloudIpCountriesEnum = 'be' | 'ca' | 'ch' | 'cz' | 'de' | 'es' | 'fi' | 'fr' | 'gb' | 'ie' | 'it' | 'lt' | 'nl' | 'pl' | 'pt' | 'us';
/**
 * Details about an Ip
 */
export interface DedicatedCloudIpDetails {
  /**
   * IP address
   *
   */
  ip: string;
  /**
   * IP address reverse record
   *
   */
  reverse?: string;
  /**
   * IP address usage
   *
   */
  usage: DedicatedCloudIpUsageEnum;
  /**
   * IP address usage details
   *
   */
  usageDetails?: string;
}
/**
 * The management interface of this Dedicated Cloud
 */
export type DedicatedCloudManagementInterfaceEnum = 'azure' | 'openstack' | 'systemcenter' | 'vcloud' | 'vcsa' | 'vsphere';
/**
 * The Private Cloud Nsx option
 */
export interface DedicatedCloudNsx {
  /**
   * State of the option
   *
   */
  state: DedicatedCloudOptionStateEnum;
  /**
   * Url of the NSX API
   *
   */
  url?: string;
}
/**
 * Private Cloud User object right
 */
export interface DedicatedCloudObjectRight {
  /**
   * Name of the object
   *
   */
  name: string;
  /**
   */
  objectRightId: number;
  /**
   * Right propagation on children objects
   *
   */
  propagate: boolean;
  /**
   * User access on the VMware object
   *
   */
  right: DedicatedCloudRightRightEnum;
  /**
   * Type of the object
   *
   */
  type: DedicatedCloudRightUserObjectRightTypeEnum;
  /**
   * The VMware MoRef of the object
   *
   */
  vmwareObjectId: string;
}
/**
 * Hypervisors actually available in Private Cloud
 */
export interface DedicatedCloudOs {
  /**
   * Full name of hypervisor
   *
   */
  fullName: string;
  /**
   * Last modification of hypervisor
   *
   */
  lastModificationDate: string;
  /**
   * Short name of hypervisor
   *
   */
  shortName: string;
}
/**
 * PCC and their availability
 */
export interface DedicatedCloudPccStockProfile {
  /**
   * Available PCC
   *
   */
  count: number;
  /**
   * Kind of hypervisor
   *
   */
  mode: string;
  /**
   * Hypervisor version
   *
   */
  realVersion: string;
}
/**
 * PccZones actually available in Private Cloud
 */
export interface DedicatedCloudPccZone {
  /**
   * Id of pccZone
   *
   */
  id: number;
  /**
   * Name of pccZone
   *
   */
  pccZone: string;
}
/**
 * The Private Cloud PCI-DSS option
 */
export interface DedicatedCloudPciDss {
  /**
   * State of the option
   *
   */
  state: DedicatedCloudOptionStateEnum;
}
/**
 * Private Cloud Restore Point
 */
export interface DedicatedCloudRestorePoint {
  /**
   * Creation time of the restore point
   *
   */
  creationTime?: string;
  /**
   * Show if the restore point is corrupted
   *
   */
  isCorrupted: boolean;
  /**
   * Id of the restore point.
   *
   */
  restorePointId: number;
  /**
   * Size of the restore point
   *
   */
  restorePointSize: ComplexTypeUnitAndValue<number>;
  /**
   * Type of the restore point
   *
   */
  type?: DedicatedCloudBackupBackupTypeEnum;
}
/**
 * Private Cloud User right
 */
export interface DedicatedCloudRight {
  /**
   * Determine if the user can add ressources in your Private Cloud
   *
   */
  canAddRessource: boolean;
  /**
   */
  datacenterId: number;
  /**
   * Determine how this user can interact with the Private Cloud V(x)Lans
   *
   */
  networkRole: DedicatedCloudRightNetworkRoleEnum;
  /**
   * Determine what kind of access the User will have in this Datacenter of your Private Cloud
   *
   */
  right: DedicatedCloudRightRightEnum;
  /**
   */
  rightId: number;
  /**
   * Determine how this user can interact with the Private Cloud VM Network
   *
   */
  vmNetworkRole: DedicatedCloudRightVmNetworkRoleEnum;
}
/**
 * The robots used in Private Cloud
 */
export interface DedicatedCloudRobot {
  /**
   * The criticity of this robot
   *
   */
  criticity: string;
  /**
   * Description of this robot
   *
   */
  description?: string;
  /**
   * Is this robot enabled
   *
   */
  enabled: boolean;
  /**
   * The name of this robot
   *
   */
  name: string;
  /**
   * The type of this robot
   *
   */
  type: string;
}
/**
 * List of Service Pack compliant with the current Private Cloud
 */
export interface DedicatedCloudServicePack {
  /**
   * Name of the Service Pack
   *
   */
  name: string;
  /**
   * Options available in the Service Pack
   *
   */
  options: string[];
}
/**
 * All states a Dedicated Cloud can be in
 */
export type DedicatedCloudStateEnum = 'available' | 'delivered' | 'disabled' | 'disabling' | 'error' | 'migrating' | 'provisionning' | 'recycling' | 'reserved' | 'toDisable' | 'toProvision' | 'toRecycle' | 'toUnprovision' | 'unprovisionning';
/**
 * Operation on a Private Cloud component
 */
export interface DedicatedCloudTask {
  /**
   * Creator of the task
   *
   */
  createdBy?: string;
  /**
   * Origin of the task
   *
   */
  createdFrom?: string;
  /**
   * datacenterId of the associated dedicatedCloud.Datacenter object
   *
   */
  datacenterId?: number;
  /**
   * Current progress description
   *
   */
  description?: string;
  /**
   * Task end date
   *
   */
  endDate?: string;
  /**
   * Task execution date
   *
   */
  executionDate: string;
  /**
   * filerId of the associated dedicatedCloud.Filer object
   *
   */
  filerId?: number;
  /**
   * hostId of the associated dedicatedCloud.Host object
   *
   */
  hostId?: number;
  /**
   * Task last modification date
   *
   */
  lastModificationDate?: string;
  /**
   * Maintenance task min allowed execution date
   *
   */
  maintenanceDateFrom?: string;
  /**
   * Maintenance task max allowed execution date
   *
   */
  maintenanceDateTo?: string;
  /**
   * Task name
   *
   */
  name: string;
  /**
   * network of the associated dedicatedCloud.Ip object
   *
   */
  network?: string;
  /**
   * networkAccessId of the associated dedicatedCloud.AllowedNetwork object
   *
   */
  networkAccessId?: number;
  /**
   * orderId of the associated billing.Order object
   *
   */
  orderId?: number;
  /**
   * taskId of the parent dedicatedCloud.Task object
   *
   */
  parentTaskId?: number;
  /**
   * Current progress
   *
   */
  progress: number;
  /**
   * Current Task state
   *
   */
  state: DedicatedCloudTaskStateEnum;
  /**
   * Task id
   *
   */
  taskId: number;
  /**
   * Task type
   *
   */
  type: string;
  /**
   * userId of the associated dedicatedCloud.User object
   *
   */
  userId?: number;
  /**
   * vlanId of the parent dedicatedCloud.Vlan object
   *
   */
  vlanId?: number;
}
/**
 * All states a Dedicated Cloud Task can be in
 */
export type DedicatedCloudTaskStateEnum = 'canceled' | 'doing' | 'done' | 'error' | 'fixing' | 'toCancel' | 'toCreate' | 'todo' | 'unknown' | 'waitingForChilds' | 'waitingTodo';
/**
 * All states a Dedicated Cloud two factor authentication whitelist can be in
 */
export type DedicatedCloudTwoFAWhitelistStateEnum = 'enabled' | 'enabling' | 'error' | 'migrating' | 'removed' | 'removing';
/**
 * Private Cloud User
 */
export interface DedicatedCloudUser {
  /**
   * Activation state of the user account
   *
   */
  activationState?: DedicatedCloudUserActivationStateEnum;
  /**
   * Defines if the user can manage ip failovers
   *
   */
  canManageIpFailOvers: boolean;
  /**
   * Defines if the user can manage the network
   *
   */
  canManageNetwork: boolean;
  /**
   * Defines if the user can manage users rights
   *
   */
  canManageRights: boolean;
  /**
   * Email address of the user
   *
   */
  email?: string;
  /**
   * First name of the user
   *
   */
  firstName?: string;
  /**
   * Defines if the user is a full admin in readonly
   *
   */
  fullAdminRo: boolean;
  /**
   * Check if the given Private Cloud user can be enabled or disabled ?
   *
   */
  isEnableManageable: boolean;
  /**
   * Defines if the user can confirm security tokens (if a compatible option is enabled)
   *
   */
  isTokenValidator: boolean;
  /**
   * Last name of the user
   *
   */
  lastName?: string;
  /**
   * Login of the user
   *
   */
  login: string;
  /**
   * Name of the user
   *
   */
  name: string;
  /**
   * Is this User able to access nsx interface (requires NSX option)
   *
   */
  nsxRight: boolean;
  /**
   * Mobile phone number of the user
   *
   */
  phoneNumber?: string;
  /**
   * Defines if the user receives technical alerts
   *
   */
  receiveAlerts: boolean;
  /**
   * State of the user account
   *
   */
  state: DedicatedCloudUserStateEnum;
  /**
   */
  userId: number;
}
/**
 * Open or restricted access to management interface ?
 */
export type DedicatedCloudUserAccessPolicyEnum = 'filtered' | 'open';
/**
 * Which user will be disconnected first in case of quota of maximum connection is reached
 */
export type DedicatedCloudUserLogoutPolicyEnum = 'first' | 'last';
/**
 * Private Cloud VM Encryption option
 */
export interface DedicatedCloudVMEncryption {
  /**
   * State of the option
   *
   */
  state: DedicatedCloudOptionStateEnum;
}
/**
 * Private Cloud VM Encryption option access network
 */
export interface DedicatedCloudVMEncryptionAccessNetwork {
  /**
   * Description of your option access network
   *
   */
  description: string;
  /**
   * IP address of the remote service
   *
   */
  ip: string;
  /**
   * Id of the VM Encryption KMS
   *
   */
  kmsId: number;
  /**
   * VM Encryption KMS TCP port
   *
   */
  kmsTcpPort: number;
  /**
   * SSL thumbprint of the remote service
   *
   */
  sslThumbprint: string;
  /**
   * State of the option
   *
   */
  state: DedicatedCloudOptionAccessNetworkStateEnum;
}
/**
 * The Private Cloud Vendor option
 */
export interface DedicatedCloudVendor {
  /**
   * name
   *
   */
  vendorName: string;
}
/**
 * Dedicated Cloud vendors objects types
 */
export type DedicatedCloudVendorObjectTypeEnum = 'cluster' | 'datacenter' | 'filer' | 'host' | 'vm';
/**
 * Detailed version
 */
export interface DedicatedCloudVersion {
  /**
   */
  build: string;
  /**
   */
  major: string;
  /**
   */
  minor: string;
}
/**
 * Private Cloud Vlan
 */
export interface DedicatedCloudVlan {
  /**
   */
  name: string;
  /**
   * Speed in Mbps
   *
   */
  routingRateLimit: string;
  /**
   */
  state: DedicatedCloudVlanStateEnum;
  /**
   */
  type: DedicatedCloudVlanTypeEnum;
  /**
   */
  vlanId: number;
  /**
   */
  vlanNumber: number;
}
/**
 * Private Cloud Virtual Machine
 */
export interface DedicatedCloudVm {
  /**
   * Backup associated to this Virtual Machine
   *
   */
  backup?: DedicatedCloudBackupBackup;
  /**
   * Virtual machine cdroms devices
   *
   */
  cdroms?: DedicatedCloudVirtualMachineCdrom[];
  /**
   * Cluster of the virtual machine.
   *
   */
  clusterName?: string;
  /**
   * Maximum CPU performance, in MHz.
   *
   */
  cpuMax?: number;
  /**
   * Number of processors in the virtual machine.
   *
   */
  cpuNum?: number;
  /**
   * Time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In millisecond
   *
   */
  cpuReady?: number;
  /**
   * Percentage of time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In percent
   *
   */
  cpuReadyPercent?: number;
  /**
   * Current CPU performance, in MHz.
   *
   */
  cpuUsed?: number;
  /**
   * List of filers in use by the virtual machine.
   *
   */
  filers?: DedicatedCloudVmFiler[];
  /**
   * Folder of the virtual machine.
   *
   */
  folderName?: string;
  /**
   * Name of the host hosting the virtual machine.
   *
   */
  hostName?: string;
  /**
   * Memory size of the virtual machine, in MB
   *
   */
  memoryMax?: number;
  /**
   * Amount of guest memory that is shared with other virtual machines, in Mb
   *
   */
  memoryTps?: string;
  /**
   * Current memory utilization, in MB
   *
   */
  memoryUsed?: number;
  /**
   * moRef of the virtual machine.
   *
   */
  moRef: string;
  /**
   * Name of the virtual machine.
   *
   */
  name?: string;
  /**
   * Number of packets received.
   *
   */
  netPacketRx?: number;
  /**
   * Number of packets transmitted.
   *
   */
  netPacketTx?: number;
  /**
   * Rate at which data is received. In KB/s
   *
   */
  netRx?: number;
  /**
   * Rate at which data is transmitted. In KB/s
   *
   */
  netTx?: number;
  /**
   * List of the networks link to this virtual machine
   *
   */
  networks?: DedicatedCloudVmNetwork[];
  /**
   * Power state of the virtual machine.
   *
   */
  powerState: DedicatedCloudVirtualMachinePowerState;
  /**
   * Amount of time for a read operation from the virtual disk. In millisecond
   *
   */
  readLatency?: number;
  /**
   * Number of read issued per second to the virtual disk. In millisecond
   *
   */
  readPerSecond?: number;
  /**
   * Rate of reading data from the virtual disk. In KB/s
   *
   */
  readRate?: number;
  /**
   * The index of the current VM in instanceUuids array starting from 1, so 1 means that it is the primary VM.
   *
   */
  roleFt?: string;
  /**
   * Number of snapshot of the virtual machine.
   *
   */
  snapshotNum?: number;
  /**
   * The fault tolerance state of the virtual machine.
   *
   */
  stateFt?: DedicatedCloudVirtualMachineFaultToleranceState;
  /**
   * Id of the virtual machine.
   *
   */
  vmId: number;
  /**
   * Current version status of VMware Tools in the guest operating system.
   *
   */
  vmwareTools?: string;
  /**
   * Current version of VMware Tools
   *
   */
  vmwareToolsVersion?: string;
  /**
   * Amount of time for a write operation from the virtual disk. In millisecond
   *
   */
  writeLatency?: number;
  /**
   * Number of write issued per second to the virtual disk. In millisecond
   *
   */
  writePerSecond?: number;
  /**
   * Rate of writing data from the virtual disk. In KB/s
   *
   */
  writeRate?: number;
}
/**
 * The Private Cloud vRealize Operations option
 */
export interface DedicatedCloudVrops {
  /**
   * State of the option
   *
   */
  state: DedicatedCloudOptionStateEnum;
  /**
   * Url of the vRealize Operations interface
   *
   */
  url?: string;
}
/**
 * Zpool and their availability
 */
export interface DedicatedCloudZpoolStockProfile {
  /**
   * Minimum accepted available zpools
   *
   */
  minimumAvailability: string;
  /**
   * Reference of zpool
   *
   */
  profile: string;
  /**
   * Available zpools
   *
   */
  realCount: number;
}
/**
 * Details about a backup
 */
export interface DedicatedCloudBackupBackup {
  /**
   * Disk space allocated to the virtual machine (in GB)
   *
   */
  allocatedDisk?: number;
  /**
   * List of days your Virtual Machine will be backuped
   *
   */
  backupDays?: DedicatedCloudBackupBackupDaysEnum[];
  /**
   * Backup is encrypted
   *
   */
  encryption?: boolean;
  /**
   * Last creation time of the backup job
   *
   */
  lastCreationTime?: string;
  /**
   * Last duration of the backup job
   *
   */
  lastDuration?: ComplexTypeUnitAndValue<number>;
  /**
   * Last result of the backup job
   *
   */
  lastResult?: DedicatedCloudBackupJobStateEnum;
  /**
   * Last successful creation time of the backup job
   *
   */
  lastSuccessfulCreationTime?: string;
  /**
   * Last successful duration of the backup job
   *
   */
  lastSuccessfulDuration?: ComplexTypeUnitAndValue<number>;
  /**
   * Offer type of the backup job
   *
   */
  offerType?: DedicatedCloudBackupOfferTypeEnum;
  /**
   * Restore points of this backup job
   *
   */
  restorePoints?: DedicatedCloudBackupRestorePoint[];
  /**
   * Number of days before the backup is deleted
   *
   */
  retentionTime?: number;
  /**
   * State of the backup job
   *
   */
  state?: 'deleting' | 'delivered' | 'disabled' | 'disabling' | 'enabling' | 'error' | 'migrating' | 'pending' | 'removed' | 'stopping' | 'toCreate' | 'toDelete' | 'toDisable' | 'toEnable' | 'toStop' | 'unknown';
}
/**
 * All the possible Days of Backup
 */
export type DedicatedCloudBackupBackupDaysEnum = 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday';
/**
 * All the type of a restore point
 */
export type DedicatedCloudBackupBackupTypeEnum = 'full' | 'incremental';
/**
 * State of the backup job
 */
export type DedicatedCloudBackupJobStateEnum = 'failed' | 'running' | 'stopped' | 'stopping' | 'success' | 'unknown' | 'warning';
/**
 * All the offer type of the backup
 */
export type DedicatedCloudBackupOfferTypeEnum = 'advanced' | 'backup' | 'classic' | 'legacy';
/**
 * Details about a restore point
 */
export interface DedicatedCloudBackupRestorePoint {
  /**
   * Creation time of the restore point
   *
   */
  creationTime?: string;
  /**
   * Show if the restore point is corrupted
   *
   */
  isCorrupted?: boolean;
  /**
   * Id of the restore point
   *
   */
  restorePointId: number;
  /**
   * Size of the restore point
   *
   */
  size?: ComplexTypeUnitAndValue<number>;
  /**
   * Type of the restore point
   *
   */
  type?: DedicatedCloudBackupBackupTypeEnum;
}
/**
 * All the state of the backup
 */
/**
 * All Dedicated Cloud feature status available
 */
export type DedicatedCloudCapabilitiesFeatureStatusEnum = 'active' | 'comingSoon' | 'no';
/**
 * Private Cloud
 */
export interface DedicatedCloudDedicatedCloud {
  /**
   * Advanced security state
   *
   */
  advancedSecurity: boolean;
  /**
   * The current bandwidth of your Private Cloud
   *
   */
  bandwidth: string;
  /**
   * Billing type of your Private Cloud
   *
   */
  billingType: DedicatedCloudBillingTypeEnum;
  /**
   * Url to the Private Cloud certified interface
   *
   */
  certifiedInterfaceUrl: string;
  /**
   * The current version of your Private Cloud
   *
   */
  commercialRange: string;
  /**
   * Description of your Private Cloud
   *
   */
  description: string;
  /**
   * Generation of your Private Cloud
   *
   */
  generation: DedicatedCloudGenerationEnum;
  /**
   * Datacenter where your Private Cloud is physically located
   *
   */
  location: string;
  /**
   * The management interface name
   *
   */
  managementInterface: DedicatedCloudManagementInterfaceEnum;
  /**
   * Service name of your Private Cloud
   *
   */
  serviceName: string;
  /**
   * Name of the current service pack
   *
   */
  servicePackName?: string;
  /**
   * SPLA licensing state
   *
   */
  spla: boolean;
  /**
   * Enable SSL v3 support. Warning : this option is not recommended as it was recognized as a security breach. If this is enabled, we advise you to enable the filtered User access policy
   *
   */
  sslV3?: boolean;
  /**
   * Current state of your Private Cloud
   *
   */
  state: DedicatedCloudStateEnum;
  /**
   * Access policy of your Private Cloud : opened to every IPs or filtered
   *
   */
  userAccessPolicy: DedicatedCloudUserAccessPolicyEnum;
  /**
   * The maximum amount of connected users allowed on the Private Cloud management interface
   *
   */
  userLimitConcurrentSession: number;
  /**
   */
  userLogoutPolicy: DedicatedCloudUserLogoutPolicyEnum;
  /**
   * The timeout (in seconds) for the user sessions on the Private Cloud management interface. 0 value disable the timeout
   *
   */
  userSessionTimeout: number;
  /**
   * Url to the Private Cloud vScope interface
   *
   */
  vScopeUrl: string;
  /**
   * Version of the management interface
   *
   */
  version: DedicatedCloudVersion;
  /**
   * Url to the Private Cloud web interface
   *
   */
  webInterfaceUrl: string;
}
/**
 * Disaster Recovery Plan Types
 */
export type DedicatedCloudDisasterRecoveryDrpTypeEnum = 'onPremise' | 'ovh';
/**
 * Information on the local datacenter
 */
export interface DedicatedCloudDisasterRecoveryLocalSiteDetails {
  /**
   * Zvm mode configured
   *
   */
  role: DedicatedCloudDisasterRecoverySiteRoleEnum;
  /**
   * Type of hosting for the local datacenter
   *
   */
  type: DedicatedCloudDisasterRecoverySiteTypeEnum;
  /**
   * Installed version of Zerto
   *
   */
  zertoVersion: string;
  /**
   * Local Network Ip of the Zerto virtual manager
   *
   */
  zvmIp?: string;
}
/**
 * State of the disaster recovery option
 */
export interface DedicatedCloudDisasterRecoveryProfile {
  /**
   * Disaster Recovery Plan Type
   *
   */
  drpType?: DedicatedCloudDisasterRecoveryDrpTypeEnum;
  /**
   * Information about the site installed on this Private Cloud
   *
   */
  localSiteInformation?: DedicatedCloudDisasterRecoveryLocalSiteDetails;
  /**
   * Information about the remote paired site
   *
   */
  remoteSiteInformation?: DedicatedCloudDisasterRecoveryRemoteSiteDetails;
  /**
   * State of the disaster recovery service
   *
   */
  state: DedicatedCloudStateEnum;
  /**
   * Technical solution used
   *
   */
  systemVersion: string;
}
/**
 * Information on the remote datacenter linked to the local one
 */
export interface DedicatedCloudDisasterRecoveryRemoteSiteDetails {
  /**
   * Datacenter Id (if hosted by OVH)
   *
   */
  datacenterId?: number;
  /**
   * Datacenter name (if hosted by OVH)
   *
   */
  datacenterName?: string;
  /**
   * Zvm mode configured
   *
   */
  role?: DedicatedCloudDisasterRecoverySiteRoleEnum;
  /**
   * Service name (if hosted by OVH)
   *
   */
  serviceName?: string;
  /**
   * State of the remote Zvm
   *
   */
  state?: DedicatedCloudStateEnum;
  /**
   * Type of hosting for the remote datacenter
   *
   */
  type: DedicatedCloudDisasterRecoverySiteTypeEnum;
  /**
   * Installed version of Zerto
   *
   */
  zertoVersion?: string;
}
/**
 * Site manager configured mode
 */
export type DedicatedCloudDisasterRecoverySiteRoleEnum = 'primary' | 'secondary' | 'single';
/**
 * Site manager hosting type
 */
export type DedicatedCloudDisasterRecoverySiteTypeEnum = 'onPremise' | 'ovhPrivateCloud';
/**
 * Hourly consumption of a filer
 */
export interface DedicatedCloudFilerHourlyConsumption {
  /**
   * Consumption of the Filer
   *
   */
  consumption: ComplexTypeUnitAndValue<number>;
  /**
   * Last update
   *
   */
  lastUpdate: string;
}
/**
 * A Filer profile
 */
export interface DedicatedCloudFilerProfile {
  /**
   * Human-Readable name
   *
   */
  fullName: string;
  /**
   * Commercial name
   *
   */
  name: string;
  /**
   */
  size: ComplexTypeUnitAndValue<number>;
}
/**
 * All states a Dedicated Cloud Filer can be in
 */
export type DedicatedCloudFilerStateEnum = 'adding' | 'delivered' | 'error' | 'removing' | 'unknown';
/**
 * Hourly consumption of a host
 */
export interface DedicatedCloudHostHourlyConsumption {
  /**
   * Consumption of the Host.
   *
   */
  consumption: ComplexTypeUnitAndValue<number>;
  /**
   * Last update.
   *
   */
  lastUpdate: string;
}
/**
 * A Host profile
 */
export interface DedicatedCloudHostProfile {
  /**
   */
  core: string;
  /**
   */
  cpu: ComplexTypeUnitAndValue<number>;
  /**
   */
  name: string;
  /**
   */
  ram: ComplexTypeUnitAndValue<number>;
}
/**
 * All states a Dedicated Cloud Host can be in
 */
export type DedicatedCloudHostStateEnum = 'adding' | 'delivered' | 'error' | 'removing' | 'unknown';
/**
 * The connection state of the host
 */
export type DedicatedCloudHostSystemConnectionState = 'connected' | 'disconnected' | 'notResponding';
/**
 * IP address usage
 */
export type DedicatedCloudIpUsageEnum = 'reserved' | 'vm';
/**
 * States of a Private Cloud option
 */
export type DedicatedCloudOptionStateEnum = 'disabled' | 'disabling' | 'enabled' | 'enabling' | 'error' | 'migrating' | 'unknown';
/**
 * States of a Private Cloud option
 */
export type DedicatedCloudOptionAccessNetworkStateEnum = 'creating' | 'deleting' | 'delivered' | 'error' | 'toCreate' | 'toDelete' | 'toUpdate' | 'unknown' | 'updating';
/**
 * A structure describing option compatibility
 */
export interface DedicatedCloudOptionCompatibility {
  /**
   * The new/future commercial version
   *
   */
  newCommercialVersion: string;
  /**
   * The old/current commercial version
   *
   */
  oldCommercialVersion: string;
}
/**
 * A structure describing the current password policy for your Dedicated Cloud
 */
export interface DedicatedCloudPasswordPolicy {
  /**
   * List of denied characters in the password
   *
   */
  deniedChars: string[];
  /**
   * Whether or not a digit (0-9) is mandatory in the password
   *
   */
  digitMandatory: boolean;
  /**
   * Number of previous passwords to keep
   *
   */
  historyCheck: number;
  /**
   * Whether or not a letter (a-z or A-Z) is mandatory in the password
   *
   */
  letterMandatory: boolean;
  /**
   * Whether or not a lowercase letter (a-z) is mandatory in the password
   *
   */
  lowercaseLetterMandatory: boolean;
  /**
   * Maximum lenght of the password
   *
   */
  maxLength: number;
  /**
   * Minimum lenght of the password
   *
   */
  minLength: number;
  /**
   * Whether or not a special character (\W or _) is mandatory in the password
   *
   */
  specialMandatory: boolean;
  /**
   * Whether or not an uppercase letter (A-Z) is mandatory in the password
   *
   */
  uppercaseLetterMandatory: boolean;
  /**
   * Password validity period (in days)
   *
   */
  validityPeriod: number;
}
/**
 * A structure describing the Resource's new price
 */
export interface DedicatedCloudResourceNewPrices {
  /**
   */
  resources?: DedicatedCloudResourceNewPricesEntry[];
}
/**
 * A structure describing the Resource's new price
 */
export interface DedicatedCloudResourceNewPricesEntry {
  /**
   */
  billingType: DedicatedCloudRessourcesBillingTypeEnum;
  /**
   */
  changed: boolean;
  /**
   */
  name: string;
  /**
   */
  newPrice: OrderPrice;
  /**
   */
  oldPrice: OrderPrice;
  /**
   */
  resourceType: DedicatedCloudRessourcesResourceTypeEnum;
}
/**
 * The billing type of this Dedicated Cloud ressource
 */
export type DedicatedCloudRessourcesBillingTypeEnum = 'freeSpare' | 'hourly' | 'monthly' | 'undefined';
/**
 * The resource type of this Dedicated Cloud ressource
 */
export type DedicatedCloudRessourcesResourceTypeEnum = 'host' | 'storage';
/**
 * Determine how this user can act on the Dedicated Cloud vLans or vxLans
 */
export type DedicatedCloudRightNetworkRoleEnum = 'admin' | 'manager' | 'noAccess' | 'readonly';
/**
 * All rights a Dedicated Cloud user may be associated with
 */
export type DedicatedCloudRightRightEnum = 'admin' | 'disabled' | 'readonly' | 'readwrite';
/**
 * All types of objects handled in objectRights
 */
export type DedicatedCloudRightUserObjectRightTypeEnum = 'cluster' | 'datastore' | 'dvportgroup' | 'folder' | 'pool' | 'vm';
/**
 * Determine how this user can act on the Dedicated Cloud vmNetwork
 */
export type DedicatedCloudRightVmNetworkRoleEnum = 'admin' | 'noAccess' | 'readonly';
/**
 * Service pack informations
 */
export interface DedicatedCloudServicePack {
  /**
   * Name of the service pack
   *
   */
  name: string;
  /**
   * State of the service pack
   *
   */
  state: DedicatedCloudServicePackStateEnum;
}
/**
 * List of possible service pack
 */
export type DedicatedCloudServicePackEnum = 'default' | 'hds' | 'hipaa' | 'legacy' | 'nsx' | 'nsx-and-vrops' | 'pcidss' | 'vrops';
/**
 * List of possible state of the service pack
 */
export type DedicatedCloudServicePackStateEnum = 'activating' | 'active' | 'waitingForCustomer';
/**
 * Trust IP which can bypass the two factor authentication
 */
export interface DedicatedCloudTwoFAWhitelist {
  /**
   * Description of the trusted IP
   *
   */
  description: string;
  /**
   * Id of the trusted IP
   *
   */
  id: number;
  /**
   * IP address of the remote service
   *
   */
  ip: string;
  /**
   * State of the whitelist
   *
   */
  state: DedicatedCloudTwoFAWhitelistStateEnum;
}
/**
 * All activation states a Dedicated Cloud User can have
 */
export type DedicatedCloudUserActivationStateEnum = 'disabled' | 'disabling' | 'enabled' | 'enabling' | 'toDisable' | 'toEnable';
/**
 * All states a Dedicated Cloud User can be in
 */
export type DedicatedCloudUserStateEnum = 'creating' | 'deleting' | 'delivered' | 'error';
/**
 * Representation of a Vendor object in OVH API
 */
export interface DedicatedCloudVendorOvhId {
  /**
   * Datacenter id
   *
   */
  datacenterId?: number;
  /**
   * Filer id
   *
   */
  filerId?: number;
  /**
   * Host id
   *
   */
  hostId?: number;
  /**
   * Vm id
   *
   */
  vmId?: number;
}
/**
 * The connectable virtual device status
 */
export type DedicatedCloudVirtualDeviceConnectInfoStatus = 'ok' | 'recoverableError' | 'unrecoverableError' | 'untried';
/**
 * A structure describing the cdrom configuration of a virtual machine
 */
export interface DedicatedCloudVirtualMachineCdrom {
  /**
   */
  connected?: boolean;
  /**
   */
  iso?: string;
}
/**
 * The fault tolerance state of the virtual machine
 */
export type DedicatedCloudVirtualMachineFaultToleranceState = 'disabled' | 'enabled' | 'needSecondary' | 'notConfigured' | 'running' | 'starting';
/**
 * The power state of the virtual machine
 */
export type DedicatedCloudVirtualMachinePowerState = 'deleted' | 'poweredOff' | 'poweredOn' | 'suspended';
/**
 * All states a Dedicated Cloud Vlan can be in
 */
export type DedicatedCloudVlanStateEnum = 'available' | 'delivered' | 'disabled' | 'error' | 'removing' | 'reserved';
/**
 * This Dedicated Cloud vlan type
 */
export type DedicatedCloudVlanTypeEnum = 'admin' | 'free' | 'paid';
/**
 * A structure describing filers of a the virtual machine
 */
export interface DedicatedCloudVmFiler {
  /**
   */
  committed: number;
  /**
   */
  disks: DedicatedCloudVmFilerDisk[];
  /**
   */
  name: string;
}
/**
 * A structure describing filer disks of a the virtual machine
 */
export interface DedicatedCloudVmFilerDisk {
  /**
   */
  capacity: number;
  /**
   */
  id: string;
}
/**
 * A structure describing the network of a the virtual machine
 */
export interface DedicatedCloudVmNetwork {
  /**
   */
  allowGuestControl: boolean;
  /**
   */
  backing: DedicatedCloudVmNetworkBacking;
  /**
   */
  connected: boolean;
  /**
   */
  controler: string;
  /**
   */
  label: string;
  /**
   */
  macAddress: string;
  /**
   */
  startConnected: boolean;
  /**
   */
  status: DedicatedCloudVirtualDeviceConnectInfoStatus;
}
/**
 * A structure describing the backing network of a the virtual machine
 */
export interface DedicatedCloudVmNetworkBacking {
  /**
   */
  deviceName?: string;
  /**
   */
  portGroupKey?: string;
  /**
   */
  portKey?: string;
  /**
   */
  switchUuid?: string;
  /**
   */
  type: DedicatedCloudVmNetworkBackingTypeEnum;
  /**
   */
  useAutoDetect?: boolean;
  /**
   */
  valueMoref?: string;
}
/**
 * The type of the network backing
 */
export type DedicatedCloudVmNetworkBackingTypeEnum = 'DVS' | 'VSS';
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
  currencyCode: OrderCurrencyCodeEnum;
  /**
   */
  text: string;
  /**
   */
  value: number;
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
 * vrack dedicated cloud interface
 */
export interface VrackDedicatedCloud {
  /**
   * your dedicated cloud service
   *
   */
  dedicatedCloud: string;
  /**
   * Dedicated cloud vlanId used
   *
   */
  vlanId?: number;
  /**
   * vrack name
   *
   */
  vrack: string;
}
type PathsDedicatedCloudGET = '/dedicatedCloud' | 
'/dedicatedCloud/commercialRange' | 
'/dedicatedCloud/commercialRange/{commercialRangeName}' | 
'/dedicatedCloud/location' | 
'/dedicatedCloud/location/{pccZone}' | 
'/dedicatedCloud/location/{pccZone}/hostProfile' | 
'/dedicatedCloud/location/{pccZone}/hostProfile/{id}' | 
'/dedicatedCloud/location/{pccZone}/hypervisor' | 
'/dedicatedCloud/location/{pccZone}/hypervisor/{shortName}' | 
'/dedicatedCloud/location/{pccZone}/stock/host' | 
'/dedicatedCloud/location/{pccZone}/stock/pcc' | 
'/dedicatedCloud/location/{pccZone}/stock/zpool' | 
'/dedicatedCloud/{serviceName}' | 
'/dedicatedCloud/{serviceName}/allowedNetwork' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/capabilities' | 
'/dedicatedCloud/{serviceName}/commercialRange/compliance' | 
'/dedicatedCloud/{serviceName}/commercialRange/orderable' | 
'/dedicatedCloud/{serviceName}/datacenter' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/hourlyConsumption' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}' | 
'/dedicatedCloud/{serviceName}/federation' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}' | 
'/dedicatedCloud/{serviceName}/filer' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/hourlyConsumption' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/task' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/globalTasks' | 
'/dedicatedCloud/{serviceName}/hcx' | 
'/dedicatedCloud/{serviceName}/hcx/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/hcx/canBeEnabled' | 
'/dedicatedCloud/{serviceName}/hds' | 
'/dedicatedCloud/{serviceName}/hds/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/hds/canBeEnabled' | 
'/dedicatedCloud/{serviceName}/hipaa' | 
'/dedicatedCloud/{serviceName}/hipaa/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/hipaa/canBeEnabled' | 
'/dedicatedCloud/{serviceName}/ip' | 
'/dedicatedCloud/{serviceName}/ip/{network}' | 
'/dedicatedCloud/{serviceName}/ip/{network}/details' | 
'/dedicatedCloud/{serviceName}/ip/{network}/task' | 
'/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/newPrices' | 
'/dedicatedCloud/{serviceName}/nsx' | 
'/dedicatedCloud/{serviceName}/nsx/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/nsx/canBeEnabled' | 
'/dedicatedCloud/{serviceName}/orderableIpCountries' | 
'/dedicatedCloud/{serviceName}/passwordPolicy' | 
'/dedicatedCloud/{serviceName}/pcidss' | 
'/dedicatedCloud/{serviceName}/pcidss/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/pcidss/canBeEnabled' | 
'/dedicatedCloud/{serviceName}/robot' | 
'/dedicatedCloud/{serviceName}/robot/{name}' | 
'/dedicatedCloud/{serviceName}/serviceInfos' | 
'/dedicatedCloud/{serviceName}/servicePack' | 
'/dedicatedCloud/{serviceName}/servicePacks' | 
'/dedicatedCloud/{serviceName}/servicePacks/{name}' | 
'/dedicatedCloud/{serviceName}/task' | 
'/dedicatedCloud/{serviceName}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/twoFAWhitelist' | 
'/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}' | 
'/dedicatedCloud/{serviceName}/user' | 
'/dedicatedCloud/{serviceName}/user/{userId}' | 
'/dedicatedCloud/{serviceName}/user/{userId}/objectRight' | 
'/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}' | 
'/dedicatedCloud/{serviceName}/user/{userId}/right' | 
'/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}' | 
'/dedicatedCloud/{serviceName}/user/{userId}/task' | 
'/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/vendor' | 
'/dedicatedCloud/{serviceName}/vlan' | 
'/dedicatedCloud/{serviceName}/vlan/{vlanId}' | 
'/dedicatedCloud/{serviceName}/vmEncryption' | 
'/dedicatedCloud/{serviceName}/vmEncryption/kms' | 
'/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}' | 
'/dedicatedCloud/{serviceName}/vrack' | 
'/dedicatedCloud/{serviceName}/vrack/{vrack}' | 
'/dedicatedCloud/{serviceName}/vrops' | 
'/dedicatedCloud/{serviceName}/vrops/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/vrops/canBeEnabled';

type PathsDedicatedCloudPUT = '/dedicatedCloud/{serviceName}' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}' | 
'/dedicatedCloud/{serviceName}/serviceInfos' | 
'/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}';

type PathsDedicatedCloudPOST = '/dedicatedCloud/{serviceName}/allowedNetwork' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/changeContact' | 
'/dedicatedCloud/{serviceName}/changeProperties' | 
'/dedicatedCloud/{serviceName}/confirmTermination' | 
'/dedicatedCloud/{serviceName}/datacenter' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/generateZsspPassword' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/state' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/disable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}/restore' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableBackup' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/editBackup' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/changeProperties' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/remove' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/hcx/disable' | 
'/dedicatedCloud/{serviceName}/hcx/enable' | 
'/dedicatedCloud/{serviceName}/hds/disable' | 
'/dedicatedCloud/{serviceName}/hds/enable' | 
'/dedicatedCloud/{serviceName}/hipaa/disable' | 
'/dedicatedCloud/{serviceName}/hipaa/enable' | 
'/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/nsx/disable' | 
'/dedicatedCloud/{serviceName}/nsx/enable' | 
'/dedicatedCloud/{serviceName}/orderNewFilerHourly' | 
'/dedicatedCloud/{serviceName}/pcidss/disable' | 
'/dedicatedCloud/{serviceName}/pcidss/enable' | 
'/dedicatedCloud/{serviceName}/resetTriggeredAlarm' | 
'/dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/terminate' | 
'/dedicatedCloud/{serviceName}/twoFAWhitelist' | 
'/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties' | 
'/dedicatedCloud/{serviceName}/upgradeHypervisor' | 
'/dedicatedCloud/{serviceName}/user' | 
'/dedicatedCloud/{serviceName}/user/{userId}/changePassword' | 
'/dedicatedCloud/{serviceName}/user/{userId}/changeProperties' | 
'/dedicatedCloud/{serviceName}/user/{userId}/disable' | 
'/dedicatedCloud/{serviceName}/user/{userId}/enable' | 
'/dedicatedCloud/{serviceName}/user/{userId}/objectRight' | 
'/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/vendor/objectType' | 
'/dedicatedCloud/{serviceName}/vendor/ovhId' | 
'/dedicatedCloud/{serviceName}/vmEncryption/kms' | 
'/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties' | 
'/dedicatedCloud/{serviceName}/vrops/disable' | 
'/dedicatedCloud/{serviceName}/vrops/enable';

type PathsDedicatedCloudDELETE = '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}' | 
'/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}' | 
'/dedicatedCloud/{serviceName}/user/{userId}' | 
'/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}' | 
'/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}' | 
'/dedicatedCloud/{serviceName}/vrack/{vrack}';

export class ApiDedicatedCloud extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the PCC service
  List available services
  **/
  public get(path: '/dedicatedCloud'): Promise<string[]>;
  /**
  List the dedicatedCloud.CommercialRange objects
  List of commercial Ranges available in a Dedicated Cloud
  **/
  public get(path: '/dedicatedCloud/commercialRange'): Promise<string[]>;
  /**
  The commercial ranges actually available in your Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/commercialRange/{commercialRangeName}', params: {commercialRangeName: string}): Promise<DedicatedCloudCommercialRange>;
  /**
  List the dedicatedCloud.PccZone objects
  List of locations available in a Dedicated Cloud
  **/
  public get(path: '/dedicatedCloud/location'): Promise<string[]>;
  /**
  PccZones actually available in Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}', params: {pccZone: string}): Promise<DedicatedCloudPccZone>;
  /**
  List the dedicatedCloud.HostProfile objects
  Offered host profile
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/hostProfile', params: {pccZone: string}): Promise<number[]>;
  /**
  Host profiles actually available in Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/hostProfile/{id}', params: {pccZone: string, id: number}): Promise<DedicatedCloudHostProfile>;
  /**
  List the dedicatedCloud.Os objects
  Offered hypervisor version
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/hypervisor', params: {pccZone: string}): Promise<string[]>;
  /**
  Hypervisors actually available in Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/hypervisor/{shortName}', params: {pccZone: string, shortName: string}): Promise<DedicatedCloudOs>;
  /**
  host operations
  Available host stock
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/stock/host', params: {pccZone: string, minYear?: number}): Promise<DedicatedCloudHostStockProfile[]>;
  /**
  pcc operations
  Available PCC stock
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/stock/pcc', params: {pccZone: string}): Promise<DedicatedCloudPccStockProfile[]>;
  /**
  zpool operations
  Available zpool stock
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/stock/zpool', params: {pccZone: string, profileFilter?: string}): Promise<DedicatedCloudZpoolStockProfile[]>;
  /**
  Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}', params: {serviceName: string}): Promise<DedicatedCloudDedicatedCloud>;
  /**
  List the dedicatedCloud.AllowedNetwork objects
  Networks allowed to access to this Private Cloud management interface
  **/
  public get(path: '/dedicatedCloud/{serviceName}/allowedNetwork', params: {serviceName: string}): Promise<number[]>;
  /**
  Network allowed to connect to the Private Cloud management interface
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}', params: {serviceName: string, networkAccessId: number}): Promise<DedicatedCloudAllowedNetwork>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this allowed network
  **/
  public get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task', params: {serviceName: string, networkAccessId: number, name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}', params: {serviceName: string, networkAccessId: number, taskId: number}): Promise<DedicatedCloudTask>;
  /**
  The features available in your Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/capabilities', params: {serviceName: string}): Promise<DedicatedCloudCapabilities>;
  /**
  compliance operations
  Get the name of the commercial ranges compliant with your Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/commercialRange/compliance', params: {serviceName: string}): Promise<string[]>;
  /**
  orderable operations
  Get the name of the commercial ranges orderable in your Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/commercialRange/orderable', params: {serviceName: string}): Promise<string[]>;
  /**
  List the dedicatedCloud.Datacenter objects
  Datacenters associated with this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter', params: {serviceName: string}): Promise<number[]>;
  /**
  Private Cloud Datacenter
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}', params: {serviceName: string, datacenterId: number}): Promise<DedicatedCloudDatacenter>;
  /**
  Backup configured on a given Datacenter
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup', params: {serviceName: string, datacenterId: number}): Promise<DedicatedCloudBackup>;
  /**
  defaultLocalVraNetwork operations
  Get the default localVraNetwork subnet suggested by OVH
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork', params: {serviceName: string, datacenterId: number}): Promise<string>;
  /**
  List the dedicatedCloud.Filer objects
  Filers associated with this Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer', params: {serviceName: string, datacenterId: number}): Promise<number[]>;
  /**
  Private Cloud Filer
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}', params: {serviceName: string, datacenterId: number, filerId: number}): Promise<DedicatedCloudFiler>;
  /**
  hourlyConsumption operations
  Hourly consumption associated with this Filer
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption', params: {serviceName: string, datacenterId: number, filerId: number}): Promise<DedicatedCloudFilerHourlyConsumption>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this Filer
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task', params: {serviceName: string, datacenterId: number, filerId: number, name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}', params: {serviceName: string, datacenterId: number, filerId: number, taskId: number}): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.Host objects
  Hosts associated with this Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host', params: {serviceName: string, datacenterId: number}): Promise<number[]>;
  /**
  Private Cloud Host
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}', params: {serviceName: string, datacenterId: number, hostId: number}): Promise<DedicatedCloudHost>;
  /**
  hourlyConsumption operations
  Hourly consumption associated with this host.
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/hourlyConsumption', params: {serviceName: string, datacenterId: number, hostId: number}): Promise<DedicatedCloudHostHourlyConsumption>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this Host
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task', params: {serviceName: string, datacenterId: number, hostId: number, name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}', params: {serviceName: string, datacenterId: number, hostId: number, taskId: number}): Promise<DedicatedCloudTask>;
  /**
  orderableFilerProfiles operations
  List available filers in a given Private Cloud Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles', params: {serviceName: string, datacenterId: number}): Promise<DedicatedCloudFilerProfile[]>;
  /**
  orderableHostProfiles operations
  List available hosts in a given Private Cloud Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles', params: {serviceName: string, datacenterId: number}): Promise<DedicatedCloudHostProfile[]>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task', params: {serviceName: string, datacenterId: number, name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}', params: {serviceName: string, datacenterId: number, taskId: number}): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.Vm objects
  Virtual machiness associated with this Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm', params: {serviceName: string, datacenterId: number}): Promise<number[]>;
  /**
  Private Cloud Virtual Machine
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}', params: {serviceName: string, datacenterId: number, vmId: number}): Promise<DedicatedCloudVm>;
  /**
  Private Cloud Backup Job
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob', params: {serviceName: string, datacenterId: number, vmId: number}): Promise<DedicatedCloudBackupJob>;
  /**
  List the dedicatedCloud.RestorePoint objects
  Restore point associated to this Backup Job
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints', params: {serviceName: string, datacenterId: number, vmId: number}): Promise<number[]>;
  /**
  Private Cloud Restore Point
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}', params: {serviceName: string, datacenterId: number, vmId: number, restorePointId: number}): Promise<DedicatedCloudRestorePoint>;
  /**
  Private Cloud Active Directory Federation option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/federation', params: {serviceName: string}): Promise<DedicatedCloudFederation>;
  /**
  List the dedicatedCloud.FederationAccessNetwork objects
  Active Directories linked to this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory', params: {serviceName: string}): Promise<number[]>;
  /**
  Private Cloud federation option access network
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}', params: {serviceName: string, activeDirectoryId: number}): Promise<DedicatedCloudFederationAccessNetwork>;
  /**
  List the dedicatedCloud.Filer objects
  Filers mounted on all Datacenters of your Private Cloud Vsphere
  **/
  public get(path: '/dedicatedCloud/{serviceName}/filer', params: {serviceName: string}): Promise<number[]>;
  /**
  Private Cloud Filer
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}', params: {serviceName: string, filerId: number}): Promise<DedicatedCloudFiler>;
  /**
  hourlyConsumption operations
  Hourly consumption associated with this Filer
  **/
  public get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/hourlyConsumption', params: {serviceName: string, filerId: number}): Promise<DedicatedCloudFilerHourlyConsumption>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this Filer
  **/
  public get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task', params: {serviceName: string, filerId: number, name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}', params: {serviceName: string, filerId: number, taskId: number}): Promise<DedicatedCloudTask>;
  /**
  globalTasks operations
  Get filtered tasks associated with this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/globalTasks', params: {serviceName: string, datacenterId?: number, 'endDate.from'?: string, 'endDate.to'?: string, 'executionDate.from'?: string, 'executionDate.to'?: string, filerId?: number, hostId?: number, 'lastModificationDate.from'?: string, 'lastModificationDate.to'?: string, name?: string, networkAccessId?: number, orderId?: number, parentTaskId?: number, state?: DedicatedCloudTaskStateEnum[], userId?: number, vlanId?: number}): Promise<number[]>;
  /**
  Private Cloud VMware Hybrid Cloud Extension option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hcx', params: {serviceName: string}): Promise<DedicatedCloudHcx>;
  /**
  canBeDisabled operations
  Check if VMware Hybrid Cloud Extension option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hcx/canBeDisabled', params: {serviceName: string}): Promise<boolean>;
  /**
  canBeEnabled operations
  Check if VMware Hybrid Cloud Extension option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hcx/canBeEnabled', params: {serviceName: string}): Promise<boolean>;
  /**
  The Private Cloud Hds option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hds', params: {serviceName: string}): Promise<DedicatedCloudHds>;
  /**
  canBeDisabled operations
  Check if Hds option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hds/canBeDisabled', params: {serviceName: string}): Promise<DedicatedCloudOptionCompatibility>;
  /**
  canBeEnabled operations
  Check if Hds option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hds/canBeEnabled', params: {serviceName: string}): Promise<DedicatedCloudOptionCompatibility>;
  /**
  The Private Cloud Hipaa option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hipaa', params: {serviceName: string}): Promise<DedicatedCloudHipaa>;
  /**
  canBeDisabled operations
  Check if Hipaa option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hipaa/canBeDisabled', params: {serviceName: string}): Promise<DedicatedCloudOptionCompatibility>;
  /**
  canBeEnabled operations
  Check if Hipaa option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hipaa/canBeEnabled', params: {serviceName: string}): Promise<DedicatedCloudOptionCompatibility>;
  /**
  List the dedicatedCloud.Ip objects
  Ip Blocks attached to this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/ip', params: {serviceName: string}): Promise<string[]>;
  /**
  IP Blocks associated with a Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/ip/{network}', params: {serviceName: string, network: string}): Promise<DedicatedCloudIp>;
  /**
  details operations
  List details about this IP Block
  **/
  public get(path: '/dedicatedCloud/{serviceName}/ip/{network}/details', params: {serviceName: string, network: string}): Promise<DedicatedCloudIpDetails[]>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this IP Block
  **/
  public get(path: '/dedicatedCloud/{serviceName}/ip/{network}/task', params: {serviceName: string, network: string, name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}', params: {serviceName: string, network: string, taskId: number}): Promise<DedicatedCloudTask>;
  /**
  newPrices operations
  Get the new Prices for your Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/newPrices', params: {serviceName: string}): Promise<DedicatedCloudResourceNewPrices>;
  /**
  The Private Cloud Nsx option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/nsx', params: {serviceName: string}): Promise<DedicatedCloudNsx>;
  /**
  canBeDisabled operations
  Check if Nsx option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/nsx/canBeDisabled', params: {serviceName: string}): Promise<DedicatedCloudOptionCompatibility>;
  /**
  canBeEnabled operations
  Check if Nsx option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/nsx/canBeEnabled', params: {serviceName: string}): Promise<DedicatedCloudOptionCompatibility>;
  /**
  orderableIpCountries operations
  Get the countries you can select in /order/dedicatedCloud/{serviceName}/ip
  **/
  public get(path: '/dedicatedCloud/{serviceName}/orderableIpCountries', params: {serviceName: string}): Promise<DedicatedCloudIpCountriesEnum[]>;
  /**
  passwordPolicy operations
  Get the current password policy for your Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/passwordPolicy', params: {serviceName: string}): Promise<DedicatedCloudPasswordPolicy>;
  /**
  The Private Cloud PCI-DSS option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/pcidss', params: {serviceName: string}): Promise<DedicatedCloudPciDss>;
  /**
  canBeDisabled operations
  Check if PCI-DSS option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/pcidss/canBeDisabled', params: {serviceName: string}): Promise<DedicatedCloudOptionCompatibility>;
  /**
  canBeEnabled operations
  Check if PCI-DSS option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/pcidss/canBeEnabled', params: {serviceName: string}): Promise<DedicatedCloudOptionCompatibility>;
  /**
  List the dedicatedCloud.Robot objects
  Robots that can run on this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/robot', params: {serviceName: string}): Promise<string[]>;
  /**
  The robots used in Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/robot/{name}', params: {serviceName: string, name: string}): Promise<DedicatedCloudRobot>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  servicePack operations
  Retrieve the service pack informations
  **/
  public get(path: '/dedicatedCloud/{serviceName}/servicePack', params: {serviceName: string}): Promise<DedicatedCloudServicePack>;
  /**
  List the dedicatedCloud.ServicePack objects
  Service Pack compliant with the current Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/servicePacks', params: {serviceName: string}): Promise<string[]>;
  /**
  List of Service Pack compliant with the current Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/servicePacks/{name}', params: {serviceName: string, name: string}): Promise<DedicatedCloudServicePack>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/task', params: {serviceName: string, name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: number}): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.twoFAWhitelist objects
  Ip allowed to bypass the two factor authentication on this Private Cloud management interface
  **/
  public get(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist', params: {serviceName: string}): Promise<number[]>;
  /**
  Trust IP which can bypass the two factor authentication
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}', params: {serviceName: string, id: number}): Promise<DedicatedCloudTwoFAWhitelist>;
  /**
  List the dedicatedCloud.User objects
  Private Cloud users
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user', params: {serviceName: string, name?: string}): Promise<number[]>;
  /**
  Private Cloud User
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}', params: {serviceName: string, userId: number}): Promise<DedicatedCloudUser>;
  /**
  List the dedicatedCloud.ObjectRight objects
  User rights on an object
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight', params: {serviceName: string, userId: number}): Promise<number[]>;
  /**
  Private Cloud User object right
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}', params: {serviceName: string, userId: number, objectRightId: number}): Promise<DedicatedCloudObjectRight>;
  /**
  List the dedicatedCloud.Right objects
  User rights in a given Datacenters
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/right', params: {serviceName: string, userId: number}): Promise<number[]>;
  /**
  Private Cloud User right
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}', params: {serviceName: string, userId: number, rightId: number}): Promise<DedicatedCloudRight>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this User
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/task', params: {serviceName: string, userId: number, name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}', params: {serviceName: string, userId: number, taskId: number}): Promise<DedicatedCloudTask>;
  /**
  The Private Cloud Vendor option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vendor', params: {serviceName: string}): Promise<DedicatedCloudVendor>;
  /**
  List the dedicatedCloud.Vlan objects
  Private Cloud vlans
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vlan', params: {serviceName: string}): Promise<number[]>;
  /**
  Private Cloud Vlan
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vlan/{vlanId}', params: {serviceName: string, vlanId: number}): Promise<DedicatedCloudVlan>;
  /**
  Private Cloud VM Encryption option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vmEncryption', params: {serviceName: string}): Promise<DedicatedCloudVMEncryption>;
  /**
  List the dedicatedCloud.VMEncryptionAccessNetwork objects
  VM Encryption KMS linked to this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms', params: {serviceName: string}): Promise<number[]>;
  /**
  Private Cloud VM Encryption option access network
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}', params: {serviceName: string, kmsId: number}): Promise<DedicatedCloudVMEncryptionAccessNetwork>;
  /**
  List the vrack.dedicatedCloud objects
  This Private Cloud vrack
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vrack', params: {serviceName: string}): Promise<string[]>;
  /**
  vrack dedicated cloud interface
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vrack/{vrack}', params: {serviceName: string, vrack: string}): Promise<VrackDedicatedCloud>;
  /**
  The Private Cloud vRealize Operations option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vrops', params: {serviceName: string}): Promise<DedicatedCloudVrops>;
  /**
  canBeDisabled operations
  Check if vRealize Operations option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vrops/canBeDisabled', params: {serviceName: string}): Promise<DedicatedCloudOptionCompatibility>;
  /**
  canBeEnabled operations
  Check if vRealize Operations option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vrops/canBeEnabled', params: {serviceName: string}): Promise<DedicatedCloudOptionCompatibility>;
  public get(path: PathsDedicatedCloudGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Private Cloud
  Alter this object properties
  **/
  public put(path: '/dedicatedCloud/{serviceName}', params: {serviceName: string, advancedSecurity?: boolean, bandwidth?: string, billingType?: DedicatedCloudBillingTypeEnum, certifiedInterfaceUrl?: string, commercialRange?: string, description?: string, generation?: DedicatedCloudGenerationEnum, location?: string, managementInterface?: DedicatedCloudManagementInterfaceEnum, servicePackName?: string, spla?: boolean, sslV3?: boolean, state?: DedicatedCloudStateEnum, userAccessPolicy?: DedicatedCloudUserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: DedicatedCloudUserLogoutPolicyEnum, userSessionTimeout?: number, vScopeUrl?: string, version?: DedicatedCloudVersion, webInterfaceUrl?: string}): Promise<DedicatedCloudTask>;
  /**
  Network allowed to connect to the Private Cloud management interface
  Alter this object properties
  **/
  public put(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}', params: {serviceName: string, networkAccessId: number, description?: string, network?: string, state?: DedicatedCloudAllowedNetworkStateEnum}): Promise<DedicatedCloudTask>;
  /**
  Private Cloud Datacenter
  Alter this object properties
  **/
  public put(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}', params: {serviceName: string, datacenterId: number, commercialName?: DedicatedCloudCommercialNameEnum, commercialRangeName?: string, description?: string, horizonViewName?: string, isRemovable?: boolean, name?: string, version?: string}): Promise<DedicatedCloudTask>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dedicatedCloud/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: ServiceRenewType, renewalType?: ServiceRenewalTypeEnum, serviceId?: number, status?: ServiceStateEnum}): Promise<void>;
  /**
  Private Cloud User right
  Alter this object properties
  **/
  public put(path: '/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}', params: {serviceName: string, userId: number, rightId: number, canAddRessource?: boolean, datacenterId?: number, networkRole?: DedicatedCloudRightNetworkRoleEnum, right?: DedicatedCloudRightRightEnum, vmNetworkRole?: DedicatedCloudRightVmNetworkRoleEnum}): Promise<DedicatedCloudTask>;
  public put(path: PathsDedicatedCloudPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  List the dedicatedCloud.AllowedNetwork objects
  Create a new Allowed network for your dedicatedCloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/allowedNetwork', params: {serviceName: string, description?: string, network: string}): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate', params: {serviceName: string, networkAccessId: number, taskId: number, executionDate: string}): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState', params: {serviceName: string, networkAccessId: number, taskId: number, reason: string}): Promise<DedicatedCloudTask>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/dedicatedCloud/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
  changeProperties operations
  Update this Private Cloud properties.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/changeProperties', params: {serviceName: string, description?: string, sslV3?: boolean, userAccessPolicy?: DedicatedCloudUserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: DedicatedCloudUserLogoutPolicyEnum, userSessionTimeout?: number}): Promise<DedicatedCloudTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/dedicatedCloud/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum, token: string}): Promise<string>;
  /**
  List the dedicatedCloud.Datacenter objects
  Add a new Datacenter in your Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter', params: {serviceName: string, commercialRangeName: string, vrackName?: string}): Promise<DedicatedCloudTask>;
  /**
  changeProperties operations
  Edit the backup on a Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties', params: {serviceName: string, datacenterId: number, backupDurationInReport: boolean, backupOffer: DedicatedCloudBackupOfferTypeEnum, backupSizeInReport: boolean, diskSizeInReport: boolean, fullDayInReport: boolean, mailAddress?: string, restorePointInReport: boolean, scheduleHour?: string}): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable backup solution on a Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable', params: {serviceName: string, datacenterId: number}): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable backup solution on a Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable', params: {serviceName: string, datacenterId: number, backupOffer?: DedicatedCloudBackupOfferTypeEnum}): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable Zerto
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable', params: {serviceName: string, datacenterId: number, secondaryDatacenterId: number, secondaryServiceName: string}): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable Zerto replication between 2 OVH dedicated Clouds
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable', params: {serviceName: string, datacenterId: number, primaryEndpointIp: string, secondaryDatacenterId: number, secondaryEndpointIp: string, secondaryServiceName: string}): Promise<DedicatedCloudTask>;
  /**
  generateZsspPassword operations
  Generate a new password for Zerto Self Service Portal and receive it by email.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/generateZsspPassword', params: {serviceName: string, datacenterId: number}): Promise<DedicatedCloudTask>;
  /**
  state operations
  Get the current state of Zerto deployment on your dedicated Cloud.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/state', params: {serviceName: string, datacenterId: number}): Promise<DedicatedCloudDisasterRecoveryProfile>;
  /**
  configureVpn operations
  Configure vpn between your OVH Private Cloud and your onsite infrastructure
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn', params: {serviceName: string, datacenterId: number, preSharedKey: string, remoteEndpointInternalIp: string, remoteEndpointPublicIp: string, remoteVraNetwork?: string, remoteZvmInternalIp: string}): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable Single site Zerto
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/disable', params: {serviceName: string, datacenterId: number}): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable Zerto replication between your OVH Private Cloud and your onsite infrastructure
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable', params: {serviceName: string, datacenterId: number, localVraNetwork: string, ovhEndpointIp: string, remoteVraNetwork: string}): Promise<DedicatedCloudTask>;
  /**
  remove operations
  Remove the filer from your Private Cloud.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove', params: {serviceName: string, datacenterId: number, filerId: number}): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate', params: {serviceName: string, datacenterId: number, filerId: number, taskId: number, executionDate: string}): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/resetTaskState', params: {serviceName: string, datacenterId: number, filerId: number, taskId: number, reason: string}): Promise<DedicatedCloudTask>;
  /**
  addHostSpare operations
  Add a spare host to your Private Cloud.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare', params: {serviceName: string, datacenterId: number, hostId: number, reason: string}): Promise<DedicatedCloudTask>;
  /**
  remove operations
  Remove the host from your Private Cloud.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove', params: {serviceName: string, datacenterId: number, hostId: number}): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/changeMaintenanceExecutionDate', params: {serviceName: string, datacenterId: number, hostId: number, taskId: number, executionDate: string}): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/resetTaskState', params: {serviceName: string, datacenterId: number, hostId: number, taskId: number, reason: string}): Promise<DedicatedCloudTask>;
  /**
  orderNewFilerHourly operations
  Order a new hourly Filer in a given Datacenter
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly', params: {serviceName: string, datacenterId: number, name: string}): Promise<DedicatedCloudTask>;
  /**
  orderNewHostHourly operations
  Order a new hourly Host in a given Datacenter
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly', params: {serviceName: string, datacenterId: number, name: string}): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/changeMaintenanceExecutionDate', params: {serviceName: string, datacenterId: number, taskId: number, executionDate: string}): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/resetTaskState', params: {serviceName: string, datacenterId: number, taskId: number, reason: string}): Promise<DedicatedCloudTask>;
  /**
  Private Cloud Backup Job
  Edit a backup job
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob', params: {serviceName: string, datacenterId: number, vmId: number, backupDays: DedicatedCloudBackupBackupDaysEnum[]}): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable backup solution on this virtual Machine
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable', params: {serviceName: string, datacenterId: number, vmId: number}): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable backup solution on this virtual Machine
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable', params: {serviceName: string, datacenterId: number, vmId: number, backupDays: DedicatedCloudBackupBackupDaysEnum[]}): Promise<DedicatedCloudTask>;
  /**
  restore operations
  Restore this restore point
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}/restore', params: {serviceName: string, datacenterId: number, vmId: number, restorePointId: number, filerId: number}): Promise<DedicatedCloudTask>;
  /**
  disableBackup operations
  Disable backup on this virtual Machine
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableBackup', params: {serviceName: string, datacenterId: number, vmId: number}): Promise<DedicatedCloudTask>;
  /**
  editBackup operations
  Edit backup on this virtual Machine
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/editBackup', params: {serviceName: string, datacenterId: number, vmId: number, backupDays: DedicatedCloudBackupBackupDaysEnum[]}): Promise<DedicatedCloudTask>;
  /**
  enableBackup operations
  Enable backup on this virtual Machine
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup', params: {serviceName: string, datacenterId: number, vmId: number, backupDays: DedicatedCloudBackupBackupDaysEnum[]}): Promise<DedicatedCloudTask>;
  /**
  restoreBackup operations
  Restore this restore point
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup', params: {serviceName: string, datacenterId: number, vmId: number, filerId: number, restorePointId: number}): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.FederationAccessNetwork objects
  Add a new option user access
  **/
  public post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory', params: {serviceName: string, baseDnForGroups: string, baseDnForUsers: string, description?: string, domainAlias: string, domainName: string, ip: string, password: string, username: string}): Promise<DedicatedCloudTask>;
  /**
  changeProperties operations
  Change Active Directory properties
  **/
  public post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/changeProperties', params: {serviceName: string, activeDirectoryId: number, description?: string, password: string, username: string}): Promise<DedicatedCloudTask>;
  /**
  grantActiveDirectoryUser operations
  Grant Active Directory user
  **/
  public post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser', params: {serviceName: string, activeDirectoryId: number, username: string}): Promise<DedicatedCloudTask>;
  /**
  remove operations
  Remove the filer from your Private Cloud.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/remove', params: {serviceName: string, filerId: number}): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate', params: {serviceName: string, filerId: number, taskId: number, executionDate: string}): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/resetTaskState', params: {serviceName: string, filerId: number, taskId: number, reason: string}): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable VMware Hybrid Cloud Extension option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hcx/disable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable VMware Hybrid Cloud Extension option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hcx/enable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable Hds option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hds/disable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable Hds option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hds/enable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable Hipaa option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hipaa/disable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable Hipaa option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hipaa/enable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/changeMaintenanceExecutionDate', params: {serviceName: string, network: string, taskId: number, executionDate: string}): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState', params: {serviceName: string, network: string, taskId: number, reason: string}): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable Nsx option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/nsx/disable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable Nsx option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/nsx/enable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  orderNewFilerHourly operations
  Order a new hourly Filer mounted in every Datacenter of a given Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/orderNewFilerHourly', params: {serviceName: string, name: string}): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable PCI-DSS option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/pcidss/disable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable PCI-DSS option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/pcidss/enable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  resetTriggeredAlarm operations
  Reset all triggered alarms on PCC
  **/
  public post(path: '/dedicatedCloud/{serviceName}/resetTriggeredAlarm', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate', params: {serviceName: string, taskId: number, executionDate: string}): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/task/{taskId}/resetTaskState', params: {serviceName: string, taskId: number, reason: string}): Promise<DedicatedCloudTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/dedicatedCloud/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
  List the dedicatedCloud.twoFAWhitelist objects
  Add a whitelisted ip on the two factor authentication
  **/
  public post(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist', params: {serviceName: string, description: string, ip: string}): Promise<DedicatedCloudTask>;
  /**
  changeProperties operations
  Change Private Cloud Two facter authentication whitelist properties
  **/
  public post(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties', params: {serviceName: string, id: number, description?: string}): Promise<DedicatedCloudTask>;
  /**
  upgradeHypervisor operations
  Upgrade your hypervisor to the next released version
  **/
  public post(path: '/dedicatedCloud/{serviceName}/upgradeHypervisor', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.User objects
  Create a new User in your Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user', params: {serviceName: string, canAddRessource?: boolean, canManageRights?: boolean, email?: string, expirationDate?: string, firstName?: string, lastName?: string, name: string, networkRole?: DedicatedCloudRightNetworkRoleEnum, nsxRight?: boolean, password?: string, phoneNumber?: string, receiveAlerts?: boolean, right?: DedicatedCloudRightRightEnum, tokenValidator?: boolean, vmNetworkRole?: DedicatedCloudRightVmNetworkRoleEnum}): Promise<DedicatedCloudTask>;
  /**
  changePassword operations
  Change Private Cloud user password
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/changePassword', params: {serviceName: string, userId: number, password?: string}): Promise<DedicatedCloudTask>;
  /**
  changeProperties operations
  Change Private Cloud user properties
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/changeProperties', params: {serviceName: string, userId: number, canManageIpFailOvers?: boolean, canManageNetwork?: boolean, canManageRights?: boolean, email?: string, firstName?: string, fullAdminRo?: boolean, lastName?: string, nsxRight?: boolean, phoneNumber?: string, receiveAlerts?: boolean, tokenValidator?: boolean}): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable the given Private Cloud user 
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/disable', params: {serviceName: string, userId: number}): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable the given Private Cloud user 
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/enable', params: {serviceName: string, userId: number}): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.ObjectRight objects
  Add a new object right to user in datacenter on Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight', params: {serviceName: string, userId: number, propagate?: boolean, right: DedicatedCloudRightRightEnum, type: DedicatedCloudRightUserObjectRightTypeEnum, vmwareObjectId: string}): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/changeMaintenanceExecutionDate', params: {serviceName: string, userId: number, taskId: number, executionDate: string}): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/resetTaskState', params: {serviceName: string, userId: number, taskId: number, reason: string}): Promise<DedicatedCloudTask>;
  /**
  objectType operations
  Get available object types
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vendor/objectType', params: {serviceName: string}): Promise<string[]>;
  /**
  ovhId operations
  Get ovh id from object type
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vendor/ovhId', params: {serviceName: string, objectType: DedicatedCloudVendorObjectTypeEnum, vendorId: string}): Promise<DedicatedCloudVendorOvhId>;
  /**
  List the dedicatedCloud.VMEncryptionAccessNetwork objects
  Add a new option user access
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms', params: {serviceName: string, description?: string, ip: string, sslThumbprint: string}): Promise<DedicatedCloudTask>;
  /**
  changeProperties operations
  Change option user access properties
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties', params: {serviceName: string, kmsId: number, description?: string, sslThumbprint: string}): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable vRealize Operations option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vrops/disable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable vRealize Operations option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vrops/enable', params: {serviceName: string}): Promise<DedicatedCloudTask>;
  public post(path: PathsDedicatedCloudPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Network allowed to connect to the Private Cloud management interface
  Remove this network from your Private Cloud
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}', params: {serviceName: string, networkAccessId: number}): Promise<DedicatedCloudTask>;
  /**
  Private Cloud Datacenter
  Remove this Datacenter from your Private Cloud. (It has to be empty in order to be removable)
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}', params: {serviceName: string, datacenterId: number}): Promise<DedicatedCloudTask>;
  /**
  Private Cloud federation option access network
  Remove an option user access
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}', params: {serviceName: string, activeDirectoryId: number}): Promise<DedicatedCloudTask>;
  /**
  Trust IP which can bypass the two factor authentication
  Remove a whitelisted ip on the two factor authentication
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}', params: {serviceName: string, id: number}): Promise<DedicatedCloudTask>;
  /**
  Private Cloud User
  Remove a given user from your Private Cloud
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/user/{userId}', params: {serviceName: string, userId: number}): Promise<DedicatedCloudTask>;
  /**
  Private Cloud User object right
  Remove an object right from user in datacenter on Private Cloud
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}', params: {serviceName: string, userId: number, objectRightId: number}): Promise<DedicatedCloudTask>;
  /**
  Private Cloud VM Encryption option access network
  Remove an option user access
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}', params: {serviceName: string, kmsId: number}): Promise<DedicatedCloudTask>;
  /**
  vrack dedicated cloud interface
  remove this dedicatedCloud (VmNetwork) from this vrack
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/vrack/{vrack}', params: {serviceName: string, vrack: string}): Promise<VrackTask>;
  public delete(path: PathsDedicatedCloudDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiDedicatedCloud;
