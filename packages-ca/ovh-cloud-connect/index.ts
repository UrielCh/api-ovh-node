import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /ovhCloudConnect Models
 * Source: https://ca.api.ovh.com/1.0/ovhCloudConnect.json
 */
export namespace ovhcloudconnect {
    /**
     * OVHcloud Connect Datacenter
     * interface fullName: ovhcloudconnect.Datacenter.Datacenter
     */
    export interface Datacenter {
        available: boolean;
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
        subnet?: string;
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
     * OVHcloud Connect Diagnostic
     * interface fullName: ovhcloudconnect.Diagnostic.Diagnostic
     */
    export interface Diagnostic {
        function: ovhcloudconnect.diagnostic.FunctionEnum;
        id: number;
        result?: ovhcloudconnect.DiagnosticResult[];
        status: ovhcloudconnect.task.StatusEnum;
    }
    /**
     * OVHcloud Connect Service Diagnostic Configuration
     * interface fullName: ovhcloudconnect.DiagnosticConfiguration.DiagnosticConfiguration
     */
    export interface DiagnosticConfiguration {
        dcConfigId: number;
        diagnosticName: ovhcloudconnect.diagnostic.FunctionEnum;
        diagnosticType: ovhcloudconnect.diagnostic.TypeEnum;
        extraConfigId: number;
        popConfigId: number;
    }
    /**
     * OVHcloud Connect Diagnostic Result
     * interface fullName: ovhcloudconnect.DiagnosticResult.DiagnosticResult
     */
    export interface DiagnosticResult {
        aspath?: string;
        cmd?: string;
        localprefix?: number;
        mac?: string;
        med?: number;
        output?: string;
        prefix?: string;
        routermac?: string;
        timestamp?: string;
    }
    /**
     * OVHcloud Connect Incident
     * interface fullName: ovhcloudconnect.Incident.Incident
     */
    export interface Incident {
        endDate?: string;
        id: number;
        startDate: string;
        type: ovhcloudconnect.incident.TypeEnum;
    }
    /**
     * OVHcloud Connect Interface
     * interface fullName: ovhcloudconnect.Interface.Interface
     */
    export interface Interface {
        deviceDisplayName?: string;
        deviceRackDisplayName?: string;
        id: number;
        incomingLightStatus: ovhcloudconnect.interf.LightStatusEnum;
        incomingLightValue?: number;
        interfaceName?: string;
        interfaceStatus: ovhcloudconnect.interf.LightStatusEnum;
        interfaceStatusLastUpdate: string;
        interfaceTerminationType?: ovhcloudconnect.interf.TerminationTypeEnum;
        lightLastUpdate: string;
        outgoingLightStatus: ovhcloudconnect.interf.LightStatusEnum;
        outgoingLightValue?: number;
        status: ovhcloudconnect.interf.StatusEnum;
    }
    /**
     * OVHcloud Connect Service Key
     * interface fullName: ovhcloudconnect.Key.Key
     */
    export interface Key {
        id: number;
        key: string;
        provider: ovhcloudconnect.service.ProviderEnum;
        status: ovhcloudconnect.key.StatusEnum;
    }
    /**
     * OVHcloud Connect Metrics
     * interface fullName: ovhcloudconnect.Metrics.Metrics
     */
    export interface Metrics {
        timestamp: number;
        value: ovhcloudconnect.MetricsValue;
    }
    /**
     * OVHcloud Connect Metrics value
     * interface fullName: ovhcloudconnect.MetricsValue.MetricsValue
     */
    export interface MetricsValue {
        unit: ovhcloudconnect.interf.MetricsUnitEnum;
        value: number;
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
        subnet?: string;
        type: ovhcloudconnect.popConfig.TypeEnum;
    }
    /**
     * OVHcloud Connect send key answer
     * interface fullName: ovhcloudconnect.SendKeyAnswer.SendKeyAnswer
     */
    export interface SendKeyAnswer {
        messageCode: ovhcloudconnect.messageCode.Enum;
    }
    /**
     * OVHcloud Connect Service
     * interface fullName: ovhcloudconnect.Service.Service
     */
    export interface Service {
        bandwidth: ovhcloudconnect.service.BandwidthEnum;
        description: string;
        interfaceList: number[];
        pop: string;
        portQuantity: ovhcloudconnect.service.PortEnum;
        product: string;
        provider: ovhcloudconnect.service.ProviderEnum;
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
     * OVHcloud Connect email
     * interface fullName: ovhcloudconnect.To.To
     */
    export interface To {
        email: string;
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
    export namespace diagnostic {
        /**
         * Enum values for Diagnostic function
         * type fullname: ovhcloudconnect.diagnostic.FunctionEnum
         */
        export type FunctionEnum = "diagMacs" | "diagPeering" | "diagPeeringExtra" | "diagRoutes"
        /**
         * Enum values for Diagnostic type
         * type fullname: ovhcloudconnect.diagnostic.TypeEnum
         */
        export type TypeEnum = "advertised-routes" | "default" | "routes"
    }
    export namespace incident {
        /**
         * Enum values for incident type status
         * type fullname: ovhcloudconnect.incident.TypeEnum
         */
        export type TypeEnum = "incident" | "maintenance"
    }
    export namespace interf {
        /**
         * Enum values for the light status
         * type fullname: ovhcloudconnect.interf.LightStatusEnum
         */
        export type LightStatusEnum = "down" | "unknown" | "up"
        /**
         * Enum values for the period of the statistics
         * type fullname: ovhcloudconnect.interf.MetricsPeriodEnum
         */
        export type MetricsPeriodEnum = "daily" | "hourly" | "weekly"
        /**
         * Enum values for the type of the statistics
         * type fullname: ovhcloudconnect.interf.MetricsTypeEnum
         */
        export type MetricsTypeEnum = "error:download" | "error:upload" | "light:in" | "light:out" | "traffic:download" | "traffic:upload"
        /**
         * Enum values for the unit of the statistics
         * type fullname: ovhcloudconnect.interf.MetricsUnitEnum
         */
        export type MetricsUnitEnum = "bytes/s" | "dbm" | "error/s"
        /**
         * Enum values for interface status
         * type fullname: ovhcloudconnect.interf.StatusEnum
         */
        export type StatusEnum = "disabled" | "enabled" | "reserved"
        /**
         * Enum values for the termination type
         * type fullname: ovhcloudconnect.interf.TerminationTypeEnum
         */
        export type TerminationTypeEnum = "LC/PC" | "SC/PC"
    }
    export namespace key {
        /**
         * Enum values for service key status
         * type fullname: ovhcloudconnect.key.StatusEnum
         */
        export type StatusEnum = "active" | "cancelled" | "doing" | "terminated" | "toCheck"
    }
    export namespace messageCode {
        /**
         * Enum values for messageCode
         * type fullname: ovhcloudconnect.messageCode.Enum
         */
        export type Enum = "mailSent"
    }
    export namespace popConfig {
        /**
         * Enum values for Pop Configuration Status
         * type fullname: ovhcloudconnect.popConfig.StatusEnum
         */
        export type StatusEnum = "active" | "init" | "toDelete"
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
        export type BandwidthEnum = "100g" | "100m" | "10g" | "1g" | "200m" | "2g" | "500m" | "5g"
        /**
         * Enum values for port quantity
         * type fullname: ovhcloudconnect.service.PortEnum
         */
        export type PortEnum = "1" | "2"
        /**
         * Enum values for service provider
         * type fullname: ovhcloudconnect.service.ProviderEnum
         */
        export type ProviderEnum = "OVHcloud" | "RISQ" | "equinix" | "fibrenoire" | "intercloud" | "internal" | "interxion" | "megaport" | "orange" | "pccw"
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
        export type FunctionEnum = "addDatacenterConfiguration" | "addDatacenterExtraConfiguration" | "addPopConfiguration" | "addVrack" | "delDatacenterConfiguration" | "delDatacenterExtraConfiguration" | "delPopConfiguration" | "lockInterface" | "removeVrack" | "unlockInterface"
        /**
         * Enum values for Task status
         * type fullname: ovhcloudconnect.task.StatusEnum
         */
        export type StatusEnum = "doing" | "done" | "error" | "pause" | "todo"
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
                $post(params: { customerBgpArea?: number, id?: number, interfaceId: number, ovhBgpArea?: number, status?: ovhcloudconnect.popConfig.StatusEnum, subnet?: string, type: ovhcloudconnect.popConfig.TypeEnum }): Promise<ovhcloudconnect.Task>;
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
                        $post(params: { datacenterId: number, id?: number, ovhBgpArea?: number, status?: ovhcloudconnect.popConfig.StatusEnum, subnet?: string }): Promise<ovhcloudconnect.Task>;
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
                                $post(params: { bgpNeighborArea?: number, bgpNeighborIp?: string, id?: number, nextHop?: string, status?: ovhcloudconnect.popConfig.StatusEnum, subnet?: string, type: ovhcloudconnect.datacenterExtraConfig.TypeEnum }): Promise<ovhcloudconnect.Task>;
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
        diagnostic: {
            /**
             * Get Diagnostics linked to a OVHcloud Connect Service
             * GET /ovhCloudConnect/{serviceName}/diagnostic
             */
            $get(): Promise<number[]>;
            /**
             * Create a Diagnostic linked to a OVHcloud Connect Service
             * POST /ovhCloudConnect/{serviceName}/diagnostic
             */
            $post(params: { dcConfigId?: number, diagnosticName: ovhcloudconnect.diagnostic.FunctionEnum, diagnosticType?: ovhcloudconnect.diagnostic.TypeEnum, extraConfigId?: number, popConfigId: number }): Promise<ovhcloudconnect.Diagnostic>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get Diagnostic linked to a OVHcloud Connect Service
                 * GET /ovhCloudConnect/{serviceName}/diagnostic/{id}
                 */
                $get(): Promise<ovhcloudconnect.Diagnostic>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        incident: {
            /**
             * List incidents linked to the Service
             * GET /ovhCloudConnect/{serviceName}/incident
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get the incident information
                 * GET /ovhCloudConnect/{serviceName}/incident/{id}
                 */
                $get(): Promise<ovhcloudconnect.Incident>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        interface: {
            /**
             * List interfaces linked to the Service
             * GET /ovhCloudConnect/{serviceName}/interface
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get the Interface information
                 * GET /ovhCloudConnect/{serviceName}/interface/{id}
                 */
                $get(): Promise<ovhcloudconnect.Interface>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                lock: {
                    /**
                     * Lock the port
                     * POST /ovhCloudConnect/{serviceName}/interface/{id}/lock
                     */
                    $post(): Promise<ovhcloudconnect.Task>;
                }
                statistics: {
                    /**
                     * Statistics for an OCC interface for a given type
                     * GET /ovhCloudConnect/{serviceName}/interface/{id}/statistics
                     */
                    $get(params: { period: ovhcloudconnect.interf.MetricsPeriodEnum, type: ovhcloudconnect.interf.MetricsTypeEnum }): Promise<ovhcloudconnect.Metrics[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                unlock: {
                    /**
                     * Unlock the port
                     * POST /ovhCloudConnect/{serviceName}/interface/{id}/unlock
                     */
                    $post(): Promise<ovhcloudconnect.Task>;
                }
            };
        }
        loa: {
            /**
             * Generate a loa for a service
             * POST /ovhCloudConnect/{serviceName}/loa
             */
            $post(): Promise<string>;
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
        serviceKey: {
            /**
             * Get Keys linked to a OVHcloud Connect Service
             * GET /ovhCloudConnect/{serviceName}/serviceKey
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceKeyId: number): {
                /**
                 * Get Key linked to a OVHcloud Connect Service
                 * GET /ovhCloudConnect/{serviceName}/serviceKey/{serviceKeyId}
                 */
                $get(): Promise<ovhcloudconnect.Key>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                regenerate: {
                    /**
                     * Regenerate Service Key linked to a OVHcloud Connect Service
                     * POST /ovhCloudConnect/{serviceName}/serviceKey/{serviceKeyId}/regenerate
                     */
                    $post(): Promise<ovhcloudconnect.Key>;
                }
                send: {
                    /**
                     * Send key value to customer
                     * POST /ovhCloudConnect/{serviceName}/serviceKey/{serviceKeyId}/send
                     */
                    $post(params: { email: string }): Promise<ovhcloudconnect.SendKeyAnswer>;
                }
            };
        }
        task: {
            /**
             * Get Task linked to a OVHcloud Connect Service
             * GET /ovhCloudConnect/{serviceName}/task
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get Tasks linked to a OVHcloud Connect Service
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
        }
    };
}
