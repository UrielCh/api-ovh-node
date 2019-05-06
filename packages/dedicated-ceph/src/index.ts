import { ApiCommon } from '@ovh-api/common';
/**
 * IP ACL
 */
export interface DedicatedCephAclGetResponse {
  /**
   * Family of IP ACL
   *
   */
  family?: DedicatedCephAclGetResponseFamilyEnum;
  /**
   * ID of IP ACL
   *
   */
  id?: Number;
  /**
   * Netmask of IP ACL
   *
   */
  netmask?: string;
  /**
   * Network of IP ACL
   *
   */
  network?: string;
}
/**
 * Family of IP ACL
 */
export type DedicatedCephAclGetResponseFamilyEnum = 'IPV4' | 'IPV6';
/**
 * Structure holding IP ACLs
 */
export interface DedicatedCephAclListResponse {
  /**
   * Family of IP ACL
   *
   */
  family?: DedicatedCephAclListResponseFamilyEnum;
  /**
   * ID of IP ACL
   *
   */
  id?: Number;
  /**
   * Netmask of IP ACL
   *
   */
  netmask?: string;
  /**
   * Network of IP ACL
   *
   */
  network?: string;
}
/**
 * Family of IP ACL
 */
export type DedicatedCephAclListResponseFamilyEnum = 'IPV4' | 'IPV6';
/**
 * Details about ceph cluster
 */
export interface DedicatedCephClusterGetResponse {
  /**
   * List of CEPH monitor IPs
   *
   */
  cephMons?: string[];
  /**
   * Used version of ceph
   *
   */
  cephVersion?: string;
  /**
   * Creation date
   *
   */
  createDate?: string;
  /**
   * Tunables of cluster
   *
   */
  crushTunables?: DedicatedCephClusterGetResponseCrushTunablesEnum;
  /**
   * Name of cluster
   *
   */
  label?: string;
  /**
   * Name of region where cluster is located
   *
   */
  region?: string;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
  /**
   * Size of cluster in TB
   *
   */
  size?: Number;
  /**
   * State of cluster
   *
   */
  state?: DedicatedCephClusterGetResponseStateEnum;
  /**
   * Status of cluster
   *
   */
  status?: DedicatedCephClusterGetResponseStatusEnum;
  /**
   * Last update date
   *
   */
  updateDate?: string;
}
/**
 * Tunables of cluster
 */
export type DedicatedCephClusterGetResponseCrushTunablesEnum = 'ARGONAUT' | 'BOBTAIL' | 'DEFAULT' | 'FIREFLY' | 'HAMMER' | 'JEWEL' | 'LEGACY' | 'OPTIMAL';
/**
 * State of cluster
 */
export type DedicatedCephClusterGetResponseStateEnum = 'ACTIVE' | 'SUSPENDED';
/**
 * Status of cluster
 */
export type DedicatedCephClusterGetResponseStatusEnum = 'CREATING' | 'DELETED' | 'DELETING' | 'INSTALLED' | 'TASK_IN_PROGRESS';
/**
 * Health of ceph cluster
 */
export interface DedicatedCephClusterHealthResponse {
  /**
   * All available space in bytes
   *
   */
  availableBytes?: Number;
  /**
   * True or False
   *
   */
  healthy?: boolean;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
  /**
   * Status of ceph cluster
   *
   */
  status?: string;
  /**
   * Total cluster space in bytes
   *
   */
  totalBytes?: Number;
  /**
   * Used cluster space in bytes
   *
   */
  usedBytes?: Number;
}
/**
 * Tunables of cluster
 */
export type DedicatedCephClusterUpdateCrushTunablesEnum = 'ARGONAUT' | 'BOBTAIL' | 'DEFAULT' | 'FIREFLY' | 'HAMMER' | 'JEWEL' | 'LEGACY' | 'OPTIMAL';
/**
 * Ceph pool
 */
export interface DedicatedCephPoolGetResponse {
  /**
   * Determine if pool should be backuped
   *
   */
  backup?: boolean;
  /**
   * Minimum active replicas
   *
   */
  minActiveReplicas?: Number;
  /**
   * Name of ceph user
   *
   */
  name?: string;
  /**
   * Type of pool
   *
   */
  poolType?: DedicatedCephPoolGetResponsePoolTypeEnum;
  /**
   * Number of replica
   *
   */
  replicaCount?: Number;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
}
/**
 * Type of pool
 */
export type DedicatedCephPoolGetResponsePoolTypeEnum = 'ERASURE_CODED' | 'REPLICATED';
/**
 * List of cluster pools
 */
export interface DedicatedCephPoolListResponse {
  /**
   * Determine if pool should be backuped
   *
   */
  backup?: boolean;
  /**
   * Minimum active replicas
   *
   */
  minActiveReplicas?: Number;
  /**
   * Name of ceph user
   *
   */
  name?: string;
  /**
   * Type of pool
   *
   */
  poolType?: DedicatedCephPoolListResponsePoolTypeEnum;
  /**
   * Number of replica
   *
   */
  replicaCount?: Number;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
}
/**
 * Type of pool
 */
export type DedicatedCephPoolListResponsePoolTypeEnum = 'ERASURE_CODED' | 'REPLICATED';
/**
 * list of task subtasks
 */
export interface DedicatedCephTaskGetResponse {
  /**
   * Creation date of task
   *
   */
  createDate?: string;
  /**
   * Finish date of task
   *
   */
  finishDate?: string;
  /**
   * Name of task
   *
   */
  name?: string;
  /**
   * State of task
   *
   */
  state?: DedicatedCephTaskGetResponseStateEnum;
  /**
   * Type of task
   *
   */
  type?: string;
}
/**
 * State of task
 */
export type DedicatedCephTaskGetResponseStateEnum = 'DONE' | 'FAILED' | 'IN PROGRESS';
/**
 * List of active tasks
 */
export interface DedicatedCephTaskListResponse {
  /**
   * ID of task
   *
   */
  id?: string;
  /**
   * Name of task
   *
   */
  name?: string;
}
/**
 * Ceph user
 */
export interface DedicatedCephUserGetResponse {
  /**
   * Key of user to connect into cluster
   *
   */
  key?: string;
  /**
   * Capabilities of user on MDS
   *
   */
  mdsCaps?: string;
  /**
   * Capabilities of user on MON
   *
   */
  monCaps?: string;
  /**
   * Name of ceph user
   *
   */
  name?: string;
  /**
   * Capabilities of user on OSD
   *
   */
  osdCaps?: string;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
}
/**
 * List of cluster users
 */
export interface DedicatedCephUserListResponse {
  /**
   * Key of user to connect into cluster
   *
   */
  key?: string;
  /**
   * Capabilities of user on MDS
   *
   */
  mdsCaps?: string;
  /**
   * Capabilities of user on MON
   *
   */
  monCaps?: string;
  /**
   * Name of ceph user
   *
   */
  name?: string;
  /**
   * Capabilities of user on OSD
   *
   */
  osdCaps?: string;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
}
/**
 * List of permissions
 */
export interface DedicatedCephUserPoolPermListResponse {
  /**
   * Class read permission
   *
   */
  classRead?: boolean;
  /**
   * Class write permission
   *
   */
  classWrite?: boolean;
  /**
   * Execute permission
   *
   */
  execute?: boolean;
  /**
   * Name of Ceph pool
   *
   */
  poolName?: string;
  /**
   * Read permission
   *
   */
  read?: boolean;
  /**
   * Write permission
   *
   */
  write?: boolean;
}
/**
 * List of permissions
 */
export interface DedicatedCephUserPoolPermSetAllPermissions {
  /**
   * Class read permission
   *
   */
  classRead?: boolean;
  /**
   * Class write permission
   *
   */
  classWrite?: boolean;
  /**
   * Execute permission
   *
   */
  execute?: boolean;
  /**
   * Name of Ceph pool
   *
   */
  poolName?: string;
  /**
   * Read permission
   *
   */
  read?: boolean;
  /**
   * Write permission
   *
   */
  write?: boolean;
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
type PathsDedicatedCephGET = '/dedicated/ceph' | 
'/dedicated/ceph/{serviceName}/acl' | 
'/dedicated/ceph/{serviceName}/acl/{aclId}' | 
'/dedicated/ceph/{serviceName}/task/{taskId}' | 
'/dedicated/ceph/{serviceName}/task' | 
'/dedicated/ceph/{serviceName}/user' | 
'/dedicated/ceph/{serviceName}/user/{userName}' | 
'/dedicated/ceph/{serviceName}/user/{userName}/pool' | 
'/dedicated/ceph/{serviceName}/health' | 
'/dedicated/ceph/{serviceName}' | 
'/dedicated/ceph/{serviceName}/serviceInfos' | 
'/dedicated/ceph/{serviceName}/pool' | 
'/dedicated/ceph/{serviceName}/pool/{poolName}';

type PathsDedicatedCephPUT = '/dedicated/ceph/{serviceName}/user/{userName}/pool' | 
'/dedicated/ceph/{serviceName}' | 
'/dedicated/ceph/{serviceName}/serviceInfos';

type PathsDedicatedCephPOST = '/dedicated/ceph/{serviceName}/acl' | 
'/dedicated/ceph/{serviceName}/changeContact' | 
'/dedicated/ceph/{serviceName}/user' | 
'/dedicated/ceph/{serviceName}/user/{userName}/pool' | 
'/dedicated/ceph/{serviceName}/confirmTermination' | 
'/dedicated/ceph/{serviceName}/terminate' | 
'/dedicated/ceph/{serviceName}/pool';

type PathsDedicatedCephDELETE = '/dedicated/ceph/{serviceName}/acl/{aclId}' | 
'/dedicated/ceph/{serviceName}/user/{userName}' | 
'/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}' | 
'/dedicated/ceph/{serviceName}/pool/{poolName}';

export class ApiDedicatedCeph extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the CEPH service
  List available services
  **/
  public get(path: '/dedicated/ceph'): Promise<string[]>;
  /**
  dedicated.ceph.aclCreate
  Get list of all IP ACLs in a cluster
  **/
  public get(path: '/dedicated/ceph/{serviceName}/acl', pathParams: {serviceName: string}): Promise<DedicatedCephAclListResponse[]>;
  /**
  dedicated.ceph.aclDeleteSingle
  Get details about IP ACL
  **/
  public get(path: '/dedicated/ceph/{serviceName}/acl/{aclId}', pathParams: {serviceName: string, aclId: string}): Promise<DedicatedCephAclGetResponse>;
  /**
  dedicated.ceph.taskGet
  Get task details
  **/
  public get(path: '/dedicated/ceph/{serviceName}/task/{taskId}', pathParams: {serviceName: string, taskId: string}): Promise<DedicatedCephTaskGetResponse[]>;
  /**
  dedicated.ceph.taskList
  List tasks in progress
  **/
  public get(path: '/dedicated/ceph/{serviceName}/task', pathParams: {serviceName: string}): Promise<DedicatedCephTaskListResponse[]>;
  /**
  dedicated.ceph.userCreate
  Get list of all users in a cluster
  **/
  public get(path: '/dedicated/ceph/{serviceName}/user', pathParams: {serviceName: string}): Promise<DedicatedCephUserListResponse[]>;
  /**
  dedicated.ceph.userDelete
  Get details about a ceph user
  **/
  public get(path: '/dedicated/ceph/{serviceName}/user/{userName}', pathParams: {userName: string, serviceName: string}): Promise<DedicatedCephUserGetResponse>;
  /**
  dedicated.ceph.userPoolPermList
  List user-pool permissions
  **/
  public get(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool', pathParams: {userName: string, serviceName: string}): Promise<DedicatedCephUserPoolPermListResponse[]>;
  /**
  dedicated.ceph.clusterHealth
  Get cluster health
  **/
  public get(path: '/dedicated/ceph/{serviceName}/health', pathParams: {serviceName: string}): Promise<DedicatedCephClusterHealthResponse>;
  /**
  dedicated.ceph.clusterGet
  Get cluster details
  **/
  public get(path: '/dedicated/ceph/{serviceName}', pathParams: {serviceName: string}): Promise<DedicatedCephClusterGetResponse>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dedicated/ceph/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  dedicated.ceph.poolCreate
  Get list of all pools in a cluster
  **/
  public get(path: '/dedicated/ceph/{serviceName}/pool', pathParams: {serviceName: string}): Promise<DedicatedCephPoolListResponse[]>;
  /**
  dedicated.ceph.poolDelete
  Get details about an existing ceph pool
  **/
  public get(path: '/dedicated/ceph/{serviceName}/pool/{poolName}', pathParams: {serviceName: string, poolName: string}): Promise<DedicatedCephPoolGetResponse>;
  public get(path: PathsDedicatedCephGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  dedicated.ceph.userPoolPermList
  Update user-pool permission for single pool
  **/
  public put(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool', pathParams: {userName: string, serviceName: string}): Promise<string>;
  /**
  dedicated.ceph.clusterGet
  Update cluster details
  **/
  public put(path: '/dedicated/ceph/{serviceName}', pathParams: {serviceName: string}): Promise<string>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dedicated/ceph/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsDedicatedCephPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  dedicated.ceph.aclCreate
  Create one or more new IP ACLs
  **/
  public post(path: '/dedicated/ceph/{serviceName}/acl', pathParams: {serviceName: string}): Promise<string>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/dedicated/ceph/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  dedicated.ceph.userCreate
  Create a new ceph user
  **/
  public post(path: '/dedicated/ceph/{serviceName}/user', pathParams: {serviceName: string}): Promise<string>;
  /**
  dedicated.ceph.userPoolPermList
  Create new user-pool permissions. All old permissions will be cleared
  **/
  public post(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool', pathParams: {userName: string, serviceName: string}): Promise<string>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/dedicated/ceph/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/dedicated/ceph/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  /**
  dedicated.ceph.poolCreate
  Create a new ceph pool
  **/
  public post(path: '/dedicated/ceph/{serviceName}/pool', pathParams: {serviceName: string}): Promise<string>;
  public post(path: PathsDedicatedCephPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  dedicated.ceph.aclDeleteSingle
  Delete single IP ACL
  **/
  public delete(path: '/dedicated/ceph/{serviceName}/acl/{aclId}', pathParams: {serviceName: string, aclId: string}): Promise<string>;
  /**
  dedicated.ceph.userDelete
  Delete an existing single ceph user
  **/
  public delete(path: '/dedicated/ceph/{serviceName}/user/{userName}', pathParams: {userName: string, serviceName: string}): Promise<string>;
  /**
  dedicated.ceph.userPoolPermDelete
  Clear user-pool permission for single pool
  **/
  public delete(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}', pathParams: {userName: string, serviceName: string, poolName: string}): Promise<string>;
  /**
  dedicated.ceph.poolDelete
  Delete a single ceph pool
  **/
  public delete(path: '/dedicated/ceph/{serviceName}/pool/{poolName}', pathParams: {serviceName: string, poolName: string}): Promise<string>;
  public delete(path: PathsDedicatedCephDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
