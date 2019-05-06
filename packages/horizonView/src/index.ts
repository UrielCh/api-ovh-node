import { ApiCommon } from '@ovh-api/common';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Horizon View as a Service
 */
export interface HorizonViewDedicatedHorizon {
  /**
   * View Storage Accelerator for Vcenter
   *
   */
  storageAccelerator?: boolean;
  /**
   * The location of your datacenter
   *
   */
  privateCloudZone?: HorizonViewZone;
  /**
   * Url of your Dedicated Horizon
   *
   */
  publicUrl?: string;
  /**
   * The location of your administration servers in our datacenter
   *
   */
  masterZone?: HorizonViewZone;
  /**
   * Current state of your Dedicated Horizon
   *
   */
  state?: HorizonViewStateEnum;
  /**
   * Your Horizon Private Cloud
   *
   */
  privateCloudName?: string;
  /**
   * Version of your Dedicated Horizon
   *
   */
  version?: string;
}
/**
 * All zones a Cloud Desktop Infrastructure can be in
 */
export type HorizonViewZone = 'Beauharnois' | 'Roubaix' | 'Strasbourg';
/**
 * Operation on a Horizon View component
 */
export interface HorizonViewTask {
  /**
   * Task last modification date
   *
   */
  lastModificationDate?: Date;
  /**
   * Task name
   *
   */
  name?: string;
  /**
   * Current progress description
   *
   */
  description?: string;
  /**
   * Current progress
   *
   */
  progress?: Number;
  /**
   * Current Task state
   *
   */
  state?: HorizonViewTaskStateEnum;
  /**
   * Task id
   *
   */
  taskId?: Number;
}
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * All states a dedicated horizon  can be in
 */
export type HorizonViewStateEnum = 'available' | 'creating' | 'delivered' | 'disabled' | 'error' | 'reserved';
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
}
/**
 * Cloud Desktop Infrastructure Datacenter
 */
export interface HorizonViewDatacenter {
  /**
   * Customer interco vlan allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.
   *
   */
  customerIntercoVlanId?: Number;
  /**
   * Customer interco IP allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.
   *
   */
  customerIntercoIP?: string;
  /**
   * Datacenter ids
   *
   */
  datacenterId?: Number;
  /**
   * Name of the datacenter
   *
   */
  name?: string;
  /**
   * Private network of the admin infrastructure
   *
   */
  adminPrivateNetwork?: string;
  /**
   * Next hop to contact the private admin network
   *
   */
  adminNetworkNextHop?: string;
  /**
   * Domain of your Horizon
   *
   */
  serviceName?: string;
  /**
   * Customer interco netmask allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.
   *
   */
  customerIntercoMask?: string;
  /**
   * IP of the VDI Active Directory
   *
   */
  activeDirectoryIP?: string;
  /**
   * Domain of the admin infrastructure
   *
   */
  adminDomain?: string;
}
/**
 * List all Active Directories linked to your CDI Active Directory
 */
export interface HorizonViewDomainTrust {
  /**
   * IP of your second DNS
   *
   */
  dns2?: string;
  /**
   * Name of your private domain
   *
   */
  domain?: string;
  /**
   * IP of your first DNS
   *
   */
  dns1?: string;
  /**
   * Domain trust id
   *
   */
  domainTrustId?: Number;
  /**
   * IP of your Active Directory
   *
   */
  activeDirectoryIP?: string;
}
/**
 * You can reach from your virtual desktops, your customer network 
 */
export interface HorizonViewCustomerNetworkPool {
  /**
   * Name of your network
   *
   */
  name?: string;
  /**
   * Customer Network id
   *
   */
  customerNetworkId?: Number;
  /**
   * Customer network
   *
   */
  network?: string;
}
/**
 * Horizon As A Service User
 */
export interface HorizonViewUser {
  /**
   * Username of your HaaS User
   *
   */
  username?: string;
}
/**
 * Pool type the customer can deploy
 */
export type HorizonViewPoolType = 'hybridPool' | 'privatePool' | 'publicPool';
/**
 * All states a Horizon View  Task can be in
 */
export type HorizonViewTaskStateEnum = 'canceled' | 'doing' | 'done' | 'error' | 'fixing' | 'toCancel' | 'toCreate' | 'todo' | 'unknown' | 'waitingForChilds' | 'waitingTodo';
/**
 * You can reach from your virtual desktops, your customer network 
 */
export interface HorizonViewCustomerNetwork {
  /**
   * Customer Network id
   *
   */
  customerNetworkId?: Number;
  /**
   * Name of your network
   *
   */
  name?: string;
  /**
   * Customer network
   *
   */
  network?: string;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Horizon As A Service Customer  User
 */
export interface HorizonViewCustomerUser {
  /**
   * Customer id
   *
   */
  id?: Number;
  /**
   * Email of your HaaS User
   *
   */
  email?: string;
  /**
   * Customer username of your HaaS User
   *
   */
  username?: string;
}
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  contactBilling?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  contactAdmin?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   */
  domain?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  expiration?: Date;
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  serviceId?: Number;
  /**
   */
  creation?: Date;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * Access Point type the customer can deploy
 */
export type HorizonViewAccessPointTypeEnum = 'privateAccessPoint' | 'publicAccessPoint';
/**
 * All informations about access point
 */
export interface HorizonViewPool {
  /**
   * External url of your access point
   *
   */
  externalUrl?: string;
  /**
   * Next hop IP to reach virtual desktops network for public Access Point
   *
   */
  intercoNextHop?: string;
  /**
   * DHCP netmask in this port group
   *
   */
  dhcpNetmask?: string;
  /**
   * Port group id
   *
   */
  portGroupId?: string;
  /**
   * Pool id
   *
   */
  accessPointId?: Number;
  /**
   * Network state
   *
   */
  state?: HorizonViewStateEnum;
  /**
   * Pool type
   *
   */
  type?: HorizonViewPoolType;
  /**
   * DHCP network in this port group
   *
   */
  dhcpNetwork?: string;
  /**
   * Next hop IP to reach virtual desktops network for private Access Point
   *
   */
  intercoPrivateNextHop?: string;
  /**
   * Two factor authentication
   *
   */
  twoFA?: boolean;
}
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
type PathshorizonViewGET = '/horizonView/{serviceName}/dedicatedHorizon/user' | 
'/horizonView/{serviceName}/dedicatedHorizon' | 
'/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}' | 
'/horizonView/{serviceName}/dedicatedHorizon/task' | 
'/horizonView/{serviceName}/dedicatedHorizon/customerUser' | 
'/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}' | 
'/horizonView/{serviceName}/serviceInfos' | 
'/horizonView/{serviceName}' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}' | 
'/horizonView/{serviceName}/accessPoint' | 
'/horizonView/{serviceName}/customerNetwork' | 
'/horizonView/{serviceName}/customerNetwork/{customerNetworkId}' | 
'/horizonView/{serviceName}/domainTrust' | 
'/horizonView/{serviceName}/domainTrust/{domainTrustId}' | 
'/horizonView';

type PathshorizonViewPUT = '/horizonView/{serviceName}/serviceInfos';

type PathshorizonViewPOST = '/horizonView/{serviceName}/dedicatedHorizon/user/changeProperties' | 
'/horizonView/{serviceName}/dedicatedHorizon/user/changePassword' | 
'/horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator' | 
'/horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator' | 
'/horizonView/{serviceName}/dedicatedHorizon/customerUser' | 
'/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword' | 
'/horizonView/{serviceName}/confirmTermination' | 
'/horizonView/{serviceName}/terminate' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA' | 
'/horizonView/{serviceName}/accessPoint' | 
'/horizonView/{serviceName}/customerNetwork' | 
'/horizonView/{serviceName}/domainTrust' | 
'/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer' | 
'/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController' | 
'/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain' | 
'/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust';

type PathshorizonViewDELETE = '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}' | 
'/horizonView/{serviceName}/customerNetwork/{customerNetworkId}';

class ApihorizonView extends ApiCommon {
  /**
  Horizon As A Service User
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/user', pathParams: {serviceName?: string}, queryParams: null): Promise<HorizonViewUser>;
  /**
  Horizon View as a Service
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon', pathParams: {serviceName?: string}, queryParams: null): Promise<HorizonViewDedicatedHorizon>;
  /**
  Operation on a Horizon View component
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<HorizonViewTask>;
  /**
  List the horizonView.Task objects
  Tasks associated with this Dedicated Horizon
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/task', pathParams: {serviceName?: string}, queryParams: {state?: HorizonViewTaskStateEnum}): Promise<Number[]>;
  /**
  List the horizonView.CustomerUser objects
  Account to access to your pool
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Horizon As A Service Customer  User
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}', pathParams: {serviceName?: string, username?: string}, queryParams: null): Promise<HorizonViewCustomerUser>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Cloud Desktop Infrastructure Datacenter
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<HorizonViewDatacenter>;
  /**
  You can reach from your virtual desktops, your customer network 
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}', pathParams: {serviceName?: string, accessPointId?: Number, customerNetworkId?: Number}, queryParams: null): Promise<HorizonViewCustomerNetworkPool>;
  /**
  List the horizonView.CustomerNetworkPool objects
  You can reach from the Desktops your private network
  **/
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork', pathParams: {serviceName?: string, accessPointId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  All informations about access point
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}', pathParams: {serviceName?: string, accessPointId?: Number}, queryParams: null): Promise<HorizonViewPool>;
  /**
  List the horizonView.Pool objects
  Pool associated with this Datacenter
  **/
  public get(path: '/horizonView/{serviceName}/accessPoint', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the horizonView.CustomerNetwork objects
  You can reach from the Desktops your private network
  **/
  public get(path: '/horizonView/{serviceName}/customerNetwork', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  You can reach from your virtual desktops, your customer network 
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}', pathParams: {serviceName?: string, customerNetworkId?: Number}, queryParams: null): Promise<HorizonViewCustomerNetwork>;
  /**
  List the horizonView.DomainTrust objects
  List all Active Directories linked to your CDI Active Directory
  **/
  public get(path: '/horizonView/{serviceName}/domainTrust', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List all Active Directories linked to your CDI Active Directory
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}', pathParams: {serviceName?: string, domainTrustId?: Number}, queryParams: null): Promise<HorizonViewDomainTrust>;
  /**
  Operations about the HORIZONVIEW service
  List available services
  **/
  public get(path: '/horizonView', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathshorizonViewGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/horizonView/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathshorizonViewPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  changeProperties operations
  Change horizon view user properties
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/user/changeProperties', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  changePassword operations
  Change Horizon View user password
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/user/changePassword', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  enableStorageAccelerator operations
  Enable the View Storage Accelerator option on VCenter
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  disableStorageAccelerator operations
  Disable the View Storage Accelerator option on VCenter
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  List the horizonView.CustomerUser objects
  Create a new customer user 
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HorizonViewTask[]>;
  /**
  changePassword operations
  Change Horizon View Customer  user password
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword', pathParams: {serviceName?: string, username?: string}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/horizonView/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/horizonView/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  changeSessionTimeout operations
  Manage your session Timeout on Unified Access Gateway
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout', pathParams: {serviceName?: string, accessPointId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  enableTwoFA operations
  Enable two factor authentication on your pool
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA', pathParams: {serviceName?: string, accessPointId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  List the horizonView.CustomerNetworkPool objects
  Add a new network 
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork', pathParams: {serviceName?: string, accessPointId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask[]>;
  /**
  enableWindowsUsernameOption operations
  Enable windows Username option on Unified Access Gateway
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption', pathParams: {serviceName?: string, accessPointId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  disableWindowsUsernameOption operations
  Disable windows Username option on Unified Access Gateway
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption', pathParams: {serviceName?: string, accessPointId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  disableTwoFA operations
  Disable two factor authentication on your pool
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA', pathParams: {serviceName?: string, accessPointId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  List the horizonView.Pool objects
  Add new access point to create a new network
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HorizonViewTask[]>;
  /**
  List the horizonView.CustomerNetwork objects
  Add a new network 
  **/
  public post(path: '/horizonView/{serviceName}/customerNetwork', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HorizonViewTask[]>;
  /**
  List the horizonView.DomainTrust objects
  Link your Active Directory to your CDI Active Directory
  **/
  public post(path: '/horizonView/{serviceName}/domainTrust', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<HorizonViewTask[]>;
  /**
  addDomainUserOnComposer operations
  Add a domain user to add your desktop in your Active Directory
  **/
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer', pathParams: {serviceName?: string, domainTrustId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  addDomainController operations
  Add a Domain Controller for this domain.
  **/
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController', pathParams: {serviceName?: string, domainTrustId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  addChildDomain operations
  Add a child domain for this domain.
  **/
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain', pathParams: {serviceName?: string, domainTrustId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  /**
  createTrust operations
  Change Horizon View user password
  **/
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust', pathParams: {serviceName?: string, domainTrustId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask>;
  public post(path: PathshorizonViewPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Horizon As A Service Customer  User
  Delete this Customer User
  **/
  public delete(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}', pathParams: {serviceName?: string, username?: string}, queryParams: null, bodyParams: null): Promise<HorizonViewTask[]>;
  /**
  You can reach from your virtual desktops, your customer network 
  Delete this Customer Network
  **/
  public delete(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}', pathParams: {serviceName?: string, accessPointId?: Number, customerNetworkId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask[]>;
  /**
  All informations about access point
  Delete this access point 
  **/
  public delete(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}', pathParams: {serviceName?: string, accessPointId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask[]>;
  /**
  You can reach from your virtual desktops, your customer network 
  Delete this Customer Network
  **/
  public delete(path: '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}', pathParams: {serviceName?: string, customerNetworkId?: Number}, queryParams: null, bodyParams: null): Promise<HorizonViewTask[]>;
  public delete(path: PathshorizonViewDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
