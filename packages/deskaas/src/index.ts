import { ApiCommon } from '@ovh-api/common';
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
 * All states a Desktop As A Service can be in
 */
export type DeskaasStateEnum = 'available' | 'delivered' | 'disabled' | 'error' | 'reserved';
/**
 * Operation on a Desktop As A Service component
 */
export interface DeskaasTask {
  /**
   * Current progress description
   *
   */
  description?: string;
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
   * Current progress
   *
   */
  progress?: Number;
  /**
   * Current Task state
   *
   */
  state?: DeskaasTaskStateEnum;
  /**
   * Task id
   *
   */
  taskId?: Number;
}
/**
 * All states a Desktop As A Service Task can be in
 */
export type DeskaasTaskStateEnum = 'canceled' | 'doing' | 'done' | 'error' | 'fixing' | 'toCancel' | 'toCreate' | 'todo' | 'unknown' | 'waitingForChilds' | 'waitingTodo';
/**
 * Desktop As A Service User
 */
export interface DeskaasUser {
  /**
   */
  activationState?: DeskaasUserActivationStateEnum;
  /**
   */
  email?: string;
  /**
   */
  name?: string;
  /**
   */
  state?: DeskaasUserStateEnum;
  /**
   */
  userId?: Number;
}
/**
 * Desktop As A Service
 */
export interface DeskaasDeskaas {
  /**
   * Alias determined by the use
   *
   */
  alias?: string;
  /**
   * Data allocated to desktop
   *
   */
  dataDisk?: ComplexTypeUnitAndValue<Number>;
  /**
   * Outgoing ip
   *
   */
  ip?: string;
  /**
   * Operating system of desktop
   *
   */
  os?: string;
  /**
   * Profile of Virtual Desktop
   *
   */
  planCode?: string;
  /**
   * RAM allocated to desktop
   *
   */
  ram?: ComplexTypeUnitAndValue<Number>;
  /**
   * Reference of Virtual Desktop
   *
   */
  reference?: string;
  /**
   * Service name of your Desktop As A Service
   *
   */
  serviceName?: string;
  /**
   * Current state of your Virtual Desktop
   *
   */
  state?: DeskaasStateEnum;
  /**
   * URL to connect to the virtualDesktop
   *
   */
  url?: string;
  /**
   * Vcpu allocated to desktop
   *
   */
  vcpu?: Number;
}
/**
 * A structure describing the current password policy for your Dedicated Cloud
 */
export interface DeskaasPasswordPolicy {
  /**
   * List of denied characters in the password
   *
   */
  deniedChars?: string[];
  /**
   * Whether or not a digit (0-9) is mandatory in the password
   *
   */
  digitMandatory?: boolean;
  /**
   * Whether or not a letter (a-z or A-Z) is mandatory in the password
   *
   */
  letterMandatory?: boolean;
  /**
   * Whether or not a lowercase letter (a-z) is mandatory in the password
   *
   */
  lowercaseLetterMandatory?: boolean;
  /**
   * Maximum lenght of the password
   *
   */
  maxLength?: Number;
  /**
   * Minimum lenght of the password
   *
   */
  minLength?: Number;
  /**
   * Whether or not a special character (\W or _) is mandatory in the password
   *
   */
  specialMandatory?: boolean;
  /**
   * Whether or not an uppercase letter (A-Z) is mandatory in the password
   *
   */
  uppercaseLetterMandatory?: boolean;
}
/**
 * All activation states a Dedicated Cloud User can have
 */
export type DeskaasUserActivationStateEnum = 'disabled' | 'disabling' | 'enabled' | 'enabling' | 'toDisable' | 'toEnable';
/**
 * All states a Dedicated Cloud User can be in
 */
export type DeskaasUserStateEnum = 'creating' | 'deleting' | 'delivered' | 'error';
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
  creation?: Date;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  expiration?: Date;
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
type PathsDeskaasGET = '/deskaas/{serviceName}/task/{taskId}' | 
'/deskaas/{serviceName}/task' | 
'/deskaas/{serviceName}/serviceInfos' | 
'/deskaas/{serviceName}/passwordPolicy' | 
'/deskaas/{serviceName}/user/task/{taskId}' | 
'/deskaas/{serviceName}/user/task' | 
'/deskaas/{serviceName}/user' | 
'/deskaas/{serviceName}' | 
'/deskaas';

type PathsDeskaasPUT = '/deskaas/{serviceName}/serviceInfos';

type PathsDeskaasPOST = '/deskaas/{serviceName}/changeAlias' | 
'/deskaas/{serviceName}/refresh' | 
'/deskaas/{serviceName}/terminate' | 
'/deskaas/{serviceName}/confirmTermination' | 
'/deskaas/{serviceName}/console' | 
'/deskaas/{serviceName}/reboot' | 
'/deskaas/{serviceName}/changeContact' | 
'/deskaas/{serviceName}/user/changePassword' | 
'/deskaas/{serviceName}/user/changeProperties' | 
'/deskaas/{serviceName}/upgrade';

export class ApiDeskaas extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operation on a Desktop As A Service component
  Get this object properties
  **/
  public get(path: '/deskaas/{serviceName}/task/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<DeskaasTask>;
  /**
  List the deskaas.Task objects
  Tasks associated with this Desktop As A Service
  **/
  public get(path: '/deskaas/{serviceName}/task', pathParams: {serviceName: string}, queryParams: {state?: DeskaasTaskStateEnum}): Promise<Number[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/deskaas/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  passwordPolicy operations
  Get the current password policy for your Desktop As A Service
  **/
  public get(path: '/deskaas/{serviceName}/passwordPolicy', pathParams: {serviceName: string}): Promise<DeskaasPasswordPolicy>;
  /**
  Operation on a Desktop As A Service component
  Get this object properties
  **/
  public get(path: '/deskaas/{serviceName}/user/task/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<DeskaasTask>;
  /**
  List the deskaas.Task objects
  Tasks associated with this User
  **/
  public get(path: '/deskaas/{serviceName}/user/task', pathParams: {serviceName: string}, queryParams: {state?: DeskaasTaskStateEnum}): Promise<Number[]>;
  /**
  Desktop As A Service User
  Get this object properties
  **/
  public get(path: '/deskaas/{serviceName}/user', pathParams: {serviceName: string}): Promise<DeskaasUser>;
  /**
  Desktop As A Service
  Get this object properties
  **/
  public get(path: '/deskaas/{serviceName}', pathParams: {serviceName: string}): Promise<DeskaasDeskaas>;
  /**
  Operations about the DESKAAS service
  List available services
  **/
  public get(path: '/deskaas'): Promise<string[]>;
  public get(path: PathsDeskaasGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/deskaas/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsDeskaasPUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  changeAlias operations
  Change the Virtual Desktop alias
  **/
  public post(path: '/deskaas/{serviceName}/changeAlias', pathParams: {serviceName: string}): Promise<DeskaasTask>;
  /**
  refresh operations
  Refresh the Operating system of the Desktop As A Service. All your personnal data are kept.
  **/
  public post(path: '/deskaas/{serviceName}/refresh', pathParams: {serviceName: string}): Promise<DeskaasTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/deskaas/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/deskaas/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  console operations
  New console access
  **/
  public post(path: '/deskaas/{serviceName}/console', pathParams: {serviceName: string}): Promise<DeskaasTask>;
  /**
  reboot operations
  Reboot the Operating system of the Cloud Desktop.
  **/
  public post(path: '/deskaas/{serviceName}/reboot', pathParams: {serviceName: string}): Promise<DeskaasTask>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/deskaas/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  changePassword operations
  Change Desktop As A Service user password
  **/
  public post(path: '/deskaas/{serviceName}/user/changePassword', pathParams: {serviceName: string}): Promise<DeskaasTask>;
  /**
  changeProperties operations
  Change Desktop As A Service user properties
  **/
  public post(path: '/deskaas/{serviceName}/user/changeProperties', pathParams: {serviceName: string}): Promise<DeskaasTask>;
  /**
  upgrade operations
  Upgrading the Desktop As A Service to another profile. The Virtual Desktop will not be available during upgrade and has to be restarted. You cannot downgrade a Virtual Desktop
  **/
  public post(path: '/deskaas/{serviceName}/upgrade', pathParams: {serviceName: string}): Promise<DeskaasTask>;
  public post(path: PathsDeskaasPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}
