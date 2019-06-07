import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * All billing profile names
 */
export type ClusterHadoopBillingNameEnum = '100-small' | '200-cpu-1' | '220-cpu-3' | '300-disk-1' | '310-disk-3' | '900-vm-1';
/**
 * Detailed information on a Hadoop Cluster consumption
 */
export interface ClusterHadoopClusterConsumption {
  /**
   * Number of hours consummed
   *
   */
  quantity: ComplexTypeUnitAndValue<number>;
}
/**
 * All services names in a Hadoop Cluster
 */
export type ClusterHadoopClusterServiceNameEnum = 'HBase' | 'HDFS' | 'HUE' | 'Hive' | 'Oozie' | 'Solr' | 'Spark' | 'Sqoop' | 'YARN' | 'ZooKeeper';
/**
 * All states a Hadoop Cluster can be in
 */
export type ClusterHadoopClusterStateEnum = 'created' | 'creating' | 'deleted' | 'deleting' | 'delivered' | 'delivering' | 'toDeliver';
/**
 * ACL for allowing ip blocks to access to your cluster
 */
export interface ClusterHadoopNetworkAcl {
  /**
   * IP Block to allow
   *
   */
  block: string;
  /**
   * description of this ACL
   *
   */
  description?: string;
  /**
   * State of the NetworkAcl.
   *
   */
  state: ClusterHadoopNetworkAclStateEnum;
}
/**
 * All states a Hadoop Cluster NetworkAcl can be in
 */
export type ClusterHadoopNetworkAclStateEnum = 'disabled' | 'enabled' | 'pending';
/**
 * Physical or Virtual Node
 */
export interface ClusterHadoopNode {
  /**
   * Name of the billing profile attached to the node
   *
   */
  billingProfileName: ClusterHadoopBillingNameEnum;
  /**
   * Hostname of the node
   *
   */
  hostname: string;
  /**
   * IP of the Node
   *
   */
  ip: string;
  /**
   * Wether or not the Node is removable
   *
   */
  isRemovable: boolean;
  /**
   * Profile of the Node
   *
   */
  softwareProfile: ClusterHadoopNodeProfileEnum;
  /**
   * State of the Node
   *
   */
  state: ClusterHadoopNodeStateEnum;
}
/**
 * Detailed information on a node billing profile
 */
export interface ClusterHadoopNodeBillingProfile {
  /**
   * Frequency of one CPU core
   *
   */
  CPUFrequency: ComplexTypeUnitAndValue<number>;
  /**
   * Total capacity available for HDFS
   *
   */
  diskCapacity: ComplexTypeUnitAndValue<number>;
  /**
   * Total number of the CPU cores
   *
   */
  nbCPUCores: number;
  /**
   * Total number of the CPU threads
   *
   */
  nbCPUThreads: number;
  /**
   * Network speed of the link used for the Hadoop process
   *
   */
  networkBandwidth: ComplexTypeUnitAndValue<number>;
  /**
   * Name of the Node billing profile
   *
   */
  nodeProfile: string;
  /**
   * Total amount of RAM
   *
   */
  ramQuantity: ComplexTypeUnitAndValue<number>;
}
/**
 * Detailed information on a node consumption of a Hadoop Cluster
 */
export interface ClusterHadoopNodeConsumption {
  /**
   * Hostname of the consumed resource
   *
   */
  hostname: string;
  /**
   * Name of the node profile for the consumptions
   *
   */
  nodeProfile: ClusterHadoopBillingNameEnum;
  /**
   * Number of hours consummed
   *
   */
  quantity: ComplexTypeUnitAndValue<number>;
}
/**
 * All profiles a Hadoop Cluster Node can be
 */
export type ClusterHadoopNodeProfileEnum = 'ApplicationServer' | 'BasicNode' | 'ClouderaManager' | 'MasterServer' | 'SecondaryServer';
/**
 * All states a Hadoop Cluster Node can be in
 */
export type ClusterHadoopNodeStateEnum = 'available' | 'delivered' | 'toDeploy' | 'unavailable';
/**
 * All states a Hadoop Cluster Cloud Task can be in
 */
export type ClusterHadoopOperationStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Detailed information on the order of one Hadoop Cluster
 */
export interface ClusterHadoopOrderInformations {
  /**
   * Maximal number of Node allowed in one order
   *
   */
  maximumOrderableNodes: number;
  /**
   * Minimum number of Node allowed in one order
   *
   */
  minimumOrderableNodes: number;
}
/**
 * Role (ie set of Hadoop services) of the Node
 */
export interface ClusterHadoopRole {
  /**
   * ID of the Role
   *
   */
  id: number;
  /**
   * Role name
   *
   */
  type: ClusterHadoopRoleTypeEnum;
}
/**
 * All roles a Hadoop Cluster Node can be
 */
export type ClusterHadoopRoleTypeEnum = 'cloudera_manager' | 'data_node' | 'elasticsearch_server' | 'hbase_master' | 'hbase_region_server' | 'hive_server2' | 'hue' | 'impala_daemon' | 'impala_server' | 'map_reduce_history_server' | 'name_node' | 'oozie_server' | 'open_tsdb' | 'secondary_name_node' | 'solr_server' | 'spark_master' | 'spark_worker' | 'sqoop_server' | 'yarn_node_manager' | 'yarn_resource_manager' | 'zoo_keeper';
/**
 * Operation on a Hadoop Cluster component
 */
export interface ClusterHadoopTask {
  /**
   * Operation name
   *
   */
  name: string;
  /**
   * Current Task state
   *
   */
  status: ClusterHadoopOperationStateEnum;
  /**
   */
  taskId: number;
}
/**
 * User allowed to access interfaces on your cluster
 */
export interface ClusterHadoopUser {
  /**
   * Whether or not the User is allowed to access to the Cloudera Manager interface
   *
   */
  clouderaManager: boolean;
  /**
   * Whether or not the User is allowed to access to the WebUI interfaces
   *
   */
  httpFrontend: boolean;
  /**
   * Whether or not the User is allowed to access to the Hue interface
   *
   */
  hue: boolean;
  /**
   * The username of the User
   *
   */
  username: string;
}
/**
 * Managed Hadoop Cluster
 */
export interface ClusterHadoopHadoop {
  /**
   * CDH and Cloudera Manager version
   *
   */
  clouderaVersion: string;
  /**
   * Maximum quantity of nodes allowed to be ordered in the cluster
   *
   */
  maxOrderableNodes: number;
  /**
   * Service name of your Cluster
   *
   */
  name: string;
  /**
   * State of the Hadoop Cluster
   *
   */
  state: ClusterHadoopClusterStateEnum;
}
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit: string;
  /**
   */
  value: T;
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
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
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
type PathsClusterHadoopGET = '/cluster/hadoop' | 
'/cluster/hadoop/orderInformations' | 
'/cluster/hadoop/orderableNodeProfiles' | 
'/cluster/hadoop/{serviceName}' | 
'/cluster/hadoop/{serviceName}/consumptions' | 
'/cluster/hadoop/{serviceName}/networkAcl' | 
'/cluster/hadoop/{serviceName}/networkAcl/{block}' | 
'/cluster/hadoop/{serviceName}/node' | 
'/cluster/hadoop/{serviceName}/node/{hostname}' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}' | 
'/cluster/hadoop/{serviceName}/nodeBillingProfiles' | 
'/cluster/hadoop/{serviceName}/nodeConsumptions' | 
'/cluster/hadoop/{serviceName}/orderableNodeProfiles' | 
'/cluster/hadoop/{serviceName}/serviceInfos' | 
'/cluster/hadoop/{serviceName}/task' | 
'/cluster/hadoop/{serviceName}/task/{taskId}' | 
'/cluster/hadoop/{serviceName}/user' | 
'/cluster/hadoop/{serviceName}/user/{username}';

type PathsClusterHadoopPUT = '/cluster/hadoop/{serviceName}/networkAcl/{block}' | 
'/cluster/hadoop/{serviceName}/serviceInfos' | 
'/cluster/hadoop/{serviceName}/user/{username}';

type PathsClusterHadoopPOST = '/cluster/hadoop/{serviceName}/networkAcl' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/decommission' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/recommission' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop' | 
'/cluster/hadoop/{serviceName}/orderNewNodeHourly' | 
'/cluster/hadoop/{serviceName}/restart' | 
'/cluster/hadoop/{serviceName}/service/restart' | 
'/cluster/hadoop/{serviceName}/service/start' | 
'/cluster/hadoop/{serviceName}/service/stop' | 
'/cluster/hadoop/{serviceName}/start' | 
'/cluster/hadoop/{serviceName}/stop' | 
'/cluster/hadoop/{serviceName}/terminate' | 
'/cluster/hadoop/{serviceName}/user' | 
'/cluster/hadoop/{serviceName}/user/{username}/resetPassword';

type PathsClusterHadoopDELETE = '/cluster/hadoop/{serviceName}/networkAcl/{block}' | 
'/cluster/hadoop/{serviceName}/node/{hostname}' | 
'/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}' | 
'/cluster/hadoop/{serviceName}/user/{username}';

export class ApiClusterHadoop extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the HADOOPCLUSTER service
  List available services
  **/
  public get(path: '/cluster/hadoop'): Promise<string[]>;
  /**
  Get informations about the order of one cluster
  Get informations about the order of one cluster
  **/
  public get(path: '/cluster/hadoop/orderInformations'): Promise<ClusterHadoopOrderInformations>;
  /**
  Get the orderable node profiles and their characteristics
  Get the orderable node profiles and their characteristics
  **/
  public get(path: '/cluster/hadoop/orderableNodeProfiles'): Promise<ClusterHadoopNodeBillingProfile[]>;
  /**
  Managed Hadoop Cluster
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}', params: {serviceName: string}): Promise<ClusterHadoopHadoop>;
  /**
  consumptions operations
  Get the current consumptions that you will billed for on the next bill
  **/
  public get(path: '/cluster/hadoop/{serviceName}/consumptions', params: {serviceName: string}): Promise<ClusterHadoopClusterConsumption>;
  /**
  List the cluster.hadoop.NetworkAcl objects
  Network ACL associated with this Hadoop Cluster
  **/
  public get(path: '/cluster/hadoop/{serviceName}/networkAcl', params: {serviceName: string}): Promise<string[]>;
  /**
  ACL for allowing ip blocks to access to your cluster
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}', params: {serviceName: string, block: string}): Promise<ClusterHadoopNetworkAcl>;
  /**
  List the cluster.hadoop.Node objects
  Nodes of the Cluster
  **/
  public get(path: '/cluster/hadoop/{serviceName}/node', params: {serviceName: string, softwareProfile?: ClusterHadoopNodeProfileEnum}): Promise<string[]>;
  /**
  Physical or Virtual Node
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/node/{hostname}', params: {serviceName: string, hostname: string}): Promise<ClusterHadoopNode>;
  /**
  List the cluster.hadoop.Role objects
  Roles (ie set of Hadoop services) of the Node
  **/
  public get(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role', params: {serviceName: string, hostname: string}): Promise<ClusterHadoopRoleTypeEnum[]>;
  /**
  Role (ie set of Hadoop services) of the Node
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}', params: {serviceName: string, hostname: string, type: ClusterHadoopRoleTypeEnum}): Promise<ClusterHadoopRole>;
  /**
  nodeBillingProfiles operations
  Detailed description for each Node profile
  **/
  public get(path: '/cluster/hadoop/{serviceName}/nodeBillingProfiles', params: {serviceName: string}): Promise<ClusterHadoopNodeBillingProfile[]>;
  /**
  nodeConsumptions operations
  Get the current node consumptions that you will billed for on the next bill
  **/
  public get(path: '/cluster/hadoop/{serviceName}/nodeConsumptions', params: {serviceName: string}): Promise<ClusterHadoopNodeConsumption[]>;
  /**
  orderableNodeProfiles operations
  List of orderable Node profiles
  **/
  public get(path: '/cluster/hadoop/{serviceName}/orderableNodeProfiles', params: {serviceName: string}): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  List the cluster.hadoop.Task objects
  Tasks associated with this Hadoop Cluster
  **/
  public get(path: '/cluster/hadoop/{serviceName}/task', params: {serviceName: string, status?: ClusterHadoopOperationStateEnum}): Promise<number[]>;
  /**
  Operation on a Hadoop Cluster component
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: number}): Promise<ClusterHadoopTask>;
  /**
  List the cluster.hadoop.User objects
  Users associated with this Hadoop Cluster
  **/
  public get(path: '/cluster/hadoop/{serviceName}/user', params: {serviceName: string}): Promise<string[]>;
  /**
  User allowed to access interfaces on your cluster
  Get this object properties
  **/
  public get(path: '/cluster/hadoop/{serviceName}/user/{username}', params: {serviceName: string, username: string}): Promise<ClusterHadoopUser>;
  public get(path: PathsClusterHadoopGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  ACL for allowing ip blocks to access to your cluster
  Alter this object properties
  **/
  public put(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}', params: {serviceName: string, block: string, body: ClusterHadoopNetworkAcl}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cluster/hadoop/{serviceName}/serviceInfos', params: {serviceName: string, body: ServicesService}): Promise<void>;
  /**
  User allowed to access interfaces on your cluster
  Alter this object properties
  **/
  public put(path: '/cluster/hadoop/{serviceName}/user/{username}', params: {serviceName: string, username: string, body: ClusterHadoopUser}): Promise<void>;
  public put(path: PathsClusterHadoopPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  List the cluster.hadoop.NetworkAcl objects
  Add an ACL to your cluster
  **/
  public post(path: '/cluster/hadoop/{serviceName}/networkAcl', params: {serviceName: string, block?: string, description?: string}): Promise<ClusterHadoopTask>;
  /**
  decommission operations
  Decommission the node and all the services on it
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/decommission', params: {serviceName: string, hostname: string}): Promise<ClusterHadoopTask>;
  /**
  recommission operations
  Recommission the node and all the services on it
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/recommission', params: {serviceName: string, hostname: string}): Promise<ClusterHadoopTask>;
  /**
  List the cluster.hadoop.Role objects
  Add the Role to the Node
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role', params: {serviceName: string, hostname: string, type: ClusterHadoopRoleTypeEnum}): Promise<ClusterHadoopTask>;
  /**
  restart operations
  Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart', params: {serviceName: string, hostname: string, type: ClusterHadoopRoleTypeEnum}): Promise<ClusterHadoopTask>;
  /**
  start operations
  Start the role on the node
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start', params: {serviceName: string, hostname: string, type: ClusterHadoopRoleTypeEnum}): Promise<ClusterHadoopTask>;
  /**
  stop operations
  Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop', params: {serviceName: string, hostname: string, type: ClusterHadoopRoleTypeEnum}): Promise<ClusterHadoopTask>;
  /**
  orderNewNodeHourly operations
  Order a new node in the cluster
  **/
  public post(path: '/cluster/hadoop/{serviceName}/orderNewNodeHourly', params: {serviceName: string, nodeProfile: string}): Promise<ClusterHadoopTask>;
  /**
  restart operations
  Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/restart', params: {serviceName: string}): Promise<ClusterHadoopTask>;
  /**
  restart operations
  Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/service/restart', params: {serviceName: string, service: ClusterHadoopClusterServiceNameEnum}): Promise<ClusterHadoopTask>;
  /**
  start operations
  Start a Cloudera Manager service
  **/
  public post(path: '/cluster/hadoop/{serviceName}/service/start', params: {serviceName: string, service: ClusterHadoopClusterServiceNameEnum}): Promise<ClusterHadoopTask>;
  /**
  stop operations
  Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/service/stop', params: {serviceName: string, service: ClusterHadoopClusterServiceNameEnum}): Promise<ClusterHadoopTask>;
  /**
  start operations
  Start the Cloudera Manager Hadoop Cluster
  **/
  public post(path: '/cluster/hadoop/{serviceName}/start', params: {serviceName: string}): Promise<ClusterHadoopTask>;
  /**
  stop operations
  Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE)
  **/
  public post(path: '/cluster/hadoop/{serviceName}/stop', params: {serviceName: string}): Promise<ClusterHadoopTask>;
  /**
  terminate operations
  Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST
  **/
  public post(path: '/cluster/hadoop/{serviceName}/terminate', params: {serviceName: string}): Promise<ClusterHadoopTask>;
  /**
  List the cluster.hadoop.User objects
  Add an User to your cluster
  **/
  public post(path: '/cluster/hadoop/{serviceName}/user', params: {serviceName: string, clouderaManager: boolean, httpFrontend: boolean, hue: boolean, password: string, username: string}): Promise<ClusterHadoopTask>;
  /**
  resetPassword operations
  Reset the password for a given Hadoop Cluster User
  **/
  public post(path: '/cluster/hadoop/{serviceName}/user/{username}/resetPassword', params: {serviceName: string, username: string, password: string}): Promise<ClusterHadoopTask>;
  public post(path: PathsClusterHadoopPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  ACL for allowing ip blocks to access to your cluster
  Remove this ACL
  **/
  public delete(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}', params: {serviceName: string, block: string}): Promise<ClusterHadoopTask>;
  /**
  Physical or Virtual Node
  Remove this Node from the Cluster
  **/
  public delete(path: '/cluster/hadoop/{serviceName}/node/{hostname}', params: {serviceName: string, hostname: string}): Promise<ClusterHadoopTask>;
  /**
  Role (ie set of Hadoop services) of the Node
  Remove this Role from the Node
  **/
  public delete(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}', params: {serviceName: string, hostname: string, type: ClusterHadoopRoleTypeEnum}): Promise<ClusterHadoopTask>;
  /**
  User allowed to access interfaces on your cluster
  Remove this User
  **/
  public delete(path: '/cluster/hadoop/{serviceName}/user/{username}', params: {serviceName: string, username: string}): Promise<ClusterHadoopTask>;
  public delete(path: PathsClusterHadoopDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiClusterHadoop;
