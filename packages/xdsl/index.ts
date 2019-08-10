import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /xdsl Models
 */
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
    // interface fullName: complexType.UnitAndValues.UnitAndValues
    export interface UnitAndValues<T> {
        unit: string;
        values: T[];
    }
}
export namespace coreTypes {
    // type fullname: coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
    // type fullname: coreTypes.IpVersionEnum
    export type IpVersionEnum = "v4" | "v6"
}
export namespace email {
    export namespace pro {
        // type fullname: email.pro.ObjectStateEnum
        export type ObjectStateEnum = "creating" | "deleting" | "ok" | "reopening" | "suspended" | "suspending" | "unknown"
    }
}
export namespace order {
    // interface fullName: order.Contract.Contract
    export interface Contract {
        content: string;
        name: string;
        url: string;
    }
    // type fullname: order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    // interface fullName: order.Order.Order
    export interface Order {
        contracts: orderContract[];
        details: orderOrderDetail[];
        orderId?: number;
        prices: orderOrderPrices;
        url?: string;
    }
    // interface fullName: order.OrderDetail.OrderDetail
    export interface OrderDetail {
        description: string;
        detailType?: orderOrderDetailTypeEnum;
        domain: string;
        quantity: number;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    // type fullname: order.OrderDetailTypeEnum
    export type OrderDetailTypeEnum = "ACCESSORY" | "CAUTION" | "CHOOSED" | "CONSUMPTION" | "CREATION" | "DELIVERY" | "DURATION" | "GIFT" | "INSTALLATION" | "LICENSE" | "MUTE" | "OTHER" | "OUTPLAN" | "QUANTITY" | "REFUND" | "RENEW" | "SPECIAL" | "SWITCH" | "TRANSFER" | "VOUCHER"
    // interface fullName: order.OrderPrices.OrderPrices
    export interface OrderPrices {
        tax: orderPrice;
        withTax: orderPrice;
        withoutTax: orderPrice;
    }
    // interface fullName: order.Price.Price
    export interface Price {
        currencyCode: orderCurrencyCodeEnum;
        text: string;
        value: number;
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
        renew?: serviceRenewType;
        renewalType: serviceRenewalTypeEnum;
        serviceId: number;
        status: serviceStateEnum;
    }
}
export namespace spare {
    export namespace xdsl {
        // interface fullName: spare.xdsl.XdslSpare.XdslSpare
        export interface XdslSpare {
            brand: string;
            macAddress: string;
        }
    }
}
export namespace telephony {
    // interface fullName: telephony.Contact.Contact
    export interface Contact {
        address?: string;
        city?: string;
        country?: coreTypesCountryEnum;
        email?: string;
        firstname?: string;
        name?: string;
        organisation?: string;
        phone?: string;
        zip?: string;
    }
    // interface fullName: telephony.Rma.Rma
    export interface Rma {
        cancellable: boolean;
        creationDatetime: string;
        equipmentReference: string;
        id: string;
        newMerchandise?: string;
        offerTypeNew?: telephonyRmaOfferTypeEnum;
        offerTypeOld: telephonyRmaOfferTypeEnum;
        process: telephonyRmaReplaceTypeEnum;
        receptionDatetime?: string;
        shippingContact: telephonyContact;
        status: telephonyRmaStatusEnum;
        steps: telephonyRmaStep[];
        terminationDatetime?: string;
        type: telephonyRmaTypeEnum;
    }
    // type fullname: telephony.RmaOfferTypeEnum
    export type RmaOfferTypeEnum = "deposit" | "loan" | "purchase"
    // type fullname: telephony.RmaReplaceTypeEnum
    export type RmaReplaceTypeEnum = "changePhone" | "phoneRestitution" | "undefined"
    // type fullname: telephony.RmaStatusEnum
    export type RmaStatusEnum = "closed" | "open" | "received"
    // interface fullName: telephony.RmaStep.RmaStep
    export interface RmaStep {
        description: string;
        doneDate?: string;
        infos?: string;
        name: telephonyRmaStepNameEnum;
        status: telephonyRmaStepStatusEnum;
    }
    // type fullname: telephony.RmaStepNameEnum
    export type RmaStepNameEnum = "dispatchJustification" | "equipmentSending" | "equipmentTesting" | "opening" | "parcelReception" | "parcelValidation" | "validation"
    // type fullname: telephony.RmaStepStatusEnum
    export type RmaStepStatusEnum = "done" | "todo"
    // type fullname: telephony.RmaTypeEnum
    export type RmaTypeEnum = "after sale equipment service exchange" | "after sale phone service exchange" | "equipment restitution" | "fast exchange" | "old merchandise reception before exchange" | "phone restitution" | "resends due to shipping lost by the carrier" | "resends due to shipping not withdraw" | "specific return merchandise authorisation" | "termination" | "unknown"
}
export namespace xdsl {
    // interface fullName: xdsl.Access.Access
    export interface Access {
        accessName: string;
        accessType: xdslDslTypeEnum;
        address: xdslAddressDetail;
        capabilities: xdslAccessCapabilities;
        description: string;
        ipv6Enabled: boolean;
        lnsRateLimit?: number;
        monitoring: boolean;
        nra: string;
        packName?: string;
        pairsNumber: number;
        role: xdslAccessRoleEnum;
        status: xdslAccessStatusEnum;
    }
    // interface fullName: xdsl.AccessCapabilities.AccessCapabilities
    export interface AccessCapabilities {
        canApplyLnsRateLimit: boolean;
        canChangeDslamProfile: boolean;
        canChangeLns: boolean;
        canGetRadiusConnectionLogs: boolean;
        canResetDslamPort: boolean;
        hasDslamPort: boolean;
    }
    // interface fullName: xdsl.AccessDiagnostic.AccessDiagnostic
    export interface AccessDiagnostic {
        capabilities: xdslAccessDiagnosticCapabilities;
        diagnosticTime: string;
        incident?: boolean;
        isActiveOnLns?: boolean;
        isModemConnected?: boolean;
        lineDetails?: xdslLineDiagnostic[];
        ping?: boolean;
        remaining: number;
    }
    // interface fullName: xdsl.AccessDiagnosticCapabilities.AccessDiagnosticCapabilities
    export interface AccessDiagnosticCapabilities {
        incident: boolean;
        isActiveOnLns: boolean;
        isModemConnected: boolean;
        lineTest: boolean;
        ping: boolean;
        proposedProfileId: boolean;
        sync: boolean;
    }
    // type fullname: xdsl.AccessRoleEnum
    export type AccessRoleEnum = "backup" | "main"
    // type fullname: xdsl.AccessStatisticsTypeEnum
    export type AccessStatisticsTypeEnum = "ping" | "traffic:download" | "traffic:upload"
    // type fullname: xdsl.AccessStatusEnum
    export type AccessStatusEnum = "active" | "cancelled" | "close" | "deleting" | "doing" | "migration" | "slamming" | "upgradeOffer"
    // interface fullName: xdsl.AddressDetail.AddressDetail
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
    // interface fullName: xdsl.AntiSpam.AntiSpam
    export interface AntiSpam {
        date: string;
        ip: string;
        lastSpamDetected: string;
        status: xdslantiSpamAntiSpamStatusEnum;
    }
    // interface fullName: xdsl.AsyncTask.AsyncTask
    export interface AsyncTask<T> {
        error?: string;
        result?: T;
        status: xdslAsyncTaskStatusEnum;
    }
    // interface fullName: xdsl.AsyncTaskArray.AsyncTaskArray
    export interface AsyncTaskArray<T> {
        error?: string;
        result?: T[];
        status: xdslAsyncTaskStatusEnum;
    }
    // type fullname: xdsl.AsyncTaskStatusEnum
    export type AsyncTaskStatusEnum = "error" | "ok" | "pending"
    // interface fullName: xdsl.DHCP.DHCP
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
    // interface fullName: xdsl.DHCPStaticAddress.DHCPStaticAddress
    export interface DHCPStaticAddress {
        IPAddress: string;
        MACAddress: string;
        name?: string;
        taskId?: number;
    }
    // type fullname: xdsl.DeconsolidationEnum
    export type DeconsolidationEnum = "createNeighbour" | "creation" | "creationNeighbour" | "partial" | "total"
    // interface fullName: xdsl.DeconsolidationTerms.DeconsolidationTerms
    export interface DeconsolidationTerms {
        engagement: number;
        monthlyPrice: orderPrice;
        price: orderPrice;
    }
    // interface fullName: xdsl.DeviceModemInfo.DeviceModemInfo
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
    // type fullname: xdsl.DslTypeEnum
    export type DslTypeEnum = "adsl" | "ftth" | "sdsl" | "vdsl"
    // interface fullName: xdsl.DslamLineProfile.DslamLineProfile
    export interface DslamLineProfile {
        id: number;
        isCurrent: boolean;
        name: string;
    }
    // interface fullName: xdsl.DslamPort.DslamPort
    export interface DslamPort {
        lastDesyncDate?: string;
        lastSyncDate?: string;
        profile?: xdslDslamLineProfile;
        status: xdslDslamPortStatusEnum;
    }
    // interface fullName: xdsl.DslamPortLog.DslamPortLog
    export interface DslamPortLog {
        date: string;
        lastOccurrenceDate: string;
        message: string;
        numberOfOccurrences: number;
    }
    // type fullname: xdsl.DslamPortStatusEnum
    export type DslamPortStatusEnum = "activated" | "deactivated" | "outofsync"
    // interface fullName: xdsl.ExtraIpRangeMove.ExtraIpRangeMove
    export interface ExtraIpRangeMove {
        date: string;
        ipRange: string;
        moveTo: string;
    }
    // type fullname: xdsl.FaultRepairTimeEnum
    export type FaultRepairTimeEnum = "4HNO" | "4HO" | "NORMAL"
    // type fullname: xdsl.GtrEnum
    export type GtrEnum = "4hno" | "4ho" | "none"
    // interface fullName: xdsl.IP.IP
    export interface IP {
        dnsList: string[];
        ip: string;
        range: number;
        status: xdslIpStatusEnum;
        version: coreTypesIpVersionEnum;
    }
    // interface fullName: xdsl.Incident.Incident
    export interface Incident {
        comment: string;
        creationDate: string;
        departments: string[];
        endDate?: string;
        id: number;
        nra: string[];
        operators: xdslOperatorTypeEnum[];
        taskId?: number;
    }
    // type fullname: xdsl.IpStatusEnum
    export type IpStatusEnum = "active" | "close" | "toDelete"
    // interface fullName: xdsl.LAN.LAN
    export interface LAN {
        IPAddress: string;
        addressingType: xdslxdslModemConfigAddressingTypeEnum;
        lanName: string;
        subnetMask: string;
        taskId?: number;
    }
    // interface fullName: xdsl.LandlineConcentrationPoint.LandlineConcentrationPoint
    export interface LandlineConcentrationPoint {
        lineHead: string;
        lineInitialSection: number;
        lineInitialSectionPair: number;
    }
    // interface fullName: xdsl.Line.Line
    export interface Line {
        concentrationPoint?: xdslLandlineConcentrationPoint;
        deconsolidation: xdslDeconsolidationEnum;
        directDistribution?: boolean;
        distance: number;
        faultRepairTime: xdslFaultRepairTimeEnum;
        lineSectionsLength: xdslLineSectionLength[];
        mitigation: number;
        number: string;
        originalNumber?: string;
        portability: boolean;
        syncDown?: number;
        syncUp?: number;
    }
    // interface fullName: xdsl.LineDiagnostic.LineDiagnostic
    export interface LineDiagnostic {
        lineTest?: xdslLineTestEnum;
        lineTestTime?: string;
        number: string;
        proposedProfileId?: number;
        sync: boolean;
    }
    // interface fullName: xdsl.LineSectionLength.LineSectionLength
    export interface LineSectionLength {
        diameter: number;
        length: number;
    }
    // type fullname: xdsl.LineStatisticsTypeEnum
    export type LineStatisticsTypeEnum = "attenuation:download" | "attenuation:upload" | "snr:download" | "snr:upload" | "synchronization:download" | "synchronization:upload"
    // type fullname: xdsl.LineTestEnum
    export type LineTestEnum = "actionPending" | "customerSideProblem" | "error" | "noProblem" | "ovhSideProblem"
    // interface fullName: xdsl.Modem.Modem
    export interface Modem {
        brandName: string;
        capabilities: xdslModemCapabilities;
        dmzIP?: string;
        easyFirewallLevel?: xdslxdslModemConfigEasyFirewallLevelEnum;
        ipv6Support: boolean;
        isBridged: boolean;
        lastCwmpRequestDate?: string;
        macAddress: string;
        managedByOvh: boolean;
        model: string;
        mtuSize?: xdslxdslModemConfigMTUSizeEnum;
    }
    // interface fullName: xdsl.ModemCapabilities.ModemCapabilities
    export interface ModemCapabilities {
        canBeManagedByOvh: boolean;
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
    // interface fullName: xdsl.ModemInfo.ModemInfo
    export interface ModemInfo {
        device: xdslDeviceModemInfo;
        statistics: xdslStatsModemInfo;
    }
    // interface fullName: xdsl.MonitoringNotification.MonitoringNotification
    export interface MonitoringNotification {
        allowIncident: boolean;
        downThreshold: number;
        email?: string;
        enabled: boolean;
        frequency: xdslmonitoringNotificationsFrequencyEnum;
        id: number;
        phone?: string;
        smsAccount?: string;
        type: xdslmonitoringNotificationsTypeEnum;
    }
    // type fullname: xdsl.OperatorTypeEnum
    export type OperatorTypeEnum = "collect" | "kosc" | "ovh"
    // interface fullName: xdsl.PendingAction.PendingAction
    export interface PendingAction {
        action: string;
        dateTodo: string;
    }
    // interface fullName: xdsl.PortMapping.PortMapping
    export interface PortMapping {
        allowedRemoteIp?: string;
        description?: string;
        externalPortEnd?: number;
        externalPortStart: number;
        id: number;
        internalClient: string;
        internalPort: number;
        name: string;
        protocol: xdslxdslModemConfigProtocolTypeEnum;
        taskId?: number;
    }
    // interface fullName: xdsl.RadiusConnectionLog.RadiusConnectionLog
    export interface RadiusConnectionLog {
        date: string;
        login: string;
        message: string;
        state: string;
    }
    // interface fullName: xdsl.ResiliationFollowUpDetail.ResiliationFollowUpDetail
    export interface ResiliationFollowUpDetail {
        dateTodo: string;
        needModemReturn: boolean;
        registrationDate: string;
        status: string;
    }
    // type fullname: xdsl.ResiliationReasonEnum
    export type ResiliationReasonEnum = "addressMove" | "billingProblems" | "cessationOfActivity" | "changeOfTerms" | "ftth" | "goToCompetitor" | "other" | "technicalProblems"
    // interface fullName: xdsl.ResiliationSurvey.ResiliationSurvey
    export interface ResiliationSurvey {
        comment?: string;
        type: xdslResiliationReasonEnum;
    }
    // interface fullName: xdsl.ResiliationTerms.ResiliationTerms
    export interface ResiliationTerms {
        due: orderPrice;
        engageDate?: string;
        minResiliationDate: string;
        resiliationDate: string;
        resiliationReasons: xdslResiliationReasonEnum[];
    }
    // type fullname: xdsl.ServiceStatusEnum
    export type ServiceStatusEnum = "disabled" | "enabled"
    // type fullname: xdsl.StatisticsPeriodEnum
    export type StatisticsPeriodEnum = "daily" | "monthly" | "preview" | "weekly" | "yearly"
    // interface fullName: xdsl.StatsModemInfo.StatsModemInfo
    export interface StatsModemInfo {
        connectionUptime: number;
        crcError: number;
        deviceUptime: number;
        downstreamAttenuation: number;
        downstreamMargin: number;
        downstreamSync: number;
        lastUpdate: string;
        modulation: string;
        quarterHourStart: number;
        syncUptime: number;
        upstreamAttenuation: number;
        upstreamMargin: number;
        upstreamSync: number;
    }
    // interface fullName: xdsl.Task.Task
    export interface Task {
        function: string;
        id: number;
        status: xdslTaskStatusEnum;
        todoDate: string;
        updateDate: string;
    }
    // type fullname: xdsl.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "problem" | "todo"
    // interface fullName: xdsl.TemplateModem.TemplateModem
    export interface TemplateModem {
        DHCP: xdsltemplateModemDHCP[];
        LAN: xdsltemplateModemLAN[];
        WLAN: xdsltemplateModemWLAN[];
        capabilities: string;
        creationDate: string;
        dmzIP?: string;
        mtuSize?: xdslxdslModemConfigMTUSizeEnum;
        name: string;
        parametersToIgnore?: xdsltemplateModemParametersToIgnore;
        portMapping: xdsltemplateModemPortMapping[];
    }
    // interface fullName: xdsl.TimestampAndValue.TimestampAndValue
    export interface TimestampAndValue {
        timestamp: number;
        value?: number;
    }
    // interface fullName: xdsl.WLAN.WLAN
    export interface WLAN {
        SSID: string;
        SSIDAdvertisementEnabled: boolean;
        bandSteering: boolean;
        channel: number;
        channelMode: xdslxdslModemConfigChannelModeEnum;
        enabled: boolean;
        frequency: xdslxdslModemConfigFrequencyEnum;
        guest: boolean;
        securityKey: string;
        securityType: xdslxdslModemConfigSecurityTypeEnum;
        taskId?: number;
        wifiName: string;
    }
    // type fullname: xdsl.WLANFrequencyEnum
    export type WLANFrequencyEnum = "2.4GHz" | "5GHz"
    export namespace antiSpam {
        // type fullname: xdsl.antiSpam.AntiSpamStatusEnum
        export type AntiSpamStatusEnum = "block" | "done" | "new" | "unblock" | "warn"
        // interface fullName: xdsl.antiSpam.EvidencesInfo.EvidencesInfo
        export interface EvidencesInfo {
            error?: string;
            result?: xdslantiSpamEvidencesInfoDetail[];
            status: xdslantiSpamEvidencesInfoStatusEnum;
        }
        // interface fullName: xdsl.antiSpam.EvidencesInfoDetail.EvidencesInfoDetail
        export interface EvidencesInfoDetail {
            date: string;
            filename: string;
            url: string;
        }
        // type fullname: xdsl.antiSpam.EvidencesInfoStatusEnum
        export type EvidencesInfoStatusEnum = "error" | "ok" | "pending"
    }
    // interface fullName: xdsl.connectedDevice.connectedDevice
    export interface connectedDevice {
        active: boolean;
        addressSource: xdslxdslModemConfigConnectedDeviceAddressSourceEnum;
        hostName: string;
        informationDate: string;
        interfaceType: string;
        ipAddress: string;
        leaseTimeRemaining: number;
        macAddress: string;
    }
    export namespace eligibility {
        // interface fullName: xdsl.eligibility.Address.Address
        export interface Address {
            building?: string;
            city: xdsleligibilityCity;
            door?: string;
            floor?: string;
            logo?: string;
            owner?: string;
            residence?: string;
            stair?: string;
            street?: xdsleligibilityStreet;
            streetNumber?: string;
        }
        // interface fullName: xdsl.eligibility.Building.Building
        export interface Building {
            name: string;
            nro: string;
            reference: string;
            type: xdsleligibilityBuildingTypeEnum;
        }
        // type fullname: xdsl.eligibility.BuildingTypeEnum
        export type BuildingTypeEnum = "BUILDING" | "HOUSE"
        // interface fullName: xdsl.eligibility.City.City
        export interface City {
            inseeCode: string;
            locality?: string;
            name: string;
            zipCode: string;
        }
        // interface fullName: xdsl.eligibility.CodeAndMessage.CodeAndMessage
        export interface CodeAndMessage {
            code: string;
            message: string;
        }
        // interface fullName: xdsl.eligibility.Eligibility.Eligibility
        export interface Eligibility {
            address?: xdsleligibilityAddress;
            characteristics: xdsleligibilityLineCharacteristics;
            endpoint: xdsleligibilityLineEndpointEnum;
            id: string;
            infos: xdsleligibilityLineInfos;
            offers: xdsleligibilityOffer[];
            portability: xdsleligibilityPortability;
        }
        // interface fullName: xdsl.eligibility.FiberEligibility.FiberEligibility
        export interface FiberEligibility {
            id: string;
            offers: xdsleligibilityFiberOffer[];
        }
        // interface fullName: xdsl.eligibility.FiberOffer.FiberOffer
        export interface FiberOffer {
            availibilityDate?: string;
            downloadRate?: number;
            eligible: boolean;
            gtr: xdslGtrEnum[];
            guaranteed: boolean;
            label: string;
            reason?: string;
            type: xdslDslTypeEnum;
            uploadRate?: number;
        }
        // interface fullName: xdsl.eligibility.FiberStreet.FiberStreet
        export interface FiberStreet {
            streetCode: string;
            streetName: string;
        }
        // type fullname: xdsl.eligibility.LandlineStatusEnum
        export type LandlineStatusEnum = "active" | "inactive"
        // interface fullName: xdsl.eligibility.Line.Line
        export interface Line {
            address: xdsleligibilityAddress;
            contactName: string;
            lineNumber: string;
            lineStatus: xdsleligibilityLandlineStatusEnum;
        }
        // interface fullName: xdsl.eligibility.LineCharacteristics.LineCharacteristics
        export interface LineCharacteristics {
            calibration: xdsleligibilityLineSectionCalibration[];
            desaturationFreePairs: number;
            distance: number;
            freePairs: number;
            mitigation: number;
            mitigationSdsl: number;
            nra: string;
        }
        // type fullname: xdsl.eligibility.LineEndpointEnum
        export type LineEndpointEnum = "address" | "line"
        // interface fullName: xdsl.eligibility.LineInfos.LineInfos
        export interface LineInfos {
            createNeighbour: boolean;
            lineNumber?: string;
            lineStatus?: xdsleligibilityLandlineStatusEnum;
            unlistedNumber: boolean;
        }
        // interface fullName: xdsl.eligibility.LineSectionCalibration.LineSectionCalibration
        export interface LineSectionCalibration {
            diameter: number;
            length: number;
        }
        // interface fullName: xdsl.eligibility.MeetingSlot.MeetingSlot
        export interface MeetingSlot {
            endDate: string;
            startDate: string;
            uiCode: string;
        }
        // interface fullName: xdsl.eligibility.MeetingSlots.MeetingSlots
        export interface MeetingSlots {
            canBookFakeMeeting: boolean;
            meetingSlots: xdsleligibilityMeetingSlot[];
        }
        // interface fullName: xdsl.eligibility.Offer.Offer
        export interface Offer {
            desaturation?: boolean;
            downloadRate?: number;
            gtr: xdslGtrEnum[];
            guaranteed: boolean;
            label: string;
            pairs?: number;
            provider?: xdsleligibilityProviderEnum;
            rate?: number;
            type: xdslDslTypeEnum;
            unbundling?: xdslDeconsolidationEnum[];
            uploadRate?: number;
        }
        // interface fullName: xdsl.eligibility.Portability.Portability
        export interface Portability {
            comments: xdsleligibilityCodeAndMessage[];
            eligible: boolean;
            underCondition: boolean;
            warnings: xdsleligibilityCodeAndMessage[];
        }
        // type fullname: xdsl.eligibility.ProviderEnum
        export type ProviderEnum = "axione" | "ft" | "kosc" | "ovh" | "sfr"
        // interface fullName: xdsl.eligibility.Street.Street
        export interface Street {
            name: string;
            rivoliCode: string;
        }
    }
    export namespace email {
        export namespace pro {
            // interface fullName: xdsl.email.pro.Task.Task
            export interface Task {
                finishDate?: string;
                function: string;
                status: xdslemailproTaskStatusEnum;
                todoDate: string;
            }
            // type fullname: xdsl.email.pro.TaskStatusEnum
            export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        }
    }
    export namespace lineDiagnostic {
        // interface fullName: xdsl.lineDiagnostic.Answers.Answers
        export interface Answers {
            bandwidthTestUnit?: xdsllineDiagnosticBandwidthTestUnitEnum;
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
            problemType?: xdsllineDiagnosticProblemTypeEnum;
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
        // type fullname: xdsl.lineDiagnostic.BandwidthTestUnitEnum
        export type BandwidthTestUnitEnum = "Kbps" | "Mbps"
        // interface fullName: xdsl.lineDiagnostic.ConnectionInformations.ConnectionInformations
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
        // interface fullName: xdsl.lineDiagnostic.CustomerActionToDo.CustomerActionToDo
        export interface CustomerActionToDo {
            description: string;
            name: xdsllineDiagnosticCustomerActionsEnum;
        }
        // type fullname: xdsl.lineDiagnostic.CustomerActionsEnum
        export type CustomerActionsEnum = "bePreparedToCheckModemSynchronization" | "changeDslFilterAndPlugInDti" | "changeExtensionCable" | "changeProfile" | "checkConnectionCable" | "checkConnectionLoginAndParameters" | "checkFilter" | "connectModemToOtherPlugs" | "neutralTest" | "rebootModem" | "resetModem" | "unplugEveryModems" | "unplugModem"
        // interface fullName: xdsl.lineDiagnostic.Diagnostic.Diagnostic
        export interface Diagnostic {
            data: xdsllineDiagnosticDiagnosticData;
            faultType: xdsllineDiagnosticFaultTypeEnum;
            id: number;
            status: xdsllineDiagnosticDiagnosticStatusEnum;
        }
        // interface fullName: xdsl.lineDiagnostic.DiagnosticData.DiagnosticData
        export interface DiagnosticData {
            actionsDone: xdsllineDiagnosticCustomerActionsEnum[];
            actionsToDo: xdsllineDiagnosticCustomerActionToDo[];
            answers: xdsllineDiagnosticAnswers;
            comment?: string;
            creationDate: string;
            diagnosticDoneDate?: string;
            error: string;
            lastUpdate: string;
            lineDetails: xdsllineDiagnosticLineDetails;
            robotAction?: xdsllineDiagnosticRobotActionsEnum;
            seltTest: xdsllineDiagnosticSeltResult;
            timeout: number;
            toAnswer: xdsllineDiagnosticQuestion[];
        }
        // type fullname: xdsl.lineDiagnostic.DiagnosticStatusEnum
        export type DiagnosticStatusEnum = "cancelled" | "connectionProblem" | "genericIncidentPending" | "haveToConnectModemOnTheRightPlug" | "init" | "interventionRequested" | "noBandwidthFault" | "noProblemAnymore" | "noSyncFaultDiagnosticRequired" | "problem" | "resolvedAfterTests" | "sleeping" | "validationRefused" | "waitingHuman" | "waitingRobot" | "waitingValidation"
        // type fullname: xdsl.lineDiagnostic.FaultTypeEnum
        export type FaultTypeEnum = "alignment" | "noSync" | "syncLossOrLowBandwidth" | "unknown"
        // interface fullName: xdsl.lineDiagnostic.LineCapabilities.LineCapabilities
        export interface LineCapabilities {
            down?: number;
            mitigation?: string;
            ping?: number;
            up?: number;
        }
        // interface fullName: xdsl.lineDiagnostic.LineDetails.LineDetails
        export interface LineDetails {
            accessName: string;
            accessPing?: boolean;
            address?: string;
            connectionInfo?: xdsllineDiagnosticConnectionInformations;
            contactPhone?: string;
            description?: string;
            dslamIsSynchronized?: boolean;
            gtr: boolean;
            length: number;
            lineCapabilities?: xdsllineDiagnosticLineCapabilities;
            lineType: xdslDslTypeEnum;
            nra?: string;
            number: string;
            operator: xdsllineDiagnosticProviderEnum;
            sections?: xdsllineDiagnosticSection[];
        }
        // interface fullName: xdsl.lineDiagnostic.PossibleValue.PossibleValue
        export interface PossibleValue {
            id?: number;
            label?: string;
            value?: string;
        }
        // type fullname: xdsl.lineDiagnostic.ProblemTypeEnum
        export type ProblemTypeEnum = "lowBandwidth" | "syncLoss"
        // type fullname: xdsl.lineDiagnostic.ProviderEnum
        export type ProviderEnum = "axione" | "ft" | "ftBySfr" | "kosc" | "koscDeg" | "ovh" | "sfr"
        // interface fullName: xdsl.lineDiagnostic.Question.Question
        export interface Question {
            defaultValue?: string;
            description: string;
            enumValues?: string[];
            name: xdsllineDiagnosticQuestionsEnum;
            possibleValues?: xdsllineDiagnosticPossibleValue[];
            required?: boolean;
            type: string;
        }
        // type fullname: xdsl.lineDiagnostic.QuestionsEnum
        export type QuestionsEnum = "bandwidthTestUnit" | "comment" | "conditionsAccepted" | "contactPhone" | "datetimeOfAppearance" | "downloadBandwidthTest" | "endAfternoonHours" | "endMorningHours" | "followBySms" | "hasModemKeptSynchronization" | "idAppointment" | "individualSite" | "modemIsSynchronized" | "modemMac" | "modemStillSynchronized" | "modemType" | "ovhTicket" | "problemType" | "resolvedAfterTests" | "secureSite" | "severalInternetConnections" | "siteClosedDays" | "siteDigicode" | "siteOpening" | "startAfternoonHours" | "startMorningHours" | "uploadBandwidthTest"
        // type fullname: xdsl.lineDiagnostic.RobotActionsEnum
        export type RobotActionsEnum = "alignmentLockTest" | "alignmentResetTest" | "alignmentTestResult" | "checkCustomerTicket" | "checkIfAccessPing" | "checkIfResolvedAfterConnectionTests" | "checkIfResolvedAfterInstallationCheck" | "checkIfResolvedAfterTests" | "checkIfSeveralConnections" | "checkInstallation" | "checkProblem" | "checkSynchronizationWithoutOtherModems" | "customerPrelocChecks" | "findProblem" | "installationCheck" | "lockUnlock" | "needToRequestMonitoring" | "needToRequestOperatorIntervention" | "needToRequestOvhIntervention" | "requestMonitoring" | "requestOperatorIntervention" | "requestOvhIntervention" | "seltTest"
        // interface fullName: xdsl.lineDiagnostic.Section.Section
        export interface Section {
            length: number;
            section: number;
        }
        // type fullname: xdsl.lineDiagnostic.SeltPrelocEnum
        export type SeltPrelocEnum = "CUST" | "DSLAM" | "LINE" | "RE"
        // interface fullName: xdsl.lineDiagnostic.SeltResult.SeltResult
        export interface SeltResult {
            date?: string;
            distance?: number;
            preloc?: xdsllineDiagnosticSeltPrelocEnum;
            state?: xdsllineDiagnosticSeltStateEnum;
            status?: xdsllineDiagnosticSeltStatusEnum;
        }
        // type fullname: xdsl.lineDiagnostic.SeltStateEnum
        export type SeltStateEnum = "open" | "short" | "synced" | "unknown"
        // type fullname: xdsl.lineDiagnostic.SeltStatusEnum
        export type SeltStatusEnum = "failed" | "notAvailable" | "ok"
    }
    export namespace monitoringNotifications {
        // type fullname: xdsl.monitoringNotifications.FrequencyEnum
        export type FrequencyEnum = "1h" | "5m" | "6h" | "once"
        // type fullname: xdsl.monitoringNotifications.TypeEnum
        export type TypeEnum = "mail" | "sms"
    }
    export namespace orderFollowup {
        // type fullname: xdsl.orderFollowup.DurationUnitEnum
        export type DurationUnitEnum = "day" | "hour" | "minute"
        // interface fullName: xdsl.orderFollowup.Step.Step
        export interface Step {
            comments: string[];
            doneDate?: string;
            durationUnit: xdslorderFollowupDurationUnitEnum;
            expectedDuration: number;
            name: xdslorderFollowupStepNameEnum;
            status: xdslorderFollowupStepStatusEnum;
        }
        // type fullname: xdsl.orderFollowup.StepNameEnum
        export type StepNameEnum = "accessIsOperational" | "checkInfrastructure" | "configureAccessOnOVH" | "orderPayed" | "orderReceived" | "orderTreatment" | "sendModem" | "sendOrderToProvider" | "setupCustomerPremisesEquipment" | "waitingForProviderInstallReport" | "waitingForWithdrawalPeriodToBeOver"
        // type fullname: xdsl.orderFollowup.StepStatusEnum
        export type StepStatusEnum = "doing" | "done" | "error" | "todo" | "waitingCustomer"
    }
    export namespace templateModem {
        // interface fullName: xdsl.templateModem.DHCP.DHCP
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
        // interface fullName: xdsl.templateModem.LAN.LAN
        export interface LAN {
            IPAddress: string;
            addressingType: xdslxdslModemConfigAddressingTypeEnum;
            lanName: string;
            subnetMask: string;
        }
        // interface fullName: xdsl.templateModem.ParametersToIgnore.ParametersToIgnore
        export interface ParametersToIgnore {
            LANandDHCP?: boolean;
            WLANList?: string[];
            dmzIP?: boolean;
            mtuSize?: boolean;
            portMappingList?: string[];
        }
        // interface fullName: xdsl.templateModem.PortMapping.PortMapping
        export interface PortMapping {
            allowedRemoteIp?: string;
            description?: string;
            externalPortEnd?: number;
            externalPortStart: number;
            internalClient: string;
            internalPort: number;
            name: string;
            protocol: xdslxdslModemConfigProtocolTypeEnum;
        }
        // type fullname: xdsl.templateModem.SecurityTypeEnum
        export type SecurityTypeEnum = "None" | "WPA" | "WPA2" | "WPAandWPA2"
        // interface fullName: xdsl.templateModem.WLAN.WLAN
        export interface WLAN {
            SSID: string;
            SSIDAdvertisementEnabled: boolean;
            bandSteering: boolean;
            channel: number;
            channelMode: xdslxdslModemConfigChannelModeEnum;
            enabled: boolean;
            frequency: xdslxdslModemConfigFrequencyEnum;
            guest: boolean;
            securityKey: string;
            securityType: xdsltemplateModemSecurityTypeEnum;
            wifiName: string;
        }
    }
    // interface fullName: xdsl.xdslEmailPro.xdslEmailPro
    export interface xdslEmailPro {
        currentUsage: complexTypeUnitAndValuenumber;
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
        quota: complexTypeUnitAndValuenumber;
        state: emailproObjectStateEnum;
        taskPendingId?: number;
    }
    export namespace xdslModemConfig {
        // type fullname: xdsl.xdslModemConfig.AddressingTypeEnum
        export type AddressingTypeEnum = "DHCP" | "Static"
        // type fullname: xdsl.xdslModemConfig.ChannelModeEnum
        export type ChannelModeEnum = "Auto" | "Manual"
        // type fullname: xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum
        export type ConnectedDeviceAddressSourceEnum = "DHCP" | "Static" | "Unknown"
        // type fullname: xdsl.xdslModemConfig.EasyFirewallLevelEnum
        export type EasyFirewallLevelEnum = "BlockAll" | "Disabled" | "Normal"
        // type fullname: xdsl.xdslModemConfig.FrequencyEnum
        export type FrequencyEnum = "2.4GHz" | "5GHz"
        // type fullname: xdsl.xdslModemConfig.MTUSizeEnum
        export type MTUSizeEnum = 1432 | 1456 | 1492
        // type fullname: xdsl.xdslModemConfig.ProtocolTypeEnum
        export type ProtocolTypeEnum = "TCP" | "UDP"
        // type fullname: xdsl.xdslModemConfig.SecurityTypeEnum
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
 * Api Proxy model
 */// Apis harmony
// path /xdsl
export interface Xdsl{
    // GET /xdsl
    $get(): Promise<string[]>;
    eligibility: {
        cities: {
            // GET /xdsl/eligibility/cities
            $get(params: {zipCode: string}): Promise<xdsl.eligibility.City[]>;
        }
        lines: {
            active: {
                // POST /xdsl/eligibility/lines/active
                $post(params: {city: xdsleligibilityCity, contactName: string, street: xdsleligibilityStreet, streetNumber?: string}): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
            }
            inactive: {
                // POST /xdsl/eligibility/lines/inactive
                $post(params: {city: xdsleligibilityCity, contactName?: string, street: xdsleligibilityStreet, streetNumber?: string}): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
            }
        }
        meetings: {
            // GET /xdsl/eligibility/meetings
            $get(params: {eligibilityId: string, offerLabel: string}): Promise<xdsl.AsyncTask<xdsl.eligibility.MeetingSlots>>;
        }
        search: {
            buildings: {
                // POST /xdsl/eligibility/search/buildings
                $post(params: {streetCode: string, streetNumber: string}): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Building>>;
            }
            cities: {
                // POST /xdsl/eligibility/search/cities
                $post(params: {zipCode: string}): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.City>>;
            }
            fiberStreets: {
                // POST /xdsl/eligibility/search/fiberStreets
                $post(params: {inseeCode: string}): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.FiberStreet>>;
            }
            streetNumbers: {
                // POST /xdsl/eligibility/search/streetNumbers
                $post(params: {streetCode: string}): Promise<xdsl.AsyncTaskArray<string>>;
            }
        }
        streets: {
            // GET /xdsl/eligibility/streets
            $get(params: {inseeCode: string, partialName: string}): Promise<xdsl.eligibility.Street[]>;
        }
        test: {
            // GET /xdsl/eligibility/test
            $get(params: {id: string}): Promise<xdsl.eligibility.Eligibility>;
            address: {
                // POST /xdsl/eligibility/test/address
                $post(params: {address: xdsleligibilityAddress}): Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
            }
            fiber: {
                building: {
                    // POST /xdsl/eligibility/test/fiber/building
                    $post(params: {building: string}): Promise<xdsl.AsyncTask<xdsl.eligibility.FiberEligibility>>;
                }
            }
            line: {
                // POST /xdsl/eligibility/test/line
                $post(params: {lineNumber: string, lineStatus: xdsleligibilityLandlineStatusEnum}): Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
            }
        }
    }
    email: {
        pro: {
            // GET /xdsl/email/pro
            $get(): Promise<string[]>;
            $(email: string): {
                // DELETE /xdsl/email/pro/{email}
                $delete(): Promise<void>;
                // GET /xdsl/email/pro/{email}
                $get(): Promise<xdsl.xdslEmailPro>;
                // PUT /xdsl/email/pro/{email}
                $put(params?: {currentUsage?: complexTypeUnitAndValuenumber, displayName?: string, domain?: string, firstName?: string, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, login?: string, passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: complexTypeUnitAndValuenumber, state?: emailproObjectStateEnum, taskPendingId?: number}): Promise<void>;
                changePassword: {
                    // POST /xdsl/email/pro/{email}/changePassword
                    $post(params: {password: string}): Promise<xdsl.email.pro.Task>;
                }
            };
        }
    }
    incidents: {
        // GET /xdsl/incidents
        $get(params?: {creationDate?: string, endDate?: string}): Promise<number[]>;
        $(id: number): {
            // GET /xdsl/incidents/{id}
            $get(): Promise<xdsl.Incident>;
        };
    }
    spare: {
        // GET /xdsl/spare
        $get(): Promise<string[]>;
        brands: {
            // GET /xdsl/spare/brands
            $get(): Promise<string[]>;
        }
        $(spare: string): {
            // DELETE /xdsl/spare/{spare}
            $delete(): Promise<void>;
            // GET /xdsl/spare/{spare}
            $get(): Promise<spare.xdsl.XdslSpare>;
            compatibleReplacement: {
                // GET /xdsl/spare/{spare}/compatibleReplacement
                $get(): Promise<string[]>;
            }
            replace: {
                // POST /xdsl/spare/{spare}/replace
                $post(params: {domain: string}): Promise<void>;
            }
            returnMerchandise: {
                // POST /xdsl/spare/{spare}/returnMerchandise
                $post(): Promise<void>;
            }
            serviceInfos: {
                // GET /xdsl/spare/{spare}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /xdsl/spare/{spare}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: serviceRenewType, renewalType?: serviceRenewalTypeEnum, serviceId?: number, status?: serviceStateEnum}): Promise<void>;
            }
        };
    }
    templateModem: {
        // GET /xdsl/templateModem
        $get(): Promise<string[]>;
        // POST /xdsl/templateModem
        $post(params: {name: string, serviceName: string}): Promise<xdsl.TemplateModem>;
        $(name: string): {
            // DELETE /xdsl/templateModem/{name}
            $delete(): Promise<void>;
            // GET /xdsl/templateModem/{name}
            $get(): Promise<xdsl.TemplateModem>;
            // PUT /xdsl/templateModem/{name}
            $put(params?: {DHCP?: xdsltemplateModemDHCP[], LAN?: xdsltemplateModemLAN[], WLAN?: xdsltemplateModemWLAN[], capabilities?: string, creationDate?: string, dmzIP?: string, mtuSize?: xdslxdslModemConfigMTUSizeEnum, name?: string, parametersToIgnore?: xdsltemplateModemParametersToIgnore, portMapping?: xdsltemplateModemPortMapping[]}): Promise<void>;
        };
    }
    $(serviceName: string): {
        // GET /xdsl/{serviceName}
        $get(): Promise<xdsl.Access>;
        // PUT /xdsl/{serviceName}
        $put(params?: {accessName?: string, accessType?: xdslDslTypeEnum, address?: xdslAddressDetail, capabilities?: xdslAccessCapabilities, description?: string, ipv6Enabled?: boolean, lnsRateLimit?: number, monitoring?: boolean, nra?: string, packName?: string, pairsNumber?: number, role?: xdslAccessRoleEnum, status?: xdslAccessStatusEnum}): Promise<void>;
        addressMove: {
            extraIpRange: {
                // GET /xdsl/{serviceName}/addressMove/extraIpRange
                $get(): Promise<xdsl.ExtraIpRangeMove>;
            }
            extraIpRangeMove: {
                // POST /xdsl/{serviceName}/addressMove/extraIpRangeMove
                $post(): Promise<xdsl.Task>;
            }
        }
        antiSpams: {
            // GET /xdsl/{serviceName}/antiSpams
            $get(): Promise<string[]>;
            $(ip: string): {
                // GET /xdsl/{serviceName}/antiSpams/{ip}
                $get(): Promise<xdsl.AntiSpam>;
                evidences: {
                    // GET /xdsl/{serviceName}/antiSpams/{ip}/evidences
                    $get(): Promise<xdsl.antiSpam.EvidencesInfo>;
                }
            };
        }
        applyTemplateToModem: {
            // POST /xdsl/{serviceName}/applyTemplateToModem
            $post(params: {templateName: string}): Promise<xdsl.Task>;
        }
        canCancelResiliation: {
            // GET /xdsl/{serviceName}/canCancelResiliation
            $get(): Promise<boolean>;
        }
        cancelResiliation: {
            // POST /xdsl/{serviceName}/cancelResiliation
            $post(): Promise<void>;
        }
        changeContact: {
            // POST /xdsl/{serviceName}/changeContact
            $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        diagnostic: {
            // GET /xdsl/{serviceName}/diagnostic
            $get(): Promise<xdsl.AccessDiagnostic>;
            // POST /xdsl/{serviceName}/diagnostic
            $post(): Promise<xdsl.Task>;
        }
        incident: {
            // GET /xdsl/{serviceName}/incident
            $get(): Promise<xdsl.Incident>;
        }
        ips: {
            // GET /xdsl/{serviceName}/ips
            $get(): Promise<string[]>;
            // POST /xdsl/{serviceName}/ips
            $post(): Promise<xdsl.Task>;
            $(ip: string): {
                // DELETE /xdsl/{serviceName}/ips/{ip}
                $delete(): Promise<void>;
                // GET /xdsl/{serviceName}/ips/{ip}
                $get(): Promise<xdsl.IP>;
            };
        }
        ipv6: {
            // POST /xdsl/{serviceName}/ipv6
            $post(params: {enabled: boolean}): Promise<xdsl.Task>;
        }
        lines: {
            // GET /xdsl/{serviceName}/lines
            $get(): Promise<string[]>;
            $(number: string): {
                // GET /xdsl/{serviceName}/lines/{number}
                $get(): Promise<xdsl.Line>;
                diagnostic: {
                    cancel: {
                        // POST /xdsl/{serviceName}/lines/{number}/diagnostic/cancel
                        $post(): Promise<void>;
                    }
                    run: {
                        // POST /xdsl/{serviceName}/lines/{number}/diagnostic/run
                        $post(params: {actionsDone?: xdsllineDiagnosticCustomerActionsEnum[], answers?: xdsllineDiagnosticAnswers, faultType: xdsllineDiagnosticFaultTypeEnum}): Promise<xdsl.lineDiagnostic.Diagnostic>;
                    }
                }
                dslamPort: {
                    // GET /xdsl/{serviceName}/lines/{number}/dslamPort
                    $get(): Promise<xdsl.DslamPort>;
                    availableProfiles: {
                        // GET /xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles
                        $get(): Promise<xdsl.DslamLineProfile[]>;
                    }
                    changeProfile: {
                        // POST /xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile
                        $post(params: {dslamProfileId: number}): Promise<xdsl.Task>;
                    }
                    logs: {
                        // GET /xdsl/{serviceName}/lines/{number}/dslamPort/logs
                        $get(params: {limit: number}): Promise<xdsl.DslamPortLog[]>;
                    }
                    reset: {
                        // POST /xdsl/{serviceName}/lines/{number}/dslamPort/reset
                        $post(): Promise<xdsl.Task>;
                    }
                }
                statistics: {
                    // GET /xdsl/{serviceName}/lines/{number}/statistics
                    $get(params: {period: xdsl.StatisticsPeriodEnum, type: xdsl.LineStatisticsTypeEnum}): Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
                }
            };
        }
        modem: {
            // GET /xdsl/{serviceName}/modem
            $get(): Promise<xdsl.Modem>;
            // PUT /xdsl/{serviceName}/modem
            $put(params?: {brandName?: string, capabilities?: xdslModemCapabilities, dmzIP?: string, easyFirewallLevel?: xdslxdslModemConfigEasyFirewallLevelEnum, ipv6Support?: boolean, isBridged?: boolean, lastCwmpRequestDate?: string, macAddress?: string, managedByOvh?: boolean, model?: string, mtuSize?: xdslxdslModemConfigMTUSizeEnum}): Promise<void>;
            availableWLANChannel: {
                // GET /xdsl/{serviceName}/modem/availableWLANChannel
                $get(params: {frequency: xdsl.WLANFrequencyEnum}): Promise<number[]>;
            }
            blocIp: {
                // GET /xdsl/{serviceName}/modem/blocIp
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/blocIp
                $post(params: {status: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            callWaiting: {
                // GET /xdsl/{serviceName}/modem/callWaiting
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/callWaiting
                $post(params: {callWaiting: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            comfortExchange: {
                // POST /xdsl/{serviceName}/modem/comfortExchange
                $post(params?: {contactShipping?: string}): Promise<order.Order>;
            }
            connectedDevices: {
                // GET /xdsl/{serviceName}/modem/connectedDevices
                $get(): Promise<string[]>;
                $(macAddress: string): {
                    // GET /xdsl/{serviceName}/modem/connectedDevices/{macAddress}
                    $get(): Promise<xdsl.connectedDevice>;
                };
            }
            contentSharing: {
                // GET /xdsl/{serviceName}/modem/contentSharing
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/contentSharing
                $post(params: {contentSharing: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            duplicatePortMappingConfig: {
                // POST /xdsl/{serviceName}/modem/duplicatePortMappingConfig
                $post(params: {accessName: string}): Promise<void>;
            }
            firmware: {
                // GET /xdsl/{serviceName}/modem/firmware
                $get(): Promise<string>;
                // POST /xdsl/{serviceName}/modem/firmware
                $post(params: {firmware: string, todoDate?: string}): Promise<xdsl.Task>;
            }
            firmwareAvailable: {
                // GET /xdsl/{serviceName}/modem/firmwareAvailable
                $get(): Promise<string[]>;
            }
            ftp: {
                // GET /xdsl/{serviceName}/modem/ftp
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/ftp
                $post(params: {ftp: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            ipsecAlg: {
                // GET /xdsl/{serviceName}/modem/ipsecAlg
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/ipsecAlg
                $post(params: {ipsecAlg: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            lan: {
                // GET /xdsl/{serviceName}/modem/lan
                $get(): Promise<string[]>;
                $(lanName: string): {
                    // GET /xdsl/{serviceName}/modem/lan/{lanName}
                    $get(): Promise<xdsl.LAN>;
                    // PUT /xdsl/{serviceName}/modem/lan/{lanName}
                    $put(params?: {IPAddress?: string, addressingType?: xdslxdslModemConfigAddressingTypeEnum, lanName?: string, subnetMask?: string, taskId?: number}): Promise<void>;
                    dhcp: {
                        // GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp
                        $get(): Promise<string[]>;
                        $(dhcpName: string): {
                            // GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}
                            $get(): Promise<xdsl.DHCP>;
                            // PUT /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}
                            $put(params?: {defaultGateway?: string, dhcpName?: string, domainName?: string, endAddress?: string, leaseTime?: number, primaryDNS?: string, secondaryDNS?: string, serverEnabled?: boolean, startAddress?: string, subnetMask?: string, taskId?: number}): Promise<void>;
                            DHCPStaticAddresses: {
                                // GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses
                                $get(): Promise<string[]>;
                                // POST /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses
                                $post(params: {IPAddress: string, MACAddress: string, name?: string}): Promise<xdsl.DHCPStaticAddress>;
                                $(MACAddress: string): {
                                    // DELETE /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}
                                    $delete(): Promise<xdsl.Task>;
                                    // GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}
                                    $get(): Promise<xdsl.DHCPStaticAddress>;
                                    // PUT /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}
                                    $put(params?: {IPAddress?: string, MACAddress?: string, name?: string, taskId?: number}): Promise<void>;
                                };
                            }
                        };
                    }
                };
            }
            portMappings: {
                // GET /xdsl/{serviceName}/modem/portMappings
                $get(): Promise<string[]>;
                // POST /xdsl/{serviceName}/modem/portMappings
                $post(params: {allowedRemoteIp?: string, description?: string, externalPortEnd?: number, externalPortStart: number, internalClient: string, internalPort: number, name: string, protocol: xdslxdslModemConfigProtocolTypeEnum}): Promise<xdsl.PortMapping>;
                $(name: string): {
                    // DELETE /xdsl/{serviceName}/modem/portMappings/{name}
                    $delete(): Promise<xdsl.Task>;
                    // GET /xdsl/{serviceName}/modem/portMappings/{name}
                    $get(): Promise<xdsl.PortMapping>;
                    // PUT /xdsl/{serviceName}/modem/portMappings/{name}
                    $put(params?: {allowedRemoteIp?: string, description?: string, externalPortEnd?: number, externalPortStart?: number, id?: number, internalClient?: string, internalPort?: number, name?: string, protocol?: xdslxdslModemConfigProtocolTypeEnum, taskId?: number}): Promise<void>;
                };
            }
            reboot: {
                // POST /xdsl/{serviceName}/modem/reboot
                $post(params?: {todoDate?: string}): Promise<xdsl.Task>;
            }
            reconfigureVoip: {
                // POST /xdsl/{serviceName}/modem/reconfigureVoip
                $post(): Promise<void>;
            }
            refreshConnectedDevices: {
                // POST /xdsl/{serviceName}/modem/refreshConnectedDevices
                $post(): Promise<xdsl.Task>;
            }
            reset: {
                // POST /xdsl/{serviceName}/modem/reset
                $post(params?: {resetOvhConfig?: boolean}): Promise<xdsl.Task>;
            }
            resetPortMappingConfig: {
                // POST /xdsl/{serviceName}/modem/resetPortMappingConfig
                $post(): Promise<void>;
            }
            retrieveInfo: {
                // POST /xdsl/{serviceName}/modem/retrieveInfo
                $post(): Promise<xdsl.AsyncTask<xdsl.ModemInfo>>;
            }
            sipAlg: {
                // GET /xdsl/{serviceName}/modem/sipAlg
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/sipAlg
                $post(params: {sipAlg: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            upnp: {
                // GET /xdsl/{serviceName}/modem/upnp
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/upnp
                $post(params: {upnp: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            wifi: {
                // GET /xdsl/{serviceName}/modem/wifi
                $get(): Promise<string[]>;
                $(wifiName: string): {
                    // GET /xdsl/{serviceName}/modem/wifi/{wifiName}
                    $get(): Promise<xdsl.WLAN>;
                    // PUT /xdsl/{serviceName}/modem/wifi/{wifiName}
                    $put(params?: {SSID?: string, SSIDAdvertisementEnabled?: boolean, bandSteering?: boolean, channel?: number, channelMode?: xdslxdslModemConfigChannelModeEnum, enabled?: boolean, frequency?: xdslxdslModemConfigFrequencyEnum, guest?: boolean, securityKey?: string, securityType?: xdslxdslModemConfigSecurityTypeEnum, taskId?: number, wifiName?: string}): Promise<void>;
                };
            }
        }
        monitoringNotifications: {
            // GET /xdsl/{serviceName}/monitoringNotifications
            $get(): Promise<number[]>;
            // POST /xdsl/{serviceName}/monitoringNotifications
            $post(params: {allowIncident?: boolean, downThreshold?: number, email?: string, frequency: xdslmonitoringNotificationsFrequencyEnum, phone?: string, smsAccount?: string, type: xdslmonitoringNotificationsTypeEnum}): Promise<xdsl.MonitoringNotification>;
            $(id: number): {
                // DELETE /xdsl/{serviceName}/monitoringNotifications/{id}
                $delete(): Promise<void>;
                // GET /xdsl/{serviceName}/monitoringNotifications/{id}
                $get(): Promise<xdsl.MonitoringNotification>;
                // PUT /xdsl/{serviceName}/monitoringNotifications/{id}
                $put(params?: {allowIncident?: boolean, downThreshold?: number, email?: string, enabled?: boolean, frequency?: xdslmonitoringNotificationsFrequencyEnum, id?: number, phone?: string, smsAccount?: string, type?: xdslmonitoringNotificationsTypeEnum}): Promise<void>;
            };
        }
        orderFollowup: {
            // GET /xdsl/{serviceName}/orderFollowup
            $get(): Promise<xdsl.orderFollowup.Step[]>;
        }
        pendingAction: {
            // GET /xdsl/{serviceName}/pendingAction
            $get(): Promise<xdsl.PendingAction>;
        }
        radiusConnectionLogs: {
            // GET /xdsl/{serviceName}/radiusConnectionLogs
            $get(): Promise<xdsl.RadiusConnectionLog[]>;
        }
        requestPPPLoginMail: {
            // POST /xdsl/{serviceName}/requestPPPLoginMail
            $post(): Promise<void>;
        }
        requestTotalDeconsolidation: {
            // POST /xdsl/{serviceName}/requestTotalDeconsolidation
            $post(params?: {noPortability?: boolean, rio?: string}): Promise<xdsl.Task>;
        }
        resiliate: {
            // POST /xdsl/{serviceName}/resiliate
            $post(params: {resiliationDate?: string, resiliationSurvey: xdsl.ResiliationSurvey}): Promise<xdsl.ResiliationFollowUpDetail>;
        }
        resiliationFollowup: {
            // GET /xdsl/{serviceName}/resiliationFollowup
            $get(): Promise<xdsl.ResiliationFollowUpDetail>;
        }
        resiliationTerms: {
            // GET /xdsl/{serviceName}/resiliationTerms
            $get(params?: {resiliationDate?: string}): Promise<xdsl.ResiliationTerms>;
        }
        rma: {
            // GET /xdsl/{serviceName}/rma
            $get(): Promise<string[]>;
            $(id: string): {
                // DELETE /xdsl/{serviceName}/rma/{id}
                $delete(): Promise<void>;
                // GET /xdsl/{serviceName}/rma/{id}
                $get(): Promise<telephony.Rma>;
                // PUT /xdsl/{serviceName}/rma/{id}
                $put(params?: {cancellable?: boolean, creationDatetime?: string, equipmentReference?: string, id?: string, newMerchandise?: string, offerTypeNew?: telephonyRmaOfferTypeEnum, offerTypeOld?: telephonyRmaOfferTypeEnum, process?: telephonyRmaReplaceTypeEnum, receptionDatetime?: string, shippingContact?: telephonyContact, status?: telephonyRmaStatusEnum, steps?: telephonyRmaStep[], terminationDatetime?: string, type?: telephonyRmaTypeEnum}): Promise<void>;
            };
        }
        sendOrderToProvider: {
            // POST /xdsl/{serviceName}/sendOrderToProvider
            $post(): Promise<void>;
        }
        serviceInfos: {
            // GET /xdsl/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /xdsl/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: serviceRenewType, renewalType?: serviceRenewalTypeEnum, serviceId?: number, status?: serviceStateEnum}): Promise<void>;
        }
        statistics: {
            // GET /xdsl/{serviceName}/statistics
            $get(params: {period: xdsl.StatisticsPeriodEnum, type: xdsl.AccessStatisticsTypeEnum}): Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
        }
        tasks: {
            // GET /xdsl/{serviceName}/tasks
            $get(params?: {function_?: string, status?: xdslTaskStatusEnum}): Promise<number[]>;
            $(id: number): {
                // GET /xdsl/{serviceName}/tasks/{id}
                $get(): Promise<xdsl.Task>;
                archive: {
                    // POST /xdsl/{serviceName}/tasks/{id}/archive
                    $post(): Promise<void>;
                }
            };
        }
        totalDeconsolidationTerms: {
            // GET /xdsl/{serviceName}/totalDeconsolidationTerms
            $get(): Promise<xdsl.DeconsolidationTerms>;
        }
        updateInvalidOrMissingRio: {
            // POST /xdsl/{serviceName}/updateInvalidOrMissingRio
            $post(params: {relaunchWithoutPortability: boolean, rio?: string}): Promise<void>;
        }
    };
// Api
  /**
   * Operations about the XDSL service
   * List available services
   */
  get(path: '/xdsl'): () => Promise<string[]>;
  /**
   * XDSL Access
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}'): (params: {serviceName: string}) => Promise<xdsl.Access>;
  /**
   * extraIpRange operations
   * Informations about the extra IP range during address move
   */
  get(path: '/xdsl/{serviceName}/addressMove/extraIpRange'): (params: {serviceName: string}) => Promise<xdsl.ExtraIpRangeMove>;
  /**
   * List the xdsl.AntiSpam objects
   * List antiSpams for this access
   */
  get(path: '/xdsl/{serviceName}/antiSpams'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Spams detected from xdsl access
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/antiSpams/{ip}'): (params: {ip: string, serviceName: string}) => Promise<xdsl.AntiSpam>;
  /**
   * evidences operations
   * List of evidences stored on PCS for this ip
   */
  get(path: '/xdsl/{serviceName}/antiSpams/{ip}/evidences'): (params: {ip: string, serviceName: string}) => Promise<xdsl.antiSpam.EvidencesInfo>;
  /**
   * canCancelResiliation operations
   * Get information about the ongoing resiliation
   */
  get(path: '/xdsl/{serviceName}/canCancelResiliation'): (params: {serviceName: string}) => Promise<boolean>;
  /**
   * Diagnostic of the access
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/diagnostic'): (params: {serviceName: string}) => Promise<xdsl.AccessDiagnostic>;
  /**
   * Detected incident
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/incident'): (params: {serviceName: string}) => Promise<xdsl.Incident>;
  /**
   * List the xdsl.IP objects
   * List of IPs addresses for this access
   */
  get(path: '/xdsl/{serviceName}/ips'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Informations about an IP address
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/ips/{ip}'): (params: {ip: string, serviceName: string}) => Promise<xdsl.IP>;
  /**
   * List the xdsl.Line objects
   * The lines of the access
   */
  get(path: '/xdsl/{serviceName}/lines'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Information about the physical copper line
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/lines/{number}'): (params: {number: string, serviceName: string}) => Promise<xdsl.Line>;
  /**
   * Information about the port on the DSLAM
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort'): (params: {number: string, serviceName: string}) => Promise<xdsl.DslamPort>;
  /**
   * availableProfiles operations
   * List all availables profiles for this port
   */
  get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles'): (params: {number: string, serviceName: string}) => Promise<xdsl.DslamLineProfile[]>;
  /**
   * logs operations
   * Get the logs emitted by the DSLAM for this port
   */
  get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/logs'): (params: {number: string, serviceName: string, limit: number}) => Promise<xdsl.DslamPortLog[]>;
  /**
   * statistics operations
   * Get various statistics about the line
   */
  get(path: '/xdsl/{serviceName}/lines/{number}/statistics'): (params: {number: string, serviceName: string, period: xdsl.StatisticsPeriodEnum, type: xdsl.LineStatisticsTypeEnum}) => Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
  /**
   * Modem
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/modem'): (params: {serviceName: string}) => Promise<xdsl.Modem>;
  /**
   * availableWLANChannel operations
   * List available WLAN channel for this modem
   */
  get(path: '/xdsl/{serviceName}/modem/availableWLANChannel'): (params: {serviceName: string, frequency: xdsl.WLANFrequencyEnum}) => Promise<number[]>;
  /**
   * blocIp operations
   * Get the status of the Bloc IP on modem
   */
  get(path: '/xdsl/{serviceName}/modem/blocIp'): (params: {serviceName: string}) => Promise<xdsl.ServiceStatusEnum>;
  /**
   * callWaiting operations
   * Get the status of callWaiting on modem
   */
  get(path: '/xdsl/{serviceName}/modem/callWaiting'): (params: {serviceName: string}) => Promise<xdsl.ServiceStatusEnum>;
  /**
   * List the xdsl.connectedDevice objects
   * List of devices connected on this modem
   */
  get(path: '/xdsl/{serviceName}/modem/connectedDevices'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Connected Device
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/modem/connectedDevices/{macAddress}'): (params: {macAddress: string, serviceName: string}) => Promise<xdsl.connectedDevice>;
  /**
   * contentSharing operations
   * Get the status of contentSharing on modem
   */
  get(path: '/xdsl/{serviceName}/modem/contentSharing'): (params: {serviceName: string}) => Promise<xdsl.ServiceStatusEnum>;
  /**
   * firmware operations
   * Get the firmware version installed on modem
   */
  get(path: '/xdsl/{serviceName}/modem/firmware'): (params: {serviceName: string}) => Promise<string>;
  /**
   * firmwareAvailable operations
   * List available firmware for this modem
   */
  get(path: '/xdsl/{serviceName}/modem/firmwareAvailable'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * ftp operations
   * Get the status of ftp service on modem
   */
  get(path: '/xdsl/{serviceName}/modem/ftp'): (params: {serviceName: string}) => Promise<xdsl.ServiceStatusEnum>;
  /**
   * ipsecAlg operations
   * Get the status of ipsec alg service on modem
   */
  get(path: '/xdsl/{serviceName}/modem/ipsecAlg'): (params: {serviceName: string}) => Promise<xdsl.ServiceStatusEnum>;
  /**
   * List the xdsl.LAN objects
   * List of LANs on this modem
   */
  get(path: '/xdsl/{serviceName}/modem/lan'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * LAN Configuration of the Modem
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/modem/lan/{lanName}'): (params: {lanName: string, serviceName: string}) => Promise<xdsl.LAN>;
  /**
   * List the xdsl.DHCP objects
   * List of DHCP on this modem
   */
  get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp'): (params: {lanName: string, serviceName: string}) => Promise<string[]>;
  /**
   * DHCP Configuration of the Modem
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}'): (params: {dhcpName: string, lanName: string, serviceName: string}) => Promise<xdsl.DHCP>;
  /**
   * List the xdsl.DHCPStaticAddress objects
   * List of DHCP Static Address of this modem
   */
  get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses'): (params: {dhcpName: string, lanName: string, serviceName: string}) => Promise<string[]>;
  /**
   * DHCP Static Address
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}'): (params: {MACAddress: string, dhcpName: string, lanName: string, serviceName: string}) => Promise<xdsl.DHCPStaticAddress>;
  /**
   * List the xdsl.PortMapping objects
   * List of PortMappings on this modem
   */
  get(path: '/xdsl/{serviceName}/modem/portMappings'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Port Mappings
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/modem/portMappings/{name}'): (params: {name: string, serviceName: string}) => Promise<xdsl.PortMapping>;
  /**
   * sipAlg operations
   * Get the status of sip alg service on modem
   */
  get(path: '/xdsl/{serviceName}/modem/sipAlg'): (params: {serviceName: string}) => Promise<xdsl.ServiceStatusEnum>;
  /**
   * upnp operations
   * Get the status of the Upnp on modem
   */
  get(path: '/xdsl/{serviceName}/modem/upnp'): (params: {serviceName: string}) => Promise<xdsl.ServiceStatusEnum>;
  /**
   * List the xdsl.WLAN objects
   * List of WLANs on this modem
   */
  get(path: '/xdsl/{serviceName}/modem/wifi'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * WLAN Configuration of the Modem
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/modem/wifi/{wifiName}'): (params: {serviceName: string, wifiName: string}) => Promise<xdsl.WLAN>;
  /**
   * List the xdsl.MonitoringNotification objects
   * List the notifications for this access
   */
  get(path: '/xdsl/{serviceName}/monitoringNotifications'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Defines where and how the notifications will be sent
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/monitoringNotifications/{id}'): (params: {id: number, serviceName: string}) => Promise<xdsl.MonitoringNotification>;
  /**
   * orderFollowup operations
   * Get the status of the order
   */
  get(path: '/xdsl/{serviceName}/orderFollowup'): (params: {serviceName: string}) => Promise<xdsl.orderFollowup.Step[]>;
  /**
   * Scheduled action before the next renewal of the service
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/pendingAction'): (params: {serviceName: string}) => Promise<xdsl.PendingAction>;
  /**
   * radiusConnectionLogs operations
   * List the radius connection logs
   */
  get(path: '/xdsl/{serviceName}/radiusConnectionLogs'): (params: {serviceName: string}) => Promise<xdsl.RadiusConnectionLog[]>;
  /**
   * resiliationFollowup operations
   * Get information about the ongoing resiliation
   */
  get(path: '/xdsl/{serviceName}/resiliationFollowup'): (params: {serviceName: string}) => Promise<xdsl.ResiliationFollowUpDetail>;
  /**
   * resiliationTerms operations
   * Get resiliation terms
   */
  get(path: '/xdsl/{serviceName}/resiliationTerms'): (params: {serviceName: string, resiliationDate?: string}) => Promise<xdsl.ResiliationTerms>;
  /**
   * List the telephony.Rma objects
   * Return Merchandise Authorisation associated
   */
  get(path: '/xdsl/{serviceName}/rma'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Current Return Merchandise Authorisation
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/rma/{id}'): (params: {id: string, serviceName: string}) => Promise<telephony.Rma>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * statistics operations
   * Get various statistics about this access
   */
  get(path: '/xdsl/{serviceName}/statistics'): (params: {serviceName: string, period: xdsl.StatisticsPeriodEnum, type: xdsl.AccessStatisticsTypeEnum}) => Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
  /**
   * List the xdsl.Task objects
   * Tasks scheduled for this access
   */
  get(path: '/xdsl/{serviceName}/tasks'): (params: {serviceName: string, function_?: string, status?: xdslTaskStatusEnum}) => Promise<number[]>;
  /**
   * Describes the current status of a task
   * Get this object properties
   */
  get(path: '/xdsl/{serviceName}/tasks/{id}'): (params: {id: number, serviceName: string}) => Promise<xdsl.Task>;
  /**
   * totalDeconsolidationTerms operations
   * Give the price to requestTotalDeconsolidation on the access
   */
  get(path: '/xdsl/{serviceName}/totalDeconsolidationTerms'): (params: {serviceName: string}) => Promise<xdsl.DeconsolidationTerms>;
  /**
   * Get the cities from a zipCode
   * Get the cities from a zipCode
   */
  get(path: '/xdsl/eligibility/cities'): (params: {zipCode: string}) => Promise<xdsl.eligibility.City[]>;
  /**
   * Search for meeting time slot
   * Search for meeting time slot
   */
  get(path: '/xdsl/eligibility/meetings'): (params: {eligibilityId: string, offerLabel: string}) => Promise<xdsl.AsyncTask<xdsl.eligibility.MeetingSlots>>;
  /**
   * Get the streets from a city inseeCode and partial street name
   * Get the streets from a city inseeCode and partial street name
   */
  get(path: '/xdsl/eligibility/streets'): (params: {inseeCode: string, partialName: string}) => Promise<xdsl.eligibility.Street[]>;
  /**
   * Get an eligibility by its id
   * Get an eligibility by its id
   */
  get(path: '/xdsl/eligibility/test'): (params: {id: string}) => Promise<xdsl.eligibility.Eligibility>;
  /**
   * Operations about the XDSL service
   * List available services
   */
  get(path: '/xdsl/email/pro'): () => Promise<string[]>;
  /**
   * XDSL Email Pro
   * Get this object properties
   */
  get(path: '/xdsl/email/pro/{email}'): (params: {email: string}) => Promise<xdsl.xdslEmailPro>;
  /**
   * List the xdsl.Incident objects
   * List of incidents
   */
  get(path: '/xdsl/incidents'): (params?: {creationDate?: string, endDate?: string}) => Promise<number[]>;
  /**
   * Detected incident
   * Get this object properties
   */
  get(path: '/xdsl/incidents/{id}'): (params: {id: number}) => Promise<xdsl.Incident>;
  /**
   * Operations about the XDSL service
   * List available services
   */
  get(path: '/xdsl/spare'): () => Promise<string[]>;
  /**
   * Spare properties
   * Get this object properties
   */
  get(path: '/xdsl/spare/{spare}'): (params: {spare: string}) => Promise<spare.xdsl.XdslSpare>;
  /**
   * compatibleReplacement operations
   * Return the list of brand compatible to be replaced
   */
  get(path: '/xdsl/spare/{spare}/compatibleReplacement'): (params: {spare: string}) => Promise<string[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/xdsl/spare/{spare}/serviceInfos'): (params: {spare: string}) => Promise<services.Service>;
  /**
   * Get all available spare brands
   * Get all available spare brands
   */
  get(path: '/xdsl/spare/brands'): () => Promise<string[]>;
  /**
   * List the xdsl.TemplateModem objects
   * List of TemplateModem
   */
  get(path: '/xdsl/templateModem'): () => Promise<string[]>;
  /**
   * Modem Template
   * Get this object properties
   */
  get(path: '/xdsl/templateModem/{name}'): (params: {name: string}) => Promise<xdsl.TemplateModem>;
  /**
   * XDSL Access
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}'): (params: {serviceName: string, accessName?: string, accessType?: xdslDslTypeEnum, address?: xdslAddressDetail, capabilities?: xdslAccessCapabilities, description?: string, ipv6Enabled?: boolean, lnsRateLimit?: number, monitoring?: boolean, nra?: string, packName?: string, pairsNumber?: number, role?: xdslAccessRoleEnum, status?: xdslAccessStatusEnum}) => Promise<void>;
  /**
   * Modem
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/modem'): (params: {serviceName: string, brandName?: string, capabilities?: xdslModemCapabilities, dmzIP?: string, easyFirewallLevel?: xdslxdslModemConfigEasyFirewallLevelEnum, ipv6Support?: boolean, isBridged?: boolean, lastCwmpRequestDate?: string, macAddress?: string, managedByOvh?: boolean, model?: string, mtuSize?: xdslxdslModemConfigMTUSizeEnum}) => Promise<void>;
  /**
   * LAN Configuration of the Modem
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/modem/lan/{lanName}'): (params: {lanName: string, serviceName: string, IPAddress?: string, addressingType?: xdslxdslModemConfigAddressingTypeEnum, subnetMask?: string, taskId?: number}) => Promise<void>;
  /**
   * DHCP Configuration of the Modem
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}'): (params: {dhcpName: string, lanName: string, serviceName: string, defaultGateway?: string, domainName?: string, endAddress?: string, leaseTime?: number, primaryDNS?: string, secondaryDNS?: string, serverEnabled?: boolean, startAddress?: string, subnetMask?: string, taskId?: number}) => Promise<void>;
  /**
   * DHCP Static Address
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}'): (params: {MACAddress: string, dhcpName: string, lanName: string, serviceName: string, IPAddress?: string, name?: string, taskId?: number}) => Promise<void>;
  /**
   * Port Mappings
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/modem/portMappings/{name}'): (params: {name: string, serviceName: string, allowedRemoteIp?: string, description?: string, externalPortEnd?: number, externalPortStart?: number, id?: number, internalClient?: string, internalPort?: number, protocol?: xdslxdslModemConfigProtocolTypeEnum, taskId?: number}) => Promise<void>;
  /**
   * WLAN Configuration of the Modem
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/modem/wifi/{wifiName}'): (params: {serviceName: string, wifiName: string, SSID?: string, SSIDAdvertisementEnabled?: boolean, bandSteering?: boolean, channel?: number, channelMode?: xdslxdslModemConfigChannelModeEnum, enabled?: boolean, frequency?: xdslxdslModemConfigFrequencyEnum, guest?: boolean, securityKey?: string, securityType?: xdslxdslModemConfigSecurityTypeEnum, taskId?: number}) => Promise<void>;
  /**
   * Defines where and how the notifications will be sent
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/monitoringNotifications/{id}'): (params: {id: number, serviceName: string, allowIncident?: boolean, downThreshold?: number, email?: string, enabled?: boolean, frequency?: xdslmonitoringNotificationsFrequencyEnum, phone?: string, smsAccount?: string, type?: xdslmonitoringNotificationsTypeEnum}) => Promise<void>;
  /**
   * Current Return Merchandise Authorisation
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/rma/{id}'): (params: {id: string, serviceName: string, cancellable?: boolean, creationDatetime?: string, equipmentReference?: string, newMerchandise?: string, offerTypeNew?: telephonyRmaOfferTypeEnum, offerTypeOld?: telephonyRmaOfferTypeEnum, process?: telephonyRmaReplaceTypeEnum, receptionDatetime?: string, shippingContact?: telephonyContact, status?: telephonyRmaStatusEnum, steps?: telephonyRmaStep[], terminationDatetime?: string, type?: telephonyRmaTypeEnum}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: serviceRenewType, renewalType?: serviceRenewalTypeEnum, serviceId?: number, status?: serviceStateEnum}) => Promise<void>;
  /**
   * XDSL Email Pro
   * Alter this object properties
   */
  put(path: '/xdsl/email/pro/{email}'): (params: {email: string, currentUsage?: complexTypeUnitAndValuenumber, displayName?: string, domain?: string, firstName?: string, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, login?: string, passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: complexTypeUnitAndValuenumber, state?: emailproObjectStateEnum, taskPendingId?: number}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/xdsl/spare/{spare}/serviceInfos'): (params: {spare: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: serviceRenewType, renewalType?: serviceRenewalTypeEnum, serviceId?: number, status?: serviceStateEnum}) => Promise<void>;
  /**
   * Modem Template
   * Alter this object properties
   */
  put(path: '/xdsl/templateModem/{name}'): (params: {name: string, DHCP?: xdsltemplateModemDHCP[], LAN?: xdsltemplateModemLAN[], WLAN?: xdsltemplateModemWLAN[], capabilities?: string, creationDate?: string, dmzIP?: string, mtuSize?: xdslxdslModemConfigMTUSizeEnum, parametersToIgnore?: xdsltemplateModemParametersToIgnore, portMapping?: xdsltemplateModemPortMapping[]}) => Promise<void>;
  /**
   * extraIpRangeMove operations
   * Initiate the extra IP range migration
   */
  post(path: '/xdsl/{serviceName}/addressMove/extraIpRangeMove'): (params: {serviceName: string}) => Promise<xdsl.Task>;
  /**
   * applyTemplateToModem operations
   * Apply TemplateModem to existing Modem
   */
  post(path: '/xdsl/{serviceName}/applyTemplateToModem'): (params: {serviceName: string, templateName: string}) => Promise<xdsl.Task>;
  /**
   * cancelResiliation operations
   * Cancel the ongoing resiliation
   */
  post(path: '/xdsl/{serviceName}/cancelResiliation'): (params: {serviceName: string}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/xdsl/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Diagnostic of the access
   * Run diagnostic on the access
   */
  post(path: '/xdsl/{serviceName}/diagnostic'): (params: {serviceName: string}) => Promise<xdsl.Task>;
  /**
   * List the xdsl.IP objects
   * Order an extra /29 range of IPv4 addresses
   */
  post(path: '/xdsl/{serviceName}/ips'): (params: {serviceName: string}) => Promise<xdsl.Task>;
  /**
   * ipv6 operations
   * Change the status of the IPv6 for this access
   */
  post(path: '/xdsl/{serviceName}/ipv6'): (params: {serviceName: string, enabled: boolean}) => Promise<xdsl.Task>;
  /**
   * cancel operations
   * Cancel line diagnostic if possible
   */
  post(path: '/xdsl/{serviceName}/lines/{number}/diagnostic/cancel'): (params: {number: string, serviceName: string}) => Promise<void>;
  /**
   * run operations
   * Update and get advanced diagnostic of the line
   */
  post(path: '/xdsl/{serviceName}/lines/{number}/diagnostic/run'): (params: {number: string, serviceName: string, actionsDone?: xdsllineDiagnosticCustomerActionsEnum[], answers?: xdsllineDiagnosticAnswers, faultType: xdsllineDiagnosticFaultTypeEnum}) => Promise<xdsl.lineDiagnostic.Diagnostic>;
  /**
   * changeProfile operations
   * Change the profile of the port
   */
  post(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile'): (params: {number: string, serviceName: string, dslamProfileId: number}) => Promise<xdsl.Task>;
  /**
   * reset operations
   * Reset the port on the DSLAM
   */
  post(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/reset'): (params: {number: string, serviceName: string}) => Promise<xdsl.Task>;
  /**
   * blocIp operations
   * Change the status of the Bloc IP on modem
   */
  post(path: '/xdsl/{serviceName}/modem/blocIp'): (params: {serviceName: string, status: xdsl.ServiceStatusEnum}) => Promise<xdsl.Task>;
  /**
   * callWaiting operations
   * Change the status of callWaiting on modem
   */
  post(path: '/xdsl/{serviceName}/modem/callWaiting'): (params: {serviceName: string, callWaiting: xdsl.ServiceStatusEnum}) => Promise<xdsl.Task>;
  /**
   * comfortExchange operations
   * Replace access modem by last model, fees will be applied.
   */
  post(path: '/xdsl/{serviceName}/modem/comfortExchange'): (params: {serviceName: string, contactShipping?: string}) => Promise<order.Order>;
  /**
   * contentSharing operations
   * Change the status of contentSharing on modem
   */
  post(path: '/xdsl/{serviceName}/modem/contentSharing'): (params: {serviceName: string, contentSharing: xdsl.ServiceStatusEnum}) => Promise<xdsl.Task>;
  /**
   * duplicatePortMappingConfig operations
   * Remove all the current port mapping rules and set the same config as the access given in parameters
   */
  post(path: '/xdsl/{serviceName}/modem/duplicatePortMappingConfig'): (params: {serviceName: string, accessName: string}) => Promise<void>;
  /**
   * firmware operations
   * Launch a task to install target firmware on modem
   */
  post(path: '/xdsl/{serviceName}/modem/firmware'): (params: {serviceName: string, firmware: string, todoDate?: string}) => Promise<xdsl.Task>;
  /**
   * ftp operations
   * Change the status of the ftp service on modem
   */
  post(path: '/xdsl/{serviceName}/modem/ftp'): (params: {serviceName: string, ftp: xdsl.ServiceStatusEnum}) => Promise<xdsl.Task>;
  /**
   * ipsecAlg operations
   * Change the status of the ipsec alg service on modem
   */
  post(path: '/xdsl/{serviceName}/modem/ipsecAlg'): (params: {serviceName: string, ipsecAlg: xdsl.ServiceStatusEnum}) => Promise<xdsl.Task>;
  /**
   * List the xdsl.DHCPStaticAddress objects
   * Add a DHCP static lease
   */
  post(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses'): (params: {dhcpName: string, lanName: string, serviceName: string, IPAddress: string, MACAddress: string, name?: string}) => Promise<xdsl.DHCPStaticAddress>;
  /**
   * List the xdsl.PortMapping objects
   * Add a port mapping
   */
  post(path: '/xdsl/{serviceName}/modem/portMappings'): (params: {serviceName: string, allowedRemoteIp?: string, description?: string, externalPortEnd?: number, externalPortStart: number, internalClient: string, internalPort: number, name: string, protocol: xdslxdslModemConfigProtocolTypeEnum}) => Promise<xdsl.PortMapping>;
  /**
   * reboot operations
   * Reboot the modem
   */
  post(path: '/xdsl/{serviceName}/modem/reboot'): (params: {serviceName: string, todoDate?: string}) => Promise<xdsl.Task>;
  /**
   * reconfigureVoip operations
   * Reconfigure voip line on modem
   */
  post(path: '/xdsl/{serviceName}/modem/reconfigureVoip'): (params: {serviceName: string}) => Promise<void>;
  /**
   * refreshConnectedDevices operations
   * Refresh the list of connected devices on the modem
   */
  post(path: '/xdsl/{serviceName}/modem/refreshConnectedDevices'): (params: {serviceName: string}) => Promise<xdsl.Task>;
  /**
   * reset operations
   * Reset the modem to its default configuration
   */
  post(path: '/xdsl/{serviceName}/modem/reset'): (params: {serviceName: string, resetOvhConfig?: boolean}) => Promise<xdsl.Task>;
  /**
   * resetPortMappingConfig operations
   * Remove all the current port mapping rules
   */
  post(path: '/xdsl/{serviceName}/modem/resetPortMappingConfig'): (params: {serviceName: string}) => Promise<void>;
  /**
   * retrieveInfo operations
   * get general Modem information
   */
  post(path: '/xdsl/{serviceName}/modem/retrieveInfo'): (params: {serviceName: string}) => Promise<xdsl.AsyncTask<xdsl.ModemInfo>>;
  /**
   * sipAlg operations
   * Change the status of the sip alg service on modem
   */
  post(path: '/xdsl/{serviceName}/modem/sipAlg'): (params: {serviceName: string, sipAlg: xdsl.ServiceStatusEnum}) => Promise<xdsl.Task>;
  /**
   * upnp operations
   * Change the status of the Upnp on modem
   */
  post(path: '/xdsl/{serviceName}/modem/upnp'): (params: {serviceName: string, upnp: xdsl.ServiceStatusEnum}) => Promise<xdsl.Task>;
  /**
   * List the xdsl.MonitoringNotification objects
   * Add a notification
   */
  post(path: '/xdsl/{serviceName}/monitoringNotifications'): (params: {serviceName: string, allowIncident?: boolean, downThreshold?: number, email?: string, frequency: xdslmonitoringNotificationsFrequencyEnum, phone?: string, smsAccount?: string, type: xdslmonitoringNotificationsTypeEnum}) => Promise<xdsl.MonitoringNotification>;
  /**
   * requestPPPLoginMail operations
   * Renew PPP password and send the PPP login informations to the e-mail of the nicAdmin
   */
  post(path: '/xdsl/{serviceName}/requestPPPLoginMail'): (params: {serviceName: string}) => Promise<void>;
  /**
   * requestTotalDeconsolidation operations
   * Switch this access to total deconsolidation
   */
  post(path: '/xdsl/{serviceName}/requestTotalDeconsolidation'): (params: {serviceName: string, noPortability?: boolean, rio?: string}) => Promise<xdsl.Task>;
  /**
   * resiliate operations
   * Resiliate the access
   */
  post(path: '/xdsl/{serviceName}/resiliate'): (params: {serviceName: string, resiliationDate?: string, resiliationSurvey: xdsl.ResiliationSurvey}) => Promise<xdsl.ResiliationFollowUpDetail>;
  /**
   * sendOrderToProvider operations
   * Unlock order in "waitingCustomer" status. It only concerns orders whose modem is sent before anything have been forwarded to our provider
   */
  post(path: '/xdsl/{serviceName}/sendOrderToProvider'): (params: {serviceName: string}) => Promise<void>;
  /**
   * archive operations
   * Delete the task in problem from the results
   */
  post(path: '/xdsl/{serviceName}/tasks/{id}/archive'): (params: {id: number, serviceName: string}) => Promise<void>;
  /**
   * updateInvalidOrMissingRio operations
   * Update RIO, or disable portability, for order in error because of missing or invalid RIO
   */
  post(path: '/xdsl/{serviceName}/updateInvalidOrMissingRio'): (params: {serviceName: string, relaunchWithoutPortability: boolean, rio?: string}) => Promise<void>;
  /**
   * Get the active lines at given address
   * Get the active lines at given address
   */
  post(path: '/xdsl/eligibility/lines/active'): (params: {city: xdsleligibilityCity, contactName: string, street: xdsleligibilityStreet, streetNumber?: string}) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
  /**
   * Get the inactive lines at given address
   * Get the inactive lines at given address
   */
  post(path: '/xdsl/eligibility/lines/inactive'): (params: {city: xdsleligibilityCity, contactName?: string, street: xdsleligibilityStreet, streetNumber?: string}) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
  /**
   * Get all buildings for a specific address
   * Get all buildings for a specific address
   */
  post(path: '/xdsl/eligibility/search/buildings'): (params: {streetCode: string, streetNumber: string}) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Building>>;
  /**
   * Get all localities linked to a zip code
   * Get all localities linked to a zip code
   */
  post(path: '/xdsl/eligibility/search/cities'): (params: {zipCode: string}) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.City>>;
  /**
   * Get all street linked to a locality
   * Get all street linked to a locality
   */
  post(path: '/xdsl/eligibility/search/fiberStreets'): (params: {inseeCode: string}) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.FiberStreet>>;
  /**
   * Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)
   * Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)
   */
  post(path: '/xdsl/eligibility/search/streetNumbers'): (params: {streetCode: string}) => Promise<xdsl.AsyncTaskArray<string>>;
  /**
   * Do an eligibility for an address, if no line exist
   * Do an eligibility for an address, if no line exist
   */
  post(path: '/xdsl/eligibility/test/address'): (params: {address: xdsleligibilityAddress}) => Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
  /**
   * Perform a fiber eligibility for a building
   * Perform a fiber eligibility for a building
   */
  post(path: '/xdsl/eligibility/test/fiber/building'): (params: {building: string}) => Promise<xdsl.AsyncTask<xdsl.eligibility.FiberEligibility>>;
  /**
   * Do an eligibility for a line
   * Do an eligibility for a line
   */
  post(path: '/xdsl/eligibility/test/line'): (params: {lineNumber: string, lineStatus: xdsleligibilityLandlineStatusEnum}) => Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
  /**
   * changePassword operations
   * Change the email password
   */
  post(path: '/xdsl/email/pro/{email}/changePassword'): (params: {email: string, password: string}) => Promise<xdsl.email.pro.Task>;
  /**
   * replace operations
   * Replace the modem by its spare
   */
  post(path: '/xdsl/spare/{spare}/replace'): (params: {spare: string, domain: string}) => Promise<void>;
  /**
   * returnMerchandise operations
   * Return the broken equipment in instantRefund
   */
  post(path: '/xdsl/spare/{spare}/returnMerchandise'): (params: {spare: string}) => Promise<void>;
  /**
   * List the xdsl.TemplateModem objects
   * Create new Modem Template from existing modem
   */
  post(path: '/xdsl/templateModem'): (params: {name: string, serviceName: string}) => Promise<xdsl.TemplateModem>;
  /**
   * Informations about an IP address
   * Stop renewing this extra IPv4 option
   */
  delete(path: '/xdsl/{serviceName}/ips/{ip}'): (params: {ip: string, serviceName: string}) => Promise<void>;
  /**
   * DHCP Static Address
   * Delete this port mapping
   */
  delete(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}'): (params: {MACAddress: string, dhcpName: string, lanName: string, serviceName: string}) => Promise<xdsl.Task>;
  /**
   * Port Mappings
   * Delete this port mapping
   */
  delete(path: '/xdsl/{serviceName}/modem/portMappings/{name}'): (params: {name: string, serviceName: string}) => Promise<xdsl.Task>;
  /**
   * Defines where and how the notifications will be sent
   * Delete this notification
   */
  delete(path: '/xdsl/{serviceName}/monitoringNotifications/{id}'): (params: {id: number, serviceName: string}) => Promise<void>;
  /**
   * Current Return Merchandise Authorisation
   * Cancel the rma
   */
  delete(path: '/xdsl/{serviceName}/rma/{id}'): (params: {id: string, serviceName: string}) => Promise<void>;
  /**
   * XDSL Email Pro
   * Delete the email
   */
  delete(path: '/xdsl/email/pro/{email}'): (params: {email: string}) => Promise<void>;
  /**
   * Spare properties
   * Delete the spare as if it was not belonging to OVH anymore
   */
  delete(path: '/xdsl/spare/{spare}'): (params: {spare: string}) => Promise<void>;
  /**
   * Modem Template
   * Delete this Modem Template
   */
  delete(path: '/xdsl/templateModem/{name}'): (params: {name: string}) => Promise<void>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type orderContract = order.Contract;
type orderOrderDetail = order.OrderDetail;
type orderOrderPrices = order.OrderPrices;
type orderOrderDetailTypeEnum = order.OrderDetailTypeEnum;
type orderPrice = order.Price;
type orderCurrencyCodeEnum = order.CurrencyCodeEnum;
type serviceRenewType = service.RenewType;
type serviceRenewalTypeEnum = service.RenewalTypeEnum;
type serviceStateEnum = service.StateEnum;
type coreTypesCountryEnum = coreTypes.CountryEnum;
type telephonyRmaOfferTypeEnum = telephony.RmaOfferTypeEnum;
type telephonyRmaReplaceTypeEnum = telephony.RmaReplaceTypeEnum;
type telephonyContact = telephony.Contact;
type telephonyRmaStatusEnum = telephony.RmaStatusEnum;
type telephonyRmaStep = telephony.RmaStep;
type telephonyRmaTypeEnum = telephony.RmaTypeEnum;
type telephonyRmaStepNameEnum = telephony.RmaStepNameEnum;
type telephonyRmaStepStatusEnum = telephony.RmaStepStatusEnum;
type xdslDslTypeEnum = xdsl.DslTypeEnum;
type xdslAddressDetail = xdsl.AddressDetail;
type xdslAccessCapabilities = xdsl.AccessCapabilities;
type xdslAccessRoleEnum = xdsl.AccessRoleEnum;
type xdslAccessStatusEnum = xdsl.AccessStatusEnum;
type xdslAccessDiagnosticCapabilities = xdsl.AccessDiagnosticCapabilities;
type xdslLineDiagnostic = xdsl.LineDiagnostic;
type xdslantiSpamAntiSpamStatusEnum = xdsl.antiSpam.AntiSpamStatusEnum;
type xdslAsyncTaskStatusEnum = xdsl.AsyncTaskStatusEnum;
type xdslDslamLineProfile = xdsl.DslamLineProfile;
type xdslDslamPortStatusEnum = xdsl.DslamPortStatusEnum;
type xdslIpStatusEnum = xdsl.IpStatusEnum;
type coreTypesIpVersionEnum = coreTypes.IpVersionEnum;
type xdslOperatorTypeEnum = xdsl.OperatorTypeEnum;
type xdslxdslModemConfigAddressingTypeEnum = xdsl.xdslModemConfig.AddressingTypeEnum;
type xdslLandlineConcentrationPoint = xdsl.LandlineConcentrationPoint;
type xdslDeconsolidationEnum = xdsl.DeconsolidationEnum;
type xdslFaultRepairTimeEnum = xdsl.FaultRepairTimeEnum;
type xdslLineSectionLength = xdsl.LineSectionLength;
type xdslLineTestEnum = xdsl.LineTestEnum;
type xdslModemCapabilities = xdsl.ModemCapabilities;
type xdslxdslModemConfigEasyFirewallLevelEnum = xdsl.xdslModemConfig.EasyFirewallLevelEnum;
type xdslxdslModemConfigMTUSizeEnum = xdsl.xdslModemConfig.MTUSizeEnum;
type xdslDeviceModemInfo = xdsl.DeviceModemInfo;
type xdslStatsModemInfo = xdsl.StatsModemInfo;
type xdslmonitoringNotificationsFrequencyEnum = xdsl.monitoringNotifications.FrequencyEnum;
type xdslmonitoringNotificationsTypeEnum = xdsl.monitoringNotifications.TypeEnum;
type xdslxdslModemConfigProtocolTypeEnum = xdsl.xdslModemConfig.ProtocolTypeEnum;
type xdslResiliationReasonEnum = xdsl.ResiliationReasonEnum;
type xdslTaskStatusEnum = xdsl.TaskStatusEnum;
type xdsltemplateModemDHCP = xdsl.templateModem.DHCP;
type xdsltemplateModemLAN = xdsl.templateModem.LAN;
type xdsltemplateModemWLAN = xdsl.templateModem.WLAN;
type xdsltemplateModemParametersToIgnore = xdsl.templateModem.ParametersToIgnore;
type xdsltemplateModemPortMapping = xdsl.templateModem.PortMapping;
type xdslxdslModemConfigChannelModeEnum = xdsl.xdslModemConfig.ChannelModeEnum;
type xdslxdslModemConfigFrequencyEnum = xdsl.xdslModemConfig.FrequencyEnum;
type xdslxdslModemConfigSecurityTypeEnum = xdsl.xdslModemConfig.SecurityTypeEnum;
type xdslantiSpamEvidencesInfoDetail = xdsl.antiSpam.EvidencesInfoDetail;
type xdslantiSpamEvidencesInfoStatusEnum = xdsl.antiSpam.EvidencesInfoStatusEnum;
type xdslxdslModemConfigConnectedDeviceAddressSourceEnum = xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum;
type xdsleligibilityCity = xdsl.eligibility.City;
type xdsleligibilityStreet = xdsl.eligibility.Street;
type xdsleligibilityBuildingTypeEnum = xdsl.eligibility.BuildingTypeEnum;
type xdsleligibilityAddress = xdsl.eligibility.Address;
type xdsleligibilityLineCharacteristics = xdsl.eligibility.LineCharacteristics;
type xdsleligibilityLineEndpointEnum = xdsl.eligibility.LineEndpointEnum;
type xdsleligibilityLineInfos = xdsl.eligibility.LineInfos;
type xdsleligibilityOffer = xdsl.eligibility.Offer;
type xdsleligibilityPortability = xdsl.eligibility.Portability;
type xdsleligibilityFiberOffer = xdsl.eligibility.FiberOffer;
type xdslGtrEnum = xdsl.GtrEnum;
type xdsleligibilityLandlineStatusEnum = xdsl.eligibility.LandlineStatusEnum;
type xdsleligibilityLineSectionCalibration = xdsl.eligibility.LineSectionCalibration;
type xdsleligibilityMeetingSlot = xdsl.eligibility.MeetingSlot;
type xdsleligibilityProviderEnum = xdsl.eligibility.ProviderEnum;
type xdsleligibilityCodeAndMessage = xdsl.eligibility.CodeAndMessage;
type xdslemailproTaskStatusEnum = xdsl.email.pro.TaskStatusEnum;
type xdsllineDiagnosticBandwidthTestUnitEnum = xdsl.lineDiagnostic.BandwidthTestUnitEnum;
type xdsllineDiagnosticProblemTypeEnum = xdsl.lineDiagnostic.ProblemTypeEnum;
type xdsllineDiagnosticCustomerActionsEnum = xdsl.lineDiagnostic.CustomerActionsEnum;
type xdsllineDiagnosticDiagnosticData = xdsl.lineDiagnostic.DiagnosticData;
type xdsllineDiagnosticFaultTypeEnum = xdsl.lineDiagnostic.FaultTypeEnum;
type xdsllineDiagnosticDiagnosticStatusEnum = xdsl.lineDiagnostic.DiagnosticStatusEnum;
type xdsllineDiagnosticCustomerActionToDo = xdsl.lineDiagnostic.CustomerActionToDo;
type xdsllineDiagnosticAnswers = xdsl.lineDiagnostic.Answers;
type xdsllineDiagnosticLineDetails = xdsl.lineDiagnostic.LineDetails;
type xdsllineDiagnosticRobotActionsEnum = xdsl.lineDiagnostic.RobotActionsEnum;
type xdsllineDiagnosticSeltResult = xdsl.lineDiagnostic.SeltResult;
type xdsllineDiagnosticQuestion = xdsl.lineDiagnostic.Question;
type xdsllineDiagnosticConnectionInformations = xdsl.lineDiagnostic.ConnectionInformations;
type xdsllineDiagnosticLineCapabilities = xdsl.lineDiagnostic.LineCapabilities;
type xdsllineDiagnosticProviderEnum = xdsl.lineDiagnostic.ProviderEnum;
type xdsllineDiagnosticSection = xdsl.lineDiagnostic.Section;
type xdsllineDiagnosticQuestionsEnum = xdsl.lineDiagnostic.QuestionsEnum;
type xdsllineDiagnosticPossibleValue = xdsl.lineDiagnostic.PossibleValue;
type xdsllineDiagnosticSeltPrelocEnum = xdsl.lineDiagnostic.SeltPrelocEnum;
type xdsllineDiagnosticSeltStateEnum = xdsl.lineDiagnostic.SeltStateEnum;
type xdsllineDiagnosticSeltStatusEnum = xdsl.lineDiagnostic.SeltStatusEnum;
type xdslorderFollowupDurationUnitEnum = xdsl.orderFollowup.DurationUnitEnum;
type xdslorderFollowupStepNameEnum = xdsl.orderFollowup.StepNameEnum;
type xdslorderFollowupStepStatusEnum = xdsl.orderFollowup.StepStatusEnum;
type xdsltemplateModemSecurityTypeEnum = xdsl.templateModem.SecurityTypeEnum;
type complexTypeUnitAndValuenumber = complexType.UnitAndValue<number>;
type emailproObjectStateEnum = email.pro.ObjectStateEnum;
