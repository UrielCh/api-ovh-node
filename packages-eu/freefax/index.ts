import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /freefax Models
 * Source: https://eu.api.ovh.com/1.0/freefax.json
 */
export namespace freefax {
    /**
     * Return credit balance informations structure
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
        faxMaxCall: telephony.FaxSendingTries;
        faxQuality: telephony.FaxQualityEnum;
        faxTagLine: string;
        fromEmail: string;
        fromName: string;
        number: string;
        redirectionEmail: string[];
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
export namespace telephony {
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
     * List available services
     * GET /freefax
     */
    $get(): Promise<string[]>;
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
         * Get this object properties
         * GET /freefax/{serviceName}
         */
        $get(): Promise<freefax.FreefaxProperties>;
        /**
         * Alter this object properties
         * PUT /freefax/{serviceName}
         */
        $put(params?: { faxMaxCall?: telephony.FaxSendingTries, faxQuality?: telephony.FaxQualityEnum, faxTagLine?: string, fromEmail?: string, fromName?: string, number?: string, redirectionEmail?: string[] }): Promise<void>;
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
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        mainService: {
            /**
             * Main service attached to freefax
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
             * Get this object properties
             * GET /freefax/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
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
             * Get this object properties
             * GET /freefax/{serviceName}/voicemail
             */
            $get(): Promise<telephony.VoicemailProperties>;
            /**
             * Alter this object properties
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
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeRouting: {
                /**
                 * Disable/Enable voicemail. Available only if the line has fax capabilities
                 * POST /freefax/{serviceName}/voicemail/changeRouting
                 */
                $post(params: { routing: telephony.VoicefaxRoutingEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
