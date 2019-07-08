import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /xdsl Models
 */
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
    //complexType.UnitAndValues
    // fullName: complexType.UnitAndValues.UnitAndValues
    export interface UnitAndValues<T> {
        unit: string;
        values: T[];
    }
}
export namespace coreTypes {
    //coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
    //coreTypes.IpVersionEnum
    export type IpVersionEnum = "v4" | "v6"
}
export namespace email {
    export namespace pro {
        //email.pro.ObjectStateEnum
        export type ObjectStateEnum = "creating" | "deleting" | "ok" | "reopening" | "suspended" | "suspending" | "unknown"
    }
}
export namespace order {
    //order.Contract
    // fullName: order.Contract.Contract
    export interface Contract {
        content: string;
        name: string;
        url: string;
    }
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Order
    // fullName: order.Order.Order
    export interface Order {
        contracts: order.Contract[];
        details: order.OrderDetail[];
        orderId?: number;
        prices: order.OrderPrices;
        url?: string;
    }
    //order.OrderDetail
    // fullName: order.OrderDetail.OrderDetail
    export interface OrderDetail {
        description: string;
        detailType?: order.OrderDetailTypeEnum;
        domain: string;
        quantity: number;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    //order.OrderDetailTypeEnum
    export type OrderDetailTypeEnum = "ACCESSORY" | "CAUTION" | "CHOOSED" | "CONSUMPTION" | "CREATION" | "DELIVERY" | "DURATION" | "GIFT" | "INSTALLATION" | "LICENSE" | "MUTE" | "OTHER" | "OUTPLAN" | "QUANTITY" | "REFUND" | "RENEW" | "SPECIAL" | "SWITCH" | "TRANSFER" | "VOUCHER"
    //order.OrderPrices
    // fullName: order.OrderPrices.OrderPrices
    export interface OrderPrices {
        tax: orderPrice;
        withTax: orderPrice;
        withoutTax: orderPrice;
    }
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
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
        //spare.xdsl.XdslSpare
        // fullName: spare.xdsl.XdslSpare.XdslSpare
        export interface XdslSpare {
            brand: string;
            macAddress: string;
        }
    }
}
export namespace telephony {
    //telephony.Contact
    // fullName: telephony.Contact.Contact
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
    //telephony.Rma
    // fullName: telephony.Rma.Rma
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
    //telephony.RmaOfferTypeEnum
    export type RmaOfferTypeEnum = "deposit" | "loan" | "purchase"
    //telephony.RmaReplaceTypeEnum
    export type RmaReplaceTypeEnum = "changePhone" | "phoneRestitution" | "undefined"
    //telephony.RmaStatusEnum
    export type RmaStatusEnum = "closed" | "open" | "received"
    //telephony.RmaStep
    // fullName: telephony.RmaStep.RmaStep
    export interface RmaStep {
        description: string;
        doneDate?: string;
        infos?: string;
        name: telephony.RmaStepNameEnum;
        status: telephony.RmaStepStatusEnum;
    }
    //telephony.RmaStepNameEnum
    export type RmaStepNameEnum = "dispatchJustification" | "equipmentSending" | "equipmentTesting" | "opening" | "parcelReception" | "parcelValidation" | "validation"
    //telephony.RmaStepStatusEnum
    export type RmaStepStatusEnum = "done" | "todo"
    //telephony.RmaTypeEnum
    export type RmaTypeEnum = "after sale equipment service exchange" | "after sale phone service exchange" | "equipment restitution" | "fast exchange" | "old merchandise reception before exchange" | "phone restitution" | "resends due to shipping lost by the carrier" | "resends due to shipping not withdraw" | "specific return merchandise authorisation" | "termination" | "unknown"
}
export namespace xdsl {
    //xdsl.Access
    // fullName: xdsl.Access.Access
    export interface Access {
        accessName: string;
        accessType: xdslDslTypeEnum;
        address: xdsl.AddressDetail;
        capabilities: xdsl.AccessCapabilities;
        description: string;
        ipv6Enabled: boolean;
        lnsRateLimit?: number;
        monitoring: boolean;
        nra: string;
        pairsNumber: number;
        role: xdsl.AccessRoleEnum;
        status: xdsl.AccessStatusEnum;
    }
    //xdsl.AccessCapabilities
    // fullName: xdsl.AccessCapabilities.AccessCapabilities
    export interface AccessCapabilities {
        canApplyLnsRateLimit: boolean;
        canChangeDslamProfile: boolean;
        canChangeLns: boolean;
        canGetRadiusConnectionLogs: boolean;
        canResetDslamPort: boolean;
        hasDslamPort: boolean;
    }
    //xdsl.AccessDiagnostic
    // fullName: xdsl.AccessDiagnostic.AccessDiagnostic
    export interface AccessDiagnostic {
        capabilities: xdsl.AccessDiagnosticCapabilities;
        diagnosticTime: string;
        incident?: boolean;
        isActiveOnLns?: boolean;
        isModemConnected?: boolean;
        lineDetails?: xdsl.LineDiagnostic[];
        ping?: boolean;
        remaining: number;
    }
    //xdsl.AccessDiagnosticCapabilities
    // fullName: xdsl.AccessDiagnosticCapabilities.AccessDiagnosticCapabilities
    export interface AccessDiagnosticCapabilities {
        incident: boolean;
        isActiveOnLns: boolean;
        isModemConnected: boolean;
        lineTest: boolean;
        ping: boolean;
        proposedProfileId: boolean;
        sync: boolean;
    }
    //xdsl.AccessRoleEnum
    export type AccessRoleEnum = "backup" | "main"
    //xdsl.AccessStatisticsTypeEnum
    export type AccessStatisticsTypeEnum = "ping" | "traffic:download" | "traffic:upload"
    //xdsl.AccessStatusEnum
    export type AccessStatusEnum = "active" | "cancelled" | "close" | "deleting" | "doing" | "migration" | "slamming" | "upgradeOffer"
    //xdsl.AddressDetail
    // fullName: xdsl.AddressDetail.AddressDetail
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
    //xdsl.AntiSpam
    // fullName: xdsl.AntiSpam.AntiSpam
    export interface AntiSpam {
        date: string;
        ip: string;
        lastSpamDetected: string;
        status: xdsl.antiSpam.AntiSpamStatusEnum;
    }
    //xdsl.AsyncTask
    // fullName: xdsl.AsyncTask.AsyncTask
    export interface AsyncTask<T> {
        error?: string;
        result?: T;
        status: xdsl.AsyncTaskStatusEnum;
    }
    //xdsl.AsyncTaskArray
    // fullName: xdsl.AsyncTaskArray.AsyncTaskArray
    export interface AsyncTaskArray<T> {
        error?: string;
        result?: T[];
        status: xdsl.AsyncTaskStatusEnum;
    }
    //xdsl.AsyncTaskStatusEnum
    export type AsyncTaskStatusEnum = "error" | "ok" | "pending"
    //xdsl.DHCP
    // fullName: xdsl.DHCP.DHCP
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
    //xdsl.DHCPStaticAddress
    // fullName: xdsl.DHCPStaticAddress.DHCPStaticAddress
    export interface DHCPStaticAddress {
        IPAddress: string;
        MACAddress: string;
        name?: string;
        taskId?: number;
    }
    //xdsl.DeconsolidationEnum
    export type DeconsolidationEnum = "createNeighbour" | "creation" | "creationNeighbour" | "partial" | "total"
    //xdsl.DeconsolidationTerms
    // fullName: xdsl.DeconsolidationTerms.DeconsolidationTerms
    export interface DeconsolidationTerms {
        engagement: number;
        monthlyPrice: orderPrice;
        price: orderPrice;
    }
    //xdsl.DeviceModemInfo
    // fullName: xdsl.DeviceModemInfo.DeviceModemInfo
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
    //xdsl.DslTypeEnum
    export type DslTypeEnum = "adsl" | "ftth" | "sdsl" | "vdsl"
    //xdsl.DslamLineProfile
    // fullName: xdsl.DslamLineProfile.DslamLineProfile
    export interface DslamLineProfile {
        id: number;
        isCurrent: boolean;
        name: string;
    }
    //xdsl.DslamPort
    // fullName: xdsl.DslamPort.DslamPort
    export interface DslamPort {
        lastDesyncDate?: string;
        lastSyncDate?: string;
        profile?: xdsl.DslamLineProfile;
        status: xdsl.DslamPortStatusEnum;
    }
    //xdsl.DslamPortLog
    // fullName: xdsl.DslamPortLog.DslamPortLog
    export interface DslamPortLog {
        date: string;
        lastOccurrenceDate: string;
        message: string;
        numberOfOccurrences: number;
    }
    //xdsl.DslamPortStatusEnum
    export type DslamPortStatusEnum = "activated" | "deactivated" | "outofsync"
    //xdsl.ExtraIpRangeMove
    // fullName: xdsl.ExtraIpRangeMove.ExtraIpRangeMove
    export interface ExtraIpRangeMove {
        date: string;
        ipRange: string;
        moveTo: string;
    }
    //xdsl.FaultRepairTimeEnum
    export type FaultRepairTimeEnum = "4HNO" | "4HO" | "NORMAL"
    //xdsl.GtrEnum
    export type GtrEnum = "4hno" | "4ho" | "none"
    //xdsl.IP
    // fullName: xdsl.IP.IP
    export interface IP {
        dnsList: string[];
        ip: string;
        range: number;
        status: xdsl.IpStatusEnum;
        version: coreTypes.IpVersionEnum;
    }
    //xdsl.Incident
    // fullName: xdsl.Incident.Incident
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
    //xdsl.IpStatusEnum
    export type IpStatusEnum = "active" | "close" | "toDelete"
    //xdsl.LAN
    // fullName: xdsl.LAN.LAN
    export interface LAN {
        IPAddress: string;
        addressingType: xdsl.xdslModemConfig.AddressingTypeEnum;
        lanName: string;
        subnetMask: string;
        taskId?: number;
    }
    //xdsl.LandlineConcentrationPoint
    // fullName: xdsl.LandlineConcentrationPoint.LandlineConcentrationPoint
    export interface LandlineConcentrationPoint {
        lineHead: string;
        lineInitialSection: number;
        lineInitialSectionPair: number;
    }
    //xdsl.Line
    // fullName: xdsl.Line.Line
    export interface Line {
        concentrationPoint?: xdsl.LandlineConcentrationPoint;
        deconsolidation: xdslDeconsolidationEnum;
        directDistribution?: boolean;
        distance: number;
        faultRepairTime: xdsl.FaultRepairTimeEnum;
        lineSectionsLength: xdslLineSectionLength[];
        mitigation: number;
        number: string;
        originalNumber?: string;
        portability: boolean;
        syncDown?: number;
        syncUp?: number;
    }
    //xdsl.LineDiagnostic
    // fullName: xdsl.LineDiagnostic.LineDiagnostic
    export interface LineDiagnostic {
        lineTest?: xdsl.LineTestEnum;
        lineTestTime?: string;
        number: string;
        proposedProfileId?: number;
        sync: boolean;
    }
    //xdsl.LineSectionLength
    // fullName: xdsl.LineSectionLength.LineSectionLength
    export interface LineSectionLength {
        diameter: number;
        length: number;
    }
    //xdsl.LineStatisticsTypeEnum
    export type LineStatisticsTypeEnum = "attenuation:download" | "attenuation:upload" | "snr:download" | "snr:upload" | "synchronization:download" | "synchronization:upload"
    //xdsl.LineTestEnum
    export type LineTestEnum = "actionPending" | "customerSideProblem" | "error" | "noProblem" | "ovhSideProblem"
    //xdsl.Modem
    // fullName: xdsl.Modem.Modem
    export interface Modem {
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
    //xdsl.ModemCapabilities
    // fullName: xdsl.ModemCapabilities.ModemCapabilities
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
    //xdsl.ModemInfo
    // fullName: xdsl.ModemInfo.ModemInfo
    export interface ModemInfo {
        device: xdsl.DeviceModemInfo;
        statistics: xdsl.StatsModemInfo;
    }
    //xdsl.MonitoringNotification
    // fullName: xdsl.MonitoringNotification.MonitoringNotification
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
    //xdsl.OperatorTypeEnum
    export type OperatorTypeEnum = "collect" | "kosc" | "ovh"
    //xdsl.PendingAction
    // fullName: xdsl.PendingAction.PendingAction
    export interface PendingAction {
        action: string;
        dateTodo: string;
    }
    //xdsl.PortMapping
    // fullName: xdsl.PortMapping.PortMapping
    export interface PortMapping {
        allowedRemoteIp?: string;
        description?: string;
        externalPortEnd?: number;
        externalPortStart: number;
        id: number;
        internalClient: string;
        internalPort: number;
        name: string;
        protocol: xdsl.xdslModemConfig.ProtocolTypeEnum;
        taskId?: number;
    }
    //xdsl.RadiusConnectionLog
    // fullName: xdsl.RadiusConnectionLog.RadiusConnectionLog
    export interface RadiusConnectionLog {
        date: string;
        login: string;
        message: string;
        state: string;
    }
    //xdsl.ResiliationFollowUpDetail
    // fullName: xdsl.ResiliationFollowUpDetail.ResiliationFollowUpDetail
    export interface ResiliationFollowUpDetail {
        dateTodo: string;
        needModemReturn: boolean;
        registrationDate: string;
        status: string;
    }
    //xdsl.ResiliationReasonEnum
    export type ResiliationReasonEnum = "addressMove" | "billingProblems" | "cessationOfActivity" | "changeOfTerms" | "ftth" | "goToCompetitor" | "other" | "technicalProblems"
    //xdsl.ResiliationSurvey
    // fullName: xdsl.ResiliationSurvey.ResiliationSurvey
    export interface ResiliationSurvey {
        comment?: string;
        type: xdsl.ResiliationReasonEnum;
    }
    //xdsl.ResiliationTerms
    // fullName: xdsl.ResiliationTerms.ResiliationTerms
    export interface ResiliationTerms {
        due: orderPrice;
        engageDate?: string;
        minResiliationDate: string;
        resiliationDate: string;
        resiliationReasons: xdsl.ResiliationReasonEnum[];
    }
    //xdsl.ServiceStatusEnum
    export type ServiceStatusEnum = "disabled" | "enabled"
    //xdsl.StatisticsPeriodEnum
    export type StatisticsPeriodEnum = "daily" | "monthly" | "preview" | "weekly" | "yearly"
    //xdsl.StatsModemInfo
    // fullName: xdsl.StatsModemInfo.StatsModemInfo
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
    //xdsl.Task
    // fullName: xdsl.Task.Task
    export interface Task {
        function: string;
        id: number;
        status: xdsl.TaskStatusEnum;
        todoDate: string;
        updateDate: string;
    }
    //xdsl.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "problem" | "todo"
    //xdsl.TemplateModem
    // fullName: xdsl.TemplateModem.TemplateModem
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
    //xdsl.TimestampAndValue
    // fullName: xdsl.TimestampAndValue.TimestampAndValue
    export interface TimestampAndValue {
        timestamp: number;
        value?: number;
    }
    //xdsl.WLAN
    // fullName: xdsl.WLAN.WLAN
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
    //xdsl.WLANFrequencyEnum
    export type WLANFrequencyEnum = "2.4GHz" | "5GHz"
    export namespace antiSpam {
        //xdsl.antiSpam.AntiSpamStatusEnum
        export type AntiSpamStatusEnum = "block" | "done" | "new" | "unblock" | "warn"
        //xdsl.antiSpam.EvidencesInfo
        // fullName: xdsl.antiSpam.EvidencesInfo.EvidencesInfo
        export interface EvidencesInfo {
            error?: string;
            result?: xdsl.antiSpam.EvidencesInfoDetail[];
            status: xdsl.antiSpam.EvidencesInfoStatusEnum;
        }
        //xdsl.antiSpam.EvidencesInfoDetail
        // fullName: xdsl.antiSpam.EvidencesInfoDetail.EvidencesInfoDetail
        export interface EvidencesInfoDetail {
            date: string;
            filename: string;
            url: string;
        }
        //xdsl.antiSpam.EvidencesInfoStatusEnum
        export type EvidencesInfoStatusEnum = "error" | "ok" | "pending"
    }
    //xdsl.connectedDevice
    // fullName: xdsl.connectedDevice.connectedDevice
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
        //xdsl.eligibility.Address
        // fullName: xdsl.eligibility.Address.Address
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
        //xdsl.eligibility.Building
        // fullName: xdsl.eligibility.Building.Building
        export interface Building {
            name: string;
            nro: string;
            reference: string;
            type: xdsl.eligibility.BuildingTypeEnum;
        }
        //xdsl.eligibility.BuildingTypeEnum
        export type BuildingTypeEnum = "BUILDING" | "HOUSE"
        //xdsl.eligibility.City
        // fullName: xdsl.eligibility.City.City
        export interface City {
            inseeCode: string;
            locality?: string;
            name: string;
            zipCode: string;
        }
        //xdsl.eligibility.CodeAndMessage
        // fullName: xdsl.eligibility.CodeAndMessage.CodeAndMessage
        export interface CodeAndMessage {
            code: string;
            message: string;
        }
        //xdsl.eligibility.Eligibility
        // fullName: xdsl.eligibility.Eligibility.Eligibility
        export interface Eligibility {
            address?: xdsleligibilityAddress;
            characteristics: xdsl.eligibility.LineCharacteristics;
            endpoint: xdsl.eligibility.LineEndpointEnum;
            id: string;
            infos: xdsl.eligibility.LineInfos;
            offers: xdsl.eligibility.Offer[];
            portability: xdsleligibilityPortability;
        }
        //xdsl.eligibility.FiberEligibility
        // fullName: xdsl.eligibility.FiberEligibility.FiberEligibility
        export interface FiberEligibility {
            id: string;
            offers: xdsl.eligibility.FiberOffer[];
        }
        //xdsl.eligibility.FiberOffer
        // fullName: xdsl.eligibility.FiberOffer.FiberOffer
        export interface FiberOffer {
            availibilityDate?: string;
            downloadRate?: number;
            eligible: boolean;
            gtr: xdsl.GtrEnum[];
            guaranteed: boolean;
            label: string;
            reason?: string;
            type: xdslDslTypeEnum;
            uploadRate?: number;
        }
        //xdsl.eligibility.FiberStreet
        // fullName: xdsl.eligibility.FiberStreet.FiberStreet
        export interface FiberStreet {
            streetCode: string;
            streetName: string;
        }
        //xdsl.eligibility.LandlineStatusEnum
        export type LandlineStatusEnum = "active" | "inactive"
        //xdsl.eligibility.Line
        // fullName: xdsl.eligibility.Line.Line
        export interface Line {
            address: xdsleligibilityAddress;
            contactName: string;
            lineNumber: string;
            lineStatus: xdsleligibilityLandlineStatusEnum;
        }
        //xdsl.eligibility.LineCharacteristics
        // fullName: xdsl.eligibility.LineCharacteristics.LineCharacteristics
        export interface LineCharacteristics {
            calibration: xdsl.eligibility.LineSectionCalibration[];
            desaturationFreePairs: number;
            distance: number;
            freePairs: number;
            mitigation: number;
            mitigationSdsl: number;
            nra: string;
        }
        //xdsl.eligibility.LineEndpointEnum
        export type LineEndpointEnum = "address" | "line"
        //xdsl.eligibility.LineInfos
        // fullName: xdsl.eligibility.LineInfos.LineInfos
        export interface LineInfos {
            createNeighbour: boolean;
            lineNumber?: string;
            lineStatus?: xdsleligibilityLandlineStatusEnum;
            unlistedNumber: boolean;
        }
        //xdsl.eligibility.LineSectionCalibration
        // fullName: xdsl.eligibility.LineSectionCalibration.LineSectionCalibration
        export interface LineSectionCalibration {
            diameter: number;
            length: number;
        }
        //xdsl.eligibility.MeetingSlot
        // fullName: xdsl.eligibility.MeetingSlot.MeetingSlot
        export interface MeetingSlot {
            endDate: string;
            startDate: string;
            uiCode: string;
        }
        //xdsl.eligibility.MeetingSlots
        // fullName: xdsl.eligibility.MeetingSlots.MeetingSlots
        export interface MeetingSlots {
            canBookFakeMeeting: boolean;
            meetingSlots: xdsl.eligibility.MeetingSlot[];
        }
        //xdsl.eligibility.Offer
        // fullName: xdsl.eligibility.Offer.Offer
        export interface Offer {
            desaturation?: boolean;
            downloadRate?: number;
            gtr: xdsl.GtrEnum[];
            guaranteed: boolean;
            label: string;
            pairs?: number;
            provider?: xdsleligibilityProviderEnum;
            rate?: number;
            type: xdslDslTypeEnum;
            unbundling?: xdslDeconsolidationEnum[];
            uploadRate?: number;
        }
        //xdsl.eligibility.Portability
        // fullName: xdsl.eligibility.Portability.Portability
        export interface Portability {
            comments: xdsl.eligibility.CodeAndMessage[];
            eligible: boolean;
            underCondition: boolean;
            warnings: xdsl.eligibility.CodeAndMessage[];
        }
        //xdsl.eligibility.ProviderEnum
        export type ProviderEnum = "axione" | "ft" | "kosc" | "ovh" | "sfr"
        //xdsl.eligibility.Street
        // fullName: xdsl.eligibility.Street.Street
        export interface Street {
            name: string;
            rivoliCode: string;
        }
    }
    export namespace email {
        export namespace pro {
            //xdsl.email.pro.Task
            // fullName: xdsl.email.pro.Task.Task
            export interface Task {
                finishDate?: string;
                function: string;
                status: xdsl.email.pro.TaskStatusEnum;
                todoDate: string;
            }
            //xdsl.email.pro.TaskStatusEnum
            export type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo"
        }
    }
    export namespace lineDiagnostic {
        //xdsl.lineDiagnostic.Answers
        // fullName: xdsl.lineDiagnostic.Answers.Answers
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
        //xdsl.lineDiagnostic.BandwidthTestUnitEnum
        export type BandwidthTestUnitEnum = "Kbps" | "Mbps"
        //xdsl.lineDiagnostic.ConnectionInformations
        // fullName: xdsl.lineDiagnostic.ConnectionInformations.ConnectionInformations
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
        //xdsl.lineDiagnostic.CustomerActionToDo
        // fullName: xdsl.lineDiagnostic.CustomerActionToDo.CustomerActionToDo
        export interface CustomerActionToDo {
            description: string;
            name: xdsl.lineDiagnostic.CustomerActionsEnum;
        }
        //xdsl.lineDiagnostic.CustomerActionsEnum
        export type CustomerActionsEnum = "bePreparedToCheckModemSynchronization" | "changeDslFilterAndPlugInDti" | "changeExtensionCable" | "changeProfile" | "checkConnectionCable" | "checkConnectionLoginAndParameters" | "checkFilter" | "connectModemToOtherPlugs" | "neutralTest" | "rebootModem" | "resetModem" | "unplugEveryModems" | "unplugModem"
        //xdsl.lineDiagnostic.Diagnostic
        // fullName: xdsl.lineDiagnostic.Diagnostic.Diagnostic
        export interface Diagnostic {
            data: xdsl.lineDiagnostic.DiagnosticData;
            faultType: xdsl.lineDiagnostic.FaultTypeEnum;
            id: number;
            status: xdsl.lineDiagnostic.DiagnosticStatusEnum;
        }
        //xdsl.lineDiagnostic.DiagnosticData
        // fullName: xdsl.lineDiagnostic.DiagnosticData.DiagnosticData
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
        //xdsl.lineDiagnostic.DiagnosticStatusEnum
        export type DiagnosticStatusEnum = "cancelled" | "connectionProblem" | "genericIncidentPending" | "haveToConnectModemOnTheRightPlug" | "init" | "interventionRequested" | "noBandwidthFault" | "noProblemAnymore" | "noSyncFaultDiagnosticRequired" | "problem" | "resolvedAfterTests" | "sleeping" | "validationRefused" | "waitingHuman" | "waitingRobot" | "waitingValidation"
        //xdsl.lineDiagnostic.FaultTypeEnum
        export type FaultTypeEnum = "alignment" | "noSync" | "syncLossOrLowBandwidth" | "unknown"
        //xdsl.lineDiagnostic.LineCapabilities
        // fullName: xdsl.lineDiagnostic.LineCapabilities.LineCapabilities
        export interface LineCapabilities {
            down?: number;
            mitigation?: string;
            ping?: number;
            up?: number;
        }
        //xdsl.lineDiagnostic.LineDetails
        // fullName: xdsl.lineDiagnostic.LineDetails.LineDetails
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
            lineType: xdslDslTypeEnum;
            nra?: string;
            number: string;
            operator: xdsl.lineDiagnostic.ProviderEnum;
            sections?: xdsl.lineDiagnostic.Section[];
        }
        //xdsl.lineDiagnostic.PossibleValue
        // fullName: xdsl.lineDiagnostic.PossibleValue.PossibleValue
        export interface PossibleValue {
            id?: number;
            label?: string;
            value?: string;
        }
        //xdsl.lineDiagnostic.ProblemTypeEnum
        export type ProblemTypeEnum = "lowBandwidth" | "syncLoss"
        //xdsl.lineDiagnostic.ProviderEnum
        export type ProviderEnum = "axione" | "ft" | "ftBySfr" | "kosc" | "koscDeg" | "ovh" | "sfr"
        //xdsl.lineDiagnostic.Question
        // fullName: xdsl.lineDiagnostic.Question.Question
        export interface Question {
            defaultValue?: string;
            description: string;
            enumValues?: string[];
            name: xdsl.lineDiagnostic.QuestionsEnum;
            possibleValues?: xdsl.lineDiagnostic.PossibleValue[];
            required?: boolean;
            type: string;
        }
        //xdsl.lineDiagnostic.QuestionsEnum
        export type QuestionsEnum = "bandwidthTestUnit" | "comment" | "conditionsAccepted" | "contactPhone" | "datetimeOfAppearance" | "downloadBandwidthTest" | "endAfternoonHours" | "endMorningHours" | "followBySms" | "hasModemKeptSynchronization" | "idAppointment" | "individualSite" | "modemIsSynchronized" | "modemMac" | "modemStillSynchronized" | "modemType" | "ovhTicket" | "problemType" | "resolvedAfterTests" | "secureSite" | "severalInternetConnections" | "siteClosedDays" | "siteDigicode" | "siteOpening" | "startAfternoonHours" | "startMorningHours" | "uploadBandwidthTest"
        //xdsl.lineDiagnostic.RobotActionsEnum
        export type RobotActionsEnum = "alignmentLockTest" | "alignmentResetTest" | "alignmentTestResult" | "checkCustomerTicket" | "checkIfAccessPing" | "checkIfResolvedAfterConnectionTests" | "checkIfResolvedAfterInstallationCheck" | "checkIfResolvedAfterTests" | "checkIfSeveralConnections" | "checkInstallation" | "checkProblem" | "checkSynchronizationWithoutOtherModems" | "customerPrelocChecks" | "findProblem" | "installationCheck" | "lockUnlock" | "needToRequestMonitoring" | "needToRequestOperatorIntervention" | "needToRequestOvhIntervention" | "requestMonitoring" | "requestOperatorIntervention" | "requestOvhIntervention" | "seltTest"
        //xdsl.lineDiagnostic.Section
        // fullName: xdsl.lineDiagnostic.Section.Section
        export interface Section {
            length: number;
            section: number;
        }
        //xdsl.lineDiagnostic.SeltPrelocEnum
        export type SeltPrelocEnum = "CUST" | "DSLAM" | "LINE" | "RE"
        //xdsl.lineDiagnostic.SeltResult
        // fullName: xdsl.lineDiagnostic.SeltResult.SeltResult
        export interface SeltResult {
            date?: string;
            distance?: number;
            preloc?: xdsl.lineDiagnostic.SeltPrelocEnum;
            state?: xdsl.lineDiagnostic.SeltStateEnum;
            status?: xdsl.lineDiagnostic.SeltStatusEnum;
        }
        //xdsl.lineDiagnostic.SeltStateEnum
        export type SeltStateEnum = "open" | "short" | "synced" | "unknown"
        //xdsl.lineDiagnostic.SeltStatusEnum
        export type SeltStatusEnum = "failed" | "notAvailable" | "ok"
    }
    export namespace monitoringNotifications {
        //xdsl.monitoringNotifications.FrequencyEnum
        export type FrequencyEnum = "1h" | "5m" | "6h" | "once"
        //xdsl.monitoringNotifications.TypeEnum
        export type TypeEnum = "mail" | "sms"
    }
    export namespace orderFollowup {
        //xdsl.orderFollowup.DurationUnitEnum
        export type DurationUnitEnum = "day" | "hour" | "minute"
        //xdsl.orderFollowup.Step
        // fullName: xdsl.orderFollowup.Step.Step
        export interface Step {
            comments: string[];
            doneDate?: string;
            durationUnit: xdsl.orderFollowup.DurationUnitEnum;
            expectedDuration: number;
            name: xdsl.orderFollowup.StepNameEnum;
            status: xdsl.orderFollowup.StepStatusEnum;
        }
        //xdsl.orderFollowup.StepNameEnum
        export type StepNameEnum = "accessIsOperational" | "checkInfrastructure" | "configureAccessOnOVH" | "orderPayed" | "orderReceived" | "orderTreatment" | "sendModem" | "sendOrderToProvider" | "setupCustomerPremisesEquipment" | "waitingForProviderInstallReport" | "waitingForWithdrawalPeriodToBeOver"
        //xdsl.orderFollowup.StepStatusEnum
        export type StepStatusEnum = "doing" | "done" | "error" | "todo" | "waitingCustomer"
    }
    export namespace templateModem {
        //xdsl.templateModem.DHCP
        // fullName: xdsl.templateModem.DHCP.DHCP
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
        //xdsl.templateModem.LAN
        // fullName: xdsl.templateModem.LAN.LAN
        export interface LAN {
            IPAddress: string;
            addressingType: xdsl.xdslModemConfig.AddressingTypeEnum;
            lanName: string;
            subnetMask: string;
        }
        //xdsl.templateModem.ParametersToIgnore
        // fullName: xdsl.templateModem.ParametersToIgnore.ParametersToIgnore
        export interface ParametersToIgnore {
            LANandDHCP?: boolean;
            WLANList?: string[];
            dmzIP?: boolean;
            mtuSize?: boolean;
            portMappingList?: string[];
        }
        //xdsl.templateModem.PortMapping
        // fullName: xdsl.templateModem.PortMapping.PortMapping
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
        //xdsl.templateModem.SecurityTypeEnum
        export type SecurityTypeEnum = "None" | "WPA" | "WPA2" | "WPAandWPA2"
        //xdsl.templateModem.WLAN
        // fullName: xdsl.templateModem.WLAN.WLAN
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
    //xdsl.xdslEmailPro
    // fullName: xdsl.xdslEmailPro.xdslEmailPro
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
        //xdsl.xdslModemConfig.AddressingTypeEnum
        export type AddressingTypeEnum = "DHCP" | "Static"
        //xdsl.xdslModemConfig.ChannelModeEnum
        export type ChannelModeEnum = "Auto" | "Manual"
        //xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum
        export type ConnectedDeviceAddressSourceEnum = "DHCP" | "Static" | "Unknown"
        //xdsl.xdslModemConfig.EasyFirewallLevelEnum
        export type EasyFirewallLevelEnum = "BlockAll" | "Disabled" | "Normal"
        //xdsl.xdslModemConfig.FrequencyEnum
        export type FrequencyEnum = "2.4GHz" | "5GHz"
        //xdsl.xdslModemConfig.MTUSizeEnum
        export type MTUSizeEnum = 1432 | 1456 | 1492
        //xdsl.xdslModemConfig.ProtocolTypeEnum
        export type ProtocolTypeEnum = "TCP" | "UDP"
        //xdsl.xdslModemConfig.SecurityTypeEnum
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
            $get(param?: {zipCode: string}): Promise<xdsl.eligibility.City[]>;
        }
        lines: {
            active: {
                // POST /xdsl/eligibility/lines/active
                $post(body?: {city: xdsl.eligibility.City, contactName: string, street: xdsl.eligibility.Street, streetNumber?: string}): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
            }
            inactive: {
                // POST /xdsl/eligibility/lines/inactive
                $post(body?: {city: xdsl.eligibility.City, contactName?: string, street: xdsl.eligibility.Street, streetNumber?: string}): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
            }
        }
        meetings: {
            // GET /xdsl/eligibility/meetings
            $get(param?: {eligibilityId: string, offerLabel: string}): Promise<xdsl.AsyncTask<xdsl.eligibility.MeetingSlots>>;
        }
        search: {
            buildings: {
                // POST /xdsl/eligibility/search/buildings
                $post(body?: {streetCode: string, streetNumber: string}): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Building>>;
            }
            cities: {
                // POST /xdsl/eligibility/search/cities
                $post(body?: {zipCode: string}): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.City>>;
            }
            fiberStreets: {
                // POST /xdsl/eligibility/search/fiberStreets
                $post(body?: {inseeCode: string}): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.FiberStreet>>;
            }
            streetNumbers: {
                // POST /xdsl/eligibility/search/streetNumbers
                $post(body?: {streetCode: string}): Promise<xdsl.AsyncTaskArray<string>>;
            }
        }
        streets: {
            // GET /xdsl/eligibility/streets
            $get(param?: {inseeCode: string, partialName: string}): Promise<xdsl.eligibility.Street[]>;
        }
        test: {
            // GET /xdsl/eligibility/test
            $get(param?: {id: string}): Promise<xdsl.eligibility.Eligibility>;
            address: {
                // POST /xdsl/eligibility/test/address
                $post(body?: {address: xdsl.eligibility.Address}): Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
            }
            fiber: {
                building: {
                    // POST /xdsl/eligibility/test/fiber/building
                    $post(body?: {building: string}): Promise<xdsl.AsyncTask<xdsl.eligibility.FiberEligibility>>;
                }
            }
            line: {
                // POST /xdsl/eligibility/test/line
                $post(body?: {lineNumber: string, lineStatus: xdsl.eligibility.LandlineStatusEnum}): Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
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
                $put(body?: {body: xdsl.xdslEmailPro}): Promise<void>;
                changePassword: {
                    // POST /xdsl/email/pro/{email}/changePassword
                    $post(body?: {password: string}): Promise<xdsl.email.pro.Task>;
                }
            };
        }
    }
    incidents: {
        // GET /xdsl/incidents
        $get(param?: {creationDate?: string, endDate?: string}): Promise<number[]>;
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
                $post(body?: {domain: string}): Promise<void>;
            }
            returnMerchandise: {
                // POST /xdsl/spare/{spare}/returnMerchandise
                $post(): Promise<void>;
            }
            serviceInfos: {
                // GET /xdsl/spare/{spare}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /xdsl/spare/{spare}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
        };
    }
    templateModem: {
        // GET /xdsl/templateModem
        $get(): Promise<string[]>;
        // POST /xdsl/templateModem
        $post(body?: {name: string, serviceName: string}): Promise<xdsl.TemplateModem>;
        $(name: string): {
            // DELETE /xdsl/templateModem/{name}
            $delete(): Promise<void>;
            // GET /xdsl/templateModem/{name}
            $get(): Promise<xdsl.TemplateModem>;
            // PUT /xdsl/templateModem/{name}
            $put(body?: {body: xdsl.TemplateModem}): Promise<void>;
        };
    }
    $(serviceName: string): {
        // GET /xdsl/{serviceName}
        $get(): Promise<xdsl.Access>;
        // PUT /xdsl/{serviceName}
        $put(body?: {body: xdsl.Access}): Promise<void>;
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
            $post(body?: {templateName: string}): Promise<xdsl.Task>;
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
            $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
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
            $post(body?: {enabled: boolean}): Promise<xdsl.Task>;
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
                        $post(body?: {actionsDone?: xdsl.lineDiagnostic.CustomerActionsEnum[], answers?: xdsl.lineDiagnostic.Answers, faultType: xdsl.lineDiagnostic.FaultTypeEnum}): Promise<xdsl.lineDiagnostic.Diagnostic>;
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
                        $post(body?: {dslamProfileId: number}): Promise<xdsl.Task>;
                    }
                    logs: {
                        // GET /xdsl/{serviceName}/lines/{number}/dslamPort/logs
                        $get(param?: {limit: number}): Promise<xdsl.DslamPortLog[]>;
                    }
                    reset: {
                        // POST /xdsl/{serviceName}/lines/{number}/dslamPort/reset
                        $post(): Promise<xdsl.Task>;
                    }
                }
                statistics: {
                    // GET /xdsl/{serviceName}/lines/{number}/statistics
                    $get(param?: {period: xdsl.StatisticsPeriodEnum, type: xdsl.LineStatisticsTypeEnum}): Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
                }
            };
        }
        modem: {
            // GET /xdsl/{serviceName}/modem
            $get(): Promise<xdsl.Modem>;
            // PUT /xdsl/{serviceName}/modem
            $put(body?: {body: xdsl.Modem}): Promise<void>;
            availableWLANChannel: {
                // GET /xdsl/{serviceName}/modem/availableWLANChannel
                $get(param?: {frequency: xdsl.WLANFrequencyEnum}): Promise<number[]>;
            }
            blocIp: {
                // GET /xdsl/{serviceName}/modem/blocIp
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/blocIp
                $post(body?: {status: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            callWaiting: {
                // GET /xdsl/{serviceName}/modem/callWaiting
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/callWaiting
                $post(body?: {callWaiting: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            comfortExchange: {
                // POST /xdsl/{serviceName}/modem/comfortExchange
                $post(body?: {contactShipping?: string}): Promise<order.Order>;
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
                $post(body?: {contentSharing: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            duplicatePortMappingConfig: {
                // POST /xdsl/{serviceName}/modem/duplicatePortMappingConfig
                $post(body?: {accessName: string}): Promise<void>;
            }
            firmware: {
                // GET /xdsl/{serviceName}/modem/firmware
                $get(): Promise<string>;
                // POST /xdsl/{serviceName}/modem/firmware
                $post(body?: {firmware: string, todoDate?: string}): Promise<xdsl.Task>;
            }
            firmwareAvailable: {
                // GET /xdsl/{serviceName}/modem/firmwareAvailable
                $get(): Promise<string[]>;
            }
            ftp: {
                // GET /xdsl/{serviceName}/modem/ftp
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/ftp
                $post(body?: {ftp: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            ipsecAlg: {
                // GET /xdsl/{serviceName}/modem/ipsecAlg
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/ipsecAlg
                $post(body?: {ipsecAlg: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            lan: {
                // GET /xdsl/{serviceName}/modem/lan
                $get(): Promise<string[]>;
                $(lanName: string): {
                    // GET /xdsl/{serviceName}/modem/lan/{lanName}
                    $get(): Promise<xdsl.LAN>;
                    // PUT /xdsl/{serviceName}/modem/lan/{lanName}
                    $put(body?: {body: xdsl.LAN}): Promise<void>;
                    dhcp: {
                        // GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp
                        $get(): Promise<string[]>;
                        $(dhcpName: string): {
                            // GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}
                            $get(): Promise<xdsl.DHCP>;
                            // PUT /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}
                            $put(body?: {body: xdsl.DHCP}): Promise<void>;
                            DHCPStaticAddresses: {
                                // GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses
                                $get(): Promise<string[]>;
                                // POST /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses
                                $post(body?: {IPAddress: string, MACAddress: string, name?: string}): Promise<xdsl.DHCPStaticAddress>;
                                $(MACAddress: string): {
                                    // DELETE /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}
                                    $delete(): Promise<xdsl.Task>;
                                    // GET /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}
                                    $get(): Promise<xdsl.DHCPStaticAddress>;
                                    // PUT /xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}
                                    $put(body?: {body: xdsl.DHCPStaticAddress}): Promise<void>;
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
                $post(body?: {allowedRemoteIp?: string, description?: string, externalPortEnd?: number, externalPortStart: number, internalClient: string, internalPort: number, name: string, protocol: xdsl.xdslModemConfig.ProtocolTypeEnum}): Promise<xdsl.PortMapping>;
                $(name: string): {
                    // DELETE /xdsl/{serviceName}/modem/portMappings/{name}
                    $delete(): Promise<xdsl.Task>;
                    // GET /xdsl/{serviceName}/modem/portMappings/{name}
                    $get(): Promise<xdsl.PortMapping>;
                    // PUT /xdsl/{serviceName}/modem/portMappings/{name}
                    $put(body?: {body: xdsl.PortMapping}): Promise<void>;
                };
            }
            reboot: {
                // POST /xdsl/{serviceName}/modem/reboot
                $post(body?: {todoDate?: string}): Promise<xdsl.Task>;
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
                $post(body?: {resetOvhConfig?: boolean}): Promise<xdsl.Task>;
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
                $post(body?: {sipAlg: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            upnp: {
                // GET /xdsl/{serviceName}/modem/upnp
                $get(): Promise<xdsl.ServiceStatusEnum>;
                // POST /xdsl/{serviceName}/modem/upnp
                $post(body?: {upnp: xdsl.ServiceStatusEnum}): Promise<xdsl.Task>;
            }
            wifi: {
                // GET /xdsl/{serviceName}/modem/wifi
                $get(): Promise<string[]>;
                $(wifiName: string): {
                    // GET /xdsl/{serviceName}/modem/wifi/{wifiName}
                    $get(): Promise<xdsl.WLAN>;
                    // PUT /xdsl/{serviceName}/modem/wifi/{wifiName}
                    $put(body?: {body: xdsl.WLAN}): Promise<void>;
                };
            }
        }
        monitoringNotifications: {
            // GET /xdsl/{serviceName}/monitoringNotifications
            $get(): Promise<number[]>;
            // POST /xdsl/{serviceName}/monitoringNotifications
            $post(body?: {allowIncident?: boolean, downThreshold?: number, email?: string, frequency: xdsl.monitoringNotifications.FrequencyEnum, phone?: string, smsAccount?: string, type: xdsl.monitoringNotifications.TypeEnum}): Promise<xdsl.MonitoringNotification>;
            $(id: number): {
                // DELETE /xdsl/{serviceName}/monitoringNotifications/{id}
                $delete(): Promise<void>;
                // GET /xdsl/{serviceName}/monitoringNotifications/{id}
                $get(): Promise<xdsl.MonitoringNotification>;
                // PUT /xdsl/{serviceName}/monitoringNotifications/{id}
                $put(body?: {body: xdsl.MonitoringNotification}): Promise<void>;
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
            $post(body?: {noPortability?: boolean, rio?: string}): Promise<xdsl.Task>;
        }
        resiliate: {
            // POST /xdsl/{serviceName}/resiliate
            $post(body?: {resiliationDate?: string, resiliationSurvey: xdsl.ResiliationSurvey}): Promise<xdsl.ResiliationFollowUpDetail>;
        }
        resiliationFollowup: {
            // GET /xdsl/{serviceName}/resiliationFollowup
            $get(): Promise<xdsl.ResiliationFollowUpDetail>;
        }
        resiliationTerms: {
            // GET /xdsl/{serviceName}/resiliationTerms
            $get(param?: {resiliationDate?: string}): Promise<xdsl.ResiliationTerms>;
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
                $put(body?: {body: telephony.Rma}): Promise<void>;
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
            $put(body?: {body: services.Service}): Promise<void>;
        }
        statistics: {
            // GET /xdsl/{serviceName}/statistics
            $get(param?: {period: xdsl.StatisticsPeriodEnum, type: xdsl.AccessStatisticsTypeEnum}): Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
        }
        tasks: {
            // GET /xdsl/{serviceName}/tasks
            $get(param?: {function_?: string, status?: xdsl.TaskStatusEnum}): Promise<number[]>;
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
            $post(body?: {relaunchWithoutPortability: boolean, rio?: string}): Promise<void>;
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
  get(path: '/xdsl/{serviceName}/tasks'): (params: {serviceName: string, function_?: string, status?: xdsl.TaskStatusEnum}) => Promise<number[]>;
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
  put(path: '/xdsl/{serviceName}'): (params: {serviceName: string, accessName?: string, accessType?: xdslDslTypeEnum, address?: xdsl.AddressDetail, capabilities?: xdsl.AccessCapabilities, description?: string, ipv6Enabled?: boolean, lnsRateLimit?: number, monitoring?: boolean, nra?: string, pairsNumber?: number, role?: xdsl.AccessRoleEnum, status?: xdsl.AccessStatusEnum}) => Promise<void>;
  /**
   * Modem
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/modem'): (params: {serviceName: string, brandName?: string, capabilities?: xdsl.ModemCapabilities, dmzIP?: string, easyFirewallLevel?: xdsl.xdslModemConfig.EasyFirewallLevelEnum, ipv6Support?: boolean, isBridged?: boolean, lastCwmpRequestDate?: string, macAddress?: string, managedByOvh?: boolean, model?: string, mtuSize?: xdsl.xdslModemConfig.MTUSizeEnum}) => Promise<void>;
  /**
   * LAN Configuration of the Modem
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/modem/lan/{lanName}'): (params: {lanName: string, serviceName: string, IPAddress?: string, addressingType?: xdsl.xdslModemConfig.AddressingTypeEnum, subnetMask?: string, taskId?: number}) => Promise<void>;
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
  put(path: '/xdsl/{serviceName}/modem/portMappings/{name}'): (params: {name: string, serviceName: string, allowedRemoteIp?: string, description?: string, externalPortEnd?: number, externalPortStart?: number, id?: number, internalClient?: string, internalPort?: number, protocol?: xdsl.xdslModemConfig.ProtocolTypeEnum, taskId?: number}) => Promise<void>;
  /**
   * WLAN Configuration of the Modem
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/modem/wifi/{wifiName}'): (params: {serviceName: string, wifiName: string, SSID?: string, SSIDAdvertisementEnabled?: boolean, bandSteering?: boolean, channel?: number, channelMode?: xdsl.xdslModemConfig.ChannelModeEnum, enabled?: boolean, frequency?: xdsl.xdslModemConfig.FrequencyEnum, guest?: boolean, securityKey?: string, securityType?: xdsl.xdslModemConfig.SecurityTypeEnum, taskId?: number}) => Promise<void>;
  /**
   * Defines where and how the notifications will be sent
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/monitoringNotifications/{id}'): (params: {id: number, serviceName: string, allowIncident?: boolean, downThreshold?: number, email?: string, enabled?: boolean, frequency?: xdsl.monitoringNotifications.FrequencyEnum, phone?: string, smsAccount?: string, type?: xdsl.monitoringNotifications.TypeEnum}) => Promise<void>;
  /**
   * Current Return Merchandise Authorisation
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/rma/{id}'): (params: {id: string, serviceName: string, cancellable?: boolean, creationDatetime?: string, equipmentReference?: string, newMerchandise?: string, offerTypeNew?: telephony.RmaOfferTypeEnum, offerTypeOld?: telephony.RmaOfferTypeEnum, process?: telephony.RmaReplaceTypeEnum, receptionDatetime?: string, shippingContact?: telephony.Contact, status?: telephony.RmaStatusEnum, steps?: telephony.RmaStep[], terminationDatetime?: string, type?: telephony.RmaTypeEnum}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/xdsl/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * XDSL Email Pro
   * Alter this object properties
   */
  put(path: '/xdsl/email/pro/{email}'): (params: {email: string, currentUsage?: complexType.UnitAndValue<number>, displayName?: string, domain?: string, firstName?: string, id?: number, initial?: string, lastLogoffDate?: string, lastLogonDate?: string, lastName?: string, login?: string, passwordLastUpdate?: string, primaryEmailAddress?: string, quota?: complexType.UnitAndValue<number>, state?: emailproObjectStateEnum, taskPendingId?: number}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/xdsl/spare/{spare}/serviceInfos'): (params: {spare: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Modem Template
   * Alter this object properties
   */
  put(path: '/xdsl/templateModem/{name}'): (params: {name: string, DHCP?: xdsl.templateModem.DHCP[], LAN?: xdsl.templateModem.LAN[], WLAN?: xdsl.templateModem.WLAN[], capabilities?: string, creationDate?: string, dmzIP?: string, mtuSize?: xdsl.xdslModemConfig.MTUSizeEnum, parametersToIgnore?: xdsl.templateModem.ParametersToIgnore, portMapping?: xdsl.templateModem.PortMapping[]}) => Promise<void>;
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
  post(path: '/xdsl/{serviceName}/lines/{number}/diagnostic/run'): (params: {number: string, serviceName: string, actionsDone?: xdsl.lineDiagnostic.CustomerActionsEnum[], answers?: xdsl.lineDiagnostic.Answers, faultType: xdsl.lineDiagnostic.FaultTypeEnum}) => Promise<xdsl.lineDiagnostic.Diagnostic>;
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
  post(path: '/xdsl/{serviceName}/modem/portMappings'): (params: {serviceName: string, allowedRemoteIp?: string, description?: string, externalPortEnd?: number, externalPortStart: number, internalClient: string, internalPort: number, name: string, protocol: xdsl.xdslModemConfig.ProtocolTypeEnum}) => Promise<xdsl.PortMapping>;
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
  post(path: '/xdsl/{serviceName}/monitoringNotifications'): (params: {serviceName: string, allowIncident?: boolean, downThreshold?: number, email?: string, frequency: xdsl.monitoringNotifications.FrequencyEnum, phone?: string, smsAccount?: string, type: xdsl.monitoringNotifications.TypeEnum}) => Promise<xdsl.MonitoringNotification>;
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
  post(path: '/xdsl/eligibility/lines/active'): (params: {city: xdsl.eligibility.City, contactName: string, street: xdsl.eligibility.Street, streetNumber?: string}) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
  /**
   * Get the inactive lines at given address
   * Get the inactive lines at given address
   */
  post(path: '/xdsl/eligibility/lines/inactive'): (params: {city: xdsl.eligibility.City, contactName?: string, street: xdsl.eligibility.Street, streetNumber?: string}) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
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
 * classic Model
 */type orderPrice = order.Price;
type xdslDslTypeEnum = xdsl.DslTypeEnum;
type xdslDeconsolidationEnum = xdsl.DeconsolidationEnum;
type xdslLineSectionLength = xdsl.LineSectionLength;
type xdsleligibilityAddress = xdsl.eligibility.Address;
type xdsleligibilityPortability = xdsl.eligibility.Portability;
type xdsleligibilityLandlineStatusEnum = xdsl.eligibility.LandlineStatusEnum;
type xdsleligibilityProviderEnum = xdsl.eligibility.ProviderEnum;
type emailproObjectStateEnum = email.pro.ObjectStateEnum;
