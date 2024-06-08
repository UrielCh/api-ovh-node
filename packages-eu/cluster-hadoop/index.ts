import { buildOvhProxy } from '@ovh-api/common';
import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /cluster/hadoop Models
 * Source: https://eu.api.ovh.com/1.0/cluster/hadoop.json
 */
export namespace cluster {
    export namespace hadoop {
        /**
         * All billing profile names
         * type fullname: cluster.hadoop.BillingNameEnum
         */
        export type BillingNameEnum = "100-small" | "200-cpu-1" | "220-cpu-3" | "300-disk-1" | "310-disk-3" | "900-vm-1"
        /**
         * Detailed information on a Hadoop Cluster consumption
         * interface fullName: cluster.hadoop.ClusterConsumption.ClusterConsumption
         */
        export interface ClusterConsumption {
            quantity: complexType.UnitAndValue<number>;
        }
        /**
         * All services names in a Hadoop Cluster
         * type fullname: cluster.hadoop.ClusterServiceNameEnum
         */
        export type ClusterServiceNameEnum = "HBase" | "HDFS" | "HUE" | "Hive" | "Oozie" | "Solr" | "Spark" | "Sqoop" | "YARN" | "ZooKeeper"
        /**
         * All states a Hadoop Cluster can be in
         * type fullname: cluster.hadoop.ClusterStateEnum
         */
        export type ClusterStateEnum = "created" | "creating" | "deleted" | "deleting" | "delivered" | "delivering" | "toDeliver"
        /**
         * ACL for allowing ip blocks to access to your cluster
         * interface fullName: cluster.hadoop.NetworkAcl.NetworkAcl
         */
        export interface NetworkAcl {
            block: string;
            description?: string;
            state: cluster.hadoop.NetworkAclStateEnum;
        }
        /**
         * All states a Hadoop Cluster NetworkAcl can be in
         * type fullname: cluster.hadoop.NetworkAclStateEnum
         */
        export type NetworkAclStateEnum = "disabled" | "enabled" | "pending"
        /**
         * Physical or Virtual Node
         * interface fullName: cluster.hadoop.Node.Node
         */
        export interface Node {
            billingProfileName: cluster.hadoop.BillingNameEnum;
            hostname: string;
            ip: string;
            isRemovable: boolean;
            softwareProfile: cluster.hadoop.NodeProfileEnum;
            state: cluster.hadoop.NodeStateEnum;
        }
        /**
         * Detailed information on a node billing profile
         * interface fullName: cluster.hadoop.NodeBillingProfile.NodeBillingProfile
         */
        export interface NodeBillingProfile {
            CPUFrequency: complexType.UnitAndValue<number>;
            diskCapacity: complexType.UnitAndValue<number>;
            nbCPUCores: number;
            nbCPUThreads: number;
            networkBandwidth: complexType.UnitAndValue<number>;
            nodeProfile: string;
            ramQuantity: complexType.UnitAndValue<number>;
        }
        /**
         * Detailed information on a node consumption of a Hadoop Cluster
         * interface fullName: cluster.hadoop.NodeConsumption.NodeConsumption
         */
        export interface NodeConsumption {
            hostname: string;
            nodeProfile: cluster.hadoop.BillingNameEnum;
            quantity: complexType.UnitAndValue<number>;
        }
        /**
         * All profiles a Hadoop Cluster Node can be
         * type fullname: cluster.hadoop.NodeProfileEnum
         */
        export type NodeProfileEnum = "ApplicationServer" | "BasicNode" | "ClouderaManager" | "MasterServer" | "SecondaryServer"
        /**
         * All states a Hadoop Cluster Node can be in
         * type fullname: cluster.hadoop.NodeStateEnum
         */
        export type NodeStateEnum = "available" | "delivered" | "toDeploy" | "unavailable"
        /**
         * All states a Hadoop Cluster Cloud Task can be in
         * type fullname: cluster.hadoop.OperationStateEnum
         */
        export type OperationStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        /**
         * Detailed information on the order of one Hadoop Cluster
         * interface fullName: cluster.hadoop.OrderInformations.OrderInformations
         */
        export interface OrderInformations {
            maximumOrderableNodes: number;
            minimumOrderableNodes: number;
        }
        /**
         * Role (ie set of Hadoop services) of the Node
         * interface fullName: cluster.hadoop.Role.Role
         */
        export interface Role {
            id: number;
            type: cluster.hadoop.RoleTypeEnum;
        }
        /**
         * All roles a Hadoop Cluster Node can be
         * type fullname: cluster.hadoop.RoleTypeEnum
         */
        export type RoleTypeEnum = "cloudera_manager" | "data_node" | "elasticsearch_server" | "hbase_master" | "hbase_region_server" | "hive_server2" | "hue" | "impala_daemon" | "impala_server" | "map_reduce_history_server" | "name_node" | "oozie_server" | "open_tsdb" | "secondary_name_node" | "solr_server" | "spark_master" | "spark_worker" | "sqoop_server" | "yarn_node_manager" | "yarn_resource_manager" | "zoo_keeper"
        /**
         * Operation on a Hadoop Cluster component
         * interface fullName: cluster.hadoop.Task.Task
         */
        export interface Task {
            name: string;
            status: cluster.hadoop.OperationStateEnum;
            taskId: number;
        }
        /**
         * User allowed to access interfaces on your cluster
         * interface fullName: cluster.hadoop.User.User
         */
        export interface User {
            clouderaManager: boolean;
            httpFrontend: boolean;
            hue: boolean;
            username: string;
        }
        /**
         * Managed Hadoop Cluster
         * interface fullName: cluster.hadoop.hadoop.hadoop
         */
        export interface hadoop {
            clouderaVersion: string;
            maxOrderableNodes: number;
            name: string;
            state: cluster.hadoop.ClusterStateEnum;
        }
        /**
         * Managed Hadoop Cluster
         * interface fullName: cluster.hadoop.hadoopWithIAM.hadoopWithIAM
         */
        export interface hadoopWithIAM {
            clouderaVersion: string;
            iam?: iam.ResourceMetadata;
            maxOrderableNodes: number;
            name: string;
            state: cluster.hadoop.ClusterStateEnum;
        }
    }
}
export namespace complexType {
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
    }
}
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
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
 * Api model for /cluster/hadoop
 */
export interface Cluster {
    hadoop: {
        /**
         * List available services
         * GET /cluster/hadoop
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        orderInformations: {
            /**
             * Get informations about the order of one cluster
             * GET /cluster/hadoop/orderInformations
             */
            $get(): Promise<cluster.hadoop.OrderInformations>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        orderableNodeProfiles: {
            /**
             * Get the orderable node profiles and their characteristics
             * GET /cluster/hadoop/orderableNodeProfiles
             */
            $get(): Promise<cluster.hadoop.NodeBillingProfile[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /cluster/hadoop/{serviceName}
             */
            $get(): Promise<cluster.hadoop.hadoop>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            consumptions: {
                /**
                 * Get the current consumptions that you will billed for on the next bill
                 * GET /cluster/hadoop/{serviceName}/consumptions
                 */
                $get(): Promise<cluster.hadoop.ClusterConsumption>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            networkAcl: {
                /**
                 * Network ACL associated with this Hadoop Cluster
                 * GET /cluster/hadoop/{serviceName}/networkAcl
                 */
                $get(): Promise<string[]>;
                /**
                 * Add an ACL to your cluster
                 * POST /cluster/hadoop/{serviceName}/networkAcl
                 */
                $post(params?: { block?: string, description?: string }): Promise<cluster.hadoop.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(block: string): {
                    /**
                     * Remove this ACL
                     * DELETE /cluster/hadoop/{serviceName}/networkAcl/{block}
                     */
                    $delete(): Promise<cluster.hadoop.Task>;
                    /**
                     * Get this object properties
                     * GET /cluster/hadoop/{serviceName}/networkAcl/{block}
                     */
                    $get(): Promise<cluster.hadoop.NetworkAcl>;
                    /**
                     * Alter this object properties
                     * PUT /cluster/hadoop/{serviceName}/networkAcl/{block}
                     */
                    $put(params?: { block?: string, description?: string, state?: cluster.hadoop.NetworkAclStateEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            node: {
                /**
                 * Nodes of the Cluster
                 * GET /cluster/hadoop/{serviceName}/node
                 */
                $get(params?: { softwareProfile?: cluster.hadoop.NodeProfileEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(hostname: string): {
                    /**
                     * Remove this Node from the Cluster
                     * DELETE /cluster/hadoop/{serviceName}/node/{hostname}
                     */
                    $delete(): Promise<cluster.hadoop.Task>;
                    /**
                     * Get this object properties
                     * GET /cluster/hadoop/{serviceName}/node/{hostname}
                     */
                    $get(): Promise<cluster.hadoop.Node>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    decommission: {
                        /**
                         * Decommission the node and all the services on it
                         * POST /cluster/hadoop/{serviceName}/node/{hostname}/decommission
                         */
                        $post(): Promise<cluster.hadoop.Task>;
                    }
                    recommission: {
                        /**
                         * Recommission the node and all the services on it
                         * POST /cluster/hadoop/{serviceName}/node/{hostname}/recommission
                         */
                        $post(): Promise<cluster.hadoop.Task>;
                    }
                    role: {
                        /**
                         * Roles (ie set of Hadoop services) of the Node
                         * GET /cluster/hadoop/{serviceName}/node/{hostname}/role
                         */
                        $get(): Promise<cluster.hadoop.RoleTypeEnum[]>;
                        /**
                         * Add the Role to the Node
                         * POST /cluster/hadoop/{serviceName}/node/{hostname}/role
                         */
                        $post(params: { type: cluster.hadoop.RoleTypeEnum }): Promise<cluster.hadoop.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(type: cluster.hadoop.RoleTypeEnum): {
                            /**
                             * Remove this Role from the Node
                             * DELETE /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}
                             */
                            $delete(): Promise<cluster.hadoop.Task>;
                            /**
                             * Get this object properties
                             * GET /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}
                             */
                            $get(): Promise<cluster.hadoop.Role>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            restart: {
                                /**
                                 * Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES)
                                 * POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart
                                 */
                                $post(): Promise<cluster.hadoop.Task>;
                            }
                            start: {
                                /**
                                 * Start the role on the node
                                 * POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start
                                 */
                                $post(): Promise<cluster.hadoop.Task>;
                            }
                            stop: {
                                /**
                                 * Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES)
                                 * POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop
                                 */
                                $post(): Promise<cluster.hadoop.Task>;
                            }
                        };
                    }
                };
            }
            nodeBillingProfiles: {
                /**
                 * Detailed description for each Node profile
                 * GET /cluster/hadoop/{serviceName}/nodeBillingProfiles
                 */
                $get(): Promise<cluster.hadoop.NodeBillingProfile[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            nodeConsumptions: {
                /**
                 * Get the current node consumptions that you will billed for on the next bill
                 * GET /cluster/hadoop/{serviceName}/nodeConsumptions
                 */
                $get(): Promise<cluster.hadoop.NodeConsumption[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            orderNewNodeHourly: {
                /**
                 * Order a new node in the cluster
                 * POST /cluster/hadoop/{serviceName}/orderNewNodeHourly
                 */
                $post(params: { nodeProfile: string }): Promise<cluster.hadoop.Task>;
            }
            orderableNodeProfiles: {
                /**
                 * List of orderable Node profiles
                 * GET /cluster/hadoop/{serviceName}/orderableNodeProfiles
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            restart: {
                /**
                 * Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE)
                 * POST /cluster/hadoop/{serviceName}/restart
                 */
                $post(): Promise<cluster.hadoop.Task>;
            }
            service: {
                restart: {
                    /**
                     * Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES)
                     * POST /cluster/hadoop/{serviceName}/service/restart
                     */
                    $post(params: { service: cluster.hadoop.ClusterServiceNameEnum }): Promise<cluster.hadoop.Task>;
                }
                start: {
                    /**
                     * Start a Cloudera Manager service
                     * POST /cluster/hadoop/{serviceName}/service/start
                     */
                    $post(params: { service: cluster.hadoop.ClusterServiceNameEnum }): Promise<cluster.hadoop.Task>;
                }
                stop: {
                    /**
                     * Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES)
                     * POST /cluster/hadoop/{serviceName}/service/stop
                     */
                    $post(params: { service: cluster.hadoop.ClusterServiceNameEnum }): Promise<cluster.hadoop.Task>;
                }
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /cluster/hadoop/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /cluster/hadoop/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            start: {
                /**
                 * Start the Cloudera Manager Hadoop Cluster
                 * POST /cluster/hadoop/{serviceName}/start
                 */
                $post(): Promise<cluster.hadoop.Task>;
            }
            stop: {
                /**
                 * Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE)
                 * POST /cluster/hadoop/{serviceName}/stop
                 */
                $post(): Promise<cluster.hadoop.Task>;
            }
            task: {
                /**
                 * Tasks associated with this Hadoop Cluster
                 * GET /cluster/hadoop/{serviceName}/task
                 */
                $get(params?: { status?: cluster.hadoop.OperationStateEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /cluster/hadoop/{serviceName}/task/{taskId}
                     */
                    $get(): Promise<cluster.hadoop.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            terminate: {
                /**
                 * Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST
                 * POST /cluster/hadoop/{serviceName}/terminate
                 */
                $post(): Promise<cluster.hadoop.Task>;
            }
            user: {
                /**
                 * Users associated with this Hadoop Cluster
                 * GET /cluster/hadoop/{serviceName}/user
                 */
                $get(): Promise<string[]>;
                /**
                 * Add an User to your cluster
                 * POST /cluster/hadoop/{serviceName}/user
                 */
                $post(params: { clouderaManager: boolean, httpFrontend: boolean, hue: boolean, password: string, username: string }): Promise<cluster.hadoop.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(username: string): {
                    /**
                     * Remove this User
                     * DELETE /cluster/hadoop/{serviceName}/user/{username}
                     */
                    $delete(): Promise<cluster.hadoop.Task>;
                    /**
                     * Get this object properties
                     * GET /cluster/hadoop/{serviceName}/user/{username}
                     */
                    $get(): Promise<cluster.hadoop.User>;
                    /**
                     * Alter this object properties
                     * PUT /cluster/hadoop/{serviceName}/user/{username}
                     */
                    $put(params?: { clouderaManager?: boolean, httpFrontend?: boolean, hue?: boolean, username?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    resetPassword: {
                        /**
                         * Reset the password for a given Hadoop Cluster User
                         * POST /cluster/hadoop/{serviceName}/user/{username}/resetPassword
                         */
                        $post(params: { password: string }): Promise<cluster.hadoop.Task>;
                    }
                };
            }
        };
    }
}
