import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /ovhCloudConnect Models
 * Source: https://eu.api.ovh.com/1.0/ovhCloudConnect.json
 */
export namespace ovhcloudconnect {
    /**
     * OVHcloud Connect Datacenter
     * interface fullName: ovhcloudconnect.Datacenter.Datacenter
     */
    export interface Datacenter {
        id: number;
        name: string;
    }
    /**
     * OVHcloud Connect Service Datacenter Configuration
     * interface fullName: ovhcloudconnect.DatacenterConfig.DatacenterConfig
     */
    export interface DatacenterConfig {
        datacenterId: number;
        id: number;
        ovhBgpArea: number;
        status: ovhcloudconnect.popConfig.StatusEnum;
        subnet: string;
    }
    /**
     * OVHcloud Connect Service Datacenter Extra Configuration
     * interface fullName: ovhcloudconnect.DatacenterExtraConfig.DatacenterExtraConfig
     */
    export interface DatacenterExtraConfig {
        bgpNeighborArea?: number;
        bgpNeighborIp?: string;
        id: number;
        nextHop?: string;
        status: ovhcloudconnect.popConfig.StatusEnum;
        subnet?: string;
        type: ovhcloudconnect.datacenterExtraConfig.TypeEnum;
    }
    /**
     * OVHcloud Connect Service Pop Configuration
     * interface fullName: ovhcloudconnect.PopConfig.PopConfig
     */
    export interface PopConfig {
        customerBgpArea: number;
        id: number;
        interfaceId: number;
        ovhBgpArea: number;
        status: ovhcloudconnect.popConfig.StatusEnum;
        subnet: string;
        type: ovhcloudconnect.popConfig.TypeEnum;
    }
    /**
     * OVHcloud Connect Service
     * interface fullName: ovhcloudconnect.Service.Service
     */
    export interface Service {
        bandwidth: ovhcloudconnect.service.BandwidthEnum;
        description: string;
        interfaceList: number[];
        portQuantity: ovhcloudconnect.service.PortEnum;
        status: ovhcloudconnect.service.StatusEnum;
        uuid: string;
        vrack?: string;
    }
    /**
     * OVHcloud Connect Task
     * interface fullName: ovhcloudconnect.Task.Task
     */
    export interface Task {
        function: ovhcloudconnect.task.FunctionEnum;
        id: number;
        resourceId: number;
        status: ovhcloudconnect.task.StatusEnum;
    }
    /**
     * Missing description
     * interface fullName: ovhcloudconnect.Update.Update
     */
    export interface Update {
        description?: string;
    }
    export namespace datacenterExtraConfig {
        /**
         * Enum values for Datacenter Extra Configuration Type
         * type fullname: ovhcloudconnect.datacenterExtraConfig.TypeEnum
         */
        export type TypeEnum = "bgp" | "network"
    }
    export namespace popConfig {
        /**
         * Enum values for Pop Configuration Status
         * type fullname: ovhcloudconnect.popConfig.StatusEnum
         */
        export type StatusEnum = "init" | "active" | "toDelete"
        /**
         * Enum values for Pop Configuration Type
         * type fullname: ovhcloudconnect.popConfig.TypeEnum
         */
        export type TypeEnum = "l2" | "l3"
    }
    export namespace service {
        /**
         * Enum values for bandwidth
         * type fullname: ovhcloudconnect.service.BandwidthEnum
         */
        export type BandwidthEnum = "10g" | "1g"
        /**
         * Enum values for port quantity
         * type fullname: ovhcloudconnect.service.PortEnum
         */
        export type PortEnum = "1" | "2"
        /**
         * Enum values for the Service
         * type fullname: ovhcloudconnect.service.StatusEnum
         */
        export type StatusEnum = "active" | "closed"
    }
    export namespace task {
        /**
         * Enum values for Task function
         * type fullname: ovhcloudconnect.task.FunctionEnum
         */
        export type FunctionEnum = "lockInterface" | "unlockInterface" | "addPopConfiguration" | "delPopConfiguration" | "addDatacenterConfiguration" | "delDatacenterConfiguration" | "addDatacenterExtraConfiguration" | "delDatacenterExtraConfiguration"
        /**
         * Enum values for Task status
         * type fullname: ovhcloudconnect.task.StatusEnum
         */
        export type StatusEnum = "todo" | "doing" | "done" | "error"
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
 * END API /ovhCloudConnect Models
 */
export function proxyOvhCloudConnect(ovhEngine: OvhRequestable): OvhCloudConnect {
    return buildOvhProxy(ovhEngine, '/ovhCloudConnect');
}
export default proxyOvhCloudConnect;
/**
 * Api model for /ovhCloudConnect
 */
export interface OvhCloudConnect {
    /**
     * List available services
     * GET /ovhCloudConnect
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get service
         * GET /ovhCloudConnect/{serviceName}
         */
        $get(): Promise<ovhcloudconnect.Service>;
        /**
         * Modify service
         * PUT /ovhCloudConnect/{serviceName}
         */
        $put(params?: { description?: string }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /ovhCloudConnect/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        config: {
            pop: {
                /**
                 * Get Pop Configuration linked to of a OVHcloud Connect Service
                 * GET /ovhCloudConnect/{serviceName}/config/pop
                 */
                $get(): Promise<number[]>;
                /**
                 * Create a Pop Configuration
                 * POST /ovhCloudConnect/{serviceName}/config/pop
                 */
                $post(params?: { customerBgpArea?: number, id?: number, interfaceId?: number, ovhBgpArea?: number, status?: ovhcloudconnect.popConfig.StatusEnum, subnet?: string, type?: ovhcloudconnect.popConfig.TypeEnum }): Promise<ovhcloudconnect.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(popId: number): {
                    /**
                     * Delete a Pop Configuration
                     * DELETE /ovhCloudConnect/{serviceName}/config/pop/{popId}
                     */
                    $delete(): Promise<ovhcloudconnect.Task>;
                    /**
                     * Get Pop Configuration of a OVHcloud Connect Service
                     * GET /ovhCloudConnect/{serviceName}/config/pop/{popId}
                     */
                    $get(): Promise<ovhcloudconnect.PopConfig>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    datacenter: {
                        /**
                         * Get Datacenter Configuration linked to of a OVHcloud Connect Service
                         * GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Create a Datacenter Configuration
                         * POST /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
                         */
                        $post(params?: { datacenterId?: number, id?: number, ovhBgpArea?: number, status?: ovhcloudconnect.popConfig.StatusEnum, subnet?: string }): Promise<ovhcloudconnect.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(datacenterId: number): {
                            /**
                             * Delete a Datacenter Configuration
                             * DELETE /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
                             */
                            $delete(): Promise<ovhcloudconnect.Task>;
                            /**
                             * Get Datacenter Configuration of a OVHcloud Connect Service
                             * GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
                             */
                            $get(): Promise<ovhcloudconnect.DatacenterConfig>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            extra: {
                                /**
                                 * Get Datacenter Extra Configuration linked to of a OVHcloud Connect Service
                                 * GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Create a Datacenter Extra Configuration
                                 * POST /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
                                 */
                                $post(params?: { bgpNeighborArea?: number, bgpNeighborIp?: string, id?: number, nextHop?: string, status?: ovhcloudconnect.popConfig.StatusEnum, subnet?: string, type?: ovhcloudconnect.datacenterExtraConfig.TypeEnum }): Promise<ovhcloudconnect.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(extraId: number): {
                                    /**
                                     * Delete a Datacenter Extra Configuration
                                     * DELETE /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}
                                     */
                                    $delete(): Promise<ovhcloudconnect.Task>;
                                    /**
                                     * Get Datacenter Extra Configuration of a OVHcloud Connect Service
                                     * GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}
                                     */
                                    $get(): Promise<ovhcloudconnect.DatacenterExtraConfig>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                        };
                    }
                };
            }
        }
        confirmTermination: {
            /**
             * Confirm termination of your service
             * POST /ovhCloudConnect/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        datacenter: {
            /**
             * List available Datacenter
             * GET /ovhCloudConnect/{serviceName}/datacenter
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get Datacenter
                 * GET /ovhCloudConnect/{serviceName}/datacenter/{id}
                 */
                $get(): Promise<ovhcloudconnect.Datacenter>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        loa: {
            /**
             * Generate a loa for a service
             * POST /ovhCloudConnect/{serviceName}/loa
             */
            $post(): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /ovhCloudConnect/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /ovhCloudConnect/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        task: {
            /**
             * Get Task linked to of a OVHcloud Connect Service
             * GET /ovhCloudConnect/{serviceName}/task
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get Tasks linked to of a OVHcloud Connect Service
                 * GET /ovhCloudConnect/{serviceName}/task/{id}
                 */
                $get(): Promise<ovhcloudconnect.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        terminate: {
            /**
             * Terminate your service
             * POST /ovhCloudConnect/{serviceName}/terminate
             */
            $post(): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    };
}
