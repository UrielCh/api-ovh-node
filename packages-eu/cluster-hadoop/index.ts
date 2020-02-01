import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /cluster/hadoop Models
 * Source: https://eu.api.ovh.com/1.0/cluster/hadoop.json
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
    // interface fullName: complexType.UnitAndValue.UnitAndValue
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
export interface Cluster {
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
                $post(params?: { block?: string, description?: string }): Promise<cluster.hadoop.Task>;
                $(block: string): {
                    // DELETE /cluster/hadoop/{serviceName}/networkAcl/{block}
                    $delete(): Promise<cluster.hadoop.Task>;
                    // GET /cluster/hadoop/{serviceName}/networkAcl/{block}
                    $get(): Promise<cluster.hadoop.NetworkAcl>;
                    // PUT /cluster/hadoop/{serviceName}/networkAcl/{block}
                    $put(params?: { block?: string, description?: string, state?: cluster.hadoop.NetworkAclStateEnum }): Promise<void>;
                };
            }
            node: {
                // GET /cluster/hadoop/{serviceName}/node
                $get(params?: { softwareProfile?: cluster.hadoop.NodeProfileEnum }): Promise<string[]>;
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
                        $post(params: { type: cluster.hadoop.RoleTypeEnum }): Promise<cluster.hadoop.Task>;
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
                $post(params: { nodeProfile: string }): Promise<cluster.hadoop.Task>;
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
                    $post(params: { service: cluster.hadoop.ClusterServiceNameEnum }): Promise<cluster.hadoop.Task>;
                }
                start: {
                    // POST /cluster/hadoop/{serviceName}/service/start
                    $post(params: { service: cluster.hadoop.ClusterServiceNameEnum }): Promise<cluster.hadoop.Task>;
                }
                stop: {
                    // POST /cluster/hadoop/{serviceName}/service/stop
                    $post(params: { service: cluster.hadoop.ClusterServiceNameEnum }): Promise<cluster.hadoop.Task>;
                }
            }
            serviceInfos: {
                // GET /cluster/hadoop/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /cluster/hadoop/{serviceName}/serviceInfos
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
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
                $get(params?: { status?: cluster.hadoop.OperationStateEnum }): Promise<number[]>;
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
                $post(params: { clouderaManager: boolean, httpFrontend: boolean, hue: boolean, password: string, username: string }): Promise<cluster.hadoop.Task>;
                $(username: string): {
                    // DELETE /cluster/hadoop/{serviceName}/user/{username}
                    $delete(): Promise<cluster.hadoop.Task>;
                    // GET /cluster/hadoop/{serviceName}/user/{username}
                    $get(): Promise<cluster.hadoop.User>;
                    // PUT /cluster/hadoop/{serviceName}/user/{username}
                    $put(params?: { clouderaManager?: boolean, httpFrontend?: boolean, hue?: boolean, username?: string }): Promise<void>;
                    resetPassword: {
                        // POST /cluster/hadoop/{serviceName}/user/{username}/resetPassword
                        $post(params: { password: string }): Promise<cluster.hadoop.Task>;
                    }
                };
            }
        };
    }
}
