import { ApiCommon } from '@ovh-api/common';
/**
 * Managed Kubernetes cluster description
 */
export interface KubeCluster {
  /**
   * True if control-plane is up to date
   *
   */
  controlPlaneIsUpToDate?: boolean;
  /**
   * Cluster creation date
   *
   */
  createdAt?: Date;
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
  status?: KubeClusterStatus;
  /**
   * Cluster last update date
   *
   */
  updatePolicy?: string;
  /**
   * Cluster last update date
   *
   */
  updatedAt?: Date;
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
export type KubeClusterStatus = 'INSTALLING' | 'UPDATING' | 'RESETTING' | 'SUSPENDING' | 'REOPENING' | 'DELETING' | 'SUSPENDED' | 'ERROR' | 'USER_ERROR' | 'USER_QUOTA_ERROR' | 'READY';
/**
 * Kubeconfig description
 */
export interface KubeKubeconfig {
  /**
   * kubeconfig file
   *
   */
  content?: string;
}
/**
 * Node installed on your cluster
 */
export interface KubeNode {
  /**
   * Creation date
   *
   */
  createdAt?: Date;
  /**
   * Public Cloud flavor name
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
   * Public Cloud project ID where the node is started
   *
   */
  projectId?: string;
  /**
   * Status
   *
   */
  status?: KubeNodeStatus;
  /**
   * Node last update date
   *
   */
  updatedAt?: Date;
  /**
   * Node version
   *
   */
  version?: string;
}
/**
 * Enum values for Status
 */
export type KubeNodeStatus = 'INSTALLING' | 'UPDATING' | 'RESETTING' | 'SUSPENDING' | 'REOPENING' | 'DELETING' | 'SUSPENDED' | 'ERROR' | 'USER_ERROR' | 'USER_QUOTA_ERROR' | 'USER_NODE_NOT_FOUND_ERROR' | 'USER_NODE_SUSPENDED_SERVICE' | 'READY';
/**
 * Public Cloud project linked to a Kube cluster
 */
export interface KubePublicCloudProject {
  /**
   * Public Cloud project ID
   *
   */
  projectId?: string;
  /**
   * Public Cloud region associated with your cluster
   *
   */
  region?: string;
}
/**
 * Enum values for worker nodes reset policy
 */
export type KubeResetWorkerNodesPolicy = 'reinstall' | 'delete';
/**
 * Enum values for UpdatePolicy
 */
export type KubeUpdatePolicy = 'ALWAYS_UPDATE' | 'MINIMAL_DOWNTIME' | 'NEVER_UPDATE';
/**
 * Description not available
 */
export type KubeVersion = '1.11' | '1.12' | '1.13';
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
type PathsKubeGET = '/kube' | 
'/kube/{serviceName}/kubeconfig' | 
'/kube/{serviceName}' | 
'/kube/{serviceName}/publiccloud/node' | 
'/kube/{serviceName}/publiccloud/node/{nodeId}' | 
'/kube/{serviceName}/publiccloud/project' | 
'/kube/{serviceName}/serviceInfos';

type PathsKubePUT = '/kube/{serviceName}' | 
'/kube/{serviceName}/updatePolicy' | 
'/kube/{serviceName}/serviceInfos';

type PathsKubePOST = '/kube/{serviceName}/publiccloud/node' | 
'/kube/{serviceName}/changeContact' | 
'/kube/{serviceName}/reset' | 
'/kube/{serviceName}/confirmTermination' | 
'/kube/{serviceName}/update' | 
'/kube/{serviceName}/terminate';

type PathsKubeDELETE = '/kube/{serviceName}/publiccloud/node/{nodeId}';

export class ApiKube extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the KUBERNETES service
  List available services
  **/
  public get(path: '/kube'): Promise<string[]>;
  /**
  Get your cluster configuration
  Get kubeconfig file
  **/
  public get(path: '/kube/{serviceName}/kubeconfig', pathParams: {serviceName: string}): Promise<KubeKubeconfig>;
  /**
  Manage your cluster
  Get information about your managed Kubernetes cluster
  **/
  public get(path: '/kube/{serviceName}', pathParams: {serviceName: string}): Promise<KubeCluster>;
  /**
  Manage your Public Cloud cluster nodes
  List your nodes on Public Cloud
  **/
  public get(path: '/kube/{serviceName}/publiccloud/node', pathParams: {serviceName: string}): Promise<KubeNode[]>;
  /**
  Manage a single node on your cluster
  Get information on a specific node on your cluster
  **/
  public get(path: '/kube/{serviceName}/publiccloud/node/{nodeId}', pathParams: {nodeId: string, serviceName: string}): Promise<KubeNode>;
  /**
  Manage your Public Cloud projects linked to your cluster
  List your Public Cloud projects linked to your cluster
  **/
  public get(path: '/kube/{serviceName}/publiccloud/project', pathParams: {serviceName: string}): Promise<KubePublicCloudProject[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/kube/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  public get(path: PathsKubeGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Manage your cluster
  Update information about your managed Kubernetes cluster
  **/
  public put(path: '/kube/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  /**
  Manage the update policy of your cluster
  Change the update policy of your cluster
  **/
  public put(path: '/kube/{serviceName}/updatePolicy', pathParams: {serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/kube/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsKubePUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Manage your Public Cloud cluster nodes
  Deploy a node for your cluster on Public Cloud
  **/
  public post(path: '/kube/{serviceName}/publiccloud/node', pathParams: {serviceName: string}): Promise<KubeNode>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/kube/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Reset your cluster
  Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
  **/
  public post(path: '/kube/{serviceName}/reset', pathParams: {serviceName: string}): Promise<void>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/kube/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  Update cluster
  Update cluster to the latest patch version
  **/
  public post(path: '/kube/{serviceName}/update', pathParams: {serviceName: string}): Promise<void>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/kube/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  public post(path: PathsKubePOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Manage a single node on your cluster
  Delete a node on your cluster
  **/
  public delete(path: '/kube/{serviceName}/publiccloud/node/{nodeId}', pathParams: {nodeId: string, serviceName: string}): Promise<void>;
  public delete(path: PathsKubeDELETE, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
