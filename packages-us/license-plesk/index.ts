import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /license/plesk Models
 * Source: https://api.us.ovhcloud.com/1.0/license/plesk.json
 */
export namespace license {
    // type fullname: license.ActionType
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    // type fullname: license.ChangeIpMessageEnum
    export type ChangeIpMessageEnum = "OK" | "destinationNotAllowed" | "licenseAlreadyExists" | "notAllowedToHandleThis" | "notSameType" | "sameIp" | "versionNotAllowed"
    // interface fullName: license.ChangeIpStatus.ChangeIpStatus
    export interface ChangeIpStatus {
        message: license.ChangeIpMessageEnum;
        success: boolean;
    }
    // type fullname: license.DomainNumberEnum
    export type DomainNumberEnum = "0" | "1" | "10" | "100" | "30" | "300" | "unlimited"
    // type fullname: license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    // interface fullName: license.Option.Option
    export interface Option {
        amount?: string;
        canBeDeleted: boolean;
        expirationDate: string;
        label: license.OptionLabel;
        version?: string;
    }
    // type fullname: license.OptionLabel
    export type OptionLabel = "ANTISPAM_SPAMASSASSIN" | "ANTIVIRUS_DRWEB" | "ANTIVIRUS_KASPERSKY" | "DOMAINS" | "LANGUAGE_PACK" | "POWERPACK" | "SQL_SERVER" | "VIRTUOZZO_CONTAINERS"
    // type fullname: license.OrderableAntivirusEnum
    export type OrderableAntivirusEnum = "kaspersky" | "kaspersky-for-vps"
    // interface fullName: license.OrderablePleskCompatibilityInfos.OrderablePleskCompatibilityInfos
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
    // type fullname: license.OrderablePleskDomainNumberEnum
    export type OrderablePleskDomainNumberEnum = "10" | "100" | "30" | "300" | "hostingsuite" | "unlimited"
    // type fullname: license.OrderablePleskLanguagePackEnum
    export type OrderablePleskLanguagePackEnum = "1-extra-language-for-plesk12" | "1-extra-language-for-plesk12-for-vps" | "2-extra-languages-for-plesk12" | "2-extra-languages-for-plesk12-for-vps" | "3-extra-languages-for-plesk12" | "3-extra-languages-for-plesk12-for-vps" | "4-extra-languages-for-plesk12" | "4-extra-languages-for-plesk12-for-vps" | "5-extra-languages-for-plesk12" | "5-extra-languages-for-plesk12-for-vps"
    // type fullname: license.PleskApplicationSetEnum
    export type PleskApplicationSetEnum = "developer-pack-for-vps" | "power-pack-for-plesk12" | "power-pack-for-plesk12-for-vps"
    // interface fullName: license.PleskOrderConfiguration.PleskOrderConfiguration
    export interface PleskOrderConfiguration {
        orderableVersions: license.OrderablePleskCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    // type fullname: license.PleskVersionEnum
    export type PleskVersionEnum = "plesk-12-webadmin-for-vps" | "plesk-12-webhost" | "plesk-12-webhost-for-vps" | "plesk-12-webpro" | "plesk-12-webpro-for-vps"
    // type fullname: license.PotentialProblemPleskEnum
    export type PotentialProblemPleskEnum = "isHostOsHyperVLike" | "isHostOsVMwareLike" | "isHostOsVirtuozzo4Like" | "isHostOsXenLike" | "isLinuxOs" | "isOsCloudLinux" | "isOsPlesk10andLater" | "isOsPlesk12" | "isOsPleskOnyx" | "isWindowsOs"
    // type fullname: license.StateEnum
    export type StateEnum = "ok" | "released" | "terminated" | "toDeliver"
    // interface fullName: license.Task.Task
    export interface Task {
        action: license.ActionType;
        doneDate?: string;
        lastUpdate: string;
        name: string;
        status: license.TaskStateEnum;
        taskId: number;
        todoDate: string;
    }
    // type fullname: license.TaskStateEnum
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    export namespace plesk {
        // interface fullName: license.plesk.Plesk.Plesk
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
    // type fullname: service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
 * END API /license/plesk Models
 */
export function proxyLicensePlesk(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicensePlesk;
/**
 * Api Proxy model
 */// Apis harmony
// path /license
export interface License {
    plesk: {
        // GET /license/plesk
        $get(): Promise<string[]>;
        orderableVersions: {
            // GET /license/plesk/orderableVersions
            $get(params: { ip: string }): Promise<license.PleskOrderConfiguration[]>;
        }
        $(serviceName: string): {
            // GET /license/plesk/{serviceName}
            $get(): Promise<license.plesk.Plesk>;
            // PUT /license/plesk/{serviceName}
            $put(params?: { creation?: string, deleteAtExpiration?: boolean, domain?: string, domainNumber?: license.DomainNumberEnum, informationKey?: string, ip?: string, key?: string, licenseId?: string, productKey?: string, status?: license.StateEnum, version?: license.PleskVersionEnum }): Promise<void>;
            allowedDestinationIp: {
                // GET /license/plesk/{serviceName}/allowedDestinationIp
                $get(): Promise<string[]>;
            }
            canLicenseBeMovedTo: {
                // GET /license/plesk/{serviceName}/canLicenseBeMovedTo
                $get(params: { destinationIp: string }): Promise<license.ChangeIpStatus>;
            }
            changeIp: {
                // POST /license/plesk/{serviceName}/changeIp
                $post(params: { destinationIp: string }): Promise<license.Task>;
            }
            confirmTermination: {
                // POST /license/plesk/{serviceName}/confirmTermination
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            option: {
                // GET /license/plesk/{serviceName}/option
                $get(): Promise<license.OptionLabel[]>;
                $(label: license.OptionLabel): {
                    // DELETE /license/plesk/{serviceName}/option/{label}
                    $delete(): Promise<license.Task>;
                    // GET /license/plesk/{serviceName}/option/{label}
                    $get(): Promise<license.Option>;
                };
            }
            serviceInfos: {
                // GET /license/plesk/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/plesk/{serviceName}/serviceInfos
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            }
            tasks: {
                // GET /license/plesk/{serviceName}/tasks
                $get(params?: { action?: license.ActionType, status?: license.TaskStateEnum }): Promise<number[]>;
                $(taskId: number): {
                    // GET /license/plesk/{serviceName}/tasks/{taskId}
                    $get(): Promise<license.Task>;
                };
            }
            terminate: {
                // POST /license/plesk/{serviceName}/terminate
                $post(): Promise<string>;
            }
        };
    }
}
