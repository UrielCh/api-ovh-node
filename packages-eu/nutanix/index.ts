import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /nutanix Models
 * Source: https://eu.api.ovh.com/1.0/nutanix.json
 */
export namespace nutanix {
    /**
     * License type
     * type fullname: nutanix.LicenseEnum
     */
    export type LicenseEnum = "pro" | "ultimate"
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
     * Cluster configuration
     * interface fullName: nutanix.cluster.cluster
     */
    export interface cluster {
        allowedRedundancyFactor: number[];
        controlPanelURL: string;
        erasureCoding: boolean;
        gatewayCidr: string;
        ipfo: string;
        iplb: string;
        license: nutanix.LicenseEnum;
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
        $put(params?: { allowedRedundancyFactor?: number[], controlPanelURL?: string, erasureCoding?: boolean, gatewayCidr?: string, ipfo?: string, iplb?: string, license?: nutanix.LicenseEnum, name?: string, nodes?: nutanix.nodes[], prismCentral?: nutanix.prismcentral, prismElementVip?: string, prismSecretId?: string, rackAwareness?: boolean, redundancyFactor?: number, version?: string, vrack?: string }): Promise<nutanix.state>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    };
}
