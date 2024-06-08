import { buildOvhProxy } from '@ovh-api/common';
import { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /storage Models
 * Source: https://ca.api.ovh.com/1.0/storage.json
 */
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
export namespace storage {
    /**
     * A network
     * interface fullName: storage.NetAppNetwork.NetAppNetwork
     */
    export interface NetAppNetwork {
        id: string;
        status?: storage.NetAppNetworkStatusEnum;
        vRackServicesURN?: string;
    }
    /**
     * Network status
     * type fullname: storage.NetAppNetworkStatusEnum
     */
    export type NetAppNetworkStatusEnum = "associated" | "associating" | "dissociating" | "to_configure"
    /**
     * A service
     * interface fullName: storage.NetAppService.NetAppService
     */
    export interface NetAppService {
        createdAt: string;
        id: string;
        name: string;
        performanceLevel: storage.NetAppServicePerformanceLevelEnum;
        product: string;
        quota: number;
        region: storage.RegionEnum;
        status: storage.NetAppServiceStatusEnum;
    }
    /**
     * Service performance level
     * type fullname: storage.NetAppServicePerformanceLevelEnum
     */
    export type NetAppServicePerformanceLevelEnum = "premium"
    /**
     * Service status
     * type fullname: storage.NetAppServiceStatusEnum
     */
    export type NetAppServiceStatusEnum = "creating" | "deleted" | "deleting" | "reopening" | "running" | "suspended" | "suspending"
    /**
     * Service updatable properties
     * interface fullName: storage.NetAppServiceUpdate.NetAppServiceUpdate
     */
    export interface NetAppServiceUpdate {
        name: string;
    }
    /**
     * A service
     * interface fullName: storage.NetAppServiceWithIAM.NetAppServiceWithIAM
     */
    export interface NetAppServiceWithIAM {
        createdAt: string;
        iam?: iam.ResourceMetadata;
        id: string;
        name: string;
        performanceLevel: storage.NetAppServicePerformanceLevelEnum;
        product: string;
        quota: number;
        region: storage.RegionEnum;
        status: storage.NetAppServiceStatusEnum;
    }
    /**
     * A share
     * interface fullName: storage.NetAppShare.NetAppShare
     */
    export interface NetAppShare {
        createdAt?: string;
        description?: string;
        id: string;
        name?: string;
        protocol: storage.ProtocolEnum;
        size: number;
        status?: storage.NetAppShareStatusEnum;
    }
    /**
     * ACL permission
     * type fullname: storage.NetAppShareACLPermissionEnum
     */
    export type NetAppShareACLPermissionEnum = "ro" | "rw"
    /**
     * A share ACL rule
     * interface fullName: storage.NetAppShareACLRule.NetAppShareACLRule
     */
    export interface NetAppShareACLRule {
        accessLevel: storage.NetAppShareACLPermissionEnum;
        accessTo: string;
        accessType?: storage.NetAppShareACLTypeEnum;
        createdAt?: string;
        id: string;
        status?: storage.NetAppShareACLStatusEnum;
    }
    /**
     * ACL status
     * type fullname: storage.NetAppShareACLStatusEnum
     */
    export type NetAppShareACLStatusEnum = "active" | "applying" | "denying" | "error" | "queued_to_apply" | "queued_to_deny"
    /**
     * ACL type
     * type fullname: storage.NetAppShareACLTypeEnum
     */
    export type NetAppShareACLTypeEnum = "ip"
    /**
     * A share access path
     * interface fullName: storage.NetAppShareAccessPath.NetAppShareAccessPath
     */
    export interface NetAppShareAccessPath {
        id: string;
        path: string;
        preferred: boolean;
    }
    /**
     * A share
     * interface fullName: storage.NetAppShareExtendOrShrink.NetAppShareExtendOrShrink
     */
    export interface NetAppShareExtendOrShrink {
        size: number;
    }
    /**
     * A share
     * interface fullName: storage.NetAppShareRevertToSnapshot.NetAppShareRevertToSnapshot
     */
    export interface NetAppShareRevertToSnapshot {
        snapshotID: string;
    }
    /**
     * A share snapshot
     * interface fullName: storage.NetAppShareSnapshot.NetAppShareSnapshot
     */
    export interface NetAppShareSnapshot {
        createdAt?: string;
        description?: string;
        id: string;
        name?: string;
        path?: string;
        status?: storage.NetAppSnapshotStatusEnum;
        type?: storage.NetAppSnapshotTypeEnum;
    }
    /**
     * A snapshot policy
     * interface fullName: storage.NetAppShareSnapshotPolicy.NetAppShareSnapshotPolicy
     */
    export interface NetAppShareSnapshotPolicy {
        id: string;
        status: storage.NetAppShareSnapshotPolicyStatusEnum;
    }
    /**
     * Association status between the share and the snapshot policy
     * type fullname: storage.NetAppShareSnapshotPolicyStatusEnum
     */
    export type NetAppShareSnapshotPolicyStatusEnum = "active" | "error" | "updating"
    /**
     * A snapshot policy
     * interface fullName: storage.NetAppShareSnapshotPolicyUpdate.NetAppShareSnapshotPolicyUpdate
     */
    export interface NetAppShareSnapshotPolicyUpdate {
        snapshotPolicyID: string;
    }
    /**
     * Snapshot reserve properties
     * interface fullName: storage.NetAppShareSnapshotReserve.NetAppShareSnapshotReserve
     */
    export interface NetAppShareSnapshotReserve {
        percent: number;
        status: storage.NetAppShareSnapshotReserveStatusEnum;
    }
    /**
     * Snapshot reserve properties status
     * type fullname: storage.NetAppShareSnapshotReserveStatusEnum
     */
    export type NetAppShareSnapshotReserveStatusEnum = "active" | "error" | "updating"
    /**
     * A snapshot policy
     * interface fullName: storage.NetAppShareSnapshotReserveUpdate.NetAppShareSnapshotReserveUpdate
     */
    export interface NetAppShareSnapshotReserveUpdate {
        percent: number;
    }
    /**
     * Share snapshot updatable properties
     * interface fullName: storage.NetAppShareSnapshotUpdate.NetAppShareSnapshotUpdate
     */
    export interface NetAppShareSnapshotUpdate {
        description?: string;
        name?: string;
    }
    /**
     * Share status
     * type fullname: storage.NetAppShareStatusEnum
     */
    export type NetAppShareStatusEnum = "available" | "creating" | "creating_from_snapshot" | "deleted" | "deleting" | "error" | "error_deleting" | "extending" | "extending_error" | "inactive" | "manage_error" | "manage_starting" | "migrating" | "migrating_to" | "replication_change" | "reverting" | "reverting_error" | "shrinking" | "shrinking_error" | "shrinking_possible_data_loss_error" | "unmanage_error" | "unmanage_starting" | "unmanaged"
    /**
     * NetApp share updatable properties
     * interface fullName: storage.NetAppShareUpdate.NetAppShareUpdate
     */
    export interface NetAppShareUpdate {
        description?: string;
        name?: string;
    }
    /**
     * A snapshot policy
     * interface fullName: storage.NetAppSnapshotPolicy.NetAppSnapshotPolicy
     */
    export interface NetAppSnapshotPolicy {
        createdAt?: string;
        description?: string;
        id: string;
        isDefault?: boolean;
        name?: string;
        rules: storage.NetAppSnapshotPolicyRule[];
        status?: storage.NetAppSnapshotPolicyStatusEnum;
    }
    /**
     * A snapshot policy rule
     * interface fullName: storage.NetAppSnapshotPolicyRule.NetAppSnapshotPolicyRule
     */
    export interface NetAppSnapshotPolicyRule {
        copies: number;
        prefix: string;
        schedule: storage.NetAppSnapshotPolicySchedule;
    }
    /**
     * A snapshot policy schedule
     * interface fullName: storage.NetAppSnapshotPolicySchedule.NetAppSnapshotPolicySchedule
     */
    export interface NetAppSnapshotPolicySchedule {
        days?: number[];
        hours?: number[];
        minutes: number[];
        months?: number[];
        weekdays?: number[];
    }
    /**
     * Snapshot policy status
     * type fullname: storage.NetAppSnapshotPolicyStatusEnum
     */
    export type NetAppSnapshotPolicyStatusEnum = "available" | "creating" | "deleting" | "error" | "updating"
    /**
     * Snapshot policy updatable properties
     * interface fullName: storage.NetAppSnapshotPolicyUpdate.NetAppSnapshotPolicyUpdate
     */
    export interface NetAppSnapshotPolicyUpdate {
        description?: string;
        name?: string;
    }
    /**
     * Snapshot status
     * type fullname: storage.NetAppSnapshotStatusEnum
     */
    export type NetAppSnapshotStatusEnum = "available" | "creating" | "deleting" | "error" | "error_deleting" | "manage_error" | "manage_starting" | "restoring" | "unmanage_error" | "unmanage_starting"
    /**
     * Snapshot type
     * type fullname: storage.NetAppSnapshotTypeEnum
     */
    export type NetAppSnapshotTypeEnum = "automatic" | "manual" | "system"
    /**
     * Storage protocol
     * type fullname: storage.ProtocolEnum
     */
    export type ProtocolEnum = "NFS"
    /**
     * Region of customer's service
     * type fullname: storage.RegionEnum
     */
    export type RegionEnum = "BHS" | "GRA" | "LIM" | "RBX" | "SBG"
}

/**
 * END API /storage Models
 */
export function proxyStorage(ovhEngine: OvhRequestable): Storage {
    return buildOvhProxy(ovhEngine, '/storage');
}
export default proxyStorage;
/**
 * Api model for /storage
 */
export interface Storage {
    netapp: {
        /**
         * List available services
         * GET /storage/netapp
         */
        $get(params?: { iamTags?: any }): Promise<storage.NetAppService[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get service details
             * GET /storage/netapp/{serviceName}
             */
            $get(): Promise<storage.NetAppService>;
            /**
             * Update service
             * PUT /storage/netapp/{serviceName}
             */
            $put(params: { name: string }): Promise<storage.NetAppService>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /storage/netapp/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /storage/netapp/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            network: {
                /**
                 * List networks
                 * GET /storage/netapp/{serviceName}/network
                 */
                $get(params?: { detail?: boolean }): Promise<storage.NetAppNetwork[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(networkId: string): {
                    /**
                     * Get network details
                     * GET /storage/netapp/{serviceName}/network/{networkId}
                     */
                    $get(): Promise<storage.NetAppNetwork>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /storage/netapp/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /storage/netapp/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            share: {
                /**
                 * List available shares
                 * GET /storage/netapp/{serviceName}/share
                 */
                $get(params?: { detail?: boolean }): Promise<storage.NetAppShare[]>;
                /**
                 * Create a share
                 * POST /storage/netapp/{serviceName}/share
                 */
                $post(params: { createdAt?: string, description?: string, id?: string, name?: string, protocol: storage.ProtocolEnum, size: number, status?: storage.NetAppShareStatusEnum }): Promise<storage.NetAppShare>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(shareId: string): {
                    /**
                     * Delete a share
                     * DELETE /storage/netapp/{serviceName}/share/{shareId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get share details
                     * GET /storage/netapp/{serviceName}/share/{shareId}
                     */
                    $get(): Promise<storage.NetAppShare>;
                    /**
                     * Update a share
                     * PUT /storage/netapp/{serviceName}/share/{shareId}
                     */
                    $put(params?: { description?: string, name?: string }): Promise<storage.NetAppShare>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    accessPath: {
                        /**
                         * List available access paths
                         * GET /storage/netapp/{serviceName}/share/{shareId}/accessPath
                         */
                        $get(): Promise<storage.NetAppShareAccessPath[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(accessPathId: string): {
                            /**
                             * Get access path details
                             * GET /storage/netapp/{serviceName}/share/{shareId}/accessPath/{accessPathId}
                             */
                            $get(): Promise<storage.NetAppShareAccessPath>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    acl: {
                        /**
                         * List available ACLs
                         * GET /storage/netapp/{serviceName}/share/{shareId}/acl
                         */
                        $get(): Promise<storage.NetAppShareACLRule[]>;
                        /**
                         * Create an ACL
                         * POST /storage/netapp/{serviceName}/share/{shareId}/acl
                         */
                        $post(params: { accessLevel: storage.NetAppShareACLPermissionEnum, accessTo: string, accessType?: storage.NetAppShareACLTypeEnum, createdAt?: string, id?: string, status?: storage.NetAppShareACLStatusEnum }): Promise<storage.NetAppShareACLRule>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(aclRuleId: string): {
                            /**
                             * Delete an ACL
                             * DELETE /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get ACL details
                             * GET /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
                             */
                            $get(): Promise<storage.NetAppShareACLRule>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    extend: {
                        /**
                         * Extend share size
                         * POST /storage/netapp/{serviceName}/share/{shareId}/extend
                         */
                        $post(params: { size: number }): Promise<void>;
                    }
                    revert: {
                        /**
                         * Revert a share to it's latest snapshot
                         * POST /storage/netapp/{serviceName}/share/{shareId}/revert
                         */
                        $post(params: { snapshotID: string }): Promise<void>;
                    }
                    shrink: {
                        /**
                         * Shrink share size
                         * POST /storage/netapp/{serviceName}/share/{shareId}/shrink
                         */
                        $post(params: { size: number }): Promise<void>;
                    }
                    snapshot: {
                        /**
                         * List available snapshots
                         * GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
                         */
                        $get(params?: { detail?: boolean }): Promise<storage.NetAppShareSnapshot[]>;
                        /**
                         * Create a snapshot
                         * POST /storage/netapp/{serviceName}/share/{shareId}/snapshot
                         */
                        $post(params?: { createdAt?: string, description?: string, id?: string, name?: string, path?: string, status?: storage.NetAppSnapshotStatusEnum, type?: storage.NetAppSnapshotTypeEnum }): Promise<storage.NetAppShareSnapshot>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(snapshotId: string): {
                            /**
                             * Delete a snapshot
                             * DELETE /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get snapshot details
                             * GET /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
                             */
                            $get(): Promise<storage.NetAppShareSnapshot>;
                            /**
                             * Update a snapshot
                             * PUT /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
                             */
                            $put(params?: { description?: string, name?: string }): Promise<storage.NetAppShareSnapshot>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            hold: {
                                /**
                                 * Hold an automatic share snapshot
                                 * POST /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}/hold
                                 */
                                $post(): Promise<storage.NetAppShareSnapshot>;
                            }
                        };
                    }
                    snapshotPolicy: {
                        /**
                         * Get snapshot policy used by a share
                         * GET /storage/netapp/{serviceName}/share/{shareId}/snapshotPolicy
                         */
                        $get(): Promise<storage.NetAppShareSnapshotPolicy>;
                        /**
                         * Update snapshot policy used by a share
                         * PUT /storage/netapp/{serviceName}/share/{shareId}/snapshotPolicy
                         */
                        $put(params: { snapshotPolicyID: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    snapshotReserve: {
                        /**
                         * Get snapshot reserve properties of a share
                         * GET /storage/netapp/{serviceName}/share/{shareId}/snapshotReserve
                         */
                        $get(): Promise<storage.NetAppShareSnapshotReserve>;
                        /**
                         * Update snapshot reserve properties of a share
                         * PUT /storage/netapp/{serviceName}/share/{shareId}/snapshotReserve
                         */
                        $put(params: { percent: number }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            snapshotPolicy: {
                /**
                 * Get a list of snapshot policies
                 * GET /storage/netapp/{serviceName}/snapshotPolicy
                 */
                $get(): Promise<storage.NetAppSnapshotPolicy[]>;
                /**
                 * Create a snapshot policy
                 * POST /storage/netapp/{serviceName}/snapshotPolicy
                 */
                $post(params: { createdAt?: string, description?: string, id?: string, isDefault?: boolean, name?: string, rules: storage.NetAppSnapshotPolicyRule[], status?: storage.NetAppSnapshotPolicyStatusEnum }): Promise<storage.NetAppSnapshotPolicy>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(snapshotPolicyId: string): {
                    /**
                     * Delete a snapshot policy
                     * DELETE /storage/netapp/{serviceName}/snapshotPolicy/{snapshotPolicyId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get snapshot policy details
                     * GET /storage/netapp/{serviceName}/snapshotPolicy/{snapshotPolicyId}
                     */
                    $get(): Promise<storage.NetAppSnapshotPolicy>;
                    /**
                     * Update a snapshot policy
                     * PUT /storage/netapp/{serviceName}/snapshotPolicy/{snapshotPolicyId}
                     */
                    $put(params?: { description?: string, name?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            terminate: {
                /**
                 * Ask for the termination of your service
                 * POST /storage/netapp/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
        };
    }
}
