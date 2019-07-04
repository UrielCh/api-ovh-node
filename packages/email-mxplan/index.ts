import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace email {
    export namespace mxplan {
        //email.mxplan.Account
        // fullName: email.mxplan.Account.Account
        export interface Account {
            SAMAccountName?: string;
            configured?: boolean;
            creationDate?: string;
            currentUsage?: number;
            deleteAtExpiration?: boolean;
            displayName?: string;
            domain?: string;
            expirationDate?: string;
            expirationOutlookDate?: string;
            firstName?: string;
            hiddenFromGAL?: boolean;
            id?: number;
            initial?: string;
            lastLogoffDate?: string;
            lastLogonDate?: string;
            lastName?: string;
            lastUpdateDate?: string;
            login?: string;
            mailingFilter?: OVH.email.pro.MailingFilterEnum[];
            passwordLastUpdate?: string;
            primaryEmailAddress?: string;
            quota?: number;
            renewPeriod?: OVH.email.pro.renewPeriodEnum;
            spamAndVirusConfiguration?: OVH.email.pro.spamAndVirusConfiguration;
            spamDetected?: boolean;
            spamTicketNumber?: number;
            state?: OVH.email.pro.ObjectStateEnum;
            taskPendingId?: number;
        }
        //email.mxplan.AccountAlias
        // fullName: email.mxplan.AccountAlias.AccountAlias
        export interface AccountAlias {
            alias?: string;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.mxplan.AccountDiagnosis
        // fullName: email.mxplan.AccountDiagnosis.AccountDiagnosis
        export interface AccountDiagnosis {
            canReceiveEmail?: boolean;
            canSendEmail?: boolean;
            connectiveWebmail?: boolean;
            isLocked?: boolean;
            isMxValid?: boolean;
            isSpammer?: boolean;
            isSrvValid?: boolean;
            isSuspended?: boolean;
            lastCheck?: string;
        }
        //email.mxplan.AccountFullAccess
        // fullName: email.mxplan.AccountFullAccess.AccountFullAccess
        export interface AccountFullAccess {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.mxplan.AccountSendAs
        // fullName: email.mxplan.AccountSendAs.AccountSendAs
        export interface AccountSendAs {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.mxplan.AccountSendOnBehalfTo
        // fullName: email.mxplan.AccountSendOnBehalfTo.AccountSendOnBehalfTo
        export interface AccountSendOnBehalfTo {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.mxplan.Domain
        // fullName: email.mxplan.Domain.Domain
        export interface Domain {
            cnameToCheck?: string;
            domainAliases?: string[];
            domainValidated?: boolean;
            isAliasDomain?: boolean;
            mxIsValid?: boolean;
            mxRecord?: string[];
            mxRelay?: string;
            name?: string;
            srvIsValid?: boolean;
            srvRecord?: string[];
            state?: OVH.email.pro.ObjectStateEnum;
            taskPendingId?: number;
            type?: OVH.email.pro.DomainTypeEnum;
        }
        //email.mxplan.ExternalContact
        // fullName: email.mxplan.ExternalContact.ExternalContact
        export interface ExternalContact {
            creationDate?: string;
            displayName?: string;
            externalEmailAddress?: string;
            firstName?: string;
            hiddenFromGAL?: boolean;
            id?: number;
            initials?: string;
            lastName?: string;
            state?: OVH.email.pro.ObjectStateEnum;
            taskPendingId?: number;
        }
        //email.mxplan.Server
        // fullName: email.mxplan.Server.Server
        export interface Server {
            currentDiskUsage?: number;
            diskSize?: number;
            ip?: string;
            ipV6?: string;
            isAValid?: boolean;
            isAaaaValid?: boolean;
            isPtrV6Valid?: boolean;
            isPtrValid?: boolean;
            state?: OVH.email.pro.ServerStateEnum;
            taskPendingId?: number;
            version?: number;
        }
        //email.mxplan.Service
        // fullName: email.mxplan.Service.Service
        export interface Service {
            complexityEnabled?: boolean;
            displayName?: string;
            domain?: string;
            hostname?: string;
            lastUpdateDate?: string;
            lockoutDuration?: number;
            lockoutObservationWindow?: number;
            lockoutThreshold?: number;
            maxPasswordAge?: number;
            maxReceiveSize?: number;
            maxSendSize?: number;
            minPasswordAge?: number;
            minPasswordLength?: number;
            offer?: OVH.email.mxplan.ServiceOfferEnum;
            spamAndVirusConfiguration?: OVH.email.pro.spamAndVirusConfiguration;
            state?: OVH.email.pro.ServiceStateEnum;
            taskPendingId?: number;
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
            function?: OVH.email.pro.TaskFunctionEnum;
            id?: number;
            status?: OVH.email.pro.TaskStatusEnum;
            todoDate?: string;
        }
        //email.pro.TaskFunctionEnum
        export type TaskFunctionEnum = "addAccount" | "addAlias" | "addDomain" | "addDomainDisclaimer" | "addExternalContact" | "addFullAccess" | "addSendAs" | "addSendOnBehalfTo" | "addServiceAuthorizedIp" | "changeHostname" | "changePassword" | "configureCustomer" | "deleteAccount" | "deleteAlias" | "deleteDomain" | "deleteDomainDisclaimer" | "deleteExternalContact" | "deleteFullAccess" | "deleteSendAs" | "deleteSendOnBehalfTo" | "deleteService" | "deleteServiceAuthorizedIp" | "diagnoseAccount" | "expandDrive" | "installServer" | "maintenance" | "migrateAccountViaOMM" | "migrationAccount" | "migrationDisclaimer" | "migrationExternalContact" | "migrationHistory" | "migrationService" | "reOpenAccount" | "setAccount" | "setAlias" | "setDns" | "setDomain" | "setDomainDisclaimer" | "setExternalContact" | "setService" | "suspendAccount" | "suspendService" | "unknown" | "unsuspendAccount" | "unsuspendService"
        //email.pro.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        //email.pro.disclaimer
        // fullName: email.pro.disclaimer.disclaimer
        export interface disclaimer {
            content?: string;
            creationDate?: string;
            name?: string;
            outsideOnly?: boolean;
            taskPendingId?: number;
        }
        //email.pro.renewPeriodEnum
        export type renewPeriodEnum = "monthly" | "yearly"
        //email.pro.spamAndVirusConfiguration
        // fullName: email.pro.spamAndVirusConfiguration.spamAndVirusConfiguration
        export interface spamAndVirusConfiguration {
            checkDKIM?: boolean;
            checkSPF?: boolean;
            deleteSpam?: boolean;
            deleteVirus?: boolean;
            putInJunk?: boolean;
            tagSpam?: boolean;
            tagVirus?: boolean;
        }
    }
}
// Apis harmony
// path /email
export interface Email {
    mxplan:  {
        // GET /email/mxplan
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /email/mxplan/{service}
            GET(): Promise<email.mxplan.Service>;
            // PUT /email/mxplan/{service}
            PUT(body?: {body: email.mxplan.Service}): Promise<void>;
            task:  {
                // GET /email/mxplan/{service}/task
                GET(): Promise<number[]>;
                [keys: string]: {
                    // GET /email/mxplan/{service}/task/{id}
                    GET(): Promise<email.pro.Task>;
                } | any
            }
            updateFlagsOnAllAccounts:  {
                // POST /email/mxplan/{service}/updateFlagsOnAllAccounts
                POST(): Promise<void>;
            }
            account:  {
                // GET /email/mxplan/{service}/account
                GET(param?: {id?: number, primaryEmailAddress?: string}): Promise<string[]>;
                [keys: string]: {
                    // GET /email/mxplan/{service}/account/{email}
                    GET(): Promise<email.mxplan.Account>;
                    // PUT /email/mxplan/{service}/account/{email}
                    PUT(body?: {body: email.mxplan.Account}): Promise<void>;
                    // DELETE /email/mxplan/{service}/account/{email}
                    DELETE(): Promise<email.pro.Task>;
                    changePassword:  {
                        // POST /email/mxplan/{service}/account/{email}/changePassword
                        POST(body?: {password: string}): Promise<email.pro.Task>;
                    }
                    alias:  {
                        // GET /email/mxplan/{service}/account/{email}/alias
                        GET(): Promise<string[]>;
                        // POST /email/mxplan/{service}/account/{email}/alias
                        POST(body?: {alias: string}): Promise<email.pro.Task>;
                        [keys: string]: {
                            // GET /email/mxplan/{service}/account/{email}/alias/{alias}
                            GET(): Promise<email.mxplan.AccountAlias>;
                            // DELETE /email/mxplan/{service}/account/{email}/alias/{alias}
                            DELETE(): Promise<email.pro.Task>;
                        } | any
                    }
                    capabilities:  {
                        // GET /email/mxplan/{service}/account/{email}/capabilities
                        GET(): Promise<email.mxplan.accountCapabilities>;
                    }
                    sendAs:  {
                        // GET /email/mxplan/{service}/account/{email}/sendAs
                        GET(): Promise<number[]>;
                        // POST /email/mxplan/{service}/account/{email}/sendAs
                        POST(body?: {allowAccountId: number}): Promise<email.pro.Task>;
                        [keys: string]: {
                            // GET /email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}
                            GET(): Promise<email.mxplan.AccountSendAs>;
                            // DELETE /email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}
                            DELETE(): Promise<email.pro.Task>;
                        } | any
                    }
                    sendOnBehalfTo:  {
                        // GET /email/mxplan/{service}/account/{email}/sendOnBehalfTo
                        GET(): Promise<number[]>;
                        // POST /email/mxplan/{service}/account/{email}/sendOnBehalfTo
                        POST(body?: {allowAccountId: number}): Promise<email.pro.Task>;
                        [keys: string]: {
                            // GET /email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                            GET(): Promise<email.mxplan.AccountSendOnBehalfTo>;
                            // DELETE /email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                            DELETE(): Promise<email.pro.Task>;
                        } | any
                    }
                    diagnostic:  {
                        // GET /email/mxplan/{service}/account/{email}/diagnostic
                        GET(): Promise<email.mxplan.AccountDiagnosis>;
                        // POST /email/mxplan/{service}/account/{email}/diagnostic
                        POST(body?: {password: string}): Promise<email.pro.Task>;
                    }
                    task:  {
                        // GET /email/mxplan/{service}/account/{email}/task
                        GET(): Promise<number[]>;
                        [keys: string]: {
                            // GET /email/mxplan/{service}/account/{email}/task/{id}
                            GET(): Promise<email.pro.Task>;
                        } | any
                    }
                    fullAccess:  {
                        // GET /email/mxplan/{service}/account/{email}/fullAccess
                        GET(): Promise<number[]>;
                        // POST /email/mxplan/{service}/account/{email}/fullAccess
                        POST(body?: {allowedAccountId: number}): Promise<email.pro.Task>;
                        [keys: string]: {
                            // GET /email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}
                            GET(): Promise<email.mxplan.AccountFullAccess>;
                            // DELETE /email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}
                            DELETE(): Promise<email.pro.Task>;
                        } | any
                    }
                } | any
            }
            domain:  {
                // GET /email/mxplan/{service}/domain
                GET(param?: {state?: email.pro.ObjectStateEnum}): Promise<string[]>;
                [keys: string]: {
                    // GET /email/mxplan/{service}/domain/{domainName}
                    GET(): Promise<email.mxplan.Domain>;
                    // PUT /email/mxplan/{service}/domain/{domainName}
                    PUT(body?: {body: email.mxplan.Domain}): Promise<void>;
                    disclaimerAttribute:  {
                        // GET /email/mxplan/{service}/domain/{domainName}/disclaimerAttribute
                        GET(): Promise<email.pro.DisclaimerAttributeEnum[]>;
                    }
                    disclaimer:  {
                        // GET /email/mxplan/{service}/domain/{domainName}/disclaimer
                        GET(): Promise<email.pro.disclaimer>;
                        // PUT /email/mxplan/{service}/domain/{domainName}/disclaimer
                        PUT(body?: {body: email.pro.disclaimer}): Promise<void>;
                        // POST /email/mxplan/{service}/domain/{domainName}/disclaimer
                        POST(body?: {outsideOnly?: boolean, content: string}): Promise<email.pro.Task>;
                        // DELETE /email/mxplan/{service}/domain/{domainName}/disclaimer
                        DELETE(): Promise<email.pro.Task>;
                    }
                } | any
            }
            externalContact:  {
                // GET /email/mxplan/{service}/externalContact
                GET(param?: {externalEmailAddress?: string, lastName?: string, id?: number, firstName?: string, displayName?: string}): Promise<string[]>;
                // POST /email/mxplan/{service}/externalContact
                POST(body?: {displayName?: string, initials?: string, firstName?: string, hiddenFromGAL?: boolean, externalEmailAddress: string, lastName?: string}): Promise<email.pro.Task>;
                [keys: string]: {
                    // GET /email/mxplan/{service}/externalContact/{externalEmailAddress}
                    GET(): Promise<email.mxplan.ExternalContact>;
                    // PUT /email/mxplan/{service}/externalContact/{externalEmailAddress}
                    PUT(body?: {body: email.mxplan.ExternalContact}): Promise<void>;
                    // DELETE /email/mxplan/{service}/externalContact/{externalEmailAddress}
                    DELETE(): Promise<email.pro.Task>;
                } | any
            }
            server:  {
                // GET /email/mxplan/{service}/server
                GET(): Promise<email.mxplan.Server>;
            }
        } | any
    }
}
// Api
type PathsEmailMxplanGET = '/email/mxplan/{service}/task' |
  '/email/mxplan/{service}/task/{id}' |
  '/email/mxplan/{service}/account/{email}/alias' |
  '/email/mxplan/{service}/account/{email}/alias/{alias}' |
  '/email/mxplan/{service}/account/{email}/capabilities' |
  '/email/mxplan/{service}/account/{email}' |
  '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}' |
  '/email/mxplan/{service}/account/{email}/sendAs' |
  '/email/mxplan/{service}/account/{email}/sendOnBehalfTo' |
  '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' |
  '/email/mxplan/{service}/account/{email}/diagnostic' |
  '/email/mxplan/{service}/account/{email}/task/{id}' |
  '/email/mxplan/{service}/account/{email}/task' |
  '/email/mxplan/{service}/account/{email}/fullAccess' |
  '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}' |
  '/email/mxplan/{service}/account' |
  '/email/mxplan/{service}/domain/{domainName}' |
  '/email/mxplan/{service}/domain/{domainName}/disclaimerAttribute' |
  '/email/mxplan/{service}/domain/{domainName}/disclaimer' |
  '/email/mxplan/{service}/domain' |
  '/email/mxplan/{service}/externalContact/{externalEmailAddress}' |
  '/email/mxplan/{service}/externalContact' |
  '/email/mxplan/{service}/server' |
  '/email/mxplan/{service}' |
  '/email/mxplan';

type PathsEmailMxplanPUT = '/email/mxplan/{service}/account/{email}' |
  '/email/mxplan/{service}/domain/{domainName}' |
  '/email/mxplan/{service}/domain/{domainName}/disclaimer' |
  '/email/mxplan/{service}/externalContact/{externalEmailAddress}' |
  '/email/mxplan/{service}';

type PathsEmailMxplanPOST = '/email/mxplan/{service}/updateFlagsOnAllAccounts' |
  '/email/mxplan/{service}/account/{email}/changePassword' |
  '/email/mxplan/{service}/account/{email}/alias' |
  '/email/mxplan/{service}/account/{email}/sendAs' |
  '/email/mxplan/{service}/account/{email}/sendOnBehalfTo' |
  '/email/mxplan/{service}/account/{email}/diagnostic' |
  '/email/mxplan/{service}/account/{email}/fullAccess' |
  '/email/mxplan/{service}/domain/{domainName}/disclaimer' |
  '/email/mxplan/{service}/externalContact';

type PathsEmailMxplanDELETE = '/email/mxplan/{service}/account/{email}/alias/{alias}' |
  '/email/mxplan/{service}/account/{email}' |
  '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}' |
  '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' |
  '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}' |
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
  public get(path: '/email/mxplan/{service}/account/{email}', params: {service: string, email: string}): Promise<email.mxplan.Account>;
  /**
   * List the email.mxplan.AccountAlias objects
   * Aliases associated to this mailbox
   */
  public get(path: '/email/mxplan/{service}/account/{email}/alias', params: {service: string, email: string}): Promise<string[]>;
  /**
   * Aliases on this mailbox
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/alias/{alias}', params: {service: string, email: string, alias: string}): Promise<email.mxplan.AccountAlias>;
  /**
   * capabilities operations
   * Get available capabilities for this account
   */
  public get(path: '/email/mxplan/{service}/account/{email}/capabilities', params: {service: string, email: string}): Promise<email.mxplan.accountCapabilities>;
  /**
   * Account Diagnosis
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/diagnostic', params: {service: string, email: string}): Promise<email.mxplan.AccountDiagnosis>;
  /**
   * List the email.mxplan.AccountFullAccess objects
   * Full access granted users for this mailbox
   */
  public get(path: '/email/mxplan/{service}/account/{email}/fullAccess', params: {service: string, email: string}): Promise<number[]>;
  /**
   * Users having full access on this mailbox
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.mxplan.AccountFullAccess>;
  /**
   * List the email.mxplan.AccountSendAs objects
   * Send as granted users for this mailbox
   */
  public get(path: '/email/mxplan/{service}/account/{email}/sendAs', params: {service: string, email: string}): Promise<number[]>;
  /**
   * Users authorized to send mails from this mailbox
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.mxplan.AccountSendAs>;
  /**
   * List the email.mxplan.AccountSendOnBehalfTo objects
   * SendOnBehalfTo granted users for this mailbox
   */
  public get(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo', params: {service: string, email: string}): Promise<number[]>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.mxplan.AccountSendOnBehalfTo>;
  /**
   * List the email.pro.Task objects
   * Pending task for this mailbox
   */
  public get(path: '/email/mxplan/{service}/account/{email}/task', params: {service: string, email: string}): Promise<number[]>;
  /**
   * Organization task details
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/account/{email}/task/{id}', params: {service: string, email: string, id: string}): Promise<email.pro.Task>;
  /**
   * List the email.mxplan.Domain objects
   * Domains associated to this service
   */
  public get(path: '/email/mxplan/{service}/domain', params: {service: string, state?: OVH.email.pro.ObjectStateEnum}): Promise<string[]>;
  /**
   * Domain
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/domain/{domainName}', params: {service: string, domainName: string}): Promise<email.mxplan.Domain>;
  /**
   * disclaimer
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string}): Promise<email.pro.disclaimer>;
  /**
   * disclaimerAttribute operations
   * Get diclaimer attributes to substitute with Active Directory properties
   */
  public get(path: '/email/mxplan/{service}/domain/{domainName}/disclaimerAttribute', params: {service: string, domainName: string}): Promise<email.pro.DisclaimerAttributeEnum[]>;
  /**
   * List the email.mxplan.ExternalContact objects
   * External contacts for this service
   */
  public get(path: '/email/mxplan/{service}/externalContact', params: {service: string, displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string}): Promise<string[]>;
  /**
   * External contact for this mxplan service
   * Get this object properties
   */
  public get(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', params: {service: string, externalEmailAddress: string}): Promise<email.mxplan.ExternalContact>;
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
  public get(path: '/email/mxplan/{service}/task/{id}', params: {service: string, id: string}): Promise<email.pro.Task>;
  public get(path: PathsEmailMxplanGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * MXPlan service
   * Alter this object properties
   */
  public put(path: '/email/mxplan/{service}', params: {service: string, complexityEnabled?: boolean, displayName?: string, domain?: string, hostname?: string, lastUpdateDate?: string, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize?: number, maxSendSize?: number, minPasswordAge?: number, minPasswordLength?: number, offer?: OVH.email.mxplan.ServiceOfferEnum, spamAndVirusConfiguration?: OVH.email.pro.spamAndVirusConfiguration, state?: OVH.email.pro.ServiceStateEnum, taskPendingId?: number, webUrl?: string}): Promise<void>;
  /**
   * Mailbox
   * Alter this object properties
   */
  public put(path: '/email/mxplan/{service}/account/{email}', params: {service: string, email: string, SAMAccountName?: string, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, displayName?: string, domain?: string, expirationDate?: string, expirationOutlookDate?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, login?: string, mailingFilter?: OVH.email.pro.MailingFilterEnum[], passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: number, renewPeriod?: OVH.email.pro.renewPeriodEnum, spamAndVirusConfiguration?: OVH.email.pro.spamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: OVH.email.pro.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Domain
   * Alter this object properties
   */
  public put(path: '/email/mxplan/{service}/domain/{domainName}', params: {service: string, domainName: string, cnameToCheck?: string, domainAliases?: string[], domainValidated?: boolean, isAliasDomain?: boolean, mxIsValid?: boolean, mxRecord?: string[], mxRelay?: string, name?: string, srvIsValid?: boolean, srvRecord?: string[], state?: OVH.email.pro.ObjectStateEnum, taskPendingId?: number, type?: OVH.email.pro.DomainTypeEnum}): Promise<void>;
  /**
   * disclaimer
   * Alter this object properties
   */
  public put(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string, content?: string, creationDate?: string, name?: string, outsideOnly?: boolean, taskPendingId?: number}): Promise<void>;
  /**
   * External contact for this mxplan service
   * Alter this object properties
   */
  public put(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', params: {service: string, externalEmailAddress: string, creationDate?: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastName?: string, state?: OVH.email.pro.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  public put(path: PathsEmailMxplanPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the email.mxplan.AccountAlias objects
   * Create new alias
   */
  public post(path: '/email/mxplan/{service}/account/{email}/alias', params: {service: string, email: string, alias: string}): Promise<email.pro.Task>;
  /**
   * changePassword operations
   * Change mailbox password
   */
  public post(path: '/email/mxplan/{service}/account/{email}/changePassword', params: {service: string, email: string, password: string}): Promise<email.pro.Task>;
  /**
   * Account Diagnosis
   * Create new diagnosis request
   */
  public post(path: '/email/mxplan/{service}/account/{email}/diagnostic', params: {service: string, email: string, password: string}): Promise<email.pro.Task>;
  /**
   * List the email.mxplan.AccountFullAccess objects
   * Allow full access to a user
   */
  public post(path: '/email/mxplan/{service}/account/{email}/fullAccess', params: {service: string, email: string, allowedAccountId: number}): Promise<email.pro.Task>;
  /**
   * List the email.mxplan.AccountSendAs objects
   * Allow another user to send mails from this mailbox
   */
  public post(path: '/email/mxplan/{service}/account/{email}/sendAs', params: {service: string, email: string, allowAccountId: number}): Promise<email.pro.Task>;
  /**
   * List the email.mxplan.AccountSendOnBehalfTo objects
   * Allow another user to Send On Behalf To mails from this mailbox
   */
  public post(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo', params: {service: string, email: string, allowAccountId: number}): Promise<email.pro.Task>;
  /**
   * disclaimer
   * Create organization disclaimer of each email
   */
  public post(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string, content: string, outsideOnly?: boolean}): Promise<email.pro.Task>;
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
  public delete(path: '/email/mxplan/{service}/account/{email}', params: {service: string, email: string}): Promise<email.pro.Task>;
  /**
   * Aliases on this mailbox
   * Delete existing alias
   */
  public delete(path: '/email/mxplan/{service}/account/{email}/alias/{alias}', params: {service: string, email: string, alias: string}): Promise<email.pro.Task>;
  /**
   * Users having full access on this mailbox
   * Revoke full access
   */
  public delete(path: '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.pro.Task>;
  /**
   * Users authorized to send mails from this mailbox
   * Delete allowed user for sendAs
   */
  public delete(path: '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.pro.Task>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Delete allowed user for SendOnBehalfTo
   */
  public delete(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.pro.Task>;
  /**
   * disclaimer
   * Delete existing organization disclaimer
   */
  public delete(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string}): Promise<email.pro.Task>;
  /**
   * External contact for this mxplan service
   * delete external contact
   */
  public delete(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}', params: {service: string, externalEmailAddress: string}): Promise<email.pro.Task>;
  public delete(path: PathsEmailMxplanDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}