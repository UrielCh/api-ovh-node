import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /cluster/hadoop Models
 */
export declare namespace cluster {
    namespace hadoop {
        type BillingNameEnum = "100-small" | "200-cpu-1" | "220-cpu-3" | "300-disk-1" | "310-disk-3" | "900-vm-1";
        interface ClusterConsumption {
            quantity: complexType.UnitAndValue<number>;
        }
        type ClusterServiceNameEnum = "HBase" | "HDFS" | "HUE" | "Hive" | "Oozie" | "Solr" | "Spark" | "Sqoop" | "YARN" | "ZooKeeper";
        type ClusterStateEnum = "created" | "creating" | "deleted" | "deleting" | "delivered" | "delivering" | "toDeliver";
        interface NetworkAcl {
            block: string;
            description?: string;
            state: cluster.hadoop.NetworkAclStateEnum;
        }
        type NetworkAclStateEnum = "disabled" | "enabled" | "pending";
        interface Node {
            billingProfileName: cluster.hadoop.BillingNameEnum;
            hostname: string;
            ip: string;
            isRemovable: boolean;
            softwareProfile: cluster.hadoop.NodeProfileEnum;
            state: cluster.hadoop.NodeStateEnum;
        }
        interface NodeBillingProfile {
            CPUFrequency: complexType.UnitAndValue<number>;
            diskCapacity: complexType.UnitAndValue<number>;
            nbCPUCores: number;
            nbCPUThreads: number;
            networkBandwidth: complexType.UnitAndValue<number>;
            nodeProfile: string;
            ramQuantity: complexType.UnitAndValue<number>;
        }
        interface NodeConsumption {
            hostname: string;
            nodeProfile: cluster.hadoop.BillingNameEnum;
            quantity: complexType.UnitAndValue<number>;
        }
        type NodeProfileEnum = "ApplicationServer" | "BasicNode" | "ClouderaManager" | "MasterServer" | "SecondaryServer";
        type NodeStateEnum = "available" | "delivered" | "toDeploy" | "unavailable";
        type OperationStateEnum = "cancelled" | "doing" | "done" | "error" | "todo";
        interface OrderInformations {
            maximumOrderableNodes: number;
            minimumOrderableNodes: number;
        }
        interface Role {
            id: number;
            type: cluster.hadoop.RoleTypeEnum;
        }
        type RoleTypeEnum = "cloudera_manager" | "data_node" | "elasticsearch_server" | "hbase_master" | "hbase_region_server" | "hive_server2" | "hue" | "impala_daemon" | "impala_server" | "map_reduce_history_server" | "name_node" | "oozie_server" | "open_tsdb" | "secondary_name_node" | "solr_server" | "spark_master" | "spark_worker" | "sqoop_server" | "yarn_node_manager" | "yarn_resource_manager" | "zoo_keeper";
        interface Task {
            name: string;
            status: cluster.hadoop.OperationStateEnum;
            taskId: number;
        }
        interface User {
            clouderaManager: boolean;
            httpFrontend: boolean;
            hue: boolean;
            username: string;
        }
        interface hadoop {
            clouderaVersion: string;
            maxOrderableNodes: number;
            name: string;
            state: cluster.hadoop.ClusterStateEnum;
        }
    }
}
export declare namespace complexType {
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
}
export declare namespace services {
    interface Service {
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
export declare function proxyClusterHadoop(ovhEngine: OvhRequestable): Cluster;
export default proxyClusterHadoop;
/**
 * Api Proxy model
 */ export interface Cluster {
    hadoop: {
        $get(): Promise<string[]>;
        orderInformations: {
            $get(): Promise<cluster.hadoop.OrderInformations>;
        };
        orderableNodeProfiles: {
            $get(): Promise<cluster.hadoop.NodeBillingProfile[]>;
        };
        $(serviceName: string): {
            $get(): Promise<cluster.hadoop.hadoop>;
            consumptions: {
                $get(): Promise<cluster.hadoop.ClusterConsumption>;
            };
            networkAcl: {
                $get(): Promise<string[]>;
                $post(params?: {
                    block?: string;
                    description?: string;
                }): Promise<cluster.hadoop.Task>;
                $(block: string): {
                    $delete(): Promise<cluster.hadoop.Task>;
                    $get(): Promise<cluster.hadoop.NetworkAcl>;
                    $put(params?: {
                        block?: string;
                        description?: string;
                        state?: cluster.hadoop.NetworkAclStateEnum;
                    }): Promise<void>;
                };
            };
            node: {
                $get(params?: {
                    softwareProfile?: cluster.hadoop.NodeProfileEnum;
                }): Promise<string[]>;
                $(hostname: string): {
                    $delete(): Promise<cluster.hadoop.Task>;
                    $get(): Promise<cluster.hadoop.Node>;
                    decommission: {
                        $post(): Promise<cluster.hadoop.Task>;
                    };
                    recommission: {
                        $post(): Promise<cluster.hadoop.Task>;
                    };
                    role: {
                        $get(): Promise<cluster.hadoop.RoleTypeEnum[]>;
                        $post(params: {
                            type: cluster.hadoop.RoleTypeEnum;
                        }): Promise<cluster.hadoop.Task>;
                        $(type: cluster.hadoop.RoleTypeEnum): {
                            $delete(): Promise<cluster.hadoop.Task>;
                            $get(): Promise<cluster.hadoop.Role>;
                            restart: {
                                $post(): Promise<cluster.hadoop.Task>;
                            };
                            start: {
                                $post(): Promise<cluster.hadoop.Task>;
                            };
                            stop: {
                                $post(): Promise<cluster.hadoop.Task>;
                            };
                        };
                    };
                };
            };
            nodeBillingProfiles: {
                $get(): Promise<cluster.hadoop.NodeBillingProfile[]>;
            };
            nodeConsumptions: {
                $get(): Promise<cluster.hadoop.NodeConsumption[]>;
            };
            orderNewNodeHourly: {
                $post(params: {
                    nodeProfile: string;
                }): Promise<cluster.hadoop.Task>;
            };
            orderableNodeProfiles: {
                $get(): Promise<string[]>;
            };
            restart: {
                $post(): Promise<cluster.hadoop.Task>;
            };
            service: {
                restart: {
                    $post(params: {
                        service: cluster.hadoop.ClusterServiceNameEnum;
                    }): Promise<cluster.hadoop.Task>;
                };
                start: {
                    $post(params: {
                        service: cluster.hadoop.ClusterServiceNameEnum;
                    }): Promise<cluster.hadoop.Task>;
                };
                stop: {
                    $post(params: {
                        service: cluster.hadoop.ClusterServiceNameEnum;
                    }): Promise<cluster.hadoop.Task>;
                };
            };
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
            };
            start: {
                $post(): Promise<cluster.hadoop.Task>;
            };
            stop: {
                $post(): Promise<cluster.hadoop.Task>;
            };
            task: {
                $get(params?: {
                    status?: cluster.hadoop.OperationStateEnum;
                }): Promise<number[]>;
                $(taskId: number): {
                    $get(): Promise<cluster.hadoop.Task>;
                };
            };
            terminate: {
                $post(): Promise<cluster.hadoop.Task>;
            };
            user: {
                $get(): Promise<string[]>;
                $post(params: {
                    clouderaManager: boolean;
                    httpFrontend: boolean;
                    hue: boolean;
                    password: string;
                    username: string;
                }): Promise<cluster.hadoop.Task>;
                $(username: string): {
                    $delete(): Promise<cluster.hadoop.Task>;
                    $get(): Promise<cluster.hadoop.User>;
                    $put(params?: {
                        clouderaManager?: boolean;
                        httpFrontend?: boolean;
                        hue?: boolean;
                        username?: string;
                    }): Promise<void>;
                    resetPassword: {
                        $post(params: {
                            password: string;
                        }): Promise<cluster.hadoop.Task>;
                    };
                };
            };
        };
    };
    /**
     * Operations about the HADOOPCLUSTER service
     * List available services
     */
    get(path: '/cluster/hadoop'): () => Promise<string[]>;
    /**
     * Managed Hadoop Cluster
     * Get this object properties
     */
    get(path: '/cluster/hadoop/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<cluster.hadoop.hadoop>;
    /**
     * consumptions operations
     * Get the current consumptions that you will billed for on the next bill
     */
    get(path: '/cluster/hadoop/{serviceName}/consumptions'): (params: {
        serviceName: string;
    }) => Promise<cluster.hadoop.ClusterConsumption>;
    /**
     * List the cluster.hadoop.NetworkAcl objects
     * Network ACL associated with this Hadoop Cluster
     */
    get(path: '/cluster/hadoop/{serviceName}/networkAcl'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * ACL for allowing ip blocks to access to your cluster
     * Get this object properties
     */
    get(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}'): (params: {
        block: string;
        serviceName: string;
    }) => Promise<cluster.hadoop.NetworkAcl>;
    /**
     * List the cluster.hadoop.Node objects
     * Nodes of the Cluster
     */
    get(path: '/cluster/hadoop/{serviceName}/node'): (params: {
        serviceName: string;
        softwareProfile?: cluster.hadoop.NodeProfileEnum;
    }) => Promise<string[]>;
    /**
     * Physical or Virtual Node
     * Get this object properties
     */
    get(path: '/cluster/hadoop/{serviceName}/node/{hostname}'): (params: {
        hostname: string;
        serviceName: string;
    }) => Promise<cluster.hadoop.Node>;
    /**
     * List the cluster.hadoop.Role objects
     * Roles (ie set of Hadoop services) of the Node
     */
    get(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role'): (params: {
        hostname: string;
        serviceName: string;
    }) => Promise<cluster.hadoop.RoleTypeEnum[]>;
    /**
     * Role (ie set of Hadoop services) of the Node
     * Get this object properties
     */
    get(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}'): (params: {
        hostname: string;
        serviceName: string;
        type: cluster.hadoop.RoleTypeEnum;
    }) => Promise<cluster.hadoop.Role>;
    /**
     * nodeBillingProfiles operations
     * Detailed description for each Node profile
     */
    get(path: '/cluster/hadoop/{serviceName}/nodeBillingProfiles'): (params: {
        serviceName: string;
    }) => Promise<cluster.hadoop.NodeBillingProfile[]>;
    /**
     * nodeConsumptions operations
     * Get the current node consumptions that you will billed for on the next bill
     */
    get(path: '/cluster/hadoop/{serviceName}/nodeConsumptions'): (params: {
        serviceName: string;
    }) => Promise<cluster.hadoop.NodeConsumption[]>;
    /**
     * orderableNodeProfiles operations
     * List of orderable Node profiles
     */
    get(path: '/cluster/hadoop/{serviceName}/orderableNodeProfiles'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/cluster/hadoop/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the cluster.hadoop.Task objects
     * Tasks associated with this Hadoop Cluster
     */
    get(path: '/cluster/hadoop/{serviceName}/task'): (params: {
        serviceName: string;
        status?: cluster.hadoop.OperationStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a Hadoop Cluster component
     * Get this object properties
     */
    get(path: '/cluster/hadoop/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * List the cluster.hadoop.User objects
     * Users associated with this Hadoop Cluster
     */
    get(path: '/cluster/hadoop/{serviceName}/user'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * User allowed to access interfaces on your cluster
     * Get this object properties
     */
    get(path: '/cluster/hadoop/{serviceName}/user/{username}'): (params: {
        serviceName: string;
        username: string;
    }) => Promise<cluster.hadoop.User>;
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
    put(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}'): (params: {
        block: string;
        serviceName: string;
        description?: string;
        state?: cluster.hadoop.NetworkAclStateEnum;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/cluster/hadoop/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * User allowed to access interfaces on your cluster
     * Alter this object properties
     */
    put(path: '/cluster/hadoop/{serviceName}/user/{username}'): (params: {
        serviceName: string;
        username: string;
        clouderaManager?: boolean;
        httpFrontend?: boolean;
        hue?: boolean;
    }) => Promise<void>;
    /**
     * List the cluster.hadoop.NetworkAcl objects
     * Add an ACL to your cluster
     */
    post(path: '/cluster/hadoop/{serviceName}/networkAcl'): (params: {
        serviceName: string;
        block?: string;
        description?: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * decommission operations
     * Decommission the node and all the services on it
     */
    post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/decommission'): (params: {
        hostname: string;
        serviceName: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * recommission operations
     * Recommission the node and all the services on it
     */
    post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/recommission'): (params: {
        hostname: string;
        serviceName: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * List the cluster.hadoop.Role objects
     * Add the Role to the Node
     */
    post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role'): (params: {
        hostname: string;
        serviceName: string;
        type: cluster.hadoop.RoleTypeEnum;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * restart operations
     * Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES)
     */
    post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart'): (params: {
        hostname: string;
        serviceName: string;
        type: cluster.hadoop.RoleTypeEnum;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * start operations
     * Start the role on the node
     */
    post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start'): (params: {
        hostname: string;
        serviceName: string;
        type: cluster.hadoop.RoleTypeEnum;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * stop operations
     * Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES)
     */
    post(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop'): (params: {
        hostname: string;
        serviceName: string;
        type: cluster.hadoop.RoleTypeEnum;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * orderNewNodeHourly operations
     * Order a new node in the cluster
     */
    post(path: '/cluster/hadoop/{serviceName}/orderNewNodeHourly'): (params: {
        serviceName: string;
        nodeProfile: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * restart operations
     * Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE)
     */
    post(path: '/cluster/hadoop/{serviceName}/restart'): (params: {
        serviceName: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * restart operations
     * Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES)
     */
    post(path: '/cluster/hadoop/{serviceName}/service/restart'): (params: {
        serviceName: string;
        service: cluster.hadoop.ClusterServiceNameEnum;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * start operations
     * Start a Cloudera Manager service
     */
    post(path: '/cluster/hadoop/{serviceName}/service/start'): (params: {
        serviceName: string;
        service: cluster.hadoop.ClusterServiceNameEnum;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * stop operations
     * Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES)
     */
    post(path: '/cluster/hadoop/{serviceName}/service/stop'): (params: {
        serviceName: string;
        service: cluster.hadoop.ClusterServiceNameEnum;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * start operations
     * Start the Cloudera Manager Hadoop Cluster
     */
    post(path: '/cluster/hadoop/{serviceName}/start'): (params: {
        serviceName: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * stop operations
     * Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE)
     */
    post(path: '/cluster/hadoop/{serviceName}/stop'): (params: {
        serviceName: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * terminate operations
     * Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST
     */
    post(path: '/cluster/hadoop/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * List the cluster.hadoop.User objects
     * Add an User to your cluster
     */
    post(path: '/cluster/hadoop/{serviceName}/user'): (params: {
        serviceName: string;
        clouderaManager: boolean;
        httpFrontend: boolean;
        hue: boolean;
        password: string;
        username: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * resetPassword operations
     * Reset the password for a given Hadoop Cluster User
     */
    post(path: '/cluster/hadoop/{serviceName}/user/{username}/resetPassword'): (params: {
        serviceName: string;
        username: string;
        password: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * ACL for allowing ip blocks to access to your cluster
     * Remove this ACL
     */
    delete(path: '/cluster/hadoop/{serviceName}/networkAcl/{block}'): (params: {
        block: string;
        serviceName: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * Physical or Virtual Node
     * Remove this Node from the Cluster
     */
    delete(path: '/cluster/hadoop/{serviceName}/node/{hostname}'): (params: {
        hostname: string;
        serviceName: string;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * Role (ie set of Hadoop services) of the Node
     * Remove this Role from the Node
     */
    delete(path: '/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}'): (params: {
        hostname: string;
        serviceName: string;
        type: cluster.hadoop.RoleTypeEnum;
    }) => Promise<cluster.hadoop.Task>;
    /**
     * User allowed to access interfaces on your cluster
     * Remove this User
     */
    delete(path: '/cluster/hadoop/{serviceName}/user/{username}'): (params: {
        serviceName: string;
        username: string;
    }) => Promise<cluster.hadoop.Task>;
}
