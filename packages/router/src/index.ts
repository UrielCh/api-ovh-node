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
   * Protocol (TCP, UDP)
   *
   */
  protocol?: RouterProtocolEnum;
  /**
   * Source IP or network
   *
   */
  sourceNet?: ipInterface;
  /**
   * New destination IP
   *
   */
  newDestinationNet?: ipInterface;
  /**
   * New destination port number
   *
   */
  newDestinationPort?: Number;
  /**
   */
  id?: Number;
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
  vlanTag?: Number;
  /**
   */
  description?: string;
  /**
   */
  id?: Number;
  /**
   */
  creationDate?: Date;
  /**
   * Gateway IP / CIDR Netmask
   *
   */
  ipNet?: ipInterface;
  /**
   */
  status?: RouterIpStatusEnum;
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
   * Your memory-friendly name of this private link
   *
   */
  name?: string;
  /**
   */
  id?: Number;
  /**
   * Service name of the other side of this link
   *
   */
  peerServiceName?: string;
  /**
   */
  creationDate?: Date;
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
  creationDate?: Date;
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
  id?: Number;
  /**
   */
  creationDate?: Date;
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
   * The internal name of your Router offer
   *
   */
  service?: string;
  /**
   */
  name?: string;
  /**
   */
  status?: RouterStatusEnum;
}
/**
 * Network Snat
 */
export interface RouterSnat {
  /**
   * Destination port number
   *
   */
  destinationPort?: Number;
  /**
   * Protocol (TCP, UDP)
   *
   */
  protocol?: RouterProtocolEnum;
  /**
   * Destination IP or network
   *
   */
  destinationNet?: ipInterface;
  /**
   * New source IP
   *
   */
  newSourceNet?: ipInterface;
  /**
   */
  id?: Number;
  /**
   * New destination port number
   *
   */
  newSourcePort?: Number;
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
  function?: RouterTaskFunctionEnum;
  /**
   */
  finishDate?: Date;
  /**
   */
  id?: Number;
  /**
   */
  creationDate?: Date;
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
   * Server's private network
   *
   */
  serverPrivNet?: ipInterface;
  /**
   * Your VPN server IP
   *
   */
  serverIp?: string;
  /**
   */
  id?: Number;
  /**
   * Client's private network
   *
   */
  clientPrivNet?: ipInterface;
}
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
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  contactBilling?: string;
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
type PathsrouterGET = '/router/{serviceName}/privateLink/{peerServiceName}' | 
'/router/{serviceName}/privateLink/{peerServiceName}/route/{network}' | 
'/router/{serviceName}/privateLink/{peerServiceName}/route' | 
'/router/{serviceName}/privateLink/{peerServiceName}/request' | 
'/router/{serviceName}/privateLink' | 
'/router/{serviceName}/network/{ipNet}' | 
'/router/{serviceName}/network' | 
'/router/{serviceName}/task' | 
'/router/{serviceName}/task/{id}' | 
'/router/{serviceName}/serviceInfos' | 
'/router/{serviceName}/vpn/{id}' | 
'/router/{serviceName}/vpn' | 
'/router/{serviceName}' | 
'/router';

type PathsrouterPUT = '/router/{serviceName}/privateLink/{peerServiceName}' | 
'/router/{serviceName}/network/{ipNet}' | 
'/router/{serviceName}/serviceInfos' | 
'/router/{serviceName}/vpn/{id}';

type PathsrouterPOST = '/router/{serviceName}/confirmTermination' | 
'/router/{serviceName}/privateLink/{peerServiceName}/route' | 
'/router/{serviceName}/privateLink/{peerServiceName}/request/manage' | 
'/router/{serviceName}/privateLink' | 
'/router/{serviceName}/terminate' | 
'/router/{serviceName}/network' | 
'/router/{serviceName}/vpn/{id}/setPsk' | 
'/router/{serviceName}/vpn';

type PathsrouterDELETE = '/router/{serviceName}/privateLink/{peerServiceName}' | 
'/router/{serviceName}/privateLink/{peerServiceName}/route/{network}' | 
'/router/{serviceName}/network/{ipNet}' | 
'/router/{serviceName}/vpn/{id}';

class Apirouter extends ApiCommon {
  /**
  Private Link to another service
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}', pathParams: {serviceName?: string, peerServiceName?: string}, queryParams: null): Promise<RouterPrivateLink>;
  /**
  Outgoing routes configured inside a Private Link
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}/route/{network}', pathParams: {serviceName?: string, peerServiceName?: string, network?: string}, queryParams: null): Promise<RouterPrivateLinkRoute>;
  /**
  List the router.PrivateLinkRoute objects
  Routes set up in a Private Link
  **/
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}/route', pathParams: {serviceName?: string, peerServiceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Received Private Link requests
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/privateLink/{peerServiceName}/request', pathParams: {serviceName?: string, peerServiceName?: string}, queryParams: null): Promise<RouterPrivateLinkRequest>;
  /**
  List the router.PrivateLink objects
  Private links set up on this router
  **/
  public get(path: '/router/{serviceName}/privateLink', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Network
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/network/{ipNet}', pathParams: {serviceName?: string, ipNet?: ipInterface}, queryParams: null): Promise<RouterNetwork>;
  /**
  List the router.Network objects
  Networks mounted on this Router
  **/
  public get(path: '/router/{serviceName}/network', pathParams: {serviceName?: string}, queryParams: null): Promise<ipInterface[]>;
  /**
  List the router.Task objects
  Tasks for this Router
  **/
  public get(path: '/router/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {status?: RouterTaskStatusEnum, function?: RouterTaskFunctionEnum}): Promise<Number[]>;
  /**
  Task
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/task/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<RouterTask>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Virtual Private Network
  Get this object properties
  **/
  public get(path: '/router/{serviceName}/vpn/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<RouterVpn>;
  /**
  List the router.Vpn objects
  VPN associated with this Router
  **/
  public get(path: '/router/{serviceName}/vpn', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Router
  Get this object properties
  **/
  public get(path: '/router/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<RouterRouter>;
  /**
  Operations about the ROUTER service
  List available services
  **/
  public get(path: '/router', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathsrouterGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Private Link to another service
  Alter this object properties
  **/
  public put(path: '/router/{serviceName}/privateLink/{peerServiceName}', pathParams: {serviceName?: string, peerServiceName?: string}, bodyParams: null): Promise<void>;
  /**
  Network
  Alter this object properties
  **/
  public put(path: '/router/{serviceName}/network/{ipNet}', pathParams: {serviceName?: string, ipNet?: ipInterface}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/router/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Virtual Private Network
  Alter this object properties
  **/
  public put(path: '/router/{serviceName}/vpn/{id}', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  public put(path: PathsrouterPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/router/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  List the router.PrivateLinkRoute objects
  Add a new outgoing route to your router
  **/
  public post(path: '/router/{serviceName}/privateLink/{peerServiceName}/route', pathParams: {serviceName?: string, peerServiceName?: string}, bodyParams: null): Promise<RouterTask>;
  /**
  manage operations
  Accept, reject or cancel a pending request
  **/
  public post(path: '/router/{serviceName}/privateLink/{peerServiceName}/request/manage', pathParams: {serviceName?: string, peerServiceName?: string}, bodyParams: null): Promise<string>;
  /**
  List the router.PrivateLink objects
  Add a new Private Link to your Router service
  **/
  public post(path: '/router/{serviceName}/privateLink', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/router/{serviceName}/terminate', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  List the router.Network objects
  Add a network to your router
  **/
  public post(path: '/router/{serviceName}/network', pathParams: {serviceName?: string}, bodyParams: null): Promise<RouterTask>;
  /**
  setPsk operations
  Change your VPN's PSK
  **/
  public post(path: '/router/{serviceName}/vpn/{id}/setPsk', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<RouterTask>;
  /**
  List the router.Vpn objects
  Add a VPN to your router
  **/
  public post(path: '/router/{serviceName}/vpn', pathParams: {serviceName?: string}, bodyParams: null): Promise<RouterVpn>;
  public post(path: PathsrouterPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Private Link to another service
  Remove an existing Private Link from your Router service
  **/
  public delete(path: '/router/{serviceName}/privateLink/{peerServiceName}', pathParams: {serviceName?: string, peerServiceName?: string}, bodyParams: null): Promise<RouterTask>;
  /**
  Outgoing routes configured inside a Private Link
  Delete an existing route from your router
  **/
  public delete(path: '/router/{serviceName}/privateLink/{peerServiceName}/route/{network}', pathParams: {serviceName?: string, peerServiceName?: string, network?: string}, bodyParams: null): Promise<RouterTask>;
  /**
  Network
  Remove this network from your router
  **/
  public delete(path: '/router/{serviceName}/network/{ipNet}', pathParams: {serviceName?: string, ipNet?: ipInterface}, bodyParams: null): Promise<RouterTask>;
  /**
  Virtual Private Network
  Delete a VPN from your router
  **/
  public delete(path: '/router/{serviceName}/vpn/{id}', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<RouterTask>;
  public delete(path: PathsrouterDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
