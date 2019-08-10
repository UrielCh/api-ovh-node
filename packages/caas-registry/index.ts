import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /caas/registry Models
 */
export namespace registry {
    // interface fullName: registry.image.image
    export interface image {
        createdAt: string;
        id: string;
        name: string;
        public: boolean;
        status: registry.image.status;
        updatedAt: string;
    }
    export namespace image {
        // type fullname: registry.image.status
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
    // interface fullName: registry.inputImage.inputImage
    export interface inputImage {
        public: boolean;
    }
    // interface fullName: registry.inputNamespace.inputNamespace
    export interface inputNamespace {
        name: string;
    }
    // interface fullName: registry.inputPermissions.inputPermissions
    export interface inputPermissions {
        canRead: boolean;
        canWrite: boolean;
        isAdmin: boolean;
        status: registry.permission.status;
        userId: string;
    }
    // interface fullName: registry.inputUser.inputUser
    export interface inputUser {
        description: string;
    }
    // interface fullName: registry.namespace.namespace
    export interface namespace {
        createdAt: string;
        id: string;
        name: string;
        status: registry.namespace.status;
        updatedAt: string;
    }
    export namespace namespace {
        // type fullname: registry.namespace.status
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
    export namespace permission {
        // type fullname: registry.permission.status
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
    // interface fullName: registry.permissions.permissions
    export interface permissions {
        canRead: boolean;
        canWrite: boolean;
        createdAt: string;
        id: string;
        isAdmin: boolean;
        status: registry.permission.status;
        updatedAt: string;
        userId: string;
    }
    // interface fullName: registry.service.service
    export interface service {
        createdAt: string;
        endpoint: string;
        id: string;
        maxNamespaces: number;
        maxUsers: number;
        updatedAt: string;
        zone: string;
    }
    // interface fullName: registry.tag.tag
    export interface tag {
        createdAt: string;
        id: string;
        name: string;
        updatedAt: string;
    }
    // interface fullName: registry.user.user
    export interface user {
        createdAt: string;
        description: boolean;
        id: string;
        status: registry.user.status;
        updatedAt: string;
        username: string;
    }
    export namespace user {
        // type fullname: registry.user.status
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
}
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    // interface fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}

/**
 * END API /caas/registry Models
 */
export function proxyCaasRegistry(ovhEngine: OvhRequestable): Caas {
    return buildOvhProxy(ovhEngine, '/caas');
}
export default proxyCaasRegistry;
/**
 * Api Proxy model
 */// Apis harmony
// path /caas
export interface Caas{
    registry: {
        // GET /caas/registry
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /caas/registry/{serviceName}
            $get(): Promise<registry.service>;
            changeContact: {
                // POST /caas/registry/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            namespaces: {
                // GET /caas/registry/{serviceName}/namespaces
                $get(): Promise<string[]>;
                // POST /caas/registry/{serviceName}/namespaces
                $post(params?: {name?: string}): Promise<registry.namespace>;
                $(namespaceId: string): {
                    // DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}
                    $delete(): Promise<void>;
                    // GET /caas/registry/{serviceName}/namespaces/{namespaceId}
                    $get(): Promise<registry.namespace>;
                    images: {
                        // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images
                        $get(): Promise<string[]>;
                        $(imageId: string): {
                            // DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}
                            $delete(): Promise<void>;
                            // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}
                            $get(): Promise<registry.image>;
                            // PUT /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}
                            $put(params?: {public?: boolean}): Promise<registry.image>;
                            permissions: {
                                // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions
                                $get(): Promise<string[]>;
                                // POST /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions
                                $post(params?: {canRead?: boolean, canWrite?: boolean, isAdmin?: boolean, status?: registry.permission.status, userId?: string}): Promise<registry.permissions>;
                                $(permissionId: string): {
                                    // DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}
                                    $delete(): Promise<void>;
                                    // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}
                                    $get(): Promise<registry.permissions>;
                                };
                            }
                            tags: {
                                // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags
                                $get(): Promise<string[]>;
                                $(tagId: string): {
                                    // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}
                                    $get(): Promise<registry.tag>;
                                };
                            }
                        };
                    }
                    permissions: {
                        // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions
                        $get(): Promise<string[]>;
                        // POST /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions
                        $post(params?: {canRead?: boolean, canWrite?: boolean, isAdmin?: boolean, status?: registry.permission.status, userId?: string}): Promise<registry.permissions>;
                        $(permissionId: string): {
                            // DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}
                            $delete(): Promise<void>;
                            // GET /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}
                            $get(): Promise<registry.permissions>;
                        };
                    }
                };
            }
            serviceInfos: {
                // GET /caas/registry/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /caas/registry/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            users: {
                // GET /caas/registry/{serviceName}/users
                $get(): Promise<string[]>;
                // POST /caas/registry/{serviceName}/users
                $post(params?: {description?: string}): Promise<registry.user>;
                $(userId: string): {
                    // DELETE /caas/registry/{serviceName}/users/{userId}
                    $delete(): Promise<void>;
                    // GET /caas/registry/{serviceName}/users/{userId}
                    $get(): Promise<registry.user>;
                    changePassword: {
                        // POST /caas/registry/{serviceName}/users/{userId}/changePassword
                        $post(): Promise<registry.user>;
                    }
                };
            }
        };
    }
// Api
  /**
   * Operations about the DOCKER service
   * List available services
   */
  get(path: '/caas/registry'): () => Promise<string[]>;
  /**
   * Missing description
   * Inspect service.
   */
  get(path: '/caas/registry/{serviceName}'): (params: {serviceName: string}) => Promise<registry.service>;
  /**
   * Missing description
   * List namespace
   */
  get(path: '/caas/registry/{serviceName}/namespaces'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Missing description
   * Inspect namespace
   */
  get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}'): (params: {namespaceId: string, serviceName: string}) => Promise<registry.namespace>;
  /**
   * Missing description
   * List all images in namespace
   */
  get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images'): (params: {namespaceId: string, serviceName: string}) => Promise<string[]>;
  /**
   * Missing description
   * Inspect image
   */
  get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}'): (params: {imageId: string, namespaceId: string, serviceName: string}) => Promise<registry.image>;
  /**
   * Missing description
   * List image permissions
   */
  get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions'): (params: {imageId: string, namespaceId: string, serviceName: string}) => Promise<string[]>;
  /**
   * Missing description
   * Inspect image permissions
   */
  get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}'): (params: {imageId: string, namespaceId: string, permissionId: string, serviceName: string}) => Promise<registry.permissions>;
  /**
   * Missing description
   * List image tags
   */
  get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags'): (params: {imageId: string, namespaceId: string, serviceName: string}) => Promise<string[]>;
  /**
   * Missing description
   * Inspect image tag
   */
  get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}'): (params: {imageId: string, namespaceId: string, serviceName: string, tagId: string}) => Promise<registry.tag>;
  /**
   * Missing description
   * List namespace permissions
   */
  get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions'): (params: {namespaceId: string, serviceName: string}) => Promise<string[]>;
  /**
   * Missing description
   * Inspect permission
   */
  get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}'): (params: {namespaceId: string, permissionId: string, serviceName: string}) => Promise<registry.permissions>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/caas/registry/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Missing description
   * List users
   */
  get(path: '/caas/registry/{serviceName}/users'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Missing description
   * Inspect user
   */
  get(path: '/caas/registry/{serviceName}/users/{userId}'): (params: {serviceName: string, userId: string}) => Promise<registry.user>;
  /**
   * Missing description
   * Update image
   */
  put(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}'): (params: {imageId: string, namespaceId: string, serviceName: string, public?: boolean}) => Promise<registry.image>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/caas/registry/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/caas/registry/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Missing description
   * Create namespace
   */
  post(path: '/caas/registry/{serviceName}/namespaces'): (params: {serviceName: string, name?: string}) => Promise<registry.namespace>;
  /**
   * Missing description
   * Create image permissions
   */
  post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions'): (params: {imageId: string, namespaceId: string, serviceName: string, canRead?: boolean, canWrite?: boolean, isAdmin?: boolean, status?: registry.permission.status, userId?: string}) => Promise<registry.permissions>;
  /**
   * Missing description
   * Create namespace permissions
   */
  post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions'): (params: {namespaceId: string, serviceName: string, canRead?: boolean, canWrite?: boolean, isAdmin?: boolean, status?: registry.permission.status, userId?: string}) => Promise<registry.permissions>;
  /**
   * Missing description
   * Create user
   */
  post(path: '/caas/registry/{serviceName}/users'): (params: {serviceName: string, description?: string}) => Promise<registry.user>;
  /**
   * Missing description
   * Update user password
   */
  post(path: '/caas/registry/{serviceName}/users/{userId}/changePassword'): (params: {serviceName: string, userId: string}) => Promise<registry.user>;
  /**
   * Missing description
   * Delete namespace
   */
  delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}'): (params: {namespaceId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete image
   */
  delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}'): (params: {imageId: string, namespaceId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete image permissions.
   */
  delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}'): (params: {imageId: string, namespaceId: string, permissionId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete namespace permissions
   */
  delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}'): (params: {namespaceId: string, permissionId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete user
   */
  delete(path: '/caas/registry/{serviceName}/users/{userId}'): (params: {serviceName: string, userId: string}) => Promise<void>;
}
/**
 * classic Model
 */