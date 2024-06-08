import { buildOvhProxy } from '@ovh-api/common';
import { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /license/officePrepaid Models
 * Source: https://eu.api.ovh.com/1.0/license/officePrepaid.json
 */
export namespace coreTypes {
    /**
     * ISO country codes
     * type fullname: coreTypes.CountryEnum
     */
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
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
    export namespace office {
        /**
         * Office Licence
         * type fullname: license.office.LicenceEnum
         */
        export type LicenceEnum = "officeBusiness" | "officeProPlus"
        /**
         * Office task
         * interface fullName: license.office.OfficeTask.OfficeTask
         */
        export interface OfficeTask {
            finishDate?: string;
            function: string;
            id: number;
            status: license.office.TaskStatusEnum;
            todoDate: string;
        }
        /**
         * Office tenant
         * interface fullName: license.office.OfficeTenant.OfficeTenant
         */
        export interface OfficeTenant {
            address: string;
            city: string;
            creationDate: string;
            displayName: string;
            firstName: string;
            lastName: string;
            phone: string;
            serviceName: string;
            serviceType: license.office.ServiceTypeEnum;
            status: license.office.ServiceStateEnum;
            zipCode: string;
        }
        /**
         * Office tenant state
         * type fullname: license.office.ServiceStateEnum
         */
        export type ServiceStateEnum = "creating" | "inMaintenance" | "ok" | "suspended"
        /**
         * Type of service
         * type fullname: license.office.ServiceTypeEnum
         */
        export type ServiceTypeEnum = "payAsYouGo" | "prepaid"
        /**
         * License usage statistics.
         * interface fullName: license.office.Statistics.Statistics
         */
        export interface Statistics {
            date: string;
            lines: license.office.StatisticsLine[];
        }
        /**
         * License usage statistics line.
         * interface fullName: license.office.StatisticsLine.StatisticsLine
         */
        export interface StatisticsLine {
            endOfDayCount: number;
            licenceType: license.office.LicenceEnum;
            peakCount: number;
        }
        /**
         * Exchange task status
         * type fullname: license.office.TaskStatusEnum
         */
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        /**
         * Office user  state
         * type fullname: license.office.UserStateEnum
         */
        export type UserStateEnum = "creating" | "deleting" | "ok"
    }
    export namespace officePrepaid {
        /**
         * ISO country codes
         * type fullname: license.officePrepaid.CountryEnum
         */
        export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
        /**
         * Office tenant type
         * type fullname: license.officePrepaid.LicenseEnum
         */
        export type LicenseEnum = "officeBusiness" | "officeProPlus"
        /**
         * Office Current Statisitics
         * interface fullName: license.officePrepaid.OfficeCurrentStatisticsNative.OfficeCurrentStatisticsNative
         */
        export interface OfficeCurrentStatisticsNative {
            date: string;
            lines: license.officePrepaid.StatisticsLineNative[];
        }
        /**
         * Office tenant
         * interface fullName: license.officePrepaid.OfficeTaskNative.OfficeTaskNative
         */
        export interface OfficeTaskNative {
            finishDate?: string;
            function: string;
            id: number;
            status: license.officePrepaid.TaskStatusEnum;
            todoDate: string;
        }
        /**
         * Office change password
         * interface fullName: license.officePrepaid.OfficeTenantPostChangePassword.OfficeTenantPostChangePassword
         */
        export interface OfficeTenantPostChangePassword {
            notifyEmail?: string;
            password?: string;
            shouldSendMail: boolean;
        }
        /**
         * Office user
         * interface fullName: license.officePrepaid.OfficeUser.OfficeUser
         */
        export interface OfficeUser {
            activationEmail: string;
            firstName: string;
            isVirtual: boolean;
            lastName: string;
            licences: license.office.LicenceEnum[];
            serviceName: string;
            status: license.office.UserStateEnum;
            taskPendingId: number;
            tenantServiceName: string;
            usageLocation: coreTypes.CountryEnum;
        }
        /**
         * Office tenant
         * interface fullName: license.officePrepaid.OfficeUserNative.OfficeUserNative
         */
        export interface OfficeUserNative {
            activationEmail: string;
            firstName: string;
            isVirtual: boolean;
            lastName: string;
            licences: license.officePrepaid.LicenseEnum[];
            serviceName: string;
            status: license.officePrepaid.UserStateEnum;
            taskPendingId: number;
            tenantServiceName: string;
            usageLocation: license.officePrepaid.CountryEnum;
        }
        /**
         * Office tenant
         * interface fullName: license.officePrepaid.OfficeUserNativeWithIAM.OfficeUserNativeWithIAM
         */
        export interface OfficeUserNativeWithIAM {
            activationEmail: string;
            firstName: string;
            iam?: iam.ResourceMetadata;
            isVirtual: boolean;
            lastName: string;
            licences: license.officePrepaid.LicenseEnum[];
            serviceName: string;
            status: license.officePrepaid.UserStateEnum;
            taskPendingId: number;
            tenantServiceName: string;
            usageLocation: license.officePrepaid.CountryEnum;
        }
        /**
         * Office user
         * interface fullName: license.officePrepaid.OfficeUserWithIAM.OfficeUserWithIAM
         */
        export interface OfficeUserWithIAM {
            activationEmail: string;
            firstName: string;
            iam?: iam.ResourceMetadata;
            isVirtual: boolean;
            lastName: string;
            licences: license.office.LicenceEnum[];
            serviceName: string;
            status: license.office.UserStateEnum;
            taskPendingId: number;
            tenantServiceName: string;
            usageLocation: coreTypes.CountryEnum;
        }
        /**
         * Office tenant
         * interface fullName: license.officePrepaid.PutOfficeUserNative.PutOfficeUserNative
         */
        export interface PutOfficeUserNative {
            activationEmail: string;
            firstName: string;
            lastName: string;
            usageLocation: license.officePrepaid.CountryEnum;
        }
        /**
         * License usage statistics line.
         * interface fullName: license.officePrepaid.StatisticsLineNative.StatisticsLineNative
         */
        export interface StatisticsLineNative {
            endOfDayCount: number;
            licenceType: license.officePrepaid.LicenseEnum;
            peakCount: number;
        }
        /**
         * Excahnge task status
         * type fullname: license.officePrepaid.TaskStatusEnum
         */
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        /**
         * Office tenant type
         * type fullname: license.officePrepaid.UserStateEnum
         */
        export type UserStateEnum = "creating" | "deleting" | "ok" | "suspended" | "unspending"
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
 * END API /license/officePrepaid Models
 */
export function proxyLicenseOfficePrepaid(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseOfficePrepaid;
/**
 * Api model for /license/officePrepaid
 */
export interface License {
    officePrepaid: {
        /**
         * List available services
         * GET /license/officePrepaid
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /license/officePrepaid/{serviceName}
             */
            $get(): Promise<license.officePrepaid.OfficeUserNative>;
            /**
             * Modify the office user
             * PUT /license/officePrepaid/{serviceName}
             */
            $put(params?: { activationEmail?: string, firstName?: string, lastName?: string, usageLocation?: license.officePrepaid.CountryEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changePassword: {
                /**
                 * Change password
                 * POST /license/officePrepaid/{serviceName}/changePassword
                 */
                $post(params: { notifyEmail?: string, password?: string, shouldSendMail: boolean }): Promise<license.officePrepaid.OfficeTaskNative>;
            }
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /license/officePrepaid/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            parentTenant: {
                /**
                 * Retrieve the parent tenant of this office user
                 * GET /license/officePrepaid/{serviceName}/parentTenant
                 */
                $get(): Promise<license.office.OfficeTenant>;
                /**
                 * Modify the parent tenant of this office user
                 * PUT /license/officePrepaid/{serviceName}/parentTenant
                 */
                $put(params?: { displayName?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /license/officePrepaid/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /license/officePrepaid/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            tenantPendingTask: {
                /**
                 * List pending task
                 * GET /license/officePrepaid/{serviceName}/tenantPendingTask
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /license/officePrepaid/{serviceName}/tenantPendingTask/{id}
                     */
                    $get(): Promise<license.officePrepaid.OfficeTaskNative>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            tenantUsageStatistics: {
                /**
                 * Get day-to-day statistics of license usage and availability
                 * GET /license/officePrepaid/{serviceName}/tenantUsageStatistics
                 */
                $get(params?: { from?: string, to?: string }): Promise<license.officePrepaid.OfficeCurrentStatisticsNative[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            terminate: {
                /**
                 * Ask for the termination of your service
                 * POST /license/officePrepaid/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
            unconfigure: {
                /**
                 * Unconfigure the office user
                 * POST /license/officePrepaid/{serviceName}/unconfigure
                 */
                $post(): Promise<license.officePrepaid.OfficeTaskNative>;
            }
        };
    }
}
