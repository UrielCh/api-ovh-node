import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /license/office Models
 * Source: https://eu.api.ovh.com/1.0/license/office.json
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
         * ISO country codes
         * type fullname: license.office.CountryEnum
         */
        export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
        /**
         * Office tenant
         * interface fullName: license.office.DomainNative.DomainNative
         */
        export interface DomainNative {
            domainName: string;
            status: license.office.DomainStatusEnum;
            txtEntry: string;
        }
        /**
         * Office domain state
         * type fullname: license.office.DomainStateEnum
         */
        export type DomainStateEnum = "ok" | "unverified"
        /**
         * Office tenant type
         * type fullname: license.office.DomainStatusEnum
         */
        export type DomainStatusEnum = "ok" | "unverified"
        /**
         * Office Licence
         * type fullname: license.office.LicenceEnum
         */
        export type LicenceEnum = "officeBusiness" | "officeProPlus"
        /**
         * Office tenant type
         * type fullname: license.office.LicenseEnum
         */
        export type LicenseEnum = "officeBusiness" | "officeProPlus"
        /**
         * Office Current Statisitics
         * interface fullName: license.office.OfficeCurrentStatisticsNative.OfficeCurrentStatisticsNative
         */
        export interface OfficeCurrentStatisticsNative {
            date: string;
            lines: license.office.StatisticsLineNative[];
        }
        /**
         * Office domain
         * interface fullName: license.office.OfficeDomain.OfficeDomain
         */
        export interface OfficeDomain {
            domainName: string;
            status: license.office.DomainStateEnum;
            txtEntry: string;
        }
        /**
         * Office subscription
         * interface fullName: license.office.OfficeSubscription.OfficeSubscription
         */
        export interface OfficeSubscription {
            creationDate: string;
            id: number;
            lastUpdate?: string;
            licenseId: number;
            quantity: number;
            status: string;
            taskPendingId: number;
        }
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
         * interface fullName: license.office.OfficeTaskNative.OfficeTaskNative
         */
        export interface OfficeTaskNative {
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
         * Office tenant
         * interface fullName: license.office.OfficeTenantNative.OfficeTenantNative
         */
        export interface OfficeTenantNative {
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
         * Office tenant
         * interface fullName: license.office.OfficeTenantNativeWithIAM.OfficeTenantNativeWithIAM
         */
        export interface OfficeTenantNativeWithIAM {
            address: string;
            city: string;
            creationDate: string;
            displayName: string;
            firstName: string;
            iam?: iam.ResourceMetadata;
            lastName: string;
            phone: string;
            serviceName: string;
            serviceType: license.office.ServiceTypeEnum;
            status: license.office.ServiceStateEnum;
            zipCode: string;
        }
        /**
         * Office change password
         * interface fullName: license.office.OfficeTenantPostChangePassword.OfficeTenantPostChangePassword
         */
        export interface OfficeTenantPostChangePassword {
            notifyEmail?: string;
            password?: string;
            shouldSendMail: boolean;
        }
        /**
         * Office tenant
         * interface fullName: license.office.OfficeTenantWithIAM.OfficeTenantWithIAM
         */
        export interface OfficeTenantWithIAM {
            address: string;
            city: string;
            creationDate: string;
            displayName: string;
            firstName: string;
            iam?: iam.ResourceMetadata;
            lastName: string;
            phone: string;
            serviceName: string;
            serviceType: license.office.ServiceTypeEnum;
            status: license.office.ServiceStateEnum;
            zipCode: string;
        }
        /**
         * Office user
         * interface fullName: license.office.OfficeUser.OfficeUser
         */
        export interface OfficeUser {
            activationEmail: string;
            deleteAtExpiration: boolean;
            firstName: string;
            isVirtual: boolean;
            lastName: string;
            licences: license.office.LicenceEnum[];
            status: license.office.UserStateEnum;
            taskPendingId: number;
            usageLocation: coreTypes.CountryEnum;
        }
        /**
         * Office user
         * interface fullName: license.office.OfficeUserNative.OfficeUserNative
         */
        export interface OfficeUserNative {
            activationEmail: string;
            deleteAtExpiration: boolean;
            firstName: string;
            isVirtual: boolean;
            lastName: string;
            licences: license.office.LicenseEnum[];
            status: license.office.UserStateEnum;
            taskPendingId: number;
            usageLocation: license.office.CountryEnum;
        }
        /**
         * Office user
         * interface fullName: license.office.OfficeUserNativeUpdate.OfficeUserNativeUpdate
         */
        export interface OfficeUserNativeUpdate {
            activationEmail: string;
            deleteAtExpiration: boolean;
            firstName: string;
            lastName: string;
            usageLocation: license.office.CountryEnum;
        }
        /**
         * Office user
         * interface fullName: license.office.PostUserNative.PostUserNative
         */
        export interface PostUserNative {
            domain: string;
            firstName: string;
            lastName: string;
            licence: license.officePrepaid.LicenseEnum;
            login: string;
            usageLocation: license.officePrepaid.CountryEnum;
        }
        /**
         * Office tenant state
         * type fullname: license.office.ServiceStateEnum
         */
        export type ServiceStateEnum = "creating" | "inMaintenance" | "ok" | "reopening" | "suspended" | "suspending"
        /**
         * Office tenant type
         * type fullname: license.office.ServiceTypeEnum
         */
        export type ServiceTypeEnum = "payAsYouGo" | "prepaid"
        /**
         * License usage statistic.
         * interface fullName: license.office.Statistic.Statistic
         */
        export interface Statistic {
            available: number;
            licenseId: number;
            used: number;
        }
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
         * License usage statistics line.
         * interface fullName: license.office.StatisticsLineNative.StatisticsLineNative
         */
        export interface StatisticsLineNative {
            endOfDayCount: number;
            licenceType: license.office.LicenseEnum;
            peakCount: number;
        }
        /**
         * Excahnge task status
         * type fullname: license.office.TaskStatusEnum
         */
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        /**
         * Office tenant type
         * type fullname: license.office.UserStateEnum
         */
        export type UserStateEnum = "creating" | "deleting" | "ok" | "suspended" | "suspending" | "unsuspending"
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
 * END API /license/office Models
 */
export function proxyLicenseOffice(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseOffice;
/**
 * Api model for /license/office
 */
export interface License {
    office: {
        /**
         * List available services
         * GET /license/office
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /license/office/{serviceName}
             */
            $get(): Promise<license.office.OfficeTenantNative>;
            /**
             * Modify the office service
             * PUT /license/office/{serviceName}
             */
            $put(params?: { address?: string, city?: string, creationDate?: string, displayName?: string, firstName?: string, lastName?: string, phone?: string, serviceName?: string, serviceType?: license.office.ServiceTypeEnum, status?: license.office.ServiceStateEnum, zipCode?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            domain: {
                /**
                 * List available services
                 * GET /license/office/{serviceName}/domain
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(domainName: string): {
                    /**
                     * Get this object properties
                     * GET /license/office/{serviceName}/domain/{domainName}
                     */
                    $get(): Promise<license.office.DomainNative>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            pendingTask: {
                /**
                 * List pending task
                 * GET /license/office/{serviceName}/pendingTask
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /license/office/{serviceName}/pendingTask/{id}
                     */
                    $get(): Promise<license.office.OfficeTaskNative>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /license/office/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /license/office/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            usageStatistics: {
                /**
                 * Get day-to-day statistics of license usage and availability
                 * GET /license/office/{serviceName}/usageStatistics
                 */
                $get(params?: { from?: string, to?: string }): Promise<license.office.OfficeCurrentStatisticsNative[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            user: {
                /**
                 * Get accounts associated to this office tenant
                 * GET /license/office/{serviceName}/user
                 */
                $get(params?: { activationEmail?: string, firstName?: string, lastName?: string, licences?: license.office.LicenseEnum[] }): Promise<string[]>;
                /**
                 * Create new office user
                 * POST /license/office/{serviceName}/user
                 */
                $post(params: { domain: string, firstName?: string, lastName?: string, licence?: license.officePrepaid.LicenseEnum, login: string, usageLocation?: license.officePrepaid.CountryEnum }): Promise<license.office.OfficeTaskNative>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(activationEmail: string): {
                    /**
                     * Delete existing office user
                     * DELETE /license/office/{serviceName}/user/{activationEmail}
                     */
                    $delete(): Promise<license.office.OfficeTaskNative>;
                    /**
                     * Get an office user
                     * GET /license/office/{serviceName}/user/{activationEmail}
                     */
                    $get(): Promise<license.office.OfficeUserNative>;
                    /**
                     * Modify the office user
                     * PUT /license/office/{serviceName}/user/{activationEmail}
                     */
                    $put(params?: { activationEmail?: string, deleteAtExpiration?: boolean, firstName?: string, lastName?: string, usageLocation?: license.office.CountryEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Change password
                         * POST /license/office/{serviceName}/user/{activationEmail}/changePassword
                         */
                        $post(params: { notifyEmail?: string, password?: string, shouldSendMail: boolean }): Promise<license.office.OfficeTaskNative>;
                    }
                };
            }
        };
    }
}
