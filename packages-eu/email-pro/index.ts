import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /email/pro Models
 * Source: https://eu.api.ovh.com/1.0/email/pro.json
 */
export namespace email {
    export namespace pro {
        /**
         * Mailbox
         * interface fullName: email.pro.Account.Account
         */
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
        /**
         * Aliases on this mailbox
         * interface fullName: email.pro.AccountAlias.AccountAlias
         */
        export interface AccountAlias {
            alias: string;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Account Diagnosis
         * interface fullName: email.pro.AccountDiagnosis.AccountDiagnosis
         */
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
        /**
         * Users having full access on this mailbox
         * interface fullName: email.pro.AccountFullAccess.AccountFullAccess
         */
        export interface AccountFullAccess {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Mailbox
         * interface fullName: email.pro.AccountNative.AccountNative
         */
        export interface AccountNative {
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
        /**
         * Users authorized to send mails from this mailbox
         * interface fullName: email.pro.AccountSendAs.AccountSendAs
         */
        export interface AccountSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Get users authorized to Send On Behalf To mails from this mailbox
         * interface fullName: email.pro.AccountSendOnBehalfTo.AccountSendOnBehalfTo
         */
        export interface AccountSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Disclaimer attributes list
         * type fullname: email.pro.DisclaimerAttributeEnum
         */
        export type DisclaimerAttributeEnum = "City" | "Company" | "Country" | "Department" | "DisplayName" | "Email" | "FaxNumber" | "FirstName" | "HomePhoneNumber" | "Initials" | "LastName" | "Manager" | "MobileNumber" | "Notes" | "Office" | "OtherFaxNumber" | "OtherHomePhoneNumber" | "OtherPhoneNumber" | "PagerNumber" | "PhoneNumber" | "State" | "Street" | "Title" | "UserLogonName" | "ZipCode"
        /**
         * DKIM for a domain
         * interface fullName: email.pro.Dkim.Dkim
         */
        export interface Dkim {
            cnameIsValid: boolean;
            customerRecord: string;
            header: string;
            lastUpdate?: string;
            recordType: email.pro.DkimRecordTypeEnum;
            selectorName: string;
            status: email.pro.DkimStatusEnum;
            targetRecord?: string;
            taskPendingId?: number;
        }
        /**
         * Record type of the customer record
         * type fullname: email.pro.DkimRecordTypeEnum
         */
        export type DkimRecordTypeEnum = "CNAME"
        /**
         * DKIM status
         * type fullname: email.pro.DkimStatusEnum
         */
        export type DkimStatusEnum = "deleting" | "disabling" | "enabling" | "inProduction" | "ready" | "todo" | "waitingRecord"
        /**
         * Domain
         * interface fullName: email.pro.Domain.Domain
         */
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
        /**
         * Dkim selectors and DNS configuration state
         * interface fullName: email.pro.DomainDkimDiagnostics.DomainDkimDiagnostics
         */
        export interface DomainDkimDiagnostics {
            errorCode?: number;
            message?: string;
            state?: email.pro.DomainDkimDiagnosticsStateEnum;
        }
        /**
         * DKIM status
         * type fullname: email.pro.DomainDkimDiagnosticsStateEnum
         */
        export type DomainDkimDiagnosticsStateEnum = "active" | "disabled" | "error" | "inProgress" | "toConfigure"
        /**
         * Domain
         * interface fullName: email.pro.DomainNative.DomainNative
         */
        export interface DomainNative {
            cnameToCheck?: string;
            dkimDiagnostics?: email.pro.DomainDkimDiagnostics;
            domainAliases: string[];
            domainValidated: boolean;
            expectedAutodiscoverSRV: string;
            expectedMX: string[];
            expectedSPF: string;
            isAliasDomain: boolean;
            mxIsValid: boolean;
            mxRecord?: string[];
            mxRelay?: string;
            name: string;
            spfIsValid: boolean;
            spfRecord?: string[];
            srvIsValid: boolean;
            srvRecord?: string[];
            state: email.pro.ObjectStateEnum;
            taskPendingId: number;
            type: email.pro.DomainTypeEnum;
        }
        /**
         * Domain type
         * type fullname: email.pro.DomainTypeEnum
         */
        export type DomainTypeEnum = "authoritative" | "nonAuthoritative"
        /**
         * External contact for this pro service
         * interface fullName: email.pro.ExternalContact.ExternalContact
         */
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
        /**
         * External contact for this pro service
         * interface fullName: email.pro.ExternalContactNative.ExternalContactNative
         */
        export interface ExternalContactNative {
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
        /**
         * Mailing filter options availlable
         * type fullname: email.pro.MailingFilterEnum
         */
        export type MailingFilterEnum = "vaderetro"
        /**
         * Current object state
         * type fullname: email.pro.ObjectStateEnum
         */
        export type ObjectStateEnum = "creating" | "deleting" | "ok" | "reopening" | "suspended" | "suspending" | "unknown"
        /**
         * Server
         * interface fullName: email.pro.Server.Server
         */
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
        /**
         * Server State
         * type fullname: email.pro.ServerStateEnum
         */
        export type ServerStateEnum = "configurationPending" | "notConfigured" | "ok"
        /**
         * Email pro service
         * interface fullName: email.pro.Service.Service
         */
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
        /**
         * Email pro service
         * interface fullName: email.pro.ServiceNative.ServiceNative
         */
        export interface ServiceNative {
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
        /**
         * Email pro service
         * interface fullName: email.pro.ServiceNativeWithIAM.ServiceNativeWithIAM
         */
        export interface ServiceNativeWithIAM {
            complexityEnabled: boolean;
            displayName?: string;
            domain: string;
            hostname?: string;
            iam?: iam.ResourceMetadata;
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
        /**
         * Service Offer name
         * type fullname: email.pro.ServiceOfferEnum
         */
        export type ServiceOfferEnum = "emailpro"
        /**
         * Service State
         * type fullname: email.pro.ServiceStateEnum
         */
        export type ServiceStateEnum = "creating" | "deleting" | "inMaintenance" | "ok" | "reopening" | "suspended" | "suspending"
        /**
         * Email pro service
         * interface fullName: email.pro.ServiceWithIAM.ServiceWithIAM
         */
        export interface ServiceWithIAM {
            complexityEnabled: boolean;
            displayName?: string;
            domain: string;
            hostname?: string;
            iam?: iam.ResourceMetadata;
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
        /**
         * Organization task details
         * interface fullName: email.pro.Task.Task
         */
        export interface Task {
            finishDate?: string;
            function: email.pro.TaskFunctionEnum;
            id: number;
            status: email.pro.TaskStatusEnum;
            todoDate: string;
        }
        /**
         * function enumeration for task
         * type fullname: email.pro.TaskFunctionEnum
         */
        export type TaskFunctionEnum = "addAccount" | "addAlias" | "addDomain" | "addDomainDKIM" | "addDomainDisclaimer" | "addExternalContact" | "addFullAccess" | "addSendAs" | "addSendOnBehalfTo" | "addServiceAuthorizedIp" | "changeHostname" | "changePassword" | "configureCustomer" | "deleteAccount" | "deleteAlias" | "deleteDomain" | "deleteDomainDKIM" | "deleteDomainDisclaimer" | "deleteExternalContact" | "deleteFullAccess" | "deleteSendAs" | "deleteSendOnBehalfTo" | "deleteService" | "deleteServiceAuthorizedIp" | "diagnoseAccount" | "disableDKIM" | "enableDKIM" | "expandDrive" | "installServer" | "maintenance" | "migrateAccountViaOMM" | "migrationAccount" | "migrationDisclaimer" | "migrationExternalContact" | "migrationHistory" | "migrationService" | "reOpenAccount" | "setAccount" | "setAlias" | "setDns" | "setDomain" | "setDomainDisclaimer" | "setExternalContact" | "setService" | "suspendAccount" | "suspendService" | "unknown" | "unsuspendAccount" | "unsuspendService"
        /**
         * Task status
         * type fullname: email.pro.TaskStatusEnum
         */
        export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        /**
         * disclaimer
         * interface fullName: email.pro.disclaimer.disclaimer
         */
        export interface disclaimer {
            content: string;
            creationDate: string;
            name: string;
            outsideOnly: boolean;
            taskPendingId: number;
        }
        /**
         * disclaimer
         * interface fullName: email.pro.disclaimerNative.disclaimerNative
         */
        export interface disclaimerNative {
            content: string;
            creationDate: string;
            name: string;
            outsideOnly: boolean;
            taskPendingId: number;
        }
        /**
         * DKIM for a domain
         * interface fullName: email.pro.dkim.dkim
         */
        export interface dkim {
            customerRecord: string;
            header: string;
            lastUpdate?: string;
            recordType: email.pro.dkimRecordTypeEnum;
            selectorName: string;
            status: email.pro.dkimStatusEnum;
            targetRecord?: string;
            taskPendingId?: number;
        }
        /**
         * Record type of the customer record
         * type fullname: email.pro.dkimRecordTypeEnum
         */
        export type dkimRecordTypeEnum = "CNAME"
        /**
         * dkim status
         * type fullname: email.pro.dkimStatusEnum
         */
        export type dkimStatusEnum = "deleting" | "disabling" | "enabling" | "inProduction" | "ready" | "todo" | "waitingRecord"
        /**
         * Renew period
         * type fullname: email.pro.renewPeriodEnum
         */
        export type renewPeriodEnum = "monthly" | "yearly"
        /**
         * Spam and Antyvirus configuration
         * interface fullName: email.pro.spamAndVirusConfiguration.spamAndVirusConfiguration
         */
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
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
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

/**
 * END API /email/pro Models
 */
export function proxyEmailPro(ovhEngine: OvhRequestable): Email {
    return buildOvhProxy(ovhEngine, '/email');
}
export default proxyEmailPro;
/**
 * Api model for /email/pro
 */
export interface Email {
    pro: {
        /**
         * List available services
         * GET /email/pro
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(service: string): {
            /**
             * Get this object properties
             * GET /email/pro/{service}
             */
            $get(): Promise<email.pro.ServiceNative>;
            /**
             * Alter this object properties
             * PUT /email/pro/{service}
             */
            $put(params?: { complexityEnabled?: boolean, displayName?: string, domain?: string, hostname?: string, lastUpdateDate?: string, lockoutDuration?: number, lockoutObservationWindow?: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize?: number, maxSendSize?: number, minPasswordAge?: number, minPasswordLength?: number, offer?: email.pro.ServiceOfferEnum, spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration, state?: email.pro.ServiceStateEnum, taskPendingId?: number, webUrl?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            account: {
                /**
                 * Accounts associated to this pro service
                 * GET /email/pro/{service}/account
                 */
                $get(params?: { id?: number, primaryEmailAddress?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(email: string): {
                    /**
                     * Delete existing mailbox in pro server
                     * DELETE /email/pro/{service}/account/{email}
                     */
                    $delete(): Promise<email.pro.Task>;
                    /**
                     * Get this object properties
                     * GET /email/pro/{service}/account/{email}
                     */
                    $get(): Promise<email.pro.AccountNative>;
                    /**
                     * Alter this object properties
                     * PUT /email/pro/{service}/account/{email}
                     */
                    $put(params?: { SAMAccountName?: string, configured?: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, displayName?: string, domain?: string, expirationDate?: string, expirationOutlookDate?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, login?: string, mailingFilter?: email.pro.MailingFilterEnum[], passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: number, renewPeriod?: email.pro.renewPeriodEnum, spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration, spamDetected?: boolean, spamTicketNumber?: number, state?: email.pro.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    alias: {
                        /**
                         * Aliases associated to this mailbox
                         * GET /email/pro/{service}/account/{email}/alias
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create new alias
                         * POST /email/pro/{service}/account/{email}/alias
                         */
                        $post(params: { alias: string }): Promise<email.pro.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(alias: string): {
                            /**
                             * Delete existing alias
                             * DELETE /email/pro/{service}/account/{email}/alias/{alias}
                             */
                            $delete(): Promise<email.pro.Task>;
                            /**
                             * Get this object properties
                             * GET /email/pro/{service}/account/{email}/alias/{alias}
                             */
                            $get(): Promise<email.pro.AccountAlias>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    changePassword: {
                        /**
                         * Change mailbox password
                         * POST /email/pro/{service}/account/{email}/changePassword
                         */
                        $post(params: { password: string }): Promise<email.pro.Task>;
                    }
                    diagnostics: {
                        /**
                         * Get this object properties
                         * GET /email/pro/{service}/account/{email}/diagnostics
                         */
                        $get(): Promise<email.pro.AccountDiagnosis>;
                        /**
                         * Create new diagnosis request
                         * POST /email/pro/{service}/account/{email}/diagnostics
                         */
                        $post(params: { password: string }): Promise<email.pro.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    fullAccess: {
                        /**
                         * Full access granted users for this mailbox
                         * GET /email/pro/{service}/account/{email}/fullAccess
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Allow full access to a user
                         * POST /email/pro/{service}/account/{email}/fullAccess
                         */
                        $post(params: { allowedAccountId: number }): Promise<email.pro.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(allowedAccountId: number): {
                            /**
                             * Revoke full access
                             * DELETE /email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}
                             */
                            $delete(): Promise<email.pro.Task>;
                            /**
                             * Get this object properties
                             * GET /email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}
                             */
                            $get(): Promise<email.pro.AccountFullAccess>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    sendAs: {
                        /**
                         * Send as granted users for this mailbox
                         * GET /email/pro/{service}/account/{email}/sendAs
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Allow another user to send mails from this mailbox
                         * POST /email/pro/{service}/account/{email}/sendAs
                         */
                        $post(params: { allowAccountId: number }): Promise<email.pro.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(allowedAccountId: number): {
                            /**
                             * Delete allowed user for sendAs
                             * DELETE /email/pro/{service}/account/{email}/sendAs/{allowedAccountId}
                             */
                            $delete(): Promise<email.pro.Task>;
                            /**
                             * Get this object properties
                             * GET /email/pro/{service}/account/{email}/sendAs/{allowedAccountId}
                             */
                            $get(): Promise<email.pro.AccountSendAs>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    sendOnBehalfTo: {
                        /**
                         * SendOnBehalfTo granted users for this mailbox
                         * GET /email/pro/{service}/account/{email}/sendOnBehalfTo
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Allow another user to Send On Behalf To mails from this mailbox
                         * POST /email/pro/{service}/account/{email}/sendOnBehalfTo
                         */
                        $post(params: { allowAccountId: number }): Promise<email.pro.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(allowedAccountId: number): {
                            /**
                             * Delete allowed user for SendOnBehalfTo
                             * DELETE /email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                             */
                            $delete(): Promise<email.pro.Task>;
                            /**
                             * Get this object properties
                             * GET /email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                             */
                            $get(): Promise<email.pro.AccountSendOnBehalfTo>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    tasks: {
                        /**
                         * Pending task for this mailbox
                         * GET /email/pro/{service}/account/{email}/tasks
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(id: number): {
                            /**
                             * Get this object properties
                             * GET /email/pro/{service}/account/{email}/tasks/{id}
                             */
                            $get(): Promise<email.pro.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    terminate: {
                        /**
                         * Terminate account at expiration date
                         * POST /email/pro/{service}/account/{email}/terminate
                         */
                        $post(): Promise<string>;
                    }
                };
            }
            billingMigrated: {
                /**
                 * Detects billing transition status for the service
                 * GET /email/pro/{service}/billingMigrated
                 */
                $get(): Promise<boolean>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            billingPlan: {
                /**
                 * Emailpro billing plan
                 * GET /email/pro/{service}/billingPlan
                 */
                $get(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /email/pro/{service}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            domain: {
                /**
                 * Domains associated to this service
                 * GET /email/pro/{service}/domain
                 */
                $get(params?: { state?: email.pro.ObjectStateEnum }): Promise<string[]>;
                /**
                 * Create new domain in pro services
                 * POST /email/pro/{service}/domain
                 */
                $post(params: { autoEnableDKIM?: boolean, configureAutodiscover?: boolean, configureDKIM?: boolean, configureMx?: boolean, configureSPF?: boolean, mxRelay?: string, name: string, type: email.pro.DomainTypeEnum }): Promise<email.pro.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(domainName: string): {
                    /**
                     * Delete existing domain in pro services
                     * DELETE /email/pro/{service}/domain/{domainName}
                     */
                    $delete(): Promise<email.pro.Task>;
                    /**
                     * Get this object properties
                     * GET /email/pro/{service}/domain/{domainName}
                     */
                    $get(): Promise<email.pro.DomainNative>;
                    /**
                     * Alter this object properties
                     * PUT /email/pro/{service}/domain/{domainName}
                     */
                    $put(params?: { cnameToCheck?: string, domainAliases?: string[], domainValidated?: boolean, isAliasDomain?: boolean, mxIsValid?: boolean, mxRecord?: string[], mxRelay?: string, name?: string, srvIsValid?: boolean, srvRecord?: string[], state?: email.pro.ObjectStateEnum, taskPendingId?: number, type?: email.pro.DomainTypeEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    disclaimer: {
                        /**
                         * Delete existing organization disclaimer
                         * DELETE /email/pro/{service}/domain/{domainName}/disclaimer
                         */
                        $delete(): Promise<email.pro.Task>;
                        /**
                         * Get this object properties
                         * GET /email/pro/{service}/domain/{domainName}/disclaimer
                         */
                        $get(): Promise<email.pro.disclaimerNative>;
                        /**
                         * Create organization disclaimer of each email
                         * POST /email/pro/{service}/domain/{domainName}/disclaimer
                         */
                        $post(params: { content: string, outsideOnly?: boolean }): Promise<email.pro.Task>;
                        /**
                         * Alter this object properties
                         * PUT /email/pro/{service}/domain/{domainName}/disclaimer
                         */
                        $put(params?: { content?: string, creationDate?: string, name?: string, outsideOnly?: boolean, taskPendingId?: number }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    disclaimerAttribute: {
                        /**
                         * Get diclaimer attributes to substitute with Active Directory properties
                         * GET /email/pro/{service}/domain/{domainName}/disclaimerAttribute
                         */
                        $get(): Promise<email.pro.DisclaimerAttributeEnum[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    dkim: {
                        /**
                         * DKIM associated to this domain
                         * GET /email/pro/{service}/domain/{domainName}/dkim
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create DKIM selector on this domain
                         * POST /email/pro/{service}/domain/{domainName}/dkim
                         */
                        $post(params: { autoEnableDKIM?: boolean, configureDkim?: boolean, selectorName: string }): Promise<email.pro.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(selectorName: string): {
                            /**
                             * Delete DKIM selector on this domain
                             * DELETE /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
                             */
                            $delete(): Promise<email.pro.Task>;
                            /**
                             * Get this object properties
                             * GET /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
                             */
                            $get(): Promise<email.pro.Dkim>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            disable: {
                                /**
                                 * disable dkim signing
                                 * POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/disable
                                 */
                                $post(): Promise<email.pro.Task>;
                            }
                            enable: {
                                /**
                                 * enable dkim signing or switch selector used
                                 * POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
                                 */
                                $post(): Promise<email.pro.Task>;
                            }
                        };
                    }
                    dkimSelector: {
                        /**
                         * Get dkim selector list
                         * GET /email/pro/{service}/domain/{domainName}/dkimSelector
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            externalContact: {
                /**
                 * External contacts for this service
                 * GET /email/pro/{service}/externalContact
                 */
                $get(params?: { displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string }): Promise<string[]>;
                /**
                 * create new external contact
                 * POST /email/pro/{service}/externalContact
                 */
                $post(params: { displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string }): Promise<email.pro.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(externalEmailAddress: string): {
                    /**
                     * delete external contact
                     * DELETE /email/pro/{service}/externalContact/{externalEmailAddress}
                     */
                    $delete(): Promise<email.pro.Task>;
                    /**
                     * Get this object properties
                     * GET /email/pro/{service}/externalContact/{externalEmailAddress}
                     */
                    $get(): Promise<email.pro.ExternalContactNative>;
                    /**
                     * Alter this object properties
                     * PUT /email/pro/{service}/externalContact/{externalEmailAddress}
                     */
                    $put(params?: { creationDate?: string, displayName?: string, externalEmailAddress?: string, firstName?: string, hiddenFromGAL?: boolean, id?: number, initials?: string, lastName?: string, state?: email.pro.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            server: {
                /**
                 * Get this object properties
                 * GET /email/pro/{service}/server
                 */
                $get(): Promise<email.pro.Server>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /email/pro/{service}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /email/pro/{service}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                /**
                 * Pending actions
                 * GET /email/pro/{service}/task
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /email/pro/{service}/task/{id}
                     */
                    $get(): Promise<email.pro.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            updateFlagsOnAllAccounts: {
                /**
                 * Update spam and virus flags on all active accounts
                 * POST /email/pro/{service}/updateFlagsOnAllAccounts
                 */
                $post(): Promise<void>;
            }
        };
    }
}
