import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /xdsl Models
 */
export declare namespace complexType {
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
    interface UnitAndValues<T> {
        unit: string;
        values: T[];
    }
}
export declare namespace connectivity {
    namespace eligibility {
        interface MeetingSlot {
            endDate: string;
            startDate: string;
            uiCode: string;
        }
        interface Meetings {
            canBookFakeMeeting: boolean;
            meetingSlots: connectivity.eligibility.MeetingSlot[];
        }
    }
}
export declare namespace coreTypes {
    type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw";
    type IpVersionEnum = "v4" | "v6";
}
export declare namespace email {
    namespace pro {
        type ObjectStateEnum = "creating" | "deleting" | "ok" | "reopening" | "suspended" | "suspending" | "unknown";
    }
}
export declare namespace order {
    interface Contract {
        content: string;
        name: string;
        url: string;
    }
    type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points";
    interface Order {
        contracts: order.Contract[];
        details: order.OrderDetail[];
        orderId?: number;
        prices: order.OrderPrices;
        url?: string;
    }
    interface OrderDetail {
        description: string;
        detailType?: order.OrderDetailTypeEnum;
        domain: string;
        quantity: number;
        totalPrice: order.Price;
        unitPrice: order.Price;
    }
    type OrderDetailTypeEnum = "ACCESSORY" | "CAUTION" | "CHOOSED" | "CONSUMPTION" | "CREATION" | "DELIVERY" | "DURATION" | "GIFT" | "INSTALLATION" | "LICENSE" | "MUTE" | "OTHER" | "OUTPLAN" | "QUANTITY" | "REFUND" | "RENEW" | "SPECIAL" | "SWITCH" | "TRANSFER" | "VOUCHER";
    interface OrderPrices {
        tax: order.Price;
        withTax: order.Price;
        withoutTax: order.Price;
    }
    interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
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
export declare namespace spare {
    namespace xdsl {
        interface XdslSpare {
            brand: string;
            macAddress: string;
        }
    }
}
export declare namespace telephony {
    interface Contact {
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
    interface Rma {
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
    type RmaOfferTypeEnum = "deposit" | "loan" | "purchase";
    type RmaReplaceTypeEnum = "changePhone" | "phoneRestitution" | "undefined";
    type RmaStatusEnum = "closed" | "open" | "received";
    interface RmaStep {
        description: string;
        doneDate?: string;
        infos?: string;
        name: telephony.RmaStepNameEnum;
        status: telephony.RmaStepStatusEnum;
    }
    type RmaStepNameEnum = "dispatchJustification" | "equipmentSending" | "equipmentTesting" | "opening" | "parcelReception" | "parcelValidation" | "validation";
    type RmaStepStatusEnum = "done" | "todo";
    type RmaTypeEnum = "after sale equipment service exchange" | "after sale phone service exchange" | "equipment restitution" | "fast exchange" | "old merchandise reception before exchange" | "phone restitution" | "resends due to shipping lost by the carrier" | "resends due to shipping not withdraw" | "specific return merchandise authorisation" | "termination" | "unknown";
}
export declare namespace xdsl {
    interface Access {
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
    interface AccessCapabilities {
        canApplyLnsRateLimit: boolean;
        canChangeDslamProfile: boolean;
        canChangeLns: boolean;
        canGetRadiusConnectionLogs: boolean;
        canResetDslamPort: boolean;
        hasDslamPort: boolean;
    }
    interface AccessDiagnostic {
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
    interface AccessDiagnosticCapabilities {
        incident: boolean;
        isActiveOnLns: boolean;
        isModemConnected: boolean;
        lineTest: boolean;
        ping: boolean;
        proposedProfileId: boolean;
        sync: boolean;
    }
    type AccessRoleEnum = "backup" | "main";
    type AccessStatisticsTypeEnum = "ping" | "traffic:download" | "traffic:upload";
    type AccessStatusEnum = "active" | "cancelled" | "close" | "deleting" | "doing" | "migration" | "slamming" | "upgradeOffer";
    interface AddressDetail {
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
    interface AntiSpam {
        date: string;
        ip: string;
        lastSpamDetected: string;
        status: xdsl.antiSpam.AntiSpamStatusEnum;
    }
    interface AsyncTask<T> {
        error?: string;
        result?: T;
        status: xdsl.AsyncTaskStatusEnum;
    }
    interface AsyncTaskArray<T> {
        error?: string;
        result?: T[];
        status: xdsl.AsyncTaskStatusEnum;
    }
    type AsyncTaskStatusEnum = "error" | "ok" | "pending";
    interface DHCP {
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
    interface DHCPStaticAddress {
        IPAddress: string;
        MACAddress: string;
        name?: string;
        taskId?: number;
    }
    type DeconsolidationEnum = "createNeighbour" | "creation" | "creationNeighbour" | "partial" | "total";
    interface DeconsolidationTerms {
        engagement: number;
        monthlyPrice: order.Price;
        price: order.Price;
    }
    interface DeviceModemInfo {
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
    type DslTypeEnum = "adsl" | "ftth" | "sdsl" | "vdsl";
    interface DslamLineProfile {
        id: number;
        isCurrent: boolean;
        name: string;
    }
    interface DslamPort {
        lastDesyncDate?: string;
        lastSyncDate?: string;
        profile?: xdsl.DslamLineProfile;
        status: xdsl.DslamPortStatusEnum;
    }
    interface DslamPortLog {
        date: string;
        lastOccurrenceDate: string;
        message: string;
        numberOfOccurrences: number;
    }
    type DslamPortStatusEnum = "activated" | "deactivated" | "outofsync";
    interface ExtraIpRangeMove {
        date: string;
        ipRange: string;
        moveTo: string;
    }
    type FaultRepairTimeEnum = "4HNO" | "4HO" | "NORMAL";
    type GtrEnum = "4hno" | "4ho" | "none";
    interface IP {
        dnsList: string[];
        ip: string;
        range: number;
        status: xdsl.IpStatusEnum;
        version: coreTypes.IpVersionEnum;
    }
    interface Incident {
        comment: string;
        creationDate: string;
        departments: string[];
        endDate?: string;
        id: number;
        nra: string[];
        operators: xdsl.OperatorTypeEnum[];
        taskId?: number;
    }
    type IpStatusEnum = "active" | "close" | "toDelete";
    interface LAN {
        IPAddress: string;
        addressingType: xdsl.xdslModemConfig.AddressingTypeEnum;
        lanName: string;
        subnetMask: string;
        taskId?: number;
    }
    interface LandlineConcentrationPoint {
        lineHead: string;
        lineInitialSection: number;
        lineInitialSectionPair: number;
    }
    interface Line {
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
    interface LineDiagnostic {
        lineTest?: xdsl.LineTestEnum;
        lineTestTime?: string;
        number: string;
        proposedProfileId?: number;
        sync: boolean;
    }
    interface LineSectionLength {
        diameter: number;
        length: number;
    }
    type LineStatisticsTypeEnum = "attenuation:download" | "attenuation:upload" | "snr:download" | "snr:upload" | "synchronization:download" | "synchronization:upload";
    type LineTestEnum = "actionPending" | "customerSideProblem" | "error" | "noProblem" | "ovhSideProblem";
    interface Modem {
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
    interface ModemCapabilities {
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
    interface ModemInfo {
        device: xdsl.DeviceModemInfo;
        statistics: xdsl.StatsModemInfo;
    }
    interface MonitoringNotification {
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
    type OperatorTypeEnum = "collect" | "kosc" | "ovh";
    interface PendingAction {
        action: string;
        dateTodo: string;
    }
    interface PortMapping {
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
    interface RadiusConnectionLog {
        date: string;
        login: string;
        message: string;
        state: string;
    }
    interface ResiliationFollowUpDetail {
        dateTodo: string;
        needModemReturn: boolean;
        registrationDate: string;
        status: string;
    }
    type ResiliationReasonEnum = "addressMove" | "billingProblems" | "cessationOfActivity" | "changeOfTerms" | "ftth" | "goToCompetitor" | "other" | "technicalProblems";
    interface ResiliationSurvey {
        comment?: string;
        type: xdsl.ResiliationReasonEnum;
    }
    interface ResiliationTerms {
        due: order.Price;
        engageDate?: string;
        minResiliationDate: string;
        resiliationDate: string;
        resiliationReasons: xdsl.ResiliationReasonEnum[];
    }
    type ServiceStatusEnum = "disabled" | "enabled";
    type StatisticsPeriodEnum = "daily" | "monthly" | "preview" | "weekly" | "yearly";
    interface StatsModemInfo {
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
    interface Task {
        function: string;
        id: number;
        status: xdsl.TaskStatusEnum;
        todoDate: string;
        updateDate: string;
    }
    type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "problem" | "todo";
    interface TemplateModem {
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
    interface TimestampAndValue {
        timestamp: number;
        value?: number;
    }
    interface WLAN {
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
    type WLANFrequencyEnum = "2.4GHz" | "5GHz";
    namespace antiSpam {
        type AntiSpamStatusEnum = "block" | "done" | "new" | "unblock" | "warn";
        interface EvidencesInfo {
            error?: string;
            result?: xdsl.antiSpam.EvidencesInfoDetail[];
            status: xdsl.antiSpam.EvidencesInfoStatusEnum;
        }
        interface EvidencesInfoDetail {
            date: string;
            filename: string;
            url: string;
        }
        type EvidencesInfoStatusEnum = "error" | "ok" | "pending";
    }
    interface connectedDevice {
        active: boolean;
        addressSource: xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum;
        hostName: string;
        informationDate: string;
        interfaceType: string;
        ipAddress: string;
        leaseTimeRemaining: number;
        macAddress: string;
    }
    namespace eligibility {
        interface Address {
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
        interface Building {
            name: string;
            nro: string;
            reference: string;
            type: xdsl.eligibility.BuildingTypeEnum;
        }
        type BuildingTypeEnum = "BUILDING" | "HOUSE";
        interface City {
            inseeCode: string;
            locality?: string;
            name: string;
            zipCode: string;
        }
        interface CodeAndMessage {
            code: string;
            message: string;
        }
        interface Eligibility {
            address?: xdsl.eligibility.Address;
            characteristics: xdsl.eligibility.LineCharacteristics;
            endpoint: xdsl.eligibility.LineEndpointEnum;
            id: string;
            infos: xdsl.eligibility.LineInfos;
            offers: xdsl.eligibility.Offer[];
            portability: xdsl.eligibility.Portability;
        }
        interface FiberEligibility {
            id: string;
            offers: xdsl.eligibility.FiberOffer[];
        }
        interface FiberOffer {
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
        interface FiberStreet {
            streetCode: string;
            streetName: string;
        }
        type LandlineStatusEnum = "active" | "inactive";
        interface Line {
            address: xdsl.eligibility.Address;
            contactName: string;
            lineNumber: string;
            lineStatus: xdsl.eligibility.LandlineStatusEnum;
        }
        interface LineCharacteristics {
            calibration: xdsl.eligibility.LineSectionCalibration[];
            desaturationFreePairs: number;
            distance: number;
            freePairs: number;
            mitigation: number;
            mitigationSdsl: number;
            nra: string;
        }
        type LineEndpointEnum = "address" | "line";
        interface LineInfos {
            createNeighbour: boolean;
            lineNumber?: string;
            lineStatus?: xdsl.eligibility.LandlineStatusEnum;
            unlistedNumber: boolean;
        }
        interface LineSectionCalibration {
            diameter: number;
            length: number;
        }
        interface MeetingSlot {
            endDate: string;
            startDate: string;
            uiCode: string;
        }
        interface MeetingSlots {
            canBookFakeMeeting: boolean;
            meetingSlots: xdsl.eligibility.MeetingSlot[];
        }
        interface Offer {
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
        interface Portability {
            comments: xdsl.eligibility.CodeAndMessage[];
            eligible: boolean;
            underCondition: boolean;
            warnings: xdsl.eligibility.CodeAndMessage[];
        }
        type ProviderEnum = "axione" | "ft" | "kosc" | "ovh" | "sfr";
        interface Street {
            name: string;
            rivoliCode: string;
        }
    }
    namespace email {
        namespace pro {
            interface Task {
                finishDate?: string;
                function: string;
                status: xdsl.email.pro.TaskStatusEnum;
                todoDate: string;
            }
            type TaskStatusEnum = "cancelled" | "doing" | "done" | "error" | "todo";
        }
    }
    namespace lineDiagnostic {
        interface Answers {
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
        type BandwidthTestUnitEnum = "Kbps" | "Mbps";
        interface ConnectionInformations {
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
        interface CustomerActionToDo {
            description: string;
            name: xdsl.lineDiagnostic.CustomerActionsEnum;
        }
        type CustomerActionsEnum = "bePreparedToCheckModemSynchronization" | "changeDslFilterAndPlugInDti" | "changeExtensionCable" | "changeProfile" | "checkConnectionCable" | "checkConnectionLoginAndParameters" | "checkFilter" | "connectModemToOtherPlugs" | "neutralTest" | "rebootModem" | "resetModem" | "unplugEveryModems" | "unplugModem";
        interface Diagnostic {
            data: xdsl.lineDiagnostic.DiagnosticData;
            faultType: xdsl.lineDiagnostic.FaultTypeEnum;
            id: number;
            status: xdsl.lineDiagnostic.DiagnosticStatusEnum;
        }
        interface DiagnosticData {
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
        type DiagnosticStatusEnum = "cancelled" | "connectionProblem" | "genericIncidentPending" | "haveToConnectModemOnTheRightPlug" | "init" | "interventionRequested" | "noBandwidthFault" | "noProblemAnymore" | "noSyncFaultDiagnosticRequired" | "problem" | "resolvedAfterTests" | "sleeping" | "validationRefused" | "waitingHuman" | "waitingRobot" | "waitingValidation";
        type FaultTypeEnum = "alignment" | "noSync" | "syncLossOrLowBandwidth" | "unknown";
        interface LineCapabilities {
            down?: number;
            mitigation?: string;
            ping?: number;
            up?: number;
        }
        interface LineDetails {
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
        interface PossibleValue {
            id?: number;
            label?: string;
            value?: string;
        }
        type ProblemTypeEnum = "lowBandwidth" | "syncLoss";
        type ProviderEnum = "axione" | "ft" | "ftBySfr" | "kosc" | "koscDeg" | "ovh" | "sfr";
        interface Question {
            defaultValue?: string;
            description: string;
            enumValues?: string[];
            name: xdsl.lineDiagnostic.QuestionsEnum;
            possibleValues?: xdsl.lineDiagnostic.PossibleValue[];
            required?: boolean;
            type: string;
        }
        type QuestionsEnum = "bandwidthTestUnit" | "comment" | "conditionsAccepted" | "contactPhone" | "datetimeOfAppearance" | "downloadBandwidthTest" | "endAfternoonHours" | "endMorningHours" | "followBySms" | "hasModemKeptSynchronization" | "idAppointment" | "individualSite" | "modemIsSynchronized" | "modemMac" | "modemStillSynchronized" | "modemType" | "ovhTicket" | "problemType" | "resolvedAfterTests" | "secureSite" | "severalInternetConnections" | "siteClosedDays" | "siteDigicode" | "siteOpening" | "startAfternoonHours" | "startMorningHours" | "uploadBandwidthTest";
        type RobotActionsEnum = "alignmentLockTest" | "alignmentResetTest" | "alignmentTestResult" | "checkCustomerTicket" | "checkIfAccessPing" | "checkIfResolvedAfterConnectionTests" | "checkIfResolvedAfterInstallationCheck" | "checkIfResolvedAfterTests" | "checkIfSeveralConnections" | "checkInstallation" | "checkProblem" | "checkSynchronizationWithoutOtherModems" | "customerPrelocChecks" | "findProblem" | "installationCheck" | "lockUnlock" | "needToRequestMonitoring" | "needToRequestOperatorIntervention" | "needToRequestOvhIntervention" | "requestMonitoring" | "requestOperatorIntervention" | "requestOvhIntervention" | "seltTest";
        interface Section {
            length: number;
            section: number;
        }
        type SeltPrelocEnum = "CUST" | "DSLAM" | "LINE" | "RE";
        interface SeltResult {
            date?: string;
            distance?: number;
            preloc?: xdsl.lineDiagnostic.SeltPrelocEnum;
            state?: xdsl.lineDiagnostic.SeltStateEnum;
            status?: xdsl.lineDiagnostic.SeltStatusEnum;
        }
        type SeltStateEnum = "open" | "short" | "synced" | "unknown";
        type SeltStatusEnum = "failed" | "notAvailable" | "ok";
    }
    namespace monitoringNotifications {
        type FrequencyEnum = "1h" | "5m" | "6h" | "once";
        type TypeEnum = "mail" | "sms";
    }
    namespace orderFollowup {
        type DurationUnitEnum = "day" | "hour" | "minute";
        interface Step {
            comments: string[];
            doneDate?: string;
            durationUnit: xdsl.orderFollowup.DurationUnitEnum;
            expectedDuration: number;
            name: xdsl.orderFollowup.StepNameEnum;
            status: xdsl.orderFollowup.StepStatusEnum;
        }
        type StepNameEnum = "accessIsOperational" | "checkInfrastructure" | "configureAccessOnOVH" | "orderPayed" | "orderReceived" | "orderTreatment" | "sendModem" | "sendOrderToProvider" | "setupCustomerPremisesEquipment" | "waitingForProviderInstallReport" | "waitingForWithdrawalPeriodToBeOver";
        type StepStatusEnum = "doing" | "done" | "error" | "todo" | "waitingCustomer";
    }
    namespace templateModem {
        interface DHCP {
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
        interface LAN {
            IPAddress: string;
            addressingType: xdsl.xdslModemConfig.AddressingTypeEnum;
            lanName: string;
            subnetMask: string;
        }
        interface ParametersToIgnore {
            LANandDHCP?: boolean;
            WLANList?: string[];
            dmzIP?: boolean;
            mtuSize?: boolean;
            portMappingList?: string[];
        }
        interface PortMapping {
            allowedRemoteIp?: string;
            description?: string;
            externalPortEnd?: number;
            externalPortStart: number;
            internalClient: string;
            internalPort: number;
            name: string;
            protocol: xdsl.xdslModemConfig.ProtocolTypeEnum;
        }
        type SecurityTypeEnum = "None" | "WPA" | "WPA2" | "WPAandWPA2";
        interface WLAN {
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
    interface xdslEmailPro {
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
    namespace xdslModemConfig {
        type AddressingTypeEnum = "DHCP" | "Static";
        type ChannelModeEnum = "Auto" | "Manual";
        type ConnectedDeviceAddressSourceEnum = "DHCP" | "Static" | "Unknown";
        type EasyFirewallLevelEnum = "BlockAll" | "Disabled" | "Normal";
        type FrequencyEnum = "2.4GHz" | "5GHz";
        type MTUSizeEnum = 1432 | 1456 | 1492;
        type ProtocolTypeEnum = "TCP" | "UDP";
        type SecurityTypeEnum = "None" | "WEP" | "WPA" | "WPA2" | "WPAandWPA2";
    }
}
/**
 * END API /xdsl Models
 */
export declare function proxyXdsl(ovhEngine: OvhRequestable): Xdsl;
export default proxyXdsl;
/**
 * Api Proxy model
 */ export interface Xdsl {
    $get(): Promise<string[]>;
    eligibility: {
        cities: {
            $get(params: {
                zipCode: string;
            }): Promise<xdsl.eligibility.City[]>;
        };
        lines: {
            active: {
                $post(params: {
                    city: xdsl.eligibility.City;
                    contactName: string;
                    street: xdsl.eligibility.Street;
                    streetNumber?: string;
                }): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
            };
            inactive: {
                $post(params: {
                    city: xdsl.eligibility.City;
                    contactName?: string;
                    street: xdsl.eligibility.Street;
                    streetNumber?: string;
                }): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
            };
        };
        meetings: {
            $get(params: {
                eligibilityId: string;
                offerLabel: string;
            }): Promise<xdsl.AsyncTask<xdsl.eligibility.MeetingSlots>>;
        };
        search: {
            buildings: {
                $post(params: {
                    streetCode: string;
                    streetNumber: string;
                }): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Building>>;
            };
            cities: {
                $post(params: {
                    zipCode: string;
                }): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.City>>;
            };
            fiberStreets: {
                $post(params: {
                    inseeCode: string;
                }): Promise<xdsl.AsyncTaskArray<xdsl.eligibility.FiberStreet>>;
            };
            streetNumbers: {
                $post(params: {
                    streetCode: string;
                }): Promise<xdsl.AsyncTaskArray<string>>;
            };
        };
        streets: {
            $get(params: {
                inseeCode: string;
                partialName: string;
            }): Promise<xdsl.eligibility.Street[]>;
        };
        test: {
            $get(params: {
                id: string;
            }): Promise<xdsl.eligibility.Eligibility>;
            address: {
                $post(params: {
                    address: xdsl.eligibility.Address;
                }): Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
            };
            fiber: {
                building: {
                    $post(params: {
                        building: string;
                    }): Promise<xdsl.AsyncTask<xdsl.eligibility.FiberEligibility>>;
                };
            };
            line: {
                $post(params: {
                    lineNumber: string;
                    lineStatus: xdsl.eligibility.LandlineStatusEnum;
                }): Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
            };
        };
    };
    email: {
        pro: {
            $get(): Promise<string[]>;
            $(email: string): {
                $delete(): Promise<void>;
                $get(): Promise<xdsl.xdslEmailPro>;
                $put(params?: {
                    currentUsage?: complexType.UnitAndValue<number>;
                    displayName?: string;
                    domain?: string;
                    firstName?: string;
                    id?: number;
                    initial?: string;
                    lastLogoffDate?: string;
                    lastLogonDate?: string;
                    lastName?: string;
                    login?: string;
                    passwordLastUpdate?: string;
                    primaryEmailAddress?: string;
                    quota?: complexType.UnitAndValue<number>;
                    state?: emailproObjectStateEnum;
                    taskPendingId?: number;
                }): Promise<void>;
                changePassword: {
                    $post(params: {
                        password: string;
                    }): Promise<xdsl.email.pro.Task>;
                };
            };
        };
    };
    incidents: {
        $get(params?: {
            creationDate?: string;
            endDate?: string;
        }): Promise<number[]>;
        $(id: number): {
            $get(): Promise<xdsl.Incident>;
        };
    };
    spare: {
        $get(): Promise<string[]>;
        brands: {
            $get(): Promise<string[]>;
        };
        $(spare: string): {
            $delete(): Promise<void>;
            $get(): Promise<spare.xdsl.XdslSpare>;
            compatibleReplacement: {
                $get(): Promise<string[]>;
            };
            replace: {
                $post(params: {
                    domain: string;
                }): Promise<void>;
            };
            returnMerchandise: {
                $post(): Promise<void>;
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
        };
    };
    templateModem: {
        $get(): Promise<string[]>;
        $post(params: {
            name: string;
            serviceName: string;
        }): Promise<xdsl.TemplateModem>;
        $(name: string): {
            $delete(): Promise<void>;
            $get(): Promise<xdsl.TemplateModem>;
            $put(params?: {
                DHCP?: xdsl.templateModem.DHCP[];
                LAN?: xdsl.templateModem.LAN[];
                WLAN?: xdsl.templateModem.WLAN[];
                capabilities?: string;
                creationDate?: string;
                dmzIP?: string;
                mtuSize?: xdsl.xdslModemConfig.MTUSizeEnum;
                name?: string;
                parametersToIgnore?: xdsl.templateModem.ParametersToIgnore;
                portMapping?: xdsl.templateModem.PortMapping[];
            }): Promise<void>;
        };
    };
    $(serviceName: string): {
        $get(): Promise<xdsl.Access>;
        $put(params?: {
            accessName?: string;
            accessType?: xdsl.DslTypeEnum;
            address?: xdsl.AddressDetail;
            capabilities?: xdsl.AccessCapabilities;
            description?: string;
            ipv6Enabled?: boolean;
            lnsRateLimit?: number;
            monitoring?: boolean;
            nra?: string;
            packName?: string;
            pairsNumber?: number;
            role?: xdsl.AccessRoleEnum;
            status?: xdsl.AccessStatusEnum;
        }): Promise<void>;
        addressMove: {
            extraIpRange: {
                $get(): Promise<xdsl.ExtraIpRangeMove>;
            };
            extraIpRangeMove: {
                $post(): Promise<xdsl.Task>;
            };
        };
        antiSpams: {
            $get(): Promise<string[]>;
            $(ip: string): {
                $get(): Promise<xdsl.AntiSpam>;
                evidences: {
                    $get(): Promise<xdsl.antiSpam.EvidencesInfo>;
                };
            };
        };
        applyTemplateToModem: {
            $post(params: {
                templateName: string;
            }): Promise<xdsl.Task>;
        };
        canCancelResiliation: {
            $get(): Promise<boolean>;
        };
        cancelResiliation: {
            $post(): Promise<void>;
        };
        changeContact: {
            $post(params?: {
                contactAdmin?: string;
                contactBilling?: string;
                contactTech?: string;
            }): Promise<number[]>;
        };
        diagnostic: {
            $get(): Promise<xdsl.AccessDiagnostic>;
            $post(): Promise<xdsl.Task>;
        };
        incident: {
            $get(): Promise<xdsl.Incident>;
        };
        ips: {
            $get(): Promise<string[]>;
            $post(): Promise<xdsl.Task>;
            $(ip: string): {
                $delete(): Promise<void>;
                $get(): Promise<xdsl.IP>;
            };
        };
        ipv6: {
            $post(params: {
                enabled: boolean;
            }): Promise<xdsl.Task>;
        };
        lines: {
            $get(): Promise<string[]>;
            $(number: string): {
                $get(): Promise<xdsl.Line>;
                diagnostic: {
                    cancel: {
                        $post(): Promise<void>;
                    };
                    run: {
                        $post(params: {
                            actionsDone?: xdsl.lineDiagnostic.CustomerActionsEnum[];
                            answers?: xdsl.lineDiagnostic.Answers;
                            faultType: xdsl.lineDiagnostic.FaultTypeEnum;
                        }): Promise<xdsl.lineDiagnostic.Diagnostic>;
                    };
                };
                dslamPort: {
                    $get(): Promise<xdsl.DslamPort>;
                    availableProfiles: {
                        $get(): Promise<xdsl.DslamLineProfile[]>;
                    };
                    changeProfile: {
                        $post(params: {
                            dslamProfileId: number;
                        }): Promise<xdsl.Task>;
                    };
                    logs: {
                        $get(params: {
                            limit: number;
                        }): Promise<xdsl.DslamPortLog[]>;
                    };
                    reset: {
                        $post(): Promise<xdsl.Task>;
                    };
                };
                statistics: {
                    $get(params: {
                        period: xdsl.StatisticsPeriodEnum;
                        type: xdsl.LineStatisticsTypeEnum;
                    }): Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
                };
            };
        };
        modem: {
            $get(): Promise<xdsl.Modem>;
            $put(params?: {
                brandName?: string;
                capabilities?: xdsl.ModemCapabilities;
                dmzIP?: string;
                easyFirewallLevel?: xdsl.xdslModemConfig.EasyFirewallLevelEnum;
                ipv6Support?: boolean;
                isBridged?: boolean;
                lastCwmpRequestDate?: string;
                macAddress?: string;
                managedByOvh?: boolean;
                model?: string;
                mtuSize?: xdsl.xdslModemConfig.MTUSizeEnum;
            }): Promise<void>;
            availableWLANChannel: {
                $get(params: {
                    frequency: xdsl.WLANFrequencyEnum;
                }): Promise<number[]>;
            };
            blocIp: {
                $get(): Promise<xdsl.ServiceStatusEnum>;
                $post(params: {
                    status: xdsl.ServiceStatusEnum;
                }): Promise<xdsl.Task>;
            };
            callWaiting: {
                $get(): Promise<xdsl.ServiceStatusEnum>;
                $post(params: {
                    callWaiting: xdsl.ServiceStatusEnum;
                }): Promise<xdsl.Task>;
            };
            comfortExchange: {
                $post(params?: {
                    contactShipping?: string;
                }): Promise<order.Order>;
            };
            connectedDevices: {
                $get(): Promise<string[]>;
                $(macAddress: string): {
                    $get(): Promise<xdsl.connectedDevice>;
                };
            };
            contentSharing: {
                $get(): Promise<xdsl.ServiceStatusEnum>;
                $post(params: {
                    contentSharing: xdsl.ServiceStatusEnum;
                }): Promise<xdsl.Task>;
            };
            duplicatePortMappingConfig: {
                $post(params: {
                    accessName: string;
                }): Promise<void>;
            };
            firmware: {
                $get(): Promise<string>;
                $post(params: {
                    firmware: string;
                    todoDate?: string;
                }): Promise<xdsl.Task>;
            };
            firmwareAvailable: {
                $get(): Promise<string[]>;
            };
            ftp: {
                $get(): Promise<xdsl.ServiceStatusEnum>;
                $post(params: {
                    ftp: xdsl.ServiceStatusEnum;
                }): Promise<xdsl.Task>;
            };
            ipsecAlg: {
                $get(): Promise<xdsl.ServiceStatusEnum>;
                $post(params: {
                    ipsecAlg: xdsl.ServiceStatusEnum;
                }): Promise<xdsl.Task>;
            };
            lan: {
                $get(): Promise<string[]>;
                $(lanName: string): {
                    $get(): Promise<xdsl.LAN>;
                    $put(params?: {
                        IPAddress?: string;
                        addressingType?: xdsl.xdslModemConfig.AddressingTypeEnum;
                        lanName?: string;
                        subnetMask?: string;
                        taskId?: number;
                    }): Promise<void>;
                    dhcp: {
                        $get(): Promise<string[]>;
                        $(dhcpName: string): {
                            $get(): Promise<xdsl.DHCP>;
                            $put(params?: {
                                defaultGateway?: string;
                                dhcpName?: string;
                                domainName?: string;
                                endAddress?: string;
                                leaseTime?: number;
                                primaryDNS?: string;
                                secondaryDNS?: string;
                                serverEnabled?: boolean;
                                startAddress?: string;
                                subnetMask?: string;
                                taskId?: number;
                            }): Promise<void>;
                            DHCPStaticAddresses: {
                                $get(): Promise<string[]>;
                                $post(params: {
                                    IPAddress: string;
                                    MACAddress: string;
                                    name?: string;
                                }): Promise<xdsl.DHCPStaticAddress>;
                                $(MACAddress: string): {
                                    $delete(): Promise<xdsl.Task>;
                                    $get(): Promise<xdsl.DHCPStaticAddress>;
                                    $put(params?: {
                                        IPAddress?: string;
                                        MACAddress?: string;
                                        name?: string;
                                        taskId?: number;
                                    }): Promise<void>;
                                };
                            };
                        };
                    };
                };
            };
            portMappings: {
                $get(): Promise<string[]>;
                $post(params: {
                    allowedRemoteIp?: string;
                    description?: string;
                    externalPortEnd?: number;
                    externalPortStart: number;
                    internalClient: string;
                    internalPort: number;
                    name: string;
                    protocol: xdsl.xdslModemConfig.ProtocolTypeEnum;
                }): Promise<xdsl.PortMapping>;
                $(name: string): {
                    $delete(): Promise<xdsl.Task>;
                    $get(): Promise<xdsl.PortMapping>;
                    $put(params?: {
                        allowedRemoteIp?: string;
                        description?: string;
                        externalPortEnd?: number;
                        externalPortStart?: number;
                        id?: number;
                        internalClient?: string;
                        internalPort?: number;
                        name?: string;
                        protocol?: xdsl.xdslModemConfig.ProtocolTypeEnum;
                        taskId?: number;
                    }): Promise<void>;
                };
            };
            reboot: {
                $post(params?: {
                    todoDate?: string;
                }): Promise<xdsl.Task>;
            };
            reconfigureVoip: {
                $post(): Promise<void>;
            };
            refreshConnectedDevices: {
                $post(): Promise<xdsl.Task>;
            };
            reset: {
                $post(params?: {
                    resetOvhConfig?: boolean;
                }): Promise<xdsl.Task>;
            };
            resetPortMappingConfig: {
                $post(): Promise<void>;
            };
            retrieveInfo: {
                $post(): Promise<xdsl.AsyncTask<xdsl.ModemInfo>>;
            };
            sipAlg: {
                $get(): Promise<xdsl.ServiceStatusEnum>;
                $post(params: {
                    sipAlg: xdsl.ServiceStatusEnum;
                }): Promise<xdsl.Task>;
            };
            upnp: {
                $get(): Promise<xdsl.ServiceStatusEnum>;
                $post(params: {
                    upnp: xdsl.ServiceStatusEnum;
                }): Promise<xdsl.Task>;
            };
            wifi: {
                $get(): Promise<string[]>;
                $(wifiName: string): {
                    $get(): Promise<xdsl.WLAN>;
                    $put(params?: {
                        SSID?: string;
                        SSIDAdvertisementEnabled?: boolean;
                        bandSteering?: boolean;
                        channel?: number;
                        channelMode?: xdsl.xdslModemConfig.ChannelModeEnum;
                        enabled?: boolean;
                        frequency?: xdsl.xdslModemConfig.FrequencyEnum;
                        guest?: boolean;
                        securityKey?: string;
                        securityType?: xdsl.xdslModemConfig.SecurityTypeEnum;
                        taskId?: number;
                        wifiName?: string;
                    }): Promise<void>;
                };
            };
        };
        monitoringNotifications: {
            $get(): Promise<number[]>;
            $post(params: {
                allowIncident?: boolean;
                downThreshold?: number;
                email?: string;
                frequency: xdsl.monitoringNotifications.FrequencyEnum;
                phone?: string;
                smsAccount?: string;
                type: xdsl.monitoringNotifications.TypeEnum;
            }): Promise<xdsl.MonitoringNotification>;
            $(id: number): {
                $delete(): Promise<void>;
                $get(): Promise<xdsl.MonitoringNotification>;
                $put(params?: {
                    allowIncident?: boolean;
                    downThreshold?: number;
                    email?: string;
                    enabled?: boolean;
                    frequency?: xdsl.monitoringNotifications.FrequencyEnum;
                    id?: number;
                    phone?: string;
                    smsAccount?: string;
                    type?: xdsl.monitoringNotifications.TypeEnum;
                }): Promise<void>;
            };
        };
        orderFollowup: {
            $get(): Promise<xdsl.orderFollowup.Step[]>;
        };
        orderMeeting: {
            $post(params: {
                endDate: string;
                startDate: string;
                uiCode: string;
            }): Promise<void>;
        };
        pendingAction: {
            $get(): Promise<xdsl.PendingAction>;
        };
        radiusConnectionLogs: {
            $get(): Promise<xdsl.RadiusConnectionLog[]>;
        };
        requestPPPLoginMail: {
            $post(): Promise<void>;
        };
        requestTotalDeconsolidation: {
            $post(params?: {
                noPortability?: boolean;
                rio?: string;
            }): Promise<xdsl.Task>;
        };
        resiliate: {
            $post(params: {
                resiliationDate?: string;
                resiliationSurvey: xdsl.ResiliationSurvey;
            }): Promise<xdsl.ResiliationFollowUpDetail>;
        };
        resiliationFollowup: {
            $get(): Promise<xdsl.ResiliationFollowUpDetail>;
        };
        resiliationTerms: {
            $get(params?: {
                resiliationDate?: string;
            }): Promise<xdsl.ResiliationTerms>;
        };
        rma: {
            $get(): Promise<string[]>;
            $(id: string): {
                $delete(): Promise<void>;
                $get(): Promise<telephony.Rma>;
                $put(params?: {
                    cancellable?: boolean;
                    creationDatetime?: string;
                    equipmentReference?: string;
                    id?: string;
                    newMerchandise?: string;
                    offerTypeNew?: telephony.RmaOfferTypeEnum;
                    offerTypeOld?: telephony.RmaOfferTypeEnum;
                    process?: telephony.RmaReplaceTypeEnum;
                    receptionDatetime?: string;
                    shippingContact?: telephony.Contact;
                    status?: telephony.RmaStatusEnum;
                    steps?: telephony.RmaStep[];
                    terminationDatetime?: string;
                    type?: telephony.RmaTypeEnum;
                }): Promise<void>;
            };
        };
        searchOrderMeetings: {
            $post(): Promise<xdsl.AsyncTask<connectivity.eligibility.Meetings>>;
        };
        sendOrderToProvider: {
            $post(): Promise<void>;
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
        statistics: {
            $get(params: {
                period: xdsl.StatisticsPeriodEnum;
                type: xdsl.AccessStatisticsTypeEnum;
            }): Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
        };
        tasks: {
            $get(params?: {
                function_?: string;
                status?: xdsl.TaskStatusEnum;
            }): Promise<number[]>;
            $(id: number): {
                $get(): Promise<xdsl.Task>;
                archive: {
                    $post(): Promise<void>;
                };
            };
        };
        totalDeconsolidationTerms: {
            $get(): Promise<xdsl.DeconsolidationTerms>;
        };
        updateInvalidOrMissingRio: {
            $post(params: {
                relaunchWithoutPortability: boolean;
                rio?: string;
            }): Promise<void>;
        };
    };
    /**
     * Operations about the XDSL service
     * List available services
     */
    get(path: '/xdsl'): () => Promise<string[]>;
    /**
     * XDSL Access
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<xdsl.Access>;
    /**
     * extraIpRange operations
     * Informations about the extra IP range during address move
     */
    get(path: '/xdsl/{serviceName}/addressMove/extraIpRange'): (params: {
        serviceName: string;
    }) => Promise<xdsl.ExtraIpRangeMove>;
    /**
     * List the xdsl.AntiSpam objects
     * List antiSpams for this access
     */
    get(path: '/xdsl/{serviceName}/antiSpams'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Spams detected from xdsl access
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/antiSpams/{ip}'): (params: {
        ip: string;
        serviceName: string;
    }) => Promise<xdsl.AntiSpam>;
    /**
     * evidences operations
     * List of evidences stored on PCS for this ip
     */
    get(path: '/xdsl/{serviceName}/antiSpams/{ip}/evidences'): (params: {
        ip: string;
        serviceName: string;
    }) => Promise<xdsl.antiSpam.EvidencesInfo>;
    /**
     * canCancelResiliation operations
     * Get information about the ongoing resiliation
     */
    get(path: '/xdsl/{serviceName}/canCancelResiliation'): (params: {
        serviceName: string;
    }) => Promise<boolean>;
    /**
     * Diagnostic of the access
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/diagnostic'): (params: {
        serviceName: string;
    }) => Promise<xdsl.AccessDiagnostic>;
    /**
     * Detected incident
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/incident'): (params: {
        serviceName: string;
    }) => Promise<xdsl.Incident>;
    /**
     * List the xdsl.IP objects
     * List of IPs addresses for this access
     */
    get(path: '/xdsl/{serviceName}/ips'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Informations about an IP address
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/ips/{ip}'): (params: {
        ip: string;
        serviceName: string;
    }) => Promise<xdsl.IP>;
    /**
     * List the xdsl.Line objects
     * The lines of the access
     */
    get(path: '/xdsl/{serviceName}/lines'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Information about the physical copper line
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/lines/{number}'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<xdsl.Line>;
    /**
     * Information about the port on the DSLAM
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<xdsl.DslamPort>;
    /**
     * availableProfiles operations
     * List all availables profiles for this port
     */
    get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<xdsl.DslamLineProfile[]>;
    /**
     * logs operations
     * Get the logs emitted by the DSLAM for this port
     */
    get(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/logs'): (params: {
        number: string;
        serviceName: string;
        limit: number;
    }) => Promise<xdsl.DslamPortLog[]>;
    /**
     * statistics operations
     * Get various statistics about the line
     */
    get(path: '/xdsl/{serviceName}/lines/{number}/statistics'): (params: {
        number: string;
        serviceName: string;
        period: xdsl.StatisticsPeriodEnum;
        type: xdsl.LineStatisticsTypeEnum;
    }) => Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
    /**
     * Modem
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/modem'): (params: {
        serviceName: string;
    }) => Promise<xdsl.Modem>;
    /**
     * availableWLANChannel operations
     * List available WLAN channel for this modem
     */
    get(path: '/xdsl/{serviceName}/modem/availableWLANChannel'): (params: {
        serviceName: string;
        frequency: xdsl.WLANFrequencyEnum;
    }) => Promise<number[]>;
    /**
     * blocIp operations
     * Get the status of the Bloc IP on modem
     */
    get(path: '/xdsl/{serviceName}/modem/blocIp'): (params: {
        serviceName: string;
    }) => Promise<xdsl.ServiceStatusEnum>;
    /**
     * callWaiting operations
     * Get the status of callWaiting on modem
     */
    get(path: '/xdsl/{serviceName}/modem/callWaiting'): (params: {
        serviceName: string;
    }) => Promise<xdsl.ServiceStatusEnum>;
    /**
     * List the xdsl.connectedDevice objects
     * List of devices connected on this modem
     */
    get(path: '/xdsl/{serviceName}/modem/connectedDevices'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Connected Device
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/modem/connectedDevices/{macAddress}'): (params: {
        macAddress: string;
        serviceName: string;
    }) => Promise<xdsl.connectedDevice>;
    /**
     * contentSharing operations
     * Get the status of contentSharing on modem
     */
    get(path: '/xdsl/{serviceName}/modem/contentSharing'): (params: {
        serviceName: string;
    }) => Promise<xdsl.ServiceStatusEnum>;
    /**
     * firmware operations
     * Get the firmware version installed on modem
     */
    get(path: '/xdsl/{serviceName}/modem/firmware'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * firmwareAvailable operations
     * List available firmware for this modem
     */
    get(path: '/xdsl/{serviceName}/modem/firmwareAvailable'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * ftp operations
     * Get the status of ftp service on modem
     */
    get(path: '/xdsl/{serviceName}/modem/ftp'): (params: {
        serviceName: string;
    }) => Promise<xdsl.ServiceStatusEnum>;
    /**
     * ipsecAlg operations
     * Get the status of ipsec alg service on modem
     */
    get(path: '/xdsl/{serviceName}/modem/ipsecAlg'): (params: {
        serviceName: string;
    }) => Promise<xdsl.ServiceStatusEnum>;
    /**
     * List the xdsl.LAN objects
     * List of LANs on this modem
     */
    get(path: '/xdsl/{serviceName}/modem/lan'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * LAN Configuration of the Modem
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/modem/lan/{lanName}'): (params: {
        lanName: string;
        serviceName: string;
    }) => Promise<xdsl.LAN>;
    /**
     * List the xdsl.DHCP objects
     * List of DHCP on this modem
     */
    get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp'): (params: {
        lanName: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * DHCP Configuration of the Modem
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}'): (params: {
        dhcpName: string;
        lanName: string;
        serviceName: string;
    }) => Promise<xdsl.DHCP>;
    /**
     * List the xdsl.DHCPStaticAddress objects
     * List of DHCP Static Address of this modem
     */
    get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses'): (params: {
        dhcpName: string;
        lanName: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * DHCP Static Address
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}'): (params: {
        MACAddress: string;
        dhcpName: string;
        lanName: string;
        serviceName: string;
    }) => Promise<xdsl.DHCPStaticAddress>;
    /**
     * List the xdsl.PortMapping objects
     * List of PortMappings on this modem
     */
    get(path: '/xdsl/{serviceName}/modem/portMappings'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Port Mappings
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/modem/portMappings/{name}'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<xdsl.PortMapping>;
    /**
     * sipAlg operations
     * Get the status of sip alg service on modem
     */
    get(path: '/xdsl/{serviceName}/modem/sipAlg'): (params: {
        serviceName: string;
    }) => Promise<xdsl.ServiceStatusEnum>;
    /**
     * upnp operations
     * Get the status of the Upnp on modem
     */
    get(path: '/xdsl/{serviceName}/modem/upnp'): (params: {
        serviceName: string;
    }) => Promise<xdsl.ServiceStatusEnum>;
    /**
     * List the xdsl.WLAN objects
     * List of WLANs on this modem
     */
    get(path: '/xdsl/{serviceName}/modem/wifi'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * WLAN Configuration of the Modem
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/modem/wifi/{wifiName}'): (params: {
        serviceName: string;
        wifiName: string;
    }) => Promise<xdsl.WLAN>;
    /**
     * List the xdsl.MonitoringNotification objects
     * List the notifications for this access
     */
    get(path: '/xdsl/{serviceName}/monitoringNotifications'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Defines where and how the notifications will be sent
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/monitoringNotifications/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<xdsl.MonitoringNotification>;
    /**
     * orderFollowup operations
     * Get the status of the order
     */
    get(path: '/xdsl/{serviceName}/orderFollowup'): (params: {
        serviceName: string;
    }) => Promise<xdsl.orderFollowup.Step[]>;
    /**
     * Scheduled action before the next renewal of the service
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/pendingAction'): (params: {
        serviceName: string;
    }) => Promise<xdsl.PendingAction>;
    /**
     * radiusConnectionLogs operations
     * List the radius connection logs
     */
    get(path: '/xdsl/{serviceName}/radiusConnectionLogs'): (params: {
        serviceName: string;
    }) => Promise<xdsl.RadiusConnectionLog[]>;
    /**
     * resiliationFollowup operations
     * Get information about the ongoing resiliation
     */
    get(path: '/xdsl/{serviceName}/resiliationFollowup'): (params: {
        serviceName: string;
    }) => Promise<xdsl.ResiliationFollowUpDetail>;
    /**
     * resiliationTerms operations
     * Get resiliation terms
     */
    get(path: '/xdsl/{serviceName}/resiliationTerms'): (params: {
        serviceName: string;
        resiliationDate?: string;
    }) => Promise<xdsl.ResiliationTerms>;
    /**
     * List the telephony.Rma objects
     * Return Merchandise Authorisation associated
     */
    get(path: '/xdsl/{serviceName}/rma'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Current Return Merchandise Authorisation
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/rma/{id}'): (params: {
        id: string;
        serviceName: string;
    }) => Promise<telephony.Rma>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * statistics operations
     * Get various statistics about this access
     */
    get(path: '/xdsl/{serviceName}/statistics'): (params: {
        serviceName: string;
        period: xdsl.StatisticsPeriodEnum;
        type: xdsl.AccessStatisticsTypeEnum;
    }) => Promise<complexType.UnitAndValues<xdsl.TimestampAndValue>>;
    /**
     * List the xdsl.Task objects
     * Tasks scheduled for this access
     */
    get(path: '/xdsl/{serviceName}/tasks'): (params: {
        serviceName: string;
        function_?: string;
        status?: xdsl.TaskStatusEnum;
    }) => Promise<number[]>;
    /**
     * Describes the current status of a task
     * Get this object properties
     */
    get(path: '/xdsl/{serviceName}/tasks/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<xdsl.Task>;
    /**
     * totalDeconsolidationTerms operations
     * Give the price to requestTotalDeconsolidation on the access
     */
    get(path: '/xdsl/{serviceName}/totalDeconsolidationTerms'): (params: {
        serviceName: string;
    }) => Promise<xdsl.DeconsolidationTerms>;
    /**
     * Get the cities from a zipCode
     * Get the cities from a zipCode
     */
    get(path: '/xdsl/eligibility/cities'): (params: {
        zipCode: string;
    }) => Promise<xdsl.eligibility.City[]>;
    /**
     * Search for meeting time slot
     * Search for meeting time slot
     */
    get(path: '/xdsl/eligibility/meetings'): (params: {
        eligibilityId: string;
        offerLabel: string;
    }) => Promise<xdsl.AsyncTask<xdsl.eligibility.MeetingSlots>>;
    /**
     * Get the streets from a city inseeCode and partial street name
     * Get the streets from a city inseeCode and partial street name
     */
    get(path: '/xdsl/eligibility/streets'): (params: {
        inseeCode: string;
        partialName: string;
    }) => Promise<xdsl.eligibility.Street[]>;
    /**
     * Get an eligibility by its id
     * Get an eligibility by its id
     */
    get(path: '/xdsl/eligibility/test'): (params: {
        id: string;
    }) => Promise<xdsl.eligibility.Eligibility>;
    /**
     * Operations about the XDSL service
     * List available services
     */
    get(path: '/xdsl/email/pro'): () => Promise<string[]>;
    /**
     * XDSL Email Pro
     * Get this object properties
     */
    get(path: '/xdsl/email/pro/{email}'): (params: {
        email: string;
    }) => Promise<xdsl.xdslEmailPro>;
    /**
     * List the xdsl.Incident objects
     * List of incidents
     */
    get(path: '/xdsl/incidents'): (params?: {
        creationDate?: string;
        endDate?: string;
    }) => Promise<number[]>;
    /**
     * Detected incident
     * Get this object properties
     */
    get(path: '/xdsl/incidents/{id}'): (params: {
        id: number;
    }) => Promise<xdsl.Incident>;
    /**
     * Operations about the XDSL service
     * List available services
     */
    get(path: '/xdsl/spare'): () => Promise<string[]>;
    /**
     * Spare properties
     * Get this object properties
     */
    get(path: '/xdsl/spare/{spare}'): (params: {
        spare: string;
    }) => Promise<spare.xdsl.XdslSpare>;
    /**
     * compatibleReplacement operations
     * Return the list of brand compatible to be replaced
     */
    get(path: '/xdsl/spare/{spare}/compatibleReplacement'): (params: {
        spare: string;
    }) => Promise<string[]>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/xdsl/spare/{spare}/serviceInfos'): (params: {
        spare: string;
    }) => Promise<services.Service>;
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
    get(path: '/xdsl/templateModem/{name}'): (params: {
        name: string;
    }) => Promise<xdsl.TemplateModem>;
    /**
     * XDSL Access
     * Alter this object properties
     */
    put(path: '/xdsl/{serviceName}'): (params: {
        serviceName: string;
        accessName?: string;
        accessType?: xdsl.DslTypeEnum;
        address?: xdsl.AddressDetail;
        capabilities?: xdsl.AccessCapabilities;
        description?: string;
        ipv6Enabled?: boolean;
        lnsRateLimit?: number;
        monitoring?: boolean;
        nra?: string;
        packName?: string;
        pairsNumber?: number;
        role?: xdsl.AccessRoleEnum;
        status?: xdsl.AccessStatusEnum;
    }) => Promise<void>;
    /**
     * Modem
     * Alter this object properties
     */
    put(path: '/xdsl/{serviceName}/modem'): (params: {
        serviceName: string;
        brandName?: string;
        capabilities?: xdsl.ModemCapabilities;
        dmzIP?: string;
        easyFirewallLevel?: xdsl.xdslModemConfig.EasyFirewallLevelEnum;
        ipv6Support?: boolean;
        isBridged?: boolean;
        lastCwmpRequestDate?: string;
        macAddress?: string;
        managedByOvh?: boolean;
        model?: string;
        mtuSize?: xdsl.xdslModemConfig.MTUSizeEnum;
    }) => Promise<void>;
    /**
     * LAN Configuration of the Modem
     * Alter this object properties
     */
    put(path: '/xdsl/{serviceName}/modem/lan/{lanName}'): (params: {
        lanName: string;
        serviceName: string;
        IPAddress?: string;
        addressingType?: xdsl.xdslModemConfig.AddressingTypeEnum;
        subnetMask?: string;
        taskId?: number;
    }) => Promise<void>;
    /**
     * DHCP Configuration of the Modem
     * Alter this object properties
     */
    put(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}'): (params: {
        dhcpName: string;
        lanName: string;
        serviceName: string;
        defaultGateway?: string;
        domainName?: string;
        endAddress?: string;
        leaseTime?: number;
        primaryDNS?: string;
        secondaryDNS?: string;
        serverEnabled?: boolean;
        startAddress?: string;
        subnetMask?: string;
        taskId?: number;
    }) => Promise<void>;
    /**
     * DHCP Static Address
     * Alter this object properties
     */
    put(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}'): (params: {
        MACAddress: string;
        dhcpName: string;
        lanName: string;
        serviceName: string;
        IPAddress?: string;
        name?: string;
        taskId?: number;
    }) => Promise<void>;
    /**
     * Port Mappings
     * Alter this object properties
     */
    put(path: '/xdsl/{serviceName}/modem/portMappings/{name}'): (params: {
        name: string;
        serviceName: string;
        allowedRemoteIp?: string;
        description?: string;
        externalPortEnd?: number;
        externalPortStart?: number;
        id?: number;
        internalClient?: string;
        internalPort?: number;
        protocol?: xdsl.xdslModemConfig.ProtocolTypeEnum;
        taskId?: number;
    }) => Promise<void>;
    /**
     * WLAN Configuration of the Modem
     * Alter this object properties
     */
    put(path: '/xdsl/{serviceName}/modem/wifi/{wifiName}'): (params: {
        serviceName: string;
        wifiName: string;
        SSID?: string;
        SSIDAdvertisementEnabled?: boolean;
        bandSteering?: boolean;
        channel?: number;
        channelMode?: xdsl.xdslModemConfig.ChannelModeEnum;
        enabled?: boolean;
        frequency?: xdsl.xdslModemConfig.FrequencyEnum;
        guest?: boolean;
        securityKey?: string;
        securityType?: xdsl.xdslModemConfig.SecurityTypeEnum;
        taskId?: number;
    }) => Promise<void>;
    /**
     * Defines where and how the notifications will be sent
     * Alter this object properties
     */
    put(path: '/xdsl/{serviceName}/monitoringNotifications/{id}'): (params: {
        id: number;
        serviceName: string;
        allowIncident?: boolean;
        downThreshold?: number;
        email?: string;
        enabled?: boolean;
        frequency?: xdsl.monitoringNotifications.FrequencyEnum;
        phone?: string;
        smsAccount?: string;
        type?: xdsl.monitoringNotifications.TypeEnum;
    }) => Promise<void>;
    /**
     * Current Return Merchandise Authorisation
     * Alter this object properties
     */
    put(path: '/xdsl/{serviceName}/rma/{id}'): (params: {
        id: string;
        serviceName: string;
        cancellable?: boolean;
        creationDatetime?: string;
        equipmentReference?: string;
        newMerchandise?: string;
        offerTypeNew?: telephony.RmaOfferTypeEnum;
        offerTypeOld?: telephony.RmaOfferTypeEnum;
        process?: telephony.RmaReplaceTypeEnum;
        receptionDatetime?: string;
        shippingContact?: telephony.Contact;
        status?: telephony.RmaStatusEnum;
        steps?: telephony.RmaStep[];
        terminationDatetime?: string;
        type?: telephony.RmaTypeEnum;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/xdsl/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
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
     * XDSL Email Pro
     * Alter this object properties
     */
    put(path: '/xdsl/email/pro/{email}'): (params: {
        email: string;
        currentUsage?: complexType.UnitAndValue<number>;
        displayName?: string;
        domain?: string;
        firstName?: string;
        id?: number;
        initial?: string;
        lastLogoffDate?: string;
        lastLogonDate?: string;
        lastName?: string;
        login?: string;
        passwordLastUpdate?: string;
        primaryEmailAddress?: string;
        quota?: complexType.UnitAndValue<number>;
        state?: emailproObjectStateEnum;
        taskPendingId?: number;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/xdsl/spare/{spare}/serviceInfos'): (params: {
        spare: string;
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
     * Modem Template
     * Alter this object properties
     */
    put(path: '/xdsl/templateModem/{name}'): (params: {
        name: string;
        DHCP?: xdsl.templateModem.DHCP[];
        LAN?: xdsl.templateModem.LAN[];
        WLAN?: xdsl.templateModem.WLAN[];
        capabilities?: string;
        creationDate?: string;
        dmzIP?: string;
        mtuSize?: xdsl.xdslModemConfig.MTUSizeEnum;
        parametersToIgnore?: xdsl.templateModem.ParametersToIgnore;
        portMapping?: xdsl.templateModem.PortMapping[];
    }) => Promise<void>;
    /**
     * extraIpRangeMove operations
     * Initiate the extra IP range migration
     */
    post(path: '/xdsl/{serviceName}/addressMove/extraIpRangeMove'): (params: {
        serviceName: string;
    }) => Promise<xdsl.Task>;
    /**
     * applyTemplateToModem operations
     * Apply TemplateModem to existing Modem
     */
    post(path: '/xdsl/{serviceName}/applyTemplateToModem'): (params: {
        serviceName: string;
        templateName: string;
    }) => Promise<xdsl.Task>;
    /**
     * cancelResiliation operations
     * Cancel the ongoing resiliation
     */
    post(path: '/xdsl/{serviceName}/cancelResiliation'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/xdsl/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Diagnostic of the access
     * Run diagnostic on the access
     */
    post(path: '/xdsl/{serviceName}/diagnostic'): (params: {
        serviceName: string;
    }) => Promise<xdsl.Task>;
    /**
     * List the xdsl.IP objects
     * Order an extra /29 range of IPv4 addresses
     */
    post(path: '/xdsl/{serviceName}/ips'): (params: {
        serviceName: string;
    }) => Promise<xdsl.Task>;
    /**
     * ipv6 operations
     * Change the status of the IPv6 for this access
     */
    post(path: '/xdsl/{serviceName}/ipv6'): (params: {
        serviceName: string;
        enabled: boolean;
    }) => Promise<xdsl.Task>;
    /**
     * cancel operations
     * Cancel line diagnostic if possible
     */
    post(path: '/xdsl/{serviceName}/lines/{number}/diagnostic/cancel'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * run operations
     * Update and get advanced diagnostic of the line
     */
    post(path: '/xdsl/{serviceName}/lines/{number}/diagnostic/run'): (params: {
        number: string;
        serviceName: string;
        actionsDone?: xdsl.lineDiagnostic.CustomerActionsEnum[];
        answers?: xdsl.lineDiagnostic.Answers;
        faultType: xdsl.lineDiagnostic.FaultTypeEnum;
    }) => Promise<xdsl.lineDiagnostic.Diagnostic>;
    /**
     * changeProfile operations
     * Change the profile of the port
     */
    post(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile'): (params: {
        number: string;
        serviceName: string;
        dslamProfileId: number;
    }) => Promise<xdsl.Task>;
    /**
     * reset operations
     * Reset the port on the DSLAM
     */
    post(path: '/xdsl/{serviceName}/lines/{number}/dslamPort/reset'): (params: {
        number: string;
        serviceName: string;
    }) => Promise<xdsl.Task>;
    /**
     * blocIp operations
     * Change the status of the Bloc IP on modem
     */
    post(path: '/xdsl/{serviceName}/modem/blocIp'): (params: {
        serviceName: string;
        status: xdsl.ServiceStatusEnum;
    }) => Promise<xdsl.Task>;
    /**
     * callWaiting operations
     * Change the status of callWaiting on modem
     */
    post(path: '/xdsl/{serviceName}/modem/callWaiting'): (params: {
        serviceName: string;
        callWaiting: xdsl.ServiceStatusEnum;
    }) => Promise<xdsl.Task>;
    /**
     * comfortExchange operations
     * Replace access modem by last model, fees will be applied.
     */
    post(path: '/xdsl/{serviceName}/modem/comfortExchange'): (params: {
        serviceName: string;
        contactShipping?: string;
    }) => Promise<order.Order>;
    /**
     * contentSharing operations
     * Change the status of contentSharing on modem
     */
    post(path: '/xdsl/{serviceName}/modem/contentSharing'): (params: {
        serviceName: string;
        contentSharing: xdsl.ServiceStatusEnum;
    }) => Promise<xdsl.Task>;
    /**
     * duplicatePortMappingConfig operations
     * Remove all the current port mapping rules and set the same config as the access given in parameters
     */
    post(path: '/xdsl/{serviceName}/modem/duplicatePortMappingConfig'): (params: {
        serviceName: string;
        accessName: string;
    }) => Promise<void>;
    /**
     * firmware operations
     * Launch a task to install target firmware on modem
     */
    post(path: '/xdsl/{serviceName}/modem/firmware'): (params: {
        serviceName: string;
        firmware: string;
        todoDate?: string;
    }) => Promise<xdsl.Task>;
    /**
     * ftp operations
     * Change the status of the ftp service on modem
     */
    post(path: '/xdsl/{serviceName}/modem/ftp'): (params: {
        serviceName: string;
        ftp: xdsl.ServiceStatusEnum;
    }) => Promise<xdsl.Task>;
    /**
     * ipsecAlg operations
     * Change the status of the ipsec alg service on modem
     */
    post(path: '/xdsl/{serviceName}/modem/ipsecAlg'): (params: {
        serviceName: string;
        ipsecAlg: xdsl.ServiceStatusEnum;
    }) => Promise<xdsl.Task>;
    /**
     * List the xdsl.DHCPStaticAddress objects
     * Add a DHCP static lease
     */
    post(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses'): (params: {
        dhcpName: string;
        lanName: string;
        serviceName: string;
        IPAddress: string;
        MACAddress: string;
        name?: string;
    }) => Promise<xdsl.DHCPStaticAddress>;
    /**
     * List the xdsl.PortMapping objects
     * Add a port mapping
     */
    post(path: '/xdsl/{serviceName}/modem/portMappings'): (params: {
        serviceName: string;
        allowedRemoteIp?: string;
        description?: string;
        externalPortEnd?: number;
        externalPortStart: number;
        internalClient: string;
        internalPort: number;
        name: string;
        protocol: xdsl.xdslModemConfig.ProtocolTypeEnum;
    }) => Promise<xdsl.PortMapping>;
    /**
     * reboot operations
     * Reboot the modem
     */
    post(path: '/xdsl/{serviceName}/modem/reboot'): (params: {
        serviceName: string;
        todoDate?: string;
    }) => Promise<xdsl.Task>;
    /**
     * reconfigureVoip operations
     * Reconfigure voip line on modem
     */
    post(path: '/xdsl/{serviceName}/modem/reconfigureVoip'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * refreshConnectedDevices operations
     * Refresh the list of connected devices on the modem
     */
    post(path: '/xdsl/{serviceName}/modem/refreshConnectedDevices'): (params: {
        serviceName: string;
    }) => Promise<xdsl.Task>;
    /**
     * reset operations
     * Reset the modem to its default configuration
     */
    post(path: '/xdsl/{serviceName}/modem/reset'): (params: {
        serviceName: string;
        resetOvhConfig?: boolean;
    }) => Promise<xdsl.Task>;
    /**
     * resetPortMappingConfig operations
     * Remove all the current port mapping rules
     */
    post(path: '/xdsl/{serviceName}/modem/resetPortMappingConfig'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * retrieveInfo operations
     * get general Modem information
     */
    post(path: '/xdsl/{serviceName}/modem/retrieveInfo'): (params: {
        serviceName: string;
    }) => Promise<xdsl.AsyncTask<xdsl.ModemInfo>>;
    /**
     * sipAlg operations
     * Change the status of the sip alg service on modem
     */
    post(path: '/xdsl/{serviceName}/modem/sipAlg'): (params: {
        serviceName: string;
        sipAlg: xdsl.ServiceStatusEnum;
    }) => Promise<xdsl.Task>;
    /**
     * upnp operations
     * Change the status of the Upnp on modem
     */
    post(path: '/xdsl/{serviceName}/modem/upnp'): (params: {
        serviceName: string;
        upnp: xdsl.ServiceStatusEnum;
    }) => Promise<xdsl.Task>;
    /**
     * List the xdsl.MonitoringNotification objects
     * Add a notification
     */
    post(path: '/xdsl/{serviceName}/monitoringNotifications'): (params: {
        serviceName: string;
        allowIncident?: boolean;
        downThreshold?: number;
        email?: string;
        frequency: xdsl.monitoringNotifications.FrequencyEnum;
        phone?: string;
        smsAccount?: string;
        type: xdsl.monitoringNotifications.TypeEnum;
    }) => Promise<xdsl.MonitoringNotification>;
    /**
     * orderMeeting operations
     * Book a meeting and relaunch order
     */
    post(path: '/xdsl/{serviceName}/orderMeeting'): (params: {
        serviceName: string;
        endDate: string;
        startDate: string;
        uiCode: string;
    }) => Promise<void>;
    /**
     * requestPPPLoginMail operations
     * Renew PPP password and send the PPP login informations to the e-mail of the nicAdmin
     */
    post(path: '/xdsl/{serviceName}/requestPPPLoginMail'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * requestTotalDeconsolidation operations
     * Switch this access to total deconsolidation
     */
    post(path: '/xdsl/{serviceName}/requestTotalDeconsolidation'): (params: {
        serviceName: string;
        noPortability?: boolean;
        rio?: string;
    }) => Promise<xdsl.Task>;
    /**
     * resiliate operations
     * Resiliate the access
     */
    post(path: '/xdsl/{serviceName}/resiliate'): (params: {
        serviceName: string;
        resiliationDate?: string;
        resiliationSurvey: xdsl.ResiliationSurvey;
    }) => Promise<xdsl.ResiliationFollowUpDetail>;
    /**
     * searchOrderMeetings operations
     * Search for available line creation meeting time slots, for order only
     */
    post(path: '/xdsl/{serviceName}/searchOrderMeetings'): (params: {
        serviceName: string;
    }) => Promise<xdsl.AsyncTask<connectivity.eligibility.Meetings>>;
    /**
     * sendOrderToProvider operations
     * Unlock order in "waitingCustomer" status. It only concerns orders whose modem is sent before anything have been forwarded to our provider
     */
    post(path: '/xdsl/{serviceName}/sendOrderToProvider'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * archive operations
     * Delete the task in problem from the results
     */
    post(path: '/xdsl/{serviceName}/tasks/{id}/archive'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * updateInvalidOrMissingRio operations
     * Update RIO, or disable portability, for order in error because of missing or invalid RIO
     */
    post(path: '/xdsl/{serviceName}/updateInvalidOrMissingRio'): (params: {
        serviceName: string;
        relaunchWithoutPortability: boolean;
        rio?: string;
    }) => Promise<void>;
    /**
     * Get the active lines at given address
     * Get the active lines at given address
     */
    post(path: '/xdsl/eligibility/lines/active'): (params: {
        city: xdsl.eligibility.City;
        contactName: string;
        street: xdsl.eligibility.Street;
        streetNumber?: string;
    }) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
    /**
     * Get the inactive lines at given address
     * Get the inactive lines at given address
     */
    post(path: '/xdsl/eligibility/lines/inactive'): (params: {
        city: xdsl.eligibility.City;
        contactName?: string;
        street: xdsl.eligibility.Street;
        streetNumber?: string;
    }) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Line>>;
    /**
     * Get all buildings for a specific address
     * Get all buildings for a specific address
     */
    post(path: '/xdsl/eligibility/search/buildings'): (params: {
        streetCode: string;
        streetNumber: string;
    }) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.Building>>;
    /**
     * Get all localities linked to a zip code
     * Get all localities linked to a zip code
     */
    post(path: '/xdsl/eligibility/search/cities'): (params: {
        zipCode: string;
    }) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.City>>;
    /**
     * Get all street linked to a locality
     * Get all street linked to a locality
     */
    post(path: '/xdsl/eligibility/search/fiberStreets'): (params: {
        inseeCode: string;
    }) => Promise<xdsl.AsyncTaskArray<xdsl.eligibility.FiberStreet>>;
    /**
     * Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)
     * Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)
     */
    post(path: '/xdsl/eligibility/search/streetNumbers'): (params: {
        streetCode: string;
    }) => Promise<xdsl.AsyncTaskArray<string>>;
    /**
     * Do an eligibility for an address, if no line exist
     * Do an eligibility for an address, if no line exist
     */
    post(path: '/xdsl/eligibility/test/address'): (params: {
        address: xdsl.eligibility.Address;
    }) => Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
    /**
     * Perform a fiber eligibility for a building
     * Perform a fiber eligibility for a building
     */
    post(path: '/xdsl/eligibility/test/fiber/building'): (params: {
        building: string;
    }) => Promise<xdsl.AsyncTask<xdsl.eligibility.FiberEligibility>>;
    /**
     * Do an eligibility for a line
     * Do an eligibility for a line
     */
    post(path: '/xdsl/eligibility/test/line'): (params: {
        lineNumber: string;
        lineStatus: xdsl.eligibility.LandlineStatusEnum;
    }) => Promise<xdsl.AsyncTask<xdsl.eligibility.Eligibility>>;
    /**
     * changePassword operations
     * Change the email password
     */
    post(path: '/xdsl/email/pro/{email}/changePassword'): (params: {
        email: string;
        password: string;
    }) => Promise<xdsl.email.pro.Task>;
    /**
     * replace operations
     * Replace the modem by its spare
     */
    post(path: '/xdsl/spare/{spare}/replace'): (params: {
        spare: string;
        domain: string;
    }) => Promise<void>;
    /**
     * returnMerchandise operations
     * Return the broken equipment in instantRefund
     */
    post(path: '/xdsl/spare/{spare}/returnMerchandise'): (params: {
        spare: string;
    }) => Promise<void>;
    /**
     * List the xdsl.TemplateModem objects
     * Create new Modem Template from existing modem
     */
    post(path: '/xdsl/templateModem'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<xdsl.TemplateModem>;
    /**
     * Informations about an IP address
     * Stop renewing this extra IPv4 option
     */
    delete(path: '/xdsl/{serviceName}/ips/{ip}'): (params: {
        ip: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * DHCP Static Address
     * Delete this port mapping
     */
    delete(path: '/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}'): (params: {
        MACAddress: string;
        dhcpName: string;
        lanName: string;
        serviceName: string;
    }) => Promise<xdsl.Task>;
    /**
     * Port Mappings
     * Delete this port mapping
     */
    delete(path: '/xdsl/{serviceName}/modem/portMappings/{name}'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<xdsl.Task>;
    /**
     * Defines where and how the notifications will be sent
     * Delete this notification
     */
    delete(path: '/xdsl/{serviceName}/monitoringNotifications/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Current Return Merchandise Authorisation
     * Cancel the rma
     */
    delete(path: '/xdsl/{serviceName}/rma/{id}'): (params: {
        id: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * XDSL Email Pro
     * Delete the email
     */
    delete(path: '/xdsl/email/pro/{email}'): (params: {
        email: string;
    }) => Promise<void>;
    /**
     * Spare properties
     * Delete the spare as if it was not belonging to OVH anymore
     */
    delete(path: '/xdsl/spare/{spare}'): (params: {
        spare: string;
    }) => Promise<void>;
    /**
     * Modem Template
     * Delete this Modem Template
     */
    delete(path: '/xdsl/templateModem/{name}'): (params: {
        name: string;
    }) => Promise<void>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
declare type emailproObjectStateEnum = email.pro.ObjectStateEnum;
