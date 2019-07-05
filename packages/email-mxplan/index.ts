import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace email {
    export namespace mxplan {
        //email.mxplan.Account
        // fullName: email.mxplan.Account.Account
        export interface Account {
            SAMAccountName?: string;
            configured: boolean;
            creationDate?: string;
            currentUsage?: number;
            deleteAtExpiration?: boolean;
            displayName?: string;
            domain: string;
            expirationDate?: string;
            expirationOutlookDate?: string;
            firstName?: string;
            hiddenFromGAL: boolean;
            id: number;
            initial?: string;
            lastLogoffDate?: string;
            lastLogonDate?: string;
            lastName?: string;
            lastUpdateDate?: string;
            login: string;
            mailingFilter?: email.pro.MailingFilterEnum[];
            passwordLastUpdate?: string;
            primaryEmailAddress: string;
            quota: number;
            renewPeriod?: email.pro.renewPeriodEnum;
            spamAndVirusConfiguration: email.pro.spamAndVirusConfiguration;
            spamDetected: boolean;
            spamTicketNumber?: number;
            state: emailproObjectStateEnum;
            taskPendingId: number;
        }
        //email.mxplan.AccountAlias
        // fullName: email.mxplan.AccountAlias.AccountAlias
        export interface AccountAlias {
            alias: string;
            creationDate: string;
            taskPendingId: number;
        }
        //email.mxplan.AccountDiagnosis
        // fullName: email.mxplan.AccountDiagnosis.AccountDiagnosis
        export interface AccountDiagnosis {
            canReceiveEmail: boolean;
            canSendEmail: boolean;
            connectiveWebmail: boolean;
            isLocked: boolean;
            isMxValid: boolean;
            isSpammer: boolean;
            isSrvValid: boolean;
            isSuspended: boolean;
            lastCheck: string;
        }
        //email.mxplan.AccountFullAccess
        // fullName: email.mxplan.AccountFullAccess.AccountFullAccess
        export interface AccountFullAccess {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        //email.mxplan.AccountSendAs
        // fullName: email.mxplan.AccountSendAs.AccountSendAs
        export interface AccountSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        //email.mxplan.AccountSendOnBehalfTo
        // fullName: email.mxplan.AccountSendOnBehalfTo.AccountSendOnBehalfTo
        export interface AccountSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        //email.mxplan.Domain
        // fullName: email.mxplan.Domain.Domain
        export interface Domain {
            cnameToCheck?: string;
            domainAliases: string[];
            domainValidated: boolean;
            isAliasDomain: boolean;
            mxIsValid: boolean;
            mxRecord: string[];
            mxRelay?: string;
            name: string;
            srvIsValid: boolean;
            srvRecord: string[];
            state: emailproObjectStateEnum;
            taskPendingId: number;
            type: email.pro.DomainTypeEnum;
        }
        //email.mxplan.ExternalContact
        // fullName: email.mxplan.ExternalContact.ExternalContact
        export interface ExternalContact {
            creationDate: string;
            displayName: string;
            externalEmailAddress: string;
            firstName?: string;
            hiddenFromGAL: boolean;
            id: number;
            initials?: string;
            lastName?: string;
            state: emailproObjectStateEnum;
            taskPendingId: number;
        }
        //email.mxplan.Server
        // fullName: email.mxplan.Server.Server
        export interface Server {
            currentDiskUsage?: number;
            diskSize?: number;
            ip: string;
            ipV6?: string;
            isAValid: boolean;
            isAaaaValid: boolean;
            isPtrV6Valid: boolean;
            isPtrValid: boolean;
            state: email.pro.ServerStateEnum;
            taskPendingId: number;
            version?: number;
        }
        //email.mxplan.Service
        // fullName: email.mxplan.Service.Service
        export interface Service {
            complexityEnabled: boolean;
            displayName?: string;
            domain: string;
            hostname?: string;
            lastUpdateDate?: string;
            lockoutDuration: number;
            lockoutObservationWindow: number;
            lockoutThreshold?: number;
            maxPasswordAge?: number;
            maxReceiveSize: number;
            maxSendSize: number;
            minPasswordAge?: number;
            minPasswordLength?: number;
            offer: email.mxplan.ServiceOfferEnum;
            spamAndVirusConfiguration: email.pro.spamAndVirusConfiguration;
            state: email.pro.ServiceStateEnum;
            taskPendingId: number;
            webUrl?: string;
        }
        //email.mxplan.ServiceOfferEnum
        export type ServiceOfferEnum = "MXPLAN"
        //email.mxplan.accountCapabilities
        // fullName: email.mxplan.accountCapabilities.accountCapabilities
        export interface accountCapabilities {
            quotas?: number[];
        }
    }
    export namespace pro {
        //email.pro.DisclaimerAttributeEnum
        export type DisclaimerAttributeEnum = "City" | "Company" | "Country" | "Department" | "DisplayName" | "Email" | "FaxNumber" | "FirstName" | "HomePhoneNumber" | "Initials" | "LastName" | "Manager" | "MobileNumber" | "Notes" | "Office" | "OtherFaxNumber" | "OtherHomePhoneNumber" | "OtherPhoneNumber" | "PagerNumber" | "PhoneNumber" | "State" | "Street" | "Title" | "UserLogonName" | "ZipCode"
        //email.pro.DomainTypeEnum
        export type DomainTypeEnum = "authoritative" | "nonAuthoritative"
        //email.pro.MailingFilterEnum
        export type MailingFilterEnum = "vaderetro"
        //email.pro.ObjectStateEnum
        export type ObjectStateEnum = "creating" | "deleting" | "ok" | "reopening" | "suspended" | "suspending" | "unknown"
        //email.pro.ServerStateEnum
        export type ServerStateEnum = "configurationPending" | "notConfigured" | "ok"
        //email.pro.ServiceStateEnum
        export type ServiceStateEnum = "creating" | "deleting" | "inMaintenance" | "ok" | "reopening" | "suspended" | "suspending"
        //email.pro.Task
        // fullName: email.pro.Task.Task
        export interface Task {
            finishDate?: string;
            function: email.pro.TaskFunctionEnum;
            id: number;
            status: email.pro.TaskStatusEnum;
            todoDate: string;
        }
        //email.pro.TaskFunctionEnum
        export type TaskFunctionEnum = "addAccount" | "addAlias" | "addDomain" | "addDomainDisclaimer" | "addExternalContact" | "addFullAccess" | "addSendAs" | "addSendOnBehalfTo" | "addServiceAuthorizedIp" | "changeHostname" | "changePassword" | "configureCustomer" | "deleteAccount" | "deleteAlias" | "deleteDomain" | "deleteDomainDisclaimer" | "deleteExternalContact" | "deleteFullAccess" | "deleteSendAs" | "deleteSendOnBehalfTo" | "deleteService" | "deleteServiceAuthorizedIp" | "diagnoseAccount" | "expandDrive" | "installServer" | "maintenance" | "migrateAccountViaOMM" | "migrationAccount" | "migrationDisclaimer" | "migrationExternalContact" | "migrationHistory" | "migrationService" | "reOpenAccount" | "setAccount" | "setAlias" | "setDns" | "setDomain" | "setDomainDisclaimer" | "setExternalContact" | "setService" | "suspendAccount" | "suspendService" | "unknown" | "unsuspendAccount" | "unsuspendService"
        //email.pro.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        //email.pro.disclaimer
        // fullName: email.pro.disclaimer.disclaimer
        export interface disclaimer {
            content: string;
            creationDate: string;
            name: string;
            outsideOnly: boolean;
            taskPendingId: number;
        }
        //email.pro.renewPeriodEnum
        export type renewPeriodEnum = "monthly" | "yearly"
        //email.pro.spamAndVirusConfiguration
        // fullName: email.pro.spamAndVirusConfiguration.spamAndVirusConfiguration
        export interface spamAndVirusConfiguration {
            checkDKIM: boolean;
            checkSPF: boolean;
            deleteSpam: boolean;
            deleteVirus: boolean;
            putInJunk: boolean;
            tagSpam: boolean;
            tagVirus: boolean;
        }
    }
}
// Apis harmony
// path /email
export interface Email{
    mxplan: {
        // GET /email/mxplan
        $get(): Promise<string[]>;
        [keys: string]:{
            // GET /email/mxplan/{service}
            $get(): Promise<email.mxplan.Service>;
            // PUT /email/mxplan/{service}
            $put(body?: {body: email.mxplan.Service}): Promise<void>;
            account: {
                // GET /email/mxplan/{service}/account
                $get(param?: {id?: number, primaryEmailAddress?: string}): Promise<string[]>;
                [keys: string]:{
                    // DELETE /email/mxplan/{service}/account/{email}
                    $delete(): Promise<email.pro.Task>;
                    // GET /email/mxplan/{service}/account/{email}
                    $get(): Promise<email.mxplan.Account>;
                    // PUT /email/mxplan/{service}/account/{email}
                    $put(body?: {body: email.mxplan.Account}): Promise<void>;
                    alias: {
                        // GET /email/mxplan/{service}/account/{email}/alias
                        $get(): Promise<string[]>;
                        // POST /email/mxplan/{service}/account/{email}/alias
                        $post(body?: {alias: string}): Promise<email.pro.Task>;
                        [keys: string]:{
                            // DELETE /email/mxplan/{service}/account/{email}/alias/{alias}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/mxplan/{service}/account/{email}/alias/{alias}
                            $get(): Promise<email.mxplan.AccountAlias>;
                        } | any
                    }
                    capabilities: {
                        // GET /email/mxplan/{service}/account/{email}/capabilities
                        $get(): Promise<email.mxplan.accountCapabilities>;
                    }
                    changePassword: {
                        // POST /email/mxplan/{service}/account/{email}/changePassword
                        $post(body?: {password: string}): Promise<email.pro.Task>;
                    }
                    diagnostic: {
                        // GET /email/mxplan/{service}/account/{email}/diagnostic
                        $get(): Promise<email.mxplan.AccountDiagnosis>;
                        // POST /email/mxplan/{service}/account/{email}/diagnostic
                        $post(body?: {password: string}): Promise<email.pro.Task>;
                    }
                    fullAccess: {
                        // GET /email/mxplan/{service}/account/{email}/fullAccess
                        $get(): Promise<number[]>;
                        // POST /email/mxplan/{service}/account/{email}/fullAccess
                        $post(body?: {allowedAccountId: number}): Promise<email.pro.Task>;
                        [keys: string]:{
                            // DELETE /email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}
                            $get(): Promise<email.mxplan.AccountFullAccess>;
                        } | any
                    }
                    sendAs: {
                        // GET /email/mxplan/{service}/account/{email}/sendAs
                        $get(): Promise<number[]>;
                        // POST /email/mxplan/{service}/account/{email}/sendAs
                        $post(body?: {allowAccountId: number}): Promise<email.pro.Task>;
                        [keys: string]:{
                            // DELETE /email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}
                            $get(): Promise<email.mxplan.AccountSendAs>;
                        } | any
                    }
                    sendOnBehalfTo: {
                        // GET /email/mxplan/{service}/account/{email}/sendOnBehalfTo
                        $get(): Promise<number[]>;
                        // POST /email/mxplan/{service}/account/{email}/sendOnBehalfTo
                        $post(body?: {allowAccountId: number}): Promise<email.pro.Task>;
                        [keys: string]:{
                            // DELETE /email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                            $get(): Promise<email.mxplan.AccountSendOnBehalfTo>;
                        } | any
                    }
                    task: {
                        // GET /email/mxplan/{service}/account/{email}/task
                        $get(): Promise<number[]>;
                        [keys: string]:{
                            // GET /email/mxplan/{service}/account/{email}/task/{id}
                            $get(): Promise<email.pro.Task>;
                        } | any
                    }
                } | any
            }
            domain: {
                // GET /email/mxplan/{service}/domain
                $get(param?: {state?: email.pro.ObjectStateEnum}): Promise<string[]>;
                [keys: string]:{
                    // GET /email/mxplan/{service}/domain/{domainName}
                    $get(): Promise<email.mxplan.Domain>;
                    // PUT /email/mxplan/{service}/domain/{domainName}
                    $put(body?: {body: email.mxplan.Domain}): Promise<void>;
                    disclaimer: {
                        // DELETE /email/mxplan/{service}/domain/{domainName}/disclaimer
                        $delete(): Promise<email.pro.Task>;
                        // GET /email/mxplan/{service}/domain/{domainName}/disclaimer
                        $get(): Promise<email.pro.disclaimer>;
                        // POST /email/mxplan/{service}/domain/{domainName}/disclaimer
                        $post(body?: {content: string, outsideOnly?: boolean}): Promise<email.pro.Task>;
                        // PUT /email/mxplan/{service}/domain/{domainName}/disclaimer
                        $put(body?: {body: email.pro.disclaimer}): Promise<void>;
                    }
                    disclaimerAttribute: {
                        // GET /email/mxplan/{service}/domain/{domainName}/disclaimerAttribute
                        $get(): Promise<email.pro.DisclaimerAttributeEnum[]>;
                    }
                } | any
            }
            externalContact: {
                // GET /email/mxplan/{service}/externalContact
                $get(param?: {displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string}): Promise<string[]>;
                // POST /email/mxplan/{service}/externalContact
                $post(body?: {displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string}): Promise<email.pro.Task>;
                [keys: string]:{
                    // DELETE /email/mxplan/{service}/externalContact/{externalEmailAddress}
                    $delete(): Promise<email.pro.Task>;
                    // GET /email/mxplan/{service}/externalContact/{externalEmailAddress}
                    $get(): Promise<email.mxplan.ExternalContact>;
                    // PUT /email/mxplan/{service}/externalContact/{externalEmailAddress}
                    $put(body?: {body: email.mxplan.ExternalContact}): Promise<void>;
                } | any
            }
            server: {
                // GET /email/mxplan/{service}/server
                $get(): Promise<email.mxplan.Server>;
            }
            task: {
                // GET /email/mxplan/{service}/task
                $get(): Promise<number[]>;
                [keys: string]:{
                    // GET /email/mxplan/{service}/task/{id}
                    $get(): Promise<email.pro.Task>;
                } | any
            }
            updateFlagsOnAllAccounts: {
                // POST /email/mxplan/{service}/updateFlagsOnAllAccounts
                $post(): Promise<void>;
            }
        } | any
    }
}
// Api
type PathsEmailMxplanGET = '/email/mxplan' |
  '/email/mxplan/{service}' |
  '/email/mxplan/{service}/account' |
  '/email/mxplan/{service}/account/{email}' |
  '/email/mxplan/{service}/account/{email}/alias' |
  '/email/mxplan/{service}/account/{email}/alias/{alias}' |
  '/email/mxplan/{service}/account/{email}/capabilities' |
  '/email/mxplan/{service}/account/{email}/diagnostic' |
  '/email/mxplan/{service}/account/{email}/fullAccess' |
  '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}' |
  '/email/mxplan/{service}/account/{email}/sendAs' |
  '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}' |
  '/email/mxplan/{service}/account/{email}/sendOnBehalfTo' |
  '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' |
  '/email/mxplan/{service}/account/{email}/task' |
  '/email/mxplan/{service}/account/{email}/task/{id}' |
  '/email/mxplan/{service}/domain' |
  '/email/mxplan/{service}/domain/{domainName}' |
  '/email/mxplan/{service}/domain/{domainName}/disclaimer' |
  '/email/mxplan/{service}/domain/{domainName}/disclaimerAttribute' |
  '/email/mxplan/{service}/externalContact' |
  '/email/mxplan/{service}/externalContact/{externalEmailAddress}' |
  '/email/mxplan/{service}/server' |
  '/email/mxplan/{service}/task' |
  '/email/mxplan/{service}/task/{id}';

type PathsEmailMxplanPUT = '/email/mxplan/{service}' |
  '/email/mxplan/{service}/account/{email}' |
  '/email/mxplan/{service}/domain/{domainName}' |
  '/email/mxplan/{service}/domain/{domainName}/disclaimer' |
  '/email/mxplan/{service}/externalContact/{externalEmailAddress}';

type PathsEmailMxplanPOST = '/email/mxplan/{service}/account/{email}/alias' |
  '/email/mxplan/{service}/account/{email}/changePassword' |
  '/email/mxplan/{service}/account/{email}/diagnostic' |
  '/email/mxplan/{service}/account/{email}/fullAccess' |
  '/email/mxplan/{service}/account/{email}/sendAs' |
  '/email/mxplan/{service}/account/{email}/sendOnBehalfTo' |
  '/email/mxplan/{service}/domain/{domainName}/disclaimer' |
  '/email/mxplan/{service}/externalContact' |
  '/email/mxplan/{service}/updateFlagsOnAllAccounts';

type PathsEmailMxplanDELETE = '/email/mxplan/{service}/account/{email}' |
  '/email/mxplan/{service}/account/{email}/alias/{alias}' |
  '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}' |
  '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}' |
  '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' |
  '/email/mxplan/{service}/domain/{domainName}/disclaimer' |
  '/email/mxplan/{service}/externalContact/{externalEmailAddress}';

export class ApiEmailMxplan extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the MXPLAN service
   * List available services
   */
  public get(path: '/email/mxplan'): Promise<string[]>;
  /**
   * MXPlan service
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}', params: {service: string}): Promise<email.mxplan.Service>;
  /**
   * List the email.mxplan.Account objects
   * Accounts associated to this mxplan service
   */
  public get(path: '/email/mxplan/{service}/account', params: {service: string, id?: number, primaryEmailAddress?: string}): Promise<string[]>;
  /**
   * Mailbox
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}', params: {email: string, service: string}): Promise<email.mxplan.Account>;
  /**
   * List the email.mxplan.AccountAlias objects
   * Aliases associated to this mailbox
   */
  public get(path: '/email/mxplan/{service}/account/{email}/alias', params: {email: string, service: string}): Promise<string[]>;
  /**
   * Aliases on this mailbox
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/alias/{alias}', params: {alias: string, email: string, service: string}): Promise<email.mxplan.AccountAlias>;
  /**
   * capabilities operations
   * Get available capabilities for this account
   */
  public get(path: '/email/mxplan/{service}/account/{email}/capabilities', params: {email: string, service: string}): Promise<email.mxplan.accountCapabilities>;
  /**
   * Account Diagnosis
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/diagnostic', params: {email: string, service: string}): Promise<email.mxplan.AccountDiagnosis>;
  /**
   * List the email.mxplan.AccountFullAccess objects
   * Full access granted users for this mailbox
   */
  public get(path: '/email/mxplan/{service}/account/{email}/fullAccess', params: {email: string, service: string}): Promise<number[]>;
  /**
   * Users having full access on this mailbox
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}', params: {allowedAccountId: number, email: string, service: string}): Promise<email.mxplan.AccountFullAccess>;
  /**
   * List the email.mxplan.AccountSendAs objects
   * Send as granted users for this mailbox
   */
  public get(path: '/email/mxplan/{service}/account/{email}/sendAs', params: {email: string, service: string}): Promise<number[]>;
  /**
   * Users authorized to send mails from this mailbox
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}', params: {allowedAccountId: number, email: string, service: string}): Promise<email.mxplan.AccountSendAs>;
  /**
   * List the email.mxplan.AccountSendOnBehalfTo objects
   * SendOnBehalfTo granted users for this mailbox
   */
  public get(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo', params: {email: string, service: string}): Promise<number[]>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', params: {allowedAccountId: number, email: string, service: string}): Promise<email.mxplan.AccountSendOnBehalfTo>;
  /**
   * List the email.pro.Task objects
   * Pending task for this mailbox
   */
  public get(path: '/email/mxplan/{service}/account/{email}/task', params: {email: string, service: string}): Promise<number[]>;
  /**
   * Organization task details
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/task/{id}', params: {email: string, id: number, service: string}): Promise<email.pro.Task>;
  /**
   * List the email.mxplan.Domain objects
   * Domains associated to this service
   */
  public get(path: '/email/mxplan/{service}/domain', params: {service: string, state?: emailproObjectStateEnum}): Promise<string[]>;
  /**
   * Domain
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/domain/{domainName}', params: {domainName: string, service: string}): Promise<email.mxplan.Domain>;
  /**
   * disclaimer
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {domainName: string, service: string}): Promise<email.pro.disclaimer>;
  /**
   * disclaimerAttribute operations
   * Get diclaimer attributes to substitute with Active Directory properties
   */
  public get(path: '/email/mxplan/{service}/domain/{domainName}/disclaimerAttribute', params: {domainName: string, service: string}): Promise<email.pro.DisclaimerAttributeEnum[]>;
  /**
   * List the email.mxplan.ExternalContact objects
   * External contacts for this service
   */
  public get(path: '/email/mxplan/{service}/externalContact', params: {service: string, displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string}): Promise<string[]>;
  /**
   * External contact for this mxplan service
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', params: {externalEmailAddress: string, service: string}): Promise<email.mxplan.ExternalContact>;
  /**
   * Server
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/server', params: {service: string}): Promise<email.mxplan.Server>;
  /**
   * List the email.pro.Task objects
   * Pending actions
   */
  public get(path: '/email/mxplan/{service}/task', params: {service: string}): Promise<number[]>;
  /**
   * Organization task details
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/task/{id}', params: {id: number, service: string}): Promise<email.pro.Task>;
  public get(path: PathsEmailMxplanGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * MXPlan service
   * Alter this object properties
   */
  public put(path: '/email/mxplan/{service}', params: {service: string, complexityEnabled?: boolean, displayName?: string, domain?: string, hostname?: string, lastUpdateDate?: string, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize?: number, maxSendSize?: number, minPasswordAge?: number, minPasswordLength?: number, offer?: email.mxplan.ServiceOfferEnum, spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration, state?: email.pro.ServiceStateEnum, taskPendingId?: number, webUrl?: string}): Promise<void>;
  /**
   * Mailbox
   * Alter this object properties
   */
  public put(path: '/email/mxplan/{service}/account/{email}', params: {email: string, service: string, SAMAccountName?: string, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, displayName?: string, domain?: string, expirationDate?: string, expirationOutlookDate?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, login?: string, mailingFilter?: email.pro.MailingFilterEnum[], passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: number, renewPeriod?: email.pro.renewPeriodEnum, spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: emailproObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Domain
   * Alter this object properties
   */
  public put(path: '/email/mxplan/{service}/domain/{domainName}', params: {domainName: string, service: string, cnameToCheck?: string, domainAliases?: string[], domainValidated?: boolean, isAliasDomain?: boolean, mxIsValid?: boolean, mxRecord?: string[], mxRelay?: string, name?: string, srvIsValid?: boolean, srvRecord?: string[], state?: emailproObjectStateEnum, taskPendingId?: number, type?: email.pro.DomainTypeEnum}): Promise<void>;
  /**
   * disclaimer
   * Alter this object properties
   */
  public put(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {domainName: string, service: string, content?: string, creationDate?: string, name?: string, outsideOnly?: boolean, taskPendingId?: number}): Promise<void>;
  /**
   * External contact for this mxplan service
   * Alter this object properties
   */
  public put(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', params: {externalEmailAddress: string, service: string, creationDate?: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastName?: string, state?: emailproObjectStateEnum, taskPendingId?: number}): Promise<void>;
  public put(path: PathsEmailMxplanPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the email.mxplan.AccountAlias objects
   * Create new alias
   */
  public post(path: '/email/mxplan/{service}/account/{email}/alias', params: {email: string, service: string, alias: string}): Promise<email.pro.Task>;
  /**
   * changePassword operations
   * Change mailbox password
   */
  public post(path: '/email/mxplan/{service}/account/{email}/changePassword', params: {email: string, service: string, password: string}): Promise<email.pro.Task>;
  /**
   * Account Diagnosis
   * Create new diagnosis request
   */
  public post(path: '/email/mxplan/{service}/account/{email}/diagnostic', params: {email: string, service: string, password: string}): Promise<email.pro.Task>;
  /**
   * List the email.mxplan.AccountFullAccess objects
   * Allow full access to a user
   */
  public post(path: '/email/mxplan/{service}/account/{email}/fullAccess', params: {email: string, service: string, allowedAccountId: number}): Promise<email.pro.Task>;
  /**
   * List the email.mxplan.AccountSendAs objects
   * Allow another user to send mails from this mailbox
   */
  public post(path: '/email/mxplan/{service}/account/{email}/sendAs', params: {email: string, service: string, allowAccountId: number}): Promise<email.pro.Task>;
  /**
   * List the email.mxplan.AccountSendOnBehalfTo objects
   * Allow another user to Send On Behalf To mails from this mailbox
   */
  public post(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo', params: {email: string, service: string, allowAccountId: number}): Promise<email.pro.Task>;
  /**
   * disclaimer
   * Create organization disclaimer of each email
   */
  public post(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {domainName: string, service: string, content: string, outsideOnly?: boolean}): Promise<email.pro.Task>;
  /**
   * List the email.mxplan.ExternalContact objects
   * create new external contact
   */
  public post(path: '/email/mxplan/{service}/externalContact', params: {service: string, displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string}): Promise<email.pro.Task>;
  /**
   * updateFlagsOnAllAccounts operations
   * Update spam and virus flags on all active accounts
   */
  public post(path: '/email/mxplan/{service}/updateFlagsOnAllAccounts', params: {service: string}): Promise<void>;
  public post(path: PathsEmailMxplanPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Mailbox
   * Delete existing mailbox in mxplan server
   */
  public delete(path: '/email/mxplan/{service}/account/{email}', params: {email: string, service: string}): Promise<email.pro.Task>;
  /**
   * Aliases on this mailbox
   * Delete existing alias
   */
  public delete(path: '/email/mxplan/{service}/account/{email}/alias/{alias}', params: {alias: string, email: string, service: string}): Promise<email.pro.Task>;
  /**
   * Users having full access on this mailbox
   * Revoke full access
   */
  public delete(path: '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}', params: {allowedAccountId: number, email: string, service: string}): Promise<email.pro.Task>;
  /**
   * Users authorized to send mails from this mailbox
   * Delete allowed user for sendAs
   */
  public delete(path: '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}', params: {allowedAccountId: number, email: string, service: string}): Promise<email.pro.Task>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Delete allowed user for SendOnBehalfTo
   */
  public delete(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', params: {allowedAccountId: number, email: string, service: string}): Promise<email.pro.Task>;
  /**
   * disclaimer
   * Delete existing organization disclaimer
   */
  public delete(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {domainName: string, service: string}): Promise<email.pro.Task>;
  /**
   * External contact for this mxplan service
   * delete external contact
   */
  public delete(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', params: {externalEmailAddress: string, service: string}): Promise<email.pro.Task>;
  public delete(path: PathsEmailMxplanDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
export default ApiEmailMxplan;
type emailproObjectStateEnum = email.pro.ObjectStateEnum;
