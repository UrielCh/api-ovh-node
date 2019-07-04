import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace cluster {
    export namespace hadoop {
        //cluster.hadoop.BillingNameEnum
        export type BillingNameEnum = "100-small" | "200-cpu-1" | "220-cpu-3" | "300-disk-1" | "310-disk-3" | "900-vm-1"
        //cluster.hadoop.ClusterConsumption
        // fullName: cluster.hadoop.ClusterConsumption.ClusterConsumption
        export interface ClusterConsumption {
            quantity?: OVH.complexType.UnitAndValue<number>;
        }
        //cluster.hadoop.ClusterServiceNameEnum
        export type ClusterServiceNameEnum = "HBase" | "HDFS" | "HUE" | "Hive" | "Oozie" | "Solr" | "Spark" | "Sqoop" | "YARN" | "ZooKeeper"
        //cluster.hadoop.ClusterStateEnum
        export type ClusterStateEnum = "created" | "creating" | "deleted" | "deleting" | "delivered" | "delivering" | "toDeliver"
        //cluster.hadoop.NetworkAcl
        // fullName: cluster.hadoop.NetworkAcl.NetworkAcl
        export interface NetworkAcl {
            block?: string;
            description?: string;
            state?: OVH.cluster.hadoop.NetworkAclStateEnum;
        }
        //cluster.hadoop.NetworkAclStateEnum
        export type NetworkAclStateEnum = "disabled" | "enabled" | "pending"
        //cluster.hadoop.Node
        // fullName: cluster.hadoop.Node.Node
        export interface Node {
            billingProfileName?: OVH.cluster.hadoop.BillingNameEnum;
            hostname?: string;
            ip?: string;
            isRemovable?: boolean;
            softwareProfile?: OVH.cluster.hadoop.NodeProfileEnum;
            state?: OVH.cluster.hadoop.NodeStateEnum;
        }
        //cluster.hadoop.NodeBillingProfile
        // fullName: cluster.hadoop.NodeBillingProfile.NodeBillingProfile
        export interface NodeBillingProfile {
            CPUFrequency?: OVH.complexType.UnitAndValue<number>;
            diskCapacity?: OVH.complexType.UnitAndValue<number>;
            nbCPUCores?: number;
            nbCPUThreads?: number;
            networkBandwidth?: OVH.complexType.UnitAndValue<number>;
            nodeProfile?: string;
            ramQuantity?: OVH.complexType.UnitAndValue<number>;
        }
        //cluster.hadoop.NodeConsumption
        // fullName: cluster.hadoop.NodeConsumption.NodeConsumption
        export interface NodeConsumption {
            hostname?: string;
            nodeProfile?: OVH.cluster.hadoop.BillingNameEnum;
            quantity?: OVH.complexType.UnitAndValue<number>;
        }
        //cluster.hadoop.NodeProfileEnum
        export type NodeProfileEnum = "ApplicationServer" | "BasicNode" | "ClouderaManager" | "MasterServer" | "SecondaryServer"
        //cluster.hadoop.NodeStateEnum
        export type NodeStateEnum = "available" | "delivered" | "toDeploy" | "unavailable"
        //cluster.hadoop.OperationStateEnum
        export type OperationStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        //cluster.hadoop.OrderInformations
        // fullName: cluster.hadoop.OrderInformations.OrderInformations
        export interface OrderInformations {
            maximumOrderableNodes?: number;
            minimumOrderableNodes?: number;
        }
        //cluster.hadoop.Role
        // fullName: cluster.hadoop.Role.Role
        export interface Role {
            id?: number;
            type?: OVH.cluster.hadoop.RoleTypeEnum;
        }
        //cluster.hadoop.RoleTypeEnum
        export type RoleTypeEnum = "cloudera_manager" | "data_node" | "elasticsearch_server" | "hbase_master" | "hbase_region_server" | "hive_server2" | "hue" | "impala_daemon" | "impala_server" | "map_reduce_history_server" | "name_node" | "oozie_server" | "open_tsdb" | "secondary_name_node" | "solr_server" | "spark_master" | "spark_worker" | "sqoop_server" | "yarn_node_manager" | "yarn_resource_manager" | "zoo_keeper"
        //cluster.hadoop.Task
        // fullName: cluster.hadoop.Task.Task
        export interface Task {
            name?: string;
            status?: OVH.cluster.hadoop.OperationStateEnum;
            taskId?: number;
        }
        //cluster.hadoop.User
        // fullName: cluster.hadoop.User.User
        export interface User {
            clouderaManager?: boolean;
            httpFrontend?: boolean;
            hue?: boolean;
            username?: string;
        }
        //cluster.hadoop.hadoop
        // fullName: cluster.hadoop.hadoop.hadoop
        export interface hadoop {
            clouderaVersion?: string;
            maxOrderableNodes?: number;
            name?: string;
            state?: OVH.cluster.hadoop.ClusterStateEnum;
        }
    }
}
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit?: string;
        value?: T;
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /cluster
export interface Cluster {
    hadoop:  {
        // GET /cluster/hadoop
        GET(): Promise<string[]>;
        orderableNodeProfiles:  {
            // GET /cluster/hadoop/orderableNodeProfiles
            GET(): Promise<cluster.hadoop.NodeBillingProfile[]>;
        }
        orderInformations:  {
            // GET /cluster/hadoop/orderInformations
            GET(): Promise<cluster.hadoop.OrderInformations>;
        }
        [keys: string]: {
            // GET /cluster/hadoop/{serviceName}
            GET(): Promise<cluster.hadoop.hadoop>;
            nodeConsumptions:  {
                // GET /cluster/hadoop/{serviceName}/nodeConsumptions
                GET(): Promise<cluster.hadoop.NodeConsumption[]>;
            }
            stop:  {
                // POST /cluster/hadoop/{serviceName}/stop
                POST(): Promise<cluster.hadoop.Task>;
            }
            restart:  {
                // POST /cluster/hadoop/{serviceName}/restart
                POST(): Promise<cluster.hadoop.Task>;
            }
            node:  {
                // GET /cluster/hadoop/{serviceName}/node
                GET(param?: {softwareProfile?: cluster.hadoop.NodeProfileEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /cluster/hadoop/{serviceName}/node/{hostname}
                    GET(): Promise<cluster.hadoop.Node>;
                    // DELETE /cluster/hadoop/{serviceName}/node/{hostname}
                    DELETE(): Promise<cluster.hadoop.Task>;
                    role:  {
                        // GET /cluster/hadoop/{serviceName}/node/{hostname}/role
                        GET(): Promise<cluster.hadoop.RoleTypeEnum[]>;
                        // POST /cluster/hadoop/{serviceName}/node/{hostname}/role
                        POST(body?: {type: cluster.hadoop.RoleTypeEnum}): Promise<cluster.hadoop.Task>;
                        [keys: string]: {
                            // GET /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}
                            GET(): Promise<cluster.hadoop.Role>;
                            // DELETE /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}
                            DELETE(): Promise<cluster.hadoop.Task>;
                            start:  {
                                // POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start
                                POST(): Promise<cluster.hadoop.Task>;
                            }
                            stop:  {
                                // POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop
                                POST(): Promise<cluster.hadoop.Task>;
                            }
                            restart:  {
                                // POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart
                                POST(): Promise<cluster.hadoop.Task>;
                            }
                        } | any
                    }
                    decommission:  {
                        // POST /cluster/hadoop/{serviceName}/node/{hostname}/decommission
                        POST(): Promise<cluster.hadoop.Task>;
                    }
                    recommission:  {
                        // POST /cluster/hadoop/{serviceName}/node/{hostname}/recommission
                        POST(): Promise<cluster.hadoop.Task>;
                    }
                } | any
            }
            service:  {
                restart:  {
                    // POST /cluster/hadoop/{serviceName}/service/restart
                    POST(body?: {service: cluster.hadoop.ClusterServiceNameEnum}): Promise<cluster.hadoop.Task>;
                }
                stop:  {
                    // POST /cluster/hadoop/{serviceName}/service/stop
                    POST(body?: {service: cluster.hadoop.ClusterServiceNameEnum}): Promise<cluster.hadoop.Task>;
                }
                start:  {
                    // POST /cluster/hadoop/{serviceName}/service/start
                    POST(body?: {service: cluster.hadoop.ClusterServiceNameEnum}): Promise<cluster.hadoop.Task>;
                }
            }
            orderableNodeProfiles:  {
                // GET /cluster/hadoop/{serviceName}/orderableNodeProfiles
                GET(): Promise<string[]>;
            }
            task:  {
                // GET /cluster/hadoop/{serviceName}/task
                GET(param?: {status?: cluster.hadoop.OperationStateEnum}): Promise<number[]>;
                [keys: string]: {
                    // GET /cluster/hadoop/{serviceName}/task/{taskId}
                    GET(): Promise<cluster.hadoop.Task>;
                } | any
            }
            nodeBillingProfiles:  {
                // GET /cluster/hadoop/{serviceName}/nodeBillingProfiles
                GET(): Promise<cluster.hadoop.NodeBillingProfile[]>;
            }
            start:  {
                // POST /cluster/hadoop/{serviceName}/start
                POST(): Promise<cluster.hadoop.Task>;
            }
            user:  {
                // GET /cluster/hadoop/{serviceName}/user
                GET(): Promise<string[]>;
                // POST /cluster/hadoop/{serviceName}/user
                POST(body?: {hue: boolean, username: string, clouderaManager: boolean, password: string, httpFrontend: boolean}): Promise<cluster.hadoop.Task>;
                [keys: string]: {
                    // GET /cluster/hadoop/{serviceName}/user/{username}
                    GET(): Promise<cluster.hadoop.User>;
                    // PUT /cluster/hadoop/{serviceName}/user/{username}
                    PUT(body?: {body: cluster.hadoop.User}): Promise<void>;
                    // DELETE /cluster/hadoop/{serviceName}/user/{username}
                    DELETE(): Promise<cluster.hadoop.Task>;
                    resetPassword:  {
                        // POST /cluster/hadoop/{serviceName}/user/{username}/resetPassword
                        POST(body?: {password: string}): Promise<cluster.hadoop.Task>;
                    }
                } | any
            }
            networkAcl:  {
                // GET /cluster/hadoop/{serviceName}/networkAcl
                GET(): Promise<string[]>;
                // POST /cluster/hadoop/{serviceName}/networkAcl
                POST(body?: {description?: string, block?: string}): Promise<cluster.hadoop.Task>;
                [keys: string]: {
                    // GET /cluster/hadoop/{serviceName}/networkAcl/{block}
                    GET(): Promise<cluster.hadoop.NetworkAcl>;
                    // PUT /cluster/hadoop/{serviceName}/networkAcl/{block}
                    PUT(body?: {body: cluster.hadoop.NetworkAcl}): Promise<void>;
                    // DELETE /cluster/hadoop/{serviceName}/networkAcl/{block}
                    DELETE(): Promise<cluster.hadoop.Task>;
                } | any
            }
            consumptions:  {
                // GET /cluster/hadoop/{serviceName}/consumptions
                GET(): Promise<cluster.hadoop.ClusterConsumption>;
            }
            orderNewNodeHourly:  {
                // POST /cluster/hadoop/{serviceName}/orderNewNodeHourly
                POST(body?: {nodeProfile: string}): Promise<cluster.hadoop.Task>;
            }
            terminate:  {
                // POST /cluster/hadoop/{serviceName}/terminate
                POST(): Promise<cluster.hadoop.Task>;
            }
            serviceInfos:  {
                // GET /cluster/hadoop/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /cluster/hadoop/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
        } | any
    }
}
// Api
type PathsClusterHadoopGET = '/cluster/hadoop' |
  '/cluster/hadoop/orderableNodeProfiles' |
  '/cluster/hadoop/orderInformations' |
  '/cluster/hadoop/{serviceName}/nodeConsumptions' |
  '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}' |
  '/cluster/hadoop/{serviceName}/node/{hostname}/role' |
  '/cluster/hadoop/{serviceName}/node/{hostname}' |
  '/cluster/hadoop/{serviceName}/node' |
  '/cluster/hadoop/{serviceName}/orderableNodeProfiles' |
  '/cluster/hadoop/{serviceName}/task/{taskId}' |
  '/cluster/hadoop/{serviceName}/task' |
  '/cluster/hadoop/{serviceName}/nodeBillingProfiles' |
  '/cluster/hadoop/{serviceName}/user' |
  '/cluster/hadoop/{serviceName}/user/{username}' |
  '/cluster/hadoop/{serviceName}/networkAcl/{block}' |
  '/cluster/hadoop/{serviceName}/networkAcl' |
  '/cluster/hadoop/{serviceName}/consumptions' |
  '/cluster/hadoop/{serviceName}' |
  '/cluster/hadoop/{serviceName}/serviceInfos';

type PathsClusterHadoopPUT = '/cluster/hadoop/{serviceName}/user/{username}' |
  '/cluster/hadoop/{serviceName}/networkAcl/{block}' |
  '/cluster/hadoop/{serviceName}/serviceInfos';

type PathsClusterHadoopPOST = '/cluster/hadoop/{serviceName}/stop' |
  '/cluster/hadoop/{serviceName}/restart' |
  '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start' |
  '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop' |
  '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart' |
  '/cluster/hadoop/{serviceName}/node/{hostname}/role' |
  '/cluster/hadoop/{serviceName}/node/{hostname}/decommission' |
  '/cluster/hadoop/{serviceName}/node/{hostname}/recommission' |
  '/cluster/hadoop/{serviceName}/service/restart' |
  '/cluster/hadoop/{serviceName}/service/stop' |
  '/cluster/hadoop/{serviceName}/service/start' |
  '/cluster/hadoop/{serviceName}/start' |
  '/cluster/hadoop/{serviceName}/user' |
  '/cluster/hadoop/{serviceName}/user/{username}/resetPassword' |
  '/cluster/hadoop/{serviceName}/networkAcl' |
  '/cluster/hadoop/{serviceName}/orderNewNodeHourly' |
  '/cluster/hadoop/{serviceName}/terminate';

type PathsClusterHadoopDELETE = '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}' |
  '/cluster/hadoop/{serviceName}/node/{hostname}' |
  '/cluster/hadoop/{serviceName}/user/{username}' |
  '/cluster/hadoop/{serviceName}/networkAcl/{block}';

export class ApiClusterHadoop extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the HADOOPCLUSTER service
   * List available services
   */
  public get(path: '/cluster/hadoop'): Promise<string[]>;
  /**
   * Managed Hadoop Cluster
   * Get this object properties
   */
  public get(path: '/cluster/hadoop/{serviceName}', params: {serviceName: string}): Promise<cluster.hadoop.hadoop>;
  /**
   * consumptions operations
   * Get the current consumptions that you will billed for on the next bill
   */
  public get(path: '/cluster/hadoop/{serviceName}/consumptions', params: {serviceName: string}): Promise<cluster.hadoop.ClusterConsumption>;
  /**
   * List the cluster.hadoop.NetworkAcl objects
   * Network ACL associated with this Hadoop Cluster
   */
  public get(path: '/cluster/hadoop/{serviceName}/networkAcl', params: {serviceName: string}): Promise<string[]>;
  /**
   * ACL for allowing ip blocks to access to your cluster
   * Get this object properties
   */
  public get(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}', params: {serviceName: string, block: string}): Promise<cluster.hadoop.NetworkAcl>;
  /**
   * List the cluster.hadoop.Node objects
   * Nodes of the Cluster
   */
  public get(path: '/cluster/hadoop/{serviceName}/node', params: {serviceName: string, softwareProfile?: OVH.cluster.hadoop.NodeProfileEnum}): Promise<string[]>;
  /**
   * Physical or Virtual Node
   * Get this object properties
   */
  public get(path: '/cluster/hadoop/{serviceName}/node/{hostname}', params: {serviceName: string, hostname: string}): Promise<cluster.hadoop.Node>;
  /**
   * List the cluster.hadoop.Role objects
   * Roles (ie set of Hadoop services) of the Node
   */
  public get(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role', params: {serviceName: string, hostname: string}): Promise<cluster.hadoop.RoleTypeEnum[]>;
  /**
   * Role (ie set of Hadoop services) of the Node
   * Get this object properties
   */
  public get(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}', params: {serviceName: string, hostname: string, type: string}): Promise<cluster.hadoop.Role>;
  /**
   * nodeBillingProfiles operations
   * Detailed description for each Node profile
   */
  public get(path: '/cluster/hadoop/{serviceName}/nodeBillingProfiles', params: {serviceName: string}): Promise<cluster.hadoop.NodeBillingProfile[]>;
  /**
   * nodeConsumptions operations
   * Get the current node consumptions that you will billed for on the next bill
   */
  public get(path: '/cluster/hadoop/{serviceName}/nodeConsumptions', params: {serviceName: string}): Promise<cluster.hadoop.NodeConsumption[]>;
  /**
   * orderableNodeProfiles operations
   * List of orderable Node profiles
   */
  public get(path: '/cluster/hadoop/{serviceName}/orderableNodeProfiles', params: {serviceName: string}): Promise<string[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/cluster/hadoop/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the cluster.hadoop.Task objects
   * Tasks associated with this Hadoop Cluster
   */
  public get(path: '/cluster/hadoop/{serviceName}/task', params: {serviceName: string, status?: OVH.cluster.hadoop.OperationStateEnum}): Promise<number[]>;
  /**
   * Operation on a Hadoop Cluster component
   * Get this object properties
   */
  public get(path: '/cluster/hadoop/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<cluster.hadoop.Task>;
  /**
   * List the cluster.hadoop.User objects
   * Users associated with this Hadoop Cluster
   */
  public get(path: '/cluster/hadoop/{serviceName}/user', params: {serviceName: string}): Promise<string[]>;
  /**
   * User allowed to access interfaces on your cluster
   * Get this object properties
   */
  public get(path: '/cluster/hadoop/{serviceName}/user/{username}', params: {serviceName: string, username: string}): Promise<cluster.hadoop.User>;
  /**
   * Get the orderable node profiles and their characteristics
   * Get the orderable node profiles and their characteristics
   */
  public get(path: '/cluster/hadoop/orderableNodeProfiles'): Promise<cluster.hadoop.NodeBillingProfile[]>;
  /**
   * Get informations about the order of one cluster
   * Get informations about the order of one cluster
   */
  public get(path: '/cluster/hadoop/orderInformations'): Promise<cluster.hadoop.OrderInformations>;
  public get(path: PathsClusterHadoopGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * ACL for allowing ip blocks to access to your cluster
   * Alter this object properties
   */
  public put(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}', params: {serviceName: string, block: string, description?: string, state?: OVH.cluster.hadoop.NetworkAclStateEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/cluster/hadoop/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * User allowed to access interfaces on your cluster
   * Alter this object properties
   */
  public put(path: '/cluster/hadoop/{serviceName}/user/{username}', params: {serviceName: string, username: string, clouderaManager?: boolean, httpFrontend?: boolean, hue?: boolean}): Promise<void>;
  public put(path: PathsClusterHadoopPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the cluster.hadoop.NetworkAcl objects
   * Add an ACL to your cluster
   */
  public post(path: '/cluster/hadoop/{serviceName}/networkAcl', params: {serviceName: string, block?: string, description?: string}): Promise<cluster.hadoop.Task>;
  /**
   * decommission operations
   * Decommission the node and all the services on it
   */
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/decommission', params: {serviceName: string, hostname: string}): Promise<cluster.hadoop.Task>;
  /**
   * recommission operations
   * Recommission the node and all the services on it
   */
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/recommission', params: {serviceName: string, hostname: string}): Promise<cluster.hadoop.Task>;
  /**
   * List the cluster.hadoop.Role objects
   * Add the Role to the Node
   */
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role', params: {serviceName: string, hostname: string, type: OVH.cluster.hadoop.RoleTypeEnum}): Promise<cluster.hadoop.Task>;
  /**
   * restart operations
   * Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES)
   */
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart', params: {serviceName: string, hostname: string, type: string}): Promise<cluster.hadoop.Task>;
  /**
   * start operations
   * Start the role on the node
   */
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start', params: {serviceName: string, hostname: string, type: string}): Promise<cluster.hadoop.Task>;
  /**
   * stop operations
   * Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES)
   */
  public post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop', params: {serviceName: string, hostname: string, type: string}): Promise<cluster.hadoop.Task>;
  /**
   * orderNewNodeHourly operations
   * Order a new node in the cluster
   */
  public post(path: '/cluster/hadoop/{serviceName}/orderNewNodeHourly', params: {serviceName: string, nodeProfile: string}): Promise<cluster.hadoop.Task>;
  /**
   * restart operations
   * Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE)
   */
  public post(path: '/cluster/hadoop/{serviceName}/restart', params: {serviceName: string}): Promise<cluster.hadoop.Task>;
  /**
   * restart operations
   * Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES)
   */
  public post(path: '/cluster/hadoop/{serviceName}/service/restart', params: {serviceName: string, service: OVH.cluster.hadoop.ClusterServiceNameEnum}): Promise<cluster.hadoop.Task>;
  /**
   * start operations
   * Start a Cloudera Manager service
   */
  public post(path: '/cluster/hadoop/{serviceName}/service/start', params: {serviceName: string, service: OVH.cluster.hadoop.ClusterServiceNameEnum}): Promise<cluster.hadoop.Task>;
  /**
   * stop operations
   * Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES)
   */
  public post(path: '/cluster/hadoop/{serviceName}/service/stop', params: {serviceName: string, service: OVH.cluster.hadoop.ClusterServiceNameEnum}): Promise<cluster.hadoop.Task>;
  /**
   * start operations
   * Start the Cloudera Manager Hadoop Cluster
   */
  public post(path: '/cluster/hadoop/{serviceName}/start', params: {serviceName: string}): Promise<cluster.hadoop.Task>;
  /**
   * stop operations
   * Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE)
   */
  public post(path: '/cluster/hadoop/{serviceName}/stop', params: {serviceName: string}): Promise<cluster.hadoop.Task>;
  /**
   * terminate operations
   * Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST
   */
  public post(path: '/cluster/hadoop/{serviceName}/terminate', params: {serviceName: string}): Promise<cluster.hadoop.Task>;
  /**
   * List the cluster.hadoop.User objects
   * Add an User to your cluster
   */
  public post(path: '/cluster/hadoop/{serviceName}/user', params: {serviceName: string, clouderaManager: boolean, httpFrontend: boolean, hue: boolean, password: string, username: string}): Promise<cluster.hadoop.Task>;
  /**
   * resetPassword operations
   * Reset the password for a given Hadoop Cluster User
   */
  public post(path: '/cluster/hadoop/{serviceName}/user/{username}/resetPassword', params: {serviceName: string, username: string, password: string}): Promise<cluster.hadoop.Task>;
  public post(path: PathsClusterHadoopPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * ACL for allowing ip blocks to access to your cluster
   * Remove this ACL
   */
  public delete(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}', params: {serviceName: string, block: string}): Promise<cluster.hadoop.Task>;
  /**
   * Physical or Virtual Node
   * Remove this Node from the Cluster
   */
  public delete(path: '/cluster/hadoop/{serviceName}/node/{hostname}', params: {serviceName: string, hostname: string}): Promise<cluster.hadoop.Task>;
  /**
   * Role (ie set of Hadoop services) of the Node
   * Remove this Role from the Node
   */
  public delete(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}', params: {serviceName: string, hostname: string, type: string}): Promise<cluster.hadoop.Task>;
  /**
   * User allowed to access interfaces on your cluster
   * Remove this User
   */
  public delete(path: '/cluster/hadoop/{serviceName}/user/{username}', params: {serviceName: string, username: string}): Promise<cluster.hadoop.Task>;
  public delete(path: PathsClusterHadoopDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}