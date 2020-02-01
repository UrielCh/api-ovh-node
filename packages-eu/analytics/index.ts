import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /analytics Models
 * Source: https://eu.api.ovh.com/1.0/analytics.json
 */
export namespace analytics {
    // interface fullName: analytics.Cluster.Cluster
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
    // interface fullName: analytics.Component.Component
    export interface Component {
        name: string;
        version: string;
    }
    // type fullname: analytics.StatusEnum
    export type StatusEnum = "PENDING" | "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | "DONE" | "ERROR" | "UNKNOWN" | "OK" | "TO_DEPLOY" | "DEPLOYING" | "DEPLOYED" | "TO_DESTROY" | "DESTROYING" | "DESTROYED" | "INITIALIZED"
    export namespace cluster {
        // interface fullName: analytics.cluster.Activity.Activity
        export interface Activity {
            description: string;
            status: analytics.StatusEnum;
            timestamp: string;
            user?: string;
        }
        // interface fullName: analytics.cluster.Deploy.Deploy
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
        // interface fullName: analytics.cluster.Destroy.Destroy
        export interface Destroy {
            osToken: string;
        }
        // interface fullName: analytics.cluster.Node.Node
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
            // interface fullName: analytics.cluster.deploy.Status.Status
            export interface Status {
                percentage: number;
                status: analytics.StatusEnum;
                task: string;
            }
        }
    }
    export namespace node {
        // interface fullName: analytics.node.Capability.Capability
        export interface Capability {
            instanceMax: number;
            instanceMin: number;
            instanceType: string[];
            rawStorageMaxGb: number;
            rawStorageMinGb: number;
        }
        // interface fullName: analytics.node.Deploy.Deploy
        export interface Deploy {
            nodeFlavor: string;
            nodeType: analytics.node.TypeEnum;
        }
        // type fullname: analytics.node.TypeEnum
        export type TypeEnum = "MASTER" | "SLAVE" | "EDGE" | "UTILITY"
    }
    export namespace platform {
        // interface fullName: analytics.platform.Capability.Capability
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
            // interface fullName: analytics.platform.Capability.Requirement.Requirement
            export interface Requirement {
                display: boolean;
                fieldName: string;
            }
        }
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
    // type fullname: service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
 * END API /analytics Models
 */
export function proxyAnalytics(ovhEngine: OvhRequestable): Analytics {
    return buildOvhProxy(ovhEngine, '/analytics');
}
export default proxyAnalytics;
/**
 * Api Proxy model
 */// Apis harmony
// path /analytics
export interface Analytics {
    capabilities: {
        platforms: {
            // GET /analytics/capabilities/platforms
            $get(): Promise<analytics.platform.Capability[]>;
        }
    }
    platforms: {
        // GET /analytics/platforms
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /analytics/platforms/{serviceName}
            $get(): Promise<analytics.Cluster>;
            activity: {
                // GET /analytics/platforms/{serviceName}/activity
                $get(): Promise<analytics.cluster.Activity[]>;
            }
            changeContact: {
                // POST /analytics/platforms/{serviceName}/changeContact
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            confirmTermination: {
                // POST /analytics/platforms/{serviceName}/confirmTermination
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            deploy: {
                // POST /analytics/platforms/{serviceName}/deploy
                $post(params: { clusterName: string, clusterType: string, edgeNodeStorage: number, hdfsEffectiveStorage: number, hdfsReplicationFactor: number, masterNodeStorage: number, masterPassword: string, nodes: analytics.node.Deploy[], osProjectId: string, osProjectName: string, osRegion: string, osToken: string, sshPublicKey: string }): Promise<analytics.cluster.Deploy>;
            }
            destroy: {
                // POST /analytics/platforms/{serviceName}/destroy
                $post(params: { osToken: string }): Promise<void>;
            }
            nodes: {
                // GET /analytics/platforms/{serviceName}/nodes
                $get(): Promise<string[]>;
                $(nodeId: string): {
                    // GET /analytics/platforms/{serviceName}/nodes/{nodeId}
                    $get(): Promise<analytics.cluster.Node>;
                };
            }
            serviceInfos: {
                // GET /analytics/platforms/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /analytics/platforms/{serviceName}/serviceInfos
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            }
            status: {
                // GET /analytics/platforms/{serviceName}/status
                $get(): Promise<analytics.cluster.deploy.Status[]>;
            }
            terminate: {
                // POST /analytics/platforms/{serviceName}/terminate
                $post(): Promise<string>;
            }
        };
    }
}
