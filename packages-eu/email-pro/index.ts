import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /email/pro Models
 * Source: https://eu.api.ovh.com/1.0/email/pro.json
 */
export namespace email {
    export namespace pro {
        // interface fullName: email.pro.Account.Account
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
        // interface fullName: email.pro.AccountAlias.AccountAlias
        export interface AccountAlias {
            alias: string;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.pro.AccountDiagnosis.AccountDiagnosis
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
        // interface fullName: email.pro.AccountFullAccess.AccountFullAccess
        export interface AccountFullAccess {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.pro.AccountSendAs.AccountSendAs
        export interface AccountSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // interface fullName: email.pro.AccountSendOnBehalfTo.AccountSendOnBehalfTo
        export interface AccountSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        // type fullname: email.pro.DisclaimerAttributeEnum
        export type DisclaimerAttributeEnum = "City" | "Company" | "Country" | "Department" | "DisplayName" | "Email" | "FaxNumber" | "FirstName" | "HomePhoneNumber" | "Initials" | "LastName" | "Manager" | "MobileNumber" | "Notes" | "Office" | "OtherFaxNumber" | "OtherHomePhoneNumber" | "OtherPhoneNumber" | "PagerNumber" | "PhoneNumber" | "State" | "Street" | "Title" | "UserLogonName" | "ZipCode"
        // interface fullName: email.pro.Domain.Domain
        export interface Domain {
            cnameToCheck?: string;
            domainAliases: string[];
            domainValidated: boolean;
            isAliasDomain: boolean;
            mxIsValid: boolean;
            mxRecord?: string[];
            mxRelay?: string;
            name: string;
            srvIsValid: boolean;
            srvRecord?: string[];
            state: email.pro.ObjectStateEnum;
            taskPendingId: number;
            type: email.pro.DomainTypeEnum;
        }
        // type fullname: email.pro.DomainTypeEnum
        export type DomainTypeEnum = "authoritative" | "nonAuthoritative"
        // interface fullName: email.pro.ExternalContact.ExternalContact
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
        // type fullname: email.pro.MailingFilterEnum
        export type MailingFilterEnum = "vaderetro"
        // type fullname: email.pro.ObjectStateEnum
        export type ObjectStateEnum = "creating" | "deleting" | "ok" | "reopening" | "suspended" | "suspending" | "unknown"
        // interface fullName: email.pro.Server.Server
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
        // type fullname: email.pro.ServerStateEnum
        export type ServerStateEnum = "configurationPending" | "notConfigured" | "ok"
        // interface fullName: email.pro.Service.Service
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
            offer: email.pro.ServiceOfferEnum;
            spamAndVirusConfiguration: email.pro.spamAndVirusConfiguration;
            state: email.pro.ServiceStateEnum;
            taskPendingId: number;
            webUrl?: string;
        }
        // type fullname: email.pro.ServiceOfferEnum
        export type ServiceOfferEnum = "emailpro"
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

/**
 * END API /email/pro Models
 */
export function proxyEmailPro(ovhEngine: OvhRequestable): Email {
    return buildOvhProxy(ovhEngine, '/email');
}
export default proxyEmailPro;
/**
 * Api Proxy model
 */// Apis harmony
// path /email
export interface Email {
    pro: {
        // GET /email/pro
        $get(): Promise<string[]>;
        $(service: string): {
            // GET /email/pro/{service}
            $get(): Promise<email.pro.Service>;
            // PUT /email/pro/{service}
            $put(params?: { complexityEnabled?: boolean, displayName?: string, domain?: string, hostname?: string, lastUpdateDate?: string, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize?: number, maxSendSize?: number, minPasswordAge?: number, minPasswordLength?: number, offer?: email.pro.ServiceOfferEnum, spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration, state?: email.pro.ServiceStateEnum, taskPendingId?: number, webUrl?: string }): Promise<void>;
            account: {
                // GET /email/pro/{service}/account
                $get(params?: { id?: number, primaryEmailAddress?: string }): Promise<string[]>;
                $(email: string): {
                    // DELETE /email/pro/{service}/account/{email}
                    $delete(): Promise<email.pro.Task>;
                    // GET /email/pro/{service}/account/{email}
                    $get(): Promise<email.pro.Account>;
                    // PUT /email/pro/{service}/account/{email}
                    $put(params?: { SAMAccountName?: string, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, displayName?: string, domain?: string, expirationDate?: string, expirationOutlookDate?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, login?: string, mailingFilter?: email.pro.MailingFilterEnum[], passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: number, renewPeriod?: email.pro.renewPeriodEnum, spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: email.pro.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                    alias: {
                        // GET /email/pro/{service}/account/{email}/alias
                        $get(): Promise<string[]>;
                        // POST /email/pro/{service}/account/{email}/alias
                        $post(params: { alias: string }): Promise<email.pro.Task>;
                        $(alias: string): {
                            // DELETE /email/pro/{service}/account/{email}/alias/{alias}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/pro/{service}/account/{email}/alias/{alias}
                            $get(): Promise<email.pro.AccountAlias>;
                        };
                    }
                    changePassword: {
                        // POST /email/pro/{service}/account/{email}/changePassword
                        $post(params: { password: string }): Promise<email.pro.Task>;
                    }
                    diagnostics: {
                        // GET /email/pro/{service}/account/{email}/diagnostics
                        $get(): Promise<email.pro.AccountDiagnosis>;
                        // POST /email/pro/{service}/account/{email}/diagnostics
                        $post(params: { password: string }): Promise<email.pro.Task>;
                    }
                    fullAccess: {
                        // GET /email/pro/{service}/account/{email}/fullAccess
                        $get(): Promise<number[]>;
                        // POST /email/pro/{service}/account/{email}/fullAccess
                        $post(params: { allowedAccountId: number }): Promise<email.pro.Task>;
                        $(allowedAccountId: number): {
                            // DELETE /email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}
                            $get(): Promise<email.pro.AccountFullAccess>;
                        };
                    }
                    sendAs: {
                        // GET /email/pro/{service}/account/{email}/sendAs
                        $get(): Promise<number[]>;
                        // POST /email/pro/{service}/account/{email}/sendAs
                        $post(params: { allowAccountId: number }): Promise<email.pro.Task>;
                        $(allowedAccountId: number): {
                            // DELETE /email/pro/{service}/account/{email}/sendAs/{allowedAccountId}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/pro/{service}/account/{email}/sendAs/{allowedAccountId}
                            $get(): Promise<email.pro.AccountSendAs>;
                        };
                    }
                    sendOnBehalfTo: {
                        // GET /email/pro/{service}/account/{email}/sendOnBehalfTo
                        $get(): Promise<number[]>;
                        // POST /email/pro/{service}/account/{email}/sendOnBehalfTo
                        $post(params: { allowAccountId: number }): Promise<email.pro.Task>;
                        $(allowedAccountId: number): {
                            // DELETE /email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                            $delete(): Promise<email.pro.Task>;
                            // GET /email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                            $get(): Promise<email.pro.AccountSendOnBehalfTo>;
                        };
                    }
                    tasks: {
                        // GET /email/pro/{service}/account/{email}/tasks
                        $get(): Promise<number[]>;
                        $(id: number): {
                            // GET /email/pro/{service}/account/{email}/tasks/{id}
                            $get(): Promise<email.pro.Task>;
                        };
                    }
                    terminate: {
                        // POST /email/pro/{service}/account/{email}/terminate
                        $post(): Promise<string>;
                    }
                };
            }
            billingMigrated: {
                // GET /email/pro/{service}/billingMigrated
                $get(): Promise<boolean>;
            }
            billingPlan: {
                // GET /email/pro/{service}/billingPlan
                $get(): Promise<string>;
            }
            domain: {
                // GET /email/pro/{service}/domain
                $get(params?: { state?: email.pro.ObjectStateEnum }): Promise<string[]>;
                // POST /email/pro/{service}/domain
                $post(params: { configureAutodiscover?: boolean, configureMx?: boolean, mxRelay?: string, name: string, type: email.pro.DomainTypeEnum }): Promise<email.pro.Task>;
                $(domainName: string): {
                    // DELETE /email/pro/{service}/domain/{domainName}
                    $delete(): Promise<email.pro.Task>;
                    // GET /email/pro/{service}/domain/{domainName}
                    $get(): Promise<email.pro.Domain>;
                    // PUT /email/pro/{service}/domain/{domainName}
                    $put(params?: { cnameToCheck?: string, domainAliases?: string[], domainValidated?: boolean, isAliasDomain?: boolean, mxIsValid?: boolean, mxRecord?: string[], mxRelay?: string, name?: string, srvIsValid?: boolean, srvRecord?: string[], state?: email.pro.ObjectStateEnum, taskPendingId?: number, type?: email.pro.DomainTypeEnum }): Promise<void>;
                    disclaimer: {
                        // DELETE /email/pro/{service}/domain/{domainName}/disclaimer
                        $delete(): Promise<email.pro.Task>;
                        // GET /email/pro/{service}/domain/{domainName}/disclaimer
                        $get(): Promise<email.pro.disclaimer>;
                        // POST /email/pro/{service}/domain/{domainName}/disclaimer
                        $post(params: { content: string, outsideOnly?: boolean }): Promise<email.pro.Task>;
                        // PUT /email/pro/{service}/domain/{domainName}/disclaimer
                        $put(params?: { content?: string, creationDate?: string, name?: string, outsideOnly?: boolean, taskPendingId?: number }): Promise<void>;
                    }
                    disclaimerAttribute: {
                        // GET /email/pro/{service}/domain/{domainName}/disclaimerAttribute
                        $get(): Promise<email.pro.DisclaimerAttributeEnum[]>;
                    }
                };
            }
            externalContact: {
                // GET /email/pro/{service}/externalContact
                $get(params?: { displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string }): Promise<string[]>;
                // POST /email/pro/{service}/externalContact
                $post(params: { displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string }): Promise<email.pro.Task>;
                $(externalEmailAddress: string): {
                    // DELETE /email/pro/{service}/externalContact/{externalEmailAddress}
                    $delete(): Promise<email.pro.Task>;
                    // GET /email/pro/{service}/externalContact/{externalEmailAddress}
                    $get(): Promise<email.pro.ExternalContact>;
                    // PUT /email/pro/{service}/externalContact/{externalEmailAddress}
                    $put(params?: { creationDate?: string, displayName?: string, externalEmailAddress?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastName?: string, state?: email.pro.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                };
            }
            server: {
                // GET /email/pro/{service}/server
                $get(): Promise<email.pro.Server>;
            }
            serviceInfos: {
                // GET /email/pro/{service}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /email/pro/{service}/serviceInfos
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            }
            task: {
                // GET /email/pro/{service}/task
                $get(): Promise<number[]>;
                $(id: number): {
                    // GET /email/pro/{service}/task/{id}
                    $get(): Promise<email.pro.Task>;
                };
            }
            updateFlagsOnAllAccounts: {
                // POST /email/pro/{service}/updateFlagsOnAllAccounts
                $post(): Promise<void>;
            }
        };
    }
}
