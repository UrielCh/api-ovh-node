import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace freefax {
    //freefax.BalanceInformations
    // fullName: freefax.BalanceInformations.BalanceInformations
    export interface BalanceInformations {
        faxs: number;
        points: number;
    }
    //freefax.FreefaxProperties
    // fullName: freefax.FreefaxProperties.FreefaxProperties
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
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
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
    //telephony.FaxQualityEnum
    export type FaxQualityEnum = "best" | "high" | "normal"
    //telephony.FaxSendingTries
    export type FaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    //telephony.ServiceVoicemailAudioFormatEnum
    export type ServiceVoicemailAudioFormatEnum = "aiff" | "au" | "flac" | "mp3" | "ogg" | "wav"
    //telephony.ServiceVoicemailMailOptionEnum
    export type ServiceVoicemailMailOptionEnum = "attachment" | "simple"
    //telephony.ServiceVoicemailNotifications
    // fullName: telephony.ServiceVoicemailNotifications.ServiceVoicemailNotifications
    export interface ServiceVoicemailNotifications {
        email: string;
        type: telephony.ServiceVoicemailMailOptionEnum;
    }
    //telephony.VoicefaxRoutingEnum
    export type VoicefaxRoutingEnum = "fax" | "voicemail"
    //telephony.VoicemailGreetingEnum
    export type VoicemailGreetingEnum = "default" | "full" | "short"
    //telephony.VoicemailNumbers
    // fullName: telephony.VoicemailNumbers.VoicemailNumbers
    export interface VoicemailNumbers {
        external: string;
        internal: string;
    }
    //telephony.VoicemailProperties
    // fullName: telephony.VoicemailProperties.VoicemailProperties
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
// Apis harmony
// path /freefax
export interface Freefax{
    // GET /freefax
    $get(): Promise<string[]>;
    credits: {
        // GET /freefax/credits
        $get(): Promise<freefax.BalanceInformations>;
    }
    [keys: string]:{
        // GET /freefax/{serviceName}
        $get(): Promise<freefax.FreefaxProperties>;
        // PUT /freefax/{serviceName}
        $put(body?: {body: freefax.FreefaxProperties}): Promise<void>;
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
            $put(body?: {body: services.Service}): Promise<void>;
        }
        voicemail: {
            // GET /freefax/{serviceName}/voicemail
            $get(): Promise<telephony.VoicemailProperties>;
            // PUT /freefax/{serviceName}/voicemail
            $put(body?: {body: telephony.VoicemailProperties}): Promise<void>;
            changePassword: {
                // POST /freefax/{serviceName}/voicemail/changePassword
                $post(body?: {password: string}): Promise<void>;
            }
            changeRouting: {
                // POST /freefax/{serviceName}/voicemail/changeRouting
                $post(body?: {routing: telephony.VoicefaxRoutingEnum}): Promise<void>;
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
    } | any
}
// Api
type PathsFreefaxGET = '/freefax' |
  '/freefax/credits' |
  '/freefax/{serviceName}' |
  '/freefax/{serviceName}/mainService' |
  '/freefax/{serviceName}/serviceInfos' |
  '/freefax/{serviceName}/voicemail' |
  '/freefax/{serviceName}/voicemail/routing' |
  '/freefax/{serviceName}/voicemail/voicemailNumbers';

type PathsFreefaxPUT = '/freefax/{serviceName}' |
  '/freefax/{serviceName}/serviceInfos' |
  '/freefax/{serviceName}/voicemail';

type PathsFreefaxPOST = '/freefax/{serviceName}/changePassword' |
  '/freefax/{serviceName}/voicemail/changePassword' |
  '/freefax/{serviceName}/voicemail/changeRouting';

export class ApiFreefax extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/freefax'): Promise<string[]>;
  /**
   * Freefax properties
   * Get this object properties
   */
  public get(path: '/freefax/{serviceName}', params: {serviceName: string}): Promise<freefax.FreefaxProperties>;
  /**
   * mainService operations
   * Main service attached to freefax
   */
  public get(path: '/freefax/{serviceName}/mainService', params: {serviceName: string}): Promise<string>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/freefax/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Voicemail Properties
   * Get this object properties
   */
  public get(path: '/freefax/{serviceName}/voicemail', params: {serviceName: string}): Promise<telephony.VoicemailProperties>;
  /**
   * routing operations
   * Get the status of the voicemail. Available only if the line has fax capabilities
   */
  public get(path: '/freefax/{serviceName}/voicemail/routing', params: {serviceName: string}): Promise<telephony.VoicefaxRoutingEnum>;
  /**
   * voicemailNumbers operations
   * Get number for internal and external voicemail
   */
  public get(path: '/freefax/{serviceName}/voicemail/voicemailNumbers', params: {serviceName: string}): Promise<telephony.VoicemailNumbers>;
  /**
   * Get the credit balance and the remaining pages available for all our freefax
   * Get the credit balance and the remaining pages available for all our freefax
   */
  public get(path: '/freefax/credits'): Promise<freefax.BalanceInformations>;
  public get(path: PathsFreefaxGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Freefax properties
   * Alter this object properties
   */
  public put(path: '/freefax/{serviceName}', params: {serviceName: string, faxMaxCall?: telephony.FaxSendingTries, faxQuality?: telephony.FaxQualityEnum, faxTagLine?: string, fromEmail?: string, fromName?: string, number?: string, redirectionEmail?: string[]}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/freefax/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
  /**
   * Voicemail Properties
   * Alter this object properties
   */
  public put(path: '/freefax/{serviceName}/voicemail', params: {serviceName: string, annouceMessage?: string, audioFormat?: telephony.ServiceVoicemailAudioFormatEnum, doNotRecord?: boolean, forcePassword?: boolean, fromEmail?: string, fromName?: string, fullGreetingSoundId?: number, greetingType?: telephony.VoicemailGreetingEnum, isNewVersion?: boolean, keepMessage?: boolean, redirectionEmails?: telephony.ServiceVoicemailNotifications[], shortGreetingSoundId?: number, temporaryGreetingActivated?: boolean, temporaryGreetingSoundId?: number, unreadMessages?: number}): Promise<void>;
  public put(path: PathsFreefaxPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * changePassword operations
   * Generates a new password for your fax account
   */
  public post(path: '/freefax/{serviceName}/changePassword', params: {serviceName: string}): Promise<string>;
  /**
   * changePassword operations
   * Change the voicemail password. It must be 4 digit
   */
  public post(path: '/freefax/{serviceName}/voicemail/changePassword', params: {serviceName: string, password: string}): Promise<void>;
  /**
   * changeRouting operations
   * Disable/Enable voicemail. Available only if the line has fax capabilities
   */
  public post(path: '/freefax/{serviceName}/voicemail/changeRouting', params: {serviceName: string, routing: telephony.VoicefaxRoutingEnum}): Promise<void>;
  public post(path: PathsFreefaxPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
