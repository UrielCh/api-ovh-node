import { buildOvhProxy } from '@ovh-api/common';
import { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /vrack Models
 * Source: https://ca.api.ovh.com/1.0/vrack.json
 */
export namespace complexType {
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace dedicated {
    export namespace server {
        /**
         * distincts MRTG period
         * type fullname: dedicated.server.MrtgPeriodEnum
         */
        export type MrtgPeriodEnum = "daily" | "hourly" | "monthly" | "weekly" | "yearly"
        /**
         * A timestamp associated to a value
         * interface fullName: dedicated.server.MrtgTimestampValue.MrtgTimestampValue
         */
        export interface MrtgTimestampValue {
            timestamp: number;
            value?: complexType.UnitAndValue<number>;
        }
        /**
         * distincts MRTG type
         * type fullname: dedicated.server.MrtgTypeEnum
         */
        export type MrtgTypeEnum = "errors:download" | "errors:upload" | "packets:download" | "packets:upload" | "traffic:download" | "traffic:upload"
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
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    /**
     * Details about a non-expiring Service
     * interface fullName: services.NonExpiringService.NonExpiringService
     */
    export interface NonExpiringService {
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        serviceId: number;
        status: service.StateEnum;
    }
}
export namespace vrack {
    /**
     * A structure giving all dedicated server interfaces allowed for this vrack
     * interface fullName: vrack.AllowedDedicatedServerInterfaces.AllowedDedicatedServerInterfaces
     */
    export interface AllowedDedicatedServerInterfaces {
        dedicatedServer: string;
        dedicatedServerInterface: string;
        name: string;
    }
    /**
     * Possible values for vrack allowed service
     * type fullname: vrack.AllowedServiceEnum
     */
    export type AllowedServiceEnum = "cloudProject" | "dedicatedCloud" | "dedicatedCloudDatacenter" | "dedicatedConnect" | "dedicatedServer" | "dedicatedServerInterface" | "ip" | "ipLoadbalancing" | "ipv6" | "legacyVrack" | "ovhCloudConnect" | "vrackServices"
    /**
     * A structure given all service allowed for this vrack
     * interface fullName: vrack.AllowedServices.AllowedServices
     */
    export interface AllowedServices {
        cloudProject?: string[];
        dedicatedCloud?: string[];
        dedicatedCloudDatacenter?: string[];
        dedicatedConnect?: string[];
        dedicatedServer?: string[];
        dedicatedServerInterface?: vrackAllowedDedicatedServerInterfaces[];
        ip?: string[];
        ipLoadbalancing?: string[];
        ipv6?: string[];
        legacyVrack?: string[];
        ovhCloudConnect?: string[];
        vrackServices?: string[];
    }
    /**
     * Dedicated server interfaces allowed for this vRack
     * interface fullName: vrack.EligibleDedicatedServerInterfaces.EligibleDedicatedServerInterfaces
     */
    export interface EligibleDedicatedServerInterfaces {
        dedicatedServer: string;
        dedicatedServerInterface: string;
        name: string;
    }
    /**
     * Eligible services for this vRack
     * interface fullName: vrack.EligibleServices.EligibleServices
     */
    export interface EligibleServices {
        cloudProject?: string[];
        dedicatedCloud?: string[];
        dedicatedCloudDatacenter?: string[];
        dedicatedConnect?: string[];
        dedicatedServer?: string[];
        dedicatedServerInterface?: vrackEligibleDedicatedServerInterfaces[];
        ip?: string[];
        ipLoadbalancing?: string[];
        ipv6?: string[];
        legacyVrack?: string[];
        ovhCloudConnect?: string[];
        vrackServices?: string[];
    }
    /**
     * Eligible services call response
     * interface fullName: vrack.EligibleServicesResponse.EligibleServicesResponse
     */
    export interface EligibleServicesResponse {
        createdAt: string;
        errors: string[];
        result: vrackEligibleServices;
        status: string;
    }
    /**
     * Possible values for slaac
     * type fullname: vrack.SlaacEnum
     */
    export type SlaacEnum = "disabled" | "enabled"
    /**
     * vrack tasks
     * interface fullName: vrack.Task.Task
     */
    export interface Task {
        function: string;
        id: number;
        lastUpdate?: string;
        orderId?: number;
        serviceName?: string;
        status: vrackTaskStatusEnum;
        targetDomain?: string;
        todoDate?: string;
    }
    /**
     * All states a vRack Task can be in
     * type fullname: vrack.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "init" | "todo"
    /**
     * Possible values for vrack zone
     * type fullname: vrack.VrackZoneEnum
     */
    export type VrackZoneEnum = "bhs" | "fra1" | "gra" | "lon1" | "pdx1" | "rbx" | "sbg" | "sgp1" | "syd1" | "syd2" | "was1" | "waw"
    /**
     * Bridged subrange within your IP v6 block
     * interface fullName: vrack.bridgedSubrange.bridgedSubrange
     */
    export interface bridgedSubrange {
        bridgedSubrange: string;
        gateway: string;
        slaac: vrackSlaacEnum;
    }
    /**
     * PublicCloud project in vrack
     * interface fullName: vrack.cloudProject.cloudProject
     */
    export interface cloudProject {
        project: string;
        vrack: string;
    }
    /**
     * VMware on OVHcloud vRack link
     * interface fullName: vrack.dedicatedCloud.dedicatedCloud
     */
    export interface dedicatedCloud {
        dedicatedCloud: string;
        vlanId?: number;
        vrack: string;
    }
    /**
     * vrack dedicated connect interface
     * interface fullName: vrack.dedicatedConnect.dedicatedConnect
     */
    export interface dedicatedConnect {
        name: string;
    }
    /**
     * vrack dedicated server interfaces (LEGACY)
     * interface fullName: vrack.dedicatedServer.dedicatedServer
     */
    export interface dedicatedServer {
        dedicatedServer: string;
        vrack: string;
    }
    /**
     * vrack dedicated server interfaces
     * interface fullName: vrack.dedicatedServerInterface.dedicatedServerInterface
     */
    export interface dedicatedServerInterface {
        dedicatedServerInterface: string;
        vrack: string;
    }
    /**
     * IP block in vrack
     * interface fullName: vrack.ip.ip
     */
    export interface ip {
        gateway?: string;
        ip: string;
        zone?: vrackVrackZoneEnum;
    }
    /**
     * ipLoadbalancing in vrack
     * interface fullName: vrack.iplb.iplb
     */
    export interface iplb {
        ipLoadbalancing: string;
        vrack: string;
    }
    /**
     * IP v6 block in vrack
     * interface fullName: vrack.ipv6.ipv6
     */
    export interface ipv6 {
        ipv6: string;
    }
    /**
     * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
     * interface fullName: vrack.legacyVrack.legacyVrack
     */
    export interface legacyVrack {
        legacyVrack: string;
        vlanId: number;
    }
    /**
     * ovhCloudConnect in vrack
     * interface fullName: vrack.ovhCloudConnect.ovhCloudConnect
     */
    export interface ovhCloudConnect {
        ovhCloudConnect: string;
        vrack: string;
    }
    /**
     * vrack datacenter interface
     * interface fullName: vrack.pccDatacenter.pccDatacenter
     */
    export interface pccDatacenter {
        datacenter: string;
        dedicatedCloud: string;
        vrack: string;
    }
    /**
     * A structure describing the public routing option
     * interface fullName: vrack.publicRoutingOption.publicRoutingOption
     */
    export interface publicRoutingOption {
        bandwidth?: number;
    }
    /**
     * Routed subranges within your IP v6 block
     * interface fullName: vrack.routedSubrange.routedSubrange
     */
    export interface routedSubrange {
        nexthop: string;
        routedSubrange: string;
    }
    /**
     * vrack
     * interface fullName: vrack.vrack.vrack
     */
    export interface vrack {
        description: string;
        name: string;
    }
    /**
     * vrackServices in vrack
     * interface fullName: vrack.vrackServices.vrackServices
     */
    export interface vrackServices {
        vrack: string;
        vrackServices: string;
    }
    /**
     * vrack
     * interface fullName: vrack.vrackWithIAM.vrackWithIAM
     */
    export interface vrackWithIAM {
        description: string;
        iam?: iam.ResourceMetadata;
        name: string;
    }
}

/**
 * END API /vrack Models
 */
export function proxyVrack(ovhEngine: OvhRequestable): Vrack {
    return buildOvhProxy(ovhEngine, '/vrack');
}
export default proxyVrack;
/**
 * Api model for /vrack
 */
export interface Vrack {
    /**
     * List available services
     * GET /vrack
     */
    $get(params?: { iamTags?: any }): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /vrack/{serviceName}
         */
        $get(): Promise<vrack.vrack>;
        /**
         * Alter this object properties
         * PUT /vrack/{serviceName}
         */
        $put(params?: { description?: string, name?: string }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        allowedServices: {
            /**
             * List all services allowed in this vrack
             * GET /vrack/{serviceName}/allowedServices
             */
            $get(params?: { serviceFamily?: vrack.AllowedServiceEnum }): Promise<vrack.AllowedServices>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        cloudProject: {
            /**
             * vrack for publicCloud project
             * GET /vrack/{serviceName}/cloudProject
             */
            $get(): Promise<string[]>;
            /**
             * add a publicCloud project to this vrack
             * POST /vrack/{serviceName}/cloudProject
             */
            $post(params: { project: string }): Promise<vrack.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(project: string): {
                /**
                 * remove this publicCloud project from this vrack
                 * DELETE /vrack/{serviceName}/cloudProject/{project}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/cloudProject/{project}
                 */
                $get(): Promise<vrack.cloudProject>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        dedicatedCloud: {
            /**
             * vrack dedicated cloud (VmNetwork)
             * GET /vrack/{serviceName}/dedicatedCloud
             */
            $get(): Promise<string[]>;
            /**
             * Add VMware on OVHcloud to vRack
             * POST /vrack/{serviceName}/dedicatedCloud
             */
            $post(params: { dedicatedCloud: string }): Promise<vrack.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(dedicatedCloud: string): {
                /**
                 * Remove VMware on OVHcloud from vRack
                 * DELETE /vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get vRack
                 * GET /vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}
                 */
                $get(): Promise<vrack.dedicatedCloud>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        dedicatedCloudDatacenter: {
            /**
             * vrack dedicated cloud datacenter
             * GET /vrack/{serviceName}/dedicatedCloudDatacenter
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(datacenter: string): {
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}
                 */
                $get(): Promise<vrack.pccDatacenter>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                allowedVrack: {
                    /**
                     * Vracks allowed for your dedicatedCloud datacenter
                     * GET /vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                move: {
                    /**
                     * Move your dedicatedCloud datacenter from a Vrack to another
                     * POST /vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move
                     */
                    $post(params: { targetServiceName: string }): Promise<vrack.Task>;
                }
            };
        }
        dedicatedConnect: {
            /**
             * vrack dedicated connect
             * GET /vrack/{serviceName}/dedicatedConnect
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(name: string): {
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/dedicatedConnect/{name}
                 */
                $get(): Promise<vrack.dedicatedConnect>;
                /**
                 * Alter this object properties
                 * PUT /vrack/{serviceName}/dedicatedConnect/{name}
                 */
                $put(params?: { name?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        dedicatedServer: {
            /**
             * vrack for dedicated server
             * GET /vrack/{serviceName}/dedicatedServer
             */
            $get(): Promise<string[]>;
            /**
             * add a dedicated server to this vrack (LEGACY)
             * POST /vrack/{serviceName}/dedicatedServer
             */
            $post(params: { dedicatedServer: string }): Promise<vrack.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(dedicatedServer: string): {
                /**
                 * remove this server from this vrack (LEGACY)
                 * DELETE /vrack/{serviceName}/dedicatedServer/{dedicatedServer}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/dedicatedServer/{dedicatedServer}
                 */
                $get(): Promise<vrack.dedicatedServer>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                mrtg: {
                    /**
                     * Retrieve vrack traffic graph values (LEGACY)
                     * GET /vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg
                     */
                    $get(params: { period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum }): Promise<dedicated.server.MrtgTimestampValue[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        dedicatedServerInterface: {
            /**
             * vrack for dedicated server interface
             * GET /vrack/{serviceName}/dedicatedServerInterface
             */
            $get(): Promise<string[]>;
            /**
             * add a dedicated server interface to this vrack
             * POST /vrack/{serviceName}/dedicatedServerInterface
             */
            $post(params: { dedicatedServerInterface: string }): Promise<vrack.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(dedicatedServerInterface: string): {
                /**
                 * remove this server interface from this vrack
                 * DELETE /vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}
                 */
                $get(): Promise<vrack.dedicatedServerInterface>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        dedicatedServerInterfaceDetails: {
            /**
             * Details for all dedicated server interfaces in this vrack
             * GET /vrack/{serviceName}/dedicatedServerInterfaceDetails
             */
            $get(): Promise<vrack.AllowedDedicatedServerInterfaces[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        eligibleServices: {
            /**
             * List all eligible services for this vRack asynchronously
             * GET /vrack/{serviceName}/eligibleServices
             */
            $get(): Promise<vrack.EligibleServicesResponse>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        ip: {
            /**
             * vrack for IP blocks
             * GET /vrack/{serviceName}/ip
             */
            $get(): Promise<string[]>;
            /**
             * add an IP block to this vrack
             * POST /vrack/{serviceName}/ip
             */
            $post(params: { block: string }): Promise<vrack.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ip: string): {
                /**
                 * remove this IP block from this vrack
                 * DELETE /vrack/{serviceName}/ip/{ip}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/ip/{ip}
                 */
                $get(): Promise<vrack.ip>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                announceInZone: {
                    /**
                     * Announce IP to zone for vrack
                     * POST /vrack/{serviceName}/ip/{ip}/announceInZone
                     */
                    $post(params: { zone: vrackVrackZoneEnum }): Promise<vrack.Task>;
                }
                availableZone: {
                    /**
                     * Zone available to announce your block
                     * GET /vrack/{serviceName}/ip/{ip}/availableZone
                     */
                    $get(): Promise<vrack.VrackZoneEnum[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        ipLoadbalancing: {
            /**
             * vrack for ipLoadbalancing
             * GET /vrack/{serviceName}/ipLoadbalancing
             */
            $get(): Promise<string[]>;
            /**
             * add an ipLoadbalancing to this vrack
             * POST /vrack/{serviceName}/ipLoadbalancing
             */
            $post(params: { ipLoadbalancing: string }): Promise<vrack.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipLoadbalancing: string): {
                /**
                 * remove this ipLoadbalancing from this vrack
                 * DELETE /vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}
                 */
                $get(): Promise<vrack.iplb>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        ipv6: {
            /**
             * vrack for IP v6 blocks
             * GET /vrack/{serviceName}/ipv6
             */
            $get(): Promise<string[]>;
            /**
             * add an IP v6 block to this vrack
             * POST /vrack/{serviceName}/ipv6
             */
            $post(params: { block: string }): Promise<vrack.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipv6: string): {
                /**
                 * remove this IP v6 block from this vrack
                 * DELETE /vrack/{serviceName}/ipv6/{ipv6}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/ipv6/{ipv6}
                 */
                $get(): Promise<vrack.ipv6>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                bridgedSubrange: {
                    /**
                     * subrange bridged into your vrack
                     * GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(bridgedSubrange: string): {
                        /**
                         * Get this object properties
                         * GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
                         */
                        $get(): Promise<vrack.bridgedSubrange>;
                        /**
                         * Update Slaac status
                         * PUT /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
                         */
                        $put(params?: { bridgedSubrange?: string, gateway?: string, slaac?: vrackSlaacEnum }): Promise<vrack.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                routedSubrange: {
                    /**
                     * subrange routed into your vrack
                     * GET /vrack/{serviceName}/ipv6/{ipv6}/routedSubrange
                     */
                    $get(): Promise<string[]>;
                    /**
                     * route a subrange of your IP v6 block into your vrack
                     * POST /vrack/{serviceName}/ipv6/{ipv6}/routedSubrange
                     */
                    $post(params: { nexthop: string, routedSubrange: string }): Promise<vrack.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(routedSubrange: string): {
                        /**
                         * unroute subrange from your vrack
                         * DELETE /vrack/{serviceName}/ipv6/{ipv6}/routedSubrange/{routedSubrange}
                         */
                        $delete(): Promise<vrack.Task>;
                        /**
                         * Get this object properties
                         * GET /vrack/{serviceName}/ipv6/{ipv6}/routedSubrange/{routedSubrange}
                         */
                        $get(): Promise<vrack.routedSubrange>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        legacyVrack: {
            /**
             * vrack for legacy vrack
             * GET /vrack/{serviceName}/legacyVrack
             */
            $get(): Promise<string[]>;
            /**
             * add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX)
             * POST /vrack/{serviceName}/legacyVrack
             */
            $post(params: { legacyVrack: string }): Promise<vrack.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(legacyVrack: string): {
                /**
                 * remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX)
                 * DELETE /vrack/{serviceName}/legacyVrack/{legacyVrack}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/legacyVrack/{legacyVrack}
                 */
                $get(): Promise<vrack.legacyVrack>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        ovhCloudConnect: {
            /**
             * vrack for ovhCloudConnect
             * GET /vrack/{serviceName}/ovhCloudConnect
             */
            $get(): Promise<string[]>;
            /**
             * Add an ovhCloudConnect to the vrack
             * POST /vrack/{serviceName}/ovhCloudConnect
             */
            $post(params: { ovhCloudConnect: string }): Promise<vrack.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ovhCloudConnect: string): {
                /**
                 * Remove the ovhCloudConnect from the vrack
                 * DELETE /vrack/{serviceName}/ovhCloudConnect/{ovhCloudConnect}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/ovhCloudConnect/{ovhCloudConnect}
                 */
                $get(): Promise<vrack.ovhCloudConnect>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /vrack/{serviceName}/serviceInfos
             */
            $get(): Promise<services.NonExpiringService>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        task: {
            /**
             * vrack tasks
             * GET /vrack/{serviceName}/task
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: number): {
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/task/{taskId}
                 */
                $get(): Promise<vrack.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        vrackServices: {
            /**
             * vrack for vrackServices
             * GET /vrack/{serviceName}/vrackServices
             */
            $get(): Promise<string[]>;
            /**
             * Add a vrackServices to the vrack
             * POST /vrack/{serviceName}/vrackServices
             */
            $post(params: { vrackServices: string }): Promise<vrack.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(vrackServices: string): {
                /**
                 * Remove the vrackServices from the vrack
                 * DELETE /vrack/{serviceName}/vrackServices/{vrackServices}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get this object properties
                 * GET /vrack/{serviceName}/vrackServices/{vrackServices}
                 */
                $get(): Promise<vrack.vrackServices>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    };
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type vrackAllowedDedicatedServerInterfaces = vrack.AllowedDedicatedServerInterfaces;
type vrackEligibleDedicatedServerInterfaces = vrack.EligibleDedicatedServerInterfaces;
type vrackEligibleServices = vrack.EligibleServices;
type vrackTaskStatusEnum = vrack.TaskStatusEnum;
type vrackSlaacEnum = vrack.SlaacEnum;
type vrackVrackZoneEnum = vrack.VrackZoneEnum;
