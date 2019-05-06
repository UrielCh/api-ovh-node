import { ApiCommon } from '@ovh-api/common';
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
   * Status
   *
   */
  status?: KubeNodeStatus;
  /**
   * Node last update date
   *
   */
  updatedAt?: Date;
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
type PathskubeGET = '/kube/{serviceName}' | 
'/kube/{serviceName}/kubeconfig' | 
'/kube/{serviceName}/serviceInfos' | 
'/kube/{serviceName}/publiccloud/node' | 
'/kube/{serviceName}/publiccloud/node/{nodeId}' | 
'/kube/{serviceName}/publiccloud/project' | 
'/kube';

type PathskubePUT = '/kube/{serviceName}' | 
'/kube/{serviceName}/serviceInfos' | 
'/kube/{serviceName}/updatePolicy';

type PathskubePOST = '/kube/{serviceName}/confirmTermination' | 
'/kube/{serviceName}/changeContact' | 
'/kube/{serviceName}/update' | 
'/kube/{serviceName}/terminate' | 
'/kube/{serviceName}/publiccloud/node' | 
'/kube/{serviceName}/reset';

type PathskubeDELETE = '/kube/{serviceName}/publiccloud/node/{nodeId}';

class Apikube extends ApiCommon {
  /**
  Manage your cluster
  Get information about your managed Kubernetes cluster
  **/
  public get(path: '/kube/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<KubeCluster>;
  /**
  Get your cluster configuration
  Get kubeconfig file
  **/
  public get(path: '/kube/{serviceName}/kubeconfig', pathParams: {serviceName?: string}, queryParams: null): Promise<KubeKubeconfig>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/kube/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Manage your Public Cloud cluster nodes
  List your nodes on Public Cloud
  **/
  public get(path: '/kube/{serviceName}/publiccloud/node', pathParams: {serviceName?: string}, queryParams: null): Promise<KubeNode[]>;
  /**
  Manage a single node on your cluster
  Get information on a specific node on your cluster
  **/
  public get(path: '/kube/{serviceName}/publiccloud/node/{nodeId}', pathParams: {nodeId?: string, serviceName?: string}, queryParams: null): Promise<KubeNode>;
  /**
  Manage your Public Cloud projects linked to your cluster
  List your Public Cloud projects linked to your cluster
  **/
  public get(path: '/kube/{serviceName}/publiccloud/project', pathParams: {serviceName?: string}, queryParams: null): Promise<KubePublicCloudProject[]>;
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
  public put(path: '/kube/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/kube/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Manage the update policy of your cluster
  Change the update policy of your cluster
  **/
  public put(path: '/kube/{serviceName}/updatePolicy', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathskubePUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/kube/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/kube/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  Update cluster
  Update cluster to the latest patch version
  **/
  public post(path: '/kube/{serviceName}/update', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/kube/{serviceName}/terminate', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  Manage your Public Cloud cluster nodes
  Deploy a node for your cluster on Public Cloud
  **/
  public post(path: '/kube/{serviceName}/publiccloud/node', pathParams: {serviceName?: string}, bodyParams: null): Promise<KubeNode>;
  /**
  Reset your cluster
  Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
  **/
  public post(path: '/kube/{serviceName}/reset', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public post(path: PathskubePOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Manage a single node on your cluster
  Delete a node on your cluster
  **/
  public delete(path: '/kube/{serviceName}/publiccloud/node/{nodeId}', pathParams: {nodeId?: string, serviceName?: string}, bodyParams: null): Promise<void>;
  public delete(path: PathskubeDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
