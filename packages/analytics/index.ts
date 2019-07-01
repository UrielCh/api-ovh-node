import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Cluster information
 */
export interface AnalyticsCluster {
  /**
   * Analytics Project ID needed to generate cluster credentials
   *
   */
  analyticsProjectId?: string;
  /**
   * Analytics cluster name
   *
   */
  clusterName?: string;
  /**
   * Type of analytics stack deployed
   *
   */
  clusterType?: string;
  /**
   * Analytics cluster deployment end date
   *
   */
  deploymentEndDate?: string;
  /**
   * Analytics cluster deployment start date
   *
   */
  deploymentStartDate?: string;
  /**
   * Analytics cluster domain name
   *
   */
  domain?: string;
  /**
   * Analytics cluster nodes topology
   *
   */
  nodes?: AnalyticsClusterNode[];
  /**
   * Public Cloud project unique identifier
   *
   */
  osProjectId?: string;
  /**
   * Public Cloud region of analytics cluster deployment
   *
   */
  osRegion?: string;
  /**
   * Analytics cluster unique identifier
   *
   */
  serviceName: string;
  /**
   * Analytics cluster current status
   *
   */
  status: AnalyticsStatus;
}
/**
 * Component of the service
 */
export interface AnalyticsComponent {
  /**
   * Component name
   *
   */
  name: string;
  /**
   * Component version
   *
   */
  version: string;
}
/**
 * Status code
 */
export type AnalyticsStatus = 'DEPLOYED' | 'DEPLOYING' | 'DESTROYED' | 'DONE' | 'ERROR' | 'FAILED' | 'INITIALIZED' | 'IN_PROGRESS' | 'OK' | 'PENDING' | 'SUCCEEDED' | 'TO_DEPLOY' | 'TO_DESTROY' | 'UNKNOWN';
/**
 * Cluster activity
 */
export interface AnalyticsClusterActivity {
  /**
   * Activity log description
   *
   */
  description: string;
  /**
   * Status associated to this event
   *
   */
  status: AnalyticsStatus;
  /**
   * Activity log timestamp
   *
   */
  timestamp: string;
  /**
   * Event author
   *
   */
  user?: string;
}
/**
 * Analytics Cluster deployment parameters
 */
export interface AnalyticsClusterDeploy {
  /**
   * Name of the Analytics Data Platform cluster
   *
   */
  clusterName: string;
  /**
   * Analytics type of stack to deploy (according to capabilities version)
   *
   */
  clusterType: string;
  /**
   * Storage per edge node
   *
   */
  edgeNodeStorage: number;
  /**
   * Analytics cluster total effective storage (HDFS)
   *
   */
  hdfsEffectiveStorage: number;
  /**
   * Analytics cluster HDFS replication factor
   *
   */
  hdfsReplicationFactor: number;
  /**
   * Storage per master node
   *
   */
  masterNodeStorage: number;
  /**
   * Analytics cluster master password used to derive services passwords
   *
   */
  masterPassword: string;
  /**
   * Analytics cluster nodes topology
   *
   */
  nodes: AnalyticsNodeDeploy[];
  /**
   * Public Cloud project ID to deploy the cluster into
   *
   */
  osProjectId: string;
  /**
   * Public Cloud project name to deploy the cluster into
   *
   */
  osProjectName: string;
  /**
   * Public Cloud region to deploy the cluster into (according to capabilities regions)
   *
   */
  osRegion: string;
  /**
   * Public Cloud project token to deploy the cluster
   *
   */
  osToken: string;
  /**
   * SSH Public Key uploaded to the cluster to give access to the customer (content of my_key.pub)
   *
   */
  sshPublicKey: string;
}
/**
 * Cluster node information
 */
export interface AnalyticsClusterNode {
  /**
   * Deployment end date
   *
   */
  deploymentEndDate?: string;
  /**
   * Deployment start date
   *
   */
  deploymentStartDate?: string;
  /**
   * Public Cloud flavor of the node
   *
   */
  flavor?: string;
  /**
   * Hostname for this node
   *
   */
  hostname?: string;
  /**
   * IP address of the node inside the vRack
   *
   */
  ip?: string;
  /**
   * Unique identifier for this node
   *
   */
  nodeId: string;
  /**
   * Node type
   *
   */
  nodeType: AnalyticsNodeType;
  /**
   * Public Cloud region of the node
   *
   */
  osRegion?: string;
  /**
   * Node status
   *
   */
  status: AnalyticsStatus;
  /**
   * Size of storage in GB
   *
   */
  storage?: number;
}
/**
 * Cluster deployment status
 */
export interface AnalyticsClusterDeployStatus {
  /**
   * Task percentage
   *
   */
  percentage: number;
  /**
   * Task status
   *
   */
  status: AnalyticsStatus;
  /**
   * Task name
   *
   */
  task: string;
}
/**
 * node capability
 */
export interface AnalyticsNodeCapability {
  /**
   * Maximum number of instances
   *
   */
  instanceMax: number;
  /**
   * Minimum number of instances
   *
   */
  instanceMin: number;
  /**
   * List of available instances
   *
   */
  instanceType: string[];
  /**
   * maximum raw storage in GB
   *
   */
  rawStorageMaxGb: number;
  /**
   * minimum raw storage in GB
   *
   */
  rawStorageMinGb: number;
}
/**
 * Node information
 */
export interface AnalyticsNodeDeploy {
  /**
   * Type of flavor to deploy
   *
   */
  nodeFlavor: string;
  /**
   * Node type
   *
   */
  nodeType: AnalyticsNodeType;
}
/**
 * Node type
 */
export type AnalyticsNodeType = 'EDGE' | 'MASTER' | 'SLAVE' | 'UTILITY';
/**
 * Platform capabilities
 */
export interface AnalyticsPlatformCapability {
  /**
   * Available Public Cloud regions
   *
   */
  availableRegion: string[];
  /**
   * Bastion node capabilities
   *
   */
  bastionNode: AnalyticsNodeCapability;
  /**
   * Analytic Data Platform Components list
   *
   */
  components: AnalyticsComponent[];
  /**
   * Edge node capabilities
   *
   */
  edgeNode: AnalyticsNodeCapability;
  /**
   * Analytic Data Platform replication factor
   *
   */
  hdfsReplicationFactor: number;
  /**
   * Master node capabilities
   *
   */
  masterNode: AnalyticsNodeCapability;
  /**
   * List of fields to hide or display
   *
   */
  requirements?: AnalyticsPlatformCapabilityRequirement[];
  /**
   * Utility node capabilities
   *
   */
  utilityNode: AnalyticsNodeCapability;
  /**
   * Analytic Data Platform software version
   *
   */
  version: string;
  /**
   * Analytic Data Platform software version description
   *
   */
  versionDescription: string;
  /**
   * Worker node capabilities
   *
   */
  workerNode: AnalyticsNodeCapability;
}
/**
 * Requirement for fields to be displayed or hidden
 */
export interface AnalyticsPlatformCapabilityRequirement {
  /**
   * Field display flag. True for display, false to hide
   *
   */
  display: boolean;
  /**
   * Field name to be displayed or hidden
   *
   */
  fieldName: string;
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
 * null
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
type PathsAnalyticsGET = '/analytics/capabilities/platforms' | 
'/analytics/platforms' | 
'/analytics/platforms/{serviceName}' | 
'/analytics/platforms/{serviceName}/activity' | 
'/analytics/platforms/{serviceName}/nodes' | 
'/analytics/platforms/{serviceName}/nodes/{nodeId}' | 
'/analytics/platforms/{serviceName}/serviceInfos' | 
'/analytics/platforms/{serviceName}/status';

type PathsAnalyticsPUT = '/analytics/platforms/{serviceName}/serviceInfos';

type PathsAnalyticsPOST = '/analytics/platforms/{serviceName}/changeContact' | 
'/analytics/platforms/{serviceName}/confirmTermination' | 
'/analytics/platforms/{serviceName}/deploy' | 
'/analytics/platforms/{serviceName}/terminate';

export class ApiAnalytics extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  
  Platform capabilities
  **/
  public get(path: '/analytics/capabilities/platforms'): Promise<AnalyticsPlatformCapability[]>;
  /**
  
  List available services
  **/
  public get(path: '/analytics/platforms'): Promise<string[]>;
  /**
  
  Get details about a service
  **/
  public get(path: '/analytics/platforms/{serviceName}', params: {serviceName: string}): Promise<AnalyticsCluster>;
  /**
  
  Get activity logs
  **/
  public get(path: '/analytics/platforms/{serviceName}/activity', params: {serviceName: string}): Promise<AnalyticsClusterActivity[]>;
  /**
  
  List available nodes
  **/
  public get(path: '/analytics/platforms/{serviceName}/nodes', params: {serviceName: string}): Promise<string[]>;
  /**
  
  Get details about nodes
  **/
  public get(path: '/analytics/platforms/{serviceName}/nodes/{nodeId}', params: {serviceName: string, nodeId: string}): Promise<AnalyticsClusterNode>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/analytics/platforms/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  
  Get cluster deployment status
  **/
  public get(path: '/analytics/platforms/{serviceName}/status', params: {serviceName: string}): Promise<AnalyticsClusterDeployStatus[]>;
  public get(path: PathsAnalyticsGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/analytics/platforms/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: ServiceRenewType, renewalType?: ServiceRenewalTypeEnum, serviceId?: number, status?: ServiceStateEnum}): Promise<void>;
  public put(path: PathsAnalyticsPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/analytics/platforms/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/analytics/platforms/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum, token: string}): Promise<string>;
  /**
  
  Deploy an Analytics Data Platform
  **/
  public post(path: '/analytics/platforms/{serviceName}/deploy', params: {serviceName: string, clusterName?: string, clusterType?: string, edgeNodeStorage?: number, hdfsEffectiveStorage?: number, hdfsReplicationFactor?: number, masterNodeStorage?: number, masterPassword?: string, nodes?: AnalyticsNodeDeploy[], osProjectId?: string, osProjectName?: string, osRegion?: string, osToken?: string, sshPublicKey?: string}): Promise<AnalyticsClusterDeploy>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/analytics/platforms/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsAnalyticsPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
}
export default ApiAnalytics;
