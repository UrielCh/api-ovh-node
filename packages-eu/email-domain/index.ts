import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /email/domain Models
 * Source: https://eu.api.ovh.com/1.0/email/domain.json
 */
export namespace domain {
    /**
     * Possible values for filter action
     * type fullname: domain.DomainFilterActionEnum
     */
    export type DomainFilterActionEnum = "accept" | "account" | "delete" | "redirect"
    /**
     * Possible values for filter operation
     * type fullname: domain.DomainFilterOperandEnum
     */
    export type DomainFilterOperandEnum = "checkspf" | "contains" | "noContains"
    /**
     * Possible values for MX filter
     * type fullname: domain.DomainMXFilterEnum
     */
    export type DomainMXFilterEnum = "CUSTOM" | "FULL_FILTERING" | "NO_FILTERING" | "REDIRECT" | "SIMPLE_FILTERING"
    /**
     * Possible values for mailing list language
     * type fullname: domain.DomainMlLanguageEnum
     */
    export type DomainMlLanguageEnum = "de" | "en" | "es" | "fr" | "it" | "nl" | "pl" | "pt"
    /**
     * Structure of mailinglist limits
     * interface fullName: domain.DomainMlLimits.DomainMlLimits
     */
    export interface DomainMlLimits {
        subscribers: number;
    }
    /**
     * Structure of imapCopy
     * interface fullName: domain.DomainMlOptionsStruct.DomainMlOptionsStruct
     */
    export interface DomainMlOptionsStruct {
        moderatorMessage: boolean;
        subscribeByModerator: boolean;
        usersPostOnly: boolean;
    }
    /**
     * Possible values for pop action task
     * type fullname: domain.DomainPopActionEnum
     */
    export type DomainPopActionEnum = "addAccount" | "changeAccount" | "changePassword" | "deleteAccount" | "internalMigration" | "migration" | "temporaryTask" | "unknown"
    /**
     * Values of quota account (pop, mailing list, redirection, responder and big pop)
     * interface fullName: domain.DomainQuota.DomainQuota
     */
    export interface DomainQuota {
        account: number;
        alias: number;
        mailingList: number;
        redirection: number;
        responder: number;
    }
    /**
     * Possible values for pop action task
     * type fullname: domain.DomainSpecialAccountActionEnum
     */
    export type DomainSpecialAccountActionEnum = "add" | "change" | "delete"
    /**
     * Possible type task
     * type fullname: domain.DomainSpecialAccountTypeEnum
     */
    export type DomainSpecialAccountTypeEnum = "25g" | "alias" | "delete" | "filter" | "forward" | "responder"
    /**
     * Possible values for status domain
     * type fullname: domain.DomainStatusEnum
     */
    export type DomainStatusEnum = "close" | "ok" | "readOnly" | "unknown"
    /**
     * Values of number account (account, mailing list, redirection and responder)
     * interface fullName: domain.DomainSummary.DomainSummary
     */
    export interface DomainSummary {
        account: number;
        mailingList: number;
        redirection: number;
        responder: number;
    }
    /**
     * Structure of usage account
     * interface fullName: domain.DomainUsageAccountStruct.DomainUsageAccountStruct
     */
    export interface DomainUsageAccountStruct {
        date?: string;
        emailCount?: number;
        quota?: number;
    }
    export namespace zone {
        /**
         * Zone resource records
         * interface fullName: domain.zone.Record.Record
         */
        export interface Record {
            fieldType: zoneNamedResolutionFieldTypeEnum;
            id: number;
            subDomain?: string;
            target: string;
            ttl?: number;
            zone: string;
        }
        /**
         * Resource record name
         * type fullname: domain.zone.RecordTypeEnum
         */
        export type RecordTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "DNAME" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
    }
}
export namespace email {
    export namespace domain {
        /**
         * Account List
         * interface fullName: email.domain.Account.Account
         */
        export interface Account {
            accountName: string;
            description: string;
            domain: string;
            email: string;
            isBlocked: boolean;
            size: number;
        }
        /**
         * Account List
         * interface fullName: email.domain.AccountDelegated.AccountDelegated
         */
        export interface AccountDelegated {
            accountName: string;
            allowedAccountSize?: number[];
            description: string;
            domain: string;
            email: string;
            isBlocked: boolean;
            size: number;
        }
        /**
         * Email ACL
         * interface fullName: email.domain.Acl.Acl
         */
        export interface Acl {
            accountId: string;
        }
        /**
         * Delegation List
         * interface fullName: email.domain.Delegation.Delegation
         */
        export interface Delegation {
            accountId: string;
        }
        /**
         * Email diagnoses
         * interface fullName: email.domain.Diagnose.Diagnose
         */
        export interface Diagnose {
            date: string;
            function: email.domain.DomainDiagnoseFunctionEnum;
            id: number;
            name?: string;
            result?: email.domain.DomainDiagnoseResultEnum;
            trace?: email.domain.DomainDiagnoseTraceStruct<email.domain.DomainDiagnoseResultEnum>[];
        }
        /**
         * Result value for diagnose
         * type fullname: email.domain.DiagnoseEnum
         */
        export type DiagnoseEnum = "checkFail" | "invalid" | "none" | "unknown" | "valid"
        /**
         * Function of diagnose
         * type fullname: email.domain.DomainDiagnoseFunctionEnum
         */
        export type DomainDiagnoseFunctionEnum = "MX"
        /**
         * Result of diagnose
         * type fullname: email.domain.DomainDiagnoseResultEnum
         */
        export type DomainDiagnoseResultEnum = "CUSTOM" | "DEPRECATED" | "KO" | "OK"
        /**
         * Test and result, with proper test strings
         * interface fullName: email.domain.DomainDiagnoseTraceStruct.DomainDiagnoseTraceStruct
         */
        export interface DomainDiagnoseTraceStruct<T> {
            result: T;
            test: string;
        }
        /**
         * Domain service
         * interface fullName: email.domain.DomainService.DomainService
         */
        export interface DomainService {
            allowedAccountSize?: number[];
            creationDate?: string;
            domain: string;
            filerz?: number;
            isMXValid: email.domain.DiagnoseEnum;
            isSPFValid: email.domain.DiagnoseEnum;
            linkTo?: string;
            migratedMXPlanServiceName?: string;
            offer?: string;
            status: domainDomainStatusEnum;
        }
        /**
         * Domain service
         * interface fullName: email.domain.DomainServiceWithIAM.DomainServiceWithIAM
         */
        export interface DomainServiceWithIAM {
            allowedAccountSize?: number[];
            creationDate?: string;
            domain: string;
            filerz?: number;
            iam?: iam.ResourceMetadata;
            isMXValid: email.domain.DiagnoseEnum;
            isSPFValid: email.domain.DiagnoseEnum;
            linkTo?: string;
            migratedMXPlanServiceName?: string;
            offer?: string;
            status: domainDomainStatusEnum;
        }
        /**
         * Filter List
         * interface fullName: email.domain.Filter.Filter
         */
        export interface Filter {
            action?: domainDomainFilterActionEnum;
            actionParam?: string;
            active: boolean;
            domain: string;
            name: string;
            pop: string;
            priority: number;
        }
        /**
         * Mailing List
         * interface fullName: email.domain.MailingList.MailingList
         */
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
        /**
         * Migration account
         * interface fullName: email.domain.MigrationAccount.MigrationAccount
         */
        export interface MigrationAccount {
            destinationEmailAddress: string;
            quota: number;
        }
        /**
         * Result code of check migration
         * type fullname: email.domain.MigrationCheckCodeEnum
         */
        export type MigrationCheckCodeEnum = "ACCOUNT_EMPTY" | "ACCOUNT_INPROGRESS" | "DELEGATION_EXIST" | "DOMAIN_EMPTY" | "FILTER_EXIST" | "FORWARD_EXIST" | "FORWARD_LOCAL" | "MAILINGLIST_EXIST" | "MAILINGLIST_INPROGRESS" | "MAILPROXY_BAD_INFRA" | "MAILPROXY_EMPTY" | "MAILPROXY_INPROGRESS" | "MAILPROXY_RESERVATION" | "REDIRECTION_INPROGRESS" | "RESPONDER_EXIST" | "RESPONDER_INPROGRESS" | "UNKNOW"
        /**
         * Check Migration result
         * interface fullName: email.domain.MigrationCheckResultStruct.MigrationCheckResultStruct
         */
        export interface MigrationCheckResultStruct {
            code: email.domain.MigrationCheckCodeEnum;
            details?: string;
        }
        /**
         * Check Migration result
         * interface fullName: email.domain.MigrationCheckStruct.MigrationCheckStruct
         */
        export interface MigrationCheckStruct {
            alias?: string[];
            error?: email.domain.MigrationCheckResultStruct[];
            filter?: string[];
            forward?: string[];
            warning?: email.domain.MigrationCheckResultStruct[];
        }
        /**
         * Migration service
         * interface fullName: email.domain.MigrationService.MigrationService
         */
        export interface MigrationService {
            contactAdmin: string;
            contactBilling: string;
            contactTech: string;
            creation: string;
            destinationServiceName: string;
            expiration: string;
            type: email.domain.MigrationServiceType;
        }
        /**
         * Types of migration service
         * type fullname: email.domain.MigrationServiceType
         */
        export type MigrationServiceType = "EMAIL PRO" | "HOSTED EXCHANGE" | "PRIVATE EXCHANGE" | "PROVIDER EXCHANGE"
        /**
         * Moderators List
         * interface fullName: email.domain.Moderator.Moderator
         */
        export interface Moderator {
            domain: string;
            email: string;
            mailinglist: string;
        }
        /**
         * Change redirection
         * interface fullName: email.domain.RedirectionChangeRedirectionCreation.RedirectionChangeRedirectionCreation
         */
        export interface RedirectionChangeRedirectionCreation {
            to: string;
        }
        /**
         * Create redirection
         * interface fullName: email.domain.RedirectionCreation.RedirectionCreation
         */
        export interface RedirectionCreation {
            from: string;
            localCopy: boolean;
            to: string;
        }
        /**
         * Global Redirection
         * interface fullName: email.domain.RedirectionGlobal.RedirectionGlobal
         */
        export interface RedirectionGlobal {
            from: string;
            id: string;
            to: string;
        }
        /**
         * Responder
         * interface fullName: email.domain.Responder.Responder
         */
        export interface Responder {
            account: string;
            content: string;
            copy: boolean;
            copyTo?: string;
            from?: string;
            to?: string;
        }
        /**
         * Responder of account
         * interface fullName: email.domain.ResponderAccount.ResponderAccount
         */
        export interface ResponderAccount {
            account: string;
            content: string;
            copy: boolean;
            copyTo?: string;
            from?: string;
            to?: string;
        }
        /**
         * Rule List
         * interface fullName: email.domain.Rule.Rule
         */
        export interface Rule {
            header: string;
            id: number;
            operand: domainDomainFilterOperandEnum;
            value: string;
        }
        /**
         * Subscribers List
         * interface fullName: email.domain.Subscriber.Subscriber
         */
        export interface Subscriber {
            domain: string;
            email: string;
            mailinglist: string;
        }
        /**
         * Task filter List
         * interface fullName: email.domain.TaskFilter.TaskFilter
         */
        export interface TaskFilter {
            account: string;
            action: string;
            domain: string;
            id: number;
            timestamp: string;
        }
        /**
         * Task Mailing List
         * interface fullName: email.domain.TaskMl.TaskMl
         */
        export interface TaskMl {
            account: string;
            action: string;
            date: string;
            domain: string;
            id: number;
            language: domainDomainMlLanguageEnum;
        }
        /**
         * Task Pop List
         * interface fullName: email.domain.TaskPop.TaskPop
         */
        export interface TaskPop {
            action: domainDomainPopActionEnum;
            date: string;
            domain: string;
            id: number;
            name: string;
        }
        /**
         * Task special account List
         * interface fullName: email.domain.TaskSpecialAccount.TaskSpecialAccount
         */
        export interface TaskSpecialAccount {
            account: string;
            action: domainDomainSpecialAccountActionEnum;
            date: string;
            domain: string;
            id: string;
            type: domainDomainSpecialAccountTypeEnum;
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
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
export namespace zone {
    /**
     * Resource record fieldType
     * type fullname: zone.NamedResolutionFieldTypeEnum
     */
    export type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "DNAME" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
}

/**
 * END API /email/domain Models
 */
export function proxyEmailDomain(ovhEngine: OvhRequestable): Email {
    return buildOvhProxy(ovhEngine, '/email');
}
export default proxyEmailDomain;
/**
 * Api model for /email/domain
 */
export interface Email {
    domain: {
        /**
         * List available services
         * GET /email/domain
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        delegatedAccount: {
            /**
             * Delegated emails
             * GET /email/domain/delegatedAccount
             */
            $get(params?: { accountName?: string, domain?: string }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(email: string): {
                /**
                 * Get this object properties
                 * GET /email/domain/delegatedAccount/{email}
                 */
                $get(): Promise<email.domain.AccountDelegated>;
                /**
                 * Alter this object properties
                 * PUT /email/domain/delegatedAccount/{email}
                 */
                $put(params?: { accountName?: string, allowedAccountSize?: number[], description?: string, domain?: string, email?: string, isBlocked?: boolean, size?: number }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                changePassword: {
                    /**
                     * Change mailbox password (length : [9;30], no space at begin and end, no accent)
                     * POST /email/domain/delegatedAccount/{email}/changePassword
                     */
                    $post(params: { password: string }): Promise<email.domain.TaskPop>;
                }
                filter: {
                    /**
                     * Get filters
                     * GET /email/domain/delegatedAccount/{email}/filter
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create new filter for account
                     * POST /email/domain/delegatedAccount/{email}/filter
                     */
                    $post(params: { action: domainDomainFilterActionEnum, actionParam?: string, active: boolean, header: string, name: string, operand: domainDomainFilterOperandEnum, priority: number, value: string }): Promise<email.domain.TaskFilter>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(name: string): {
                        /**
                         * Delete an existing filter
                         * DELETE /email/domain/delegatedAccount/{email}/filter/{name}
                         */
                        $delete(): Promise<email.domain.TaskFilter[]>;
                        /**
                         * Get this object properties
                         * GET /email/domain/delegatedAccount/{email}/filter/{name}
                         */
                        $get(): Promise<email.domain.Filter>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        changeActivity: {
                            /**
                             * Change filter activity
                             * POST /email/domain/delegatedAccount/{email}/filter/{name}/changeActivity
                             */
                            $post(params: { activity: boolean }): Promise<email.domain.TaskFilter>;
                        }
                        changePriority: {
                            /**
                             * Change filter priority
                             * POST /email/domain/delegatedAccount/{email}/filter/{name}/changePriority
                             */
                            $post(params: { priority: number }): Promise<email.domain.TaskFilter>;
                        }
                        rule: {
                            /**
                             * Get rules
                             * GET /email/domain/delegatedAccount/{email}/filter/{name}/rule
                             */
                            $get(): Promise<number[]>;
                            /**
                             * Create new rule for filter
                             * POST /email/domain/delegatedAccount/{email}/filter/{name}/rule
                             */
                            $post(params: { header: string, operand: domainDomainFilterOperandEnum, value: string }): Promise<email.domain.TaskFilter>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(id: number): {
                                /**
                                 * Delete an existing filter
                                 * DELETE /email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}
                                 */
                                $delete(): Promise<email.domain.TaskFilter[]>;
                                /**
                                 * Get this object properties
                                 * GET /email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}
                                 */
                                $get(): Promise<email.domain.Rule>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    };
                }
                responder: {
                    /**
                     * Delete an existing responder in server
                     * DELETE /email/domain/delegatedAccount/{email}/responder
                     */
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    /**
                     * Get this object properties
                     * GET /email/domain/delegatedAccount/{email}/responder
                     */
                    $get(): Promise<email.domain.ResponderAccount>;
                    /**
                     * Create new responder in server
                     * POST /email/domain/delegatedAccount/{email}/responder
                     */
                    $post(params: { content: string, copy: boolean, copyTo?: string, from?: string, to?: string }): Promise<email.domain.TaskSpecialAccount>;
                    /**
                     * Alter this object properties
                     * PUT /email/domain/delegatedAccount/{email}/responder
                     */
                    $put(params?: { account?: string, content?: string, copy?: boolean, copyTo?: string, from?: string, to?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                updateUsage: {
                    /**
                     * Update usage of account
                     * POST /email/domain/delegatedAccount/{email}/updateUsage
                     */
                    $post(): Promise<void>;
                }
                usage: {
                    /**
                     * usage of account
                     * POST /email/domain/delegatedAccount/{email}/usage
                     */
                    $post(): Promise<domain.DomainUsageAccountStruct>;
                }
            };
        }
        mailingListLimits: {
            /**
             * Get limits of mailing list
             * GET /email/domain/mailingListLimits
             */
            $get(params: { moderatorMessage: boolean }): Promise<domain.DomainMlLimits>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(domain: string): {
            /**
             * Get this object properties
             * GET /email/domain/{domain}
             */
            $get(): Promise<email.domain.DomainService>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            account: {
                /**
                 * Get accounts
                 * GET /email/domain/{domain}/account
                 */
                $get(params?: { accountName?: string, description?: string }): Promise<string[]>;
                /**
                 * Create new mailbox in server
                 * POST /email/domain/{domain}/account
                 */
                $post(params: { accountName: string, description?: string, password: string, size?: number }): Promise<email.domain.TaskPop>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(accountName: string): {
                    /**
                     * Delete an existing mailbox in server
                     * DELETE /email/domain/{domain}/account/{accountName}
                     */
                    $delete(): Promise<email.domain.TaskPop>;
                    /**
                     * Get this object properties
                     * GET /email/domain/{domain}/account/{accountName}
                     */
                    $get(): Promise<email.domain.Account>;
                    /**
                     * Alter this object properties
                     * PUT /email/domain/{domain}/account/{accountName}
                     */
                    $put(params?: { accountName?: string, description?: string, domain?: string, email?: string, isBlocked?: boolean, size?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Change mailbox password (length : [9;30], no space at begin and end, no accent)
                         * POST /email/domain/{domain}/account/{accountName}/changePassword
                         */
                        $post(params: { password: string }): Promise<email.domain.TaskPop>;
                    }
                    delegation: {
                        /**
                         * Get delegations
                         * GET /email/domain/{domain}/account/{accountName}/delegation
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create delegation for this account
                         * POST /email/domain/{domain}/account/{accountName}/delegation
                         */
                        $post(params: { accountId: string }): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(accountId: string): {
                            /**
                             * Delete an existing delegation
                             * DELETE /email/domain/{domain}/account/{accountName}/delegation/{accountId}
                             */
                            $delete(): Promise<string>;
                            /**
                             * Get this object properties
                             * GET /email/domain/{domain}/account/{accountName}/delegation/{accountId}
                             */
                            $get(): Promise<email.domain.Delegation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    filter: {
                        /**
                         * Get filters
                         * GET /email/domain/{domain}/account/{accountName}/filter
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create new filter for account
                         * POST /email/domain/{domain}/account/{accountName}/filter
                         */
                        $post(params: { action: domainDomainFilterActionEnum, actionParam?: string, active: boolean, header: string, name: string, operand: domainDomainFilterOperandEnum, priority: number, value: string }): Promise<email.domain.TaskFilter>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(name: string): {
                            /**
                             * Delete an existing filter
                             * DELETE /email/domain/{domain}/account/{accountName}/filter/{name}
                             */
                            $delete(): Promise<email.domain.TaskFilter[]>;
                            /**
                             * Get this object properties
                             * GET /email/domain/{domain}/account/{accountName}/filter/{name}
                             */
                            $get(): Promise<email.domain.Filter>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            changeActivity: {
                                /**
                                 * Change filter activity
                                 * POST /email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity
                                 */
                                $post(params: { activity: boolean }): Promise<email.domain.TaskFilter>;
                            }
                            changePriority: {
                                /**
                                 * Change filter priority
                                 * POST /email/domain/{domain}/account/{accountName}/filter/{name}/changePriority
                                 */
                                $post(params: { priority: number }): Promise<email.domain.TaskFilter>;
                            }
                            rule: {
                                /**
                                 * Get rules
                                 * GET /email/domain/{domain}/account/{accountName}/filter/{name}/rule
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Create new rule for filter
                                 * POST /email/domain/{domain}/account/{accountName}/filter/{name}/rule
                                 */
                                $post(params: { header: string, operand: domainDomainFilterOperandEnum, value: string }): Promise<email.domain.TaskFilter>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(id: number): {
                                    /**
                                     * Delete an existing filter
                                     * DELETE /email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}
                                     */
                                    $delete(): Promise<email.domain.TaskFilter[]>;
                                    /**
                                     * Get this object properties
                                     * GET /email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}
                                     */
                                    $get(): Promise<email.domain.Rule>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                        };
                    }
                    migrate: {
                        /**
                         * Get migration service
                         * GET /email/domain/{domain}/account/{accountName}/migrate
                         */
                        $get(params?: { type?: email.domain.MigrationServiceType }): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(destinationServiceName: string): {
                            /**
                             * Get this object properties
                             * GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}
                             */
                            $get(): Promise<email.domain.MigrationService>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            destinationEmailAddress: {
                                /**
                                 * List of email address available for migration
                                 * GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress
                                 */
                                $get(params?: { quota?: number }): Promise<string[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(destinationEmailAddress: string): {
                                    /**
                                     * Get this object properties
                                     * GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}
                                     */
                                    $get(): Promise<email.domain.MigrationAccount>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    checkMigrate: {
                                        /**
                                         * Check if it's possible to migrate
                                         * GET /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/checkMigrate
                                         */
                                        $get(): Promise<email.domain.MigrationCheckStruct>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    }
                                    migrate: {
                                        /**
                                         * Migrate account to destination account
                                         * POST /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/migrate
                                         */
                                        $post(params: { password: string }): Promise<email.domain.TaskPop>;
                                    }
                                };
                            }
                        };
                    }
                    updateUsage: {
                        /**
                         * Update usage of account
                         * POST /email/domain/{domain}/account/{accountName}/updateUsage
                         */
                        $post(): Promise<void>;
                    }
                    usage: {
                        /**
                         * usage of account
                         * GET /email/domain/{domain}/account/{accountName}/usage
                         */
                        $get(): Promise<domain.DomainUsageAccountStruct>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            acl: {
                /**
                 * Get ACL on your domain
                 * GET /email/domain/{domain}/acl
                 */
                $get(): Promise<string[]>;
                /**
                 * Create new ACL
                 * POST /email/domain/{domain}/acl
                 */
                $post(params: { accountId: string }): Promise<email.domain.Acl>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(accountId: string): {
                    /**
                     * Delete ACL
                     * DELETE /email/domain/{domain}/acl/{accountId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /email/domain/{domain}/acl/{accountId}
                     */
                    $get(): Promise<email.domain.Acl>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /email/domain/{domain}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            changeDnsMXFilter: {
                /**
                 * Change MX filter, so change MX DNS records
                 * POST /email/domain/{domain}/changeDnsMXFilter
                 */
                $post(params: { customTarget?: string, mxFilter: domain.DomainMXFilterEnum, subDomain?: string }): Promise<void>;
            }
            confirmTermination: {
                /**
                 * Confirm termination of your email service
                 * POST /email/domain/{domain}/confirmTermination
                 */
                $post(params: { commentary?: string, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            dnsMXFilter: {
                /**
                 * Domain MX filter
                 * GET /email/domain/{domain}/dnsMXFilter
                 */
                $get(params?: { subDomain?: string }): Promise<domain.DomainMXFilterEnum>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            dnsMXRecords: {
                /**
                 * Domain MX records
                 * GET /email/domain/{domain}/dnsMXRecords
                 */
                $get(params?: { subDomain?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            mailingList: {
                /**
                 * Get mailing lists
                 * GET /email/domain/{domain}/mailingList
                 */
                $get(params?: { name?: string }): Promise<string[]>;
                /**
                 * Create new mailingList
                 * POST /email/domain/{domain}/mailingList
                 */
                $post(params: { language: domainDomainMlLanguageEnum, name: string, options: domainDomainMlOptionsStruct, ownerEmail: string, replyTo?: string }): Promise<email.domain.TaskMl>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(name: string): {
                    /**
                     * Delete existing Mailing list
                     * DELETE /email/domain/{domain}/mailingList/{name}
                     */
                    $delete(): Promise<email.domain.TaskMl>;
                    /**
                     * Get this object properties
                     * GET /email/domain/{domain}/mailingList/{name}
                     */
                    $get(): Promise<email.domain.MailingList>;
                    /**
                     * Alter this object properties
                     * PUT /email/domain/{domain}/mailingList/{name}
                     */
                    $put(params?: { id?: number, language?: domainDomainMlLanguageEnum, name?: string, nbSubscribers?: number, nbSubscribersUpdateDate?: string, options?: domainDomainMlOptionsStruct, ownerEmail?: string, replyTo?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changeOptions: {
                        /**
                         * Change mailing list options
                         * POST /email/domain/{domain}/mailingList/{name}/changeOptions
                         */
                        $post(params: { options: domainDomainMlOptionsStruct }): Promise<email.domain.TaskMl>;
                    }
                    moderator: {
                        /**
                         * List of moderators
                         * GET /email/domain/{domain}/mailingList/{name}/moderator
                         */
                        $get(params?: { email?: string }): Promise<string[]>;
                        /**
                         * Add moderator to mailing list
                         * POST /email/domain/{domain}/mailingList/{name}/moderator
                         */
                        $post(params: { email: string }): Promise<email.domain.TaskMl>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(email: string): {
                            /**
                             * Delete existing moderator
                             * DELETE /email/domain/{domain}/mailingList/{name}/moderator/{email}
                             */
                            $delete(): Promise<email.domain.TaskMl>;
                            /**
                             * Get this object properties
                             * GET /email/domain/{domain}/mailingList/{name}/moderator/{email}
                             */
                            $get(): Promise<email.domain.Moderator>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    sendListByEmail: {
                        /**
                         * Send moderators list and subscribers list of this mailing list by email
                         * POST /email/domain/{domain}/mailingList/{name}/sendListByEmail
                         */
                        $post(params: { email: string }): Promise<email.domain.TaskMl>;
                    }
                    subscriber: {
                        /**
                         * List of subscribers
                         * GET /email/domain/{domain}/mailingList/{name}/subscriber
                         */
                        $get(params?: { email?: string }): Promise<string[]>;
                        /**
                         * Add subscriber to mailing list
                         * POST /email/domain/{domain}/mailingList/{name}/subscriber
                         */
                        $post(params: { email: string }): Promise<email.domain.TaskMl>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(email: string): {
                            /**
                             * Delete existing subscriber
                             * DELETE /email/domain/{domain}/mailingList/{name}/subscriber/{email}
                             */
                            $delete(): Promise<email.domain.TaskMl>;
                            /**
                             * Get this object properties
                             * GET /email/domain/{domain}/mailingList/{name}/subscriber/{email}
                             */
                            $get(): Promise<email.domain.Subscriber>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
            migrateDelegationV3toV6: {
                /**
                 * Create delegation of domain with same nic than V3
                 * POST /email/domain/{domain}/migrateDelegationV3toV6
                 */
                $post(): Promise<void>;
            }
            quota: {
                /**
                 * List all quotas for this domain
                 * GET /email/domain/{domain}/quota
                 */
                $get(): Promise<domain.DomainQuota>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            recommendedDNSRecords: {
                /**
                 * Recommended domain DNS records
                 * GET /email/domain/{domain}/recommendedDNSRecords
                 */
                $get(): Promise<domain.zone.Record[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            redirection: {
                /**
                 * Get redirections
                 * GET /email/domain/{domain}/redirection
                 */
                $get(params?: { from?: string, to?: string }): Promise<string[]>;
                /**
                 * Create new redirection in server
                 * POST /email/domain/{domain}/redirection
                 */
                $post(params: { from: string, localCopy: boolean, to: string }): Promise<email.domain.TaskSpecialAccount>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: string): {
                    /**
                     * Delete an existing redirection in server
                     * DELETE /email/domain/{domain}/redirection/{id}
                     */
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    /**
                     * Get this object properties
                     * GET /email/domain/{domain}/redirection/{id}
                     */
                    $get(): Promise<email.domain.RedirectionGlobal>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changeRedirection: {
                        /**
                         * Change redirection
                         * POST /email/domain/{domain}/redirection/{id}/changeRedirection
                         */
                        $post(params: { to: string }): Promise<email.domain.TaskSpecialAccount>;
                    }
                };
            }
            responder: {
                /**
                 * Get responders
                 * GET /email/domain/{domain}/responder
                 */
                $get(params?: { account?: string }): Promise<string[]>;
                /**
                 * Create new responder in server
                 * POST /email/domain/{domain}/responder
                 */
                $post(params: { account: string, content: string, copy: boolean, copyTo?: string, from?: string, to?: string }): Promise<email.domain.TaskSpecialAccount>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(account: string): {
                    /**
                     * Delete an existing responder in server
                     * DELETE /email/domain/{domain}/responder/{account}
                     */
                    $delete(): Promise<email.domain.TaskSpecialAccount>;
                    /**
                     * Get this object properties
                     * GET /email/domain/{domain}/responder/{account}
                     */
                    $get(): Promise<email.domain.Responder>;
                    /**
                     * Alter this object properties
                     * PUT /email/domain/{domain}/responder/{account}
                     */
                    $put(params?: { account?: string, content?: string, copy?: boolean, copyTo?: string, from?: string, to?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /email/domain/{domain}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /email/domain/{domain}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            summary: {
                /**
                 * Summary for this domain
                 * GET /email/domain/{domain}/summary
                 */
                $get(): Promise<domain.DomainSummary>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                account: {
                    /**
                     * Get account tasks
                     * GET /email/domain/{domain}/task/account
                     */
                    $get(params?: { name?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Get this object properties
                         * GET /email/domain/{domain}/task/account/{id}
                         */
                        $get(): Promise<email.domain.TaskPop>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                filter: {
                    /**
                     * Get filter tasks
                     * GET /email/domain/{domain}/task/filter
                     */
                    $get(params?: { account?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Get this object properties
                         * GET /email/domain/{domain}/task/filter/{id}
                         */
                        $get(): Promise<email.domain.TaskFilter>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                mailinglist: {
                    /**
                     * Get Mailing List tasks
                     * GET /email/domain/{domain}/task/mailinglist
                     */
                    $get(params?: { account?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Get this object properties
                         * GET /email/domain/{domain}/task/mailinglist/{id}
                         */
                        $get(): Promise<email.domain.TaskMl>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                redirection: {
                    /**
                     * Get redirection tasks
                     * GET /email/domain/{domain}/task/redirection
                     */
                    $get(params?: { account?: string }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: string): {
                        /**
                         * Get this object properties
                         * GET /email/domain/{domain}/task/redirection/{id}
                         */
                        $get(): Promise<email.domain.TaskSpecialAccount>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                responder: {
                    /**
                     * Get responder tasks
                     * GET /email/domain/{domain}/task/responder
                     */
                    $get(params?: { account?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Get this object properties
                         * GET /email/domain/{domain}/task/responder/{id}
                         */
                        $get(): Promise<email.domain.TaskSpecialAccount>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            terminate: {
                /**
                 * Terminate your email service
                 * POST /email/domain/{domain}/terminate
                 */
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
