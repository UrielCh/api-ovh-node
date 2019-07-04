import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace domain {
    //domain.DomainFilterActionEnum
    export type DomainFilterActionEnum = "accept" | "account" | "delete" | "redirect"
    //domain.DomainFilterOperandEnum
    export type DomainFilterOperandEnum = "checkspf" | "contains" | "noContains"
    //domain.DomainMXFilterEnum
    export type DomainMXFilterEnum = "CUSTOM" | "FULL_FILTERING" | "NO_FILTERING" | "REDIRECT" | "SIMPLE_FILTERING"
    //domain.DomainMlLanguageEnum
    export type DomainMlLanguageEnum = "de" | "en" | "es" | "fr" | "it" | "nl" | "pl" | "pt"
    //domain.DomainMlLimits
    // fullName: domain.DomainMlLimits.DomainMlLimits
    export interface DomainMlLimits {
        subscribers?: number;
    }
    //domain.DomainMlOptionsStruct
    // fullName: domain.DomainMlOptionsStruct.DomainMlOptionsStruct
    export interface DomainMlOptionsStruct {
        moderatorMessage?: boolean;
        subscribeByModerator?: boolean;
        usersPostOnly?: boolean;
    }
    //domain.DomainPopActionEnum
    export type DomainPopActionEnum = "addAccount" | "changeAccount" | "changePassword" | "deleteAccount" | "internalMigration" | "migration" | "temporaryTask" | "unknown"
    //domain.DomainQuota
    // fullName: domain.DomainQuota.DomainQuota
    export interface DomainQuota {
        account?: number;
        alias?: number;
        mailingList?: number;
        redirection?: number;
        responder?: number;
    }
    //domain.DomainSpecialAccountActionEnum
    export type DomainSpecialAccountActionEnum = "add" | "change" | "delete"
    //domain.DomainSpecialAccountTypeEnum
    export type DomainSpecialAccountTypeEnum = "25g" | "alias" | "delete" | "filter" | "forward" | "responder"
    //domain.DomainStatusEnum
    export type DomainStatusEnum = "close" | "ok" | "readOnly" | "unknown"
    //domain.DomainSummary
    // fullName: domain.DomainSummary.DomainSummary
    export interface DomainSummary {
        account?: number;
        mailingList?: number;
        redirection?: number;
        responder?: number;
    }
    //domain.DomainUsageAccountStruct
    // fullName: domain.DomainUsageAccountStruct.DomainUsageAccountStruct
    export interface DomainUsageAccountStruct {
        date?: string;
        emailCount?: number;
        quota?: number;
    }
    export namespace zone {
        //domain.zone.Record
        // fullName: domain.zone.Record.Record
        export interface Record {
            fieldType?: OVH.zone.NamedResolutionFieldTypeEnum;
            id?: number;
            subDomain?: string;
            target?: string;
            ttl?: number;
            zone?: string;
        }
    }
}
export namespace email {
    export namespace domain {
        //email.domain.Account
        // fullName: email.domain.Account.Account
        export interface Account {
            accountName?: string;
            description?: string;
            domain?: string;
            email?: string;
            isBlocked?: boolean;
            size?: number;
        }
        //email.domain.AccountDelegated
        // fullName: email.domain.AccountDelegated.AccountDelegated
        export interface AccountDelegated {
            accountName?: string;
            allowedAccountSize?: number[];
            description?: string;
            domain?: string;
            email?: string;
            isBlocked?: boolean;
            size?: number;
        }
        //email.domain.Acl
        // fullName: email.domain.Acl.Acl
        export interface Acl {
            accountId?: string;
        }
        //email.domain.Delegation
        // fullName: email.domain.Delegation.Delegation
        export interface Delegation {
            accountId?: string;
        }
        //email.domain.Diagnose
        // fullName: email.domain.Diagnose.Diagnose
        export interface Diagnose {
            date?: string;
            function?: OVH.email.domain.DomainDiagnoseFunctionEnum;
            id?: number;
            name?: string;
            result?: OVH.email.domain.DomainDiagnoseResultEnum;
            trace?: OVH.email.domain.DomainDiagnoseTraceStruct<email.domain.DomainDiagnoseResultEnum>[];
        }
        //email.domain.DomainDiagnoseFunctionEnum
        export type DomainDiagnoseFunctionEnum = "MX"
        //email.domain.DomainDiagnoseResultEnum
        export type DomainDiagnoseResultEnum = "CUSTOM" | "DEPRECATED" | "KO" | "OK"
        //email.domain.DomainDiagnoseTraceStruct
        // fullName: email.domain.DomainDiagnoseTraceStruct.DomainDiagnoseTraceStruct
        export interface DomainDiagnoseTraceStruct<T> {
            result?: T;
            test?: string;
        }
        //email.domain.DomainService
        // fullName: email.domain.DomainService.DomainService
        export interface DomainService {
            allowedAccountSize?: number[];
            creationDate?: string;
            domain?: string;
            filerz?: number;
            linkTo?: string;
            migratedMXPlanServiceName?: string;
            offer?: string;
            status?: OVH.domain.DomainStatusEnum;
        }
        //email.domain.Filter
        // fullName: email.domain.Filter.Filter
        export interface Filter {
            action?: OVH.domain.DomainFilterActionEnum;
            actionParam?: string;
            active?: boolean;
            domain?: string;
            name?: string;
            pop?: string;
            priority?: number;
        }
        //email.domain.MailingList
        // fullName: email.domain.MailingList.MailingList
        export interface MailingList {
            id?: number;
            language?: OVH.domain.DomainMlLanguageEnum;
            name?: string;
            nbSubscribers?: number;
            nbSubscribersUpdateDate?: string;
            options?: OVH.domain.DomainMlOptionsStruct;
            ownerEmail?: string;
            replyTo?: string;
        }
        //email.domain.MigrationAccount
        // fullName: email.domain.MigrationAccount.MigrationAccount
        export interface MigrationAccount {
            destinationEmailAddress?: string;
            quota?: number;
        }
        //email.domain.MigrationCheckCodeEnum
        export type MigrationCheckCodeEnum = "ACCOUNT_EMPTY" | "ACCOUNT_INPROGRESS" | "DELEGATION_EXIST" | "DOMAIN_EMPTY" | "FILTER_EXIST" | "FORWARD_EXIST" | "FORWARD_LOCAL" | "MAILINGLIST_EXIST" | "MAILINGLIST_INPROGRESS" | "MAILPROXY_BAD_INFRA" | "MAILPROXY_EMPTY" | "MAILPROXY_INPROGRESS" | "MAILPROXY_RESERVATION" | "REDIRECTION_INPROGRESS" | "RESPONDER_EXIST" | "RESPONDER_INPROGRESS" | "UNKNOW"
        //email.domain.MigrationCheckResultStruct
        // fullName: email.domain.MigrationCheckResultStruct.MigrationCheckResultStruct
        export interface MigrationCheckResultStruct {
            code?: OVH.email.domain.MigrationCheckCodeEnum;
            details?: string;
        }
        //email.domain.MigrationCheckStruct
        // fullName: email.domain.MigrationCheckStruct.MigrationCheckStruct
        export interface MigrationCheckStruct {
            alias?: string[];
            error?: OVH.email.domain.MigrationCheckResultStruct[];
            filter?: string[];
            forward?: string[];
            warning?: OVH.email.domain.MigrationCheckResultStruct[];
        }
        //email.domain.MigrationService
        // fullName: email.domain.MigrationService.MigrationService
        export interface MigrationService {
            contactAdmin?: string;
            contactBilling?: string;
            contactTech?: string;
            creation?: string;
            destinationServiceName?: string;
            expiration?: string;
            type?: OVH.email.domain.MigrationServiceType;
        }
        //email.domain.MigrationServiceType
        export type MigrationServiceType = "EMAIL PRO" | "HOSTED EXCHANGE" | "PRIVATE EXCHANGE" | "PROVIDER EXCHANGE"
        //email.domain.Moderator
        // fullName: email.domain.Moderator.Moderator
        export interface Moderator {
            domain?: string;
            email?: string;
            mailinglist?: string;
        }
        //email.domain.RedirectionGlobal
        // fullName: email.domain.RedirectionGlobal.RedirectionGlobal
        export interface RedirectionGlobal {
            from?: string;
            id?: string;
            to?: string;
        }
        //email.domain.Responder
        // fullName: email.domain.Responder.Responder
        export interface Responder {
            account?: string;
            content?: string;
            copy?: boolean;
            copyTo?: string;
            from?: string;
            to?: string;
        }
        //email.domain.ResponderAccount
        // fullName: email.domain.ResponderAccount.ResponderAccount
        export interface ResponderAccount {
            account?: string;
            content?: string;
            copy?: boolean;
            copyTo?: string;
            from?: string;
            to?: string;
        }
        //email.domain.Rule
        // fullName: email.domain.Rule.Rule
        export interface Rule {
            header?: string;
            id?: number;
            operand?: OVH.domain.DomainFilterOperandEnum;
            value?: string;
        }
        //email.domain.Subscriber
        // fullName: email.domain.Subscriber.Subscriber
        export interface Subscriber {
            domain?: string;
            email?: string;
            mailinglist?: string;
        }
        //email.domain.TaskFilter
        // fullName: email.domain.TaskFilter.TaskFilter
        export interface TaskFilter {
            account?: string;
            action?: string;
            domain?: string;
            id?: number;
            timestamp?: string;
        }
        //email.domain.TaskMl
        // fullName: email.domain.TaskMl.TaskMl
        export interface TaskMl {
            account?: string;
            action?: string;
            date?: string;
            domain?: string;
            id?: number;
            language?: OVH.domain.DomainMlLanguageEnum;
        }
        //email.domain.TaskPop
        // fullName: email.domain.TaskPop.TaskPop
        export interface TaskPop {
            action?: OVH.domain.DomainPopActionEnum;
            date?: string;
            domain?: string;
            id?: number;
            name?: string;
        }
        //email.domain.TaskSpecialAccount
        // fullName: email.domain.TaskSpecialAccount.TaskSpecialAccount
        export interface TaskSpecialAccount {
            account?: string;
            action?: OVH.domain.DomainSpecialAccountActionEnum;
            date?: string;
            domain?: string;
            id?: number;
            type?: OVH.domain.DomainSpecialAccountTypeEnum;
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
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
export namespace zone {
    //zone.NamedResolutionFieldTypeEnum
    export type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
}
// Apis harmony
// path /email
export interface Email {
    domain:  {
        // GET /email/domain
        $get(): Promise<string[]>;
        delegatedAccount:  {
            // GET /email/domain/delegatedAccount
            $get(param?: {accountName?: string, domain?: string}): Promise<string[]>;
            [keys: string]: {
                // GET /email/domain/delegatedAccount/{email}
                $get(): Promise<email.domain.AccountDelegated>;
                // PUT /email/domain/delegatedAccount/{email}
                $put(body?: {body: email.domain.AccountDelegated}): Promise<void>;
                changePassword:  {
                    // POST /email/domain/delegatedAccount/{email}/changePassword
                    $post(body?: {password: string}): Promise<email.domain.TaskPop>;
                }
                filter:  {
                    // GET /email/domain/delegatedAccount/{email}/filter
                    $get(): Promise<string[]>;
                    // POST /email/domain/delegatedAccount/{email}/filter
                    $post(body?: {action: domain.DomainFilterActionEnum, actionParam?: string, active: boolean, header: string, name: string, operand: domain.DomainFilterOperandEnum, priority: number, value: string}): Promise<email.domain.TaskFilter>;
                    [keys: string]: {
                        // DELETE /email/domain/delegatedAccount/{email}/filter/{name}
                        $delete(): Promise<email.domain.TaskFilter[]>;
                        // GET /email/domain/delegatedAccount/{email}/filter/{name}
                        $get(): Promise<email.domain.Filter>;
                        changeActivity:  {
                            // POST /email/domain/delegatedAccount/{email}/filter/{name}/changeActivity
                            $post(body?: {activity: boolean}): Promise<email.domain.TaskFilter>;
                        }
                        changePriority:  {
                            // POST /email/domain/delegatedAccount/{email}/filter/{name}/changePriority
                            $post(body?: {priority: number}): Promise<email.domain.TaskFilter>;
                        }
                        rule:  {
                            // GET /email/domain/delegatedAccount/{email}/filter/{name}/rule
                            $get(): Promise<number[]>;
                            // POST /email/domain/delegatedAccount/{email}/filter/{name}/rule
                            $post(body?: {header: string, operand: domain.DomainFilterOperandEnum, value: string}): Promise<email.domain.TaskFilter>;
                            [keys: string]: {
                                // DELETE /email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}
                                $delete(): Promise<email.domain.TaskFilter[]>;
                                // GET /email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}
                                $get(): Promise<email.domain.Rule>;
                            } | any
                        }
                    } | any
                }
                responder:  {
                    // DELETE /email/domain/delegatedAccount/{email}/responder
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    // GET /email/domain/delegatedAccount/{email}/responder
                    $get(): Promise<email.domain.ResponderAccount>;
                    // POST /email/domain/delegatedAccount/{email}/responder
                    $post(body?: {content: string, copy: boolean, copyTo?: string, from?: string, to?: string}): Promise<email.domain.TaskSpecialAccount>;
                    // PUT /email/domain/delegatedAccount/{email}/responder
                    $put(body?: {body: email.domain.ResponderAccount}): Promise<void>;
                }
                updateUsage:  {
                    // POST /email/domain/delegatedAccount/{email}/updateUsage
                    $post(): Promise<void>;
                }
                usage:  {
                    // POST /email/domain/delegatedAccount/{email}/usage
                    $post(): Promise<domain.DomainUsageAccountStruct>;
                }
            } | any
        }
        mailingListLimits:  {
            // GET /email/domain/mailingListLimits
            $get(param?: {moderatorMessage: boolean}): Promise<domain.DomainMlLimits>;
        }
        [keys: string]: {
            // GET /email/domain/{domain}
            $get(): Promise<email.domain.DomainService>;
            account:  {
                // GET /email/domain/{domain}/account
                $get(param?: {accountName?: string, description?: string}): Promise<string[]>;
                // POST /email/domain/{domain}/account
                $post(body?: {accountName: string, description?: string, password: string, size?: number}): Promise<email.domain.TaskPop>;
                [keys: string]: {
                    // DELETE /email/domain/{domain}/account/{accountName}
                    $delete(): Promise<email.domain.TaskPop>;
                    // GET /email/domain/{domain}/account/{accountName}
                    $get(): Promise<email.domain.Account>;
                    // PUT /email/domain/{domain}/account/{accountName}
                    $put(body?: {body: email.domain.Account}): Promise<void>;
                    changePassword:  {
                        // POST /email/domain/{domain}/account/{accountName}/changePassword
                        $post(body?: {password: string}): Promise<email.domain.TaskPop>;
                    }
                    delegation:  {
                        // GET /email/domain/{domain}/account/{accountName}/delegation
                        $get(): Promise<string[]>;
                        // POST /email/domain/{domain}/account/{accountName}/delegation
                        $post(body?: {accountId: string}): Promise<string>;
                        [keys: string]: {
                            // DELETE /email/domain/{domain}/account/{accountName}/delegation/{accountId}
                            $delete(): Promise<string>;
                            // GET /email/domain/{domain}/account/{accountName}/delegation/{accountId}
                            $get(): Promise<email.domain.Delegation>;
                        } | any
                    }
                    filter:  {
                        // GET /email/domain/{domain}/account/{accountName}/filter
                        $get(): Promise<string[]>;
                        // POST /email/domain/{domain}/account/{accountName}/filter
                        $post(body?: {action: domain.DomainFilterActionEnum, actionParam?: string, active: boolean, header: string, name: string, operand: domain.DomainFilterOperandEnum, priority: number, value: string}): Promise<email.domain.TaskFilter>;
                        [keys: string]: {
                            // DELETE /email/domain/{domain}/account/{accountName}/filter/{name}
                            $delete(): Promise<email.domain.TaskFilter[]>;
                            // GET /email/domain/{domain}/account/{accountName}/filter/{name}
                            $get(): Promise<email.domain.Filter>;
                            changeActivity:  {
                                // POST /email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity
                                $post(body?: {activity: boolean}): Promise<email.domain.TaskFilter>;
                            }
                            changePriority:  {
                                // POST /email/domain/{domain}/account/{accountName}/filter/{name}/changePriority
                                $post(body?: {priority: number}): Promise<email.domain.TaskFilter>;
                            }
                            rule:  {
                                // GET /email/domain/{domain}/account/{accountName}/filter/{name}/rule
                                $get(): Promise<number[]>;
                                // POST /email/domain/{domain}/account/{accountName}/filter/{name}/rule
                                $post(body?: {header: string, operand: domain.DomainFilterOperandEnum, value: string}): Promise<email.domain.TaskFilter>;
                                [keys: string]: {
                                    // DELETE /email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}
                                    $delete(): Promise<email.domain.TaskFilter[]>;
                                    // GET /email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}
                                    $get(): Promise<email.domain.Rule>;
                                } | any
                            }
                        } | any
                    }
                    migrate:  {
                        // GET /email/domain/{domain}/account/{accountName}/migrate
                        $get(param?: {type?: email.domain.MigrationServiceType}): Promise<string[]>;
                        [keys: string]: {
                            // GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}
                            $get(): Promise<email.domain.MigrationService>;
                            destinationEmailAddress:  {
                                // GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress
                                $get(param?: {quota?: number}): Promise<string[]>;
                                [keys: string]: {
                                    // GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}
                                    $get(): Promise<email.domain.MigrationAccount>;
                                    checkMigrate:  {
                                        // GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/checkMigrate
                                        $get(): Promise<email.domain.MigrationCheckStruct>;
                                    }
                                    migrate:  {
                                        // POST /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/migrate
                                        $post(body?: {password: string}): Promise<email.domain.TaskPop>;
                                    }
                                } | any
                            }
                        } | any
                    }
                    updateUsage:  {
                        // POST /email/domain/{domain}/account/{accountName}/updateUsage
                        $post(): Promise<void>;
                    }
                    usage:  {
                        // GET /email/domain/{domain}/account/{accountName}/usage
                        $get(): Promise<domain.DomainUsageAccountStruct>;
                    }
                } | any
            }
            acl:  {
                // GET /email/domain/{domain}/acl
                $get(): Promise<string[]>;
                // POST /email/domain/{domain}/acl
                $post(body?: {accountId: string}): Promise<email.domain.Acl>;
                [keys: string]: {
                    // DELETE /email/domain/{domain}/acl/{accountId}
                    $delete(): Promise<void>;
                    // GET /email/domain/{domain}/acl/{accountId}
                    $get(): Promise<email.domain.Acl>;
                } | any
            }
            changeContact:  {
                // POST /email/domain/{domain}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            changeDnsMXFilter:  {
                // POST /email/domain/{domain}/changeDnsMXFilter
                $post(body?: {customTarget?: string, mxFilter: domain.DomainMXFilterEnum, subDomain?: string}): Promise<void>;
            }
            confirmTermination:  {
                // POST /email/domain/{domain}/confirmTermination
                $post(body?: {commentary?: string, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            dnsMXFilter:  {
                // GET /email/domain/{domain}/dnsMXFilter
                $get(param?: {subDomain?: string}): Promise<domain.DomainMXFilterEnum>;
            }
            dnsMXRecords:  {
                // GET /email/domain/{domain}/dnsMXRecords
                $get(param?: {subDomain?: string}): Promise<string[]>;
            }
            mailingList:  {
                // GET /email/domain/{domain}/mailingList
                $get(param?: {name?: string}): Promise<string[]>;
                // POST /email/domain/{domain}/mailingList
                $post(body?: {language: domain.DomainMlLanguageEnum, name: string, options: domain.DomainMlOptionsStruct, ownerEmail: string, replyTo?: string}): Promise<email.domain.TaskMl>;
                [keys: string]: {
                    // DELETE /email/domain/{domain}/mailingList/{name}
                    $delete(): Promise<email.domain.TaskMl>;
                    // GET /email/domain/{domain}/mailingList/{name}
                    $get(): Promise<email.domain.MailingList>;
                    // PUT /email/domain/{domain}/mailingList/{name}
                    $put(body?: {body: email.domain.MailingList}): Promise<void>;
                    changeOptions:  {
                        // POST /email/domain/{domain}/mailingList/{name}/changeOptions
                        $post(body?: {options: domain.DomainMlOptionsStruct}): Promise<email.domain.TaskMl>;
                    }
                    moderator:  {
                        // GET /email/domain/{domain}/mailingList/{name}/moderator
                        $get(param?: {email?: string}): Promise<string[]>;
                        // POST /email/domain/{domain}/mailingList/{name}/moderator
                        $post(body?: {email: string}): Promise<email.domain.TaskMl>;
                        [keys: string]: {
                            // DELETE /email/domain/{domain}/mailingList/{name}/moderator/{email}
                            $delete(): Promise<email.domain.TaskMl>;
                            // GET /email/domain/{domain}/mailingList/{name}/moderator/{email}
                            $get(): Promise<email.domain.Moderator>;
                        } | any
                    }
                    sendListByEmail:  {
                        // POST /email/domain/{domain}/mailingList/{name}/sendListByEmail
                        $post(body?: {email: string}): Promise<email.domain.TaskMl>;
                    }
                    subscriber:  {
                        // GET /email/domain/{domain}/mailingList/{name}/subscriber
                        $get(param?: {email?: string}): Promise<string[]>;
                        // POST /email/domain/{domain}/mailingList/{name}/subscriber
                        $post(body?: {email: string}): Promise<email.domain.TaskMl>;
                        [keys: string]: {
                            // DELETE /email/domain/{domain}/mailingList/{name}/subscriber/{email}
                            $delete(): Promise<email.domain.TaskMl>;
                            // GET /email/domain/{domain}/mailingList/{name}/subscriber/{email}
                            $get(): Promise<email.domain.Subscriber>;
                        } | any
                    }
                } | any
            }
            migrateDelegationV3toV6:  {
                // POST /email/domain/{domain}/migrateDelegationV3toV6
                $post(): Promise<void>;
            }
            quota:  {
                // GET /email/domain/{domain}/quota
                $get(): Promise<domain.DomainQuota>;
            }
            recommendedDNSRecords:  {
                // GET /email/domain/{domain}/recommendedDNSRecords
                $get(): Promise<domain.zone.Record[]>;
            }
            redirection:  {
                // GET /email/domain/{domain}/redirection
                $get(param?: {from?: string, to?: string}): Promise<string[]>;
                // POST /email/domain/{domain}/redirection
                $post(body?: {from: string, localCopy: boolean, to: string}): Promise<email.domain.TaskSpecialAccount>;
                [keys: string]: {
                    // DELETE /email/domain/{domain}/redirection/{id}
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    // GET /email/domain/{domain}/redirection/{id}
                    $get(): Promise<email.domain.RedirectionGlobal>;
                    changeRedirection:  {
                        // POST /email/domain/{domain}/redirection/{id}/changeRedirection
                        $post(body?: {to: string}): Promise<email.domain.TaskSpecialAccount>;
                    }
                } | any
            }
            responder:  {
                // GET /email/domain/{domain}/responder
                $get(param?: {account?: string}): Promise<string[]>;
                // POST /email/domain/{domain}/responder
                $post(body?: {account: string, content: string, copy: boolean, copyTo?: string, from?: string, to?: string}): Promise<email.domain.TaskSpecialAccount>;
                [keys: string]: {
                    // DELETE /email/domain/{domain}/responder/{account}
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    // GET /email/domain/{domain}/responder/{account}
                    $get(): Promise<email.domain.Responder>;
                    // PUT /email/domain/{domain}/responder/{account}
                    $put(body?: {body: email.domain.Responder}): Promise<void>;
                } | any
            }
            serviceInfos:  {
                // GET /email/domain/{domain}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /email/domain/{domain}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            summary:  {
                // GET /email/domain/{domain}/summary
                $get(): Promise<domain.DomainSummary>;
            }
            task:  {
                account:  {
                    // GET /email/domain/{domain}/task/account
                    $get(param?: {name?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /email/domain/{domain}/task/account/{id}
                        $get(): Promise<email.domain.TaskPop>;
                    } | any
                }
                filter:  {
                    // GET /email/domain/{domain}/task/filter
                    $get(param?: {account?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /email/domain/{domain}/task/filter/{id}
                        $get(): Promise<email.domain.TaskFilter>;
                    } | any
                }
                mailinglist:  {
                    // GET /email/domain/{domain}/task/mailinglist
                    $get(param?: {account?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /email/domain/{domain}/task/mailinglist/{id}
                        $get(): Promise<email.domain.TaskMl>;
                    } | any
                }
                redirection:  {
                    // GET /email/domain/{domain}/task/redirection
                    $get(param?: {account?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /email/domain/{domain}/task/redirection/{id}
                        $get(): Promise<email.domain.TaskSpecialAccount>;
                    } | any
                }
                responder:  {
                    // GET /email/domain/{domain}/task/responder
                    $get(param?: {account?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /email/domain/{domain}/task/responder/{id}
                        $get(): Promise<email.domain.TaskSpecialAccount>;
                    } | any
                }
            }
            terminate:  {
                // POST /email/domain/{domain}/terminate
                $post(): Promise<string>;
            }
        } | any
    }
}
// Api
type PathsEmailDomainGET = '/email/domain' |
  '/email/domain/delegatedAccount' |
  '/email/domain/delegatedAccount/{email}' |
  '/email/domain/delegatedAccount/{email}/filter' |
  '/email/domain/delegatedAccount/{email}/filter/{name}' |
  '/email/domain/delegatedAccount/{email}/filter/{name}/rule' |
  '/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}' |
  '/email/domain/delegatedAccount/{email}/responder' |
  '/email/domain/mailingListLimits' |
  '/email/domain/{domain}' |
  '/email/domain/{domain}/account' |
  '/email/domain/{domain}/account/{accountName}' |
  '/email/domain/{domain}/account/{accountName}/delegation' |
  '/email/domain/{domain}/account/{accountName}/delegation/{accountId}' |
  '/email/domain/{domain}/account/{accountName}/filter' |
  '/email/domain/{domain}/account/{accountName}/filter/{name}' |
  '/email/domain/{domain}/account/{accountName}/filter/{name}/rule' |
  '/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}' |
  '/email/domain/{domain}/account/{accountName}/migrate' |
  '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}' |
  '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress' |
  '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}' |
  '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/checkMigrate' |
  '/email/domain/{domain}/account/{accountName}/usage' |
  '/email/domain/{domain}/acl' |
  '/email/domain/{domain}/acl/{accountId}' |
  '/email/domain/{domain}/dnsMXFilter' |
  '/email/domain/{domain}/dnsMXRecords' |
  '/email/domain/{domain}/mailingList' |
  '/email/domain/{domain}/mailingList/{name}' |
  '/email/domain/{domain}/mailingList/{name}/moderator' |
  '/email/domain/{domain}/mailingList/{name}/moderator/{email}' |
  '/email/domain/{domain}/mailingList/{name}/subscriber' |
  '/email/domain/{domain}/mailingList/{name}/subscriber/{email}' |
  '/email/domain/{domain}/quota' |
  '/email/domain/{domain}/recommendedDNSRecords' |
  '/email/domain/{domain}/redirection' |
  '/email/domain/{domain}/redirection/{id}' |
  '/email/domain/{domain}/responder' |
  '/email/domain/{domain}/responder/{account}' |
  '/email/domain/{domain}/serviceInfos' |
  '/email/domain/{domain}/summary' |
  '/email/domain/{domain}/task/account' |
  '/email/domain/{domain}/task/account/{id}' |
  '/email/domain/{domain}/task/filter' |
  '/email/domain/{domain}/task/filter/{id}' |
  '/email/domain/{domain}/task/mailinglist' |
  '/email/domain/{domain}/task/mailinglist/{id}' |
  '/email/domain/{domain}/task/redirection' |
  '/email/domain/{domain}/task/redirection/{id}' |
  '/email/domain/{domain}/task/responder' |
  '/email/domain/{domain}/task/responder/{id}';

type PathsEmailDomainPUT = '/email/domain/delegatedAccount/{email}' |
  '/email/domain/delegatedAccount/{email}/responder' |
  '/email/domain/{domain}/account/{accountName}' |
  '/email/domain/{domain}/mailingList/{name}' |
  '/email/domain/{domain}/responder/{account}' |
  '/email/domain/{domain}/serviceInfos';

type PathsEmailDomainPOST = '/email/domain/delegatedAccount/{email}/changePassword' |
  '/email/domain/delegatedAccount/{email}/filter' |
  '/email/domain/delegatedAccount/{email}/filter/{name}/changeActivity' |
  '/email/domain/delegatedAccount/{email}/filter/{name}/changePriority' |
  '/email/domain/delegatedAccount/{email}/filter/{name}/rule' |
  '/email/domain/delegatedAccount/{email}/responder' |
  '/email/domain/delegatedAccount/{email}/updateUsage' |
  '/email/domain/delegatedAccount/{email}/usage' |
  '/email/domain/{domain}/account' |
  '/email/domain/{domain}/account/{accountName}/changePassword' |
  '/email/domain/{domain}/account/{accountName}/delegation' |
  '/email/domain/{domain}/account/{accountName}/filter' |
  '/email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity' |
  '/email/domain/{domain}/account/{accountName}/filter/{name}/changePriority' |
  '/email/domain/{domain}/account/{accountName}/filter/{name}/rule' |
  '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/migrate' |
  '/email/domain/{domain}/account/{accountName}/updateUsage' |
  '/email/domain/{domain}/acl' |
  '/email/domain/{domain}/changeContact' |
  '/email/domain/{domain}/changeDnsMXFilter' |
  '/email/domain/{domain}/confirmTermination' |
  '/email/domain/{domain}/mailingList' |
  '/email/domain/{domain}/mailingList/{name}/changeOptions' |
  '/email/domain/{domain}/mailingList/{name}/moderator' |
  '/email/domain/{domain}/mailingList/{name}/sendListByEmail' |
  '/email/domain/{domain}/mailingList/{name}/subscriber' |
  '/email/domain/{domain}/migrateDelegationV3toV6' |
  '/email/domain/{domain}/redirection' |
  '/email/domain/{domain}/redirection/{id}/changeRedirection' |
  '/email/domain/{domain}/responder' |
  '/email/domain/{domain}/terminate';

type PathsEmailDomainDELETE = '/email/domain/delegatedAccount/{email}/filter/{name}' |
  '/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}' |
  '/email/domain/delegatedAccount/{email}/responder' |
  '/email/domain/{domain}/account/{accountName}' |
  '/email/domain/{domain}/account/{accountName}/delegation/{accountId}' |
  '/email/domain/{domain}/account/{accountName}/filter/{name}' |
  '/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}' |
  '/email/domain/{domain}/acl/{accountId}' |
  '/email/domain/{domain}/mailingList/{name}' |
  '/email/domain/{domain}/mailingList/{name}/moderator/{email}' |
  '/email/domain/{domain}/mailingList/{name}/subscriber/{email}' |
  '/email/domain/{domain}/redirection/{id}' |
  '/email/domain/{domain}/responder/{account}';

export class ApiEmailDomain extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the MX service
   * List available services
   */
  public get(path: '/email/domain'): Promise<string[]>;
  /**
   * Domain service
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}', params: {domain: string}): Promise<email.domain.DomainService>;
  /**
   * List the email.domain.Account objects
   * Get accounts
   */
  public get(path: '/email/domain/{domain}/account', params: {domain: string, accountName?: string, description?: string}): Promise<string[]>;
  /**
   * Account List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/account/{accountName}', params: {domain: string, accountName: string}): Promise<email.domain.Account>;
  /**
   * List the email.domain.Delegation objects
   * Get delegations
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/delegation', params: {domain: string, accountName: string}): Promise<string[]>;
  /**
   * Delegation List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/delegation/{accountId}', params: {domain: string, accountName: string, accountId: string}): Promise<email.domain.Delegation>;
  /**
   * List the email.domain.Filter objects
   * Get filters
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/filter', params: {domain: string, accountName: string}): Promise<string[]>;
  /**
   * Filter List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/filter/{name}', params: {domain: string, accountName: string, name: string}): Promise<email.domain.Filter>;
  /**
   * List the email.domain.Rule objects
   * Get rules
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule', params: {domain: string, accountName: string, name: string}): Promise<number[]>;
  /**
   * Rule List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}', params: {domain: string, accountName: string, name: string, id: string}): Promise<email.domain.Rule>;
  /**
   * List the email.domain.MigrationService objects
   * Get migration service
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/migrate', params: {domain: string, accountName: string, type?: OVH.email.domain.MigrationServiceType}): Promise<string[]>;
  /**
   * Migration service
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}', params: {domain: string, accountName: string, destinationServiceName: string}): Promise<email.domain.MigrationService>;
  /**
   * List the email.domain.MigrationAccount objects
   * List of email address available for migration
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress', params: {domain: string, accountName: string, destinationServiceName: string, quota?: number}): Promise<string[]>;
  /**
   * Migration account
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}', params: {domain: string, accountName: string, destinationServiceName: string, destinationEmailAddress: string}): Promise<email.domain.MigrationAccount>;
  /**
   * checkMigrate operations
   * Check if it's possible to migrate
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/checkMigrate', params: {domain: string, accountName: string, destinationServiceName: string, destinationEmailAddress: string}): Promise<email.domain.MigrationCheckStruct>;
  /**
   * usage operations
   * usage of account
   */
  public get(path: '/email/domain/{domain}/account/{accountName}/usage', params: {domain: string, accountName: string}): Promise<domain.DomainUsageAccountStruct>;
  /**
   * List the email.domain.Acl objects
   * Get ACL on your domain
   */
  public get(path: '/email/domain/{domain}/acl', params: {domain: string}): Promise<string[]>;
  /**
   * Email ACL
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/acl/{accountId}', params: {domain: string, accountId: string}): Promise<email.domain.Acl>;
  /**
   * dnsMXFilter operations
   * Domain MX filter
   */
  public get(path: '/email/domain/{domain}/dnsMXFilter', params: {domain: string, subDomain?: string}): Promise<domain.DomainMXFilterEnum>;
  /**
   * dnsMXRecords operations
   * Domain MX records
   */
  public get(path: '/email/domain/{domain}/dnsMXRecords', params: {domain: string, subDomain?: string}): Promise<string[]>;
  /**
   * List the email.domain.MailingList objects
   * Get mailing lists
   */
  public get(path: '/email/domain/{domain}/mailingList', params: {domain: string, name?: string}): Promise<string[]>;
  /**
   * Mailing List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/mailingList/{name}', params: {domain: string, name: string}): Promise<email.domain.MailingList>;
  /**
   * List the email.domain.Moderator objects
   * List of moderators
   */
  public get(path: '/email/domain/{domain}/mailingList/{name}/moderator', params: {domain: string, name: string, email?: string}): Promise<string[]>;
  /**
   * Moderators List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/mailingList/{name}/moderator/{email}', params: {domain: string, name: string, email: string}): Promise<email.domain.Moderator>;
  /**
   * List the email.domain.Subscriber objects
   * List of subscribers
   */
  public get(path: '/email/domain/{domain}/mailingList/{name}/subscriber', params: {domain: string, name: string, email?: string}): Promise<string[]>;
  /**
   * Subscribers List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/mailingList/{name}/subscriber/{email}', params: {domain: string, name: string, email: string}): Promise<email.domain.Subscriber>;
  /**
   * quota operations
   * List all quotas for this domain
   */
  public get(path: '/email/domain/{domain}/quota', params: {domain: string}): Promise<domain.DomainQuota>;
  /**
   * recommendedDNSRecords operations
   * Recommended domain DNS records
   */
  public get(path: '/email/domain/{domain}/recommendedDNSRecords', params: {domain: string}): Promise<domain.zone.Record[]>;
  /**
   * List the email.domain.RedirectionGlobal objects
   * Get redirections
   */
  public get(path: '/email/domain/{domain}/redirection', params: {domain: string, from?: string, to?: string}): Promise<string[]>;
  /**
   * Global Redirection
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/redirection/{id}', params: {domain: string, id: string}): Promise<email.domain.RedirectionGlobal>;
  /**
   * List the email.domain.Responder objects
   * Get responders
   */
  public get(path: '/email/domain/{domain}/responder', params: {domain: string, account?: string}): Promise<string[]>;
  /**
   * Responder
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/responder/{account}', params: {domain: string, account: string}): Promise<email.domain.Responder>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/serviceInfos', params: {domain: string}): Promise<services.Service>;
  /**
   * summary operations
   * Summary for this domain
   */
  public get(path: '/email/domain/{domain}/summary', params: {domain: string}): Promise<domain.DomainSummary>;
  /**
   * List the email.domain.TaskPop objects
   * Get account tasks
   */
  public get(path: '/email/domain/{domain}/task/account', params: {domain: string, name?: string}): Promise<number[]>;
  /**
   * Task Pop List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/task/account/{id}', params: {domain: string, id: string}): Promise<email.domain.TaskPop>;
  /**
   * List the email.domain.TaskFilter objects
   * Get filter tasks
   */
  public get(path: '/email/domain/{domain}/task/filter', params: {domain: string, account?: string}): Promise<number[]>;
  /**
   * Task filter List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/task/filter/{id}', params: {domain: string, id: string}): Promise<email.domain.TaskFilter>;
  /**
   * List the email.domain.TaskMl objects
   * Get Mailing List tasks
   */
  public get(path: '/email/domain/{domain}/task/mailinglist', params: {domain: string, account?: string}): Promise<number[]>;
  /**
   * Task Mailing List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/task/mailinglist/{id}', params: {domain: string, id: string}): Promise<email.domain.TaskMl>;
  /**
   * List the email.domain.TaskSpecialAccount objects
   * Get redirection tasks
   */
  public get(path: '/email/domain/{domain}/task/redirection', params: {domain: string, account?: string}): Promise<number[]>;
  /**
   * Task special account List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/task/redirection/{id}', params: {domain: string, id: string}): Promise<email.domain.TaskSpecialAccount>;
  /**
   * List the email.domain.TaskSpecialAccount objects
   * Get responder tasks
   */
  public get(path: '/email/domain/{domain}/task/responder', params: {domain: string, account?: string}): Promise<number[]>;
  /**
   * Task special account List
   * Get this object properties
   */
  public get(path: '/email/domain/{domain}/task/responder/{id}', params: {domain: string, id: string}): Promise<email.domain.TaskSpecialAccount>;
  /**
   * List the email.domain.AccountDelegated objects
   * Delegated emails
   */
  public get(path: '/email/domain/delegatedAccount', params: {accountName?: string, domain?: string}): Promise<string[]>;
  /**
   * Account List
   * Get this object properties
   */
  public get(path: '/email/domain/delegatedAccount/{email}', params: {email: string}): Promise<email.domain.AccountDelegated>;
  /**
   * List the email.domain.Filter objects
   * Get filters
   */
  public get(path: '/email/domain/delegatedAccount/{email}/filter', params: {email: string}): Promise<string[]>;
  /**
   * Filter List
   * Get this object properties
   */
  public get(path: '/email/domain/delegatedAccount/{email}/filter/{name}', params: {email: string, name: string}): Promise<email.domain.Filter>;
  /**
   * List the email.domain.Rule objects
   * Get rules
   */
  public get(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule', params: {email: string, name: string}): Promise<number[]>;
  /**
   * Rule List
   * Get this object properties
   */
  public get(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}', params: {email: string, name: string, id: string}): Promise<email.domain.Rule>;
  /**
   * Responder of account
   * Get this object properties
   */
  public get(path: '/email/domain/delegatedAccount/{email}/responder', params: {email: string}): Promise<email.domain.ResponderAccount>;
  /**
   * Get limits of mailing list
   * Get limits of mailing list
   */
  public get(path: '/email/domain/mailingListLimits', params: {moderatorMessage: boolean}): Promise<domain.DomainMlLimits>;
  public get(path: PathsEmailDomainGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Account List
   * Alter this object properties
   */
  public put(path: '/email/domain/{domain}/account/{accountName}', params: {domain: string, accountName: string, description?: string, email?: string, isBlocked?: boolean, size?: number}): Promise<void>;
  /**
   * Mailing List
   * Alter this object properties
   */
  public put(path: '/email/domain/{domain}/mailingList/{name}', params: {domain: string, name: string, id?: number, language?: OVH.domain.DomainMlLanguageEnum, nbSubscribers?: number, nbSubscribersUpdateDate?: string, options?: OVH.domain.DomainMlOptionsStruct, ownerEmail?: string, replyTo?: string}): Promise<void>;
  /**
   * Responder
   * Alter this object properties
   */
  public put(path: '/email/domain/{domain}/responder/{account}', params: {domain: string, account: string, content?: string, copy?: boolean, copyTo?: string, from?: string, to?: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/email/domain/{domain}/serviceInfos', params: {domain: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Account List
   * Alter this object properties
   */
  public put(path: '/email/domain/delegatedAccount/{email}', params: {email: string, accountName?: string, allowedAccountSize?: number[], description?: string, domain?: string, isBlocked?: boolean, size?: number}): Promise<void>;
  /**
   * Responder of account
   * Alter this object properties
   */
  public put(path: '/email/domain/delegatedAccount/{email}/responder', params: {email: string, account?: string, content?: string, copy?: boolean, copyTo?: string, from?: string, to?: string}): Promise<void>;
  public put(path: PathsEmailDomainPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the email.domain.Account objects
   * Create new mailbox in server
   */
  public post(path: '/email/domain/{domain}/account', params: {domain: string, accountName: string, description?: string, password: string, size?: number}): Promise<email.domain.TaskPop>;
  /**
   * changePassword operations
   * Change mailbox password (length : [9;30], no space at begin and end, no accent)
   */
  public post(path: '/email/domain/{domain}/account/{accountName}/changePassword', params: {domain: string, accountName: string, password: string}): Promise<email.domain.TaskPop>;
  /**
   * List the email.domain.Delegation objects
   * Create delegation for this account
   */
  public post(path: '/email/domain/{domain}/account/{accountName}/delegation', params: {domain: string, accountName: string, accountId: string}): Promise<string>;
  /**
   * List the email.domain.Filter objects
   * Create new filter for account
   */
  public post(path: '/email/domain/{domain}/account/{accountName}/filter', params: {domain: string, accountName: string, action: OVH.domain.DomainFilterActionEnum, actionParam?: string, active: boolean, header: string, name: string, operand: OVH.domain.DomainFilterOperandEnum, priority: number, value: string}): Promise<email.domain.TaskFilter>;
  /**
   * changeActivity operations
   * Change filter activity
   */
  public post(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity', params: {domain: string, accountName: string, name: string, activity: boolean}): Promise<email.domain.TaskFilter>;
  /**
   * changePriority operations
   * Change filter priority
   */
  public post(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/changePriority', params: {domain: string, accountName: string, name: string, priority: number}): Promise<email.domain.TaskFilter>;
  /**
   * List the email.domain.Rule objects
   * Create new rule for filter
   */
  public post(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule', params: {domain: string, accountName: string, name: string, header: string, operand: OVH.domain.DomainFilterOperandEnum, value: string}): Promise<email.domain.TaskFilter>;
  /**
   * migrate operations
   * Migrate account to destination account
   */
  public post(path: '/email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/migrate', params: {domain: string, accountName: string, destinationServiceName: string, destinationEmailAddress: string, password: string}): Promise<email.domain.TaskPop>;
  /**
   * updateUsage operations
   * Update usage of account
   */
  public post(path: '/email/domain/{domain}/account/{accountName}/updateUsage', params: {domain: string, accountName: string}): Promise<void>;
  /**
   * List the email.domain.Acl objects
   * Create new ACL
   */
  public post(path: '/email/domain/{domain}/acl', params: {domain: string, accountId: string}): Promise<email.domain.Acl>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/email/domain/{domain}/changeContact', params: {domain: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * changeDnsMXFilter operations
   * Change MX filter, so change MX DNS records
   */
  public post(path: '/email/domain/{domain}/changeDnsMXFilter', params: {domain: string, customTarget?: string, mxFilter: OVH.domain.DomainMXFilterEnum, subDomain?: string}): Promise<void>;
  /**
   * confirmTermination operations
   * Confirm termination of your email service
   */
  public post(path: '/email/domain/{domain}/confirmTermination', params: {domain: string, commentary?: string, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * List the email.domain.MailingList objects
   * Create new mailingList
   */
  public post(path: '/email/domain/{domain}/mailingList', params: {domain: string, language: OVH.domain.DomainMlLanguageEnum, name: string, options: OVH.domain.DomainMlOptionsStruct, ownerEmail: string, replyTo?: string}): Promise<email.domain.TaskMl>;
  /**
   * changeOptions operations
   * Change mailing list options
   */
  public post(path: '/email/domain/{domain}/mailingList/{name}/changeOptions', params: {domain: string, name: string, options: OVH.domain.DomainMlOptionsStruct}): Promise<email.domain.TaskMl>;
  /**
   * List the email.domain.Moderator objects
   * Add moderator to mailing list
   */
  public post(path: '/email/domain/{domain}/mailingList/{name}/moderator', params: {domain: string, name: string, email: string}): Promise<email.domain.TaskMl>;
  /**
   * sendListByEmail operations
   * Send moderators list and subscribers list of this mailing list by email
   */
  public post(path: '/email/domain/{domain}/mailingList/{name}/sendListByEmail', params: {domain: string, name: string, email: string}): Promise<email.domain.TaskMl>;
  /**
   * List the email.domain.Subscriber objects
   * Add subscriber to mailing list
   */
  public post(path: '/email/domain/{domain}/mailingList/{name}/subscriber', params: {domain: string, name: string, email: string}): Promise<email.domain.TaskMl>;
  /**
   * migrateDelegationV3toV6 operations
   * Create delegation of domain with same nic than V3
   */
  public post(path: '/email/domain/{domain}/migrateDelegationV3toV6', params: {domain: string}): Promise<void>;
  /**
   * List the email.domain.RedirectionGlobal objects
   * Create new redirection in server
   */
  public post(path: '/email/domain/{domain}/redirection', params: {domain: string, from: string, localCopy: boolean, to: string}): Promise<email.domain.TaskSpecialAccount>;
  /**
   * changeRedirection operations
   * Change redirection
   */
  public post(path: '/email/domain/{domain}/redirection/{id}/changeRedirection', params: {domain: string, id: string, to: string}): Promise<email.domain.TaskSpecialAccount>;
  /**
   * List the email.domain.Responder objects
   * Create new responder in server
   */
  public post(path: '/email/domain/{domain}/responder', params: {domain: string, account: string, content: string, copy: boolean, copyTo?: string, from?: string, to?: string}): Promise<email.domain.TaskSpecialAccount>;
  /**
   * terminate operations
   * Terminate your email service
   */
  public post(path: '/email/domain/{domain}/terminate', params: {domain: string}): Promise<string>;
  /**
   * changePassword operations
   * Change mailbox password (length : [9;30], no space at begin and end, no accent)
   */
  public post(path: '/email/domain/delegatedAccount/{email}/changePassword', params: {email: string, password: string}): Promise<email.domain.TaskPop>;
  /**
   * List the email.domain.Filter objects
   * Create new filter for account
   */
  public post(path: '/email/domain/delegatedAccount/{email}/filter', params: {email: string, action: OVH.domain.DomainFilterActionEnum, actionParam?: string, active: boolean, header: string, name: string, operand: OVH.domain.DomainFilterOperandEnum, priority: number, value: string}): Promise<email.domain.TaskFilter>;
  /**
   * changeActivity operations
   * Change filter activity
   */
  public post(path: '/email/domain/delegatedAccount/{email}/filter/{name}/changeActivity', params: {email: string, name: string, activity: boolean}): Promise<email.domain.TaskFilter>;
  /**
   * changePriority operations
   * Change filter priority
   */
  public post(path: '/email/domain/delegatedAccount/{email}/filter/{name}/changePriority', params: {email: string, name: string, priority: number}): Promise<email.domain.TaskFilter>;
  /**
   * List the email.domain.Rule objects
   * Create new rule for filter
   */
  public post(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule', params: {email: string, name: string, header: string, operand: OVH.domain.DomainFilterOperandEnum, value: string}): Promise<email.domain.TaskFilter>;
  /**
   * Responder of account
   * Create new responder in server
   */
  public post(path: '/email/domain/delegatedAccount/{email}/responder', params: {email: string, content: string, copy: boolean, copyTo?: string, from?: string, to?: string}): Promise<email.domain.TaskSpecialAccount>;
  /**
   * updateUsage operations
   * Update usage of account
   */
  public post(path: '/email/domain/delegatedAccount/{email}/updateUsage', params: {email: string}): Promise<void>;
  /**
   * usage operations
   * usage of account
   */
  public post(path: '/email/domain/delegatedAccount/{email}/usage', params: {email: string}): Promise<domain.DomainUsageAccountStruct>;
  public post(path: PathsEmailDomainPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Account List
   * Delete an existing mailbox in server
   */
  public delete(path: '/email/domain/{domain}/account/{accountName}', params: {domain: string, accountName: string}): Promise<email.domain.TaskPop>;
  /**
   * Delegation List
   * Delete an existing delegation
   */
  public delete(path: '/email/domain/{domain}/account/{accountName}/delegation/{accountId}', params: {domain: string, accountName: string, accountId: string}): Promise<string>;
  /**
   * Filter List
   * Delete an existing filter
   */
  public delete(path: '/email/domain/{domain}/account/{accountName}/filter/{name}', params: {domain: string, accountName: string, name: string}): Promise<email.domain.TaskFilter[]>;
  /**
   * Rule List
   * Delete an existing filter
   */
  public delete(path: '/email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}', params: {domain: string, accountName: string, name: string, id: string}): Promise<email.domain.TaskFilter[]>;
  /**
   * Email ACL
   * Delete ACL
   */
  public delete(path: '/email/domain/{domain}/acl/{accountId}', params: {domain: string, accountId: string}): Promise<void>;
  /**
   * Mailing List
   * Delete existing Mailing list
   */
  public delete(path: '/email/domain/{domain}/mailingList/{name}', params: {domain: string, name: string}): Promise<email.domain.TaskMl>;
  /**
   * Moderators List
   * Delete existing moderator
   */
  public delete(path: '/email/domain/{domain}/mailingList/{name}/moderator/{email}', params: {domain: string, name: string, email: string}): Promise<email.domain.TaskMl>;
  /**
   * Subscribers List
   * Delete existing subscriber
   */
  public delete(path: '/email/domain/{domain}/mailingList/{name}/subscriber/{email}', params: {domain: string, name: string, email: string}): Promise<email.domain.TaskMl>;
  /**
   * Global Redirection
   * Delete an existing redirection in server
   */
  public delete(path: '/email/domain/{domain}/redirection/{id}', params: {domain: string, id: string}): Promise<email.domain.TaskSpecialAccount>;
  /**
   * Responder
   * Delete an existing responder in server
   */
  public delete(path: '/email/domain/{domain}/responder/{account}', params: {domain: string, account: string}): Promise<email.domain.TaskSpecialAccount>;
  /**
   * Filter List
   * Delete an existing filter
   */
  public delete(path: '/email/domain/delegatedAccount/{email}/filter/{name}', params: {email: string, name: string}): Promise<email.domain.TaskFilter[]>;
  /**
   * Rule List
   * Delete an existing filter
   */
  public delete(path: '/email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}', params: {email: string, name: string, id: string}): Promise<email.domain.TaskFilter[]>;
  /**
   * Responder of account
   * Delete an existing responder in server
   */
  public delete(path: '/email/domain/delegatedAccount/{email}/responder', params: {email: string}): Promise<email.domain.TaskSpecialAccount>;
  public delete(path: PathsEmailDomainDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}