import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /email/mxplan Models
 */
export declare namespace email {
    namespace mxplan {
        interface Account {
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
            taskPendingId: number;
        }
        interface AccountAlias {
            alias: string;
            creationDate: string;
            taskPendingId: number;
        }
        interface AccountDiagnosis {
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
        interface AccountFullAccess {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        interface AccountSendAs {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        interface AccountSendOnBehalfTo {
            allowedAccountId: number;
            creationDate: string;
            taskPendingId: number;
        }
        interface Domain {
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
        interface ExternalContact {
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
        interface Server {
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
        interface Service {
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
        type ServiceOfferEnum = "MXPLAN";
        interface accountCapabilities {
            quotas?: number[];
        }
    }
    namespace pro {
        type DisclaimerAttributeEnum = "City" | "Company" | "Country" | "Department" | "DisplayName" | "Email" | "FaxNumber" | "FirstName" | "HomePhoneNumber" | "Initials" | "LastName" | "Manager" | "MobileNumber" | "Notes" | "Office" | "OtherFaxNumber" | "OtherHomePhoneNumber" | "OtherPhoneNumber" | "PagerNumber" | "PhoneNumber" | "State" | "Street" | "Title" | "UserLogonName" | "ZipCode";
        type DomainTypeEnum = "authoritative" | "nonAuthoritative";
        type MailingFilterEnum = "vaderetro";
        type ObjectStateEnum = "creating" | "deleting" | "ok" | "reopening" | "suspended" | "suspending" | "unknown";
        type ServerStateEnum = "configurationPending" | "notConfigured" | "ok";
        type ServiceStateEnum = "creating" | "deleting" | "inMaintenance" | "ok" | "reopening" | "suspended" | "suspending";
        interface Task {
            finishDate?: string;
            function: email.pro.TaskFunctionEnum;
            id: number;
            status: email.pro.TaskStatusEnum;
            todoDate: string;
        }
        type TaskFunctionEnum = "addAccount" | "addAlias" | "addDomain" | "addDomainDisclaimer" | "addExternalContact" | "addFullAccess" | "addSendAs" | "addSendOnBehalfTo" | "addServiceAuthorizedIp" | "changeHostname" | "changePassword" | "configureCustomer" | "deleteAccount" | "deleteAlias" | "deleteDomain" | "deleteDomainDisclaimer" | "deleteExternalContact" | "deleteFullAccess" | "deleteSendAs" | "deleteSendOnBehalfTo" | "deleteService" | "deleteServiceAuthorizedIp" | "diagnoseAccount" | "expandDrive" | "installServer" | "maintenance" | "migrateAccountViaOMM" | "migrationAccount" | "migrationDisclaimer" | "migrationExternalContact" | "migrationHistory" | "migrationService" | "reOpenAccount" | "setAccount" | "setAlias" | "setDns" | "setDomain" | "setDomainDisclaimer" | "setExternalContact" | "setService" | "suspendAccount" | "suspendService" | "unknown" | "unsuspendAccount" | "unsuspendService";
        type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo";
        interface disclaimer {
            content: string;
            creationDate: string;
            name: string;
            outsideOnly: boolean;
            taskPendingId: number;
        }
        type renewPeriodEnum = "monthly" | "yearly";
        interface spamAndVirusConfiguration {
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
export declare function proxyEmailMxplan(ovhEngine: OvhRequestable): Email;
export default proxyEmailMxplan;
/**
 * Api Proxy model
 */ export interface Email {
    mxplan: {
        $get(): Promise<string[]>;
        $(service: string): {
            $get(): Promise<email.mxplan.Service>;
            $put(params?: {
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
                offer?: email.mxplan.ServiceOfferEnum;
                spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration;
                state?: email.pro.ServiceStateEnum;
                taskPendingId?: number;
                webUrl?: string;
            }): Promise<void>;
            account: {
                $get(params?: {
                    id?: number;
                    primaryEmailAddress?: string;
                }): Promise<string[]>;
                $(email: string): {
                    $delete(): Promise<email.pro.Task>;
                    $get(): Promise<email.mxplan.Account>;
                    $put(params?: {
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
                        mailingFilter?: email.pro.MailingFilterEnum[];
                        passwordLastUpdate?: string;
                        primaryEmailAddress?: string;
                        quota?: number;
                        renewPeriod?: email.pro.renewPeriodEnum;
                        spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration;
                        spamDetected?: boolean;
                        spamTicketNumber?: number;
                        state?: email.pro.ObjectStateEnum;
                        taskPendingId?: number;
                    }): Promise<void>;
                    alias: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            alias: string;
                        }): Promise<email.pro.Task>;
                        $(alias: string): {
                            $delete(): Promise<email.pro.Task>;
                            $get(): Promise<email.mxplan.AccountAlias>;
                        };
                    };
                    capabilities: {
                        $get(): Promise<email.mxplan.accountCapabilities>;
                    };
                    changePassword: {
                        $post(params: {
                            password: string;
                        }): Promise<email.pro.Task>;
                    };
                    diagnostic: {
                        $get(): Promise<email.mxplan.AccountDiagnosis>;
                        $post(params: {
                            password: string;
                        }): Promise<email.pro.Task>;
                    };
                    fullAccess: {
                        $get(): Promise<number[]>;
                        $post(params: {
                            allowedAccountId: number;
                        }): Promise<email.pro.Task>;
                        $(allowedAccountId: number): {
                            $delete(): Promise<email.pro.Task>;
                            $get(): Promise<email.mxplan.AccountFullAccess>;
                        };
                    };
                    sendAs: {
                        $get(): Promise<number[]>;
                        $post(params: {
                            allowAccountId: number;
                        }): Promise<email.pro.Task>;
                        $(allowedAccountId: number): {
                            $delete(): Promise<email.pro.Task>;
                            $get(): Promise<email.mxplan.AccountSendAs>;
                        };
                    };
                    sendOnBehalfTo: {
                        $get(): Promise<number[]>;
                        $post(params: {
                            allowAccountId: number;
                        }): Promise<email.pro.Task>;
                        $(allowedAccountId: number): {
                            $delete(): Promise<email.pro.Task>;
                            $get(): Promise<email.mxplan.AccountSendOnBehalfTo>;
                        };
                    };
                    task: {
                        $get(): Promise<number[]>;
                        $(id: number): {
                            $get(): Promise<email.pro.Task>;
                        };
                    };
                };
            };
            domain: {
                $get(params?: {
                    state?: email.pro.ObjectStateEnum;
                }): Promise<string[]>;
                $(domainName: string): {
                    $get(): Promise<email.mxplan.Domain>;
                    $put(params?: {
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
                        state?: email.pro.ObjectStateEnum;
                        taskPendingId?: number;
                        type?: email.pro.DomainTypeEnum;
                    }): Promise<void>;
                    disclaimer: {
                        $delete(): Promise<email.pro.Task>;
                        $get(): Promise<email.pro.disclaimer>;
                        $post(params: {
                            content: string;
                            outsideOnly?: boolean;
                        }): Promise<email.pro.Task>;
                        $put(params?: {
                            content?: string;
                            creationDate?: string;
                            name?: string;
                            outsideOnly?: boolean;
                            taskPendingId?: number;
                        }): Promise<void>;
                    };
                    disclaimerAttribute: {
                        $get(): Promise<email.pro.DisclaimerAttributeEnum[]>;
                    };
                };
            };
            externalContact: {
                $get(params?: {
                    displayName?: string;
                    externalEmailAddress?: string;
                    firstName?: string;
                    id?: number;
                    lastName?: string;
                }): Promise<string[]>;
                $post(params: {
                    displayName?: string;
                    externalEmailAddress: string;
                    firstName?: string;
                    hiddenFromGAL?: boolean;
                    initials?: string;
                    lastName?: string;
                }): Promise<email.pro.Task>;
                $(externalEmailAddress: string): {
                    $delete(): Promise<email.pro.Task>;
                    $get(): Promise<email.mxplan.ExternalContact>;
                    $put(params?: {
                        creationDate?: string;
                        displayName?: string;
                        externalEmailAddress?: string;
                        firstName?: string;
                        hiddenFromGAL?: boolean;
                        id?: number;
                        initials?: string;
                        lastName?: string;
                        state?: email.pro.ObjectStateEnum;
                        taskPendingId?: number;
                    }): Promise<void>;
                };
            };
            server: {
                $get(): Promise<email.mxplan.Server>;
            };
            task: {
                $get(): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<email.pro.Task>;
                };
            };
            updateFlagsOnAllAccounts: {
                $post(): Promise<void>;
            };
        };
    };
    /**
     * Operations about the MXPLAN service
     * List available services
     */
    get(path: '/email/mxplan'): () => Promise<string[]>;
    /**
     * MXPlan service
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}'): (params: {
        service: string;
    }) => Promise<email.mxplan.Service>;
    /**
     * List the email.mxplan.Account objects
     * Accounts associated to this mxplan service
     */
    get(path: '/email/mxplan/{service}/account'): (params: {
        service: string;
        id?: number;
        primaryEmailAddress?: string;
    }) => Promise<string[]>;
    /**
     * Mailbox
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/account/{email}'): (params: {
        email: string;
        service: string;
    }) => Promise<email.mxplan.Account>;
    /**
     * List the email.mxplan.AccountAlias objects
     * Aliases associated to this mailbox
     */
    get(path: '/email/mxplan/{service}/account/{email}/alias'): (params: {
        email: string;
        service: string;
    }) => Promise<string[]>;
    /**
     * Aliases on this mailbox
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/account/{email}/alias/{alias}'): (params: {
        alias: string;
        email: string;
        service: string;
    }) => Promise<email.mxplan.AccountAlias>;
    /**
     * capabilities operations
     * Get available capabilities for this account
     */
    get(path: '/email/mxplan/{service}/account/{email}/capabilities'): (params: {
        email: string;
        service: string;
    }) => Promise<email.mxplan.accountCapabilities>;
    /**
     * Account Diagnosis
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/account/{email}/diagnostic'): (params: {
        email: string;
        service: string;
    }) => Promise<email.mxplan.AccountDiagnosis>;
    /**
     * List the email.mxplan.AccountFullAccess objects
     * Full access granted users for this mailbox
     */
    get(path: '/email/mxplan/{service}/account/{email}/fullAccess'): (params: {
        email: string;
        service: string;
    }) => Promise<number[]>;
    /**
     * Users having full access on this mailbox
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.mxplan.AccountFullAccess>;
    /**
     * List the email.mxplan.AccountSendAs objects
     * Send as granted users for this mailbox
     */
    get(path: '/email/mxplan/{service}/account/{email}/sendAs'): (params: {
        email: string;
        service: string;
    }) => Promise<number[]>;
    /**
     * Users authorized to send mails from this mailbox
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.mxplan.AccountSendAs>;
    /**
     * List the email.mxplan.AccountSendOnBehalfTo objects
     * SendOnBehalfTo granted users for this mailbox
     */
    get(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo'): (params: {
        email: string;
        service: string;
    }) => Promise<number[]>;
    /**
     * Get users authorized to Send On Behalf To mails from this mailbox
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.mxplan.AccountSendOnBehalfTo>;
    /**
     * List the email.pro.Task objects
     * Pending task for this mailbox
     */
    get(path: '/email/mxplan/{service}/account/{email}/task'): (params: {
        email: string;
        service: string;
    }) => Promise<number[]>;
    /**
     * Organization task details
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/account/{email}/task/{id}'): (params: {
        email: string;
        id: number;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * List the email.mxplan.Domain objects
     * Domains associated to this service
     */
    get(path: '/email/mxplan/{service}/domain'): (params: {
        service: string;
        state?: email.pro.ObjectStateEnum;
    }) => Promise<string[]>;
    /**
     * Domain
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/domain/{domainName}'): (params: {
        domainName: string;
        service: string;
    }) => Promise<email.mxplan.Domain>;
    /**
     * disclaimer
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer'): (params: {
        domainName: string;
        service: string;
    }) => Promise<email.pro.disclaimer>;
    /**
     * disclaimerAttribute operations
     * Get diclaimer attributes to substitute with Active Directory properties
     */
    get(path: '/email/mxplan/{service}/domain/{domainName}/disclaimerAttribute'): (params: {
        domainName: string;
        service: string;
    }) => Promise<email.pro.DisclaimerAttributeEnum[]>;
    /**
     * List the email.mxplan.ExternalContact objects
     * External contacts for this service
     */
    get(path: '/email/mxplan/{service}/externalContact'): (params: {
        service: string;
        displayName?: string;
        externalEmailAddress?: string;
        firstName?: string;
        id?: number;
        lastName?: string;
    }) => Promise<string[]>;
    /**
     * External contact for this mxplan service
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}'): (params: {
        externalEmailAddress: string;
        service: string;
    }) => Promise<email.mxplan.ExternalContact>;
    /**
     * Server
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/server'): (params: {
        service: string;
    }) => Promise<email.mxplan.Server>;
    /**
     * List the email.pro.Task objects
     * Pending actions
     */
    get(path: '/email/mxplan/{service}/task'): (params: {
        service: string;
    }) => Promise<number[]>;
    /**
     * Organization task details
     * Get this object properties
     */
    get(path: '/email/mxplan/{service}/task/{id}'): (params: {
        id: number;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * MXPlan service
     * Alter this object properties
     */
    put(path: '/email/mxplan/{service}'): (params: {
        service: string;
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
        offer?: email.mxplan.ServiceOfferEnum;
        spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration;
        state?: email.pro.ServiceStateEnum;
        taskPendingId?: number;
        webUrl?: string;
    }) => Promise<void>;
    /**
     * Mailbox
     * Alter this object properties
     */
    put(path: '/email/mxplan/{service}/account/{email}'): (params: {
        email: string;
        service: string;
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
        mailingFilter?: email.pro.MailingFilterEnum[];
        passwordLastUpdate?: string;
        primaryEmailAddress?: string;
        quota?: number;
        renewPeriod?: email.pro.renewPeriodEnum;
        spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration;
        spamDetected?: boolean;
        spamTicketNumber?: number;
        state?: email.pro.ObjectStateEnum;
        taskPendingId?: number;
    }) => Promise<void>;
    /**
     * Domain
     * Alter this object properties
     */
    put(path: '/email/mxplan/{service}/domain/{domainName}'): (params: {
        domainName: string;
        service: string;
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
        state?: email.pro.ObjectStateEnum;
        taskPendingId?: number;
        type?: email.pro.DomainTypeEnum;
    }) => Promise<void>;
    /**
     * disclaimer
     * Alter this object properties
     */
    put(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer'): (params: {
        domainName: string;
        service: string;
        content?: string;
        creationDate?: string;
        name?: string;
        outsideOnly?: boolean;
        taskPendingId?: number;
    }) => Promise<void>;
    /**
     * External contact for this mxplan service
     * Alter this object properties
     */
    put(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}'): (params: {
        externalEmailAddress: string;
        service: string;
        creationDate?: string;
        displayName?: string;
        firstName?: string;
        hiddenFromGAL?: boolean;
        id?: number;
        initials?: string;
        lastName?: string;
        state?: email.pro.ObjectStateEnum;
        taskPendingId?: number;
    }) => Promise<void>;
    /**
     * List the email.mxplan.AccountAlias objects
     * Create new alias
     */
    post(path: '/email/mxplan/{service}/account/{email}/alias'): (params: {
        email: string;
        service: string;
        alias: string;
    }) => Promise<email.pro.Task>;
    /**
     * changePassword operations
     * Change mailbox password
     */
    post(path: '/email/mxplan/{service}/account/{email}/changePassword'): (params: {
        email: string;
        service: string;
        password: string;
    }) => Promise<email.pro.Task>;
    /**
     * Account Diagnosis
     * Create new diagnosis request
     */
    post(path: '/email/mxplan/{service}/account/{email}/diagnostic'): (params: {
        email: string;
        service: string;
        password: string;
    }) => Promise<email.pro.Task>;
    /**
     * List the email.mxplan.AccountFullAccess objects
     * Allow full access to a user
     */
    post(path: '/email/mxplan/{service}/account/{email}/fullAccess'): (params: {
        email: string;
        service: string;
        allowedAccountId: number;
    }) => Promise<email.pro.Task>;
    /**
     * List the email.mxplan.AccountSendAs objects
     * Allow another user to send mails from this mailbox
     */
    post(path: '/email/mxplan/{service}/account/{email}/sendAs'): (params: {
        email: string;
        service: string;
        allowAccountId: number;
    }) => Promise<email.pro.Task>;
    /**
     * List the email.mxplan.AccountSendOnBehalfTo objects
     * Allow another user to Send On Behalf To mails from this mailbox
     */
    post(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo'): (params: {
        email: string;
        service: string;
        allowAccountId: number;
    }) => Promise<email.pro.Task>;
    /**
     * disclaimer
     * Create organization disclaimer of each email
     */
    post(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer'): (params: {
        domainName: string;
        service: string;
        content: string;
        outsideOnly?: boolean;
    }) => Promise<email.pro.Task>;
    /**
     * List the email.mxplan.ExternalContact objects
     * create new external contact
     */
    post(path: '/email/mxplan/{service}/externalContact'): (params: {
        service: string;
        displayName?: string;
        externalEmailAddress: string;
        firstName?: string;
        hiddenFromGAL?: boolean;
        initials?: string;
        lastName?: string;
    }) => Promise<email.pro.Task>;
    /**
     * updateFlagsOnAllAccounts operations
     * Update spam and virus flags on all active accounts
     */
    post(path: '/email/mxplan/{service}/updateFlagsOnAllAccounts'): (params: {
        service: string;
    }) => Promise<void>;
    /**
     * Mailbox
     * Delete existing mailbox in mxplan server
     */
    delete(path: '/email/mxplan/{service}/account/{email}'): (params: {
        email: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * Aliases on this mailbox
     * Delete existing alias
     */
    delete(path: '/email/mxplan/{service}/account/{email}/alias/{alias}'): (params: {
        alias: string;
        email: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * Users having full access on this mailbox
     * Revoke full access
     */
    delete(path: '/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * Users authorized to send mails from this mailbox
     * Delete allowed user for sendAs
     */
    delete(path: '/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * Get users authorized to Send On Behalf To mails from this mailbox
     * Delete allowed user for SendOnBehalfTo
     */
    delete(path: '/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * disclaimer
     * Delete existing organization disclaimer
     */
    delete(path: '/email/mxplan/{service}/domain/{domainName}/disclaimer'): (params: {
        domainName: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * External contact for this mxplan service
     * delete external contact
     */
    delete(path: '/email/mxplan/{service}/externalContact/{externalEmailAddress}'): (params: {
        externalEmailAddress: string;
        service: string;
    }) => Promise<email.pro.Task>;
}
