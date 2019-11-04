import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /vrack Models
 */
export namespace complexType {
    // interface fullName: complexType.UnitAndValue<T>.UnitAndValue
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
// Api
  /**
   * Operations about the VRACK service
   * List available services
   */
  get(path: '/vrack'): () => Promise<string[]>;
  /**
   * vrack
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}'): (params: {serviceName: string}) => Promise<vrack.vrack>;
  /**
   * allowedServices operations
   * List all services allowed in this vrack
   */
  get(path: '/vrack/{serviceName}/allowedServices'): (params: {serviceName: string}) => Promise<vrack.AllowedServices>;
  /**
   * List the vrack.cloudProject objects
   * vrack for publicCloud project
   */
  get(path: '/vrack/{serviceName}/cloudProject'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * PublicCloud project in vrack
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}/cloudProject/{project}'): (params: {project: string, serviceName: string}) => Promise<vrack.cloudProject>;
  /**
   * List the vrack.dedicatedCloud objects
   * vrack dedicated cloud (VmNetwork)
   */
  get(path: '/vrack/{serviceName}/dedicatedCloud'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * vrack dedicated cloud interface
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}'): (params: {dedicatedCloud: string, serviceName: string}) => Promise<vrack.dedicatedCloud>;
  /**
   * List the vrack.pccDatacenter objects
   * vrack dedicated cloud datacenter
   */
  get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * vrack datacenter interface
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}'): (params: {datacenter: string, serviceName: string}) => Promise<vrack.pccDatacenter>;
  /**
   * allowedVrack operations
   * Vracks allowed for your dedicatedCloud datacenter
   */
  get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack'): (params: {datacenter: string, serviceName: string}) => Promise<string[]>;
  /**
   * List the vrack.dedicatedConnect objects
   * vrack dedicated connect
   */
  get(path: '/vrack/{serviceName}/dedicatedConnect'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * vrack dedicated connect interface
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}/dedicatedConnect/{name}'): (params: {name: string, serviceName: string}) => Promise<vrack.dedicatedConnect>;
  /**
   * List the vrack.dedicatedServer objects
   * vrack for dedicated server
   */
  get(path: '/vrack/{serviceName}/dedicatedServer'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * vrack dedicated server interfaces
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}'): (params: {dedicatedServer: string, serviceName: string}) => Promise<vrack.dedicatedServer>;
  /**
   * mrtg operations
   * Retrieve vrack traffic graph values
   */
  get(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg'): (params: {dedicatedServer: string, serviceName: string, period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}) => Promise<dedicated.server.MrtgTimestampValue[]>;
  /**
   * List the vrack.dedicatedServerInterface objects
   * vrack for dedicated server interface
   */
  get(path: '/vrack/{serviceName}/dedicatedServerInterface'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * vrack dedicated server interfaces
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}'): (params: {dedicatedServerInterface: string, serviceName: string}) => Promise<vrack.dedicatedServerInterface>;
  /**
   * dedicatedServerInterfaceDetails operations
   * Details for all dedicated server interfaces in this vrack
   */
  get(path: '/vrack/{serviceName}/dedicatedServerInterfaceDetails'): (params: {serviceName: string}) => Promise<vrack.AllowedDedicatedServerInterfaces[]>;
  /**
   * List the vrack.ip objects
   * vrack for IP blocks
   */
  get(path: '/vrack/{serviceName}/ip'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * IP block in vrack
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}/ip/{ip}'): (params: {ip: string, serviceName: string}) => Promise<vrack.ip>;
  /**
   * availableZone operations
   * Zone available to announce your block
   */
  get(path: '/vrack/{serviceName}/ip/{ip}/availableZone'): (params: {ip: string, serviceName: string}) => Promise<vrack.VrackZoneEnum[]>;
  /**
   * List the vrack.iplb objects
   * vrack for ipLoadbalancing
   */
  get(path: '/vrack/{serviceName}/ipLoadbalancing'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * ipLoadbalancing in vrack
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}'): (params: {ipLoadbalancing: string, serviceName: string}) => Promise<vrack.iplb>;
  /**
   * List the vrack.legacyVrack objects
   * vrack for legacy vrack
   */
  get(path: '/vrack/{serviceName}/legacyVrack'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}/legacyVrack/{legacyVrack}'): (params: {legacyVrack: string, serviceName: string}) => Promise<vrack.legacyVrack>;
  /**
   * Details about a non-expiring Service
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.NonExpiringService>;
  /**
   * List the vrack.Task objects
   * vrack tasks
   */
  get(path: '/vrack/{serviceName}/task'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * vrack tasks
   * Get this object properties
   */
  get(path: '/vrack/{serviceName}/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<vrack.Task>;
  /**
   * vrack
   * Alter this object properties
   */
  put(path: '/vrack/{serviceName}'): (params: {serviceName: string, description?: string, name?: string}) => Promise<void>;
  /**
   * vrack dedicated connect interface
   * Alter this object properties
   */
  put(path: '/vrack/{serviceName}/dedicatedConnect/{name}'): (params: {name: string, serviceName: string}) => Promise<void>;
  /**
   * List the vrack.cloudProject objects
   * add a publicCloud project to this vrack
   */
  post(path: '/vrack/{serviceName}/cloudProject'): (params: {serviceName: string, project: string}) => Promise<vrack.Task>;
  /**
   * List the vrack.dedicatedCloud objects
   * add a dedicatedCloud (VmNetwork) to this vrack
   */
  post(path: '/vrack/{serviceName}/dedicatedCloud'): (params: {serviceName: string, dedicatedCloud: string}) => Promise<vrack.Task>;
  /**
   * move operations
   * Move your dedicatedCloud datacenter from a Vrack to another
   */
  post(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move'): (params: {datacenter: string, serviceName: string, targetServiceName: string}) => Promise<vrack.Task>;
  /**
   * List the vrack.dedicatedServer objects
   * add a dedicated server to this vrack
   */
  post(path: '/vrack/{serviceName}/dedicatedServer'): (params: {serviceName: string, dedicatedServer: string}) => Promise<vrack.Task>;
  /**
   * List the vrack.dedicatedServerInterface objects
   * add a dedicated server interface to this vrack
   */
  post(path: '/vrack/{serviceName}/dedicatedServerInterface'): (params: {serviceName: string, dedicatedServerInterface: string}) => Promise<vrack.Task>;
  /**
   * List the vrack.ip objects
   * add an IP block to this vrack
   */
  post(path: '/vrack/{serviceName}/ip'): (params: {serviceName: string, block: string}) => Promise<vrack.Task>;
  /**
   * announceInZone operations
   * Announce IP to zone for vrack
   */
  post(path: '/vrack/{serviceName}/ip/{ip}/announceInZone'): (params: {ip: string, serviceName: string, zone: vrackVrackZoneEnum}) => Promise<vrack.Task>;
  /**
   * List the vrack.iplb objects
   * add an ipLoadbalancing to this vrack
   */
  post(path: '/vrack/{serviceName}/ipLoadbalancing'): (params: {serviceName: string, ipLoadbalancing: string}) => Promise<vrack.Task>;
  /**
   * List the vrack.legacyVrack objects
   * add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX)
   */
  post(path: '/vrack/{serviceName}/legacyVrack'): (params: {serviceName: string, legacyVrack: string}) => Promise<vrack.Task>;
  /**
   * PublicCloud project in vrack
   * remove this publicCloud project from this vrack
   */
  delete(path: '/vrack/{serviceName}/cloudProject/{project}'): (params: {project: string, serviceName: string}) => Promise<vrack.Task>;
  /**
   * vrack dedicated cloud interface
   * remove this dedicatedCloud (VmNetwork) from this vrack
   */
  delete(path: '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}'): (params: {dedicatedCloud: string, serviceName: string}) => Promise<vrack.Task>;
  /**
   * vrack dedicated server interfaces
   * remove this server from this vrack
   */
  delete(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}'): (params: {dedicatedServer: string, serviceName: string}) => Promise<vrack.Task>;
  /**
   * vrack dedicated server interfaces
   * remove this server interface from this vrack
   */
  delete(path: '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}'): (params: {dedicatedServerInterface: string, serviceName: string}) => Promise<vrack.Task>;
  /**
   * IP block in vrack
   * remove this IP block from this vrack
   */
  delete(path: '/vrack/{serviceName}/ip/{ip}'): (params: {ip: string, serviceName: string}) => Promise<vrack.Task>;
  /**
   * ipLoadbalancing in vrack
   * remove this ipLoadbalancing from this vrack
   */
  delete(path: '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}'): (params: {ipLoadbalancing: string, serviceName: string}) => Promise<vrack.Task>;
  /**
   * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
   * remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX)
   */
  delete(path: '/vrack/{serviceName}/legacyVrack/{legacyVrack}'): (params: {legacyVrack: string, serviceName: string}) => Promise<vrack.Task>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type vrackAllowedDedicatedServerInterfaces = vrack.AllowedDedicatedServerInterfaces;
type vrackTaskStatusEnum = vrack.TaskStatusEnum;
type vrackVrackZoneEnum = vrack.VrackZoneEnum;
