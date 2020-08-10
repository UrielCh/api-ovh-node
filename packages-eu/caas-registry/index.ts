import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /caas/registry Models
 * Source: https://eu.api.ovh.com/1.0/caas/registry.json
 */
export namespace registry {
    /**
     * An image stored in a namespace
     * interface fullName: registry.image.image
     */
    export interface image {
        createdAt: string;
        id: string;
        name: string;
        public: boolean;
        status: registry.image.status;
        updatedAt: string;
    }
    export namespace image {
        /**
         * The status of the image
         * type fullname: registry.image.status
         */
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
    /**
     * A container image
     * interface fullName: registry.inputImage.inputImage
     */
    export interface inputImage {
        public: boolean;
    }
    /**
     * A namespace in which a user can either read, write or delete images
     * interface fullName: registry.inputNamespace.inputNamespace
     */
    export interface inputNamespace {
        name: string;
    }
    /**
     * Permissions of a user over a namespace
     * interface fullName: registry.inputPermissions.inputPermissions
     */
    export interface inputPermissions {
        canRead: boolean;
        canWrite: boolean;
        isAdmin: boolean;
        status: registry.permission.status;
        userId: string;
    }
    /**
     * A registry user account
     * interface fullName: registry.inputUser.inputUser
     */
    export interface inputUser {
        description: string;
    }
    /**
     * A namespace in which a user can either read, write or delete images
     * interface fullName: registry.namespace.namespace
     */
    export interface namespace {
        createdAt: string;
        id: string;
        name: string;
        status: registry.namespace.status;
        updatedAt: string;
    }
    export namespace namespace {
        /**
         * The status of the namespace
         * type fullname: registry.namespace.status
         */
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
    export namespace permission {
        /**
         * The status of the permission
         * type fullname: registry.permission.status
         */
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
    /**
     * Permissions of a user over a namespace
     * interface fullName: registry.permissions.permissions
     */
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
    /**
     * The client subscription to the registry service
     * interface fullName: registry.service.service
     */
    export interface service {
        createdAt: string;
        endpoint: string;
        id: string;
        maxNamespaces: number;
        maxUsers: number;
        updatedAt: string;
        zone: string;
    }
    /**
     * An image tag
     * interface fullName: registry.tag.tag
     */
    export interface tag {
        createdAt: string;
        id: string;
        name: string;
        updatedAt: string;
    }
    /**
     * A registry user account
     * interface fullName: registry.user.user
     */
    export interface user {
        createdAt: string;
        description: boolean;
        id: string;
        status: registry.user.status;
        updatedAt: string;
        username: string;
    }
    export namespace user {
        /**
         * The status of the user
         * type fullname: registry.user.status
         */
        export type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK"
    }
}
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
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
 * Api model for /caas/registry
 */
export interface Caas {
    registry: {
        /**
         * List available services
         * GET /caas/registry
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Inspect service.
             * GET /caas/registry/{serviceName}
             */
            $get(): Promise<registry.service>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /caas/registry/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            namespaces: {
                /**
                 * List namespace
                 * GET /caas/registry/{serviceName}/namespaces
                 */
                $get(): Promise<string[]>;
                /**
                 * Create namespace
                 * POST /caas/registry/{serviceName}/namespaces
                 */
                $post(params: { name: string }): Promise<registry.namespace>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(namespaceId: string): {
                    /**
                     * Delete namespace
                     * DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Inspect namespace
                     * GET /caas/registry/{serviceName}/namespaces/{namespaceId}
                     */
                    $get(): Promise<registry.namespace>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    images: {
                        /**
                         * List all images in namespace
                         * GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(imageId: string): {
                            /**
                             * Delete image
                             * DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Inspect image
                             * GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}
                             */
                            $get(): Promise<registry.image>;
                            /**
                             * Update image
                             * PUT /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}
                             */
                            $put(params: { public: boolean }): Promise<registry.image>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            permissions: {
                                /**
                                 * List image permissions
                                 * GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Create image permissions
                                 * POST /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions
                                 */
                                $post(params: { canRead: boolean, canWrite: boolean, isAdmin: boolean, status: registry.permission.status, userId: string }): Promise<registry.permissions>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(permissionId: string): {
                                    /**
                                     * Delete image permissions.
                                     * DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}
                                     */
                                    $delete(): Promise<void>;
                                    /**
                                     * Inspect image permissions
                                     * GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}
                                     */
                                    $get(): Promise<registry.permissions>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            tags: {
                                /**
                                 * List image tags
                                 * GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(tagId: string): {
                                    /**
                                     * Inspect image tag
                                     * GET /caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}
                                     */
                                    $get(): Promise<registry.tag>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                        };
                    }
                    permissions: {
                        /**
                         * List namespace permissions
                         * GET /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create namespace permissions
                         * POST /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions
                         */
                        $post(params: { canRead: boolean, canWrite: boolean, isAdmin: boolean, status: registry.permission.status, userId: string }): Promise<registry.permissions>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(permissionId: string): {
                            /**
                             * Delete namespace permissions
                             * DELETE /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Inspect permission
                             * GET /caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}
                             */
                            $get(): Promise<registry.permissions>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /caas/registry/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /caas/registry/{serviceName}/serviceInfos
                 */
                $put(params: { canDeleteAtExpiration: boolean, contactAdmin: string, contactBilling: string, contactTech: string, creation: string, domain: string, engagedUpTo?: string, expiration: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType: service.RenewalTypeEnum, serviceId: number, status: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            users: {
                /**
                 * List users
                 * GET /caas/registry/{serviceName}/users
                 */
                $get(): Promise<string[]>;
                /**
                 * Create user
                 * POST /caas/registry/{serviceName}/users
                 */
                $post(params: { description: string }): Promise<registry.user>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(userId: string): {
                    /**
                     * Delete user
                     * DELETE /caas/registry/{serviceName}/users/{userId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Inspect user
                     * GET /caas/registry/{serviceName}/users/{userId}
                     */
                    $get(): Promise<registry.user>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Update user password
                         * POST /caas/registry/{serviceName}/users/{userId}/changePassword
                         */
                        $post(): Promise<registry.user>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
        };
    }
}
