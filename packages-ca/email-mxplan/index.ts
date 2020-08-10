import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /email/mxplan Models
 * Source: https://ca.api.ovh.com/1.0/email/mxplan.json
 */
export namespace email {
    export namespace mxplan {
        /**
         * Mailbox
         * interface fullName: email.mxplan.Account.Account
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
         * interface fullName: email.mxplan.AccountAlias.AccountAlias
         */
        export interface AccountAlias {
            alias: string;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Account Diagnosis
         * interface fullName: email.mxplan.AccountDiagnosis.AccountDiagnosis
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
         * interface fullName: email.mxplan.AccountFullAccess.AccountFullAccess
         */
        export interface AccountFullAccess {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Users authorized to send mails from this mailbox
         * interface fullName: email.mxplan.AccountSendAs.AccountSendAs
         */
        export interface AccountSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Get users authorized to Send On Behalf To mails from this mailbox
         * interface fullName: email.mxplan.AccountSendOnBehalfTo.AccountSendOnBehalfTo
         */
        export interface AccountSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        /**
         * Domain
         * interface fullName: email.mxplan.Domain.Domain
         */
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
        /**
         * External contact for this mxplan service
         * interface fullName: email.mxplan.ExternalContact.ExternalContact
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
         * Server
         * interface fullName: email.mxplan.Server.Server
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
         * MXPlan service
         * interface fullName: email.mxplan.Service.Service
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
            offer: email.mxplan.ServiceOfferEnum;
            spamAndVirusConfiguration: email.pro.spamAndVirusConfiguration;
            state: email.pro.ServiceStateEnum;
            taskPendingId: number;
            webUrl?: string;
        }
        /**
         * Service Offer name
         * type fullname: email.mxplan.ServiceOfferEnum
         */
        export type ServiceOfferEnum = "MXPLAN"
        /**
         * Account capabilities
         * interface fullName: email.mxplan.accountCapabilities.accountCapabilities
         */
        export interface accountCapabilities {
            quotas?: number[];
        }
    }
    export namespace pro {
        /**
         * Disclaimer attributes list
         * type fullname: email.pro.DisclaimerAttributeEnum
         */
        export type DisclaimerAttributeEnum = "City" | "Company" | "Country" | "Department" | "DisplayName" | "Email" | "FaxNumber" | "FirstName" | "HomePhoneNumber" | "Initials" | "LastName" | "Manager" | "MobileNumber" | "Notes" | "Office" | "OtherFaxNumber" | "OtherHomePhoneNumber" | "OtherPhoneNumber" | "PagerNumber" | "PhoneNumber" | "State" | "Street" | "Title" | "UserLogonName" | "ZipCode"
        /**
         * Domain type
         * type fullname: email.pro.DomainTypeEnum
         */
        export type DomainTypeEnum = "authoritative" | "nonAuthoritative"
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
         * Server State
         * type fullname: email.pro.ServerStateEnum
         */
        export type ServerStateEnum = "configurationPending" | "notConfigured" | "ok"
        /**
         * Service State
         * type fullname: email.pro.ServiceStateEnum
         */
        export type ServiceStateEnum = "creating" | "deleting" | "inMaintenance" | "ok" | "reopening" | "suspended" | "suspending"
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
        export type TaskFunctionEnum = "addAccount" | "addAlias" | "addDomain" | "addDomainDisclaimer" | "addExternalContact" | "addFullAccess" | "addSendAs" | "addSendOnBehalfTo" | "addServiceAuthorizedIp" | "changeHostname" | "changePassword" | "configureCustomer" | "deleteAccount" | "deleteAlias" | "deleteDomain" | "deleteDomainDisclaimer" | "deleteExternalContact" | "deleteFullAccess" | "deleteSendAs" | "deleteSendOnBehalfTo" | "deleteService" | "deleteServiceAuthorizedIp" | "diagnoseAccount" | "expandDrive" | "installServer" | "maintenance" | "migrateAccountViaOMM" | "migrationAccount" | "migrationDisclaimer" | "migrationExternalContact" | "migrationHistory" | "migrationService" | "reOpenAccount" | "setAccount" | "setAlias" | "setDns" | "setDomain" | "setDomainDisclaimer" | "setExternalContact" | "setService" | "suspendAccount" | "suspendService" | "unknown" | "unsuspendAccount" | "unsuspendService"
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

/**
 * END API /email/mxplan Models
 */
export function proxyEmailMxplan(ovhEngine: OvhRequestable): Email {
    return buildOvhProxy(ovhEngine, '/email');
}
export default proxyEmailMxplan;
/**
 * Api model for /email/mxplan
 */
export interface Email {
    mxplan: {
        /**
         * List available services
         * GET /email/mxplan
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(service: string): {
            /**
             * Get this object properties
             * GET /email/mxplan/{service}
             */
            $get(): Promise<email.mxplan.Service>;
            /**
             * Alter this object properties
             * PUT /email/mxplan/{service}
             */
            $put(params: { complexityEnabled: boolean, displayName?: string, domain: string, hostname?: string, lastUpdateDate?: string, lockoutDuration: number, lockoutObservationWindow: number, lockoutThreshold?: number, maxPasswordAge?: number, maxReceiveSize: number, maxSendSize: number, minPasswordAge?: number, minPasswordLength?: number, offer: email.mxplan.ServiceOfferEnum, spamAndVirusConfiguration: email.pro.spamAndVirusConfiguration, state: email.pro.ServiceStateEnum, taskPendingId: number, webUrl?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            account: {
                /**
                 * Accounts associated to this mxplan service
                 * GET /email/mxplan/{service}/account
                 */
                $get(params?: { id?: number, primaryEmailAddress?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(email: string): {
                    /**
                     * Delete existing mailbox in mxplan server
                     * DELETE /email/mxplan/{service}/account/{email}
                     */
                    $delete(): Promise<email.pro.Task>;
                    /**
                     * Get this object properties
                     * GET /email/mxplan/{service}/account/{email}
                     */
                    $get(): Promise<email.mxplan.Account>;
                    /**
                     * Alter this object properties
                     * PUT /email/mxplan/{service}/account/{email}
                     */
                    $put(params: { SAMAccountName?: string, configured: boolean, creationDate?: string, currentUsage?: number, deleteAtExpiration?: boolean, displayName?: string, domain: string, expirationDate?: string, expirationOutlookDate?: string, firstName?: string, hiddenFromGAL: boolean, id: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, lastUpdateDate?: string, login: string, mailingFilter?: email.pro.MailingFilterEnum[], passwordLastUpdate?: string, primaryEmailAddress: string, quota: number, renewPeriod?: email.pro.renewPeriodEnum, spamAndVirusConfiguration: email.pro.spamAndVirusConfiguration, spamDetected: boolean, spamTicketNumber?: number, state: email.pro.ObjectStateEnum, taskPendingId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    alias: {
                        /**
                         * Aliases associated to this mailbox
                         * GET /email/mxplan/{service}/account/{email}/alias
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create new alias
                         * POST /email/mxplan/{service}/account/{email}/alias
                         */
                        $post(params: { alias: string }): Promise<email.pro.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(alias: string): {
                            /**
                             * Delete existing alias
                             * DELETE /email/mxplan/{service}/account/{email}/alias/{alias}
                             */
                            $delete(): Promise<email.pro.Task>;
                            /**
                             * Get this object properties
                             * GET /email/mxplan/{service}/account/{email}/alias/{alias}
                             */
                            $get(): Promise<email.mxplan.AccountAlias>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    capabilities: {
                        /**
                         * Get available capabilities for this account
                         * GET /email/mxplan/{service}/account/{email}/capabilities
                         */
                        $get(): Promise<email.mxplan.accountCapabilities>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    changePassword: {
                        /**
                         * Change mailbox password
                         * POST /email/mxplan/{service}/account/{email}/changePassword
                         */
                        $post(params: { password: string }): Promise<email.pro.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    diagnostic: {
                        /**
                         * Get this object properties
                         * GET /email/mxplan/{service}/account/{email}/diagnostic
                         */
                        $get(): Promise<email.mxplan.AccountDiagnosis>;
                        /**
                         * Create new diagnosis request
                         * POST /email/mxplan/{service}/account/{email}/diagnostic
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
                         * GET /email/mxplan/{service}/account/{email}/fullAccess
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Allow full access to a user
                         * POST /email/mxplan/{service}/account/{email}/fullAccess
                         */
                        $post(params: { allowedAccountId: number }): Promise<email.pro.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(allowedAccountId: number): {
                            /**
                             * Revoke full access
                             * DELETE /email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}
                             */
                            $delete(): Promise<email.pro.Task>;
                            /**
                             * Get this object properties
                             * GET /email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}
                             */
                            $get(): Promise<email.mxplan.AccountFullAccess>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    sendAs: {
                        /**
                         * Send as granted users for this mailbox
                         * GET /email/mxplan/{service}/account/{email}/sendAs
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Allow another user to send mails from this mailbox
                         * POST /email/mxplan/{service}/account/{email}/sendAs
                         */
                        $post(params: { allowAccountId: number }): Promise<email.pro.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(allowedAccountId: number): {
                            /**
                             * Delete allowed user for sendAs
                             * DELETE /email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}
                             */
                            $delete(): Promise<email.pro.Task>;
                            /**
                             * Get this object properties
                             * GET /email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}
                             */
                            $get(): Promise<email.mxplan.AccountSendAs>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    sendOnBehalfTo: {
                        /**
                         * SendOnBehalfTo granted users for this mailbox
                         * GET /email/mxplan/{service}/account/{email}/sendOnBehalfTo
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Allow another user to Send On Behalf To mails from this mailbox
                         * POST /email/mxplan/{service}/account/{email}/sendOnBehalfTo
                         */
                        $post(params: { allowAccountId: number }): Promise<email.pro.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(allowedAccountId: number): {
                            /**
                             * Delete allowed user for SendOnBehalfTo
                             * DELETE /email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                             */
                            $delete(): Promise<email.pro.Task>;
                            /**
                             * Get this object properties
                             * GET /email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}
                             */
                            $get(): Promise<email.mxplan.AccountSendOnBehalfTo>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    task: {
                        /**
                         * Pending task for this mailbox
                         * GET /email/mxplan/{service}/account/{email}/task
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(id: number): {
                            /**
                             * Get this object properties
                             * GET /email/mxplan/{service}/account/{email}/task/{id}
                             */
                            $get(): Promise<email.pro.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
            domain: {
                /**
                 * Domains associated to this service
                 * GET /email/mxplan/{service}/domain
                 */
                $get(params?: { state?: email.pro.ObjectStateEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(domainName: string): {
                    /**
                     * Get this object properties
                     * GET /email/mxplan/{service}/domain/{domainName}
                     */
                    $get(): Promise<email.mxplan.Domain>;
                    /**
                     * Alter this object properties
                     * PUT /email/mxplan/{service}/domain/{domainName}
                     */
                    $put(params: { cnameToCheck?: string, domainAliases: string[], domainValidated: boolean, isAliasDomain: boolean, mxIsValid: boolean, mxRecord: string[], mxRelay?: string, name: string, srvIsValid: boolean, srvRecord: string[], state: email.pro.ObjectStateEnum, taskPendingId: number, type: email.pro.DomainTypeEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    disclaimer: {
                        /**
                         * Delete existing organization disclaimer
                         * DELETE /email/mxplan/{service}/domain/{domainName}/disclaimer
                         */
                        $delete(): Promise<email.pro.Task>;
                        /**
                         * Get this object properties
                         * GET /email/mxplan/{service}/domain/{domainName}/disclaimer
                         */
                        $get(): Promise<email.pro.disclaimer>;
                        /**
                         * Create organization disclaimer of each email
                         * POST /email/mxplan/{service}/domain/{domainName}/disclaimer
                         */
                        $post(params: { content: string, outsideOnly?: boolean }): Promise<email.pro.Task>;
                        /**
                         * Alter this object properties
                         * PUT /email/mxplan/{service}/domain/{domainName}/disclaimer
                         */
                        $put(params: { content: string, creationDate: string, name: string, outsideOnly: boolean, taskPendingId: number }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    disclaimerAttribute: {
                        /**
                         * Get diclaimer attributes to substitute with Active Directory properties
                         * GET /email/mxplan/{service}/domain/{domainName}/disclaimerAttribute
                         */
                        $get(): Promise<email.pro.DisclaimerAttributeEnum[]>;
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
                 * GET /email/mxplan/{service}/externalContact
                 */
                $get(params?: { displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string }): Promise<string[]>;
                /**
                 * create new external contact
                 * POST /email/mxplan/{service}/externalContact
                 */
                $post(params: { displayName?: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string }): Promise<email.pro.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(externalEmailAddress: string): {
                    /**
                     * delete external contact
                     * DELETE /email/mxplan/{service}/externalContact/{externalEmailAddress}
                     */
                    $delete(): Promise<email.pro.Task>;
                    /**
                     * Get this object properties
                     * GET /email/mxplan/{service}/externalContact/{externalEmailAddress}
                     */
                    $get(): Promise<email.mxplan.ExternalContact>;
                    /**
                     * Alter this object properties
                     * PUT /email/mxplan/{service}/externalContact/{externalEmailAddress}
                     */
                    $put(params: { creationDate: string, displayName: string, externalEmailAddress: string, firstName?: string, hiddenFromGAL: boolean, id: number, initials?: string, lastName?: string, state: email.pro.ObjectStateEnum, taskPendingId: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            server: {
                /**
                 * Get this object properties
                 * GET /email/mxplan/{service}/server
                 */
                $get(): Promise<email.mxplan.Server>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                /**
                 * Pending actions
                 * GET /email/mxplan/{service}/task
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /email/mxplan/{service}/task/{id}
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
                 * POST /email/mxplan/{service}/updateFlagsOnAllAccounts
                 */
                $post(): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}
