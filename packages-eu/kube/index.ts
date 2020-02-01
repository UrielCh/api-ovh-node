import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /kube Models
 * Source: https://eu.api.ovh.com/1.0/kube.json
 */
export namespace kube {
    // interface fullName: kube.Cluster.Cluster
    export interface Cluster {
        controlPlaneIsUpToDate: boolean;
        createdAt: string;
        id: string;
        isUpToDate: boolean;
        name: string;
        nodesUrl: string;
        status: kube.ClusterStatus;
        updatePolicy: string;
        updatedAt: string;
        url: string;
        version: string;
    }
    // type fullname: kube.ClusterStatus
    export type ClusterStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "READY"
    // interface fullName: kube.Kubeconfig.Kubeconfig
    export interface Kubeconfig {
        content: string;
    }
    // interface fullName: kube.Node.Node
    export interface Node {
        createdAt: string;
        flavor: string;
        id: string;
        instanceId?: string;
        isUpToDate: boolean;
        name?: string;
        projectId: string;
        status: kube.NodeStatus;
        updatedAt: string;
        version: string;
    }
    // type fullname: kube.NodeStatus
    export type NodeStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "READY"
    // interface fullName: kube.PublicCloudProject.PublicCloudProject
    export interface PublicCloudProject {
        projectId: string;
        region: string;
    }
    // type fullname: kube.ResetWorkerNodesPolicy
    export type ResetWorkerNodesPolicy = "reinstall" | "delete"
    // type fullname: kube.UpdatePolicy
    export type UpdatePolicy = "ALWAYS_UPDATE" | "MINIMAL_DOWNTIME" | "NEVER_UPDATE"
    // type fullname: kube.Version
    export type Version = "1.13" | "1.14" | "1.15"
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
 * END API /kube Models
 */
export function proxyKube(ovhEngine: OvhRequestable): Kube {
    return buildOvhProxy(ovhEngine, '/kube');
}
export default proxyKube;
/**
 * Api Proxy model
 */// Apis harmony
// path /kube
export interface Kube {
    // GET /kube
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /kube/{serviceName}
        $get(): Promise<kube.Cluster>;
        // PUT /kube/{serviceName}
        $put(params: {name: string}): Promise<void>;
        changeContact: {
            // POST /kube/{serviceName}/changeContact
            $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        confirmTermination: {
            // POST /kube/{serviceName}/confirmTermination
            $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        kubeconfig: {
            // GET /kube/{serviceName}/kubeconfig
            $get(): Promise<kube.Kubeconfig>;
        }
        publiccloud: {
            node: {
                // GET /kube/{serviceName}/publiccloud/node
                $get(): Promise<kube.Node[]>;
                // POST /kube/{serviceName}/publiccloud/node
                $post(params: {flavorName: string, name?: string}): Promise<kube.Node>;
                $(nodeId: string): {
                    // DELETE /kube/{serviceName}/publiccloud/node/{nodeId}
                    $delete(): Promise<void>;
                    // GET /kube/{serviceName}/publiccloud/node/{nodeId}
                    $get(): Promise<kube.Node>;
                };
            }
            project: {
                // GET /kube/{serviceName}/publiccloud/project
                $get(): Promise<kube.PublicCloudProject>;
            }
        }
        reset: {
            // POST /kube/{serviceName}/reset
            $post(params?: {version?: kube.Version, workerNodesPolicy?: kube.ResetWorkerNodesPolicy}): Promise<void>;
        }
        serviceInfos: {
            // GET /kube/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /kube/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        terminate: {
            // POST /kube/{serviceName}/terminate
            $post(): Promise<string>;
        }
        update: {
            // POST /kube/{serviceName}/update
            $post(): Promise<void>;
        }
        updatePolicy: {
            // PUT /kube/{serviceName}/updatePolicy
            $put(params: {updatePolicy: kube.UpdatePolicy}): Promise<void>;
        }
    };
}
