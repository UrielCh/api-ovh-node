import { ApiCommon } from '@ovh-api/common';
/**
 * Enum values for worker nodes reset policy
 */
export type KubeResetWorkerNodesPolicy = 'reinstall' | 'delete';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Enum values for Status
 */
export type KubeNodeStatus = 'INSTALLING' | 'UPDATING' | 'RESETTING' | 'SUSPENDING' | 'REOPENING' | 'DELETING' | 'SUSPENDED' | 'ERROR' | 'USER_ERROR' | 'USER_QUOTA_ERROR' | 'USER_NODE_NOT_FOUND_ERROR' | 'USER_NODE_SUSPENDED_SERVICE' | 'READY';
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
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
   * Public Cloud flavor name
   *
   */
  flavor?: string;
  /**
   * True if the node is up to date
   *
   */
  isUpToDate?: boolean;
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
   * Public Cloud project ID where the node is started
   *
   */
  projectId?: string;
  /**
   * Node last update date
   *
   */
  updatedAt?: Date;
  /**
   * Status
   *
   */
  status?: KubeNodeStatus;
}
/**
 * Description not available
 */
export type KubeVersion = '1.11' | '1.12' | '1.13';
/**
 * Enum values for UpdatePolicy
 */
export type KubeUpdatePolicy = 'ALWAYS_UPDATE' | 'MINIMAL_DOWNTIME' | 'NEVER_UPDATE';
/**
 * Managed Kubernetes cluster description
 */
export interface KubeCluster {
  /**
   * True if all nodes and control-plane are up to date
   *
   */
  isUpToDate?: boolean;
  /**
   * Cluster nodes URL
   *
   */
  nodesUrl?: string;
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
   * Cluster status
   *
   */
  status?: KubeClusterStatus;
  /**
   * Cluster last update date
   *
   */
  updatedAt?: Date;
}
/**
 * Public Cloud project linked to a Kube cluster
 */
export interface KubePublicCloudProject {
  /**
   * Public Cloud region associated with your cluster
   *
   */
  region?: string;
  /**
   * Public Cloud project ID
   *
   */
  projectId?: string;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Enum values for Status
 */
export type KubeClusterStatus = 'INSTALLING' | 'UPDATING' | 'RESETTING' | 'SUSPENDING' | 'REOPENING' | 'DELETING' | 'SUSPENDED' | 'ERROR' | 'USER_ERROR' | 'USER_QUOTA_ERROR' | 'READY';
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
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
type PathskubeGET = '/kube/{serviceName}/publiccloud/project' | 
'/kube/{serviceName}/publiccloud/node/{nodeId}' | 
'/kube/{serviceName}/publiccloud/node' | 
'/kube/{serviceName}' | 
'/kube/{serviceName}/serviceInfos' | 
'/kube/{serviceName}/kubeconfig' | 
'/kube';

type PathskubePUT = '/kube/{serviceName}' | 
'/kube/{serviceName}/serviceInfos' | 
'/kube/{serviceName}/updatePolicy';

type PathskubePOST = '/kube/{serviceName}/publiccloud/node' | 
'/kube/{serviceName}/confirmTermination' | 
'/kube/{serviceName}/terminate' | 
'/kube/{serviceName}/reset' | 
'/kube/{serviceName}/update' | 
'/kube/{serviceName}/changeContact';

type PathskubeDELETE = '/kube/{serviceName}/publiccloud/node/{nodeId}';

class Apikube extends ApiCommon {
  /**
  Manage your Public Cloud projects linked to your cluster
  List your Public Cloud projects linked to your cluster
  **/
  public get(path: '/kube/{serviceName}/publiccloud/project', pathParams: {serviceName?: string}, queryParams: null): Promise<KubePublicCloudProject[]>;
  /**
  Manage a single node on your cluster
  Get information on a specific node on your cluster
  **/
  public get(path: '/kube/{serviceName}/publiccloud/node/{nodeId}', pathParams: {nodeId?: string, serviceName?: string}, queryParams: null): Promise<KubeNode>;
  /**
  Manage your Public Cloud cluster nodes
  List your nodes on Public Cloud
  **/
  public get(path: '/kube/{serviceName}/publiccloud/node', pathParams: {serviceName?: string}, queryParams: null): Promise<KubeNode[]>;
  /**
  Manage your cluster
  Get information about your managed Kubernetes cluster
  **/
  public get(path: '/kube/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<KubeCluster>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/kube/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Get your cluster configuration
  Get kubeconfig file
  **/
  public get(path: '/kube/{serviceName}/kubeconfig', pathParams: {serviceName?: string}, queryParams: null): Promise<KubeKubeconfig>;
  /**
  Operations about the KUBERNETES service
  List available services
  **/
  public get(path: '/kube', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathskubeGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Manage your cluster
  Update information about your managed Kubernetes cluster
  **/
  public put(path: '/kube/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/kube/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Manage the update policy of your cluster
  Change the update policy of your cluster
  **/
  public put(path: '/kube/{serviceName}/updatePolicy', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathskubePUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  Manage your Public Cloud cluster nodes
  Deploy a node for your cluster on Public Cloud
  **/
  public post(path: '/kube/{serviceName}/publiccloud/node', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<KubeNode>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/kube/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/kube/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Reset your cluster
  Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
  **/
  public post(path: '/kube/{serviceName}/reset', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Update cluster
  Update cluster to the latest patch version
  **/
  public post(path: '/kube/{serviceName}/update', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/kube/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  public post(path: PathskubePOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Manage a single node on your cluster
  Delete a node on your cluster
  **/
  public delete(path: '/kube/{serviceName}/publiccloud/node/{nodeId}', pathParams: {nodeId?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public delete(path: PathskubeDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
