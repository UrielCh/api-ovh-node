import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace email {
    export namespace pro {
        //email.pro.Account
        // fullName: email.pro.Account.Account
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
        //email.pro.AccountAlias
        // fullName: email.pro.AccountAlias.AccountAlias
        export interface AccountAlias {
            alias?: string;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.pro.AccountDiagnosis
        // fullName: email.pro.AccountDiagnosis.AccountDiagnosis
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
        //email.pro.AccountFullAccess
        // fullName: email.pro.AccountFullAccess.AccountFullAccess
        export interface AccountFullAccess {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.pro.AccountSendAs
        // fullName: email.pro.AccountSendAs.AccountSendAs
        export interface AccountSendAs {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.pro.AccountSendOnBehalfTo
        // fullName: email.pro.AccountSendOnBehalfTo.AccountSendOnBehalfTo
        export interface AccountSendOnBehalfTo {
            allowedAccountId?: number;
            creationDate?: string;
            taskPendingId?: number;
        }
        //email.pro.DisclaimerAttributeEnum
        export type DisclaimerAttributeEnum = "City" | "Company" | "Country" | "Department" | "DisplayName" | "Email" | "FaxNumber" | "FirstName" | "HomePhoneNumber" | "Initials" | "LastName" | "Manager" | "MobileNumber" | "Notes" | "Office" | "OtherFaxNumber" | "OtherHomePhoneNumber" | "OtherPhoneNumber" | "PagerNumber" | "PhoneNumber" | "State" | "Street" | "Title" | "UserLogonName" | "ZipCode"
        //email.pro.Domain
        // fullName: email.pro.Domain.Domain
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
        //email.pro.DomainTypeEnum
        export type DomainTypeEnum = "authoritative" | "nonAuthoritative"
        //email.pro.ExternalContact
        // fullName: email.pro.ExternalContact.ExternalContact
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
        //email.pro.MailingFilterEnum
        export type MailingFilterEnum = "vaderetro"
        //email.pro.ObjectStateEnum
        export type ObjectStateEnum = "creating" | "deleting" | "ok" | "reopening" | "suspended" | "suspending" | "unknown"
        //email.pro.Server
        // fullName: email.pro.Server.Server
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
        //email.pro.ServerStateEnum
        export type ServerStateEnum = "configurationPending" | "notConfigured" | "ok"
        //email.pro.Service
        // fullName: email.pro.Service.Service
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
            offer?: OVH.email.pro.ServiceOfferEnum;
            spamAndVirusConfiguration?: OVH.email.pro.spamAndVirusConfiguration;
            state?: OVH.email.pro.ServiceStateEnum;
            taskPendingId?: number;
            webUrl?: string;
        }
        //email.pro.ServiceOfferEnum
        export type ServiceOfferEnum = "emailpro"
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
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
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
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /email
export interface Email {
    pro:  {
        // GET /email/pro
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /email/pro/{service}
            GET(): Promise<email.pro.Service>;
            // PUT /email/pro/{service}
            PUT(body?: {body: email.pro.Service}): Promise<void>;
            externalContact:  {
                // GET /email/pro/{service}/externalContact
                GET(param?: {id?: number, lastName?: string, displayName?: string, externalEmailAddress?: string, firstName?: string}): Promise<string[]>;
                // POST /email/pro/{service}/externalContact
                POST(body?: {displayName?: string, lastName?: string, externalEmailAddress: string, hiddenFromGAL?: boolean, initials?: string, firstName?: string}): Promise<email.pro.Task>;
                [keys: string]: {
                    // GET /email/pro/{service}/externalContact/{externalEmailAddress}
                    GET(): Promise<email.pro.ExternalContact>;
                    // PUT /email/pro/{service}/externalContact/{externalEmailAddress}
                    PUT(body?: {body: email.pro.ExternalContact}): Promise<void>;
                    // DELETE /email/pro/{service}/externalContact/{externalEmailAddress}
                    DELETE(): Promise<email.pro.Task>;
                } | any
            }
            updateFlagsOnAllAccounts:  {
                // POST /email/pro/{service}/updateFlagsOnAllAccounts
                POST(): Promise<void>;
            }
            serviceInfos:  {
                // GET /email/pro/{service}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /email/pro/{service}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
            domain:  {
                // GET /email/pro/{service}/domain
                GET(param?: {state?: email.pro.ObjectStateEnum}): Promise<string[]>;
                // POST /email/pro/{service}/domain
                POST(body?: {name: string, mxRelay?: string, configureAutodiscover?: boolean, configureMx?: boolean, type: email.pro.DomainTypeEnum}): Promise<email.pro.Task>;
                [keys: string]: {
                    // GET /email/pro/{service}/domain/{domainName}
                    GET(): Promise<email.pro.Domain>;
                    // PUT /email/pro/{service}/domain/{domainName}
                    PUT(body?: {body: email.pro.Domain}): Promise<void>;
                    // DELETE /email/pro/{service}/domain/{domainName}
                    DELETE(): Promise<email.pro.Task>;
                    disclaimerAttribute:  {
                        // GET /email/pro/{service}/domain/{domainName}/disclaimerAttribute
                        GET(): Promise<email.pro.DisclaimerAttributeEnum[]>;
                    }
                    disclaimer:  {
                        // GET /email/pro/{service}/domain/{domainName}/disclaimer
                        GET(): Promise<email.pro.disclaimer>;
                        // PUT /email/pro/{service}/domain/{domainName}/disclaimer
                        PUT(body?: {body: email.pro.disclaimer}): Promise<void>;
                        // POST /email/pro/{service}/domain/{domainName}/disclaimer
                        POST(body?: {outsideOnly?: boolean, content: string}): Promise<email.pro.Task>;
                        // DELETE /email/pro/{service}/domain/{domainName}/disclaimer
                        DELETE(): Promise<email.pro.Task>;
                    }
                } | any
            }
            task:  {
                // GET /email/pro/{service}/task
                GET(): Promise<number[]>;
                [keys: string]: {
                    // GET /email/pro/{service}/task/{id}
                    GET(): Promise<email.pro.Task>;
                } | any
            }
            billingPlan:  {
                // GET /email/pro/{service}/billingPlan
                GET(): Promise<string>;
            }
            billingMigrated:  {
                // GET /email/pro/{service}/billingMigrated
                GET(): Promise<boolean>;
            }
            server:  {
                // GET /email/pro/{service}/server
                GET(): Promise<email.pro.Server>;
            }
            account:  {
                // GET /email/pro/{service}/account
                GET(param?: {primaryEmailAddress?: string, id?: number}): Promise<string[]>;
                [keys: string]: {
                    // GET /email/pro/{service}/account/{email}
                    GET(): Promise<email.pro.Account>;
                    // PUT /email/pro/{service}/account/{email}
                    PUT(body?: {body: email.pro.Account}): Promise<void>;
                    // DELETE /email/pro/{service}/account/{email}
                    DELETE(): Promise<email.pro.Task>;
                    changePassword:  {
                        // POST /email/pro/{service}/account/{email}/changePassword
                        POST(body?: {password: string}): Promise<email.pro.Task>;
                    }
                    fullAccess:  {
                        // GET /email/pro/{service}/account/{email}/fullAccess
                        GET(): Promise<number[]>;
                        // POST /email/pro/{service}/account/{email}/fullAccess
                        POST(body?: {allowedAccountId: number}): Promise<email.pro.Task>;
                        [keys: string]: {
                            // GET /email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}
                            GET(): Promise<email.pro.AccountFullAccess>;
                            // DELETE /email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}
                            DELETE(): Promise<email.pro.Task>;
                        } | any
                    }
                    terminate:  {
                        // POST /email/pro/{service}/account/{email}/terminate
                        POST(): Promise<string>;
                    }
                    alias:  {
                        // GET /email/pro/{service}/account/{email}/alias
                        GET(): Promise<string[]>;
                        // POST /email/pro/{service}/account/{email}/alias
                        POST(body?: {alias: string}): Promise<email.pro.Task>;
                        [keys: string]: {
                            // GET /email/pro/{service}/account/{email}/alias/{alias}
                            GET(): Promise<email.pro.AccountAlias>;
                            // DELETE /email/pro/{service}/account/{email}/alias/{alias}
                            DELETE(): Promise<email.pro.Task>;
                        } | any
                    }
                    sendAs:  {
                        // GET /email/pro/{service}/account/{email}/sendAs
                        GET(): Promise<number[]>;
                        // POST /email/pro/{service}/account/{email}/sendAs
                        POST(body?: {allowAccountId: number}): Promise<email.pro.Task>;
                        [keys: string]: {
                            // GET /email/pro/{service}/account/{email}/sendAs/{allowedAccountId}
                            GET(): Promise<email.pro.AccountSendAs>;
                            // DELETE /email/pro/{service}/account/{email}/sendAs/{allowedAccountId}
                            DELETE(): Promise<email.pro.Task>;
                        } | any
                    }
                    tasks:  {
                        // GET /email/pro/{service}/account/{email}/tasks
                        GET(): Promise<number[]>;
                        [keys: string]: {
                            // GET /email/pro/{service}/account/{email}/tasks/{id}
                            GET(): Promise<email.pro.Task>;
                        } | any
                    }
                    sendOnBehalfTo:  {
                        // GET /email/pro/{service}/account/{email}/sendOnBehalfTo
                        GET(): Promise<number[]>;
                        // POST /email/pro/{service}/account/{email}/sendOnBehalfTo
                        POST(body?: {allowAccountId: number}): Promise<email.pro.Task>;
                        [keys: string]: {
                            // GET /email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                            GET(): Promise<email.pro.AccountSendOnBehalfTo>;
                            // DELETE /email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                            DELETE(): Promise<email.pro.Task>;
                        } | any
                    }
                    diagnostics:  {
                        // GET /email/pro/{service}/account/{email}/diagnostics
                        GET(): Promise<email.pro.AccountDiagnosis>;
                        // POST /email/pro/{service}/account/{email}/diagnostics
                        POST(body?: {password: string}): Promise<email.pro.Task>;
                    }
                } | any
            }
        } | any
    }
}
// Api
type PathsEmailProGET = '/email/pro/{service}/externalContact/{externalEmailAddress}' |
  '/email/pro/{service}/externalContact' |
  '/email/pro/{service}/serviceInfos' |
  '/email/pro/{service}/domain' |
  '/email/pro/{service}/domain/{domainName}/disclaimerAttribute' |
  '/email/pro/{service}/domain/{domainName}/disclaimer' |
  '/email/pro/{service}/domain/{domainName}' |
  '/email/pro/{service}/task' |
  '/email/pro/{service}/task/{id}' |
  '/email/pro/{service}/billingPlan' |
  '/email/pro/{service}/billingMigrated' |
  '/email/pro/{service}/server' |
  '/email/pro/{service}/account' |
  '/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}' |
  '/email/pro/{service}/account/{email}/fullAccess' |
  '/email/pro/{service}/account/{email}' |
  '/email/pro/{service}/account/{email}/alias/{alias}' |
  '/email/pro/{service}/account/{email}/alias' |
  '/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}' |
  '/email/pro/{service}/account/{email}/sendAs' |
  '/email/pro/{service}/account/{email}/tasks' |
  '/email/pro/{service}/account/{email}/tasks/{id}' |
  '/email/pro/{service}/account/{email}/sendOnBehalfTo' |
  '/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}' |
  '/email/pro/{service}/account/{email}/diagnostics' |
  '/email/pro/{service}' |
  '/email/pro';

type PathsEmailProPUT = '/email/pro/{service}/externalContact/{externalEmailAddress}' |
  '/email/pro/{service}/serviceInfos' |
  '/email/pro/{service}/domain/{domainName}/disclaimer' |
  '/email/pro/{service}/domain/{domainName}' |
  '/email/pro/{service}/account/{email}' |
  '/email/pro/{service}';

type PathsEmailProPOST = '/email/pro/{service}/externalContact' |
  '/email/pro/{service}/updateFlagsOnAllAccounts' |
  '/email/pro/{service}/domain' |
  '/email/pro/{service}/domain/{domainName}/disclaimer' |
  '/email/pro/{service}/account/{email}/changePassword' |
  '/email/pro/{service}/account/{email}/fullAccess' |
  '/email/pro/{service}/account/{email}/terminate' |
  '/email/pro/{service}/account/{email}/alias' |
  '/email/pro/{service}/account/{email}/sendAs' |
  '/email/pro/{service}/account/{email}/sendOnBehalfTo' |
  '/email/pro/{service}/account/{email}/diagnostics';

type PathsEmailProDELETE = '/email/pro/{service}/externalContact/{externalEmailAddress}' |
  '/email/pro/{service}/domain/{domainName}/disclaimer' |
  '/email/pro/{service}/domain/{domainName}' |
  '/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}' |
  '/email/pro/{service}/account/{email}' |
  '/email/pro/{service}/account/{email}/alias/{alias}' |
  '/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}' |
  '/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}';

export class ApiEmailPro extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the PROEMAIL service
   * List available services
   */
  public get(path: '/email/pro'): Promise<string[]>;
  /**
   * Email pro service
   * Get this object properties
   */
  public get(path: '/email/pro/{service}', params: {service: string}): Promise<email.pro.Service>;
  /**
   * List the email.pro.Account objects
   * Accounts associated to this pro service
   */
  public get(path: '/email/pro/{service}/account', params: {service: string, id?: number, primaryEmailAddress?: string}): Promise<string[]>;
  /**
   * Mailbox
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/account/{email}', params: {service: string, email: string}): Promise<email.pro.Account>;
  /**
   * List the email.pro.AccountAlias objects
   * Aliases associated to this mailbox
   */
  public get(path: '/email/pro/{service}/account/{email}/alias', params: {service: string, email: string}): Promise<string[]>;
  /**
   * Aliases on this mailbox
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/account/{email}/alias/{alias}', params: {service: string, email: string, alias: string}): Promise<email.pro.AccountAlias>;
  /**
   * Account Diagnosis
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/account/{email}/diagnostics', params: {service: string, email: string}): Promise<email.pro.AccountDiagnosis>;
  /**
   * List the email.pro.AccountFullAccess objects
   * Full access granted users for this mailbox
   */
  public get(path: '/email/pro/{service}/account/{email}/fullAccess', params: {service: string, email: string}): Promise<number[]>;
  /**
   * Users having full access on this mailbox
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.pro.AccountFullAccess>;
  /**
   * List the email.pro.AccountSendAs objects
   * Send as granted users for this mailbox
   */
  public get(path: '/email/pro/{service}/account/{email}/sendAs', params: {service: string, email: string}): Promise<number[]>;
  /**
   * Users authorized to send mails from this mailbox
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.pro.AccountSendAs>;
  /**
   * List the email.pro.AccountSendOnBehalfTo objects
   * SendOnBehalfTo granted users for this mailbox
   */
  public get(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo', params: {service: string, email: string}): Promise<number[]>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.pro.AccountSendOnBehalfTo>;
  /**
   * List the email.pro.Task objects
   * Pending task for this mailbox
   */
  public get(path: '/email/pro/{service}/account/{email}/tasks', params: {service: string, email: string}): Promise<number[]>;
  /**
   * Organization task details
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/account/{email}/tasks/{id}', params: {service: string, email: string, id: string}): Promise<email.pro.Task>;
  /**
   * billingMigrated operations
   * Detects billing transition status for the service
   */
  public get(path: '/email/pro/{service}/billingMigrated', params: {service: string}): Promise<boolean>;
  /**
   * billingPlan operations
   * Emailpro billing plan
   */
  public get(path: '/email/pro/{service}/billingPlan', params: {service: string}): Promise<string>;
  /**
   * List the email.pro.Domain objects
   * Domains associated to this service
   */
  public get(path: '/email/pro/{service}/domain', params: {service: string, state?: OVH.email.pro.ObjectStateEnum}): Promise<string[]>;
  /**
   * Domain
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/domain/{domainName}', params: {service: string, domainName: string}): Promise<email.pro.Domain>;
  /**
   * disclaimer
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string}): Promise<email.pro.disclaimer>;
  /**
   * disclaimerAttribute operations
   * Get diclaimer attributes to substitute with Active Directory properties
   */
  public get(path: '/email/pro/{service}/domain/{domainName}/disclaimerAttribute', params: {service: string, domainName: string}): Promise<email.pro.DisclaimerAttributeEnum[]>;
  /**
   * List the email.pro.ExternalContact objects
   * External contacts for this service
   */
  public get(path: '/email/pro/{service}/externalContact', params: {service: string, displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string}): Promise<string[]>;
  /**
   * External contact for this pro service
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/externalContact/{externalEmailAddress}', params: {service: string, externalEmailAddress: string}): Promise<email.pro.ExternalContact>;
  /**
   * Server
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/server', params: {service: string}): Promise<email.pro.Server>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/serviceInfos', params: {service: string}): Promise<services.Service>;
  /**
   * List the email.pro.Task objects
   * Pending actions
   */
  public get(path: '/email/pro/{service}/task', params: {service: string}): Promise<number[]>;
  /**
   * Organization task details
   * Get this object properties
   */
  public get(path: '/email/pro/{service}/task/{id}', params: {service: string, id: string}): Promise<email.pro.Task>;
  public get(path: PathsEmailProGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Email pro service
   * Alter this object properties
   */
  public put(path: '/email/pro/{service}', params: {service: string, complexityEnabled?: boolean, displayName?: string, domain?: string, hostname?: string, lastUpdateDate?: string, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize?: number, maxSendSize?: number, minPasswordAge?: number, minPasswordLength?: number, offer?: OVH.email.pro.ServiceOfferEnum, spamAndVirusConfiguration?: OVH.email.pro.spamAndVirusConfiguration, state?: OVH.email.pro.ServiceStateEnum, taskPendingId?: number, webUrl?: string}): Promise<void>;
  /**
   * Mailbox
   * Alter this object properties
   */
  public put(path: '/email/pro/{service}/account/{email}', params: {service: string, email: string, SAMAccountName?: string, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, displayName?: string, domain?: string, expirationDate?: string, expirationOutlookDate?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, login?: string, mailingFilter?: OVH.email.pro.MailingFilterEnum[], passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: number, renewPeriod?: OVH.email.pro.renewPeriodEnum, spamAndVirusConfiguration?: OVH.email.pro.spamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: OVH.email.pro.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Domain
   * Alter this object properties
   */
  public put(path: '/email/pro/{service}/domain/{domainName}', params: {service: string, domainName: string, cnameToCheck?: string, domainAliases?: string[], domainValidated?: boolean, isAliasDomain?: boolean, mxIsValid?: boolean, mxRecord?: string[], mxRelay?: string, name?: string, srvIsValid?: boolean, srvRecord?: string[], state?: OVH.email.pro.ObjectStateEnum, taskPendingId?: number, type?: OVH.email.pro.DomainTypeEnum}): Promise<void>;
  /**
   * disclaimer
   * Alter this object properties
   */
  public put(path: '/email/pro/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string, content?: string, creationDate?: string, name?: string, outsideOnly?: boolean, taskPendingId?: number}): Promise<void>;
  /**
   * External contact for this pro service
   * Alter this object properties
   */
  public put(path: '/email/pro/{service}/externalContact/{externalEmailAddress}', params: {service: string, externalEmailAddress: string, creationDate?: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastName?: string, state?: OVH.email.pro.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/email/pro/{service}/serviceInfos', params: {service: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsEmailProPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the email.pro.AccountAlias objects
   * Create new alias
   */
  public post(path: '/email/pro/{service}/account/{email}/alias', params: {service: string, email: string, alias: string}): Promise<email.pro.Task>;
  /**
   * changePassword operations
   * Change mailbox password
   */
  public post(path: '/email/pro/{service}/account/{email}/changePassword', params: {service: string, email: string, password: string}): Promise<email.pro.Task>;
  /**
   * Account Diagnosis
   * Create new diagnosis request
   */
  public post(path: '/email/pro/{service}/account/{email}/diagnostics', params: {service: string, email: string, password: string}): Promise<email.pro.Task>;
  /**
   * List the email.pro.AccountFullAccess objects
   * Allow full access to a user
   */
  public post(path: '/email/pro/{service}/account/{email}/fullAccess', params: {service: string, email: string, allowedAccountId: number}): Promise<email.pro.Task>;
  /**
   * List the email.pro.AccountSendAs objects
   * Allow another user to send mails from this mailbox
   */
  public post(path: '/email/pro/{service}/account/{email}/sendAs', params: {service: string, email: string, allowAccountId: number}): Promise<email.pro.Task>;
  /**
   * List the email.pro.AccountSendOnBehalfTo objects
   * Allow another user to Send On Behalf To mails from this mailbox
   */
  public post(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo', params: {service: string, email: string, allowAccountId: number}): Promise<email.pro.Task>;
  /**
   * terminate operations
   * Terminate account at expiration date
   */
  public post(path: '/email/pro/{service}/account/{email}/terminate', params: {service: string, email: string}): Promise<string>;
  /**
   * List the email.pro.Domain objects
   * Create new domain in pro services
   */
  public post(path: '/email/pro/{service}/domain', params: {service: string, configureAutodiscover?: boolean, configureMx?: boolean, mxRelay?: string, name: string, type: OVH.email.pro.DomainTypeEnum}): Promise<email.pro.Task>;
  /**
   * disclaimer
   * Create organization disclaimer of each email
   */
  public post(path: '/email/pro/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string, content: string, outsideOnly?: boolean}): Promise<email.pro.Task>;
  /**
   * List the email.pro.ExternalContact objects
   * create new external contact
   */
  public post(path: '/email/pro/{service}/externalContact', params: {service: string, displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string}): Promise<email.pro.Task>;
  /**
   * updateFlagsOnAllAccounts operations
   * Update spam and virus flags on all active accounts
   */
  public post(path: '/email/pro/{service}/updateFlagsOnAllAccounts', params: {service: string}): Promise<void>;
  public post(path: PathsEmailProPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Mailbox
   * Delete existing mailbox in pro server
   */
  public delete(path: '/email/pro/{service}/account/{email}', params: {service: string, email: string}): Promise<email.pro.Task>;
  /**
   * Aliases on this mailbox
   * Delete existing alias
   */
  public delete(path: '/email/pro/{service}/account/{email}/alias/{alias}', params: {service: string, email: string, alias: string}): Promise<email.pro.Task>;
  /**
   * Users having full access on this mailbox
   * Revoke full access
   */
  public delete(path: '/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.pro.Task>;
  /**
   * Users authorized to send mails from this mailbox
   * Delete allowed user for sendAs
   */
  public delete(path: '/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.pro.Task>;
  /**
   * Get users authorized to Send On Behalf To mails from this mailbox
   * Delete allowed user for SendOnBehalfTo
   */
  public delete(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}', params: {service: string, email: string, allowedAccountId: string}): Promise<email.pro.Task>;
  /**
   * Domain
   * Delete existing domain in pro services
   */
  public delete(path: '/email/pro/{service}/domain/{domainName}', params: {service: string, domainName: string}): Promise<email.pro.Task>;
  /**
   * disclaimer
   * Delete existing organization disclaimer
   */
  public delete(path: '/email/pro/{service}/domain/{domainName}/disclaimer', params: {service: string, domainName: string}): Promise<email.pro.Task>;
  /**
   * External contact for this pro service
   * delete external contact
   */
  public delete(path: '/email/pro/{service}/externalContact/{externalEmailAddress}', params: {service: string, externalEmailAddress: string}): Promise<email.pro.Task>;
  public delete(path: PathsEmailProDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}