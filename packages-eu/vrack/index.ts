import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /vrack Models
 * Source: https://eu.api.ovh.com/1.0/vrack.json
 */
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace dedicated {
    export namespace server {
        // type fullname: dedicated.server.MrtgPeriodEnum
        export type MrtgPeriodEnum = "daily" | "hourly" | "monthly" | "weekly" | "yearly"
        // interface fullName: dedicated.server.MrtgTimestampValue.MrtgTimestampValue
        export interface MrtgTimestampValue {
            timestamp: number;
            value?: complexType.UnitAndValue<number>;
        }
        // type fullname: dedicated.server.MrtgTypeEnum
        export type MrtgTypeEnum = "errors:download" | "errors:upload" | "packets:download" | "packets:upload" | "traffic:download" | "traffic:upload"
    }
}
export namespace service {
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    // interface fullName: services.NonExpiringService.NonExpiringService
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
    // interface fullName: vrack.AllowedDedicatedServerInterfaces.AllowedDedicatedServerInterfaces
    export interface AllowedDedicatedServerInterfaces {
        dedicatedServer: string;
        dedicatedServerInterface: string;
        name: string;
    }
    // interface fullName: vrack.AllowedServices.AllowedServices
    export interface AllowedServices {
        cloudProject?: string[];
        dedicatedCloud?: string[];
        dedicatedCloudDatacenter?: string[];
        dedicatedConnect?: string[];
        dedicatedServer?: string[];
        dedicatedServerInterface?: vrackAllowedDedicatedServerInterfaces[];
        ip?: string[];
        ipLoadbalancing?: string[];
        legacyVrack?: string[];
    }
    // interface fullName: vrack.Task.Task
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
    // type fullname: vrack.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "init" | "todo"
    // type fullname: vrack.VrackZoneEnum
    export type VrackZoneEnum = "bhs" | "fra1" | "gra" | "lon1" | "pdx1" | "rbx" | "sbg" | "sgp1" | "syd1" | "was1" | "waw"
    // interface fullName: vrack.cloudProject.cloudProject
    export interface cloudProject {
        project: string;
        vrack: string;
    }
    // interface fullName: vrack.dedicatedCloud.dedicatedCloud
    export interface dedicatedCloud {
        dedicatedCloud: string;
        vlanId?: number;
        vrack: string;
    }
    // interface fullName: vrack.dedicatedConnect.dedicatedConnect
    export interface dedicatedConnect {
        name: string;
    }
    // interface fullName: vrack.dedicatedServer.dedicatedServer
    export interface dedicatedServer {
        dedicatedServer: string;
        vrack: string;
    }
    // interface fullName: vrack.dedicatedServerInterface.dedicatedServerInterface
    export interface dedicatedServerInterface {
        dedicatedServerInterface: string;
        vrack: string;
    }
    // interface fullName: vrack.ip.ip
    export interface ip {
        gateway?: string;
        ip: string;
        zone?: vrackVrackZoneEnum;
    }
    // interface fullName: vrack.iplb.iplb
    export interface iplb {
        ipLoadbalancing: string;
        vrack: string;
    }
    // interface fullName: vrack.legacyVrack.legacyVrack
    export interface legacyVrack {
        legacyVrack: string;
        vlanId: number;
    }
    // interface fullName: vrack.nasha.nasha
    export interface nasha {
        serviceIp: string;
        zpool: string;
    }
    // interface fullName: vrack.pccDatacenter.pccDatacenter
    export interface pccDatacenter {
        datacenter: string;
        dedicatedCloud: string;
        vrack: string;
    }
    // interface fullName: vrack.publicRoutingOption.publicRoutingOption
    export interface publicRoutingOption {
        bandwidth?: number;
    }
    // interface fullName: vrack.vrack.vrack
    export interface vrack {
        description: string;
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
 * Api Proxy model
 */// Apis harmony
// path /vrack
export interface Vrack{
    // GET /vrack
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /vrack/{serviceName}
        $get(): Promise<vrack.vrack>;
        // PUT /vrack/{serviceName}
        $put(params?: {description?: string, name?: string}): Promise<void>;
        allowedServices: {
            // GET /vrack/{serviceName}/allowedServices
            $get(): Promise<vrack.AllowedServices>;
        }
        cloudProject: {
            // GET /vrack/{serviceName}/cloudProject
            $get(): Promise<string[]>;
            // POST /vrack/{serviceName}/cloudProject
            $post(params: {project: string}): Promise<vrack.Task>;
            $(project: string): {
                // DELETE /vrack/{serviceName}/cloudProject/{project}
                $delete(): Promise<vrack.Task>;
                // GET /vrack/{serviceName}/cloudProject/{project}
                $get(): Promise<vrack.cloudProject>;
            };
        }
        dedicatedCloud: {
            // GET /vrack/{serviceName}/dedicatedCloud
            $get(): Promise<string[]>;
            // POST /vrack/{serviceName}/dedicatedCloud
            $post(params: {dedicatedCloud: string}): Promise<vrack.Task>;
            $(dedicatedCloud: string): {
                // DELETE /vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}
                $delete(): Promise<vrack.Task>;
                // GET /vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}
                $get(): Promise<vrack.dedicatedCloud>;
            };
        }
        dedicatedCloudDatacenter: {
            // GET /vrack/{serviceName}/dedicatedCloudDatacenter
            $get(): Promise<string[]>;
            $(datacenter: string): {
                // GET /vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}
                $get(): Promise<vrack.pccDatacenter>;
                allowedVrack: {
                    // GET /vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack
                    $get(): Promise<string[]>;
                }
                move: {
                    // POST /vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move
                    $post(params: {targetServiceName: string}): Promise<vrack.Task>;
                }
            };
        }
        dedicatedConnect: {
            // GET /vrack/{serviceName}/dedicatedConnect
            $get(): Promise<string[]>;
            $(name: string): {
                // GET /vrack/{serviceName}/dedicatedConnect/{name}
                $get(): Promise<vrack.dedicatedConnect>;
                // PUT /vrack/{serviceName}/dedicatedConnect/{name}
                $put(params?: {name?: string}): Promise<void>;
            };
        }
        dedicatedServer: {
            // GET /vrack/{serviceName}/dedicatedServer
            $get(): Promise<string[]>;
            // POST /vrack/{serviceName}/dedicatedServer
            $post(params: {dedicatedServer: string}): Promise<vrack.Task>;
            $(dedicatedServer: string): {
                // DELETE /vrack/{serviceName}/dedicatedServer/{dedicatedServer}
                $delete(): Promise<vrack.Task>;
                // GET /vrack/{serviceName}/dedicatedServer/{dedicatedServer}
                $get(): Promise<vrack.dedicatedServer>;
                mrtg: {
                    // GET /vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg
                    $get(params: {period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}): Promise<dedicated.server.MrtgTimestampValue[]>;
                }
            };
        }
        dedicatedServerInterface: {
            // GET /vrack/{serviceName}/dedicatedServerInterface
            $get(): Promise<string[]>;
            // POST /vrack/{serviceName}/dedicatedServerInterface
            $post(params: {dedicatedServerInterface: string}): Promise<vrack.Task>;
            $(dedicatedServerInterface: string): {
                // DELETE /vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}
                $delete(): Promise<vrack.Task>;
                // GET /vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}
                $get(): Promise<vrack.dedicatedServerInterface>;
            };
        }
        dedicatedServerInterfaceDetails: {
            // GET /vrack/{serviceName}/dedicatedServerInterfaceDetails
            $get(): Promise<vrack.AllowedDedicatedServerInterfaces[]>;
        }
        ip: {
            // GET /vrack/{serviceName}/ip
            $get(): Promise<string[]>;
            // POST /vrack/{serviceName}/ip
            $post(params: {block: string}): Promise<vrack.Task>;
            $(ip: string): {
                // DELETE /vrack/{serviceName}/ip/{ip}
                $delete(): Promise<vrack.Task>;
                // GET /vrack/{serviceName}/ip/{ip}
                $get(): Promise<vrack.ip>;
                announceInZone: {
                    // POST /vrack/{serviceName}/ip/{ip}/announceInZone
                    $post(params: {zone: vrackVrackZoneEnum}): Promise<vrack.Task>;
                }
                availableZone: {
                    // GET /vrack/{serviceName}/ip/{ip}/availableZone
                    $get(): Promise<vrack.VrackZoneEnum[]>;
                }
            };
        }
        ipLoadbalancing: {
            // GET /vrack/{serviceName}/ipLoadbalancing
            $get(): Promise<string[]>;
            // POST /vrack/{serviceName}/ipLoadbalancing
            $post(params: {ipLoadbalancing: string}): Promise<vrack.Task>;
            $(ipLoadbalancing: string): {
                // DELETE /vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}
                $delete(): Promise<vrack.Task>;
                // GET /vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}
                $get(): Promise<vrack.iplb>;
            };
        }
        legacyVrack: {
            // GET /vrack/{serviceName}/legacyVrack
            $get(): Promise<string[]>;
            // POST /vrack/{serviceName}/legacyVrack
            $post(params: {legacyVrack: string}): Promise<vrack.Task>;
            $(legacyVrack: string): {
                // DELETE /vrack/{serviceName}/legacyVrack/{legacyVrack}
                $delete(): Promise<vrack.Task>;
                // GET /vrack/{serviceName}/legacyVrack/{legacyVrack}
                $get(): Promise<vrack.legacyVrack>;
            };
        }
        serviceInfos: {
            // GET /vrack/{serviceName}/serviceInfos
            $get(): Promise<services.NonExpiringService>;
        }
        task: {
            // GET /vrack/{serviceName}/task
            $get(): Promise<number[]>;
            $(taskId: number): {
                // GET /vrack/{serviceName}/task/{taskId}
                $get(): Promise<vrack.Task>;
            };
        }
    };
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type vrackAllowedDedicatedServerInterfaces = vrack.AllowedDedicatedServerInterfaces;
type vrackTaskStatusEnum = vrack.TaskStatusEnum;
type vrackVrackZoneEnum = vrack.VrackZoneEnum;
