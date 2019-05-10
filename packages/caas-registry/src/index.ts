import { ApiCommon, OvhApi, OvhParamType } from '@ovh-api/common';
/**
 * An image stored in a namespace
 */
export interface RegistryImage {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: string;
  /**
   * The image id
   *
   */
  id?: string;
  /**
   * The image name
   *
   */
  name?: string;
  /**
   * Whether is image is public or private
   *
   */
  public?: boolean;
  /**
   * The status of the image
   *
   */
  status?: RegistryImageStatus;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: string;
}
/**
 * The status of the image
 */
export type RegistryImageStatus = 'DELETING' | 'DEPLOYING' | 'ERROR' | 'OK';
/**
 * A container image
 */
export interface RegistryInputImage {
  /**
   * image is public
   *
   */
  public?: boolean;
}
/**
 * A namespace in which a user can either read, write or delete images
 */
export interface RegistryInputNamespace {
  /**
   * The namespace name
   *
   */
  name?: string;
}
/**
 * Permissions of a user over a namespace
 */
export interface RegistryInputPermissions {
  /**
   * Whether a user can read images on the namespace
   *
   */
  canRead?: boolean;
  /**
   * Whether a user can create images on the namespace
   *
   */
  canWrite?: boolean;
  /**
   * Whether a user can delete images on the namespace
   *
   */
  isAdmin?: boolean;
  /**
   * The status of the permission
   *
   */
  status?: RegistryPermissionStatus;
  /**
   * User Id
   *
   */
  userId?: string;
}
/**
 * A registry user account
 */
export interface RegistryInputUser {
  /**
   * A general description of the user account
   *
   */
  description?: string;
}
/**
 * A namespace in which a user can either read, write or delete images
 */
export interface RegistryNamespace {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: string;
  /**
   * The namespace id
   *
   */
  id?: string;
  /**
   * The namespace name
   *
   */
  name?: string;
  /**
   * The status of the namespace
   *
   */
  status?: RegistryNamespaceStatus;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: string;
}
/**
 * The status of the namespace
 */
export type RegistryNamespaceStatus = 'DELETING' | 'DEPLOYING' | 'ERROR' | 'OK';
/**
 * The status of the permission
 */
export type RegistryPermissionStatus = 'DELETING' | 'DEPLOYING' | 'ERROR' | 'OK';
/**
 * Permissions of a user over a namespace
 */
export interface RegistryPermissions {
  /**
   * Whether a user can read images on the namespace
   *
   */
  canRead?: boolean;
  /**
   * Whether a user can create images on the namespace
   *
   */
  canWrite?: boolean;
  /**
   * Date of the resource creation
   *
   */
  createdAt?: string;
  /**
   * Permission Id
   *
   */
  id?: string;
  /**
   * Whether a user can delete images on the namespace
   *
   */
  isAdmin?: boolean;
  /**
   * The status of the permission
   *
   */
  status?: RegistryPermissionStatus;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: string;
  /**
   * User Id
   *
   */
  userId?: string;
}
/**
 * The client subscription to the registry service
 */
export interface RegistryService {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: string;
  /**
   * The endpoint used for docker login
   *
   */
  endpoint?: string;
  /**
   * The service id
   *
   */
  id?: string;
  /**
   * Maximal number of registered namespaces in the service
   *
   */
  maxNamespaces?: number;
  /**
   * Maximal number of registered users in the service
   *
   */
  maxUsers?: number;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: string;
  /**
   * The name of the geographical zone the service is located in
   *
   */
  zone?: string;
}
/**
 * An image tag
 */
export interface RegistryTag {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: string;
  /**
   * The tag id
   *
   */
  id?: string;
  /**
   * The tag name
   *
   */
  name?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: string;
}
/**
 * A registry user account
 */
export interface RegistryUser {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: string;
  /**
   * A general description of the user account
   *
   */
  description?: boolean;
  /**
   * The user id
   *
   */
  id?: string;
  /**
   * The status of the user
   *
   */
  status?: RegistryUserStatus;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: string;
  /**
   * The user name
   *
   */
  username?: string;
}
/**
 * The status of the user
 */
export type RegistryUserStatus = 'DELETING' | 'DEPLOYING' | 'ERROR' | 'OK';
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
  period?: number;
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
  possibleRenewPeriod?: number[];
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
  serviceId?: number;
  /**
   */
  status?: ServiceStateEnum;
}
type PathsCaasRegistryGET = '/caas/registry' | 
'/caas/registry/{serviceName}' | 
'/caas/registry/{serviceName}/namespaces' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}' | 
'/caas/registry/{serviceName}/serviceInfos' | 
'/caas/registry/{serviceName}/users' | 
'/caas/registry/{serviceName}/users/{userId}';

type PathsCaasRegistryPUT = '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}' | 
'/caas/registry/{serviceName}/serviceInfos';

type PathsCaasRegistryPOST = '/caas/registry/{serviceName}/changeContact' | 
'/caas/registry/{serviceName}/namespaces' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions' | 
'/caas/registry/{serviceName}/users' | 
'/caas/registry/{serviceName}/users/{userId}/changePassword';

type PathsCaasRegistryDELETE = '/caas/registry/{serviceName}/namespaces/{namespaceId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}' | 
'/caas/registry/{serviceName}/users/{userId}';

export class ApiCaasRegistry extends ApiCommon {
  constructor(engine: OvhApi) {
    super(engine);
  }
  /**
  Operations about the DOCKER service
  List available services
  **/
  public get(path: '/caas/registry'): Promise<string[]>;
  /**
  Missing description
  Inspect service.
  **/
  public get(path: '/caas/registry/{serviceName}', params: {serviceName: string}): Promise<RegistryService>;
  /**
  Missing description
  List namespace
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces', params: {serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect namespace
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}', params: {namespaceId: string, serviceName: string}): Promise<RegistryNamespace>;
  /**
  Missing description
  List all images in namespace
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images', params: {namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect image
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', params: {imageId: string, namespaceId: string, serviceName: string}): Promise<RegistryImage>;
  /**
  Missing description
  List image permissions
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions', params: {imageId: string, namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect image permissions
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}', params: {imageId: string, namespaceId: string, permissionId: string, serviceName: string}): Promise<RegistryPermissions>;
  /**
  Missing description
  List image tags
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags', params: {imageId: string, namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect image tag
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}', params: {imageId: string, namespaceId: string, serviceName: string, tagId: string}): Promise<RegistryTag>;
  /**
  Missing description
  List namespace permissions
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions', params: {namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect permission
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}', params: {namespaceId: string, permissionId: string, serviceName: string}): Promise<RegistryPermissions>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/caas/registry/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  Missing description
  List users
  **/
  public get(path: '/caas/registry/{serviceName}/users', params: {serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect user
  **/
  public get(path: '/caas/registry/{serviceName}/users/{userId}', params: {serviceName: string, userId: string}): Promise<RegistryUser>;
  public get(path: PathsCaasRegistryGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Missing description
  Update image
  **/
  public put(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', params: {imageId: string, namespaceId: string, serviceName: string}): Promise<RegistryImage>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/caas/registry/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsCaasRegistryPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/caas/registry/{serviceName}/changeContact', params: {serviceName: string}): Promise<number[]>;
  /**
  Missing description
  Create namespace
  **/
  public post(path: '/caas/registry/{serviceName}/namespaces', params: {serviceName: string}): Promise<RegistryNamespace>;
  /**
  Missing description
  Create image permissions
  **/
  public post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions', params: {imageId: string, namespaceId: string, serviceName: string}): Promise<RegistryPermissions>;
  /**
  Missing description
  Create namespace permissions
  **/
  public post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions', params: {namespaceId: string, serviceName: string}): Promise<RegistryPermissions>;
  /**
  Missing description
  Create user
  **/
  public post(path: '/caas/registry/{serviceName}/users', params: {serviceName: string}): Promise<RegistryUser>;
  /**
  Missing description
  Update user password
  **/
  public post(path: '/caas/registry/{serviceName}/users/{userId}/changePassword', params: {serviceName: string, userId: string}): Promise<RegistryUser>;
  public post(path: PathsCaasRegistryPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Missing description
  Delete namespace
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}', params: {namespaceId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete image
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', params: {imageId: string, namespaceId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete image permissions.
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}', params: {imageId: string, namespaceId: string, permissionId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete namespace permissions
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}', params: {namespaceId: string, permissionId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete user
  **/
  public delete(path: '/caas/registry/{serviceName}/users/{userId}', params: {serviceName: string, userId: string}): Promise<void>;
  public delete(path: PathsCaasRegistryDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
