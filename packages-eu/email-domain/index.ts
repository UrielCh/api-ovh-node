import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /email/domain Models
 * Source: https://eu.api.ovh.com/1.0/email/domain.json
 */
export namespace domain {
    // type fullname: domain.DomainFilterActionEnum
    export type DomainFilterActionEnum = "accept" | "account" | "delete" | "redirect"
    // type fullname: domain.DomainFilterOperandEnum
    export type DomainFilterOperandEnum = "checkspf" | "contains" | "noContains"
    // type fullname: domain.DomainMXFilterEnum
    export type DomainMXFilterEnum = "CUSTOM" | "FULL_FILTERING" | "NO_FILTERING" | "REDIRECT" | "SIMPLE_FILTERING"
    // type fullname: domain.DomainMlLanguageEnum
    export type DomainMlLanguageEnum = "de" | "en" | "es" | "fr" | "it" | "nl" | "pl" | "pt"
    // interface fullName: domain.DomainMlLimits.DomainMlLimits
    export interface DomainMlLimits {
        subscribers: number;
    }
    // interface fullName: domain.DomainMlOptionsStruct.DomainMlOptionsStruct
    export interface DomainMlOptionsStruct {
        moderatorMessage: boolean;
        subscribeByModerator: boolean;
        usersPostOnly: boolean;
    }
    // type fullname: domain.DomainPopActionEnum
    export type DomainPopActionEnum = "addAccount" | "changeAccount" | "changePassword" | "deleteAccount" | "internalMigration" | "migration" | "temporaryTask" | "unknown"
    // interface fullName: domain.DomainQuota.DomainQuota
    export interface DomainQuota {
        account: number;
        alias: number;
        mailingList: number;
        redirection: number;
        responder: number;
    }
    // type fullname: domain.DomainSpecialAccountActionEnum
    export type DomainSpecialAccountActionEnum = "add" | "change" | "delete"
    // type fullname: domain.DomainSpecialAccountTypeEnum
    export type DomainSpecialAccountTypeEnum = "25g" | "alias" | "delete" | "filter" | "forward" | "responder"
    // type fullname: domain.DomainStatusEnum
    export type DomainStatusEnum = "close" | "ok" | "readOnly" | "unknown"
    // interface fullName: domain.DomainSummary.DomainSummary
    export interface DomainSummary {
        account: number;
        mailingList: number;
        redirection: number;
        responder: number;
    }
    // interface fullName: domain.DomainUsageAccountStruct.DomainUsageAccountStruct
    export interface DomainUsageAccountStruct {
        date?: string;
        emailCount?: number;
        quota?: number;
    }
    export namespace zone {
        // interface fullName: domain.zone.Record.Record
        export interface Record {
            fieldType: zoneNamedResolutionFieldTypeEnum;
            id: number;
            subDomain?: string;
            target: string;
            ttl?: number;
            zone: string;
        }
    }
}
export namespace email {
    export namespace domain {
        // interface fullName: email.domain.Account.Account
        export interface Account {
            accountName: string;
            description: string;
            domain: string;
            email: string;
            isBlocked: boolean;
            size: number;
        }
        // interface fullName: email.domain.AccountDelegated.AccountDelegated
        export interface AccountDelegated {
            accountName: string;
            allowedAccountSize?: number[];
            description: string;
            domain: string;
            email: string;
            isBlocked: boolean;
            size: number;
        }
        // interface fullName: email.domain.Acl.Acl
        export interface Acl {
            accountId: string;
        }
        // interface fullName: email.domain.Delegation.Delegation
        export interface Delegation {
            accountId: string;
        }
        // interface fullName: email.domain.Diagnose.Diagnose
        export interface Diagnose {
            date: string;
            function: email.domain.DomainDiagnoseFunctionEnum;
            id: number;
            name?: string;
            result?: email.domain.DomainDiagnoseResultEnum;
            trace?: email.domain.DomainDiagnoseTraceStruct<email.domain.DomainDiagnoseResultEnum>[];
        }
        // type fullname: email.domain.DomainDiagnoseFunctionEnum
        export type DomainDiagnoseFunctionEnum = "MX"
        // type fullname: email.domain.DomainDiagnoseResultEnum
        export type DomainDiagnoseResultEnum = "CUSTOM" | "DEPRECATED" | "KO" | "OK"
        // interface fullName: email.domain.DomainDiagnoseTraceStruct.DomainDiagnoseTraceStruct
        export interface DomainDiagnoseTraceStruct<T> {
            result: T;
            test: string;
        }
        // interface fullName: email.domain.DomainService.DomainService
        export interface DomainService {
            allowedAccountSize?: number[];
            creationDate?: string;
            domain: string;
            filerz?: number;
            linkTo?: string;
            migratedMXPlanServiceName?: string;
            offer?: string;
            status: domainDomainStatusEnum;
        }
        // interface fullName: email.domain.Filter.Filter
        export interface Filter {
            action?: domainDomainFilterActionEnum;
            actionParam?: string;
            active: boolean;
            domain: string;
            name: string;
            pop: string;
            priority: number;
        }
        // interface fullName: email.domain.MailingList.MailingList
        export interface MailingList {
            id: number;
            language?: domainDomainMlLanguageEnum;
            name: string;
            nbSubscribers?: number;
            nbSubscribersUpdateDate?: string;
            options: domainDomainMlOptionsStruct;
            ownerEmail: string;
            replyTo: string;
        }
        // interface fullName: email.domain.MigrationAccount.MigrationAccount
        export interface MigrationAccount {
            destinationEmailAddress: string;
            quota: number;
        }
        // type fullname: email.domain.MigrationCheckCodeEnum
        export type MigrationCheckCodeEnum = "ACCOUNT_EMPTY" | "ACCOUNT_INPROGRESS" | "DELEGATION_EXIST" | "DOMAIN_EMPTY" | "FILTER_EXIST" | "FORWARD_EXIST" | "FORWARD_LOCAL" | "MAILINGLIST_EXIST" | "MAILINGLIST_INPROGRESS" | "MAILPROXY_BAD_INFRA" | "MAILPROXY_EMPTY" | "MAILPROXY_INPROGRESS" | "MAILPROXY_RESERVATION" | "REDIRECTION_INPROGRESS" | "RESPONDER_EXIST" | "RESPONDER_INPROGRESS" | "UNKNOW"
        // interface fullName: email.domain.MigrationCheckResultStruct.MigrationCheckResultStruct
        export interface MigrationCheckResultStruct {
            code: email.domain.MigrationCheckCodeEnum;
            details?: string;
        }
        // interface fullName: email.domain.MigrationCheckStruct.MigrationCheckStruct
        export interface MigrationCheckStruct {
            alias?: string[];
            error?: email.domain.MigrationCheckResultStruct[];
            filter?: string[];
            forward?: string[];
            warning?: email.domain.MigrationCheckResultStruct[];
        }
        // interface fullName: email.domain.MigrationService.MigrationService
        export interface MigrationService {
            contactAdmin: string;
            contactBilling: string;
            contactTech: string;
            creation: string;
            destinationServiceName: string;
            expiration: string;
            type: email.domain.MigrationServiceType;
        }
        // type fullname: email.domain.MigrationServiceType
        export type MigrationServiceType = "EMAIL PRO" | "HOSTED EXCHANGE" | "PRIVATE EXCHANGE" | "PROVIDER EXCHANGE"
        // interface fullName: email.domain.Moderator.Moderator
        export interface Moderator {
            domain: string;
            email: string;
            mailinglist: string;
        }
        // interface fullName: email.domain.RedirectionGlobal.RedirectionGlobal
        export interface RedirectionGlobal {
            from: string;
            id: string;
            to: string;
        }
        // interface fullName: email.domain.Responder.Responder
        export interface Responder {
            account: string;
            content: string;
            copy: boolean;
            copyTo?: string;
            from?: string;
            to?: string;
        }
        // interface fullName: email.domain.ResponderAccount.ResponderAccount
        export interface ResponderAccount {
            account: string;
            content: string;
            copy: boolean;
            copyTo?: string;
            from?: string;
            to?: string;
        }
        // interface fullName: email.domain.Rule.Rule
        export interface Rule {
            header: string;
            id: number;
            operand: domainDomainFilterOperandEnum;
            value: string;
        }
        // interface fullName: email.domain.Subscriber.Subscriber
        export interface Subscriber {
            domain: string;
            email: string;
            mailinglist: string;
        }
        // interface fullName: email.domain.TaskFilter.TaskFilter
        export interface TaskFilter {
            account: string;
            action: string;
            domain: string;
            id: number;
            timestamp: string;
        }
        // interface fullName: email.domain.TaskMl.TaskMl
        export interface TaskMl {
            account: string;
            action: string;
            date: string;
            domain: string;
            id: number;
            language: domainDomainMlLanguageEnum;
        }
        // interface fullName: email.domain.TaskPop.TaskPop
        export interface TaskPop {
            action: domainDomainPopActionEnum;
            date: string;
            domain: string;
            id: number;
            name: string;
        }
        // interface fullName: email.domain.TaskSpecialAccount.TaskSpecialAccount
        export interface TaskSpecialAccount {
            account: string;
            action: domainDomainSpecialAccountActionEnum;
            date: string;
            domain: string;
            id: number;
            type: domainDomainSpecialAccountTypeEnum;
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
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
export namespace zone {
    // type fullname: zone.NamedResolutionFieldTypeEnum
    export type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
}

/**
 * END API /email/domain Models
 */
export function proxyEmailDomain(ovhEngine: OvhRequestable): Email {
    return buildOvhProxy(ovhEngine, '/email');
}
export default proxyEmailDomain;
/**
 * Api Proxy model
 */// Apis harmony
// path /email
export interface Email {
    domain: {
        // GET /email/domain
        $get(): Promise<string[]>;
        delegatedAccount: {
            // GET /email/domain/delegatedAccount
            $get(params?: {accountName?: string, domain?: string}): Promise<string[]>;
            $(email: string): {
                // GET /email/domain/delegatedAccount/{email}
                $get(): Promise<email.domain.AccountDelegated>;
                // PUT /email/domain/delegatedAccount/{email}
                $put(params?: {accountName?: string, allowedAccountSize?: number[], description?: string, domain?: string, email?: string, isBlocked?: boolean, size?: number}): Promise<void>;
                changePassword: {
                    // POST /email/domain/delegatedAccount/{email}/changePassword
                    $post(params: {password: string}): Promise<email.domain.TaskPop>;
                }
                filter: {
                    // GET /email/domain/delegatedAccount/{email}/filter
                    $get(): Promise<string[]>;
                    // POST /email/domain/delegatedAccount/{email}/filter
                    $post(params: {action: domainDomainFilterActionEnum, actionParam?: string, active: boolean, header: string, name: string, operand: domainDomainFilterOperandEnum, priority: number, value: string}): Promise<email.domain.TaskFilter>;
                    $(name: string): {
                        // DELETE /email/domain/delegatedAccount/{email}/filter/{name}
                        $delete(): Promise<email.domain.TaskFilter[]>;
                        // GET /email/domain/delegatedAccount/{email}/filter/{name}
                        $get(): Promise<email.domain.Filter>;
                        changeActivity: {
                            // POST /email/domain/delegatedAccount/{email}/filter/{name}/changeActivity
                            $post(params: {activity: boolean}): Promise<email.domain.TaskFilter>;
                        }
                        changePriority: {
                            // POST /email/domain/delegatedAccount/{email}/filter/{name}/changePriority
                            $post(params: {priority: number}): Promise<email.domain.TaskFilter>;
                        }
                        rule: {
                            // GET /email/domain/delegatedAccount/{email}/filter/{name}/rule
                            $get(): Promise<number[]>;
                            // POST /email/domain/delegatedAccount/{email}/filter/{name}/rule
                            $post(params: {header: string, operand: domainDomainFilterOperandEnum, value: string}): Promise<email.domain.TaskFilter>;
                            $(id: number): {
                                // DELETE /email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}
                                $delete(): Promise<email.domain.TaskFilter[]>;
                                // GET /email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}
                                $get(): Promise<email.domain.Rule>;
                            };
                        }
                    };
                }
                responder: {
                    // DELETE /email/domain/delegatedAccount/{email}/responder
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    // GET /email/domain/delegatedAccount/{email}/responder
                    $get(): Promise<email.domain.ResponderAccount>;
                    // POST /email/domain/delegatedAccount/{email}/responder
                    $post(params: {content: string, copy: boolean, copyTo?: string, from?: string, to?: string}): Promise<email.domain.TaskSpecialAccount>;
                    // PUT /email/domain/delegatedAccount/{email}/responder
                    $put(params?: {account?: string, content?: string, copy?: boolean, copyTo?: string, from?: string, to?: string}): Promise<void>;
                }
                updateUsage: {
                    // POST /email/domain/delegatedAccount/{email}/updateUsage
                    $post(): Promise<void>;
                }
                usage: {
                    // POST /email/domain/delegatedAccount/{email}/usage
                    $post(): Promise<domain.DomainUsageAccountStruct>;
                }
            };
        }
        mailingListLimits: {
            // GET /email/domain/mailingListLimits
            $get(params: {moderatorMessage: boolean}): Promise<domain.DomainMlLimits>;
        }
        $(domain: string): {
            // GET /email/domain/{domain}
            $get(): Promise<email.domain.DomainService>;
            account: {
                // GET /email/domain/{domain}/account
                $get(params?: {accountName?: string, description?: string}): Promise<string[]>;
                // POST /email/domain/{domain}/account
                $post(params: {accountName: string, description?: string, password: string, size?: number}): Promise<email.domain.TaskPop>;
                $(accountName: string): {
                    // DELETE /email/domain/{domain}/account/{accountName}
                    $delete(): Promise<email.domain.TaskPop>;
                    // GET /email/domain/{domain}/account/{accountName}
                    $get(): Promise<email.domain.Account>;
                    // PUT /email/domain/{domain}/account/{accountName}
                    $put(params?: {accountName?: string, description?: string, domain?: string, email?: string, isBlocked?: boolean, size?: number}): Promise<void>;
                    changePassword: {
                        // POST /email/domain/{domain}/account/{accountName}/changePassword
                        $post(params: {password: string}): Promise<email.domain.TaskPop>;
                    }
                    delegation: {
                        // GET /email/domain/{domain}/account/{accountName}/delegation
                        $get(): Promise<string[]>;
                        // POST /email/domain/{domain}/account/{accountName}/delegation
                        $post(params: {accountId: string}): Promise<string>;
                        $(accountId: string): {
                            // DELETE /email/domain/{domain}/account/{accountName}/delegation/{accountId}
                            $delete(): Promise<string>;
                            // GET /email/domain/{domain}/account/{accountName}/delegation/{accountId}
                            $get(): Promise<email.domain.Delegation>;
                        };
                    }
                    filter: {
                        // GET /email/domain/{domain}/account/{accountName}/filter
                        $get(): Promise<string[]>;
                        // POST /email/domain/{domain}/account/{accountName}/filter
                        $post(params: {action: domainDomainFilterActionEnum, actionParam?: string, active: boolean, header: string, name: string, operand: domainDomainFilterOperandEnum, priority: number, value: string}): Promise<email.domain.TaskFilter>;
                        $(name: string): {
                            // DELETE /email/domain/{domain}/account/{accountName}/filter/{name}
                            $delete(): Promise<email.domain.TaskFilter[]>;
                            // GET /email/domain/{domain}/account/{accountName}/filter/{name}
                            $get(): Promise<email.domain.Filter>;
                            changeActivity: {
                                // POST /email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity
                                $post(params: {activity: boolean}): Promise<email.domain.TaskFilter>;
                            }
                            changePriority: {
                                // POST /email/domain/{domain}/account/{accountName}/filter/{name}/changePriority
                                $post(params: {priority: number}): Promise<email.domain.TaskFilter>;
                            }
                            rule: {
                                // GET /email/domain/{domain}/account/{accountName}/filter/{name}/rule
                                $get(): Promise<number[]>;
                                // POST /email/domain/{domain}/account/{accountName}/filter/{name}/rule
                                $post(params: {header: string, operand: domainDomainFilterOperandEnum, value: string}): Promise<email.domain.TaskFilter>;
                                $(id: number): {
                                    // DELETE /email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}
                                    $delete(): Promise<email.domain.TaskFilter[]>;
                                    // GET /email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}
                                    $get(): Promise<email.domain.Rule>;
                                };
                            }
                        };
                    }
                    migrate: {
                        // GET /email/domain/{domain}/account/{accountName}/migrate
                        $get(params?: {type?: email.domain.MigrationServiceType}): Promise<string[]>;
                        $(destinationServiceName: string): {
                            // GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}
                            $get(): Promise<email.domain.MigrationService>;
                            destinationEmailAddress: {
                                // GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress
                                $get(params?: {quota?: number}): Promise<string[]>;
                                $(destinationEmailAddress: string): {
                                    // GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}
                                    $get(): Promise<email.domain.MigrationAccount>;
                                    checkMigrate: {
                                        // GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/checkMigrate
                                        $get(): Promise<email.domain.MigrationCheckStruct>;
                                    }
                                    migrate: {
                                        // POST /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/migrate
                                        $post(params: {password: string}): Promise<email.domain.TaskPop>;
                                    }
                                };
                            }
                        };
                    }
                    updateUsage: {
                        // POST /email/domain/{domain}/account/{accountName}/updateUsage
                        $post(): Promise<void>;
                    }
                    usage: {
                        // GET /email/domain/{domain}/account/{accountName}/usage
                        $get(): Promise<domain.DomainUsageAccountStruct>;
                    }
                };
            }
            acl: {
                // GET /email/domain/{domain}/acl
                $get(): Promise<string[]>;
                // POST /email/domain/{domain}/acl
                $post(params: {accountId: string}): Promise<email.domain.Acl>;
                $(accountId: string): {
                    // DELETE /email/domain/{domain}/acl/{accountId}
                    $delete(): Promise<void>;
                    // GET /email/domain/{domain}/acl/{accountId}
                    $get(): Promise<email.domain.Acl>;
                };
            }
            changeContact: {
                // POST /email/domain/{domain}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            changeDnsMXFilter: {
                // POST /email/domain/{domain}/changeDnsMXFilter
                $post(params: {customTarget?: string, mxFilter: domain.DomainMXFilterEnum, subDomain?: string}): Promise<void>;
            }
            confirmTermination: {
                // POST /email/domain/{domain}/confirmTermination
                $post(params: {commentary?: string, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            dnsMXFilter: {
                // GET /email/domain/{domain}/dnsMXFilter
                $get(params?: {subDomain?: string}): Promise<domain.DomainMXFilterEnum>;
            }
            dnsMXRecords: {
                // GET /email/domain/{domain}/dnsMXRecords
                $get(params?: {subDomain?: string}): Promise<string[]>;
            }
            mailingList: {
                // GET /email/domain/{domain}/mailingList
                $get(params?: {name?: string}): Promise<string[]>;
                // POST /email/domain/{domain}/mailingList
                $post(params: {language: domainDomainMlLanguageEnum, name: string, options: domainDomainMlOptionsStruct, ownerEmail: string, replyTo?: string}): Promise<email.domain.TaskMl>;
                $(name: string): {
                    // DELETE /email/domain/{domain}/mailingList/{name}
                    $delete(): Promise<email.domain.TaskMl>;
                    // GET /email/domain/{domain}/mailingList/{name}
                    $get(): Promise<email.domain.MailingList>;
                    // PUT /email/domain/{domain}/mailingList/{name}
                    $put(params?: {id?: number, language?: domainDomainMlLanguageEnum, name?: string, nbSubscribers?: number, nbSubscribersUpdateDate?: string, options?: domainDomainMlOptionsStruct, ownerEmail?: string, replyTo?: string}): Promise<void>;
                    changeOptions: {
                        // POST /email/domain/{domain}/mailingList/{name}/changeOptions
                        $post(params: {options: domainDomainMlOptionsStruct}): Promise<email.domain.TaskMl>;
                    }
                    moderator: {
                        // GET /email/domain/{domain}/mailingList/{name}/moderator
                        $get(params?: {email?: string}): Promise<string[]>;
                        // POST /email/domain/{domain}/mailingList/{name}/moderator
                        $post(params: {email: string}): Promise<email.domain.TaskMl>;
                        $(email: string): {
                            // DELETE /email/domain/{domain}/mailingList/{name}/moderator/{email}
                            $delete(): Promise<email.domain.TaskMl>;
                            // GET /email/domain/{domain}/mailingList/{name}/moderator/{email}
                            $get(): Promise<email.domain.Moderator>;
                        };
                    }
                    sendListByEmail: {
                        // POST /email/domain/{domain}/mailingList/{name}/sendListByEmail
                        $post(params: {email: string}): Promise<email.domain.TaskMl>;
                    }
                    subscriber: {
                        // GET /email/domain/{domain}/mailingList/{name}/subscriber
                        $get(params?: {email?: string}): Promise<string[]>;
                        // POST /email/domain/{domain}/mailingList/{name}/subscriber
                        $post(params: {email: string}): Promise<email.domain.TaskMl>;
                        $(email: string): {
                            // DELETE /email/domain/{domain}/mailingList/{name}/subscriber/{email}
                            $delete(): Promise<email.domain.TaskMl>;
                            // GET /email/domain/{domain}/mailingList/{name}/subscriber/{email}
                            $get(): Promise<email.domain.Subscriber>;
                        };
                    }
                };
            }
            migrateDelegationV3toV6: {
                // POST /email/domain/{domain}/migrateDelegationV3toV6
                $post(): Promise<void>;
            }
            quota: {
                // GET /email/domain/{domain}/quota
                $get(): Promise<domain.DomainQuota>;
            }
            recommendedDNSRecords: {
                // GET /email/domain/{domain}/recommendedDNSRecords
                $get(): Promise<domain.zone.Record[]>;
            }
            redirection: {
                // GET /email/domain/{domain}/redirection
                $get(params?: {from?: string, to?: string}): Promise<string[]>;
                // POST /email/domain/{domain}/redirection
                $post(params: {from: string, localCopy: boolean, to: string}): Promise<email.domain.TaskSpecialAccount>;
                $(id: string): {
                    // DELETE /email/domain/{domain}/redirection/{id}
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    // GET /email/domain/{domain}/redirection/{id}
                    $get(): Promise<email.domain.RedirectionGlobal>;
                    changeRedirection: {
                        // POST /email/domain/{domain}/redirection/{id}/changeRedirection
                        $post(params: {to: string}): Promise<email.domain.TaskSpecialAccount>;
                    }
                };
            }
            responder: {
                // GET /email/domain/{domain}/responder
                $get(params?: {account?: string}): Promise<string[]>;
                // POST /email/domain/{domain}/responder
                $post(params: {account: string, content: string, copy: boolean, copyTo?: string, from?: string, to?: string}): Promise<email.domain.TaskSpecialAccount>;
                $(account: string): {
                    // DELETE /email/domain/{domain}/responder/{account}
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    // GET /email/domain/{domain}/responder/{account}
                    $get(): Promise<email.domain.Responder>;
                    // PUT /email/domain/{domain}/responder/{account}
                    $put(params?: {account?: string, content?: string, copy?: boolean, copyTo?: string, from?: string, to?: string}): Promise<void>;
                };
            }
            serviceInfos: {
                // GET /email/domain/{domain}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /email/domain/{domain}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            summary: {
                // GET /email/domain/{domain}/summary
                $get(): Promise<domain.DomainSummary>;
            }
            task: {
                account: {
                    // GET /email/domain/{domain}/task/account
                    $get(params?: {name?: string}): Promise<number[]>;
                    $(id: number): {
                        // GET /email/domain/{domain}/task/account/{id}
                        $get(): Promise<email.domain.TaskPop>;
                    };
                }
                filter: {
                    // GET /email/domain/{domain}/task/filter
                    $get(params?: {account?: string}): Promise<number[]>;
                    $(id: number): {
                        // GET /email/domain/{domain}/task/filter/{id}
                        $get(): Promise<email.domain.TaskFilter>;
                    };
                }
                mailinglist: {
                    // GET /email/domain/{domain}/task/mailinglist
                    $get(params?: {account?: string}): Promise<number[]>;
                    $(id: number): {
                        // GET /email/domain/{domain}/task/mailinglist/{id}
                        $get(): Promise<email.domain.TaskMl>;
                    };
                }
                redirection: {
                    // GET /email/domain/{domain}/task/redirection
                    $get(params?: {account?: string}): Promise<number[]>;
                    $(id: number): {
                        // GET /email/domain/{domain}/task/redirection/{id}
                        $get(): Promise<email.domain.TaskSpecialAccount>;
                    };
                }
                responder: {
                    // GET /email/domain/{domain}/task/responder
                    $get(params?: {account?: string}): Promise<number[]>;
                    $(id: number): {
                        // GET /email/domain/{domain}/task/responder/{id}
                        $get(): Promise<email.domain.TaskSpecialAccount>;
                    };
                }
            }
            terminate: {
                // POST /email/domain/{domain}/terminate
                $post(): Promise<string>;
            }
        };
    }
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type zoneNamedResolutionFieldTypeEnum = zone.NamedResolutionFieldTypeEnum;
type domainDomainStatusEnum = domain.DomainStatusEnum;
type domainDomainFilterActionEnum = domain.DomainFilterActionEnum;
type domainDomainMlLanguageEnum = domain.DomainMlLanguageEnum;
type domainDomainMlOptionsStruct = domain.DomainMlOptionsStruct;
type domainDomainFilterOperandEnum = domain.DomainFilterOperandEnum;
type domainDomainPopActionEnum = domain.DomainPopActionEnum;
type domainDomainSpecialAccountActionEnum = domain.DomainSpecialAccountActionEnum;
type domainDomainSpecialAccountTypeEnum = domain.DomainSpecialAccountTypeEnum;
