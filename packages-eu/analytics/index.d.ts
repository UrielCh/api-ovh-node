import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /analytics Models
 */
export declare namespace analytics {
    interface Cluster {
        analyticsProjectId?: string;
        clusterName?: string;
        clusterType?: string;
        deploymentEndDate?: string;
        deploymentStartDate?: string;
        domain?: string;
        nodes?: analytics.cluster.Node[];
        osProjectId?: string;
        osRegion?: string;
        serviceName: string;
        status: analytics.Status;
    }
    interface Component {
        name: string;
        version: string;
    }
    type Status = "PENDING" | "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | "DONE" | "ERROR" | "UNKNOWN" | "OK" | "TO_DEPLOY" | "DEPLOYING" | "DEPLOYED" | "TO_DESTROY" | "DESTROYED" | "INITIALIZED";
    namespace cluster {
        interface Activity {
            description: string;
            status: analytics.Status;
            timestamp: string;
            user?: string;
        }
        interface Deploy {
            clusterName: string;
            clusterType: string;
            edgeNodeStorage: number;
            hdfsEffectiveStorage: number;
            hdfsReplicationFactor: number;
            masterNodeStorage: number;
            masterPassword: string;
            nodes: analytics.node.Deploy[];
            osProjectId: string;
            osProjectName: string;
            osRegion: string;
            osToken: string;
            sshPublicKey: string;
        }
        interface Destroy {
            osToken: string;
        }
        interface Node {
            deploymentEndDate?: string;
            deploymentStartDate?: string;
            flavor?: string;
            hostname?: string;
            ip?: string;
            nodeId: string;
            nodeType: analytics.node.Type;
            osRegion?: string;
            status: analytics.Status;
            storage?: number;
        }
        namespace deploy {
            interface Status {
                percentage: number;
                status: analytics.Status;
                task: string;
            }
        }
    }
    namespace node {
        interface Capability {
            instanceMax: number;
            instanceMin: number;
            instanceType: string[];
            rawStorageMaxGb: number;
            rawStorageMinGb: number;
        }
        interface Deploy {
            nodeFlavor: string;
            nodeType: analytics.node.Type;
        }
        type Type = "MASTER" | "SLAVE" | "EDGE" | "UTILITY";
    }
    namespace platform {
        interface Capability {
            availableRegion: string[];
            bastionNode: analytics.node.Capability;
            components: analytics.Component[];
            edgeNode: analytics.node.Capability;
            hdfsReplicationFactor: number;
            masterNode: analytics.node.Capability;
            requirements?: analytics.platform.Capability.Requirement[];
            utilityNode: analytics.node.Capability;
            version: string;
            versionDescription: string;
            workerNode: analytics.node.Capability;
        }
        namespace Capability {
            interface Requirement {
                display: boolean;
                fieldName: string;
            }
        }
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
    type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
    type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT";
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
 * END API /analytics Models
 */
export declare function proxyAnalytics(ovhEngine: OvhRequestable): Analytics;
export default proxyAnalytics;
/**
 * Api Proxy model
 */ export interface Analytics {
    capabilities: {
        platforms: {
            $get(): Promise<analytics.platform.Capability[]>;
        };
    };
    platforms: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<analytics.Cluster>;
            activity: {
                $get(): Promise<analytics.cluster.Activity[]>;
            };
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            confirmTermination: {
                $post(params: {
                    commentary?: string;
                    futureUse?: service.TerminationFutureUseEnum;
                    reason?: service.TerminationReasonEnum;
                    token: string;
                }): Promise<string>;
            };
            deploy: {
                $post(params: {
                    clusterName: string;
                    clusterType: string;
                    edgeNodeStorage: number;
                    hdfsEffectiveStorage: number;
                    hdfsReplicationFactor: number;
                    masterNodeStorage: number;
                    masterPassword: string;
                    nodes: analytics.node.Deploy[];
                    osProjectId: string;
                    osProjectName: string;
                    osRegion: string;
                    osToken: string;
                    sshPublicKey: string;
                }): Promise<analytics.cluster.Deploy>;
            };
            destroy: {
                $post(params: {
                    osToken: string;
                }): Promise<void>;
            };
            nodes: {
                $get(): Promise<string[]>;
                $(nodeId: string): {
                    $get(): Promise<analytics.cluster.Node>;
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
            status: {
                $get(): Promise<analytics.cluster.deploy.Status[]>;
            };
            terminate: {
                $post(): Promise<string>;
            };
        };
    };
    /**
     *
     * Platform capabilities
     */
    get(path: '/analytics/capabilities/platforms'): () => Promise<analytics.platform.Capability[]>;
    /**
     *
     * List available services
     */
    get(path: '/analytics/platforms'): () => Promise<string[]>;
    /**
     *
     * Get details about a service
     */
    get(path: '/analytics/platforms/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<analytics.Cluster>;
    /**
     *
     * Get activity logs
     */
    get(path: '/analytics/platforms/{serviceName}/activity'): (params: {
        serviceName: string;
    }) => Promise<analytics.cluster.Activity[]>;
    /**
     *
     * List available nodes
     */
    get(path: '/analytics/platforms/{serviceName}/nodes'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     *
     * Get details about nodes
     */
    get(path: '/analytics/platforms/{serviceName}/nodes/{nodeId}'): (params: {
        nodeId: string;
        serviceName: string;
    }) => Promise<analytics.cluster.Node>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/analytics/platforms/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     *
     * Get cluster deployment status
     */
    get(path: '/analytics/platforms/{serviceName}/status'): (params: {
        serviceName: string;
    }) => Promise<analytics.cluster.deploy.Status[]>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/analytics/platforms/{serviceName}/serviceInfos'): (params: {
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
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/analytics/platforms/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/analytics/platforms/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     *
     * Deploy an Analytics Data Platform
     */
    post(path: '/analytics/platforms/{serviceName}/deploy'): (params: {
        serviceName: string;
        clusterName: string;
        clusterType: string;
        edgeNodeStorage: number;
        hdfsEffectiveStorage: number;
        hdfsReplicationFactor: number;
        masterNodeStorage: number;
        masterPassword: string;
        nodes: analytics.node.Deploy[];
        osProjectId: string;
        osProjectName: string;
        osRegion: string;
        osToken: string;
        sshPublicKey: string;
    }) => Promise<analytics.cluster.Deploy>;
    /**
     *
     * Destroy an Analytics Data Platform
     */
    post(path: '/analytics/platforms/{serviceName}/destroy'): (params: {
        serviceName: string;
        osToken: string;
    }) => Promise<void>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/analytics/platforms/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
}
