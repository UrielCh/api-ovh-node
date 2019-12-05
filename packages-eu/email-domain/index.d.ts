import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /email/domain Models
 */
export declare namespace domain {
    type DomainFilterActionEnum = "accept" | "account" | "delete" | "redirect";
    type DomainFilterOperandEnum = "checkspf" | "contains" | "noContains";
    type DomainMXFilterEnum = "CUSTOM" | "FULL_FILTERING" | "NO_FILTERING" | "REDIRECT" | "SIMPLE_FILTERING";
    type DomainMlLanguageEnum = "de" | "en" | "es" | "fr" | "it" | "nl" | "pl" | "pt";
    interface DomainMlLimits {
        subscribers: number;
    }
    interface DomainMlOptionsStruct {
        moderatorMessage: boolean;
        subscribeByModerator: boolean;
        usersPostOnly: boolean;
    }
    type DomainPopActionEnum = "addAccount" | "changeAccount" | "changePassword" | "deleteAccount" | "internalMigration" | "migration" | "temporaryTask" | "unknown";
    interface DomainQuota {
        account: number;
        alias: number;
        mailingList: number;
        redirection: number;
        responder: number;
    }
    type DomainSpecialAccountActionEnum = "add" | "change" | "delete";
    type DomainSpecialAccountTypeEnum = "25g" | "alias" | "delete" | "filter" | "forward" | "responder";
    type DomainStatusEnum = "close" | "ok" | "readOnly" | "unknown";
    interface DomainSummary {
        account: number;
        mailingList: number;
        redirection: number;
        responder: number;
    }
    interface DomainUsageAccountStruct {
        date?: string;
        emailCount?: number;
        quota?: number;
    }
    namespace zone {
        interface Record {
            fieldType: zoneNamedResolutionFieldTypeEnum;
            id: number;
            subDomain?: string;
            target: string;
            ttl?: number;
            zone: string;
        }
    }
}
export declare namespace email {
    namespace domain {
        interface Account {
            accountName: string;
            description: string;
            domain: string;
            email: string;
            isBlocked: boolean;
            size: number;
        }
        interface AccountDelegated {
            accountName: string;
            allowedAccountSize?: number[];
            description: string;
            domain: string;
            email: string;
            isBlocked: boolean;
            size: number;
        }
        interface Acl {
            accountId: string;
        }
        interface Delegation {
            accountId: string;
        }
        interface Diagnose {
            date: string;
            function: email.domain.DomainDiagnoseFunctionEnum;
            id: number;
            name?: string;
            result?: email.domain.DomainDiagnoseResultEnum;
            trace?: email.domain.DomainDiagnoseTraceStruct<email.domain.DomainDiagnoseResultEnum>[];
        }
        type DomainDiagnoseFunctionEnum = "MX";
        type DomainDiagnoseResultEnum = "CUSTOM" | "DEPRECATED" | "KO" | "OK";
        interface DomainDiagnoseTraceStruct<T> {
            result: T;
            test: string;
        }
        interface DomainService {
            allowedAccountSize?: number[];
            creationDate?: string;
            domain: string;
            filerz?: number;
            linkTo?: string;
            migratedMXPlanServiceName?: string;
            offer?: string;
            status: domainDomainStatusEnum;
        }
        interface Filter {
            action?: domainDomainFilterActionEnum;
            actionParam?: string;
            active: boolean;
            domain: string;
            name: string;
            pop: string;
            priority: number;
        }
        interface MailingList {
            id: number;
            language?: domainDomainMlLanguageEnum;
            name: string;
            nbSubscribers?: number;
            nbSubscribersUpdateDate?: string;
            options: domainDomainMlOptionsStruct;
            ownerEmail: string;
            replyTo: string;
        }
        interface MigrationAccount {
            destinationEmailAddress: string;
            quota: number;
        }
        type MigrationCheckCodeEnum = "ACCOUNT_EMPTY" | "ACCOUNT_INPROGRESS" | "DELEGATION_EXIST" | "DOMAIN_EMPTY" | "FILTER_EXIST" | "FORWARD_EXIST" | "FORWARD_LOCAL" | "MAILINGLIST_EXIST" | "MAILINGLIST_INPROGRESS" | "MAILPROXY_BAD_INFRA" | "MAILPROXY_EMPTY" | "MAILPROXY_INPROGRESS" | "MAILPROXY_RESERVATION" | "REDIRECTION_INPROGRESS" | "RESPONDER_EXIST" | "RESPONDER_INPROGRESS" | "UNKNOW";
        interface MigrationCheckResultStruct {
            code: email.domain.MigrationCheckCodeEnum;
            details?: string;
        }
        interface MigrationCheckStruct {
            alias?: string[];
            error?: email.domain.MigrationCheckResultStruct[];
            filter?: string[];
            forward?: string[];
            warning?: email.domain.MigrationCheckResultStruct[];
        }
        interface MigrationService {
            contactAdmin: string;
            contactBilling: string;
            contactTech: string;
            creation: string;
            destinationServiceName: string;
            expiration: string;
            type: email.domain.MigrationServiceType;
        }
        type MigrationServiceType = "EMAIL PRO" | "HOSTED EXCHANGE" | "PRIVATE EXCHANGE" | "PROVIDER EXCHANGE";
        interface Moderator {
            domain: string;
            email: string;
            mailinglist: string;
        }
        interface RedirectionGlobal {
            from: string;
            id: string;
            to: string;
        }
        interface Responder {
            account: string;
            content: string;
            copy: boolean;
            copyTo?: string;
            from?: string;
            to?: string;
        }
        interface ResponderAccount {
            account: string;
            content: string;
            copy: boolean;
            copyTo?: string;
            from?: string;
            to?: string;
        }
        interface Rule {
            header: string;
            id: number;
            operand: domainDomainFilterOperandEnum;
            value: string;
        }
        interface Subscriber {
            domain: string;
            email: string;
            mailinglist: string;
        }
        interface TaskFilter {
            account: string;
            action: string;
            domain: string;
            id: number;
            timestamp: string;
        }
        interface TaskMl {
            account: string;
            action: string;
            date: string;
            domain: string;
            id: number;
            language: domainDomainMlLanguageEnum;
        }
        interface TaskPop {
            action: domainDomainPopActionEnum;
            date: string;
            domain: string;
            id: number;
            name: string;
        }
        interface TaskSpecialAccount {
            account: string;
            action: domainDomainSpecialAccountActionEnum;
            date: string;
            domain: string;
            id: number;
            type: domainDomainSpecialAccountTypeEnum;
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
    type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT";
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
export declare namespace zone {
    type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT";
}
/**
 * END API /email/domain Models
 */
export declare function proxyEmailDomain(ovhEngine: OvhRequestable): Email;
export default proxyEmailDomain;
/**
 * Api Proxy model
 */ export interface Email {
    domain: {
        $get(): Promise<string[]>;
        delegatedAccount: {
            $get(params?: {
                accountName?: string;
                domain?: string;
            }): Promise<string[]>;
            $(email: string): {
                $get(): Promise<email.domain.AccountDelegated>;
                $put(params?: {
                    accountName?: string;
                    allowedAccountSize?: number[];
                    description?: string;
                    domain?: string;
                    email?: string;
                    isBlocked?: boolean;
                    size?: number;
                }): Promise<void>;
                changePassword: {
                    $post(params: {
                        password: string;
                    }): Promise<email.domain.TaskPop>;
                };
                filter: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        action: domainDomainFilterActionEnum;
                        actionParam?: string;
                        active: boolean;
                        header: string;
                        name: string;
                        operand: domainDomainFilterOperandEnum;
                        priority: number;
                        value: string;
                    }): Promise<email.domain.TaskFilter>;
                    $(name: string): {
                        $delete(): Promise<email.domain.TaskFilter[]>;
                        $get(): Promise<email.domain.Filter>;
                        changeActivity: {
                            $post(params: {
                                activity: boolean;
                            }): Promise<email.domain.TaskFilter>;
                        };
                        changePriority: {
                            $post(params: {
                                priority: number;
                            }): Promise<email.domain.TaskFilter>;
                        };
                        rule: {
                            $get(): Promise<number[]>;
                            $post(params: {
                                header: string;
                                operand: domainDomainFilterOperandEnum;
                                value: string;
                            }): Promise<email.domain.TaskFilter>;
                            $(id: number): {
                                $delete(): Promise<email.domain.TaskFilter[]>;
                                $get(): Promise<email.domain.Rule>;
                            };
                        };
                    };
                };
                responder: {
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    $get(): Promise<email.domain.ResponderAccount>;
                    $post(params: {
                        content: string;
                        copy: boolean;
                        copyTo?: string;
                        from?: string;
                        to?: string;
                    }): Promise<email.domain.TaskSpecialAccount>;
                    $put(params?: {
                        account?: string;
                        content?: string;
                        copy?: boolean;
                        copyTo?: string;
                        from?: string;
                        to?: string;
                    }): Promise<void>;
                };
                updateUsage: {
                    $post(): Promise<void>;
                };
                usage: {
                    $post(): Promise<domain.DomainUsageAccountStruct>;
                };
            };
        };
        mailingListLimits: {
            $get(params: {
                moderatorMessage: boolean;
            }): Promise<domain.DomainMlLimits>;
        };
        $(domain: string): {
            $get(): Promise<email.domain.DomainService>;
            account: {
                $get(params?: {
                    accountName?: string;
                    description?: string;
                }): Promise<string[]>;
                $post(params: {
                    accountName: string;
                    description?: string;
                    password: string;
                    size?: number;
                }): Promise<email.domain.TaskPop>;
                $(accountName: string): {
                    $delete(): Promise<email.domain.TaskPop>;
                    $get(): Promise<email.domain.Account>;
                    $put(params?: {
                        accountName?: string;
                        description?: string;
                        domain?: string;
                        email?: string;
                        isBlocked?: boolean;
                        size?: number;
                    }): Promise<void>;
                    changePassword: {
                        $post(params: {
                            password: string;
                        }): Promise<email.domain.TaskPop>;
                    };
                    delegation: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            accountId: string;
                        }): Promise<string>;
                        $(accountId: string): {
                            $delete(): Promise<string>;
                            $get(): Promise<email.domain.Delegation>;
                        };
                    };
                    filter: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            action: domainDomainFilterActionEnum;
                            actionParam?: string;
                            active: boolean;
                            header: string;
                            name: string;
                            operand: domainDomainFilterOperandEnum;
                            priority: number;
                            value: string;
                        }): Promise<email.domain.TaskFilter>;
                        $(name: string): {
                            $delete(): Promise<email.domain.TaskFilter[]>;
                            $get(): Promise<email.domain.Filter>;
                            changeActivity: {
                                $post(params: {
                                    activity: boolean;
                                }): Promise<email.domain.TaskFilter>;
                            };
                            changePriority: {
                                $post(params: {
                                    priority: number;
                                }): Promise<email.domain.TaskFilter>;
                            };
                            rule: {
                                $get(): Promise<number[]>;
                                $post(params: {
                                    header: string;
                                    operand: domainDomainFilterOperandEnum;
                                    value: string;
                                }): Promise<email.domain.TaskFilter>;
                                $(id: number): {
                                    $delete(): Promise<email.domain.TaskFilter[]>;
                                    $get(): Promise<email.domain.Rule>;
                                };
                            };
                        };
                    };
                    migrate: {
                        $get(params?: {
                            type?: email.domain.MigrationServiceType;
                        }): Promise<string[]>;
                        $(destinationServiceName: string): {
                            $get(): Promise<email.domain.MigrationService>;
                            destinationEmailAddress: {
                                $get(params?: {
                                    quota?: number;
                                }): Promise<string[]>;
                                $(destinationEmailAddress: string): {
                                    $get(): Promise<email.domain.MigrationAccount>;
                                    checkMigrate: {
                                        $get(): Promise<email.domain.MigrationCheckStruct>;
                                    };
                                    migrate: {
                                        $post(params: {
                                            password: string;
                                        }): Promise<email.domain.TaskPop>;
                                    };
                                };
                            };
                        };
                    };
                    updateUsage: {
                        $post(): Promise<void>;
                    };
                    usage: {
                        $get(): Promise<domain.DomainUsageAccountStruct>;
                    };
                };
            };
            acl: {
                $get(): Promise<string[]>;
                $post(params: {
                    accountId: string;
                }): Promise<email.domain.Acl>;
                $(accountId: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<email.domain.Acl>;
                };
            };
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            changeDnsMXFilter: {
                $post(params: {
                    customTarget?: string;
                    mxFilter: domain.DomainMXFilterEnum;
                    subDomain?: string;
                }): Promise<void>;
            };
            confirmTermination: {
                $post(params: {
                    commentary?: string;
                    reason?: service.TerminationReasonEnum;
                    token: string;
                }): Promise<string>;
            };
            dnsMXFilter: {
                $get(params?: {
                    subDomain?: string;
                }): Promise<domain.DomainMXFilterEnum>;
            };
            dnsMXRecords: {
                $get(params?: {
                    subDomain?: string;
                }): Promise<string[]>;
            };
            mailingList: {
                $get(params?: {
                    name?: string;
                }): Promise<string[]>;
                $post(params: {
                    language: domainDomainMlLanguageEnum;
                    name: string;
                    options: domainDomainMlOptionsStruct;
                    ownerEmail: string;
                    replyTo?: string;
                }): Promise<email.domain.TaskMl>;
                $(name: string): {
                    $delete(): Promise<email.domain.TaskMl>;
                    $get(): Promise<email.domain.MailingList>;
                    $put(params?: {
                        id?: number;
                        language?: domainDomainMlLanguageEnum;
                        name?: string;
                        nbSubscribers?: number;
                        nbSubscribersUpdateDate?: string;
                        options?: domainDomainMlOptionsStruct;
                        ownerEmail?: string;
                        replyTo?: string;
                    }): Promise<void>;
                    changeOptions: {
                        $post(params: {
                            options: domainDomainMlOptionsStruct;
                        }): Promise<email.domain.TaskMl>;
                    };
                    moderator: {
                        $get(params?: {
                            email?: string;
                        }): Promise<string[]>;
                        $post(params: {
                            email: string;
                        }): Promise<email.domain.TaskMl>;
                        $(email: string): {
                            $delete(): Promise<email.domain.TaskMl>;
                            $get(): Promise<email.domain.Moderator>;
                        };
                    };
                    sendListByEmail: {
                        $post(params: {
                            email: string;
                        }): Promise<email.domain.TaskMl>;
                    };
                    subscriber: {
                        $get(params?: {
                            email?: string;
                        }): Promise<string[]>;
                        $post(params: {
                            email: string;
                        }): Promise<email.domain.TaskMl>;
                        $(email: string): {
                            $delete(): Promise<email.domain.TaskMl>;
                            $get(): Promise<email.domain.Subscriber>;
                        };
                    };
                };
            };
            migrateDelegationV3toV6: {
                $post(): Promise<void>;
            };
            quota: {
                $get(): Promise<domain.DomainQuota>;
            };
            recommendedDNSRecords: {
                $get(): Promise<domain.zone.Record[]>;
            };
            redirection: {
                $get(params?: {
                    from?: string;
                    to?: string;
                }): Promise<string[]>;
                $post(params: {
                    from: string;
                    localCopy: boolean;
                    to: string;
                }): Promise<email.domain.TaskSpecialAccount>;
                $(id: string): {
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    $get(): Promise<email.domain.RedirectionGlobal>;
                    changeRedirection: {
                        $post(params: {
                            to: string;
                        }): Promise<email.domain.TaskSpecialAccount>;
                    };
                };
            };
            responder: {
                $get(params?: {
                    account?: string;
                }): Promise<string[]>;
                $post(params: {
                    account: string;
                    content: string;
                    copy: boolean;
                    copyTo?: string;
                    from?: string;
                    to?: string;
                }): Promise<email.domain.TaskSpecialAccount>;
                $(account: string): {
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    $get(): Promise<email.domain.Responder>;
                    $put(params?: {
                        account?: string;
                        content?: string;
                        copy?: boolean;
                        copyTo?: string;
                        from?: string;
                        to?: string;
                    }): Promise<void>;
                };
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
            summary: {
                $get(): Promise<domain.DomainSummary>;
            };
            task: {
                account: {
                    $get(params?: {
                        name?: string;
                    }): Promise<number[]>;
                    $(id: number): {
                        $get(): Promise<email.domain.TaskPop>;
                    };
                };
                filter: {
                    $get(params?: {
                        account?: string;
                    }): Promise<number[]>;
                    $(id: number): {
                        $get(): Promise<email.domain.TaskFilter>;
                    };
                };
                mailinglist: {
                    $get(params?: {
                        account?: string;
                    }): Promise<number[]>;
                    $(id: number): {
                        $get(): Promise<email.domain.TaskMl>;
                    };
                };
                redirection: {
                    $get(params?: {
                        account?: string;
                    }): Promise<number[]>;
                    $(id: number): {
                        $get(): Promise<email.domain.TaskSpecialAccount>;
                    };
                };
                responder: {
                    $get(params?: {
                        account?: string;
                    }): Promise<number[]>;
                    $(id: number): {
                        $get(): Promise<email.domain.TaskSpecialAccount>;
                    };
                };
            };
            terminate: {
                $post(): Promise<string>;
            };
        };
    };
    /**
     * Operations about the MX service
     * List available services
     */
    get(path: '/email/domain'): () => Promise<string[]>;
    /**
     * Domain service
     * Get this object properties
     */
    get(path: '/email/domain/{domain}'): (params: {
        domain: string;
    }) => Promise<email.domain.DomainService>;
    /**
     * List the email.domain.Account objects
     * Get accounts
     */
    get(path: '/email/domain/{domain}/account'): (params: {
        domain: string;
        accountName?: string;
        description?: string;
    }) => Promise<string[]>;
    /**
     * Account List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/account/{accountName}'): (params: {
        accountName: string;
        domain: string;
    }) => Promise<email.domain.Account>;
    /**
     * List the email.domain.Delegation objects
     * Get delegations
     */
    get(path: '/email/domain/{domain}/account/{accountName}/delegation'): (params: {
        accountName: string;
        domain: string;
    }) => Promise<string[]>;
    /**
     * Delegation List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/account/{accountName}/delegation/{accountId}'): (params: {
        accountId: string;
        accountName: string;
        domain: string;
    }) => Promise<email.domain.Delegation>;
    /**
     * List the email.domain.Filter objects
     * Get filters
     */
    get(path: '/email/domain/{domain}/account/{accountName}/filter'): (params: {
        accountName: string;
        domain: string;
    }) => Promise<string[]>;
    /**
     * Filter List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/account/{accountName}/filter/{name}'): (params: {
        accountName: string;
        domain: string;
        name: string;
    }) => Promise<email.domain.Filter>;
    /**
     * List the email.domain.Rule objects
     * Get rules
     */
    get(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule'): (params: {
        accountName: string;
        domain: string;
        name: string;
    }) => Promise<number[]>;
    /**
     * Rule List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}'): (params: {
        accountName: string;
        domain: string;
        id: number;
        name: string;
    }) => Promise<email.domain.Rule>;
    /**
     * List the email.domain.MigrationService objects
     * Get migration service
     */
    get(path: '/email/domain/{domain}/account/{accountName}/migrate'): (params: {
        accountName: string;
        domain: string;
        type?: email.domain.MigrationServiceType;
    }) => Promise<string[]>;
    /**
     * Migration service
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}'): (params: {
        accountName: string;
        destinationServiceName: string;
        domain: string;
    }) => Promise<email.domain.MigrationService>;
    /**
     * List the email.domain.MigrationAccount objects
     * List of email address available for migration
     */
    get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress'): (params: {
        accountName: string;
        destinationServiceName: string;
        domain: string;
        quota?: number;
    }) => Promise<string[]>;
    /**
     * Migration account
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}'): (params: {
        accountName: string;
        destinationEmailAddress: string;
        destinationServiceName: string;
        domain: string;
    }) => Promise<email.domain.MigrationAccount>;
    /**
     * checkMigrate operations
     * Check if it's possible to migrate
     */
    get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/checkMigrate'): (params: {
        accountName: string;
        destinationEmailAddress: string;
        destinationServiceName: string;
        domain: string;
    }) => Promise<email.domain.MigrationCheckStruct>;
    /**
     * usage operations
     * usage of account
     */
    get(path: '/email/domain/{domain}/account/{accountName}/usage'): (params: {
        accountName: string;
        domain: string;
    }) => Promise<domain.DomainUsageAccountStruct>;
    /**
     * List the email.domain.Acl objects
     * Get ACL on your domain
     */
    get(path: '/email/domain/{domain}/acl'): (params: {
        domain: string;
    }) => Promise<string[]>;
    /**
     * Email ACL
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/acl/{accountId}'): (params: {
        accountId: string;
        domain: string;
    }) => Promise<email.domain.Acl>;
    /**
     * dnsMXFilter operations
     * Domain MX filter
     */
    get(path: '/email/domain/{domain}/dnsMXFilter'): (params: {
        domain: string;
        subDomain?: string;
    }) => Promise<domain.DomainMXFilterEnum>;
    /**
     * dnsMXRecords operations
     * Domain MX records
     */
    get(path: '/email/domain/{domain}/dnsMXRecords'): (params: {
        domain: string;
        subDomain?: string;
    }) => Promise<string[]>;
    /**
     * List the email.domain.MailingList objects
     * Get mailing lists
     */
    get(path: '/email/domain/{domain}/mailingList'): (params: {
        domain: string;
        name?: string;
    }) => Promise<string[]>;
    /**
     * Mailing List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/mailingList/{name}'): (params: {
        domain: string;
        name: string;
    }) => Promise<email.domain.MailingList>;
    /**
     * List the email.domain.Moderator objects
     * List of moderators
     */
    get(path: '/email/domain/{domain}/mailingList/{name}/moderator'): (params: {
        domain: string;
        name: string;
        email?: string;
    }) => Promise<string[]>;
    /**
     * Moderators List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/mailingList/{name}/moderator/{email}'): (params: {
        domain: string;
        email: string;
        name: string;
    }) => Promise<email.domain.Moderator>;
    /**
     * List the email.domain.Subscriber objects
     * List of subscribers
     */
    get(path: '/email/domain/{domain}/mailingList/{name}/subscriber'): (params: {
        domain: string;
        name: string;
        email?: string;
    }) => Promise<string[]>;
    /**
     * Subscribers List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/mailingList/{name}/subscriber/{email}'): (params: {
        domain: string;
        email: string;
        name: string;
    }) => Promise<email.domain.Subscriber>;
    /**
     * quota operations
     * List all quotas for this domain
     */
    get(path: '/email/domain/{domain}/quota'): (params: {
        domain: string;
    }) => Promise<domain.DomainQuota>;
    /**
     * recommendedDNSRecords operations
     * Recommended domain DNS records
     */
    get(path: '/email/domain/{domain}/recommendedDNSRecords'): (params: {
        domain: string;
    }) => Promise<domain.zone.Record[]>;
    /**
     * List the email.domain.RedirectionGlobal objects
     * Get redirections
     */
    get(path: '/email/domain/{domain}/redirection'): (params: {
        domain: string;
        from?: string;
        to?: string;
    }) => Promise<string[]>;
    /**
     * Global Redirection
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/redirection/{id}'): (params: {
        domain: string;
        id: string;
    }) => Promise<email.domain.RedirectionGlobal>;
    /**
     * List the email.domain.Responder objects
     * Get responders
     */
    get(path: '/email/domain/{domain}/responder'): (params: {
        domain: string;
        account?: string;
    }) => Promise<string[]>;
    /**
     * Responder
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/responder/{account}'): (params: {
        account: string;
        domain: string;
    }) => Promise<email.domain.Responder>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/serviceInfos'): (params: {
        domain: string;
    }) => Promise<services.Service>;
    /**
     * summary operations
     * Summary for this domain
     */
    get(path: '/email/domain/{domain}/summary'): (params: {
        domain: string;
    }) => Promise<domain.DomainSummary>;
    /**
     * List the email.domain.TaskPop objects
     * Get account tasks
     */
    get(path: '/email/domain/{domain}/task/account'): (params: {
        domain: string;
        name?: string;
    }) => Promise<number[]>;
    /**
     * Task Pop List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/task/account/{id}'): (params: {
        domain: string;
        id: number;
    }) => Promise<email.domain.TaskPop>;
    /**
     * List the email.domain.TaskFilter objects
     * Get filter tasks
     */
    get(path: '/email/domain/{domain}/task/filter'): (params: {
        domain: string;
        account?: string;
    }) => Promise<number[]>;
    /**
     * Task filter List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/task/filter/{id}'): (params: {
        domain: string;
        id: number;
    }) => Promise<email.domain.TaskFilter>;
    /**
     * List the email.domain.TaskMl objects
     * Get Mailing List tasks
     */
    get(path: '/email/domain/{domain}/task/mailinglist'): (params: {
        domain: string;
        account?: string;
    }) => Promise<number[]>;
    /**
     * Task Mailing List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/task/mailinglist/{id}'): (params: {
        domain: string;
        id: number;
    }) => Promise<email.domain.TaskMl>;
    /**
     * List the email.domain.TaskSpecialAccount objects
     * Get redirection tasks
     */
    get(path: '/email/domain/{domain}/task/redirection'): (params: {
        domain: string;
        account?: string;
    }) => Promise<number[]>;
    /**
     * Task special account List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/task/redirection/{id}'): (params: {
        domain: string;
        id: number;
    }) => Promise<email.domain.TaskSpecialAccount>;
    /**
     * List the email.domain.TaskSpecialAccount objects
     * Get responder tasks
     */
    get(path: '/email/domain/{domain}/task/responder'): (params: {
        domain: string;
        account?: string;
    }) => Promise<number[]>;
    /**
     * Task special account List
     * Get this object properties
     */
    get(path: '/email/domain/{domain}/task/responder/{id}'): (params: {
        domain: string;
        id: number;
    }) => Promise<email.domain.TaskSpecialAccount>;
    /**
     * List the email.domain.AccountDelegated objects
     * Delegated emails
     */
    get(path: '/email/domain/delegatedAccount'): (params?: {
        accountName?: string;
        domain?: string;
    }) => Promise<string[]>;
    /**
     * Account List
     * Get this object properties
     */
    get(path: '/email/domain/delegatedAccount/{email}'): (params: {
        email: string;
    }) => Promise<email.domain.AccountDelegated>;
    /**
     * List the email.domain.Filter objects
     * Get filters
     */
    get(path: '/email/domain/delegatedAccount/{email}/filter'): (params: {
        email: string;
    }) => Promise<string[]>;
    /**
     * Filter List
     * Get this object properties
     */
    get(path: '/email/domain/delegatedAccount/{email}/filter/{name}'): (params: {
        email: string;
        name: string;
    }) => Promise<email.domain.Filter>;
    /**
     * List the email.domain.Rule objects
     * Get rules
     */
    get(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule'): (params: {
        email: string;
        name: string;
    }) => Promise<number[]>;
    /**
     * Rule List
     * Get this object properties
     */
    get(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}'): (params: {
        email: string;
        id: number;
        name: string;
    }) => Promise<email.domain.Rule>;
    /**
     * Responder of account
     * Get this object properties
     */
    get(path: '/email/domain/delegatedAccount/{email}/responder'): (params: {
        email: string;
    }) => Promise<email.domain.ResponderAccount>;
    /**
     * Get limits of mailing list
     * Get limits of mailing list
     */
    get(path: '/email/domain/mailingListLimits'): (params: {
        moderatorMessage: boolean;
    }) => Promise<domain.DomainMlLimits>;
    /**
     * Account List
     * Alter this object properties
     */
    put(path: '/email/domain/{domain}/account/{accountName}'): (params: {
        accountName: string;
        domain: string;
        description?: string;
        email?: string;
        isBlocked?: boolean;
        size?: number;
    }) => Promise<void>;
    /**
     * Mailing List
     * Alter this object properties
     */
    put(path: '/email/domain/{domain}/mailingList/{name}'): (params: {
        domain: string;
        name: string;
        id?: number;
        language?: domainDomainMlLanguageEnum;
        nbSubscribers?: number;
        nbSubscribersUpdateDate?: string;
        options?: domainDomainMlOptionsStruct;
        ownerEmail?: string;
        replyTo?: string;
    }) => Promise<void>;
    /**
     * Responder
     * Alter this object properties
     */
    put(path: '/email/domain/{domain}/responder/{account}'): (params: {
        account: string;
        domain: string;
        content?: string;
        copy?: boolean;
        copyTo?: string;
        from?: string;
        to?: string;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/email/domain/{domain}/serviceInfos'): (params: {
        domain: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * Account List
     * Alter this object properties
     */
    put(path: '/email/domain/delegatedAccount/{email}'): (params: {
        email: string;
        accountName?: string;
        allowedAccountSize?: number[];
        description?: string;
        domain?: string;
        isBlocked?: boolean;
        size?: number;
    }) => Promise<void>;
    /**
     * Responder of account
     * Alter this object properties
     */
    put(path: '/email/domain/delegatedAccount/{email}/responder'): (params: {
        email: string;
        account?: string;
        content?: string;
        copy?: boolean;
        copyTo?: string;
        from?: string;
        to?: string;
    }) => Promise<void>;
    /**
     * List the email.domain.Account objects
     * Create new mailbox in server
     */
    post(path: '/email/domain/{domain}/account'): (params: {
        domain: string;
        accountName: string;
        description?: string;
        password: string;
        size?: number;
    }) => Promise<email.domain.TaskPop>;
    /**
     * changePassword operations
     * Change mailbox password (length : [9;30], no space at begin and end, no accent)
     */
    post(path: '/email/domain/{domain}/account/{accountName}/changePassword'): (params: {
        accountName: string;
        domain: string;
        password: string;
    }) => Promise<email.domain.TaskPop>;
    /**
     * List the email.domain.Delegation objects
     * Create delegation for this account
     */
    post(path: '/email/domain/{domain}/account/{accountName}/delegation'): (params: {
        accountName: string;
        domain: string;
        accountId: string;
    }) => Promise<string>;
    /**
     * List the email.domain.Filter objects
     * Create new filter for account
     */
    post(path: '/email/domain/{domain}/account/{accountName}/filter'): (params: {
        accountName: string;
        domain: string;
        action: domainDomainFilterActionEnum;
        actionParam?: string;
        active: boolean;
        header: string;
        name: string;
        operand: domainDomainFilterOperandEnum;
        priority: number;
        value: string;
    }) => Promise<email.domain.TaskFilter>;
    /**
     * changeActivity operations
     * Change filter activity
     */
    post(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity'): (params: {
        accountName: string;
        domain: string;
        name: string;
        activity: boolean;
    }) => Promise<email.domain.TaskFilter>;
    /**
     * changePriority operations
     * Change filter priority
     */
    post(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/changePriority'): (params: {
        accountName: string;
        domain: string;
        name: string;
        priority: number;
    }) => Promise<email.domain.TaskFilter>;
    /**
     * List the email.domain.Rule objects
     * Create new rule for filter
     */
    post(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule'): (params: {
        accountName: string;
        domain: string;
        name: string;
        header: string;
        operand: domainDomainFilterOperandEnum;
        value: string;
    }) => Promise<email.domain.TaskFilter>;
    /**
     * migrate operations
     * Migrate account to destination account
     */
    post(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/migrate'): (params: {
        accountName: string;
        destinationEmailAddress: string;
        destinationServiceName: string;
        domain: string;
        password: string;
    }) => Promise<email.domain.TaskPop>;
    /**
     * updateUsage operations
     * Update usage of account
     */
    post(path: '/email/domain/{domain}/account/{accountName}/updateUsage'): (params: {
        accountName: string;
        domain: string;
    }) => Promise<void>;
    /**
     * List the email.domain.Acl objects
     * Create new ACL
     */
    post(path: '/email/domain/{domain}/acl'): (params: {
        domain: string;
        accountId: string;
    }) => Promise<email.domain.Acl>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/email/domain/{domain}/changeContact'): (params: {
        domain: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * changeDnsMXFilter operations
     * Change MX filter, so change MX DNS records
     */
    post(path: '/email/domain/{domain}/changeDnsMXFilter'): (params: {
        domain: string;
        customTarget?: string;
        mxFilter: domain.DomainMXFilterEnum;
        subDomain?: string;
    }) => Promise<void>;
    /**
     * confirmTermination operations
     * Confirm termination of your email service
     */
    post(path: '/email/domain/{domain}/confirmTermination'): (params: {
        domain: string;
        commentary?: string;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * List the email.domain.MailingList objects
     * Create new mailingList
     */
    post(path: '/email/domain/{domain}/mailingList'): (params: {
        domain: string;
        language: domainDomainMlLanguageEnum;
        name: string;
        options: domainDomainMlOptionsStruct;
        ownerEmail: string;
        replyTo?: string;
    }) => Promise<email.domain.TaskMl>;
    /**
     * changeOptions operations
     * Change mailing list options
     */
    post(path: '/email/domain/{domain}/mailingList/{name}/changeOptions'): (params: {
        domain: string;
        name: string;
        options: domainDomainMlOptionsStruct;
    }) => Promise<email.domain.TaskMl>;
    /**
     * List the email.domain.Moderator objects
     * Add moderator to mailing list
     */
    post(path: '/email/domain/{domain}/mailingList/{name}/moderator'): (params: {
        domain: string;
        name: string;
        email: string;
    }) => Promise<email.domain.TaskMl>;
    /**
     * sendListByEmail operations
     * Send moderators list and subscribers list of this mailing list by email
     */
    post(path: '/email/domain/{domain}/mailingList/{name}/sendListByEmail'): (params: {
        domain: string;
        name: string;
        email: string;
    }) => Promise<email.domain.TaskMl>;
    /**
     * List the email.domain.Subscriber objects
     * Add subscriber to mailing list
     */
    post(path: '/email/domain/{domain}/mailingList/{name}/subscriber'): (params: {
        domain: string;
        name: string;
        email: string;
    }) => Promise<email.domain.TaskMl>;
    /**
     * migrateDelegationV3toV6 operations
     * Create delegation of domain with same nic than V3
     */
    post(path: '/email/domain/{domain}/migrateDelegationV3toV6'): (params: {
        domain: string;
    }) => Promise<void>;
    /**
     * List the email.domain.RedirectionGlobal objects
     * Create new redirection in server
     */
    post(path: '/email/domain/{domain}/redirection'): (params: {
        domain: string;
        from: string;
        localCopy: boolean;
        to: string;
    }) => Promise<email.domain.TaskSpecialAccount>;
    /**
     * changeRedirection operations
     * Change redirection
     */
    post(path: '/email/domain/{domain}/redirection/{id}/changeRedirection'): (params: {
        domain: string;
        id: string;
        to: string;
    }) => Promise<email.domain.TaskSpecialAccount>;
    /**
     * List the email.domain.Responder objects
     * Create new responder in server
     */
    post(path: '/email/domain/{domain}/responder'): (params: {
        domain: string;
        account: string;
        content: string;
        copy: boolean;
        copyTo?: string;
        from?: string;
        to?: string;
    }) => Promise<email.domain.TaskSpecialAccount>;
    /**
     * terminate operations
     * Terminate your email service
     */
    post(path: '/email/domain/{domain}/terminate'): (params: {
        domain: string;
    }) => Promise<string>;
    /**
     * changePassword operations
     * Change mailbox password (length : [9;30], no space at begin and end, no accent)
     */
    post(path: '/email/domain/delegatedAccount/{email}/changePassword'): (params: {
        email: string;
        password: string;
    }) => Promise<email.domain.TaskPop>;
    /**
     * List the email.domain.Filter objects
     * Create new filter for account
     */
    post(path: '/email/domain/delegatedAccount/{email}/filter'): (params: {
        email: string;
        action: domainDomainFilterActionEnum;
        actionParam?: string;
        active: boolean;
        header: string;
        name: string;
        operand: domainDomainFilterOperandEnum;
        priority: number;
        value: string;
    }) => Promise<email.domain.TaskFilter>;
    /**
     * changeActivity operations
     * Change filter activity
     */
    post(path: '/email/domain/delegatedAccount/{email}/filter/{name}/changeActivity'): (params: {
        email: string;
        name: string;
        activity: boolean;
    }) => Promise<email.domain.TaskFilter>;
    /**
     * changePriority operations
     * Change filter priority
     */
    post(path: '/email/domain/delegatedAccount/{email}/filter/{name}/changePriority'): (params: {
        email: string;
        name: string;
        priority: number;
    }) => Promise<email.domain.TaskFilter>;
    /**
     * List the email.domain.Rule objects
     * Create new rule for filter
     */
    post(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule'): (params: {
        email: string;
        name: string;
        header: string;
        operand: domainDomainFilterOperandEnum;
        value: string;
    }) => Promise<email.domain.TaskFilter>;
    /**
     * Responder of account
     * Create new responder in server
     */
    post(path: '/email/domain/delegatedAccount/{email}/responder'): (params: {
        email: string;
        content: string;
        copy: boolean;
        copyTo?: string;
        from?: string;
        to?: string;
    }) => Promise<email.domain.TaskSpecialAccount>;
    /**
     * updateUsage operations
     * Update usage of account
     */
    post(path: '/email/domain/delegatedAccount/{email}/updateUsage'): (params: {
        email: string;
    }) => Promise<void>;
    /**
     * usage operations
     * usage of account
     */
    post(path: '/email/domain/delegatedAccount/{email}/usage'): (params: {
        email: string;
    }) => Promise<domain.DomainUsageAccountStruct>;
    /**
     * Account List
     * Delete an existing mailbox in server
     */
    delete(path: '/email/domain/{domain}/account/{accountName}'): (params: {
        accountName: string;
        domain: string;
    }) => Promise<email.domain.TaskPop>;
    /**
     * Delegation List
     * Delete an existing delegation
     */
    delete(path: '/email/domain/{domain}/account/{accountName}/delegation/{accountId}'): (params: {
        accountId: string;
        accountName: string;
        domain: string;
    }) => Promise<string>;
    /**
     * Filter List
     * Delete an existing filter
     */
    delete(path: '/email/domain/{domain}/account/{accountName}/filter/{name}'): (params: {
        accountName: string;
        domain: string;
        name: string;
    }) => Promise<email.domain.TaskFilter[]>;
    /**
     * Rule List
     * Delete an existing filter
     */
    delete(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}'): (params: {
        accountName: string;
        domain: string;
        id: number;
        name: string;
    }) => Promise<email.domain.TaskFilter[]>;
    /**
     * Email ACL
     * Delete ACL
     */
    delete(path: '/email/domain/{domain}/acl/{accountId}'): (params: {
        accountId: string;
        domain: string;
    }) => Promise<void>;
    /**
     * Mailing List
     * Delete existing Mailing list
     */
    delete(path: '/email/domain/{domain}/mailingList/{name}'): (params: {
        domain: string;
        name: string;
    }) => Promise<email.domain.TaskMl>;
    /**
     * Moderators List
     * Delete existing moderator
     */
    delete(path: '/email/domain/{domain}/mailingList/{name}/moderator/{email}'): (params: {
        domain: string;
        email: string;
        name: string;
    }) => Promise<email.domain.TaskMl>;
    /**
     * Subscribers List
     * Delete existing subscriber
     */
    delete(path: '/email/domain/{domain}/mailingList/{name}/subscriber/{email}'): (params: {
        domain: string;
        email: string;
        name: string;
    }) => Promise<email.domain.TaskMl>;
    /**
     * Global Redirection
     * Delete an existing redirection in server
     */
    delete(path: '/email/domain/{domain}/redirection/{id}'): (params: {
        domain: string;
        id: string;
    }) => Promise<email.domain.TaskSpecialAccount>;
    /**
     * Responder
     * Delete an existing responder in server
     */
    delete(path: '/email/domain/{domain}/responder/{account}'): (params: {
        account: string;
        domain: string;
    }) => Promise<email.domain.TaskSpecialAccount>;
    /**
     * Filter List
     * Delete an existing filter
     */
    delete(path: '/email/domain/delegatedAccount/{email}/filter/{name}'): (params: {
        email: string;
        name: string;
    }) => Promise<email.domain.TaskFilter[]>;
    /**
     * Rule List
     * Delete an existing filter
     */
    delete(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}'): (params: {
        email: string;
        id: number;
        name: string;
    }) => Promise<email.domain.TaskFilter[]>;
    /**
     * Responder of account
     * Delete an existing responder in server
     */
    delete(path: '/email/domain/delegatedAccount/{email}/responder'): (params: {
        email: string;
    }) => Promise<email.domain.TaskSpecialAccount>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
declare type zoneNamedResolutionFieldTypeEnum = zone.NamedResolutionFieldTypeEnum;
declare type domainDomainStatusEnum = domain.DomainStatusEnum;
declare type domainDomainFilterActionEnum = domain.DomainFilterActionEnum;
declare type domainDomainMlLanguageEnum = domain.DomainMlLanguageEnum;
declare type domainDomainMlOptionsStruct = domain.DomainMlOptionsStruct;
declare type domainDomainFilterOperandEnum = domain.DomainFilterOperandEnum;
declare type domainDomainPopActionEnum = domain.DomainPopActionEnum;
declare type domainDomainSpecialAccountActionEnum = domain.DomainSpecialAccountActionEnum;
declare type domainDomainSpecialAccountTypeEnum = domain.DomainSpecialAccountTypeEnum;
