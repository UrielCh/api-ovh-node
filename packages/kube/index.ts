import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Managed Kubernetes cluster description
 */
export interface KubeCluster {
  /**
   * True if control-plane is up to date
   *
   */
  controlPlaneIsUpToDate: boolean;
  /**
   * Cluster creation date
   *
   */
  createdAt: string;
  /**
   * Cluster ID
   *
   */
  id: string;
  /**
   * True if all nodes and control-plane are up to date
   *
   */
  isUpToDate: boolean;
  /**
   * Cluster name
   *
   */
  name: string;
  /**
   * Cluster nodes URL
   *
   */
  nodesUrl: string;
  /**
   * Cluster status
   *
   */
  status: KubeClusterStatus;
  /**
   * Cluster last update date
   *
   */
  updatePolicy: string;
  /**
   * Cluster last update date
   *
   */
  updatedAt: string;
  /**
   * Management URL of your cluster
   *
   */
  url: string;
  /**
   * Kubernetes version of your cluster
   *
   */
  version: string;
}
/**
 * Enum values for Status
 */
export type KubeClusterStatus = 'DELETING' | 'ERROR' | 'INSTALLING' | 'READY' | 'REOPENING' | 'RESETTING' | 'SUSPENDED' | 'SUSPENDING' | 'UPDATING' | 'USER_ERROR' | 'USER_QUOTA_ERROR';
/**
 * Kubeconfig description
 */
export interface KubeKubeconfig {
  /**
   * kubeconfig file
   *
   */
  content: string;
}
/**
 * Node installed on your cluster
 */
export interface KubeNode {
  /**
   * Creation date
   *
   */
  createdAt: string;
  /**
   * Public Cloud flavor name
   *
   */
  flavor: string;
  /**
   * Node ID
   *
   */
  id: string;
  /**
   * Public Cloud instance id
   *
   */
  instanceId?: string;
  /**
   * True if the node is up to date
   *
   */
  isUpToDate: boolean;
  /**
   * Node name
   *
   */
  name?: string;
  /**
   * Public Cloud project ID where the node is started
   *
   */
  projectId: string;
  /**
   * Status
   *
   */
  status: KubeNodeStatus;
  /**
   * Node last update date
   *
   */
  updatedAt: string;
  /**
   * Node version
   *
   */
  version: string;
}
/**
 * Enum values for Status
 */
export type KubeNodeStatus = 'DELETING' | 'ERROR' | 'INSTALLING' | 'READY' | 'REOPENING' | 'RESETTING' | 'SUSPENDED' | 'SUSPENDING' | 'UPDATING' | 'USER_ERROR' | 'USER_NODE_NOT_FOUND_ERROR' | 'USER_NODE_SUSPENDED_SERVICE' | 'USER_QUOTA_ERROR';
/**
 * Public Cloud project linked to a Kube cluster
 */
export interface KubePublicCloudProject {
  /**
   * Public Cloud project ID
   *
   */
  projectId: string;
  /**
   * Public Cloud region associated with your cluster
   *
   */
  region: string;
}
/**
 * Enum values for worker nodes reset policy
 */
export type KubeResetWorkerNodesPolicy = 'delete' | 'reinstall';
/**
 * Enum values for UpdatePolicy
 */
export type KubeUpdatePolicy = 'ALWAYS_UPDATE' | 'MINIMAL_DOWNTIME' | 'NEVER_UPDATE';
/**
 * Description not available
 */
export type KubeVersion = '1.11' | '1.12' | '1.13' | '1.14';
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
type PathsKubeGET = '/kube' | 
'/kube/{serviceName}' | 
'/kube/{serviceName}/kubeconfig' | 
'/kube/{serviceName}/publiccloud/node' | 
'/kube/{serviceName}/publiccloud/node/{nodeId}' | 
'/kube/{serviceName}/publiccloud/project' | 
'/kube/{serviceName}/serviceInfos';

type PathsKubePUT = '/kube/{serviceName}' | 
'/kube/{serviceName}/serviceInfos' | 
'/kube/{serviceName}/updatePolicy';

type PathsKubePOST = '/kube/{serviceName}/changeContact' | 
'/kube/{serviceName}/confirmTermination' | 
'/kube/{serviceName}/publiccloud/node' | 
'/kube/{serviceName}/reset' | 
'/kube/{serviceName}/terminate' | 
'/kube/{serviceName}/update';

type PathsKubeDELETE = '/kube/{serviceName}/publiccloud/node/{nodeId}';

export class ApiKube extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the KUBERNETES service
  List available services
  **/
  public get(path: '/kube'): Promise<string[]>;
  /**
  Manage your cluster
  Get information about your managed Kubernetes cluster
  **/
  public get(path: '/kube/{serviceName}', params: {serviceName: string}): Promise<KubeCluster>;
  /**
  Get your cluster configuration
  Get kubeconfig file
  **/
  public get(path: '/kube/{serviceName}/kubeconfig', params: {serviceName: string}): Promise<KubeKubeconfig>;
  /**
  Manage your Public Cloud cluster nodes
  List your nodes on Public Cloud
  **/
  public get(path: '/kube/{serviceName}/publiccloud/node', params: {serviceName: string}): Promise<KubeNode[]>;
  /**
  Manage a single node on your cluster
  Get information on a specific node on your cluster
  **/
  public get(path: '/kube/{serviceName}/publiccloud/node/{nodeId}', params: {nodeId: string, serviceName: string}): Promise<KubeNode>;
  /**
  Manage your Public Cloud projects linked to your cluster
  Get your Public Cloud project linked to your cluster
  **/
  public get(path: '/kube/{serviceName}/publiccloud/project', params: {serviceName: string}): Promise<KubePublicCloudProject>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/kube/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  public get(path: PathsKubeGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Manage your cluster
  Update information about your managed Kubernetes cluster
  **/
  public put(path: '/kube/{serviceName}', params: {serviceName: string, name: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/kube/{serviceName}/serviceInfos', params: {serviceName: string, body: ServicesService}): Promise<void>;
  /**
  Manage the update policy of your cluster
  Change the update policy of your cluster
  **/
  public put(path: '/kube/{serviceName}/updatePolicy', params: {serviceName: string, updatePolicy: KubeUpdatePolicy}): Promise<void>;
  public put(path: PathsKubePUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/kube/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/kube/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum, token: string}): Promise<string>;
  /**
  Manage your Public Cloud cluster nodes
  Deploy a node for your cluster on Public Cloud
  **/
  public post(path: '/kube/{serviceName}/publiccloud/node', params: {serviceName: string, flavorName: string, name?: string}): Promise<KubeNode>;
  /**
  Reset your cluster
  Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
  **/
  public post(path: '/kube/{serviceName}/reset', params: {serviceName: string, version?: KubeVersion, workerNodesPolicy?: KubeResetWorkerNodesPolicy}): Promise<void>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/kube/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
  Update cluster
  Update cluster to the latest patch version
  **/
  public post(path: '/kube/{serviceName}/update', params: {serviceName: string}): Promise<void>;
  public post(path: PathsKubePOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Manage a single node on your cluster
  Delete a node on your cluster
  **/
  public delete(path: '/kube/{serviceName}/publiccloud/node/{nodeId}', params: {nodeId: string, serviceName: string}): Promise<void>;
  public delete(path: PathsKubeDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiKube;
