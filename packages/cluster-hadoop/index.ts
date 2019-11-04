import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /cluster/hadoop Models
 */
export namespace cluster {
    export namespace hadoop {
        // type fullname: cluster.hadoop.BillingNameEnum
        export type BillingNameEnum = "100-small" | "200-cpu-1" | "220-cpu-3" | "300-disk-1" | "310-disk-3" | "900-vm-1"
        // interface fullName: cluster.hadoop.ClusterConsumption.ClusterConsumption
        export interface ClusterConsumption {
            quantity: complexType.UnitAndValue<number>;
        }
        // type fullname: cluster.hadoop.ClusterServiceNameEnum
        export type ClusterServiceNameEnum = "HBase" | "HDFS" | "HUE" | "Hive" | "Oozie" | "Solr" | "Spark" | "Sqoop" | "YARN" | "ZooKeeper"
        // type fullname: cluster.hadoop.ClusterStateEnum
        export type ClusterStateEnum = "created" | "creating" | "deleted" | "deleting" | "delivered" | "delivering" | "toDeliver"
        // interface fullName: cluster.hadoop.NetworkAcl.NetworkAcl
        export interface NetworkAcl {
            block: string;
            description?: string;
            state: cluster.hadoop.NetworkAclStateEnum;
        }
        // type fullname: cluster.hadoop.NetworkAclStateEnum
        export type NetworkAclStateEnum = "disabled" | "enabled" | "pending"
        // interface fullName: cluster.hadoop.Node.Node
        export interface Node {
            billingProfileName: cluster.hadoop.BillingNameEnum;
            hostname: string;
            ip: string;
            isRemovable: boolean;
            softwareProfile: cluster.hadoop.NodeProfileEnum;
            state: cluster.hadoop.NodeStateEnum;
        }
        // interface fullName: cluster.hadoop.NodeBillingProfile.NodeBillingProfile
        export interface NodeBillingProfile {
            CPUFrequency: complexType.UnitAndValue<number>;
            diskCapacity: complexType.UnitAndValue<number>;
            nbCPUCores: number;
            nbCPUThreads: number;
            networkBandwidth: complexType.UnitAndValue<number>;
            nodeProfile: string;
            ramQuantity: complexType.UnitAndValue<number>;
        }
        // interface fullName: cluster.hadoop.NodeConsumption.NodeConsumption
        export interface NodeConsumption {
            hostname: string;
            nodeProfile: cluster.hadoop.BillingNameEnum;
            quantity: complexType.UnitAndValue<number>;
        }
        // type fullname: cluster.hadoop.NodeProfileEnum
        export type NodeProfileEnum = "ApplicationServer" | "BasicNode" | "ClouderaManager" | "MasterServer" | "SecondaryServer"
        // type fullname: cluster.hadoop.NodeStateEnum
        export type NodeStateEnum = "available" | "delivered" | "toDeploy" | "unavailable"
        // type fullname: cluster.hadoop.OperationStateEnum
        export type OperationStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        // interface fullName: cluster.hadoop.OrderInformations.OrderInformations
        export interface OrderInformations {
            maximumOrderableNodes: number;
            minimumOrderableNodes: number;
        }
        // interface fullName: cluster.hadoop.Role.Role
        export interface Role {
            id: number;
            type: cluster.hadoop.RoleTypeEnum;
        }
        // type fullname: cluster.hadoop.RoleTypeEnum
        export type RoleTypeEnum = "cloudera_manager" | "data_node" | "elasticsearch_server" | "hbase_master" | "hbase_region_server" | "hive_server2" | "hue" | "impala_daemon" | "impala_server" | "map_reduce_history_server" | "name_node" | "oozie_server" | "open_tsdb" | "secondary_name_node" | "solr_server" | "spark_master" | "spark_worker" | "sqoop_server" | "yarn_node_manager" | "yarn_resource_manager" | "zoo_keeper"
        // interface fullName: cluster.hadoop.Task.Task
        export interface Task {
            name: string;
            status: cluster.hadoop.OperationStateEnum;
            taskId: number;
        }
        // interface fullName: cluster.hadoop.User.User
        export interface User {
            clouderaManager: boolean;
            httpFrontend: boolean;
            hue: boolean;
            username: string;
        }
        // interface fullName: cluster.hadoop.hadoop.hadoop
        export interface hadoop {
            clouderaVersion: string;
            maxOrderableNodes: number;
            name: string;
            state: cluster.hadoop.ClusterStateEnum;
        }
    }
}
export namespace complexType {
    // interface fullName: complexType.UnitAndValue<T>.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    // interface fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}

/**
 * END API /cluster/hadoop Models
 */
export function proxyClusterHadoop(ovhEngine: OvhRequestable): Cluster {
    return buildOvhProxy(ovhEngine, '/cluster');
}
export default proxyClusterHadoop;
/**
 * Api Proxy model
 */// Apis harmony
// path /cluster
export interface Cluster{
    hadoop: {
        // GET /cluster/hadoop
        $get(): Promise<string[]>;
        orderInformations: {
            // GET /cluster/hadoop/orderInformations
            $get(): Promise<cluster.hadoop.OrderInformations>;
        }
        orderableNodeProfiles: {
            // GET /cluster/hadoop/orderableNodeProfiles
            $get(): Promise<cluster.hadoop.NodeBillingProfile[]>;
        }
        $(serviceName: string): {
            // GET /cluster/hadoop/{serviceName}
            $get(): Promise<cluster.hadoop.hadoop>;
            consumptions: {
                // GET /cluster/hadoop/{serviceName}/consumptions
                $get(): Promise<cluster.hadoop.ClusterConsumption>;
            }
            networkAcl: {
                // GET /cluster/hadoop/{serviceName}/networkAcl
                $get(): Promise<string[]>;
                // POST /cluster/hadoop/{serviceName}/networkAcl
                $post(params?: {block?: string, description?: string}): Promise<cluster.hadoop.Task>;
                $(block: string): {
                    // DELETE /cluster/hadoop/{serviceName}/networkAcl/{block}
                    $delete(): Promise<cluster.hadoop.Task>;
                    // GET /cluster/hadoop/{serviceName}/networkAcl/{block}
                    $get(): Promise<cluster.hadoop.NetworkAcl>;
                    // PUT /cluster/hadoop/{serviceName}/networkAcl/{block}
                    $put(params?: {block?: string, description?: string, state?: cluster.hadoop.NetworkAclStateEnum}): Promise<void>;
                };
            }
            node: {
                // GET /cluster/hadoop/{serviceName}/node
                $get(params?: {softwareProfile?: cluster.hadoop.NodeProfileEnum}): Promise<string[]>;
                $(hostname: string): {
                    // DELETE /cluster/hadoop/{serviceName}/node/{hostname}
                    $delete(): Promise<cluster.hadoop.Task>;
                    // GET /cluster/hadoop/{serviceName}/node/{hostname}
                    $get(): Promise<cluster.hadoop.Node>;
                    decommission: {
                        // POST /cluster/hadoop/{serviceName}/node/{hostname}/decommission
                        $post(): Promise<cluster.hadoop.Task>;
                    }
                    recommission: {
                        // POST /cluster/hadoop/{serviceName}/node/{hostname}/recommission
                        $post(): Promise<cluster.hadoop.Task>;
                    }
                    role: {
                        // GET /cluster/hadoop/{serviceName}/node/{hostname}/role
                        $get(): Promise<cluster.hadoop.RoleTypeEnum[]>;
                        // POST /cluster/hadoop/{serviceName}/node/{hostname}/role
                        $post(params: {type: cluster.hadoop.RoleTypeEnum}): Promise<cluster.hadoop.Task>;
                        $(type: cluster.hadoop.RoleTypeEnum): {
                            // DELETE /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}
                            $delete(): Promise<cluster.hadoop.Task>;
                            // GET /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}
                            $get(): Promise<cluster.hadoop.Role>;
                            restart: {
                                // POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart
                                $post(): Promise<cluster.hadoop.Task>;
                            }
                            start: {
                                // POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start
                                $post(): Promise<cluster.hadoop.Task>;
                            }
                            stop: {
                                // POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop
                                $post(): Promise<cluster.hadoop.Task>;
                            }
                        };
                    }
                };
            }
            nodeBillingProfiles: {
                // GET /cluster/hadoop/{serviceName}/nodeBillingProfiles
                $get(): Promise<cluster.hadoop.NodeBillingProfile[]>;
            }
            nodeConsumptions: {
                // GET /cluster/hadoop/{serviceName}/nodeConsumptions
                $get(): Promise<cluster.hadoop.NodeConsumption[]>;
            }
            orderNewNodeHourly: {
                // POST /cluster/hadoop/{serviceName}/orderNewNodeHourly
                $post(params: {nodeProfile: string}): Promise<cluster.hadoop.Task>;
            }
            orderableNodeProfiles: {
                // GET /cluster/hadoop/{serviceName}/orderableNodeProfiles
                $get(): Promise<string[]>;
            }
            restart: {
                // POST /cluster/hadoop/{serviceName}/restart
                $post(): Promise<cluster.hadoop.Task>;
            }
            service: {
                restart: {
                    // POST /cluster/hadoop/{serviceName}/service/restart
                    $post(params: {service: cluster.hadoop.ClusterServiceNameEnum}): Promise<cluster.hadoop.Task>;
                }
                start: {
                    // POST /cluster/hadoop/{serviceName}/service/start
                    $post(params: {service: cluster.hadoop.ClusterServiceNameEnum}): Promise<cluster.hadoop.Task>;
                }
                stop: {
                    // POST /cluster/hadoop/{serviceName}/service/stop
                    $post(params: {service: cluster.hadoop.ClusterServiceNameEnum}): Promise<cluster.hadoop.Task>;
                }
            }
            serviceInfos: {
                // GET /cluster/hadoop/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /cluster/hadoop/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            start: {
                // POST /cluster/hadoop/{serviceName}/start
                $post(): Promise<cluster.hadoop.Task>;
            }
            stop: {
                // POST /cluster/hadoop/{serviceName}/stop
                $post(): Promise<cluster.hadoop.Task>;
            }
            task: {
                // GET /cluster/hadoop/{serviceName}/task
                $get(params?: {status?: cluster.hadoop.OperationStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /cluster/hadoop/{serviceName}/task/{taskId}
                    $get(): Promise<cluster.hadoop.Task>;
                };
            }
            terminate: {
                // POST /cluster/hadoop/{serviceName}/terminate
                $post(): Promise<cluster.hadoop.Task>;
            }
            user: {
                // GET /cluster/hadoop/{serviceName}/user
                $get(): Promise<string[]>;
                // POST /cluster/hadoop/{serviceName}/user
                $post(params: {clouderaManager: boolean, httpFrontend: boolean, hue: boolean, password: string, username: string}): Promise<cluster.hadoop.Task>;
                $(username: string): {
                    // DELETE /cluster/hadoop/{serviceName}/user/{username}
                    $delete(): Promise<cluster.hadoop.Task>;
                    // GET /cluster/hadoop/{serviceName}/user/{username}
                    $get(): Promise<cluster.hadoop.User>;
                    // PUT /cluster/hadoop/{serviceName}/user/{username}
                    $put(params?: {clouderaManager?: boolean, httpFrontend?: boolean, hue?: boolean, username?: string}): Promise<void>;
                    resetPassword: {
                        // POST /cluster/hadoop/{serviceName}/user/{username}/resetPassword
                        $post(params: {password: string}): Promise<cluster.hadoop.Task>;
                    }
                };
            }
        };
    }
// Api
  /**
   * Operations about the HADOOPCLUSTER service
   * List available services
   */
  get(path: '/cluster/hadoop'): () => Promise<string[]>;
  /**
   * Managed Hadoop Cluster
   * Get this object properties
   */
  get(path: '/cluster/hadoop/{serviceName}'): (params: {serviceName: string}) => Promise<cluster.hadoop.hadoop>;
  /**
   * consumptions operations
   * Get the current consumptions that you will billed for on the next bill
   */
  get(path: '/cluster/hadoop/{serviceName}/consumptions'): (params: {serviceName: string}) => Promise<cluster.hadoop.ClusterConsumption>;
  /**
   * List the cluster.hadoop.NetworkAcl objects
   * Network ACL associated with this Hadoop Cluster
   */
  get(path: '/cluster/hadoop/{serviceName}/networkAcl'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * ACL for allowing ip blocks to access to your cluster
   * Get this object properties
   */
  get(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}'): (params: {block: string, serviceName: string}) => Promise<cluster.hadoop.NetworkAcl>;
  /**
   * List the cluster.hadoop.Node objects
   * Nodes of the Cluster
   */
  get(path: '/cluster/hadoop/{serviceName}/node'): (params: {serviceName: string, softwareProfile?: cluster.hadoop.NodeProfileEnum}) => Promise<string[]>;
  /**
   * Physical or Virtual Node
   * Get this object properties
   */
  get(path: '/cluster/hadoop/{serviceName}/node/{hostname}'): (params: {hostname: string, serviceName: string}) => Promise<cluster.hadoop.Node>;
  /**
   * List the cluster.hadoop.Role objects
   * Roles (ie set of Hadoop services) of the Node
   */
  get(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role'): (params: {hostname: string, serviceName: string}) => Promise<cluster.hadoop.RoleTypeEnum[]>;
  /**
   * Role (ie set of Hadoop services) of the Node
   * Get this object properties
   */
  get(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}'): (params: {hostname: string, serviceName: string, type: cluster.hadoop.RoleTypeEnum}) => Promise<cluster.hadoop.Role>;
  /**
   * nodeBillingProfiles operations
   * Detailed description for each Node profile
   */
  get(path: '/cluster/hadoop/{serviceName}/nodeBillingProfiles'): (params: {serviceName: string}) => Promise<cluster.hadoop.NodeBillingProfile[]>;
  /**
   * nodeConsumptions operations
   * Get the current node consumptions that you will billed for on the next bill
   */
  get(path: '/cluster/hadoop/{serviceName}/nodeConsumptions'): (params: {serviceName: string}) => Promise<cluster.hadoop.NodeConsumption[]>;
  /**
   * orderableNodeProfiles operations
   * List of orderable Node profiles
   */
  get(path: '/cluster/hadoop/{serviceName}/orderableNodeProfiles'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/cluster/hadoop/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the cluster.hadoop.Task objects
   * Tasks associated with this Hadoop Cluster
   */
  get(path: '/cluster/hadoop/{serviceName}/task'): (params: {serviceName: string, status?: cluster.hadoop.OperationStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Hadoop Cluster component
   * Get this object properties
   */
  get(path: '/cluster/hadoop/{serviceName}/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<cluster.hadoop.Task>;
  /**
   * List the cluster.hadoop.User objects
   * Users associated with this Hadoop Cluster
   */
  get(path: '/cluster/hadoop/{serviceName}/user'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * User allowed to access interfaces on your cluster
   * Get this object properties
   */
  get(path: '/cluster/hadoop/{serviceName}/user/{username}'): (params: {serviceName: string, username: string}) => Promise<cluster.hadoop.User>;
  /**
   * Get the orderable node profiles and their characteristics
   * Get the orderable node profiles and their characteristics
   */
  get(path: '/cluster/hadoop/orderableNodeProfiles'): () => Promise<cluster.hadoop.NodeBillingProfile[]>;
  /**
   * Get informations about the order of one cluster
   * Get informations about the order of one cluster
   */
  get(path: '/cluster/hadoop/orderInformations'): () => Promise<cluster.hadoop.OrderInformations>;
  /**
   * ACL for allowing ip blocks to access to your cluster
   * Alter this object properties
   */
  put(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}'): (params: {block: string, serviceName: string, description?: string, state?: cluster.hadoop.NetworkAclStateEnum}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/cluster/hadoop/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * User allowed to access interfaces on your cluster
   * Alter this object properties
   */
  put(path: '/cluster/hadoop/{serviceName}/user/{username}'): (params: {serviceName: string, username: string, clouderaManager?: boolean, httpFrontend?: boolean, hue?: boolean}) => Promise<void>;
  /**
   * List the cluster.hadoop.NetworkAcl objects
   * Add an ACL to your cluster
   */
  post(path: '/cluster/hadoop/{serviceName}/networkAcl'): (params: {serviceName: string, block?: string, description?: string}) => Promise<cluster.hadoop.Task>;
  /**
   * decommission operations
   * Decommission the node and all the services on it
   */
  post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/decommission'): (params: {hostname: string, serviceName: string}) => Promise<cluster.hadoop.Task>;
  /**
   * recommission operations
   * Recommission the node and all the services on it
   */
  post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/recommission'): (params: {hostname: string, serviceName: string}) => Promise<cluster.hadoop.Task>;
  /**
   * List the cluster.hadoop.Role objects
   * Add the Role to the Node
   */
  post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role'): (params: {hostname: string, serviceName: string, type: cluster.hadoop.RoleTypeEnum}) => Promise<cluster.hadoop.Task>;
  /**
   * restart operations
   * Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES)
   */
  post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart'): (params: {hostname: string, serviceName: string, type: cluster.hadoop.RoleTypeEnum}) => Promise<cluster.hadoop.Task>;
  /**
   * start operations
   * Start the role on the node
   */
  post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start'): (params: {hostname: string, serviceName: string, type: cluster.hadoop.RoleTypeEnum}) => Promise<cluster.hadoop.Task>;
  /**
   * stop operations
   * Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES)
   */
  post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop'): (params: {hostname: string, serviceName: string, type: cluster.hadoop.RoleTypeEnum}) => Promise<cluster.hadoop.Task>;
  /**
   * orderNewNodeHourly operations
   * Order a new node in the cluster
   */
  post(path: '/cluster/hadoop/{serviceName}/orderNewNodeHourly'): (params: {serviceName: string, nodeProfile: string}) => Promise<cluster.hadoop.Task>;
  /**
   * restart operations
   * Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE)
   */
  post(path: '/cluster/hadoop/{serviceName}/restart'): (params: {serviceName: string}) => Promise<cluster.hadoop.Task>;
  /**
   * restart operations
   * Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES)
   */
  post(path: '/cluster/hadoop/{serviceName}/service/restart'): (params: {serviceName: string, service: cluster.hadoop.ClusterServiceNameEnum}) => Promise<cluster.hadoop.Task>;
  /**
   * start operations
   * Start a Cloudera Manager service
   */
  post(path: '/cluster/hadoop/{serviceName}/service/start'): (params: {serviceName: string, service: cluster.hadoop.ClusterServiceNameEnum}) => Promise<cluster.hadoop.Task>;
  /**
   * stop operations
   * Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES)
   */
  post(path: '/cluster/hadoop/{serviceName}/service/stop'): (params: {serviceName: string, service: cluster.hadoop.ClusterServiceNameEnum}) => Promise<cluster.hadoop.Task>;
  /**
   * start operations
   * Start the Cloudera Manager Hadoop Cluster
   */
  post(path: '/cluster/hadoop/{serviceName}/start'): (params: {serviceName: string}) => Promise<cluster.hadoop.Task>;
  /**
   * stop operations
   * Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE)
   */
  post(path: '/cluster/hadoop/{serviceName}/stop'): (params: {serviceName: string}) => Promise<cluster.hadoop.Task>;
  /**
   * terminate operations
   * Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST
   */
  post(path: '/cluster/hadoop/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<cluster.hadoop.Task>;
  /**
   * List the cluster.hadoop.User objects
   * Add an User to your cluster
   */
  post(path: '/cluster/hadoop/{serviceName}/user'): (params: {serviceName: string, clouderaManager: boolean, httpFrontend: boolean, hue: boolean, password: string, username: string}) => Promise<cluster.hadoop.Task>;
  /**
   * resetPassword operations
   * Reset the password for a given Hadoop Cluster User
   */
  post(path: '/cluster/hadoop/{serviceName}/user/{username}/resetPassword'): (params: {serviceName: string, username: string, password: string}) => Promise<cluster.hadoop.Task>;
  /**
   * ACL for allowing ip blocks to access to your cluster
   * Remove this ACL
   */
  delete(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}'): (params: {block: string, serviceName: string}) => Promise<cluster.hadoop.Task>;
  /**
   * Physical or Virtual Node
   * Remove this Node from the Cluster
   */
  delete(path: '/cluster/hadoop/{serviceName}/node/{hostname}'): (params: {hostname: string, serviceName: string}) => Promise<cluster.hadoop.Task>;
  /**
   * Role (ie set of Hadoop services) of the Node
   * Remove this Role from the Node
   */
  delete(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}'): (params: {hostname: string, serviceName: string, type: cluster.hadoop.RoleTypeEnum}) => Promise<cluster.hadoop.Task>;
  /**
   * User allowed to access interfaces on your cluster
   * Remove this User
   */
  delete(path: '/cluster/hadoop/{serviceName}/user/{username}'): (params: {serviceName: string, username: string}) => Promise<cluster.hadoop.Task>;
}
