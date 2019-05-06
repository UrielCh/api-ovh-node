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
  updatedAt?: Date;
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
  createdAt?: Date;
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
  updatedAt?: Date;
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
  createdAt?: Date;
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
  updatedAt?: Date;
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
  createdAt?: Date;
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
  maxNamespaces?: Number;
  /**
   * Maximal number of registered users in the service
   *
   */
  maxUsers?: Number;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
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
  createdAt?: Date;
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
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
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
type PathsCaasregistryGET = '/caas/registry' | 
'/caas/registry/{serviceName}/users' | 
'/caas/registry/{serviceName}/users/{userId}' | 
'/caas/registry/{serviceName}/serviceInfos' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}' | 
'/caas/registry/{serviceName}/namespaces' | 
'/caas/registry/{serviceName}';

type PathsCaasregistryPUT = '/caas/registry/{serviceName}/serviceInfos' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}';

type PathsCaasregistryPOST = '/caas/registry/{serviceName}/changeContact' | 
'/caas/registry/{serviceName}/users' | 
'/caas/registry/{serviceName}/users/{userId}/changePassword' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions' | 
'/caas/registry/{serviceName}/namespaces';

type PathsCaasregistryDELETE = '/caas/registry/{serviceName}/users/{userId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}' | 
'/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}';

export class ApiCaasregistry extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the DOCKER service
  List available services
  **/
  public get(path: '/caas/registry'): Promise<string[]>;
  /**
  Missing description
  List users
  **/
  public get(path: '/caas/registry/{serviceName}/users', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect user
  **/
  public get(path: '/caas/registry/{serviceName}/users/{userId}', pathParams: {serviceName: string, userId: string}): Promise<RegistryUser>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/caas/registry/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Missing description
  Inspect namespace
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}', pathParams: {namespaceId: string, serviceName: string}): Promise<RegistryNamespace>;
  /**
  Missing description
  List all images in namespace
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images', pathParams: {namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
  Missing description
  List image tags
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags', pathParams: {imageId: string, namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect image tag
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}', pathParams: {imageId: string, namespaceId: string, serviceName: string, tagId: string}): Promise<RegistryTag>;
  /**
  Missing description
  Inspect image
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', pathParams: {imageId: string, namespaceId: string, serviceName: string}): Promise<RegistryImage>;
  /**
  Missing description
  Inspect image permissions
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}', pathParams: {imageId: string, namespaceId: string, permissionId: string, serviceName: string}): Promise<RegistryPermissions>;
  /**
  Missing description
  List image permissions
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions', pathParams: {imageId: string, namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
  Missing description
  List namespace permissions
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions', pathParams: {namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect permission
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}', pathParams: {namespaceId: string, permissionId: string, serviceName: string}): Promise<RegistryPermissions>;
  /**
  Missing description
  List namespace
  **/
  public get(path: '/caas/registry/{serviceName}/namespaces', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect service.
  **/
  public get(path: '/caas/registry/{serviceName}', pathParams: {serviceName: string}): Promise<RegistryService>;
  public get(path: PathsCaasregistryGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/caas/registry/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Missing description
  Update image
  **/
  public put(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', pathParams: {imageId: string, namespaceId: string, serviceName: string}): Promise<RegistryImage>;
  public put(path: PathsCaasregistryPUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/caas/registry/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Missing description
  Create user
  **/
  public post(path: '/caas/registry/{serviceName}/users', pathParams: {serviceName: string}): Promise<RegistryUser>;
  /**
  Missing description
  Update user password
  **/
  public post(path: '/caas/registry/{serviceName}/users/{userId}/changePassword', pathParams: {serviceName: string, userId: string}): Promise<RegistryUser>;
  /**
  Missing description
  Create image permissions
  **/
  public post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions', pathParams: {imageId: string, namespaceId: string, serviceName: string}): Promise<RegistryPermissions>;
  /**
  Missing description
  Create namespace permissions
  **/
  public post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions', pathParams: {namespaceId: string, serviceName: string}): Promise<RegistryPermissions>;
  /**
  Missing description
  Create namespace
  **/
  public post(path: '/caas/registry/{serviceName}/namespaces', pathParams: {serviceName: string}): Promise<RegistryNamespace>;
  public post(path: PathsCaasregistryPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Missing description
  Delete user
  **/
  public delete(path: '/caas/registry/{serviceName}/users/{userId}', pathParams: {serviceName: string, userId: string}): Promise<void>;
  /**
  Missing description
  Delete namespace
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}', pathParams: {namespaceId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete image
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', pathParams: {imageId: string, namespaceId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete image permissions.
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}', pathParams: {imageId: string, namespaceId: string, permissionId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete namespace permissions
  **/
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}', pathParams: {namespaceId: string, permissionId: string, serviceName: string}): Promise<void>;
  public delete(path: PathsCaasregistryDELETE, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
