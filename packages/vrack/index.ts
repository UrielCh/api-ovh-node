import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit: string;
  /**
   */
  value: T;
}
/**
 * distincts MRTG period
 */
export type DedicatedServerMrtgPeriodEnum = 'daily' | 'hourly' | 'monthly' | 'weekly' | 'yearly';
/**
 * A timestamp associated to a value
 */
export interface DedicatedServerMrtgTimestampValue {
  /**
   */
  timestamp: number;
  /**
   */
  value?: ComplexTypeUnitAndValue<number>;
}
/**
 * distincts MRTG type
 */
export type DedicatedServerMrtgTypeEnum = 'errors:download' | 'errors:upload' | 'packets:download' | 'packets:upload' | 'traffic:download' | 'traffic:upload';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Details about a non-expiring Service
 */
export interface ServicesNonExpiringService {
  /**
   */
  contactAdmin: string;
  /**
   */
  contactBilling: string;
  /**
   */
  contactTech: string;
  /**
   */
  creation: string;
  /**
   */
  domain: string;
  /**
   */
  serviceId: number;
  /**
   */
  status: ServiceStateEnum;
}
/**
 * A structure giving all dedicated server interfaces allowed for this vrack
 */
export interface VrackAllowedDedicatedServerInterfaces {
  /**
   * the name of dedicatedServer
   *
   */
  dedicatedServer: string;
  /**
   * the unique identifier of dedicatedServerInterface
   *
   */
  dedicatedServerInterface: string;
  /**
   * the name of dedicatedServerInterface
   *
   */
  name: string;
}
/**
 * A structure given all service allowed for this vrack
 */
export interface VrackAllowedServices {
  /**
   * list of publicCloud projects allowed to be connected to vrack
   *
   */
  cloudProject?: string[];
  /**
   * list of dedicated cloud allowed to be connected to vrack
   *
   */
  dedicatedCloud?: string[];
  /**
   * list of dedicated cloud datacenters allowed to be connected to vrack
   *
   */
  dedicatedCloudDatacenter?: string[];
  /**
   * list of dedicated connect links allowed to be connected to vrack
   *
   */
  dedicatedConnect?: string[];
  /**
   * list of dedicated servers allowed to be connected to vrack
   *
   */
  dedicatedServer?: string[];
  /**
   * list of dedicated server interfaces allowed to be connected to vrack
   *
   */
  dedicatedServerInterface?: VrackAllowedDedicatedServerInterfaces[];
  /**
   * list of blocks allowed to be connected to vrack
   *
   */
  ip?: string[];
  /**
   * list of ipLoadbalancing allowed to be connected to vrack
   *
   */
  ipLoadbalancing?: string[];
  /**
   * list of legacy vrack (1.0) allowed to be connected to vrack
   *
   */
  legacyVrack?: string[];
}
/**
 * vrack tasks
 */
export interface VrackTask {
  /**
   */
  function: string;
  /**
   */
  id: number;
  /**
   */
  lastUpdate?: string;
  /**
   */
  orderId?: number;
  /**
   */
  serviceName?: string;
  /**
   * Task status
   *
   */
  status: VrackTaskStatusEnum;
  /**
   */
  targetDomain?: string;
  /**
   */
  todoDate?: string;
}
/**
 * All states a vRack Task can be in
 */
export type VrackTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'init' | 'todo';
/**
 * Possible values for vrack zone
 */
export type VrackVrackZoneEnum = 'bhs' | 'fra1' | 'gra' | 'lon1' | 'pdx1' | 'rbx' | 'sbg' | 'sgp1' | 'syd1' | 'was1' | 'waw';
/**
 * PublicCloud project in vrack
 */
export interface VrackCloudProject {
  /**
   * publicCloud project
   *
   */
  project: string;
  /**
   * vrack name
   *
   */
  vrack: string;
}
/**
 * vrack dedicated cloud interface
 */
export interface VrackDedicatedCloud {
  /**
   * your dedicated cloud service
   *
   */
  dedicatedCloud: string;
  /**
   * Dedicated cloud vlanId used
   *
   */
  vlanId?: number;
  /**
   * vrack name
   *
   */
  vrack: string;
}
/**
 * vrack dedicated connect interface
 */
export interface VrackDedicatedConnect {
  /**
   * A name for your dedicatedConnect link
   *
   */
  name: string;
}
/**
 * vrack dedicated server interfaces
 */
export interface VrackDedicatedServer {
  /**
   * Dedicated Server
   *
   */
  dedicatedServer: string;
  /**
   * vrack name
   *
   */
  vrack: string;
}
/**
 * vrack dedicated server interfaces
 */
export interface VrackDedicatedServerInterface {
  /**
   * Dedicated Server Interface
   *
   */
  dedicatedServerInterface: string;
  /**
   * vrack name
   *
   */
  vrack: string;
}
/**
 * IP block in vrack
 */
export interface VrackIp {
  /**
   * Your gateway
   *
   */
  gateway?: string;
  /**
   * Your IP block
   *
   */
  ip: string;
  /**
   * Where you want your block announced on the network
   *
   */
  zone?: VrackVrackZoneEnum;
}
/**
 * ipLoadbalancing in vrack
 */
export interface VrackIplb {
  /**
   * Your ipLoadbalancing
   *
   */
  ipLoadbalancing: string;
  /**
   * vrack name
   *
   */
  vrack: string;
}
/**
 * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
 */
export interface VrackLegacyVrack {
  /**
   * your legacy vrack service
   *
   */
  legacyVrack: string;
  /**
   * vlan to set on legacy vrack equipments
   *
   */
  vlanId: number;
}
/**
 * vrack (1.5) nasha server interfaces
 */
export interface VrackNasha {
  /**
   * service ip
   *
   */
  serviceIp: string;
  /**
   * Name of Nasha zpool
   *
   */
  zpool: string;
}
/**
 * vrack datacenter interface
 */
export interface VrackPccDatacenter {
  /**
   * Your dedicatedCloud datacenter name
   *
   */
  datacenter: string;
  /**
   * Your dedicatedCloud name
   *
   */
  dedicatedCloud: string;
  /**
   * vrack name
   *
   */
  vrack: string;
}
/**
 * A structure describing the public routing option
 */
export interface VrackPublicRoutingOption {
  /**
   * Global bandwidth for blocks in your vrack (in Mbps)
   *
   */
  bandwidth?: number;
}
/**
 * vrack
 */
export interface VrackVrack {
  /**
   * yourvrackdescription
   *
   */
  description: string;
  /**
   * yourvrackname
   *
   */
  name: string;
}
type PathsVrackGET = '/vrack' | 
'/vrack/{serviceName}' | 
'/vrack/{serviceName}/allowedServices' | 
'/vrack/{serviceName}/cloudProject' | 
'/vrack/{serviceName}/cloudProject/{project}' | 
'/vrack/{serviceName}/dedicatedCloud' | 
'/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}' | 
'/vrack/{serviceName}/dedicatedCloudDatacenter' | 
'/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}' | 
'/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack' | 
'/vrack/{serviceName}/dedicatedConnect' | 
'/vrack/{serviceName}/dedicatedConnect/{name}' | 
'/vrack/{serviceName}/dedicatedServer' | 
'/vrack/{serviceName}/dedicatedServer/{dedicatedServer}' | 
'/vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg' | 
'/vrack/{serviceName}/dedicatedServerInterface' | 
'/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}' | 
'/vrack/{serviceName}/dedicatedServerInterfaceDetails' | 
'/vrack/{serviceName}/ip' | 
'/vrack/{serviceName}/ip/{ip}' | 
'/vrack/{serviceName}/ip/{ip}/availableZone' | 
'/vrack/{serviceName}/ipLoadbalancing' | 
'/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}' | 
'/vrack/{serviceName}/legacyVrack' | 
'/vrack/{serviceName}/legacyVrack/{legacyVrack}' | 
'/vrack/{serviceName}/serviceInfos' | 
'/vrack/{serviceName}/task' | 
'/vrack/{serviceName}/task/{taskId}';

type PathsVrackPUT = '/vrack/{serviceName}' | 
'/vrack/{serviceName}/dedicatedConnect/{name}';

type PathsVrackPOST = '/vrack/{serviceName}/cloudProject' | 
'/vrack/{serviceName}/dedicatedCloud' | 
'/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move' | 
'/vrack/{serviceName}/dedicatedServer' | 
'/vrack/{serviceName}/dedicatedServerInterface' | 
'/vrack/{serviceName}/ip' | 
'/vrack/{serviceName}/ip/{ip}/announceInZone' | 
'/vrack/{serviceName}/ipLoadbalancing' | 
'/vrack/{serviceName}/legacyVrack';

type PathsVrackDELETE = '/vrack/{serviceName}/cloudProject/{project}' | 
'/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}' | 
'/vrack/{serviceName}/dedicatedServer/{dedicatedServer}' | 
'/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}' | 
'/vrack/{serviceName}/ip/{ip}' | 
'/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}' | 
'/vrack/{serviceName}/legacyVrack/{legacyVrack}';

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
  public get(path: '/vrack/{serviceName}', params: {serviceName: string}): Promise<VrackVrack>;
  /**
   * allowedServices operations
   * List all services allowed in this vrack
   */
  public get(path: '/vrack/{serviceName}/allowedServices', params: {serviceName: string}): Promise<VrackAllowedServices>;
  /**
   * List the vrack.cloudProject objects
   * vrack for publicCloud project
   */
  public get(path: '/vrack/{serviceName}/cloudProject', params: {serviceName: string}): Promise<string[]>;
  /**
   * PublicCloud project in vrack
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/cloudProject/{project}', params: {serviceName: string, project: string}): Promise<VrackCloudProject>;
  /**
   * List the vrack.dedicatedCloud objects
   * vrack dedicated cloud (VmNetwork)
   */
  public get(path: '/vrack/{serviceName}/dedicatedCloud', params: {serviceName: string}): Promise<string[]>;
  /**
   * vrack dedicated cloud interface
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}', params: {serviceName: string, dedicatedCloud: string}): Promise<VrackDedicatedCloud>;
  /**
   * List the vrack.pccDatacenter objects
   * vrack dedicated cloud datacenter
   */
  public get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter', params: {serviceName: string}): Promise<string[]>;
  /**
   * vrack datacenter interface
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}', params: {serviceName: string, datacenter: string}): Promise<VrackPccDatacenter>;
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
  public get(path: '/vrack/{serviceName}/dedicatedConnect/{name}', params: {serviceName: string, name: string}): Promise<VrackDedicatedConnect>;
  /**
   * List the vrack.dedicatedServer objects
   * vrack for dedicated server
   */
  public get(path: '/vrack/{serviceName}/dedicatedServer', params: {serviceName: string}): Promise<string[]>;
  /**
   * vrack dedicated server interfaces
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}', params: {serviceName: string, dedicatedServer: string}): Promise<VrackDedicatedServer>;
  /**
   * mrtg operations
   * Retrieve vrack traffic graph values
   */
  public get(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg', params: {serviceName: string, dedicatedServer: string, period: DedicatedServerMrtgPeriodEnum, type: DedicatedServerMrtgTypeEnum}): Promise<DedicatedServerMrtgTimestampValue[]>;
  /**
   * List the vrack.dedicatedServerInterface objects
   * vrack for dedicated server interface
   */
  public get(path: '/vrack/{serviceName}/dedicatedServerInterface', params: {serviceName: string}): Promise<string[]>;
  /**
   * vrack dedicated server interfaces
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}', params: {serviceName: string, dedicatedServerInterface: string}): Promise<VrackDedicatedServerInterface>;
  /**
   * dedicatedServerInterfaceDetails operations
   * Details for all dedicated server interfaces in this vrack
   */
  public get(path: '/vrack/{serviceName}/dedicatedServerInterfaceDetails', params: {serviceName: string}): Promise<VrackAllowedDedicatedServerInterfaces[]>;
  /**
   * List the vrack.ip objects
   * vrack for IP blocks
   */
  public get(path: '/vrack/{serviceName}/ip', params: {serviceName: string}): Promise<string[]>;
  /**
   * IP block in vrack
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/ip/{ip}', params: {serviceName: string, ip: string}): Promise<VrackIp>;
  /**
   * availableZone operations
   * Zone available to announce your block
   */
  public get(path: '/vrack/{serviceName}/ip/{ip}/availableZone', params: {serviceName: string, ip: string}): Promise<VrackVrackZoneEnum[]>;
  /**
   * List the vrack.iplb objects
   * vrack for ipLoadbalancing
   */
  public get(path: '/vrack/{serviceName}/ipLoadbalancing', params: {serviceName: string}): Promise<string[]>;
  /**
   * ipLoadbalancing in vrack
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}', params: {serviceName: string, ipLoadbalancing: string}): Promise<VrackIplb>;
  /**
   * List the vrack.legacyVrack objects
   * vrack for legacy vrack
   */
  public get(path: '/vrack/{serviceName}/legacyVrack', params: {serviceName: string}): Promise<string[]>;
  /**
   * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/legacyVrack/{legacyVrack}', params: {serviceName: string, legacyVrack: string}): Promise<VrackLegacyVrack>;
  /**
   * Details about a non-expiring Service
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesNonExpiringService>;
  /**
   * List the vrack.Task objects
   * vrack tasks
   */
  public get(path: '/vrack/{serviceName}/task', params: {serviceName: string}): Promise<number[]>;
  /**
   * vrack tasks
   * Get this object properties
   */
  public get(path: '/vrack/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: number}): Promise<VrackTask>;
  public get(path: PathsVrackGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params
  );}
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
    return super.put(path, params
  );}
  /**
   * List the vrack.cloudProject objects
   * add a publicCloud project to this vrack
   */
  public post(path: '/vrack/{serviceName}/cloudProject', params: {serviceName: string, project: string}): Promise<VrackTask>;
  /**
   * List the vrack.dedicatedCloud objects
   * add a dedicatedCloud (VmNetwork) to this vrack
   */
  public post(path: '/vrack/{serviceName}/dedicatedCloud', params: {serviceName: string, dedicatedCloud: string}): Promise<VrackTask>;
  /**
   * move operations
   * Move your dedicatedCloud datacenter from a Vrack to another
   */
  public post(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move', params: {serviceName: string, datacenter: string, targetServiceName: string}): Promise<VrackTask>;
  /**
   * List the vrack.dedicatedServer objects
   * add a dedicated server to this vrack
   */
  public post(path: '/vrack/{serviceName}/dedicatedServer', params: {serviceName: string, dedicatedServer: string}): Promise<VrackTask>;
  /**
   * List the vrack.dedicatedServerInterface objects
   * add a dedicated server interface to this vrack
   */
  public post(path: '/vrack/{serviceName}/dedicatedServerInterface', params: {serviceName: string, dedicatedServerInterface: string}): Promise<VrackTask>;
  /**
   * List the vrack.ip objects
   * add an IP block to this vrack
   */
  public post(path: '/vrack/{serviceName}/ip', params: {serviceName: string, block: string}): Promise<VrackTask>;
  /**
   * announceInZone operations
   * Announce IP to zone for vrack
   */
  public post(path: '/vrack/{serviceName}/ip/{ip}/announceInZone', params: {serviceName: string, ip: string, zone: VrackVrackZoneEnum}): Promise<VrackTask>;
  /**
   * List the vrack.iplb objects
   * add an ipLoadbalancing to this vrack
   */
  public post(path: '/vrack/{serviceName}/ipLoadbalancing', params: {serviceName: string, ipLoadbalancing: string}): Promise<VrackTask>;
  /**
   * List the vrack.legacyVrack objects
   * add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX)
   */
  public post(path: '/vrack/{serviceName}/legacyVrack', params: {serviceName: string, legacyVrack: string}): Promise<VrackTask>;
  public post(path: PathsVrackPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params
  );}
  /**
   * PublicCloud project in vrack
   * remove this publicCloud project from this vrack
   */
  public delete(path: '/vrack/{serviceName}/cloudProject/{project}', params: {serviceName: string, project: string}): Promise<VrackTask>;
  /**
   * vrack dedicated cloud interface
   * remove this dedicatedCloud (VmNetwork) from this vrack
   */
  public delete(path: '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}', params: {serviceName: string, dedicatedCloud: string}): Promise<VrackTask>;
  /**
   * vrack dedicated server interfaces
   * remove this server from this vrack
   */
  public delete(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}', params: {serviceName: string, dedicatedServer: string}): Promise<VrackTask>;
  /**
   * vrack dedicated server interfaces
   * remove this server interface from this vrack
   */
  public delete(path: '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}', params: {serviceName: string, dedicatedServerInterface: string}): Promise<VrackTask>;
  /**
   * IP block in vrack
   * remove this IP block from this vrack
   */
  public delete(path: '/vrack/{serviceName}/ip/{ip}', params: {serviceName: string, ip: string}): Promise<VrackTask>;
  /**
   * ipLoadbalancing in vrack
   * remove this ipLoadbalancing from this vrack
   */
  public delete(path: '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}', params: {serviceName: string, ipLoadbalancing: string}): Promise<VrackTask>;
  /**
   * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
   * remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX)
   */
  public delete(path: '/vrack/{serviceName}/legacyVrack/{legacyVrack}', params: {serviceName: string, legacyVrack: string}): Promise<VrackTask>;
  public delete(path: PathsVrackDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiVrack;
