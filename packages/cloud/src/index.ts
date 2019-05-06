import { ApiCommon } from '@ovh-api/common';
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
 * Possible values for ACL type
 */
export type CloudAclTypeEnum = 'readOnly' | 'readWrite';
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
 * IPPool
 */
export interface CloudNetworkIPPool {
  /**
   * First IP for this region (eg: 192.168.1.12)
   *
   */
  start?: string;
  /**
   * Last IP for this region (eg: 192.168.1.24)
   *
   */
  end?: string;
  /**
   * Region where this subnet will be created
   *
   */
  region?: string;
  /**
   * Enable DHCP
   *
   */
  dhcp?: boolean;
  /**
   * Global network with cidr (eg: 192.168.1.0/24)
   *
   */
  network?: string;
}
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * Instances usage for current month
 */
export interface CloudProjectInstancesUsage {
  /**
   * Total cost for the instances
   *
   */
  total?: OrderPrice;
  /**
   * Instance usage details
   *
   */
  detail?: CloudProjectInstanceUsageDetail[];
}
/**
 * Session
 */
export interface CloudOpenstackClientSession {
  /**
   * Expiration date
   *
   */
  expires?: Date;
  /**
   * Websocket url to use the terminal
   *
   */
  websocket?: string;
  /**
   * Profile of the session
   *
   */
  profile?: CloudOpenstackClientProfile;
  /**
   * Session Id
   *
   */
  id?: string;
}
/**
 * SnapshotStatusEnum
 */
export type CloudVolumeSnapshotStatusEnum = 'creating' | 'available' | 'deleting' | 'error' | 'error_deleting';
/**
 * Possible values for delay between two alerts in seconds
 */
export type CloudAlertingDelayEnum = 10800 | 172800 | 21600 | 259200 | 3600 | 43200 | 604800 | 86400;
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
 * Usage information for current month on your project
 */
export interface CloudProjectBandwidthStorageUsage {
  /**
   * Cost for your storage bandwidth
   *
   */
  total?: OrderPrice;
  /**
   * Region
   *
   */
  region?: string;
  /**
   * Downloaded bytes from your containers
   *
   */
  downloadedBytes?: Number;
}
/**
 * IpStatusEnum
 */
export type CloudIpIpStatusEnum = 'ok' | 'operationPending';
/**
 * UsageForecast
 */
export interface CloudUsageUsageForecast {
  /**
   * Usable credit to pay next bill
   *
   */
  usableCredits?: CloudBillingViewUsedCredits;
  /**
   * Forecast dates (from/to)
   *
   */
  period?: CloudUsagePeriod;
  /**
   * Monthly forecast
   *
   */
  monthlyUsage?: CloudBillingViewMonthlyResources;
  /**
   * Entry last update
   *
   */
  lastUpdate?: Date;
  /**
   * Hourly forecast
   *
   */
  hourlyUsage?: CloudBillingViewHourlyResources;
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
   * Project id
   *
   */
  project_id?: string;
  /**
   * Project order id
   *
   */
  orderId?: Number;
  /**
   * Description of your project
   *
   */
  description?: string;
  /**
   * Expiration date of your project. After this date, your project will be deleted
   *
   */
  expiration?: Date;
  /**
   * Project unleashed
   *
   */
  unleash?: boolean;
  /**
   * Project creation date
   *
   */
  creationDate?: Date;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Current status
   *
   */
  status?: CloudProjectProjectStatus;
}
/**
 * RetrievalStateEnum
 */
export type CloudStorageRetrievalStateEnum = 'sealed' | 'unsealing' | 'unsealed';
/**
 * Section
 */
export interface CloudStackSection {
  /**
   * Title of the guide section
   *
   */
  title?: string;
  /**
   * Steps to follow
   *
   */
  steps?: CloudStackStep[];
  /**
   * Content of the guide section
   *
   */
  content?: CloudStackContent[];
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
 * ProjectForecast
 */
export interface CloudForecastProjectForecast {
  /**
   * Forecast for your whole project
   *
   */
  projectForecast?: OrderPrice;
  /**
   * Time when we got last metric
   *
   */
  lastMetric?: Date;
}
/**
 * UsageCurrent
 */
export interface CloudUsageUsageCurrent {
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
  /**
   * Entry last update
   *
   */
  lastUpdate?: Date;
  /**
   * Hourly usage
   *
   */
  hourlyUsage?: CloudBillingViewHourlyResources;
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
 * Possible values for error code on project creation
 */
export type CloudProjectNewProjectInfoErrorCodeEnum = 'accountNotEligible' | 'invalidPaymentMean' | 'maxProjectsLimitReached' | 'paypalAccountNotVerified' | 'unpaidDebts';
/**
 * MonthlyInstance
 */
export interface CloudBillingViewMonthlyInstance {
  /**
   * Instance reference
   *
   */
  reference?: string;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
  /**
   * Details about monthly instances
   *
   */
  details?: CloudBillingViewMonthlyInstanceDetail[];
  /**
   * Instance region
   *
   */
  region?: string;
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
   * Interface unique identifier
   *
   */
  id?: string;
  /**
   * Network type
   *
   */
  type?: string;
}
/**
 * Possible values for project access type
 */
export type CloudAccessTypeEnum = 'full' | 'restricted';
/**
 * FlavorPlanCodes
 */
export interface CloudFlavorFlavorPlanCodes {
  /**
   * Plan code to order monthly instance
   *
   */
  monthly?: string;
  /**
   * Plan code to order hourly instance
   *
   */
  hourly?: string;
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
 * A structure defining prices for cloud services
 */
export interface CloudPrice {
  /**
   * Prices for snapshots
   *
   */
  snapshots?: CloudSnapshotPrice[];
  /**
   */
  instances?: CloudFlavorPrice[];
  /**
   * Price for incoming bandwidth on archive storage
   *
   */
  bandwidthArchiveIn?: CloudBandwidthStoragePrice[];
  /**
   * Price for bandwidth storage
   *
   */
  bandwidthStorage?: CloudBandwidthStoragePrice[];
  /**
   * Price for outgoing bandwidth on archive storage
   *
   */
  bandwidthArchiveOut?: CloudBandwidthStoragePrice[];
  /**
   * Price for project creation
   *
   */
  projectCreation?: OrderPrice;
  /**
   * Prices for volumes
   *
   */
  volumes?: CloudVolumePrice[];
  /**
   * Price for archive storage
   *
   */
  archive?: CloudArchiveStoragePrice[];
  /**
   * Price for storage
   *
   */
  storage?: CloudStoragePrice[];
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
/**
 * Content
 */
export interface CloudStackContent {
  /**
   * Type of the content
   *
   */
  type?: string;
  /**
   * Content
   *
   */
  content?: string;
}
/**
 * Enum values for ContinentCode
 */
export type CloudRegionContinent = 'EU' | 'NA' | 'US' | 'ASIA';
/**
 * Details about archive storage pricing
 */
export interface CloudArchiveStoragePrice {
  /**
   * Archive region
   *
   */
  region?: string;
  /**
   * Monthly archive storage price (for 1GB stored per month)
   *
   */
  monthlyPrice?: OrderPrice;
}
/**
 * Container
 */
export interface CloudStorageContainer {
  /**
   * Total bytes stored
   *
   */
  storedBytes?: Number;
  /**
   * Storage name
   *
   */
  name?: string;
  /**
   * Storage id
   *
   */
  id?: string;
  /**
   * Total objects stored
   *
   */
  storedObjects?: Number;
  /**
   */
  region?: string;
}
/**
 * Details about snapshot pricing
 */
export interface CloudSnapshotPrice {
  /**
   * Hourly snapshot price (for 1GB per hour)
   *
   */
  price?: OrderPrice;
  /**
   * Monthly flavor price (for 1GB per month)
   *
   */
  monthlyPrice?: OrderPrice;
  /**
   * Snapshot region
   *
   */
  region?: string;
}
/**
 * Snapshots usage for current month
 */
export interface CloudProjectSnapshotsUsage {
  /**
   * Total cost for the snapshots
   *
   */
  total?: OrderPrice;
  /**
   * Snapshots usage details
   *
   */
  detail?: CloudProjectSnapshotUsageDetail[];
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
 * Image
 */
export interface CloudImageImage {
  /**
   * Image visibility
   *
   */
  visibility?: string;
  /**
   * Image creation date
   *
   */
  creationDate?: Date;
  /**
   * Image type
   *
   */
  type?: string;
  /**
   * Minimum disks required to use image
   *
   */
  minDisk?: Number;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Tags about the image
   *
   */
  tags?: string[];
  /**
   * Image usable only for this type of flavor if not null
   *
   */
  flavorType?: string;
  /**
   * Image size (in GiB)
   *
   */
  size?: Number;
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
   * Image id
   *
   */
  id?: string;
  /**
   * Image region
   *
   */
  region?: string;
  /**
   * User to connect with
   *
   */
  user?: string;
  /**
   * Image status
   *
   */
  status?: string;
}
/**
 * Volumes usage for current month
 */
export interface CloudProjectVolumesUsage {
  /**
   * Total cost for the volumes
   *
   */
  total?: OrderPrice;
  /**
   * Volume usage details
   *
   */
  detail?: CloudProjectVolumeUsageDetail[];
}
/**
 * StorageTypeEnum
 */
export type CloudBillingViewStorageTypeEnum = 'pcs' | 'pca';
/**
 * HourlyInstanceOption
 */
export interface CloudBillingViewHourlyInstanceOption {
  /**
   * Instance reference
   *
   */
  reference?: string;
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
  /**
   * Details about hourly instances option
   *
   */
  details?: CloudBillingViewHourlyInstanceOptionDetail[];
  /**
   * Instance region
   *
   */
  region?: string;
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
 * Transfer states
 */
export type CloudPcaTransferStateEnum = 'deleted' | 'transferred' | 'untransferred' | 'waitingAgreementsValidation';
/**
 * Period
 */
export interface CloudUsagePeriod {
  /**
   * Usage from
   *
   */
  from?: Date;
  /**
   * Usage to
   *
   */
  to?: Date;
}
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
 * Voucher validity range
 */
export interface CloudCommonVoucherValidity {
  /**
   * Valid from
   *
   */
  from?: Date;
  /**
   * Valid to
   *
   */
  to?: Date;
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
 * TypeEnum
 */
export type CloudStorageTypeEnum = 'static' | 'public' | 'private';
/**
 * MonthlyInstanceDetail
 */
export interface CloudBillingViewMonthlyInstanceDetail {
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
  /**
   * Monthly instance activation
   *
   */
  activation?: Date;
}
/**
 * Task types for cloud archives
 */
export type CloudPcaFunctionTypeEnum = 'createUser' | 'delete' | 'restore' | 'setPassword' | 'setSessionName' | 'setSshKey';
/**
 * ResourceTypeEnum
 */
export type CloudMigrationResourceTypeEnum = 'instance';
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
 * UsageHistoryDetail
 */
export interface CloudUsageUsageHistoryDetail {
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
  /**
   * Entry last update
   *
   */
  lastUpdate?: Date;
  /**
   * Usage id
   *
   */
  id?: string;
  /**
   * Hourly usage
   *
   */
  hourlyUsage?: CloudBillingViewHourlyResources;
}
/**
 * Token
 */
export interface CloudAuthenticationToken {
  /**
   */
  X-Auth-Token?: string;
  /**
   */
  token?: CloudAuthenticationOpenstackToken;
}
/**
 * Order
 */
export interface CloudOrderOrder {
  /**
   * Order creation date
   *
   */
  date?: Date;
  /**
   * Order id
   *
   */
  orderId?: Number;
  /**
   * Service created
   *
   */
  serviceName?: string;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   */
  status?: CloudOrderStatusEnum;
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
 * NetworkRegionStatusEnum
 */
export type CloudNetworkNetworkRegionStatusEnum = 'ACTIVE' | 'BUILDING';
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
 * Cloud alert on your consumption
 */
export interface CloudAlertingAlert {
  /**
   * Alert sent to
   *
   */
  emails?: string[];
  /**
   * Alert date
   *
   */
  alertDate?: Date;
  /**
   * Alert id
   *
   */
  alertId?: Number;
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
 * UserToken
 */
export interface CloudAuthenticationUserToken {
  /**
   */
  domain?: CloudAuthenticationDomain;
  /**
   */
  name?: string;
  /**
   */
  id?: string;
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
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  value?: Number;
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
 * Details about your region
 */
export interface CloudRegion {
  /**
   * Region name
   *
   */
  name?: string;
  /**
   * Location of the datacenter where the region is
   *
   */
  datacenterLocation?: string;
  /**
   * Details about components status
   *
   */
  services?: CloudComponent[];
  /**
   * Region continent code
   *
   */
  continentCode?: CloudRegionContinent;
  /**
   * Openstack region status
   *
   */
  status?: CloudRegionStatus;
}
/**
 * MonthlyBillingStatusEnum
 */
export type CloudInstanceMonthlyBillingStatusEnum = 'activationPending' | 'ok';
/**
 * RoleEnum
 */
export type CloudUserRoleEnum = 'admin' | 'authentication';
/**
 * Role
 */
export interface CloudRoleRole {
  /**
   * Role Name
   *
   */
  name?: string;
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
}
/**
 * Volume usage
 */
export interface CloudProjectVolumeUsageDetail {
  /**
   * Volume type
   *
   */
  volumeType?: CloudProjectVolumeType;
  /**
   * Volume capacity in gigabytes
   *
   */
  volumeCapacity?: ComplexTypeUnitAndValue<Number>;
  /**
   * Volume price
   *
   */
  price?: OrderPrice;
  /**
   * Volume id
   *
   */
  volumeId?: string;
}
/**
 * Details about volume pricing
 */
export interface CloudVolumePrice {
  /**
   * Hourly volume price (for 1GB per hour)
   *
   */
  price?: OrderPrice;
  /**
   * Volume name
   *
   */
  volumeName?: string;
  /**
   * Volume region
   *
   */
  region?: string;
  /**
   * Monthly volume price (for 1GB per month)
   *
   */
  monthlyPrice?: OrderPrice;
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
 * PaymentTypeEnum
 */
export type CloudUsagePaymentTypeEnum = 'pre' | 'post';
/**
 * Enum values for Status
 */
export type CloudKubeClusterStatus = 'INSTALLING' | 'UPDATING' | 'RESETTING' | 'SUSPENDING' | 'REOPENING' | 'DELETING' | 'SUSPENDED' | 'ERROR' | 'USER_ERROR' | 'USER_QUOTA_ERROR' | 'READY';
/**
 * Snapshot
 */
export interface CloudVolumeSnapshot {
  /**
   * Snapshot size
   *
   */
  size?: Number;
  /**
   * Snapshot name
   *
   */
  name?: string;
  /**
   * Volume source id
   *
   */
  volumeId?: string;
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
   * Snapshot region
   *
   */
  region?: string;
  /**
   * Snapshot creation date
   *
   */
  creationDate?: Date;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Snapshot status
   *
   */
  status?: CloudVolumeSnapshotStatusEnum;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * StatusEnum
 */
export type CloudOrderStatusEnum = 'unpaid' | 'delivering' | 'delivered' | 'unknown';
/**
 * Credit details
 */
export interface CloudProjectNewProjectCredit {
  /**
   * Total credit
   *
   */
  total_credit?: OrderPrice;
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
   * Credit validity
   *
   */
  validity?: CloudCommonVoucherValidity;
  /**
   * Use credits on following products
   *
   */
  products?: string[];
}
/**
 * cloud archives billing
 */
export interface PcaBilling {
  /**
   * Date and time the operation took place
   *
   */
  date?: Date;
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
  /**
   * Billing action is billed.
   *
   */
  billed?: boolean;
  /**
   * Quantity of bytes for operation
   *
   */
  quantity?: Number;
  /**
   * Billing id
   *
   */
  id?: Number;
}
/**
 * UserDetail
 */
export interface CloudUserUserDetail {
  /**
   * User password
   *
   */
  password?: string;
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
   * User creation date
   *
   */
  creationDate?: Date;
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
 * Load balancing IP imported into your OpenStack project
 */
export interface CloudIPLoadbalancing {
  /**
   * validation url
   *
   */
  validationUrl?: string;
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
}
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
 * Instance
 */
export interface CloudInstanceInstance {
  /**
   * Instance image id
   *
   */
  imageId?: string;
  /**
   * Instance creation date
   *
   */
  created?: Date;
  /**
   * Instance flavor id
   *
   */
  flavorId?: string;
  /**
   * Instance name
   *
   */
  name?: string;
  /**
   * Instance monthly billing status
   *
   */
  monthlyBilling?: CloudInstanceMonthlyBilling;
  /**
   * Instance IP addresses
   *
   */
  ipAddresses?: CloudInstanceIpAddress[];
  /**
   * Instance id
   *
   */
  id?: string;
  /**
   * Instance id
   *
   */
  region?: string;
  /**
   * Order plan code
   *
   */
  planCode?: string;
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
 * HourlySnapshot
 */
export interface CloudBillingViewHourlySnapshot {
  /**
   * Volume snapshot details
   *
   */
  volume?: CloudBillingViewVolumeSnapshot;
  /**
   * Instance snapshot details
   *
   */
  instance?: CloudBillingViewInstanceSnapshot;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
  /**
   * Region
   *
   */
  region?: string;
}
/**
 * ContainerDetail
 */
export interface CloudStorageContainerDetail {
  /**
   * Total bytes stored
   *
   */
  storedBytes?: Number;
  /**
   * Origins allowed to make Cross Origin Requests
   *
   */
  cors?: string[];
  /**
   * Public container (DEPRECATED: see containerType)
   *
   */
  public?: boolean;
  /**
   * Container type
   *
   */
  containerType?: CloudStorageTypeEnum;
  /**
   * Objects stored in container
   *
   */
  objects?: CloudStorageContainerObject[];
  /**
   * Container name
   *
   */
  name?: string;
  /**
   * Whether this is an archive container or not
   *
   */
  archive?: boolean;
  /**
   * Container static URL
   *
   */
  staticUrl?: string;
  /**
   * Total objects stored
   *
   */
  storedObjects?: Number;
  /**
   * Container region
   *
   */
  region?: string;
}
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
 * Access
 */
export interface CloudInstanceAccess {
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
   * Login
   *
   */
  login?: string;
  /**
   * Url
   *
   */
  url?: string;
}
/**
 * OVH subsidiaries
 */
export type NichandleOvhSubsidiaryEnum = 'ASIA' | 'AU' | 'CA' | 'CZ' | 'DE' | 'ES' | 'EU' | 'FI' | 'FR' | 'GB' | 'IE' | 'IT' | 'LT' | 'MA' | 'NL' | 'PL' | 'PT' | 'QC' | 'SG' | 'SN' | 'TN' | 'US' | 'WE' | 'WS';
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
   * Transfer state
   *
   */
  state?: CloudPcaTransferStateEnum;
  /**
   * Transfer request date
   *
   */
  transferDate?: Date;
  /**
   * Cloud project id
   *
   */
  projectId?: string;
}
/**
 * Openstack swift credentials for your PCA offer
 */
export interface CloudPcaDownloadCredentials {
  /**
   * Openstack swift container name
   *
   */
  container?: string;
  /**
   * Openstack storage URL
   *
   */
  storageEndpoint?: string;
  /**
   * Openstack user password
   *
   */
  password?: string;
  /**
   * Openstack tenant name
   *
   */
  tenantName?: string;
  /**
   * Openstack authentication URL
   *
   */
  authEndpoint?: string;
  /**
   * Openstack tenant id
   *
   */
  tenantId?: string;
  /**
   * Openstack user login
   *
   */
  login?: string;
  /**
   * Openstack region name
   *
   */
  region?: string;
}
/**
 * UnitQuantity
 */
export type CloudBillingViewUnitQuantity = 'GiB' | 'GiBh' | 'Hour';
/**
 * FixedIp
 */
export interface CloudInstanceInterfaceFixedIp {
  /**
   * Subnetwork Id
   *
   */
  subnetId?: string;
  /**
   * Ip
   *
   */
  ip?: string;
}
/**
 * HourlyStorage
 */
export interface CloudBillingViewHourlyStorage {
  /**
   * Total price
   *
   */
  totalPrice?: Number;
  /**
   * Storage incoming bandwidth details
   *
   */
  incomingBandwidth?: CloudBillingViewBandwidthStorage;
  /**
   * Information about stored data
   *
   */
  stored?: CloudBillingViewStoredStorage;
  /**
   * Storage outgoing bandwidth details
   *
   */
  outgoingBandwidth?: CloudBillingViewBandwidthStorage;
  /**
   * Storage type
   *
   */
  type?: CloudBillingViewStorageTypeEnum;
  /**
   * Region
   *
   */
  region?: string;
}
/**
 * NetworkStatusEnum
 */
export type CloudNetworkNetworkStatusEnum = 'BUILDING' | 'ACTIVE' | 'DELETING';
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
 * InstanceMetricsValue
 */
export interface CloudInstanceInstanceMetricsValue {
  /**
   */
  value?: Number;
  /**
   */
  timestamp?: Number;
}
/**
 * Details about storage pricing
 */
export interface CloudStoragePrice {
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
  /**
   * Monthly storage price (for 1GB stored per month)
   *
   */
  monthlyPrice?: OrderPrice;
}
/**
 * IpSubTypeEnum
 */
export type CloudIpIpSubTypeEnum = 'cloud' | 'ovh';
/**
 * HourlyInstance
 */
export interface CloudBillingViewHourlyInstance {
  /**
   * Instance reference
   *
   */
  reference?: string;
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
  /**
   * Details about hourly instances
   *
   */
  details?: CloudBillingViewHourlyInstanceDetail[];
  /**
   * Instance region
   *
   */
  region?: string;
}
/**
 * cloud archives files
 */
export interface PcaFile {
  /**
   * File SHA256 hash
   *
   */
  SHA256?: string;
  /**
   * File SHA1 hash
   *
   */
  SHA1?: string;
  /**
   * File size, in bytes
   *
   */
  size?: Number;
  /**
   * File name
   *
   */
  name?: string;
  /**
   * File id
   *
   */
  id?: string;
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
  /**
   * File MD5 hash
   *
   */
  MD5?: string;
}
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
 * cloud archives tasks
 */
export interface PcaTask {
  /**
   * Task function
   *
   */
  function?: CloudPcaFunctionTypeEnum;
  /**
   * Host used for task
   *
   */
  ipAddress?: string;
  /**
   * Task date
   *
   */
  todoDate?: Date;
  /**
   * Task comments
   *
   */
  comment?: string;
  /**
   * Task ID
   *
   */
  id?: string;
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
}
/**
 * Cloud Archives Account
 */
export interface PcaAccount {
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
}
/**
 * Cloud alerting consumption
 */
export interface CloudAlerting {
  /**
   * Delay between alerts in seconds
   *
   */
  delay?: CloudAlertingDelayEnum;
  /**
   * Formatted monthly threshold for this alerting
   *
   */
  formattedMonthlyThreshold?: OrderPrice;
  /**
   * Monthly threshold for this alerting
   *
   */
  monthlyThreshold?: Number;
  /**
   * Alerting unique UUID
   *
   */
  id?: string;
  /**
   * Alerting creation date
   *
   */
  creationDate?: Date;
  /**
   * Email to contact
   *
   */
  email?: string;
}
/**
 * Instance usage
 */
export interface CloudProjectInstanceUsageDetail {
  /**
   * Reference
   *
   */
  reference?: string;
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
   * Hourly price
   *
   */
  hourly?: OrderPrice;
  /**
   * Is monthly billing enabled
   *
   */
  monthlyBilling?: boolean;
}
/**
 * HourlyResources
 */
export interface CloudBillingViewHourlyResources {
  /**
   * Details about hourly volumes
   *
   */
  volume?: CloudBillingViewHourlyVolume[];
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
   * Details about hourly storage
   *
   */
  storage?: CloudBillingViewHourlyStorage[];
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
}
/**
 * ContainerObject
 */
export interface CloudStorageContainerObject {
  /**
   * Object retrieval delay (when unsealing)
   *
   */
  retrievalDelay?: Number;
  /**
   * Object size
   *
   */
  size?: Number;
  /**
   * Object retrieval state
   *
   */
  retrievalState?: CloudStorageRetrievalStateEnum;
  /**
   * Object name
   *
   */
  name?: string;
  /**
   * Last modification date
   *
   */
  lastModified?: Date;
  /**
   * Object content type
   *
   */
  contentType?: string;
}
/**
 * Task type available for cloud archives
 */
export type CloudPcaBillingRefEnum = 'backup' | 'delete' | 'restore';
/**
 * Stack
 */
export interface CloudStackStack {
  /**
   * Instructions to start the stack
   *
   */
  instructions?: CloudStackInstructionGuide[];
  /**
   * GIT repository
   *
   */
  gitRepository?: string;
  /**
   * Stack release tag
   *
   */
  release?: string;
  /**
   * Stack name
   *
   */
  name?: string;
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
   * Stack uuid
   *
   */
  uuid?: string;
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
 * HourlyVolume
 */
export interface CloudBillingViewHourlyVolume {
  /**
   * Total GiBh of volume
   *
   */
  quantity?: CloudBillingViewQuantity;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
  /**
   * Detail about volume consumption
   *
   */
  details?: CloudBillingViewHourlyVolumeDetail[];
  /**
   * Region
   *
   */
  region?: string;
  /**
   * Volume type
   *
   */
  type?: string;
}
/**
 * An execution of the backup workflow
 */
export interface CloudExecution {
  /**
   * Last date of cron trigger execution
   *
   */
  executedAt?: Date;
  /**
   * Information about state
   *
   */
  stateInfo?: string;
  /**
   * Execution state
   *
   */
  state?: CloudExecutionState;
}
/**
 * VolumeTypeEnum
 */
export type CloudVolumeVolumeTypeEnum = 'classic' | 'high-speed';
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
 * Role
 */
export interface CloudAuthenticationRole {
  /**
   */
  name?: string;
  /**
   */
  id?: string;
}
/**
 * Enum values for Status
 */
export type CloudServiceStatus = 'UP' | 'DOWN';
/**
 * UserStatusEnum
 */
export type CloudUserUserStatusEnum = 'creating' | 'ok' | 'deleting' | 'deleted';
/**
 * TokenProject
 */
export interface CloudAuthenticationTokenProject {
  /**
   */
  domain?: CloudAuthenticationDomain;
  /**
   */
  name?: string;
  /**
   */
  id?: string;
}
/**
 * OSTypeEnum
 */
export type CloudImageOSTypeEnum = 'linux' | 'bsd' | 'windows';
/**
 * cloud archives sessions
 */
export interface PcaSession {
  /**
   * IP session was made from
   *
   */
  srcIp?: string;
  /**
   * Session size, in bytes
   *
   */
  size?: Number;
  /**
   * Session end date
   *
   */
  endDate?: Date;
  /**
   * Session friendly name
   *
   */
  name?: string;
  /**
   * Session state
   *
   */
  state?: CloudPcaSessionStateEnum;
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
   * Session start date
   *
   */
  startDate?: Date;
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
 * Usage information for current month on your project
 */
export interface CloudProjectStorageUsage {
  /**
   * Storage volume usage
   *
   */
  volume?: CloudProjectStorageVolumeUsage[];
  /**
   * Cost for your storage in all your containers
   *
   */
  total?: OrderPrice;
  /**
   * Storage bandwidth usage
   *
   */
  bandwidth?: CloudProjectBandwidthStorageUsage[];
}
/**
 * Possible values for volume type
 */
export type CloudProjectVolumeType = 'classic' | 'high-speed';
/**
 * Possible values for new project status
 */
export type CloudProjectNewProjectStatusEnum = 'creating' | 'ok' | 'validationPending' | 'waitingAgreementsValidation';
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
 * Enum values for worker nodes reset policy
 */
export type CloudKubeResetWorkerNodesPolicy = 'reinstall' | 'delete';
/**
 * Details about an available region that can be activated on your project
 */
export interface CloudAvailableRegion {
  /**
   * Region name
   *
   */
  name?: string;
  /**
   * Location of the datacenter where the region is
   *
   */
  datacenterLocation?: string;
  /**
   * Region continent code
   *
   */
  continentCode?: CloudRegionContinent;
}
/**
 * InstanceDetail
 */
export interface CloudInstanceInstanceDetail {
  /**
   * Instance flavor
   *
   */
  flavor?: CloudFlavorFlavor;
  /**
   * Instance image
   *
   */
  image?: CloudImageImage;
  /**
   * Instance SSH key
   *
   */
  sshKey?: CloudSshkeySshKeyDetail;
  /**
   * Instance creation date
   *
   */
  created?: Date;
  /**
   * Instance name
   *
   */
  name?: string;
  /**
   * Instance monthly billing status
   *
   */
  monthlyBilling?: CloudInstanceMonthlyBilling;
  /**
   * Instance IP addresses
   *
   */
  ipAddresses?: CloudInstanceIpAddress[];
  /**
   * Instance id
   *
   */
  id?: string;
  /**
   * Instance id
   *
   */
  region?: string;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Instance status
   *
   */
  status?: CloudInstanceInstanceStatusEnum;
}
/**
 * CloudIp
 */
export interface CloudIpCloudIp {
  /**
   * Ip
   *
   */
  ip?: string;
  /**
   * Ip id
   *
   */
  id?: string;
  /**
   * Ip type
   *
   */
  type?: string;
  /**
   * Ip status
   *
   */
  status?: CloudIpIpStatusEnum;
}
/**
 * Task status for cloud archives
 */
export type CloudPcaTaskStateEnum = 'cancelled' | 'deleted' | 'doing' | 'doingBackup' | 'doingDelete' | 'doingRestore' | 'done' | 'error' | 'failedDelete' | 'failedRestore' | 'new' | 'tagging' | 'toBackup' | 'toDelete' | 'toRestore' | 'todo';
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
 * Quotas
 */
export interface CloudQuotaQuotas {
  /**
   * Quotas on volumes
   *
   */
  volume?: CloudQuotaVolumeQuotas;
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
}
/**
 * An operation is an async process on your Project
 */
export interface CloudOperation {
  /**
   * The creation date of the operation
   *
   */
  createdAt?: Date;
  /**
   * The completed date of the operation
   *
   */
  completedAt?: Date;
  /**
   * Affected regions of the operation
   *
   */
  regions?: string[];
  /**
   * The progression in percentage of the operation
   *
   */
  progress?: Number;
  /**
   * The action of the operation
   *
   */
  action?: string;
  /**
   * The started date of the operation
   *
   */
  startedAt?: Date;
  /**
   * Unique ID to describe the operation
   *
   */
  id?: string;
  /**
   * Operation status
   *
   */
  status?: CloudOperationStatus;
}
/**
 * MonthlyBilling
 */
export interface CloudInstanceMonthlyBilling {
  /**
   * Monthly billing activated since
   *
   */
  since?: Date;
  /**
   * Monthly billing status
   *
   */
  status?: CloudInstanceMonthlyBillingStatusEnum;
}
/**
 * InstructionGuide
 */
export interface CloudStackInstructionGuide {
  /**
   * Guide language
   *
   */
  language?: string;
  /**
   * Guide title
   *
   */
  title?: string;
  /**
   * Guide introduction content
   *
   */
  content?: CloudStackContent[];
  /**
   * Sections of the guide
   *
   */
  sections?: CloudStackSection[];
}
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
 * A vRack allows to connect your OVH infrastructures accross products and datacenters
 */
export interface CloudVrack {
  /**
   * Name of your vRack
   *
   */
  name?: string;
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
}
/**
 * HourlyInstanceOptionDetail
 */
export interface CloudBillingViewHourlyInstanceOptionDetail {
  /**
   * Quantity of instance hours running with this option
   *
   */
  quantity?: CloudBillingViewQuantity;
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
 * Possible values for bill type
 */
export type CloudProjectBillTypeEnum = 'creditPurchased' | 'monthlyConsumption' | 'monthlyInstanceActivation';
/**
 * SshKey
 */
export interface CloudSshkeySshKey {
  /**
   * SSH key regions
   *
   */
  regions?: string[];
  /**
   * SSH key name
   *
   */
  name?: string;
  /**
   * SSH key id
   *
   */
  id?: string;
  /**
   * SSH public key
   *
   */
  publicKey?: string;
}
/**
 * Description not available
 */
export type CloudKubeVersion = '1.11' | '1.12';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * ApplicationAccessStateEnum
 */
export type CloudInstanceApplicationAccessStateEnum = 'installing' | 'ok';
/**
 * Managed Kubernetes cluster description
 */
export interface CloudKubeCluster {
  /**
   * Cluster nodes URL
   *
   */
  nodesUrl?: string;
  /**
   * True if all nodes and control-plane are up to date
   *
   */
  isUpToDate?: boolean;
  /**
   * Cluster creation date
   *
   */
  createdAt?: Date;
  /**
   * Cluster last update date
   *
   */
  updatePolicy?: string;
  /**
   * Cluster name
   *
   */
  name?: string;
  /**
   * True if control-plane is up to date
   *
   */
  controlPlaneIsUpToDate?: boolean;
  /**
   * Cluster ID
   *
   */
  id?: string;
  /**
   * Kubernetes version of your cluster
   *
   */
  version?: string;
  /**
   * Management URL of your cluster
   *
   */
  url?: string;
  /**
   * Cluster last update date
   *
   */
  updatedAt?: Date;
  /**
   * Cluster status
   *
   */
  status?: CloudKubeClusterStatus;
}
/**
 * OpenrcVersionEnum
 */
export type CloudUserOpenrcVersionEnum = 'v2.0' | 'v3';
/**
 * Node installed on your cluster
 */
export interface CloudKubeNode {
  /**
   * True if the node is up to date
   *
   */
  isUpToDate?: boolean;
  /**
   * Flavor name
   *
   */
  flavor?: string;
  /**
   * Creation date
   *
   */
  createdAt?: Date;
  /**
   * Public Cloud instance id
   *
   */
  instanceId?: string;
  /**
   * Node name
   *
   */
  name?: string;
  /**
   * Node ID
   *
   */
  id?: string;
  /**
   * Node version
   *
   */
  version?: string;
  /**
   * Status
   *
   */
  status?: CloudKubeNodeStatus;
  /**
   * Node last update date
   *
   */
  updatedAt?: Date;
}
/**
 * Usage information for current month on your project
 */
export interface CloudProjectCurrentUsage {
  /**
   * Snapshots usage
   *
   */
  snapshots?: CloudProjectSnapshotsUsage;
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
   * Instances usage
   *
   */
  instances?: CloudProjectInstancesUsage;
  /**
   * Volumes usage
   *
   */
  volumes?: CloudProjectVolumesUsage;
  /**
   * Storage usage
   *
   */
  storage?: CloudProjectStorageUsage;
}
/**
 * UsageHistory
 */
export interface CloudUsageUsageHistory {
  /**
   * Usage dates (from/to)
   *
   */
  period?: CloudUsagePeriod;
  /**
   * Entry last update
   *
   */
  lastUpdate?: Date;
  /**
   * Usage id
   *
   */
  id?: string;
}
/**
 * FailoverIp
 */
export interface CloudIpFailoverIp {
  /**
   * Instance where ip is routed to
   *
   */
  routedTo?: string;
  /**
   * Ip
   *
   */
  ip?: string;
  /**
   * Ip location
   *
   */
  geoloc?: string;
  /**
   * Current operation progress in percent
   *
   */
  progress?: Number;
  /**
   * IP block
   *
   */
  block?: string;
  /**
   * IP sub type
   *
   */
  subType?: CloudIpIpSubTypeEnum;
  /**
   * Ip id
   *
   */
  id?: string;
  /**
   * Ip status
   *
   */
  status?: CloudIpIpStatusEnum;
  /**
   * Ip continent
   *
   */
  continentCode?: string;
}
/**
 * InstanceGroupTypeEnum
 */
export type CloudInstancegroupInstanceGroupTypeEnum = 'affinity' | 'anti-affinity';
/**
 * Storage volume used on your project
 */
export interface CloudProjectStorageVolumeUsage {
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
  /**
   * Region
   *
   */
  region?: string;
}
/**
 * Enum values for Status
 */
export type CloudRegionStatus = 'UP' | 'DOWN' | 'MAINTENANCE';
/**
 * Possible values for project status
 */
export type CloudProjectProjectStatus = 'creating' | 'deleted' | 'deleting' | 'ok' | 'suspended';
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
 * List your automated backups
 */
export interface CloudBackup {
  /**
   * Workflow cron pattern
   *
   */
  cron?: string;
  /**
   * Creation date of the workflow
   *
   */
  createdAt?: Date;
  /**
   * Executions logs
   *
   */
  executions?: CloudExecution[];
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
  /**
   * Workflow id
   *
   */
  id?: string;
  /**
   * Backup name
   *
   */
  backupName?: string;
}
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
/**
 * Instance monthly billing details
 */
export interface CloudProjectInstanceMonthlyBilling {
  /**
   * Monthly billing activation date
   *
   */
  activatedOn?: Date;
  /**
   * Cost
   *
   */
  cost?: OrderPrice;
}
/**
 * Subnet
 */
export interface CloudNetworkSubnet {
  /**
   * List of ip pools allocated in subnet
   *
   */
  ipPools?: CloudNetworkIPPool[];
  /**
   * Gateway IP in the subnet
   *
   */
  gatewayIp?: string;
  /**
   * Subnet CIDR
   *
   */
  cidr?: string;
  /**
   * Subnet id
   *
   */
  id?: string;
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
 * RightEnum
 */
export type CloudStorageRightEnum = 'all' | 'read' | 'write';
/**
 * Session state available for cloud archives
 */
export type CloudPcaSessionStateEnum = 'doing' | 'doingBackup' | 'doingDelete' | 'doingRestore' | 'done' | 'error' | 'failedDelete' | 'failedRestore' | 'new' | 'tagging' | 'toBackup' | 'toDelete' | 'toRestore';
/**
 * Endpoint
 */
export interface CloudAuthenticationEndpoint {
  /**
   */
  legacy_endpoint_id?: string;
  /**
   */
  service_id?: string;
  /**
   */
  region_id?: string;
  /**
   */
  id?: string;
  /**
   */
  interface?: string;
  /**
   */
  url?: string;
}
/**
 * Enum values for UpdatePolicy
 */
export type CloudKubeUpdatePolicy = 'ALWAYS_UPDATE' | 'MINIMAL_DOWNTIME' | 'NEVER_UPDATE';
/**
 * Cloud credit
 */
export interface CloudCredit {
  /**
   * Used credit
   *
   */
  used_credit?: OrderPrice;
  /**
   * Total credit
   *
   */
  total_credit?: OrderPrice;
  /**
   * Voucher code
   *
   */
  voucher?: string;
  /**
   * Credit description
   *
   */
  description?: string;
  /**
   * Credit bill id
   *
   */
  bill?: string;
  /**
   * Credit validity
   *
   */
  validity?: CloudCommonVoucherValidity;
  /**
   * Credit id
   *
   */
  id?: Number;
  /**
   * Available credit
   *
   */
  available_credit?: OrderPrice;
  /**
   * Use credits on following products
   *
   */
  products?: string[];
}
/**
 * MetricsPeriod
 */
export type CloudInstanceMetricsPeriod = 'lastday' | 'lastmonth' | 'lastweek' | 'lastyear' | 'today';
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
 * Enum values for Status
 */
export type CloudKubeNodeStatus = 'INSTALLING' | 'UPDATING' | 'RESETTING' | 'SUSPENDING' | 'REOPENING' | 'DELETING' | 'SUSPENDED' | 'ERROR' | 'USER_ERROR' | 'USER_QUOTA_ERROR' | 'USER_NODE_NOT_FOUND_ERROR' | 'USER_NODE_SUSPENDED_SERVICE' | 'READY';
/**
 * Volume
 */
export interface CloudVolumeVolume {
  /**
   * Volume size (in GB)
   *
   */
  size?: Number;
  /**
   * Volume name
   *
   */
  name?: string;
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
   * Volume type
   *
   */
  type?: CloudVolumeVolumeTypeEnum;
  /**
   * Volume attached to instances id
   *
   */
  attachedTo?: string[];
  /**
   * Volume region
   *
   */
  region?: string;
  /**
   * Volume creation date
   *
   */
  creationDate?: Date;
  /**
   * Volume bootable
   *
   */
  bootable?: boolean;
  /**
   * Order plan code
   *
   */
  planCode?: string;
  /**
   * Volume status
   *
   */
  status?: string;
}
/**
 * Migration
 */
export interface CloudMigrationMigration {
  /**
   * The planned date of the migration
   *
   */
  date?: Date;
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
 * New cloud project
 */
export interface CloudProjectNewProject {
  /**
   * Cloud project order id
   *
   */
  orderId?: Number;
  /**
   * Agreement to valid
   *
   */
  agreements?: Number[];
  /**
   * Cloud project description
   *
   */
  description?: string;
  /**
   * Cloud project
   *
   */
  project?: string;
  /**
   * Cloud credit
   *
   */
  credit?: CloudProjectNewProjectCredit;
  /**
   * Project creation status
   *
   */
  status?: CloudProjectNewProjectStatusEnum;
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
 * NetworkTypeEnum
 */
export type CloudNetworkNetworkTypeEnum = 'public' | 'private';
/**
 * OpenstackToken
 */
export interface CloudAuthenticationOpenstackToken {
  /**
   */
  expires_at?: Date;
  /**
   */
  catalog?: CloudAuthenticationCatalog[];
  /**
   */
  methods?: string[];
  /**
   */
  roles?: CloudAuthenticationRole[];
  /**
   */
  project?: CloudAuthenticationTokenProject;
  /**
   */
  issued_at?: Date;
  /**
   */
  user?: CloudAuthenticationUserToken;
}
/**
 * Enum values for Status
 */
export type CloudOperationStatus = 'created' | 'in-progress' | 'completed' | 'in-error' | 'unknown';
/**
 * RebootTypeEnum
 */
export type CloudInstanceRebootTypeEnum = 'soft' | 'hard';
/**
 * IpAddress
 */
export interface CloudInstanceIpAddress {
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
   * Gateway IP
   *
   */
  gatewayIp?: string;
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
 * Task type available for cloud archives
 */
export type CloudPcaTaskTypeEnum = 'delete' | 'restore';
/**
 * User
 */
export interface CloudUserUser {
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
   * User creation date
   *
   */
  creationDate?: Date;
  /**
   * Username
   *
   */
  username?: string;
  /**
   * User status
   *
   */
  status?: CloudUserUserStatusEnum;
}
/**
 * InstanceStatusEnum
 */
export type CloudInstanceInstanceStatusEnum = 'ACTIVE' | 'BUILDING' | 'DELETED' | 'ERROR' | 'HARD_REBOOT' | 'PASSWORD' | 'PAUSED' | 'REBOOT' | 'REBUILD' | 'RESCUED' | 'RESIZED' | 'REVERT_RESIZE' | 'SOFT_DELETED' | 'STOPPED' | 'SUSPENDED' | 'UNKNOWN' | 'VERIFY_RESIZE' | 'MIGRATING' | 'RESIZE' | 'BUILD' | 'SHUTOFF' | 'RESCUE' | 'SHELVED' | 'SHELVED_OFFLOADED' | 'RESCUING' | 'UNRESCUING' | 'SNAPSHOTTING' | 'RESUMING';
/**
 * HourlyInstanceBandwidth
 */
export interface CloudBillingViewHourlyInstanceBandwidth {
  /**
   * Total price
   *
   */
  totalPrice?: Number;
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
}
/**
 * Flavor
 */
export interface CloudFlavorFlavor {
  /**
   * Max capacity of outbound traffic in Mbit/s
   *
   */
  outboundBandwidth?: Number;
  /**
   * Number of disks
   *
   */
  disk?: Number;
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
   * Available in stock
   *
   */
  available?: boolean;
  /**
   * Plan codes to order instances
   *
   */
  planCodes?: CloudFlavorFlavorPlanCodes;
  /**
   * OS to install on
   *
   */
  osType?: string;
  /**
   * Flavor id
   *
   */
  id?: string;
  /**
   * Flavor region
   *
   */
  region?: string;
  /**
   * Number of VCPUs
   *
   */
  vcpus?: Number;
  /**
   * Flavor type
   *
   */
  type?: string;
  /**
   * Ram quantity (Gio)
   *
   */
  ram?: Number;
}
/**
 * UsedCredit
 */
export interface CloudBillingViewUsedCredit {
  /**
   * Total credit used
   *
   */
  usedAmount?: Number;
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
}
/**
 * Step
 */
export interface CloudStackStep {
  /**
   * Title of the step
   *
   */
  title?: string;
  /**
   * Content of the step
   *
   */
  content?: CloudStackContent[];
}
/**
 * VolumeQuotas
 */
export interface CloudQuotaVolumeQuotas {
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
  /**
   * Maximum total volume capacity allowed in your project
   *
   */
  maxGigabytes?: Number;
}
/**
 * MetricsType
 */
export type CloudInstanceMetricsType = 'mem:used' | 'mem:max' | 'cpu:used' | 'cpu:max' | 'net:tx' | 'net:rx';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Network
 */
export interface CloudNetworkNetwork {
  /**
   * Details about private network in region
   *
   */
  regions?: CloudNetworkNetworkRegion[];
  /**
   * Network VLAN id
   *
   */
  vlanId?: Number;
  /**
   * Network name
   *
   */
  name?: string;
  /**
   * Network id
   *
   */
  id?: string;
  /**
   * Network type
   *
   */
  type?: CloudNetworkNetworkTypeEnum;
  /**
   * Network status
   *
   */
  status?: CloudNetworkNetworkStatusEnum;
}
/**
 * MonthlyInstanceOption
 */
export interface CloudBillingViewMonthlyInstanceOption {
  /**
   * Instance reference
   *
   */
  reference?: string;
  /**
   * Total price
   *
   */
  totalPrice?: Number;
  /**
   * Details about monthly instances
   *
   */
  details?: CloudBillingViewMonthlyInstanceOptionDetail[];
  /**
   * Instance region
   *
   */
  region?: string;
}
/**
 * UsedCredits
 */
export interface CloudBillingViewUsedCredits {
  /**
   * Total credit that will be used to pay the bill
   *
   */
  totalCredit?: Number;
  /**
   * Details about credits that will be used
   *
   */
  details?: CloudBillingViewUsedCredit[];
}
/**
 * Enum values for State
 */
export type CloudExecutionState = 'IDLE' | 'RUNNING' | 'SUCCESS' | 'ERROR' | 'PAUSED';
/**
 * InstanceGroup
 */
export interface CloudInstancegroupInstanceGroup {
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
   * Instance group id
   *
   */
  id?: string;
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
 * UsageBill
 */
export interface CloudUsageUsageBill {
  /**
   * ID of the bill
   *
   */
  bill_id?: string;
  /**
   * Total amount of the bill, credits not taken into account
   *
   */
  total?: Number;
  /**
   * Payment type
   *
   */
  payment_type?: CloudUsagePaymentTypeEnum;
  /**
   * Amount of the bill that accounts for services for the usage period, credits not taken into account
   *
   */
  part?: Number;
  /**
   * Amount of credits used in this bill (not necessarily on part)
   *
   */
  credit?: Number;
}
/**
 * InstanceQuotas
 */
export interface CloudQuotaInstanceQuotas {
  /**
   */
  maxRam?: Number;
  /**
   * Current used ram
   *
   */
  usedRAM?: Number;
  /**
   * Maximum total cores allowed in your project
   *
   */
  maxCores?: Number;
  /**
   * Current used instances
   *
   */
  usedInstances?: Number;
  /**
   * Current used cores number
   *
   */
  usedCores?: Number;
  /**
   * Maximum total cores allowed in your project
   *
   */
  maxInstances?: Number;
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
 * SshKeyDetail
 */
export interface CloudSshkeySshKeyDetail {
  /**
   * SSH key regions
   *
   */
  regions?: string[];
  /**
   * SSH key name
   *
   */
  name?: string;
  /**
   * SSH key id
   *
   */
  id?: string;
  /**
   * SSH public key
   *
   */
  publicKey?: string;
  /**
   * SSH key fingerprint
   *
   */
  fingerPrint?: string;
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
 * Details about flavor pricing
 */
export interface CloudFlavorPrice {
  /**
   * Flavor name
   *
   */
  flavorName?: string;
  /**
   * Hourly flavor price
   *
   */
  price?: OrderPrice;
  /**
   * Flavor id
   *
   */
  flavorId?: string;
  /**
   * Flavor region
   *
   */
  region?: string;
  /**
   * Monthly flavor price
   *
   */
  monthlyPrice?: OrderPrice;
}
/**
 * ContainerObjectTempURL
 */
export interface CloudStorageContainerObjectTempURL {
  /**
   * Temporary URL to get object
   *
   */
  getURL?: string;
  /**
   * Temporary URL expiration date
   *
   */
  expirationDate?: Date;
}
type PathscloudGET = '/cloud/createProjectInfo' | 
'/cloud/subsidiaryPrice' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/billing' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/usage' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/tasks' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions' | 
'/cloud/{serviceName}/pca/{pcaServiceName}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos' | 
'/cloud/{serviceName}/pca' | 
'/cloud/project' | 
'/cloud/project/{serviceName}/forecast' | 
'/cloud/project/{serviceName}/network/public' | 
'/cloud/project/{serviceName}/network/private' | 
'/cloud/project/{serviceName}/network/private/{networkId}/subnet' | 
'/cloud/project/{serviceName}/network/private/{networkId}' | 
'/cloud/project/{serviceName}/consumption' | 
'/cloud/project/{serviceName}/alerting' | 
'/cloud/project/{serviceName}/alerting/{id}' | 
'/cloud/project/{serviceName}/alerting/{id}/alert' | 
'/cloud/project/{serviceName}/alerting/{id}/alert/{alertId}' | 
'/cloud/project/{serviceName}/snapshot' | 
'/cloud/project/{serviceName}/snapshot/{snapshotId}' | 
'/cloud/project/{serviceName}/serviceInfos' | 
'/cloud/project/{serviceName}/sshkey' | 
'/cloud/project/{serviceName}/sshkey/{keyId}' | 
'/cloud/project/{serviceName}/volume/{volumeId}' | 
'/cloud/project/{serviceName}/volume' | 
'/cloud/project/{serviceName}/volume/snapshot' | 
'/cloud/project/{serviceName}/volume/snapshot/{snapshotId}' | 
'/cloud/project/{serviceName}/ipLoadbalancing' | 
'/cloud/project/{serviceName}/ipLoadbalancing/{id}' | 
'/cloud/project/{serviceName}/region' | 
'/cloud/project/{serviceName}/region/{regionName}' | 
'/cloud/project/{serviceName}/region/{regionName}/workflow/backup' | 
'/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}' | 
'/cloud/project/{serviceName}/ip' | 
'/cloud/project/{serviceName}/ip/failover' | 
'/cloud/project/{serviceName}/ip/failover/{id}' | 
'/cloud/project/{serviceName}/vrack' | 
'/cloud/project/{serviceName}/operation/{operationId}' | 
'/cloud/project/{serviceName}/operation' | 
'/cloud/project/{serviceName}/usage/current' | 
'/cloud/project/{serviceName}/usage/forecast' | 
'/cloud/project/{serviceName}/usage/history' | 
'/cloud/project/{serviceName}/usage/history/{usageId}' | 
'/cloud/project/{serviceName}/user' | 
'/cloud/project/{serviceName}/user/{userId}/rclone' | 
'/cloud/project/{serviceName}/user/{userId}/openrc' | 
'/cloud/project/{serviceName}/user/{userId}' | 
'/cloud/project/{serviceName}/migration' | 
'/cloud/project/{serviceName}/migration/{migrationId}' | 
'/cloud/project/{serviceName}/instance/{instanceId}/monitoring' | 
'/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}' | 
'/cloud/project/{serviceName}/instance/{instanceId}/interface' | 
'/cloud/project/{serviceName}/instance/{instanceId}' | 
'/cloud/project/{serviceName}/instance' | 
'/cloud/project/{serviceName}/instance/group/{groupId}' | 
'/cloud/project/{serviceName}/instance/group' | 
'/cloud/project/{serviceName}/regionAvailable' | 
'/cloud/project/{serviceName}/flavor' | 
'/cloud/project/{serviceName}/flavor/{flavorId}' | 
'/cloud/project/{serviceName}/storage' | 
'/cloud/project/{serviceName}/storage/access' | 
'/cloud/project/{serviceName}/storage/{containerId}' | 
'/cloud/project/{serviceName}/stack/{stackId}' | 
'/cloud/project/{serviceName}/stack' | 
'/cloud/project/{serviceName}/bill' | 
'/cloud/project/{serviceName}/image' | 
'/cloud/project/{serviceName}/image/{imageId}' | 
'/cloud/project/{serviceName}/quota' | 
'/cloud/project/{serviceName}/credit' | 
'/cloud/project/{serviceName}/credit/{id}' | 
'/cloud/project/{serviceName}/acl/{accountId}' | 
'/cloud/project/{serviceName}/acl' | 
'/cloud/project/{serviceName}' | 
'/cloud' | 
'/cloud/order' | 
'/cloud/price';

type PathscloudPUT = '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos' | 
'/cloud/project/{serviceName}/network/private/{networkId}' | 
'/cloud/project/{serviceName}/alerting/{id}' | 
'/cloud/project/{serviceName}/serviceInfos' | 
'/cloud/project/{serviceName}/volume/{volumeId}' | 
'/cloud/project/{serviceName}/migration/{migrationId}' | 
'/cloud/project/{serviceName}/instance/{instanceId}' | 
'/cloud/project/{serviceName}/storage/{containerId}' | 
'/cloud/project/{serviceName}';

type PathscloudPOST = '/cloud/{serviceName}/pca/{pcaServiceName}/tasks' | 
'/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore' | 
'/cloud/project/{serviceName}/openstackClient' | 
'/cloud/project/{serviceName}/network/private' | 
'/cloud/project/{serviceName}/network/private/{networkId}/subnet' | 
'/cloud/project/{serviceName}/network/private/{networkId}/region' | 
'/cloud/project/{serviceName}/alerting' | 
'/cloud/project/{serviceName}/sshkey' | 
'/cloud/project/{serviceName}/unleash' | 
'/cloud/project/{serviceName}/volume/{volumeId}/detach' | 
'/cloud/project/{serviceName}/volume/{volumeId}/snapshot' | 
'/cloud/project/{serviceName}/volume/{volumeId}/upsize' | 
'/cloud/project/{serviceName}/volume/{volumeId}/attach' | 
'/cloud/project/{serviceName}/volume' | 
'/cloud/project/{serviceName}/ipLoadbalancing' | 
'/cloud/project/{serviceName}/ipLoadbalancing/{id}/renew' | 
'/cloud/project/{serviceName}/ipLoadbalancing/{id}/validate' | 
'/cloud/project/{serviceName}/region' | 
'/cloud/project/{serviceName}/region/{regionName}/workflow/backup' | 
'/cloud/project/{serviceName}/ip/failover/{id}/attach' | 
'/cloud/project/{serviceName}/vrack' | 
'/cloud/project/{serviceName}/cancel' | 
'/cloud/project/{serviceName}/user' | 
'/cloud/project/{serviceName}/user/{userId}/token' | 
'/cloud/project/{serviceName}/user/{userId}/regeneratePassword' | 
'/cloud/project/{serviceName}/terminate' | 
'/cloud/project/{serviceName}/instance/{instanceId}/snapshot' | 
'/cloud/project/{serviceName}/instance/{instanceId}/applicationAccess' | 
'/cloud/project/{serviceName}/instance/{instanceId}/interface' | 
'/cloud/project/{serviceName}/instance/{instanceId}/resize' | 
'/cloud/project/{serviceName}/instance/{instanceId}/vnc' | 
'/cloud/project/{serviceName}/instance/{instanceId}/rescueMode' | 
'/cloud/project/{serviceName}/instance/{instanceId}/reinstall' | 
'/cloud/project/{serviceName}/instance/{instanceId}/resume' | 
'/cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling' | 
'/cloud/project/{serviceName}/instance/{instanceId}/reboot' | 
'/cloud/project/{serviceName}/instance' | 
'/cloud/project/{serviceName}/instance/bulk' | 
'/cloud/project/{serviceName}/instance/group' | 
'/cloud/project/{serviceName}/storage' | 
'/cloud/project/{serviceName}/storage/access' | 
'/cloud/project/{serviceName}/storage/{containerId}/static' | 
'/cloud/project/{serviceName}/storage/{containerId}/publicUrl' | 
'/cloud/project/{serviceName}/storage/{containerId}/cors' | 
'/cloud/project/{serviceName}/storage/{containerId}/user' | 
'/cloud/project/{serviceName}/changeContact' | 
'/cloud/project/{serviceName}/confirmTermination' | 
'/cloud/project/{serviceName}/stack/{stackId}/client' | 
'/cloud/project/{serviceName}/credit' | 
'/cloud/project/{serviceName}/acl' | 
'/cloud/project/{serviceName}/retain' | 
'/cloud/createProject';

type PathscloudDELETE = '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}' | 
'/cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}' | 
'/cloud/project/{serviceName}/network/private/{networkId}' | 
'/cloud/project/{serviceName}/alerting/{id}' | 
'/cloud/project/{serviceName}/snapshot/{snapshotId}' | 
'/cloud/project/{serviceName}/sshkey/{keyId}' | 
'/cloud/project/{serviceName}/volume/{volumeId}' | 
'/cloud/project/{serviceName}/volume/snapshot/{snapshotId}' | 
'/cloud/project/{serviceName}/ipLoadbalancing/{id}' | 
'/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}' | 
'/cloud/project/{serviceName}/user/{userId}' | 
'/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}' | 
'/cloud/project/{serviceName}/instance/{instanceId}' | 
'/cloud/project/{serviceName}/instance/group/{groupId}' | 
'/cloud/project/{serviceName}/storage/{containerId}' | 
'/cloud/project/{serviceName}/storage/{containerId}/cors' | 
'/cloud/project/{serviceName}/acl/{accountId}';

class Apicloud extends ApiCommon {
  /**
  Get information about a cloud project creation
  Get information about a cloud project creation
  **/
  public get(path: '/cloud/createProjectInfo', pathParams: null, queryParams: {voucher?: string}): Promise<CloudProjectNewProjectInfo>;
  /**
  Get services prices for a subsidiary
  Get services prices for a subsidiary
  **/
  public get(path: '/cloud/subsidiaryPrice', pathParams: null, queryParams: {region?: string, ovhSubsidiary?: NichandleOvhSubsidiaryEnum, flavorId?: string}): Promise<CloudPrice>;
  /**
  List the pca.Billing objects
  cloud Archives billing items
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/billing', pathParams: {serviceName?: string, pcaServiceName?: string}, queryParams: {'date.to'?: Date, 'date.from'?: Date, billed?: boolean}): Promise<Number[]>;
  /**
  cloud archives billing
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}', pathParams: {serviceName?: string, pcaServiceName?: string, billingId?: Number}, queryParams: null): Promise<PcaBilling>;
  /**
  usage operations
  View account current total sessions usage (bytes)
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/usage', pathParams: {serviceName?: string, pcaServiceName?: string}, queryParams: null): Promise<Number>;
  /**
  List the pca.Task objects
  cloud archives tasks for account
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks', pathParams: {serviceName?: string, pcaServiceName?: string}, queryParams: {'todoDate.from'?: Date, 'todoDate.to'?: Date, function?: CloudPcaFunctionTypeEnum, status?: CloudPcaTaskStateEnum}): Promise<string[]>;
  /**
  cloud archives tasks
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}', pathParams: {serviceName?: string, pcaServiceName?: string, taskId?: string}, queryParams: null): Promise<PcaTask>;
  /**
  List the pca.File objects
  cloud archives files in session
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files', pathParams: {serviceName?: string, pcaServiceName?: string, sessionId?: string}, queryParams: {name?: string}): Promise<string[]>;
  /**
  cloud archives files
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}', pathParams: {serviceName?: string, pcaServiceName?: string, sessionId?: string, fileId?: string}, queryParams: null): Promise<PcaFile>;
  /**
  cloud archives sessions
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}', pathParams: {serviceName?: string, pcaServiceName?: string, sessionId?: string}, queryParams: null): Promise<PcaSession>;
  /**
  List the pca.Session objects
  cloud archives sessions for account
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions', pathParams: {serviceName?: string, pcaServiceName?: string}, queryParams: {name?: string}): Promise<string[]>;
  /**
  Cloud Archives Account
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}', pathParams: {serviceName?: string, pcaServiceName?: string}, queryParams: null): Promise<PcaAccount>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos', pathParams: {serviceName?: string, pcaServiceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Operations about the PUBLICCLOUD service
  List available services
  **/
  public get(path: '/cloud/{serviceName}/pca', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Operations about the PUBLICCLOUD service
  List available services
  **/
  public get(path: '/cloud/project', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Missing description
  Get your consumption forecast
  **/
  public get(path: '/cloud/project/{serviceName}/forecast', pathParams: {serviceName?: string}, queryParams: {toDate?: Date}): Promise<CloudForecastProjectForecast>;
  /**
  Missing description
  Get public networks
  **/
  public get(path: '/cloud/project/{serviceName}/network/public', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudNetworkNetwork[]>;
  /**
  Missing description
  Get private networks
  **/
  public get(path: '/cloud/project/{serviceName}/network/private', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudNetworkNetwork[]>;
  /**
  Missing description
  Get network subnets
  **/
  public get(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet', pathParams: {networkId?: string, serviceName?: string}, queryParams: null): Promise<CloudNetworkSubnet[]>;
  /**
  Missing description
  Get private network
  **/
  public get(path: '/cloud/project/{serviceName}/network/private/{networkId}', pathParams: {networkId?: string, serviceName?: string}, queryParams: null): Promise<CloudNetworkNetwork>;
  /**
  consumption operations
  Get your project consumption
  **/
  public get(path: '/cloud/project/{serviceName}/consumption', pathParams: {serviceName?: string}, queryParams: {from?: Date, to?: Date}): Promise<CloudProjectProjectUsage>;
  /**
  List the cloud.Alerting objects
  Manage alerts on your consumption
  **/
  public get(path: '/cloud/project/{serviceName}/alerting', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Cloud alerting consumption
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/alerting/{id}', pathParams: {serviceName?: string, id?: string}, queryParams: null): Promise<CloudAlerting>;
  /**
  List the cloud.AlertingAlert objects
  See alerts
  **/
  public get(path: '/cloud/project/{serviceName}/alerting/{id}/alert', pathParams: {serviceName?: string, id?: string}, queryParams: null): Promise<Number[]>;
  /**
  Cloud alert on your consumption
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/alerting/{id}/alert/{alertId}', pathParams: {serviceName?: string, id?: string, alertId?: Number}, queryParams: null): Promise<CloudAlertingAlert>;
  /**
  Missing description
  Get snapshots
  **/
  public get(path: '/cloud/project/{serviceName}/snapshot', pathParams: {serviceName?: string}, queryParams: {flavorType?: string, region?: string}): Promise<CloudImageImage[]>;
  /**
  Missing description
  Get snapshot details
  **/
  public get(path: '/cloud/project/{serviceName}/snapshot/{snapshotId}', pathParams: {serviceName?: string, snapshotId?: string}, queryParams: null): Promise<CloudImageImage>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Missing description
  Get SSH keys
  **/
  public get(path: '/cloud/project/{serviceName}/sshkey', pathParams: {serviceName?: string}, queryParams: {region?: string}): Promise<CloudSshkeySshKey[]>;
  /**
  Missing description
  Get SSH key
  **/
  public get(path: '/cloud/project/{serviceName}/sshkey/{keyId}', pathParams: {keyId?: string, serviceName?: string}, queryParams: null): Promise<CloudSshkeySshKeyDetail>;
  /**
  Missing description
  Get volume details
  **/
  public get(path: '/cloud/project/{serviceName}/volume/{volumeId}', pathParams: {serviceName?: string, volumeId?: string}, queryParams: null): Promise<CloudVolumeVolume>;
  /**
  Missing description
  Get volumes
  **/
  public get(path: '/cloud/project/{serviceName}/volume', pathParams: {serviceName?: string}, queryParams: {region?: string}): Promise<CloudVolumeVolume[]>;
  /**
  Missing description
  Get volume snapshots
  **/
  public get(path: '/cloud/project/{serviceName}/volume/snapshot', pathParams: {serviceName?: string}, queryParams: {region?: string}): Promise<CloudVolumeSnapshot[]>;
  /**
  Missing description
  Get volume snapshot details
  **/
  public get(path: '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}', pathParams: {serviceName?: string, snapshotId?: string}, queryParams: null): Promise<CloudVolumeSnapshot>;
  /**
  List the cloud.IPLoadbalancing objects
  Managed imported IP LB in OpenStack
  **/
  public get(path: '/cloud/project/{serviceName}/ipLoadbalancing', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Load balancing IP imported into your OpenStack project
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/ipLoadbalancing/{id}', pathParams: {serviceName?: string, id?: string}, queryParams: null): Promise<CloudIPLoadbalancing>;
  /**
  Manage your regions
  List your regions
  **/
  public get(path: '/cloud/project/{serviceName}/region', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Manage one of your region
  Get information about your region
  **/
  public get(path: '/cloud/project/{serviceName}/region/{regionName}', pathParams: {regionName?: string, serviceName?: string}, queryParams: null): Promise<CloudRegion>;
  /**
  Manage your automated backups
  List your automated backups
  **/
  public get(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup', pathParams: {regionName?: string, serviceName?: string}, queryParams: null): Promise<CloudBackup[]>;
  /**
  Missing description
  Get details about a backup workflow process
  **/
  public get(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}', pathParams: {backupWorkflowId?: string, regionName?: string, serviceName?: string}, queryParams: null): Promise<CloudBackup>;
  /**
  Missing description
  Get ips
  **/
  public get(path: '/cloud/project/{serviceName}/ip', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudIpCloudIp[]>;
  /**
  Missing description
  Get failover ips
  **/
  public get(path: '/cloud/project/{serviceName}/ip/failover', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudIpFailoverIp[]>;
  /**
  Missing description
  Get failover ip
  **/
  public get(path: '/cloud/project/{serviceName}/ip/failover/{id}', pathParams: {id?: string, serviceName?: string}, queryParams: null): Promise<CloudIpFailoverIp>;
  /**
  Manage the vRack on your Cloud Project
  Get the linked vRack on your project
  **/
  public get(path: '/cloud/project/{serviceName}/vrack', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudVrack>;
  /**
  Manage one of your operations
  Get information about one operation
  **/
  public get(path: '/cloud/project/{serviceName}/operation/{operationId}', pathParams: {operationId?: string, serviceName?: string}, queryParams: null): Promise<CloudOperation>;
  /**
  Manage the operations on your Cloud Project
  List your operations
  **/
  public get(path: '/cloud/project/{serviceName}/operation', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudOperation[]>;
  /**
  Missing description
  Get current usage
  **/
  public get(path: '/cloud/project/{serviceName}/usage/current', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudUsageUsageCurrent>;
  /**
  Missing description
  Get usage forecast
  **/
  public get(path: '/cloud/project/{serviceName}/usage/forecast', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudUsageUsageForecast>;
  /**
  Missing description
  Usage information on your project
  **/
  public get(path: '/cloud/project/{serviceName}/usage/history', pathParams: {serviceName?: string}, queryParams: {from?: Date, to?: Date}): Promise<CloudUsageUsageHistory[]>;
  /**
  Missing description
  Usage information details
  **/
  public get(path: '/cloud/project/{serviceName}/usage/history/{usageId}', pathParams: {serviceName?: string, usageId?: string}, queryParams: null): Promise<CloudUsageUsageHistoryDetail>;
  /**
  Missing description
  Get all users
  **/
  public get(path: '/cloud/project/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudUserUser[]>;
  /**
  Missing description
  Get rclone configuration file
  **/
  public get(path: '/cloud/project/{serviceName}/user/{userId}/rclone', pathParams: {serviceName?: string, userId?: Number}, queryParams: {region?: string}): Promise<CloudUserRclone>;
  /**
  Missing description
  Get RC file of OpenStack
  **/
  public get(path: '/cloud/project/{serviceName}/user/{userId}/openrc', pathParams: {serviceName?: string, userId?: Number}, queryParams: {region?: string, version?: CloudUserOpenrcVersionEnum}): Promise<CloudUserOpenrc>;
  /**
  Missing description
  Get user details
  **/
  public get(path: '/cloud/project/{serviceName}/user/{userId}', pathParams: {serviceName?: string, userId?: Number}, queryParams: null): Promise<CloudUserUser>;
  /**
  Missing description
  Get planned migrations
  **/
  public get(path: '/cloud/project/{serviceName}/migration', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudMigrationMigration[]>;
  /**
  Missing description
  Get planned migration
  **/
  public get(path: '/cloud/project/{serviceName}/migration/{migrationId}', pathParams: {migrationId?: string, serviceName?: string}, queryParams: null): Promise<CloudMigrationMigration>;
  /**
  Missing description
  Return many statistics about the virtual machine for a given period
  **/
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}/monitoring', pathParams: {instanceId?: string, serviceName?: string}, queryParams: {period?: CloudInstanceMetricsPeriod, type?: CloudInstanceMetricsType}): Promise<CloudInstanceInstanceMetrics>;
  /**
  Missing description
  Get interface
  **/
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}', pathParams: {instanceId?: string, interfaceId?: string, serviceName?: string}, queryParams: null): Promise<CloudInstanceInterfaceInterface>;
  /**
  Missing description
  Get interfaces
  **/
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null): Promise<CloudInstanceInterfaceInterface[]>;
  /**
  Missing description
  Get instance
  **/
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null): Promise<CloudInstanceInstanceDetail>;
  /**
  Missing description
  Get instances
  **/
  public get(path: '/cloud/project/{serviceName}/instance', pathParams: {serviceName?: string}, queryParams: {region?: string}): Promise<CloudInstanceInstance[]>;
  /**
  Missing description
  Get all groups
  **/
  public get(path: '/cloud/project/{serviceName}/instance/group/{groupId}', pathParams: {groupId?: string, serviceName?: string}, queryParams: {region?: string}): Promise<CloudInstancegroupInstanceGroup>;
  /**
  Missing description
  Get the detail of a group
  **/
  public get(path: '/cloud/project/{serviceName}/instance/group', pathParams: {serviceName?: string}, queryParams: {region?: string}): Promise<CloudInstancegroupInstanceGroup[]>;
  /**
  Manage the regions you can add on your project
  List the regions on which you can ask an access to
  **/
  public get(path: '/cloud/project/{serviceName}/regionAvailable', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudAvailableRegion[]>;
  /**
  Missing description
  Get flavors
  **/
  public get(path: '/cloud/project/{serviceName}/flavor', pathParams: {serviceName?: string}, queryParams: {region?: string}): Promise<CloudFlavorFlavor[]>;
  /**
  Missing description
  Get flavor
  **/
  public get(path: '/cloud/project/{serviceName}/flavor/{flavorId}', pathParams: {flavorId?: string, serviceName?: string}, queryParams: null): Promise<CloudFlavorFlavor>;
  /**
  Missing description
  Get storage containers
  **/
  public get(path: '/cloud/project/{serviceName}/storage', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudStorageContainer[]>;
  /**
  Missing description
  Access to storage API
  **/
  public get(path: '/cloud/project/{serviceName}/storage/access', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudStorageContainerAccess>;
  /**
  Missing description
  Get storage container
  **/
  public get(path: '/cloud/project/{serviceName}/storage/{containerId}', pathParams: {containerId?: string, serviceName?: string}, queryParams: null): Promise<CloudStorageContainerDetail>;
  /**
  Missing description
  Get stack
  **/
  public get(path: '/cloud/project/{serviceName}/stack/{stackId}', pathParams: {serviceName?: string, stackId?: string}, queryParams: null): Promise<CloudStackStack>;
  /**
  Missing description
  Get stacks
  **/
  public get(path: '/cloud/project/{serviceName}/stack', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudStackStack[]>;
  /**
  bill operations
  Get your project bills
  **/
  public get(path: '/cloud/project/{serviceName}/bill', pathParams: {serviceName?: string}, queryParams: {to?: Date, from?: Date}): Promise<CloudProjectBill[]>;
  /**
  Missing description
  Get images
  **/
  public get(path: '/cloud/project/{serviceName}/image', pathParams: {serviceName?: string}, queryParams: {flavorType?: string, osType?: CloudImageOSTypeEnum, region?: string}): Promise<CloudImageImage[]>;
  /**
  Missing description
  Get image
  **/
  public get(path: '/cloud/project/{serviceName}/image/{imageId}', pathParams: {imageId?: string, serviceName?: string}, queryParams: null): Promise<CloudImageImage>;
  /**
  Missing description
  Get project quotas
  **/
  public get(path: '/cloud/project/{serviceName}/quota', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudQuotaQuotas[]>;
  /**
  List the cloud.Credit objects
  Get your credit
  **/
  public get(path: '/cloud/project/{serviceName}/credit', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Cloud credit
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/credit/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<CloudCredit>;
  /**
  Cloud ACL
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}/acl/{accountId}', pathParams: {serviceName?: string, accountId?: string}, queryParams: null): Promise<CloudAcl>;
  /**
  List the cloud.Acl objects
  Get ACL on your cloud project
  **/
  public get(path: '/cloud/project/{serviceName}/acl', pathParams: {serviceName?: string}, queryParams: {type?: CloudAclTypeEnum}): Promise<coreTypes.AccountId[]:string[]>;
  /**
  Project
  Get this object properties
  **/
  public get(path: '/cloud/project/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<CloudProject>;
  /**
  Operations about the PUBLICCLOUD service
  List available services
  **/
  public get(path: '/cloud', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Missing description
  Get all cloud pending orders
  **/
  public get(path: '/cloud/order', pathParams: null, queryParams: {planCode?: string}): Promise<CloudOrderOrder[]>;
  /**
  Get services prices
  Get services prices
  **/
  public get(path: '/cloud/price', pathParams: null, queryParams: {region?: string, flavorId?: string}): Promise<CloudPrice>;
  public get(path: PathscloudGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  cloud archives sessions
  Alter this object properties
  **/
  public put(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}', pathParams: {serviceName?: string, pcaServiceName?: string, sessionId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Cloud Archives Account
  Alter this object properties
  **/
  public put(path: '/cloud/{serviceName}/pca/{pcaServiceName}', pathParams: {serviceName?: string, pcaServiceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos', pathParams: {serviceName?: string, pcaServiceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Rename private network
  **/
  public put(path: '/cloud/project/{serviceName}/network/private/{networkId}', pathParams: {networkId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Cloud alerting consumption
  Alter this object properties
  **/
  public put(path: '/cloud/project/{serviceName}/alerting/{id}', pathParams: {serviceName?: string, id?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cloud/project/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Update a volume
  **/
  public put(path: '/cloud/project/{serviceName}/volume/{volumeId}', pathParams: {serviceName?: string, volumeId?: string}, queryParams: null, bodyParams: null): Promise<CloudVolumeVolume>;
  /**
  Missing description
  Update planned migration
  **/
  public put(path: '/cloud/project/{serviceName}/migration/{migrationId}', pathParams: {migrationId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudMigrationMigration>;
  /**
  Missing description
  Alter an instance
  **/
  public put(path: '/cloud/project/{serviceName}/instance/{instanceId}', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Update your storage container
  **/
  public put(path: '/cloud/project/{serviceName}/storage/{containerId}', pathParams: {containerId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Project
  Alter this object properties
  **/
  public put(path: '/cloud/project/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathscloudPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  List the pca.Task objects
  Create a cloud archives task
  **/
  public post(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks', pathParams: {serviceName?: string, pcaServiceName?: string}, queryParams: null, bodyParams: null): Promise<PcaTask>;
  /**
  restore operations
  Create a restore task for session
  **/
  public post(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore', pathParams: {serviceName?: string, pcaServiceName?: string, sessionId?: string}, queryParams: null, bodyParams: null): Promise<PcaTask>;
  /**
  Missing description
  Get OVH playground session to use the openstack terminal
  **/
  public post(path: '/cloud/project/{serviceName}/openstackClient', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudOpenstackClientSession>;
  /**
  Missing description
  Create a new network
  **/
  public post(path: '/cloud/project/{serviceName}/network/private', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudNetworkNetwork>;
  /**
  Missing description
  Create a new network subnet
  **/
  public post(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet', pathParams: {networkId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudNetworkSubnet>;
  /**
  Missing description
  Activate private network in a new region
  **/
  public post(path: '/cloud/project/{serviceName}/network/private/{networkId}/region', pathParams: {networkId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudNetworkNetwork>;
  /**
  List the cloud.Alerting objects
  Add new alert
  **/
  public post(path: '/cloud/project/{serviceName}/alerting', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudAlerting>;
  /**
  Missing description
  Create SSH key
  **/
  public post(path: '/cloud/project/{serviceName}/sshkey', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudSshkeySshKeyDetail>;
  /**
  unleash operations
  Request more quota on your /cloud project
  **/
  public post(path: '/cloud/project/{serviceName}/unleash', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Detach a volume from an instance
  **/
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/detach', pathParams: {serviceName?: string, volumeId?: string}, queryParams: null, bodyParams: null): Promise<CloudVolumeVolume>;
  /**
  Missing description
  Snapshot a volume
  **/
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/snapshot', pathParams: {serviceName?: string, volumeId?: string}, queryParams: null, bodyParams: null): Promise<CloudVolumeSnapshot>;
  /**
  Missing description
  Extend a volume
  **/
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/upsize', pathParams: {serviceName?: string, volumeId?: string}, queryParams: null, bodyParams: null): Promise<CloudVolumeVolume>;
  /**
  Missing description
  Attach a volume on an instance
  **/
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/attach', pathParams: {serviceName?: string, volumeId?: string}, queryParams: null, bodyParams: null): Promise<CloudVolumeVolume>;
  /**
  Missing description
  Create a volume
  **/
  public post(path: '/cloud/project/{serviceName}/volume', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudVolumeVolume>;
  /**
  List the cloud.IPLoadbalancing objects
  Import an existing IP LB into OpenStack
  **/
  public post(path: '/cloud/project/{serviceName}/ipLoadbalancing', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudIPLoadbalancing>;
  /**
  renew operations
  Renew the import of your load balancing IP into Openstack
  **/
  public post(path: '/cloud/project/{serviceName}/ipLoadbalancing/{id}/renew', pathParams: {serviceName?: string, id?: string}, queryParams: null, bodyParams: null): Promise<CloudIPLoadbalancing>;
  /**
  validate operations
  Validate the import of your load balancing IP into OpenStack
  **/
  public post(path: '/cloud/project/{serviceName}/ipLoadbalancing/{id}/validate', pathParams: {serviceName?: string, id?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Manage your regions
  Request access to a region
  **/
  public post(path: '/cloud/project/{serviceName}/region', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudRegion>;
  /**
  Manage your automated backups
  Create a new automated backup
  **/
  public post(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup', pathParams: {regionName?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudBackup>;
  /**
  Missing description
  Attach failover ip to an instance
  **/
  public post(path: '/cloud/project/{serviceName}/ip/failover/{id}/attach', pathParams: {id?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudIpFailoverIp>;
  /**
  Manage the vRack on your Cloud Project
  Order and attach a new vRack on your project
  **/
  public post(path: '/cloud/project/{serviceName}/vrack', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudOperation>;
  /**
  cancel operations
  Cancel project creation
  **/
  public post(path: '/cloud/project/{serviceName}/cancel', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Create user
  **/
  public post(path: '/cloud/project/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudUserUserDetail>;
  /**
  Missing description
  Get token for user
  **/
  public post(path: '/cloud/project/{serviceName}/user/{userId}/token', pathParams: {serviceName?: string, userId?: Number}, queryParams: null, bodyParams: null): Promise<CloudAuthenticationToken>;
  /**
  Missing description
  Regenerate user password
  **/
  public post(path: '/cloud/project/{serviceName}/user/{userId}/regeneratePassword', pathParams: {serviceName?: string, userId?: Number}, queryParams: null, bodyParams: null): Promise<CloudUserUserDetail>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/cloud/project/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Missing description
  Snapshot an instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/snapshot', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Return initial credentials of applications installed from public image
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/applicationAccess', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudInstanceApplicationAccess>;
  /**
  Missing description
  Create interface on an instance and attached it to a network
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudInstanceInterfaceInterface>;
  /**
  Missing description
  Migrate your instance to another flavor
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/resize', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudInstanceInstanceDetail>;
  /**
  Missing description
  Get VNC access to your instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/vnc', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudInstanceInstanceVnc>;
  /**
  Missing description
  Enable or disable rescue mode
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/rescueMode', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudInstanceRescueAdminPassword>;
  /**
  Missing description
  Reinstall an instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/reinstall', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudInstanceInstanceDetail>;
  /**
  Missing description
  Resume a suspended instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/resume', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Active monthly billing on instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudInstanceInstanceDetail>;
  /**
  Missing description
  Reboot an instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/reboot', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Create a new instance
  **/
  public post(path: '/cloud/project/{serviceName}/instance', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudInstanceInstanceDetail>;
  /**
  Missing description
  Create multiple instances
  **/
  public post(path: '/cloud/project/{serviceName}/instance/bulk', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudInstanceInstance[]>;
  /**
  Missing description
  Create a group
  **/
  public post(path: '/cloud/project/{serviceName}/instance/group', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudInstancegroupInstanceGroup>;
  /**
  Missing description
  Create container
  **/
  public post(path: '/cloud/project/{serviceName}/storage', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudStorageContainer>;
  /**
  Missing description
  Access to storage API
  **/
  public post(path: '/cloud/project/{serviceName}/storage/access', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudStorageContainerAccess>;
  /**
  Missing description
  Deploy your container files as a static web site
  **/
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/static', pathParams: {containerId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Get a public temporary URL to access to one of your object
  **/
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/publicUrl', pathParams: {containerId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudStorageContainerObjectTempURL>;
  /**
  Missing description
  Add CORS support on your container
  **/
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/cors', pathParams: {containerId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Create openstack user with only access to this container
  **/
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/user', pathParams: {containerId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudUserUserDetail>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/cloud/project/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/cloud/project/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Missing description
  Get OVH playground session with a stack installed to use the openstack terminal
  **/
  public post(path: '/cloud/project/{serviceName}/stack/{stackId}/client', pathParams: {serviceName?: string, stackId?: string}, queryParams: null, bodyParams: null): Promise<CloudOpenstackClientSession>;
  /**
  List the cloud.Credit objects
  Add credit to your project
  **/
  public post(path: '/cloud/project/{serviceName}/credit', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the cloud.Acl objects
  Create new ACL
  **/
  public post(path: '/cloud/project/{serviceName}/acl', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<CloudAcl>;
  /**
  retain operations
  Do not expire the project, and retain it. You will have to pay for the resources you will use after using this call
  **/
  public post(path: '/cloud/project/{serviceName}/retain', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Start a new cloud project
  Start a new cloud project
  **/
  public post(path: '/cloud/createProject', pathParams: null, queryParams: null, bodyParams: null): Promise<CloudProjectNewProject>;
  public post(path: PathscloudPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  cloud archives sessions
  Create a delete task for all files in session
  **/
  public delete(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}', pathParams: {serviceName?: string, pcaServiceName?: string, sessionId?: string}, queryParams: null, bodyParams: null): Promise<PcaTask>;
  /**
  Missing description
  Delete a network subnet
  **/
  public delete(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}', pathParams: {networkId?: string, serviceName?: string, subnetId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete private network
  **/
  public delete(path: '/cloud/project/{serviceName}/network/private/{networkId}', pathParams: {networkId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Cloud alerting consumption
  Delete alerting
  **/
  public delete(path: '/cloud/project/{serviceName}/alerting/{id}', pathParams: {serviceName?: string, id?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete a snapshot
  **/
  public delete(path: '/cloud/project/{serviceName}/snapshot/{snapshotId}', pathParams: {serviceName?: string, snapshotId?: string}, queryParams: null, bodyParams: null): Promise<CloudImageImage>;
  /**
  Missing description
  Delete SSH key
  **/
  public delete(path: '/cloud/project/{serviceName}/sshkey/{keyId}', pathParams: {keyId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete a volume
  **/
  public delete(path: '/cloud/project/{serviceName}/volume/{volumeId}', pathParams: {serviceName?: string, volumeId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete a volume snapshot
  **/
  public delete(path: '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}', pathParams: {serviceName?: string, snapshotId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Load balancing IP imported into your OpenStack project
  Delete the import of your load balancing IP into OpenStack. This does not delete the IP LB but close the access of it from OpenStack
  **/
  public delete(path: '/cloud/project/{serviceName}/ipLoadbalancing/{id}', pathParams: {serviceName?: string, id?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete a backup workflow process
  **/
  public delete(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}', pathParams: {backupWorkflowId?: string, regionName?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete user
  **/
  public delete(path: '/cloud/project/{serviceName}/user/{userId}', pathParams: {serviceName?: string, userId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete an interface
  **/
  public delete(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}', pathParams: {instanceId?: string, interfaceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete an instance
  **/
  public delete(path: '/cloud/project/{serviceName}/instance/{instanceId}', pathParams: {instanceId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete a group
  **/
  public delete(path: '/cloud/project/{serviceName}/instance/group/{groupId}', pathParams: {groupId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete container
  **/
  public delete(path: '/cloud/project/{serviceName}/storage/{containerId}', pathParams: {containerId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete CORS support on your container
  **/
  public delete(path: '/cloud/project/{serviceName}/storage/{containerId}/cors', pathParams: {containerId?: string, serviceName?: string}, queryParams: {origin?: string}, bodyParams: {origin?: string}): Promise<void>;
  /**
  Cloud ACL
  Delete ACL
  **/
  public delete(path: '/cloud/project/{serviceName}/acl/{accountId}', pathParams: {serviceName?: string, accountId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public delete(path: PathscloudDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
