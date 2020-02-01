import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /email/mxplan Models
 * Source: https://eu.api.ovh.com/1.0/email/mxplan.json
 */
export namespace email {
    export namespace mxplan {
        // interface fullName: email.mxplan.Account.Account
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
            state: email.pro.ObjectStateEnum;
            taskPendingId?: number;
        }
        // interface fullName: email.mxplan.AccountAlias.AccountAlias
        export interface AccountAlias {
            alias: string;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.mxplan.AccountDiagnosis.AccountDiagnosis
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
        // interface fullName: email.mxplan.AccountFullAccess.AccountFullAccess
        export interface AccountFullAccess {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.mxplan.AccountSendAs.AccountSendAs
        export interface AccountSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.mxplan.AccountSendOnBehalfTo.AccountSendOnBehalfTo
        export interface AccountSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.mxplan.Domain.Domain
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
            state: email.pro.ObjectStateEnum;
            taskPendingId: number;
            type: email.pro.DomainTypeEnum;
        }
        // interface fullName: email.mxplan.ExternalContact.ExternalContact
        export interface ExternalContact {
            creationDate: string;
            displayName: string;
            externalEmailAddress: string;
            firstName?: string;
            hiddenFromGAL: boolean;
            id: number;
            initials?: string;
            lastName?: string;
            state: email.pro.ObjectStateEnum;
            taskPendingId: number;
        }
        // interface fullName: email.mxplan.Server.Server
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
        // interface fullName: email.mxplan.Service.Service
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
        // type fullname: email.mxplan.ServiceOfferEnum
        export type ServiceOfferEnum = "MXPLAN"
        // interface fullName: email.mxplan.accountCapabilities.accountCapabilities
        export interface accountCapabilities {
            quotas?: number[];
        }
    }
    export namespace pro {
        // type fullname: email.pro.DisclaimerAttributeEnum
        export type DisclaimerAttributeEnum = "City" | "Company" | "Country" | "Department" | "DisplayName" | "Email" | "FaxNumber" | "FirstName" | "HomePhoneNumber" | "Initials" | "LastName" | "Manager" | "MobileNumber" | "Notes" | "Office" | "OtherFaxNumber" | "OtherHomePhoneNumber" | "OtherPhoneNumber" | "PagerNumber" | "PhoneNumber" | "State" | "Street" | "Title" | "UserLogonName" | "ZipCode"
        // type fullname: email.pro.DomainTypeEnum
        export type DomainTypeEnum = "authoritative" | "nonAuthoritative"
        // type fullname: email.pro.MailingFilterEnum
        export type MailingFilterEnum = "vaderetro"
        // type fullname: email.pro.ObjectStateEnum
        export type ObjectStateEnum = "creating" | "deleting" | "ok" | "reopening" | "suspended" | "suspending" | "unknown"
        // type fullname: email.pro.ServerStateEnum
        export type ServerStateEnum = "configurationPending" | "notConfigured" | "ok"
        // type fullname: email.pro.ServiceStateEnum
        export type ServiceStateEnum = "creating" | "deleting" | "inMaintenance" | "ok" | "reopening" | "suspended" | "suspending"
        // interface fullName: email.pro.Task.Task
        export interface Task {
            finishDate?: string;
            function: email.pro.TaskFunctionEnum;
            id: number;
            status: email.pro.TaskStatusEnum;
            todoDate: string;
        }
        // type fullname: email.pro.TaskFunctionEnum
        export type TaskFunctionEnum = "addAccount" | "addAlias" | "addDomain" | "addDomainDisclaimer" | "addExternalContact" | "addFullAccess" | "addSendAs" | "addSendOnBehalfTo" | "addServiceAuthorizedIp" | "changeHostname" | "changePassword" | "configureCustomer" | "deleteAccount" | "deleteAlias" | "deleteDomain" | "deleteDomainDisclaimer" | "deleteExternalContact" | "deleteFullAccess" | "deleteSendAs" | "deleteSendOnBehalfTo" | "deleteService" | "deleteServiceAuthorizedIp" | "diagnoseAccount" | "expandDrive" | "installServer" | "maintenance" | "migrateAccountViaOMM" | "migrationAccount" | "migrationDisclaimer" | "migrationExternalContact" | "migrationHistory" | "migrationService" | "reOpenAccount" | "setAccount" | "setAlias" | "setDns" | "setDomain" | "setDomainDisclaimer" | "setExternalContact" | "setService" | "suspendAccount" | "suspendService" | "unknown" | "unsuspendAccount" | "unsuspendService"
        // type fullname: email.pro.TaskStatusEnum
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        // interface fullName: email.pro.disclaimer.disclaimer
        export interface disclaimer {
            content: string;
            creationDate: string;
            name: string;
            outsideOnly: boolean;
            taskPendingId: number;
        }
        // type fullname: email.pro.renewPeriodEnum
        export type renewPeriodEnum = "monthly" | "yearly"
        // interface fullName: email.pro.spamAndVirusConfiguration.spamAndVirusConfiguration
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

/**
 * END API /email/mxplan Models
 */
export function proxyEmailMxplan(ovhEngine: OvhRequestable): Email {
    return buildOvhProxy(ovhEngine, '/email');
}
export default proxyEmailMxplan;
/**
 * Api Proxy model
 */// Apis harmony
// path /email
export interface Email{
    mxplan: {
        // GET /email/mxplan
        $get(): Promise<string[]>;
        $(service: string): {
            // GET /email/mxplan/{service}
            $get(): Promise<email.mxplan.Service>;
            // PUT /email/mxplan/{service}
            $put(params?: {complexityEnabled?: boolean, displayName?: string, domain?: string, hostname?: string, lastUpdateDate?: string, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize?: number, maxSendSize?: number, minPasswordAge?: number, minPasswordLength?: number, offer?: email.mxplan.ServiceOfferEnum, spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration, state?: email.pro.ServiceStateEnum, taskPendingId?: number, webUrl?: string}): Promise<void>;
            account: {
                // GET /email/mxplan/{service}/account
                $get(params?: {id?: number, primaryEmailAddress?: string}): Promise<string[]>;
                $(email: string): {
                    // DELETE /email/mxplan/{service}/account/{email}
                    $delete(): Promise<email.pro.Task>;
                    // GET /email/mxplan/{service}/account/{email}
                    $get(): Promise<email.mxplan.Account>;
                    // PUT /email/mxplan/{service}/account/{email}
                    $put(params?: {SAMAccountName?: string, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, displayName?: string, domain?: string, expirationDate?: string, expirationOutlookDate?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, login?: string, mailingFilter?: email.pro.MailingFilterEnum[], passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: number, renewPeriod?: email.pro.renewPeriodEnum, spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: email.pro.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
                    alias: {
                        // GET /email/mxplan/{service}/account/{email}/alias
                        $get(): Promise<string[]>;
                        // POST /email/mxplan/{service}/account/{email}/alias
                        $post(params: {alias: string}): Promise<email.pro.Task>;
                        $(alias: string): {
                            // DELETE /email/mxplan/{service}/account/{email}/alias/{alias}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/mxplan/{service}/account/{email}/alias/{alias}
                            $get(): Promise<email.mxplan.AccountAlias>;
                        };
                    }
                    capabilities: {
                        // GET /email/mxplan/{service}/account/{email}/capabilities
                        $get(): Promise<email.mxplan.accountCapabilities>;
                    }
                    changePassword: {
                        // POST /email/mxplan/{service}/account/{email}/changePassword
                        $post(params: {password: string}): Promise<email.pro.Task>;
                    }
                    diagnostic: {
                        // GET /email/mxplan/{service}/account/{email}/diagnostic
                        $get(): Promise<email.mxplan.AccountDiagnosis>;
                        // POST /email/mxplan/{service}/account/{email}/diagnostic
                        $post(params: {password: string}): Promise<email.pro.Task>;
                    }
                    fullAccess: {
                        // GET /email/mxplan/{service}/account/{email}/fullAccess
                        $get(): Promise<number[]>;
                        // POST /email/mxplan/{service}/account/{email}/fullAccess
                        $post(params: {allowedAccountId: number}): Promise<email.pro.Task>;
                        $(allowedAccountId: number): {
                            // DELETE /email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}
                            $get(): Promise<email.mxplan.AccountFullAccess>;
                        };
                    }
                    sendAs: {
                        // GET /email/mxplan/{service}/account/{email}/sendAs
                        $get(): Promise<number[]>;
                        // POST /email/mxplan/{service}/account/{email}/sendAs
                        $post(params: {allowAccountId: number}): Promise<email.pro.Task>;
                        $(allowedAccountId: number): {
                            // DELETE /email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}
                            $get(): Promise<email.mxplan.AccountSendAs>;
                        };
                    }
                    sendOnBehalfTo: {
                        // GET /email/mxplan/{service}/account/{email}/sendOnBehalfTo
                        $get(): Promise<number[]>;
                        // POST /email/mxplan/{service}/account/{email}/sendOnBehalfTo
                        $post(params: {allowAccountId: number}): Promise<email.pro.Task>;
                        $(allowedAccountId: number): {
                            // DELETE /email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                            $get(): Promise<email.mxplan.AccountSendOnBehalfTo>;
                        };
                    }
                    task: {
                        // GET /email/mxplan/{service}/account/{email}/task
                        $get(): Promise<number[]>;
                        $(id: number): {
                            // GET /email/mxplan/{service}/account/{email}/task/{id}
                            $get(): Promise<email.pro.Task>;
                        };
                    }
                };
            }
            domain: {
                // GET /email/mxplan/{service}/domain
                $get(params?: {state?: email.pro.ObjectStateEnum}): Promise<string[]>;
                $(domainName: string): {
                    // GET /email/mxplan/{service}/domain/{domainName}
                    $get(): Promise<email.mxplan.Domain>;
                    // PUT /email/mxplan/{service}/domain/{domainName}
                    $put(params?: {cnameToCheck?: string, domainAliases?: string[], domainValidated?: boolean, isAliasDomain?: boolean, mxIsValid?: boolean, mxRecord?: string[], mxRelay?: string, name?: string, srvIsValid?: boolean, srvRecord?: string[], state?: email.pro.ObjectStateEnum, taskPendingId?: number, type?: email.pro.DomainTypeEnum}): Promise<void>;
                    disclaimer: {
                        // DELETE /email/mxplan/{service}/domain/{domainName}/disclaimer
                        $delete(): Promise<email.pro.Task>;
                        // GET /email/mxplan/{service}/domain/{domainName}/disclaimer
                        $get(): Promise<email.pro.disclaimer>;
                        // POST /email/mxplan/{service}/domain/{domainName}/disclaimer
                        $post(params: {content: string, outsideOnly?: boolean}): Promise<email.pro.Task>;
                        // PUT /email/mxplan/{service}/domain/{domainName}/disclaimer
                        $put(params?: {content?: string, creationDate?: string, name?: string, outsideOnly?: boolean, taskPendingId?: number}): Promise<void>;
                    }
                    disclaimerAttribute: {
                        // GET /email/mxplan/{service}/domain/{domainName}/disclaimerAttribute
                        $get(): Promise<email.pro.DisclaimerAttributeEnum[]>;
                    }
                };
            }
            externalContact: {
                // GET /email/mxplan/{service}/externalContact
                $get(params?: {displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string}): Promise<string[]>;
                // POST /email/mxplan/{service}/externalContact
                $post(params: {displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string}): Promise<email.pro.Task>;
                $(externalEmailAddress: string): {
                    // DELETE /email/mxplan/{service}/externalContact/{externalEmailAddress}
                    $delete(): Promise<email.pro.Task>;
                    // GET /email/mxplan/{service}/externalContact/{externalEmailAddress}
                    $get(): Promise<email.mxplan.ExternalContact>;
                    // PUT /email/mxplan/{service}/externalContact/{externalEmailAddress}
                    $put(params?: {creationDate?: string, displayName?: string, externalEmailAddress?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastName?: string, state?: email.pro.ObjectStateEnum, taskPendingId?: number}): Promise<void>;
                };
            }
            server: {
                // GET /email/mxplan/{service}/server
                $get(): Promise<email.mxplan.Server>;
            }
            task: {
                // GET /email/mxplan/{service}/task
                $get(): Promise<number[]>;
                $(id: number): {
                    // GET /email/mxplan/{service}/task/{id}
                    $get(): Promise<email.pro.Task>;
                };
            }
            updateFlagsOnAllAccounts: {
                // POST /email/mxplan/{service}/updateFlagsOnAllAccounts
                $post(): Promise<void>;
            }
        };
    }
}
