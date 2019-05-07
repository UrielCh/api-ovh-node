import { ApiCommon } from '@ovh-api/common';
/**
 * Possible values for project access type
 */
export type CloudAccessTypeEnum = 'full' | 'restricted';
/**
 * Cloud ACL
 */
export interface CloudAcl {
  /**
   * OVH customer unique identifier
   *
   */
  accountId?: string;
  /**
   * ACL type
   *
   */
  type?: CloudAclTypeEnum;
}
/**
 * Possible values for ACL type
 */
export type CloudAclTypeEnum = 'readOnly' | 'readWrite';
/**
 * Cloud alerting consumption
 */
export interface CloudAlerting {
  /**
   * Alerting creation date
   *
   */
  creationDate?: string;
  /**
   * Delay between alerts in seconds
   *
   */
  delay?: CloudAlertingDelayEnum;
  /**
   * Email to contact
   *
   */
  email?: string;
  /**
   * Formatted monthly threshold for this alerting
   *
   */
  formattedMonthlyThreshold?: OrderPrice;
  /**
   * Alerting unique UUID
   *
   */
  id?: string;
  /**
   * Monthly threshold for this alerting
   *
   */
  monthlyThreshold?: Number;
}
/**
 * Cloud alert on your consumption
 */
export interface CloudAlertingAlert {
  /**
   * Alert date
   *
   */
  alertDate?: string;
  /**
   * Alert id
   *
   */
  alertId?: Number;
  /**
   * Alert sent to
   *
   */
  emails?: string[];
}
/**
 * Possible values for delay between two alerts in seconds
 */
export type CloudAlertingDelayEnum = 10800 | 172800 | 21600 | 259200 | 3600 | 43200 | 604800 | 86400;
/**
 * Details about archive storage pricing
 */
export interface CloudArchiveStoragePrice {
  /**
   * Monthly archive storage price (for 1GB stored per month)
   *
   */
  monthlyPrice?: OrderPrice;
  /**
   * Archive region
   *
   */
  region?: string;
}
/**
 * Details about an available region that can be activated on your project
 */
export interface CloudAvailableRegion {
  /**
   * Region continent code
   *
   */
  continentCode?: CloudRegionContinent;
  /**
   * Location of the datacenter where the region is
   *
   */
  datacenterLocation?: string;
  /**
   * Region name
   *
   */
  name?: string;
}
/**
 * List your automated backups
 */
export interface CloudBackup {
  /**
   * Backup name
   *
   */
  backupName?: string;
  /**
   * Creation date of the workflow
   *
   */
  createdAt?: string;
  /**
   * Workflow cron pattern
   *
   */
  cron?: string;
  /**
   * Executions logs
   *
   */
  executions?: CloudExecution[];
  /**
   * Workflow id
   *
   */
  id?: string;
  /**
   * Instance id
   *
   */
  instanceId?: string;
  /**
   * Workflow name identifier
   *
   */
  name?: string;
}
/**
 * Details about bandwidth storage pricing
 */
export interface CloudBandwidthStoragePrice {
  /**
   * Bandwidth storage price (for 1GB)
   *
   */
  price?: OrderPrice;
  /**
   * Bandwidth storage region
   *
   */
  region?: string;
}
/**
 * Information about the different components available in the region
 */
export interface CloudComponent {
  /**
   * Service name
   *
   */
  name?: string;
  /**
   * Service status
   *
   */
  status?: CloudServiceStatus;
}
/**
 * Cloud credit
 */
export interface CloudCredit {
  /**
   * Available credit
   *
   */
  available_credit?: OrderPrice;
  /**
   * Credit bill id
   *
   */
  bill?: string;
  /**
   * Credit description
   *
   */
  description?: string;
  /**
   * Credit id
   *
   */
  id?: Number;
  /**
   * Use credits on following products
   *
   */
  products?: string[];
  /**
   * Total credit
   *
   */
  total_credit?: OrderPrice;
  /**
   * Used credit
   *
   */
  used_credit?: OrderPrice;
  /**
   * Credit validity
   *
   */
  validity?: CloudCommonVoucherValidity;
  /**
   * Voucher code
   *
   */
  voucher?: string;
}
/**
 * An execution of the backup workflow
 */
export interface CloudExecution {
  /**
   * Last date of cron trigger execution
   *
   */
  executedAt?: string;
  /**
   * Execution state
   *
   */
  state?: CloudExecutionState;
  /**
   * Information about state
   *
   */
  stateInfo?: string;
}
/**
 * Enum values for State
 */
export type CloudExecutionState = 'ERROR' | 'IDLE' | 'PAUSED' | 'RUNNING' | 'SUCCESS';
/**
 * Details about flavor pricing
 */
export interface CloudFlavorPrice {
  /**
   * Flavor id
   *
   */
  flavorId?: string;
  /**
   * Flavor name
   *
   */
  flavorName?: string;
  /**
   * Monthly flavor price
   *
   */
  monthlyPrice?: OrderPrice;
  /**
   * Hourly flavor price
   *
   */
  price?: OrderPrice;
  /**
   * Flavor region
   *
   */
  region?: string;
}
/**
 * Load balancing IP imported into your OpenStack project
 */
export interface CloudIPLoadbalancing {
  /**
   * ID of your load balancing ip import
   *
   */
  id?: string;
  /**
   * IPLB service name
   *
   */
  iplb?: string;
  /**
   * Status of your import
   *
   */
  status?: string;
  /**
   * validation url
   *
   */
  validationUrl?: string;
}
/**
 * An operation is an async process on your Project
 */
export interface CloudOperation {
  /**
   * The action of the operation
   *
   */
  action?: string;
  /**
   * The completed date of the operation
   *
   */
  completedAt?: string;
  /**
   * The creation date of the operation
   *
   */
  createdAt?: string;
  /**
   * Unique ID to describe the operation
   *
   */
  id?: string;
  /**
   * The progression in percentage of the operation
   *
   */
  progress?: Number;
  /**
   * Affected regions of the operation
   *
   */
  regions?: string[];
  /**
   * The started date of the operation
   *
   */
  startedAt?: string;
  /**
   * Operation status
   *
   */
  status?: CloudOperationStatus;
}
/**
 * Enum values for Status
 */
export type CloudOperationStatus = 'completed' | 'created' | 'in-error' | 'in-progress' | 'unknown';
/**
 * A structure defining prices for cloud services
 */
export interface CloudPrice {
  /**
   * Price for archive storage
   *
   */
  archive?: CloudArchiveStoragePrice[];
  /**
   * Price for incoming bandwidth on archive storage
   *
   */
  bandwidthArchiveIn?: CloudBandwidthStoragePrice[];
  /**
   * Price for outgoing bandwidth on archive storage
   *
   */
  bandwidthArchiveOut?: CloudBandwidthStoragePrice[];
  /**
   * Price for bandwidth storage
   *
   */
  bandwidthStorage?: CloudBandwidthStoragePrice[];
  /**
   */
  instances?: CloudFlavorPrice[];
  /**
   * Price for project creation
   *
   */
  projectCreation?: OrderPrice;
  /**
   * Prices for snapshots
   *
   */
  snapshots?: CloudSnapshotPrice[];
  /**
   * Price for storage
   *
   */
  storage?: CloudStoragePrice[];
  /**
   * Prices for volumes
   *
   */
  volumes?: CloudVolumePrice[];
}
/**
 * Project
 */
export interface CloudProject {
  /**
   * Project access
   *
   */
  access?: CloudAccessTypeEnum;
  /**
   * Project creation date
   *
   */
  creationDate?: string;
  /**
   * Description of your project
   *
   */
  description?: string;
  /**
   * Expiration date of your project. After this date, your project will be deleted
   *
   */
  expiration?: string;
  /**
   * Project order id
   *
   */
  orderId?: Number;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Project id
   *
   */
  project_id?: string;
  /**
   * Current status
   *
   */
  status?: CloudProjectProjectStatus;
  /**
   * Project unleashed
   *
   */
  unleash?: boolean;
}
/**
 * Details about your region
 */
export interface CloudRegion {
  /**
   * Region continent code
   *
   */
  continentCode?: CloudRegionContinent;
  /**
   * Location of the datacenter where the region is
   *
   */
  datacenterLocation?: string;
  /**
   * Region name
   *
   */
  name?: string;
  /**
   * Details about components status
   *
   */
  services?: CloudComponent[];
  /**
   * Openstack region status
   *
   */
  status?: CloudRegionStatus;
}
/**
 * Enum values for ContinentCode
 */
export type CloudRegionContinent = 'ASIA' | 'EU' | 'NA' | 'US';
/**
 * Enum values for Status
 */
export type CloudRegionStatus = 'DOWN' | 'MAINTENANCE' | 'UP';
/**
 * Enum values for Status
 */
export type CloudServiceStatus = 'DOWN' | 'UP';
/**
 * Details about snapshot pricing
 */
export interface CloudSnapshotPrice {
  /**
   * Monthly flavor price (for 1GB per month)
   *
   */
  monthlyPrice?: OrderPrice;
  /**
   * Hourly snapshot price (for 1GB per hour)
   *
   */
  price?: OrderPrice;
  /**
   * Snapshot region
   *
   */
  region?: string;
}
/**
 * Details about storage pricing
 */
export interface CloudStoragePrice {
  /**
   * Monthly storage price (for 1GB stored per month)
   *
   */
  monthlyPrice?: OrderPrice;
  /**
   * Hourly storage price (for 1GB stored per hour)
   *
   */
  price?: OrderPrice;
  /**
   * Storage region
   *
   */
  region?: string;
}
/**
 * Details about volume pricing
 */
export interface CloudVolumePrice {
  /**
   * Monthly volume price (for 1GB per month)
   *
   */
  monthlyPrice?: OrderPrice;
  /**
   * Hourly volume price (for 1GB per hour)
   *
   */
  price?: OrderPrice;
  /**
   * Volume region
   *
   */
  region?: string;
  /**
   * Volume name
   *
   */
  volumeName?: string;
}
/**
 * A vRack allows to connect your OVH infrastructures accross products and datacenters
 */
export interface CloudVrack {
  /**
   * Description of your vRack
   *
   */
  description?: string;
  /**
   * Vrack ID
   *
   */
  id?: string;
  /**
   * Name of your vRack
   *
   */
  name?: string;
}
/**
 * Catalog
 */
export interface CloudAuthenticationCatalog {
  /**
   */
  endpoints?: CloudAuthenticationEndpoint[];
  /**
   */
  id?: string;
  /**
   */
  type?: string;
}
/**
 * Domain
 */
export interface CloudAuthenticationDomain {
  /**
   */
  name?: string;
}
/**
 * Endpoint
 */
export interface CloudAuthenticationEndpoint {
  /**
   */
  id?: string;
  /**
   */
  interface?: string;
  /**
   */
  legacy_endpoint_id?: string;
  /**
   */
  region_id?: string;
  /**
   */
  service_id?: string;
  /**
   */
  url?: string;
}
/**
 * OpenstackToken
 */
export interface CloudAuthenticationOpenstackToken {
  /**
   */
  catalog?: CloudAuthenticationCatalog[];
  /**
   */
  expires_at?: string;
  /**
   */
  issued_at?: string;
  /**
   */
  methods?: string[];
  /**
   */
  project?: CloudAuthenticationTokenProject;
  /**
   */
  roles?: CloudAuthenticationRole[];
  /**
   */
  user?: CloudAuthenticationUserToken;
}
/**
 * Role
 */
export interface CloudAuthenticationRole {
  /**
   */
  id?: string;
  /**
   */
  name?: string;
}
/**
 * Token
 */
export interface CloudAuthenticationToken {
  /**
   */
  'X-Auth-Token'?: string;
  /**
   */
  token?: CloudAuthenticationOpenstackToken;
}
/**
 * TokenProject
 */
export interface CloudAuthenticationTokenProject {
  /**
   */
  domain?: CloudAuthenticationDomain;
  /**
   */
  id?: string;
  /**
   */
  name?: string;
}
/**
 * UserToken
 */
export interface CloudAuthenticationUserToken {
  /**
   */
  domain?: CloudAuthenticationDomain;
  /**
   */
  id?: string;
  /**
   */
  name?: string;
}
/**
 * BandwidthInstance
 */
export interface CloudBillingViewBandwidthInstance {
  /**
   * Total bandwidth in GiB
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * BandwidthStorage
 */
export interface CloudBillingViewBandwidthStorage {
  /**
   * Total bandwidth in GiB
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * HourlyInstance
 */
export interface CloudBillingViewHourlyInstance {
  /**
   * Details about hourly instances
   *
   */
  details?: CloudBillingViewHourlyInstanceDetail[];
  /**
   * Hours of run instances
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Instance reference
   *
   */
  reference?: string;
  /**
   * Instance region
   *
   */
  region?: string;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * HourlyInstanceBandwidth
 */
export interface CloudBillingViewHourlyInstanceBandwidth {
  /**
   * Instance incoming bandwidth details
   *
   */
  incomingBandwidth?: CloudBillingViewBandwidthInstance;
  /**
   * Instance outgoing bandwidth details
   *
   */
  outgoingBandwidth?: CloudBillingViewBandwidthInstance;
  /**
   * Region
   *
   */
  region?: string;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * HourlyInstanceDetail
 */
export interface CloudBillingViewHourlyInstanceDetail {
  /**
   * Instance ID
   *
   */
  instanceId?: string;
  /**
   * Hours of run instances
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * HourlyInstanceOption
 */
export interface CloudBillingViewHourlyInstanceOption {
  /**
   * Details about hourly instances option
   *
   */
  details?: CloudBillingViewHourlyInstanceOptionDetail[];
  /**
   * Quantity of instance hours running with this option
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Instance reference
   *
   */
  reference?: string;
  /**
   * Instance region
   *
   */
  region?: string;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * HourlyInstanceOptionDetail
 */
export interface CloudBillingViewHourlyInstanceOptionDetail {
  /**
   * Instance ID
   *
   */
  instanceId?: string;
  /**
   * Quantity of instance hours running with this option
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * HourlyResources
 */
export interface CloudBillingViewHourlyResources {
  /**
   * Details about hourly instances
   *
   */
  instance?: CloudBillingViewHourlyInstance[];
  /**
   * Details about instances bandwidth consumption
   *
   */
  instanceBandwidth?: CloudBillingViewHourlyInstanceBandwidth[];
  /**
   * Details about hourly instances options
   *
   */
  instanceOption?: CloudBillingViewHourlyInstanceOption[];
  /**
   * Details about hourly snapshots
   *
   */
  snapshot?: CloudBillingViewHourlySnapshot[];
  /**
   * Details about hourly storage
   *
   */
  storage?: CloudBillingViewHourlyStorage[];
  /**
   * Details about hourly volumes
   *
   */
  volume?: CloudBillingViewHourlyVolume[];
}
/**
 * HourlySnapshot
 */
export interface CloudBillingViewHourlySnapshot {
  /**
   * Instance snapshot details
   *
   */
  instance?: CloudBillingViewInstanceSnapshot;
  /**
   * Region
   *
   */
  region?: string;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
  /**
   * Volume snapshot details
   *
   */
  volume?: CloudBillingViewVolumeSnapshot;
}
/**
 * HourlyStorage
 */
export interface CloudBillingViewHourlyStorage {
  /**
   * Storage incoming bandwidth details
   *
   */
  incomingBandwidth?: CloudBillingViewBandwidthStorage;
  /**
   * Storage outgoing bandwidth details
   *
   */
  outgoingBandwidth?: CloudBillingViewBandwidthStorage;
  /**
   * Region
   *
   */
  region?: string;
  /**
   * Information about stored data
   *
   */
  stored?: CloudBillingViewStoredStorage;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
  /**
   * Storage type
   *
   */
  type?: CloudBillingViewStorageTypeEnum;
}
/**
 * HourlyVolume
 */
export interface CloudBillingViewHourlyVolume {
  /**
   * Detail about volume consumption
   *
   */
  details?: CloudBillingViewHourlyVolumeDetail[];
  /**
   * Total GiBh of volume
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Region
   *
   */
  region?: string;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
  /**
   * Volume type
   *
   */
  type?: string;
}
/**
 * HourlyVolumeDetail
 */
export interface CloudBillingViewHourlyVolumeDetail {
  /**
   * GiBh of volume
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
  /**
   * Volume ID
   *
   */
  volumeId?: string;
}
/**
 * InstanceSnapshot
 */
export interface CloudBillingViewInstanceSnapshot {
  /**
   * GiBh stored
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * MonthlyInstance
 */
export interface CloudBillingViewMonthlyInstance {
  /**
   * Details about monthly instances
   *
   */
  details?: CloudBillingViewMonthlyInstanceDetail[];
  /**
   * Instance reference
   *
   */
  reference?: string;
  /**
   * Instance region
   *
   */
  region?: string;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * MonthlyInstanceDetail
 */
export interface CloudBillingViewMonthlyInstanceDetail {
  /**
   * Monthly instance activation
   *
   */
  activation?: string;
  /**
   * Instance ID
   *
   */
  instanceId?: string;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * MonthlyInstanceOption
 */
export interface CloudBillingViewMonthlyInstanceOption {
  /**
   * Details about monthly instances
   *
   */
  details?: CloudBillingViewMonthlyInstanceOptionDetail[];
  /**
   * Instance reference
   *
   */
  reference?: string;
  /**
   * Instance region
   *
   */
  region?: string;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * MonthlyInstanceOptionDetail
 */
export interface CloudBillingViewMonthlyInstanceOptionDetail {
  /**
   * Instance ID
   *
   */
  instanceId?: string;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * MonthlyResources
 */
export interface CloudBillingViewMonthlyResources {
  /**
   * Details about monthly instances
   *
   */
  instance?: CloudBillingViewMonthlyInstance[];
  /**
   * Details about monthly instances options
   *
   */
  instanceOption?: CloudBillingViewMonthlyInstanceOption[];
}
/**
 * Quantity
 */
export interface CloudBillingViewQuantity {
  /**
   * Quantity unit
   *
   */
  unit?: CloudBillingViewUnitQuantity;
  /**
   * Quantity value
   *
   */
  value?: Number;
}
/**
 * StorageTypeEnum
 */
export type CloudBillingViewStorageTypeEnum = 'pca' | 'pcs';
/**
 * StoredStorage
 */
export interface CloudBillingViewStoredStorage {
  /**
   * GiBh stored
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * UnitQuantity
 */
export type CloudBillingViewUnitQuantity = 'GiB' | 'GiBh' | 'Hour';
/**
 * UsedCredit
 */
export interface CloudBillingViewUsedCredit {
  /**
   * Credit description
   *
   */
  description?: string;
  /**
   * Credit ID
   *
   */
  id?: Number;
  /**
   * Total credit used
   *
   */
  usedAmount?: Number;
}
/**
 * UsedCredits
 */
export interface CloudBillingViewUsedCredits {
  /**
   * Details about credits that will be used
   *
   */
  details?: CloudBillingViewUsedCredit[];
  /**
   * Total credit that will be used to pay the bill
   *
   */
  totalCredit?: Number;
}
/**
 * VolumeSnapshot
 */
export interface CloudBillingViewVolumeSnapshot {
  /**
   * GiBh stored
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
}
/**
 * Voucher validity range
 */
export interface CloudCommonVoucherValidity {
  /**
   * Valid from
   *
   */
  from?: string;
  /**
   * Valid to
   *
   */
  to?: string;
}
/**
 * Flavor
 */
export interface CloudFlavorFlavor {
  /**
   * Available in stock
   *
   */
  available?: boolean;
  /**
   * Number of disks
   *
   */
  disk?: Number;
  /**
   * Flavor id
   *
   */
  id?: string;
  /**
   * Max capacity of inbound traffic in Mbit/s
   *
   */
  inboundBandwidth?: Number;
  /**
   * Flavor name
   *
   */
  name?: string;
  /**
   * OS to install on
   *
   */
  osType?: string;
  /**
   * Max capacity of outbound traffic in Mbit/s
   *
   */
  outboundBandwidth?: Number;
  /**
   * Plan codes to order instances
   *
   */
  planCodes?: CloudFlavorFlavorPlanCodes;
  /**
   * Ram quantity (Gio)
   *
   */
  ram?: Number;
  /**
   * Flavor region
   *
   */
  region?: string;
  /**
   * Flavor type
   *
   */
  type?: string;
  /**
   * Number of VCPUs
   *
   */
  vcpus?: Number;
}
/**
 * FlavorPlanCodes
 */
export interface CloudFlavorFlavorPlanCodes {
  /**
   * Plan code to order hourly instance
   *
   */
  hourly?: string;
  /**
   * Plan code to order monthly instance
   *
   */
  monthly?: string;
}
/**
 * ProjectForecast
 */
export interface CloudForecastProjectForecast {
  /**
   * Time when we got last metric
   *
   */
  lastMetric?: string;
  /**
   * Forecast for your whole project
   *
   */
  projectForecast?: OrderPrice;
}
/**
 * Image
 */
export interface CloudImageImage {
  /**
   * Image creation date
   *
   */
  creationDate?: string;
  /**
   * Image usable only for this type of flavor if not null
   *
   */
  flavorType?: string;
  /**
   * Image id
   *
   */
  id?: string;
  /**
   * Minimum disks required to use image
   *
   */
  minDisk?: Number;
  /**
   * Minimum RAM required to use image
   *
   */
  minRam?: Number;
  /**
   * Image name
   *
   */
  name?: string;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Image region
   *
   */
  region?: string;
  /**
   * Image size (in GiB)
   *
   */
  size?: Number;
  /**
   * Image status
   *
   */
  status?: string;
  /**
   * Tags about the image
   *
   */
  tags?: string[];
  /**
   * Image type
   *
   */
  type?: string;
  /**
   * User to connect with
   *
   */
  user?: string;
  /**
   * Image visibility
   *
   */
  visibility?: string;
}
/**
 * OSTypeEnum
 */
export type CloudImageOSTypeEnum = 'bsd' | 'linux' | 'windows';
/**
 * Access
 */
export interface CloudInstanceAccess {
  /**
   * Login
   *
   */
  login?: string;
  /**
   * Password
   *
   */
  password?: string;
  /**
   * Application access type
   *
   */
  type?: string;
  /**
   * Url
   *
   */
  url?: string;
}
/**
 * ApplicationAccess
 */
export interface CloudInstanceApplicationAccess {
  /**
   * List of credentials
   *
   */
  accesses?: CloudInstanceAccess[];
  /**
   * Application status
   *
   */
  status?: CloudInstanceApplicationAccessStateEnum;
}
/**
 * ApplicationAccessStateEnum
 */
export type CloudInstanceApplicationAccessStateEnum = 'installing' | 'ok';
/**
 * Instance
 */
export interface CloudInstanceInstance {
  /**
   * Instance creation date
   *
   */
  created?: string;
  /**
   * Instance flavor id
   *
   */
  flavorId?: string;
  /**
   * Instance id
   *
   */
  id?: string;
  /**
   * Instance image id
   *
   */
  imageId?: string;
  /**
   * Instance IP addresses
   *
   */
  ipAddresses?: CloudInstanceIpAddress[];
  /**
   * Instance monthly billing status
   *
   */
  monthlyBilling?: CloudInstanceMonthlyBilling;
  /**
   * Instance name
   *
   */
  name?: string;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Instance id
   *
   */
  region?: string;
  /**
   * Instance ssh key id
   *
   */
  sshKeyId?: string;
  /**
   * Instance status
   *
   */
  status?: CloudInstanceInstanceStatusEnum;
}
/**
 * InstanceDetail
 */
export interface CloudInstanceInstanceDetail {
  /**
   * Instance creation date
   *
   */
  created?: string;
  /**
   * Instance flavor
   *
   */
  flavor?: CloudFlavorFlavor;
  /**
   * Instance id
   *
   */
  id?: string;
  /**
   * Instance image
   *
   */
  image?: CloudImageImage;
  /**
   * Instance IP addresses
   *
   */
  ipAddresses?: CloudInstanceIpAddress[];
  /**
   * Instance monthly billing status
   *
   */
  monthlyBilling?: CloudInstanceMonthlyBilling;
  /**
   * Instance name
   *
   */
  name?: string;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Instance id
   *
   */
  region?: string;
  /**
   * Instance SSH key
   *
   */
  sshKey?: CloudSshkeySshKeyDetail;
  /**
   * Instance status
   *
   */
  status?: CloudInstanceInstanceStatusEnum;
}
/**
 * InstanceMetrics
 */
export interface CloudInstanceInstanceMetrics {
  /**
   */
  unit?: string;
  /**
   */
  values?: CloudInstanceInstanceMetricsValue[];
}
/**
 * InstanceMetricsValue
 */
export interface CloudInstanceInstanceMetricsValue {
  /**
   */
  timestamp?: Number;
  /**
   */
  value?: Number;
}
/**
 * InstanceStatusEnum
 */
export type CloudInstanceInstanceStatusEnum = 'ACTIVE' | 'BUILD' | 'BUILDING' | 'DELETED' | 'ERROR' | 'HARD_REBOOT' | 'MIGRATING' | 'PASSWORD' | 'PAUSED' | 'REBOOT' | 'REBUILD' | 'RESCUE' | 'RESCUED' | 'RESCUING' | 'RESIZE' | 'RESIZED' | 'RESUMING' | 'REVERT_RESIZE' | 'SHELVED' | 'SHELVED_OFFLOADED' | 'SHUTOFF' | 'SNAPSHOTTING' | 'SOFT_DELETED' | 'STOPPED' | 'SUSPENDED' | 'UNKNOWN' | 'UNRESCUING' | 'VERIFY_RESIZE';
/**
 * InstanceVnc
 */
export interface CloudInstanceInstanceVnc {
  /**
   * VNC type
   *
   */
  type?: string;
  /**
   * VNC url
   *
   */
  url?: string;
}
/**
 * IpAddress
 */
export interface CloudInstanceIpAddress {
  /**
   * Gateway IP
   *
   */
  gatewayIp?: string;
  /**
   * Instance IP address
   *
   */
  ip?: string;
  /**
   * Network ID
   *
   */
  networkId?: string;
  /**
   * Instance IP address type
   *
   */
  type?: string;
  /**
   * IP version
   *
   */
  version?: Number;
}
/**
 * MetricsPeriod
 */
export type CloudInstanceMetricsPeriod = 'lastday' | 'lastmonth' | 'lastweek' | 'lastyear' | 'today';
/**
 * MetricsType
 */
export type CloudInstanceMetricsType = 'cpu:max' | 'cpu:used' | 'mem:max' | 'mem:used' | 'net:rx' | 'net:tx';
/**
 * MonthlyBilling
 */
export interface CloudInstanceMonthlyBilling {
  /**
   * Monthly billing activated since
   *
   */
  since?: string;
  /**
   * Monthly billing status
   *
   */
  status?: CloudInstanceMonthlyBillingStatusEnum;
}
/**
 * MonthlyBillingStatusEnum
 */
export type CloudInstanceMonthlyBillingStatusEnum = 'activationPending' | 'ok';
/**
 * NetworkBulkParams
 */
export interface CloudInstanceNetworkBulkParams {
  /**
   * Private or public network Id
   *
   */
  networkId?: string;
}
/**
 * NetworkParams
 */
export interface CloudInstanceNetworkParams {
  /**
   * Static ip (Can only be defined for private networks)
   *
   */
  ip?: string;
  /**
   * Private or public network Id
   *
   */
  networkId?: string;
}
/**
 * RebootTypeEnum
 */
export type CloudInstanceRebootTypeEnum = 'hard' | 'soft';
/**
 * RescueAdminPassword
 */
export interface CloudInstanceRescueAdminPassword {
  /**
   * Admin password to connect to your rescue server with
   *
   */
  adminPassword?: string;
}
/**
 * FixedIp
 */
export interface CloudInstanceInterfaceFixedIp {
  /**
   * Ip
   *
   */
  ip?: string;
  /**
   * Subnetwork Id
   *
   */
  subnetId?: string;
}
/**
 * Interface
 */
export interface CloudInstanceInterfaceInterface {
  /**
   * List of ips of the interface
   *
   */
  fixedIps?: CloudInstanceInterfaceFixedIp[];
  /**
   * Interface unique identifier
   *
   */
  id?: string;
  /**
   * Mac address
   *
   */
  macAddress?: string;
  /**
   * Network id
   *
   */
  networkId?: string;
  /**
   * Openstack state
   *
   */
  state?: string;
  /**
   * Network type
   *
   */
  type?: string;
}
/**
 * InstanceGroup
 */
export interface CloudInstancegroupInstanceGroup {
  /**
   * Instance group id
   *
   */
  id?: string;
  /**
   * Instances ids
   *
   */
  instance_ids?: string[];
  /**
   * Instance group name
   *
   */
  name?: string;
  /**
   * region
   *
   */
  region?: string;
  /**
   * Instance group type
   *
   */
  type?: CloudInstancegroupInstanceGroupTypeEnum;
}
/**
 * InstanceGroupTypeEnum
 */
export type CloudInstancegroupInstanceGroupTypeEnum = 'affinity' | 'anti-affinity';
/**
 * CloudIp
 */
export interface CloudIpCloudIp {
  /**
   * Ip id
   *
   */
  id?: string;
  /**
   * Ip
   *
   */
  ip?: string;
  /**
   * Ip status
   *
   */
  status?: CloudIpIpStatusEnum;
  /**
   * Ip type
   *
   */
  type?: string;
}
/**
 * FailoverIp
 */
export interface CloudIpFailoverIp {
  /**
   * IP block
   *
   */
  block?: string;
  /**
   * Ip continent
   *
   */
  continentCode?: string;
  /**
   * Ip location
   *
   */
  geoloc?: string;
  /**
   * Ip id
   *
   */
  id?: string;
  /**
   * Ip
   *
   */
  ip?: string;
  /**
   * Current operation progress in percent
   *
   */
  progress?: Number;
  /**
   * Instance where ip is routed to
   *
   */
  routedTo?: string;
  /**
   * Ip status
   *
   */
  status?: CloudIpIpStatusEnum;
  /**
   * IP sub type
   *
   */
  subType?: CloudIpIpSubTypeEnum;
}
/**
 * IpStatusEnum
 */
export type CloudIpIpStatusEnum = 'ok' | 'operationPending';
/**
 * IpSubTypeEnum
 */
export type CloudIpIpSubTypeEnum = 'cloud' | 'ovh';
/**
 * Managed Kubernetes cluster description
 */
export interface CloudKubeCluster {
  /**
   * True if control-plane is up to date
   *
   */
  controlPlaneIsUpToDate?: boolean;
  /**
   * Cluster creation date
   *
   */
  createdAt?: string;
  /**
   * Cluster ID
   *
   */
  id?: string;
  /**
   * True if all nodes and control-plane are up to date
   *
   */
  isUpToDate?: boolean;
  /**
   * Cluster name
   *
   */
  name?: string;
  /**
   * Cluster nodes URL
   *
   */
  nodesUrl?: string;
  /**
   * Cluster status
   *
   */
  status?: CloudKubeClusterStatus;
  /**
   * Cluster last update date
   *
   */
  updatePolicy?: string;
  /**
   * Cluster last update date
   *
   */
  updatedAt?: string;
  /**
   * Management URL of your cluster
   *
   */
  url?: string;
  /**
   * Kubernetes version of your cluster
   *
   */
  version?: string;
}
/**
 * Enum values for Status
 */
export type CloudKubeClusterStatus = 'DELETING' | 'ERROR' | 'INSTALLING' | 'READY' | 'REOPENING' | 'RESETTING' | 'SUSPENDED' | 'SUSPENDING' | 'UPDATING' | 'USER_ERROR' | 'USER_QUOTA_ERROR';
/**
 * Kubeconfig description
 */
export interface CloudKubeKubeconfig {
  /**
   * kubeconfig file
   *
   */
  content?: string;
}
/**
 * Node installed on your cluster
 */
export interface CloudKubeNode {
  /**
   * Creation date
   *
   */
  createdAt?: string;
  /**
   * Flavor name
   *
   */
  flavor?: string;
  /**
   * Node ID
   *
   */
  id?: string;
  /**
   * Public Cloud instance id
   *
   */
  instanceId?: string;
  /**
   * True if the node is up to date
   *
   */
  isUpToDate?: boolean;
  /**
   * Node name
   *
   */
  name?: string;
  /**
   * Status
   *
   */
  status?: CloudKubeNodeStatus;
  /**
   * Node last update date
   *
   */
  updatedAt?: string;
  /**
   * Node version
   *
   */
  version?: string;
}
/**
 * Enum values for Status
 */
export type CloudKubeNodeStatus = 'DELETING' | 'ERROR' | 'INSTALLING' | 'READY' | 'REOPENING' | 'RESETTING' | 'SUSPENDED' | 'SUSPENDING' | 'UPDATING' | 'USER_ERROR' | 'USER_NODE_NOT_FOUND_ERROR' | 'USER_NODE_SUSPENDED_SERVICE' | 'USER_QUOTA_ERROR';
/**
 * Enum values for worker nodes reset policy
 */
export type CloudKubeResetWorkerNodesPolicy = 'delete' | 'reinstall';
/**
 * Enum values for UpdatePolicy
 */
export type CloudKubeUpdatePolicy = 'ALWAYS_UPDATE' | 'MINIMAL_DOWNTIME' | 'NEVER_UPDATE';
/**
 * Description not available
 */
export type CloudKubeVersion = '1.11' | '1.12';
/**
 * Migration
 */
export interface CloudMigrationMigration {
  /**
   * The planned date of the migration
   *
   */
  date?: string;
  /**
   * Migration Id
   *
   */
  migrationId?: string;
  /**
   * The id of the resource to migrate
   *
   */
  resourceId?: string;
  /**
   * The type of the resource to migrate
   *
   */
  resourceType?: CloudMigrationResourceTypeEnum;
}
/**
 * ResourceTypeEnum
 */
export type CloudMigrationResourceTypeEnum = 'instance';
/**
 * IPPool
 */
export interface CloudNetworkIPPool {
  /**
   * Enable DHCP
   *
   */
  dhcp?: boolean;
  /**
   * Last IP for this region (eg: 192.168.1.24)
   *
   */
  end?: string;
  /**
   * Global network with cidr (eg: 192.168.1.0/24)
   *
   */
  network?: string;
  /**
   * Region where this subnet will be created
   *
   */
  region?: string;
  /**
   * First IP for this region (eg: 192.168.1.12)
   *
   */
  start?: string;
}
/**
 * Network
 */
export interface CloudNetworkNetwork {
  /**
   * Network id
   *
   */
  id?: string;
  /**
   * Network name
   *
   */
  name?: string;
  /**
   * Details about private network in region
   *
   */
  regions?: CloudNetworkNetworkRegion[];
  /**
   * Network status
   *
   */
  status?: CloudNetworkNetworkStatusEnum;
  /**
   * Network type
   *
   */
  type?: CloudNetworkNetworkTypeEnum;
  /**
   * Network VLAN id
   *
   */
  vlanId?: Number;
}
/**
 * NetworkRegion
 */
export interface CloudNetworkNetworkRegion {
  /**
   * Network region
   *
   */
  region?: string;
  /**
   * Network region status
   *
   */
  status?: CloudNetworkNetworkRegionStatusEnum;
}
/**
 * NetworkRegionStatusEnum
 */
export type CloudNetworkNetworkRegionStatusEnum = 'ACTIVE' | 'BUILDING';
/**
 * NetworkStatusEnum
 */
export type CloudNetworkNetworkStatusEnum = 'ACTIVE' | 'BUILDING' | 'DELETING';
/**
 * NetworkTypeEnum
 */
export type CloudNetworkNetworkTypeEnum = 'private' | 'public';
/**
 * Subnet
 */
export interface CloudNetworkSubnet {
  /**
   * Subnet CIDR
   *
   */
  cidr?: string;
  /**
   * Gateway IP in the subnet
   *
   */
  gatewayIp?: string;
  /**
   * Subnet id
   *
   */
  id?: string;
  /**
   * List of ip pools allocated in subnet
   *
   */
  ipPools?: CloudNetworkIPPool[];
}
/**
 * Profile
 */
export interface CloudOpenstackClientProfile {
  /**
   * Profile name
   *
   */
  name?: string;
}
/**
 * Session
 */
export interface CloudOpenstackClientSession {
  /**
   * Expiration date
   *
   */
  expires?: string;
  /**
   * Session Id
   *
   */
  id?: string;
  /**
   * Profile of the session
   *
   */
  profile?: CloudOpenstackClientProfile;
  /**
   * Websocket url to use the terminal
   *
   */
  websocket?: string;
}
/**
 * Order
 */
export interface CloudOrderOrder {
  /**
   * Order creation date
   *
   */
  date?: string;
  /**
   * Order id
   *
   */
  orderId?: Number;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Service created
   *
   */
  serviceName?: string;
  /**
   */
  status?: CloudOrderStatusEnum;
}
/**
 * StatusEnum
 */
export type CloudOrderStatusEnum = 'delivered' | 'delivering' | 'unknown' | 'unpaid';
/**
 * Task type available for cloud archives
 */
export type CloudPcaBillingRefEnum = 'backup' | 'delete' | 'restore';
/**
 * Openstack swift credentials for your PCA offer
 */
export interface CloudPcaDownloadCredentials {
  /**
   * Openstack authentication URL
   *
   */
  authEndpoint?: string;
  /**
   * Openstack swift container name
   *
   */
  container?: string;
  /**
   * Openstack user login
   *
   */
  login?: string;
  /**
   * Openstack user password
   *
   */
  password?: string;
  /**
   * Openstack region name
   *
   */
  region?: string;
  /**
   * Openstack storage URL
   *
   */
  storageEndpoint?: string;
  /**
   * Openstack tenant id
   *
   */
  tenantId?: string;
  /**
   * Openstack tenant name
   *
   */
  tenantName?: string;
}
/**
 * Task types for cloud archives
 */
export type CloudPcaFunctionTypeEnum = 'createUser' | 'delete' | 'restore' | 'setPassword' | 'setSessionName' | 'setSshKey';
/**
 * Session state available for cloud archives
 */
export type CloudPcaSessionStateEnum = 'doing' | 'doingBackup' | 'doingDelete' | 'doingRestore' | 'done' | 'error' | 'failedDelete' | 'failedRestore' | 'new' | 'tagging' | 'toBackup' | 'toDelete' | 'toRestore';
/**
 * Task status for cloud archives
 */
export type CloudPcaTaskStateEnum = 'cancelled' | 'deleted' | 'doing' | 'doingBackup' | 'doingDelete' | 'doingRestore' | 'done' | 'error' | 'failedDelete' | 'failedRestore' | 'new' | 'tagging' | 'toBackup' | 'toDelete' | 'toRestore' | 'todo';
/**
 * Task type available for cloud archives
 */
export type CloudPcaTaskTypeEnum = 'delete' | 'restore';
/**
 * State of the request to transfer a PCA offer to Object Storage
 */
export interface CloudPcaTransferState {
  /**
   * Agreements pending for approval
   *
   */
  agreements?: Number[];
  /**
   * Cloud project id
   *
   */
  projectId?: string;
  /**
   * Transfer state
   *
   */
  state?: CloudPcaTransferStateEnum;
  /**
   * Transfer request date
   *
   */
  transferDate?: string;
}
/**
 * Transfer states
 */
export type CloudPcaTransferStateEnum = 'deleted' | 'transferred' | 'untransferred' | 'waitingAgreementsValidation';
/**
 * Usage information for current month on your project
 */
export interface CloudProjectBandwidthStorageUsage {
  /**
   * Downloaded bytes from your containers
   *
   */
  downloadedBytes?: Number;
  /**
   * Region
   *
   */
  region?: string;
  /**
   * Cost for your storage bandwidth
   *
   */
  total?: OrderPrice;
}
/**
 * Project bill
 */
export interface CloudProjectBill {
  /**
   * Bill id
   *
   */
  billId?: string;
  /**
   * Bill type
   *
   */
  type?: CloudProjectBillTypeEnum;
}
/**
 * Possible values for bill type
 */
export type CloudProjectBillTypeEnum = 'creditPurchased' | 'monthlyConsumption' | 'monthlyInstanceActivation';
/**
 * Usage information for current month on your project
 */
export interface CloudProjectCurrentUsage {
  /**
   * Instances usage
   *
   */
  instances?: CloudProjectInstancesUsage;
  /**
   * Snapshots usage
   *
   */
  snapshots?: CloudProjectSnapshotsUsage;
  /**
   * Storage usage
   *
   */
  storage?: CloudProjectStorageUsage;
  /**
   * Total cost for the project
   *
   */
  total?: OrderPrice;
  /**
   * Snapshots usage
   *
   */
  volumeSnapshots?: CloudProjectSnapshotsUsage;
  /**
   * Volumes usage
   *
   */
  volumes?: CloudProjectVolumesUsage;
}
/**
 * Instance monthly billing details
 */
export interface CloudProjectInstanceMonthlyBilling {
  /**
   * Monthly billing activation date
   *
   */
  activatedOn?: string;
  /**
   * Cost
   *
   */
  cost?: OrderPrice;
}
/**
 * Instance usage
 */
export interface CloudProjectInstanceUsageDetail {
  /**
   * Hourly price
   *
   */
  hourly?: OrderPrice;
  /**
   * Instance id
   *
   */
  instanceId?: string;
  /**
   * Monthly price
   *
   */
  monthly?: CloudProjectInstanceMonthlyBilling;
  /**
   * Is monthly billing enabled
   *
   */
  monthlyBilling?: boolean;
  /**
   * Reference
   *
   */
  reference?: string;
}
/**
 * Instances usage for current month
 */
export interface CloudProjectInstancesUsage {
  /**
   * Instance usage details
   *
   */
  detail?: CloudProjectInstanceUsageDetail[];
  /**
   * Total cost for the instances
   *
   */
  total?: OrderPrice;
}
/**
 * New cloud project
 */
export interface CloudProjectNewProject {
  /**
   * Agreement to valid
   *
   */
  agreements?: Number[];
  /**
   * Cloud credit
   *
   */
  credit?: CloudProjectNewProjectCredit;
  /**
   * Cloud project description
   *
   */
  description?: string;
  /**
   * Cloud project order id
   *
   */
  orderId?: Number;
  /**
   * Cloud project
   *
   */
  project?: string;
  /**
   * Project creation status
   *
   */
  status?: CloudProjectNewProjectStatusEnum;
}
/**
 * Credit details
 */
export interface CloudProjectNewProjectCredit {
  /**
   * Credit description
   *
   */
  description?: string;
  /**
   * Credit id
   *
   */
  id?: Number;
  /**
   * Use credits on following products
   *
   */
  products?: string[];
  /**
   * Total credit
   *
   */
  total_credit?: OrderPrice;
  /**
   * Credit validity
   *
   */
  validity?: CloudCommonVoucherValidity;
}
/**
 * New cloud project informations
 */
export interface CloudProjectNewProjectInfo {
  /**
   * Agreement to valid
   *
   */
  agreements?: Number[];
  /**
   * Error to fix before trying to create a new Public Cloud project
   *
   */
  error?: CloudProjectNewProjectInfoError;
  /**
   * Cloud project order
   *
   */
  order?: OrderPrice;
}
/**
 * Error that can occur when creating a Public Cloud project
 */
export interface CloudProjectNewProjectInfoError {
  /**
   * Error code
   *
   */
  code?: CloudProjectNewProjectInfoErrorCodeEnum;
  /**
   * Error message
   *
   */
  message?: string;
}
/**
 * Possible values for error code on project creation
 */
export type CloudProjectNewProjectInfoErrorCodeEnum = 'accountNotEligible' | 'invalidPaymentMean' | 'maxProjectsLimitReached' | 'paypalAccountNotVerified' | 'unpaidDebts';
/**
 * Possible values for new project status
 */
export type CloudProjectNewProjectStatusEnum = 'creating' | 'ok' | 'validationPending' | 'waitingAgreementsValidation';
/**
 * Possible values for project status
 */
export type CloudProjectProjectStatus = 'creating' | 'deleted' | 'deleting' | 'ok' | 'suspended';
/**
 * Usage information on your project
 */
export interface CloudProjectProjectUsage {
  /**
   * Current usage details
   *
   */
  current?: CloudProjectCurrentUsage;
}
/**
 * Snapshot usage
 */
export interface CloudProjectSnapshotUsageDetail {
  /**
   * Snapshot price
   *
   */
  price?: OrderPrice;
  /**
   * Snapshot region
   *
   */
  region?: string;
  /**
   * Stored snapshot size in gigabytes
   *
   */
  storedSize?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Snapshots usage for current month
 */
export interface CloudProjectSnapshotsUsage {
  /**
   * Snapshots usage details
   *
   */
  detail?: CloudProjectSnapshotUsageDetail[];
  /**
   * Total cost for the snapshots
   *
   */
  total?: OrderPrice;
}
/**
 * Usage information for current month on your project
 */
export interface CloudProjectStorageUsage {
  /**
   * Storage bandwidth usage
   *
   */
  bandwidth?: CloudProjectBandwidthStorageUsage[];
  /**
   * Cost for your storage in all your containers
   *
   */
  total?: OrderPrice;
  /**
   * Storage volume usage
   *
   */
  volume?: CloudProjectStorageVolumeUsage[];
}
/**
 * Storage volume used on your project
 */
export interface CloudProjectStorageVolumeUsage {
  /**
   * Region
   *
   */
  region?: string;
  /**
   * Bytes stored in your containers
   *
   */
  storedBytes?: Number;
  /**
   * Cost for your storage bandwidth
   *
   */
  total?: OrderPrice;
}
/**
 * Possible values for volume type
 */
export type CloudProjectVolumeType = 'classic' | 'high-speed';
/**
 * Volume usage
 */
export interface CloudProjectVolumeUsageDetail {
  /**
   * Volume price
   *
   */
  price?: OrderPrice;
  /**
   * Volume capacity in gigabytes
   *
   */
  volumeCapacity?: ComplexTypeUnitAndValue<Number>;
  /**
   * Volume id
   *
   */
  volumeId?: string;
  /**
   * Volume type
   *
   */
  volumeType?: CloudProjectVolumeType;
}
/**
 * Volumes usage for current month
 */
export interface CloudProjectVolumesUsage {
  /**
   * Volume usage details
   *
   */
  detail?: CloudProjectVolumeUsageDetail[];
  /**
   * Total cost for the volumes
   *
   */
  total?: OrderPrice;
}
/**
 * InstanceQuotas
 */
export interface CloudQuotaInstanceQuotas {
  /**
   * Maximum total cores allowed in your project
   *
   */
  maxCores?: Number;
  /**
   * Maximum total cores allowed in your project
   *
   */
  maxInstances?: Number;
  /**
   */
  maxRam?: Number;
  /**
   * Current used cores number
   *
   */
  usedCores?: Number;
  /**
   * Current used instances
   *
   */
  usedInstances?: Number;
  /**
   * Current used ram
   *
   */
  usedRAM?: Number;
}
/**
 * KeypairQuotas
 */
export interface CloudQuotaKeypairQuotas {
  /**
   * Maximum keypairs count allowed in your project
   *
   */
  maxCount?: Number;
}
/**
 * Quotas
 */
export interface CloudQuotaQuotas {
  /**
   * Quotas on instances
   *
   */
  instance?: CloudQuotaInstanceQuotas;
  /**
   * Quotas on keypairs
   *
   */
  keypair?: CloudQuotaKeypairQuotas;
  /**
   * Region
   *
   */
  region?: string;
  /**
   * Quotas on volumes
   *
   */
  volume?: CloudQuotaVolumeQuotas;
}
/**
 * VolumeQuotas
 */
export interface CloudQuotaVolumeQuotas {
  /**
   * Maximum total volume capacity allowed in your project
   *
   */
  maxGigabytes?: Number;
  /**
   * Current used volume gigabytes
   *
   */
  usedGigabytes?: Number;
  /**
   * Current volumes count
   *
   */
  volumeCount?: Number;
}
/**
 * Role
 */
export interface CloudRoleRole {
  /**
   * Role Description
   *
   */
  description?: string;
  /**
   * Role Id
   *
   */
  id?: string;
  /**
   * Role Name
   *
   */
  name?: string;
}
/**
 * SshKey
 */
export interface CloudSshkeySshKey {
  /**
   * SSH key id
   *
   */
  id?: string;
  /**
   * SSH key name
   *
   */
  name?: string;
  /**
   * SSH public key
   *
   */
  publicKey?: string;
  /**
   * SSH key regions
   *
   */
  regions?: string[];
}
/**
 * SshKeyDetail
 */
export interface CloudSshkeySshKeyDetail {
  /**
   * SSH key fingerprint
   *
   */
  fingerPrint?: string;
  /**
   * SSH key id
   *
   */
  id?: string;
  /**
   * SSH key name
   *
   */
  name?: string;
  /**
   * SSH public key
   *
   */
  publicKey?: string;
  /**
   * SSH key regions
   *
   */
  regions?: string[];
}
/**
 * Content
 */
export interface CloudStackContent {
  /**
   * Content
   *
   */
  content?: string;
  /**
   * Type of the content
   *
   */
  type?: string;
}
/**
 * InstructionGuide
 */
export interface CloudStackInstructionGuide {
  /**
   * Guide introduction content
   *
   */
  content?: CloudStackContent[];
  /**
   * Guide language
   *
   */
  language?: string;
  /**
   * Sections of the guide
   *
   */
  sections?: CloudStackSection[];
  /**
   * Guide title
   *
   */
  title?: string;
}
/**
 * Section
 */
export interface CloudStackSection {
  /**
   * Content of the guide section
   *
   */
  content?: CloudStackContent[];
  /**
   * Steps to follow
   *
   */
  steps?: CloudStackStep[];
  /**
   * Title of the guide section
   *
   */
  title?: string;
}
/**
 * Stack
 */
export interface CloudStackStack {
  /**
   * Stack last commit
   *
   */
  commit?: string;
  /**
   * Stack description
   *
   */
  description?: string;
  /**
   * GIT repository
   *
   */
  gitRepository?: string;
  /**
   * Instructions to start the stack
   *
   */
  instructions?: CloudStackInstructionGuide[];
  /**
   * Stack name
   *
   */
  name?: string;
  /**
   * Stack release tag
   *
   */
  release?: string;
  /**
   * Stack uuid
   *
   */
  uuid?: string;
}
/**
 * Step
 */
export interface CloudStackStep {
  /**
   * Content of the step
   *
   */
  content?: CloudStackContent[];
  /**
   * Title of the step
   *
   */
  title?: string;
}
/**
 * Container
 */
export interface CloudStorageContainer {
  /**
   * Storage id
   *
   */
  id?: string;
  /**
   * Storage name
   *
   */
  name?: string;
  /**
   */
  region?: string;
  /**
   * Total bytes stored
   *
   */
  storedBytes?: Number;
  /**
   * Total objects stored
   *
   */
  storedObjects?: Number;
}
/**
 * ContainerAccess
 */
export interface CloudStorageContainerAccess {
  /**
   * Storage access endpoints
   *
   */
  endpoints?: CloudStorageEndpoint[];
  /**
   * Storage access token
   *
   */
  token?: string;
}
/**
 * ContainerDetail
 */
export interface CloudStorageContainerDetail {
  /**
   * Whether this is an archive container or not
   *
   */
  archive?: boolean;
  /**
   * Container type
   *
   */
  containerType?: CloudStorageTypeEnum;
  /**
   * Origins allowed to make Cross Origin Requests
   *
   */
  cors?: string[];
  /**
   * Container name
   *
   */
  name?: string;
  /**
   * Objects stored in container
   *
   */
  objects?: CloudStorageContainerObject[];
  /**
   * Public container (DEPRECATED: see containerType)
   *
   */
  public?: boolean;
  /**
   * Container region
   *
   */
  region?: string;
  /**
   * Container static URL
   *
   */
  staticUrl?: string;
  /**
   * Total bytes stored
   *
   */
  storedBytes?: Number;
  /**
   * Total objects stored
   *
   */
  storedObjects?: Number;
}
/**
 * ContainerObject
 */
export interface CloudStorageContainerObject {
  /**
   * Object content type
   *
   */
  contentType?: string;
  /**
   * Last modification date
   *
   */
  lastModified?: string;
  /**
   * Object name
   *
   */
  name?: string;
  /**
   * Object retrieval delay (when unsealing)
   *
   */
  retrievalDelay?: Number;
  /**
   * Object retrieval state
   *
   */
  retrievalState?: CloudStorageRetrievalStateEnum;
  /**
   * Object size
   *
   */
  size?: Number;
}
/**
 * ContainerObjectTempURL
 */
export interface CloudStorageContainerObjectTempURL {
  /**
   * Temporary URL expiration date
   *
   */
  expirationDate?: string;
  /**
   * Temporary URL to get object
   *
   */
  getURL?: string;
}
/**
 * Endpoint
 */
export interface CloudStorageEndpoint {
  /**
   * Endpoint region
   *
   */
  region?: string;
  /**
   * Endpoint URL
   *
   */
  url?: string;
}
/**
 * RetrievalStateEnum
 */
export type CloudStorageRetrievalStateEnum = 'sealed' | 'unsealed' | 'unsealing';
/**
 * RightEnum
 */
export type CloudStorageRightEnum = 'all' | 'read' | 'write';
/**
 * TypeEnum
 */
export type CloudStorageTypeEnum = 'private' | 'public' | 'static';
/**
 * PaymentTypeEnum
 */
export type CloudUsagePaymentTypeEnum = 'post' | 'pre';
/**
 * Period
 */
export interface CloudUsagePeriod {
  /**
   * Usage from
   *
   */
  from?: string;
  /**
   * Usage to
   *
   */
  to?: string;
}
/**
 * UsageBill
 */
export interface CloudUsageUsageBill {
  /**
   * ID of the bill
   *
   */
  bill_id?: string;
  /**
   * Amount of credits used in this bill (not necessarily on part)
   *
   */
  credit?: Number;
  /**
   * Amount of the bill that accounts for services for the usage period, credits not taken into account
   *
   */
  part?: Number;
  /**
   * Payment type
   *
   */
  payment_type?: CloudUsagePaymentTypeEnum;
  /**
   * Total amount of the bill, credits not taken into account
   *
   */
  total?: Number;
}
/**
 * UsageCurrent
 */
export interface CloudUsageUsageCurrent {
  /**
   * Hourly usage
   *
   */
  hourlyUsage?: CloudBillingViewHourlyResources;
  /**
   * Entry last update
   *
   */
  lastUpdate?: string;
  /**
   * Monthly usage
   *
   */
  monthlyUsage?: CloudBillingViewMonthlyResources;
  /**
   * Usage dates (from/to)
   *
   */
  period?: CloudUsagePeriod;
}
/**
 * UsageCurrentBills
 */
export interface CloudUsageUsageCurrentBills {
  /**
   * Bills related to the current usage
   *
   */
  bills?: CloudUsageUsageBill[];
}
/**
 * UsageForecast
 */
export interface CloudUsageUsageForecast {
  /**
   * Hourly forecast
   *
   */
  hourlyUsage?: CloudBillingViewHourlyResources;
  /**
   * Entry last update
   *
   */
  lastUpdate?: string;
  /**
   * Monthly forecast
   *
   */
  monthlyUsage?: CloudBillingViewMonthlyResources;
  /**
   * Forecast dates (from/to)
   *
   */
  period?: CloudUsagePeriod;
  /**
   * Usable credit to pay next bill
   *
   */
  usableCredits?: CloudBillingViewUsedCredits;
}
/**
 * UsageHistory
 */
export interface CloudUsageUsageHistory {
  /**
   * Usage id
   *
   */
  id?: string;
  /**
   * Entry last update
   *
   */
  lastUpdate?: string;
  /**
   * Usage dates (from/to)
   *
   */
  period?: CloudUsagePeriod;
}
/**
 * UsageHistoryDetail
 */
export interface CloudUsageUsageHistoryDetail {
  /**
   * Hourly usage
   *
   */
  hourlyUsage?: CloudBillingViewHourlyResources;
  /**
   * Usage id
   *
   */
  id?: string;
  /**
   * Entry last update
   *
   */
  lastUpdate?: string;
  /**
   * Monthly usage
   *
   */
  monthlyUsage?: CloudBillingViewMonthlyResources;
  /**
   * Usage dates (from/to)
   *
   */
  period?: CloudUsagePeriod;
}
/**
 * UsageHistoryDetailBills
 */
export interface CloudUsageUsageHistoryDetailBills {
  /**
   * Bills related to the usage
   *
   */
  bills?: CloudUsageUsageBill[];
}
/**
 * Openrc
 */
export interface CloudUserOpenrc {
  /**
   * openrc file
   *
   */
  content?: string;
}
/**
 * OpenrcVersionEnum
 */
export type CloudUserOpenrcVersionEnum = 'v2.0' | 'v3';
/**
 * Rclone
 */
export interface CloudUserRclone {
  /**
   * rclone configuration file
   *
   */
  content?: string;
}
/**
 * RoleEnum
 */
export type CloudUserRoleEnum = 'admin' | 'authentication';
/**
 * User
 */
export interface CloudUserUser {
  /**
   * User creation date
   *
   */
  creationDate?: string;
  /**
   * User description
   *
   */
  description?: string;
  /**
   * User id
   *
   */
  id?: Number;
  /**
   * User status
   *
   */
  status?: CloudUserUserStatusEnum;
  /**
   * Username
   *
   */
  username?: string;
}
/**
 * UserDetail
 */
export interface CloudUserUserDetail {
  /**
   * User creation date
   *
   */
  creationDate?: string;
  /**
   * User description
   *
   */
  description?: string;
  /**
   * User id
   *
   */
  id?: Number;
  /**
   * User password
   *
   */
  password?: string;
  /**
   * User status
   *
   */
  status?: CloudUserUserStatusEnum;
  /**
   * Username
   *
   */
  username?: string;
}
/**
 * UserStatusEnum
 */
export type CloudUserUserStatusEnum = 'creating' | 'deleted' | 'deleting' | 'ok';
/**
 * Snapshot
 */
export interface CloudVolumeSnapshot {
  /**
   * Snapshot creation date
   *
   */
  creationDate?: string;
  /**
   * Snapshot description
   *
   */
  description?: string;
  /**
   * Snapshot id
   *
   */
  id?: string;
  /**
   * Snapshot name
   *
   */
  name?: string;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Snapshot region
   *
   */
  region?: string;
  /**
   * Snapshot size
   *
   */
  size?: Number;
  /**
   * Snapshot status
   *
   */
  status?: CloudVolumeSnapshotStatusEnum;
  /**
   * Volume source id
   *
   */
  volumeId?: string;
}
/**
 * SnapshotStatusEnum
 */
export type CloudVolumeSnapshotStatusEnum = 'available' | 'creating' | 'deleting' | 'error' | 'error_deleting';
/**
 * Volume
 */
export interface CloudVolumeVolume {
  /**
   * Volume attached to instances id
   *
   */
  attachedTo?: string[];
  /**
   * Volume bootable
   *
   */
  bootable?: boolean;
  /**
   * Volume creation date
   *
   */
  creationDate?: string;
  /**
   * Volume description
   *
   */
  description?: string;
  /**
   * Volume id
   *
   */
  id?: string;
  /**
   * Volume name
   *
   */
  name?: string;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Volume region
   *
   */
  region?: string;
  /**
   * Volume size (in GB)
   *
   */
  size?: Number;
  /**
   * Volume status
   *
   */
  status?: string;
  /**
   * Volume type
   *
   */
  type?: CloudVolumeVolumeTypeEnum;
}
/**
 * VolumeTypeEnum
 */
export type CloudVolumeVolumeTypeEnum = 'classic' | 'high-speed';
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
 * OVH subsidiaries
 */
export type NichandleOvhSubsidiaryEnum = 'ASIA' | 'AU' | 'CA' | 'CZ' | 'DE' | 'ES' | 'EU' | 'FI' | 'FR' | 'GB' | 'IE' | 'IT' | 'LT' | 'MA' | 'NL' | 'PL' | 'PT' | 'QC' | 'SG' | 'SN' | 'TN' | 'US' | 'WE' | 'WS';
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
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  text?: string;
  /**
   */
  value?: Number;
}
/**
 * Cloud Archives Account
 */
export interface PcaAccount {
  /**
   * account domain
   *
   */
  domain?: string;
  /**
   * host where to upload files to
   *
   */
  host?: string;
  /**
   * login for cloud archives
   *
   */
  login?: string;
  /**
   * encrypted password
   *
   */
  password?: string;
  /**
   * ssh key to be used for upload and download
   *
   */
  sshkey?: string;
}
/**
 * cloud archives billing
 */
export interface PcaBilling {
  /**
   * Billing action is billed.
   *
   */
  billed?: boolean;
  /**
   * Date and time the operation took place
   *
   */
  date?: string;
  /**
   * Billing id
   *
   */
  id?: Number;
  /**
   * Quantity of bytes for operation
   *
   */
  quantity?: Number;
  /**
   * Billing reference name
   *
   */
  reference?: CloudPcaBillingRefEnum;
  /**
   * Total usage after operation
   *
   */
  total?: Number;
}
/**
 * cloud archives files
 */
export interface PcaFile {
  /**
   * File MD5 hash
   *
   */
  MD5?: string;
  /**
   * File SHA1 hash
   *
   */
  SHA1?: string;
  /**
   * File SHA256 hash
   *
   */
  SHA256?: string;
  /**
   * File id
   *
   */
  id?: string;
  /**
   * File name
   *
   */
  name?: string;
  /**
   * File size, in bytes
   *
   */
  size?: Number;
  /**
   * File state
   *
   */
  state?: string;
  /**
   * File type
   *
   */
  type?: string;
}
/**
 * cloud archives sessions
 */
export interface PcaSession {
  /**
   * Session end date
   *
   */
  endDate?: string;
  /**
   * Session ID
   *
   */
  id?: string;
  /**
   * This is your login
   *
   */
  login?: string;
  /**
   * Session friendly name
   *
   */
  name?: string;
  /**
   * Session size, in bytes
   *
   */
  size?: Number;
  /**
   * IP session was made from
   *
   */
  srcIp?: string;
  /**
   * Session start date
   *
   */
  startDate?: string;
  /**
   * Session state
   *
   */
  state?: CloudPcaSessionStateEnum;
}
/**
 * cloud archives tasks
 */
export interface PcaTask {
  /**
   * Task comments
   *
   */
  comment?: string;
  /**
   * Task function
   *
   */
  function?: CloudPcaFunctionTypeEnum;
  /**
   * Task ID
   *
   */
  id?: string;
  /**
   * Host used for task
   *
   */
  ipAddress?: string;
  /**
   * Task login
   *
   */
  login?: string;
  /**
   * Task status
   *
   */
  status?: CloudPcaTaskStateEnum;
  /**
   * Task date
   *
   */
  todoDate?: string;
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
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
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
type PathsCloudGET = '/cloud' | 
'/cloud/createProjectInfo' | 
'/cloud/order' | 
'/cloud/price' | 
'/cloud/project' | 
'/cloud/project/{serviceName}' | 
'/cloud/project/{serviceName}/acl' | 
'/cloud/project/{serviceName}/acl/{accountId}' | 
'/cloud/project/{serviceName}/alerting' | 
'/cloud/project/{serviceName}/alerting/{id}' | 
'/cloud/project/{serviceName}/alerting/{id}/alert' | 
'/cloud/project/{serviceName}/alerting/{id}/alert/{alertId}' | 
'/cloud/project/{serviceName}/bill' | 
'/cloud/project/{serviceName}/consumption' | 
'/cloud/project/{serviceName}/credit' | 
'/cloud/project/{serviceName}/credit/{id}' | 
'/cloud/project/{serviceName}/flavor' | 
'/cloud/project/{serviceName}/flavor/{flavorId}' | 
'/cloud/project/{serviceName}/forecast' | 
'/cloud/project/{serviceName}/image' | 
'/cloud/project/{serviceName}/image/{imageId}' | 
'/cloud/project/{serviceName}/instance' | 
'/cloud/project/{serviceName}/instance/group' | 
'/cloud/project/{serviceName}/instance/group/{groupId}' | 
'/cloud/project/{serviceName}/instance/{instanceId}' | 
'/cloud/project/{serviceName}/instance/{instanceId}/interface' | 
'/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}' | 
'/cloud/project/{serviceName}/instance/{instanceId}/monitoring' | 
'/cloud/project/{serviceName}/ip' | 
'/cloud/project/{serviceName}/ip/failover' | 
'/cloud/project/{serviceName}/ip/failover/{id}' | 
'/cloud/project/{serviceName}/ipLoadbalancing' | 
'/cloud/project/{serviceName}/ipLoadbalancing/{id}' | 
'/cloud/project/{serviceName}/migration' | 
'/cloud/project/{serviceName}/migration/{migrationId}' | 
'/cloud/project/{serviceName}/network/private' | 
'/cloud/project/{serviceName}/network/private/{networkId}' | 
'/cloud/project/{serviceName}/network/private/{networkId}/subnet' | 
'/cloud/project/{serviceName}/network/public' | 
'/cloud/project/{serviceName}/operation' | 
'/cloud/project/{serviceName}/operation/{operationId}' | 
'/cloud/project/{serviceName}/quota' | 
'/cloud/project/{serviceName}/region' | 
'/cloud/project/{serviceName}/region/{regionName}' | 
'/cloud/project/{serviceName}/region/{regionName}/workflow/backup' | 
'/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}' | 
'/cloud/project/{serviceName}/regionAvailable' | 
'/cloud/project/{serviceName}/serviceInfos' | 
'/cloud/project/{serviceName}/snapshot' | 
'/cloud/project/{serviceName}/snapshot/{snapshotId}' | 
'/cloud/project/{serviceName}/sshkey' | 
'/cloud/project/{serviceName}/sshkey/{keyId}' | 
'/cloud/project/{serviceName}/stack' | 
'/cloud/project/{serviceName}/stack/{stackId}' | 
'/cloud/project/{serviceName}/storage' | 
'/cloud/project/{serviceName}/storage/access' | 
'/cloud/project/{serviceName}/storage/{containerId}' | 
'/cloud/project/{serviceName}/usage/current' | 
'/cloud/project/{serviceName}/usage/forecast' | 
'/cloud/project/{serviceName}/usage/history' | 
'/cloud/project/{serviceName}/usage/history/{usageId}' | 
'/cloud/project/{serviceName}/user' | 
'/cloud/project/{serviceName}/user/{userId}' | 
'/cloud/project/{serviceName}/user/{userId}/openrc' | 
'/cloud/project/{serviceName}/user/{userId}/rclone' | 
'/cloud/project/{serviceName}/volume' | 
'/cloud/project/{serviceName}/volume/snapshot' | 
'/cloud/project/{serviceName}/volume/snapshot/{snapshotId}' | 
'/cloud/project/{serviceName}/volume/{volumeId}' | 
'/cloud/project/{serviceName}/vrack' | 
'/cloud/subsidiaryPrice' | 
'/cloud/{serviceName}/pca' | 
'/cloud/{serviceName}/pca/{pcaServiceName}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/billing' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/tasks' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/usage';

type PathsCloudPUT = '/cloud/project/{serviceName}' | 
'/cloud/project/{serviceName}/alerting/{id}' | 
'/cloud/project/{serviceName}/instance/{instanceId}' | 
'/cloud/project/{serviceName}/migration/{migrationId}' | 
'/cloud/project/{serviceName}/network/private/{networkId}' | 
'/cloud/project/{serviceName}/serviceInfos' | 
'/cloud/project/{serviceName}/storage/{containerId}' | 
'/cloud/project/{serviceName}/volume/{volumeId}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}';

type PathsCloudPOST = '/cloud/createProject' | 
'/cloud/project/{serviceName}/acl' | 
'/cloud/project/{serviceName}/alerting' | 
'/cloud/project/{serviceName}/cancel' | 
'/cloud/project/{serviceName}/changeContact' | 
'/cloud/project/{serviceName}/confirmTermination' | 
'/cloud/project/{serviceName}/credit' | 
'/cloud/project/{serviceName}/instance' | 
'/cloud/project/{serviceName}/instance/bulk' | 
'/cloud/project/{serviceName}/instance/group' | 
'/cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling' | 
'/cloud/project/{serviceName}/instance/{instanceId}/applicationAccess' | 
'/cloud/project/{serviceName}/instance/{instanceId}/interface' | 
'/cloud/project/{serviceName}/instance/{instanceId}/reboot' | 
'/cloud/project/{serviceName}/instance/{instanceId}/reinstall' | 
'/cloud/project/{serviceName}/instance/{instanceId}/rescueMode' | 
'/cloud/project/{serviceName}/instance/{instanceId}/resize' | 
'/cloud/project/{serviceName}/instance/{instanceId}/resume' | 
'/cloud/project/{serviceName}/instance/{instanceId}/snapshot' | 
'/cloud/project/{serviceName}/instance/{instanceId}/start' | 
'/cloud/project/{serviceName}/instance/{instanceId}/stop' | 
'/cloud/project/{serviceName}/instance/{instanceId}/vnc' | 
'/cloud/project/{serviceName}/ip/failover/{id}/attach' | 
'/cloud/project/{serviceName}/ipLoadbalancing' | 
'/cloud/project/{serviceName}/ipLoadbalancing/{id}/renew' | 
'/cloud/project/{serviceName}/ipLoadbalancing/{id}/validate' | 
'/cloud/project/{serviceName}/network/private' | 
'/cloud/project/{serviceName}/network/private/{networkId}/region' | 
'/cloud/project/{serviceName}/network/private/{networkId}/subnet' | 
'/cloud/project/{serviceName}/openstackClient' | 
'/cloud/project/{serviceName}/region' | 
'/cloud/project/{serviceName}/region/{regionName}/workflow/backup' | 
'/cloud/project/{serviceName}/retain' | 
'/cloud/project/{serviceName}/sshkey' | 
'/cloud/project/{serviceName}/stack/{stackId}/client' | 
'/cloud/project/{serviceName}/storage' | 
'/cloud/project/{serviceName}/storage/access' | 
'/cloud/project/{serviceName}/storage/{containerId}/cors' | 
'/cloud/project/{serviceName}/storage/{containerId}/publicUrl' | 
'/cloud/project/{serviceName}/storage/{containerId}/static' | 
'/cloud/project/{serviceName}/storage/{containerId}/user' | 
'/cloud/project/{serviceName}/terminate' | 
'/cloud/project/{serviceName}/unleash' | 
'/cloud/project/{serviceName}/user' | 
'/cloud/project/{serviceName}/user/{userId}/regeneratePassword' | 
'/cloud/project/{serviceName}/user/{userId}/token' | 
'/cloud/project/{serviceName}/volume' | 
'/cloud/project/{serviceName}/volume/{volumeId}/attach' | 
'/cloud/project/{serviceName}/volume/{volumeId}/detach' | 
'/cloud/project/{serviceName}/volume/{volumeId}/snapshot' | 
'/cloud/project/{serviceName}/volume/{volumeId}/upsize' | 
'/cloud/project/{serviceName}/vrack' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/tasks';

type PathsCloudDELETE = '/cloud/project/{serviceName}/acl/{accountId}' | 
'/cloud/project/{serviceName}/alerting/{id}' | 
'/cloud/project/{serviceName}/instance/group/{groupId}' | 
'/cloud/project/{serviceName}/instance/{instanceId}' | 
'/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}' | 
'/cloud/project/{serviceName}/ipLoadbalancing/{id}' | 
'/cloud/project/{serviceName}/network/private/{networkId}' | 
'/cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}' | 
'/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}' | 
'/cloud/project/{serviceName}/snapshot/{snapshotId}' | 
'/cloud/project/{serviceName}/sshkey/{keyId}' | 
'/cloud/project/{serviceName}/storage/{containerId}' | 
'/cloud/project/{serviceName}/storage/{containerId}/cors' | 
'/cloud/project/{serviceName}/user/{userId}' | 
'/cloud/project/{serviceName}/volume/snapshot/{snapshotId}' | 
'/cloud/project/{serviceName}/volume/{volumeId}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}';

export class ApiCloud extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the PUBLICCLOUD service
  List available services
  **/
  public get(path: '/cloud'): Promise<string[]>;
  /**
  Get information about a cloud project creation
  Get information about a cloud project creation
  **/
  public get(path: '/cloud/createProjectInfo', queryParams?: {voucher?: string}): Promise<CloudProjectNewProjectInfo>;
  /**
  Missing description
  Get all cloud pending orders
  **/
  public get(path: '/cloud/order', queryParams?: {planCode?: string}): Promise<CloudOrderOrder[]>;
  /**
  Get services prices
  Get services prices
  **/
  public get(path: '/cloud/price', queryParams?: {flavorId?: string, region?: string}): Promise<CloudPrice>;
  /**
  Operations about the PUBLICCLOUD service
  List available services
  **/
  public get(path: '/cloud/project'): Promise<string[]>;
  /**
  Project
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}', pathParams: {serviceName: string}): Promise<CloudProject>;
  /**
  List the cloud.Acl objects
  Get ACL on your cloud project
  **/
  public get(path: '/cloud/project/{serviceName}/acl', pathParams: {serviceName: string}, queryParams?: {type?: CloudAclTypeEnum}): Promise<string[]>;
  /**
  Cloud ACL
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/acl/{accountId}', pathParams: {serviceName: string, accountId: string}): Promise<CloudAcl>;
  /**
  List the cloud.Alerting objects
  Manage alerts on your consumption
  **/
  public get(path: '/cloud/project/{serviceName}/alerting', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Cloud alerting consumption
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/alerting/{id}', pathParams: {serviceName: string, id: string}): Promise<CloudAlerting>;
  /**
  List the cloud.AlertingAlert objects
  See alerts
  **/
  public get(path: '/cloud/project/{serviceName}/alerting/{id}/alert', pathParams: {serviceName: string, id: string}): Promise<Number[]>;
  /**
  Cloud alert on your consumption
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/alerting/{id}/alert/{alertId}', pathParams: {serviceName: string, id: string, alertId: Number}): Promise<CloudAlertingAlert>;
  /**
  bill operations
  Get your project bills
  **/
  public get(path: '/cloud/project/{serviceName}/bill', pathParams: {serviceName: string}, queryParams?: {from?: string, to?: string}): Promise<CloudProjectBill[]>;
  /**
  consumption operations
  Get your project consumption
  **/
  public get(path: '/cloud/project/{serviceName}/consumption', pathParams: {serviceName: string}, queryParams?: {from?: string, to?: string}): Promise<CloudProjectProjectUsage>;
  /**
  List the cloud.Credit objects
  Get your credit
  **/
  public get(path: '/cloud/project/{serviceName}/credit', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Cloud credit
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/credit/{id}', pathParams: {serviceName: string, id: Number}): Promise<CloudCredit>;
  /**
  Missing description
  Get flavors
  **/
  public get(path: '/cloud/project/{serviceName}/flavor', pathParams: {serviceName: string}, queryParams?: {region?: string}): Promise<CloudFlavorFlavor[]>;
  /**
  Missing description
  Get flavor
  **/
  public get(path: '/cloud/project/{serviceName}/flavor/{flavorId}', pathParams: {flavorId: string, serviceName: string}): Promise<CloudFlavorFlavor>;
  /**
  Missing description
  Get your consumption forecast
  **/
  public get(path: '/cloud/project/{serviceName}/forecast', pathParams: {serviceName: string}, queryParams?: {toDate?: string}): Promise<CloudForecastProjectForecast>;
  /**
  Missing description
  Get images
  **/
  public get(path: '/cloud/project/{serviceName}/image', pathParams: {serviceName: string}, queryParams?: {flavorType?: string, osType?: CloudImageOSTypeEnum, region?: string}): Promise<CloudImageImage[]>;
  /**
  Missing description
  Get image
  **/
  public get(path: '/cloud/project/{serviceName}/image/{imageId}', pathParams: {imageId: string, serviceName: string}): Promise<CloudImageImage>;
  /**
  Missing description
  Get instances
  **/
  public get(path: '/cloud/project/{serviceName}/instance', pathParams: {serviceName: string}, queryParams?: {region?: string}): Promise<CloudInstanceInstance[]>;
  /**
  Missing description
  Get the detail of a group
  **/
  public get(path: '/cloud/project/{serviceName}/instance/group', pathParams: {serviceName: string}, queryParams?: {region?: string}): Promise<CloudInstancegroupInstanceGroup[]>;
  /**
  Missing description
  Get all groups
  **/
  public get(path: '/cloud/project/{serviceName}/instance/group/{groupId}', pathParams: {groupId: string, serviceName: string}, queryParams?: {region?: string}): Promise<CloudInstancegroupInstanceGroup>;
  /**
  Missing description
  Get instance
  **/
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}', pathParams: {instanceId: string, serviceName: string}): Promise<CloudInstanceInstanceDetail>;
  /**
  Missing description
  Get interfaces
  **/
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface', pathParams: {instanceId: string, serviceName: string}): Promise<CloudInstanceInterfaceInterface[]>;
  /**
  Missing description
  Get interface
  **/
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}', pathParams: {instanceId: string, interfaceId: string, serviceName: string}): Promise<CloudInstanceInterfaceInterface>;
  /**
  Missing description
  Return many statistics about the virtual machine for a given period
  **/
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}/monitoring', pathParams: {instanceId: string, serviceName: string}, queryParams?: {period?: CloudInstanceMetricsPeriod, type?: CloudInstanceMetricsType}): Promise<CloudInstanceInstanceMetrics>;
  /**
  Missing description
  Get ips
  **/
  public get(path: '/cloud/project/{serviceName}/ip', pathParams: {serviceName: string}): Promise<CloudIpCloudIp[]>;
  /**
  Missing description
  Get failover ips
  **/
  public get(path: '/cloud/project/{serviceName}/ip/failover', pathParams: {serviceName: string}): Promise<CloudIpFailoverIp[]>;
  /**
  Missing description
  Get failover ip
  **/
  public get(path: '/cloud/project/{serviceName}/ip/failover/{id}', pathParams: {id: string, serviceName: string}): Promise<CloudIpFailoverIp>;
  /**
  List the cloud.IPLoadbalancing objects
  Managed imported IP LB in OpenStack
  **/
  public get(path: '/cloud/project/{serviceName}/ipLoadbalancing', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Load balancing IP imported into your OpenStack project
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/ipLoadbalancing/{id}', pathParams: {serviceName: string, id: string}): Promise<CloudIPLoadbalancing>;
  /**
  Missing description
  Get planned migrations
  **/
  public get(path: '/cloud/project/{serviceName}/migration', pathParams: {serviceName: string}): Promise<CloudMigrationMigration[]>;
  /**
  Missing description
  Get planned migration
  **/
  public get(path: '/cloud/project/{serviceName}/migration/{migrationId}', pathParams: {migrationId: string, serviceName: string}): Promise<CloudMigrationMigration>;
  /**
  Missing description
  Get private networks
  **/
  public get(path: '/cloud/project/{serviceName}/network/private', pathParams: {serviceName: string}): Promise<CloudNetworkNetwork[]>;
  /**
  Missing description
  Get private network
  **/
  public get(path: '/cloud/project/{serviceName}/network/private/{networkId}', pathParams: {networkId: string, serviceName: string}): Promise<CloudNetworkNetwork>;
  /**
  Missing description
  Get network subnets
  **/
  public get(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet', pathParams: {networkId: string, serviceName: string}): Promise<CloudNetworkSubnet[]>;
  /**
  Missing description
  Get public networks
  **/
  public get(path: '/cloud/project/{serviceName}/network/public', pathParams: {serviceName: string}): Promise<CloudNetworkNetwork[]>;
  /**
  Manage the operations on your Cloud Project
  List your operations
  **/
  public get(path: '/cloud/project/{serviceName}/operation', pathParams: {serviceName: string}): Promise<CloudOperation[]>;
  /**
  Manage one of your operations
  Get information about one operation
  **/
  public get(path: '/cloud/project/{serviceName}/operation/{operationId}', pathParams: {operationId: string, serviceName: string}): Promise<CloudOperation>;
  /**
  Missing description
  Get project quotas
  **/
  public get(path: '/cloud/project/{serviceName}/quota', pathParams: {serviceName: string}): Promise<CloudQuotaQuotas[]>;
  /**
  Manage your regions
  List your regions
  **/
  public get(path: '/cloud/project/{serviceName}/region', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Manage one of your region
  Get information about your region
  **/
  public get(path: '/cloud/project/{serviceName}/region/{regionName}', pathParams: {regionName: string, serviceName: string}): Promise<CloudRegion>;
  /**
  Manage your automated backups
  List your automated backups
  **/
  public get(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup', pathParams: {regionName: string, serviceName: string}): Promise<CloudBackup[]>;
  /**
  Missing description
  Get details about a backup workflow process
  **/
  public get(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}', pathParams: {backupWorkflowId: string, regionName: string, serviceName: string}): Promise<CloudBackup>;
  /**
  Manage the regions you can add on your project
  List the regions on which you can ask an access to
  **/
  public get(path: '/cloud/project/{serviceName}/regionAvailable', pathParams: {serviceName: string}): Promise<CloudAvailableRegion[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Missing description
  Get snapshots
  **/
  public get(path: '/cloud/project/{serviceName}/snapshot', pathParams: {serviceName: string}, queryParams?: {flavorType?: string, region?: string}): Promise<CloudImageImage[]>;
  /**
  Missing description
  Get snapshot details
  **/
  public get(path: '/cloud/project/{serviceName}/snapshot/{snapshotId}', pathParams: {serviceName: string, snapshotId: string}): Promise<CloudImageImage>;
  /**
  Missing description
  Get SSH keys
  **/
  public get(path: '/cloud/project/{serviceName}/sshkey', pathParams: {serviceName: string}, queryParams?: {region?: string}): Promise<CloudSshkeySshKey[]>;
  /**
  Missing description
  Get SSH key
  **/
  public get(path: '/cloud/project/{serviceName}/sshkey/{keyId}', pathParams: {keyId: string, serviceName: string}): Promise<CloudSshkeySshKeyDetail>;
  /**
  Missing description
  Get stacks
  **/
  public get(path: '/cloud/project/{serviceName}/stack', pathParams: {serviceName: string}): Promise<CloudStackStack[]>;
  /**
  Missing description
  Get stack
  **/
  public get(path: '/cloud/project/{serviceName}/stack/{stackId}', pathParams: {serviceName: string, stackId: string}): Promise<CloudStackStack>;
  /**
  Missing description
  Get storage containers
  **/
  public get(path: '/cloud/project/{serviceName}/storage', pathParams: {serviceName: string}): Promise<CloudStorageContainer[]>;
  /**
  Missing description
  Access to storage API
  **/
  public get(path: '/cloud/project/{serviceName}/storage/access', pathParams: {serviceName: string}): Promise<CloudStorageContainerAccess>;
  /**
  Missing description
  Get storage container
  **/
  public get(path: '/cloud/project/{serviceName}/storage/{containerId}', pathParams: {containerId: string, serviceName: string}): Promise<CloudStorageContainerDetail>;
  /**
  Missing description
  Get current usage
  **/
  public get(path: '/cloud/project/{serviceName}/usage/current', pathParams: {serviceName: string}): Promise<CloudUsageUsageCurrent>;
  /**
  Missing description
  Get usage forecast
  **/
  public get(path: '/cloud/project/{serviceName}/usage/forecast', pathParams: {serviceName: string}): Promise<CloudUsageUsageForecast>;
  /**
  Missing description
  Usage information on your project
  **/
  public get(path: '/cloud/project/{serviceName}/usage/history', pathParams: {serviceName: string}, queryParams?: {from?: string, to?: string}): Promise<CloudUsageUsageHistory[]>;
  /**
  Missing description
  Usage information details
  **/
  public get(path: '/cloud/project/{serviceName}/usage/history/{usageId}', pathParams: {serviceName: string, usageId: string}): Promise<CloudUsageUsageHistoryDetail>;
  /**
  Missing description
  Get all users
  **/
  public get(path: '/cloud/project/{serviceName}/user', pathParams: {serviceName: string}): Promise<CloudUserUser[]>;
  /**
  Missing description
  Get user details
  **/
  public get(path: '/cloud/project/{serviceName}/user/{userId}', pathParams: {serviceName: string, userId: Number}): Promise<CloudUserUser>;
  /**
  Missing description
  Get RC file of OpenStack
  **/
  public get(path: '/cloud/project/{serviceName}/user/{userId}/openrc', pathParams: {serviceName: string, userId: Number}, queryParams?: {region?: string, version?: CloudUserOpenrcVersionEnum}): Promise<CloudUserOpenrc>;
  /**
  Missing description
  Get rclone configuration file
  **/
  public get(path: '/cloud/project/{serviceName}/user/{userId}/rclone', pathParams: {serviceName: string, userId: Number}, queryParams?: {region?: string}): Promise<CloudUserRclone>;
  /**
  Missing description
  Get volumes
  **/
  public get(path: '/cloud/project/{serviceName}/volume', pathParams: {serviceName: string}, queryParams?: {region?: string}): Promise<CloudVolumeVolume[]>;
  /**
  Missing description
  Get volume snapshots
  **/
  public get(path: '/cloud/project/{serviceName}/volume/snapshot', pathParams: {serviceName: string}, queryParams?: {region?: string}): Promise<CloudVolumeSnapshot[]>;
  /**
  Missing description
  Get volume snapshot details
  **/
  public get(path: '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}', pathParams: {serviceName: string, snapshotId: string}): Promise<CloudVolumeSnapshot>;
  /**
  Missing description
  Get volume details
  **/
  public get(path: '/cloud/project/{serviceName}/volume/{volumeId}', pathParams: {serviceName: string, volumeId: string}): Promise<CloudVolumeVolume>;
  /**
  Manage the vRack on your Cloud Project
  Get the linked vRack on your project
  **/
  public get(path: '/cloud/project/{serviceName}/vrack', pathParams: {serviceName: string}): Promise<CloudVrack>;
  /**
  Get services prices for a subsidiary
  Get services prices for a subsidiary
  **/
  public get(path: '/cloud/subsidiaryPrice', queryParams?: {flavorId?: string, ovhSubsidiary?: NichandleOvhSubsidiaryEnum, region?: string}): Promise<CloudPrice>;
  /**
  Operations about the PUBLICCLOUD service
  List available services
  **/
  public get(path: '/cloud/{serviceName}/pca', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Cloud Archives Account
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}', pathParams: {serviceName: string, pcaServiceName: string}): Promise<PcaAccount>;
  /**
  List the pca.Billing objects
  cloud Archives billing items
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/billing', pathParams: {serviceName: string, pcaServiceName: string}, queryParams?: {billed?: boolean, 'date.from'?: string, 'date.to'?: string}): Promise<Number[]>;
  /**
  cloud archives billing
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}', pathParams: {serviceName: string, pcaServiceName: string, billingId: Number}): Promise<PcaBilling>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos', pathParams: {serviceName: string, pcaServiceName: string}): Promise<ServicesService>;
  /**
  List the pca.Session objects
  cloud archives sessions for account
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions', pathParams: {serviceName: string, pcaServiceName: string}, queryParams?: {name?: string}): Promise<string[]>;
  /**
  cloud archives sessions
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}', pathParams: {serviceName: string, pcaServiceName: string, sessionId: string}): Promise<PcaSession>;
  /**
  List the pca.File objects
  cloud archives files in session
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files', pathParams: {serviceName: string, pcaServiceName: string, sessionId: string}, queryParams?: {name?: string}): Promise<string[]>;
  /**
  cloud archives files
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}', pathParams: {serviceName: string, pcaServiceName: string, sessionId: string, fileId: string}): Promise<PcaFile>;
  /**
  List the pca.Task objects
  cloud archives tasks for account
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks', pathParams: {serviceName: string, pcaServiceName: string}, queryParams?: {function?: CloudPcaFunctionTypeEnum, status?: CloudPcaTaskStateEnum, 'todoDate.from'?: string, 'todoDate.to'?: string}): Promise<string[]>;
  /**
  cloud archives tasks
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}', pathParams: {serviceName: string, pcaServiceName: string, taskId: string}): Promise<PcaTask>;
  /**
  usage operations
  View account current total sessions usage (bytes)
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/usage', pathParams: {serviceName: string, pcaServiceName: string}): Promise<Number>;
  public get(path: PathsCloudGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Project
  Alter this object properties
  **/
  public put(path: '/cloud/project/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  /**
  Cloud alerting consumption
  Alter this object properties
  **/
  public put(path: '/cloud/project/{serviceName}/alerting/{id}', pathParams: {serviceName: string, id: string}): Promise<void>;
  /**
  Missing description
  Alter an instance
  **/
  public put(path: '/cloud/project/{serviceName}/instance/{instanceId}', pathParams: {instanceId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Update planned migration
  **/
  public put(path: '/cloud/project/{serviceName}/migration/{migrationId}', pathParams: {migrationId: string, serviceName: string}): Promise<CloudMigrationMigration>;
  /**
  Missing description
  Rename private network
  **/
  public put(path: '/cloud/project/{serviceName}/network/private/{networkId}', pathParams: {networkId: string, serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cloud/project/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Missing description
  Update your storage container
  **/
  public put(path: '/cloud/project/{serviceName}/storage/{containerId}', pathParams: {containerId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Update a volume
  **/
  public put(path: '/cloud/project/{serviceName}/volume/{volumeId}', pathParams: {serviceName: string, volumeId: string}): Promise<CloudVolumeVolume>;
  /**
  Cloud Archives Account
  Alter this object properties
  **/
  public put(path: '/cloud/{serviceName}/pca/{pcaServiceName}', pathParams: {serviceName: string, pcaServiceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos', pathParams: {serviceName: string, pcaServiceName: string}): Promise<void>;
  /**
  cloud archives sessions
  Alter this object properties
  **/
  public put(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}', pathParams: {serviceName: string, pcaServiceName: string, sessionId: string}): Promise<void>;
  public put(path: PathsCloudPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Start a new cloud project
  Start a new cloud project
  **/
  public post(path: '/cloud/createProject'): Promise<CloudProjectNewProject>;
  /**
  List the cloud.Acl objects
  Create new ACL
  **/
  public post(path: '/cloud/project/{serviceName}/acl', pathParams: {serviceName: string}): Promise<CloudAcl>;
  /**
  List the cloud.Alerting objects
  Add new alert
  **/
  public post(path: '/cloud/project/{serviceName}/alerting', pathParams: {serviceName: string}): Promise<CloudAlerting>;
  /**
  cancel operations
  Cancel project creation
  **/
  public post(path: '/cloud/project/{serviceName}/cancel', pathParams: {serviceName: string}): Promise<void>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/cloud/project/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/cloud/project/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  List the cloud.Credit objects
  Add credit to your project
  **/
  public post(path: '/cloud/project/{serviceName}/credit', pathParams: {serviceName: string}): Promise<void>;
  /**
  Missing description
  Create a new instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance', pathParams: {serviceName: string}): Promise<CloudInstanceInstanceDetail>;
  /**
  Missing description
  Create multiple instances
  **/
  public post(path: '/cloud/project/{serviceName}/instance/bulk', pathParams: {serviceName: string}): Promise<CloudInstanceInstance[]>;
  /**
  Missing description
  Create a group
  **/
  public post(path: '/cloud/project/{serviceName}/instance/group', pathParams: {serviceName: string}): Promise<CloudInstancegroupInstanceGroup>;
  /**
  Missing description
  Active monthly billing on instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling', pathParams: {instanceId: string, serviceName: string}): Promise<CloudInstanceInstanceDetail>;
  /**
  Missing description
  Return initial credentials of applications installed from public image
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/applicationAccess', pathParams: {instanceId: string, serviceName: string}): Promise<CloudInstanceApplicationAccess>;
  /**
  Missing description
  Create interface on an instance and attached it to a network
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface', pathParams: {instanceId: string, serviceName: string}): Promise<CloudInstanceInterfaceInterface>;
  /**
  Missing description
  Reboot an instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/reboot', pathParams: {instanceId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Reinstall an instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/reinstall', pathParams: {instanceId: string, serviceName: string}): Promise<CloudInstanceInstanceDetail>;
  /**
  Missing description
  Enable or disable rescue mode
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/rescueMode', pathParams: {instanceId: string, serviceName: string}): Promise<CloudInstanceRescueAdminPassword>;
  /**
  Missing description
  Migrate your instance to another flavor
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/resize', pathParams: {instanceId: string, serviceName: string}): Promise<CloudInstanceInstanceDetail>;
  /**
  Missing description
  Resume a suspended instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/resume', pathParams: {instanceId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Snapshot an instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/snapshot', pathParams: {instanceId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Start an instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/start', pathParams: {instanceId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Stop an instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/stop', pathParams: {instanceId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Get VNC access to your instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/vnc', pathParams: {instanceId: string, serviceName: string}): Promise<CloudInstanceInstanceVnc>;
  /**
  Missing description
  Attach failover ip to an instance
  **/
  public post(path: '/cloud/project/{serviceName}/ip/failover/{id}/attach', pathParams: {id: string, serviceName: string}): Promise<CloudIpFailoverIp>;
  /**
  List the cloud.IPLoadbalancing objects
  Import an existing IP LB into OpenStack
  **/
  public post(path: '/cloud/project/{serviceName}/ipLoadbalancing', pathParams: {serviceName: string}): Promise<CloudIPLoadbalancing>;
  /**
  renew operations
  Renew the import of your load balancing IP into Openstack
  **/
  public post(path: '/cloud/project/{serviceName}/ipLoadbalancing/{id}/renew', pathParams: {serviceName: string, id: string}): Promise<CloudIPLoadbalancing>;
  /**
  validate operations
  Validate the import of your load balancing IP into OpenStack
  **/
  public post(path: '/cloud/project/{serviceName}/ipLoadbalancing/{id}/validate', pathParams: {serviceName: string, id: string}): Promise<void>;
  /**
  Missing description
  Create a new network
  **/
  public post(path: '/cloud/project/{serviceName}/network/private', pathParams: {serviceName: string}): Promise<CloudNetworkNetwork>;
  /**
  Missing description
  Activate private network in a new region
  **/
  public post(path: '/cloud/project/{serviceName}/network/private/{networkId}/region', pathParams: {networkId: string, serviceName: string}): Promise<CloudNetworkNetwork>;
  /**
  Missing description
  Create a new network subnet
  **/
  public post(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet', pathParams: {networkId: string, serviceName: string}): Promise<CloudNetworkSubnet>;
  /**
  Missing description
  Get OVH playground session to use the openstack terminal
  **/
  public post(path: '/cloud/project/{serviceName}/openstackClient', pathParams: {serviceName: string}): Promise<CloudOpenstackClientSession>;
  /**
  Manage your regions
  Request access to a region
  **/
  public post(path: '/cloud/project/{serviceName}/region', pathParams: {serviceName: string}): Promise<CloudRegion>;
  /**
  Manage your automated backups
  Create a new automated backup
  **/
  public post(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup', pathParams: {regionName: string, serviceName: string}): Promise<CloudBackup>;
  /**
  retain operations
  Do not expire the project, and retain it. You will have to pay for the resources you will use after using this call
  **/
  public post(path: '/cloud/project/{serviceName}/retain', pathParams: {serviceName: string}): Promise<void>;
  /**
  Missing description
  Create SSH key
  **/
  public post(path: '/cloud/project/{serviceName}/sshkey', pathParams: {serviceName: string}): Promise<CloudSshkeySshKeyDetail>;
  /**
  Missing description
  Get OVH playground session with a stack installed to use the openstack terminal
  **/
  public post(path: '/cloud/project/{serviceName}/stack/{stackId}/client', pathParams: {serviceName: string, stackId: string}): Promise<CloudOpenstackClientSession>;
  /**
  Missing description
  Create container
  **/
  public post(path: '/cloud/project/{serviceName}/storage', pathParams: {serviceName: string}): Promise<CloudStorageContainer>;
  /**
  Missing description
  Access to storage API
  **/
  public post(path: '/cloud/project/{serviceName}/storage/access', pathParams: {serviceName: string}): Promise<CloudStorageContainerAccess>;
  /**
  Missing description
  Add CORS support on your container
  **/
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/cors', pathParams: {containerId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Get a public temporary URL to access to one of your object
  **/
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/publicUrl', pathParams: {containerId: string, serviceName: string}): Promise<CloudStorageContainerObjectTempURL>;
  /**
  Missing description
  Deploy your container files as a static web site
  **/
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/static', pathParams: {containerId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Create openstack user with only access to this container
  **/
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/user', pathParams: {containerId: string, serviceName: string}): Promise<CloudUserUserDetail>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/cloud/project/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  /**
  unleash operations
  Request more quota on your /cloud project
  **/
  public post(path: '/cloud/project/{serviceName}/unleash', pathParams: {serviceName: string}): Promise<void>;
  /**
  Missing description
  Create user
  **/
  public post(path: '/cloud/project/{serviceName}/user', pathParams: {serviceName: string}): Promise<CloudUserUserDetail>;
  /**
  Missing description
  Regenerate user password
  **/
  public post(path: '/cloud/project/{serviceName}/user/{userId}/regeneratePassword', pathParams: {serviceName: string, userId: Number}): Promise<CloudUserUserDetail>;
  /**
  Missing description
  Get token for user
  **/
  public post(path: '/cloud/project/{serviceName}/user/{userId}/token', pathParams: {serviceName: string, userId: Number}): Promise<CloudAuthenticationToken>;
  /**
  Missing description
  Create a volume
  **/
  public post(path: '/cloud/project/{serviceName}/volume', pathParams: {serviceName: string}): Promise<CloudVolumeVolume>;
  /**
  Missing description
  Attach a volume on an instance
  **/
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/attach', pathParams: {serviceName: string, volumeId: string}): Promise<CloudVolumeVolume>;
  /**
  Missing description
  Detach a volume from an instance
  **/
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/detach', pathParams: {serviceName: string, volumeId: string}): Promise<CloudVolumeVolume>;
  /**
  Missing description
  Snapshot a volume
  **/
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/snapshot', pathParams: {serviceName: string, volumeId: string}): Promise<CloudVolumeSnapshot>;
  /**
  Missing description
  Extend a volume
  **/
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/upsize', pathParams: {serviceName: string, volumeId: string}): Promise<CloudVolumeVolume>;
  /**
  Manage the vRack on your Cloud Project
  Order and attach a new vRack on your project
  **/
  public post(path: '/cloud/project/{serviceName}/vrack', pathParams: {serviceName: string}): Promise<CloudOperation>;
  /**
  restore operations
  Create a restore task for session
  **/
  public post(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore', pathParams: {serviceName: string, pcaServiceName: string, sessionId: string}): Promise<PcaTask>;
  /**
  List the pca.Task objects
  Create a cloud archives task
  **/
  public post(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks', pathParams: {serviceName: string, pcaServiceName: string}): Promise<PcaTask>;
  public post(path: PathsCloudPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Cloud ACL
  Delete ACL
  **/
  public delete(path: '/cloud/project/{serviceName}/acl/{accountId}', pathParams: {serviceName: string, accountId: string}): Promise<void>;
  /**
  Cloud alerting consumption
  Delete alerting
  **/
  public delete(path: '/cloud/project/{serviceName}/alerting/{id}', pathParams: {serviceName: string, id: string}): Promise<void>;
  /**
  Missing description
  Delete a group
  **/
  public delete(path: '/cloud/project/{serviceName}/instance/group/{groupId}', pathParams: {groupId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete an instance
  **/
  public delete(path: '/cloud/project/{serviceName}/instance/{instanceId}', pathParams: {instanceId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete an interface
  **/
  public delete(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}', pathParams: {instanceId: string, interfaceId: string, serviceName: string}): Promise<void>;
  /**
  Load balancing IP imported into your OpenStack project
  Delete the import of your load balancing IP into OpenStack. This does not delete the IP LB but close the access of it from OpenStack
  **/
  public delete(path: '/cloud/project/{serviceName}/ipLoadbalancing/{id}', pathParams: {serviceName: string, id: string}): Promise<void>;
  /**
  Missing description
  Delete private network
  **/
  public delete(path: '/cloud/project/{serviceName}/network/private/{networkId}', pathParams: {networkId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete a network subnet
  **/
  public delete(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}', pathParams: {networkId: string, serviceName: string, subnetId: string}): Promise<void>;
  /**
  Missing description
  Delete a backup workflow process
  **/
  public delete(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}', pathParams: {backupWorkflowId: string, regionName: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete a snapshot
  **/
  public delete(path: '/cloud/project/{serviceName}/snapshot/{snapshotId}', pathParams: {serviceName: string, snapshotId: string}): Promise<CloudImageImage>;
  /**
  Missing description
  Delete SSH key
  **/
  public delete(path: '/cloud/project/{serviceName}/sshkey/{keyId}', pathParams: {keyId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete container
  **/
  public delete(path: '/cloud/project/{serviceName}/storage/{containerId}', pathParams: {containerId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete CORS support on your container
  **/
  public delete(path: '/cloud/project/{serviceName}/storage/{containerId}/cors', pathParams: {containerId: string, serviceName: string}, bodyParams?: {origin?: string}): Promise<void>;
  /**
  Missing description
  Delete user
  **/
  public delete(path: '/cloud/project/{serviceName}/user/{userId}', pathParams: {serviceName: string, userId: Number}): Promise<void>;
  /**
  Missing description
  Delete a volume snapshot
  **/
  public delete(path: '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}', pathParams: {serviceName: string, snapshotId: string}): Promise<void>;
  /**
  Missing description
  Delete a volume
  **/
  public delete(path: '/cloud/project/{serviceName}/volume/{volumeId}', pathParams: {serviceName: string, volumeId: string}): Promise<void>;
  /**
  cloud archives sessions
  Create a delete task for all files in session
  **/
  public delete(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}', pathParams: {serviceName: string, pcaServiceName: string, sessionId: string}): Promise<PcaTask>;
  public delete(path: PathsCloudDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
