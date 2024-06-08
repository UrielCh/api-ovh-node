import { buildOvhProxy } from '@ovh-api/common';
import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicated/cluster Models
 * Source: https://ca.api.ovh.com/1.0/dedicated/cluster.json
 */
export namespace dedicated {
    export namespace cluster {
        /**
         * Cluster availability
         * interface fullName: dedicated.cluster.AvailabilitiesRaw.AvailabilitiesRaw
         */
        export interface AvailabilitiesRaw {
            clusterPlanCode: string;
            fqn: string;
            memory: string;
            planCode: string;
            regions: dedicated.cluster.AvailabilitiesRawRegion[];
            server: string;
            storage: string;
            systemStorage?: string;
        }
        /**
         * A structure describing the hardware raw availability for each region
         * interface fullName: dedicated.cluster.AvailabilitiesRawRegion.AvailabilitiesRawRegion
         */
        export interface AvailabilitiesRawRegion {
            availability: dedicated.server.AvailabilityEnum;
            lastRule?: string;
            parentAvailable: number;
            region: dedicated.server.AvailabilityEnum;
            trueAvailable: number;
        }
        /**
         * A structure describing the dedicated cluster
         * interface fullName: dedicated.cluster.Cluster.Cluster
         */
        export interface Cluster {
            id: string;
            model: string;
            nodes: dedicated.cluster.Node[];
            region: string;
            status: string;
        }
        /**
         * A structure describing the dedicated cluster
         * interface fullName: dedicated.cluster.ClusterWithIAM.ClusterWithIAM
         */
        export interface ClusterWithIAM {
            iam?: iam.ResourceMetadata;
            id: string;
            model: string;
            nodes: dedicated.cluster.Node[];
            region: string;
            status: string;
        }
        /**
         * A structure describing the nodes of the cluster
         * interface fullName: dedicated.cluster.Node.Node
         */
        export interface Node {
            id: string;
            serverId: number;
            serverName: string;
        }
        /**
         * A structure describing the availabilities of dedicated server
         * interface fullName: dedicated.cluster.RegionAvailability.RegionAvailability
         */
        export interface RegionAvailability {
            availability: dedicated.server.AvailabilityEnum;
            region: dedicated.server.AvailabilityRegionalizationEnum;
        }
        /**
         * Cluster availability
         * interface fullName: dedicated.cluster.availability.availability
         */
        export interface availability {
            clusterPlanCode: string;
            fqn: string;
            memory: string;
            planCode: string;
            regions: dedicated.cluster.RegionAvailability[];
            server: string;
            storage: string;
            systemStorage?: string;
        }
    }
    export namespace server {
        /**
         * The availability
         * type fullname: dedicated.server.AvailabilityEnum
         */
        export type AvailabilityEnum = "120H" | "1440H" | "1H-high" | "1H-low" | "2160H" | "240H" | "24H" | "480H" | "720H" | "72H" | "comingSoon" | "unavailable" | "unknown"
        /**
         * The region
         * type fullname: dedicated.server.AvailabilityRegionalizationEnum
         */
        export type AvailabilityRegionalizationEnum = "ap-south-1" | "ap-southeast-sgp" | "ap-southeast-syd" | "ca-east-1" | "ca-east-bhs" | "eu-central-waw" | "eu-west-eri" | "eu-west-gra" | "eu-west-lim" | "eu-west-par" | "eu-west-rbx" | "eu-west-sbg" | "us-east-vin" | "us-west-hil"
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
 * END API /dedicated/cluster Models
 */
export function proxyDedicatedCluster(ovhEngine: OvhRequestable): Dedicated {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedCluster;
/**
 * Api model for /dedicated/cluster
 */
export interface Dedicated {
    cluster: {
        /**
         * List dedicated clusters
         * GET /dedicated/cluster
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        availabilities: {
            /**
             * Fetch the availabilities for a given cluster configuration
             * GET /dedicated/cluster/availabilities
             */
            $get(params: { memory?: string, planCode?: string, quantity: number, server?: string, storage?: string, systemStorage?: string }): Promise<dedicated.cluster.availability[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            raw: {
                /**
                 * List the raw availability for cluster
                 * GET /dedicated/cluster/availabilities/raw
                 */
                $get(params: { excludeRegions?: boolean, memory?: string, planCode?: string, quantity: number, regions?: dedicated.server.AvailabilityRegionalizationEnum, server?: string, storage?: string, systemStorage?: string }): Promise<dedicated.cluster.AvailabilitiesRaw[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        $(serviceName: string): {
            /**
             * Get cluster info
             * GET /dedicated/cluster/{serviceName}
             */
            $get(): Promise<dedicated.cluster.Cluster>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /dedicated/cluster/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /dedicated/cluster/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /dedicated/cluster/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /dedicated/cluster/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            terminate: {
                /**
                 * Ask for the termination of your service
                 * POST /dedicated/cluster/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
        };
    }
}
