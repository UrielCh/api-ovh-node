import { SlotConstructor } from "@ovh-api/common";
import { CertMonitorProvider } from ".";

export type OvhEntryPointEnum = 'ovh-eu' | 'ovh-us' | 'ovh-ca' | 'runabove-ca' | 'sys-eu' | 'sys-ca' | 'soyoustart-eu' | 'soyoustart-ca' | 'ks-eu' | 'ks-ca' | 'kimsufi-eu' | 'kimsufi-ca';

export type OvhParams = Partial<OvhParamsFull>;

export interface OvhParamsFull {
    /** 
     * appKey generated from https://eu.api.ovh.com/createApp/
     * use a built-in appKey by default for test and open environement
     * for production it's highly recomanded to generate your own.
     */
    appKey: string;
    /** 
     * appSecret generated from https://eu.api.ovh.com/createApp/
     * use a built-in appSecret by default for test and open environement
     * for production it's highly recomanded to generate your own and to keep if secret.
     */
    appSecret: string;
    /**
     * This OVH api can ask for it on demande whene used in a GUI, or you can provide it here for a server usage.
     */
    consumerKey: string;
    /**
     * Define a setTimeout for all Api TCP connexions.
     */
    timeout: number;
    /**
     * Time offset from remote server, default is autodetect.
     * you should not need to give a value here.
     */
    apiTimeDiff: number | null;
    /**
     * Api Entrypoint, by default use 'ovh-eu'
     */
    endpoint: OvhEntryPointEnum;
    /**
     * ovh api hostname if you do not want to use an official public entrypoint
     */
    host: string;
    /**
     * ovh api port if you do not want to use an official public entrypoint
     */
    port: number;
    /**
     * Explicite ask for given access rules, by default, get all access eqivalent to 'GET /*, POST /*, PUT /*, DELETE /*'
     * rules can be give as an array of rules, or as a string containing rules separeted by comma or semicolon
     */
    accessRules: string[] | string;
    /**
     * certCache filename used to store generated certificate on disque.
     */
    certCache: string;
    /**
     * if provided enable automatic cert storage
     * All certificat will be stored in ~/.ovh/ of certCache directory.
     * GET /me will be add to requested access.
     * @since V3.2.0
     */
    nichandle: string;
    /**
     * work with nichandle param, if enabled any unexpected certificat will be stored, instead of logged out.
     * @since V3.2.0
     */
     keepUnexpectedCredential: boolean;
     /**
     * time to wait in ms before a retry
     * default is 100 ms, the time to wait is multiplyed by the numbers of retries
     */
    retrySleep: number;
    /**
     * Maximum retry atempt after a recoverable error
     * default is 10 time;
     */
    maxRetry: number;
    /**
     * save all used query to customize futhers accessRules request.
     */
    saveQuerys: boolean;
    /**
     * you can block automatic launch of a browser
     * default is true;
     */
    launchBrower: boolean;
    /**
     * put here your logic to ask for a certificat validation
     * by default console.log validationUrl every 30 seconds
     */
    certMonitorProvider: CertMonitorProvider;
    /**
     * overwrite cache Slot implementation.
     */
    slotClass: SlotConstructor | undefined;
}
