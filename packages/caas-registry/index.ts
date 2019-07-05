import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace registry {
    //registry.image
    // fullName: registry.image.image
    export interface image {
        createdAt?: string;
        id?: string;
        name?: string;
        public?: boolean;
        status?: OVH.registry.image.status;
        updatedAt?: string;
    }
    export namespace image {
        //registry.image.status
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
    //registry.inputImage
    // fullName: registry.inputImage.inputImage
    export interface inputImage {
        public?: boolean;
    }
    //registry.inputNamespace
    // fullName: registry.inputNamespace.inputNamespace
    export interface inputNamespace {
        name?: string;
    }
    //registry.inputPermissions
    // fullName: registry.inputPermissions.inputPermissions
    export interface inputPermissions {
        canRead?: boolean;
        canWrite?: boolean;
        isAdmin?: boolean;
        status?: OVH.registry.permission.status;
        userId?: string;
    }
    //registry.inputUser
    // fullName: registry.inputUser.inputUser
    export interface inputUser {
        description?: string;
    }
    //registry.namespace
    // fullName: registry.namespace.namespace
    export interface namespace {
        createdAt?: string;
        id?: string;
        name?: string;
        status?: OVH.registry.namespace.status;
        updatedAt?: string;
    }
    export namespace namespace {
        //registry.namespace.status
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
    export namespace permission {
        //registry.permission.status
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
    //registry.permissions
    // fullName: registry.permissions.permissions
    export interface permissions {
        canRead?: boolean;
        canWrite?: boolean;
        createdAt?: string;
        id?: string;
        isAdmin?: boolean;
        status?: OVH.registry.permission.status;
        updatedAt?: string;
        userId?: string;
    }
    //registry.service
    // fullName: registry.service.service
    export interface service {
        createdAt?: string;
        endpoint?: string;
        id?: string;
        maxNamespaces?: number;
        maxUsers?: number;
        updatedAt?: string;
        zone?: string;
    }
    //registry.tag
    // fullName: registry.tag.tag
    export interface tag {
        createdAt?: string;
        id?: string;
        name?: string;
        updatedAt?: string;
    }
    //registry.user
    // fullName: registry.user.user
    export interface user {
        createdAt?: string;
        description?: boolean;
        id?: string;
        status?: OVH.registry.user.status;
        updatedAt?: string;
        username?: string;
    }
    export namespace user {
        //registry.user.status
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /caas
export interface Caas{
    registry: {
        // GET /caas/registry
        $get(): Promise<string[]>;
        [keys: string]:{
            // GET /caas/registry/{serviceName}
            $get(): Promise<registry.service>;
            changeContact: {
                // POST /caas/registry/{serviceName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            namespaces: {
                // GET /caas/registry/{serviceName}/namespaces
                $get(): Promise<string[]>;
                // POST /caas/registry/{serviceName}/namespaces
                $post(body?: {body: registry.inputNamespace}): Promise<registry.namespace>;
                [keys: string]:{
                    // DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}
                    $delete(): Promise<void>;
                    // GET /caas/registry/{serviceName}/namespaces/{namespaceId}
                    $get(): Promise<registry.namespace>;
                    images: {
                        // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images
                        $get(): Promise<string[]>;
                        [keys: string]:{
                            // DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}
                            $delete(): Promise<void>;
                            // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}
                            $get(): Promise<registry.image>;
                            // PUT /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}
                            $put(body?: {body: registry.inputImage}): Promise<registry.image>;
                            permissions: {
                                // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions
                                $get(): Promise<string[]>;
                                // POST /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions
                                $post(body?: {body: registry.inputPermissions}): Promise<registry.permissions>;
                                [keys: string]:{
                                    // DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}
                                    $delete(): Promise<void>;
                                    // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}
                                    $get(): Promise<registry.permissions>;
                                } | any
                            }
                            tags: {
                                // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags
                                $get(): Promise<string[]>;
                                [keys: string]:{
                                    // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}
                                    $get(): Promise<registry.tag>;
                                } | any
                            }
                        } | any
                    }
                    permissions: {
                        // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions
                        $get(): Promise<string[]>;
                        // POST /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions
                        $post(body?: {body: registry.inputPermissions}): Promise<registry.permissions>;
                        [keys: string]:{
                            // DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}
                            $delete(): Promise<void>;
                            // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}
                            $get(): Promise<registry.permissions>;
                        } | any
                    }
                } | any
            }
            serviceInfos: {
                // GET /caas/registry/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /caas/registry/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            users: {
                // GET /caas/registry/{serviceName}/users
                $get(): Promise<string[]>;
                // POST /caas/registry/{serviceName}/users
                $post(body?: {body: registry.inputUser}): Promise<registry.user>;
                [keys: string]:{
                    // DELETE /caas/registry/{serviceName}/users/{userId}
                    $delete(): Promise<void>;
                    // GET /caas/registry/{serviceName}/users/{userId}
                    $get(): Promise<registry.user>;
                    changePassword: {
                        // POST /caas/registry/{serviceName}/users/{userId}/changePassword
                        $post(): Promise<registry.user>;
                    }
                } | any
            }
        } | any
    }
}
// Api
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

export class ApiCaasRegistry extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the DOCKER service
   * List available services
   */
  public get(path: '/caas/registry'): Promise<string[]>;
  /**
   * Missing description
   * Inspect service.
   */
  public get(path: '/caas/registry/{serviceName}', params: {serviceName: string}): Promise<registry.service>;
  /**
   * Missing description
   * List namespace
   */
  public get(path: '/caas/registry/{serviceName}/namespaces', params: {serviceName: string}): Promise<string[]>;
  /**
   * Missing description
   * Inspect namespace
   */
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}', params: {namespaceId: string, serviceName: string}): Promise<registry.namespace>;
  /**
   * Missing description
   * List all images in namespace
   */
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images', params: {namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
   * Missing description
   * Inspect image
   */
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', params: {imageId: string, namespaceId: string, serviceName: string}): Promise<registry.image>;
  /**
   * Missing description
   * List image permissions
   */
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions', params: {imageId: string, namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
   * Missing description
   * Inspect image permissions
   */
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}', params: {imageId: string, namespaceId: string, permissionId: string, serviceName: string}): Promise<registry.permissions>;
  /**
   * Missing description
   * List image tags
   */
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags', params: {imageId: string, namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
   * Missing description
   * Inspect image tag
   */
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}', params: {imageId: string, namespaceId: string, serviceName: string, tagId: string}): Promise<registry.tag>;
  /**
   * Missing description
   * List namespace permissions
   */
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions', params: {namespaceId: string, serviceName: string}): Promise<string[]>;
  /**
   * Missing description
   * Inspect permission
   */
  public get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}', params: {namespaceId: string, permissionId: string, serviceName: string}): Promise<registry.permissions>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/caas/registry/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Missing description
   * List users
   */
  public get(path: '/caas/registry/{serviceName}/users', params: {serviceName: string}): Promise<string[]>;
  /**
   * Missing description
   * Inspect user
   */
  public get(path: '/caas/registry/{serviceName}/users/{userId}', params: {serviceName: string, userId: string}): Promise<registry.user>;
  public get(path: PathsCaasRegistryGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Missing description
   * Update image
   */
  public put(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', params: {imageId: string, namespaceId: string, serviceName: string, public?: boolean}): Promise<registry.image>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/caas/registry/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsCaasRegistryPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/caas/registry/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Missing description
   * Create namespace
   */
  public post(path: '/caas/registry/{serviceName}/namespaces', params: {serviceName: string, name?: string}): Promise<registry.namespace>;
  /**
   * Missing description
   * Create image permissions
   */
  public post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions', params: {imageId: string, namespaceId: string, serviceName: string, canRead?: boolean, canWrite?: boolean, isAdmin?: boolean, status?: OVH.registry.permission.status, userId?: string}): Promise<registry.permissions>;
  /**
   * Missing description
   * Create namespace permissions
   */
  public post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions', params: {namespaceId: string, serviceName: string, canRead?: boolean, canWrite?: boolean, isAdmin?: boolean, status?: OVH.registry.permission.status, userId?: string}): Promise<registry.permissions>;
  /**
   * Missing description
   * Create user
   */
  public post(path: '/caas/registry/{serviceName}/users', params: {serviceName: string, description?: string}): Promise<registry.user>;
  /**
   * Missing description
   * Update user password
   */
  public post(path: '/caas/registry/{serviceName}/users/{userId}/changePassword', params: {serviceName: string, userId: string}): Promise<registry.user>;
  public post(path: PathsCaasRegistryPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Missing description
   * Delete namespace
   */
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}', params: {namespaceId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete image
   */
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}', params: {imageId: string, namespaceId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete image permissions.
   */
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}', params: {imageId: string, namespaceId: string, permissionId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete namespace permissions
   */
  public delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}', params: {namespaceId: string, permissionId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete user
   */
  public delete(path: '/caas/registry/{serviceName}/users/{userId}', params: {serviceName: string, userId: string}): Promise<void>;
  public delete(path: PathsCaasRegistryDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}