import { ApiCommon } from '@ovh-api/common';
/**
 * Determine how this user can act on the Dedicated Cloud vLans or vxLans
 */
export type DedicatedCloudRightNetworkRoleEnum = 'admin' | 'manager' | 'noAccess' | 'readonly';
/**
 * The Private Cloud Nsx option
 */
export interface DedicatedCloudNsx {
  /**
   * State of the option
   *
   */
  state?: DedicatedCloudOptionStateEnum;
  /**
   * Url of the NSX API
   *
   */
  url?: string;
}
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * A structure describing option compatibility
 */
export interface DedicatedCloudOptionCompatibility {
  /**
   * The new/future commercial version
   *
   */
  newCommercialVersion?: string;
  /**
   * The old/current commercial version
   *
   */
  oldCommercialVersion?: string;
}
/**
 * Private Cloud Host
 */
export interface DedicatedCloudHost {
  /**
   * Rack of the host
   *
   */
  rack?: string;
  /**
   * Current cpu utilization, in Mhz
   *
   */
  cpuUsed?: Number;
  /**
   * Host is in maintenance mode
   *
   */
  inMaintenance?: boolean;
  /**
   * Connection state of the host
   *
   */
  connectionState?: DedicatedCloudHostSystemConnectionState;
  /**
   * Host profile in a commercial range
   *
   */
  profile?: string;
  /**
   * CPU total frenquency
   *
   */
  cpu?: ComplexTypeUnitAndValue<Number>;
  /**
   * Id of the host
   *
   */
  hostId?: Number;
  /**
   * The maximum speed of the cpu, in Mhz
   *
   */
  cpuMax?: Number;
  /**
   * Amount of used memory. Sum of the memory used by all powered on virtual machines and vSphere services on the host. in MB
   *
   */
  memoryUsed?: Number;
  /**
   * Number of Vcpu use by virtual machines on the host
   *
   */
  vmVcpuTotal?: Number;
  /**
   * Number of physical CPU cores on the host.
   *
   */
  cpuNum?: Number;
  /**
   * Host uptime in second
   *
   */
  uptime?: Number;
  /**
   * Billing type of the host
   *
   */
  billingType?: DedicatedCloudRessourcesBillingTypeEnum;
  /**
   * Cluster of the host
   *
   */
  clusterName?: string;
  /**
   * Name of the host (IP address)
   *
   */
  name?: string;
  /**
   * Host profile code
   *
   */
  profileCode?: string;
  /**
   * The speed of the CPU cores. This is an average value if there are multiple speeds. in Mhz
   *
   */
  cpuMaxCore?: Number;
  /**
   * Id of the parent host (if any)
   *
   */
  parentHostId?: Number;
  /**
   * State of the host
   *
   */
  state?: DedicatedCloudHostStateEnum;
  /**
   * Number of Virtual Machine on the host
   *
   */
  vmTotal?: Number;
  /**
   * Total RAM quantity
   *
   */
  ram?: ComplexTypeUnitAndValue<Number>;
}
/**
 * All states a Dedicated Cloud Vlan can be in
 */
export type DedicatedCloudVlanStateEnum = 'available' | 'delivered' | 'disabled' | 'error' | 'removing' | 'reserved';
/**
 * All rights a Dedicated Cloud user may be associated with
 */
export type DedicatedCloudRightRightEnum = 'admin' | 'disabled' | 'readonly' | 'readwrite';
/**
 * The Hypervisor version of this Dedicated Cloud component
 */
export type DedicatedCloudHypervisorVersionEnum = '4.1' | '5.0' | '5.1' | '5.5' | '6.0' | '6.5' | 'hv3.1' | 'hvdc3.1' | 'nc1.0';
/**
 * State of the disaster recovery option
 */
export interface DedicatedCloudDisasterRecoveryProfile {
  /**
   * Information about the site installed on this Private Cloud
   *
   */
  localSiteInformation?: DedicatedCloudDisasterRecoveryLocalSiteDetails;
  /**
   * Disaster Recovery Plan Type
   *
   */
  drpType?: DedicatedCloudDisasterRecoveryDrpTypeEnum;
  /**
   * Information about the remote paired site
   *
   */
  remoteSiteInformation?: DedicatedCloudDisasterRecoveryRemoteSiteDetails;
  /**
   * State of the disaster recovery service
   *
   */
  state?: DedicatedCloudStateEnum;
  /**
   * Technical solution used
   *
   */
  systemVersion?: string;
}
/**
 * Site manager configured mode
 */
export type DedicatedCloudDisasterRecoverySiteRoleEnum = 'primary' | 'secondary' | 'single';
/**
 * Private Cloud User
 */
export interface DedicatedCloudUser {
  /**
   * Last name of the user
   *
   */
  lastName?: string;
  /**
   * Is this User able to access nsx interface (requires NSX option)
   *
   */
  nsxRight?: boolean;
  /**
   * Defines if the user receives technical alerts
   *
   */
  receiveAlerts?: boolean;
  /**
   * Defines if the user is a full admin in readonly
   *
   */
  fullAdminRo?: boolean;
  /**
   * Activation state of the user account
   *
   */
  activationState?: DedicatedCloudUserActivationStateEnum;
  /**
   * Login of the user
   *
   */
  login?: string;
  /**
   */
  userId?: Number;
  /**
   * First name of the user
   *
   */
  firstName?: string;
  /**
   * Check if the given Private Cloud user can be enabled or disabled ?
   *
   */
  isEnableManageable?: boolean;
  /**
   * Mobile phone number of the user
   *
   */
  phoneNumber?: string;
  /**
   * Defines if the user can confirm security tokens (if a compatible option is enabled)
   *
   */
  isTokenValidator?: boolean;
  /**
   * Name of the user
   *
   */
  name?: string;
  /**
   * Defines if the user can manage the network
   *
   */
  canManageNetwork?: boolean;
  /**
   * Defines if the user can manage users rights
   *
   */
  canManageRights?: boolean;
  /**
   * State of the user account
   *
   */
  state?: DedicatedCloudUserStateEnum;
  /**
   * Email address of the user
   *
   */
  email?: string;
  /**
   * Defines if the user can manage ip failovers
   *
   */
  canManageIpFailOvers?: boolean;
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
 * All states a Dedicated Cloud Task can be in
 */
export type DedicatedCloudTaskStateEnum = 'canceled' | 'doing' | 'done' | 'error' | 'fixing' | 'toCancel' | 'toCreate' | 'todo' | 'unknown' | 'waitingForChilds' | 'waitingTodo';
/**
 * The features available in your Private Cloud
 */
export interface DedicatedCloudCapabilities {
  /**
   * userAccessPolicy property edition status in PUT /dedicatedCloud/{serviceName}
   *
   */
  userAccessPolicyStatus?: DedicatedCloudCapabilitiesFeatureStatusEnum;
  /**
   * Backup feature order status for this Private Cloud
   *
   */
  backupStatus?: DedicatedCloudCapabilitiesFeatureStatusEnum;
  /**
   * Nexus 1000v feature order status in this Private Cloud ?
   *
   */
  nexus1000vStatus?: DedicatedCloudCapabilitiesFeatureStatusEnum;
  /**
   * if true user can be added in this Private Cloud (with POST /dedicatedCloud/{serviceName}/user
   *
   */
  canAddUser?: boolean;
  /**
   * Hypervisor upgrade order status in this Private Cloud (upgrade with POST /dedicatedCloud/{serviceName}/upgradeHypervisor)
   *
   */
  upgradable?: boolean;
  /**
   * canAddRessource right order status in this Private Cloud
   *
   */
  addRessourceRightStatus?: DedicatedCloudCapabilitiesFeatureStatusEnum;
  /**
   * fullAdminRO user right order status in this Private Cloud
   *
   */
  fullAdminRoUserStatus?: DedicatedCloudCapabilitiesFeatureStatusEnum;
}
/**
 * All Dedicated Cloud feature status available
 */
export type DedicatedCloudCapabilitiesFeatureStatusEnum = 'active' | 'comingSoon' | 'no';
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
  state?: DedicatedCloudOptionStateEnum;
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
 * The robots used in Private Cloud
 */
export interface DedicatedCloudRobot {
  /**
   * The name of this robot
   *
   */
  name?: string;
  /**
   * Description of this robot
   *
   */
  description?: string;
  /**
   * The criticity of this robot
   *
   */
  criticity?: string;
  /**
   * The type of this robot
   *
   */
  type?: string;
  /**
   * Is this robot enabled
   *
   */
  enabled?: boolean;
}
/**
 * Determine how this user can act on the Dedicated Cloud vmNetwork
 */
export type DedicatedCloudRightVmNetworkRoleEnum = 'admin' | 'noAccess' | 'readonly';
/**
 * The Private Cloud Vendor option
 */
export interface DedicatedCloudVendor {
  /**
   * name
   *
   */
  vendorName?: string;
}
/**
 * A Host profile
 */
export interface DedicatedCloudHostProfile {
  /**
   */
  core?: string;
  /**
   */
  name?: string;
  /**
   */
  cpu?: ComplexTypeUnitAndValue<Number>;
  /**
   */
  ram?: ComplexTypeUnitAndValue<Number>;
}
/**
 * The Private Cloud PCI-DSS option
 */
export interface DedicatedCloudPciDss {
  /**
   * State of the option
   *
   */
  state?: DedicatedCloudOptionStateEnum;
}
/**
 * Host profiles actually available in Private Cloud
 */
export interface DedicatedCloudHostProfile {
  /**
   * Name of Host profile
   *
   */
  name?: string;
  /**
   * Id of Host profile
   *
   */
  id?: Number;
}
/**
 * Private Cloud Backup Job
 */
export interface DedicatedCloudBackupJob {
  /**
   * Offer type of the backup job
   *
   */
  offerType?: DedicatedCloudBackupOfferTypeEnum;
  /**
   * Name of the virtual Machine
   *
   */
  vmName?: string;
  /**
   * Backup is encrypted
   *
   */
  encryption?: boolean;
  /**
   * Disk space allocated to the virtual machine
   *
   */
  allocatedDisk?: Number;
  /**
   * List of days your Virtual Machine will be backuped
   *
   */
  backupDays?: DedicatedCloudBackupBackupDaysEnum[];
  /**
   * State of the backup job
   *
   */
  state?: DedicatedCloudBackupStateEnum;
  /**
   * Number of days before the backup is deleted
   *
   */
  retentionTime?: Number;
}
/**
 * Private Cloud VM Encryption option access network
 */
export interface DedicatedCloudVMEncryptionAccessNetwork {
  /**
   * SSL thumbprint of the remote service
   *
   */
  sslThumbprint?: string;
  /**
   * IP address of the remote service
   *
   */
  ip?: string;
  /**
   * Description of your option access network
   *
   */
  description?: string;
  /**
   * VM Encryption KMS TCP port
   *
   */
  kmsTcpPort?: Number;
  /**
   * State of the option
   *
   */
  state?: DedicatedCloudOptionAccessNetworkStateEnum;
  /**
   * Id of the VM Encryption KMS
   *
   */
  kmsId?: Number;
}
/**
 * All states an Allowed Network can be in
 */
export type DedicatedCloudAllowedNetworkStateEnum = 'allowed' | 'toDelete' | 'toUpdate';
/**
 * All states a Dedicated Cloud Filer can be in
 */
export type DedicatedCloudFilerStateEnum = 'adding' | 'delivered' | 'error' | 'removing' | 'unknown';
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
 * HostProfiles and their availability
 */
export interface DedicatedCloudHostStockProfile {
  /**
   * Reference of host profile
   *
   */
  ref?: string;
  /**
   * Name of host profile
   *
   */
  name?: string;
  /**
   * Id of host profile
   *
   */
  id?: Number;
  /**
   * Available hosts
   *
   */
  value?: DedicatedCloudHostStockProcGen[];
}
/**
 * The billing type of this Dedicated Cloud
 */
export type DedicatedCloudBillingTypeEnum = 'demo' | 'monthly';
/**
 * The fault tolerance state of the virtual machine
 */
export type DedicatedCloudVirtualMachineFaultToleranceState = 'disabled' | 'enabled' | 'needSecondary' | 'notConfigured' | 'running' | 'starting';
/**
 * A structure describing the current password policy for your Dedicated Cloud
 */
export interface DedicatedCloudPasswordPolicy {
  /**
   * Password validity period (in days)
   *
   */
  validityPeriod?: Number;
  /**
   * Whether or not an uppercase letter (A-Z) is mandatory in the password
   *
   */
  uppercaseLetterMandatory?: boolean;
  /**
   * Whether or not a letter (a-z or A-Z) is mandatory in the password
   *
   */
  letterMandatory?: boolean;
  /**
   * Minimum lenght of the password
   *
   */
  minLength?: Number;
  /**
   * Number of previous passwords to keep
   *
   */
  historyCheck?: Number;
  /**
   * Whether or not a special character (\W or _) is mandatory in the password
   *
   */
  specialMandatory?: boolean;
  /**
   * Whether or not a lowercase letter (a-z) is mandatory in the password
   *
   */
  lowercaseLetterMandatory?: boolean;
  /**
   * Whether or not a digit (0-9) is mandatory in the password
   *
   */
  digitMandatory?: boolean;
  /**
   * Maximum lenght of the password
   *
   */
  maxLength?: Number;
  /**
   * List of denied characters in the password
   *
   */
  deniedChars?: string[];
}
/**
 * IP address usage
 */
export type DedicatedCloudIpUsageEnum = 'reserved' | 'vm';
/**
 * Detailed version
 */
export interface DedicatedCloudVersion {
  /**
   */
  minor?: string;
  /**
   */
  major?: string;
  /**
   */
  build?: string;
}
/**
 * Operation on a Private Cloud component
 */
export interface DedicatedCloudTask {
  /**
   * Maintenance task min allowed execution date
   *
   */
  maintenanceDateFrom?: Date;
  /**
   * Maintenance task max allowed execution date
   *
   */
  maintenanceDateTo?: Date;
  /**
   * orderId of the associated billing.Order object
   *
   */
  orderId?: Number;
  /**
   * Task end date
   *
   */
  endDate?: Date;
  /**
   * vlanId of the parent dedicatedCloud.Vlan object
   *
   */
  vlanId?: Number;
  /**
   * taskId of the parent dedicatedCloud.Task object
   *
   */
  parentTaskId?: Number;
  /**
   * Task execution date
   *
   */
  executionDate?: Date;
  /**
   * datacenterId of the associated dedicatedCloud.Datacenter object
   *
   */
  datacenterId?: Number;
  /**
   * Current progress description
   *
   */
  description?: string;
  /**
   * hostId of the associated dedicatedCloud.Host object
   *
   */
  hostId?: Number;
  /**
   * Task type
   *
   */
  type?: string;
  /**
   * userId of the associated dedicatedCloud.User object
   *
   */
  userId?: Number;
  /**
   * network of the associated dedicatedCloud.Ip object
   *
   */
  network?: string;
  /**
   * networkAccessId of the associated dedicatedCloud.AllowedNetwork object
   *
   */
  networkAccessId?: Number;
  /**
   * Task last modification date
   *
   */
  lastModificationDate?: Date;
  /**
   * Origin of the task
   *
   */
  createdFrom?: string;
  /**
   * Creator of the task
   *
   */
  createdBy?: string;
  /**
   * Task name
   *
   */
  name?: string;
  /**
   * filerId of the associated dedicatedCloud.Filer object
   *
   */
  filerId?: Number;
  /**
   * Current progress
   *
   */
  progress?: Number;
  /**
   * Current Task state
   *
   */
  state?: DedicatedCloudTaskStateEnum;
  /**
   * Task id
   *
   */
  taskId?: Number;
}
/**
 * Private Cloud Active Directory Federation option
 */
export interface DedicatedCloudFederation {
  /**
   * State of the option
   *
   */
  state?: DedicatedCloudOptionStateEnum;
}
/**
 * Processor generation and their availability
 */
export interface DedicatedCloudHostStockProcGen {
  /**
   * CPU generation
   *
   */
  cpuGeneration?: string;
  /**
   * Number of available hosts
   *
   */
  value?: DedicatedCloudHostStockHypervisor[];
}
/**
 * All states a Dedicated Cloud Host can be in
 */
export type DedicatedCloudHostStateEnum = 'adding' | 'delivered' | 'error' | 'removing' | 'unknown';
/**
 * IP Blocks associated with a Private Cloud
 */
export interface DedicatedCloudIp {
  /**
   */
  country?: string;
  /**
   * Network name
   *
   */
  networkName?: string;
  /**
   */
  description?: string;
  /**
   * Vlan where this network is routed
   *
   */
  vlanNumber?: Number;
  /**
   * The Regional Internet Registry of this Ip Block
   *
   */
  register?: DedicatedCloudBlockRegisterEnum;
  /**
   * IP ex: 213.186.33.34/24
   *
   */
  network?: string;
}
/**
 * vrack tasks
 */
export interface VrackTask {
  /**
   */
  targetDomain?: string;
  /**
   */
  orderId?: Number;
  /**
   */
  lastUpdate?: Date;
  /**
   */
  function?: string;
  /**
   */
  todoDate?: Date;
  /**
   */
  id?: Number;
  /**
   */
  serviceName?: string;
  /**
   * Task status
   *
   */
  status?: VrackTaskStatusEnum;
}
/**
 * vrack dedicated cloud interface
 */
export interface VrackDedicatedCloud {
  /**
   * Dedicated cloud vlanId used
   *
   */
  vlanId?: Number;
  /**
   * your dedicated cloud service
   *
   */
  dedicatedCloud?: string;
  /**
   * vrack name
   *
   */
  vrack?: string;
}
/**
 * Information on the remote datacenter linked to the local one
 */
export interface DedicatedCloudDisasterRecoveryRemoteSiteDetails {
  /**
   * Zvm mode configured
   *
   */
  role?: DedicatedCloudDisasterRecoverySiteRoleEnum;
  /**
   * Datacenter name (if hosted by OVH)
   *
   */
  datacenterName?: string;
  /**
   * Datacenter Id (if hosted by OVH)
   *
   */
  datacenterId?: Number;
  /**
   * State of the remote Zvm
   *
   */
  state?: DedicatedCloudStateEnum;
  /**
   * Type of hosting for the remote datacenter
   *
   */
  type?: DedicatedCloudDisasterRecoverySiteTypeEnum;
  /**
   * Installed version of Zerto
   *
   */
  zertoVersion?: string;
  /**
   * Service name (if hosted by OVH)
   *
   */
  serviceName?: string;
}
/**
 * The Private Cloud Hipaa option
 */
export interface DedicatedCloudHipaa {
  /**
   * State of the option
   *
   */
  state?: DedicatedCloudOptionStateEnum;
}
/**
 * Hourly consumption of a filer
 */
export interface DedicatedCloudFilerHourlyConsumption {
  /**
   * Last update
   *
   */
  lastUpdate?: Date;
  /**
   * Consumption of the Filer
   *
   */
  consumption?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Private Cloud User right
 */
export interface DedicatedCloudRight {
  /**
   * Determine how this user can interact with the Private Cloud V(x)Lans
   *
   */
  networkRole?: DedicatedCloudRightNetworkRoleEnum;
  /**
   */
  rightId?: Number;
  /**
   */
  datacenterId?: Number;
  /**
   * Determine how this user can interact with the Private Cloud VM Network
   *
   */
  vmNetworkRole?: DedicatedCloudRightVmNetworkRoleEnum;
  /**
   * Determine if the user can add ressources in your Private Cloud
   *
   */
  canAddRessource?: boolean;
  /**
   * Determine what kind of access the User will have in this Datacenter of your Private Cloud
   *
   */
  right?: DedicatedCloudRightRightEnum;
}
/**
 * All states a Dedicated Cloud two factor authentication whitelist can be in
 */
export type DedicatedCloudTwoFAWhitelistStateEnum = 'enabled' | 'enabling' | 'error' | 'migrating' | 'removed' | 'removing';
/**
 * States of a Private Cloud option
 */
export type DedicatedCloudOptionAccessNetworkStateEnum = 'creating' | 'deleting' | 'delivered' | 'error' | 'toCreate' | 'toDelete' | 'toUpdate' | 'unknown' | 'updating';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Site manager hosting type
 */
export type DedicatedCloudDisasterRecoverySiteTypeEnum = 'onPremise' | 'ovhPrivateCloud';
/**
 * All states a Dedicated Cloud Backup can be in
 */
export type DedicatedCloudBackupStateEnum = 'disabled' | 'disabling' | 'enabled' | 'enabling' | 'error' | 'removing';
/**
 * Hypervisor and their availability
 */
export interface DedicatedCloudHostStockHypervisor {
  /**
   * Version of hypervisor
   *
   */
  version?: string;
  /**
   * Number of available hypervisors
   *
   */
  value?: Number;
}
/**
 * Private Cloud Restore Point
 */
export interface DedicatedCloudRestorePoint {
  /**
   * Size of the restore point
   *
   */
  restorePointSize?: ComplexTypeUnitAndValue<Number>;
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
   * Type of the restore point
   *
   */
  type?: DedicatedCloudBackupBackupTypeEnum;
  /**
   * Id of the restore point.
   *
   */
  restorePointId?: Number;
}
/**
 * Private Cloud
 */
export interface DedicatedCloudDedicatedCloud {
  /**
   * Generation of your Private Cloud
   *
   */
  generation?: DedicatedCloudGenerationEnum;
  /**
   * Advanced security state
   *
   */
  advancedSecurity?: boolean;
  /**
   * The timeout (in seconds) for the user sessions on the Private Cloud management interface. 0 value disable the timeout
   *
   */
  userSessionTimeout?: Number;
  /**
   * Enable SSL v3 support. Warning : this option is not recommended as it was recognized as a security breach. If this is enabled, we advise you to enable the filtered User access policy
   *
   */
  sslV3?: boolean;
  /**
   */
  userLogoutPolicy?: DedicatedCloudUserLogoutPolicyEnum;
  /**
   * The current bandwidth of your Private Cloud
   *
   */
  bandwidth?: string;
  /**
   * The management interface name
   *
   */
  managementInterface?: DedicatedCloudManagementInterfaceEnum;
  /**
   * SPLA licensing state
   *
   */
  spla?: boolean;
  /**
   * Url to the Private Cloud vScope interface
   *
   */
  vScopeUrl?: string;
  /**
   * Description of your Private Cloud
   *
   */
  description?: string;
  /**
   * Name of the current service pack
   *
   */
  servicePackName?: string;
  /**
   * Access policy of your Private Cloud : opened to every IPs or filtered
   *
   */
  userAccessPolicy?: DedicatedCloudUserAccessPolicyEnum;
  /**
   * Service name of your Private Cloud
   *
   */
  serviceName?: string;
  /**
   * Url to the Private Cloud certified interface
   *
   */
  certifiedInterfaceUrl?: string;
  /**
   * Version of the management interface
   *
   */
  version?: DedicatedCloudVersion;
  /**
   * Url to the Private Cloud web interface
   *
   */
  webInterfaceUrl?: string;
  /**
   * Billing type of your Private Cloud
   *
   */
  billingType?: DedicatedCloudBillingTypeEnum;
  /**
   * The maximum amount of connected users allowed on the Private Cloud management interface
   *
   */
  userLimitConcurrentSession?: Number;
  /**
   * Datacenter where your Private Cloud is physically located
   *
   */
  location?: string;
  /**
   * Current state of your Private Cloud
   *
   */
  state?: DedicatedCloudStateEnum;
  /**
   * The current version of your Private Cloud
   *
   */
  commercialRange?: string;
}
/**
 * All states a vRack Task can be in
 */
export type VrackTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'init' | 'todo';
/**
 * The type of the network backing
 */
export type DedicatedCloudVmNetworkBackingTypeEnum = 'DVS' | 'VSS';
/**
 * Zpool and their availability
 */
export interface DedicatedCloudZpoolStockProfile {
  /**
   * Reference of zpool
   *
   */
  profile?: string;
  /**
   * Minimum accepted available zpools
   *
   */
  minimumAvailability?: string;
  /**
   * Available zpools
   *
   */
  realCount?: Number;
}
/**
 * The management interface of this Dedicated Cloud
 */
export type DedicatedCloudManagementInterfaceEnum = 'azure' | 'openstack' | 'systemcenter' | 'vcloud' | 'vcsa' | 'vsphere';
/**
 * This Dedicated Cloud vlan type
 */
export type DedicatedCloudVlanTypeEnum = 'admin' | 'free' | 'paid';
/**
 * The generation of a Private Cloud
 */
export type DedicatedCloudGenerationEnum = '1.0' | '2.0';
/**
 * Details about a restore point
 */
export interface DedicatedCloudBackupRestorePoint {
  /**
   * Creation time of the restore point
   *
   */
  creationTime?: Date;
  /**
   * Size of the restore point
   *
   */
  size?: ComplexTypeUnitAndValue<Number>;
  /**
   * Show if the restore point is corrupted
   *
   */
  isCorrupted?: boolean;
  /**
   * Type of the restore point
   *
   */
  type?: DedicatedCloudBackupBackupTypeEnum;
  /**
   * Id of the restore point
   *
   */
  restorePointId?: Number;
}
/**
 * Disaster Recovery Plan Types
 */
export type DedicatedCloudDisasterRecoveryDrpTypeEnum = 'onPremise' | 'ovh';
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
/**
 * A structure describing the network of a the virtual machine
 */
export interface DedicatedCloudVmNetwork {
  /**
   */
  connected?: boolean;
  /**
   */
  macAddress?: string;
  /**
   */
  backing?: DedicatedCloudVmNetworkBacking;
  /**
   */
  controler?: string;
  /**
   */
  allowGuestControl?: boolean;
  /**
   */
  label?: string;
  /**
   */
  startConnected?: boolean;
  /**
   */
  status?: DedicatedCloudVirtualDeviceConnectInfoStatus;
}
/**
 * PccZones actually available in Private Cloud
 */
export interface DedicatedCloudPccZone {
  /**
   * Name of pccZone
   *
   */
  pccZone?: string;
  /**
   * Id of pccZone
   *
   */
  id?: Number;
}
/**
 * A structure describing filers of a the virtual machine
 */
export interface DedicatedCloudVmFiler {
  /**
   */
  committed?: Number;
  /**
   */
  disks?: DedicatedCloudVmFilerDisk[];
  /**
   */
  name?: string;
}
/**
 * A structure describing filer disks of a the virtual machine
 */
export interface DedicatedCloudVmFilerDisk {
  /**
   */
  id?: string;
  /**
   */
  capacity?: Number;
}
/**
 * Hourly consumption of a host
 */
export interface DedicatedCloudHostHourlyConsumption {
  /**
   * Last update.
   *
   */
  lastUpdate?: Date;
  /**
   * Consumption of the Host.
   *
   */
  consumption?: ComplexTypeUnitAndValue<Number>;
}
/**
 * PCC and their availability
 */
export interface DedicatedCloudPccStockProfile {
  /**
   * Kind of hypervisor
   *
   */
  mode?: string;
  /**
   * Hypervisor version
   *
   */
  realVersion?: string;
  /**
   * Available PCC
   *
   */
  count?: Number;
}
/**
 * A Filer profile
 */
export interface DedicatedCloudFilerProfile {
  /**
   */
  size?: ComplexTypeUnitAndValue<Number>;
  /**
   * Commercial name
   *
   */
  name?: string;
  /**
   * Human-Readable name
   *
   */
  fullName?: string;
}
/**
 * Hypervisors actually available in Private Cloud
 */
export interface DedicatedCloudOs {
  /**
   * Last modification of hypervisor
   *
   */
  lastModificationDate?: Date;
  /**
   * Full name of hypervisor
   *
   */
  fullName?: string;
  /**
   * Short name of hypervisor
   *
   */
  shortName?: string;
}
/**
 * Details about an Ip
 */
export interface DedicatedCloudIpDetails {
  /**
   * IP address usage details
   *
   */
  usageDetails?: string;
  /**
   * IP address usage
   *
   */
  usage?: DedicatedCloudIpUsageEnum;
  /**
   * IP address
   *
   */
  ip?: string;
  /**
   * IP address reverse record
   *
   */
  reverse?: string;
}
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  text?: string;
  /**
   */
  value?: Number;
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
}
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
  state?: DedicatedCloudOptionStateEnum;
  /**
   * Version of the VMware Hybrid Cloud Extension
   *
   */
  version?: string;
}
/**
 * The commercial name component
 */
export type DedicatedCloudCommercialNameEnum = 'DC' | 'DC-ANCIENT' | 'DC-ANCIENT-HDS' | 'DC-ANCIENT-HIPAA' | 'DC-ANCIENT-NSX' | 'DC-ANCIENT-NSX-VROPS' | 'DC-ANCIENT-PCIDSS' | 'DC-ANCIENT-UNKNOWN' | 'DC-ANCIENT-VROPS' | 'DC-HDS' | 'DC-HIPAA' | 'DC-LEGACY' | 'DC-LEGACY-HDS' | 'DC-LEGACY-HIPAA' | 'DC-LEGACY-NSX' | 'DC-LEGACY-NSX-VROPS' | 'DC-LEGACY-PCIDSS' | 'DC-LEGACY-UNKNOWN' | 'DC-LEGACY-VROPS' | 'DC-NSX' | 'DC-NSX-VROPS' | 'DC-PCIDSS' | 'DC-UNKNOWN' | 'DC-VROPS' | 'SDDC' | 'SDDC-HDS' | 'SDDC-HIPAA' | 'SDDC-LEGACY' | 'SDDC-LEGACY-HDS' | 'SDDC-LEGACY-HIPAA' | 'SDDC-LEGACY-PCIDSS' | 'SDDC-LEGACY-UNKNOWN' | 'SDDC-LEGACY-VROPS' | 'SDDC-LEGACY-VROPS-WITHOUT-NSX' | 'SDDC-LEGACY-WITHOUT-NSX' | 'SDDC-PCIDSS' | 'SDDC-UNKNOWN' | 'SDDC-VROPS' | 'SDDC-VROPS-WITHOUT-NSX' | 'SDDC-WITHOUT-NSX' | 'UNKNOWN' | 'UNKNOWN-HDS' | 'UNKNOWN-HIPAA' | 'UNKNOWN-NSX' | 'UNKNOWN-NSX-VROPS' | 'UNKNOWN-PCIDSS' | 'UNKNOWN-UNKNOWN' | 'UNKNOWN-VROPS';
/**
 * State of the backup job
 */
export type DedicatedCloudBackupJobStateEnum = 'failed' | 'running' | 'stopped' | 'stopping' | 'success' | 'unknown' | 'warning';
/**
 * The connection state of the host
 */
export type DedicatedCloudHostSystemConnectionState = 'connected' | 'disconnected' | 'notResponding';
/**
 * All states a Dedicated Cloud User can be in
 */
export type DedicatedCloudUserStateEnum = 'creating' | 'deleting' | 'delivered' | 'error';
/**
 * The Private Cloud Hds option
 */
export interface DedicatedCloudHds {
  /**
   * State of the option
   *
   */
  state?: DedicatedCloudOptionStateEnum;
}
/**
 * Private Cloud Vlan
 */
export interface DedicatedCloudVlan {
  /**
   */
  vlanId?: Number;
  /**
   */
  name?: string;
  /**
   * Speed in Mbps
   *
   */
  routingRateLimit?: string;
  /**
   */
  vlanNumber?: Number;
  /**
   */
  state?: DedicatedCloudVlanStateEnum;
  /**
   */
  type?: DedicatedCloudVlanTypeEnum;
}
/**
 * All states a Dedicated Cloud can be in
 */
export type DedicatedCloudStateEnum = 'available' | 'delivered' | 'disabled' | 'disabling' | 'error' | 'migrating' | 'provisionning' | 'recycling' | 'reserved' | 'toDisable' | 'toProvision' | 'toRecycle' | 'toUnprovision' | 'unprovisionning';
/**
 * The commercial ranges actually available in your Private Cloud
 */
export interface DedicatedCloudCommercialRange {
  /**
   * The hypervisor versions compliant with this commercial Range
   *
   */
  allowedHypervisorVersions?: DedicatedCloudHypervisorVersionEnum[];
  /**
   * The name of the dedicated Cloud version associated to this commercial range
   *
   */
  dedicatedCloudVersion?: string;
  /**
   * The name of this commercial range
   *
   */
  commercialRangeName?: string;
  /**
   * The range of this Datacenter in this Private Cloud version
   *
   */
  range?: string;
  /**
   * The list of NetworkRoles allowed for one user in this commercial range
   *
   */
  allowedNetworkRoles?: DedicatedCloudRightNetworkRoleEnum[];
}
/**
 * The billing type of this Dedicated Cloud ressource
 */
export type DedicatedCloudRessourcesBillingTypeEnum = 'freeSpare' | 'hourly' | 'monthly' | 'undefined';
/**
 * All the possible Days of Backup
 */
export type DedicatedCloudBackupBackupDaysEnum = 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday';
/**
 * All activation states a Dedicated Cloud User can have
 */
export type DedicatedCloudUserActivationStateEnum = 'disabled' | 'disabling' | 'enabled' | 'enabling' | 'toDisable' | 'toEnable';
/**
 * Private Cloud federation option access network
 */
export interface DedicatedCloudFederationAccessNetwork {
  /**
   * Active Directory NetBIOS name
   *
   */
  domainAlias?: string;
  /**
   * Id of the Active Directory
   *
   */
  activeDirectoryId?: Number;
  /**
   * Active Directory LDAP port
   *
   */
  ldapTcpPort?: Number;
  /**
   * SSL thumbprint of the remote service
   *
   */
  sslThumbprint?: string;
  /**
   * Active Directory domain name
   *
   */
  domainName?: string;
  /**
   * IP address of the remote service
   *
   */
  ip?: string;
  /**
   * Active Directory base DN for groups
   *
   */
  baseDnForGroups?: string;
  /**
   * Description of your option access network
   *
   */
  description?: string;
  /**
   * Active Directory base DN for users
   *
   */
  baseDnForUsers?: string;
  /**
   * State of the option
   *
   */
  state?: DedicatedCloudOptionAccessNetworkStateEnum;
  /**
   * Active Directory username
   *
   */
  username?: string;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
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
 * All the type of a restore point
 */
export type DedicatedCloudBackupBackupTypeEnum = 'full' | 'incremental';
/**
 * The resource type of this Dedicated Cloud ressource
 */
export type DedicatedCloudRessourcesResourceTypeEnum = 'host' | 'storage';
/**
 * Private Cloud Virtual Machine
 */
export interface DedicatedCloudVm {
  /**
   * Name of the host hosting the virtual machine.
   *
   */
  hostName?: string;
  /**
   * Backup associated to this Virtual Machine
   *
   */
  backup?: DedicatedCloudBackupBackup;
  /**
   * Current version status of VMware Tools in the guest operating system.
   *
   */
  vmwareTools?: string;
  /**
   * Id of the virtual machine.
   *
   */
  vmId?: Number;
  /**
   * Current CPU performance, in MHz.
   *
   */
  cpuUsed?: Number;
  /**
   * Memory size of the virtual machine, in MB
   *
   */
  memoryMax?: Number;
  /**
   * Amount of time for a write operation from the virtual disk. In millisecond
   *
   */
  writeLatency?: Number;
  /**
   * List of the networks link to this virtual machine
   *
   */
  networks?: DedicatedCloudVmNetwork[];
  /**
   * Maximum CPU performance, in MHz.
   *
   */
  cpuMax?: Number;
  /**
   * Current memory utilization, in MB
   *
   */
  memoryUsed?: Number;
  /**
   * Percentage of time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In percent
   *
   */
  cpuReadyPercent?: Number;
  /**
   * Number of snapshot of the virtual machine.
   *
   */
  snapshotNum?: Number;
  /**
   * Power state of the virtual machine.
   *
   */
  powerState?: DedicatedCloudVirtualMachinePowerState;
  /**
   * The fault tolerance state of the virtual machine.
   *
   */
  stateFt?: DedicatedCloudVirtualMachineFaultToleranceState;
  /**
   * Cluster of the virtual machine.
   *
   */
  clusterName?: string;
  /**
   * Number of write issued per second to the virtual disk. In millisecond
   *
   */
  writePerSecond?: Number;
  /**
   * Number of read issued per second to the virtual disk. In millisecond
   *
   */
  readPerSecond?: Number;
  /**
   * Rate of reading data from the virtual disk. In KB/s
   *
   */
  readRate?: Number;
  /**
   * Amount of guest memory that is shared with other virtual machines, in Mb
   *
   */
  memoryTps?: string;
  /**
   * moRef of the virtual machine.
   *
   */
  moRef?: string;
  /**
   * Virtual machine cdroms devices
   *
   */
  cdroms?: DedicatedCloudVirtualMachineCdrom[];
  /**
   * Current version of VMware Tools
   *
   */
  vmwareToolsVersion?: string;
  /**
   * Amount of time for a read operation from the virtual disk. In millisecond
   *
   */
  readLatency?: Number;
  /**
   * Number of processors in the virtual machine.
   *
   */
  cpuNum?: Number;
  /**
   * The index of the current VM in instanceUuids array starting from 1, so 1 means that it is the primary VM.
   *
   */
  roleFt?: string;
  /**
   * Time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In millisecond
   *
   */
  cpuReady?: Number;
  /**
   * Rate of writing data from the virtual disk. In KB/s
   *
   */
  writeRate?: Number;
  /**
   * Number of packets received.
   *
   */
  netPacketRx?: Number;
  /**
   * List of filers in use by the virtual machine.
   *
   */
  filers?: DedicatedCloudVmFiler[];
  /**
   * Number of packets transmitted.
   *
   */
  netPacketTx?: Number;
  /**
   * Name of the virtual machine.
   *
   */
  name?: string;
  /**
   * Folder of the virtual machine.
   *
   */
  folderName?: string;
  /**
   * Rate at which data is transmitted. In KB/s
   *
   */
  netTx?: Number;
  /**
   * Rate at which data is received. In KB/s
   *
   */
  netRx?: Number;
}
/**
 * Network allowed to connect to the Private Cloud management interface
 */
export interface DedicatedCloudAllowedNetwork {
  /**
   */
  networkAccessId?: Number;
  /**
   */
  description?: string;
  /**
   */
  state?: DedicatedCloudAllowedNetworkStateEnum;
  /**
   * Network name, e.g. 123.100.200.0/32
   *
   */
  network?: string;
}
/**
 * Open or restricted access to management interface ?
 */
export type DedicatedCloudUserAccessPolicyEnum = 'filtered' | 'open';
/**
 * List of Service Pack compliant with the current Private Cloud
 */
export interface DedicatedCloudServicePack {
  /**
   * Options available in the Service Pack
   *
   */
  options?: string[];
  /**
   * Name of the Service Pack
   *
   */
  name?: string;
}
/**
 * All countries in which an Ip Block may be ordered
 */
export type DedicatedCloudIpCountriesEnum = 'be' | 'ca' | 'ch' | 'cz' | 'de' | 'es' | 'fi' | 'fr' | 'gb' | 'ie' | 'it' | 'lt' | 'nl' | 'pl' | 'pt' | 'us';
/**
 * Private Cloud Filer
 */
export interface DedicatedCloudFiler {
  /**
   * Provisionned space of this datastore, in GB
   *
   */
  spaceProvisionned?: Number;
  /**
   * Filer capacity
   *
   */
  size?: ComplexTypeUnitAndValue<Number>;
  /**
   * Billing type of this filer
   *
   */
  billingType?: DedicatedCloudRessourcesBillingTypeEnum;
  /**
   * Used Space of this filer, in GB
   *
   */
  spaceUsed?: Number;
  /**
   * Commercial profile name
   *
   */
  profile?: string;
  /**
   * Filer name
   *
   */
  name?: string;
  /**
   * Filer Id
   *
   */
  filerId?: Number;
  /**
   * State of the filer
   *
   */
  state?: DedicatedCloudFilerStateEnum;
  /**
   * Available space of this datastore, in GB
   *
   */
  spaceFree?: Number;
  /**
   * Human-Readable profile name
   *
   */
  fullProfile?: string;
  /**
   * Number of virtual machine on the filer
   *
   */
  vmTotal?: Number;
}
/**
 * Information on the local datacenter
 */
export interface DedicatedCloudDisasterRecoveryLocalSiteDetails {
  /**
   * Zvm mode configured
   *
   */
  role?: DedicatedCloudDisasterRecoverySiteRoleEnum;
  /**
   * Local Network Ip of the Zerto virtual manager
   *
   */
  zvmIp?: string;
  /**
   * Type of hosting for the local datacenter
   *
   */
  type?: DedicatedCloudDisasterRecoverySiteTypeEnum;
  /**
   * Installed version of Zerto
   *
   */
  zertoVersion?: string;
}
/**
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * Trust IP which can bypass the two factor authentication
 */
export interface DedicatedCloudTwoFAWhitelist {
  /**
   * IP address of the remote service
   *
   */
  ip?: string;
  /**
   * Description of the trusted IP
   *
   */
  description?: string;
  /**
   * Id of the trusted IP
   *
   */
  id?: Number;
  /**
   * State of the whitelist
   *
   */
  state?: DedicatedCloudTwoFAWhitelistStateEnum;
}
/**
 * Private Cloud User object right
 */
export interface DedicatedCloudObjectRight {
  /**
   * Name of the object
   *
   */
  name?: string;
  /**
   * Right propagation on children objects
   *
   */
  propagate?: boolean;
  /**
   * User access on the VMware object
   *
   */
  right?: DedicatedCloudRightRightEnum;
  /**
   * Type of the object
   *
   */
  type?: DedicatedCloudRightUserObjectRightTypeEnum;
  /**
   */
  objectRightId?: Number;
  /**
   * The VMware MoRef of the object
   *
   */
  vmwareObjectId?: string;
}
/**
 * The connectable virtual device status
 */
export type DedicatedCloudVirtualDeviceConnectInfoStatus = 'ok' | 'recoverableError' | 'unrecoverableError' | 'untried';
/**
 * Representation of a Vendor object in OVH API
 */
export interface DedicatedCloudVendorOvhId {
  /**
   * Vm id
   *
   */
  vmId?: Number;
  /**
   * Datacenter id
   *
   */
  datacenterId?: Number;
  /**
   * Filer id
   *
   */
  filerId?: Number;
  /**
   * Host id
   *
   */
  hostId?: Number;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * A structure describing the backing network of a the virtual machine
 */
export interface DedicatedCloudVmNetworkBacking {
  /**
   */
  portGroupKey?: string;
  /**
   */
  switchUuid?: string;
  /**
   */
  useAutoDetect?: boolean;
  /**
   */
  valueMoref?: string;
  /**
   */
  type?: DedicatedCloudVmNetworkBackingTypeEnum;
  /**
   */
  deviceName?: string;
  /**
   */
  portKey?: string;
}
/**
 * Dedicated Cloud vendors objects types
 */
export type DedicatedCloudVendorObjectTypeEnum = 'cluster' | 'datacenter' | 'filer' | 'host' | 'vm';
/**
 * All the offer type of the backup
 */
export type DedicatedCloudBackupOfferTypeEnum = 'advanced' | 'backup' | 'classic' | 'legacy';
/**
 * Backup configured on a given Datacenter
 */
export interface DedicatedCloudBackup {
  /**
   * The moref of the backup server virtual machine
   *
   */
  vmwareVmId?: string;
  /**
   * RestorePoint number on mail report
   *
   */
  restorePointInReport?: boolean;
  /**
   * Name of the backup server virtual machine.
   *
   */
  hostname?: string;
  /**
   * Backup size on day on email report
   *
   */
  backupSizeInReport?: boolean;
  /**
   * Backup is encrypted
   *
   */
  encryption?: boolean;
  /**
   * Schedule hour for start backup
   *
   */
  scheduleHour?: Date;
  /**
   * Full day on mail report
   *
   */
  fullDayInReport?: boolean;
  /**
   * Unique additional email address for backup daily report
   *
   */
  mailAddress?: string;
  /**
   * This Backup current state
   *
   */
  state?: DedicatedCloudBackupStateEnum;
  /**
   * Duration on email report
   *
   */
  backupDurationInReport?: boolean;
  /**
   * Disk size on mail report
   *
   */
  diskSizeInReport?: boolean;
  /**
   * Backup offer type
   *
   */
  backupOffer?: DedicatedCloudBackupOfferTypeEnum;
}
/**
 * The Private Cloud vRealize Operations option
 */
export interface DedicatedCloudVrops {
  /**
   * State of the option
   *
   */
  state?: DedicatedCloudOptionStateEnum;
  /**
   * Url of the vRealize Operations interface
   *
   */
  url?: string;
}
/**
 * A structure describing the Resource's new price
 */
export interface DedicatedCloudResourceNewPricesEntry {
  /**
   */
  billingType?: DedicatedCloudRessourcesBillingTypeEnum;
  /**
   */
  oldPrice?: OrderPrice;
  /**
   */
  name?: string;
  /**
   */
  newPrice?: OrderPrice;
  /**
   */
  resourceType?: DedicatedCloudRessourcesResourceTypeEnum;
  /**
   */
  changed?: boolean;
}
/**
 * The power state of the virtual machine
 */
export type DedicatedCloudVirtualMachinePowerState = 'deleted' | 'poweredOff' | 'poweredOn' | 'suspended';
/**
 * The Regional Internet Registry of this IP block
 */
export type DedicatedCloudBlockRegisterEnum = 'arin' | 'ripe';
/**
 * States of a Private Cloud option
 */
export type DedicatedCloudOptionStateEnum = 'disabled' | 'disabling' | 'enabled' | 'enabling' | 'error' | 'migrating' | 'unknown';
/**
 * Details about a backup
 */
export interface DedicatedCloudBackupBackup {
  /**
   * Offer type of the backup job
   *
   */
  offerType?: DedicatedCloudBackupOfferTypeEnum;
  /**
   * Last duration of the backup job
   *
   */
  lastDuration?: ComplexTypeUnitAndValue<Number>;
  /**
   * Last successful creation time of the backup job
   *
   */
  lastSuccessfulCreationTime?: Date;
  /**
   * Last creation time of the backup job
   *
   */
  lastCreationTime?: Date;
  /**
   * Last successful duration of the backup job
   *
   */
  lastSuccessfulDuration?: ComplexTypeUnitAndValue<Number>;
  /**
   * Backup is encrypted
   *
   */
  encryption?: boolean;
  /**
   * Last result of the backup job
   *
   */
  lastResult?: DedicatedCloudBackupJobStateEnum;
  /**
   * List of days your Virtual Machine will be backuped
   *
   */
  backupDays?: DedicatedCloudBackupBackupDaysEnum[];
  /**
   * Disk space allocated to the virtual machine (in GB)
   *
   */
  allocatedDisk?: Number;
  /**
   * Restore points of this backup job
   *
   */
  restorePoints?: DedicatedCloudBackupRestorePoint[];
  /**
   * State of the backup job
   *
   */
  state?: DedicatedCloudBackupStateEnum;
  /**
   * Number of days before the backup is deleted
   *
   */
  retentionTime?: Number;
}
/**
 * All types of objects handled in objectRights
 */
export type DedicatedCloudRightUserObjectRightTypeEnum = 'cluster' | 'datastore' | 'dvportgroup' | 'folder' | 'pool' | 'vm';
/**
 * Private Cloud Datacenter
 */
export interface DedicatedCloudDatacenter {
  /**
   * Name of the associated Horizon View service if the VDI option is enabled
   *
   */
  horizonViewName?: string;
  /**
   */
  datacenterId?: Number;
  /**
   * The commercial range associated to this Datacenter
   *
   */
  commercialRangeName?: string;
  /**
   */
  name?: string;
  /**
   */
  description?: string;
  /**
   * Check if this datacenter is removable (Need to be Empty)
   *
   */
  isRemovable?: boolean;
  /**
   * Os version installed on your Private Cloud
   *
   */
  version?: string;
  /**
   * The commercial name of this Datacenter
   *
   */
  commercialName?: DedicatedCloudCommercialNameEnum;
}
/**
 * All the state of the backup
 */
export type DedicatedCloudBackupStateEnum = 'deleting' | 'delivered' | 'disabled' | 'disabling' | 'enabling' | 'error' | 'migrating' | 'pending' | 'removed' | 'stopping' | 'toCreate' | 'toDelete' | 'toDisable' | 'toEnable' | 'toStop' | 'unknown';
type PathsdedicatedCloudGET = '/dedicatedCloud/{serviceName}/hcx/canBeEnabled' | 
'/dedicatedCloud/{serviceName}/hcx/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/hcx' | 
'/dedicatedCloud/{serviceName}/task' | 
'/dedicatedCloud/{serviceName}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/hds' | 
'/dedicatedCloud/{serviceName}/hds/canBeEnabled' | 
'/dedicatedCloud/{serviceName}/hds/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/user/{userId}' | 
'/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/user/{userId}/task' | 
'/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}' | 
'/dedicatedCloud/{serviceName}/user/{userId}/objectRight' | 
'/dedicatedCloud/{serviceName}/user/{userId}/right' | 
'/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}' | 
'/dedicatedCloud/{serviceName}/user' | 
'/dedicatedCloud/{serviceName}/serviceInfos' | 
'/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}' | 
'/dedicatedCloud/{serviceName}/twoFAWhitelist' | 
'/dedicatedCloud/{serviceName}/capabilities' | 
'/dedicatedCloud/{serviceName}/vlan/{vlanId}' | 
'/dedicatedCloud/{serviceName}/vlan' | 
'/dedicatedCloud/{serviceName}/ip/{network}/task' | 
'/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/ip/{network}/details' | 
'/dedicatedCloud/{serviceName}/ip/{network}' | 
'/dedicatedCloud/{serviceName}/ip' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}' | 
'/dedicatedCloud/{serviceName}/allowedNetwork' | 
'/dedicatedCloud/{serviceName}/filer' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/hourlyConsumption' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/task' | 
'/dedicatedCloud/{serviceName}/vmEncryption' | 
'/dedicatedCloud/{serviceName}/vmEncryption/kms' | 
'/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}' | 
'/dedicatedCloud/{serviceName}/newPrices' | 
'/dedicatedCloud/{serviceName}/orderableIpCountries' | 
'/dedicatedCloud/{serviceName}/passwordPolicy' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/hourlyConsumption' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles' | 
'/dedicatedCloud/{serviceName}/datacenter' | 
'/dedicatedCloud/{serviceName}/nsx/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/nsx/canBeEnabled' | 
'/dedicatedCloud/{serviceName}/nsx' | 
'/dedicatedCloud/{serviceName}/robot/{name}' | 
'/dedicatedCloud/{serviceName}/robot' | 
'/dedicatedCloud/{serviceName}/pcidss/canBeEnabled' | 
'/dedicatedCloud/{serviceName}/pcidss/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/pcidss' | 
'/dedicatedCloud/{serviceName}/commercialRange/orderable' | 
'/dedicatedCloud/{serviceName}/commercialRange/compliance' | 
'/dedicatedCloud/{serviceName}' | 
'/dedicatedCloud/{serviceName}/vrack/{vrack}' | 
'/dedicatedCloud/{serviceName}/vrack' | 
'/dedicatedCloud/{serviceName}/servicePacks' | 
'/dedicatedCloud/{serviceName}/servicePacks/{name}' | 
'/dedicatedCloud/{serviceName}/vendor' | 
'/dedicatedCloud/{serviceName}/globalTasks' | 
'/dedicatedCloud/{serviceName}/vrops' | 
'/dedicatedCloud/{serviceName}/vrops/canBeEnabled' | 
'/dedicatedCloud/{serviceName}/vrops/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/federation' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory' | 
'/dedicatedCloud/{serviceName}/hipaa/canBeDisabled' | 
'/dedicatedCloud/{serviceName}/hipaa/canBeEnabled' | 
'/dedicatedCloud/{serviceName}/hipaa' | 
'/dedicatedCloud/commercialRange' | 
'/dedicatedCloud/commercialRange/{commercialRangeName}' | 
'/dedicatedCloud' | 
'/dedicatedCloud/location' | 
'/dedicatedCloud/location/{pccZone}' | 
'/dedicatedCloud/location/{pccZone}/hypervisor/{shortName}' | 
'/dedicatedCloud/location/{pccZone}/hypervisor' | 
'/dedicatedCloud/location/{pccZone}/stock/host' | 
'/dedicatedCloud/location/{pccZone}/stock/zpool' | 
'/dedicatedCloud/location/{pccZone}/stock/pcc' | 
'/dedicatedCloud/location/{pccZone}/hostProfile/{id}' | 
'/dedicatedCloud/location/{pccZone}/hostProfile';

type PathsdedicatedCloudPUT = '/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}' | 
'/dedicatedCloud/{serviceName}/serviceInfos' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}' | 
'/dedicatedCloud/{serviceName}';

type PathsdedicatedCloudPOST = '/dedicatedCloud/{serviceName}/orderNewFilerHourly' | 
'/dedicatedCloud/{serviceName}/hcx/enable' | 
'/dedicatedCloud/{serviceName}/hcx/disable' | 
'/dedicatedCloud/{serviceName}/terminate' | 
'/dedicatedCloud/{serviceName}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/hds/disable' | 
'/dedicatedCloud/{serviceName}/hds/enable' | 
'/dedicatedCloud/{serviceName}/user/{userId}/disable' | 
'/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/user/{userId}/changeProperties' | 
'/dedicatedCloud/{serviceName}/user/{userId}/enable' | 
'/dedicatedCloud/{serviceName}/user/{userId}/objectRight' | 
'/dedicatedCloud/{serviceName}/user/{userId}/changePassword' | 
'/dedicatedCloud/{serviceName}/user' | 
'/dedicatedCloud/{serviceName}/changeContact' | 
'/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties' | 
'/dedicatedCloud/{serviceName}/twoFAWhitelist' | 
'/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/allowedNetwork' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/remove' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/vmEncryption/kms' | 
'/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/editBackup' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableBackup' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}/restore' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/disable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/generateZsspPassword' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/state' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/resetTaskState' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly' | 
'/dedicatedCloud/{serviceName}/datacenter' | 
'/dedicatedCloud/{serviceName}/resetTriggeredAlarm' | 
'/dedicatedCloud/{serviceName}/nsx/enable' | 
'/dedicatedCloud/{serviceName}/nsx/disable' | 
'/dedicatedCloud/{serviceName}/changeProperties' | 
'/dedicatedCloud/{serviceName}/pcidss/enable' | 
'/dedicatedCloud/{serviceName}/pcidss/disable' | 
'/dedicatedCloud/{serviceName}/vendor/objectType' | 
'/dedicatedCloud/{serviceName}/vendor/ovhId' | 
'/dedicatedCloud/{serviceName}/vrops/disable' | 
'/dedicatedCloud/{serviceName}/vrops/enable' | 
'/dedicatedCloud/{serviceName}/upgradeHypervisor' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/changeProperties' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory' | 
'/dedicatedCloud/{serviceName}/hipaa/enable' | 
'/dedicatedCloud/{serviceName}/hipaa/disable' | 
'/dedicatedCloud/{serviceName}/confirmTermination';

type PathsdedicatedCloudDELETE = '/dedicatedCloud/{serviceName}/user/{userId}' | 
'/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}' | 
'/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}' | 
'/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}' | 
'/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}' | 
'/dedicatedCloud/{serviceName}/datacenter/{datacenterId}' | 
'/dedicatedCloud/{serviceName}/vrack/{vrack}' | 
'/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}';

class ApidedicatedCloud extends ApiCommon {
  /**
  canBeEnabled operations
  Check if VMware Hybrid Cloud Extension option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hcx/canBeEnabled', pathParams: {serviceName?: string}, queryParams: null): Promise<boolean>;
  /**
  canBeDisabled operations
  Check if VMware Hybrid Cloud Extension option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hcx/canBeDisabled', pathParams: {serviceName?: string}, queryParams: null): Promise<boolean>;
  /**
  Private Cloud VMware Hybrid Cloud Extension option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hcx', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudHcx>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<Number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<DedicatedCloudTask>;
  /**
  The Private Cloud Hds option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hds', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudHds>;
  /**
  canBeEnabled operations
  Check if Hds option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hds/canBeEnabled', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudOptionCompatibility>;
  /**
  canBeDisabled operations
  Check if Hds option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hds/canBeDisabled', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudOptionCompatibility>;
  /**
  Private Cloud User
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}', pathParams: {serviceName?: string, userId?: Number}, queryParams: null): Promise<DedicatedCloudUser>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}', pathParams: {serviceName?: string, userId?: Number, taskId?: Number}, queryParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this User
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/task', pathParams: {serviceName?: string, userId?: Number}, queryParams: {name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<Number[]>;
  /**
  Private Cloud User object right
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}', pathParams: {serviceName?: string, userId?: Number, objectRightId?: Number}, queryParams: null): Promise<DedicatedCloudObjectRight>;
  /**
  List the dedicatedCloud.ObjectRight objects
  User rights on an object
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight', pathParams: {serviceName?: string, userId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  List the dedicatedCloud.Right objects
  User rights in a given Datacenters
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/right', pathParams: {serviceName?: string, userId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Private Cloud User right
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}', pathParams: {serviceName?: string, userId?: Number, rightId?: Number}, queryParams: null): Promise<DedicatedCloudRight>;
  /**
  List the dedicatedCloud.User objects
  Private Cloud users
  **/
  public get(path: '/dedicatedCloud/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: {name?: string}): Promise<Number[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Trust IP which can bypass the two factor authentication
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<DedicatedCloudTwoFAWhitelist>;
  /**
  List the dedicatedCloud.twoFAWhitelist objects
  Ip allowed to bypass the two factor authentication on this Private Cloud management interface
  **/
  public get(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  The features available in your Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/capabilities', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudCapabilities>;
  /**
  Private Cloud Vlan
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vlan/{vlanId}', pathParams: {serviceName?: string, vlanId?: Number}, queryParams: null): Promise<DedicatedCloudVlan>;
  /**
  List the dedicatedCloud.Vlan objects
  Private Cloud vlans
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vlan', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this IP Block
  **/
  public get(path: '/dedicatedCloud/{serviceName}/ip/{network}/task', pathParams: {serviceName?: string, network?: string}, queryParams: {state?: DedicatedCloudTaskStateEnum, name?: string}): Promise<Number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}', pathParams: {serviceName?: string, network?: string, taskId?: Number}, queryParams: null): Promise<DedicatedCloudTask>;
  /**
  details operations
  List details about this IP Block
  **/
  public get(path: '/dedicatedCloud/{serviceName}/ip/{network}/details', pathParams: {serviceName?: string, network?: string}, queryParams: null): Promise<DedicatedCloudIpDetails[]>;
  /**
  IP Blocks associated with a Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/ip/{network}', pathParams: {serviceName?: string, network?: string}, queryParams: null): Promise<DedicatedCloudIp>;
  /**
  List the dedicatedCloud.Ip objects
  Ip Blocks attached to this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/ip', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}', pathParams: {serviceName?: string, networkAccessId?: Number, taskId?: Number}, queryParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this allowed network
  **/
  public get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task', pathParams: {serviceName?: string, networkAccessId?: Number}, queryParams: {name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<Number[]>;
  /**
  Network allowed to connect to the Private Cloud management interface
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}', pathParams: {serviceName?: string, networkAccessId?: Number}, queryParams: null): Promise<DedicatedCloudAllowedNetwork>;
  /**
  List the dedicatedCloud.AllowedNetwork objects
  Networks allowed to access to this Private Cloud management interface
  **/
  public get(path: '/dedicatedCloud/{serviceName}/allowedNetwork', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the dedicatedCloud.Filer objects
  Filers mounted on all Datacenters of your Private Cloud Vsphere
  **/
  public get(path: '/dedicatedCloud/{serviceName}/filer', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Private Cloud Filer
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}', pathParams: {serviceName?: string, filerId?: Number}, queryParams: null): Promise<DedicatedCloudFiler>;
  /**
  hourlyConsumption operations
  Hourly consumption associated with this Filer
  **/
  public get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/hourlyConsumption', pathParams: {serviceName?: string, filerId?: Number}, queryParams: null): Promise<DedicatedCloudFilerHourlyConsumption>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}', pathParams: {serviceName?: string, filerId?: Number, taskId?: Number}, queryParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this Filer
  **/
  public get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task', pathParams: {serviceName?: string, filerId?: Number}, queryParams: {state?: DedicatedCloudTaskStateEnum, name?: string}): Promise<Number[]>;
  /**
  Private Cloud VM Encryption option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vmEncryption', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudVMEncryption>;
  /**
  List the dedicatedCloud.VMEncryptionAccessNetwork objects
  VM Encryption KMS linked to this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Private Cloud VM Encryption option access network
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}', pathParams: {serviceName?: string, kmsId?: Number}, queryParams: null): Promise<DedicatedCloudVMEncryptionAccessNetwork>;
  /**
  newPrices operations
  Get the new Prices for your Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/newPrices', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudResourceNewPrices>;
  /**
  orderableIpCountries operations
  Get the countries you can select in /order/dedicatedCloud/{serviceName}/ip
  **/
  public get(path: '/dedicatedCloud/{serviceName}/orderableIpCountries', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudIpCountriesEnum[]>;
  /**
  passwordPolicy operations
  Get the current password policy for your Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/passwordPolicy', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudPasswordPolicy>;
  /**
  orderableFilerProfiles operations
  List available filers in a given Private Cloud Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null): Promise<DedicatedCloudFilerProfile[]>;
  /**
  Private Cloud Backup Job
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number}, queryParams: null): Promise<DedicatedCloudBackupJob>;
  /**
  Private Cloud Restore Point
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number, restorePointId?: Number}, queryParams: null): Promise<DedicatedCloudRestorePoint>;
  /**
  List the dedicatedCloud.RestorePoint objects
  Restore point associated to this Backup Job
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Private Cloud Virtual Machine
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number}, queryParams: null): Promise<DedicatedCloudVm>;
  /**
  List the dedicatedCloud.Vm objects
  Virtual machiness associated with this Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: {state?: DedicatedCloudTaskStateEnum, name?: string}): Promise<Number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}', pathParams: {serviceName?: string, datacenterId?: Number, taskId?: Number}, queryParams: null): Promise<DedicatedCloudTask>;
  /**
  defaultLocalVraNetwork operations
  Get the default localVraNetwork subnet suggested by OVH
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null): Promise<string>;
  /**
  Private Cloud Datacenter
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null): Promise<DedicatedCloudDatacenter>;
  /**
  Backup configured on a given Datacenter
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null): Promise<DedicatedCloudBackup>;
  /**
  Private Cloud Host
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}', pathParams: {serviceName?: string, datacenterId?: Number, hostId?: Number}, queryParams: null): Promise<DedicatedCloudHost>;
  /**
  hourlyConsumption operations
  Hourly consumption associated with this host.
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/hourlyConsumption', pathParams: {serviceName?: string, datacenterId?: Number, hostId?: Number}, queryParams: null): Promise<DedicatedCloudHostHourlyConsumption>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}', pathParams: {serviceName?: string, datacenterId?: Number, hostId?: Number, taskId?: Number}, queryParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this Host
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task', pathParams: {serviceName?: string, datacenterId?: Number, hostId?: Number}, queryParams: {name?: string, state?: DedicatedCloudTaskStateEnum}): Promise<Number[]>;
  /**
  List the dedicatedCloud.Host objects
  Hosts associated with this Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Operation on a Private Cloud component
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}', pathParams: {serviceName?: string, datacenterId?: Number, filerId?: Number, taskId?: Number}, queryParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.Task objects
  Tasks associated with this Filer
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task', pathParams: {serviceName?: string, datacenterId?: Number, filerId?: Number}, queryParams: {state?: DedicatedCloudTaskStateEnum, name?: string}): Promise<Number[]>;
  /**
  hourlyConsumption operations
  Hourly consumption associated with this Filer
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption', pathParams: {serviceName?: string, datacenterId?: Number, filerId?: Number}, queryParams: null): Promise<DedicatedCloudFilerHourlyConsumption>;
  /**
  Private Cloud Filer
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}', pathParams: {serviceName?: string, datacenterId?: Number, filerId?: Number}, queryParams: null): Promise<DedicatedCloudFiler>;
  /**
  List the dedicatedCloud.Filer objects
  Filers associated with this Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  orderableHostProfiles operations
  List available hosts in a given Private Cloud Datacenter
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null): Promise<DedicatedCloudHostProfile[]>;
  /**
  List the dedicatedCloud.Datacenter objects
  Datacenters associated with this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/datacenter', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  canBeDisabled operations
  Check if Nsx option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/nsx/canBeDisabled', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudOptionCompatibility>;
  /**
  canBeEnabled operations
  Check if Nsx option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/nsx/canBeEnabled', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudOptionCompatibility>;
  /**
  The Private Cloud Nsx option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/nsx', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudNsx>;
  /**
  The robots used in Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/robot/{name}', pathParams: {serviceName?: string, name?: string}, queryParams: null): Promise<DedicatedCloudRobot>;
  /**
  List the dedicatedCloud.Robot objects
  Robots that can run on this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/robot', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  canBeEnabled operations
  Check if PCI-DSS option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/pcidss/canBeEnabled', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudOptionCompatibility>;
  /**
  canBeDisabled operations
  Check if PCI-DSS option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/pcidss/canBeDisabled', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudOptionCompatibility>;
  /**
  The Private Cloud PCI-DSS option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/pcidss', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudPciDss>;
  /**
  orderable operations
  Get the name of the commercial ranges orderable in your Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/commercialRange/orderable', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  compliance operations
  Get the name of the commercial ranges compliant with your Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/commercialRange/compliance', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudDedicatedCloud>;
  /**
  vrack dedicated cloud interface
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vrack/{vrack}', pathParams: {serviceName?: string, vrack?: string}, queryParams: null): Promise<VrackDedicatedCloud>;
  /**
  List the vrack.dedicatedCloud objects
  This Private Cloud vrack
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vrack', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the dedicatedCloud.ServicePack objects
  Service Pack compliant with the current Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/servicePacks', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List of Service Pack compliant with the current Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/servicePacks/{name}', pathParams: {serviceName?: string, name?: string}, queryParams: null): Promise<DedicatedCloudServicePack>;
  /**
  The Private Cloud Vendor option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vendor', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudVendor>;
  /**
  globalTasks operations
  Get filtered tasks associated with this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/globalTasks', pathParams: {serviceName?: string}, queryParams: {parentTaskId?: Number, state?: DedicatedCloudTaskStateEnum[], 'executionDate.to'?: Date, hostId?: Number, userId?: Number, 'lastModificationDate.from'?: Date, orderId?: Number, 'endDate.from'?: Date, 'executionDate.from'?: Date, 'lastModificationDate.to'?: Date, 'endDate.to'?: Date, name?: string, vlanId?: Number, networkAccessId?: Number, filerId?: Number, datacenterId?: Number}): Promise<Number[]>;
  /**
  The Private Cloud vRealize Operations option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vrops', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudVrops>;
  /**
  canBeEnabled operations
  Check if vRealize Operations option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vrops/canBeEnabled', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudOptionCompatibility>;
  /**
  canBeDisabled operations
  Check if vRealize Operations option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/vrops/canBeDisabled', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudOptionCompatibility>;
  /**
  Private Cloud Active Directory Federation option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/federation', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudFederation>;
  /**
  Private Cloud federation option access network
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}', pathParams: {serviceName?: string, activeDirectoryId?: Number}, queryParams: null): Promise<DedicatedCloudFederationAccessNetwork>;
  /**
  List the dedicatedCloud.FederationAccessNetwork objects
  Active Directories linked to this Private Cloud
  **/
  public get(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  canBeDisabled operations
  Check if Hipaa option can be disabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hipaa/canBeDisabled', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudOptionCompatibility>;
  /**
  canBeEnabled operations
  Check if Hipaa option can be enabled
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hipaa/canBeEnabled', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudOptionCompatibility>;
  /**
  The Private Cloud Hipaa option
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/{serviceName}/hipaa', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCloudHipaa>;
  /**
  List the dedicatedCloud.CommercialRange objects
  List of commercial Ranges available in a Dedicated Cloud
  **/
  public get(path: '/dedicatedCloud/commercialRange', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  The commercial ranges actually available in your Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/commercialRange/{commercialRangeName}', pathParams: {commercialRangeName?: string}, queryParams: null): Promise<DedicatedCloudCommercialRange>;
  /**
  Operations about the PCC service
  List available services
  **/
  public get(path: '/dedicatedCloud', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List the dedicatedCloud.PccZone objects
  List of locations available in a Dedicated Cloud
  **/
  public get(path: '/dedicatedCloud/location', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  PccZones actually available in Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}', pathParams: {pccZone?: string}, queryParams: null): Promise<DedicatedCloudPccZone>;
  /**
  Hypervisors actually available in Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/hypervisor/{shortName}', pathParams: {pccZone?: string, shortName?: string}, queryParams: null): Promise<DedicatedCloudOs>;
  /**
  List the dedicatedCloud.Os objects
  Offered hypervisor version
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/hypervisor', pathParams: {pccZone?: string}, queryParams: null): Promise<string[]>;
  /**
  host operations
  Available host stock
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/stock/host', pathParams: {pccZone?: string}, queryParams: {minYear?: Number}): Promise<DedicatedCloudHostStockProfile[]>;
  /**
  zpool operations
  Available zpool stock
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/stock/zpool', pathParams: {pccZone?: string}, queryParams: {profileFilter?: string}): Promise<DedicatedCloudZpoolStockProfile[]>;
  /**
  pcc operations
  Available PCC stock
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/stock/pcc', pathParams: {pccZone?: string}, queryParams: null): Promise<DedicatedCloudPccStockProfile[]>;
  /**
  Host profiles actually available in Private Cloud
  Get this object properties
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/hostProfile/{id}', pathParams: {pccZone?: string, id?: Number}, queryParams: null): Promise<DedicatedCloudHostProfile>;
  /**
  List the dedicatedCloud.HostProfile objects
  Offered host profile
  **/
  public get(path: '/dedicatedCloud/location/{pccZone}/hostProfile', pathParams: {pccZone?: string}, queryParams: null): Promise<Number[]>;
  public get(path: PathsdedicatedCloudGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Private Cloud User right
  Alter this object properties
  **/
  public put(path: '/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}', pathParams: {serviceName?: string, userId?: Number, rightId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dedicatedCloud/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Network allowed to connect to the Private Cloud management interface
  Alter this object properties
  **/
  public put(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}', pathParams: {serviceName?: string, networkAccessId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Private Cloud Datacenter
  Alter this object properties
  **/
  public put(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Private Cloud
  Alter this object properties
  **/
  public put(path: '/dedicatedCloud/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsdedicatedCloudPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  orderNewFilerHourly operations
  Order a new hourly Filer mounted in every Datacenter of a given Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/orderNewFilerHourly', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable VMware Hybrid Cloud Extension option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hcx/enable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable VMware Hybrid Cloud Extension option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hcx/disable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/dedicatedCloud/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/task/{taskId}/resetTaskState', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable Hds option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hds/disable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable Hds option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hds/enable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable the given Private Cloud user 
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/disable', pathParams: {serviceName?: string, userId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/changeMaintenanceExecutionDate', pathParams: {serviceName?: string, userId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/resetTaskState', pathParams: {serviceName?: string, userId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeProperties operations
  Change Private Cloud user properties
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/changeProperties', pathParams: {serviceName?: string, userId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable the given Private Cloud user 
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/enable', pathParams: {serviceName?: string, userId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.ObjectRight objects
  Add a new object right to user in datacenter on Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight', pathParams: {serviceName?: string, userId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changePassword operations
  Change Private Cloud user password
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user/{userId}/changePassword', pathParams: {serviceName?: string, userId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.User objects
  Create a new User in your Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/dedicatedCloud/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  changeProperties operations
  Change Private Cloud Two facter authentication whitelist properties
  **/
  public post(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.twoFAWhitelist objects
  Add a whitelisted ip on the two factor authentication
  **/
  public post(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/changeMaintenanceExecutionDate', pathParams: {serviceName?: string, network?: string, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState', pathParams: {serviceName?: string, network?: string, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState', pathParams: {serviceName?: string, networkAccessId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate', pathParams: {serviceName?: string, networkAccessId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.AllowedNetwork objects
  Create a new Allowed network for your dedicatedCloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/allowedNetwork', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  remove operations
  Remove the filer from your Private Cloud.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/remove', pathParams: {serviceName?: string, filerId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/resetTaskState', pathParams: {serviceName?: string, filerId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate', pathParams: {serviceName?: string, filerId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.VMEncryptionAccessNetwork objects
  Add a new option user access
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeProperties operations
  Change option user access properties
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties', pathParams: {serviceName?: string, kmsId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enableBackup operations
  Enable backup on this virtual Machine
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  editBackup operations
  Edit backup on this virtual Machine
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/editBackup', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  disableBackup operations
  Disable backup on this virtual Machine
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableBackup', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  Private Cloud Backup Job
  Edit a backup job
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable backup solution on this virtual Machine
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  restore operations
  Restore this restore point
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}/restore', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number, restorePointId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable backup solution on this virtual Machine
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  restoreBackup operations
  Restore this restore point
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup', pathParams: {serviceName?: string, datacenterId?: Number, vmId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/resetTaskState', pathParams: {serviceName?: string, datacenterId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/changeMaintenanceExecutionDate', pathParams: {serviceName?: string, datacenterId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable Zerto replication between your OVH Private Cloud and your onsite infrastructure
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  configureVpn operations
  Configure vpn between your OVH Private Cloud and your onsite infrastructure
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable Single site Zerto
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/disable', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  generateZsspPassword operations
  Generate a new password for Zerto Self Service Portal and receive it by email.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/generateZsspPassword', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable Zerto replication between 2 OVH dedicated Clouds
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable Zerto
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  state operations
  Get the current state of Zerto deployment on your dedicated Cloud.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/state', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudDisasterRecoveryProfile>;
  /**
  orderNewFilerHourly operations
  Order a new hourly Filer in a given Datacenter
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeProperties operations
  Edit the backup on a Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable backup solution on a Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable backup solution on a Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  addHostSpare operations
  Add a spare host to your Private Cloud.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare', pathParams: {serviceName?: string, datacenterId?: Number, hostId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/resetTaskState', pathParams: {serviceName?: string, datacenterId?: Number, hostId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/changeMaintenanceExecutionDate', pathParams: {serviceName?: string, datacenterId?: Number, hostId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  remove operations
  Remove the host from your Private Cloud.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove', pathParams: {serviceName?: string, datacenterId?: Number, hostId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  remove operations
  Remove the filer from your Private Cloud.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove', pathParams: {serviceName?: string, datacenterId?: Number, filerId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  resetTaskState operations
  Restart task in error.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/resetTaskState', pathParams: {serviceName?: string, datacenterId?: Number, filerId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeMaintenanceExecutionDate operations
  Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate', pathParams: {serviceName?: string, datacenterId?: Number, filerId?: Number, taskId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  orderNewHostHourly operations
  Order a new hourly Host in a given Datacenter
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.Datacenter objects
  Add a new Datacenter in your Private Cloud
  **/
  public post(path: '/dedicatedCloud/{serviceName}/datacenter', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  resetTriggeredAlarm operations
  Reset all triggered alarms on PCC
  **/
  public post(path: '/dedicatedCloud/{serviceName}/resetTriggeredAlarm', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable Nsx option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/nsx/enable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable Nsx option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/nsx/disable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeProperties operations
  Update this Private Cloud properties.
  **/
  public post(path: '/dedicatedCloud/{serviceName}/changeProperties', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable PCI-DSS option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/pcidss/enable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable PCI-DSS option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/pcidss/disable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  objectType operations
  Get available object types
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vendor/objectType', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string[]>;
  /**
  ovhId operations
  Get ovh id from object type
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vendor/ovhId', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudVendorOvhId>;
  /**
  disable operations
  Disable vRealize Operations option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vrops/disable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable vRealize Operations option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/vrops/enable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  upgradeHypervisor operations
  Upgrade your hypervisor to the next released version
  **/
  public post(path: '/dedicatedCloud/{serviceName}/upgradeHypervisor', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  changeProperties operations
  Change Active Directory properties
  **/
  public post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/changeProperties', pathParams: {serviceName?: string, activeDirectoryId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  grantActiveDirectoryUser operations
  Grant Active Directory user
  **/
  public post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser', pathParams: {serviceName?: string, activeDirectoryId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  List the dedicatedCloud.FederationAccessNetwork objects
  Add a new option user access
  **/
  public post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  enable operations
  Enable Hipaa option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hipaa/enable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  disable operations
  Disable Hipaa option
  **/
  public post(path: '/dedicatedCloud/{serviceName}/hipaa/disable', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/dedicatedCloud/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  public post(path: PathsdedicatedCloudPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Private Cloud User
  Remove a given user from your Private Cloud
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/user/{userId}', pathParams: {serviceName?: string, userId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  Private Cloud User object right
  Remove an object right from user in datacenter on Private Cloud
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}', pathParams: {serviceName?: string, userId?: Number, objectRightId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  Trust IP which can bypass the two factor authentication
  Remove a whitelisted ip on the two factor authentication
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  Network allowed to connect to the Private Cloud management interface
  Remove this network from your Private Cloud
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}', pathParams: {serviceName?: string, networkAccessId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  Private Cloud VM Encryption option access network
  Remove an option user access
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}', pathParams: {serviceName?: string, kmsId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  Private Cloud Datacenter
  Remove this Datacenter from your Private Cloud. (It has to be empty in order to be removable)
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}', pathParams: {serviceName?: string, datacenterId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  /**
  vrack dedicated cloud interface
  remove this dedicatedCloud (VmNetwork) from this vrack
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/vrack/{vrack}', pathParams: {serviceName?: string, vrack?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  Private Cloud federation option access network
  Remove an option user access
  **/
  public delete(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}', pathParams: {serviceName?: string, activeDirectoryId?: Number}, queryParams: null, bodyParams: null): Promise<DedicatedCloudTask>;
  public delete(path: PathsdedicatedCloudDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
