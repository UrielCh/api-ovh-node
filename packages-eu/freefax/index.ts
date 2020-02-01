import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /freefax Models
 * Source: https://eu.api.ovh.com/1.0/freefax.json
 */
export namespace freefax {
    // interface fullName: freefax.BalanceInformations.BalanceInformations
    export interface BalanceInformations {
        faxs: number;
        points: number;
    }
    // interface fullName: freefax.FreefaxProperties.FreefaxProperties
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
export namespace telephony {
    // type fullname: telephony.FaxQualityEnum
    export type FaxQualityEnum = "best" | "high" | "normal"
    // type fullname: telephony.FaxSendingTries
    export type FaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    // type fullname: telephony.ServiceVoicemailAudioFormatEnum
    export type ServiceVoicemailAudioFormatEnum = "aiff" | "au" | "flac" | "mp3" | "ogg" | "wav"
    // type fullname: telephony.ServiceVoicemailMailOptionEnum
    export type ServiceVoicemailMailOptionEnum = "attachment" | "simple"
    // interface fullName: telephony.ServiceVoicemailNotifications.ServiceVoicemailNotifications
    export interface ServiceVoicemailNotifications {
        email: string;
        type: telephony.ServiceVoicemailMailOptionEnum;
    }
    // type fullname: telephony.VoicefaxRoutingEnum
    export type VoicefaxRoutingEnum = "fax" | "voicemail"
    // type fullname: telephony.VoicemailGreetingEnum
    export type VoicemailGreetingEnum = "default" | "full" | "short"
    // interface fullName: telephony.VoicemailNumbers.VoicemailNumbers
    export interface VoicemailNumbers {
        external: string;
        internal: string;
    }
    // interface fullName: telephony.VoicemailProperties.VoicemailProperties
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
 * Api Proxy model
 */// Apis harmony
// path /freefax
export interface Freefax{
    // GET /freefax
    $get(): Promise<string[]>;
    credits: {
        // GET /freefax/credits
        $get(): Promise<freefax.BalanceInformations>;
    }
    $(serviceName: string): {
        // GET /freefax/{serviceName}
        $get(): Promise<freefax.FreefaxProperties>;
        // PUT /freefax/{serviceName}
        $put(params?: {faxMaxCall?: telephony.FaxSendingTries, faxQuality?: telephony.FaxQualityEnum, faxTagLine?: string, fromEmail?: string, fromName?: string, number?: string, redirectionEmail?: string[]}): Promise<void>;
        changePassword: {
            // POST /freefax/{serviceName}/changePassword
            $post(): Promise<string>;
        }
        mainService: {
            // GET /freefax/{serviceName}/mainService
            $get(): Promise<string>;
        }
        serviceInfos: {
            // GET /freefax/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /freefax/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        voicemail: {
            // GET /freefax/{serviceName}/voicemail
            $get(): Promise<telephony.VoicemailProperties>;
            // PUT /freefax/{serviceName}/voicemail
            $put(params?: {annouceMessage?: string, audioFormat?: telephony.ServiceVoicemailAudioFormatEnum, doNotRecord?: boolean, forcePassword?: boolean, fromEmail?: string, fromName?: string, fullGreetingSoundId?: number, greetingType?: telephony.VoicemailGreetingEnum, isNewVersion?: boolean, keepMessage?: boolean, redirectionEmails?: telephony.ServiceVoicemailNotifications[], shortGreetingSoundId?: number, temporaryGreetingActivated?: boolean, temporaryGreetingSoundId?: number, unreadMessages?: number}): Promise<void>;
            changePassword: {
                // POST /freefax/{serviceName}/voicemail/changePassword
                $post(params: {password: string}): Promise<void>;
            }
            changeRouting: {
                // POST /freefax/{serviceName}/voicemail/changeRouting
                $post(params: {routing: telephony.VoicefaxRoutingEnum}): Promise<void>;
            }
            routing: {
                // GET /freefax/{serviceName}/voicemail/routing
                $get(): Promise<telephony.VoicefaxRoutingEnum>;
            }
            voicemailNumbers: {
                // GET /freefax/{serviceName}/voicemail/voicemailNumbers
                $get(): Promise<telephony.VoicemailNumbers>;
            }
        }
    };
}
