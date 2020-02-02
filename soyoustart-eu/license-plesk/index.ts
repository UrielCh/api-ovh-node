import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /license/plesk Models
 * Source: https://eu.api.soyoustart.com/1.0/license/plesk.json
 */
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
    export type OrderableAntivirusEnum = "DR_WEB" | "KASPERSKY_UNLIMITED_MAILBOXES" | "kaspersky"
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
    export type OrderablePleskLanguagePackEnum = "1" | "1-extra-language-for-plesk12" | "2" | "2-extra-languages-for-plesk12" | "3" | "3-extra-languages-for-plesk12" | "4" | "4-extra-languages-for-plesk12" | "5" | "5-extra-languages-for-plesk12" | "unlimited" | "unlimited-extra-languages-for-plesk12"
    /**
     * Application set available for Plesk products
     * type fullname: license.PleskApplicationSetEnum
     */
    export type PleskApplicationSetEnum = "applicationpack" | "developerpack" | "power-pack-for-plesk12" | "powerpack"
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
    export type PleskVersionEnum = "PLESK_10_AND_LATER" | "PLESK_10_AND_LATER_FOR_KVM" | "PLESK_10_AND_LATER_FOR_VMWARE" | "PLESK_10_AND_LATER_FOR_VZ" | "PLESK_10_AND_LATER_FOR_WIN" | "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE" | "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ" | "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN" | "PLESK_10_AND_LATER_FOR_XEN" | "PLESK_12_VPS_WEB_ADMIN" | "PLESK_12_VPS_WEB_APP" | "PLESK_12_VPS_WEB_HOST" | "PLESK_12_VPS_WEB_HOST_CLNX" | "PLESK_12_VPS_WEB_PRO" | "PLESK_12_VPS_WEB_PRO_CLNX" | "PLESK_12_WEB_ADMIN" | "PLESK_12_WEB_APP" | "PLESK_12_WEB_HOST" | "PLESK_12_WEB_HOST_CLNX" | "PLESK_12_WEB_PRO" | "PLESK_12_WEB_PRO_CLNX" | "PLESK_75_RELOADED" | "PLESK_80" | "PLESK_80_FOR_VZ" | "PLESK_81_FOR_WIN" | "PLESK_9" | "PLESK_95" | "PLESK_95_FOR_VZ" | "PLESK_95_FOR_WIN" | "PLESK_9_FOR_VZ" | "PLESK_9_FOR_WIN" | "PLESK_ONYX_VPS_WEB_ADMIN" | "PLESK_ONYX_VPS_WEB_APP" | "PLESK_ONYX_VPS_WEB_HOST" | "PLESK_ONYX_VPS_WEB_HOST_CLNX" | "PLESK_ONYX_VPS_WEB_PRO" | "PLESK_ONYX_VPS_WEB_PRO_CLNX" | "PLESK_ONYX_WEB_ADMIN" | "PLESK_ONYX_WEB_APP" | "PLESK_ONYX_WEB_HOST" | "PLESK_ONYX_WEB_HOST_CLNX" | "PLESK_ONYX_WEB_PRO" | "PLESK_ONYX_WEB_PRO_CLNX" | "plesk-12-webadmin-for-vps" | "plesk-12-webhost" | "plesk-12-webhost-for-vps" | "plesk-12-webpro" | "plesk-12-webpro-for-vps"
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
 * END API /license/plesk Models
 */
export function proxyLicensePlesk(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicensePlesk;
/**
 * Api model for /license/plesk
 */
export interface License {
    plesk: {
        /**
         * List available services
         * GET /license/plesk
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        orderableVersions: {
            /**
             * Get the orderable Plesk versions and their associated compatibilities
             * GET /license/plesk/orderableVersions
             */
            $get(params: { ip: string }): Promise<license.PleskOrderConfiguration[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            allowedDestinationIp: {
                /**
                 * Returns an array of ips where the license can be moved to
                 * GET /license/plesk/{serviceName}/allowedDestinationIp
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeIp: {
                /**
                 * Move this license to another Ip
                 * POST /license/plesk/{serviceName}/changeIp
                 */
                $post(params: { destinationIp: string }): Promise<license.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /license/plesk/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /license/plesk/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /license/plesk/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /license/plesk/{serviceName}/tasks/{taskId}
                     */
                    $get(): Promise<license.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /license/plesk/{serviceName}/terminate
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}
