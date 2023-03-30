import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /nutanix Models
 * Source: https://ca.api.ovh.com/1.0/nutanix.json
 */
export namespace nutanix {
    /**
     * Cluster availability
     * type fullname: nutanix.AvailabilityEnum
     */
    export type AvailabilityEnum = "1440H" | "240H" | "2880H" | "480H" | "720H" | "72H" | "unavailable"
    /**
     * Cluster datacenter availability
     * interface fullName: nutanix.DatacenterAvailability.DatacenterAvailability
     */
    export interface DatacenterAvailability {
        availability: nutanix.AvailabilityEnum;
        datacenter: string;
    }
    /**
     * Cluster deployment type
     * type fullname: nutanix.DeploymentTypeEnum
     */
    export type DeploymentTypeEnum = "NodeAwareness"
    /**
     * Cluster redundancy factor
     * type fullname: nutanix.RedundancyFactorEnum
     */
    export type RedundancyFactorEnum = 2 | 3
    /**
     * Return the needed requirements for a given cluster configuration
     * interface fullName: nutanix.Requirements.Requirements
     */
    export interface Requirements {
        maxNodes: number;
        minNodes: number;
        scaleFactor: number;
    }
    /**
     * Cluster availability
     * interface fullName: nutanix.availability.availability
     */
    export interface availability {
        datacenters: nutanix.DatacenterAvailability[];
        deploymentType?: nutanix.DeploymentTypeEnum;
        erasureCoding?: boolean;
        fqn: string;
        memory: string;
        planCode: string;
        redundancyFactor?: nutanix.RedundancyFactorEnum;
        server: string;
        storage: string;
        systemStorage?: string;
    }
    /**
     * Cluster configuration
     * interface fullName: nutanix.cluster.cluster
     */
    export interface cluster {
        controlPanelURL: string;
        erasureCoding: boolean;
        gatewayCidr: string;
        ipfo: string;
        iplb: string;
        name: string;
        nodes: nutanix.nodes[];
        prismCentral: nutanix.prismcentral;
        prismElementVip: string;
        prismSecretId: string;
        rackAwareness: boolean;
        redundancyFactor: number;
        version: string;
        vrack: string;
    }
    /**
     * Nodes in nutanix cluster
     * interface fullName: nutanix.nodes.nodes
     */
    export interface nodes {
        ahvIp: string;
        cvmIp: string;
        server: string;
    }
    /**
     * Prism Central deployment type
     * type fullname: nutanix.pctypeEnum
     */
    export type pctypeEnum = "alone" | "scale"
    /**
     * Prism Central Config
     * interface fullName: nutanix.prismcentral.prismcentral
     */
    export interface prismcentral {
        ips: string[];
        type: nutanix.pctypeEnum;
        vip: string;
    }
    /**
     * Nutanix Cluster State
     * interface fullName: nutanix.state.state
     */
    export interface state {
        allowedRedundancyFactor: number[];
        availableVersions: string[];
        serviceName: string;
        status: nutanix.statusEnum;
        targetSpec: nutanix.cluster;
    }
    /**
     * Cluster status
     * type fullname: nutanix.statusEnum
     */
    export type statusEnum = "Active" | "Deploying" | "Error"
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
 * END API /nutanix Models
 */
export function proxyNutanix(ovhEngine: OvhRequestable): Nutanix {
    return buildOvhProxy(ovhEngine, '/nutanix');
}
export default proxyNutanix;
/**
 * Api model for /nutanix
 */
export interface Nutanix {
    /**
     * Get list of owned Nutanix Clusters
     * GET /nutanix
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    availabilities: {
        /**
         * Fetch the availabilities for a given cluster configuration
         * GET /nutanix/availabilities
         */
        $get(params: { erasureCoding?: boolean, memory?: string, planCode?: string, quantity: number, rackAwareness?: boolean, redundancyFactor?: nutanix.RedundancyFactorEnum, server?: string, storage?: string, systemStorage?: string }): Promise<nutanix.availability[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    availableVersions: {
        /**
         * Fetch the available Nutanix versions to install
         * GET /nutanix/availableVersions
         */
        $get(params?: { fqn?: string }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    requirements: {
        /**
         * Fetch the requirements for a given cluster configuration
         * GET /nutanix/requirements
         */
        $get(params: { erasureCoding: boolean, rackAwareness: boolean, redundancyFactor: nutanix.RedundancyFactorEnum }): Promise<nutanix.Requirements>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    $(serviceName: string): {
        /**
         * Get nutanix cluster info
         * GET /nutanix/{serviceName}
         */
        $get(): Promise<nutanix.state>;
        /**
         * Update nutanix cluster info
         * PUT /nutanix/{serviceName}
         */
        $put(params?: { controlPanelURL?: string, erasureCoding?: boolean, gatewayCidr?: string, ipfo?: string, iplb?: string, name?: string, nodes?: nutanix.nodes[], prismCentral?: nutanix.prismcentral, prismElementVip?: string, prismSecretId?: string, rackAwareness?: boolean, redundancyFactor?: number, version?: string, vrack?: string }): Promise<nutanix.state>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /nutanix/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
        }
        confirmTermination: {
            /**
             * Confirm termination of your service
             * POST /nutanix/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /nutanix/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /nutanix/{serviceName}/serviceInfos
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
             * POST /nutanix/{serviceName}/terminate
             */
            $post(): Promise<string>;
        }
    };
}
