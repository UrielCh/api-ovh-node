import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicated/anthos Models
 * Source: https://eu.api.ovh.com/1.0/dedicated/anthos.json
 */
export namespace dedicated {
    export namespace anthos {
        /**
         * Baremetal
         * interface fullName: dedicated.anthos.Baremetal.Baremetal
         */
        export interface Baremetal {
            additional: boolean;
            id: string;
            name: string;
            privateIp: string;
            profile: string;
            rack: string;
            serviceName: string;
            stateful: boolean;
            status: dedicated.anthos.BaremetalStatusEnum;
        }
        /**
         * Baremetal Status
         * type fullname: dedicated.anthos.BaremetalStatusEnum
         */
        export type BaremetalStatusEnum = "BAREMETAL_STATUS_AVAILABLE" | "BAREMETAL_STATUS_DELIVERING" | "BAREMETAL_STATUS_IN_MAINTENANCE" | "BAREMETAL_STATUS_IN_USE" | "BAREMETAL_STATUS_RESTARTING" | "BAREMETAL_STATUS_SUPPRESSING" | "BAREMETAL_STATUS_UNSPECIFIED"
        /**
         * Capabilities Response
         * interface fullName: dedicated.anthos.Capabilities.Capabilities
         */
        export interface Capabilities {
            regions: string[];
            versions: string[];
        }
        /**
         * IpRestrictionUpsert
         * interface fullName: dedicated.anthos.IpRestrictionUpsert.IpRestrictionUpsert
         */
        export interface IpRestrictionUpsert {
            ips?: string[];
        }
        /**
         * NetappAccess
         * interface fullName: dedicated.anthos.NetappAccess.NetappAccess
         */
        export interface NetappAccess {
            accessUrl: string;
        }
        /**
         * PrivateAddressRange
         * interface fullName: dedicated.anthos.PrivateAddressRange.PrivateAddressRange
         */
        export interface PrivateAddressRange {
            id: string;
            inUse: boolean;
            range: string;
        }
        /**
         * PublicAddressRange
         * interface fullName: dedicated.anthos.PublicAddressRange.PublicAddressRange
         */
        export interface PublicAddressRange {
            id: string;
            inUse: boolean;
            range: string;
            serviceName: string;
        }
        /**
         * Storage Cluster
         * interface fullName: dedicated.anthos.Storage.Storage
         */
        export interface Storage {
            accessUrl: string;
            type: dedicated.anthos.StorageTypeEnum;
        }
        /**
         * Storage Cluster Type
         * type fullname: dedicated.anthos.StorageTypeEnum
         */
        export type StorageTypeEnum = "STORAGE_TYPE_NETAPP" | "STORAGE_TYPE_UNSPECIFIED"
        /**
         * Storage Virtual Machine
         * interface fullName: dedicated.anthos.StorageVM.StorageVM
         */
        export interface StorageVM {
            description: string;
            id: string;
            name: string;
            size: number;
            state: dedicated.anthos.StorageVMStateEnum;
        }
        /**
         * Storage Virtual Machine state
         * type fullname: dedicated.anthos.StorageVMStateEnum
         */
        export type StorageVMStateEnum = "STORAGE_VMSTATE_DELETING" | "STORAGE_VMSTATE_INITIALIZING" | "STORAGE_VMSTATE_RUNNING" | "STORAGE_VMSTATE_STARTING" | "STORAGE_VMSTATE_STOPPED" | "STORAGE_VMSTATE_STOPPING" | "STORAGE_VMSTATE_UNSPECIFIED"
        /**
         * Tenant
         * interface fullName: dedicated.anthos.Tenant.Tenant
         */
        export interface Tenant {
            accessUrl: string;
            description: string;
            id: string;
            location: string;
            name: string;
            serviceName: string;
            status?: dedicated.anthos.TenantStatusEnum;
            storage?: dedicated.anthos.Storage;
            version: string;
            vrackId: string;
        }
        /**
         * TenantAccess
         * interface fullName: dedicated.anthos.TenantAccess.TenantAccess
         */
        export interface TenantAccess {
            accessUrl: string;
        }
        /**
         * Tenant status
         * type fullname: dedicated.anthos.TenantStatusEnum
         */
        export type TenantStatusEnum = "TENANT_STATUS_ERROR" | "TENANT_STATUS_READY" | "TENANT_STATUS_UNSPECIFIED" | "TENANT_STATUS_UPGRADING"
        /**
         * Upgrade Anthos version for the tenant
         * interface fullName: dedicated.anthos.UpgradeAnthosRequest.UpgradeAnthosRequest
         */
        export interface UpgradeAnthosRequest {
            version: string;
        }
        /**
         * Usage
         * interface fullName: dedicated.anthos.Usage.Usage
         */
        export interface Usage {
            reservedSize: number;
            totalSize: number;
            usedSize: number;
        }
        /**
         * Anthos version informations
         * interface fullName: dedicated.anthos.VersionInfo.VersionInfo
         */
        export interface VersionInfo {
            changelogLink: string;
            latest: boolean;
            version: string;
        }
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
    /**
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
 * END API /dedicated/anthos Models
 */
export function proxyDedicatedAnthos(ovhEngine: OvhRequestable): Dedicated {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedAnthos;
/**
 * Api model for /dedicated/anthos
 */
export interface Dedicated {
    anthos: {
        capabilities: {
            /**
             * List available regions and versions
             * GET /dedicated/anthos/capabilities
             */
            $get(): Promise<dedicated.anthos.Capabilities>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        tenants: {
            /**
             * List your Anthos tenants
             * GET /dedicated/anthos/tenants
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get an Anthos tenant
                 * GET /dedicated/anthos/tenants/{serviceName}
                 */
                $get(): Promise<dedicated.anthos.Tenant>;
                /**
                 * Edit an Anthos tenant
                 * PUT /dedicated/anthos/tenants/{serviceName}
                 */
                $put(params?: { accessUrl?: string, description?: string, id?: string, location?: string, name?: string, serviceName?: string, status?: dedicated.anthos.TenantStatusEnum, storage?: dedicated.anthos.Storage, version?: string, vrackId?: string }): Promise<dedicated.anthos.Tenant>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                actions: {
                    upgrade: {
                        /**
                         * Start an upgrade
                         * POST /dedicated/anthos/tenants/{serviceName}/actions/upgrade
                         */
                        $post(params?: { version?: string }): Promise<dedicated.anthos.Tenant>;
                    }
                }
                availableVersions: {
                    /**
                     * List available Anthos versions for the tenant
                     * GET /dedicated/anthos/tenants/{serviceName}/availableVersions
                     */
                    $get(): Promise<dedicated.anthos.VersionInfo[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                baremetals: {
                    /**
                     * List baremetal servers
                     * GET /dedicated/anthos/tenants/{serviceName}/baremetals
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(baremetalId: string): {
                        /**
                         * Get a baremetal server
                         * GET /dedicated/anthos/tenants/{serviceName}/baremetals/{baremetalId}
                         */
                        $get(): Promise<dedicated.anthos.Baremetal>;
                        /**
                         * Edit a baremetal server
                         * PUT /dedicated/anthos/tenants/{serviceName}/baremetals/{baremetalId}
                         */
                        $put(params?: { additional?: boolean, id?: string, name?: string, privateIp?: string, profile?: string, rack?: string, serviceName?: string, stateful?: boolean, status?: dedicated.anthos.BaremetalStatusEnum }): Promise<dedicated.anthos.Baremetal>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        actions: {
                            reinstall: {
                                /**
                                 * Reinstall a baremetal server
                                 * POST /dedicated/anthos/tenants/{serviceName}/baremetals/{baremetalId}/actions/reinstall
                                 */
                                $post(): Promise<dedicated.anthos.Baremetal>;
                            }
                            restart: {
                                /**
                                 * Restart a baremetal server
                                 * POST /dedicated/anthos/tenants/{serviceName}/baremetals/{baremetalId}/actions/restart
                                 */
                                $post(): Promise<dedicated.anthos.Baremetal>;
                            }
                        }
                    };
                }
                changeContact: {
                    /**
                     * Launch a contact change procedure
                     * POST /dedicated/anthos/tenants/{serviceName}/changeContact
                     */
                    $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
                }
                confirmTermination: {
                    /**
                     * Confirm termination of your service
                     * POST /dedicated/anthos/tenants/{serviceName}/confirmTermination
                     */
                    $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
                }
                credentials: {
                    reset: {
                        /**
                         * Reset and return tenant admin access
                         * POST /dedicated/anthos/tenants/{serviceName}/credentials/reset
                         */
                        $post(): Promise<dedicated.anthos.TenantAccess>;
                    }
                }
                ipRestrictions: {
                    /**
                     * List ip restrictions
                     * GET /dedicated/anthos/tenants/{serviceName}/ipRestrictions
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Append a list of ip restrictions
                     * POST /dedicated/anthos/tenants/{serviceName}/ipRestrictions
                     */
                    $post(params?: { ips?: string[] }): Promise<string[]>;
                    /**
                     * Remove the current list and add a list of ip restrictions
                     * PUT /dedicated/anthos/tenants/{serviceName}/ipRestrictions
                     */
                    $put(params?: { ips?: string[] }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(ip: string): {
                        /**
                         * Delete an ip restriction
                         * DELETE /dedicated/anthos/tenants/{serviceName}/ipRestrictions/{ip}
                         */
                        $delete(): Promise<void>;
                    };
                }
                ips: {
                    private: {
                        /**
                         * List private IP ranges
                         * GET /dedicated/anthos/tenants/{serviceName}/ips/private
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create a new private IP range
                         * POST /dedicated/anthos/tenants/{serviceName}/ips/private
                         */
                        $post(params?: { id?: string, inUse?: boolean, range?: string }): Promise<dedicated.anthos.PrivateAddressRange>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(rangeId: string): {
                            /**
                             * Delete a private IP range
                             * DELETE /dedicated/anthos/tenants/{serviceName}/ips/private/{rangeId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get a private IP range
                             * GET /dedicated/anthos/tenants/{serviceName}/ips/private/{rangeId}
                             */
                            $get(): Promise<dedicated.anthos.PrivateAddressRange>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    public: {
                        /**
                         * List public IP ranges
                         * GET /dedicated/anthos/tenants/{serviceName}/ips/public
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(rangeId: string): {
                            /**
                             * Get a public IP range
                             * GET /dedicated/anthos/tenants/{serviceName}/ips/public/{rangeId}
                             */
                            $get(): Promise<dedicated.anthos.PublicAddressRange>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                }
                serviceInfos: {
                    /**
                     * Get this object properties
                     * GET /dedicated/anthos/tenants/{serviceName}/serviceInfos
                     */
                    $get(): Promise<services.Service>;
                    /**
                     * Alter this object properties
                     * PUT /dedicated/anthos/tenants/{serviceName}/serviceInfos
                     */
                    $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                storage: {
                    netapp: {
                        svms: {
                            /**
                             * List SVMs
                             * GET /dedicated/anthos/tenants/{serviceName}/storage/netapp/svms
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new SVM
                             * POST /dedicated/anthos/tenants/{serviceName}/storage/netapp/svms
                             */
                            $post(params?: { description?: string, id?: string, name?: string, size?: number, state?: dedicated.anthos.StorageVMStateEnum }): Promise<dedicated.anthos.StorageVM>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(storageVmId: string): {
                                /**
                                 * Delete a SVM
                                 * DELETE /dedicated/anthos/tenants/{serviceName}/storage/netapp/svms/{storageVmId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get a SVM
                                 * GET /dedicated/anthos/tenants/{serviceName}/storage/netapp/svms/{storageVmId}
                                 */
                                $get(): Promise<dedicated.anthos.StorageVM>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        usage: {
                            /**
                             * Get total storage usage
                             * GET /dedicated/anthos/tenants/{serviceName}/storage/netapp/usage
                             */
                            $get(): Promise<dedicated.anthos.Usage>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    }
                }
                terminate: {
                    /**
                     * Terminate your service
                     * POST /dedicated/anthos/tenants/{serviceName}/terminate
                     */
                    $post(): Promise<string>;
                }
            };
        }
    }
}
