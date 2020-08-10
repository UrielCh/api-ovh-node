import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /analytics Models
 * Source: https://eu.api.ovh.com/1.0/analytics.json
 */
export namespace analytics {
    /**
     * Cluster information
     * interface fullName: analytics.Cluster.Cluster
     */
    export interface Cluster {
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
        status: analytics.StatusEnum;
    }
    /**
     * Component of the service
     * interface fullName: analytics.Component.Component
     */
    export interface Component {
        name: string;
        version: string;
    }
    /**
     * Status code
     * type fullname: analytics.StatusEnum
     */
    export type StatusEnum = "PENDING" | "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | "DONE" | "ERROR" | "UNKNOWN" | "OK" | "TO_DEPLOY" | "DEPLOYING" | "DEPLOYED" | "TO_DESTROY" | "DESTROYING" | "DESTROYED" | "INITIALIZED"
    export namespace cluster {
        /**
         * Cluster activity
         * interface fullName: analytics.cluster.Activity.Activity
         */
        export interface Activity {
            description: string;
            status: analytics.StatusEnum;
            timestamp: string;
            user?: string;
        }
        /**
         * Analytics Cluster deployment parameters
         * interface fullName: analytics.cluster.Deploy.Deploy
         */
        export interface Deploy {
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
        /**
         * Analytics Cluster destruction parameters
         * interface fullName: analytics.cluster.Destroy.Destroy
         */
        export interface Destroy {
            osToken: string;
        }
        /**
         * Cluster node information
         * interface fullName: analytics.cluster.Node.Node
         */
        export interface Node {
            deploymentEndDate?: string;
            deploymentStartDate?: string;
            flavor?: string;
            hostname?: string;
            ip?: string;
            nodeId: string;
            nodeType: analytics.node.TypeEnum;
            osRegion?: string;
            status: analytics.StatusEnum;
            storage?: number;
        }
        export namespace deploy {
            /**
             * Cluster deployment status
             * interface fullName: analytics.cluster.deploy.Status.Status
             */
            export interface Status {
                percentage: number;
                status: analytics.StatusEnum;
                task: string;
            }
        }
    }
    export namespace node {
        /**
         * node capability
         * interface fullName: analytics.node.Capability.Capability
         */
        export interface Capability {
            instanceMax: number;
            instanceMin: number;
            instanceType: string[];
            rawStorageMaxGb: number;
            rawStorageMinGb: number;
        }
        /**
         * Node information
         * interface fullName: analytics.node.Deploy.Deploy
         */
        export interface Deploy {
            nodeFlavor: string;
            nodeType: analytics.node.TypeEnum;
        }
        /**
         * Node type
         * type fullname: analytics.node.TypeEnum
         */
        export type TypeEnum = "MASTER" | "SLAVE" | "EDGE" | "UTILITY"
    }
    export namespace platform {
        /**
         * Platform capabilities
         * interface fullName: analytics.platform.Capability.Capability
         */
        export interface Capability {
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
        export namespace Capability {
            /**
             * Requirement for fields to be displayed or hidden
             * interface fullName: analytics.platform.Capability.Requirement.Requirement
             */
            export interface Requirement {
                display: boolean;
                fieldName: string;
            }
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
    /**
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
 * END API /analytics Models
 */
export function proxyAnalytics(ovhEngine: OvhRequestable): Analytics {
    return buildOvhProxy(ovhEngine, '/analytics');
}
export default proxyAnalytics;
/**
 * Api model for /analytics
 */
export interface Analytics {
    capabilities: {
        platforms: {
            /**
             * Platform capabilities
             * GET /analytics/capabilities/platforms
             */
            $get(): Promise<analytics.platform.Capability[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    platforms: {
        /**
         * List available services
         * GET /analytics/platforms
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get details about a service
             * GET /analytics/platforms/{serviceName}
             */
            $get(): Promise<analytics.Cluster>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            activity: {
                /**
                 * Get activity logs
                 * GET /analytics/platforms/{serviceName}/activity
                 */
                $get(): Promise<analytics.cluster.Activity[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /analytics/platforms/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /analytics/platforms/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            deploy: {
                /**
                 * Deploy an Analytics Data Platform
                 * POST /analytics/platforms/{serviceName}/deploy
                 */
                $post(params: { clusterName: string, clusterType: string, edgeNodeStorage: number, hdfsEffectiveStorage: number, hdfsReplicationFactor: number, masterNodeStorage: number, masterPassword: string, nodes: analytics.node.Deploy[], osProjectId: string, osProjectName: string, osRegion: string, osToken: string, sshPublicKey: string }): Promise<analytics.cluster.Deploy>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            destroy: {
                /**
                 * Destroy an Analytics Data Platform
                 * POST /analytics/platforms/{serviceName}/destroy
                 */
                $post(params: { osToken: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            nodes: {
                /**
                 * List available nodes
                 * GET /analytics/platforms/{serviceName}/nodes
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(nodeId: string): {
                    /**
                     * Get details about nodes
                     * GET /analytics/platforms/{serviceName}/nodes/{nodeId}
                     */
                    $get(): Promise<analytics.cluster.Node>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /analytics/platforms/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /analytics/platforms/{serviceName}/serviceInfos
                 */
                $put(params: { canDeleteAtExpiration: boolean, contactAdmin: string, contactBilling: string, contactTech: string, creation: string, domain: string, engagedUpTo?: string, expiration: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType: service.RenewalTypeEnum, serviceId: number, status: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            status: {
                /**
                 * Get cluster deployment status
                 * GET /analytics/platforms/{serviceName}/status
                 */
                $get(): Promise<analytics.cluster.deploy.Status[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /analytics/platforms/{serviceName}/terminate
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}
