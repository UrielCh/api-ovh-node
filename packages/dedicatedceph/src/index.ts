import { ApiCommon } from '@ovh-api/common';
/**
 * List of permissions
 */
export interface DedicatedCephUserPoolPermListResponse {
  /**
   * Read permission
   *
   */
  read?: boolean;
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
   * Write permission
   *
   */
  write?: boolean;
  /**
   * Name of Ceph pool
   *
   */
  poolName?: string;
}
/**
 * List of cluster users
 */
export interface DedicatedCephUserListResponse {
  /**
   * Capabilities of user on MON
   *
   */
  monCaps?: string;
  /**
   * Capabilities of user on OSD
   *
   */
  osdCaps?: string;
  /**
   * Name of ceph user
   *
   */
  name?: string;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
  /**
   * Capabilities of user on MDS
   *
   */
  mdsCaps?: string;
  /**
   * Key of user to connect into cluster
   *
   */
  key?: string;
}
/**
 * IP ACL
 */
export interface DedicatedCephAclGetResponse {
  /**
   * Netmask of IP ACL
   *
   */
  netmask?: string;
  /**
   * ID of IP ACL
   *
   */
  id?: Number;
  /**
   * Family of IP ACL
   *
   */
  family?: DedicatedCephAclGetResponseFamilyEnum;
  /**
   * Network of IP ACL
   *
   */
  network?: string;
}
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * State of cluster
 */
export type DedicatedCephClusterGetResponseStateEnum = 'ACTIVE' | 'SUSPENDED';
/**
 * Details about ceph cluster
 */
export interface DedicatedCephClusterGetResponse {
  /**
   * Last update date
   *
   */
  updateDate?: string;
  /**
   * Size of cluster in TB
   *
   */
  size?: Number;
  /**
   * List of CEPH monitor IPs
   *
   */
  cephMons?: string[];
  /**
   * Tunables of cluster
   *
   */
  crushTunables?: DedicatedCephClusterGetResponseCrushTunablesEnum;
  /**
   * State of cluster
   *
   */
  state?: DedicatedCephClusterGetResponseStateEnum;
  /**
   * Name of cluster
   *
   */
  label?: string;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
  /**
   * Name of region where cluster is located
   *
   */
  region?: string;
  /**
   * Used version of ceph
   *
   */
  cephVersion?: string;
  /**
   * Status of cluster
   *
   */
  status?: DedicatedCephClusterGetResponseStatusEnum;
  /**
   * Creation date
   *
   */
  createDate?: string;
}
/**
 * list of task subtasks
 */
export interface DedicatedCephTaskGetResponse {
  /**
   * Name of task
   *
   */
  name?: string;
  /**
   * Finish date of task
   *
   */
  finishDate?: string;
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
  /**
   * Creation date of task
   *
   */
  createDate?: string;
}
/**
 * List of active tasks
 */
export interface DedicatedCephTaskListResponse {
  /**
   * Name of task
   *
   */
  name?: string;
  /**
   * ID of task
   *
   */
  id?: string;
}
/**
 * Type of pool
 */
export type DedicatedCephPoolGetResponsePoolTypeEnum = 'REPLICATED' | 'ERASURE_CODED';
/**
 * Type of pool
 */
export type DedicatedCephPoolListResponsePoolTypeEnum = 'REPLICATED' | 'ERASURE_CODED';
/**
 * Family of IP ACL
 */
export type DedicatedCephAclGetResponseFamilyEnum = 'IPV4' | 'IPV6';
/**
 * Ceph user
 */
export interface DedicatedCephUserGetResponse {
  /**
   * Capabilities of user on MON
   *
   */
  monCaps?: string;
  /**
   * Capabilities of user on OSD
   *
   */
  osdCaps?: string;
  /**
   * Name of ceph user
   *
   */
  name?: string;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
  /**
   * Capabilities of user on MDS
   *
   */
  mdsCaps?: string;
  /**
   * Key of user to connect into cluster
   *
   */
  key?: string;
}
/**
 * List of permissions
 */
export interface DedicatedCephUserPoolPermSetAllPermissions {
  /**
   * Read permission
   *
   */
  read?: boolean;
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
   * Write permission
   *
   */
  write?: boolean;
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
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Structure holding IP ACLs
 */
export interface DedicatedCephAclListResponse {
  /**
   * Netmask of IP ACL
   *
   */
  netmask?: string;
  /**
   * ID of IP ACL
   *
   */
  id?: Number;
  /**
   * Family of IP ACL
   *
   */
  family?: DedicatedCephAclListResponseFamilyEnum;
  /**
   * Network of IP ACL
   *
   */
  network?: string;
}
/**
 * Status of cluster
 */
export type DedicatedCephClusterGetResponseStatusEnum = 'CREATING' | 'INSTALLED' | 'DELETING' | 'DELETED' | 'TASK_IN_PROGRESS';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * State of task
 */
export type DedicatedCephTaskGetResponseStateEnum = 'IN PROGRESS' | 'DONE' | 'FAILED';
/**
 * Health of ceph cluster
 */
export interface DedicatedCephClusterHealthResponse {
  /**
   * True or False
   *
   */
  healthy?: boolean;
  /**
   * Total cluster space in bytes
   *
   */
  totalBytes?: Number;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
  /**
   * Used cluster space in bytes
   *
   */
  usedBytes?: Number;
  /**
   * Status of ceph cluster
   *
   */
  status?: string;
  /**
   * All available space in bytes
   *
   */
  availableBytes?: Number;
}
/**
 * Tunables of cluster
 */
export type DedicatedCephClusterGetResponseCrushTunablesEnum = 'OPTIMAL' | 'DEFAULT' | 'LEGACY' | 'BOBTAIL' | 'ARGONAUT' | 'FIREFLY' | 'HAMMER' | 'JEWEL';
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
 * Tunables of cluster
 */
export type DedicatedCephClusterUpdateCrushTunablesEnum = 'OPTIMAL' | 'DEFAULT' | 'LEGACY' | 'BOBTAIL' | 'ARGONAUT' | 'FIREFLY' | 'HAMMER' | 'JEWEL';
/**
 * Family of IP ACL
 */
export type DedicatedCephAclListResponseFamilyEnum = 'IPV4' | 'IPV6';
/**
 * Ceph pool
 */
export interface DedicatedCephPoolGetResponse {
  /**
   * Number of replica
   *
   */
  replicaCount?: Number;
  /**
   * Determine if pool should be backuped
   *
   */
  backup?: boolean;
  /**
   * Name of ceph user
   *
   */
  name?: string;
  /**
   * Minimum active replicas
   *
   */
  minActiveReplicas?: Number;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
  /**
   * Type of pool
   *
   */
  poolType?: DedicatedCephPoolGetResponsePoolTypeEnum;
}
/**
 * List of cluster pools
 */
export interface DedicatedCephPoolListResponse {
  /**
   * Number of replica
   *
   */
  replicaCount?: Number;
  /**
   * Determine if pool should be backuped
   *
   */
  backup?: boolean;
  /**
   * Name of ceph user
   *
   */
  name?: string;
  /**
   * Minimum active replicas
   *
   */
  minActiveReplicas?: Number;
  /**
   * ID of cluster
   *
   */
  serviceName?: string;
  /**
   * Type of pool
   *
   */
  poolType?: DedicatedCephPoolListResponsePoolTypeEnum;
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
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
type PathsdedicatedcephGET = '/dedicated/ceph' | 
'/dedicated/ceph/{serviceName}/user/{userName}' | 
'/dedicated/ceph/{serviceName}/user/{userName}/pool' | 
'/dedicated/ceph/{serviceName}/user' | 
'/dedicated/ceph/{serviceName}/serviceInfos' | 
'/dedicated/ceph/{serviceName}' | 
'/dedicated/ceph/{serviceName}/task/{taskId}' | 
'/dedicated/ceph/{serviceName}/task' | 
'/dedicated/ceph/{serviceName}/health' | 
'/dedicated/ceph/{serviceName}/acl' | 
'/dedicated/ceph/{serviceName}/acl/{aclId}' | 
'/dedicated/ceph/{serviceName}/pool' | 
'/dedicated/ceph/{serviceName}/pool/{poolName}';

type PathsdedicatedcephPUT = '/dedicated/ceph/{serviceName}/user/{userName}/pool' | 
'/dedicated/ceph/{serviceName}/serviceInfos' | 
'/dedicated/ceph/{serviceName}';

type PathsdedicatedcephPOST = '/dedicated/ceph/{serviceName}/user/{userName}/pool' | 
'/dedicated/ceph/{serviceName}/user' | 
'/dedicated/ceph/{serviceName}/terminate' | 
'/dedicated/ceph/{serviceName}/changeContact' | 
'/dedicated/ceph/{serviceName}/acl' | 
'/dedicated/ceph/{serviceName}/pool' | 
'/dedicated/ceph/{serviceName}/confirmTermination';

type PathsdedicatedcephDELETE = '/dedicated/ceph/{serviceName}/user/{userName}' | 
'/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}' | 
'/dedicated/ceph/{serviceName}/acl/{aclId}' | 
'/dedicated/ceph/{serviceName}/pool/{poolName}';

class Apidedicatedceph extends ApiCommon {
  /**
  Operations about the CEPH service
  List available services
  **/
  public get(path: '/dedicated/ceph', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  dedicated.ceph.userDelete
  Get details about a ceph user
  **/
  public get(path: '/dedicated/ceph/{serviceName}/user/{userName}', pathParams: {userName?: string, serviceName?: string}, queryParams: null): Promise<DedicatedCephUserGetResponse>;
  /**
  dedicated.ceph.userPoolPermList
  List user-pool permissions
  **/
  public get(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool', pathParams: {userName?: string, serviceName?: string}, queryParams: null): Promise<DedicatedCephUserPoolPermListResponse[]>;
  /**
  dedicated.ceph.userCreate
  Get list of all users in a cluster
  **/
  public get(path: '/dedicated/ceph/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCephUserListResponse[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dedicated/ceph/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  dedicated.ceph.clusterGet
  Get cluster details
  **/
  public get(path: '/dedicated/ceph/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCephClusterGetResponse>;
  /**
  dedicated.ceph.taskGet
  Get task details
  **/
  public get(path: '/dedicated/ceph/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: string}, queryParams: null): Promise<DedicatedCephTaskGetResponse[]>;
  /**
  dedicated.ceph.taskList
  List tasks in progress
  **/
  public get(path: '/dedicated/ceph/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCephTaskListResponse[]>;
  /**
  dedicated.ceph.clusterHealth
  Get cluster health
  **/
  public get(path: '/dedicated/ceph/{serviceName}/health', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCephClusterHealthResponse>;
  /**
  dedicated.ceph.aclCreate
  Get list of all IP ACLs in a cluster
  **/
  public get(path: '/dedicated/ceph/{serviceName}/acl', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCephAclListResponse[]>;
  /**
  dedicated.ceph.aclDeleteSingle
  Get details about IP ACL
  **/
  public get(path: '/dedicated/ceph/{serviceName}/acl/{aclId}', pathParams: {serviceName?: string, aclId?: string}, queryParams: null): Promise<DedicatedCephAclGetResponse>;
  /**
  dedicated.ceph.poolCreate
  Get list of all pools in a cluster
  **/
  public get(path: '/dedicated/ceph/{serviceName}/pool', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedCephPoolListResponse[]>;
  /**
  dedicated.ceph.poolDelete
  Get details about an existing ceph pool
  **/
  public get(path: '/dedicated/ceph/{serviceName}/pool/{poolName}', pathParams: {serviceName?: string, poolName?: string}, queryParams: null): Promise<DedicatedCephPoolGetResponse>;
  public get(path: PathsdedicatedcephGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  dedicated.ceph.userPoolPermList
  Update user-pool permission for single pool
  **/
  public put(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool', pathParams: {userName?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dedicated/ceph/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  dedicated.ceph.clusterGet
  Update cluster details
  **/
  public put(path: '/dedicated/ceph/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  public put(path: PathsdedicatedcephPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  dedicated.ceph.userPoolPermList
  Create new user-pool permissions. All old permissions will be cleared
  **/
  public post(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool', pathParams: {userName?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  dedicated.ceph.userCreate
  Create a new ceph user
  **/
  public post(path: '/dedicated/ceph/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/dedicated/ceph/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/dedicated/ceph/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  dedicated.ceph.aclCreate
  Create one or more new IP ACLs
  **/
  public post(path: '/dedicated/ceph/{serviceName}/acl', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  dedicated.ceph.poolCreate
  Create a new ceph pool
  **/
  public post(path: '/dedicated/ceph/{serviceName}/pool', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/dedicated/ceph/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  public post(path: PathsdedicatedcephPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  dedicated.ceph.userDelete
  Delete an existing single ceph user
  **/
  public delete(path: '/dedicated/ceph/{serviceName}/user/{userName}', pathParams: {userName?: string, serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  dedicated.ceph.userPoolPermDelete
  Clear user-pool permission for single pool
  **/
  public delete(path: '/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}', pathParams: {userName?: string, serviceName?: string, poolName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  dedicated.ceph.aclDeleteSingle
  Delete single IP ACL
  **/
  public delete(path: '/dedicated/ceph/{serviceName}/acl/{aclId}', pathParams: {serviceName?: string, aclId?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  dedicated.ceph.poolDelete
  Delete a single ceph pool
  **/
  public delete(path: '/dedicated/ceph/{serviceName}/pool/{poolName}', pathParams: {serviceName?: string, poolName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  public delete(path: PathsdedicatedcephDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
