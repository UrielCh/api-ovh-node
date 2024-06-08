import { buildOvhProxy } from '@ovh-api/common';
import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /domain Models
 * Source: https://ca.api.ovh.com/1.0/domain.json
 */
export namespace dnssec {
    /**
     * Dnssec Status
     * type fullname: dnssec.DnssecStatusEnum
     */
    export type DnssecStatusEnum = "disableInProgress" | "disabled" | "enableInProgress" | "enabled"
    /**
     * Domain's DNSSEC Key
     * interface fullName: dnssec.Key.Key
     */
    export interface Key {
        algorithm: dnssec.KeyAlgorithmEnum;
        flags: dnssec.KeyFlagEnum;
        id: number;
        publicKey: string;
        status: dnssec.KeyStatusEnum;
        tag: number;
    }
    /**
     * DNSSEC Algorithm
5: RSASHA1
7: RSASHA1-NSEC3-SHA1
8: RSASHA256
10: RSASHA512
13: ECDSAP256SHA256
14: ECDSAP384SHA384
15: ED25519
     * type fullname: dnssec.KeyAlgorithmEnum
     */
    export type KeyAlgorithmEnum = 5 | 7 | 8 | 10 | 13 | 14 | 15
    /**
     * DNSSEC Key Flag Type: 256=ZSK (Zone Signing Key), 257=KSK (Key Signing Key)
     * type fullname: dnssec.KeyFlagEnum
     */
    export type KeyFlagEnum = 256 | 257
    /**
     * Generated: The key has been created, but has not yet been used for anything.
Published: The DNSKEY record is published in the zone, but predecessors of the key may be held in caches.
Ready: The new key data has been published for long enough to guarantee that any previous versions of the DNSKEY RRset have expired from caches.
Active: The key has started to be used to sign RRsets.
Retired: A successor key has become active and this key is no longer being used to generate RRSIGs.
Removed: The key has been removed from the zone.
Revoked: The key is published for a period with the "revoke" bit set as a way of notifying validating resolvers that have configured it as an trust anchor that it is about to be removed from the zone.
     * type fullname: dnssec.KeyStatusEnum
     */
    export type KeyStatusEnum = "active" | "generated" | "published" | "removed" | "retired" | "revoked"
    /**
     * Payload used to update the DNSSEC keys of a domain name
     * interface fullName: dnssec.UpdatePayload.UpdatePayload
     */
    export interface UpdatePayload {
        keys: dnssec.Key[];
    }
}
export namespace domain {
    /**
     * An action to execute on a domain name
     * type fullname: domain.ActionEnum
     */
    export type ActionEnum = "create" | "trade" | "transfer" | "update"
    /**
     * Type of claim notice
     * type fullname: domain.ApproveTypeEnum
     */
    export type ApproveTypeEnum = "accept" | "reject"
    /**
     * A contact contains the personal data of a user
     * interface fullName: domain.Contact.Contact
     */
    export interface Contact {
        accreditationCountry?: nichandle.CountryEnum;
        accreditationId?: string;
        accreditationOrganism?: string;
        accreditationYear?: number;
        address?: domain.ContactAddress;
        birthCity?: string;
        birthCountry?: nichandle.CountryEnum;
        birthDay?: string;
        birthZip?: string;
        cellPhone?: string;
        companyNationalIdentificationNumber?: string;
        email?: string;
        enterpriseId?: string;
        fax?: string;
        firstName?: string;
        gender?: nichandle.GenderEnum;
        id: number;
        insee?: string;
        language?: nichandle.LanguageEnum;
        lastName?: string;
        legalForm?: nichandle.LegalFormEnum;
        legalFormCategory?: string;
        nationalIdentificationNumber?: string;
        nationality?: nichandle.CountryEnum;
        organisationAccountable?: string;
        organisationFunding?: string;
        organisationFundingOther?: string;
        organisationName?: string;
        organisationRole?: string;
        organisationRoleOther?: string;
        organisationStaffStatus?: string;
        organisationStaffStatusOther?: string;
        organisationType?: string;
        organisationTypeOther?: string;
        phone?: string;
        registrantDocumentType?: string;
        registrantDocumentTypeOther?: string;
        roleInOrganisation?: string;
        trademarkId?: string;
        vat?: string;
        website?: string;
    }
    /**
     * Missing description
     * interface fullName: domain.ContactAddress.ContactAddress
     */
    export interface ContactAddress {
        city?: string;
        country?: nichandle.CountryEnum;
        line1?: string;
        line2?: string;
        line3?: string;
        otherDetails?: string;
        province?: string;
        zip?: string;
    }
    /**
     * A contact summary contains the personal data of a user
     * interface fullName: domain.ContactSummary.ContactSummary
     */
    export interface ContactSummary {
        id: string;
    }
    /**
     * A domain data
     * interface fullName: domain.Data.Data
     */
    export interface Data {
        audience?: string;
        authInfo?: string;
        isFor?: domain.IsForEnum[];
        otherPurpose?: string;
        reason?: string;
        represent?: string;
    }
    /**
     * Domain dnssec state
     * type fullname: domain.DnssecStateEnum
     */
    export type DnssecStateEnum = "disabled" | "enabled" | "not_supported"
    /**
     * All DNSSEC statuses
     * type fullname: domain.DnssecStatusEnum
     */
    export type DnssecStatusEnum = "disableInProgress" | "disabled" | "enableInProgress" | "enabled"
    /**
     * Domain name administration
     * interface fullName: domain.Domain.Domain
     */
    export interface Domain {
        dnssecSupported: boolean;
        domain: string;
        glueRecordIpv6Supported: boolean;
        glueRecordMultiIpSupported: boolean;
        hostSupported: boolean;
        lastUpdate: string;
        nameServerType: domain.DomainNsTypeEnum;
        offer: domain.OfferEnum;
        owoSupported: boolean;
        parentService?: domain.ParentService;
        state: domain.DomainStateEnum;
        suspensionState: domain.DomainSuspensionStateEnum;
        transferLockStatus: domain.DomainLockStatusEnum;
        whoisOwner: string;
    }
    /**
     * Domain lock status
     * type fullname: domain.DomainLockStatusEnum
     */
    export type DomainLockStatusEnum = "locked" | "locking" | "unavailable" | "unlocked" | "unlocking"
    /**
     * DomainNS Type
     * type fullname: domain.DomainNsTypeEnum
     */
    export type DomainNsTypeEnum = "external" | "hosted"
    /**
     * All options a domain can have
     * type fullname: domain.DomainOptionEnum
     */
    export type DomainOptionEnum = "dnsAnycast"
    /**
     * All states a domain Option can be in
     * type fullname: domain.DomainOptionStateEnum
     */
    export type DomainOptionStateEnum = "released" | "subscribed"
    /**
     * General information about a domain name service
     * interface fullName: domain.DomainService.DomainService
     */
    export interface DomainService {
        contactAdmin: domain.ContactSummary;
        contactBilling: domain.ContactSummary;
        contactOwner: domain.ContactSummary;
        contactTech: domain.ContactSummary;
        dnssecState: domain.DnssecStateEnum;
        dnssecSupported: boolean;
        domain: string;
        expirationDate: string;
        glueRecordIpv6Supported: boolean;
        glueRecordMultiIpSupported: boolean;
        hostSupported: boolean;
        lastUpdate: string;
        nameServerType: domain.nameServer.NameServerTypeEnum;
        nameServers: domain.nameServer.NameServer[];
        offer: domain.OfferEnum;
        owoSupported: boolean;
        parentService?: domain.ParentService;
        renewalDate: string;
        renewalState: domain.RenewalStateEnum;
        serviceId: number;
        state: domain.DomainStateEnum;
        suspensionState: domain.SuspensionStateEnum;
        transferLockStatus: domain.LockStatusEnum;
        whoisOwner: string;
    }
    /**
     * General information about a domain name service
     * interface fullName: domain.DomainServiceWithIAM.DomainServiceWithIAM
     */
    export interface DomainServiceWithIAM {
        contactAdmin: domain.ContactSummary;
        contactBilling: domain.ContactSummary;
        contactOwner: domain.ContactSummary;
        contactTech: domain.ContactSummary;
        dnssecState: domain.DnssecStateEnum;
        dnssecSupported: boolean;
        domain: string;
        expirationDate: string;
        glueRecordIpv6Supported: boolean;
        glueRecordMultiIpSupported: boolean;
        hostSupported: boolean;
        iam?: iam.ResourceMetadata;
        lastUpdate: string;
        nameServerType: domain.nameServer.NameServerTypeEnum;
        nameServers: domain.nameServer.NameServer[];
        offer: domain.OfferEnum;
        owoSupported: boolean;
        parentService?: domain.ParentService;
        renewalDate: string;
        renewalState: domain.RenewalStateEnum;
        serviceId: number;
        state: domain.DomainStateEnum;
        suspensionState: domain.SuspensionStateEnum;
        transferLockStatus: domain.LockStatusEnum;
        whoisOwner: string;
    }
    /**
     * Domain name current state
     * type fullname: domain.DomainStateEnum
     */
    export type DomainStateEnum = "deleted" | "dispute" | "expired" | "ok" | "outgoing_transfer" | "pending_create" | "pending_delete" | "pending_incoming_transfer" | "pending_installation" | "registry_suspended" | "restorable" | "technical_suspended"
    /**
     * Domain name current suspension state
     * type fullname: domain.DomainSuspensionStateEnum
     */
    export type DomainSuspensionStateEnum = "not_suspended" | "suspended"
    /**
     * Domain name administration
     * interface fullName: domain.DomainWithIAM.DomainWithIAM
     */
    export interface DomainWithIAM {
        dnssecSupported: boolean;
        domain: string;
        glueRecordIpv6Supported: boolean;
        glueRecordMultiIpSupported: boolean;
        hostSupported: boolean;
        iam?: iam.ResourceMetadata;
        lastUpdate: string;
        nameServerType: domain.DomainNsTypeEnum;
        offer: domain.OfferEnum;
        owoSupported: boolean;
        parentService?: domain.ParentService;
        state: domain.DomainStateEnum;
        suspensionState: domain.DomainSuspensionStateEnum;
        transferLockStatus: domain.DomainLockStatusEnum;
        whoisOwner: string;
    }
    /**
     * Possible purposes of the domain
     * type fullname: domain.IsForEnum
     */
    export type IsForEnum = "campaign_website" | "educational_website" | "emails" | "information_website" | "other_purpose" | "redirect_page" | "transactional_website"
    /**
     * Domain lock status
     * type fullname: domain.LockStatusEnum
     */
    export type LockStatusEnum = "locked" | "locking" | "unavailable" | "unlocked" | "unlocking"
    /**
     * Offer
     * type fullname: domain.OfferEnum
     */
    export type OfferEnum = "diamond" | "gold" | "platinum"
    /**
     * Operation status
     * type fullname: domain.OperationStatusEnum
     */
    export type OperationStatusEnum = "cancelled" | "doing" | "done" | "error" | "problem" | "todo"
    /**
     * Whois optin fields
     * type fullname: domain.OptinFieldsEnum
     */
    export type OptinFieldsEnum = "address" | "city" | "country" | "email" | "fax" | "name" | "organisation" | "phone" | "province" | "zip"
    /**
     * Information about the options of a domain
     * interface fullName: domain.Option.Option
     */
    export interface Option {
        expirationDate: string;
        option: domain.DomainOptionEnum;
        state: domain.DomainOptionStateEnum;
    }
    /**
     * Parent service
     * interface fullName: domain.ParentService.ParentService
     */
    export interface ParentService {
        name: string;
        type: domain.ParentServiceTypeEnum;
    }
    /**
     * Parent service type enum
     * type fullname: domain.ParentServiceTypeEnum
     */
    export type ParentServiceTypeEnum = "/allDom"
    /**
     * Domain renewal state
     * type fullname: domain.RenewalStateEnum
     */
    export type RenewalStateEnum = "automatic_renew" | "cancellation_complete" | "cancellation_requested" | "manual_renew" | "unpaid"
    /**
     * Data of a domain option
     * interface fullName: domain.ServiceOption.ServiceOption
     */
    export interface ServiceOption {
        serviceName: string;
    }
    /**
     * Representation of the domain options
     * interface fullName: domain.ServiceOptions.ServiceOptions
     */
    export interface ServiceOptions {
        hosting?: domain.ServiceOption;
        offer?: domain.ServiceOption;
        zone?: domain.ServiceOption;
    }
    /**
     * Domain suspension state
     * type fullname: domain.SuspensionStateEnum
     */
    export type SuspensionStateEnum = "not_suspended" | "suspended"
    /**
     * Tasks associated to domain
     * interface fullName: domain.Task.Task
     */
    export interface Task {
        canAccelerate: boolean;
        canCancel: boolean;
        canRelaunch: boolean;
        comment?: string;
        creationDate: string;
        domain?: string;
        doneDate?: string;
        function: string;
        id: number;
        lastUpdate: string;
        status: domain.OperationStatusEnum;
        todoDate: string;
    }
    /**
     * All functions from a dns task
     * type fullname: domain.TaskFunctionEnum
     */
    export type TaskFunctionEnum = "DnsAnycastActivate" | "DnsAnycastDeactivate" | "DnssecDisable" | "DnssecEnable" | "DnssecResigning" | "DnssecRollKsk" | "DnssecRollZsk" | "ZoneCreate" | "ZoneCut" | "ZoneDelete" | "ZoneImport" | "ZoneRestore"
    /**
     * All statuses from a dns task
     * type fullname: domain.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "problem" | "todo"
    /**
     * Representation of a UK Registrar (used for outgoing transfer)
     * interface fullName: domain.UkRegistrar.UkRegistrar
     */
    export interface UkRegistrar {
        name: string;
        tag: string;
    }
    /**
     * DNS zone
     * interface fullName: domain.Zone.Zone
     */
    export interface Zone {
        dnssecSupported: boolean;
        hasDnsAnycast: boolean;
        lastUpdate?: string;
        name: string;
        nameServers: string[];
    }
    /**
     * DNS zone
     * interface fullName: domain.ZoneWithIAM.ZoneWithIAM
     */
    export interface ZoneWithIAM {
        dnssecSupported: boolean;
        hasDnsAnycast: boolean;
        iam?: iam.ResourceMetadata;
        lastUpdate?: string;
        name: string;
        nameServers: string[];
    }
    export namespace configuration {
        export namespace rules {
            /**
             * A configuration rule defines validation to launch when executing an action on a domain (create, trade...). Depending on the extension, the rule may be different
             * interface fullName: domain.configuration.rules.Constraint.Constraint
             */
            export interface Constraint {
                conditions?: domain.configuration.rules.Rule;
                contexts?: domain.configuration.rules.ContextEnum[];
                operator?: domain.configuration.rules.OperatorEnum;
                value?: string;
                values?: string[];
            }
            /**
             * Used in rule to tell if rule (or part of the rule) is applicable for a given context
             * type fullname: domain.configuration.rules.ContextEnum
             */
            export type ContextEnum = "accept_conditions" | "claims" | "create" | "order" | "premium" | "protected_code" | "reason" | "trade" | "transfer" | "update"
            /**
             * Operator use in configuration rule to check content of a field
             * type fullname: domain.configuration.rules.OperatorEnum
             */
            export type OperatorEnum = "between" | "contains" | "empty" | "eq" | "gt" | "gte" | "lt" | "lte" | "match" | "maxlength" | "minlength" | "ne" | "notcontains" | "notempty" | "readonly" | "required" | "shouldbetrue"
            /**
             * A configuration rule defines validation to launch when executing an action on a domain (create, trade...). Depending on the extension, the rule may be different
             * interface fullName: domain.configuration.rules.Rule.Rule
             */
            export interface Rule {
                and?: domain.configuration.rules.Rule[];
                conditions?: domain.configuration.rules.Rule;
                constraints?: domain.configuration.rules.Constraint[];
                contexts?: domain.configuration.rules.ContextEnum[];
                description?: string;
                fields?: domain.configuration.rules.Rule;
                label?: string;
                or?: domain.configuration.rules.Rule[];
                placeholder?: string;
                type?: domain.configuration.rules.TypeEnum;
            }
            /**
             * A rule data contains the fields that must be validated against a rule
             * interface fullName: domain.configuration.rules.RuleData.RuleData
             */
            export interface RuleData {
                adminAccount?: nichandle.Nichandle;
                domain?: domain.Data;
                extras?: domain.configuration.rules.RuleExtraData;
                owner?: domain.Contact;
                techAccount?: nichandle.Nichandle;
            }
            /**
             * The extra data contain additional rule data fields
             * interface fullName: domain.configuration.rules.RuleExtraData.RuleExtraData
             */
            export interface RuleExtraData {
                acceptCondition?: boolean;
                authInfo?: string;
            }
            /**
             * Type of rule configuration
             * type fullname: domain.configuration.rules.TypeEnum
             */
            export type TypeEnum = "bool" | "contact" | "date_ISO8601" | "domain" | "json" | "number" | "string" | "string[]" | "text"
        }
    }
    export namespace configurations {
        /**
         * The possible types of contacts associated to a domain name
         * type fullname: domain.configurations.ContactTypeEnum
         */
        export type ContactTypeEnum = "admin" | "all" | "billing" | "owner" | "tech"
        /**
         * Representation of the domain custom fields
         * interface fullName: domain.configurations.CustomFields.CustomFields
         */
        export interface CustomFields {
            audience?: string;
            authInfo?: string;
            isFor?: domain.IsForEnum[];
            otherPurpose?: string;
            reason?: string;
            represent?: string;
        }
        /**
         * Payload used to update the custom fields of a domain name
         * interface fullName: domain.configurations.CustomFieldsUpdatePayload.CustomFieldsUpdatePayload
         */
        export interface CustomFieldsUpdatePayload {
            customFields: domain.configurations.CustomFields;
        }
        /**
         * Configuration of the email obfuscations for contacts related to a domain name
         * interface fullName: domain.configurations.ObfuscatedEmail.ObfuscatedEmail
         */
        export interface ObfuscatedEmail {
            status?: domain.configurations.ObfuscationStatusEnum;
            type: domain.configurations.ContactTypeEnum;
            value: string;
        }
        /**
         * Payload used to request the regeneration of obfuscated email redirections for the provided contacts of a domain name
         * interface fullName: domain.configurations.ObfuscatedEmailRefreshPayload.ObfuscatedEmailRefreshPayload
         */
        export interface ObfuscatedEmailRefreshPayload {
            contacts: domain.configurations.ContactTypeEnum[];
        }
        /**
         * Payload used to request the email obfuscation of contacts related to a domain name
         * interface fullName: domain.configurations.ObfuscatedEmailUpdatePayload.ObfuscatedEmailUpdatePayload
         */
        export interface ObfuscatedEmailUpdatePayload {
            contacts: domain.configurations.ContactTypeEnum[];
        }
        /**
         * The possible statuses of an email obfuscation
         * type fullname: domain.configurations.ObfuscationStatusEnum
         */
        export type ObfuscationStatusEnum = "done" | "todo"
        /**
         * Configuration of the optin fields for contacts related to a domain name
         * interface fullName: domain.configurations.Optin.Optin
         */
        export interface Optin {
            fields: domain.OptinFieldsEnum[];
            type: domain.configurations.ContactTypeEnum;
        }
        /**
         * Payload used to optin the fields of contacts related to a domain name
         * interface fullName: domain.configurations.OptinUpdatePayload.OptinUpdatePayload
         */
        export interface OptinUpdatePayload {
            optin: domain.configurations.Optin[];
        }
    }
    export namespace data {
        export namespace claimNotice {
            /**
             * Address for a claim notice holder
             * interface fullName: domain.data.claimNotice.Address.Address
             */
            export interface Address {
                city?: string;
                countryCode?: nichandle.CountryEnum;
                fax?: string;
                faxExtension?: string;
                postalCode?: string;
                stateOrProvince?: string;
                streets: string[];
                voice?: string;
                voiceExtension?: string;
            }
            /**
             * Definition of claim notices applying to a domain name
             * interface fullName: domain.data.claimNotice.ClaimNotice.ClaimNotice
             */
            export interface ClaimNotice {
                claims?: domain.data.claimNotice.ClaimNoticeDecision[];
                endingDate: string;
                id: string;
                label: string;
                startingDate?: string;
                type?: domain.data.claimNotice.ClaimNoticeTypeEnum;
            }
            /**
             * Definition of a single claim notice
             * interface fullName: domain.data.claimNotice.ClaimNoticeDecision.ClaimNoticeDecision
             */
            export interface ClaimNoticeDecision {
                classifications: domain.data.claimNotice.Classification[];
                courtDecisions: domain.data.claimNotice.CourtDecision[];
                goodsAndServices: string;
                jurisdiction: string;
                jurisdictionCountryCode: string;
                markName: string;
                trademarkContacts: domain.data.claimNotice.Contact[];
                trademarkHolders: domain.data.claimNotice.Contact[];
                trademarkUDRP: domain.data.claimNotice.UDRP[];
            }
            /**
             * Type of claim notice
             * type fullname: domain.data.claimNotice.ClaimNoticeTypeEnum
             */
            export type ClaimNoticeTypeEnum = "TRADEMARK" | "UK"
            /**
             * Definition of a trademark claim notice classification
             * interface fullName: domain.data.claimNotice.Classification.Classification
             */
            export interface Classification {
                description: string;
                number: string;
            }
            /**
             * Contact definition of a claim notice holder
             * interface fullName: domain.data.claimNotice.Contact.Contact
             */
            export interface Contact {
                address: domain.data.claimNotice.Address;
                email?: string;
                entitlement?: string;
                name?: string;
                organisation?: string;
                type?: string;
            }
            /**
             * Definition of a court decision
             * interface fullName: domain.data.claimNotice.CourtDecision.CourtDecision
             */
            export interface CourtDecision {
                countryCode: string;
                courtName: string;
                referenceNumber: string;
                regions: string[];
            }
            /**
             * Definition of a UDRP procedure
             * interface fullName: domain.data.claimNotice.UDRP.UDRP
             */
            export interface UDRP {
                caseNumber: string;
                udrpProvider: string;
            }
        }
    }
    export namespace extensions {
        /**
         * Result of extensions by category request
         * interface fullName: domain.extensions.CategoryNameWithExtensions.CategoryNameWithExtensions
         */
        export interface CategoryNameWithExtensions {
            extensions: string[];
            name: string;
        }
        /**
         * Type of extension category
         * type fullname: domain.extensions.CategoryTypeEnum
         */
        export type CategoryTypeEnum = "geolocalization" | "thematic"
        /**
         * A domain name extension
         * interface fullName: domain.extensions.Extension.Extension
         */
        export interface Extension {
            name: string;
        }
        /**
         * Result of extensions by category request
         * interface fullName: domain.extensions.ExtensionsByCategory.ExtensionsByCategory
         */
        export interface ExtensionsByCategory {
            geolocalization?: domain.extensions.CategoryNameWithExtensions[];
            thematic?: domain.extensions.CategoryNameWithExtensions[];
        }
        /**
         * Result of getting pricing attributes of an extension
         * interface fullName: domain.extensions.ExtensionsPricingAttributes.ExtensionsPricingAttributes
         */
        export interface ExtensionsPricingAttributes {
            brandNew: boolean;
            name: string;
            priceDrop: boolean;
        }
        /**
         * Type used to change the order of extensions results
         * type fullname: domain.extensions.OrderByTypeEnum
         */
        export type OrderByTypeEnum = "alphabetical" | "trending"
        export namespace registryConfigurations {
            /**
             * The registry configurations applied when creating a domain name
             * interface fullName: domain.extensions.registryConfigurations.CreateLifecycleRegistryConfiguration.CreateLifecycleRegistryConfiguration
             */
            export interface CreateLifecycleRegistryConfiguration {
                allowedPeriodsInMonths?: number[];
            }
            /**
             * The registry configurations applied to the DNS of a domain name
             * interface fullName: domain.extensions.registryConfigurations.DNSRegistryConfiguration.DNSRegistryConfiguration
             */
            export interface DNSRegistryConfiguration {
                isDNSSECSupported: boolean;
                maxNumber?: number;
                minNumber?: number;
            }
            /**
             * The registry configurations applied to a domain name
             * interface fullName: domain.extensions.registryConfigurations.DomainRegistryConfiguration.DomainRegistryConfiguration
             */
            export interface DomainRegistryConfiguration {
                isPremiumSupported: boolean;
                label: domain.extensions.registryConfigurations.LabelDomainRegistryConfiguration;
            }
            /**
             * The registry configurations applied to the domain name label
             * interface fullName: domain.extensions.registryConfigurations.LabelDomainRegistryConfiguration.LabelDomainRegistryConfiguration
             */
            export interface LabelDomainRegistryConfiguration {
                isIDNSupported: boolean;
                maxLength?: number;
                minLength?: number;
            }
            /**
             * The registry configurations of the lifecycle of a domain name
             * interface fullName: domain.extensions.registryConfigurations.LifecycleRegistryConfiguration.LifecycleRegistryConfiguration
             */
            export interface LifecycleRegistryConfiguration {
                create: domain.extensions.registryConfigurations.CreateLifecycleRegistryConfiguration;
                order: domain.extensions.registryConfigurations.OrderLifecycleRegistryConfiguration;
                renew: domain.extensions.registryConfigurations.RenewLifecycleRegistryConfiguration;
                restore: domain.extensions.registryConfigurations.RestoreLifecycleRegistryConfiguration;
                transfer: domain.extensions.registryConfigurations.TransferLifecycleRegistryConfiguration;
            }
            /**
             * The registry configurations applied when ordering a domain name
             * interface fullName: domain.extensions.registryConfigurations.OrderLifecycleRegistryConfiguration.OrderLifecycleRegistryConfiguration
             */
            export interface OrderLifecycleRegistryConfiguration {
                active: boolean;
                maxMonths?: number;
                minMonths?: number;
            }
            /**
             * The registry configurations applied to a domain extension (TLD, SLD)
             * interface fullName: domain.extensions.registryConfigurations.RegistryConfigurations.RegistryConfigurations
             */
            export interface RegistryConfigurations {
                dns: domain.extensions.registryConfigurations.DNSRegistryConfiguration;
                domain: domain.extensions.registryConfigurations.DomainRegistryConfiguration;
                lifecycle: domain.extensions.registryConfigurations.LifecycleRegistryConfiguration;
            }
            /**
             * The registry configurations applied when renewing a domain name
             * interface fullName: domain.extensions.registryConfigurations.RenewLifecycleRegistryConfiguration.RenewLifecycleRegistryConfiguration
             */
            export interface RenewLifecycleRegistryConfiguration {
                allowedPeriodsInMonths?: number[];
                gracePeriodInDays?: number;
            }
            /**
             * The registry configurations applied when restoring a domain name
             * interface fullName: domain.extensions.registryConfigurations.RestoreLifecycleRegistryConfiguration.RestoreLifecycleRegistryConfiguration
             */
            export interface RestoreLifecycleRegistryConfiguration {
                gracePeriodInDays?: number;
            }
            /**
             * The registry configurations applied when transfering a domain name
             * interface fullName: domain.extensions.registryConfigurations.TransferLifecycleRegistryConfiguration.TransferLifecycleRegistryConfiguration
             */
            export interface TransferLifecycleRegistryConfiguration {
                allowedPeriodsInMonths?: number[];
            }
        }
    }
    export namespace glueRecord {
        /**
         * Payload used to create the glue records of a domain name
         * interface fullName: domain.glueRecord.CreatePayload.CreatePayload
         */
        export interface CreatePayload {
            host: string;
            ips: string[];
        }
        /**
         * Glue record
         * interface fullName: domain.glueRecord.GlueRecord.GlueRecord
         */
        export interface GlueRecord {
            host: string;
            ips: string[];
        }
    }
    export namespace nameServer {
        /**
         * Payload used to update the DNS of a domain name
         * interface fullName: domain.nameServer.CreatePayload.CreatePayload
         */
        export interface CreatePayload {
            nameServer: domain.nameServer.NameServerInput[];
        }
        /**
         * Full name server configuration
         * interface fullName: domain.nameServer.FullNameServer.FullNameServer
         */
        export interface FullNameServer {
            host: string;
            id: number;
            ip?: string;
            isUsed: boolean;
            toDelete: boolean;
        }
        /**
         * Name server configuration
         * interface fullName: domain.nameServer.NameServer.NameServer
         */
        export interface NameServer {
            id: number;
            ipv4?: string;
            ipv6?: string;
            nameServer: string;
            nameServerType: domain.nameServer.NameServerTypeEnum;
        }
        /**
         * Name server input data
         * interface fullName: domain.nameServer.NameServerInput.NameServerInput
         */
        export interface NameServerInput {
            host: string;
            ip?: string;
        }
        /**
         * DNS server state
         * type fullname: domain.nameServer.NameServerStateEnum
         */
        export type NameServerStateEnum = "ko" | "ok"
        /**
         * DNS server status
         * interface fullName: domain.nameServer.NameServerStatus.NameServerStatus
         */
        export interface NameServerStatus {
            state: domain.nameServer.NameServerStateEnum;
            type: domain.nameServer.NameServerTypeEnum;
            usedSince?: string;
        }
        /**
         * DNS server type
         * type fullname: domain.nameServer.NameServerTypeEnum
         */
        export type NameServerTypeEnum = "anycast" | "dedicated" | "empty" | "external" | "hold" | "hosted" | "hosting" | "mixed" | "parking"
        /**
         * Payload used to update the DNS of a domain name
         * interface fullName: domain.nameServer.UpdatePayload.UpdatePayload
         */
        export interface UpdatePayload {
            nameServers: domain.nameServer.NameServerInput[];
        }
    }
    export namespace outgoingTransfer {
        /**
         * Definition of Outgoing Transfer applying to a domain name
         * interface fullName: domain.outgoingTransfer.Approve.Approve
         */
        export interface Approve {
            approveType: domain.ApproveTypeEnum;
            ident: string;
        }
    }
    export namespace rules {
        /**
         * Representation of the optin rule
         * interface fullName: domain.rules.Optin.Optin
         */
        export interface Optin {
            fields: domain.OptinFieldsEnum[];
            type: domain.configurations.ContactTypeEnum;
        }
    }
    export namespace zone {
        /**
         * DNS zone capabilities
         * interface fullName: domain.zone.Capabilities.Capabilities
         */
        export interface Capabilities {
            dynHost: boolean;
        }
        /**
         * DNS zone DNSSEC
         * interface fullName: domain.zone.Dnssec.Dnssec
         */
        export interface Dnssec {
            status: domain.DnssecStatusEnum;
        }
        /**
         * DNS zone import
         * interface fullName: domain.zone.Import.Import
         */
        export interface Import {
            zoneFile: string;
        }
        /**
         * DNS zone option
         * interface fullName: domain.zone.Option.Option
         */
        export interface Option {
            name: string;
        }
        /**
         * DNS zone history
         * interface fullName: domain.zone.Record.Record
         */
        export interface Record {
            fieldType: domain.zone.RecordTypeEnum;
            id: number;
            subDomain?: string;
            target: string;
            ttl?: number;
            zone: string;
        }
        /**
         * DNS zone history
         * interface fullName: domain.zone.RecordCreate.RecordCreate
         */
        export interface RecordCreate {
            fieldType: domain.zone.RecordTypeEnum;
            id: number;
            subDomain?: string;
            target: string;
            ttl: number;
            zone: string;
        }
        /**
         * Resource record name
         * type fullname: domain.zone.RecordTypeEnum
         */
        export type RecordTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "DNAME" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
        /**
         * DNS zone record
         * interface fullName: domain.zone.RecordUpdate.RecordUpdate
         */
        export interface RecordUpdate {
            subDomain?: string;
            target: string;
            ttl?: number;
        }
        /**
         * DNS zone redirections
         * interface fullName: domain.zone.Redirection.Redirection
         */
        export interface Redirection {
            description?: string;
            id: number;
            keywords?: string;
            subDomain?: string;
            target: string;
            title?: string;
            type: domain.zone.RedirectionTypeEnum;
            zone: string;
        }
        /**
         * DNS zone redirection create
         * interface fullName: domain.zone.RedirectionCreate.RedirectionCreate
         */
        export interface RedirectionCreate {
            description?: string;
            keywords?: string;
            subDomain: string;
            target: string;
            title?: string;
            type: domain.zone.RedirectionTypeEnum;
        }
        /**
         * Redirection type:
 - visible -> Redirection by http code 302
 - visiblePermanent -> Redirection by http code 301
 - invisible -> Redirection by html frame
         * type fullname: domain.zone.RedirectionTypeEnum
         */
        export type RedirectionTypeEnum = "invisible" | "visible" | "visiblePermanent"
        /**
         * DNS zone redirection update
         * interface fullName: domain.zone.RedirectionUpdate.RedirectionUpdate
         */
        export interface RedirectionUpdate {
            description?: string;
            keywords?: string;
            target: string;
            title?: string;
            type: domain.zone.RedirectionTypeEnum;
        }
        /**
         * DNS zone reset
         * interface fullName: domain.zone.Reset.Reset
         */
        export interface Reset {
            DnsRecords: domain.zone.ResetRecord[];
            minimized: boolean;
        }
        /**
         * Record associated to domain zone reset
         * interface fullName: domain.zone.ResetRecord.ResetRecord
         */
        export interface ResetRecord {
            fieldType: domain.zone.ResettableNamedResolutionFieldTypeEnum;
            target: string;
        }
        /**
         * Resource record name
         * type fullname: domain.zone.ResettableNamedResolutionFieldTypeEnum
         */
        export type ResettableNamedResolutionFieldTypeEnum = "A" | "MX"
        /**
         * DNS zone SOA
         * interface fullName: domain.zone.Soa.Soa
         */
        export interface Soa {
            email: string;
            expire: number;
            nxDomainTtl: number;
            refresh: number;
            serial: number;
            server: string;
            ttl: number;
        }
        /**
         * DNS zone status
         * interface fullName: domain.zone.Status.Status
         */
        export interface Status {
            errors?: string[];
            isDeployed: boolean;
            warnings?: string[];
        }
        /**
         * DNS zone task
         * interface fullName: domain.zone.Task.Task
         */
        export interface Task {
            canAccelerate: boolean;
            canCancel: boolean;
            canRelaunch: boolean;
            comment?: string;
            creationDate: string;
            doneDate?: string;
            function: domain.TaskFunctionEnum;
            id: number;
            lastUpdate?: string;
            status: domain.TaskStatusEnum;
            todoDate: string;
        }
        /**
         * Zone dns Management
         * interface fullName: domain.zone.Zone.Zone
         */
        export interface Zone {
            dnssecSupported: boolean;
            hasDnsAnycast: boolean;
            lastUpdate: string;
            name: string;
            nameServers: string[];
        }
        /**
         * DNS zone history
         * interface fullName: domain.zone.ZoneRestorePoint.ZoneRestorePoint
         */
        export interface ZoneRestorePoint {
            creationDate: string;
            zoneFileUrl: string;
        }
        /**
         * Zone dns Management
         * interface fullName: domain.zone.ZoneWithIAM.ZoneWithIAM
         */
        export interface ZoneWithIAM {
            dnssecSupported: boolean;
            hasDnsAnycast: boolean;
            iam?: iam.ResourceMetadata;
            lastUpdate: string;
            name: string;
            nameServers: string[];
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
export namespace nichandle {
    /**
     * Countries a nichandle can choose
     * type fullname: nichandle.CountryEnum
     */
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    /**
     * Customer currency
     * interface fullName: nichandle.Currency.Currency
     */
    export interface Currency {
        code: string;
        symbol: string;
    }
    /**
     * All genders a person can choose
     * type fullname: nichandle.GenderEnum
     */
    export type GenderEnum = "female" | "male"
    /**
     * Languages a nichandle can choose
     * type fullname: nichandle.LanguageEnum
     */
    export type LanguageEnum = "cs_CZ" | "de_DE" | "en_AU" | "en_CA" | "en_GB" | "en_IE" | "en_US" | "es_ES" | "fi_FI" | "fr_CA" | "fr_FR" | "fr_MA" | "fr_SN" | "fr_TN" | "it_IT" | "lt_LT" | "nl_NL" | "pl_PL" | "pt_PT"
    /**
     * Legal forms a nichandle can be registered as
     * type fullname: nichandle.LegalFormEnum
     */
    export type LegalFormEnum = "administration" | "association" | "corporation" | "individual" | "other" | "personalcorporation"
    /**
     * Details about your OVH identifier
     * interface fullName: nichandle.Nichandle.Nichandle
     */
    export interface Nichandle {
        address?: string;
        area?: string;
        birthCity?: string;
        birthDay?: string;
        city?: string;
        companyNationalIdentificationNumber?: string;
        complementaryAddress?: string;
        corporationType?: string;
        country: nichandle.CountryEnum;
        currency: nichandle.Currency;
        customerCode?: string;
        email: string;
        fax?: string;
        firstname?: string;
        italianSDI?: string;
        kycValidated?: boolean;
        language?: nichandle.LanguageEnum;
        legalform: nichandle.LegalFormEnum;
        name?: string;
        nationalIdentificationNumber?: string;
        nichandle: string;
        organisation?: string;
        ovhCompany: nichandle.OvhCompanyEnum;
        ovhSubsidiary: nichandle.OvhSubsidiaryEnum;
        phone?: string;
        phoneCountry?: nichandle.CountryEnum;
        phoneType?: nichandle.PhoneTypeEnum;
        purposeOfPurchase?: string;
        sex?: nichandle.GenderEnum;
        spareEmail?: string;
        state: nichandle.StateEnum;
        vat?: string;
        zip?: string;
    }
    /**
     * OVH companies
     * type fullname: nichandle.OvhCompanyEnum
     */
    export type OvhCompanyEnum = "kimsufi" | "ovh" | "soyoustart"
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "IN" | "QC" | "SG" | "WE" | "WS"
    /**
     * All phone type a person can choose
     * type fullname: nichandle.PhoneTypeEnum
     */
    export type PhoneTypeEnum = "landline" | "mobile"
    /**
     * States a nichandle can be in
     * type fullname: nichandle.StateEnum
     */
    export type StateEnum = "complete" | "incomplete"
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
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
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
     * Zone capabilities
     * interface fullName: zone.Capabilities.Capabilities
     */
    export interface Capabilities {
        dynHost: boolean;
    }
    /**
     * Resource record fieldType
     * type fullname: zone.NamedResolutionFieldTypeEnum
     */
    export type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "DNAME" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
    /**
     * Redirection type enum : visible -> Redirection by http code 302, visiblePermanent -> Redirection by http code 301, invisible -> Redirection by html frame
     * type fullname: zone.RedirectionTypeEnum
     */
    export type RedirectionTypeEnum = "invisible" | "visible" | "visiblePermanent"
    /**
     * Resource record
     * interface fullName: zone.ResetRecord.ResetRecord
     */
    export interface ResetRecord {
        fieldType: zone.ResettableNamedResolutionFieldTypeEnum;
        target: string;
    }
    /**
     * Resource record type
     * type fullname: zone.ResettableNamedResolutionFieldTypeEnum
     */
    export type ResettableNamedResolutionFieldTypeEnum = "A" | "MX"
    /**
     * Zone status
     * interface fullName: zone.Status.Status
     */
    export interface Status {
        errors?: string[];
        isDeployed: boolean;
        warnings?: string[];
    }
}

/**
 * END API /domain Models
 */
export function proxyDomain(ovhEngine: OvhRequestable): Domain {
    return buildOvhProxy(ovhEngine, '/domain');
}
export default proxyDomain;
/**
 * Api model for /domain
 */
export interface Domain {
    /**
     * Get the list of managed domain names
     * GET /domain
     */
    $get(params?: { iamTags?: any, whoisOwner?: string }): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    configurationRule: {
        /**
         * Get configuration rule applied for a domain in a given action
         * GET /domain/configurationRule
         */
        $get(params: { action: domain.ActionEnum, domain: string }): Promise<domain.configuration.rules.Rule>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        check: {
            /**
             * Validate a rule data for a specified domain
             * POST /domain/configurationRule/check
             */
            $post(params?: { adminAccount?: nichandle.Nichandle, domain?: domain.Data, extras?: domain.configuration.rules.RuleExtraData, owner?: domain.Contact, techAccount?: nichandle.Nichandle }): Promise<void>;
        }
    }
    contact: {
        /**
         * List all contacts
         * GET /domain/contact
         */
        $get(): Promise<domain.Contact[]>;
        /**
         * Create a contact
         * POST /domain/contact
         */
        $post(params?: { accreditationCountry?: nichandle.CountryEnum, accreditationId?: string, accreditationOrganism?: string, accreditationYear?: number, address?: domain.ContactAddress, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, enterpriseId?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, id?: number, insee?: string, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, legalFormCategory?: string, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationAccountable?: string, organisationFunding?: string, organisationFundingOther?: string, organisationName?: string, organisationRole?: string, organisationRoleOther?: string, organisationStaffStatus?: string, organisationStaffStatusOther?: string, organisationType?: string, organisationTypeOther?: string, phone?: string, registrantDocumentType?: string, registrantDocumentTypeOther?: string, roleInOrganisation?: string, trademarkId?: string, vat?: string, website?: string }): Promise<domain.Contact>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(contactId: number): {
            /**
             * Get details about a contact
             * GET /domain/contact/{contactId}
             */
            $get(): Promise<domain.Contact>;
            /**
             * Update a contact
             * PUT /domain/contact/{contactId}
             */
            $put(params?: { accreditationCountry?: nichandle.CountryEnum, accreditationId?: string, accreditationOrganism?: string, accreditationYear?: number, address?: domain.ContactAddress, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, enterpriseId?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, id?: number, insee?: string, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, legalFormCategory?: string, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationAccountable?: string, organisationFunding?: string, organisationFundingOther?: string, organisationName?: string, organisationRole?: string, organisationRoleOther?: string, organisationStaffStatus?: string, organisationStaffStatusOther?: string, organisationType?: string, organisationTypeOther?: string, phone?: string, registrantDocumentType?: string, registrantDocumentTypeOther?: string, roleInOrganisation?: string, trademarkId?: string, vat?: string, website?: string }): Promise<domain.Contact>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    data: {
        claimNotice: {
            /**
             * Retrieve claim notices associated to a domain
             * GET /domain/data/claimNotice
             */
            $get(params: { domain: string }): Promise<domain.data.claimNotice.ClaimNotice>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        extension: {
            /**
             * List all the extensions for a specific country
             * GET /domain/data/extension
             */
            $get(params?: { country?: nichandle.OvhSubsidiaryEnum }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    extensions: {
        /**
         * List all extensions
         * GET /domain/extensions
         */
        $get(params?: { geolocalizations?: string, orderBy?: domain.extensions.OrderByTypeEnum, ovhSubsidiary?: nichandle.OvhSubsidiaryEnum, thematics?: string }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        byCategory: {
            /**
             * List extensions, grouped by category types (like 'thematic', 'geolocalization') and category names (like 'europe')
             * GET /domain/extensions/byCategory
             */
            $get(params?: { categoryType?: domain.extensions.CategoryTypeEnum[] }): Promise<domain.extensions.ExtensionsByCategory>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        highlighted: {
            /**
             * List highlighted extensions, ordered by decreased importance
             * GET /domain/extensions/highlighted
             */
            $get(params?: { ovhSubsidiary?: nichandle.OvhSubsidiaryEnum }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        pricingAttributes: {
            /**
             * List extensions with their pricing attributes
             * GET /domain/extensions/pricingAttributes
             */
            $get(params?: { ovhSubsidiary?: nichandle.OvhSubsidiaryEnum }): Promise<domain.extensions.ExtensionsPricingAttributes[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(name: string): {
            /**
             * Get an extension
             * GET /domain/extensions/{name}
             */
            $get(): Promise<domain.extensions.Extension>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            registryConfigurations: {
                /**
                 * Retrieve registry configuration for an extension
                 * GET /domain/extensions/{name}/registryConfigurations
                 */
                $get(): Promise<domain.extensions.registryConfigurations.RegistryConfigurations>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    zone: {
        /**
         * List dnsZone services
         * GET /domain/zone
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(zoneName: string): {
            /**
             * Get a dnsZone service
             * GET /domain/zone/{zoneName}
             */
            $get(): Promise<domain.Zone>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            capabilities: {
                /**
                 * Get zone capabilities
                 * GET /domain/zone/{zoneName}/capabilities
                 */
                $get(): Promise<domain.zone.Capabilities>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /domain/zone/{zoneName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /domain/zone/{zoneName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            dnssec: {
                /**
                 * Disable DNSSEC
                 * DELETE /domain/zone/{zoneName}/dnssec
                 */
                $delete(): Promise<void>;
                /**
                 * Get a zone DNSSEC status
                 * GET /domain/zone/{zoneName}/dnssec
                 */
                $get(): Promise<domain.zone.Dnssec>;
                /**
                 * Enable DNSSEC
                 * POST /domain/zone/{zoneName}/dnssec
                 */
                $post(): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            export: {
                /**
                 * Export DNS zone
                 * GET /domain/zone/{zoneName}/export
                 */
                $get(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            history: {
                /**
                 * List zone histories
                 * GET /domain/zone/{zoneName}/history
                 */
                $get(params?: { 'creationDate.from'?: string, 'creationDate.to'?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(creationDate: string): {
                    /**
                     * Get a zone history
                     * GET /domain/zone/{zoneName}/history/{creationDate}
                     */
                    $get(): Promise<domain.zone.ZoneRestorePoint>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    restore: {
                        /**
                         * Restore a backup point
                         * POST /domain/zone/{zoneName}/history/{creationDate}/restore
                         */
                        $post(): Promise<domain.zone.Task>;
                    }
                };
            }
            import: {
                /**
                 * Import a DNS zone from a zone file
                 * POST /domain/zone/{zoneName}/import
                 */
                $post(params: { zoneFile: string }): Promise<domain.zone.Task>;
            }
            option: {
                /**
                 * List zone options
                 * GET /domain/zone/{zoneName}/option
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(name: string): {
                    /**
                     * Get zone option
                     * GET /domain/zone/{zoneName}/option/{name}
                     */
                    $get(): Promise<domain.zone.Option>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    serviceInfos: {
                        /**
                         * Get this object properties
                         * GET /domain/zone/{zoneName}/option/{name}/serviceInfos
                         */
                        $get(): Promise<services.Service>;
                        /**
                         * Alter this object properties
                         * PUT /domain/zone/{zoneName}/option/{name}/serviceInfos
                         */
                        $put(params: { renew: service.RenewType }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            record: {
                /**
                 * List record
                 * GET /domain/zone/{zoneName}/record
                 */
                $get(params?: { fieldType?: domain.zone.RecordTypeEnum, subDomain?: string }): Promise<number[]>;
                /**
                 * Create a new record (Don't forget to refresh the zone)
                 * POST /domain/zone/{zoneName}/record
                 */
                $post(params: { fieldType: domain.zone.RecordTypeEnum, id?: number, subDomain?: string, target: string, ttl?: number, zone?: string }): Promise<domain.zone.Record>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Delete record object (Don't forget to refresh the zone)
                     * DELETE /domain/zone/{zoneName}/record/{id}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get record object properties
                     * GET /domain/zone/{zoneName}/record/{id}
                     */
                    $get(): Promise<domain.zone.Record>;
                    /**
                     * Alter record object properties (Don't forget to refresh the zone)
                     * PUT /domain/zone/{zoneName}/record/{id}
                     */
                    $put(params?: { subDomain?: string, target?: string, ttl?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            redirection: {
                /**
                 * List redirections
                 * GET /domain/zone/{zoneName}/redirection
                 */
                $get(params?: { subDomain?: string }): Promise<number[]>;
                /**
                 * Create a new redirection (Don't forget to refresh the zone)
                 * POST /domain/zone/{zoneName}/redirection
                 */
                $post(params: { description?: string, keywords?: string, subDomain?: string, target: string, title?: string, type: domain.zone.RedirectionTypeEnum }): Promise<domain.zone.Redirection>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Delete redirection object (Don't forget to refresh the zone)
                     * DELETE /domain/zone/{zoneName}/redirection/{id}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get redirection object properties
                     * GET /domain/zone/{zoneName}/redirection/{id}
                     */
                    $get(): Promise<domain.zone.Redirection>;
                    /**
                     * Alter redirection object properties
                     * PUT /domain/zone/{zoneName}/redirection/{id}
                     */
                    $put(params?: { description?: string, keywords?: string, target?: string, title?: string, type?: domain.zone.RedirectionTypeEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            refresh: {
                /**
                 * Refresh a DNS zone
                 * POST /domain/zone/{zoneName}/refresh
                 */
                $post(): Promise<void>;
            }
            reset: {
                /**
                 * Reset a DNS zone
                 * POST /domain/zone/{zoneName}/reset
                 */
                $post(params?: { DnsRecords?: domain.zone.ResetRecord[], minimized?: boolean }): Promise<void>;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /domain/zone/{zoneName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /domain/zone/{zoneName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            soa: {
                /**
                 * Get zone SOA
                 * GET /domain/zone/{zoneName}/soa
                 */
                $get(): Promise<domain.zone.Soa>;
                /**
                 * Update zone SOA
                 * PUT /domain/zone/{zoneName}/soa
                 */
                $put(params?: { email?: string, expire?: number, nxDomainTtl?: number, refresh?: number, serial?: number, server?: string, ttl?: number }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            status: {
                /**
                 * Get zone status
                 * GET /domain/zone/{zoneName}/status
                 */
                $get(): Promise<domain.zone.Status>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                /**
                 * List zone tasks
                 * GET /domain/zone/{zoneName}/task
                 */
                $get(params?: { function_?: domain.TaskFunctionEnum, status?: domain.TaskStatusEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get a zone task
                     * GET /domain/zone/{zoneName}/task/{id}
                     */
                    $get(): Promise<domain.zone.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    accelerate: {
                        /**
                         * Accelerate a zone task
                         * POST /domain/zone/{zoneName}/task/{id}/accelerate
                         */
                        $post(): Promise<void>;
                    }
                    cancel: {
                        /**
                         * Cancel a zone task
                         * POST /domain/zone/{zoneName}/task/{id}/cancel
                         */
                        $post(): Promise<void>;
                    }
                    relaunch: {
                        /**
                         * Restart a zone task
                         * POST /domain/zone/{zoneName}/task/{id}/relaunch
                         */
                        $post(): Promise<void>;
                    }
                };
            }
            terminate: {
                /**
                 * Ask for the termination of your service
                 * POST /domain/zone/{zoneName}/terminate
                 */
                $post(): Promise<string>;
            }
        };
    }
    $(serviceName: string): {
        /**
         * Get domain name information
         * GET /domain/{serviceName}
         */
        $get(): Promise<domain.DomainService>;
        /**
         * Edit domain name properties
         * PUT /domain/{serviceName}
         */
        $put(params?: { contactAdmin?: domain.ContactSummary, contactBilling?: domain.ContactSummary, contactOwner?: domain.ContactSummary, contactTech?: domain.ContactSummary, dnssecState?: domain.DnssecStateEnum, dnssecSupported?: boolean, domain?: string, expirationDate?: string, glueRecordIpv6Supported?: boolean, glueRecordMultiIpSupported?: boolean, hostSupported?: boolean, lastUpdate?: string, nameServerType?: domain.nameServer.NameServerTypeEnum, nameServers?: domain.nameServer.NameServer[], offer?: domain.OfferEnum, owoSupported?: boolean, parentService?: domain.ParentService, renewalDate?: string, renewalState?: domain.RenewalStateEnum, serviceId?: number, state?: domain.DomainStateEnum, suspensionState?: domain.SuspensionStateEnum, transferLockStatus?: domain.LockStatusEnum, whoisOwner?: string }): Promise<domain.DomainService>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        authInfo: {
            /**
             * Return authInfo code if the domain is unlocked
             * GET /domain/{serviceName}/authInfo
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
             * POST /domain/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
        }
        configurations: {
            obfuscatedEmails: {
                /**
                 * Retrieve obfuscated emails configuration
                 * GET /domain/{serviceName}/configurations/obfuscatedEmails
                 */
                $get(): Promise<domain.configurations.ObfuscatedEmail[]>;
                /**
                 * Save a new obfuscated emails configuration
                 * PUT /domain/{serviceName}/configurations/obfuscatedEmails
                 */
                $put(params: { contacts: domain.configurations.ContactTypeEnum[] }): Promise<domain.configurations.ObfuscatedEmail[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                refresh: {
                    /**
                     * Refresh an obfuscated emails configuration with new values
                     * POST /domain/{serviceName}/configurations/obfuscatedEmails/refresh
                     */
                    $post(params: { contacts: domain.configurations.ContactTypeEnum[] }): Promise<void>;
                }
            }
            optin: {
                /**
                 * Retrieve optin configuration
                 * GET /domain/{serviceName}/configurations/optin
                 */
                $get(): Promise<domain.configurations.Optin[]>;
                /**
                 * Save a new optin configuration
                 * PUT /domain/{serviceName}/configurations/optin
                 */
                $put(params?: { optin?: domain.configurations.Optin[] }): Promise<domain.configurations.Optin[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        dsRecord: {
            /**
             * List of domain's DS Records
             * GET /domain/{serviceName}/dsRecord
             */
            $get(params?: { flags?: dnssec.KeyFlagEnum, status?: dnssec.KeyStatusEnum }): Promise<number[]>;
            /**
             * Update DS records
             * POST /domain/{serviceName}/dsRecord
             */
            $post(params: { keys: dnssec.Key[] }): Promise<domain.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get details on this DS Record
                 * GET /domain/{serviceName}/dsRecord/{id}
                 */
                $get(): Promise<dnssec.Key>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        glueRecord: {
            /**
             * List of glue records
             * GET /domain/{serviceName}/glueRecord
             */
            $get(params?: { host?: string }): Promise<string[]>;
            /**
             * Create a glue record
             * POST /domain/{serviceName}/glueRecord
             */
            $post(params: { host: string, ips: string[] }): Promise<domain.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(host: string): {
                /**
                 * Delete the glue record
                 * DELETE /domain/{serviceName}/glueRecord/{host}
                 */
                $delete(): Promise<domain.Task>;
                /**
                 * Get this glue record
                 * GET /domain/{serviceName}/glueRecord/{host}
                 */
                $get(): Promise<domain.glueRecord.GlueRecord>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                update: {
                    /**
                     * Update the glue record
                     * POST /domain/{serviceName}/glueRecord/{host}/update
                     */
                    $post(params: { host?: string, ips: string[] }): Promise<domain.Task>;
                }
            };
        }
        nameServer: {
            /**
             * List of current name servers
             * GET /domain/{serviceName}/nameServer
             */
            $get(): Promise<number[]>;
            /**
             * Add new name server
             * POST /domain/{serviceName}/nameServer
             */
            $post(params: { nameServer: domain.nameServer.NameServerInput[] }): Promise<domain.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Delete a name server
                 * DELETE /domain/{serviceName}/nameServer/{id}
                 */
                $delete(): Promise<domain.Task>;
                /**
                 * Get this name server configuration
                 * GET /domain/{serviceName}/nameServer/{id}
                 */
                $get(): Promise<domain.nameServer.FullNameServer>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                status: {
                    /**
                     * Get name server status
                     * GET /domain/{serviceName}/nameServer/{id}/status
                     */
                    $get(): Promise<domain.nameServer.NameServerStatus>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        nameServers: {
            update: {
                /**
                 * Update DNS servers
                 * POST /domain/{serviceName}/nameServers/update
                 */
                $post(params: { nameServers: domain.nameServer.NameServerInput[] }): Promise<domain.Task>;
            }
        }
        option: {
            /**
             * List domain options
             * GET /domain/{serviceName}/option
             */
            $get(): Promise<domain.DomainOptionEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(option: domain.DomainOptionEnum): {
                /**
                 * Remove a given option
                 * DELETE /domain/{serviceName}/option/{option}
                 */
                $delete(): Promise<void>;
                /**
                 * Get details on this domain option
                 * GET /domain/{serviceName}/option/{option}
                 */
                $get(): Promise<domain.Option>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        options: {
            /**
             * Retrieve data about the options associated to a domain
             * GET /domain/{serviceName}/options
             */
            $get(): Promise<domain.ServiceOptions>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        outgoingTransfer: {
            approve: {
                /**
                 * Approve Outgoing Transfer for a domain
                 * POST /domain/{serviceName}/outgoingTransfer/approve
                 */
                $post(params?: { approveType?: domain.ApproveTypeEnum, ident?: string }): Promise<void>;
            }
        }
        rules: {
            emailsObfuscation: {
                /**
                 * Retrieve emails obfuscation rule
                 * GET /domain/{serviceName}/rules/emailsObfuscation
                 */
                $get(): Promise<domain.configurations.ContactTypeEnum[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            optin: {
                /**
                 * Retrieve optin rule
                 * GET /domain/{serviceName}/rules/optin
                 */
                $get(): Promise<domain.rules.Optin[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        serviceInfos: {
            /**
             * Get service information
             * GET /domain/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Update service information
             * PUT /domain/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        task: {
            /**
             * List all domain tasks
             * GET /domain/{serviceName}/task
             */
            $get(params?: { function_?: string, status?: domain.OperationStatusEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get details about a domain task
                 * GET /domain/{serviceName}/task/{id}
                 */
                $get(): Promise<domain.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                accelerate: {
                    /**
                     * Accelerate the task
                     * POST /domain/{serviceName}/task/{id}/accelerate
                     */
                    $post(): Promise<void>;
                }
                cancel: {
                    /**
                     * Cancel the task
                     * POST /domain/{serviceName}/task/{id}/cancel
                     */
                    $post(): Promise<void>;
                }
                relaunch: {
                    /**
                     * Relaunch the task
                     * POST /domain/{serviceName}/task/{id}/relaunch
                     */
                    $post(): Promise<void>;
                }
            };
        }
        ukOutgoingTransfer: {
            /**
             * Schedule an outgoing transfer task for this domain (.uk only)
             * POST /domain/{serviceName}/ukOutgoingTransfer
             */
            $post(params: { name?: string, tag: string }): Promise<domain.Task>;
        }
        ukRegistrars: {
            /**
             * Return the list of all .uk registrars
             * GET /domain/{serviceName}/ukRegistrars
             */
            $get(): Promise<domain.UkRegistrar[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    };
}
