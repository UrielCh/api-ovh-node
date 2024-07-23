import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /license/plesk Models
 * Source: https://api.us.ovhcloud.com/1.0/license/plesk.json
 */
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
    }
}
export namespace license {
    /**
     * A short description of what does the Task on your license
     * type fullname: license.ActionType
     */
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    /**
     * Messages from change IP
     * type fullname: license.ChangeIpMessageEnum
     */
    export type ChangeIpMessageEnum = "OK" | "destinationNotAllowed" | "licenseAlreadyExists" | "notAllowedToHandleThis" | "notSameType" | "sameIp" | "versionNotAllowed"
    /**
     * License change ip status return
     * interface fullName: license.ChangeIpStatus.ChangeIpStatus
     */
    export interface ChangeIpStatus {
        message: license.ChangeIpMessageEnum;
        success: boolean;
    }
    /**
     * All quantities of domain available for a license
     * type fullname: license.DomainNumberEnum
     */
    export type DomainNumberEnum = "0" | "1" | "10" | "100" | "30" | "300" | "unlimited"
    /**
     * Possible values for license type
     * type fullname: license.LicenseTypeEnum
     */
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    /**
     * Your License options
     * interface fullName: license.Option.Option
     */
    export interface Option {
        amount?: string;
        canBeDeleted: boolean;
        expirationDate: string;
        label: license.OptionLabel;
        version?: string;
    }
    /**
     * The name of an option currently enabled on your license
     * type fullname: license.OptionLabel
     */
    export type OptionLabel = "ANTISPAM_SPAMASSASSIN" | "ANTIVIRUS_DRWEB" | "ANTIVIRUS_KASPERSKY" | "DOMAINS" | "LANGUAGE_PACK" | "POWERPACK" | "SQL_SERVER" | "VIRTUOZZO_CONTAINERS"
    /**
     * All antivirus available for Plesk products
     * type fullname: license.OrderableAntivirusEnum
     */
    export type OrderableAntivirusEnum = "kaspersky" | "kaspersky-for-vps"
    /**
     * All versions available for Plesk products
     * interface fullName: license.OrderablePleskCompatibilityInfos.OrderablePleskCompatibilityInfos
     */
    export interface OrderablePleskCompatibilityInfos {
        canHavePowerPack: boolean;
        canHaveResellerManagement: boolean;
        canHaveWordpressToolkit: boolean;
        compliantAntivirus: license.OrderableAntivirusEnum[];
        compliantApplicationSets: license.PleskApplicationSetEnum[];
        compliantDomains: license.OrderablePleskDomainNumberEnum[];
        compliantLanguagePack: license.OrderablePleskLanguagePackEnum[];
        potentialProblems: license.PotentialProblemPleskEnum[];
        version: license.PleskVersionEnum;
    }
    /**
     * All domain available for Plesk products
     * type fullname: license.OrderablePleskDomainNumberEnum
     */
    export type OrderablePleskDomainNumberEnum = "10" | "100" | "30" | "300" | "hostingsuite" | "unlimited"
    /**
     * All language pack numbers available for Plesk products
     * type fullname: license.OrderablePleskLanguagePackEnum
     */
    export type OrderablePleskLanguagePackEnum = "1-extra-language-for-plesk12" | "1-extra-language-for-plesk12-for-vps" | "2-extra-languages-for-plesk12" | "2-extra-languages-for-plesk12-for-vps" | "3-extra-languages-for-plesk12" | "3-extra-languages-for-plesk12-for-vps" | "4-extra-languages-for-plesk12" | "4-extra-languages-for-plesk12-for-vps" | "5-extra-languages-for-plesk12" | "5-extra-languages-for-plesk12-for-vps"
    /**
     * Application set available for Plesk products
     * type fullname: license.PleskApplicationSetEnum
     */
    export type PleskApplicationSetEnum = "developer-pack-for-vps" | "power-pack-for-plesk12" | "power-pack-for-plesk12-for-vps"
    /**
     * The serviceTypes allowed to Order a plesk version and associated Versions
     * interface fullName: license.PleskOrderConfiguration.PleskOrderConfiguration
     */
    export interface PleskOrderConfiguration {
        orderableVersions: license.OrderablePleskCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    /**
     * All versions available for Plesk products
     * type fullname: license.PleskVersionEnum
     */
    export type PleskVersionEnum = "plesk-12-webadmin" | "plesk-12-webadmin-for-vps" | "plesk-12-webhost" | "plesk-12-webhost-for-vps" | "plesk-12-webpro" | "plesk-12-webpro-for-vps"
    /**
     * Tests that have failed for Plesk products
     * type fullname: license.PotentialProblemPleskEnum
     */
    export type PotentialProblemPleskEnum = "isHostOsHyperVLike" | "isHostOsVMwareLike" | "isHostOsVirtuozzo4Like" | "isHostOsXenLike" | "isLinuxOs" | "isOsCloudLinux" | "isOsPlesk10andLater" | "isOsPlesk12" | "isOsPleskOnyx" | "isWindowsOs"
    /**
     * All states a license can be in
     * type fullname: license.StateEnum
     */
    export type StateEnum = "ok" | "released" | "terminated" | "toDeliver"
    /**
     * licenses Todos
     * interface fullName: license.Task.Task
     */
    export interface Task {
        action: license.ActionType;
        doneDate?: string;
        lastUpdate: string;
        name: string;
        status: license.TaskStateEnum;
        taskId: number;
        todoDate: string;
    }
    /**
     * All states a license Task can be in
     * type fullname: license.TaskStateEnum
     */
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    export namespace plesk {
        /**
         * Your Plesk license
         * interface fullName: license.plesk.Plesk.Plesk
         */
        export interface Plesk {
            creation: string;
            deleteAtExpiration: boolean;
            domain: string;
            domainNumber?: license.DomainNumberEnum;
            informationKey?: string;
            ip: string;
            key: string;
            licenseId: string;
            productKey?: string;
            status: license.StateEnum;
            version: license.PleskVersionEnum;
        }
        /**
         * Your Plesk license
         * interface fullName: license.plesk.PleskWithIAM.PleskWithIAM
         */
        export interface PleskWithIAM {
            creation: string;
            deleteAtExpiration: boolean;
            domain: string;
            domainNumber?: license.DomainNumberEnum;
            iam?: iam.ResourceMetadata;
            informationKey?: string;
            ip: string;
            key: string;
            licenseId: string;
            productKey?: string;
            status: license.StateEnum;
            version: license.PleskVersionEnum;
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
 * Api model for /license/plesk
 */
export interface License {
    plesk: {
        /**
         * List available services
         * GET /license/plesk
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        orderableVersions: {
            /**
             * Get the orderable Plesk versions and their associated compatibilities
             * GET /license/plesk/orderableVersions
             */
            $get(params: { ip: string }): Promise<license.PleskOrderConfiguration[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /license/plesk/{serviceName}
             */
            $get(): Promise<license.plesk.Plesk>;
            /**
             * Alter this object properties
             * PUT /license/plesk/{serviceName}
             */
            $put(params?: { creation?: string, deleteAtExpiration?: boolean, domain?: string, domainNumber?: license.DomainNumberEnum, informationKey?: string, ip?: string, key?: string, licenseId?: string, productKey?: string, status?: license.StateEnum, version?: license.PleskVersionEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            allowedDestinationIp: {
                /**
                 * Returns an array of ips where the license can be moved to
                 * GET /license/plesk/{serviceName}/allowedDestinationIp
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            canLicenseBeMovedTo: {
                /**
                 * Will tell if the ip can accept the license
                 * GET /license/plesk/{serviceName}/canLicenseBeMovedTo
                 */
                $get(params: { destinationIp: string }): Promise<license.ChangeIpStatus>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            changeIp: {
                /**
                 * Move this license to another Ip
                 * POST /license/plesk/{serviceName}/changeIp
                 */
                $post(params: { destinationIp: string }): Promise<license.Task>;
            }
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /license/plesk/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            option: {
                /**
                 * options attached to this license
                 * GET /license/plesk/{serviceName}/option
                 */
                $get(): Promise<license.OptionLabel[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(label: license.OptionLabel): {
                    /**
                     * release this Option
                     * DELETE /license/plesk/{serviceName}/option/{label}
                     */
                    $delete(): Promise<license.Task>;
                    /**
                     * Get this object properties
                     * GET /license/plesk/{serviceName}/option/{label}
                     */
                    $get(): Promise<license.Option>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /license/plesk/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /license/plesk/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            tasks: {
                /**
                 * tasks linked to this license
                 * GET /license/plesk/{serviceName}/tasks
                 */
                $get(params?: { action?: license.ActionType, status?: license.TaskStateEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /license/plesk/{serviceName}/tasks/{taskId}
                     */
                    $get(): Promise<license.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            terminate: {
                /**
                 * Ask for the termination of your service
                 * POST /license/plesk/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
        };
    }
}

export declare function proxyLicensePlesk(ovhEngine: OvhRequestable): License;
export default proxyLicensePlesk;
