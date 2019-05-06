import { ApiCommon } from '@ovh-api/common';
/**
 * Detailed information on a node billing profile
 */
export interface ClusterHadoopNodeBillingProfile {
  /**
   * Name of the Node billing profile
   *
   */
  nodeProfile?: string;
  /**
   * Total number of the CPU cores
   *
   */
  nbCPUCores?: Number;
  /**
   * Total amount of RAM
   *
   */
  ramQuantity?: ComplexTypeUnitAndValue<Number>;
  /**
   * Frequency of one CPU core
   *
   */
  CPUFrequency?: ComplexTypeUnitAndValue<Number>;
  /**
   * Total number of the CPU threads
   *
   */
  nbCPUThreads?: Number;
  /**
   * Total capacity available for HDFS
   *
   */
  diskCapacity?: ComplexTypeUnitAndValue<Number>;
  /**
   * Network speed of the link used for the Hadoop process
   *
   */
  networkBandwidth?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * User allowed to access interfaces on your cluster
 */
export interface ClusterHadoopUser {
  /**
   * Whether or not the User is allowed to access to the WebUI interfaces
   *
   */
  httpFrontend?: boolean;
  /**
   * Whether or not the User is allowed to access to the Cloudera Manager interface
   *
   */
  clouderaManager?: boolean;
  /**
   * Whether or not the User is allowed to access to the Hue interface
   *
   */
  hue?: boolean;
  /**
   * The username of the User
   *
   */
  username?: string;
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
 * All states a Hadoop Cluster Cloud Task can be in
 */
export type ClusterHadoopOperationStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Detailed information on a Hadoop Cluster consumption
 */
export interface ClusterHadoopClusterConsumption {
  /**
   * Number of hours consummed
   *
   */
  quantity?: ComplexTypeUnitAndValue<Number>;
}
/**
 * All states a Hadoop Cluster NetworkAcl can be in
 */
export type ClusterHadoopNetworkAclStateEnum = 'disabled' | 'enabled' | 'pending';
/**
 * All services names in a Hadoop Cluster
 */
export type ClusterHadoopClusterServiceNameEnum = 'HBase' | 'HDFS' | 'HUE' | 'Hive' | 'Oozie' | 'Solr' | 'Spark' | 'Sqoop' | 'YARN' | 'ZooKeeper';
/**
 * All profiles a Hadoop Cluster Node can be
 */
export type ClusterHadoopNodeProfileEnum = 'ApplicationServer' | 'BasicNode' | 'ClouderaManager' | 'MasterServer' | 'SecondaryServer';
/**
 * Role (ie set of Hadoop services) of the Node
 */
export interface ClusterHadoopRole {
  /**
   * ID of the Role
   *
   */
  id?: Number;
  /**
   * Role name
   *
   */
  type?: ClusterHadoopRoleTypeEnum;
}
/**
 * Detailed information on the order of one Hadoop Cluster
 */
export interface ClusterHadoopOrderInformations {
  /**
   * Maximal number of Node allowed in one order
   *
   */
  maximumOrderableNodes?: Number;
  /**
   * Minimum number of Node allowed in one order
   *
   */
  minimumOrderableNodes?: Number;
}
/**
 * All states a Hadoop Cluster can be in
 */
export type ClusterHadoopClusterStateEnum = 'created' | 'creating' | 'deleted' | 'deleting' | 'delivered' | 'delivering' | 'toDeliver';
/**
 * Physical or Virtual Node
 */
export interface ClusterHadoopNode {
  /**
   * Hostname of the node
   *
   */
  hostname?: string;
  /**
   * Name of the billing profile attached to the node
   *
   */
  billingProfileName?: ClusterHadoopBillingNameEnum;
  /**
   * IP of the Node
   *
   */
  ip?: string;
  /**
   * Profile of the Node
   *
   */
  softwareProfile?: ClusterHadoopNodeProfileEnum;
  /**
   * Wether or not the Node is removable
   *
   */
  isRemovable?: boolean;
  /**
   * State of the Node
   *
   */
  state?: ClusterHadoopNodeStateEnum;
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
 * Managed Hadoop Cluster
 */
export interface ClusterHadoopHadoop {
  /**
   * Maximum quantity of nodes allowed to be ordered in the cluster
   *
   */
  maxOrderableNodes?: Number;
  /**
   * Service name of your Cluster
   *
   */
  name?: string;
  /**
   * State of the Hadoop Cluster
   *
   */
  state?: ClusterHadoopClusterStateEnum;
  /**
   * CDH and Cloudera Manager version
   *
   */
  clouderaVersion?: string;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * All billing profile names
 */
export type ClusterHadoopBillingNameEnum = '100-small' | '200-cpu-1' | '220-cpu-3' | '300-disk-1' | '310-disk-3' | '900-vm-1';
/**
 * All states a Hadoop Cluster Node can be in
 */
export type ClusterHadoopNodeStateEnum = 'available' | 'delivered' | 'toDeploy' | 'unavailable';
/**
 * ACL for allowing ip blocks to access to your cluster
 */
export interface ClusterHadoopNetworkAcl {
  /**
   * description of this ACL
   *
   */
  description?: string;
  /**
   * IP Block to allow
   *
   */
  block?: string;
  /**
   * State of the NetworkAcl.
   *
   */
  state?: ClusterHadoopNetworkAclStateEnum;
}
/**
 * Detailed information on a node consumption of a Hadoop Cluster
 */
export interface ClusterHadoopNodeConsumption {
  /**
   * Name of the node profile for the consumptions
   *
   */
  nodeProfile?: ClusterHadoopBillingNameEnum;
  /**
   * Hostname of the consumed resource
   *
   */
  hostname?: string;
  /**
   * Number of hours consummed
   *
   */
  quantity?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Operation on a Hadoop Cluster component
 */
export interface ClusterHadoopTask {
  /**
   * Operation name
   *
   */
  name?: string;
  /**
   */
  taskId?: Number;
  /**
   * Current Task state
   *
   */
  status?: ClusterHadoopOperationStateEnum;
}
/**
 * All roles a Hadoop Cluster Node can be
 */
export type ClusterHadoopRoleTypeEnum = 'cloudera_manager' | 'data_node' | 'elasticsearch_server' | 'hbase_master' | 'hbase_region_server' | 'hive_server2' | 'hue' | 'impala_daemon' | 'impala_server' | 'map_reduce_history_server' | 'name_node' | 'oozie_server' | 'open_tsdb' | 'secondary_name_node' | 'solr_server' | 'spark_master' | 'spark_worker' | 'sqoop_server' | 'yarn_node_manager' | 'yarn_resource_manager' | 'zoo_keeper';
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
type PathsclusterhadoopGET = '/cluster/hadoop/orderableNodeProfiles' | 
'/cluster/hadoop/orderInformations' | 
'/cluster/hadoop' | 
'/cluster/hadoop/{serviceName}/user/{username}' | 
'/cluster/hadoop/{serviceName}/user' | 
'/cluster/hadoop/{serviceName}/node' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}' | 
'/cluster/hadoop/{serviceName}/node/{hostname}' | 
'/cluster/hadoop/{serviceName}/nodeBillingProfiles' | 
'/cluster/hadoop/{serviceName}/task/{taskId}' | 
'/cluster/hadoop/{serviceName}/task' | 
'/cluster/hadoop/{serviceName}' | 
'/cluster/hadoop/{serviceName}/consumptions' | 
'/cluster/hadoop/{serviceName}/serviceInfos' | 
'/cluster/hadoop/{serviceName}/orderableNodeProfiles' | 
'/cluster/hadoop/{serviceName}/nodeConsumptions' | 
'/cluster/hadoop/{serviceName}/networkAcl/{block}' | 
'/cluster/hadoop/{serviceName}/networkAcl';

type PathsclusterhadoopPUT = '/cluster/hadoop/{serviceName}/user/{username}' | 
'/cluster/hadoop/{serviceName}/serviceInfos' | 
'/cluster/hadoop/{serviceName}/networkAcl/{block}';

type PathsclusterhadoopPOST = '/cluster/hadoop/{serviceName}/user/{username}/resetPassword' | 
'/cluster/hadoop/{serviceName}/user' | 
'/cluster/hadoop/{serviceName}/service/start' | 
'/cluster/hadoop/{serviceName}/service/stop' | 
'/cluster/hadoop/{serviceName}/service/restart' | 
'/cluster/hadoop/{serviceName}/restart' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/recommission' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/decommission' | 
'/cluster/hadoop/{serviceName}/terminate' | 
'/cluster/hadoop/{serviceName}/orderNewNodeHourly' | 
'/cluster/hadoop/{serviceName}/stop' | 
'/cluster/hadoop/{serviceName}/start' | 
'/cluster/hadoop/{serviceName}/networkAcl';

type PathsclusterhadoopDELETE = '/cluster/hadoop/{serviceName}/user/{username}' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}' | 
'/cluster/hadoop/{serviceName}/node/{hostname}' | 
'/cluster/hadoop/{serviceName}/networkAcl/{block}';

class Apiclusterhadoop extends ApiCommon {
  /**
  Get the orderable node profiles and their characteristics
  Get the orderable node profiles and their characteristics
  **/
  public get(path: '/cluster/hadoop/orderableNodeProfiles', pathParams: null, queryParams: null): Promise<ClusterHadoopNodeBillingProfile[]>;
  /**
  Get informations about the order of one cluster
  Get informations about the order of one cluster
  **/
  public get(path: '/cluster/hadoop/orderInformations', pathParams: null, queryParams: null): Promise<ClusterHadoopOrderInformations>;
  /**
  Operations about the HADOOPCLUSTER service
  List available services
  **/
  public get(path: '/cluster/hadoop', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  User allowed to access interfaces on your cluster
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/user/{username}', pathParams: {serviceName?: string, username?: string}, queryParams: null): Promise<ClusterHadoopUser>;
  /**
  List the cluster.hadoop.User objects
  Users associated with this Hadoop Cluster
  **/
  public get(path: '/cluster/hadoop/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the cluster.hadoop.Node objects
  Nodes of the Cluster
  **/
  public get(path: '/cluster/hadoop/{serviceName}/node', pathParams: {serviceName?: string}, queryParams: {softwareProfile?: ClusterHadoopNodeProfileEnum}): Promise<string[]>;
  /**
  List the cluster.hadoop.Role objects
  Roles (ie set of Hadoop services) of the Node
  **/
  public get(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role', pathParams: {serviceName?: string, hostname?: string}, queryParams: null): Promise<ClusterHadoopRoleTypeEnum[]>;
  /**
  Role (ie set of Hadoop services) of the Node
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}', pathParams: {serviceName?: string, hostname?: string, type?: ClusterHadoopRoleTypeEnum}, queryParams: null): Promise<ClusterHadoopRole>;
  /**
  Physical or Virtual Node
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/node/{hostname}', pathParams: {serviceName?: string, hostname?: string}, queryParams: null): Promise<ClusterHadoopNode>;
  /**
  nodeBillingProfiles operations
  Detailed description for each Node profile
  **/
  public get(path: '/cluster/hadoop/{serviceName}/nodeBillingProfiles', pathParams: {serviceName?: string}, queryParams: null): Promise<ClusterHadoopNodeBillingProfile[]>;
  /**
  Operation on a Hadoop Cluster component
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<ClusterHadoopTask>;
  /**
  List the cluster.hadoop.Task objects
  Tasks associated with this Hadoop Cluster
  **/
  public get(path: '/cluster/hadoop/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {status?: ClusterHadoopOperationStateEnum}): Promise<Number[]>;
  /**
  Managed Hadoop Cluster
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<ClusterHadoopHadoop>;
  /**
  consumptions operations
  Get the current consumptions that you will billed for on the next bill
  **/
  public get(path: '/cluster/hadoop/{serviceName}/consumptions', pathParams: {serviceName?: string}, queryParams: null): Promise<ClusterHadoopClusterConsumption>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  orderableNodeProfiles operations
  List of orderable Node profiles
  **/
  public get(path: '/cluster/hadoop/{serviceName}/orderableNodeProfiles', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  nodeConsumptions operations
  Get the current node consumptions that you will billed for on the next bill
  **/
  public get(path: '/cluster/hadoop/{serviceName}/nodeConsumptions', pathParams: {serviceName?: string}, queryParams: null): Promise<ClusterHadoopNodeConsumption[]>;
  /**
  ACL for allowing ip blocks to access to your cluster
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}', pathParams: {serviceName?: string, block?: string}, queryParams: null): Promise<ClusterHadoopNetworkAcl>;
  /**
  List the cluster.hadoop.NetworkAcl objects
  Network ACL associated with this Hadoop Cluster
  **/
  public get(path: '/cluster/hadoop/{serviceName}/networkAcl', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  public get(path: PathsclusterhadoopGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  User allowed to access interfaces on your cluster
  Alter this object properties
  **/
  public put(path: '/cluster/hadoop/{serviceName}/user/{username}', pathParams: {serviceName?: string, username?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cluster/hadoop/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  ACL for allowing ip blocks to access to your cluster
  Alter this object properties
  **/
  public put(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}', pathParams: {serviceName?: string, block?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsclusterhadoopPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  resetPassword operations
  Reset the password for a given Hadoop Cluster User
  **/
  public post(path: '/cluster/hadoop/{serviceName}/user/{username}/resetPassword', pathParams: {serviceName?: string, username?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  List the cluster.hadoop.User objects
  Add an User to your cluster
  **/
  public post(path: '/cluster/hadoop/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  start operations
  Start a Cloudera Manager service
  **/
  public post(path: '/cluster/hadoop/{serviceName}/service/start', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  stop operations
  Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/service/stop', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  restart operations
  Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/service/restart', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  restart operations
  Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/restart', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  recommission operations
  Recommission the node and all the services on it
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/recommission', pathParams: {serviceName?: string, hostname?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  List the cluster.hadoop.Role objects
  Add the Role to the Node
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role', pathParams: {serviceName?: string, hostname?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  restart operations
  Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart', pathParams: {serviceName?: string, hostname?: string, type?: ClusterHadoopRoleTypeEnum}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  start operations
  Start the role on the node
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start', pathParams: {serviceName?: string, hostname?: string, type?: ClusterHadoopRoleTypeEnum}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  stop operations
  Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop', pathParams: {serviceName?: string, hostname?: string, type?: ClusterHadoopRoleTypeEnum}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  decommission operations
  Decommission the node and all the services on it
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/decommission', pathParams: {serviceName?: string, hostname?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  terminate operations
  Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST
  **/
  public post(path: '/cluster/hadoop/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  orderNewNodeHourly operations
  Order a new node in the cluster
  **/
  public post(path: '/cluster/hadoop/{serviceName}/orderNewNodeHourly', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  stop operations
  Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/stop', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  start operations
  Start the Cloudera Manager Hadoop Cluster
  **/
  public post(path: '/cluster/hadoop/{serviceName}/start', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  List the cluster.hadoop.NetworkAcl objects
  Add an ACL to your cluster
  **/
  public post(path: '/cluster/hadoop/{serviceName}/networkAcl', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  public post(path: PathsclusterhadoopPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  User allowed to access interfaces on your cluster
  Remove this User
  **/
  public delete(path: '/cluster/hadoop/{serviceName}/user/{username}', pathParams: {serviceName?: string, username?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  Role (ie set of Hadoop services) of the Node
  Remove this Role from the Node
  **/
  public delete(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}', pathParams: {serviceName?: string, hostname?: string, type?: ClusterHadoopRoleTypeEnum}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  Physical or Virtual Node
  Remove this Node from the Cluster
  **/
  public delete(path: '/cluster/hadoop/{serviceName}/node/{hostname}', pathParams: {serviceName?: string, hostname?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  /**
  ACL for allowing ip blocks to access to your cluster
  Remove this ACL
  **/
  public delete(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}', pathParams: {serviceName?: string, block?: string}, queryParams: null, bodyParams: null): Promise<ClusterHadoopTask>;
  public delete(path: PathsclusterhadoopDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
