import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /caas/registry Models
 */
export declare namespace registry {
    interface image {
        createdAt: string;
        id: string;
        name: string;
        public: boolean;
        status: registry.image.status;
        updatedAt: string;
    }
    namespace image {
        type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK";
    }
    interface inputImage {
        public: boolean;
    }
    interface inputNamespace {
        name: string;
    }
    interface inputPermissions {
        canRead: boolean;
        canWrite: boolean;
        isAdmin: boolean;
        status: registry.permission.status;
        userId: string;
    }
    interface inputUser {
        description: string;
    }
    interface namespace {
        createdAt: string;
        id: string;
        name: string;
        status: registry.namespace.status;
        updatedAt: string;
    }
    namespace namespace {
        type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK";
    }
    namespace permission {
        type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK";
    }
    interface permissions {
        canRead: boolean;
        canWrite: boolean;
        createdAt: string;
        id: string;
        isAdmin: boolean;
        status: registry.permission.status;
        updatedAt: string;
        userId: string;
    }
    interface service {
        createdAt: string;
        endpoint: string;
        id: string;
        maxNamespaces: number;
        maxUsers: number;
        updatedAt: string;
        zone: string;
    }
    interface tag {
        createdAt: string;
        id: string;
        name: string;
        updatedAt: string;
    }
    interface user {
        createdAt: string;
        description: boolean;
        id: string;
        status: registry.user.status;
        updatedAt: string;
        username: string;
    }
    namespace user {
        type status = "DELETING" | "DEPLOYING" | "ERROR" | "OK";
    }
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
}
export declare namespace services {
    interface Service {
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
export declare function proxyCaasRegistry(ovhEngine: OvhRequestable): Caas;
export default proxyCaasRegistry;
/**
 * Api Proxy model
 */ export interface Caas {
    registry: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<registry.service>;
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            namespaces: {
                $get(): Promise<string[]>;
                $post(params?: {
                    name?: string;
                }): Promise<registry.namespace>;
                $(namespaceId: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<registry.namespace>;
                    images: {
                        $get(): Promise<string[]>;
                        $(imageId: string): {
                            $delete(): Promise<void>;
                            $get(): Promise<registry.image>;
                            $put(params?: {
                                public?: boolean;
                            }): Promise<registry.image>;
                            permissions: {
                                $get(): Promise<string[]>;
                                $post(params?: {
                                    canRead?: boolean;
                                    canWrite?: boolean;
                                    isAdmin?: boolean;
                                    status?: registry.permission.status;
                                    userId?: string;
                                }): Promise<registry.permissions>;
                                $(permissionId: string): {
                                    $delete(): Promise<void>;
                                    $get(): Promise<registry.permissions>;
                                };
                            };
                            tags: {
                                $get(): Promise<string[]>;
                                $(tagId: string): {
                                    $get(): Promise<registry.tag>;
                                };
                            };
                        };
                    };
                    permissions: {
                        $get(): Promise<string[]>;
                        $post(params?: {
                            canRead?: boolean;
                            canWrite?: boolean;
                            isAdmin?: boolean;
                            status?: registry.permission.status;
                            userId?: string;
                        }): Promise<registry.permissions>;
                        $(permissionId: string): {
                            $delete(): Promise<void>;
                            $get(): Promise<registry.permissions>;
                        };
                    };
                };
            };
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
            };
            users: {
                $get(): Promise<string[]>;
                $post(params?: {
                    description?: string;
                }): Promise<registry.user>;
                $(userId: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<registry.user>;
                    changePassword: {
                        $post(): Promise<registry.user>;
                    };
                };
            };
        };
    };
    /**
     * Operations about the DOCKER service
     * List available services
     */
    get(path: '/caas/registry'): () => Promise<string[]>;
    /**
     * Missing description
     * Inspect service.
     */
    get(path: '/caas/registry/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<registry.service>;
    /**
     * Missing description
     * List namespace
     */
    get(path: '/caas/registry/{serviceName}/namespaces'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Missing description
     * Inspect namespace
     */
    get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}'): (params: {
        namespaceId: string;
        serviceName: string;
    }) => Promise<registry.namespace>;
    /**
     * Missing description
     * List all images in namespace
     */
    get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images'): (params: {
        namespaceId: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Missing description
     * Inspect image
     */
    get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}'): (params: {
        imageId: string;
        namespaceId: string;
        serviceName: string;
    }) => Promise<registry.image>;
    /**
     * Missing description
     * List image permissions
     */
    get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions'): (params: {
        imageId: string;
        namespaceId: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Missing description
     * Inspect image permissions
     */
    get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}'): (params: {
        imageId: string;
        namespaceId: string;
        permissionId: string;
        serviceName: string;
    }) => Promise<registry.permissions>;
    /**
     * Missing description
     * List image tags
     */
    get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags'): (params: {
        imageId: string;
        namespaceId: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Missing description
     * Inspect image tag
     */
    get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}'): (params: {
        imageId: string;
        namespaceId: string;
        serviceName: string;
        tagId: string;
    }) => Promise<registry.tag>;
    /**
     * Missing description
     * List namespace permissions
     */
    get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions'): (params: {
        namespaceId: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Missing description
     * Inspect permission
     */
    get(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}'): (params: {
        namespaceId: string;
        permissionId: string;
        serviceName: string;
    }) => Promise<registry.permissions>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/caas/registry/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Missing description
     * List users
     */
    get(path: '/caas/registry/{serviceName}/users'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Missing description
     * Inspect user
     */
    get(path: '/caas/registry/{serviceName}/users/{userId}'): (params: {
        serviceName: string;
        userId: string;
    }) => Promise<registry.user>;
    /**
     * Missing description
     * Update image
     */
    put(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}'): (params: {
        imageId: string;
        namespaceId: string;
        serviceName: string;
        public?: boolean;
    }) => Promise<registry.image>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/caas/registry/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/caas/registry/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Missing description
     * Create namespace
     */
    post(path: '/caas/registry/{serviceName}/namespaces'): (params: {
        serviceName: string;
        name?: string;
    }) => Promise<registry.namespace>;
    /**
     * Missing description
     * Create image permissions
     */
    post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions'): (params: {
        imageId: string;
        namespaceId: string;
        serviceName: string;
        canRead?: boolean;
        canWrite?: boolean;
        isAdmin?: boolean;
        status?: registry.permission.status;
        userId?: string;
    }) => Promise<registry.permissions>;
    /**
     * Missing description
     * Create namespace permissions
     */
    post(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions'): (params: {
        namespaceId: string;
        serviceName: string;
        canRead?: boolean;
        canWrite?: boolean;
        isAdmin?: boolean;
        status?: registry.permission.status;
        userId?: string;
    }) => Promise<registry.permissions>;
    /**
     * Missing description
     * Create user
     */
    post(path: '/caas/registry/{serviceName}/users'): (params: {
        serviceName: string;
        description?: string;
    }) => Promise<registry.user>;
    /**
     * Missing description
     * Update user password
     */
    post(path: '/caas/registry/{serviceName}/users/{userId}/changePassword'): (params: {
        serviceName: string;
        userId: string;
    }) => Promise<registry.user>;
    /**
     * Missing description
     * Delete namespace
     */
    delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}'): (params: {
        namespaceId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete image
     */
    delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}'): (params: {
        imageId: string;
        namespaceId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete image permissions.
     */
    delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}'): (params: {
        imageId: string;
        namespaceId: string;
        permissionId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete namespace permissions
     */
    delete(path: '/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}'): (params: {
        namespaceId: string;
        permissionId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete user
     */
    delete(path: '/caas/registry/{serviceName}/users/{userId}'): (params: {
        serviceName: string;
        userId: string;
    }) => Promise<void>;
}
