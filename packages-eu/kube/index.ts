import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /kube Models
 * Source: https://eu.api.ovh.com/1.0/kube.json
 */
export namespace kube {
    /**
     * Managed Kubernetes cluster description
     * interface fullName: kube.Cluster.Cluster
     */
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
    /**
     * Enum values for Status
     * type fullname: kube.ClusterStatus
     */
    export type ClusterStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "READY"
    /**
     * Kubeconfig description
     * interface fullName: kube.Kubeconfig.Kubeconfig
     */
    export interface Kubeconfig {
        content: string;
    }
    /**
     * Node installed on your cluster
     * interface fullName: kube.Node.Node
     */
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
    /**
     * Enum values for Status
     * type fullname: kube.NodeStatus
     */
    export type NodeStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "READY"
    /**
     * Public Cloud project linked to a Kube cluster
     * interface fullName: kube.PublicCloudProject.PublicCloudProject
     */
    export interface PublicCloudProject {
        projectId: string;
        region: string;
    }
    /**
     * Enum values for worker nodes reset policy
     * type fullname: kube.ResetWorkerNodesPolicy
     */
    export type ResetWorkerNodesPolicy = "reinstall" | "delete"
    /**
     * Enum values for UpdatePolicy
     * type fullname: kube.UpdatePolicy
     */
    export type UpdatePolicy = "ALWAYS_UPDATE" | "MINIMAL_DOWNTIME" | "NEVER_UPDATE"
    /**
     * List of available versions for installation
     * type fullname: kube.Version
     */
    export type Version = "1.13" | "1.14" | "1.15"
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
 * END API /kube Models
 */
export function proxyKube(ovhEngine: OvhRequestable): Kube {
    return buildOvhProxy(ovhEngine, '/kube');
}
export default proxyKube;
/**
 * Api model for /kube
 */
export interface Kube {
    /**
     * List available services
     * GET /kube
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get information about your managed Kubernetes cluster
         * GET /kube/{serviceName}
         */
        $get(): Promise<kube.Cluster>;
        /**
         * Update information about your managed Kubernetes cluster
         * PUT /kube/{serviceName}
         */
        $put(params: { name: string }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /kube/{serviceName}/changeContact
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
             * POST /kube/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        kubeconfig: {
            /**
             * Get kubeconfig file
             * GET /kube/{serviceName}/kubeconfig
             */
            $get(): Promise<kube.Kubeconfig>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        publiccloud: {
            node: {
                /**
                 * List your nodes on Public Cloud
                 * GET /kube/{serviceName}/publiccloud/node
                 */
                $get(): Promise<kube.Node[]>;
                /**
                 * Deploy a node for your cluster on Public Cloud
                 * POST /kube/{serviceName}/publiccloud/node
                 */
                $post(params: { flavorName: string, name?: string }): Promise<kube.Node>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(nodeId: string): {
                    /**
                     * Delete a node on your cluster
                     * DELETE /kube/{serviceName}/publiccloud/node/{nodeId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get information on a specific node on your cluster
                     * GET /kube/{serviceName}/publiccloud/node/{nodeId}
                     */
                    $get(): Promise<kube.Node>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            project: {
                /**
                 * Get your Public Cloud project linked to your cluster
                 * GET /kube/{serviceName}/publiccloud/project
                 */
                $get(): Promise<kube.PublicCloudProject>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        reset: {
            /**
             * Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
             * POST /kube/{serviceName}/reset
             */
            $post(params?: { version?: kube.Version, workerNodesPolicy?: kube.ResetWorkerNodesPolicy }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /kube/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /kube/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        terminate: {
            /**
             * Terminate your service
             * POST /kube/{serviceName}/terminate
             */
            $post(): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        update: {
            /**
             * Update cluster to the latest patch version
             * POST /kube/{serviceName}/update
             */
            $post(): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        updatePolicy: {
            /**
             * Change the update policy of your cluster
             * PUT /kube/{serviceName}/updatePolicy
             */
            $put(params: { updatePolicy: kube.UpdatePolicy }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    };
}
