import { ApiCommon } from '@ovh-api/common';
/**
 * An image stored in a namespace
 */
export interface RegistryImage {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: Date;
  /**
   * Whether is image is public or private
   *
   */
  public?: boolean;
  /**
   * The image name
   *
   */
  name?: string;
  /**
   * The image id
   *
   */
  id?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
  /**
   * The status of the image
   *
   */
  status?: RegistryImageStatus;
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
   * User Id
   *
   */
  userId?: string;
  /**
   * The status of the permission
   *
   */
  status?: RegistryPermissionStatus;
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
  createdAt?: Date;
  /**
   * The namespace name
   *
   */
  name?: string;
  /**
   * The namespace id
   *
   */
  id?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
  /**
   * The status of the namespace
   *
   */
  status?: RegistryNamespaceStatus;
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
   * Date of the resource creation
   *
   */
  createdAt?: Date;
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
   * User Id
   *
   */
  userId?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
  /**
   * The status of the permission
   *
   */
  status?: RegistryPermissionStatus;
}
/**
 * The client subscription to the registry service
 */
export interface RegistryService {
  /**
   * Maximal number of registered users in the service
   *
   */
  maxUsers?: Number;
  /**
   * Date of the resource creation
   *
   */
  createdAt?: Date;
  /**
   * The endpoint used for docker login
   *
   */
  endpoint?: string;
  /**
   * The name of the geographical zone the service is located in
   *
   */
  zone?: string;
  /**
   * Maximal number of registered namespaces in the service
   *
   */
  maxNamespaces?: Number;
  /**
   * The service id
   *
   */
  id?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
}
/**
 * An image tag
 */
export interface RegistryTag {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: Date;
  /**
   * The tag name
   *
   */
  name?: string;
  /**
   * The tag id
   *
   */
  id?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
}
/**
 * A registry user account
 */
export interface RegistryUser {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: Date;
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
   * The user name
   *
   */
  username?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
type PathscaasregistryGET = '/caas/registry/{serviceName}/serviceInfos' | 
'/caas/registry/{serviceName}' | 
'/caas/registry/{serviceName}/users/{userId}' | 
'/caas/registry/{serviceName}/users' | 
'/caas/registry/{serviceName}/namespaces' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions' | 
'/caas/registry';

type PathscaasregistryPUT = '/caas/registry/{serviceName}/serviceInfos' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}';

type PathscaasregistryPOST = '/caas/registry/{serviceName}/changeContact' | 
'/caas/registry/{serviceName}/users/{userId}/changePassword' | 
'/caas/registry/{serviceName}/users' | 
'/caas/registry/{serviceName}/namespaces' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions';

type PathscaasregistryDELETE = '/caas/registry/{serviceName}/users/{userId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}';

class Apicaasregistry extends ApiCommon {
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/caas/registry/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Missing description
  Inspect service.
  **/
  public get(path: '/caas/registry/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<RegistryService>;
  /**
  Missing description
  Inspect user
  **/
  public get(path: '/caas/registry/{serviceName}/users/{userId}', pathParams: {serviceName?: string, userId?: string}, queryParams: null): Promise<RegistryUser>;
  /**
  Missing description
  List users
  **/
  public get(path: '/caas/registry/{serviceName}/users', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Missing description
  List namespace
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Missing description
  Inspect namespace
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}', pathParams: {namespaceId?: string, serviceName?: string}, queryParams: null): Promise<RegistryNamespace>;
  /**
  Missing description
  Inspect image tag
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}', pathParams: {imageId?: string, namespaceId?: string, serviceName?: string, tagId?: string}, queryParams: null): Promise<RegistryTag>;
  /**
  Missing description
  List image tags
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags', pathParams: {imageId?: string, namespaceId?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Missing description
  Inspect image
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', pathParams: {imageId?: string, namespaceId?: string, serviceName?: string}, queryParams: null): Promise<RegistryImage>;
  /**
  Missing description
  Inspect image permissions
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}', pathParams: {imageId?: string, namespaceId?: string, permissionId?: string, serviceName?: string}, queryParams: null): Promise<RegistryPermissions>;
  /**
  Missing description
  List image permissions
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions', pathParams: {imageId?: string, namespaceId?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Missing description
  List all images in namespace
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images', pathParams: {namespaceId?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Missing description
  Inspect permission
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}', pathParams: {namespaceId?: string, permissionId?: string, serviceName?: string}, queryParams: null): Promise<RegistryPermissions>;
  /**
  Missing description
  List namespace permissions
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions', pathParams: {namespaceId?: string, serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Operations about the DOCKER service
  List available services
  **/
  public get(path: '/caas/registry', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathscaasregistryGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/caas/registry/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Missing description
  Update image
  **/
  public put(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', pathParams: {imageId?: string, namespaceId?: string, serviceName?: string}, bodyParams: null): Promise<RegistryImage>;
  public put(path: PathscaasregistryPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/caas/registry/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  Missing description
  Update user password
  **/
  public post(path: '/caas/registry/{serviceName}/users/{userId}/changePassword', pathParams: {serviceName?: string, userId?: string}, bodyParams: null): Promise<RegistryUser>;
  /**
  Missing description
  Create user
  **/
  public post(path: '/caas/registry/{serviceName}/users', pathParams: {serviceName?: string}, bodyParams: null): Promise<RegistryUser>;
  /**
  Missing description
  Create namespace
  **/
  public post(path: '/caas/registry/{serviceName}/namespaces', pathParams: {serviceName?: string}, bodyParams: null): Promise<RegistryNamespace>;
  /**
  Missing description
  Create image permissions
  **/
  public post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions', pathParams: {imageId?: string, namespaceId?: string, serviceName?: string}, bodyParams: null): Promise<RegistryPermissions>;
  /**
  Missing description
  Create namespace permissions
  **/
  public post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions', pathParams: {namespaceId?: string, serviceName?: string}, bodyParams: null): Promise<RegistryPermissions>;
  public post(path: PathscaasregistryPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Missing description
  Delete user
  **/
  public delete(path: '/caas/registry/{serviceName}/users/{userId}', pathParams: {serviceName?: string, userId?: string}, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete namespace
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}', pathParams: {namespaceId?: string, serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete image
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', pathParams: {imageId?: string, namespaceId?: string, serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete image permissions.
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}', pathParams: {imageId?: string, namespaceId?: string, permissionId?: string, serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete namespace permissions
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}', pathParams: {namespaceId?: string, permissionId?: string, serviceName?: string}, bodyParams: null): Promise<void>;
  public delete(path: PathscaasregistryDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
