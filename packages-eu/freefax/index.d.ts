import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /freefax Models
 */
export declare namespace freefax {
    interface BalanceInformations {
        faxs: number;
        points: number;
    }
    interface FreefaxProperties {
        faxMaxCall: telephony.FaxSendingTries;
        faxQuality: telephony.FaxQualityEnum;
        faxTagLine: string;
        fromEmail: string;
        fromName: string;
        number: string;
        redirectionEmail: string[];
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
export declare namespace telephony {
    type FaxQualityEnum = "best" | "high" | "normal";
    type FaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    type ServiceVoicemailAudioFormatEnum = "aiff" | "au" | "flac" | "mp3" | "ogg" | "wav";
    type ServiceVoicemailMailOptionEnum = "attachment" | "simple";
    interface ServiceVoicemailNotifications {
        email: string;
        type: telephony.ServiceVoicemailMailOptionEnum;
    }
    type VoicefaxRoutingEnum = "fax" | "voicemail";
    type VoicemailGreetingEnum = "default" | "full" | "short";
    interface VoicemailNumbers {
        external: string;
        internal: string;
    }
    interface VoicemailProperties {
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
export declare function proxyFreefax(ovhEngine: OvhRequestable): Freefax;
export default proxyFreefax;
/**
 * Api Proxy model
 */ export interface Freefax {
    $get(): Promise<string[]>;
    credits: {
        $get(): Promise<freefax.BalanceInformations>;
    };
    $(serviceName: string): {
        $get(): Promise<freefax.FreefaxProperties>;
        $put(params?: {
            faxMaxCall?: telephony.FaxSendingTries;
            faxQuality?: telephony.FaxQualityEnum;
            faxTagLine?: string;
            fromEmail?: string;
            fromName?: string;
            number?: string;
            redirectionEmail?: string[];
        }): Promise<void>;
        changePassword: {
            $post(): Promise<string>;
        };
        mainService: {
            $get(): Promise<string>;
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
        voicemail: {
            $get(): Promise<telephony.VoicemailProperties>;
            $put(params?: {
                annouceMessage?: string;
                audioFormat?: telephony.ServiceVoicemailAudioFormatEnum;
                doNotRecord?: boolean;
                forcePassword?: boolean;
                fromEmail?: string;
                fromName?: string;
                fullGreetingSoundId?: number;
                greetingType?: telephony.VoicemailGreetingEnum;
                isNewVersion?: boolean;
                keepMessage?: boolean;
                redirectionEmails?: telephony.ServiceVoicemailNotifications[];
                shortGreetingSoundId?: number;
                temporaryGreetingActivated?: boolean;
                temporaryGreetingSoundId?: number;
                unreadMessages?: number;
            }): Promise<void>;
            changePassword: {
                $post(params: {
                    password: string;
                }): Promise<void>;
            };
            changeRouting: {
                $post(params: {
                    routing: telephony.VoicefaxRoutingEnum;
                }): Promise<void>;
            };
            routing: {
                $get(): Promise<telephony.VoicefaxRoutingEnum>;
            };
            voicemailNumbers: {
                $get(): Promise<telephony.VoicemailNumbers>;
            };
        };
    };
    /**
     * Operations about the VOIP service
     * List available services
     */
    get(path: '/freefax'): () => Promise<string[]>;
    /**
     * Freefax properties
     * Get this object properties
     */
    get(path: '/freefax/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<freefax.FreefaxProperties>;
    /**
     * mainService operations
     * Main service attached to freefax
     */
    get(path: '/freefax/{serviceName}/mainService'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/freefax/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Voicemail Properties
     * Get this object properties
     */
    get(path: '/freefax/{serviceName}/voicemail'): (params: {
        serviceName: string;
    }) => Promise<telephony.VoicemailProperties>;
    /**
     * routing operations
     * Get the status of the voicemail. Available only if the line has fax capabilities
     */
    get(path: '/freefax/{serviceName}/voicemail/routing'): (params: {
        serviceName: string;
    }) => Promise<telephony.VoicefaxRoutingEnum>;
    /**
     * voicemailNumbers operations
     * Get number for internal and external voicemail
     */
    get(path: '/freefax/{serviceName}/voicemail/voicemailNumbers'): (params: {
        serviceName: string;
    }) => Promise<telephony.VoicemailNumbers>;
    /**
     * Get the credit balance and the remaining pages available for all our freefax
     * Get the credit balance and the remaining pages available for all our freefax
     */
    get(path: '/freefax/credits'): () => Promise<freefax.BalanceInformations>;
    /**
     * Freefax properties
     * Alter this object properties
     */
    put(path: '/freefax/{serviceName}'): (params: {
        serviceName: string;
        faxMaxCall?: telephony.FaxSendingTries;
        faxQuality?: telephony.FaxQualityEnum;
        faxTagLine?: string;
        fromEmail?: string;
        fromName?: string;
        number?: string;
        redirectionEmail?: string[];
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/freefax/{serviceName}/serviceInfos'): (params: {
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
     * Voicemail Properties
     * Alter this object properties
     */
    put(path: '/freefax/{serviceName}/voicemail'): (params: {
        serviceName: string;
        annouceMessage?: string;
        audioFormat?: telephony.ServiceVoicemailAudioFormatEnum;
        doNotRecord?: boolean;
        forcePassword?: boolean;
        fromEmail?: string;
        fromName?: string;
        fullGreetingSoundId?: number;
        greetingType?: telephony.VoicemailGreetingEnum;
        isNewVersion?: boolean;
        keepMessage?: boolean;
        redirectionEmails?: telephony.ServiceVoicemailNotifications[];
        shortGreetingSoundId?: number;
        temporaryGreetingActivated?: boolean;
        temporaryGreetingSoundId?: number;
        unreadMessages?: number;
    }) => Promise<void>;
    /**
     * changePassword operations
     * Generates a new password for your fax account
     */
    post(path: '/freefax/{serviceName}/changePassword'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * changePassword operations
     * Change the voicemail password. It must be 4 digit
     */
    post(path: '/freefax/{serviceName}/voicemail/changePassword'): (params: {
        serviceName: string;
        password: string;
    }) => Promise<void>;
    /**
     * changeRouting operations
     * Disable/Enable voicemail. Available only if the line has fax capabilities
     */
    post(path: '/freefax/{serviceName}/voicemail/changeRouting'): (params: {
        serviceName: string;
        routing: telephony.VoicefaxRoutingEnum;
    }) => Promise<void>;
}
