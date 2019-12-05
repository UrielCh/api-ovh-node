import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /email/pro Models
 */
export declare namespace email {
    namespace pro {
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
        type DisclaimerAttributeEnum = "City" | "Company" | "Country" | "Department" | "DisplayName" | "Email" | "FaxNumber" | "FirstName" | "HomePhoneNumber" | "Initials" | "LastName" | "Manager" | "MobileNumber" | "Notes" | "Office" | "OtherFaxNumber" | "OtherHomePhoneNumber" | "OtherPhoneNumber" | "PagerNumber" | "PhoneNumber" | "State" | "Street" | "Title" | "UserLogonName" | "ZipCode";
        interface Domain {
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
        type DomainTypeEnum = "authoritative" | "nonAuthoritative";
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
        type MailingFilterEnum = "vaderetro";
        type ObjectStateEnum = "creating" | "deleting" | "ok" | "reopening" | "suspended" | "suspending" | "unknown";
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
        type ServerStateEnum = "configurationPending" | "notConfigured" | "ok";
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
            offer: email.pro.ServiceOfferEnum;
            spamAndVirusConfiguration: email.pro.spamAndVirusConfiguration;
            state: email.pro.ServiceStateEnum;
            taskPendingId: number;
            webUrl?: string;
        }
        type ServiceOfferEnum = "emailpro";
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
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
}
export declare namespace services {
    interface Service {
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
export declare function proxyEmailPro(ovhEngine: OvhRequestable): Email;
export default proxyEmailPro;
/**
 * Api Proxy model
 */ export interface Email {
    pro: {
        $get(): Promise<string[]>;
        $(service: string): {
            $get(): Promise<email.pro.Service>;
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
                offer?: email.pro.ServiceOfferEnum;
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
                    $get(): Promise<email.pro.Account>;
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
                            $get(): Promise<email.pro.AccountAlias>;
                        };
                    };
                    changePassword: {
                        $post(params: {
                            password: string;
                        }): Promise<email.pro.Task>;
                    };
                    diagnostics: {
                        $get(): Promise<email.pro.AccountDiagnosis>;
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
                            $get(): Promise<email.pro.AccountFullAccess>;
                        };
                    };
                    sendAs: {
                        $get(): Promise<number[]>;
                        $post(params: {
                            allowAccountId: number;
                        }): Promise<email.pro.Task>;
                        $(allowedAccountId: number): {
                            $delete(): Promise<email.pro.Task>;
                            $get(): Promise<email.pro.AccountSendAs>;
                        };
                    };
                    sendOnBehalfTo: {
                        $get(): Promise<number[]>;
                        $post(params: {
                            allowAccountId: number;
                        }): Promise<email.pro.Task>;
                        $(allowedAccountId: number): {
                            $delete(): Promise<email.pro.Task>;
                            $get(): Promise<email.pro.AccountSendOnBehalfTo>;
                        };
                    };
                    tasks: {
                        $get(): Promise<number[]>;
                        $(id: number): {
                            $get(): Promise<email.pro.Task>;
                        };
                    };
                    terminate: {
                        $post(): Promise<string>;
                    };
                };
            };
            billingMigrated: {
                $get(): Promise<boolean>;
            };
            billingPlan: {
                $get(): Promise<string>;
            };
            domain: {
                $get(params?: {
                    state?: email.pro.ObjectStateEnum;
                }): Promise<string[]>;
                $post(params: {
                    configureAutodiscover?: boolean;
                    configureMx?: boolean;
                    mxRelay?: string;
                    name: string;
                    type: email.pro.DomainTypeEnum;
                }): Promise<email.pro.Task>;
                $(domainName: string): {
                    $delete(): Promise<email.pro.Task>;
                    $get(): Promise<email.pro.Domain>;
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
                    $get(): Promise<email.pro.ExternalContact>;
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
                $get(): Promise<email.pro.Server>;
            };
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
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
     * Operations about the PROEMAIL service
     * List available services
     */
    get(path: '/email/pro'): () => Promise<string[]>;
    /**
     * Email pro service
     * Get this object properties
     */
    get(path: '/email/pro/{service}'): (params: {
        service: string;
    }) => Promise<email.pro.Service>;
    /**
     * List the email.pro.Account objects
     * Accounts associated to this pro service
     */
    get(path: '/email/pro/{service}/account'): (params: {
        service: string;
        id?: number;
        primaryEmailAddress?: string;
    }) => Promise<string[]>;
    /**
     * Mailbox
     * Get this object properties
     */
    get(path: '/email/pro/{service}/account/{email}'): (params: {
        email: string;
        service: string;
    }) => Promise<email.pro.Account>;
    /**
     * List the email.pro.AccountAlias objects
     * Aliases associated to this mailbox
     */
    get(path: '/email/pro/{service}/account/{email}/alias'): (params: {
        email: string;
        service: string;
    }) => Promise<string[]>;
    /**
     * Aliases on this mailbox
     * Get this object properties
     */
    get(path: '/email/pro/{service}/account/{email}/alias/{alias}'): (params: {
        alias: string;
        email: string;
        service: string;
    }) => Promise<email.pro.AccountAlias>;
    /**
     * Account Diagnosis
     * Get this object properties
     */
    get(path: '/email/pro/{service}/account/{email}/diagnostics'): (params: {
        email: string;
        service: string;
    }) => Promise<email.pro.AccountDiagnosis>;
    /**
     * List the email.pro.AccountFullAccess objects
     * Full access granted users for this mailbox
     */
    get(path: '/email/pro/{service}/account/{email}/fullAccess'): (params: {
        email: string;
        service: string;
    }) => Promise<number[]>;
    /**
     * Users having full access on this mailbox
     * Get this object properties
     */
    get(path: '/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.pro.AccountFullAccess>;
    /**
     * List the email.pro.AccountSendAs objects
     * Send as granted users for this mailbox
     */
    get(path: '/email/pro/{service}/account/{email}/sendAs'): (params: {
        email: string;
        service: string;
    }) => Promise<number[]>;
    /**
     * Users authorized to send mails from this mailbox
     * Get this object properties
     */
    get(path: '/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.pro.AccountSendAs>;
    /**
     * List the email.pro.AccountSendOnBehalfTo objects
     * SendOnBehalfTo granted users for this mailbox
     */
    get(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo'): (params: {
        email: string;
        service: string;
    }) => Promise<number[]>;
    /**
     * Get users authorized to Send On Behalf To mails from this mailbox
     * Get this object properties
     */
    get(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.pro.AccountSendOnBehalfTo>;
    /**
     * List the email.pro.Task objects
     * Pending task for this mailbox
     */
    get(path: '/email/pro/{service}/account/{email}/tasks'): (params: {
        email: string;
        service: string;
    }) => Promise<number[]>;
    /**
     * Organization task details
     * Get this object properties
     */
    get(path: '/email/pro/{service}/account/{email}/tasks/{id}'): (params: {
        email: string;
        id: number;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * billingMigrated operations
     * Detects billing transition status for the service
     */
    get(path: '/email/pro/{service}/billingMigrated'): (params: {
        service: string;
    }) => Promise<boolean>;
    /**
     * billingPlan operations
     * Emailpro billing plan
     */
    get(path: '/email/pro/{service}/billingPlan'): (params: {
        service: string;
    }) => Promise<string>;
    /**
     * List the email.pro.Domain objects
     * Domains associated to this service
     */
    get(path: '/email/pro/{service}/domain'): (params: {
        service: string;
        state?: email.pro.ObjectStateEnum;
    }) => Promise<string[]>;
    /**
     * Domain
     * Get this object properties
     */
    get(path: '/email/pro/{service}/domain/{domainName}'): (params: {
        domainName: string;
        service: string;
    }) => Promise<email.pro.Domain>;
    /**
     * disclaimer
     * Get this object properties
     */
    get(path: '/email/pro/{service}/domain/{domainName}/disclaimer'): (params: {
        domainName: string;
        service: string;
    }) => Promise<email.pro.disclaimer>;
    /**
     * disclaimerAttribute operations
     * Get diclaimer attributes to substitute with Active Directory properties
     */
    get(path: '/email/pro/{service}/domain/{domainName}/disclaimerAttribute'): (params: {
        domainName: string;
        service: string;
    }) => Promise<email.pro.DisclaimerAttributeEnum[]>;
    /**
     * List the email.pro.ExternalContact objects
     * External contacts for this service
     */
    get(path: '/email/pro/{service}/externalContact'): (params: {
        service: string;
        displayName?: string;
        externalEmailAddress?: string;
        firstName?: string;
        id?: number;
        lastName?: string;
    }) => Promise<string[]>;
    /**
     * External contact for this pro service
     * Get this object properties
     */
    get(path: '/email/pro/{service}/externalContact/{externalEmailAddress}'): (params: {
        externalEmailAddress: string;
        service: string;
    }) => Promise<email.pro.ExternalContact>;
    /**
     * Server
     * Get this object properties
     */
    get(path: '/email/pro/{service}/server'): (params: {
        service: string;
    }) => Promise<email.pro.Server>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/email/pro/{service}/serviceInfos'): (params: {
        service: string;
    }) => Promise<services.Service>;
    /**
     * List the email.pro.Task objects
     * Pending actions
     */
    get(path: '/email/pro/{service}/task'): (params: {
        service: string;
    }) => Promise<number[]>;
    /**
     * Organization task details
     * Get this object properties
     */
    get(path: '/email/pro/{service}/task/{id}'): (params: {
        id: number;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * Email pro service
     * Alter this object properties
     */
    put(path: '/email/pro/{service}'): (params: {
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
        offer?: email.pro.ServiceOfferEnum;
        spamAndVirusConfiguration?: email.pro.spamAndVirusConfiguration;
        state?: email.pro.ServiceStateEnum;
        taskPendingId?: number;
        webUrl?: string;
    }) => Promise<void>;
    /**
     * Mailbox
     * Alter this object properties
     */
    put(path: '/email/pro/{service}/account/{email}'): (params: {
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
    put(path: '/email/pro/{service}/domain/{domainName}'): (params: {
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
    put(path: '/email/pro/{service}/domain/{domainName}/disclaimer'): (params: {
        domainName: string;
        service: string;
        content?: string;
        creationDate?: string;
        name?: string;
        outsideOnly?: boolean;
        taskPendingId?: number;
    }) => Promise<void>;
    /**
     * External contact for this pro service
     * Alter this object properties
     */
    put(path: '/email/pro/{service}/externalContact/{externalEmailAddress}'): (params: {
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
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/email/pro/{service}/serviceInfos'): (params: {
        service: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * List the email.pro.AccountAlias objects
     * Create new alias
     */
    post(path: '/email/pro/{service}/account/{email}/alias'): (params: {
        email: string;
        service: string;
        alias: string;
    }) => Promise<email.pro.Task>;
    /**
     * changePassword operations
     * Change mailbox password
     */
    post(path: '/email/pro/{service}/account/{email}/changePassword'): (params: {
        email: string;
        service: string;
        password: string;
    }) => Promise<email.pro.Task>;
    /**
     * Account Diagnosis
     * Create new diagnosis request
     */
    post(path: '/email/pro/{service}/account/{email}/diagnostics'): (params: {
        email: string;
        service: string;
        password: string;
    }) => Promise<email.pro.Task>;
    /**
     * List the email.pro.AccountFullAccess objects
     * Allow full access to a user
     */
    post(path: '/email/pro/{service}/account/{email}/fullAccess'): (params: {
        email: string;
        service: string;
        allowedAccountId: number;
    }) => Promise<email.pro.Task>;
    /**
     * List the email.pro.AccountSendAs objects
     * Allow another user to send mails from this mailbox
     */
    post(path: '/email/pro/{service}/account/{email}/sendAs'): (params: {
        email: string;
        service: string;
        allowAccountId: number;
    }) => Promise<email.pro.Task>;
    /**
     * List the email.pro.AccountSendOnBehalfTo objects
     * Allow another user to Send On Behalf To mails from this mailbox
     */
    post(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo'): (params: {
        email: string;
        service: string;
        allowAccountId: number;
    }) => Promise<email.pro.Task>;
    /**
     * terminate operations
     * Terminate account at expiration date
     */
    post(path: '/email/pro/{service}/account/{email}/terminate'): (params: {
        email: string;
        service: string;
    }) => Promise<string>;
    /**
     * List the email.pro.Domain objects
     * Create new domain in pro services
     */
    post(path: '/email/pro/{service}/domain'): (params: {
        service: string;
        configureAutodiscover?: boolean;
        configureMx?: boolean;
        mxRelay?: string;
        name: string;
        type: email.pro.DomainTypeEnum;
    }) => Promise<email.pro.Task>;
    /**
     * disclaimer
     * Create organization disclaimer of each email
     */
    post(path: '/email/pro/{service}/domain/{domainName}/disclaimer'): (params: {
        domainName: string;
        service: string;
        content: string;
        outsideOnly?: boolean;
    }) => Promise<email.pro.Task>;
    /**
     * List the email.pro.ExternalContact objects
     * create new external contact
     */
    post(path: '/email/pro/{service}/externalContact'): (params: {
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
    post(path: '/email/pro/{service}/updateFlagsOnAllAccounts'): (params: {
        service: string;
    }) => Promise<void>;
    /**
     * Mailbox
     * Delete existing mailbox in pro server
     */
    delete(path: '/email/pro/{service}/account/{email}'): (params: {
        email: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * Aliases on this mailbox
     * Delete existing alias
     */
    delete(path: '/email/pro/{service}/account/{email}/alias/{alias}'): (params: {
        alias: string;
        email: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * Users having full access on this mailbox
     * Revoke full access
     */
    delete(path: '/email/pro/{service}/account/{email}/fullAccess/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * Users authorized to send mails from this mailbox
     * Delete allowed user for sendAs
     */
    delete(path: '/email/pro/{service}/account/{email}/sendAs/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * Get users authorized to Send On Behalf To mails from this mailbox
     * Delete allowed user for SendOnBehalfTo
     */
    delete(path: '/email/pro/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}'): (params: {
        allowedAccountId: number;
        email: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * Domain
     * Delete existing domain in pro services
     */
    delete(path: '/email/pro/{service}/domain/{domainName}'): (params: {
        domainName: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * disclaimer
     * Delete existing organization disclaimer
     */
    delete(path: '/email/pro/{service}/domain/{domainName}/disclaimer'): (params: {
        domainName: string;
        service: string;
    }) => Promise<email.pro.Task>;
    /**
     * External contact for this pro service
     * delete external contact
     */
    delete(path: '/email/pro/{service}/externalContact/{externalEmailAddress}'): (params: {
        externalEmailAddress: string;
        service: string;
    }) => Promise<email.pro.Task>;
}
