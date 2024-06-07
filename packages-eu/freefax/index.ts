import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /freefax Models
 * Source: https://eu.api.ovh.com/1.0/freefax.json
 */
export namespace freefax {
    /**
     * Return credit balance information structure
     * interface fullName: freefax.BalanceInformations.BalanceInformations
     */
    export interface BalanceInformations {
        faxs: number;
        points: number;
    }
    /**
     * Freefax properties
     * interface fullName: freefax.FreefaxProperties.FreefaxProperties
     */
    export interface FreefaxProperties {
        faxMaxCall: telephony.FaxSendingTriesEnum;
        faxQuality: telephony.FaxQualityEnum;
        faxTagLine: string;
        fromEmail: string;
        fromName: string;
        number: string;
        redirectionEmail: string[];
    }
    /**
     * Freefax properties
     * interface fullName: freefax.FreefaxPropertiesWithIAM.FreefaxPropertiesWithIAM
     */
    export interface FreefaxPropertiesWithIAM {
        faxMaxCall: telephony.FaxSendingTriesEnum;
        faxQuality: telephony.FaxQualityEnum;
        faxTagLine: string;
        fromEmail: string;
        fromName: string;
        iam?: iam.ResourceMetadata;
        number: string;
        redirectionEmail: string[];
    }
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
export namespace nichandle {
    /**
     * All genders a person can choose
     * type fullname: nichandle.GenderEnum
     */
    export type GenderEnum = "female" | "male"
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
     * service.StateEnum
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
export namespace telephony {
    /**
     * Directory information
     * interface fullName: telephony.DirectoryHeadingPJ.DirectoryHeadingPJ
     */
    export interface DirectoryHeadingPJ {
        apeCode: string;
        apeDescription: string;
        directoryServiceCode: number;
        directoryServiceDescription: string;
        notification: string;
    }
    /**
     * Directory information
     * interface fullName: telephony.DirectoryInfo.DirectoryInfo
     */
    export interface DirectoryInfo {
        PJSocialNomination: string;
        address: string;
        addressExtra: string;
        ape: string;
        areaCode: number;
        birthDate?: string;
        cedex: string;
        city: string;
        country: string;
        directoryServiceCode: string;
        displayFirstName: boolean;
        displayMarketingDirectory: boolean;
        displayOnlyCity: boolean;
        displaySearchReverse: boolean;
        displayUniversalDirectory: boolean;
        email: string;
        firstName: string;
        gender: nichandle.GenderEnum;
        inseeCode: number;
        legalForm: string;
        lineDescription: string;
        modificationDate: string;
        modificationType: string;
        name: string;
        number: string;
        occupation: string;
        postBox: string;
        postCode: string;
        receivePJDirectory: boolean;
        siret: string;
        socialNomination: string;
        socialNominationExtra: string;
        status: string;
        urbanDistrict: string;
        wayName: string;
        wayNumber: string;
        wayNumberExtra: string;
        wayType: string;
    }
    /**
     * Directory way type
     * interface fullName: telephony.DirectoryWayType.DirectoryWayType
     */
    export interface DirectoryWayType {
        abbreviatedName: string;
        wayName: string;
    }
    /**
     * Enterprise number
     * interface fullName: telephony.EntrepriseNumber.EntrepriseNumber
     */
    export interface EntrepriseNumber {
        entrepriseNumber: string;
    }
    /**
     * Task information about an entreprise
     * interface fullName: telephony.EntrepriseNumberInformations.EntrepriseNumberInformations
     */
    export interface EntrepriseNumberInformations {
        address?: string;
        ape?: string;
        brand?: string;
        entrepriseNumber: string;
        isValid: boolean;
        name: string;
        siren?: string;
    }
    /**
     * Task about getting entreprise information
     * interface fullName: telephony.EntrepriseNumberInformationsTask.EntrepriseNumberInformationsTask
     */
    export interface EntrepriseNumberInformationsTask {
        informations: telephony.EntrepriseNumberInformations;
        status: telephony.TaskStatusEnum;
    }
    /**
     * Available quality for fax documents
     * type fullname: telephony.FaxQualityEnum
     */
    export type FaxQualityEnum = "best" | "high" | "normal"
    /**
     * Number of tries when sending a fax
     * type fullname: telephony.FaxSendingTries
     */
    export type FaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    /**
     * Number of tries when sending a fax
     * type fullname: telephony.FaxSendingTriesEnum
     */
    export type FaxSendingTriesEnum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    /**
     * Voicemail audio format
     * type fullname: telephony.ServiceVoicemailAudioFormatEnum
     */
    export type ServiceVoicemailAudioFormatEnum = "aiff" | "au" | "flac" | "mp3" | "ogg" | "wav"
    /**
     * Voicemail configuration
     * type fullname: telephony.ServiceVoicemailMailOptionEnum
     */
    export type ServiceVoicemailMailOptionEnum = "attachment" | "simple"
    /**
     * Voicemail configuration
     * interface fullName: telephony.ServiceVoicemailNotifications.ServiceVoicemailNotifications
     */
    export interface ServiceVoicemailNotifications {
        email: string;
        type: telephony.ServiceVoicemailMailOptionEnum;
    }
    /**
     * Task status
     * type fullname: telephony.TaskStatusEnum
     */
    export type TaskStatusEnum = "doing" | "done" | "error" | "pause" | "todo"
    /**
     * All existing type of routing for a voicemail
     * type fullname: telephony.VoicefaxRoutingEnum
     */
    export type VoicefaxRoutingEnum = "fax" | "voicemail"
    /**
     * Greeting type
     * type fullname: telephony.VoicemailGreetingEnum
     */
    export type VoicemailGreetingEnum = "default" | "full" | "short"
    /**
     * Internal and external numbers for voicemail service
     * interface fullName: telephony.VoicemailNumbers.VoicemailNumbers
     */
    export interface VoicemailNumbers {
        external: string;
        internal: string;
    }
    /**
     * Voicemail Properties
     * interface fullName: telephony.VoicemailProperties.VoicemailProperties
     */
    export interface VoicemailProperties {
        annouceMessage: string;
        audioFormat: telephony.ServiceVoicemailAudioFormatEnum;
        doNotRecord: boolean;
        forcePassword: boolean;
        fromEmail: string;
        fromName: string;
        fullGreetingSoundId?: number;
        greetingType: telephony.VoicemailGreetingEnum;
        isNewVersion: boolean;
        keepMessage: boolean;
        redirectionEmails: telephony.ServiceVoicemailNotifications[];
        shortGreetingSoundId?: number;
        temporaryGreetingActivated: boolean;
        temporaryGreetingSoundId?: number;
        unreadMessages: number;
    }
    export namespace voicemail {
        /**
         * Change voicemail password
         * interface fullName: telephony.voicemail.ChangePassword.ChangePassword
         */
        export interface ChangePassword {
            password: string;
        }
        /**
         * Change voicemail routing
         * interface fullName: telephony.voicemail.ChangeRouting.ChangeRouting
         */
        export interface ChangeRouting {
            routing: telephony.VoicefaxRoutingEnum;
        }
    }
}

/**
 * END API /freefax Models
 */
export function proxyFreefax(ovhEngine: OvhRequestable): Freefax {
    return buildOvhProxy(ovhEngine, '/freefax');
}
export default proxyFreefax;
/**
 * Api model for /freefax
 */
export interface Freefax {
    /**
     * List Freefax line accounts
     * GET /freefax
     */
    $get(params?: { iamTags?: any }): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    credits: {
        /**
         * Get the credit balance and the remaining pages available for all our freefax
         * GET /freefax/credits
         */
        $get(): Promise<freefax.BalanceInformations>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    $(serviceName: string): {
        /**
         * Get Freefax information
         * GET /freefax/{serviceName}
         */
        $get(): Promise<freefax.FreefaxProperties>;
        /**
         * Edit the Freefax properties
         * PUT /freefax/{serviceName}
         */
        $put(params?: { faxMaxCall?: telephony.FaxSendingTriesEnum, faxQuality?: telephony.FaxQualityEnum, faxTagLine?: string, fromEmail?: string, fromName?: string, number?: string, redirectionEmail?: string[] }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        changePassword: {
            /**
             * Generates a new password for your fax account
             * POST /freefax/{serviceName}/changePassword
             */
            $post(): Promise<string>;
        }
        directory: {
            /**
             * Get Freefax directory information
             * GET /freefax/{serviceName}/directory
             */
            $get(): Promise<telephony.DirectoryInfo>;
            /**
             * Edit Freefax directory information
             * PUT /freefax/{serviceName}/directory
             */
            $put(params?: { PJSocialNomination?: string, address?: string, addressExtra?: string, ape?: string, areaCode?: number, birthDate?: string, cedex?: string, city?: string, country?: string, directoryServiceCode?: string, displayFirstName?: boolean, displayMarketingDirectory?: boolean, displayOnlyCity?: boolean, displaySearchReverse?: boolean, displayUniversalDirectory?: boolean, email?: string, firstName?: string, gender?: nichandle.GenderEnum, inseeCode?: number, legalForm?: string, lineDescription?: string, modificationDate?: string, modificationType?: string, name?: string, number?: string, occupation?: string, postBox?: string, postCode?: string, receivePJDirectory?: boolean, siret?: string, socialNomination?: string, socialNominationExtra?: string, status?: string, urbanDistrict?: string, wayName?: string, wayNumber?: string, wayNumberExtra?: string, wayType?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            fetchEntrepriseInformations: {
                /**
                 * Get enterprise information by providing enterprise number
                 * POST /freefax/{serviceName}/directory/fetchEntrepriseInformations
                 */
                $post(params: { entrepriseNumber: string }): Promise<telephony.EntrepriseNumberInformationsTask>;
            }
            getDirectoryServiceCode: {
                /**
                 * Get directory service code from an APE code (principal activity of the firm code)
                 * GET /freefax/{serviceName}/directory/getDirectoryServiceCode
                 */
                $get(params: { apeCode: string }): Promise<telephony.DirectoryHeadingPJ[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            getWayTypes: {
                /**
                 * Get all the way types available
                 * GET /freefax/{serviceName}/directory/getWayTypes
                 */
                $get(): Promise<telephony.DirectoryWayType[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        mainService: {
            /**
             * Get main service attached to the Freefax
             * GET /freefax/{serviceName}/mainService
             */
            $get(): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        serviceInfos: {
            /**
             * Get service information
             * GET /freefax/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Update service information
             * PUT /freefax/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        voicemail: {
            /**
             * Get the Freefax voicemail information
             * GET /freefax/{serviceName}/voicemail
             */
            $get(): Promise<telephony.VoicemailProperties>;
            /**
             * Edit the Freefax voicemail
             * PUT /freefax/{serviceName}/voicemail
             */
            $put(params?: { annouceMessage?: string, audioFormat?: telephony.ServiceVoicemailAudioFormatEnum, doNotRecord?: boolean, forcePassword?: boolean, fromEmail?: string, fromName?: string, fullGreetingSoundId?: number, greetingType?: telephony.VoicemailGreetingEnum, isNewVersion?: boolean, keepMessage?: boolean, redirectionEmails?: telephony.ServiceVoicemailNotifications[], shortGreetingSoundId?: number, temporaryGreetingActivated?: boolean, temporaryGreetingSoundId?: number, unreadMessages?: number }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changePassword: {
                /**
                 * Change the voicemail password. It must be 4 digit
                 * POST /freefax/{serviceName}/voicemail/changePassword
                 */
                $post(params: { password: string }): Promise<void>;
            }
            changeRouting: {
                /**
                 * Disable/Enable voicemail. Available only if the line has fax capabilities
                 * POST /freefax/{serviceName}/voicemail/changeRouting
                 */
                $post(params: { routing: telephony.VoicefaxRoutingEnum }): Promise<void>;
            }
            routing: {
                /**
                 * Get the status of the voicemail. Available only if the line has fax capabilities
                 * GET /freefax/{serviceName}/voicemail/routing
                 */
                $get(): Promise<telephony.VoicefaxRoutingEnum>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            voicemailNumbers: {
                /**
                 * Get number for internal and external voicemail
                 * GET /freefax/{serviceName}/voicemail/voicemailNumbers
                 */
                $get(): Promise<telephony.VoicemailNumbers>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
    };
}
