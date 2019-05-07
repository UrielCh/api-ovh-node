import { ApiCommon } from '@ovh-api/common';
/**
 * Network Dnat
 */
export interface RouterDnat {
  /**
   * Destination port number
   *
   */
  destinationPort?: Number;
  /**
   */
  id?: Number;
  /**
   * New destination IP
   *
   */
  newDestinationNet?: string;
  /**
   * New destination port number
   *
   */
  newDestinationPort?: Number;
  /**
   * Protocol (TCP, UDP)
   *
   */
  protocol?: RouterProtocolEnum;
  /**
   * Source IP or network
   *
   */
  sourceNet?: string;
  /**
   */
  status?: RouterStatusEnum;
}
/**
 * All states this object can be in
 */
export type RouterIpStatusEnum = 'blacklisted' | 'deleted' | 'free' | 'installing' | 'ok' | 'quarantined' | 'removing' | 'suspended';
/**
 * Network
 */
export interface RouterNetwork {
  /**
   */
  creationDate?: string;
  /**
   */
  description?: string;
  /**
   */
  id?: Number;
  /**
   * Gateway IP / CIDR Netmask
   *
   */
  ipNet?: string;
  /**
   */
  status?: RouterIpStatusEnum;
  /**
   */
  vlanTag?: Number;
}
/**
 * Action to be taken against the Private Link request
 */
export type RouterPrivLinkReqActionEnum = 'accept' | 'cancel' | 'reject';
/**
 * Request status of this private link (all links have to be accepted before being created)
 */
export type RouterPrivLinkReqStatusEnum = 'accepted' | 'cancelled' | 'error' | 'pending' | 'rejected';
/**
 * Private Link to another service
 */
export interface RouterPrivateLink {
  /**
   */
  creationDate?: string;
  /**
   */
  id?: Number;
  /**
   * Your memory-friendly name of this private link
   *
   */
  name?: string;
  /**
   * Service name of the other side of this link
   *
   */
  peerServiceName?: string;
  /**
   */
  status?: RouterStatusEnum;
}
/**
 * Received Private Link requests
 */
export interface RouterPrivateLinkRequest {
  /**
   */
  creationDate?: string;
  /**
   */
  status?: RouterPrivLinkReqStatusEnum;
}
/**
 * Outgoing routes configured inside a Private Link
 */
export interface RouterPrivateLinkRoute {
  /**
   */
  creationDate?: string;
  /**
   */
  id?: Number;
  /**
   * Network allowed to be routed outside
   *
   */
  network?: string;
  /**
   */
  status?: RouterStatusEnum;
}
/**
 * Allowed protocols
 */
export type RouterProtocolEnum = 'any' | 'tcp' | 'udp';
/**
 * Router
 */
export interface RouterRouter {
  /**
   */
  name?: string;
  /**
   * The internal name of your Router offer
   *
   */
  service?: string;
  /**
   */
  status?: RouterStatusEnum;
}
/**
 * Network Snat
 */
export interface RouterSnat {
  /**
   * Destination IP or network
   *
   */
  destinationNet?: string;
  /**
   * Destination port number
   *
   */
  destinationPort?: Number;
  /**
   */
  id?: Number;
  /**
   * New source IP
   *
   */
  newSourceNet?: string;
  /**
   * New destination port number
   *
   */
  newSourcePort?: Number;
  /**
   * Protocol (TCP, UDP)
   *
   */
  protocol?: RouterProtocolEnum;
  /**
   */
  status?: RouterStatusEnum;
}
/**
 * All states this object can be in
 */
export type RouterStatusEnum = 'creating' | 'error' | 'off' | 'on' | 'removing' | 'suspended';
/**
 * Task
 */
export interface RouterTask {
  /**
   */
  creationDate?: string;
  /**
   */
  finishDate?: string;
  /**
   */
  function?: RouterTaskFunctionEnum;
  /**
   */
  id?: Number;
  /**
   */
  status?: RouterTaskStatusEnum;
}
/**
 * All executable types of tasks
 */
export type RouterTaskFunctionEnum = 'addDnat' | 'addDnatMaster' | 'addNetwork' | 'addNetworkMaster' | 'addPrivateLink' | 'addPrivateLinkMaster' | 'addPrivateLinkRoute' | 'addPrivateLinkRouteMaster' | 'addSnat' | 'addSnatMaster' | 'delDnat' | 'delDnatMaster' | 'delNetwork' | 'delNetworkMaster' | 'delPrivateLink' | 'delPrivateLinkMaster' | 'delPrivateLinkRoute' | 'delPrivateLinkRouteMaster' | 'delSnat' | 'delSnatMaster' | 'vpnCreation' | 'vpnDeletion' | 'vpnSetConfig' | 'vpnSetConfigMaster' | 'vpnSetSecrets' | 'vpnSetSecretsMaster';
/**
 * All states a Task can be in
 */
export type RouterTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Virtual Private Network
 */
export interface RouterVpn {
  /**
   * IP you will be connecting from / NULL (allow all)
   *
   */
  clientIp?: string;
  /**
   * Client's private network
   *
   */
  clientPrivNet?: string;
  /**
   */
  id?: Number;
  /**
   * Your VPN server IP
   *
   */
  serverIp?: string;
  /**
   * Server's private network
   *
   */
  serverPrivNet?: string;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
type PathsRouterGET = '/router' | 
'/router/{serviceName}' | 
'/router/{serviceName}/network' | 
'/router/{serviceName}/network/{ipNet}' | 
'/router/{serviceName}/privateLink' | 
'/router/{serviceName}/privateLink/{peerServiceName}' | 
'/router/{serviceName}/privateLink/{peerServiceName}/request' | 
'/router/{serviceName}/privateLink/{peerServiceName}/route' | 
'/router/{serviceName}/privateLink/{peerServiceName}/route/{network}' | 
'/router/{serviceName}/serviceInfos' | 
'/router/{serviceName}/task' | 
'/router/{serviceName}/task/{id}' | 
'/router/{serviceName}/vpn' | 
'/router/{serviceName}/vpn/{id}';

type PathsRouterPUT = '/router/{serviceName}/network/{ipNet}' | 
'/router/{serviceName}/privateLink/{peerServiceName}' | 
'/router/{serviceName}/serviceInfos' | 
'/router/{serviceName}/vpn/{id}';

type PathsRouterPOST = '/router/{serviceName}/confirmTermination' | 
'/router/{serviceName}/network' | 
'/router/{serviceName}/privateLink' | 
'/router/{serviceName}/privateLink/{peerServiceName}/request/manage' | 
'/router/{serviceName}/privateLink/{peerServiceName}/route' | 
'/router/{serviceName}/terminate' | 
'/router/{serviceName}/vpn' | 
'/router/{serviceName}/vpn/{id}/setPsk';

type PathsRouterDELETE = '/router/{serviceName}/network/{ipNet}' | 
'/router/{serviceName}/privateLink/{peerServiceName}' | 
'/router/{serviceName}/privateLink/{peerServiceName}/route/{network}' | 
'/router/{serviceName}/vpn/{id}';

export class ApiRouter extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the ROUTER service
  List available services
  **/
  public get(path: '/router'): Promise<string[]>;
  /**
  Router
  Get this object properties
  **/
  public get(path: '/router/{serviceName}', pathParams: {serviceName: string}): Promise<RouterRouter>;
  /**
  List the router.Network objects
  Networks mounted on this Router
  **/
  public get(path: '/router/{serviceName}/network', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Network
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/network/{ipNet}', pathParams: {serviceName: string, ipNet: string}): Promise<RouterNetwork>;
  /**
  List the router.PrivateLink objects
  Private links set up on this router
  **/
  public get(path: '/router/{serviceName}/privateLink', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Private Link to another service
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}', pathParams: {serviceName: string, peerServiceName: string}): Promise<RouterPrivateLink>;
  /**
  Received Private Link requests
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}/request', pathParams: {serviceName: string, peerServiceName: string}): Promise<RouterPrivateLinkRequest>;
  /**
  List the router.PrivateLinkRoute objects
  Routes set up in a Private Link
  **/
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}/route', pathParams: {serviceName: string, peerServiceName: string}): Promise<string[]>;
  /**
  Outgoing routes configured inside a Private Link
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}/route/{network}', pathParams: {serviceName: string, peerServiceName: string, network: string}): Promise<RouterPrivateLinkRoute>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  List the router.Task objects
  Tasks for this Router
  **/
  public get(path: '/router/{serviceName}/task', pathParams: {serviceName: string}, queryParams?: {function?: RouterTaskFunctionEnum, status?: RouterTaskStatusEnum}): Promise<Number[]>;
  /**
  Task
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/task/{id}', pathParams: {serviceName: string, id: Number}): Promise<RouterTask>;
  /**
  List the router.Vpn objects
  VPN associated with this Router
  **/
  public get(path: '/router/{serviceName}/vpn', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Virtual Private Network
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/vpn/{id}', pathParams: {serviceName: string, id: Number}): Promise<RouterVpn>;
  public get(path: PathsRouterGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Network
  Alter this object properties
  **/
  public put(path: '/router/{serviceName}/network/{ipNet}', pathParams: {serviceName: string, ipNet: string}): Promise<void>;
  /**
  Private Link to another service
  Alter this object properties
  **/
  public put(path: '/router/{serviceName}/privateLink/{peerServiceName}', pathParams: {serviceName: string, peerServiceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/router/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Virtual Private Network
  Alter this object properties
  **/
  public put(path: '/router/{serviceName}/vpn/{id}', pathParams: {serviceName: string, id: Number}): Promise<void>;
  public put(path: PathsRouterPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/router/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  List the router.Network objects
  Add a network to your router
  **/
  public post(path: '/router/{serviceName}/network', pathParams: {serviceName: string}): Promise<RouterTask>;
  /**
  List the router.PrivateLink objects
  Add a new Private Link to your Router service
  **/
  public post(path: '/router/{serviceName}/privateLink', pathParams: {serviceName: string}): Promise<string>;
  /**
  manage operations
  Accept, reject or cancel a pending request
  **/
  public post(path: '/router/{serviceName}/privateLink/{peerServiceName}/request/manage', pathParams: {serviceName: string, peerServiceName: string}): Promise<string>;
  /**
  List the router.PrivateLinkRoute objects
  Add a new outgoing route to your router
  **/
  public post(path: '/router/{serviceName}/privateLink/{peerServiceName}/route', pathParams: {serviceName: string, peerServiceName: string}): Promise<RouterTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/router/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  /**
  List the router.Vpn objects
  Add a VPN to your router
  **/
  public post(path: '/router/{serviceName}/vpn', pathParams: {serviceName: string}): Promise<RouterVpn>;
  /**
  setPsk operations
  Change your VPN's PSK
  **/
  public post(path: '/router/{serviceName}/vpn/{id}/setPsk', pathParams: {serviceName: string, id: Number}): Promise<RouterTask>;
  public post(path: PathsRouterPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Network
  Remove this network from your router
  **/
  public delete(path: '/router/{serviceName}/network/{ipNet}', pathParams: {serviceName: string, ipNet: string}): Promise<RouterTask>;
  /**
  Private Link to another service
  Remove an existing Private Link from your Router service
  **/
  public delete(path: '/router/{serviceName}/privateLink/{peerServiceName}', pathParams: {serviceName: string, peerServiceName: string}): Promise<RouterTask>;
  /**
  Outgoing routes configured inside a Private Link
  Delete an existing route from your router
  **/
  public delete(path: '/router/{serviceName}/privateLink/{peerServiceName}/route/{network}', pathParams: {serviceName: string, peerServiceName: string, network: string}): Promise<RouterTask>;
  /**
  Virtual Private Network
  Delete a VPN from your router
  **/
  public delete(path: '/router/{serviceName}/vpn/{id}', pathParams: {serviceName: string, id: Number}): Promise<RouterTask>;
  public delete(path: PathsRouterDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
