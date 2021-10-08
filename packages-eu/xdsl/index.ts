import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /xdsl Models
 * Source: https://eu.api.ovh.com/1.0/xdsl.json
 */
export namespace complexType {
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
    /**
     * A value set tagged with its unit
     * interface fullName: complexType.UnitAndValues.UnitAndValues
     */
    export interface UnitAndValues<T> {
        unit: string;
        values: T[];
    }
}
export namespace connectivity {
    export namespace eligibility {
        /**
         * Represents a time slot for a meeting
         * interface fullName: connectivity.eligibility.MeetingSlot.MeetingSlot
         */
        export interface MeetingSlot {
            endDate: string;
            startDate: string;
            uiCode?: string;
        }
        /**
         * List of available meeting time slots
         * interface fullName: connectivity.eligibility.Meetings.Meetings
         */
        export interface Meetings {
            canBookFakeMeeting: boolean;
            meetingSlots: connectivity.eligibility.MeetingSlot[];
        }
    }
}
export namespace coreTypes {
    /**
     * ISO country codes
     * type fullname: coreTypes.CountryEnum
     */
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
    /**
     * Ip versions
     * type fullname: coreTypes.IpVersionEnum
     */
    export type IpVersionEnum = "v4" | "v6"
}
export namespace email {
    export namespace pro {
        /**
         * Current object state
         * type fullname: email.pro.ObjectStateEnum
         */
        export type ObjectStateEnum = "creating" | "deleting" | "ok" | "reopening" | "suspended" | "suspending" | "unknown"
    }
}
export namespace order {
    /**
     * A contract
     * interface fullName: order.Contract.Contract
     */
    export interface Contract {
        content: string;
        name: string;
        url: string;
    }
    /**
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    /**
     * An order
     * interface fullName: order.Order.Order
     */
    export interface Order {
        contracts: order.Contract[];
        details: order.OrderDetail[];
        orderId?: number;
        prices: order.OrderPrices;
        url?: string;
    }
    /**
     * Detail of an order
     * interface fullName: order.OrderDetail.OrderDetail
     */
    export interface OrderDetail {
        description: string;
        detailType?: order.OrderDetailTypeEnum;
        domain: string;
        quantity: number;
        totalPrice: order.Price;
        unitPrice: order.Price;
    }
    /**
     * Product type of item in order
     * type fullname: order.OrderDetailTypeEnum
     */
    export type OrderDetailTypeEnum = "ACCESSORY" | "CAUTION" | "CHOOSED" | "CONSUMPTION" | "CREATION" | "DELIVERY" | "DURATION" | "GIFT" | "INSTALLATION" | "LICENSE" | "MUTE" | "OTHER" | "OUTPLAN" | "QUANTITY" | "REFUND" | "RENEW" | "SPECIAL" | "SWITCH" | "TRANSFER" | "VOUCHER"
    /**
     * Prices of an order
     * interface fullName: order.OrderPrices.OrderPrices
     */
    export interface OrderPrices {
        tax: order.Price;
        withTax: order.Price;
        withoutTax: order.Price;
    }
    /**
     * Price with it's currency and textual representation
     * interface fullName: order.Price.Price
     */
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
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
export namespace spare {
    export namespace xdsl {
        /**
         * Spare properties
         * interface fullName: spare.xdsl.XdslSpare.XdslSpare
         */
        export interface XdslSpare {
            brand: string;
            macAddress: string;
        }
    }
}
export namespace telephony {
    /**
     * Contact informations structure
     * interface fullName: telephony.Contact.Contact
     */
    export interface Contact {
        address?: string;
        city?: string;
        country?: coreTypes.CountryEnum;
        email?: string;
        firstname?: string;
        name?: string;
        organisation?: string;
        phone?: string;
        zip?: string;
    }
    /**
     * Current Return Merchandise Authorisation
     * interface fullName: telephony.Rma.Rma
     */
    export interface Rma {
        cancellable: boolean;
        creationDatetime: string;
        equipmentReference: string;
        id: string;
        newMerchandise?: string;
        offerTypeNew?: telephony.RmaOfferTypeEnum;
        offerTypeOld: telephony.RmaOfferTypeEnum;
        process: telephony.RmaReplaceTypeEnum;
        receptionDatetime?: string;
        shippingContact: telephony.Contact;
        status: telephony.RmaStatusEnum;
        steps: telephony.RmaStep[];
        terminationDatetime?: string;
        type: telephony.RmaTypeEnum;
    }
    /**
     * Types of return merchandise authorisation you can change to
     * type fullname: telephony.RmaChangeTypeEnum
     */
    export type RmaChangeTypeEnum = "resiliate" | "toSip"
    /**
     * Return merchandise authorisation offer type
     * type fullname: telephony.RmaOfferTypeEnum
     */
    export type RmaOfferTypeEnum = "deposit" | "loan" | "purchase"
    /**
     * Return merchandise authorisation type
     * type fullname: telephony.RmaReplaceTypeEnum
     */
    export type RmaReplaceTypeEnum = "changePhone" | "phoneRestitution" | "undefined"
    /**
     * Return merchandise authorisation step
     * type fullname: telephony.RmaStatusEnum
     */
    export type RmaStatusEnum = "closed" | "open" | "received"
    /**
     * Informations related to the current RMA step status
     * interface fullName: telephony.RmaStep.RmaStep
     */
    export interface RmaStep {
        description: string;
        doneDate?: string;
        infos?: string;
        name: telephony.RmaStepNameEnum;
        status: telephony.RmaStepStatusEnum;
    }
    /**
     * RMA step names
     * type fullname: telephony.RmaStepNameEnum
     */
    export type RmaStepNameEnum = "dispatchJustification" | "equipmentSending" | "equipmentTesting" | "opening" | "parcelReception" | "parcelValidation" | "validation"
    /**
     * Status of the RMA step
     * type fullname: telephony.RmaStepStatusEnum
     */
    export type RmaStepStatusEnum = "done" | "todo"
    /**
     * Return merchandise authorisation type
     * type fullname: telephony.RmaTypeEnum
     */
    export type RmaTypeEnum = "after sale equipment service exchange" | "after sale phone service exchange" | "equipment restitution" | "fast exchange" | "old merchandise reception before exchange" | "phone restitution" | "resends due to shipping lost by the carrier" | "resends due to shipping not withdraw" | "specific return merchandise authorisation" | "termination" | "unknown"
}
export namespace xdsl {
    /**
     * XDSL Access
     * interface fullName: xdsl.Access.Access
     */
    export interface Access {
        accessName: string;
        accessType: xdsl.DslTypeEnum;
        address: xdsl.AddressDetail;
        capabilities: xdsl.AccessCapabilities;
        description: string;
        ipv6Enabled: boolean;
        lnsRateLimit?: number;
        monitoring: boolean;
        nra: string;
        packName?: string;
        pairsNumber: number;
        role: xdsl.AccessRoleEnum;
        status: xdsl.AccessStatusEnum;
    }
    /**
     * Describe the capabilities of the Access
     * interface fullName: xdsl.AccessCapabilities.AccessCapabilities
     */
    export interface AccessCapabilities {
        canApplyLnsRateLimit: boolean;
        canChangeDslamProfile: boolean;
        canChangeLns: boolean;
        canGetRadiusConnectionLogs: boolean;
        canResetDslamPort: boolean;
        hasDslamPort: boolean;
    }
    /**
     * Diagnostic of the access
     * interface fullName: xdsl.AccessDiagnostic.AccessDiagnostic
     */
    export interface AccessDiagnostic {
        capabilities: xdsl.AccessDiagnosticCapabilities;
        diagnosticTime: string;
        incident?: boolean;
        isActiveOnLns?: boolean;
        isModemConnected?: boolean;
        lineDetails?: xdsl.LineDiagnostic[];
        maintenance?: boolean;
        ping?: boolean;
        remaining: number;
    }
    /**
     * Describe the capabilities of the access diagnostic
     * interface fullName: xdsl.AccessDiagnosticCapabilities.AccessDiagnosticCapabilities
     */
    export interface AccessDiagnosticCapabilities {
        incident: boolean;
        isActiveOnLns: boolean;
        isModemConnected: boolean;
        lineTest: boolean;
        ping: boolean;
        proposedProfileId: boolean;
        sync: boolean;
    }
    /**
     * Available access roles
     * type fullname: xdsl.AccessRoleEnum
     */
    export type AccessRoleEnum = "backup" | "main"
    /**
     * Various types of statisctics available for the access.
     * type fullname: xdsl.AccessStatisticsTypeEnum
     */
    export type AccessStatisticsTypeEnum = "ping" | "traffic:download" | "traffic:upload"
    /**
     * Status of the access
     * type fullname: xdsl.AccessStatusEnum
     */
    export type AccessStatusEnum = "active" | "cancelled" | "close" | "deleting" | "doing" | "migration" | "slamming" | "upgradeOffer"
    /**
     * All components of an address
     * interface fullName: xdsl.AddressDetail.AddressDetail
     */
    export interface AddressDetail {
        building?: string;
        city: string;
        door?: string;
        firstName: string;
        floor?: string;
        inseeCode: string;
        lastName: string;
        numberStreet: string;
        residence?: string;
        rivoliCode: string;
        stairs?: string;
        street: string;
        zipCode: string;
    }
    /**
     * Spams detected from xdsl access
     * interface fullName: xdsl.AntiSpam.AntiSpam
     */
    export interface AntiSpam {
        date: string;
        ip: string;
        lastSpamDetected: string;
        status: xdsl.antiSpam.AntiSpamStatusEnum;
    }
    /**
     * Async task
     * interface fullName: xdsl.AsyncTask.AsyncTask
     */
    export interface AsyncTask<T> {
        error?: string;
        result?: T;
        status: xdsl.AsyncTaskStatusEnum;
    }
    /**
     * Async task array
     * interface fullName: xdsl.AsyncTaskArray.AsyncTaskArray
     */
    export interface AsyncTaskArray<T> {
        error?: string;
        result?: T[];
        status: xdsl.AsyncTaskStatusEnum;
    }
    /**
     * AsyncTask status
     * type fullname: xdsl.AsyncTaskStatusEnum
     */
    export type AsyncTaskStatusEnum = "error" | "ok" | "pending"
    /**
     * DHCP Configuration of the Modem
     * interface fullName: xdsl.DHCP.DHCP
     */
    export interface DHCP {
        defaultGateway: string;
        dhcpName: string;
        domainName: string;
        endAddress: string;
        leaseTime: number;
        primaryDNS: string;
        secondaryDNS?: string;
        serverEnabled: boolean;
        startAddress: string;
        subnetMask: string;
        taskId?: number;
    }
    /**
     * DHCP Static Address
     * interface fullName: xdsl.DHCPStaticAddress.DHCPStaticAddress
     */
    export interface DHCPStaticAddress {
        IPAddress: string;
        MACAddress: string;
        name?: string;
        taskId?: number;
    }
    /**
     * Deconsolidation of the line.
     * type fullname: xdsl.DeconsolidationEnum
     */
    export type DeconsolidationEnum = "createNeighbour" | "creation" | "creationNeighbour" | "partial" | "total"
    /**
     * Show the deconsolidation terms
     * interface fullName: xdsl.DeconsolidationTerms.DeconsolidationTerms
     */
    export interface DeconsolidationTerms {
        engagement: number;
        monthlyPrice: order.Price;
        price: order.Price;
    }
    /**
     * Describe device informations of a Modem
     * interface fullName: xdsl.DeviceModemInfo.DeviceModemInfo
     */
    export interface DeviceModemInfo {
        brand: string;
        ip: string;
        lastUpdate: string;
        macAddress: string;
        model: string;
        oui: string;
        overEthernet?: string;
        pppLogin?: string;
        serial: string;
        softVersion: string;
    }
    /**
     * Possible DSL technologies
     * type fullname: xdsl.DslTypeEnum
     */
    export type DslTypeEnum = "adsl" | "ftte" | "ftth" | "sdsl" | "vdsl"
    /**
     * Profile on the DSLAM
     * interface fullName: xdsl.DslamLineProfile.DslamLineProfile
     */
    export interface DslamLineProfile {
        id: number;
        isCurrent: boolean;
        name: string;
    }
    /**
     * Information about the port on the DSLAM
     * interface fullName: xdsl.DslamPort.DslamPort
     */
    export interface DslamPort {
        lastDesyncDate?: string;
        lastSyncDate?: string;
        profile?: xdsl.DslamLineProfile;
        status: xdsl.DslamPortStatusEnum;
    }
    /**
     * A message log from the DSLAM
     * interface fullName: xdsl.DslamPortLog.DslamPortLog
     */
    export interface DslamPortLog {
        date: string;
        lastOccurrenceDate: string;
        message: string;
        numberOfOccurrences: number;
    }
    /**
     * Different states of a DSLAM port
     * type fullname: xdsl.DslamPortStatusEnum
     */
    export type DslamPortStatusEnum = "activated" | "deactivated" | "outofsync"
    /**
     * Informations about the extra IP range during address move
     * interface fullName: xdsl.ExtraIpRangeMove.ExtraIpRangeMove
     */
    export interface ExtraIpRangeMove {
        date: string;
        ipRange: string;
        moveTo: string;
    }
    /**
     * Maximum time needed to repair a landline
     * type fullname: xdsl.FaultRepairTimeEnum
     */
    export type FaultRepairTimeEnum = "4HNO" | "4HO" | "NORMAL"
    /**
     * Gtr of the line.
     * type fullname: xdsl.GtrEnum
     */
    export type GtrEnum = "4hno" | "4ho" | "none"
    /**
     * Informations about an IP address
     * interface fullName: xdsl.IP.IP
     */
    export interface IP {
        dnsList: string[];
        ip: string;
        range: number;
        status: xdsl.IpStatusEnum;
        version: coreTypes.IpVersionEnum;
    }
    /**
     * Detected incident
     * interface fullName: xdsl.Incident.Incident
     */
    export interface Incident {
        comment: string;
        creationDate: string;
        departments: string[];
        endDate?: string;
        id: number;
        nra: string[];
        operators: xdsl.OperatorTypeEnum[];
        taskId?: number;
    }
    /**
     * Status of an IP.
     * type fullname: xdsl.IpStatusEnum
     */
    export type IpStatusEnum = "active" | "close" | "toDelete"
    /**
     * LAN Configuration of the Modem
     * interface fullName: xdsl.LAN.LAN
     */
    export interface LAN {
        IPAddress: string;
        addressingType: xdsl.xdslModemConfig.AddressingTypeEnum;
        lanName: string;
        subnetMask: string;
        taskId?: number;
    }
    /**
     * Infos about a Landline at the concentration point
     * interface fullName: xdsl.LandlineConcentrationPoint.LandlineConcentrationPoint
     */
    export interface LandlineConcentrationPoint {
        lineHead: string;
        lineInitialSection: number;
        lineInitialSectionPair: number;
    }
    /**
     * Information about the physical copper line
     * interface fullName: xdsl.Line.Line
     */
    export interface Line {
        concentrationPoint?: xdsl.LandlineConcentrationPoint;
        deconsolidation: xdsl.DeconsolidationEnum;
        directDistribution?: boolean;
        distance: number;
        faultRepairTime: xdsl.FaultRepairTimeEnum;
        lineSectionsLength: xdsl.LineSectionLength[];
        mitigation: number;
        number: string;
        originalNumber?: string;
        portability: boolean;
        syncDown?: number;
        syncUp?: number;
    }
    /**
     * Detailed line tests
     * interface fullName: xdsl.LineDiagnostic.LineDiagnostic
     */
    export interface LineDiagnostic {
        lineTest?: xdsl.LineTestEnum;
        lineTestTime?: string;
        number: string;
        proposedProfileId?: number;
        sync: boolean;
    }
    /**
     * interface fullName: xdsl.LineSectionLength.LineSectionLength
     */
    export interface LineSectionLength {
        diameter: number;
        length: number;
    }
    /**
     * Various types of statisctics available for the line.
     * type fullname: xdsl.LineStatisticsTypeEnum
     */
    export type LineStatisticsTypeEnum = "attenuation:download" | "attenuation:upload" | "error:crc" | "error:fec" | "error:hec" | "snr:download" | "snr:upload" | "synchronization:download" | "synchronization:upload"
    /**
     * Line tests results
     * type fullname: xdsl.LineTestEnum
     */
    export type LineTestEnum = "actionPending" | "customerSideProblem" | "error" | "noProblem" | "ovhSideProblem"
    /**
     * Modem
     * interface fullName: xdsl.Modem.Modem
     */
    export interface Modem {
        acsBackend: xdsl.xdslModemConfig.ACSBackendEnum;
        acsVersion?: string;
        brandName: string;
        capabilities: xdsl.ModemCapabilities;
        dmzIP?: string;
        easyFirewallLevel?: xdsl.xdslModemConfig.EasyFirewallLevelEnum;
        ipv6Support: boolean;
        isBridged: boolean;
        lastCwmpRequestDate?: string;
        macAddress: string;
        managedByOvh: boolean;
        model: string;
        mtuSize?: xdsl.xdslModemConfig.MTUSizeEnum;
    }
    /**
     * Describe the capabilities of the Modem
     * interface fullName: xdsl.ModemCapabilities.ModemCapabilities
     */
    export interface ModemCapabilities {
        canBeManagedByOvh: boolean;
        canChangeACS: boolean;
        canChangeBridgeMode: boolean;
        canChangeDHCP: boolean;
        canChangeDMZ: boolean;
        canChangeEasyFirewallLevel: boolean;
        canChangeFirmware: boolean;
        canChangeLAN: boolean;
        canChangeManagement: boolean;
        canChangeMtu: boolean;
        canChangePortMapping: boolean;
        canChangeWLAN: boolean;
        canReboot: boolean;
        canReconfigureVoip: boolean;
        canRefreshConnectedDevices: boolean;
        canReset: boolean;
    }
    /**
     * Information about modem exchange
     * interface fullName: xdsl.ModemExchangeInfo.ModemExchangeInfo
     */
    export interface ModemExchangeInfo {
        canExchange: boolean;
        newModel: string;
        price: order.Price;
        priceWithTax: order.Price;
    }
    /**
     * Describe general information of a Modem
     * interface fullName: xdsl.ModemInfo.ModemInfo
     */
    export interface ModemInfo {
        device: xdsl.DeviceModemInfo;
        statistics: xdsl.StatsModemInfo;
    }
    /**
     * Defines where and how the notifications will be sent
     * interface fullName: xdsl.MonitoringNotification.MonitoringNotification
     */
    export interface MonitoringNotification {
        allowIncident: boolean;
        downThreshold: number;
        email?: string;
        enabled: boolean;
        frequency: xdsl.monitoringNotifications.FrequencyEnum;
        id: number;
        phone?: string;
        smsAccount?: string;
        type: xdsl.monitoringNotifications.TypeEnum;
    }
    /**
     * Operators
     * type fullname: xdsl.OperatorTypeEnum
     */
    export type OperatorTypeEnum = "collect" | "kosc" | "ovh"
    /**
     * Scheduled action before the next renewal of the service
     * interface fullName: xdsl.PendingAction.PendingAction
     */
    export interface PendingAction {
        action: string;
        dateTodo: string;
    }
    /**
     * Port Mappings
     * interface fullName: xdsl.PortMapping.PortMapping
     */
    export interface PortMapping {
        allowedRemoteIp?: string;
        description?: string;
        externalPortEnd?: number;
        externalPortStart: number;
        id: number;
        internalClient: string;
        internalPort: number;
        internalPortEnd?: number;
        name: string;
        protocol: xdsl.xdslModemConfig.ProtocolTypeEnum;
        taskId?: number;
    }
    /**
     * Log entry of an auth attempt to the radius server
     * interface fullName: xdsl.RadiusConnectionLog.RadiusConnectionLog
     */
    export interface RadiusConnectionLog {
        date: string;
        login: string;
        message: string;
        state: string;
    }
    /**
     * Details about the resiliation
     * interface fullName: xdsl.ResiliationFollowUpDetail.ResiliationFollowUpDetail
     */
    export interface ResiliationFollowUpDetail {
        dateTodo: string;
        needModemReturn: boolean;
        registrationDate: string;
        status: string;
    }
    /**
     * Reason of a resiliation
     * type fullname: xdsl.ResiliationReasonEnum
     */
    export type ResiliationReasonEnum = "addressMove" | "billingProblems" | "cessationOfActivity" | "changeOfTerms" | "ftth" | "goToCompetitor" | "other" | "technicalProblems"
    /**
     * Information about the reason for the resiliation
     * interface fullName: xdsl.ResiliationSurvey.ResiliationSurvey
     */
    export interface ResiliationSurvey {
        comment?: string;
        type: xdsl.ResiliationReasonEnum;
    }
    /**
     * Show the resiliation terms
     * interface fullName: xdsl.ResiliationTerms.ResiliationTerms
     */
    export interface ResiliationTerms {
        due: order.Price;
        engageDate?: string;
        minResiliationDate: string;
        resiliationDate: string;
        resiliationReasons: xdsl.ResiliationReasonEnum[];
    }
    /**
     * Status of the service
     * type fullname: xdsl.ServiceStatusEnum
     */
    export type ServiceStatusEnum = "disabled" | "enabled"
    /**
     * Periods for statistics.
     * type fullname: xdsl.StatisticsPeriodEnum
     */
    export type StatisticsPeriodEnum = "daily" | "monthly" | "preview" | "weekly" | "yearly"
    /**
     * Describe statistics information of a Modem
     * interface fullName: xdsl.StatsModemInfo.StatsModemInfo
     */
    export interface StatsModemInfo {
        connectionUptime: number;
        crcError: number;
        deviceUptime: number;
        downstreamAttenuation: number;
        downstreamMargin: number;
        downstreamSync: number;
        fecError: number;
        hecError: number;
        lastUpdate: string;
        modulation: string;
        quarterHourStart: number;
        syncUptime: number;
        upstreamAttenuation: number;
        upstreamMargin: number;
        upstreamSync: number;
    }
    /**
     * Describes the current status of a task
     * interface fullName: xdsl.Task.Task
     */
    export interface Task {
        function: string;
        id: number;
        status: xdsl.TaskStatusEnum;
        todoDate: string;
        updateDate: string;
    }
    /**
     * Status of a task.
     * type fullname: xdsl.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "problem" | "todo"
    /**
     * Modem Template
     * interface fullName: xdsl.TemplateModem.TemplateModem
     */
    export interface TemplateModem {
        DHCP: xdsl.templateModem.DHCP[];
        LAN: xdsl.templateModem.LAN[];
        WLAN: xdsl.templateModem.WLAN[];
        capabilities: string;
        creationDate: string;
        dmzIP?: string;
        mtuSize?: xdsl.xdslModemConfig.MTUSizeEnum;
        name: string;
        parametersToIgnore?: xdsl.templateModem.ParametersToIgnore;
        portMapping: xdsl.templateModem.PortMapping[];
    }
    /**
     * A value associated to a timestamp
     * interface fullName: xdsl.TimestampAndValue.TimestampAndValue
     */
    export interface TimestampAndValue {
        timestamp: number;
        value?: number;
    }
    /**
     * WLAN Configuration of the Modem
     * interface fullName: xdsl.WLAN.WLAN
     */
    export interface WLAN {
        SSID: string;
        SSIDAdvertisementEnabled: boolean;
        bandSteering: boolean;
        channel: number;
        channelMode: xdsl.xdslModemConfig.ChannelModeEnum;
        enabled: boolean;
        frequency: xdsl.xdslModemConfig.FrequencyEnum;
        guest: boolean;
        securityKey: string;
        securityType: xdsl.xdslModemConfig.SecurityTypeEnum;
        taskId?: number;
        wifiName: string;
    }
    /**
     * Frequency of WLAN
     * type fullname: xdsl.WLANFrequencyEnum
     */
    export type WLANFrequencyEnum = "2.4GHz" | "5GHz"
    export namespace antiSpam {
        /**
         * AntiSpam status
         * type fullname: xdsl.antiSpam.AntiSpamStatusEnum
         */
        export type AntiSpamStatusEnum = "block" | "done" | "new" | "unblock" | "warn"
        /**
         * List of evidences
         * interface fullName: xdsl.antiSpam.EvidencesInfo.EvidencesInfo
         */
        export interface EvidencesInfo {
            error?: string;
            result?: xdsl.antiSpam.EvidencesInfoDetail[];
            status: xdsl.antiSpam.EvidencesInfoStatusEnum;
        }
        /**
         * detail on evidences stored on PCS
         * interface fullName: xdsl.antiSpam.EvidencesInfoDetail.EvidencesInfoDetail
         */
        export interface EvidencesInfoDetail {
            date: string;
            filename: string;
            url: string;
        }
        /**
         * Evidences AsyncTask status
         * type fullname: xdsl.antiSpam.EvidencesInfoStatusEnum
         */
        export type EvidencesInfoStatusEnum = "error" | "ok" | "pending"
    }
    /**
     * Connected Device
     * interface fullName: xdsl.connectedDevice.connectedDevice
     */
    export interface connectedDevice {
        active: boolean;
        addressSource: xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum;
        hostName: string;
        informationDate: string;
        interfaceType: string;
        ipAddress: string;
        leaseTimeRemaining: number;
        macAddress: string;
    }
    export namespace eligibility {
        /**
         * Represents an address
         * interface fullName: xdsl.eligibility.Address.Address
         */
        export interface Address {
            building?: string;
            city: xdsl.eligibility.City;
            door?: string;
            floor?: string;
            logo?: string;
            owner?: string;
            residence?: string;
            stair?: string;
            street?: xdsl.eligibility.Street;
            streetNumber?: string;
        }
        /**
         * Details of a Building
         * interface fullName: xdsl.eligibility.Building.Building
         */
        export interface Building {
            name: string;
            nro: string;
            reference: string;
            type: xdsl.eligibility.BuildingTypeEnum;
        }
        /**
         * Type of building
         * type fullname: xdsl.eligibility.BuildingTypeEnum
         */
        export type BuildingTypeEnum = "BUILDING" | "HOUSE"
        /**
         * Represent a city
         * interface fullName: xdsl.eligibility.City.City
         */
        export interface City {
            inseeCode: string;
            locality?: string;
            name: string;
            zipCode: string;
        }
        /**
         * A message and its code
         * interface fullName: xdsl.eligibility.CodeAndMessage.CodeAndMessage
         */
        export interface CodeAndMessage {
            code: string;
            message: string;
        }
        /**
         * Eligibility result
         * interface fullName: xdsl.eligibility.Eligibility.Eligibility
         */
        export interface Eligibility {
            address?: xdsl.eligibility.Address;
            characteristics: xdsl.eligibility.LineCharacteristics;
            endpoint: xdsl.eligibility.LineEndpointEnum;
            id: string;
            infos: xdsl.eligibility.LineInfos;
            offers: xdsl.eligibility.Offer[];
            portability: xdsl.eligibility.Portability;
        }
        /**
         * Fiber Eligibility result
         * interface fullName: xdsl.eligibility.FiberEligibility.FiberEligibility
         */
        export interface FiberEligibility {
            id: string;
            offers: xdsl.eligibility.FiberOffer[];
        }
        /**
         * A fiber offer
         * interface fullName: xdsl.eligibility.FiberOffer.FiberOffer
         */
        export interface FiberOffer {
            availibilityDate?: string;
            downloadRate?: number;
            eligible: boolean;
            gtr: xdsl.GtrEnum[];
            guaranteed: boolean;
            label: string;
            reason?: string;
            type: xdsl.DslTypeEnum;
            uploadRate?: number;
        }
        /**
         * Details of a FiberStreet
         * interface fullName: xdsl.eligibility.FiberStreet.FiberStreet
         */
        export interface FiberStreet {
            streetCode: string;
            streetName: string;
        }
        /**
         * Status of a landline
         * type fullname: xdsl.eligibility.LandlineStatusEnum
         */
        export type LandlineStatusEnum = "active" | "inactive"
        /**
         * a line
         * interface fullName: xdsl.eligibility.Line.Line
         */
        export interface Line {
            address: xdsl.eligibility.Address;
            contactName: string;
            lineNumber: string;
            lineStatus: xdsl.eligibility.LandlineStatusEnum;
        }
        /**
         * The characteristics of a line
         * interface fullName: xdsl.eligibility.LineCharacteristics.LineCharacteristics
         */
        export interface LineCharacteristics {
            calibration: xdsl.eligibility.LineSectionCalibration[];
            desaturationFreePairs: number;
            distance: number;
            freePairs: number;
            mitigation: number;
            mitigationSdsl: number;
            nra: string;
        }
        /**
         * Type of the endpoint for the eligibility
         * type fullname: xdsl.eligibility.LineEndpointEnum
         */
        export type LineEndpointEnum = "address" | "line"
        /**
         * The line infos
         * interface fullName: xdsl.eligibility.LineInfos.LineInfos
         */
        export interface LineInfos {
            createNeighbour: boolean;
            lineNumber?: string;
            lineStatus?: xdsl.eligibility.LandlineStatusEnum;
            unlistedNumber: boolean;
        }
        /**
         * A line section calibration detail
         * interface fullName: xdsl.eligibility.LineSectionCalibration.LineSectionCalibration
         */
        export interface LineSectionCalibration {
            diameter: number;
            length: number;
        }
        /**
         * Represents a time slot for a meeting
         * interface fullName: xdsl.eligibility.MeetingSlot.MeetingSlot
         */
        export interface MeetingSlot {
            endDate: string;
            startDate: string;
            uiCode: string;
        }
        /**
         * List of available meeting time slots
         * interface fullName: xdsl.eligibility.MeetingSlots.MeetingSlots
         */
        export interface MeetingSlots {
            canBookFakeMeeting: boolean;
            meetingSlots: xdsl.eligibility.MeetingSlot[];
        }
        /**
         * An offer
         * interface fullName: xdsl.eligibility.Offer.Offer
         */
        export interface Offer {
            desaturation?: boolean;
            downloadRate?: number;
            gtr: xdsl.GtrEnum[];
            guaranteed: boolean;
            label: string;
            pairs?: number;
            provider?: xdsl.eligibility.ProviderEnum;
            rate?: number;
            type: xdsl.DslTypeEnum;
            unbundling?: xdsl.DeconsolidationEnum[];
            uploadRate?: number;
        }
        /**
         * Eligibility of the portability of the line number
         * interface fullName: xdsl.eligibility.Portability.Portability
         */
        export interface Portability {
            comments: xdsl.eligibility.CodeAndMessage[];
            eligible: boolean;
            underCondition: boolean;
            warnings: xdsl.eligibility.CodeAndMessage[];
        }
        /**
         * The providers
         * type fullname: xdsl.eligibility.ProviderEnum
         */
        export type ProviderEnum = "axione" | "ft" | "kosc" | "ovh" | "sfr"
        /**
         * Represent a street
         * interface fullName: xdsl.eligibility.Street.Street
         */
        export interface Street {
            name: string;
            rivoliCode: string;
        }
    }
    export namespace email {
        export namespace pro {
            /**
             * Task Struct
             * interface fullName: xdsl.email.pro.Task.Task
             */
            export interface Task {
                finishDate?: string;
                function: string;
                status: xdsl.email.pro.TaskStatusEnum;
                todoDate: string;
            }
            /**
             * Status of an Email Pro task.
             * type fullname: xdsl.email.pro.TaskStatusEnum
             */
            export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        }
    }
    export namespace lineDiagnostic {
        /**
         * Customer answers for line diagnostic
         * interface fullName: xdsl.lineDiagnostic.Answers.Answers
         */
        export interface Answers {
            bandwidthTestUnit?: xdsl.lineDiagnostic.BandwidthTestUnitEnum;
            comment?: string;
            conditionsAccepted?: boolean;
            contactPhone?: string;
            datetimeOfAppearance?: string;
            downloadBandwidthTest?: number;
            endAfternoonHours?: string;
            endMorningHours?: string;
            followBySms?: boolean;
            hasModemKeptSynchronization?: boolean;
            idAppointment?: number;
            individualSite?: boolean;
            modemIsSynchronized?: boolean;
            modemMac?: string;
            modemStillSynchronized?: boolean;
            modemType?: string;
            ovhTicket?: string;
            problemType?: xdsl.lineDiagnostic.ProblemTypeEnum;
            resolvedAfterTests?: boolean;
            secureSite?: boolean;
            severalInternetConnections?: boolean;
            siteClosedDays?: string;
            siteDigicode?: string;
            siteOpening?: string;
            startAfternoonHours?: string;
            startMorningHours?: string;
            uploadBandwidthTest?: number;
        }
        /**
         * bandwidth unit for proof.ovh.net test values
         * type fullname: xdsl.lineDiagnostic.BandwidthTestUnitEnum
         */
        export type BandwidthTestUnitEnum = "Kbps" | "Mbps"
        /**
         * Informations directly get on DSLAM or Modem
         * interface fullName: xdsl.lineDiagnostic.ConnectionInformations.ConnectionInformations
         */
        export interface ConnectionInformations {
            crcError?: number;
            downstreamAttenuation?: number;
            downstreamMargin?: number;
            downstreamSync?: number;
            ifName?: string;
            profile?: string;
            upstreamAttenuation?: number;
            upstreamMargin?: number;
            upstreamSync?: number;
        }
        /**
         * Customer action to do
         * interface fullName: xdsl.lineDiagnostic.CustomerActionToDo.CustomerActionToDo
         */
        export interface CustomerActionToDo {
            description: string;
            name: xdsl.lineDiagnostic.CustomerActionsEnum;
        }
        /**
         * Customer possible actions
         * type fullname: xdsl.lineDiagnostic.CustomerActionsEnum
         */
        export type CustomerActionsEnum = "bePreparedToCheckModemSynchronization" | "changeDslFilterAndPlugInDti" | "changeExtensionCable" | "changeProfile" | "checkConnectionCable" | "checkConnectionLoginAndParameters" | "checkFilter" | "connectModemToOtherPlugs" | "neutralTest" | "rebootModem" | "resetModem" | "unplugEveryModems" | "unplugModem"
        /**
         * Diagnostic status and informations
         * interface fullName: xdsl.lineDiagnostic.Diagnostic.Diagnostic
         */
        export interface Diagnostic {
            data: xdsl.lineDiagnostic.DiagnosticData;
            faultType: xdsl.lineDiagnostic.FaultTypeEnum;
            id: number;
            status: xdsl.lineDiagnostic.DiagnosticStatusEnum;
        }
        /**
         * Diagnostic data and informations
         * interface fullName: xdsl.lineDiagnostic.DiagnosticData.DiagnosticData
         */
        export interface DiagnosticData {
            actionsDone: xdsl.lineDiagnostic.CustomerActionsEnum[];
            actionsToDo: xdsl.lineDiagnostic.CustomerActionToDo[];
            answers: xdsl.lineDiagnostic.Answers;
            comment?: string;
            creationDate: string;
            diagnosticDoneDate?: string;
            error: string;
            lastUpdate: string;
            lineDetails: xdsl.lineDiagnostic.LineDetails;
            robotAction?: xdsl.lineDiagnostic.RobotActionsEnum;
            seltTest: xdsl.lineDiagnostic.SeltResult;
            timeout: number;
            toAnswer: xdsl.lineDiagnostic.Question[];
        }
        /**
         * Diagnostic status possible values
         * type fullname: xdsl.lineDiagnostic.DiagnosticStatusEnum
         */
        export type DiagnosticStatusEnum = "cancelled" | "connectionProblem" | "genericIncidentPending" | "haveToConnectModemOnTheRightPlug" | "init" | "interventionRequested" | "noBandwidthFault" | "noProblemAnymore" | "noSyncFaultDiagnosticRequired" | "problem" | "resolvedAfterTests" | "sleeping" | "validationRefused" | "waitingHuman" | "waitingRobot" | "waitingValidation"
        /**
         * Line diagnostic fault type
         * type fullname: xdsl.lineDiagnostic.FaultTypeEnum
         */
        export type FaultTypeEnum = "alignment" | "noSync" | "syncLossOrLowBandwidth" | "unknown"
        /**
         * Theoretical line capabilities
         * interface fullName: xdsl.lineDiagnostic.LineCapabilities.LineCapabilities
         */
        export interface LineCapabilities {
            down?: number;
            mitigation?: string;
            ping?: number;
            up?: number;
        }
        /**
         * Line informations
         * interface fullName: xdsl.lineDiagnostic.LineDetails.LineDetails
         */
        export interface LineDetails {
            accessName: string;
            accessPing?: boolean;
            address?: string;
            connectionInfo?: xdsl.lineDiagnostic.ConnectionInformations;
            contactPhone?: string;
            description?: string;
            dslamIsSynchronized?: boolean;
            gtr: boolean;
            length: number;
            lineCapabilities?: xdsl.lineDiagnostic.LineCapabilities;
            lineType: xdsl.DslTypeEnum;
            nra?: string;
            number: string;
            operator: xdsl.lineDiagnostic.ProviderEnum;
            sections?: xdsl.lineDiagnostic.Section[];
        }
        /**
         * possible value for specific answer
         * interface fullName: xdsl.lineDiagnostic.PossibleValue.PossibleValue
         */
        export interface PossibleValue {
            id?: number;
            label?: string;
            value?: string;
        }
        /**
         * Possible customer questions
         * type fullname: xdsl.lineDiagnostic.ProblemTypeEnum
         */
        export type ProblemTypeEnum = "lowBandwidth" | "syncLoss"
        /**
         * The providers for xdsl access
         * type fullname: xdsl.lineDiagnostic.ProviderEnum
         */
        export type ProviderEnum = "axione" | "ft" | "ftBySfr" | "kosc" | "koscDeg" | "ovh" | "sfr"
        /**
         * Question to customer
         * interface fullName: xdsl.lineDiagnostic.Question.Question
         */
        export interface Question {
            defaultValue?: string;
            description: string;
            enumValues?: string[];
            name: xdsl.lineDiagnostic.QuestionsEnum;
            possibleValues?: xdsl.lineDiagnostic.PossibleValue[];
            required?: boolean;
            type: string;
        }
        /**
         * Possible customer questions
         * type fullname: xdsl.lineDiagnostic.QuestionsEnum
         */
        export type QuestionsEnum = "bandwidthTestUnit" | "comment" | "conditionsAccepted" | "contactPhone" | "datetimeOfAppearance" | "downloadBandwidthTest" | "endAfternoonHours" | "endMorningHours" | "followBySms" | "hasModemKeptSynchronization" | "idAppointment" | "individualSite" | "modemIsSynchronized" | "modemMac" | "modemStillSynchronized" | "modemType" | "ovhTicket" | "problemType" | "resolvedAfterTests" | "secureSite" | "severalInternetConnections" | "siteClosedDays" | "siteDigicode" | "siteOpening" | "startAfternoonHours" | "startMorningHours" | "uploadBandwidthTest"
        /**
         * Diagnostic robot possible actions
         * type fullname: xdsl.lineDiagnostic.RobotActionsEnum
         */
        export type RobotActionsEnum = "alignmentLockTest" | "alignmentResetTest" | "alignmentTestResult" | "checkCustomerTicket" | "checkIfAccessPing" | "checkIfResolvedAfterConnectionTests" | "checkIfResolvedAfterInstallationCheck" | "checkIfResolvedAfterTests" | "checkIfSeveralConnections" | "checkInstallation" | "checkProblem" | "checkSynchronizationWithoutOtherModems" | "customerPrelocChecks" | "findProblem" | "installationCheck" | "lockUnlock" | "needToRequestMonitoring" | "needToRequestOperatorIntervention" | "needToRequestOvhIntervention" | "requestMonitoring" | "requestOperatorIntervention" | "requestOvhIntervention" | "seltTest"
        /**
         * Cables section details
         * interface fullName: xdsl.lineDiagnostic.Section.Section
         */
        export interface Section {
            length: number;
            section: number;
        }
        /**
         * Possible SELT test prelocalizations
         * type fullname: xdsl.lineDiagnostic.SeltPrelocEnum
         */
        export type SeltPrelocEnum = "CUST" | "DSLAM" | "LINE" | "RE"
        /**
         * Customer answers for line diagnostic
         * interface fullName: xdsl.lineDiagnostic.SeltResult.SeltResult
         */
        export interface SeltResult {
            date?: string;
            distance?: number;
            preloc?: xdsl.lineDiagnostic.SeltPrelocEnum;
            state?: xdsl.lineDiagnostic.SeltStateEnum;
            status?: xdsl.lineDiagnostic.SeltStatusEnum;
        }
        /**
         * Possible SELT test states
         * type fullname: xdsl.lineDiagnostic.SeltStateEnum
         */
        export type SeltStateEnum = "open" | "short" | "synced" | "unknown"
        /**
         * Possible SELT test status
         * type fullname: xdsl.lineDiagnostic.SeltStatusEnum
         */
        export type SeltStatusEnum = "failed" | "notAvailable" | "ok"
    }
    export namespace monitoringNotifications {
        /**
         * Frequency between notifications.
         * type fullname: xdsl.monitoringNotifications.FrequencyEnum
         */
        export type FrequencyEnum = "1h" | "5m" | "6h" | "once"
        /**
         * Type of notification.
         * type fullname: xdsl.monitoringNotifications.TypeEnum
         */
        export type TypeEnum = "mail" | "sms"
    }
    export namespace orderFollowup {
        /**
         * The duration units
         * type fullname: xdsl.orderFollowup.DurationUnitEnum
         */
        export type DurationUnitEnum = "day" | "hour" | "minute"
        /**
         * A step of the order process
         * interface fullName: xdsl.orderFollowup.Step.Step
         */
        export interface Step {
            comments: string[];
            doneDate?: string;
            durationUnit: xdsl.orderFollowup.DurationUnitEnum;
            expectedDuration: number;
            name: xdsl.orderFollowup.StepNameEnum;
            status: xdsl.orderFollowup.StepStatusEnum;
        }
        /**
         * The status of an order step
         * type fullname: xdsl.orderFollowup.StepNameEnum
         */
        export type StepNameEnum = "accessIsOperational" | "checkInfrastructure" | "configureAccessOnOVH" | "orderPayed" | "orderReceived" | "orderTreatment" | "sendModem" | "sendOrderToProvider" | "setupCustomerPremisesEquipment" | "waitingForProviderInstallReport" | "waitingForWithdrawalPeriodToBeOver"
        /**
         * The status of an order step
         * type fullname: xdsl.orderFollowup.StepStatusEnum
         */
        export type StepStatusEnum = "doing" | "done" | "error" | "todo" | "waitingCustomer"
    }
    export namespace templateModem {
        /**
         * DHCP Configuration for Modem Template
         * interface fullName: xdsl.templateModem.DHCP.DHCP
         */
        export interface DHCP {
            defaultGateway: string;
            dhcpName: string;
            domainName: string;
            endAddress: string;
            leaseTime: number;
            primaryDNS: string;
            secondaryDNS?: string;
            serverEnabled: boolean;
            startAddress: string;
            subnetMask: string;
        }
        /**
         * LAN Configuration for Modem Template
         * interface fullName: xdsl.templateModem.LAN.LAN
         */
        export interface LAN {
            IPAddress: string;
            addressingType: xdsl.xdslModemConfig.AddressingTypeEnum;
            lanName: string;
            subnetMask: string;
        }
        /**
         * Parameters and values to ignore when apply modem template configuration
         * interface fullName: xdsl.templateModem.ParametersToIgnore.ParametersToIgnore
         */
        export interface ParametersToIgnore {
            LANandDHCP?: boolean;
            WLANList?: string[];
            dmzIP?: boolean;
            mtuSize?: boolean;
            portMappingList?: string[];
        }
        /**
         * PortMapping Configuration for Modem Template
         * interface fullName: xdsl.templateModem.PortMapping.PortMapping
         */
        export interface PortMapping {
            allowedRemoteIp?: string;
            description?: string;
            externalPortEnd?: number;
            externalPortStart: number;
            internalClient: string;
            internalPort: number;
            name: string;
            protocol: xdsl.xdslModemConfig.ProtocolTypeEnum;
        }
        /**
         * Type of WLAN security protection
         * type fullname: xdsl.templateModem.SecurityTypeEnum
         */
        export type SecurityTypeEnum = "None" | "WPA" | "WPA2" | "WPAandWPA2"
        /**
         * WLAN Configuration for Modem Template
         * interface fullName: xdsl.templateModem.WLAN.WLAN
         */
        export interface WLAN {
            SSID: string;
            SSIDAdvertisementEnabled: boolean;
            bandSteering: boolean;
            channel: number;
            channelMode: xdsl.xdslModemConfig.ChannelModeEnum;
            enabled: boolean;
            frequency: xdsl.xdslModemConfig.FrequencyEnum;
            guest: boolean;
            securityKey: string;
            securityType: xdsl.templateModem.SecurityTypeEnum;
            wifiName: string;
        }
    }
    /**
     * XDSL Email Pro
     * interface fullName: xdsl.xdslEmailPro.xdslEmailPro
     */
    export interface xdslEmailPro {
        currentUsage: complexType.UnitAndValue<number>;
        displayName?: string;
        domain: string;
        firstName?: string;
        id: number;
        initial?: string;
        lastLogoffDate?: string;
        lastLogonDate?: string;
        lastName?: string;
        login: string;
        passwordLastUpdate?: string;
        primaryEmailAddress: string;
        quota: complexType.UnitAndValue<number>;
        state: emailproObjectStateEnum;
        taskPendingId?: number;
    }
    export namespace xdslModemConfig {
        /**
         * ACS backend used by the modem
         * type fullname: xdsl.xdslModemConfig.ACSBackendEnum
         */
        export type ACSBackendEnum = "beta" | "dev" | "legacy" | "stable"
        /**
         * How the modem gets its LAN IP Address
         * type fullname: xdsl.xdslModemConfig.AddressingTypeEnum
         */
        export type AddressingTypeEnum = "DHCP" | "Static"
        /**
         * How the WiFi channel is selected
         * type fullname: xdsl.xdslModemConfig.ChannelModeEnum
         */
        export type ChannelModeEnum = "Auto" | "Manual"
        /**
         * How did the device got its IP Address
         * type fullname: xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum
         */
        export type ConnectedDeviceAddressSourceEnum = "DHCP" | "Static" | "Unknown"
        /**
         * Level of the Firewall ( BlockAll will block all connections, Normal will block all incoming connections except those in PortMapping and let go all outgoing connections , Disabled will disable all the Firewall and let all incoming or outgoing connections pass through )
         * type fullname: xdsl.xdslModemConfig.EasyFirewallLevelEnum
         */
        export type EasyFirewallLevelEnum = "BlockAll" | "Disabled" | "Normal"
        /**
         * Modem frequency
         * type fullname: xdsl.xdslModemConfig.FrequencyEnum
         */
        export type FrequencyEnum = "2.4GHz" | "5GHz"
        /**
         * Size of the Maximum Transmission Unit on the modem's interfaces
         * type fullname: xdsl.xdslModemConfig.MTUSizeEnum
         */
        export type MTUSizeEnum = 1432 | 1456 | 1492
        /**
         * Type of protocol for the Port Mapping
         * type fullname: xdsl.xdslModemConfig.ProtocolTypeEnum
         */
        export type ProtocolTypeEnum = "TCP" | "UDP"
        /**
         * Type of WLAN security protection
         * type fullname: xdsl.xdslModemConfig.SecurityTypeEnum
         */
        export type SecurityTypeEnum = "None" | "WEP" | "WPA" | "WPA2" | "WPAandWPA2"
    }
}

/**
 * END API /xdsl Models
 */
export function proxyXdsl(ovhEngine: OvhRequestable): Xdsl {
    return buildOvhProxy(ovhEngine, '/xdsl');
}
export default proxyXdsl;
/**
 * Api model for /xdsl
 */
export interface Xdsl {
    /**
     * List available services
     * GET /xdsl
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    eligibility: {
        cities: {
            /**
             * Get the cities from a zipCode
             * GET /xdsl/eligibility/cities
             */
            $get(params: { zipCode: string }): Promise<xdsl.eligibility.City[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        lines: {
            active: {
                /**
                 * Get the active lines at given address
                 * POST /xdsl/eligibility/lines/active
                 */
                $post(params: { city: xdsl.eligibility.City, contactName: string, street: xdsl.eligibility.Street, streetNumber?: string }): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
            }
            inactive: {
                /**
                 * Get the inactive lines at given address
                 * POST /xdsl/eligibility/lines/inactive
                 */
                $post(params: { city: xdsl.eligibility.City, contactName?: string, street: xdsl.eligibility.Street, streetNumber?: string }): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
            }
        }
        meetings: {
            /**
             * Search for meeting time slot
             * GET /xdsl/eligibility/meetings
             */
            $get(params: { eligibilityId: string, offerLabel: string }): Promise<xdsl.AsyncTask<xdsl.eligibility.MeetingSlots>>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        search: {
            buildings: {
                /**
                 * Get all buildings for a specific address
                 * POST /xdsl/eligibility/search/buildings
                 */
                $post(params: { streetCode: string, streetNumber: string }): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Building>>;
            }
            cities: {
                /**
                 * Get all localities linked to a zip code
                 * POST /xdsl/eligibility/search/cities
                 */
                $post(params: { zipCode: string }): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.City>>;
            }
            fiberStreets: {
                /**
                 * Get all street linked to a locality
                 * POST /xdsl/eligibility/search/fiberStreets
                 */
                $post(params: { inseeCode: string }): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.FiberStreet>>;
            }
            streetNumbers: {
                /**
                 * Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)
                 * POST /xdsl/eligibility/search/streetNumbers
                 */
                $post(params: { streetCode: string }): Promise<xdsl.AsyncTaskArray<string>>;
            }
        }
        streets: {
            /**
             * Get the streets from a city inseeCode and partial street name
             * GET /xdsl/eligibility/streets
             */
            $get(params: { inseeCode: string, partialName: string }): Promise<xdsl.eligibility.Street[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        test: {
            /**
             * Get an eligibility by its id
             * GET /xdsl/eligibility/test
             */
            $get(params: { id: string }): Promise<xdsl.eligibility.Eligibility>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            address: {
                /**
                 * Do an eligibility for an address, if no line exist
                 * POST /xdsl/eligibility/test/address
                 */
                $post(params: { address: xdsl.eligibility.Address }): Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
            }
            fiber: {
                building: {
                    /**
                     * Perform a fiber eligibility for a building
                     * POST /xdsl/eligibility/test/fiber/building
                     */
                    $post(params: { building: string }): Promise<xdsl.AsyncTask<xdsl.eligibility.FiberEligibility>>;
                }
            }
            line: {
                /**
                 * Do an eligibility for a line
                 * POST /xdsl/eligibility/test/line
                 */
                $post(params: { lineNumber: string, lineStatus: xdsl.eligibility.LandlineStatusEnum }): Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
            }
        }
    }
    email: {
        pro: {
            /**
             * List available services
             * GET /xdsl/email/pro
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(email: string): {
                /**
                 * Delete the email
                 * DELETE /xdsl/email/pro/{email}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /xdsl/email/pro/{email}
                 */
                $get(): Promise<xdsl.xdslEmailPro>;
                /**
                 * Alter this object properties
                 * PUT /xdsl/email/pro/{email}
                 */
                $put(params?: { currentUsage?: complexType.UnitAndValue<number>, displayName?: string, domain?: string, firstName?: string, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, login?: string, passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: complexType.UnitAndValue<number>, state?: emailproObjectStateEnum, taskPendingId?: number }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                changePassword: {
                    /**
                     * Change the email password
                     * POST /xdsl/email/pro/{email}/changePassword
                     */
                    $post(params: { password: string }): Promise<xdsl.email.pro.Task>;
                }
            };
        }
    }
    incidents: {
        /**
         * List of incidents
         * GET /xdsl/incidents
         */
        $get(params?: { creationDate?: string, endDate?: string }): Promise<number[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(id: number): {
            /**
             * Get this object properties
             * GET /xdsl/incidents/{id}
             */
            $get(): Promise<xdsl.Incident>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    spare: {
        /**
         * List available services
         * GET /xdsl/spare
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        brands: {
            /**
             * Get all available spare brands
             * GET /xdsl/spare/brands
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(spare: string): {
            /**
             * Delete the spare as if it was not belonging to OVH anymore
             * DELETE /xdsl/spare/{spare}
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /xdsl/spare/{spare}
             */
            $get(): Promise<spare.xdsl.XdslSpare>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            compatibleReplacement: {
                /**
                 * Return the list of brand compatible to be replaced
                 * GET /xdsl/spare/{spare}/compatibleReplacement
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            replace: {
                /**
                 * Replace the modem by its spare
                 * POST /xdsl/spare/{spare}/replace
                 */
                $post(params: { domain: string }): Promise<void>;
            }
            returnMerchandise: {
                /**
                 * Return the broken equipment in instantRefund
                 * POST /xdsl/spare/{spare}/returnMerchandise
                 */
                $post(): Promise<void>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /xdsl/spare/{spare}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /xdsl/spare/{spare}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    templateModem: {
        /**
         * List of TemplateModem
         * GET /xdsl/templateModem
         */
        $get(): Promise<string[]>;
        /**
         * Create new Modem Template from existing modem
         * POST /xdsl/templateModem
         */
        $post(params: { name: string, serviceName: string }): Promise<xdsl.TemplateModem>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(name: string): {
            /**
             * Delete this Modem Template
             * DELETE /xdsl/templateModem/{name}
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /xdsl/templateModem/{name}
             */
            $get(): Promise<xdsl.TemplateModem>;
            /**
             * Alter this object properties
             * PUT /xdsl/templateModem/{name}
             */
            $put(params?: { DHCP?: xdsl.templateModem.DHCP[], LAN?: xdsl.templateModem.LAN[], WLAN?: xdsl.templateModem.WLAN[], capabilities?: string, creationDate?: string, dmzIP?: string, mtuSize?: xdsl.xdslModemConfig.MTUSizeEnum, name?: string, parametersToIgnore?: xdsl.templateModem.ParametersToIgnore, portMapping?: xdsl.templateModem.PortMapping[] }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /xdsl/{serviceName}
         */
        $get(): Promise<xdsl.Access>;
        /**
         * Alter this object properties
         * PUT /xdsl/{serviceName}
         */
        $put(params?: { accessName?: string, accessType?: xdsl.DslTypeEnum, address?: xdsl.AddressDetail, capabilities?: xdsl.AccessCapabilities, description?: string, ipv6Enabled?: boolean, lnsRateLimit?: number, monitoring?: boolean, nra?: string, packName?: string, pairsNumber?: number, role?: xdsl.AccessRoleEnum, status?: xdsl.AccessStatusEnum }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        addressMove: {
            extraIpRange: {
                /**
                 * Informations about the extra IP range during address move
                 * GET /xdsl/{serviceName}/addressMove/extraIpRange
                 */
                $get(): Promise<xdsl.ExtraIpRangeMove>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            extraIpRangeMove: {
                /**
                 * Initiate the extra IP range migration
                 * POST /xdsl/{serviceName}/addressMove/extraIpRangeMove
                 */
                $post(): Promise<xdsl.Task>;
            }
        }
        antiSpams: {
            /**
             * List antiSpams for this access
             * GET /xdsl/{serviceName}/antiSpams
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ip: string): {
                /**
                 * Get this object properties
                 * GET /xdsl/{serviceName}/antiSpams/{ip}
                 */
                $get(): Promise<xdsl.AntiSpam>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                evidences: {
                    /**
                     * List of evidences stored on PCS for this ip
                     * GET /xdsl/{serviceName}/antiSpams/{ip}/evidences
                     */
                    $get(): Promise<xdsl.antiSpam.EvidencesInfo>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        applyTemplateToModem: {
            /**
             * Apply TemplateModem to existing Modem
             * POST /xdsl/{serviceName}/applyTemplateToModem
             */
            $post(params: { templateName: string }): Promise<xdsl.Task>;
        }
        canCancelResiliation: {
            /**
             * Get information about the ongoing resiliation
             * GET /xdsl/{serviceName}/canCancelResiliation
             */
            $get(): Promise<boolean>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        cancelResiliation: {
            /**
             * Cancel the ongoing resiliation
             * POST /xdsl/{serviceName}/cancelResiliation
             */
            $post(): Promise<void>;
        }
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /xdsl/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
        }
        diagnostic: {
            /**
             * Get this object properties
             * GET /xdsl/{serviceName}/diagnostic
             */
            $get(): Promise<xdsl.AccessDiagnostic>;
            /**
             * Run diagnostic on the access
             * POST /xdsl/{serviceName}/diagnostic
             */
            $post(): Promise<xdsl.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        incident: {
            /**
             * Get this object properties
             * GET /xdsl/{serviceName}/incident
             */
            $get(): Promise<xdsl.Incident>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        ips: {
            /**
             * List of IPs addresses for this access
             * GET /xdsl/{serviceName}/ips
             */
            $get(): Promise<string[]>;
            /**
             * Order an extra /29 range of IPv4 addresses
             * POST /xdsl/{serviceName}/ips
             */
            $post(): Promise<xdsl.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ip: string): {
                /**
                 * Stop renewing this extra IPv4 option
                 * DELETE /xdsl/{serviceName}/ips/{ip}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /xdsl/{serviceName}/ips/{ip}
                 */
                $get(): Promise<xdsl.IP>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        ipv6: {
            /**
             * Change the status of the IPv6 for this access
             * POST /xdsl/{serviceName}/ipv6
             */
            $post(params: { enabled: boolean }): Promise<xdsl.Task>;
        }
        lines: {
            /**
             * The lines of the access
             * GET /xdsl/{serviceName}/lines
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(number: string): {
                /**
                 * Get this object properties
                 * GET /xdsl/{serviceName}/lines/{number}
                 */
                $get(): Promise<xdsl.Line>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                diagnostic: {
                    cancel: {
                        /**
                         * Cancel line diagnostic if possible
                         * POST /xdsl/{serviceName}/lines/{number}/diagnostic/cancel
                         */
                        $post(): Promise<void>;
                    }
                    run: {
                        /**
                         * Update and get advanced diagnostic of the line
                         * POST /xdsl/{serviceName}/lines/{number}/diagnostic/run
                         */
                        $post(params: { actionsDone?: xdsl.lineDiagnostic.CustomerActionsEnum[], answers?: xdsl.lineDiagnostic.Answers, faultType: xdsl.lineDiagnostic.FaultTypeEnum }): Promise<xdsl.lineDiagnostic.Diagnostic>;
                    }
                }
                dslamPort: {
                    /**
                     * Get this object properties
                     * GET /xdsl/{serviceName}/lines/{number}/dslamPort
                     */
                    $get(): Promise<xdsl.DslamPort>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    availableProfiles: {
                        /**
                         * List all availables profiles for this port
                         * GET /xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles
                         */
                        $get(): Promise<xdsl.DslamLineProfile[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    changeProfile: {
                        /**
                         * Change the profile of the port
                         * POST /xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile
                         */
                        $post(params: { dslamProfileId: number }): Promise<xdsl.Task>;
                    }
                    logs: {
                        /**
                         * Get the logs emitted by the DSLAM for this port
                         * GET /xdsl/{serviceName}/lines/{number}/dslamPort/logs
                         */
                        $get(params: { limit: number }): Promise<xdsl.DslamPortLog[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    reset: {
                        /**
                         * Reset the port on the DSLAM
                         * POST /xdsl/{serviceName}/lines/{number}/dslamPort/reset
                         */
                        $post(): Promise<xdsl.Task>;
                    }
                }
                statistics: {
                    /**
                     * Get various statistics about the line
                     * GET /xdsl/{serviceName}/lines/{number}/statistics
                     */
                    $get(params: { period: xdsl.StatisticsPeriodEnum, type: xdsl.LineStatisticsTypeEnum }): Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        modem: {
            /**
             * Get this object properties
             * GET /xdsl/{serviceName}/modem
             */
            $get(): Promise<xdsl.Modem>;
            /**
             * Alter this object properties
             * PUT /xdsl/{serviceName}/modem
             */
            $put(params?: { acsBackend?: xdsl.xdslModemConfig.ACSBackendEnum, acsVersion?: string, brandName?: string, capabilities?: xdsl.ModemCapabilities, dmzIP?: string, easyFirewallLevel?: xdsl.xdslModemConfig.EasyFirewallLevelEnum, ipv6Support?: boolean, isBridged?: boolean, lastCwmpRequestDate?: string, macAddress?: string, managedByOvh?: boolean, model?: string, mtuSize?: xdsl.xdslModemConfig.MTUSizeEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            availableACSBackend: {
                /**
                 * List available ACS backend for this modem
                 * GET /xdsl/{serviceName}/modem/availableACSBackend
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            availableWLANChannel: {
                /**
                 * List available WLAN channel for this modem
                 * GET /xdsl/{serviceName}/modem/availableWLANChannel
                 */
                $get(params: { frequency: xdsl.WLANFrequencyEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            blocIp: {
                /**
                 * Get the status of the Bloc IP on modem
                 * GET /xdsl/{serviceName}/modem/blocIp
                 */
                $get(): Promise<xdsl.ServiceStatusEnum>;
                /**
                 * Change the status of the Bloc IP on modem
                 * POST /xdsl/{serviceName}/modem/blocIp
                 */
                $post(params: { status: xdsl.ServiceStatusEnum }): Promise<xdsl.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            callWaiting: {
                /**
                 * Get the status of callWaiting on modem
                 * GET /xdsl/{serviceName}/modem/callWaiting
                 */
                $get(): Promise<xdsl.ServiceStatusEnum>;
                /**
                 * Change the status of callWaiting on modem
                 * POST /xdsl/{serviceName}/modem/callWaiting
                 */
                $post(params: { callWaiting: xdsl.ServiceStatusEnum }): Promise<xdsl.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            comfortExchange: {
                /**
                 * Get info about access modem replacement by last model.
                 * GET /xdsl/{serviceName}/modem/comfortExchange
                 */
                $get(): Promise<xdsl.ModemExchangeInfo>;
                /**
                 * Replace access modem by last model, fees will be applied.
                 * POST /xdsl/{serviceName}/modem/comfortExchange
                 */
                $post(params?: { contactShipping?: string }): Promise<order.Order>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            connectedDevices: {
                /**
                 * List of devices connected on this modem
                 * GET /xdsl/{serviceName}/modem/connectedDevices
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(macAddress: string): {
                    /**
                     * Get this object properties
                     * GET /xdsl/{serviceName}/modem/connectedDevices/{macAddress}
                     */
                    $get(): Promise<xdsl.connectedDevice>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            contentSharing: {
                /**
                 * Get the status of contentSharing on modem
                 * GET /xdsl/{serviceName}/modem/contentSharing
                 */
                $get(): Promise<xdsl.ServiceStatusEnum>;
                /**
                 * Change the status of contentSharing on modem
                 * POST /xdsl/{serviceName}/modem/contentSharing
                 */
                $post(params: { contentSharing: xdsl.ServiceStatusEnum }): Promise<xdsl.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            duplicatePortMappingConfig: {
                /**
                 * Remove all the current port mapping rules and set the same config as the access given in parameters
                 * POST /xdsl/{serviceName}/modem/duplicatePortMappingConfig
                 */
                $post(params: { accessName: string }): Promise<void>;
            }
            firmware: {
                /**
                 * Get the firmware version installed on modem
                 * GET /xdsl/{serviceName}/modem/firmware
                 */
                $get(): Promise<string>;
                /**
                 * Launch a task to install target firmware on modem
                 * POST /xdsl/{serviceName}/modem/firmware
                 */
                $post(params: { firmware: string, todoDate?: string }): Promise<xdsl.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            firmwareAvailable: {
                /**
                 * List available firmware for this modem
                 * GET /xdsl/{serviceName}/modem/firmwareAvailable
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ftp: {
                /**
                 * Get the status of ftp service on modem
                 * GET /xdsl/{serviceName}/modem/ftp
                 */
                $get(): Promise<xdsl.ServiceStatusEnum>;
                /**
                 * Change the status of the ftp service on modem
                 * POST /xdsl/{serviceName}/modem/ftp
                 */
                $post(params: { ftp: xdsl.ServiceStatusEnum }): Promise<xdsl.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ipsecAlg: {
                /**
                 * Get the status of ipsec alg service on modem
                 * GET /xdsl/{serviceName}/modem/ipsecAlg
                 */
                $get(): Promise<xdsl.ServiceStatusEnum>;
                /**
                 * Change the status of the ipsec alg service on modem
                 * POST /xdsl/{serviceName}/modem/ipsecAlg
                 */
                $post(params: { ipsecAlg: xdsl.ServiceStatusEnum }): Promise<xdsl.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            lan: {
                /**
                 * List of LANs on this modem
                 * GET /xdsl/{serviceName}/modem/lan
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(lanName: string): {
                    /**
                     * Get this object properties
                     * GET /xdsl/{serviceName}/modem/lan/{lanName}
                     */
                    $get(): Promise<xdsl.LAN>;
                    /**
                     * Alter this object properties
                     * PUT /xdsl/{serviceName}/modem/lan/{lanName}
                     */
                    $put(params?: { IPAddress?: string, addressingType?: xdsl.xdslModemConfig.AddressingTypeEnum, lanName?: string, subnetMask?: string, taskId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    dhcp: {
                        /**
                         * List of DHCP on this modem
                         * GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(dhcpName: string): {
                            /**
                             * Get this object properties
                             * GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}
                             */
                            $get(): Promise<xdsl.DHCP>;
                            /**
                             * Alter this object properties
                             * PUT /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}
                             */
                            $put(params?: { defaultGateway?: string, dhcpName?: string, domainName?: string, endAddress?: string, leaseTime?: number, primaryDNS?: string, secondaryDNS?: string, serverEnabled?: boolean, startAddress?: string, subnetMask?: string, taskId?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            DHCPStaticAddresses: {
                                /**
                                 * List of DHCP Static Address of this modem
                                 * GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Add a DHCP static lease
                                 * POST /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses
                                 */
                                $post(params: { IPAddress: string, MACAddress: string, name?: string }): Promise<xdsl.DHCPStaticAddress>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(MACAddress: string): {
                                    /**
                                     * Delete this port mapping
                                     * DELETE /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}
                                     */
                                    $delete(): Promise<xdsl.Task>;
                                    /**
                                     * Get this object properties
                                     * GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}
                                     */
                                    $get(): Promise<xdsl.DHCPStaticAddress>;
                                    /**
                                     * Alter this object properties
                                     * PUT /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}
                                     */
                                    $put(params?: { IPAddress?: string, MACAddress?: string, name?: string, taskId?: number }): Promise<void>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                        };
                    }
                };
            }
            portMappings: {
                /**
                 * List of PortMappings on this modem
                 * GET /xdsl/{serviceName}/modem/portMappings
                 */
                $get(): Promise<string[]>;
                /**
                 * Add a port mapping
                 * POST /xdsl/{serviceName}/modem/portMappings
                 */
                $post(params: { allowedRemoteIp?: string, description?: string, externalPortEnd?: number, externalPortStart: number, internalClient: string, internalPort: number, internalPortEnd?: number, name: string, protocol: xdsl.xdslModemConfig.ProtocolTypeEnum }): Promise<xdsl.PortMapping>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(name: string): {
                    /**
                     * Delete this port mapping
                     * DELETE /xdsl/{serviceName}/modem/portMappings/{name}
                     */
                    $delete(): Promise<xdsl.Task>;
                    /**
                     * Get this object properties
                     * GET /xdsl/{serviceName}/modem/portMappings/{name}
                     */
                    $get(): Promise<xdsl.PortMapping>;
                    /**
                     * Alter this object properties
                     * PUT /xdsl/{serviceName}/modem/portMappings/{name}
                     */
                    $put(params?: { allowedRemoteIp?: string, description?: string, externalPortEnd?: number, externalPortStart?: number, id?: number, internalClient?: string, internalPort?: number, internalPortEnd?: number, name?: string, protocol?: xdsl.xdslModemConfig.ProtocolTypeEnum, taskId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            reboot: {
                /**
                 * Reboot the modem
                 * POST /xdsl/{serviceName}/modem/reboot
                 */
                $post(params?: { todoDate?: string }): Promise<xdsl.Task>;
            }
            reconfigureVoip: {
                /**
                 * Reconfigure voip line on modem
                 * POST /xdsl/{serviceName}/modem/reconfigureVoip
                 */
                $post(): Promise<void>;
            }
            refreshConnectedDevices: {
                /**
                 * Refresh the list of connected devices on the modem
                 * POST /xdsl/{serviceName}/modem/refreshConnectedDevices
                 */
                $post(): Promise<xdsl.Task>;
            }
            reset: {
                /**
                 * Reset the modem to its default configuration
                 * POST /xdsl/{serviceName}/modem/reset
                 */
                $post(params?: { resetOvhConfig?: boolean }): Promise<xdsl.Task>;
            }
            resetPortMappingConfig: {
                /**
                 * Remove all the current port mapping rules
                 * POST /xdsl/{serviceName}/modem/resetPortMappingConfig
                 */
                $post(): Promise<void>;
            }
            retrieveInfo: {
                /**
                 * get general Modem information
                 * POST /xdsl/{serviceName}/modem/retrieveInfo
                 */
                $post(): Promise<xdsl.AsyncTask<xdsl.ModemInfo>>;
            }
            sipAlg: {
                /**
                 * Get the status of sip alg service on modem
                 * GET /xdsl/{serviceName}/modem/sipAlg
                 */
                $get(): Promise<xdsl.ServiceStatusEnum>;
                /**
                 * Change the status of the sip alg service on modem
                 * POST /xdsl/{serviceName}/modem/sipAlg
                 */
                $post(params: { sipAlg: xdsl.ServiceStatusEnum }): Promise<xdsl.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            upnp: {
                /**
                 * Get the status of the Upnp on modem
                 * GET /xdsl/{serviceName}/modem/upnp
                 */
                $get(): Promise<xdsl.ServiceStatusEnum>;
                /**
                 * Change the status of the Upnp on modem
                 * POST /xdsl/{serviceName}/modem/upnp
                 */
                $post(params: { upnp: xdsl.ServiceStatusEnum }): Promise<xdsl.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            wifi: {
                /**
                 * List of WLANs on this modem
                 * GET /xdsl/{serviceName}/modem/wifi
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(wifiName: string): {
                    /**
                     * Get this object properties
                     * GET /xdsl/{serviceName}/modem/wifi/{wifiName}
                     */
                    $get(): Promise<xdsl.WLAN>;
                    /**
                     * Alter this object properties
                     * PUT /xdsl/{serviceName}/modem/wifi/{wifiName}
                     */
                    $put(params?: { SSID?: string, SSIDAdvertisementEnabled?: boolean, bandSteering?: boolean, channel?: number, channelMode?: xdsl.xdslModemConfig.ChannelModeEnum, enabled?: boolean, frequency?: xdsl.xdslModemConfig.FrequencyEnum, guest?: boolean, securityKey?: string, securityType?: xdsl.xdslModemConfig.SecurityTypeEnum, taskId?: number, wifiName?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        monitoringNotifications: {
            /**
             * List the notifications for this access
             * GET /xdsl/{serviceName}/monitoringNotifications
             */
            $get(): Promise<number[]>;
            /**
             * Add a notification
             * POST /xdsl/{serviceName}/monitoringNotifications
             */
            $post(params: { allowIncident?: boolean, downThreshold?: number, email?: string, frequency: xdsl.monitoringNotifications.FrequencyEnum, phone?: string, smsAccount?: string, type: xdsl.monitoringNotifications.TypeEnum }): Promise<xdsl.MonitoringNotification>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Delete this notification
                 * DELETE /xdsl/{serviceName}/monitoringNotifications/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /xdsl/{serviceName}/monitoringNotifications/{id}
                 */
                $get(): Promise<xdsl.MonitoringNotification>;
                /**
                 * Alter this object properties
                 * PUT /xdsl/{serviceName}/monitoringNotifications/{id}
                 */
                $put(params?: { allowIncident?: boolean, downThreshold?: number, email?: string, enabled?: boolean, frequency?: xdsl.monitoringNotifications.FrequencyEnum, id?: number, phone?: string, smsAccount?: string, type?: xdsl.monitoringNotifications.TypeEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        orderFollowup: {
            /**
             * Get the status of the order
             * GET /xdsl/{serviceName}/orderFollowup
             */
            $get(): Promise<xdsl.orderFollowup.Step[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        orderMeeting: {
            /**
             * Book a meeting and relaunch order
             * POST /xdsl/{serviceName}/orderMeeting
             */
            $post(params: { endDate: string, startDate: string, uiCode: string }): Promise<void>;
        }
        pendingAction: {
            /**
             * Get this object properties
             * GET /xdsl/{serviceName}/pendingAction
             */
            $get(): Promise<xdsl.PendingAction>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        radiusConnectionLogs: {
            /**
             * List the radius connection logs
             * GET /xdsl/{serviceName}/radiusConnectionLogs
             */
            $get(): Promise<xdsl.RadiusConnectionLog[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        requestPPPLoginMail: {
            /**
             * Renew PPP password and send the PPP login informations to the e-mail of the nicAdmin
             * POST /xdsl/{serviceName}/requestPPPLoginMail
             */
            $post(): Promise<void>;
        }
        requestTotalDeconsolidation: {
            /**
             * Switch this access to total deconsolidation
             * POST /xdsl/{serviceName}/requestTotalDeconsolidation
             */
            $post(params?: { noPortability?: boolean, rio?: string }): Promise<xdsl.Task>;
        }
        resiliate: {
            /**
             * Resiliate the access
             * POST /xdsl/{serviceName}/resiliate
             */
            $post(params: { resiliationDate?: string, resiliationSurvey: xdsl.ResiliationSurvey }): Promise<xdsl.ResiliationFollowUpDetail>;
        }
        resiliationFollowup: {
            /**
             * Get information about the ongoing resiliation
             * GET /xdsl/{serviceName}/resiliationFollowup
             */
            $get(): Promise<xdsl.ResiliationFollowUpDetail>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        resiliationTerms: {
            /**
             * Get resiliation terms
             * GET /xdsl/{serviceName}/resiliationTerms
             */
            $get(params?: { resiliationDate?: string }): Promise<xdsl.ResiliationTerms>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        rma: {
            /**
             * Return Merchandise Authorisation associated
             * GET /xdsl/{serviceName}/rma
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: string): {
                /**
                 * Cancel the rma
                 * DELETE /xdsl/{serviceName}/rma/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /xdsl/{serviceName}/rma/{id}
                 */
                $get(): Promise<telephony.Rma>;
                /**
                 * Alter this object properties
                 * PUT /xdsl/{serviceName}/rma/{id}
                 */
                $put(params?: { cancellable?: boolean, creationDatetime?: string, equipmentReference?: string, id?: string, newMerchandise?: string, offerTypeNew?: telephony.RmaOfferTypeEnum, offerTypeOld?: telephony.RmaOfferTypeEnum, process?: telephony.RmaReplaceTypeEnum, receptionDatetime?: string, shippingContact?: telephony.Contact, status?: telephony.RmaStatusEnum, steps?: telephony.RmaStep[], terminationDatetime?: string, type?: telephony.RmaTypeEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                changeType: {
                    /**
                     * Change RMA type
                     * POST /xdsl/{serviceName}/rma/{id}/changeType
                     */
                    $post(params: { type: telephony.RmaChangeTypeEnum }): Promise<void>;
                }
            };
        }
        searchOrderMeetings: {
            /**
             * Search for available line creation meeting time slots, for order only
             * POST /xdsl/{serviceName}/searchOrderMeetings
             */
            $post(): Promise<xdsl.AsyncTask<connectivity.eligibility.Meetings>>;
        }
        sendOrderToProvider: {
            /**
             * Unlock order in "waitingCustomer" status. It only concerns orders whose modem is sent before anything have been forwarded to our provider
             * POST /xdsl/{serviceName}/sendOrderToProvider
             */
            $post(): Promise<void>;
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /xdsl/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /xdsl/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        statistics: {
            /**
             * Get various statistics about this access
             * GET /xdsl/{serviceName}/statistics
             */
            $get(params: { period: xdsl.StatisticsPeriodEnum, type: xdsl.AccessStatisticsTypeEnum }): Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        tasks: {
            /**
             * Tasks scheduled for this access
             * GET /xdsl/{serviceName}/tasks
             */
            $get(params?: { function_?: string, status?: xdsl.TaskStatusEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /xdsl/{serviceName}/tasks/{id}
                 */
                $get(): Promise<xdsl.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                archive: {
                    /**
                     * Delete the task in problem from the results
                     * POST /xdsl/{serviceName}/tasks/{id}/archive
                     */
                    $post(): Promise<void>;
                }
            };
        }
        totalDeconsolidationTerms: {
            /**
             * Give the price to requestTotalDeconsolidation on the access
             * GET /xdsl/{serviceName}/totalDeconsolidationTerms
             */
            $get(): Promise<xdsl.DeconsolidationTerms>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        updateInvalidOrMissingRio: {
            /**
             * Update RIO, or disable portability, for order in error because of missing or invalid RIO
             * POST /xdsl/{serviceName}/updateInvalidOrMissingRio
             */
            $post(params: { relaunchWithoutPortability: boolean, rio?: string }): Promise<void>;
        }
    };
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type emailproObjectStateEnum = email.pro.ObjectStateEnum;
