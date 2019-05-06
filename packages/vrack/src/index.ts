import { ApiCommon } from '@ovh-api/common';
/**
 * ipLoadbalancing in vrack
 */
export interface VrackIplb {
  /**
   * vrack name
   *
   */
  vrack?: string;
  /**
   * Your ipLoadbalancing
   *
   */
  ipLoadbalancing?: string;
}
/**
 * vrack
 */
export interface VrackVrack {
  /**
   * yourvrackname
   *
   */
  name?: string;
  /**
   * yourvrackdescription
   *
   */
  description?: string;
}
/**
 * A structure describing the public routing option
 */
export interface VrackPublicRoutingOption {
  /**
   * Global bandwidth for blocks in your vrack (in Mbps)
   *
   */
  bandwidth?: Number;
}
/**
 * vrack dedicated server interfaces
 */
export interface VrackDedicatedServer {
  /**
   * Dedicated Server
   *
   */
  dedicatedServer?: string;
  /**
   * vrack name
   *
   */
  vrack?: string;
}
/**
 * PublicCloud project in vrack
 */
export interface VrackCloudProject {
  /**
   * publicCloud project
   *
   */
  project?: string;
  /**
   * vrack name
   *
   */
  vrack?: string;
}
/**
 * A timestamp associated to a value
 */
export interface DedicatedServerMrtgTimestampValue {
  /**
   */
  value?: ComplexTypeUnitAndValue<Number>;
  /**
   */
  timestamp?: Number;
}
/**
 * A structure given all service allowed for this vrack
 */
export interface VrackAllowedServices {
  /**
   * list of legacy vrack (1.0) allowed to be connected to vrack
   *
   */
  legacyVrack?: string[];
  /**
   * list of dedicated cloud datacenters allowed to be connected to vrack
   *
   */
  dedicatedCloudDatacenter?: string[];
  /**
   * list of dedicated cloud allowed to be connected to vrack
   *
   */
  dedicatedCloud?: string[];
  /**
   * list of dedicated servers allowed to be connected to vrack
   *
   */
  dedicatedServer?: string[];
  /**
   * list of blocks allowed to be connected to vrack
   *
   */
  ip?: string[];
  /**
   * list of dedicated connect links allowed to be connected to vrack
   *
   */
  dedicatedConnect?: string[];
  /**
   * list of dedicated server interfaces allowed to be connected to vrack
   *
   */
  dedicatedServerInterface?: VrackAllowedDedicatedServerInterfaces[];
  /**
   * list of ipLoadbalancing allowed to be connected to vrack
   *
   */
  ipLoadbalancing?: string[];
  /**
   * list of publicCloud projects allowed to be connected to vrack
   *
   */
  cloudProject?: string[];
}
/**
 * vrack (1.5) nasha server interfaces
 */
export interface VrackNasha {
  /**
   * service ip
   *
   */
  serviceIp?: string;
  /**
   * Name of Nasha zpool
   *
   */
  zpool?: string;
}
/**
 * All states a vRack Task can be in
 */
export type VrackTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'init' | 'todo';
/**
 * vrack tasks
 */
export interface VrackTask {
  /**
   */
  targetDomain?: string;
  /**
   */
  orderId?: Number;
  /**
   */
  function?: string;
  /**
   */
  lastUpdate?: Date;
  /**
   */
  todoDate?: Date;
  /**
   */
  id?: Number;
  /**
   */
  serviceName?: string;
  /**
   * Task status
   *
   */
  status?: VrackTaskStatusEnum;
}
/**
 * vrack dedicated cloud interface
 */
export interface VrackDedicatedCloud {
  /**
   * Dedicated cloud vlanId used
   *
   */
  vlanId?: Number;
  /**
   * your dedicated cloud service
   *
   */
  dedicatedCloud?: string;
  /**
   * vrack name
   *
   */
  vrack?: string;
}
/**
 * IP block in vrack
 */
export interface VrackIp {
  /**
   * Where you want your block announced on the network
   *
   */
  zone?: VrackVrackZoneEnum;
  /**
   * Your IP block
   *
   */
  ip?: string;
  /**
   * Your gateway
   *
   */
  gateway?: string;
}
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit?: string;
  /**
   */
  value?: T;
}
/**
 * distincts MRTG period
 */
export type DedicatedServerMrtgPeriodEnum = 'daily' | 'hourly' | 'monthly' | 'weekly' | 'yearly';
/**
 * Possible values for vrack zone
 */
export type VrackVrackZoneEnum = 'bhs' | 'fra1' | 'gra' | 'lon1' | 'pdx1' | 'rbx' | 'sbg' | 'sgp1' | 'syd1' | 'was1' | 'waw';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * vrack dedicated connect interface
 */
export interface VrackDedicatedConnect {
  /**
   * A name for your dedicatedConnect link
   *
   */
  name?: string;
}
/**
 * distincts MRTG type
 */
export type DedicatedServerMrtgTypeEnum = 'errors:download' | 'errors:upload' | 'packets:download' | 'packets:upload' | 'traffic:download' | 'traffic:upload';
/**
 * Details about a non-expiring Service
 */
export interface ServicesNonExpiringService {
  /**
   */
  contactBilling?: string;
  /**
   */
  contactAdmin?: string;
  /**
   */
  domain?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  serviceId?: Number;
  /**
   */
  creation?: Date;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * vrack datacenter interface
 */
export interface VrackPccDatacenter {
  /**
   * Your dedicatedCloud name
   *
   */
  dedicatedCloud?: string;
  /**
   * vrack name
   *
   */
  vrack?: string;
  /**
   * Your dedicatedCloud datacenter name
   *
   */
  datacenter?: string;
}
/**
 * A structure giving all dedicated server interfaces allowed for this vrack
 */
export interface VrackAllowedDedicatedServerInterfaces {
  /**
   * the name of dedicatedServer
   *
   */
  dedicatedServer?: string;
  /**
   * the name of dedicatedServerInterface
   *
   */
  name?: string;
  /**
   * the unique identifier of dedicatedServerInterface
   *
   */
  dedicatedServerInterface?: string;
}
/**
 * vrack dedicated server interfaces
 */
export interface VrackDedicatedServerInterface {
  /**
   * vrack name
   *
   */
  vrack?: string;
  /**
   * Dedicated Server Interface
   *
   */
  dedicatedServerInterface?: string;
}
/**
 * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
 */
export interface VrackLegacyVrack {
  /**
   * your legacy vrack service
   *
   */
  legacyVrack?: string;
  /**
   * vlan to set on legacy vrack equipments
   *
   */
  vlanId?: Number;
}
type PathsvrackGET = '/vrack' | 
'/vrack/{serviceName}/task' | 
'/vrack/{serviceName}/task/{taskId}' | 
'/vrack/{serviceName}' | 
'/vrack/{serviceName}/cloudProject' | 
'/vrack/{serviceName}/cloudProject/{project}' | 
'/vrack/{serviceName}/serviceInfos' | 
'/vrack/{serviceName}/dedicatedCloudDatacenter' | 
'/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}' | 
'/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack' | 
'/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}' | 
'/vrack/{serviceName}/ipLoadbalancing' | 
'/vrack/{serviceName}/dedicatedServerInterfaceDetails' | 
'/vrack/{serviceName}/dedicatedServer/{dedicatedServer}' | 
'/vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg' | 
'/vrack/{serviceName}/dedicatedServer' | 
'/vrack/{serviceName}/legacyVrack/{legacyVrack}' | 
'/vrack/{serviceName}/legacyVrack' | 
'/vrack/{serviceName}/ip/{ip}' | 
'/vrack/{serviceName}/ip/{ip}/availableZone' | 
'/vrack/{serviceName}/ip' | 
'/vrack/{serviceName}/allowedServices' | 
'/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}' | 
'/vrack/{serviceName}/dedicatedCloud' | 
'/vrack/{serviceName}/dedicatedConnect' | 
'/vrack/{serviceName}/dedicatedConnect/{name}' | 
'/vrack/{serviceName}/dedicatedServerInterface' | 
'/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}';

type PathsvrackPUT = '/vrack/{serviceName}' | 
'/vrack/{serviceName}/dedicatedConnect/{name}';

type PathsvrackPOST = '/vrack/{serviceName}/cloudProject' | 
'/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move' | 
'/vrack/{serviceName}/ipLoadbalancing' | 
'/vrack/{serviceName}/dedicatedServer' | 
'/vrack/{serviceName}/legacyVrack' | 
'/vrack/{serviceName}/ip/{ip}/announceInZone' | 
'/vrack/{serviceName}/ip' | 
'/vrack/{serviceName}/dedicatedCloud' | 
'/vrack/{serviceName}/dedicatedServerInterface';

type PathsvrackDELETE = '/vrack/{serviceName}/cloudProject/{project}' | 
'/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}' | 
'/vrack/{serviceName}/dedicatedServer/{dedicatedServer}' | 
'/vrack/{serviceName}/legacyVrack/{legacyVrack}' | 
'/vrack/{serviceName}/ip/{ip}' | 
'/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}' | 
'/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}';

class Apivrack extends ApiCommon {
  /**
  Operations about the VRACK service
  List available services
  **/
  public get(path: '/vrack', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List the vrack.Task objects
  vrack tasks
  **/
  public get(path: '/vrack/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  vrack tasks
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<VrackTask>;
  /**
  vrack
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<VrackVrack>;
  /**
  List the vrack.cloudProject objects
  vrack for publicCloud project
  **/
  public get(path: '/vrack/{serviceName}/cloudProject', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  PublicCloud project in vrack
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}/cloudProject/{project}', pathParams: {serviceName?: string, project?: string}, queryParams: null): Promise<VrackCloudProject>;
  /**
  Details about a non-expiring Service
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesNonExpiringService>;
  /**
  List the vrack.pccDatacenter objects
  vrack dedicated cloud datacenter
  **/
  public get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  vrack datacenter interface
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}', pathParams: {serviceName?: string, datacenter?: string}, queryParams: null): Promise<VrackPccDatacenter>;
  /**
  allowedVrack operations
  Vracks allowed for your dedicatedCloud datacenter
  **/
  public get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack', pathParams: {serviceName?: string, datacenter?: string}, queryParams: null): Promise<string[]>;
  /**
  ipLoadbalancing in vrack
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}', pathParams: {serviceName?: string, ipLoadbalancing?: string}, queryParams: null): Promise<VrackIplb>;
  /**
  List the vrack.iplb objects
  vrack for ipLoadbalancing
  **/
  public get(path: '/vrack/{serviceName}/ipLoadbalancing', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  dedicatedServerInterfaceDetails operations
  Details for all dedicated server interfaces in this vrack
  **/
  public get(path: '/vrack/{serviceName}/dedicatedServerInterfaceDetails', pathParams: {serviceName?: string}, queryParams: null): Promise<VrackAllowedDedicatedServerInterfaces[]>;
  /**
  vrack dedicated server interfaces
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}', pathParams: {serviceName?: string, dedicatedServer?: string}, queryParams: null): Promise<VrackDedicatedServer>;
  /**
  mrtg operations
  Retrieve vrack traffic graph values
  **/
  public get(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg', pathParams: {serviceName?: string, dedicatedServer?: string}, queryParams: {type?: DedicatedServerMrtgTypeEnum, period?: DedicatedServerMrtgPeriodEnum}): Promise<DedicatedServerMrtgTimestampValue[]>;
  /**
  List the vrack.dedicatedServer objects
  vrack for dedicated server
  **/
  public get(path: '/vrack/{serviceName}/dedicatedServer', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}/legacyVrack/{legacyVrack}', pathParams: {serviceName?: string, legacyVrack?: string}, queryParams: null): Promise<VrackLegacyVrack>;
  /**
  List the vrack.legacyVrack objects
  vrack for legacy vrack
  **/
  public get(path: '/vrack/{serviceName}/legacyVrack', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  IP block in vrack
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}/ip/{ip}', pathParams: {serviceName?: string, ip?: string}, queryParams: null): Promise<VrackIp>;
  /**
  availableZone operations
  Zone available to announce your block
  **/
  public get(path: '/vrack/{serviceName}/ip/{ip}/availableZone', pathParams: {serviceName?: string, ip?: string}, queryParams: null): Promise<VrackVrackZoneEnum[]>;
  /**
  List the vrack.ip objects
  vrack for IP blocks
  **/
  public get(path: '/vrack/{serviceName}/ip', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  allowedServices operations
  List all services allowed in this vrack
  **/
  public get(path: '/vrack/{serviceName}/allowedServices', pathParams: {serviceName?: string}, queryParams: null): Promise<VrackAllowedServices>;
  /**
  vrack dedicated cloud interface
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}', pathParams: {serviceName?: string, dedicatedCloud?: string}, queryParams: null): Promise<VrackDedicatedCloud>;
  /**
  List the vrack.dedicatedCloud objects
  vrack dedicated cloud (VmNetwork)
  **/
  public get(path: '/vrack/{serviceName}/dedicatedCloud', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the vrack.dedicatedConnect objects
  vrack dedicated connect
  **/
  public get(path: '/vrack/{serviceName}/dedicatedConnect', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  vrack dedicated connect interface
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}/dedicatedConnect/{name}', pathParams: {serviceName?: string, name?: string}, queryParams: null): Promise<VrackDedicatedConnect>;
  /**
  List the vrack.dedicatedServerInterface objects
  vrack for dedicated server interface
  **/
  public get(path: '/vrack/{serviceName}/dedicatedServerInterface', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  vrack dedicated server interfaces
  Get this object properties
  **/
  public get(path: '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}', pathParams: {serviceName?: string, dedicatedServerInterface?: string}, queryParams: null): Promise<VrackDedicatedServerInterface>;
  public get(path: PathsvrackGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  vrack
  Alter this object properties
  **/
  public put(path: '/vrack/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  vrack dedicated connect interface
  Alter this object properties
  **/
  public put(path: '/vrack/{serviceName}/dedicatedConnect/{name}', pathParams: {serviceName?: string, name?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsvrackPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  List the vrack.cloudProject objects
  add a publicCloud project to this vrack
  **/
  public post(path: '/vrack/{serviceName}/cloudProject', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  move operations
  Move your dedicatedCloud datacenter from a Vrack to another
  **/
  public post(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move', pathParams: {serviceName?: string, datacenter?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  List the vrack.iplb objects
  add an ipLoadbalancing to this vrack
  **/
  public post(path: '/vrack/{serviceName}/ipLoadbalancing', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  List the vrack.dedicatedServer objects
  add a dedicated server to this vrack
  **/
  public post(path: '/vrack/{serviceName}/dedicatedServer', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  List the vrack.legacyVrack objects
  add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX)
  **/
  public post(path: '/vrack/{serviceName}/legacyVrack', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  announceInZone operations
  Announce IP to zone for vrack
  **/
  public post(path: '/vrack/{serviceName}/ip/{ip}/announceInZone', pathParams: {serviceName?: string, ip?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  List the vrack.ip objects
  add an IP block to this vrack
  **/
  public post(path: '/vrack/{serviceName}/ip', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  List the vrack.dedicatedCloud objects
  add a dedicatedCloud (VmNetwork) to this vrack
  **/
  public post(path: '/vrack/{serviceName}/dedicatedCloud', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  List the vrack.dedicatedServerInterface objects
  add a dedicated server interface to this vrack
  **/
  public post(path: '/vrack/{serviceName}/dedicatedServerInterface', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  public post(path: PathsvrackPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  PublicCloud project in vrack
  remove this publicCloud project from this vrack
  **/
  public delete(path: '/vrack/{serviceName}/cloudProject/{project}', pathParams: {serviceName?: string, project?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  ipLoadbalancing in vrack
  remove this ipLoadbalancing from this vrack
  **/
  public delete(path: '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}', pathParams: {serviceName?: string, ipLoadbalancing?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  vrack dedicated server interfaces
  remove this server from this vrack
  **/
  public delete(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}', pathParams: {serviceName?: string, dedicatedServer?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
  remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX)
  **/
  public delete(path: '/vrack/{serviceName}/legacyVrack/{legacyVrack}', pathParams: {serviceName?: string, legacyVrack?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  IP block in vrack
  remove this IP block from this vrack
  **/
  public delete(path: '/vrack/{serviceName}/ip/{ip}', pathParams: {serviceName?: string, ip?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  vrack dedicated cloud interface
  remove this dedicatedCloud (VmNetwork) from this vrack
  **/
  public delete(path: '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}', pathParams: {serviceName?: string, dedicatedCloud?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  /**
  vrack dedicated server interfaces
  remove this server interface from this vrack
  **/
  public delete(path: '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}', pathParams: {serviceName?: string, dedicatedServerInterface?: string}, queryParams: null, bodyParams: null): Promise<VrackTask>;
  public delete(path: PathsvrackDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
