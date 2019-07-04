import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit?: string;
        value?: T;
    }
}
export namespace dedicated {
    export namespace server {
        //dedicated.server.MrtgPeriodEnum
        export type MrtgPeriodEnum = "daily" | "hourly" | "monthly" | "weekly" | "yearly"
        //dedicated.server.MrtgTimestampValue
        // fullName: dedicated.server.MrtgTimestampValue.MrtgTimestampValue
        export interface MrtgTimestampValue {
            timestamp?: number;
            value?: OVH.complexType.UnitAndValue<number>;
        }
        //dedicated.server.MrtgTypeEnum
        export type MrtgTypeEnum = "errors:download" | "errors:upload" | "packets:download" | "packets:upload" | "traffic:download" | "traffic:upload"
    }
}
export namespace service {
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.NonExpiringService
    // fullName: services.NonExpiringService.NonExpiringService
    export interface NonExpiringService {
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
export namespace vrack {
    //vrack.AllowedDedicatedServerInterfaces
    // fullName: vrack.AllowedDedicatedServerInterfaces.AllowedDedicatedServerInterfaces
    export interface AllowedDedicatedServerInterfaces {
        dedicatedServer?: string;
        dedicatedServerInterface?: string;
        name?: string;
    }
    //vrack.AllowedServices
    // fullName: vrack.AllowedServices.AllowedServices
    export interface AllowedServices {
        cloudProject?: string[];
        dedicatedCloud?: string[];
        dedicatedCloudDatacenter?: string[];
        dedicatedConnect?: string[];
        dedicatedServer?: string[];
        dedicatedServerInterface?: OVH.vrack.AllowedDedicatedServerInterfaces[];
        ip?: string[];
        ipLoadbalancing?: string[];
        legacyVrack?: string[];
    }
    //vrack.Task
    // fullName: vrack.Task.Task
    export interface Task {
        function?: string;
        id?: number;
        lastUpdate?: string;
        orderId?: number;
        serviceName?: string;
        status?: OVH.vrack.TaskStatusEnum;
        targetDomain?: string;
        todoDate?: string;
    }
    //vrack.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "init" | "todo"
    //vrack.VrackZoneEnum
    export type VrackZoneEnum = "bhs" | "fra1" | "gra" | "lon1" | "pdx1" | "rbx" | "sbg" | "sgp1" | "syd1" | "was1" | "waw"
    //vrack.cloudProject
    // fullName: vrack.cloudProject.cloudProject
    export interface cloudProject {
        project?: string;
        vrack?: string;
    }
    //vrack.dedicatedCloud
    // fullName: vrack.dedicatedCloud.dedicatedCloud
    export interface dedicatedCloud {
        dedicatedCloud?: string;
        vlanId?: number;
        vrack?: string;
    }
    //vrack.dedicatedConnect
    // fullName: vrack.dedicatedConnect.dedicatedConnect
    export interface dedicatedConnect {
        name?: string;
    }
    //vrack.dedicatedServer
    // fullName: vrack.dedicatedServer.dedicatedServer
    export interface dedicatedServer {
        dedicatedServer?: string;
        vrack?: string;
    }
    //vrack.dedicatedServerInterface
    // fullName: vrack.dedicatedServerInterface.dedicatedServerInterface
    export interface dedicatedServerInterface {
        dedicatedServerInterface?: string;
        vrack?: string;
    }
    //vrack.ip
    // fullName: vrack.ip.ip
    export interface ip {
        gateway?: string;
        ip?: string;
        zone?: OVH.vrack.VrackZoneEnum;
    }
    //vrack.iplb
    // fullName: vrack.iplb.iplb
    export interface iplb {
        ipLoadbalancing?: string;
        vrack?: string;
    }
    //vrack.legacyVrack
    // fullName: vrack.legacyVrack.legacyVrack
    export interface legacyVrack {
        legacyVrack?: string;
        vlanId?: number;
    }
    //vrack.nasha
    // fullName: vrack.nasha.nasha
    export interface nasha {
        serviceIp?: string;
        zpool?: string;
    }
    //vrack.pccDatacenter
    // fullName: vrack.pccDatacenter.pccDatacenter
    export interface pccDatacenter {
        datacenter?: string;
        dedicatedCloud?: string;
        vrack?: string;
    }
    //vrack.publicRoutingOption
    // fullName: vrack.publicRoutingOption.publicRoutingOption
    export interface publicRoutingOption {
        bandwidth?: number;
    }
    //vrack.vrack
    // fullName: vrack.vrack.vrack
    export interface vrack {
        description?: string;
        name?: string;
    }
}
// Apis harmony
// path /vrack
export interface Vrack {
    // GET /vrack
    GET(): Promise<string[]>;
    [keys: string]: {
        // GET /vrack/{serviceName}
        GET(): Promise<vrack.vrack>;
        // PUT /vrack/{serviceName}
        PUT(body?: {body: vrack.vrack}): Promise<void>;
        allowedServices:  {
            // GET /vrack/{serviceName}/allowedServices
            GET(): Promise<vrack.AllowedServices>;
        }
        dedicatedServerInterface:  {
            // GET /vrack/{serviceName}/dedicatedServerInterface
            GET(): Promise<string[]>;
            // POST /vrack/{serviceName}/dedicatedServerInterface
            POST(body?: {dedicatedServerInterface: string}): Promise<vrack.Task>;
            [keys: string]: {
                // GET /vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}
                GET(): Promise<vrack.dedicatedServerInterface>;
                // DELETE /vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}
                DELETE(): Promise<vrack.Task>;
            } | any
        }
        dedicatedCloudDatacenter:  {
            // GET /vrack/{serviceName}/dedicatedCloudDatacenter
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}
                GET(): Promise<vrack.pccDatacenter>;
                allowedVrack:  {
                    // GET /vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack
                    GET(): Promise<string[]>;
                }
                move:  {
                    // POST /vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move
                    POST(body?: {targetServiceName: string}): Promise<vrack.Task>;
                }
            } | any
        }
        dedicatedServer:  {
            // GET /vrack/{serviceName}/dedicatedServer
            GET(): Promise<string[]>;
            // POST /vrack/{serviceName}/dedicatedServer
            POST(body?: {dedicatedServer: string}): Promise<vrack.Task>;
            [keys: string]: {
                // GET /vrack/{serviceName}/dedicatedServer/{dedicatedServer}
                GET(): Promise<vrack.dedicatedServer>;
                // DELETE /vrack/{serviceName}/dedicatedServer/{dedicatedServer}
                DELETE(): Promise<vrack.Task>;
                mrtg:  {
                    // GET /vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg
                    GET(param?: {period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}): Promise<dedicated.server.MrtgTimestampValue[]>;
                }
            } | any
        }
        cloudProject:  {
            // GET /vrack/{serviceName}/cloudProject
            GET(): Promise<string[]>;
            // POST /vrack/{serviceName}/cloudProject
            POST(body?: {project: string}): Promise<vrack.Task>;
            [keys: string]: {
                // GET /vrack/{serviceName}/cloudProject/{project}
                GET(): Promise<vrack.cloudProject>;
                // DELETE /vrack/{serviceName}/cloudProject/{project}
                DELETE(): Promise<vrack.Task>;
            } | any
        }
        legacyVrack:  {
            // GET /vrack/{serviceName}/legacyVrack
            GET(): Promise<string[]>;
            // POST /vrack/{serviceName}/legacyVrack
            POST(body?: {legacyVrack: string}): Promise<vrack.Task>;
            [keys: string]: {
                // GET /vrack/{serviceName}/legacyVrack/{legacyVrack}
                GET(): Promise<vrack.legacyVrack>;
                // DELETE /vrack/{serviceName}/legacyVrack/{legacyVrack}
                DELETE(): Promise<vrack.Task>;
            } | any
        }
        dedicatedServerInterfaceDetails:  {
            // GET /vrack/{serviceName}/dedicatedServerInterfaceDetails
            GET(): Promise<vrack.AllowedDedicatedServerInterfaces[]>;
        }
        dedicatedCloud:  {
            // GET /vrack/{serviceName}/dedicatedCloud
            GET(): Promise<string[]>;
            // POST /vrack/{serviceName}/dedicatedCloud
            POST(body?: {dedicatedCloud: string}): Promise<vrack.Task>;
            [keys: string]: {
                // GET /vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}
                GET(): Promise<vrack.dedicatedCloud>;
                // DELETE /vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}
                DELETE(): Promise<vrack.Task>;
            } | any
        }
        serviceInfos:  {
            // GET /vrack/{serviceName}/serviceInfos
            GET(): Promise<services.NonExpiringService>;
        }
        task:  {
            // GET /vrack/{serviceName}/task
            GET(): Promise<number[]>;
            [keys: string]: {
                // GET /vrack/{serviceName}/task/{taskId}
                GET(): Promise<vrack.Task>;
            } | any
        }
        ipLoadbalancing:  {
            // GET /vrack/{serviceName}/ipLoadbalancing
            GET(): Promise<string[]>;
            // POST /vrack/{serviceName}/ipLoadbalancing
            POST(body?: {ipLoadbalancing: string}): Promise<vrack.Task>;
            [keys: string]: {
                // GET /vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}
                GET(): Promise<vrack.iplb>;
                // DELETE /vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}
                DELETE(): Promise<vrack.Task>;
            } | any
        }
        ip:  {
            // GET /vrack/{serviceName}/ip
            GET(): Promise<string[]>;
            // POST /vrack/{serviceName}/ip
            POST(body?: {block: string}): Promise<vrack.Task>;
            [keys: string]: {
                // GET /vrack/{serviceName}/ip/{ip}
                GET(): Promise<vrack.ip>;
                // DELETE /vrack/{serviceName}/ip/{ip}
                DELETE(): Promise<vrack.Task>;
                announceInZone:  {
                    // POST /vrack/{serviceName}/ip/{ip}/announceInZone
                    POST(body?: {zone: vrack.VrackZoneEnum}): Promise<vrack.Task>;
                }
                availableZone:  {
                    // GET /vrack/{serviceName}/ip/{ip}/availableZone
                    GET(): Promise<vrack.VrackZoneEnum[]>;
                }
            } | any
        }
        dedicatedConnect:  {
            // GET /vrack/{serviceName}/dedicatedConnect
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /vrack/{serviceName}/dedicatedConnect/{name}
                GET(): Promise<vrack.dedicatedConnect>;
                // PUT /vrack/{serviceName}/dedicatedConnect/{name}
                PUT(body?: {body: vrack.dedicatedConnect}): Promise<void>;
            } | any
        }
    } | any
}
// Api
type PathsVrackGET = '/vrack/{serviceName}/allowedServices' |
  '/vrack/{serviceName}/dedicatedServerInterface' |
  '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}' |
  '/vrack/{serviceName}' |
  '/vrack/{serviceName}/dedicatedCloudDatacenter' |
  '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}' |
  '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack' |
  '/vrack/{serviceName}/dedicatedServer' |
  '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}' |
  '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg' |
  '/vrack/{serviceName}/cloudProject' |
  '/vrack/{serviceName}/cloudProject/{project}' |
  '/vrack/{serviceName}/legacyVrack/{legacyVrack}' |
  '/vrack/{serviceName}/legacyVrack' |
  '/vrack/{serviceName}/dedicatedServerInterfaceDetails' |
  '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}' |
  '/vrack/{serviceName}/dedicatedCloud' |
  '/vrack/{serviceName}/serviceInfos' |
  '/vrack/{serviceName}/task' |
  '/vrack/{serviceName}/task/{taskId}' |
  '/vrack/{serviceName}/ipLoadbalancing' |
  '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}' |
  '/vrack/{serviceName}/ip' |
  '/vrack/{serviceName}/ip/{ip}' |
  '/vrack/{serviceName}/ip/{ip}/availableZone' |
  '/vrack/{serviceName}/dedicatedConnect/{name}' |
  '/vrack/{serviceName}/dedicatedConnect' |
  '/vrack';

type PathsVrackPUT = '/vrack/{serviceName}' |
  '/vrack/{serviceName}/dedicatedConnect/{name}';

type PathsVrackPOST = '/vrack/{serviceName}/dedicatedServerInterface' |
  '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move' |
  '/vrack/{serviceName}/dedicatedServer' |
  '/vrack/{serviceName}/cloudProject' |
  '/vrack/{serviceName}/legacyVrack' |
  '/vrack/{serviceName}/dedicatedCloud' |
  '/vrack/{serviceName}/ipLoadbalancing' |
  '/vrack/{serviceName}/ip' |
  '/vrack/{serviceName}/ip/{ip}/announceInZone';

type PathsVrackDELETE = '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}' |
  '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}' |
  '/vrack/{serviceName}/cloudProject/{project}' |
  '/vrack/{serviceName}/legacyVrack/{legacyVrack}' |
  '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}' |
  '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}' |
  '/vrack/{serviceName}/ip/{ip}';

export class ApiVrack extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the VRACK service
   * List available services
   */
  public get(path: '/vrack'): Promise<string[]>;
  /**
   * vrack
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}', params: {serviceName: string}): Promise<vrack.vrack>;
  /**
   * allowedServices operations
   * List all services allowed in this vrack
   */
  public get(path: '/vrack/{serviceName}/allowedServices', params: {serviceName: string}): Promise<vrack.AllowedServices>;
  /**
   * List the vrack.cloudProject objects
   * vrack for publicCloud project
   */
  public get(path: '/vrack/{serviceName}/cloudProject', params: {serviceName: string}): Promise<string[]>;
  /**
   * PublicCloud project in vrack
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/cloudProject/{project}', params: {serviceName: string, project: string}): Promise<vrack.cloudProject>;
  /**
   * List the vrack.dedicatedCloud objects
   * vrack dedicated cloud (VmNetwork)
   */
  public get(path: '/vrack/{serviceName}/dedicatedCloud', params: {serviceName: string}): Promise<string[]>;
  /**
   * vrack dedicated cloud interface
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}', params: {serviceName: string, dedicatedCloud: string}): Promise<vrack.dedicatedCloud>;
  /**
   * List the vrack.pccDatacenter objects
   * vrack dedicated cloud datacenter
   */
  public get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter', params: {serviceName: string}): Promise<string[]>;
  /**
   * vrack datacenter interface
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}', params: {serviceName: string, datacenter: string}): Promise<vrack.pccDatacenter>;
  /**
   * allowedVrack operations
   * Vracks allowed for your dedicatedCloud datacenter
   */
  public get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack', params: {serviceName: string, datacenter: string}): Promise<string[]>;
  /**
   * List the vrack.dedicatedConnect objects
   * vrack dedicated connect
   */
  public get(path: '/vrack/{serviceName}/dedicatedConnect', params: {serviceName: string}): Promise<string[]>;
  /**
   * vrack dedicated connect interface
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/dedicatedConnect/{name}', params: {serviceName: string, name: string}): Promise<vrack.dedicatedConnect>;
  /**
   * List the vrack.dedicatedServer objects
   * vrack for dedicated server
   */
  public get(path: '/vrack/{serviceName}/dedicatedServer', params: {serviceName: string}): Promise<string[]>;
  /**
   * vrack dedicated server interfaces
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}', params: {serviceName: string, dedicatedServer: string}): Promise<vrack.dedicatedServer>;
  /**
   * mrtg operations
   * Retrieve vrack traffic graph values
   */
  public get(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg', params: {serviceName: string, dedicatedServer: string, period: OVH.dedicated.server.MrtgPeriodEnum, type: OVH.dedicated.server.MrtgTypeEnum}): Promise<dedicated.server.MrtgTimestampValue[]>;
  /**
   * List the vrack.dedicatedServerInterface objects
   * vrack for dedicated server interface
   */
  public get(path: '/vrack/{serviceName}/dedicatedServerInterface', params: {serviceName: string}): Promise<string[]>;
  /**
   * vrack dedicated server interfaces
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}', params: {serviceName: string, dedicatedServerInterface: string}): Promise<vrack.dedicatedServerInterface>;
  /**
   * dedicatedServerInterfaceDetails operations
   * Details for all dedicated server interfaces in this vrack
   */
  public get(path: '/vrack/{serviceName}/dedicatedServerInterfaceDetails', params: {serviceName: string}): Promise<vrack.AllowedDedicatedServerInterfaces[]>;
  /**
   * List the vrack.ip objects
   * vrack for IP blocks
   */
  public get(path: '/vrack/{serviceName}/ip', params: {serviceName: string}): Promise<string[]>;
  /**
   * IP block in vrack
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/ip/{ip}', params: {serviceName: string, ip: string}): Promise<vrack.ip>;
  /**
   * availableZone operations
   * Zone available to announce your block
   */
  public get(path: '/vrack/{serviceName}/ip/{ip}/availableZone', params: {serviceName: string, ip: string}): Promise<vrack.VrackZoneEnum[]>;
  /**
   * List the vrack.iplb objects
   * vrack for ipLoadbalancing
   */
  public get(path: '/vrack/{serviceName}/ipLoadbalancing', params: {serviceName: string}): Promise<string[]>;
  /**
   * ipLoadbalancing in vrack
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}', params: {serviceName: string, ipLoadbalancing: string}): Promise<vrack.iplb>;
  /**
   * List the vrack.legacyVrack objects
   * vrack for legacy vrack
   */
  public get(path: '/vrack/{serviceName}/legacyVrack', params: {serviceName: string}): Promise<string[]>;
  /**
   * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/legacyVrack/{legacyVrack}', params: {serviceName: string, legacyVrack: string}): Promise<vrack.legacyVrack>;
  /**
   * Details about a non-expiring Service
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.NonExpiringService>;
  /**
   * List the vrack.Task objects
   * vrack tasks
   */
  public get(path: '/vrack/{serviceName}/task', params: {serviceName: string}): Promise<number[]>;
  /**
   * vrack tasks
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<vrack.Task>;
  public get(path: PathsVrackGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * vrack
   * Alter this object properties
   */
  public put(path: '/vrack/{serviceName}', params: {serviceName: string, description?: string, name?: string}): Promise<void>;
  /**
   * vrack dedicated connect interface
   * Alter this object properties
   */
  public put(path: '/vrack/{serviceName}/dedicatedConnect/{name}', params: {serviceName: string, name: string}): Promise<void>;
  public put(path: PathsVrackPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the vrack.cloudProject objects
   * add a publicCloud project to this vrack
   */
  public post(path: '/vrack/{serviceName}/cloudProject', params: {serviceName: string, project: string}): Promise<vrack.Task>;
  /**
   * List the vrack.dedicatedCloud objects
   * add a dedicatedCloud (VmNetwork) to this vrack
   */
  public post(path: '/vrack/{serviceName}/dedicatedCloud', params: {serviceName: string, dedicatedCloud: string}): Promise<vrack.Task>;
  /**
   * move operations
   * Move your dedicatedCloud datacenter from a Vrack to another
   */
  public post(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move', params: {serviceName: string, datacenter: string, targetServiceName: string}): Promise<vrack.Task>;
  /**
   * List the vrack.dedicatedServer objects
   * add a dedicated server to this vrack
   */
  public post(path: '/vrack/{serviceName}/dedicatedServer', params: {serviceName: string, dedicatedServer: string}): Promise<vrack.Task>;
  /**
   * List the vrack.dedicatedServerInterface objects
   * add a dedicated server interface to this vrack
   */
  public post(path: '/vrack/{serviceName}/dedicatedServerInterface', params: {serviceName: string, dedicatedServerInterface: string}): Promise<vrack.Task>;
  /**
   * List the vrack.ip objects
   * add an IP block to this vrack
   */
  public post(path: '/vrack/{serviceName}/ip', params: {serviceName: string, block: string}): Promise<vrack.Task>;
  /**
   * announceInZone operations
   * Announce IP to zone for vrack
   */
  public post(path: '/vrack/{serviceName}/ip/{ip}/announceInZone', params: {serviceName: string, ip: string, zone: OVH.vrack.VrackZoneEnum}): Promise<vrack.Task>;
  /**
   * List the vrack.iplb objects
   * add an ipLoadbalancing to this vrack
   */
  public post(path: '/vrack/{serviceName}/ipLoadbalancing', params: {serviceName: string, ipLoadbalancing: string}): Promise<vrack.Task>;
  /**
   * List the vrack.legacyVrack objects
   * add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX)
   */
  public post(path: '/vrack/{serviceName}/legacyVrack', params: {serviceName: string, legacyVrack: string}): Promise<vrack.Task>;
  public post(path: PathsVrackPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * PublicCloud project in vrack
   * remove this publicCloud project from this vrack
   */
  public delete(path: '/vrack/{serviceName}/cloudProject/{project}', params: {serviceName: string, project: string}): Promise<vrack.Task>;
  /**
   * vrack dedicated cloud interface
   * remove this dedicatedCloud (VmNetwork) from this vrack
   */
  public delete(path: '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}', params: {serviceName: string, dedicatedCloud: string}): Promise<vrack.Task>;
  /**
   * vrack dedicated server interfaces
   * remove this server from this vrack
   */
  public delete(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}', params: {serviceName: string, dedicatedServer: string}): Promise<vrack.Task>;
  /**
   * vrack dedicated server interfaces
   * remove this server interface from this vrack
   */
  public delete(path: '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}', params: {serviceName: string, dedicatedServerInterface: string}): Promise<vrack.Task>;
  /**
   * IP block in vrack
   * remove this IP block from this vrack
   */
  public delete(path: '/vrack/{serviceName}/ip/{ip}', params: {serviceName: string, ip: string}): Promise<vrack.Task>;
  /**
   * ipLoadbalancing in vrack
   * remove this ipLoadbalancing from this vrack
   */
  public delete(path: '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}', params: {serviceName: string, ipLoadbalancing: string}): Promise<vrack.Task>;
  /**
   * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
   * remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX)
   */
  public delete(path: '/vrack/{serviceName}/legacyVrack/{legacyVrack}', params: {serviceName: string, legacyVrack: string}): Promise<vrack.Task>;
  public delete(path: PathsVrackDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}