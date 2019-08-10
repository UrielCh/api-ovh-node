import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /telephony Models
 */
export namespace complexType {
    // interface fullName: complexType.Range.Range
    export interface Range<T> {
        from: T;
        to: T;
    }
    // interface fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
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
    // type fullname: coreTypes.TimeZoneEnum
    export type TimeZoneEnum = "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis"
}
export namespace nichandle {
    // type fullname: nichandle.GenderEnum
    export type GenderEnum = "female" | "male"
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
    // interface fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
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
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}
export namespace spare {
    export namespace telephony {
        // interface fullName: spare.telephony.TelephonySpare.TelephonySpare
        export interface TelephonySpare {
            brand: string;
            macAddress: string;
            protocol: telephonyProtocolEnum;
        }
    }
}
export namespace telephony {
    // interface fullName: telephony.AbbreviatedNumber.AbbreviatedNumber
    export interface AbbreviatedNumber {
        abbreviatedNumber: number;
        destinationNumber: string;
        name: string;
        surname: string;
    }
    // interface fullName: telephony.AbbreviatedNumberGroup.AbbreviatedNumberGroup
    export interface AbbreviatedNumberGroup {
        abbreviatedNumber: number;
        destinationNumber: string;
        name: string;
        surname: string;
    }
    // interface fullName: telephony.AccessoryOffer.AccessoryOffer
    export interface AccessoryOffer {
        description?: string;
        name: string;
        price: orderPrice;
        url?: string;
    }
    // type fullname: telephony.AntihackActionEnum
    export type AntihackActionEnum = "AUTHORIZE_ALL" | "AUTHORIZE_ONE_NUMBER" | "BLOCK_ALL" | "BLOCK_ONE_NUMBER"
    // interface fullName: telephony.BannerAccess.BannerAccess
    export interface BannerAccess {
        creationDate: string;
        id: number;
        url: string;
    }
    // type fullname: telephony.BillDocument
    export type BillDocument = "csv" | "pdf" | "received.csv" | "xml"
    // type fullname: telephony.BillStatusEnum
    export type BillStatusEnum = "doing" | "done" | "error" | "todo"
    // interface fullName: telephony.BillingAccount.BillingAccount
    export interface BillingAccount {
        allowedOutplan: orderPrice;
        billingAccount: string;
        creditThreshold: orderPrice;
        currentOutplan: orderPrice;
        description: string;
        hiddenExternalNumber: boolean;
        overrideDisplayedNumber: boolean;
        securityDeposit: orderPrice;
        status: telephony.BillingAccountStatusEnum;
        trusted: boolean;
    }
    // type fullname: telephony.BillingAccountStatusEnum
    export type BillingAccountStatusEnum = "closed" | "deleted" | "enabled" | "expired"
    // interface fullName: telephony.CallDiagnosticCallQuality.CallDiagnosticCallQuality
    export interface CallDiagnosticCallQuality {
        callId: string;
        codec: telephony.CallDiagnosticCodecEnum;
        flowId: number;
        ipDst: string;
        ipSrc: string;
        maxDelay: number;
        maxJitter: number;
        mos: number;
        packets: number;
        portDst: number;
        portSrc: number;
        rtpLost: number;
        timestamp: string;
    }
    // type fullname: telephony.CallDiagnosticCauseEnum
    export type CallDiagnosticCauseEnum = "1" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "1a" | "1b" | "1c" | "1d" | "1e" | "1f" | "2" | "22" | "26" | "27" | "28" | "29" | "2a" | "2b" | "2c" | "2e" | "2f" | "3" | "30" | "31" | "32" | "33" | "34" | "35" | "37" | "39" | "3a" | "3e" | "3f" | "4" | "41" | "42" | "45" | "46" | "4f" | "5" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "5a" | "5b" | "5f" | "6" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "6e" | "6f" | "7" | "7f" | "8" | "9"
    // interface fullName: telephony.CallDiagnosticCdrs.CallDiagnosticCdrs
    export interface CallDiagnosticCdrs {
        basic: telephony.CallDiagnosticCdrsBasic;
        timestamp: string;
    }
    // interface fullName: telephony.CallDiagnosticCdrsBasic.CallDiagnosticCdrsBasic
    export interface CallDiagnosticCdrsBasic {
        cause: telephony.CallDiagnosticCauseEnum;
        causeDescription: string;
        releaseLocation: telephony.ReleaseLocationEnum;
    }
    // type fullname: telephony.CallDiagnosticCodecEnum
    export type CallDiagnosticCodecEnum = "G722" | "G729" | "PCMA" | "PCMU"
    // interface fullName: telephony.CallDiagnosticReporting.CallDiagnosticReporting
    export interface CallDiagnosticReporting {
        message: string;
    }
    // interface fullName: telephony.CallDiagnosticSip.CallDiagnosticSip
    export interface CallDiagnosticSip {
        headers: string;
        requestMethod?: string;
        response?: string;
        timestamp: string;
    }
    // type fullname: telephony.CallDiagnosticStatusEnum
    export type CallDiagnosticStatusEnum = "doing" | "done" | "error" | "todo"
    // interface fullName: telephony.CallDiagnostics.CallDiagnostics
    export interface CallDiagnostics {
        callQuality: telephony.CallDiagnosticCallQuality[];
        cdrs: telephony.CallDiagnosticCdrs[];
        reporting: telephony.CallDiagnosticReporting[];
        sip: telephony.CallDiagnosticSip[];
        status: telephony.CallDiagnosticStatusEnum;
    }
    // interface fullName: telephony.CallsGenerated.CallsGenerated
    export interface CallsGenerated {
        answerDatetime?: string;
        application?: string;
        applicationResult?: string;
        billingNumber: string;
        callCreatedDatetime?: string;
        callDuration?: number;
        callee?: string;
        caller?: string;
        dtmf?: string;
        hangupCause?: telephony.CallsGeneratorHangupCauseEnum;
        hangupDatetime?: string;
        identifier: string;
        transferFrom?: string;
        uuid: string;
    }
    // type fullname: telephony.CallsGeneratorDialplanEnum
    export type CallsGeneratorDialplanEnum = "PlayAudioFile" | "PlayAudioFileAndTransferCall" | "ReadText" | "RequestAppointmentConfirmation" | "RequestAppointmentConfirmationWithTransfer"
    // type fullname: telephony.CallsGeneratorHangupCauseEnum
    export type CallsGeneratorHangupCauseEnum = "AccessInformationDiscarded" | "AllottedTimeout" | "AttendedTransfer" | "BlindTransfer" | "CallAwardedbeing" | "ChannelTypeNotImplemented" | "ChannelUnacceptable" | "CodeSip403BearerCapabilityNotAuthorized" | "CodeSip403IncomingCallsBarred" | "CodeSip403OutgoingCallsBarred" | "CodeSip404NoRouteToDestination" | "CodeSip404NoRouteToSpecifiedTransitNetwork" | "CodeSip404UnallocatedNumber" | "CodeSip408NoUserResponding" | "CodeSip410NumberChanged" | "CodeSip410RedirectionToNewDestination" | "CodeSip480NoAnswerFromUser" | "CodeSip480NormalUnspecified" | "CodeSip480SubscriberAbsent" | "CodeSip483ExchangeRoutingError" | "CodeSip484InvalidNumberFormatAddressIncomplete" | "CodeSip486UserBusy" | "CodeSip487OriginatorCancel" | "CodeSip488IncompatibleDestination" | "CodeSip488bearerCapabilityNotImplemented" | "CodeSip501FacilitiesRejected" | "CodeSip501RequestedFacilityNotImplemented" | "CodeSip501ServiceOrOptionNotImplementedUnspecified" | "CodeSip502DestinationOutOfOrder" | "CodeSip503BearerCapabilityNotPresentlyAvailable" | "CodeSip503NetworkOutOfOrder" | "CodeSip503NoCircuitChannelAvailable" | "CodeSip503RequestedCircuitOrChannelNotAvailable" | "CodeSip503SwitchingEquipmentCongestion" | "CodeSip503TemporaryFailure" | "CodeSip504RecoveryOnTimerExpiry" | "CodeSip603CallRejected" | "Crash" | "GatewayDown" | "InformationElementOrParameterNonExistentOrNotImplemented" | "InterworkingUnspecified" | "InvalidCallReferenceValue" | "InvalidInformationElementContents" | "InvalidMessageUnspecified" | "LoseRace" | "ManagerRequest" | "MandatoryInformationElementIsMissing" | "MediaTimeout" | "MessageNotCompatibleWithCallState" | "MessageNotCompatibleWithCallStateOrMessageTypeNonExistentOrNotImplemented" | "MessageTypeNonExistentOrNotImplemented" | "NormalCallClearing" | "ParameterNonExistentOrNotImplementedPassedOnNationalUse" | "PickedOff" | "PreEmpted" | "ProgressTimeout" | "ProtocolErrorUnspecified" | "RequestedFacilityNotSubscribed" | "ResponseToStatusInquiry" | "ServiceOrOptionNotAvailableUnspecified" | "SystemShutdown" | "UnknownOrCallUnfinished" | "UnspecifiedNoOtherCauseCodesApplicable" | "UserChallenge" | "UserNotRegistered"
    // interface fullName: telephony.CarrierSip.CarrierSip
    export interface CarrierSip {
        description: string;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // interface fullName: telephony.CarrierSipCustomerEndpoint.CarrierSipCustomerEndpoint
    export interface CarrierSipCustomerEndpoint {
        id: number;
        ip: string;
        port: number;
        priority: number;
        protocol: telephony.CarrierSipEndpointProtocolEnum;
        weight: number;
    }
    // interface fullName: telephony.CarrierSipDetails.CarrierSipDetails
    export interface CarrierSipDetails {
        description: string;
        maxCallsPerSecond: number;
        maxConcurrentCalls: number;
    }
    // type fullname: telephony.CarrierSipEndpointProtocolEnum
    export type CarrierSipEndpointProtocolEnum = "tcp" | "tls" | "udp"
    // interface fullName: telephony.City.City
    export interface City {
        administrationCode?: string;
        name: string;
        zipCode: string;
    }
    // interface fullName: telephony.Click2CallUser.Click2CallUser
    export interface Click2CallUser {
        creationDateTime: string;
        id: number;
        login: string;
    }
    // interface fullName: telephony.Conference.Conference
    export interface Conference {
        description: string;
        offers: string[];
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // interface fullName: telephony.ConferenceHistory.ConferenceHistory
    export interface ConferenceHistory {
        countConnections: number;
        countParticipants: number;
        dateBegin: string;
        dateEnd: string;
        duration: number;
        events: telephony.ConferenceHistoryEvent[];
        id: number;
        recordUrl?: string;
    }
    // interface fullName: telephony.ConferenceHistoryEvent.ConferenceHistoryEvent
    export interface ConferenceHistoryEvent {
        callerid: string;
        date: string;
        type: string;
    }
    // interface fullName: telephony.ConferenceInformations.ConferenceInformations
    export interface ConferenceInformations {
        dateStart: string;
        locked: boolean;
        membersCount: number;
    }
    // type fullname: telephony.ConferenceLanguageEnum
    export type ConferenceLanguageEnum = "de" | "en" | "es" | "fr" | "it"
    // interface fullName: telephony.ConferenceParticipants.ConferenceParticipants
    export interface ConferenceParticipants {
        arrivalDateTime: string;
        callerName: string;
        callerNumber: string;
        energy: number;
        floor: boolean;
        hear: boolean;
        id: number;
        speak: boolean;
        talking: boolean;
    }
    // interface fullName: telephony.ConferenceProperties.ConferenceProperties
    export interface ConferenceProperties {
        announceFile: boolean;
        announceFilename?: string;
        announceSoundId?: number;
        anonymousRejection: boolean;
        enterMuted: boolean;
        eventsChannel: string;
        language: telephony.ConferenceLanguageEnum;
        pin: string;
        recordStatus: boolean;
        reportEmail?: string;
        reportStatus: telephony.ConferenceReportStatusEnum;
        whiteLabelReport: boolean;
    }
    // type fullname: telephony.ConferenceReportStatusEnum
    export type ConferenceReportStatusEnum = "customer" | "none" | "other"
    // interface fullName: telephony.ConferenceWebAccess.ConferenceWebAccess
    export interface ConferenceWebAccess {
        id: number;
        type: telephony.ConferenceWebAccessTypeEnum;
        url: string;
    }
    // type fullname: telephony.ConferenceWebAccessTypeEnum
    export type ConferenceWebAccessTypeEnum = "read" | "write"
    // interface fullName: telephony.ConsumptionThreshold.ConsumptionThreshold
    export interface ConsumptionThreshold {
        block: telephony.OutplanNotificationBlockEnum;
        id: number;
        notifyEmail: string;
        percentage: number;
    }
    // interface fullName: telephony.Contact.Contact
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
    // type fullname: telephony.ContactsExportFormatsEnum
    export type ContactsExportFormatsEnum = "csv"
    // interface fullName: telephony.DatetimeAndIpvalue.DatetimeAndIpvalue
    export interface DatetimeAndIpvalue {
        datetime: string;
        ip?: string;
    }
    // interface fullName: telephony.Ddi.Ddi
    export interface Ddi {
        description: string;
        destination?: string;
        featureType: telephony.TypeEnum;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // interface fullName: telephony.DefaultSipDomains.DefaultSipDomains
    export interface DefaultSipDomains {
        country: telephony.NumberCountryEnum;
        currentDomain: string;
        list: string[];
        productType: telephony.SipDomainProductTypeEnum;
    }
    // interface fullName: telephony.DetailedRateCodeInformation.DetailedRateCodeInformation
    export interface DetailedRateCodeInformation {
        cancelLimitDatetime?: string;
        effectiveDatetime?: string;
        pricePerCallWithoutTax: orderPrice;
        pricePerMinuteWithoutTax: orderPrice;
        rateCode: string;
        repaymentPricePerCallWithoutTax: orderPrice;
        repaymentPricePerMinuteWithoutTax: orderPrice;
        updateRateCodePriceWithoutTax?: orderPrice;
    }
    // interface fullName: telephony.DiagnosticReport.DiagnosticReport
    export interface DiagnosticReport {
        callId: string;
        category: telephony.DiagnosticReportCategoryEnum;
        datetime: string;
        description: string;
        level: telephony.DiagnosticReportLevelEnum;
        name: string;
        report: string;
    }
    // type fullname: telephony.DiagnosticReportCategoryEnum
    export type DiagnosticReportCategoryEnum = "dpi" | "signal"
    // type fullname: telephony.DiagnosticReportIndexEnum
    export type DiagnosticReportIndexEnum = "2 days ago" | "3 days ago" | "today" | "yesterday"
    // type fullname: telephony.DiagnosticReportLevelEnum
    export type DiagnosticReportLevelEnum = "debug" | "error" | "info" | "warn"
    // interface fullName: telephony.DirectoryHeadingPJ.DirectoryHeadingPJ
    export interface DirectoryHeadingPJ {
        apeCode: string;
        apeDescription: string;
        directoryServiceCode: number;
        directoryServiceDescription: string;
        notification: string;
    }
    // interface fullName: telephony.DirectoryInfo.DirectoryInfo
    export interface DirectoryInfo {
        PJSocialNomination: string;
        address: string;
        addressExtra: string;
        ape: string;
        areaCode: number;
        birthDate?: string;
        cedex: string;
        city: string;
        country: string;
        directoryServiceCode: string;
        displayFirstName: boolean;
        displayMarketingDirectory: boolean;
        displayOnlyCity: boolean;
        displaySearchReverse: boolean;
        displayUniversalDirectory: boolean;
        email: string;
        firstName: string;
        gender?: nichandle.GenderEnum;
        inseeCode: number;
        legalForm: string;
        lineDescription: string;
        modificationDate: string;
        modificationType: string;
        name: string;
        number: string;
        occupation: string;
        postBox: string;
        postCode: string;
        receivePJDirectory: boolean;
        siret: string;
        socialNomination: string;
        socialNominationExtra: string;
        status: string;
        urbanDistrict: string;
        wayName: string;
        wayNumber: string;
        wayNumberExtra: string;
        wayType: string;
    }
    // interface fullName: telephony.DirectoryWayType.DirectoryWayType
    export interface DirectoryWayType {
        abbreviatedName: string;
        wayName: string;
    }
    // interface fullName: telephony.EasyHunting.EasyHunting
    export interface EasyHunting {
        anonymousRejection: boolean;
        description: string;
        featureType: telephony.TypeEnum;
        isCCS: boolean;
        maxWaitTime: number;
        queueSize: number;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
        showCallerNumber: telephony.OvhPabxDialplanNumberPresentationEnum;
        statusIvrEnabled: boolean;
        strategy: telephony.OvhPabxHuntingQueueStrategyEnum;
        toneOnClosing?: number;
        toneOnHold?: number;
        toneOnOpening?: number;
        voicemail?: string;
    }
    // interface fullName: telephony.EasyHuntingScreenListsConditions.EasyHuntingScreenListsConditions
    export interface EasyHuntingScreenListsConditions {
        callerIdNumber?: string;
        conditionId: number;
        destinationNumber?: string;
        screenListType: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum;
    }
    // interface fullName: telephony.EasyHuntingScreenListsConditionsSettings.EasyHuntingScreenListsConditionsSettings
    export interface EasyHuntingScreenListsConditionsSettings {
        status: telephony.EasyHuntingScreenListsConditionsStatusEnum;
    }
    // type fullname: telephony.EasyHuntingScreenListsConditionsStatusEnum
    export type EasyHuntingScreenListsConditionsStatusEnum = "disabled" | "incomingBlackList" | "incomingWhiteList"
    // interface fullName: telephony.EasyHuntingTimeConditions.EasyHuntingTimeConditions
    export interface EasyHuntingTimeConditions {
        conditionId: number;
        policy: telephony.TimeConditionsPolicyEnum;
        timeFrom: string;
        timeTo: string;
        weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum;
    }
    // interface fullName: telephony.EasyHuntingTimeConditionsSettings.EasyHuntingTimeConditionsSettings
    export interface EasyHuntingTimeConditionsSettings {
        enable: boolean;
        slot1Number?: string;
        slot1Type?: telephony.TimeConditionsSettingsForwardTypeEnum;
        slot2Number?: string;
        slot2Type?: telephony.TimeConditionsSettingsForwardTypeEnum;
        slot3Number?: string;
        slot3Type?: telephony.TimeConditionsSettingsForwardTypeEnum;
        unavailableNumber?: string;
        unavailableType?: telephony.TimeConditionsSettingsForwardTypeEnum;
    }
    // interface fullName: telephony.EasyMiniPabxHuntingAgent.EasyMiniPabxHuntingAgent
    export interface EasyMiniPabxHuntingAgent {
        agentNumber: string;
        logged: boolean;
        noReplyTimer: number;
        position: number;
    }
    // type fullname: telephony.EasyMiniPabxHuntingPatternEnum
    export type EasyMiniPabxHuntingPatternEnum = "all-at-once" | "cumulated" | "sequential"
    // type fullname: telephony.EasyMiniPabxHuntingStrategyEnum
    export type EasyMiniPabxHuntingStrategyEnum = "cyclic" | "leastIdleSinceLastCall" | "linear" | "mostIdleSinceLastCall" | "mostIdleSinceLogging" | "parallel" | "random"
    // interface fullName: telephony.EasyPabx.EasyPabx
    export interface EasyPabx {
        description: string;
        featureType: telephony.TypeEnum;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // interface fullName: telephony.EasyPabxHunting.EasyPabxHunting
    export interface EasyPabxHunting {
        anonymousCallRejection: boolean;
        name: string;
        noReplyTimer: number;
        numberOfCalls: number;
        pattern: telephony.EasyMiniPabxHuntingPatternEnum;
        strategy: telephony.EasyMiniPabxHuntingStrategyEnum;
        toneOnClosure: boolean;
        toneOnClosureSoundId?: number;
        toneOnHold: boolean;
        toneOnHoldSoundId?: number;
        toneRingback: boolean;
        toneRingbackSoundId?: number;
        voicemail?: string;
    }
    // interface fullName: telephony.EntrepriseNumberInformations.EntrepriseNumberInformations
    export interface EntrepriseNumberInformations {
        address?: string;
        ape?: string;
        brand?: string;
        entrepriseNumber: string;
        isValid: boolean;
        name: string;
        siren?: string;
    }
    // interface fullName: telephony.EntrepriseNumberInformationsTask.EntrepriseNumberInformationsTask
    export interface EntrepriseNumberInformationsTask {
        informations: telephony.EntrepriseNumberInformations;
        status: telephony.TaskStatusEnum;
    }
    // interface fullName: telephony.Event.Event
    export interface Event {
        calledIdentifier: string;
        callingIdentifier: string;
        dateTime: string;
        direction: telephony.RealtimeEventDirection;
        duration: number;
        eventType: telephony.RealtimeEventType;
        id: string;
        protocol: telephony.RealtimeEventProtocol;
    }
    // interface fullName: telephony.EventCallback.EventCallback
    export interface EventCallback {
        emailError?: string;
        url?: string;
    }
    // interface fullName: telephony.EventToken.EventToken
    export interface EventToken {
        token: string;
    }
    // interface fullName: telephony.Fax.Fax
    export interface Fax {
        description: string;
        notifications?: telephony.LineNotificationsOptions;
        offers: string[];
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // interface fullName: telephony.FaxCampaign.FaxCampaign
    export interface FaxCampaign {
        countFailed: number;
        countSuccess: number;
        countTotal: number;
        dateEnd?: string;
        dateStart?: string;
        id: number;
        name: string;
        reference: string;
        status: string;
    }
    // interface fullName: telephony.FaxCampaignDetail.FaxCampaignDetail
    export interface FaxCampaignDetail {
        failed: string[];
        success: string[];
        todo: string[];
    }
    // type fullname: telephony.FaxCampaignRecipientsTypeEnum
    export type FaxCampaignRecipientsTypeEnum = "document" | "list"
    // type fullname: telephony.FaxCampaignSendTypeEnum
    export type FaxCampaignSendTypeEnum = "automatic" | "manual" | "scheduled"
    // interface fullName: telephony.FaxConsumption.FaxConsumption
    export interface FaxConsumption {
        called?: string;
        calling?: string;
        consumptionId: number;
        creationDatetime: string;
        pages: number;
        priceWithoutTax: orderPrice;
        wayType: telephony.FaxConsumptionWayTypeEnum;
    }
    // type fullname: telephony.FaxConsumptionWayTypeEnum
    export type FaxConsumptionWayTypeEnum = "received" | "sent"
    // type fullname: telephony.FaxMailFormatEnum
    export type FaxMailFormatEnum = "html" | "text"
    // interface fullName: telephony.FaxProperties.FaxProperties
    export interface FaxProperties {
        callNumber: string;
        countryCode: string;
        faxMaxCall: telephony.FaxSendingTries;
        faxQuality: telephony.FaxQualityEnum;
        faxTagLine: string;
        fromEmail: string;
        fromName: string;
        mailFormat: telephony.FaxMailFormatEnum;
        receiver: string;
        redirectionEmail: string[];
        rejectAnonymous: boolean;
        sender: string;
    }
    // type fullname: telephony.FaxQualityEnum
    export type FaxQualityEnum = "best" | "high" | "normal"
    // interface fullName: telephony.FaxScreen.FaxScreen
    export interface FaxScreen {
        blacklistedNumbers?: string[];
        blacklistedTSI?: string[];
        callNumber: string;
        countryCode: string;
        filteringList?: telephony.FaxScreenListTypeEnum;
        serviceName: string;
        whitelistedNumbers?: string[];
        whitelistedTSI?: string[];
    }
    // type fullname: telephony.FaxScreenListTypeEnum
    export type FaxScreenListTypeEnum = "" | "blacklist" | "no" | "whitelist"
    // type fullname: telephony.FaxSendingTries
    export type FaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    // interface fullName: telephony.FunctionKey.FunctionKey
    export interface FunctionKey {
        default?: string;
        function?: string;
        keyNum: number;
        label: string;
        parameter?: string;
        type: string;
    }
    // interface fullName: telephony.GenericScreen.GenericScreen
    export interface GenericScreen {
        serviceName: string;
    }
    // interface fullName: telephony.HardwareOffer.HardwareOffer
    export interface HardwareOffer {
        description?: string;
        name: string;
        price: orderPrice;
        url?: string;
    }
    // interface fullName: telephony.HistoryConsumption.HistoryConsumption
    export interface HistoryConsumption {
        date: string;
        price: orderPrice;
        priceOutplan: orderPrice;
        status: telephony.BillStatusEnum;
    }
    // interface fullName: telephony.HistoryRepaymentConsumption.HistoryRepaymentConsumption
    export interface HistoryRepaymentConsumption {
        billingNumber: string;
        date: string;
        price: orderPrice;
        status: telephony.BillStatusEnum;
    }
    // interface fullName: telephony.HistoryTollfreeConsumption.HistoryTollfreeConsumption
    export interface HistoryTollfreeConsumption {
        date: string;
        price: orderPrice;
        status: telephony.BillStatusEnum;
    }
    // interface fullName: telephony.Line.Line
    export interface Line {
        canChangePassword: boolean;
        description: string;
        getPublicOffer: telephony.LineOffer;
        infrastructure: string;
        isAttachedToOtherLinesPhone: boolean;
        notifications?: telephony.LineNotificationsOptions;
        offers: string[];
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
        simultaneousLines: number;
    }
    // type fullname: telephony.LineBlockingMode
    export type LineBlockingMode = "both" | "incoming" | "outgoing"
    // type fullname: telephony.LineNotificationsLogsFrequencyEnum
    export type LineNotificationsLogsFrequencyEnum = "Never" | "Once a day" | "Twice a day"
    // interface fullName: telephony.LineNotificationsLogsOptions.LineNotificationsLogsOptions
    export interface LineNotificationsLogsOptions {
        email?: string;
        frequency?: telephony.LineNotificationsLogsFrequencyEnum;
        sendIfNull?: boolean;
    }
    // interface fullName: telephony.LineNotificationsOptions.LineNotificationsOptions
    export interface LineNotificationsOptions {
        logs?: telephony.LineNotificationsLogsOptions;
    }
    // interface fullName: telephony.LineOffer.LineOffer
    export interface LineOffer {
        description: string;
        name: string;
        price?: orderPrice;
    }
    // interface fullName: telephony.LineOffersAndContracts.LineOffersAndContracts
    export interface LineOffersAndContracts {
        contracts: order.Contract[];
        offers: telephony.LineOffer[];
    }
    // type fullname: telephony.LineOptionForwardNatureTypeEnum
    export type LineOptionForwardNatureTypeEnum = "fax" | "number" | "voicemail"
    // type fullname: telephony.LineOptionIntercomEnum
    export type LineOptionIntercomEnum = "no" | "prefixed" | "yes"
    // type fullname: telephony.LineOptionLanguageEnum
    export type LineOptionLanguageEnum = "Dutch" | "English (UK)" | "French" | "French (BE)" | "German" | "Italian" | "Spanish"
    // interface fullName: telephony.LineOptions.LineOptions
    export interface LineOptions {
        absentSubscriber: boolean;
        anonymousCallRejection: boolean;
        callRestrictionIncoming: boolean;
        callRestrictionOutgoing: boolean;
        callWaiting: boolean;
        codecs: string;
        defaultVoicemail: string;
        displayNumber: string;
        doNotDisturb: boolean;
        domain: string;
        forwardBackup: boolean;
        forwardBackupNature: telephony.LineOptionForwardNatureTypeEnum;
        forwardBackupNumber: string;
        forwardBusy: boolean;
        forwardBusyNature: telephony.LineOptionForwardNatureTypeEnum;
        forwardBusyNumber: string;
        forwardNoReply: boolean;
        forwardNoReplyDelay: number;
        forwardNoReplyNature: telephony.LineOptionForwardNatureTypeEnum;
        forwardNoReplyNumber: string;
        forwardUnconditional: boolean;
        forwardUnconditionalNature: telephony.LineOptionForwardNatureTypeEnum;
        forwardUnconditionalNumber: string;
        identificationRestriction: boolean;
        intercom: telephony.LineOptionIntercomEnum;
        ipRestrictions: string[];
        language: telephony.LineOptionLanguageEnum;
        lockOutCall: boolean;
        lockOutCallPassword?: string;
        recordOutgoingCallsBeta: boolean;
        toneOnCallWaitingSoundId?: number;
        toneOnHoldSoundId?: number;
        toneRingbackSoundId?: number;
        voicemailExternalNumber: string;
        voicemailInternalNumber: string;
    }
    // interface fullName: telephony.LinePhone.LinePhone
    export interface LinePhone {
        brand: string;
        description: string;
        maxline: number;
        price: orderPrice;
        protocol: telephonyProtocolEnum;
    }
    // interface fullName: telephony.LinePhoneAssociable.LinePhoneAssociable
    export interface LinePhoneAssociable {
        associatedLines: telephony.LinePhoneAssociableConfiguredLines[];
        brand: string;
        maxLines: number;
        protocol: telephonyProtocolEnum;
    }
    // interface fullName: telephony.LinePhoneAssociableConfiguredLines.LinePhoneAssociableConfiguredLines
    export interface LinePhoneAssociableConfiguredLines {
        description: string;
        serviceName: string;
    }
    // type fullname: telephony.LineStatisticsTypeEnum
    export type LineStatisticsTypeEnum = "maxDelay" | "maxJitter" | "rtpMos" | "sumRtpLost"
    // interface fullName: telephony.MiniPabx.MiniPabx
    export interface MiniPabx {
        description: string;
        featureType: telephony.TypeEnum;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // interface fullName: telephony.MiniPabxHunting.MiniPabxHunting
    export interface MiniPabxHunting {
        anonymousCallRejection: boolean;
        name: string;
        numberOfCalls: number;
        onHoldTimer: number;
        pattern: telephony.EasyMiniPabxHuntingPatternEnum;
        queueSize: number;
        strategy: telephony.EasyMiniPabxHuntingStrategyEnum;
        toneOnClosure: boolean;
        toneOnClosureSoundId?: number;
        toneOnHold: boolean;
        toneOnHoldSoundId?: number;
        toneRingback: boolean;
        toneRingbackSoundId?: number;
    }
    // interface fullName: telephony.Number.Number
    export interface Number {
        description: string;
        featureType: telephony.TypeEnum;
        partOfPool?: string;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // type fullname: telephony.NumberCountryCodeEnum
    export type NumberCountryCodeEnum = 32 | 33 | 34 | 39 | 41 | 44 | 49
    // type fullname: telephony.NumberCountryEnum
    export type NumberCountryEnum = "be" | "ch" | "de" | "es" | "fr" | "gb" | "it" | "uk"
    // interface fullName: telephony.NumberDetailedZone.NumberDetailedZone
    export interface NumberDetailedZone {
        askedCity?: string;
        city: string;
        country: telephony.NumberCountryEnum;
        internationalNumber: string;
        matchingCriteria?: telephony.NumberDetailedZoneMatchingCriteriaEnum;
        number: string;
        prefix: telephony.NumberCountryCodeEnum;
        type: telephony.NumberDetailedZoneTypeEnum;
        zipCode?: string;
        zneList: string[];
    }
    // type fullname: telephony.NumberDetailedZoneMatchingCriteriaEnum
    export type NumberDetailedZoneMatchingCriteriaEnum = "city" | "internationalNumber" | "number" | "zne"
    // type fullname: telephony.NumberDetailedZoneTypeEnum
    export type NumberDetailedZoneTypeEnum = "geographic" | "non-geographic" | "special"
    // type fullname: telephony.NumberTypeEnum
    export type NumberTypeEnum = "geographic" | "nogeographic" | "special"
    // interface fullName: telephony.OfferChange.OfferChange
    export interface OfferChange {
        offer: string;
    }
    // interface fullName: telephony.OfferTask.OfferTask
    export interface OfferTask {
        action: telephony.OfferTaskActionEnum;
        executionDate: string;
        status: telephony.TaskStatusEnum;
        taskId: number;
        type: telephony.OfferTaskTypeEnum;
    }
    // type fullname: telephony.OfferTaskActionEnum
    export type OfferTaskActionEnum = "convertToAlias" | "convertToSip" | "migrateToNewVoicemail" | "removeSimltaneousLines" | "switchServer" | "termination" | "updateFirmware" | "upgrade"
    // type fullname: telephony.OfferTaskTypeEnum
    export type OfferTaskTypeEnum = "line" | "offer" | "option" | "phone"
    // type fullname: telephony.OutplanNotificationBlockEnum
    export type OutplanNotificationBlockEnum = "blockAllCalls" | "blockIncomingCalls" | "blockOutgoingCalls" | "none"
    // interface fullName: telephony.OvhPabx.OvhPabx
    export interface OvhPabx {
        description: string;
        featureType: telephony.TypeEnum;
        isCCS: boolean;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // interface fullName: telephony.OvhPabxCustomStatus.OvhPabxCustomStatus
    export interface OvhPabxCustomStatus {
        color?: string;
        description?: string;
        id: number;
        name: string;
    }
    // interface fullName: telephony.OvhPabxDialplan.OvhPabxDialplan
    export interface OvhPabxDialplan {
        anonymousRejection: boolean;
        dialplanId: number;
        lastUpdate: string;
        name: string;
        showCallerNumber: telephony.OvhPabxDialplanNumberPresentationEnum;
        transferTimeout: number;
    }
    // interface fullName: telephony.OvhPabxDialplanExtension.OvhPabxDialplanExtension
    export interface OvhPabxDialplanExtension {
        enabled: boolean;
        extensionId: number;
        position: number;
        schedulerCategory?: telephony.SchedulerCategoryEnum;
        screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum;
    }
    // interface fullName: telephony.OvhPabxDialplanExtensionConditionScreenList.OvhPabxDialplanExtensionConditionScreenList
    export interface OvhPabxDialplanExtensionConditionScreenList {
        callerIdNumber?: string;
        conditionId: number;
        destinationNumber?: string;
        screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum;
    }
    // type fullname: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum
    export type OvhPabxDialplanExtensionConditionScreenListTypeEnum = "destinationBlackList" | "destinationWhiteList" | "incomingBlackList" | "incomingWhiteList"
    // interface fullName: telephony.OvhPabxDialplanExtensionConditionTime.OvhPabxDialplanExtensionConditionTime
    export interface OvhPabxDialplanExtensionConditionTime {
        conditionId: number;
        timeFrom: string;
        timeTo: string;
        weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum;
    }
    // type fullname: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum
    export type OvhPabxDialplanExtensionConditionTimeWeekDayEnum = "friday" | "monday" | "saturday" | "sunday" | "thursday" | "tuesday" | "wednesday"
    // interface fullName: telephony.OvhPabxDialplanExtensionRule.OvhPabxDialplanExtensionRule
    export interface OvhPabxDialplanExtensionRule {
        action: telephony.OvhPabxDialplanExtensionRuleActionEnum;
        actionParam?: string;
        negativeAction: boolean;
        position: number;
        ruleId: number;
    }
    // type fullname: telephony.OvhPabxDialplanExtensionRuleActionEnum
    export type OvhPabxDialplanExtensionRuleActionEnum = "bridge" | "endless_playback" | "hangup" | "hunting" | "ivr" | "playback" | "readDtmf" | "setCallerName" | "sleep" | "tts" | "voicemail"
    // type fullname: telephony.OvhPabxDialplanNumberPresentationEnum
    export type OvhPabxDialplanNumberPresentationEnum = "alias" | "both" | "caller"
    // interface fullName: telephony.OvhPabxHunting.OvhPabxHunting
    export interface OvhPabxHunting {
        crmUrlTemplate?: string;
        g729?: boolean;
        name: string;
        statusIvrEnabled: boolean;
    }
    // interface fullName: telephony.OvhPabxHuntingAgent.OvhPabxHuntingAgent
    export interface OvhPabxHuntingAgent {
        agentId: number;
        breakStatus?: number;
        description?: string;
        number: string;
        simultaneousLines: number;
        status: telephony.OvhPabxHuntingAgentStatusEnum;
        timeout: number;
        type: telephony.OvhPabxHuntingAgentTypeEnum;
        wrapUpTime: number;
    }
    // interface fullName: telephony.OvhPabxHuntingAgentLiveStatus.OvhPabxHuntingAgentLiveStatus
    export interface OvhPabxHuntingAgentLiveStatus {
        answeredCalls: number;
        lastStatusChange: string;
        status: telephony.OvhPabxHuntingLiveAgentStatusEnum;
        totalCallDuration: number;
    }
    // interface fullName: telephony.OvhPabxHuntingAgentQueue.OvhPabxHuntingAgentQueue
    export interface OvhPabxHuntingAgentQueue {
        agentId: number;
        position: number;
        queueId: number;
    }
    // type fullname: telephony.OvhPabxHuntingAgentStatusEnum
    export type OvhPabxHuntingAgentStatusEnum = "available" | "loggedOut" | "onBreak"
    // type fullname: telephony.OvhPabxHuntingAgentTypeEnum
    export type OvhPabxHuntingAgentTypeEnum = "external" | "internal"
    // type fullname: telephony.OvhPabxHuntingLiveAgentStatusEnum
    export type OvhPabxHuntingLiveAgentStatusEnum = "inAQueueCall" | "loggedOut" | "onBreak" | "receiving" | "waiting"
    // type fullname: telephony.OvhPabxHuntingLiveCallsStateEnum
    export type OvhPabxHuntingLiveCallsStateEnum = "Answered" | "Waiting"
    // interface fullName: telephony.OvhPabxHuntingQueue.OvhPabxHuntingQueue
    export interface OvhPabxHuntingQueue {
        actionOnClosure?: telephony.OvhPabxQueueActionEnum;
        actionOnClosureParam?: string;
        actionOnOverflow?: telephony.OvhPabxQueueActionEnum;
        actionOnOverflowParam?: string;
        askForRecordDisabling?: boolean;
        description?: string;
        followCallForwards?: boolean;
        maxMember: number;
        maxWaitTime: number;
        queueId: number;
        record?: boolean;
        recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum;
        recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum;
        soundOnHold?: number;
        strategy: telephony.OvhPabxHuntingQueueStrategyEnum;
    }
    // interface fullName: telephony.OvhPabxHuntingQueueLiveCalls.OvhPabxHuntingQueueLiveCalls
    export interface OvhPabxHuntingQueueLiveCalls {
        agent: string;
        answered?: string;
        begin: string;
        callerIdName: string;
        callerIdNumber: string;
        destinationNumber: string;
        end?: string;
        id: number;
        onHold?: boolean;
        queue: string;
        state: telephony.OvhPabxHuntingLiveCallsStateEnum;
    }
    // interface fullName: telephony.OvhPabxHuntingQueueLiveStatistics.OvhPabxHuntingQueueLiveStatistics
    export interface OvhPabxHuntingQueueLiveStatistics {
        callsAnswered: number;
        callsLost: number;
        callsTotal: number;
        lastReset: string;
        totalCallDuration: number;
        totalWaitingDuration: number;
    }
    // type fullname: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum
    export type OvhPabxHuntingQueueRecordDisablingDigitEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    // type fullname: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum
    export type OvhPabxHuntingQueueRecordDisablingLanguageEnum = "english" | "french"
    // type fullname: telephony.OvhPabxHuntingQueueStrategyEnum
    export type OvhPabxHuntingQueueStrategyEnum = "cumulationByAgentOrder" | "longestHangupAgent" | "longestIdleAgent" | "random" | "ringAll" | "roundRobin" | "sequentiallyByAgentOrder"
    // type fullname: telephony.OvhPabxIvrMenuEntryActionEnum
    export type OvhPabxIvrMenuEntryActionEnum = "bridge" | "callcenter" | "menuBack" | "menuExit" | "menuSub" | "menuTop" | "playback" | "readDtmf" | "setCallerName"
    // interface fullName: telephony.OvhPabxMenu.OvhPabxMenu
    export interface OvhPabxMenu {
        greetSound?: number;
        greetSoundTts?: number;
        invalidSound?: number;
        invalidSoundTts?: number;
        menuId: number;
        name: string;
    }
    // interface fullName: telephony.OvhPabxMenuEntry.OvhPabxMenuEntry
    export interface OvhPabxMenuEntry {
        action: telephony.OvhPabxIvrMenuEntryActionEnum;
        actionParam: string;
        dtmf: string;
        entryId: number;
        position: number;
    }
    // type fullname: telephony.OvhPabxQueueActionEnum
    export type OvhPabxQueueActionEnum = "playback" | "voicemail"
    // interface fullName: telephony.OvhPabxRecord.OvhPabxRecord
    export interface OvhPabxRecord {
        agent?: string;
        callEnd?: string;
        callStart: string;
        callerIdName: string;
        callerIdNumber: string;
        destinationNumber?: string;
        duration: number;
        fileUrl: string;
        id: number;
    }
    // interface fullName: telephony.OvhPabxSound.OvhPabxSound
    export interface OvhPabxSound {
        name: string;
        soundId: number;
    }
    // interface fullName: telephony.OvhPabxTts.OvhPabxTts
    export interface OvhPabxTts {
        id: number;
        text: string;
        voice: telephony.OvhPabxTtsVoiceEnum;
    }
    // type fullname: telephony.OvhPabxTtsVoiceEnum
    export type OvhPabxTtsVoiceEnum = "Bruce" | "Helene" | "Jenny" | "Loic"
    // type fullname: telephony.OvhPabxWhisperingModeEnum
    export type OvhPabxWhisperingModeEnum = "Whisper to agent only" | "Whisper to all participants"
    // interface fullName: telephony.PcsFile.PcsFile
    export interface PcsFile {
        filename: string;
        status: telephony.PcsFileStatusEnum;
        url: string;
        urlExpirationDatetime: string;
    }
    // type fullname: telephony.PcsFileStatusEnum
    export type PcsFileStatusEnum = "doing" | "done" | "error" | "todo"
    // interface fullName: telephony.Phone.Phone
    export interface Phone {
        brand: string;
        description: string;
        macAddress: string;
        maxline: number;
        mgcpIpRestriction?: string;
        phoneConfiguration: telephony.PhoneConfigurationProperty[];
        protocol: telephonyProtocolEnum;
        userPassword?: string;
    }
    // type fullname: telephony.PhoneConfigurationLevelEnum
    export type PhoneConfigurationLevelEnum = "admin" | "expert"
    // interface fullName: telephony.PhoneConfigurationProperty.PhoneConfigurationProperty
    export interface PhoneConfigurationProperty {
        default?: string;
        description?: string;
        enum?: string[];
        group?: string;
        level?: telephony.PhoneConfigurationLevelEnum;
        maxlength?: number;
        name?: string;
        rangeValue?: complexType.Range<number>;
        type?: telephony.PhoneConfigurationTypeEnum;
        value?: string;
    }
    // type fullname: telephony.PhoneConfigurationTypeEnum
    export type PhoneConfigurationTypeEnum = "boolean" | "enum" | "hidden" | "ipv4" | "numeric" | "string"
    // interface fullName: telephony.PhoneCredentials.PhoneCredentials
    export interface PhoneCredentials {
        login?: string;
        password: string;
    }
    // interface fullName: telephony.Phonebook.Phonebook
    export interface Phonebook {
        bookKey: string;
        isReadonly: boolean;
        name: string;
        phoneKey: string;
    }
    // interface fullName: telephony.PhonebookContact.PhonebookContact
    export interface PhonebookContact {
        group: string;
        homeMobile?: string;
        homePhone?: string;
        id: number;
        name: string;
        surname: string;
        workMobile?: string;
        workPhone?: string;
    }
    // interface fullName: telephony.PhonebookMaster.PhonebookMaster
    export interface PhonebookMaster {
        bookKey: string;
        name: string;
    }
    // interface fullName: telephony.Portability.Portability
    export interface Portability {
        billingAccount: string;
        creationDate: string;
        customerInfos: telephony.PortabilityCustomerInfos;
        desiredExecutionDate?: string;
        error: boolean;
        errorCodes: string[];
        id: number;
        lineToRedirectTo?: string;
        numbersList: string[];
        operator: string;
        orderId: number;
        portabilityCountry: telephony.PortabilityCountryEnum;
    }
    // type fullname: telephony.PortabilityCountryEnum
    export type PortabilityCountryEnum = "belgium" | "france" | "switzerland"
    // interface fullName: telephony.PortabilityCustomerInfos.PortabilityCustomerInfos
    export interface PortabilityCustomerInfos {
        building?: string;
        city: string;
        door?: string;
        floor?: string;
        name: string;
        siret?: string;
        stair?: string;
        streetName: string;
        streetNumber: string;
        zip: string;
    }
    // interface fullName: telephony.PortabilityDocument.PortabilityDocument
    export interface PortabilityDocument {
        description?: string;
        documentId: number;
        getUrl: string;
        name: string;
        putUrl?: string;
        size: number;
    }
    // interface fullName: telephony.PortabilityFixErrorPossibleParameters.PortabilityFixErrorPossibleParameters
    export interface PortabilityFixErrorPossibleParameters {
        mandatoryParameters: string[];
        optionalParameters: string[];
    }
    // interface fullName: telephony.PortabilityStep.PortabilityStep
    export interface PortabilityStep {
        description?: string;
        doneDate?: string;
        duration: telephony.PortabilityStepDuration;
        infos?: telephony.PortabilityStepInfos;
        name: telephony.PortabilityStepNameEnum;
        status: telephony.PortabilityStepStatusEnum;
    }
    // interface fullName: telephony.PortabilityStepDuration.PortabilityStepDuration
    export interface PortabilityStepDuration {
        quantity: number;
        unit: telephony.PortabilityStepDurationUnitEnum;
    }
    // type fullname: telephony.PortabilityStepDurationUnitEnum
    export type PortabilityStepDurationUnitEnum = "NA" | "day" | "hour" | "openday"
    // interface fullName: telephony.PortabilityStepInfos.PortabilityStepInfos
    export interface PortabilityStepInfos {
        lastProposedDate?: string;
        reason?: string;
        reasonType?: string;
    }
    // type fullname: telephony.PortabilityStepNameEnum
    export type PortabilityStepNameEnum = "acknowledgmentReceivedFromOperator" | "belgiumPortabilityRequestCreated" | "belgiumPortabilityRequestExecutionAcked" | "belgiumPortabilityRequestExecutionAsked" | "belgiumPortabilityRequestExecutionCompleted" | "belgiumPortabilityRequestValidated" | "belgiumPortabilityRequestWaitingUntilExec" | "customerFormReceived" | "customerFormSent" | "customerFormValidated" | "finalReportReceivedFromOperator" | "intermediateReportReceivedFromOperator" | "numberActivation" | "requestSentToOperator" | "sDASequenceReceivedFromOperator"
    // type fullname: telephony.PortabilityStepStatusEnum
    export type PortabilityStepStatusEnum = "cancelled" | "doing" | "done" | "error" | "hold" | "todo"
    // interface fullName: telephony.PreviousVoiceConsumption.PreviousVoiceConsumption
    export interface PreviousVoiceConsumption {
        called?: string;
        calling?: string;
        consumptionId: number;
        countrySuffix: string;
        creationDatetime: string;
        designation: string;
        destinationType: telephony.VoiceConsumptionDestinationTypeEnum;
        duration: number;
        hangupNature?: string;
        planType: telephony.VoiceConsumptionPlanTypeEnum;
        priceWithoutTax: orderPrice;
        wayType: telephony.VoiceConsumptionWayTypeEnum;
    }
    // type fullname: telephony.PropertyEnum
    export type PropertyEnum = "xdsl"
    // type fullname: telephony.ProtocolEnum
    export type ProtocolEnum = "mgcp" | "sip"
    // interface fullName: telephony.RateCodeInformation.RateCodeInformation
    export interface RateCodeInformation {
        code: string;
        pricePerCallWithoutTax: orderPrice;
        pricePerMinuteWithoutTax: orderPrice;
    }
    // type fullname: telephony.RealtimeEventDirection
    export type RealtimeEventDirection = "incoming" | "outgoing"
    // type fullname: telephony.RealtimeEventProtocol
    export type RealtimeEventProtocol = "mgcp" | "sip"
    // type fullname: telephony.RealtimeEventType
    export type RealtimeEventType = "end_calling" | "end_hold" | "end_ringing" | "start_calling" | "start_hold" | "start_ringing"
    // interface fullName: telephony.Redirect.Redirect
    export interface Redirect {
        description: string;
        destination?: string;
        featureType: telephony.TypeEnum;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // interface fullName: telephony.RegistrationInformations.RegistrationInformations
    export interface RegistrationInformations {
        datetime: string;
        domain?: string;
        ip: string;
        localIp?: string;
        localPort?: number;
        port?: number;
        userAgent?: string;
    }
    // type fullname: telephony.ReleaseLocationEnum
    export type ReleaseLocationEnum = "backward" | "forward" | "local"
    // interface fullName: telephony.RepaymentConsumption.RepaymentConsumption
    export interface RepaymentConsumption {
        called?: string;
        calling?: string;
        consumptionId: number;
        creationDatetime?: string;
        dialed?: string;
        duration?: number;
        operator?: string;
        price?: number;
        repayable?: boolean;
    }
    // interface fullName: telephony.ResetPhoneCodeInfo.ResetPhoneCodeInfo
    export interface ResetPhoneCodeInfo {
        activationCode?: string;
        keyBook?: string;
        serverURL?: string;
    }
    // interface fullName: telephony.ResetPhoneInfo.ResetPhoneInfo
    export interface ResetPhoneInfo {
        resetCodeInfo?: telephony.ResetPhoneCodeInfo;
        resetPhoneMethod: telephony.ResetPhoneMethodEnum;
    }
    // type fullname: telephony.ResetPhoneMethodEnum
    export type ResetPhoneMethodEnum = "code" | "http"
    // interface fullName: telephony.Rma.Rma
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
    // type fullname: telephony.RmaOfferTypeEnum
    export type RmaOfferTypeEnum = "deposit" | "loan" | "purchase"
    // type fullname: telephony.RmaPublicTypeEnum
    export type RmaPublicTypeEnum = "change to another phone/equipment (restitution first and shipping then)" | "restitution but keep the service enable"
    // type fullname: telephony.RmaReplaceTypeEnum
    export type RmaReplaceTypeEnum = "changePhone" | "phoneRestitution" | "undefined"
    // interface fullName: telephony.RmaReturn.RmaReturn
    export interface RmaReturn {
        id: string;
    }
    // type fullname: telephony.RmaStatusEnum
    export type RmaStatusEnum = "closed" | "open" | "received"
    // interface fullName: telephony.RmaStep.RmaStep
    export interface RmaStep {
        description: string;
        doneDate?: string;
        infos?: string;
        name: telephony.RmaStepNameEnum;
        status: telephony.RmaStepStatusEnum;
    }
    // type fullname: telephony.RmaStepNameEnum
    export type RmaStepNameEnum = "dispatchJustification" | "equipmentSending" | "equipmentTesting" | "opening" | "parcelReception" | "parcelValidation" | "validation"
    // type fullname: telephony.RmaStepStatusEnum
    export type RmaStepStatusEnum = "done" | "todo"
    // type fullname: telephony.RmaTypeEnum
    export type RmaTypeEnum = "after sale equipment service exchange" | "after sale phone service exchange" | "equipment restitution" | "fast exchange" | "old merchandise reception before exchange" | "phone restitution" | "resends due to shipping lost by the carrier" | "resends due to shipping not withdraw" | "specific return merchandise authorisation" | "termination" | "unknown"
    // interface fullName: telephony.Rsva.Rsva
    export interface Rsva {
        serviceName: string;
        typology?: telephony.portability.SpecialNumberCategoryEnum;
    }
    // interface fullName: telephony.Scheduler.Scheduler
    export interface Scheduler {
        serviceName: string;
        timeZone: telephony.timeZone;
    }
    // type fullname: telephony.SchedulerCategoryEnum
    export type SchedulerCategoryEnum = "holidays" | "scheduler1" | "scheduler2" | "scheduler3"
    // interface fullName: telephony.SchedulerEvent.SchedulerEvent
    export interface SchedulerEvent {
        categories: telephony.SchedulerCategoryEnum;
        dateEnd: string;
        dateStart: string;
        description?: string;
        title: string;
        uid: string;
    }
    // interface fullName: telephony.Screen.Screen
    export interface Screen {
        incomingScreenList: telephony.ScreenListChoosingEnum;
        outgoingScreenList: telephony.ScreenListChoosingEnum;
        serviceName: string;
    }
    // interface fullName: telephony.ScreenList.ScreenList
    export interface ScreenList {
        callNumber: string;
        id: number;
        nature: telephony.ScreenListNatureEnum;
        status: string;
        type: telephony.ScreenListTypeEnum;
    }
    // type fullname: telephony.ScreenListChoosingEnum
    export type ScreenListChoosingEnum = "blacklist" | "disabled" | "whitelist"
    // type fullname: telephony.ScreenListNatureEnum
    export type ScreenListNatureEnum = "fax" | "international" | "services" | "special" | "voicemail"
    // type fullname: telephony.ScreenListTypeEnum
    export type ScreenListTypeEnum = "incomingBlackList" | "incomingWhiteList" | "outgoingBlackList" | "outgoingWhiteList"
    // type fullname: telephony.ServiceVoicemailAudioFormatEnum
    export type ServiceVoicemailAudioFormatEnum = "aiff" | "au" | "flac" | "mp3" | "ogg" | "wav"
    // type fullname: telephony.ServiceVoicemailMailOptionEnum
    export type ServiceVoicemailMailOptionEnum = "attachment" | "simple"
    // interface fullName: telephony.ServiceVoicemailNotifications.ServiceVoicemailNotifications
    export interface ServiceVoicemailNotifications {
        email: string;
        type: telephony.ServiceVoicemailMailOptionEnum;
    }
    // interface fullName: telephony.SimultaneousChannelsDetails.SimultaneousChannelsDetails
    export interface SimultaneousChannelsDetails {
        basic: number;
        current: number;
        extra: number;
        maximum: number;
        toBeDeleted: number;
    }
    // type fullname: telephony.SipDomainProductTypeEnum
    export type SipDomainProductTypeEnum = "sip" | "trunk"
    // interface fullName: telephony.Sound.Sound
    export interface Sound {
        creationDate: string;
        description?: string;
        filename: string;
        getUrl: string;
        id: number;
        putUrl?: string;
        size: number;
    }
    // interface fullName: telephony.SpecificNumber.SpecificNumber
    export interface SpecificNumber {
        isPremium: boolean;
        number: string;
    }
    // type fullname: telephony.StatisticsTimeframeEnum
    export type StatisticsTimeframeEnum = "daily" | "hourly" | "monthly" | "weekly" | "yearly"
    // interface fullName: telephony.Task.Task
    export interface Task {
        action: string;
        message?: string;
        objectCreated?: string;
        serviceType: string;
        status: telephony.TaskStatusEnum;
        taskId: number;
    }
    // type fullname: telephony.TaskStatusEnum
    export type TaskStatusEnum = "doing" | "done" | "error" | "pause" | "todo"
    // interface fullName: telephony.TelephonyGenericService.TelephonyGenericService
    export interface TelephonyGenericService {
        serviceName: string;
    }
    // interface fullName: telephony.TelephonySearchService.TelephonySearchService
    export interface TelephonySearchService {
        billingAccount?: string;
        domain: string;
        type: telephony.TelephonySearchServiceTypeEnum;
    }
    // type fullname: telephony.TelephonySearchServiceTypeEnum
    export type TelephonySearchServiceTypeEnum = "alias" | "line"
    // interface fullName: telephony.TelephonyService.TelephonyService
    export interface TelephonyService {
        country: telephony.NumberCountryEnum;
        countryCode: telephony.NumberCountryCodeEnum;
        currentOutplan: orderPrice;
        description: string;
        featureType: telephony.TypeEnum;
        getPublicOffer: telephony.LineOffer;
        hasFaxCapabilities: boolean;
        offers: string[];
        properties: telephony.PropertyEnum[];
        rio: string;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
        simultaneousLines: number;
    }
    // interface fullName: telephony.TemporaryLogsLink.TemporaryLogsLink
    export interface TemporaryLogsLink {
        expirationDate: string;
        url: string;
    }
    // type fullname: telephony.TerminationReasonEnum
    export type TerminationReasonEnum = "addresseMove" | "billingDifficulties" | "cessationOfActivity" | "missingOptions" | "moveToCompetitor" | "other" | "plugAndPhoneDifficulties" | "technicalDifficulties"
    // interface fullName: telephony.TimeCondition.TimeCondition
    export interface TimeCondition {
        day: telephony.TimeConditionsDayEnum;
        hourBegin: string;
        hourEnd: string;
        id: number;
        policy: telephony.TimeConditionsPolicyEnum;
        status: string;
    }
    // interface fullName: telephony.TimeConditionOptions.TimeConditionOptions
    export interface TimeConditionOptions {
        slot1Number: string;
        slot1Type: telephony.TimeConditionsSlotTypeEnum;
        slot2Number: string;
        slot2Type: telephony.TimeConditionsSlotTypeEnum;
        slot3Number: string;
        slot3Type: telephony.TimeConditionsSlotTypeEnum;
        status: telephony.TimeConditionsGlobalStatusEnum;
        timeout?: telephony.TimeConditionsTimeoutEnum;
        unavailableNumber: string;
        unavailableType: telephony.TimeConditionsSlotTypeEnum;
    }
    // type fullname: telephony.TimeConditionsDayEnum
    export type TimeConditionsDayEnum = "friday" | "holiday" | "monday" | "saturday" | "sunday" | "thursday" | "tuesday" | "wednesday"
    // type fullname: telephony.TimeConditionsGlobalStatusEnum
    export type TimeConditionsGlobalStatusEnum = "deleted" | "disabled" | "enabled"
    // type fullname: telephony.TimeConditionsPolicyEnum
    export type TimeConditionsPolicyEnum = "available" | "slot1" | "slot2" | "slot3"
    // type fullname: telephony.TimeConditionsSettingsForwardTypeEnum
    export type TimeConditionsSettingsForwardTypeEnum = "number" | "voicemail"
    // type fullname: telephony.TimeConditionsSlotTypeEnum
    export type TimeConditionsSlotTypeEnum = "number" | "voicemail"
    // type fullname: telephony.TimeConditionsTimeoutEnum
    export type TimeConditionsTimeoutEnum = 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 5 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90
    // interface fullName: telephony.TimestampAndValue.TimestampAndValue
    export interface TimestampAndValue {
        timestamp: number;
        value?: number;
    }
    // type fullname: telephony.TokenExpirationEnum
    export type TokenExpirationEnum = "1 day" | "1 hour" | "30 days" | "5 minutes" | "unlimited"
    // interface fullName: telephony.Tones.Tones
    export interface Tones {
        callWaiting: telephony.TonesEnum;
        endCall: telephony.TonesEnum;
        onHold: telephony.TonesOnHoldEnum;
        ringback: telephony.TonesEnum;
    }
    // type fullname: telephony.TonesEnum
    export type TonesEnum = "Custom sound" | "None"
    // type fullname: telephony.TonesOnHoldEnum
    export type TonesOnHoldEnum = "Custom sound" | "None" | "Predefined 1" | "Predefined 2"
    // type fullname: telephony.TonesTypeEnum
    export type TonesTypeEnum = "callWaiting" | "endCall" | "onHold" | "ringback"
    // interface fullName: telephony.Trunk.Trunk
    export interface Trunk {
        description: string;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // interface fullName: telephony.TrunkExternalDisplayedNumber.TrunkExternalDisplayedNumber
    export interface TrunkExternalDisplayedNumber {
        createdAt: string;
        number: string;
        status: telephony.TrunkExternalDisplayedNumberStatusEnum;
        validatedAt?: string;
    }
    // type fullname: telephony.TrunkExternalDisplayedNumberStatusEnum
    export type TrunkExternalDisplayedNumberStatusEnum = "enabled" | "refused" | "toDelete" | "waitingValidation"
    // interface fullName: telephony.TrunkExternalDisplayedNumberValidation.TrunkExternalDisplayedNumberValidation
    export interface TrunkExternalDisplayedNumberValidation {
        phoneCallTaskId: number;
        validationCode: string;
    }
    // interface fullName: telephony.TrunkSimultaneousPack.TrunkSimultaneousPack
    export interface TrunkSimultaneousPack {
        channels: number;
        quantity: number;
        unitPrice: orderPrice;
    }
    // interface fullName: telephony.TrunkSimultaneousPacksRepartition.TrunkSimultaneousPacksRepartition
    export interface TrunkSimultaneousPacksRepartition {
        optimizedChannelsQuantity: number;
        packsRepartition: telephony.TrunkSimultaneousPack[];
        totalPrice: orderPrice;
    }
    // type fullname: telephony.TypeEnum
    export type TypeEnum = "cloudHunting" | "cloudIvr" | "conference" | "contactCenterSolution" | "contactCenterSolutionExpert" | "ddi" | "easyHunting" | "easyPabx" | "empty" | "fax" | "freefax" | "mgcp" | "miniPabx" | "oldConference" | "plugAndFax" | "redirect" | "sip" | "svi" | "voicefax" | "voicemail" | "vxml"
    // type fullname: telephony.TypeServiceEnum
    export type TypeServiceEnum = "alias" | "line"
    // interface fullName: telephony.VoiceConsumption.VoiceConsumption
    export interface VoiceConsumption {
        called?: string;
        calling?: string;
        consumptionId: number;
        countrySuffix: string;
        creationDatetime: string;
        designation: string;
        destinationType: telephony.VoiceConsumptionDestinationTypeEnum;
        dialed?: string;
        duration: number;
        hangupNature?: string;
        planType: telephony.VoiceConsumptionPlanTypeEnum;
        priceWithoutTax: orderPrice;
        wayType: telephony.VoiceConsumptionWayTypeEnum;
    }
    // type fullname: telephony.VoiceConsumptionDestinationTypeEnum
    export type VoiceConsumptionDestinationTypeEnum = "landline" | "mobile" | "special"
    // type fullname: telephony.VoiceConsumptionPlanTypeEnum
    export type VoiceConsumptionPlanTypeEnum = "outplan" | "priceplan"
    // type fullname: telephony.VoiceConsumptionWayTypeEnum
    export type VoiceConsumptionWayTypeEnum = "incoming" | "outgoing" | "transfer"
    // type fullname: telephony.VoicefaxRoutingEnum
    export type VoicefaxRoutingEnum = "fax" | "voicemail"
    // interface fullName: telephony.Voicemail.Voicemail
    export interface Voicemail {
        description: string;
        offers: string[];
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // type fullname: telephony.VoicemailGreetingEnum
    export type VoicemailGreetingEnum = "default" | "full" | "short"
    // interface fullName: telephony.VoicemailGreetings.VoicemailGreetings
    export interface VoicemailGreetings {
        callee: string;
        dir: telephony.VoicemailMessageFolderGreetingEnum;
        id: number;
    }
    // type fullname: telephony.VoicemailMessageFolderDirectoryEnum
    export type VoicemailMessageFolderDirectoryEnum = "family" | "friends" | "inbox" | "old" | "urgent" | "work"
    // type fullname: telephony.VoicemailMessageFolderGreetingEnum
    export type VoicemailMessageFolderGreetingEnum = "busy" | "greet" | "temp" | "unavail"
    // interface fullName: telephony.VoicemailMessages.VoicemailMessages
    export interface VoicemailMessages {
        callee: string;
        caller: string;
        creationDatetime: string;
        dir: telephony.VoicemailMessageFolderDirectoryEnum;
        duration: number;
        id: number;
    }
    // interface fullName: telephony.VoicemailNumbers.VoicemailNumbers
    export interface VoicemailNumbers {
        external: string;
        internal: string;
    }
    // interface fullName: telephony.VoicemailProperties.VoicemailProperties
    export interface VoicemailProperties {
        annouceMessage: string;
        audioFormat: telephony.ServiceVoicemailAudioFormatEnum;
        doNotRecord: boolean;
        forcePassword: boolean;
        fromEmail: string;
        fromName: string;
        fullGreetingSoundId?: number;
        greetingType: telephony.VoicemailGreetingEnum;
        isNewVersion: boolean;
        keepMessage: boolean;
        redirectionEmails: telephony.ServiceVoicemailNotifications[];
        shortGreetingSoundId?: number;
        temporaryGreetingActivated: boolean;
        temporaryGreetingSoundId?: number;
        unreadMessages: number;
    }
    // interface fullName: telephony.Vxml.Vxml
    export interface Vxml {
        description: string;
        offers: string[];
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    // interface fullName: telephony.VxmlProperties.VxmlProperties
    export interface VxmlProperties {
        url: string;
        urlRecord: string;
    }
    export namespace portability {
        // type fullname: telephony.portability.SpecialNumberCategoryEnum
        export type SpecialNumberCategoryEnum = "access" | "adults" | "announced" | "be_adults" | "be_content" | "be_games" | "be_general" | "be_relaxing" | "conferencing" | "contentsAuto" | "contentsManual" | "directory" | "games" | "linking" | "m2m" | "relationship"
    }
    // type fullname: telephony.timeZone
    export type timeZone = "Europe/Berlin" | "Europe/Brussels" | "Europe/London" | "Europe/Madrid" | "Europe/Paris" | "Europe/Zurich"
    // interface fullName: telephony.trafficExtract.trafficExtract
    export interface trafficExtract {
        dateEnd: string;
        dateStart: string;
        fileSize: number;
        fileUrl: string;
        id: number;
        status: telephony.TaskStatusEnum;
    }
}

/**
 * END API /telephony Models
 */
export function proxyTelephony(ovhEngine: OvhRequestable): Telephony {
    return buildOvhProxy(ovhEngine, '/telephony');
}
export default proxyTelephony;
/**
 * Api Proxy model
 */// Apis harmony
// path /telephony
export interface Telephony{
    // GET /telephony
    $get(): Promise<string[]>;
    accessories: {
        // GET /telephony/accessories
        $get(params: {country: telephony.NumberCountryEnum}): Promise<telephony.AccessoryOffer[]>;
    }
    aliases: {
        // GET /telephony/aliases
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /telephony/aliases/{serviceName}
            $get(): Promise<telephony.TelephonyGenericService>;
            changeContact: {
                // POST /telephony/aliases/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            serviceInfos: {
                // GET /telephony/aliases/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /telephony/aliases/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
        };
    }
    availableDefaultSipDomains: {
        // GET /telephony/availableDefaultSipDomains
        $get(params: {type: telephony.SipDomainProductTypeEnum}): Promise<telephony.DefaultSipDomains[]>;
    }
    currentOrderIds: {
        // GET /telephony/currentOrderIds
        $get(): Promise<number[]>;
    }
    directories: {
        availableZipCodes: {
            // GET /telephony/directories/availableZipCodes
            $get(params: {country: telephony.NumberCountryEnum, number: string}): Promise<string[]>;
        }
        cities: {
            // GET /telephony/directories/cities
            $get(params: {country: telephony.NumberCountryEnum, zipCode: string}): Promise<telephony.City[]>;
        }
    }
    fax: {
        offers: {
            // GET /telephony/fax/offers
            $get(params: {country: telephony.NumberCountryEnum}): Promise<telephony.LineOffer[]>;
        }
    }
    line: {
        offer: {
            phones: {
                // GET /telephony/line/offer/phones
                $get(params: {country: telephony.NumberCountryEnum, offer: string}): Promise<telephony.LinePhone[]>;
            }
        }
        offers: {
            // GET /telephony/line/offers
            $get(params: {country: telephony.NumberCountryEnum}): Promise<telephony.LineOffer[]>;
        }
    }
    lines: {
        // GET /telephony/lines
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /telephony/lines/{serviceName}
            $get(): Promise<telephony.TelephonyGenericService>;
            changeContact: {
                // POST /telephony/lines/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            serviceInfos: {
                // GET /telephony/lines/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /telephony/lines/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
        };
    }
    number: {
        detailedZones: {
            // GET /telephony/number/detailedZones
            $get(params: {axiom?: string, country: telephony.NumberCountryEnum}): Promise<telephony.NumberDetailedZone[]>;
        }
        ranges: {
            // GET /telephony/number/ranges
            $get(params: {country: telephony.NumberCountryEnum}): Promise<string[]>;
        }
        specificNumbers: {
            // GET /telephony/number/specificNumbers
            $get(params: {country: telephony.NumberCountryEnum, range?: string, type: telephony.NumberTypeEnum, zone?: string}): Promise<telephony.SpecificNumber[]>;
        }
        zones: {
            // GET /telephony/number/zones
            $get(params: {axiom?: string, country: telephony.NumberCountryEnum}): Promise<string[]>;
        }
    }
    searchServices: {
        // GET /telephony/searchServices
        $get(params: {axiom: string}): Promise<telephony.TelephonySearchService[]>;
    }
    setDefaultSipDomain: {
        // POST /telephony/setDefaultSipDomain
        $post(params: {country: telephony.NumberCountryEnum, domain: string, type: telephony.SipDomainProductTypeEnum}): Promise<void>;
    }
    sounds: {
        // GET /telephony/sounds
        $get(): Promise<number[]>;
        // POST /telephony/sounds
        $post(params: {description?: string, filename: string}): Promise<telephony.Sound>;
        $(id: number): {
            // DELETE /telephony/sounds/{id}
            $delete(): Promise<void>;
            // GET /telephony/sounds/{id}
            $get(): Promise<telephony.Sound>;
            // PUT /telephony/sounds/{id}
            $put(params?: {creationDate?: string, description?: string, filename?: string, getUrl?: string, id?: number, putUrl?: string, size?: number}): Promise<void>;
        };
    }
    spare: {
        // GET /telephony/spare
        $get(): Promise<string[]>;
        brands: {
            // GET /telephony/spare/brands
            $get(): Promise<string[]>;
        }
        $(spare: string): {
            // DELETE /telephony/spare/{spare}
            $delete(): Promise<void>;
            // GET /telephony/spare/{spare}
            $get(): Promise<spare.telephony.TelephonySpare>;
            compatibleReplacement: {
                // GET /telephony/spare/{spare}/compatibleReplacement
                $get(): Promise<string[]>;
            }
            replace: {
                // POST /telephony/spare/{spare}/replace
                $post(params: {domain: string, ip: string}): Promise<void>;
            }
            serviceInfos: {
                // GET /telephony/spare/{spare}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /telephony/spare/{spare}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
        };
    }
    trunks: {
        // GET /telephony/trunks
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /telephony/trunks/{serviceName}
            $get(): Promise<telephony.TelephonyGenericService>;
            changeContact: {
                // POST /telephony/trunks/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            serviceInfos: {
                // GET /telephony/trunks/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /telephony/trunks/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
        };
    }
    $(billingAccount: string): {
        // DELETE /telephony/{billingAccount}
        $delete(): Promise<void>;
        // GET /telephony/{billingAccount}
        $get(): Promise<telephony.BillingAccount>;
        // PUT /telephony/{billingAccount}
        $put(params?: {allowedOutplan?: orderPrice, billingAccount?: string, creditThreshold?: orderPrice, currentOutplan?: orderPrice, description?: string, hiddenExternalNumber?: boolean, overrideDisplayedNumber?: boolean, securityDeposit?: orderPrice, status?: telephony.BillingAccountStatusEnum, trusted?: boolean}): Promise<void>;
        abbreviatedNumber: {
            // GET /telephony/{billingAccount}/abbreviatedNumber
            $get(): Promise<number[]>;
            // POST /telephony/{billingAccount}/abbreviatedNumber
            $post(params: {abbreviatedNumber: number, destinationNumber: string, name: string, surname: string}): Promise<telephony.AbbreviatedNumberGroup>;
            $(abbreviatedNumber: number): {
                // DELETE /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                $delete(): Promise<void>;
                // GET /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                $get(): Promise<telephony.AbbreviatedNumberGroup>;
                // PUT /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                $put(params?: {abbreviatedNumber?: number, destinationNumber?: string, name?: string, surname?: string}): Promise<void>;
            };
        }
        allowedCreditThreshold: {
            // GET /telephony/{billingAccount}/allowedCreditThreshold
            $get(): Promise<order.Price[]>;
        }
        amountSecurityDeposit: {
            // GET /telephony/{billingAccount}/amountSecurityDeposit
            $get(): Promise<order.Price[]>;
        }
        billingAccountSite: {
            // GET /telephony/{billingAccount}/billingAccountSite
            $get(): Promise<string>;
            // POST /telephony/{billingAccount}/billingAccountSite
            $post(params: {billingAccountSite: string}): Promise<void>;
        }
        canTransferSecurityDeposit: {
            // POST /telephony/{billingAccount}/canTransferSecurityDeposit
            $post(params: {billingAccountDestination: string}): Promise<boolean>;
        }
        cancelTermination: {
            // POST /telephony/{billingAccount}/cancelTermination
            $post(): Promise<void>;
        }
        carrierSip: {
            // GET /telephony/{billingAccount}/carrierSip
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/carrierSip/{serviceName}
                $get(): Promise<telephony.CarrierSip>;
                endpoints: {
                    // GET /telephony/{billingAccount}/carrierSip/{serviceName}/endpoints
                    $get(): Promise<number[]>;
                    $(id: number): {
                        // GET /telephony/{billingAccount}/carrierSip/{serviceName}/endpoints/{id}
                        $get(): Promise<telephony.CarrierSipCustomerEndpoint>;
                    };
                }
                settings: {
                    // GET /telephony/{billingAccount}/carrierSip/{serviceName}/settings
                    $get(): Promise<telephony.CarrierSipDetails>;
                    // PUT /telephony/{billingAccount}/carrierSip/{serviceName}/settings
                    $put(params?: {description?: string, maxCallsPerSecond?: number, maxConcurrentCalls?: number}): Promise<void>;
                }
            };
        }
        changeContact: {
            // POST /telephony/{billingAccount}/changeContact
            $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        conference: {
            // GET /telephony/{billingAccount}/conference
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/conference/{serviceName}
                $get(): Promise<telephony.Conference>;
                announceUpload: {
                    // POST /telephony/{billingAccount}/conference/{serviceName}/announceUpload
                    $post(params: {documentId: string}): Promise<telephony.Task>;
                }
                histories: {
                    // GET /telephony/{billingAccount}/conference/{serviceName}/histories
                    $get(): Promise<number[]>;
                    $(id: number): {
                        // GET /telephony/{billingAccount}/conference/{serviceName}/histories/{id}
                        $get(): Promise<telephony.ConferenceHistory>;
                    };
                }
                informations: {
                    // GET /telephony/{billingAccount}/conference/{serviceName}/informations
                    $get(): Promise<telephony.ConferenceInformations>;
                }
                lock: {
                    // POST /telephony/{billingAccount}/conference/{serviceName}/lock
                    $post(): Promise<telephony.Task>;
                }
                participants: {
                    // GET /telephony/{billingAccount}/conference/{serviceName}/participants
                    $get(): Promise<number[]>;
                    $(id: number): {
                        // GET /telephony/{billingAccount}/conference/{serviceName}/participants/{id}
                        $get(): Promise<telephony.ConferenceParticipants>;
                        deaf: {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/deaf
                            $post(): Promise<telephony.Task>;
                        }
                        energy: {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/energy
                            $post(params: {value: number}): Promise<telephony.Task>;
                        }
                        kick: {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/kick
                            $post(): Promise<telephony.Task>;
                        }
                        mute: {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/mute
                            $post(): Promise<telephony.Task>;
                        }
                        undeaf: {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/undeaf
                            $post(): Promise<telephony.Task>;
                        }
                        unmute: {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/unmute
                            $post(): Promise<telephony.Task>;
                        }
                    };
                }
                settings: {
                    // GET /telephony/{billingAccount}/conference/{serviceName}/settings
                    $get(): Promise<telephony.ConferenceProperties>;
                    // PUT /telephony/{billingAccount}/conference/{serviceName}/settings
                    $put(params?: {announceFile?: boolean, announceFilename?: string, announceSoundId?: number, anonymousRejection?: boolean, enterMuted?: boolean, eventsChannel?: string, language?: telephony.ConferenceLanguageEnum, pin?: string, recordStatus?: boolean, reportEmail?: string, reportStatus?: telephony.ConferenceReportStatusEnum, whiteLabelReport?: boolean}): Promise<void>;
                }
                unlock: {
                    // POST /telephony/{billingAccount}/conference/{serviceName}/unlock
                    $post(): Promise<telephony.Task>;
                }
                webAccess: {
                    // GET /telephony/{billingAccount}/conference/{serviceName}/webAccess
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/conference/{serviceName}/webAccess
                    $post(params: {type: telephony.ConferenceWebAccessTypeEnum}): Promise<telephony.ConferenceWebAccess>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}
                        $get(): Promise<telephony.ConferenceWebAccess>;
                    };
                }
            };
        }
        ddi: {
            // GET /telephony/{billingAccount}/ddi
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/ddi/{serviceName}
                $get(): Promise<telephony.Ddi>;
                // PUT /telephony/{billingAccount}/ddi/{serviceName}
                $put(params?: {description?: string, destination?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum}): Promise<void>;
                changeDestination: {
                    // POST /telephony/{billingAccount}/ddi/{serviceName}/changeDestination
                    $post(params: {destination: string}): Promise<telephony.Task>;
                }
            };
        }
        easyHunting: {
            // GET /telephony/{billingAccount}/easyHunting
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/easyHunting/{serviceName}
                $get(): Promise<telephony.EasyHunting>;
                // PUT /telephony/{billingAccount}/easyHunting/{serviceName}
                $put(params?: {anonymousRejection?: boolean, description?: string, featureType?: telephony.TypeEnum, isCCS?: boolean, maxWaitTime?: number, queueSize?: number, serviceName?: string, serviceType?: telephony.TypeServiceEnum, showCallerNumber?: telephony.OvhPabxDialplanNumberPresentationEnum, statusIvrEnabled?: boolean, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum, toneOnClosing?: number, toneOnHold?: number, toneOnOpening?: number, voicemail?: string}): Promise<void>;
                hunting: {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting
                    $get(): Promise<telephony.OvhPabxHunting>;
                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting
                    $put(params?: {crmUrlTemplate?: string, g729?: boolean, name?: string, statusIvrEnabled?: boolean}): Promise<void>;
                    agent: {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent
                        $get(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent
                        $post(params: {description?: string, number: string, simultaneousLines: number, status: telephony.OvhPabxHuntingAgentStatusEnum, timeout: number, wrapUpTime: number}): Promise<telephony.OvhPabxHuntingAgent>;
                        $(agentId: number): {
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                            $get(): Promise<telephony.OvhPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                            $put(params?: {agentId?: number, breakStatus?: number, description?: string, number?: string, simultaneousLines?: number, status?: telephony.OvhPabxHuntingAgentStatusEnum, timeout?: number, type?: telephony.OvhPabxHuntingAgentTypeEnum, wrapUpTime?: number}): Promise<void>;
                            bannerAccess: {
                                // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                $delete(): Promise<void>;
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                $get(): Promise<telephony.BannerAccess>;
                                // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                $post(): Promise<telephony.BannerAccess>;
                            }
                            calls: {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls
                                $get(): Promise<number[]>;
                                $(id: number): {
                                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}
                                    $get(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    eavesdrop: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    hangup: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup
                                        $post(): Promise<telephony.Task>;
                                    }
                                    hold: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold
                                        $post(): Promise<telephony.Task>;
                                    }
                                    intercept: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper
                                        $post(params: {number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
                                    }
                                };
                            }
                            eventToken: {
                                // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                $delete(): Promise<void>;
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                $get(): Promise<telephony.EventToken>;
                                // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                $post(params: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
                            }
                            liveStatus: {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/liveStatus
                                $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                            }
                            queue: {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue
                                $get(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue
                                $post(params: {position: number, queueId: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                $(queueId: number): {
                                    // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $delete(): Promise<void>;
                                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $put(params?: {agentId?: number, position?: number, queueId?: number}): Promise<void>;
                                    liveStatus: {
                                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus
                                        $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                    }
                                };
                            }
                        };
                    }
                    customStatus: {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus
                        $get(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus
                        $post(params: {color?: string, description?: string, name: string}): Promise<telephony.OvhPabxCustomStatus>;
                        $(id: number): {
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}
                            $get(): Promise<telephony.OvhPabxCustomStatus>;
                        };
                    }
                    eventToken: {
                        // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken
                        $get(): Promise<telephony.EventToken>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken
                        $post(params: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
                    }
                    queue: {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue
                        $get(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue
                        $post(params: {actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy: telephony.OvhPabxHuntingQueueStrategyEnum}): Promise<telephony.OvhPabxHuntingQueue>;
                        $(queueId: number): {
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                            $get(): Promise<telephony.OvhPabxHuntingQueue>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                            $put(params?: {actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, followCallForwards?: boolean, maxMember?: number, maxWaitTime?: number, queueId?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum}): Promise<void>;
                            agent: {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent
                                $get(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent
                                $post(params: {position: number, queueId: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                $(agentId: number): {
                                    // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $delete(): Promise<void>;
                                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $put(params?: {agentId?: number, position?: number, queueId?: number}): Promise<void>;
                                    liveStatus: {
                                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus
                                        $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                    }
                                };
                            }
                            liveCalls: {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls
                                $get(): Promise<number[]>;
                                $(id: number): {
                                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}
                                    $get(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    eavesdrop: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    hangup: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup
                                        $post(): Promise<telephony.Task>;
                                    }
                                    hold: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold
                                        $post(): Promise<telephony.Task>;
                                    }
                                    intercept: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper
                                        $post(params: {number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
                                    }
                                };
                            }
                            liveStatistics: {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveStatistics
                                $get(): Promise<telephony.OvhPabxHuntingQueueLiveStatistics>;
                            }
                        };
                    }
                }
                records: {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/records
                    $get(): Promise<number[]>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}
                        $get(): Promise<telephony.OvhPabxRecord>;
                    };
                }
                screenListConditions: {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions
                    $get(): Promise<telephony.EasyHuntingScreenListsConditionsSettings>;
                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions
                    $put(params?: {status?: telephony.EasyHuntingScreenListsConditionsStatusEnum}): Promise<void>;
                    conditions: {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions
                        $get(params?: {screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions
                        $post(params: {callerIdNumber?: string, destinationNumber?: string, screenListType: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<telephony.EasyHuntingScreenListsConditions>;
                        $(conditionId: number): {
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                            $get(): Promise<telephony.EasyHuntingScreenListsConditions>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                            $put(params?: {callerIdNumber?: string, conditionId?: number, destinationNumber?: string, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<void>;
                        };
                    }
                }
                sound: {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/sound
                    $get(): Promise<number[]>;
                    $(soundId: number): {
                        // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}
                        $get(): Promise<telephony.OvhPabxSound>;
                    };
                }
                soundUpload: {
                    // POST /telephony/{billingAccount}/easyHunting/{serviceName}/soundUpload
                    $post(params?: {documentId?: string, name?: string, url?: string}): Promise<telephony.Task>;
                }
                timeConditions: {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions
                    $get(): Promise<telephony.EasyHuntingTimeConditionsSettings>;
                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions
                    $put(params?: {enable?: boolean, slot1Number?: string, slot1Type?: telephony.TimeConditionsSettingsForwardTypeEnum, slot2Number?: string, slot2Type?: telephony.TimeConditionsSettingsForwardTypeEnum, slot3Number?: string, slot3Type?: telephony.TimeConditionsSettingsForwardTypeEnum, unavailableNumber?: string, unavailableType?: telephony.TimeConditionsSettingsForwardTypeEnum}): Promise<void>;
                    conditions: {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions
                        $get(params?: {policy?: telephony.TimeConditionsPolicyEnum}): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions
                        $post(params: {policy: telephony.TimeConditionsPolicyEnum, timeFrom: string, timeTo: string, weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}): Promise<telephony.EasyHuntingTimeConditions>;
                        $(conditionId: number): {
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                            $get(): Promise<telephony.EasyHuntingTimeConditions>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                            $put(params?: {conditionId?: number, policy?: telephony.TimeConditionsPolicyEnum, timeFrom?: string, timeTo?: string, weekDay?: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}): Promise<void>;
                        };
                    }
                }
            };
        }
        easyPabx: {
            // GET /telephony/{billingAccount}/easyPabx
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/easyPabx/{serviceName}
                $get(): Promise<telephony.EasyPabx>;
                // PUT /telephony/{billingAccount}/easyPabx/{serviceName}
                $put(params?: {description?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum}): Promise<void>;
                hunting: {
                    // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting
                    $get(): Promise<telephony.EasyPabxHunting>;
                    // PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting
                    $put(params?: {anonymousCallRejection?: boolean, name?: string, noReplyTimer?: number, numberOfCalls?: number, pattern?: telephony.EasyMiniPabxHuntingPatternEnum, strategy?: telephony.EasyMiniPabxHuntingStrategyEnum, toneOnClosure?: boolean, toneOnClosureSoundId?: number, toneOnHold?: boolean, toneOnHoldSoundId?: number, toneRingback?: boolean, toneRingbackSoundId?: number, voicemail?: string}): Promise<void>;
                    agent: {
                        // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent
                        $get(): Promise<string[]>;
                        // POST /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent
                        $post(params: {agentNumber: string, logged: boolean, noReplyTimer: number, position: number}): Promise<telephony.EasyMiniPabxHuntingAgent>;
                        $(agentNumber: string): {
                            // DELETE /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                            $get(): Promise<telephony.EasyMiniPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                            $put(params?: {agentNumber?: string, logged?: boolean, noReplyTimer?: number, position?: number}): Promise<void>;
                        };
                    }
                    tones: {
                        // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones
                        $get(): Promise<telephony.Tones>;
                        // PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones
                        $put(params?: {callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum}): Promise<void>;
                        toneUpload: {
                            // POST /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones/toneUpload
                            $post(params: {documentId?: string, type: telephony.TonesTypeEnum, url?: string}): Promise<telephony.Task>;
                        }
                    }
                }
            };
        }
        eventToken: {
            // DELETE /telephony/{billingAccount}/eventToken
            $delete(): Promise<void>;
            // GET /telephony/{billingAccount}/eventToken
            $get(): Promise<telephony.EventToken>;
            // POST /telephony/{billingAccount}/eventToken
            $post(params: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
        }
        fax: {
            // GET /telephony/{billingAccount}/fax
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/fax/{serviceName}
                $get(): Promise<telephony.Fax>;
                // PUT /telephony/{billingAccount}/fax/{serviceName}
                $put(params?: {description?: string, notifications?: telephony.LineNotificationsOptions, offers?: string[], serviceName?: string, serviceType?: telephony.TypeServiceEnum}): Promise<void>;
                campaigns: {
                    // GET /telephony/{billingAccount}/fax/{serviceName}/campaigns
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/fax/{serviceName}/campaigns
                    $post(params: {documentId: string, faxQuality?: telephony.FaxQualityEnum, name: string, recipientsDocId?: string, recipientsList?: string[], recipientsType: telephony.FaxCampaignRecipientsTypeEnum, sendDate?: string, sendType: telephony.FaxCampaignSendTypeEnum}): Promise<telephony.FaxCampaign>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}
                        $get(): Promise<telephony.FaxCampaign>;
                        detail: {
                            // GET /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/detail
                            $get(): Promise<telephony.FaxCampaignDetail>;
                        }
                        start: {
                            // POST /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/start
                            $post(): Promise<void>;
                        }
                        stop: {
                            // POST /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/stop
                            $post(): Promise<void>;
                        }
                    };
                }
                screenLists: {
                    // DELETE /telephony/{billingAccount}/fax/{serviceName}/screenLists
                    $delete(): Promise<void>;
                    // GET /telephony/{billingAccount}/fax/{serviceName}/screenLists
                    $get(): Promise<telephony.FaxScreen>;
                    // POST /telephony/{billingAccount}/fax/{serviceName}/screenLists
                    $post(params?: {blacklistedNumbers?: string[], blacklistedTSI?: string[], filteringList?: telephony.FaxScreenListTypeEnum, whitelistedNumbers?: string[], whitelistedTSI?: string[]}): Promise<telephony.FaxScreen>;
                    // PUT /telephony/{billingAccount}/fax/{serviceName}/screenLists
                    $put(params?: {blacklistedNumbers?: string[], blacklistedTSI?: string[], callNumber?: string, countryCode?: string, filteringList?: telephony.FaxScreenListTypeEnum, serviceName?: string, whitelistedNumbers?: string[], whitelistedTSI?: string[]}): Promise<void>;
                    reset: {
                        // POST /telephony/{billingAccount}/fax/{serviceName}/screenLists/reset
                        $post(params?: {blacklistedNumbers?: boolean, blacklistedTSI?: boolean, whitelistedNumbers?: boolean, whitelistedTSI?: boolean}): Promise<void>;
                    }
                }
                settings: {
                    // GET /telephony/{billingAccount}/fax/{serviceName}/settings
                    $get(): Promise<telephony.FaxProperties>;
                    // PUT /telephony/{billingAccount}/fax/{serviceName}/settings
                    $put(params?: {callNumber?: string, countryCode?: string, faxMaxCall?: telephony.FaxSendingTries, faxQuality?: telephony.FaxQualityEnum, faxTagLine?: string, fromEmail?: string, fromName?: string, mailFormat?: telephony.FaxMailFormatEnum, receiver?: string, redirectionEmail?: string[], rejectAnonymous?: boolean, sender?: string}): Promise<void>;
                    changePassword: {
                        // POST /telephony/{billingAccount}/fax/{serviceName}/settings/changePassword
                        $post(params?: {password?: string}): Promise<string>;
                    }
                    sendFax: {
                        // POST /telephony/{billingAccount}/fax/{serviceName}/settings/sendFax
                        $post(params: {dateSchedule?: string, pdfUrl: string, recipients: string[]}): Promise<telephony.Task>;
                    }
                }
            };
        }
        historyConsumption: {
            // GET /telephony/{billingAccount}/historyConsumption
            $get(): Promise<string[]>;
            $(date: string): {
                // GET /telephony/{billingAccount}/historyConsumption/{date}
                $get(): Promise<telephony.HistoryConsumption>;
                file: {
                    // GET /telephony/{billingAccount}/historyConsumption/{date}/file
                    $get(params: {extension: telephony.BillDocument}): Promise<telephony.PcsFile>;
                }
            };
        }
        historyRepaymentConsumption: {
            // GET /telephony/{billingAccount}/historyRepaymentConsumption
            $get(): Promise<string[]>;
            // POST /telephony/{billingAccount}/historyRepaymentConsumption
            $post(params?: {billingNumber?: string}): Promise<telephony.HistoryRepaymentConsumption>;
            $(date: string): {
                // GET /telephony/{billingAccount}/historyRepaymentConsumption/{date}
                $get(): Promise<telephony.HistoryRepaymentConsumption>;
                document: {
                    // GET /telephony/{billingAccount}/historyRepaymentConsumption/{date}/document
                    $get(): Promise<telephony.PcsFile>;
                }
            };
        }
        historyTollfreeConsumption: {
            // GET /telephony/{billingAccount}/historyTollfreeConsumption
            $get(): Promise<string[]>;
            $(date: string): {
                // GET /telephony/{billingAccount}/historyTollfreeConsumption/{date}
                $get(): Promise<telephony.HistoryTollfreeConsumption>;
                document: {
                    // GET /telephony/{billingAccount}/historyTollfreeConsumption/{date}/document
                    $get(): Promise<telephony.PcsFile>;
                }
            };
        }
        line: {
            // GET /telephony/{billingAccount}/line
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/line/{serviceName}
                $get(): Promise<telephony.Line>;
                // PUT /telephony/{billingAccount}/line/{serviceName}
                $put(params?: {canChangePassword?: boolean, description?: string, getPublicOffer?: telephony.LineOffer, infrastructure?: string, isAttachedToOtherLinesPhone?: boolean, notifications?: telephony.LineNotificationsOptions, offers?: string[], serviceName?: string, serviceType?: telephony.TypeServiceEnum, simultaneousLines?: number}): Promise<void>;
                abbreviatedNumber: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber
                    $post(params: {abbreviatedNumber: number, destinationNumber: string, name: string, surname: string}): Promise<telephony.AbbreviatedNumber>;
                    $(abbreviatedNumber: number): {
                        // DELETE /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                        $get(): Promise<telephony.AbbreviatedNumber>;
                        // PUT /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                        $put(params?: {abbreviatedNumber?: number, destinationNumber?: string, name?: string, surname?: string}): Promise<void>;
                    };
                }
                activateNewPhone: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/activateNewPhone
                    $get(): Promise<void>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/activateNewPhone
                    $post(): Promise<void>;
                }
                antihack: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/antihack
                    $get(): Promise<string[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/antihack
                    $post(params: {action: telephony.AntihackActionEnum, restricted?: string}): Promise<void>;
                }
                associateDevice: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/associateDevice
                    $post(params: {ipAddress?: string, macAddress: string}): Promise<void>;
                }
                automaticCall: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/automaticCall
                    $get(): Promise<string[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/automaticCall
                    $post(params: {bridgeNumberDialplan?: string, calledNumber: string, callingNumber?: string, dialplan: telephony.CallsGeneratorDialplanEnum, isAnonymous: boolean, playbackAudioFileDialplan?: string, timeout?: number, ttsTextDialplan?: string}): Promise<string>;
                    $(identifier: string): {
                        // GET /telephony/{billingAccount}/line/{serviceName}/automaticCall/{identifier}
                        $get(): Promise<telephony.CallsGenerated>;
                    };
                }
                availableSipDomains: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/availableSipDomains
                    $get(): Promise<string[]>;
                }
                block: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/block
                    $post(params?: {mode?: telephony.LineBlockingMode}): Promise<void>;
                }
                calls: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/calls
                    $get(): Promise<number[]>;
                    $(id: number): {
                        // GET /telephony/{billingAccount}/line/{serviceName}/calls/{id}
                        $get(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                        eavesdrop: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/eavesdrop
                            $post(params: {number: string}): Promise<telephony.Task>;
                        }
                        hangup: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/hangup
                            $post(): Promise<telephony.Task>;
                        }
                        hold: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/hold
                            $post(): Promise<telephony.Task>;
                        }
                        intercept: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/intercept
                            $post(params: {number: string}): Promise<telephony.Task>;
                        }
                        transfer: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/transfer
                            $post(params: {number: string}): Promise<telephony.Task>;
                        }
                        whisper: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper
                            $post(params: {number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
                        }
                    };
                }
                canChangePassword: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/canChangePassword
                    $get(): Promise<boolean>;
                }
                cancelConvertToNumber: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/cancelConvertToNumber
                    $post(): Promise<void>;
                }
                changePassword: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/changePassword
                    $post(params?: {password?: string}): Promise<void>;
                }
                click2Call: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/click2Call
                    $post(params: {calledNumber: string, callingNumber?: string, intercom?: boolean}): Promise<void>;
                }
                click2CallUser: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/click2CallUser
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser
                    $post(params: {login: string, password: string}): Promise<number>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}
                        $get(): Promise<telephony.Click2CallUser>;
                        changePassword: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/changePassword
                            $post(params: {password: string}): Promise<void>;
                        }
                        click2Call: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call
                            $post(params: {calledNumber: string, callingNumber?: string}): Promise<void>;
                        }
                    };
                }
                convertToNumber: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/convertToNumber
                    $post(): Promise<telephony.OfferTask>;
                }
                dissociateDevice: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/dissociateDevice
                    $post(params: {ipAddress?: string, macAddress: string}): Promise<void>;
                }
                ips: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/ips
                    $get(): Promise<telephony.DatetimeAndIpvalue[]>;
                }
                lastRegistrations: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/lastRegistrations
                    $get(): Promise<telephony.RegistrationInformations[]>;
                }
                listAssociablePhones: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/listAssociablePhones
                    $get(): Promise<telephony.LinePhoneAssociable[]>;
                }
                maximumAvailableSimultaneousLines: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/maximumAvailableSimultaneousLines
                    $get(): Promise<number>;
                }
                offer: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/offer
                    $get(): Promise<telephony.LineOffer>;
                }
                options: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/options
                    $get(): Promise<telephony.LineOptions>;
                    // PUT /telephony/{billingAccount}/line/{serviceName}/options
                    $put(params?: {absentSubscriber?: boolean, anonymousCallRejection?: boolean, callRestrictionIncoming?: boolean, callRestrictionOutgoing?: boolean, callWaiting?: boolean, codecs?: string, defaultVoicemail?: string, displayNumber?: string, doNotDisturb?: boolean, domain?: string, forwardBackup?: boolean, forwardBackupNature?: telephony.LineOptionForwardNatureTypeEnum, forwardBackupNumber?: string, forwardBusy?: boolean, forwardBusyNature?: telephony.LineOptionForwardNatureTypeEnum, forwardBusyNumber?: string, forwardNoReply?: boolean, forwardNoReplyDelay?: number, forwardNoReplyNature?: telephony.LineOptionForwardNatureTypeEnum, forwardNoReplyNumber?: string, forwardUnconditional?: boolean, forwardUnconditionalNature?: telephony.LineOptionForwardNatureTypeEnum, forwardUnconditionalNumber?: string, identificationRestriction?: boolean, intercom?: telephony.LineOptionIntercomEnum, ipRestrictions?: string[], language?: telephony.LineOptionLanguageEnum, lockOutCall?: boolean, lockOutCallPassword?: string, recordOutgoingCallsBeta?: boolean, toneOnCallWaitingSoundId?: number, toneOnHoldSoundId?: number, toneRingbackSoundId?: number, voicemailExternalNumber?: string, voicemailInternalNumber?: string}): Promise<void>;
                    availableCodecs: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/options/availableCodecs
                        $get(): Promise<string[]>;
                    }
                    defaultCodecs: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/options/defaultCodecs
                        $get(): Promise<string>;
                    }
                }
                phone: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/phone
                    $get(): Promise<telephony.Phone>;
                    // PUT /telephony/{billingAccount}/line/{serviceName}/phone
                    $put(params?: {brand?: string, description?: string, macAddress?: string, maxline?: number, mgcpIpRestriction?: string, phoneConfiguration?: telephony.PhoneConfigurationProperty[], protocol?: telephonyProtocolEnum, userPassword?: string}): Promise<void>;
                    adminCredentials: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/adminCredentials
                        $get(): Promise<telephony.PhoneCredentials>;
                    }
                    changePhoneConfiguration: {
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration
                        $post(params?: {autoReboot?: boolean, newConfigurations?: complexType.SafeKeyValue<string>[]}): Promise<void>;
                    }
                    functionKey: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/functionKey
                        $get(): Promise<number[]>;
                        $(keyNum: number): {
                            // GET /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}
                            $get(): Promise<telephony.FunctionKey>;
                            // PUT /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}
                            $put(params?: {default_?: string, function_?: string, keyNum?: number, label?: string, parameter?: string, type?: string}): Promise<void>;
                            availableFunction: {
                                // GET /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}/availableFunction
                                $get(): Promise<string[]>;
                            }
                        };
                    }
                    merchandiseAvailable: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/merchandiseAvailable
                        $get(): Promise<telephony.HardwareOffer[]>;
                    }
                    phonebook: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook
                        $get(): Promise<string[]>;
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/phonebook
                        $post(params: {name: string}): Promise<string>;
                        $(bookKey: string): {
                            // DELETE /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                            $get(): Promise<telephony.Phonebook>;
                            // PUT /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                            $put(params?: {bookKey?: string, isReadonly?: boolean, name?: string, phoneKey?: string}): Promise<void>;
                            export: {
                                // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export
                                $get(params: {format: telephony.ContactsExportFormatsEnum}): Promise<telephony.PcsFile>;
                            }
                            import: {
                                // POST /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/import
                                $post(params: {documentId: string}): Promise<telephony.Task>;
                            }
                            phonebookContact: {
                                // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact
                                $get(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact
                                $post(params: {group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}): Promise<number>;
                                $(id: number): {
                                    // DELETE /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                    $delete(): Promise<void>;
                                    // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                    $get(): Promise<telephony.PhonebookContact>;
                                    // PUT /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                    $put(params?: {group?: string, homeMobile?: string, homePhone?: string, id?: number, name?: string, surname?: string, workMobile?: string, workPhone?: string}): Promise<void>;
                                };
                            }
                        };
                    }
                    reboot: {
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/reboot
                        $post(): Promise<telephony.Task>;
                    }
                    refreshScreen: {
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/refreshScreen
                        $post(): Promise<telephony.Task>;
                    }
                    resetConfig: {
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/resetConfig
                        $post(params: {ip: string}): Promise<telephony.ResetPhoneInfo>;
                    }
                    rma: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/rma
                        $get(): Promise<string[]>;
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/rma
                        $post(params: {mondialRelayId?: string, newMerchandise?: string, shippingContactId?: number, type: telephony.RmaPublicTypeEnum}): Promise<telephony.RmaReturn>;
                        $(id: string): {
                            // DELETE /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                            $get(): Promise<telephony.Rma>;
                            // PUT /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                            $put(params?: {cancellable?: boolean, creationDatetime?: string, equipmentReference?: string, id?: string, newMerchandise?: string, offerTypeNew?: telephony.RmaOfferTypeEnum, offerTypeOld?: telephony.RmaOfferTypeEnum, process?: telephony.RmaReplaceTypeEnum, receptionDatetime?: string, shippingContact?: telephony.Contact, status?: telephony.RmaStatusEnum, steps?: telephony.RmaStep[], terminationDatetime?: string, type?: telephony.RmaTypeEnum}): Promise<void>;
                        };
                    }
                    supportsPhonebook: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/supportsPhonebook
                        $get(): Promise<boolean>;
                    }
                }
                phoneCanBeAssociable: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/phoneCanBeAssociable
                    $get(): Promise<telephony.LinePhone[]>;
                }
                records: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/records
                    $get(): Promise<number[]>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/line/{serviceName}/records/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/line/{serviceName}/records/{id}
                        $get(): Promise<telephony.OvhPabxRecord>;
                    };
                }
                removeSimultaneousLines: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/removeSimultaneousLines
                    $post(params: {quantityRemove: number}): Promise<void>;
                }
                simultaneousChannelsDetails: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/simultaneousChannelsDetails
                    $get(): Promise<telephony.SimultaneousChannelsDetails>;
                }
                statistics: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/statistics
                    $get(params: {timeframe: telephony.StatisticsTimeframeEnum, type: telephony.LineStatisticsTypeEnum}): Promise<complexType.UnitAndValues<telephony.TimestampAndValue>>;
                }
                tones: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/tones
                    $get(): Promise<telephony.Tones>;
                    // PUT /telephony/{billingAccount}/line/{serviceName}/tones
                    $put(params?: {callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum}): Promise<void>;
                    toneUpload: {
                        // POST /telephony/{billingAccount}/line/{serviceName}/tones/toneUpload
                        $post(params: {documentId?: string, type: telephony.TonesTypeEnum, url?: string}): Promise<telephony.Task>;
                    }
                }
                trafficExtracts: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/trafficExtracts
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/trafficExtracts
                    $post(params: {dateEnd: string, dateStart: string}): Promise<telephony.trafficExtract>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}
                        $get(): Promise<telephony.trafficExtract>;
                    };
                }
                unblock: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/unblock
                    $post(): Promise<void>;
                }
            };
        }
        miniPabx: {
            // GET /telephony/{billingAccount}/miniPabx
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/miniPabx/{serviceName}
                $get(): Promise<telephony.MiniPabx>;
                // PUT /telephony/{billingAccount}/miniPabx/{serviceName}
                $put(params?: {description?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum}): Promise<void>;
                hunting: {
                    // GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting
                    $get(): Promise<telephony.MiniPabxHunting>;
                    // PUT /telephony/{billingAccount}/miniPabx/{serviceName}/hunting
                    $put(params?: {anonymousCallRejection?: boolean, name?: string, numberOfCalls?: number, onHoldTimer?: number, pattern?: telephony.EasyMiniPabxHuntingPatternEnum, queueSize?: number, strategy?: telephony.EasyMiniPabxHuntingStrategyEnum, toneOnClosure?: boolean, toneOnClosureSoundId?: number, toneOnHold?: boolean, toneOnHoldSoundId?: number, toneRingback?: boolean, toneRingbackSoundId?: number}): Promise<void>;
                    agent: {
                        // GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent
                        $get(): Promise<string[]>;
                        // POST /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent
                        $post(params: {agentNumber: string, logged: boolean, noReplyTimer: number, position: number}): Promise<telephony.EasyMiniPabxHuntingAgent>;
                        $(agentNumber: string): {
                            // DELETE /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                            $get(): Promise<telephony.EasyMiniPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                            $put(params?: {agentNumber?: string, logged?: boolean, noReplyTimer?: number, position?: number}): Promise<void>;
                        };
                    }
                }
                tones: {
                    // GET /telephony/{billingAccount}/miniPabx/{serviceName}/tones
                    $get(): Promise<telephony.Tones>;
                    // PUT /telephony/{billingAccount}/miniPabx/{serviceName}/tones
                    $put(params?: {callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum}): Promise<void>;
                    toneUpload: {
                        // POST /telephony/{billingAccount}/miniPabx/{serviceName}/tones/toneUpload
                        $post(params: {documentId?: string, type: telephony.TonesTypeEnum, url?: string}): Promise<telephony.Task>;
                    }
                }
            };
        }
        number: {
            // GET /telephony/{billingAccount}/number
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/number/{serviceName}
                $get(): Promise<telephony.Number>;
                // PUT /telephony/{billingAccount}/number/{serviceName}
                $put(params?: {description?: string, featureType?: telephony.TypeEnum, partOfPool?: string, serviceName?: string, serviceType?: telephony.TypeServiceEnum}): Promise<void>;
                cancelConvertToLine: {
                    // POST /telephony/{billingAccount}/number/{serviceName}/cancelConvertToLine
                    $post(): Promise<void>;
                }
                changeFeatureType: {
                    // POST /telephony/{billingAccount}/number/{serviceName}/changeFeatureType
                    $post(params: {featureType: telephony.TypeEnum}): Promise<telephony.Task>;
                }
                convertToLine: {
                    // POST /telephony/{billingAccount}/number/{serviceName}/convertToLine
                    $post(params: {offer: string}): Promise<telephony.OfferTask>;
                }
                convertToLineAvailableOffers: {
                    // GET /telephony/{billingAccount}/number/{serviceName}/convertToLineAvailableOffers
                    $get(): Promise<telephony.LineOffersAndContracts>;
                }
            };
        }
        offerTask: {
            // GET /telephony/{billingAccount}/offerTask
            $get(params?: {action?: telephony.OfferTaskActionEnum, status?: telephony.TaskStatusEnum, type?: telephony.OfferTaskTypeEnum}): Promise<number[]>;
            $(taskId: number): {
                // GET /telephony/{billingAccount}/offerTask/{taskId}
                $get(): Promise<telephony.OfferTask>;
                // PUT /telephony/{billingAccount}/offerTask/{taskId}
                $put(params?: {action?: telephony.OfferTaskActionEnum, executionDate?: string, status?: telephony.TaskStatusEnum, taskId?: number, type?: telephony.OfferTaskTypeEnum}): Promise<void>;
            };
        }
        oldPhone: {
            // GET /telephony/{billingAccount}/oldPhone
            $get(): Promise<telephony.Phone[]>;
        }
        outplanNotification: {
            // GET /telephony/{billingAccount}/outplanNotification
            $get(): Promise<number[]>;
            // POST /telephony/{billingAccount}/outplanNotification
            $post(params: {block: telephony.OutplanNotificationBlockEnum, notifyEmail?: string, percentage: number}): Promise<telephony.ConsumptionThreshold>;
            $(id: number): {
                // DELETE /telephony/{billingAccount}/outplanNotification/{id}
                $delete(): Promise<void>;
                // GET /telephony/{billingAccount}/outplanNotification/{id}
                $get(): Promise<telephony.ConsumptionThreshold>;
            };
        }
        ovhPabx: {
            // GET /telephony/{billingAccount}/ovhPabx
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}
                $get(): Promise<telephony.OvhPabx>;
                // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}
                $put(params?: {description?: string, featureType?: telephony.TypeEnum, isCCS?: boolean, serviceName?: string, serviceType?: telephony.TypeServiceEnum}): Promise<void>;
                dialplan: {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan
                    $post(params: {anonymousRejection: boolean, name: string, showCallerNumber: telephony.OvhPabxDialplanNumberPresentationEnum, transferTimeout: number}): Promise<telephony.OvhPabxDialplan>;
                    $(dialplanId: number): {
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                        $get(): Promise<telephony.OvhPabxDialplan>;
                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                        $put(params?: {anonymousRejection?: boolean, dialplanId?: number, lastUpdate?: string, name?: string, showCallerNumber?: telephony.OvhPabxDialplanNumberPresentationEnum, transferTimeout?: number}): Promise<void>;
                        extension: {
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension
                            $get(): Promise<number[]>;
                            // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension
                            $post(params: {enable: boolean, position: number, schedulerCategory?: telephony.SchedulerCategoryEnum, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<telephony.OvhPabxDialplanExtension>;
                            $(extensionId: number): {
                                // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                $delete(): Promise<void>;
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                $get(): Promise<telephony.OvhPabxDialplanExtension>;
                                // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                $put(params?: {enabled?: boolean, extensionId?: number, position?: number, schedulerCategory?: telephony.SchedulerCategoryEnum, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<void>;
                                conditionScreenList: {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList
                                    $get(): Promise<number[]>;
                                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList
                                    $post(params?: {callerIdNumber?: string, destinationNumber?: string, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<telephony.OvhPabxDialplanExtensionConditionScreenList>;
                                    $(conditionId: number): {
                                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}
                                        $delete(): Promise<void>;
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}
                                        $get(): Promise<telephony.OvhPabxDialplanExtensionConditionScreenList>;
                                    };
                                }
                                conditionTime: {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime
                                    $get(): Promise<number[]>;
                                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime
                                    $post(params: {timeFrom: string, timeTo: string, weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}): Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
                                    $(conditionId: number): {
                                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                        $delete(): Promise<void>;
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                        $get(): Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
                                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                        $put(params?: {conditionId?: number, timeFrom?: string, timeTo?: string, weekDay?: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}): Promise<void>;
                                    };
                                }
                                rule: {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule
                                    $get(): Promise<number[]>;
                                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule
                                    $post(params: {action: telephony.OvhPabxDialplanExtensionRuleActionEnum, actionParam?: string, negativeAction: boolean, position: number}): Promise<telephony.OvhPabxDialplanExtensionRule>;
                                    $(ruleId: number): {
                                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                        $delete(): Promise<void>;
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                        $get(): Promise<telephony.OvhPabxDialplanExtensionRule>;
                                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                        $put(params?: {action?: telephony.OvhPabxDialplanExtensionRuleActionEnum, actionParam?: string, negativeAction?: boolean, position?: number, ruleId?: number}): Promise<void>;
                                    };
                                }
                            };
                        }
                    };
                }
                hunting: {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting
                    $get(): Promise<telephony.OvhPabxHunting>;
                    // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting
                    $put(params?: {crmUrlTemplate?: string, g729?: boolean, name?: string, statusIvrEnabled?: boolean}): Promise<void>;
                    agent: {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent
                        $get(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent
                        $post(params: {description?: string, number: string, simultaneousLines: number, status: telephony.OvhPabxHuntingAgentStatusEnum, timeout: number, wrapUpTime: number}): Promise<telephony.OvhPabxHuntingAgent>;
                        $(agentId: number): {
                            // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                            $get(): Promise<telephony.OvhPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                            $put(params?: {agentId?: number, breakStatus?: number, description?: string, number?: string, simultaneousLines?: number, status?: telephony.OvhPabxHuntingAgentStatusEnum, timeout?: number, type?: telephony.OvhPabxHuntingAgentTypeEnum, wrapUpTime?: number}): Promise<void>;
                            bannerAccess: {
                                // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                $delete(): Promise<void>;
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                $get(): Promise<telephony.BannerAccess>;
                                // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                $post(): Promise<telephony.BannerAccess>;
                            }
                            calls: {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls
                                $get(): Promise<number[]>;
                                $(id: number): {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}
                                    $get(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    eavesdrop: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    hangup: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup
                                        $post(): Promise<telephony.Task>;
                                    }
                                    hold: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold
                                        $post(): Promise<telephony.Task>;
                                    }
                                    intercept: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper
                                        $post(params: {number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
                                    }
                                };
                            }
                            eventToken: {
                                // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                $delete(): Promise<void>;
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                $get(): Promise<telephony.EventToken>;
                                // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                $post(params: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
                            }
                            liveStatus: {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/liveStatus
                                $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                            }
                            queue: {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue
                                $get(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue
                                $post(params: {position: number, queueId: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                $(queueId: number): {
                                    // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $delete(): Promise<void>;
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $put(params?: {agentId?: number, position?: number, queueId?: number}): Promise<void>;
                                    liveStatus: {
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus
                                        $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                    }
                                };
                            }
                        };
                    }
                    customStatus: {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus
                        $get(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus
                        $post(params: {color?: string, description?: string, name: string}): Promise<telephony.OvhPabxCustomStatus>;
                        $(id: number): {
                            // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}
                            $get(): Promise<telephony.OvhPabxCustomStatus>;
                        };
                    }
                    eventToken: {
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken
                        $get(): Promise<telephony.EventToken>;
                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken
                        $post(params: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
                    }
                    queue: {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue
                        $get(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue
                        $post(params: {actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy: telephony.OvhPabxHuntingQueueStrategyEnum}): Promise<telephony.OvhPabxHuntingQueue>;
                        $(queueId: number): {
                            // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                            $get(): Promise<telephony.OvhPabxHuntingQueue>;
                            // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                            $put(params?: {actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, followCallForwards?: boolean, maxMember?: number, maxWaitTime?: number, queueId?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum}): Promise<void>;
                            agent: {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent
                                $get(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent
                                $post(params: {position: number, queueId: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                $(agentId: number): {
                                    // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $delete(): Promise<void>;
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $put(params?: {agentId?: number, position?: number, queueId?: number}): Promise<void>;
                                    liveStatus: {
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus
                                        $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                    }
                                };
                            }
                            liveCalls: {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls
                                $get(): Promise<number[]>;
                                $(id: number): {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}
                                    $get(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    eavesdrop: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    hangup: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup
                                        $post(): Promise<telephony.Task>;
                                    }
                                    hold: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold
                                        $post(): Promise<telephony.Task>;
                                    }
                                    intercept: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer
                                        $post(params: {number: string}): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper
                                        $post(params: {number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
                                    }
                                };
                            }
                            liveStatistics: {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveStatistics
                                $get(): Promise<telephony.OvhPabxHuntingQueueLiveStatistics>;
                            }
                        };
                    }
                }
                menu: {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/menu
                    $post(params: {greetSound?: number, greetSoundTts?: number, invalidSound?: number, invalidSoundTts?: number, name: string}): Promise<telephony.OvhPabxMenu>;
                    $(menuId: number): {
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                        $get(): Promise<telephony.OvhPabxMenu>;
                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                        $put(params?: {greetSound?: number, greetSoundTts?: number, invalidSound?: number, invalidSoundTts?: number, menuId?: number, name?: string}): Promise<void>;
                        entry: {
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry
                            $get(): Promise<number[]>;
                            // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry
                            $post(params: {action: telephony.OvhPabxIvrMenuEntryActionEnum, actionParam?: string, dtmf: string, position: number}): Promise<telephony.OvhPabxMenuEntry>;
                            $(entryId: number): {
                                // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                $delete(): Promise<void>;
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                $get(): Promise<telephony.OvhPabxMenuEntry>;
                                // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                $put(params?: {action?: telephony.OvhPabxIvrMenuEntryActionEnum, actionParam?: string, dtmf?: string, entryId?: number, position?: number}): Promise<void>;
                            };
                        }
                    };
                }
                records: {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/records
                    $get(): Promise<number[]>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}
                        $get(): Promise<telephony.OvhPabxRecord>;
                    };
                }
                sound: {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/sound
                    $get(): Promise<number[]>;
                    $(soundId: number): {
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}
                        $get(): Promise<telephony.OvhPabxSound>;
                    };
                }
                soundUpload: {
                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/soundUpload
                    $post(params?: {documentId?: string, name?: string, url?: string}): Promise<telephony.Task>;
                }
                tts: {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/tts
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/tts
                    $post(params: {text: string, voice?: telephony.OvhPabxTtsVoiceEnum}): Promise<void>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                        $get(): Promise<telephony.OvhPabxTts>;
                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                        $put(params?: {id?: number, text?: string, voice?: telephony.OvhPabxTtsVoiceEnum}): Promise<void>;
                    };
                }
            };
        }
        phonebook: {
            // GET /telephony/{billingAccount}/phonebook
            $get(): Promise<string[]>;
            // POST /telephony/{billingAccount}/phonebook
            $post(params: {name: string}): Promise<string>;
            $(bookKey: string): {
                // DELETE /telephony/{billingAccount}/phonebook/{bookKey}
                $delete(): Promise<void>;
                // GET /telephony/{billingAccount}/phonebook/{bookKey}
                $get(): Promise<telephony.PhonebookMaster>;
                // PUT /telephony/{billingAccount}/phonebook/{bookKey}
                $put(params?: {bookKey?: string, name?: string}): Promise<void>;
                export: {
                    // GET /telephony/{billingAccount}/phonebook/{bookKey}/export
                    $get(params: {format: telephony.ContactsExportFormatsEnum}): Promise<telephony.PcsFile>;
                }
                import: {
                    // POST /telephony/{billingAccount}/phonebook/{bookKey}/import
                    $post(params: {documentId: string}): Promise<telephony.Task>;
                }
                phonebookContact: {
                    // GET /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact
                    $post(params: {group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}): Promise<number>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                        $get(): Promise<telephony.PhonebookContact>;
                        // PUT /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                        $put(params?: {group?: string, homeMobile?: string, homePhone?: string, id?: number, name?: string, surname?: string, workMobile?: string, workPhone?: string}): Promise<void>;
                    };
                }
            };
        }
        portability: {
            // GET /telephony/{billingAccount}/portability
            $get(): Promise<number[]>;
            $(id: number): {
                // GET /telephony/{billingAccount}/portability/{id}
                $get(): Promise<telephony.Portability>;
                canBeCancelled: {
                    // GET /telephony/{billingAccount}/portability/{id}/canBeCancelled
                    $get(): Promise<boolean>;
                }
                canBeExecuted: {
                    // GET /telephony/{billingAccount}/portability/{id}/canBeExecuted
                    $get(): Promise<boolean>;
                }
                cancel: {
                    // POST /telephony/{billingAccount}/portability/{id}/cancel
                    $post(params?: {reason?: string}): Promise<void>;
                }
                changeDate: {
                    // POST /telephony/{billingAccount}/portability/{id}/changeDate
                    $post(params: {date: string}): Promise<void>;
                }
                dateCanBeChanged: {
                    // GET /telephony/{billingAccount}/portability/{id}/dateCanBeChanged
                    $get(): Promise<boolean>;
                }
                document: {
                    // GET /telephony/{billingAccount}/portability/{id}/document
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/portability/{id}/document
                    $post(params: {description?: string, name: string}): Promise<telephony.PortabilityDocument>;
                    $(documentId: number): {
                        // DELETE /telephony/{billingAccount}/portability/{id}/document/{documentId}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/portability/{id}/document/{documentId}
                        $get(): Promise<telephony.PortabilityDocument>;
                        // PUT /telephony/{billingAccount}/portability/{id}/document/{documentId}
                        $put(params?: {description?: string, documentId?: number, getUrl?: string, name?: string, putUrl?: string, size?: number}): Promise<void>;
                    };
                }
                execute: {
                    // POST /telephony/{billingAccount}/portability/{id}/execute
                    $post(): Promise<void>;
                }
                relaunch: {
                    // GET /telephony/{billingAccount}/portability/{id}/relaunch
                    $get(): Promise<telephony.PortabilityFixErrorPossibleParameters>;
                    // POST /telephony/{billingAccount}/portability/{id}/relaunch
                    $post(params: {parameters: complexType.SafeKeyValue<string>[]}): Promise<void>;
                }
                status: {
                    // GET /telephony/{billingAccount}/portability/{id}/status
                    $get(): Promise<telephony.PortabilityStep[]>;
                }
            };
        }
        redirect: {
            // GET /telephony/{billingAccount}/redirect
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/redirect/{serviceName}
                $get(): Promise<telephony.Redirect>;
                // PUT /telephony/{billingAccount}/redirect/{serviceName}
                $put(params?: {description?: string, destination?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum}): Promise<void>;
                changeDestination: {
                    // POST /telephony/{billingAccount}/redirect/{serviceName}/changeDestination
                    $post(params: {destination: string}): Promise<telephony.Task>;
                }
            };
        }
        rsva: {
            // GET /telephony/{billingAccount}/rsva
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/rsva/{serviceName}
                $get(): Promise<telephony.Rsva>;
                // PUT /telephony/{billingAccount}/rsva/{serviceName}
                $put(params?: {serviceName?: string, typology?: telephony.portability.SpecialNumberCategoryEnum}): Promise<void>;
                allowedRateCodes: {
                    // GET /telephony/{billingAccount}/rsva/{serviceName}/allowedRateCodes
                    $get(): Promise<telephony.RateCodeInformation[]>;
                }
                cancelScheduledRateCode: {
                    // POST /telephony/{billingAccount}/rsva/{serviceName}/cancelScheduledRateCode
                    $post(): Promise<void>;
                }
                currentRateCode: {
                    // GET /telephony/{billingAccount}/rsva/{serviceName}/currentRateCode
                    $get(): Promise<telephony.DetailedRateCodeInformation>;
                }
                scheduleRateCode: {
                    // POST /telephony/{billingAccount}/rsva/{serviceName}/scheduleRateCode
                    $post(params: {rateCode: string}): Promise<telephony.DetailedRateCodeInformation>;
                }
                scheduledRateCode: {
                    // GET /telephony/{billingAccount}/rsva/{serviceName}/scheduledRateCode
                    $get(): Promise<telephony.DetailedRateCodeInformation>;
                }
            };
        }
        scheduler: {
            // GET /telephony/{billingAccount}/scheduler
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/scheduler/{serviceName}
                $get(): Promise<telephony.Scheduler>;
                // PUT /telephony/{billingAccount}/scheduler/{serviceName}
                $put(params?: {serviceName?: string, timeZone?: telephony.timeZone}): Promise<void>;
                events: {
                    // GET /telephony/{billingAccount}/scheduler/{serviceName}/events
                    $get(params?: {categories?: telephony.SchedulerCategoryEnum, dateEnd_from?: string, dateEnd_to?: string, dateStart_from?: string, dateStart_to?: string}): Promise<string[]>;
                    // POST /telephony/{billingAccount}/scheduler/{serviceName}/events
                    $post(params: {category: telephony.SchedulerCategoryEnum, dateEnd: string, dateStart: string, description?: string, title: string, uid?: string}): Promise<void>;
                    $(uid: string): {
                        // DELETE /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                        $get(): Promise<telephony.SchedulerEvent>;
                        // PUT /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                        $put(params?: {categories?: telephony.SchedulerCategoryEnum, dateEnd?: string, dateStart?: string, description?: string, title?: string, uid?: string}): Promise<void>;
                    };
                }
                importIcsCalendar: {
                    // POST /telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar
                    $post(params: {url: string}): Promise<telephony.Task>;
                }
            };
        }
        screen: {
            // GET /telephony/{billingAccount}/screen
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/screen/{serviceName}
                $get(): Promise<telephony.Screen>;
                // PUT /telephony/{billingAccount}/screen/{serviceName}
                $put(params?: {incomingScreenList?: telephony.ScreenListChoosingEnum, outgoingScreenList?: telephony.ScreenListChoosingEnum, serviceName?: string}): Promise<void>;
                screenLists: {
                    // GET /telephony/{billingAccount}/screen/{serviceName}/screenLists
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/screen/{serviceName}/screenLists
                    $post(params: {callNumber?: string, nature: telephony.ScreenListNatureEnum, type: telephony.ScreenListTypeEnum}): Promise<void>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}
                        $get(): Promise<telephony.ScreenList>;
                    };
                }
            };
        }
        service: {
            // GET /telephony/{billingAccount}/service
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // DELETE /telephony/{billingAccount}/service/{serviceName}
                $delete(): Promise<void>;
                // GET /telephony/{billingAccount}/service/{serviceName}
                $get(): Promise<telephony.TelephonyService>;
                // PUT /telephony/{billingAccount}/service/{serviceName}
                $put(params?: {country?: telephony.NumberCountryEnum, countryCode?: telephony.NumberCountryCodeEnum, currentOutplan?: orderPrice, description?: string, featureType?: telephony.TypeEnum, getPublicOffer?: telephony.LineOffer, hasFaxCapabilities?: boolean, offers?: string[], properties?: telephony.PropertyEnum[], rio?: string, serviceName?: string, serviceType?: telephony.TypeServiceEnum, simultaneousLines?: number}): Promise<void>;
                cancelTermination: {
                    // POST /telephony/{billingAccount}/service/{serviceName}/cancelTermination
                    $post(): Promise<void>;
                }
                changeOfBillingAccount: {
                    // POST /telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount
                    $post(params: {billingAccountDestination: string}): Promise<void>;
                }
                diagnosticReports: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/diagnosticReports
                    $get(params: {dayInterval: telephony.DiagnosticReportIndexEnum}): Promise<telephony.DiagnosticReport[]>;
                }
                directory: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/directory
                    $get(): Promise<telephony.DirectoryInfo>;
                    // PUT /telephony/{billingAccount}/service/{serviceName}/directory
                    $put(params?: {PJSocialNomination?: string, address?: string, addressExtra?: string, ape?: string, areaCode?: number, birthDate?: string, cedex?: string, city?: string, country?: string, directoryServiceCode?: string, displayFirstName?: boolean, displayMarketingDirectory?: boolean, displayOnlyCity?: boolean, displaySearchReverse?: boolean, displayUniversalDirectory?: boolean, email?: string, firstName?: string, gender?: nichandle.GenderEnum, inseeCode?: number, legalForm?: string, lineDescription?: string, modificationDate?: string, modificationType?: string, name?: string, number?: string, occupation?: string, postBox?: string, postCode?: string, receivePJDirectory?: boolean, siret?: string, socialNomination?: string, socialNominationExtra?: string, status?: string, urbanDistrict?: string, wayName?: string, wayNumber?: string, wayNumberExtra?: string, wayType?: string}): Promise<void>;
                    fetchEntrepriseInformations: {
                        // POST /telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations
                        $post(params: {entrepriseNumber: string}): Promise<telephony.EntrepriseNumberInformationsTask>;
                    }
                    getDirectoryServiceCode: {
                        // GET /telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode
                        $get(params: {apeCode: string}): Promise<telephony.DirectoryHeadingPJ[]>;
                    }
                    getWayTypes: {
                        // GET /telephony/{billingAccount}/service/{serviceName}/directory/getWayTypes
                        $get(): Promise<telephony.DirectoryWayType[]>;
                    }
                }
                eventToken: {
                    // DELETE /telephony/{billingAccount}/service/{serviceName}/eventToken
                    $delete(): Promise<void>;
                    // GET /telephony/{billingAccount}/service/{serviceName}/eventToken
                    $get(): Promise<telephony.EventToken>;
                    // POST /telephony/{billingAccount}/service/{serviceName}/eventToken
                    $post(params: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
                }
                faxConsumption: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/faxConsumption
                    $get(params?: {creationDatetime_from?: string, creationDatetime_to?: string, wayType?: telephony.FaxConsumptionWayTypeEnum}): Promise<number[]>;
                    $(consumptionId: number): {
                        // GET /telephony/{billingAccount}/service/{serviceName}/faxConsumption/{consumptionId}
                        $get(): Promise<telephony.FaxConsumption>;
                    };
                }
                offerChange: {
                    // DELETE /telephony/{billingAccount}/service/{serviceName}/offerChange
                    $delete(): Promise<void>;
                    // GET /telephony/{billingAccount}/service/{serviceName}/offerChange
                    $get(): Promise<telephony.OfferChange>;
                    // POST /telephony/{billingAccount}/service/{serviceName}/offerChange
                    $post(params: {offer: string}): Promise<void>;
                }
                offerChanges: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/offerChanges
                    $get(): Promise<telephony.LineOffer[]>;
                }
                offerTask: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/offerTask
                    $get(params?: {action?: telephony.OfferTaskActionEnum, status?: telephony.TaskStatusEnum, type?: telephony.OfferTaskTypeEnum}): Promise<number[]>;
                    $(taskId: number): {
                        // GET /telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}
                        $get(): Promise<telephony.OfferTask>;
                        // PUT /telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}
                        $put(params?: {action?: telephony.OfferTaskActionEnum, executionDate?: string, status?: telephony.TaskStatusEnum, taskId?: number, type?: telephony.OfferTaskTypeEnum}): Promise<void>;
                    };
                }
                previousVoiceConsumption: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption
                    $get(params?: {creationDatetime_from?: string, creationDatetime_to?: string, destinationType?: telephony.VoiceConsumptionDestinationTypeEnum, planType?: telephony.VoiceConsumptionPlanTypeEnum, wayType?: telephony.VoiceConsumptionWayTypeEnum}): Promise<number[]>;
                    $(consumptionId: number): {
                        // GET /telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption/{consumptionId}
                        $get(): Promise<telephony.PreviousVoiceConsumption>;
                    };
                }
                repaymentConsumption: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/repaymentConsumption
                    $get(params?: {creationDatetime_from?: string, creationDatetime_to?: string}): Promise<number[]>;
                    $(consumptionId: number): {
                        // GET /telephony/{billingAccount}/service/{serviceName}/repaymentConsumption/{consumptionId}
                        $get(): Promise<telephony.RepaymentConsumption>;
                    };
                }
                task: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/task
                    $get(params?: {action?: string, serviceType?: string, status?: telephony.TaskStatusEnum}): Promise<number[]>;
                    $(taskId: number): {
                        // GET /telephony/{billingAccount}/service/{serviceName}/task/{taskId}
                        $get(): Promise<telephony.Task>;
                    };
                }
                voiceConsumption: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/voiceConsumption
                    $get(params?: {creationDatetime_from?: string, creationDatetime_to?: string, destinationType?: telephony.VoiceConsumptionDestinationTypeEnum, planType?: telephony.VoiceConsumptionPlanTypeEnum, wayType?: telephony.VoiceConsumptionWayTypeEnum}): Promise<number[]>;
                    $(consumptionId: number): {
                        // GET /telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}
                        $get(): Promise<telephony.VoiceConsumption>;
                        callDiagnostics: {
                            // GET /telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}/callDiagnostics
                            $get(): Promise<telephony.CallDiagnostics>;
                        }
                    };
                }
            };
        }
        serviceInfos: {
            // GET /telephony/{billingAccount}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /telephony/{billingAccount}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        task: {
            // GET /telephony/{billingAccount}/task
            $get(params?: {action?: string, serviceType?: string, status?: telephony.TaskStatusEnum}): Promise<number[]>;
            $(taskId: number): {
                // GET /telephony/{billingAccount}/task/{taskId}
                $get(): Promise<telephony.Task>;
            };
        }
        timeCondition: {
            // GET /telephony/{billingAccount}/timeCondition
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/timeCondition/{serviceName}
                $get(): Promise<telephony.GenericScreen>;
                condition: {
                    // GET /telephony/{billingAccount}/timeCondition/{serviceName}/condition
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/timeCondition/{serviceName}/condition
                    $post(params: {day: telephony.TimeConditionsDayEnum, hourBegin: string, hourEnd: string, policy: telephony.TimeConditionsPolicyEnum}): Promise<telephony.TimeCondition>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                        $get(): Promise<telephony.TimeCondition>;
                        // PUT /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                        $put(params?: {day?: telephony.TimeConditionsDayEnum, hourBegin?: string, hourEnd?: string, id?: number, policy?: telephony.TimeConditionsPolicyEnum, status?: string}): Promise<void>;
                    };
                }
                options: {
                    // GET /telephony/{billingAccount}/timeCondition/{serviceName}/options
                    $get(): Promise<telephony.TimeConditionOptions>;
                    // PUT /telephony/{billingAccount}/timeCondition/{serviceName}/options
                    $put(params?: {slot1Number?: string, slot1Type?: telephony.TimeConditionsSlotTypeEnum, slot2Number?: string, slot2Type?: telephony.TimeConditionsSlotTypeEnum, slot3Number?: string, slot3Type?: telephony.TimeConditionsSlotTypeEnum, status?: telephony.TimeConditionsGlobalStatusEnum, timeout?: telephony.TimeConditionsTimeoutEnum, unavailableNumber?: string, unavailableType?: telephony.TimeConditionsSlotTypeEnum}): Promise<void>;
                }
            };
        }
        transferSecurityDeposit: {
            // POST /telephony/{billingAccount}/transferSecurityDeposit
            $post(params: {amount: number, billingAccountDestination: string}): Promise<void>;
        }
        trunk: {
            // GET /telephony/{billingAccount}/trunk
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/trunk/{serviceName}
                $get(): Promise<telephony.Trunk>;
                channelsPacksRepartition: {
                    // GET /telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition
                    $get(params: {quantity: number}): Promise<telephony.TrunkSimultaneousPacksRepartition>;
                }
                externalDisplayedNumber: {
                    // GET /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber
                    $get(): Promise<string[]>;
                    // POST /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber
                    $post(params: {autoValidation?: boolean, number: string}): Promise<telephony.TrunkExternalDisplayedNumber>;
                    $(number: string): {
                        // DELETE /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}
                        $get(): Promise<telephony.TrunkExternalDisplayedNumber>;
                        validate: {
                            // POST /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}/validate
                            $post(): Promise<telephony.TrunkExternalDisplayedNumberValidation>;
                        }
                    };
                }
            };
        }
        voicemail: {
            // GET /telephony/{billingAccount}/voicemail
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/voicemail/{serviceName}
                $get(): Promise<telephony.Voicemail>;
                // PUT /telephony/{billingAccount}/voicemail/{serviceName}
                $put(params?: {description?: string, offers?: string[], serviceName?: string, serviceType?: telephony.TypeServiceEnum}): Promise<void>;
                directories: {
                    // GET /telephony/{billingAccount}/voicemail/{serviceName}/directories
                    $get(params?: {dir?: telephony.VoicemailMessageFolderDirectoryEnum}): Promise<number[]>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}
                        $get(): Promise<telephony.VoicemailMessages>;
                        download: {
                            // GET /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/download
                            $get(params?: {format?: telephony.ServiceVoicemailAudioFormatEnum}): Promise<telephony.PcsFile>;
                        }
                        move: {
                            // POST /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/move
                            $post(params: {dir: telephony.VoicemailMessageFolderDirectoryEnum}): Promise<void>;
                        }
                    };
                }
                greetings: {
                    // GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings
                    $get(params?: {dir?: telephony.VoicemailMessageFolderGreetingEnum}): Promise<number[]>;
                    // POST /telephony/{billingAccount}/voicemail/{serviceName}/greetings
                    $post(params: {dir: telephony.VoicemailMessageFolderGreetingEnum, documentId: string}): Promise<number>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}
                        $get(): Promise<telephony.VoicemailGreetings>;
                        download: {
                            // GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/download
                            $get(params?: {format?: telephony.ServiceVoicemailAudioFormatEnum}): Promise<telephony.PcsFile>;
                        }
                        move: {
                            // POST /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move
                            $post(params: {dir: telephony.VoicemailMessageFolderGreetingEnum}): Promise<void>;
                        }
                    };
                }
                migrateOnNewVersion: {
                    // POST /telephony/{billingAccount}/voicemail/{serviceName}/migrateOnNewVersion
                    $post(): Promise<void>;
                }
                settings: {
                    // GET /telephony/{billingAccount}/voicemail/{serviceName}/settings
                    $get(): Promise<telephony.VoicemailProperties>;
                    // PUT /telephony/{billingAccount}/voicemail/{serviceName}/settings
                    $put(params?: {annouceMessage?: string, audioFormat?: telephony.ServiceVoicemailAudioFormatEnum, doNotRecord?: boolean, forcePassword?: boolean, fromEmail?: string, fromName?: string, fullGreetingSoundId?: number, greetingType?: telephony.VoicemailGreetingEnum, isNewVersion?: boolean, keepMessage?: boolean, redirectionEmails?: telephony.ServiceVoicemailNotifications[], shortGreetingSoundId?: number, temporaryGreetingActivated?: boolean, temporaryGreetingSoundId?: number, unreadMessages?: number}): Promise<void>;
                    changePassword: {
                        // POST /telephony/{billingAccount}/voicemail/{serviceName}/settings/changePassword
                        $post(params: {password: string}): Promise<void>;
                    }
                    changeRouting: {
                        // POST /telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting
                        $post(params: {routing: telephony.VoicefaxRoutingEnum}): Promise<void>;
                    }
                    routing: {
                        // GET /telephony/{billingAccount}/voicemail/{serviceName}/settings/routing
                        $get(): Promise<telephony.VoicefaxRoutingEnum>;
                    }
                    voicemailNumbers: {
                        // GET /telephony/{billingAccount}/voicemail/{serviceName}/settings/voicemailNumbers
                        $get(): Promise<telephony.VoicemailNumbers>;
                    }
                }
            };
        }
        vxml: {
            // GET /telephony/{billingAccount}/vxml
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/vxml/{serviceName}
                $get(): Promise<telephony.Vxml>;
                settings: {
                    // GET /telephony/{billingAccount}/vxml/{serviceName}/settings
                    $get(): Promise<telephony.VxmlProperties>;
                    // PUT /telephony/{billingAccount}/vxml/{serviceName}/settings
                    $put(params?: {url?: string, urlRecord?: string}): Promise<void>;
                    logs: {
                        // POST /telephony/{billingAccount}/vxml/{serviceName}/settings/logs
                        $post(): Promise<telephony.TemporaryLogsLink>;
                    }
                }
            };
        }
    };
// Api
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/telephony'): () => Promise<string[]>;
  /**
   * Billing Account
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}'): (params: {billingAccount: string}) => Promise<telephony.BillingAccount>;
  /**
   * List the telephony.AbbreviatedNumberGroup objects
   * Abbreviated numbers for the billing account
   */
  get(path: '/telephony/{billingAccount}/abbreviatedNumber'): (params: {billingAccount: string}) => Promise<number[]>;
  /**
   * Abbreviated number
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}'): (params: {abbreviatedNumber: number, billingAccount: string}) => Promise<telephony.AbbreviatedNumberGroup>;
  /**
   * allowedCreditThreshold operations
   * Get the allowed creditThreshold for this billing account
   */
  get(path: '/telephony/{billingAccount}/allowedCreditThreshold'): (params: {billingAccount: string}) => Promise<order.Price[]>;
  /**
   * amountSecurityDeposit operations
   * Give all amounts availables for your billing account
   */
  get(path: '/telephony/{billingAccount}/amountSecurityDeposit'): (params: {billingAccount: string}) => Promise<order.Price[]>;
  /**
   * billingAccountSite operations
   * Current billing account site (billing account features are overwritten by the site)
   */
  get(path: '/telephony/{billingAccount}/billingAccountSite'): (params: {billingAccount: string}) => Promise<string>;
  /**
   * List the telephony.CarrierSip objects
   * Carrier SIP trunks associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/carrierSip'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * CarrierSip
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/carrierSip/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.CarrierSip>;
  /**
   * List the telephony.CarrierSipCustomerEndpoint objects
   * List of your remote sip endpoints (ips, ports, protocol) of your carrier sip trunk service
   */
  get(path: '/telephony/{billingAccount}/carrierSip/{serviceName}/endpoints'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Carrier SIP Endpoints
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/carrierSip/{serviceName}/endpoints/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.CarrierSipCustomerEndpoint>;
  /**
   * Carrier SIP Properties
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/carrierSip/{serviceName}/settings'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.CarrierSipDetails>;
  /**
   * List the telephony.Conference objects
   * Conferences associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/conference'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Conference
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/conference/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Conference>;
  /**
   * List the telephony.ConferenceHistory objects
   * List your past conferences for this number
   */
  get(path: '/telephony/{billingAccount}/conference/{serviceName}/histories'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * List past conferences on your number
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/conference/{serviceName}/histories/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.ConferenceHistory>;
  /**
   * informations operations
   * Get realtime conference informations
   */
  get(path: '/telephony/{billingAccount}/conference/{serviceName}/informations'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.ConferenceInformations>;
  /**
   * List the telephony.ConferenceParticipants objects
   * Current participants of the associate conference
   */
  get(path: '/telephony/{billingAccount}/conference/{serviceName}/participants'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Conference service
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.ConferenceParticipants>;
  /**
   * Conference properties
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/conference/{serviceName}/settings'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.ConferenceProperties>;
  /**
   * List the telephony.ConferenceWebAccess objects
   * List your conference web access
   */
  get(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * List public web access of your conference
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.ConferenceWebAccess>;
  /**
   * List the telephony.Ddi objects
   * DDIs (direct dial-in) associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/ddi'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * DDI (direct dial-in) service
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ddi/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Ddi>;
  /**
   * List the telephony.EasyHunting objects
   * OVH easy calls queues associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/easyHunting'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * OVH easy calls queues
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.EasyHunting>;
  /**
   * PABX Hunting
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.OvhPabxHunting>;
  /**
   * List the telephony.OvhPabxHuntingAgent objects
   * Calls agents
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Calls agent
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgent>;
  /**
   * The web access for your cloudpabx
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<telephony.BannerAccess>;
  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects
   * Current calls of the callcenter agent
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<telephony.EventToken>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/liveStatus'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Agent assigned to the queues
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Agent assigned to a queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxCustomStatus objects
   * Custom statuses of your agents
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Custom statuses of your callcenter agents
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.OvhPabxCustomStatus>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.EventToken>;
  /**
   * List the telephony.OvhPabxHuntingQueue objects
   * Calls queues
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Calls queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}'): (params: {billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingQueue>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Agent assigned to the queue
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent'): (params: {billingAccount: string, queueId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Agent assigned to a queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects
   * Live calls of the queue
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls'): (params: {billingAccount: string, queueId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveStatistics'): (params: {billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingQueueLiveStatistics>;
  /**
   * List the telephony.OvhPabxRecord objects
   * Records associated with this PABX
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * The PABX records
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.OvhPabxRecord>;
  /**
   * Easy hunting screen lists conditions options
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.EasyHuntingScreenListsConditionsSettings>;
  /**
   * List the telephony.EasyHuntingScreenListsConditions objects
   * Screen lists conditions checked when a call is received
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions'): (params: {billingAccount: string, serviceName: string, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}) => Promise<number[]>;
  /**
   * Screenlist condition
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}'): (params: {billingAccount: string, conditionId: number, serviceName: string}) => Promise<telephony.EasyHuntingScreenListsConditions>;
  /**
   * List the telephony.OvhPabxSound objects
   * Sounds associated with this PABX
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * The PABX sounds
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}'): (params: {billingAccount: string, serviceName: string, soundId: number}) => Promise<telephony.OvhPabxSound>;
  /**
   * Easy hunting time conditions options
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.EasyHuntingTimeConditionsSettings>;
  /**
   * List the telephony.EasyHuntingTimeConditions objects
   * Time conditions checked when a call is received
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions'): (params: {billingAccount: string, serviceName: string, policy?: telephony.TimeConditionsPolicyEnum}) => Promise<number[]>;
  /**
   * Easy hunting time conditions
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}'): (params: {billingAccount: string, conditionId: number, serviceName: string}) => Promise<telephony.EasyHuntingTimeConditions>;
  /**
   * List the telephony.EasyPabx objects
   * EasyPabx associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/easyPabx'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * EasyPabx
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.EasyPabx>;
  /**
   * EasyPabx Hunting
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.EasyPabxHunting>;
  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects
   * Hunting agents
   */
  get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent'): (params: {billingAccount: string, serviceName: string}) => Promise<string[]>;
  /**
   * Easy/Mini PABX agent
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}'): (params: {agentNumber: string, billingAccount: string, serviceName: string}) => Promise<telephony.EasyMiniPabxHuntingAgent>;
  /**
   * Line tones
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Tones>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/eventToken'): (params: {billingAccount: string}) => Promise<telephony.EventToken>;
  /**
   * List the telephony.Fax objects
   * Faxes associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/fax'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Fax service
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/fax/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Fax>;
  /**
   * List the telephony.FaxCampaign objects
   * Fax campaigns of the associate fax
   */
  get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Fax campaigns
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.FaxCampaign>;
  /**
   * detail operations
   * Detail of the fax recipients by status
   */
  get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/detail'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.FaxCampaignDetail>;
  /**
   * Fax ScreenLists
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.FaxScreen>;
  /**
   * Fax properties
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/fax/{serviceName}/settings'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.FaxProperties>;
  /**
   * List the telephony.HistoryConsumption objects
   * Previous billed consumptions
   */
  get(path: '/telephony/{billingAccount}/historyConsumption'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Previous billed consumptions
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/historyConsumption/{date}'): (params: {billingAccount: string, date: string}) => Promise<telephony.HistoryConsumption>;
  /**
   * file operations
   * Previous billed consumption files
   */
  get(path: '/telephony/{billingAccount}/historyConsumption/{date}/file'): (params: {billingAccount: string, date: string, extension: telephony.BillDocument}) => Promise<telephony.PcsFile>;
  /**
   * List the telephony.HistoryRepaymentConsumption objects
   * Previous repayment bill
   */
  get(path: '/telephony/{billingAccount}/historyRepaymentConsumption'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Previous repayment bill
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/historyRepaymentConsumption/{date}'): (params: {billingAccount: string, date: string}) => Promise<telephony.HistoryRepaymentConsumption>;
  /**
   * document operations
   * Get the csv document
   */
  get(path: '/telephony/{billingAccount}/historyRepaymentConsumption/{date}/document'): (params: {billingAccount: string, date: string}) => Promise<telephony.PcsFile>;
  /**
   * List the telephony.HistoryTollfreeConsumption objects
   * Previous tollfree bill
   */
  get(path: '/telephony/{billingAccount}/historyTollfreeConsumption'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Previous tollfree bill
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/historyTollfreeConsumption/{date}'): (params: {billingAccount: string, date: string}) => Promise<telephony.HistoryTollfreeConsumption>;
  /**
   * document operations
   * Get the csv document
   */
  get(path: '/telephony/{billingAccount}/historyTollfreeConsumption/{date}/document'): (params: {billingAccount: string, date: string}) => Promise<telephony.PcsFile>;
  /**
   * List the telephony.Line objects
   * Lines associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/line'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Line service
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Line>;
  /**
   * List the telephony.AbbreviatedNumber objects
   * Abbreviated numbers for the line
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Abbreviated number
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}'): (params: {abbreviatedNumber: number, billingAccount: string, serviceName: string}) => Promise<telephony.AbbreviatedNumber>;
  /**
   * activateNewPhone operations
   * Check if there is a new phone to activate and if it's possible, in case of phone switch
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/activateNewPhone'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * antihack operations
   * Current list of numbers or short code numbers restricted by an auto antihack
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/antihack'): (params: {billingAccount: string, serviceName: string}) => Promise<string[]>;
  /**
   * List the telephony.CallsGenerated objects
   * Automatic Calls made by Calls Generator on this line
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall'): (params: {billingAccount: string, serviceName: string}) => Promise<string[]>;
  /**
   * Automatic Call made by Call Generator on this line
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall/{identifier}'): (params: {billingAccount: string, identifier: string, serviceName: string}) => Promise<telephony.CallsGenerated>;
  /**
   * availableSipDomains operations
   * Listing of domains Sip availables
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/availableSipDomains'): (params: {billingAccount: string, serviceName: string}) => Promise<string[]>;
  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects
   * The current calls of your line
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/calls'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
  /**
   * canChangePassword operations
   * Ability to manage SIP password on this service
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/canChangePassword'): (params: {billingAccount: string, serviceName: string}) => Promise<boolean>;
  /**
   * List the telephony.Click2CallUser objects
   * User which can use click 2 call on the line
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * User of the click 2 call
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Click2CallUser>;
  /**
   * ips operations
   * Listing of last ips registry
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/ips'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.DatetimeAndIpvalue[]>;
  /**
   * lastRegistrations operations
   * List the informations about the last registrations (i.e. IP, port, User-Agent...)
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/lastRegistrations'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.RegistrationInformations[]>;
  /**
   * listAssociablePhones operations
   * List phones with available slots where this line can be attached
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/listAssociablePhones'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.LinePhoneAssociable[]>;
  /**
   * maximumAvailableSimultaneousLines operations
   * Get the maximum available simultaneous lines for this line
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/maximumAvailableSimultaneousLines'): (params: {billingAccount: string, serviceName: string}) => Promise<number>;
  /**
   * offer operations
   * Return public offer property
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/offer'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.LineOffer>;
  /**
   * Line options
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/options'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.LineOptions>;
  /**
   * availableCodecs operations
   * List of codecs combinaisons available for this line
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/options/availableCodecs'): (params: {billingAccount: string, serviceName: string}) => Promise<string[]>;
  /**
   * defaultCodecs operations
   * Get the default codecs for this line if none are set
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/options/defaultCodecs'): (params: {billingAccount: string, serviceName: string}) => Promise<string>;
  /**
   * Plug & Phone
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Phone>;
  /**
   * adminCredentials operations
   * Returns the administration user and password of the phone if you are a VIP
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/adminCredentials'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.PhoneCredentials>;
  /**
   * List the telephony.FunctionKey objects
   * Plug & Phone function keys
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Plug & Phone function key
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}'): (params: {billingAccount: string, keyNum: number, serviceName: string}) => Promise<telephony.FunctionKey>;
  /**
   * availableFunction operations
   * List the available functions for the key
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}/availableFunction'): (params: {billingAccount: string, keyNum: number, serviceName: string}) => Promise<string[]>;
  /**
   * merchandiseAvailable operations
   * List of available exchange merchandise brand
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/merchandiseAvailable'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.HardwareOffer[]>;
  /**
   * List the telephony.Phonebook objects
   * Return phonebooks associated
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook'): (params: {billingAccount: string, serviceName: string}) => Promise<string[]>;
  /**
   * Phone book
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}'): (params: {billingAccount: string, bookKey: string, serviceName: string}) => Promise<telephony.Phonebook>;
  /**
   * export operations
   * Export the phonebook's contacts
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export'): (params: {billingAccount: string, bookKey: string, serviceName: string, format: telephony.ContactsExportFormatsEnum}) => Promise<telephony.PcsFile>;
  /**
   * List the telephony.PhonebookContact objects
   * Phonebook contacts
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact'): (params: {billingAccount: string, bookKey: string, serviceName: string}) => Promise<number[]>;
  /**
   * Phone book contact
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}'): (params: {billingAccount: string, bookKey: string, id: number, serviceName: string}) => Promise<telephony.PhonebookContact>;
  /**
   * List the telephony.Rma objects
   * Return Merchandise Authorisation associated
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma'): (params: {billingAccount: string, serviceName: string}) => Promise<string[]>;
  /**
   * Current Return Merchandise Authorisation
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}'): (params: {billingAccount: string, id: string, serviceName: string}) => Promise<telephony.Rma>;
  /**
   * supportsPhonebook operations
   * Does the phone manages phonebooks?
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/supportsPhonebook'): (params: {billingAccount: string, serviceName: string}) => Promise<boolean>;
  /**
   * phoneCanBeAssociable operations
   * List the phones with Sip slot available
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/phoneCanBeAssociable'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.LinePhone[]>;
  /**
   * List the telephony.OvhPabxRecord objects
   * The recordings of your line outgoing calls
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/records'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * The PABX records
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/records/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.OvhPabxRecord>;
  /**
   * simultaneousChannelsDetails operations
   * Details about simultaneous channels of this line.
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/simultaneousChannelsDetails'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.SimultaneousChannelsDetails>;
  /**
   * statistics operations
   * Get statistics of the current line
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/statistics'): (params: {billingAccount: string, serviceName: string, timeframe: telephony.StatisticsTimeframeEnum, type: telephony.LineStatisticsTypeEnum}) => Promise<complexType.UnitAndValues<telephony.TimestampAndValue>>;
  /**
   * Line tones
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/tones'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Tones>;
  /**
   * List the telephony.trafficExtract objects
   * The traffic extracts (SIP only) of your line
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Traffic extracts (SIP) of your line
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.trafficExtract>;
  /**
   * List the telephony.MiniPabx objects
   * Miniabx associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/miniPabx'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * MiniPabx
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.MiniPabx>;
  /**
   * MiniPabx Hunting
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.MiniPabxHunting>;
  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects
   * Hunting agents
   */
  get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent'): (params: {billingAccount: string, serviceName: string}) => Promise<string[]>;
  /**
   * Easy/Mini PABX agent
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}'): (params: {agentNumber: string, billingAccount: string, serviceName: string}) => Promise<telephony.EasyMiniPabxHuntingAgent>;
  /**
   * Line tones
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Tones>;
  /**
   * List the telephony.Number objects
   * Additional numbers associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/number'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Additional number
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/number/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Number>;
  /**
   * convertToLineAvailableOffers operations
   * Get the available line offers to schedule a conversion to line
   */
  get(path: '/telephony/{billingAccount}/number/{serviceName}/convertToLineAvailableOffers'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.LineOffersAndContracts>;
  /**
   * List the telephony.OfferTask objects
   * Operations on a telephony service's offer
   */
  get(path: '/telephony/{billingAccount}/offerTask'): (params: {billingAccount: string, action?: telephony.OfferTaskActionEnum, status?: telephony.TaskStatusEnum, type?: telephony.OfferTaskTypeEnum}) => Promise<number[]>;
  /**
   * Operation on a telephony offer
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/offerTask/{taskId}'): (params: {billingAccount: string, taskId: number}) => Promise<telephony.OfferTask>;
  /**
   * oldPhone operations
   * List old phones archived as they were not returned after an RMA
   */
  get(path: '/telephony/{billingAccount}/oldPhone'): (params: {billingAccount: string}) => Promise<telephony.Phone[]>;
  /**
   * List the telephony.ConsumptionThreshold objects
   * Outplan notifications configured for this billing account
   */
  get(path: '/telephony/{billingAccount}/outplanNotification'): (params: {billingAccount: string}) => Promise<number[]>;
  /**
   * The outplan notifications configured for your billing account
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/outplanNotification/{id}'): (params: {billingAccount: string, id: number}) => Promise<telephony.ConsumptionThreshold>;
  /**
   * List the telephony.OvhPabx objects
   * OVH calls queues and OVH IVRs (Interactive Voice Response) associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/ovhPabx'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * OVH calls queues and OVH IVRs (Interactive Voice Response)
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.OvhPabx>;
  /**
   * List the telephony.OvhPabxDialplan objects
   * Dialplans associated with this PABX
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Dialplan
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}'): (params: {billingAccount: string, dialplanId: number, serviceName: string}) => Promise<telephony.OvhPabxDialplan>;
  /**
   * List the telephony.OvhPabxDialplanExtension objects
   * Extensions contained in the dialplan
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension'): (params: {billingAccount: string, dialplanId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Dialplan extension
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}'): (params: {billingAccount: string, dialplanId: number, extensionId: number, serviceName: string}) => Promise<telephony.OvhPabxDialplanExtension>;
  /**
   * List the telephony.OvhPabxDialplanExtensionConditionScreenList objects
   * Screenlist conditions checked when executing the extension
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList'): (params: {billingAccount: string, dialplanId: number, extensionId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Screenlist condition
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}'): (params: {billingAccount: string, conditionId: number, dialplanId: number, extensionId: number, serviceName: string}) => Promise<telephony.OvhPabxDialplanExtensionConditionScreenList>;
  /**
   * List the telephony.OvhPabxDialplanExtensionConditionTime objects
   * Time conditions checked when executing the extension
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime'): (params: {billingAccount: string, dialplanId: number, extensionId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Time condition
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}'): (params: {billingAccount: string, conditionId: number, dialplanId: number, extensionId: number, serviceName: string}) => Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
  /**
   * List the telephony.OvhPabxDialplanExtensionRule objects
   * Rules contained in the extension
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule'): (params: {billingAccount: string, dialplanId: number, extensionId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Dialplan rule
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}'): (params: {billingAccount: string, dialplanId: number, extensionId: number, ruleId: number, serviceName: string}) => Promise<telephony.OvhPabxDialplanExtensionRule>;
  /**
   * PABX Hunting
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.OvhPabxHunting>;
  /**
   * List the telephony.OvhPabxHuntingAgent objects
   * Calls agents
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Calls agent
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgent>;
  /**
   * The web access for your cloudpabx
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<telephony.BannerAccess>;
  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects
   * Current calls of the callcenter agent
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<telephony.EventToken>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/liveStatus'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Agent assigned to the queues
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Agent assigned to a queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxCustomStatus objects
   * Custom statuses of your agents
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Custom statuses of your callcenter agents
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.OvhPabxCustomStatus>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.EventToken>;
  /**
   * List the telephony.OvhPabxHuntingQueue objects
   * Calls queues
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Calls queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}'): (params: {billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingQueue>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Agent assigned to the queue
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent'): (params: {billingAccount: string, queueId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Agent assigned to a queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects
   * Live calls of the queue
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls'): (params: {billingAccount: string, queueId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveStatistics'): (params: {billingAccount: string, queueId: number, serviceName: string}) => Promise<telephony.OvhPabxHuntingQueueLiveStatistics>;
  /**
   * List the telephony.OvhPabxMenu objects
   * Menus associated with this PABX
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * IVR Menu
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}'): (params: {billingAccount: string, menuId: number, serviceName: string}) => Promise<telephony.OvhPabxMenu>;
  /**
   * List the telephony.OvhPabxMenuEntry objects
   * Menu entry
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry'): (params: {billingAccount: string, menuId: number, serviceName: string}) => Promise<number[]>;
  /**
   * IVR menu entry
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}'): (params: {billingAccount: string, entryId: number, menuId: number, serviceName: string}) => Promise<telephony.OvhPabxMenuEntry>;
  /**
   * List the telephony.OvhPabxRecord objects
   * Records associated with this PABX
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * The PABX records
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.OvhPabxRecord>;
  /**
   * List the telephony.OvhPabxSound objects
   * Sounds associated with this PABX
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * The PABX sounds
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}'): (params: {billingAccount: string, serviceName: string, soundId: number}) => Promise<telephony.OvhPabxSound>;
  /**
   * List the telephony.OvhPabxTts objects
   * Text to Speech associated with this PABX
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * The PABX Text To Speech sounds
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.OvhPabxTts>;
  /**
   * List the telephony.PhonebookMaster objects
   * Return phonebooks associated to this group
   */
  get(path: '/telephony/{billingAccount}/phonebook'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Phone book on group
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/phonebook/{bookKey}'): (params: {billingAccount: string, bookKey: string}) => Promise<telephony.PhonebookMaster>;
  /**
   * export operations
   * Export the phonebook's contacts
   */
  get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/export'): (params: {billingAccount: string, bookKey: string, format: telephony.ContactsExportFormatsEnum}) => Promise<telephony.PcsFile>;
  /**
   * List the telephony.PhonebookContact objects
   * Phonebook contacts
   */
  get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact'): (params: {billingAccount: string, bookKey: string}) => Promise<number[]>;
  /**
   * Phone book contact
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}'): (params: {billingAccount: string, bookKey: string, id: number}) => Promise<telephony.PhonebookContact>;
  /**
   * List the telephony.Portability objects
   * Current number portabilities for this billing account
   */
  get(path: '/telephony/{billingAccount}/portability'): (params: {billingAccount: string}) => Promise<number[]>;
  /**
   * Portability informations
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/portability/{id}'): (params: {billingAccount: string, id: number}) => Promise<telephony.Portability>;
  /**
   * canBeCancelled operations
   * Indicates whether or not the portability can be cancelled
   */
  get(path: '/telephony/{billingAccount}/portability/{id}/canBeCancelled'): (params: {billingAccount: string, id: number}) => Promise<boolean>;
  /**
   * canBeExecuted operations
   * Indicates whether or not the portability can be executed
   */
  get(path: '/telephony/{billingAccount}/portability/{id}/canBeExecuted'): (params: {billingAccount: string, id: number}) => Promise<boolean>;
  /**
   * dateCanBeChanged operations
   * Indicates whether or not the portability date can be changed
   */
  get(path: '/telephony/{billingAccount}/portability/{id}/dateCanBeChanged'): (params: {billingAccount: string, id: number}) => Promise<boolean>;
  /**
   * List the telephony.PortabilityDocument objects
   * Document linked to this portability
   */
  get(path: '/telephony/{billingAccount}/portability/{id}/document'): (params: {billingAccount: string, id: number}) => Promise<number[]>;
  /**
   * Document linked to a portability
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}'): (params: {billingAccount: string, documentId: number, id: number}) => Promise<telephony.PortabilityDocument>;
  /**
   * relaunch operations
   * Indicates whether or not error can be fixed and portability can be relaunched
   */
  get(path: '/telephony/{billingAccount}/portability/{id}/relaunch'): (params: {billingAccount: string, id: number}) => Promise<telephony.PortabilityFixErrorPossibleParameters>;
  /**
   * status operations
   * Indicates the current status of the portability, with a list of steps
   */
  get(path: '/telephony/{billingAccount}/portability/{id}/status'): (params: {billingAccount: string, id: number}) => Promise<telephony.PortabilityStep[]>;
  /**
   * List the telephony.Redirect objects
   * Redirects associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/redirect'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Redirect service
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/redirect/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Redirect>;
  /**
   * List the telephony.Rsva objects
   * Service concerned by the french RSVA reform
   */
  get(path: '/telephony/{billingAccount}/rsva'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * French value added services subject to the RSVA reform (Référentiel des numéros SVA)
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/rsva/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Rsva>;
  /**
   * allowedRateCodes operations
   * Compatible rate codes related to this value added service
   */
  get(path: '/telephony/{billingAccount}/rsva/{serviceName}/allowedRateCodes'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.RateCodeInformation[]>;
  /**
   * currentRateCode operations
   * Current rate code related to this sva
   */
  get(path: '/telephony/{billingAccount}/rsva/{serviceName}/currentRateCode'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.DetailedRateCodeInformation>;
  /**
   * scheduledRateCode operations
   * New scheduled rate code related to this sva
   */
  get(path: '/telephony/{billingAccount}/rsva/{serviceName}/scheduledRateCode'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.DetailedRateCodeInformation>;
  /**
   * List the telephony.Scheduler objects
   * Scheduled events
   */
  get(path: '/telephony/{billingAccount}/scheduler'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Scheduler capable services
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/scheduler/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Scheduler>;
  /**
   * List the telephony.SchedulerEvent objects
   * Custom events scheduled
   */
  get(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events'): (params: {billingAccount: string, serviceName: string, categories?: telephony.SchedulerCategoryEnum, dateEnd_from?: string, dateEnd_to?: string, dateStart_from?: string, dateStart_to?: string}) => Promise<string[]>;
  /**
   * Scheduled event
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}'): (params: {billingAccount: string, serviceName: string, uid: string}) => Promise<telephony.SchedulerEvent>;
  /**
   * List the telephony.Screen objects
   * Screenlist compatible numbers associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/screen'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * ScreenList capable services
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/screen/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Screen>;
  /**
   * List the telephony.ScreenList objects
   * Rules for call filtering for this service
   */
  get(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Screen list
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.ScreenList>;
  /**
   * List the telephony.TelephonyService objects
   * Services associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/service'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Telephony service
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.TelephonyService>;
  /**
   * diagnosticReports operations
   * Get Relevant informations of the service detected from the MOS or the signal leg in SIP/MGCP protocol.
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/diagnosticReports'): (params: {billingAccount: string, serviceName: string, dayInterval: telephony.DiagnosticReportIndexEnum}) => Promise<telephony.DiagnosticReport[]>;
  /**
   * Directory Informations
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/directory'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.DirectoryInfo>;
  /**
   * getDirectoryServiceCode operations
   * Get directory service code from an APE code ( principal activity of the firm code )
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode'): (params: {billingAccount: string, serviceName: string, apeCode: string}) => Promise<telephony.DirectoryHeadingPJ[]>;
  /**
   * getWayTypes operations
   * Get all the way types availables
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/directory/getWayTypes'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.DirectoryWayType[]>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.EventToken>;
  /**
   * List the telephony.FaxConsumption objects
   * Fax delivery records.
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/faxConsumption'): (params: {billingAccount: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, wayType?: telephony.FaxConsumptionWayTypeEnum}) => Promise<number[]>;
  /**
   * Fax delivery record
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/faxConsumption/{consumptionId}'): (params: {billingAccount: string, consumptionId: number, serviceName: string}) => Promise<telephony.FaxConsumption>;
  /**
   * Offer change
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.OfferChange>;
  /**
   * offerChanges operations
   * List all available offer changes compatibilities
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/offerChanges'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.LineOffer[]>;
  /**
   * List the telephony.OfferTask objects
   * Operations on a telephony service's offer
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask'): (params: {billingAccount: string, serviceName: string, action?: telephony.OfferTaskActionEnum, status?: telephony.TaskStatusEnum, type?: telephony.OfferTaskTypeEnum}) => Promise<number[]>;
  /**
   * Operation on a telephony offer
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}'): (params: {billingAccount: string, serviceName: string, taskId: number}) => Promise<telephony.OfferTask>;
  /**
   * List the telephony.PreviousVoiceConsumption objects
   * Call delivery records of the previous month.
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption'): (params: {billingAccount: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, destinationType?: telephony.VoiceConsumptionDestinationTypeEnum, planType?: telephony.VoiceConsumptionPlanTypeEnum, wayType?: telephony.VoiceConsumptionWayTypeEnum}) => Promise<number[]>;
  /**
   * Call delivery record of the previous month
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption/{consumptionId}'): (params: {billingAccount: string, consumptionId: number, serviceName: string}) => Promise<telephony.PreviousVoiceConsumption>;
  /**
   * List the telephony.RepaymentConsumption objects
   * Call which could be repayable
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption'): (params: {billingAccount: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string}) => Promise<number[]>;
  /**
   * Call which are repayable
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption/{consumptionId}'): (params: {billingAccount: string, consumptionId: number, serviceName: string}) => Promise<telephony.RepaymentConsumption>;
  /**
   * List the telephony.Task objects
   * Operations on a telephony service
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/task'): (params: {billingAccount: string, serviceName: string, action?: string, serviceType?: string, status?: telephony.TaskStatusEnum}) => Promise<number[]>;
  /**
   * Operation on a telephony service
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/task/{taskId}'): (params: {billingAccount: string, serviceName: string, taskId: number}) => Promise<telephony.Task>;
  /**
   * List the telephony.VoiceConsumption objects
   * Call delivery records.
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption'): (params: {billingAccount: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, destinationType?: telephony.VoiceConsumptionDestinationTypeEnum, planType?: telephony.VoiceConsumptionPlanTypeEnum, wayType?: telephony.VoiceConsumptionWayTypeEnum}) => Promise<number[]>;
  /**
   * Call delivery record
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}'): (params: {billingAccount: string, consumptionId: number, serviceName: string}) => Promise<telephony.VoiceConsumption>;
  /**
   * Advanced diagnostic of the voice call
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}/callDiagnostics'): (params: {billingAccount: string, consumptionId: number, serviceName: string}) => Promise<telephony.CallDiagnostics>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/serviceInfos'): (params: {billingAccount: string}) => Promise<services.Service>;
  /**
   * List the telephony.Task objects
   * Operations on a telephony billing account
   */
  get(path: '/telephony/{billingAccount}/task'): (params: {billingAccount: string, action?: string, serviceType?: string, status?: telephony.TaskStatusEnum}) => Promise<number[]>;
  /**
   * Operation on a telephony service
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/task/{taskId}'): (params: {billingAccount: string, taskId: number}) => Promise<telephony.Task>;
  /**
   * List the telephony.GenericScreen objects
   * Time conditions compatible numbers associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/timeCondition'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Time conditions capable services
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.GenericScreen>;
  /**
   * List the telephony.TimeCondition objects
   * Rules for time conditions for this service
   */
  get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition'): (params: {billingAccount: string, serviceName: string}) => Promise<number[]>;
  /**
   * Time conditions
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.TimeCondition>;
  /**
   * Time conditions options
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/options'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.TimeConditionOptions>;
  /**
   * List the telephony.Trunk objects
   * Trunk associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/trunk'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Trunk service
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/trunk/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Trunk>;
  /**
   * channelsPacksRepartition operations
   * Determine the best channels packs combination for a given channel quantity
   */
  get(path: '/telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition'): (params: {billingAccount: string, serviceName: string, quantity: number}) => Promise<telephony.TrunkSimultaneousPacksRepartition>;
  /**
   * List the telephony.TrunkExternalDisplayedNumber objects
   * External displayed number linked to this trunk
   */
  get(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber'): (params: {billingAccount: string, serviceName: string}) => Promise<string[]>;
  /**
   * External displayed number linked to a trunk
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}'): (params: {billingAccount: string, number: string, serviceName: string}) => Promise<telephony.TrunkExternalDisplayedNumber>;
  /**
   * List the telephony.Voicemail objects
   * Voicemails associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/voicemail'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Voicemail service
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/voicemail/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Voicemail>;
  /**
   * List the telephony.VoicemailMessages objects
   * Voicemail directory messages
   */
  get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories'): (params: {billingAccount: string, serviceName: string, dir?: telephony.VoicemailMessageFolderDirectoryEnum}) => Promise<number[]>;
  /**
   * Voicemail message
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.VoicemailMessages>;
  /**
   * download operations
   * Get a url to download the sound file
   */
  get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/download'): (params: {billingAccount: string, id: number, serviceName: string, format?: telephony.ServiceVoicemailAudioFormatEnum}) => Promise<telephony.PcsFile>;
  /**
   * List the telephony.VoicemailGreetings objects
   * Voicemail greeting message properties
   */
  get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings'): (params: {billingAccount: string, serviceName: string, dir?: telephony.VoicemailMessageFolderGreetingEnum}) => Promise<number[]>;
  /**
   * Voicemail greeting
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.VoicemailGreetings>;
  /**
   * download operations
   * Get a url to download the sound file
   */
  get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/download'): (params: {billingAccount: string, id: number, serviceName: string, format?: telephony.ServiceVoicemailAudioFormatEnum}) => Promise<telephony.PcsFile>;
  /**
   * Voicemail Properties
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.VoicemailProperties>;
  /**
   * routing operations
   * Get the status of the voicemail. Available only if the line has fax capabilities
   */
  get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/routing'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.VoicefaxRoutingEnum>;
  /**
   * voicemailNumbers operations
   * Get number for internal and external voicemail
   */
  get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/voicemailNumbers'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.VoicemailNumbers>;
  /**
   * List the telephony.Vxml objects
   * Vxml numbers associated with this billing account
   */
  get(path: '/telephony/{billingAccount}/vxml'): (params: {billingAccount: string}) => Promise<string[]>;
  /**
   * Vxml services
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/vxml/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Vxml>;
  /**
   * Vxml Properties
   * Get this object properties
   */
  get(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.VxmlProperties>;
  /**
   * Get all available accessories
   * Get all available accessories
   */
  get(path: '/telephony/accessories'): (params: {country: telephony.NumberCountryEnum}) => Promise<telephony.AccessoryOffer[]>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/telephony/aliases'): () => Promise<string[]>;
  /**
   * Telephony service
   * Get this object properties
   */
  get(path: '/telephony/aliases/{serviceName}'): (params: {serviceName: string}) => Promise<telephony.TelephonyGenericService>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/telephony/aliases/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Get all available SIP domains by country
   * Get all available SIP domains by country
   */
  get(path: '/telephony/availableDefaultSipDomains'): (params: {type: telephony.SipDomainProductTypeEnum}) => Promise<telephony.DefaultSipDomains[]>;
  /**
   * Get current order ids
   * Get current order ids
   */
  get(path: '/telephony/currentOrderIds'): () => Promise<number[]>;
  /**
   * Get all zip codes compatible for a number
   * Get all zip codes compatible for a number
   */
  get(path: '/telephony/directories/availableZipCodes'): (params: {country: telephony.NumberCountryEnum, number: string}) => Promise<string[]>;
  /**
   * Get city informations from a zip code
   * Get city informations from a zip code
   */
  get(path: '/telephony/directories/cities'): (params: {country: telephony.NumberCountryEnum, zipCode: string}) => Promise<telephony.City[]>;
  /**
   * Get all available fax offer compatible
   * Get all available fax offer compatible
   */
  get(path: '/telephony/fax/offers'): (params: {country: telephony.NumberCountryEnum}) => Promise<telephony.LineOffer[]>;
  /**
   * Get all available phone brands compatible with lines
   * Get all available phone brands compatible with lines
   */
  get(path: '/telephony/line/offer/phones'): (params: {country: telephony.NumberCountryEnum, offer: string}) => Promise<telephony.LinePhone[]>;
  /**
   * Get all available line offer compatible
   * Get all available line offer compatible
   */
  get(path: '/telephony/line/offers'): (params: {country: telephony.NumberCountryEnum}) => Promise<telephony.LineOffer[]>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/telephony/lines'): () => Promise<string[]>;
  /**
   * Telephony service
   * Get this object properties
   */
  get(path: '/telephony/lines/{serviceName}'): (params: {serviceName: string}) => Promise<telephony.TelephonyGenericService>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/telephony/lines/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Get all available geographic zone with some details, from a country
   * Get all available geographic zone with some details, from a country
   */
  get(path: '/telephony/number/detailedZones'): (params: {axiom?: string, country: telephony.NumberCountryEnum}) => Promise<telephony.NumberDetailedZone[]>;
  /**
   * Get all available special range from a country
   * Get all available special range from a country
   */
  get(path: '/telephony/number/ranges'): (params: {country: telephony.NumberCountryEnum}) => Promise<string[]>;
  /**
   * Get all available specific number from a country
   * Get all available specific number from a country
   */
  get(path: '/telephony/number/specificNumbers'): (params: {country: telephony.NumberCountryEnum, range?: string, type: telephony.NumberTypeEnum, zone?: string}) => Promise<telephony.SpecificNumber[]>;
  /**
   * Get all available geographic zone from a country
   * Get all available geographic zone from a country
   */
  get(path: '/telephony/number/zones'): (params: {axiom?: string, country: telephony.NumberCountryEnum}) => Promise<string[]>;
  /**
   * Search a service with its domain, to get its billing account and type
   * Search a service with its domain, to get its billing account and type
   */
  get(path: '/telephony/searchServices'): (params: {axiom: string}) => Promise<telephony.TelephonySearchService[]>;
  /**
   * List the telephony.Sound objects
   * Sounds attached to this telephony account
   */
  get(path: '/telephony/sounds'): () => Promise<number[]>;
  /**
   * Sounds attached to this telephony account
   * Get this object properties
   */
  get(path: '/telephony/sounds/{id}'): (params: {id: number}) => Promise<telephony.Sound>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/telephony/spare'): () => Promise<string[]>;
  /**
   * Spare properties
   * Get this object properties
   */
  get(path: '/telephony/spare/{spare}'): (params: {spare: string}) => Promise<spare.telephony.TelephonySpare>;
  /**
   * compatibleReplacement operations
   * Return the list of phone domains compatible to be replaced
   */
  get(path: '/telephony/spare/{spare}/compatibleReplacement'): (params: {spare: string}) => Promise<string[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/telephony/spare/{spare}/serviceInfos'): (params: {spare: string}) => Promise<services.Service>;
  /**
   * Get all available spare brands
   * Get all available spare brands
   */
  get(path: '/telephony/spare/brands'): () => Promise<string[]>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/telephony/trunks'): () => Promise<string[]>;
  /**
   * Telephony service
   * Get this object properties
   */
  get(path: '/telephony/trunks/{serviceName}'): (params: {serviceName: string}) => Promise<telephony.TelephonyGenericService>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/telephony/trunks/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Billing Account
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}'): (params: {billingAccount: string, allowedOutplan?: orderPrice, creditThreshold?: orderPrice, currentOutplan?: orderPrice, description?: string, hiddenExternalNumber?: boolean, overrideDisplayedNumber?: boolean, securityDeposit?: orderPrice, status?: telephony.BillingAccountStatusEnum, trusted?: boolean}) => Promise<void>;
  /**
   * Abbreviated number
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}'): (params: {abbreviatedNumber: number, billingAccount: string, destinationNumber?: string, name?: string, surname?: string}) => Promise<void>;
  /**
   * Carrier SIP Properties
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/carrierSip/{serviceName}/settings'): (params: {billingAccount: string, serviceName: string, description?: string, maxCallsPerSecond?: number, maxConcurrentCalls?: number}) => Promise<void>;
  /**
   * Conference properties
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/conference/{serviceName}/settings'): (params: {billingAccount: string, serviceName: string, announceFile?: boolean, announceFilename?: string, announceSoundId?: number, anonymousRejection?: boolean, enterMuted?: boolean, eventsChannel?: string, language?: telephony.ConferenceLanguageEnum, pin?: string, recordStatus?: boolean, reportEmail?: string, reportStatus?: telephony.ConferenceReportStatusEnum, whiteLabelReport?: boolean}) => Promise<void>;
  /**
   * DDI (direct dial-in) service
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ddi/{serviceName}'): (params: {billingAccount: string, serviceName: string, description?: string, destination?: string, featureType?: telephony.TypeEnum, serviceType?: telephony.TypeServiceEnum}) => Promise<void>;
  /**
   * OVH easy calls queues
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}'): (params: {billingAccount: string, serviceName: string, anonymousRejection?: boolean, description?: string, featureType?: telephony.TypeEnum, isCCS?: boolean, maxWaitTime?: number, queueSize?: number, serviceType?: telephony.TypeServiceEnum, showCallerNumber?: telephony.OvhPabxDialplanNumberPresentationEnum, statusIvrEnabled?: boolean, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum, toneOnClosing?: number, toneOnHold?: number, toneOnOpening?: number, voicemail?: string}) => Promise<void>;
  /**
   * PABX Hunting
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting'): (params: {billingAccount: string, serviceName: string, crmUrlTemplate?: string, g729?: boolean, name?: string, statusIvrEnabled?: boolean}) => Promise<void>;
  /**
   * Calls agent
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}'): (params: {agentId: number, billingAccount: string, serviceName: string, breakStatus?: number, description?: string, number?: string, simultaneousLines?: number, status?: telephony.OvhPabxHuntingAgentStatusEnum, timeout?: number, type?: telephony.OvhPabxHuntingAgentTypeEnum, wrapUpTime?: number}) => Promise<void>;
  /**
   * Agent assigned to a queue
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string, position?: number}) => Promise<void>;
  /**
   * Calls queue
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}'): (params: {billingAccount: string, queueId: number, serviceName: string, actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, followCallForwards?: boolean, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum}) => Promise<void>;
  /**
   * Agent assigned to a queue
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string, position?: number}) => Promise<void>;
  /**
   * Easy hunting screen lists conditions options
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions'): (params: {billingAccount: string, serviceName: string, status?: telephony.EasyHuntingScreenListsConditionsStatusEnum}) => Promise<void>;
  /**
   * Screenlist condition
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}'): (params: {billingAccount: string, conditionId: number, serviceName: string, callerIdNumber?: string, destinationNumber?: string, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}) => Promise<void>;
  /**
   * Easy hunting time conditions options
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions'): (params: {billingAccount: string, serviceName: string, enable?: boolean, slot1Number?: string, slot1Type?: telephony.TimeConditionsSettingsForwardTypeEnum, slot2Number?: string, slot2Type?: telephony.TimeConditionsSettingsForwardTypeEnum, slot3Number?: string, slot3Type?: telephony.TimeConditionsSettingsForwardTypeEnum, unavailableNumber?: string, unavailableType?: telephony.TimeConditionsSettingsForwardTypeEnum}) => Promise<void>;
  /**
   * Easy hunting time conditions
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}'): (params: {billingAccount: string, conditionId: number, serviceName: string, policy?: telephony.TimeConditionsPolicyEnum, timeFrom?: string, timeTo?: string, weekDay?: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}) => Promise<void>;
  /**
   * EasyPabx
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}'): (params: {billingAccount: string, serviceName: string, description?: string, featureType?: telephony.TypeEnum, serviceType?: telephony.TypeServiceEnum}) => Promise<void>;
  /**
   * EasyPabx Hunting
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting'): (params: {billingAccount: string, serviceName: string, anonymousCallRejection?: boolean, name?: string, noReplyTimer?: number, numberOfCalls?: number, pattern?: telephony.EasyMiniPabxHuntingPatternEnum, strategy?: telephony.EasyMiniPabxHuntingStrategyEnum, toneOnClosure?: boolean, toneOnClosureSoundId?: number, toneOnHold?: boolean, toneOnHoldSoundId?: number, toneRingback?: boolean, toneRingbackSoundId?: number, voicemail?: string}) => Promise<void>;
  /**
   * Easy/Mini PABX agent
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}'): (params: {agentNumber: string, billingAccount: string, serviceName: string, logged?: boolean, noReplyTimer?: number, position?: number}) => Promise<void>;
  /**
   * Line tones
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones'): (params: {billingAccount: string, serviceName: string, callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum}) => Promise<void>;
  /**
   * Fax service
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/fax/{serviceName}'): (params: {billingAccount: string, serviceName: string, description?: string, notifications?: telephony.LineNotificationsOptions, offers?: string[], serviceType?: telephony.TypeServiceEnum}) => Promise<void>;
  /**
   * Fax ScreenLists
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists'): (params: {billingAccount: string, serviceName: string, blacklistedNumbers?: string[], blacklistedTSI?: string[], callNumber?: string, countryCode?: string, filteringList?: telephony.FaxScreenListTypeEnum, whitelistedNumbers?: string[], whitelistedTSI?: string[]}) => Promise<void>;
  /**
   * Fax properties
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/fax/{serviceName}/settings'): (params: {billingAccount: string, serviceName: string, callNumber?: string, countryCode?: string, faxMaxCall?: telephony.FaxSendingTries, faxQuality?: telephony.FaxQualityEnum, faxTagLine?: string, fromEmail?: string, fromName?: string, mailFormat?: telephony.FaxMailFormatEnum, receiver?: string, redirectionEmail?: string[], rejectAnonymous?: boolean, sender?: string}) => Promise<void>;
  /**
   * Line service
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/line/{serviceName}'): (params: {billingAccount: string, serviceName: string, canChangePassword?: boolean, description?: string, getPublicOffer?: telephony.LineOffer, infrastructure?: string, isAttachedToOtherLinesPhone?: boolean, notifications?: telephony.LineNotificationsOptions, offers?: string[], serviceType?: telephony.TypeServiceEnum, simultaneousLines?: number}) => Promise<void>;
  /**
   * Abbreviated number
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}'): (params: {abbreviatedNumber: number, billingAccount: string, serviceName: string, destinationNumber?: string, name?: string, surname?: string}) => Promise<void>;
  /**
   * Line options
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/line/{serviceName}/options'): (params: {billingAccount: string, serviceName: string, absentSubscriber?: boolean, anonymousCallRejection?: boolean, callRestrictionIncoming?: boolean, callRestrictionOutgoing?: boolean, callWaiting?: boolean, codecs?: string, defaultVoicemail?: string, displayNumber?: string, doNotDisturb?: boolean, domain?: string, forwardBackup?: boolean, forwardBackupNature?: telephony.LineOptionForwardNatureTypeEnum, forwardBackupNumber?: string, forwardBusy?: boolean, forwardBusyNature?: telephony.LineOptionForwardNatureTypeEnum, forwardBusyNumber?: string, forwardNoReply?: boolean, forwardNoReplyDelay?: number, forwardNoReplyNature?: telephony.LineOptionForwardNatureTypeEnum, forwardNoReplyNumber?: string, forwardUnconditional?: boolean, forwardUnconditionalNature?: telephony.LineOptionForwardNatureTypeEnum, forwardUnconditionalNumber?: string, identificationRestriction?: boolean, intercom?: telephony.LineOptionIntercomEnum, ipRestrictions?: string[], language?: telephony.LineOptionLanguageEnum, lockOutCall?: boolean, lockOutCallPassword?: string, recordOutgoingCallsBeta?: boolean, toneOnCallWaitingSoundId?: number, toneOnHoldSoundId?: number, toneRingbackSoundId?: number, voicemailExternalNumber?: string, voicemailInternalNumber?: string}) => Promise<void>;
  /**
   * Plug & Phone
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/line/{serviceName}/phone'): (params: {billingAccount: string, serviceName: string, brand?: string, description?: string, macAddress?: string, maxline?: number, mgcpIpRestriction?: string, phoneConfiguration?: telephony.PhoneConfigurationProperty[], protocol?: telephonyProtocolEnum, userPassword?: string}) => Promise<void>;
  /**
   * Plug & Phone function key
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}'): (params: {billingAccount: string, keyNum: number, serviceName: string, default_?: string, function_?: string, label?: string, parameter?: string, type?: string}) => Promise<void>;
  /**
   * Phone book
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}'): (params: {billingAccount: string, bookKey: string, serviceName: string, isReadonly?: boolean, name?: string, phoneKey?: string}) => Promise<void>;
  /**
   * Phone book contact
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}'): (params: {billingAccount: string, bookKey: string, id: number, serviceName: string, group?: string, homeMobile?: string, homePhone?: string, name?: string, surname?: string, workMobile?: string, workPhone?: string}) => Promise<void>;
  /**
   * Current Return Merchandise Authorisation
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}'): (params: {billingAccount: string, id: string, serviceName: string, cancellable?: boolean, creationDatetime?: string, equipmentReference?: string, newMerchandise?: string, offerTypeNew?: telephony.RmaOfferTypeEnum, offerTypeOld?: telephony.RmaOfferTypeEnum, process?: telephony.RmaReplaceTypeEnum, receptionDatetime?: string, shippingContact?: telephony.Contact, status?: telephony.RmaStatusEnum, steps?: telephony.RmaStep[], terminationDatetime?: string, type?: telephony.RmaTypeEnum}) => Promise<void>;
  /**
   * Line tones
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/line/{serviceName}/tones'): (params: {billingAccount: string, serviceName: string, callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum}) => Promise<void>;
  /**
   * MiniPabx
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}'): (params: {billingAccount: string, serviceName: string, description?: string, featureType?: telephony.TypeEnum, serviceType?: telephony.TypeServiceEnum}) => Promise<void>;
  /**
   * MiniPabx Hunting
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting'): (params: {billingAccount: string, serviceName: string, anonymousCallRejection?: boolean, name?: string, numberOfCalls?: number, onHoldTimer?: number, pattern?: telephony.EasyMiniPabxHuntingPatternEnum, queueSize?: number, strategy?: telephony.EasyMiniPabxHuntingStrategyEnum, toneOnClosure?: boolean, toneOnClosureSoundId?: number, toneOnHold?: boolean, toneOnHoldSoundId?: number, toneRingback?: boolean, toneRingbackSoundId?: number}) => Promise<void>;
  /**
   * Easy/Mini PABX agent
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}'): (params: {agentNumber: string, billingAccount: string, serviceName: string, logged?: boolean, noReplyTimer?: number, position?: number}) => Promise<void>;
  /**
   * Line tones
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones'): (params: {billingAccount: string, serviceName: string, callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum}) => Promise<void>;
  /**
   * Additional number
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/number/{serviceName}'): (params: {billingAccount: string, serviceName: string, description?: string, featureType?: telephony.TypeEnum, partOfPool?: string, serviceType?: telephony.TypeServiceEnum}) => Promise<void>;
  /**
   * Operation on a telephony offer
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/offerTask/{taskId}'): (params: {billingAccount: string, taskId: number, action?: telephony.OfferTaskActionEnum, executionDate?: string, status?: telephony.TaskStatusEnum, type?: telephony.OfferTaskTypeEnum}) => Promise<void>;
  /**
   * OVH calls queues and OVH IVRs (Interactive Voice Response)
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}'): (params: {billingAccount: string, serviceName: string, description?: string, featureType?: telephony.TypeEnum, isCCS?: boolean, serviceType?: telephony.TypeServiceEnum}) => Promise<void>;
  /**
   * Dialplan
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}'): (params: {billingAccount: string, dialplanId: number, serviceName: string, anonymousRejection?: boolean, lastUpdate?: string, name?: string, showCallerNumber?: telephony.OvhPabxDialplanNumberPresentationEnum, transferTimeout?: number}) => Promise<void>;
  /**
   * Dialplan extension
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}'): (params: {billingAccount: string, dialplanId: number, extensionId: number, serviceName: string, enabled?: boolean, position?: number, schedulerCategory?: telephony.SchedulerCategoryEnum, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}) => Promise<void>;
  /**
   * Time condition
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}'): (params: {billingAccount: string, conditionId: number, dialplanId: number, extensionId: number, serviceName: string, timeFrom?: string, timeTo?: string, weekDay?: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}) => Promise<void>;
  /**
   * Dialplan rule
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}'): (params: {billingAccount: string, dialplanId: number, extensionId: number, ruleId: number, serviceName: string, action?: telephony.OvhPabxDialplanExtensionRuleActionEnum, actionParam?: string, negativeAction?: boolean, position?: number}) => Promise<void>;
  /**
   * PABX Hunting
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting'): (params: {billingAccount: string, serviceName: string, crmUrlTemplate?: string, g729?: boolean, name?: string, statusIvrEnabled?: boolean}) => Promise<void>;
  /**
   * Calls agent
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}'): (params: {agentId: number, billingAccount: string, serviceName: string, breakStatus?: number, description?: string, number?: string, simultaneousLines?: number, status?: telephony.OvhPabxHuntingAgentStatusEnum, timeout?: number, type?: telephony.OvhPabxHuntingAgentTypeEnum, wrapUpTime?: number}) => Promise<void>;
  /**
   * Agent assigned to a queue
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string, position?: number}) => Promise<void>;
  /**
   * Calls queue
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}'): (params: {billingAccount: string, queueId: number, serviceName: string, actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, followCallForwards?: boolean, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum}) => Promise<void>;
  /**
   * Agent assigned to a queue
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string, position?: number}) => Promise<void>;
  /**
   * IVR Menu
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}'): (params: {billingAccount: string, menuId: number, serviceName: string, greetSound?: number, greetSoundTts?: number, invalidSound?: number, invalidSoundTts?: number, name?: string}) => Promise<void>;
  /**
   * IVR menu entry
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}'): (params: {billingAccount: string, entryId: number, menuId: number, serviceName: string, action?: telephony.OvhPabxIvrMenuEntryActionEnum, actionParam?: string, dtmf?: string, position?: number}) => Promise<void>;
  /**
   * The PABX Text To Speech sounds
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}'): (params: {billingAccount: string, id: number, serviceName: string, text?: string, voice?: telephony.OvhPabxTtsVoiceEnum}) => Promise<void>;
  /**
   * Phone book on group
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/phonebook/{bookKey}'): (params: {billingAccount: string, bookKey: string, name?: string}) => Promise<void>;
  /**
   * Phone book contact
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}'): (params: {billingAccount: string, bookKey: string, id: number, group?: string, homeMobile?: string, homePhone?: string, name?: string, surname?: string, workMobile?: string, workPhone?: string}) => Promise<void>;
  /**
   * Document linked to a portability
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}'): (params: {billingAccount: string, documentId: number, id: number, description?: string, getUrl?: string, name?: string, putUrl?: string, size?: number}) => Promise<void>;
  /**
   * Redirect service
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/redirect/{serviceName}'): (params: {billingAccount: string, serviceName: string, description?: string, destination?: string, featureType?: telephony.TypeEnum, serviceType?: telephony.TypeServiceEnum}) => Promise<void>;
  /**
   * French value added services subject to the RSVA reform (Référentiel des numéros SVA)
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/rsva/{serviceName}'): (params: {billingAccount: string, serviceName: string, typology?: telephony.portability.SpecialNumberCategoryEnum}) => Promise<void>;
  /**
   * Scheduler capable services
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/scheduler/{serviceName}'): (params: {billingAccount: string, serviceName: string, timeZone?: telephony.timeZone}) => Promise<void>;
  /**
   * Scheduled event
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}'): (params: {billingAccount: string, serviceName: string, uid: string, categories?: telephony.SchedulerCategoryEnum, dateEnd?: string, dateStart?: string, description?: string, title?: string}) => Promise<void>;
  /**
   * ScreenList capable services
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/screen/{serviceName}'): (params: {billingAccount: string, serviceName: string, incomingScreenList?: telephony.ScreenListChoosingEnum, outgoingScreenList?: telephony.ScreenListChoosingEnum}) => Promise<void>;
  /**
   * Telephony service
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/service/{serviceName}'): (params: {billingAccount: string, serviceName: string, country?: telephony.NumberCountryEnum, countryCode?: telephony.NumberCountryCodeEnum, currentOutplan?: orderPrice, description?: string, featureType?: telephony.TypeEnum, getPublicOffer?: telephony.LineOffer, hasFaxCapabilities?: boolean, offers?: string[], properties?: telephony.PropertyEnum[], rio?: string, serviceType?: telephony.TypeServiceEnum, simultaneousLines?: number}) => Promise<void>;
  /**
   * Directory Informations
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/service/{serviceName}/directory'): (params: {billingAccount: string, serviceName: string, PJSocialNomination?: string, address?: string, addressExtra?: string, ape?: string, areaCode?: number, birthDate?: string, cedex?: string, city?: string, country?: string, directoryServiceCode?: string, displayFirstName?: boolean, displayMarketingDirectory?: boolean, displayOnlyCity?: boolean, displaySearchReverse?: boolean, displayUniversalDirectory?: boolean, email?: string, firstName?: string, gender?: nichandle.GenderEnum, inseeCode?: number, legalForm?: string, lineDescription?: string, modificationDate?: string, modificationType?: string, name?: string, number?: string, occupation?: string, postBox?: string, postCode?: string, receivePJDirectory?: boolean, siret?: string, socialNomination?: string, socialNominationExtra?: string, status?: string, urbanDistrict?: string, wayName?: string, wayNumber?: string, wayNumberExtra?: string, wayType?: string}) => Promise<void>;
  /**
   * Operation on a telephony offer
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}'): (params: {billingAccount: string, serviceName: string, taskId: number, action?: telephony.OfferTaskActionEnum, executionDate?: string, status?: telephony.TaskStatusEnum, type?: telephony.OfferTaskTypeEnum}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/serviceInfos'): (params: {billingAccount: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Time conditions
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}'): (params: {billingAccount: string, id: number, serviceName: string, day?: telephony.TimeConditionsDayEnum, hourBegin?: string, hourEnd?: string, policy?: telephony.TimeConditionsPolicyEnum, status?: string}) => Promise<void>;
  /**
   * Time conditions options
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/options'): (params: {billingAccount: string, serviceName: string, slot1Number?: string, slot1Type?: telephony.TimeConditionsSlotTypeEnum, slot2Number?: string, slot2Type?: telephony.TimeConditionsSlotTypeEnum, slot3Number?: string, slot3Type?: telephony.TimeConditionsSlotTypeEnum, status?: telephony.TimeConditionsGlobalStatusEnum, timeout?: telephony.TimeConditionsTimeoutEnum, unavailableNumber?: string, unavailableType?: telephony.TimeConditionsSlotTypeEnum}) => Promise<void>;
  /**
   * Voicemail service
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/voicemail/{serviceName}'): (params: {billingAccount: string, serviceName: string, description?: string, offers?: string[], serviceType?: telephony.TypeServiceEnum}) => Promise<void>;
  /**
   * Voicemail Properties
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings'): (params: {billingAccount: string, serviceName: string, annouceMessage?: string, audioFormat?: telephony.ServiceVoicemailAudioFormatEnum, doNotRecord?: boolean, forcePassword?: boolean, fromEmail?: string, fromName?: string, fullGreetingSoundId?: number, greetingType?: telephony.VoicemailGreetingEnum, isNewVersion?: boolean, keepMessage?: boolean, redirectionEmails?: telephony.ServiceVoicemailNotifications[], shortGreetingSoundId?: number, temporaryGreetingActivated?: boolean, temporaryGreetingSoundId?: number, unreadMessages?: number}) => Promise<void>;
  /**
   * Vxml Properties
   * Alter this object properties
   */
  put(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings'): (params: {billingAccount: string, serviceName: string, url?: string, urlRecord?: string}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/telephony/aliases/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/telephony/lines/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Sounds attached to this telephony account
   * Alter this object properties
   */
  put(path: '/telephony/sounds/{id}'): (params: {id: number, creationDate?: string, description?: string, filename?: string, getUrl?: string, putUrl?: string, size?: number}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/telephony/spare/{spare}/serviceInfos'): (params: {spare: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/telephony/trunks/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * List the telephony.AbbreviatedNumberGroup objects
   * Create a new abbreviated number for the billing account
   */
  post(path: '/telephony/{billingAccount}/abbreviatedNumber'): (params: {billingAccount: string, abbreviatedNumber: number, destinationNumber: string, name: string, surname: string}) => Promise<telephony.AbbreviatedNumberGroup>;
  /**
   * billingAccountSite operations
   * Used to overwrite current billing account feature by the billing account site
   */
  post(path: '/telephony/{billingAccount}/billingAccountSite'): (params: {billingAccount: string, billingAccountSite: string}) => Promise<void>;
  /**
   * cancelTermination operations
   * Cancel the billing account termination
   */
  post(path: '/telephony/{billingAccount}/cancelTermination'): (params: {billingAccount: string}) => Promise<void>;
  /**
   * canTransferSecurityDeposit operations
   * Check if security deposit transfer is possible between two billing accounts
   */
  post(path: '/telephony/{billingAccount}/canTransferSecurityDeposit'): (params: {billingAccount: string, billingAccountDestination: string}) => Promise<boolean>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/telephony/{billingAccount}/changeContact'): (params: {billingAccount: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * announceUpload operations
   * Change the sound played at the beginning of the conference
   */
  post(path: '/telephony/{billingAccount}/conference/{serviceName}/announceUpload'): (params: {billingAccount: string, serviceName: string, documentId: string}) => Promise<telephony.Task>;
  /**
   * lock operations
   * Lock the conference room
   */
  post(path: '/telephony/{billingAccount}/conference/{serviceName}/lock'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Task>;
  /**
   * deaf operations
   * Make a participant deaf in your conference room
   */
  post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/deaf'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * energy operations
   * Change a participant level of audio transmission
   */
  post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/energy'): (params: {billingAccount: string, id: number, serviceName: string, value: number}) => Promise<telephony.Task>;
  /**
   * kick operations
   * Eject a participant from your conference room
   */
  post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/kick'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * mute operations
   * Mute a participant in your conference room
   */
  post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/mute'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * undeaf operations
   * Make a participant undeaf your conference room
   */
  post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/undeaf'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * unmute operations
   * Unmute a participant in your conference room
   */
  post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/unmute'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * unlock operations
   * Lock the conference room
   */
  post(path: '/telephony/{billingAccount}/conference/{serviceName}/unlock'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Task>;
  /**
   * List the telephony.ConferenceWebAccess objects
   * Add a public web access to your conference
   */
  post(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess'): (params: {billingAccount: string, serviceName: string, type: telephony.ConferenceWebAccessTypeEnum}) => Promise<telephony.ConferenceWebAccess>;
  /**
   * changeDestination operations
   * Change the destination of the DDI
   */
  post(path: '/telephony/{billingAccount}/ddi/{serviceName}/changeDestination'): (params: {billingAccount: string, serviceName: string, destination: string}) => Promise<telephony.Task>;
  /**
   * List the telephony.OvhPabxHuntingAgent objects
   * Create a new agent
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent'): (params: {billingAccount: string, serviceName: string, description?: string, number: string, simultaneousLines: number, status: telephony.OvhPabxHuntingAgentStatusEnum, timeout: number, wrapUpTime: number}) => Promise<telephony.OvhPabxHuntingAgent>;
  /**
   * The web access for your cloudpabx
   * Create a new web access for this ressource
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<telephony.BannerAccess>;
  /**
   * eavesdrop operations
   * Eavesdrop on a call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * hangup operations
   * Hangup a call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * hold operations
   * Toogle hold on call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * intercept operations
   * Intercept a non answered call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * transfer operations
   * Transfer an answered call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * whisper operations
   * Whisper on a call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string, number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}) => Promise<telephony.Task>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken'): (params: {agentId: number, billingAccount: string, serviceName: string, expiration: telephony.TokenExpirationEnum}) => Promise<string>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Create a new skill for an agent (it adds the agent in a queue)
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue'): (params: {agentId: number, billingAccount: string, serviceName: string, position: number, queueId: number}) => Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * List the telephony.OvhPabxCustomStatus objects
   * Create a new custom status
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus'): (params: {billingAccount: string, serviceName: string, color?: string, description?: string, name: string}) => Promise<telephony.OvhPabxCustomStatus>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken'): (params: {billingAccount: string, serviceName: string, expiration: telephony.TokenExpirationEnum}) => Promise<string>;
  /**
   * List the telephony.OvhPabxHuntingQueue objects
   * Create a new queue
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue'): (params: {billingAccount: string, serviceName: string, actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy: telephony.OvhPabxHuntingQueueStrategyEnum}) => Promise<telephony.OvhPabxHuntingQueue>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Create a new skill for an agent (it adds the agent in a queue)
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent'): (params: {billingAccount: string, serviceName: string, position: number, queueId: number}) => Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * eavesdrop operations
   * Eavesdrop on a call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * hangup operations
   * Hangup a call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * hold operations
   * Toogle hold on call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * intercept operations
   * Intercept a non answered call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * transfer operations
   * Transfer an answered call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * whisper operations
   * Whisper on a call
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string, number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}) => Promise<telephony.Task>;
  /**
   * List the telephony.EasyHuntingScreenListsConditions objects
   * Create a new screenlist condition for an extension
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions'): (params: {billingAccount: string, serviceName: string, callerIdNumber?: string, destinationNumber?: string, screenListType: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}) => Promise<telephony.EasyHuntingScreenListsConditions>;
  /**
   * soundUpload operations
   * Upload new sound file
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/soundUpload'): (params: {billingAccount: string, serviceName: string, documentId?: string, name?: string, url?: string}) => Promise<telephony.Task>;
  /**
   * List the telephony.EasyHuntingTimeConditions objects
   * Create a new time condition
   */
  post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions'): (params: {billingAccount: string, serviceName: string, policy: telephony.TimeConditionsPolicyEnum, timeFrom: string, timeTo: string, weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}) => Promise<telephony.EasyHuntingTimeConditions>;
  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects
   * Create a new agent
   */
  post(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent'): (params: {billingAccount: string, serviceName: string, agentNumber: string, logged: boolean, noReplyTimer: number, position: number}) => Promise<telephony.EasyMiniPabxHuntingAgent>;
  /**
   * toneUpload operations
   * Upload new tone file
   */
  post(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones/toneUpload'): (params: {billingAccount: string, serviceName: string, documentId?: string, type: telephony.TonesTypeEnum, url?: string}) => Promise<telephony.Task>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  post(path: '/telephony/{billingAccount}/eventToken'): (params: {billingAccount: string, expiration: telephony.TokenExpirationEnum}) => Promise<string>;
  /**
   * List the telephony.FaxCampaign objects
   * Create a new fax campaign
   */
  post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns'): (params: {billingAccount: string, serviceName: string, documentId: string, faxQuality?: telephony.FaxQualityEnum, name: string, recipientsDocId?: string, recipientsList?: string[], recipientsType: telephony.FaxCampaignRecipientsTypeEnum, sendDate?: string, sendType: telephony.FaxCampaignSendTypeEnum}) => Promise<telephony.FaxCampaign>;
  /**
   * start operations
   * Start a fax campaign
   */
  post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/start'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * stop operations
   * Stop a fax campaign
   */
  post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/stop'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Fax ScreenLists
   * Create a new fax ScreenLists
   */
  post(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists'): (params: {billingAccount: string, serviceName: string, blacklistedNumbers?: string[], blacklistedTSI?: string[], filteringList?: telephony.FaxScreenListTypeEnum, whitelistedNumbers?: string[], whitelistedTSI?: string[]}) => Promise<telephony.FaxScreen>;
  /**
   * reset operations
   * Reset a specifical fax screenList
   */
  post(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists/reset'): (params: {billingAccount: string, serviceName: string, blacklistedNumbers?: boolean, blacklistedTSI?: boolean, whitelistedNumbers?: boolean, whitelistedTSI?: boolean}) => Promise<void>;
  /**
   * changePassword operations
   * Generates a new password for your fax account
   */
  post(path: '/telephony/{billingAccount}/fax/{serviceName}/settings/changePassword'): (params: {billingAccount: string, serviceName: string, password?: string}) => Promise<string>;
  /**
   * sendFax operations
   * Send a fax
   */
  post(path: '/telephony/{billingAccount}/fax/{serviceName}/settings/sendFax'): (params: {billingAccount: string, serviceName: string, dateSchedule?: string, pdfUrl: string, recipients: string[]}) => Promise<telephony.Task>;
  /**
   * List the telephony.HistoryRepaymentConsumption objects
   * Ask for a new repayment
   */
  post(path: '/telephony/{billingAccount}/historyRepaymentConsumption'): (params: {billingAccount: string, billingNumber?: string}) => Promise<telephony.HistoryRepaymentConsumption>;
  /**
   * List the telephony.AbbreviatedNumber objects
   * Create a new abbreviated number for the line
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber'): (params: {billingAccount: string, serviceName: string, abbreviatedNumber: number, destinationNumber: string, name: string, surname: string}) => Promise<telephony.AbbreviatedNumber>;
  /**
   * activateNewPhone operations
   * Allow to activate new phone, in case of phone switch
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/activateNewPhone'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * antihack operations
   * Clean the antihack or add it on active filter screen list
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/antihack'): (params: {billingAccount: string, serviceName: string, action: telephony.AntihackActionEnum, restricted?: string}) => Promise<void>;
  /**
   * associateDevice operations
   * Associate a device to the current line with the device mac address
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/associateDevice'): (params: {billingAccount: string, serviceName: string, ipAddress?: string, macAddress: string}) => Promise<void>;
  /**
   * List the telephony.CallsGenerated objects
   * Make an automatic phone call. Return generated call identifier
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall'): (params: {billingAccount: string, serviceName: string, bridgeNumberDialplan?: string, calledNumber: string, callingNumber?: string, dialplan: telephony.CallsGeneratorDialplanEnum, isAnonymous: boolean, playbackAudioFileDialplan?: string, timeout?: number, ttsTextDialplan?: string}) => Promise<string>;
  /**
   * block operations
   * Block the line. By default it will block incoming and outgoing calls (except for emergency numbers)
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/block'): (params: {billingAccount: string, serviceName: string, mode?: telephony.LineBlockingMode}) => Promise<void>;
  /**
   * eavesdrop operations
   * Eavesdrop on a call
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/eavesdrop'): (params: {billingAccount: string, id: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * hangup operations
   * Hangup a call
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hangup'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * hold operations
   * Toogle hold on call
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hold'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * intercept operations
   * Intercept a non answered call
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/intercept'): (params: {billingAccount: string, id: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * transfer operations
   * Transfer an answered call
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/transfer'): (params: {billingAccount: string, id: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * whisper operations
   * Whisper on a call
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper'): (params: {billingAccount: string, id: number, serviceName: string, number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}) => Promise<telephony.Task>;
  /**
   * cancelConvertToNumber operations
   * Cancel a scheduled conversion to number
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/cancelConvertToNumber'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * changePassword operations
   * Change the SIP account password. It must be more than 7 and less than 21 alpha and numerical characters.
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/changePassword'): (params: {billingAccount: string, serviceName: string, password?: string}) => Promise<void>;
  /**
   * click2Call operations
   * Make a phone call from the current line
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/click2Call'): (params: {billingAccount: string, serviceName: string, calledNumber: string, callingNumber?: string, intercom?: boolean}) => Promise<void>;
  /**
   * List the telephony.Click2CallUser objects
   * Create a new user for click 2 call
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser'): (params: {billingAccount: string, serviceName: string, login: string, password: string}) => Promise<number>;
  /**
   * changePassword operations
   * Change the password of the click2call user
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/changePassword'): (params: {billingAccount: string, id: number, serviceName: string, password: string}) => Promise<void>;
  /**
   * click2Call operations
   * Make a phone call from the current line
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call'): (params: {billingAccount: string, id: number, serviceName: string, calledNumber: string, callingNumber?: string}) => Promise<void>;
  /**
   * convertToNumber operations
   * Schedule a conversion to number
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/convertToNumber'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.OfferTask>;
  /**
   * dissociateDevice operations
   * Dissociate a device from the current line with the device mac address
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/dissociateDevice'): (params: {billingAccount: string, serviceName: string, ipAddress?: string, macAddress: string}) => Promise<void>;
  /**
   * changePhoneConfiguration operations
   * Edit configuration of the phone remotely by provisioning
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration'): (params: {billingAccount: string, serviceName: string, autoReboot?: boolean, newConfigurations?: complexType.SafeKeyValue<string>[]}) => Promise<void>;
  /**
   * List the telephony.Phonebook objects
   * Add a phonebook. Return the bookKey.
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook'): (params: {billingAccount: string, serviceName: string, name: string}) => Promise<string>;
  /**
   * import operations
   * Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/import'): (params: {billingAccount: string, bookKey: string, serviceName: string, documentId: string}) => Promise<telephony.Task>;
  /**
   * List the telephony.PhonebookContact objects
   * Create a phonebook contact. Return identifier of the phonebook contact.
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact'): (params: {billingAccount: string, bookKey: string, serviceName: string, group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}) => Promise<number>;
  /**
   * reboot operations
   * Create a task to reboot the phone
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/reboot'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Task>;
  /**
   * refreshScreen operations
   * Create a task to refresh the screen of the MGCP phone
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/refreshScreen'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.Task>;
  /**
   * resetConfig operations
   * Reinitialize the phone configuration
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/resetConfig'): (params: {billingAccount: string, serviceName: string, ip: string}) => Promise<telephony.ResetPhoneInfo>;
  /**
   * List the telephony.Rma objects
   * Create a specific rma
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma'): (params: {billingAccount: string, serviceName: string, mondialRelayId?: string, newMerchandise?: string, shippingContactId?: number, type: telephony.RmaPublicTypeEnum}) => Promise<telephony.RmaReturn>;
  /**
   * removeSimultaneousLines operations
   * Remove extra simultaneous lines
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/removeSimultaneousLines'): (params: {billingAccount: string, serviceName: string, quantityRemove: number}) => Promise<void>;
  /**
   * toneUpload operations
   * Upload new tone file
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/tones/toneUpload'): (params: {billingAccount: string, serviceName: string, documentId?: string, type: telephony.TonesTypeEnum, url?: string}) => Promise<telephony.Task>;
  /**
   * List the telephony.trafficExtract objects
   * Launch a traffic extract on your line
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts'): (params: {billingAccount: string, serviceName: string, dateEnd: string, dateStart: string}) => Promise<telephony.trafficExtract>;
  /**
   * unblock operations
   * Unblock the line. It will remove any incoming and outboing block made earlier
   */
  post(path: '/telephony/{billingAccount}/line/{serviceName}/unblock'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects
   * Create a new agent
   */
  post(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent'): (params: {billingAccount: string, serviceName: string, agentNumber: string, logged: boolean, noReplyTimer: number, position: number}) => Promise<telephony.EasyMiniPabxHuntingAgent>;
  /**
   * toneUpload operations
   * Upload new tone file
   */
  post(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones/toneUpload'): (params: {billingAccount: string, serviceName: string, documentId?: string, type: telephony.TonesTypeEnum, url?: string}) => Promise<telephony.Task>;
  /**
   * cancelConvertToLine operations
   * Cancel a scheduled conversion to line
   */
  post(path: '/telephony/{billingAccount}/number/{serviceName}/cancelConvertToLine'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * changeFeatureType operations
   * Change the feature type of the phone number
   */
  post(path: '/telephony/{billingAccount}/number/{serviceName}/changeFeatureType'): (params: {billingAccount: string, serviceName: string, featureType: telephony.TypeEnum}) => Promise<telephony.Task>;
  /**
   * convertToLine operations
   * Schedule a conversion to line
   */
  post(path: '/telephony/{billingAccount}/number/{serviceName}/convertToLine'): (params: {billingAccount: string, serviceName: string, offer: string}) => Promise<telephony.OfferTask>;
  /**
   * List the telephony.ConsumptionThreshold objects
   * Add an outplan notification on the billing account
   */
  post(path: '/telephony/{billingAccount}/outplanNotification'): (params: {billingAccount: string, block: telephony.OutplanNotificationBlockEnum, notifyEmail?: string, percentage: number}) => Promise<telephony.ConsumptionThreshold>;
  /**
   * List the telephony.OvhPabxDialplan objects
   * Create a new dialplan
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan'): (params: {billingAccount: string, serviceName: string, anonymousRejection: boolean, name: string, showCallerNumber: telephony.OvhPabxDialplanNumberPresentationEnum, transferTimeout: number}) => Promise<telephony.OvhPabxDialplan>;
  /**
   * List the telephony.OvhPabxDialplanExtension objects
   * Create a new extension for a dialplan
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension'): (params: {billingAccount: string, dialplanId: number, serviceName: string, enable: boolean, position: number, schedulerCategory?: telephony.SchedulerCategoryEnum, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}) => Promise<telephony.OvhPabxDialplanExtension>;
  /**
   * List the telephony.OvhPabxDialplanExtensionConditionScreenList objects
   * Create a new screenlist condition for an extension
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList'): (params: {billingAccount: string, dialplanId: number, extensionId: number, serviceName: string, callerIdNumber?: string, destinationNumber?: string, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}) => Promise<telephony.OvhPabxDialplanExtensionConditionScreenList>;
  /**
   * List the telephony.OvhPabxDialplanExtensionConditionTime objects
   * Create a new time condition for an extension
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime'): (params: {billingAccount: string, dialplanId: number, extensionId: number, serviceName: string, timeFrom: string, timeTo: string, weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}) => Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
  /**
   * List the telephony.OvhPabxDialplanExtensionRule objects
   * Create a new rule for an extension
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule'): (params: {billingAccount: string, dialplanId: number, extensionId: number, serviceName: string, action: telephony.OvhPabxDialplanExtensionRuleActionEnum, actionParam?: string, negativeAction: boolean, position: number}) => Promise<telephony.OvhPabxDialplanExtensionRule>;
  /**
   * List the telephony.OvhPabxHuntingAgent objects
   * Create a new agent
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent'): (params: {billingAccount: string, serviceName: string, description?: string, number: string, simultaneousLines: number, status: telephony.OvhPabxHuntingAgentStatusEnum, timeout: number, wrapUpTime: number}) => Promise<telephony.OvhPabxHuntingAgent>;
  /**
   * The web access for your cloudpabx
   * Create a new web access for this ressource
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<telephony.BannerAccess>;
  /**
   * eavesdrop operations
   * Eavesdrop on a call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * hangup operations
   * Hangup a call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * hold operations
   * Toogle hold on call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * intercept operations
   * Intercept a non answered call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * transfer operations
   * Transfer an answered call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * whisper operations
   * Whisper on a call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper'): (params: {agentId: number, billingAccount: string, id: number, serviceName: string, number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}) => Promise<telephony.Task>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken'): (params: {agentId: number, billingAccount: string, serviceName: string, expiration: telephony.TokenExpirationEnum}) => Promise<string>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Create a new skill for an agent (it adds the agent in a queue)
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue'): (params: {agentId: number, billingAccount: string, serviceName: string, position: number, queueId: number}) => Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * List the telephony.OvhPabxCustomStatus objects
   * Create a new custom status
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus'): (params: {billingAccount: string, serviceName: string, color?: string, description?: string, name: string}) => Promise<telephony.OvhPabxCustomStatus>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken'): (params: {billingAccount: string, serviceName: string, expiration: telephony.TokenExpirationEnum}) => Promise<string>;
  /**
   * List the telephony.OvhPabxHuntingQueue objects
   * Create a new queue
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue'): (params: {billingAccount: string, serviceName: string, actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy: telephony.OvhPabxHuntingQueueStrategyEnum}) => Promise<telephony.OvhPabxHuntingQueue>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Create a new skill for an agent (it adds the agent in a queue)
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent'): (params: {billingAccount: string, serviceName: string, position: number, queueId: number}) => Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * eavesdrop operations
   * Eavesdrop on a call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * hangup operations
   * Hangup a call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * hold operations
   * Toogle hold on call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string}) => Promise<telephony.Task>;
  /**
   * intercept operations
   * Intercept a non answered call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * transfer operations
   * Transfer an answered call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string, number: string}) => Promise<telephony.Task>;
  /**
   * whisper operations
   * Whisper on a call
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper'): (params: {billingAccount: string, id: number, queueId: number, serviceName: string, number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}) => Promise<telephony.Task>;
  /**
   * List the telephony.OvhPabxMenu objects
   * Create a new menu
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu'): (params: {billingAccount: string, serviceName: string, greetSound?: number, greetSoundTts?: number, invalidSound?: number, invalidSoundTts?: number, name: string}) => Promise<telephony.OvhPabxMenu>;
  /**
   * List the telephony.OvhPabxMenuEntry objects
   * Create a new menu entry
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry'): (params: {billingAccount: string, menuId: number, serviceName: string, action: telephony.OvhPabxIvrMenuEntryActionEnum, actionParam?: string, dtmf: string, position: number}) => Promise<telephony.OvhPabxMenuEntry>;
  /**
   * soundUpload operations
   * Upload new sound file
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/soundUpload'): (params: {billingAccount: string, serviceName: string, documentId?: string, name?: string, url?: string}) => Promise<telephony.Task>;
  /**
   * List the telephony.OvhPabxTts objects
   * Create a new text to speech
   */
  post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts'): (params: {billingAccount: string, serviceName: string, text: string, voice?: telephony.OvhPabxTtsVoiceEnum}) => Promise<void>;
  /**
   * List the telephony.PhonebookMaster objects
   * Add a phonebook on group. Return the bookKey.
   */
  post(path: '/telephony/{billingAccount}/phonebook'): (params: {billingAccount: string, name: string}) => Promise<string>;
  /**
   * import operations
   * Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
   */
  post(path: '/telephony/{billingAccount}/phonebook/{bookKey}/import'): (params: {billingAccount: string, bookKey: string, documentId: string}) => Promise<telephony.Task>;
  /**
   * List the telephony.PhonebookContact objects
   * Create a phonebook contact. Return identifier of the phonebook contact.
   */
  post(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact'): (params: {billingAccount: string, bookKey: string, group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}) => Promise<number>;
  /**
   * cancel operations
   * Ask to cancel the portability
   */
  post(path: '/telephony/{billingAccount}/portability/{id}/cancel'): (params: {billingAccount: string, id: number, reason?: string}) => Promise<void>;
  /**
   * changeDate operations
   * Ask to change the portability date
   */
  post(path: '/telephony/{billingAccount}/portability/{id}/changeDate'): (params: {billingAccount: string, id: number, date: string}) => Promise<void>;
  /**
   * List the telephony.PortabilityDocument objects
   * Create a portability document
   */
  post(path: '/telephony/{billingAccount}/portability/{id}/document'): (params: {billingAccount: string, id: number, description?: string, name: string}) => Promise<telephony.PortabilityDocument>;
  /**
   * execute operations
   * Ask to execute the portability
   */
  post(path: '/telephony/{billingAccount}/portability/{id}/execute'): (params: {billingAccount: string, id: number}) => Promise<void>;
  /**
   * relaunch operations
   * Fix error and relaunch portability
   */
  post(path: '/telephony/{billingAccount}/portability/{id}/relaunch'): (params: {billingAccount: string, id: number, parameters: complexType.SafeKeyValue<string>[]}) => Promise<void>;
  /**
   * changeDestination operations
   * Change the destination of the redirect
   */
  post(path: '/telephony/{billingAccount}/redirect/{serviceName}/changeDestination'): (params: {billingAccount: string, serviceName: string, destination: string}) => Promise<telephony.Task>;
  /**
   * cancelScheduledRateCode operations
   * Cancel a scheduled rate code update
   */
  post(path: '/telephony/{billingAccount}/rsva/{serviceName}/cancelScheduledRateCode'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * scheduleRateCode operations
   * Schedule a new rate code for this sva
   */
  post(path: '/telephony/{billingAccount}/rsva/{serviceName}/scheduleRateCode'): (params: {billingAccount: string, serviceName: string, rateCode: string}) => Promise<telephony.DetailedRateCodeInformation>;
  /**
   * List the telephony.SchedulerEvent objects
   * Add a scheduler event
   */
  post(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events'): (params: {billingAccount: string, serviceName: string, category: telephony.SchedulerCategoryEnum, dateEnd: string, dateStart: string, description?: string, title: string, uid?: string}) => Promise<void>;
  /**
   * importIcsCalendar operations
   * Add scheduler events in ICS format
   */
  post(path: '/telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar'): (params: {billingAccount: string, serviceName: string, url: string}) => Promise<telephony.Task>;
  /**
   * List the telephony.ScreenList objects
   * Create a new screen list rule
   */
  post(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists'): (params: {billingAccount: string, serviceName: string, callNumber?: string, nature: telephony.ScreenListNatureEnum, type: telephony.ScreenListTypeEnum}) => Promise<void>;
  /**
   * cancelTermination operations
   * Cancel the service termination
   */
  post(path: '/telephony/{billingAccount}/service/{serviceName}/cancelTermination'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * changeOfBillingAccount operations
   * Move a service of billing account. Source and destination nics should be the same.
   */
  post(path: '/telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount'): (params: {billingAccount: string, serviceName: string, billingAccountDestination: string}) => Promise<void>;
  /**
   * fetchEntrepriseInformations operations
   * Get company entreprise informations by providing entreprise number
   */
  post(path: '/telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations'): (params: {billingAccount: string, serviceName: string, entrepriseNumber: string}) => Promise<telephony.EntrepriseNumberInformationsTask>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  post(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken'): (params: {billingAccount: string, serviceName: string, expiration: telephony.TokenExpirationEnum}) => Promise<string>;
  /**
   * Offer change
   * Add a new offer change
   */
  post(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange'): (params: {billingAccount: string, serviceName: string, offer: string}) => Promise<void>;
  /**
   * List the telephony.TimeCondition objects
   * Create a new time condition rule
   */
  post(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition'): (params: {billingAccount: string, serviceName: string, day: telephony.TimeConditionsDayEnum, hourBegin: string, hourEnd: string, policy: telephony.TimeConditionsPolicyEnum}) => Promise<telephony.TimeCondition>;
  /**
   * transferSecurityDeposit operations
   * Transfer security deposit between two billing accounts
   */
  post(path: '/telephony/{billingAccount}/transferSecurityDeposit'): (params: {billingAccount: string, amount: number, billingAccountDestination: string}) => Promise<void>;
  /**
   * List the telephony.TrunkExternalDisplayedNumber objects
   * External displayed number creation for a given trunk
   */
  post(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber'): (params: {billingAccount: string, serviceName: string, autoValidation?: boolean, number: string}) => Promise<telephony.TrunkExternalDisplayedNumber>;
  /**
   * validate operations
   * Generate a phone call for validation. Returned validation code should be typed when asked.
   */
  post(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}/validate'): (params: {billingAccount: string, number: string, serviceName: string}) => Promise<telephony.TrunkExternalDisplayedNumberValidation>;
  /**
   * move operations
   * Move the message to another directory
   */
  post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/move'): (params: {billingAccount: string, id: number, serviceName: string, dir: telephony.VoicemailMessageFolderDirectoryEnum}) => Promise<void>;
  /**
   * List the telephony.VoicemailGreetings objects
   * Upload a new sound for a specific greeting. Return a task id.
   */
  post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings'): (params: {billingAccount: string, serviceName: string, dir: telephony.VoicemailMessageFolderGreetingEnum, documentId: string}) => Promise<number>;
  /**
   * move operations
   * Move the message to another directory
   */
  post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move'): (params: {billingAccount: string, id: number, serviceName: string, dir: telephony.VoicemailMessageFolderGreetingEnum}) => Promise<void>;
  /**
   * migrateOnNewVersion operations
   * Change the voicemail on a new version to manager greetings, directories and extra settings.
   */
  post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/migrateOnNewVersion'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * changePassword operations
   * Change the voicemail password. It must be 4 digit
   */
  post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/changePassword'): (params: {billingAccount: string, serviceName: string, password: string}) => Promise<void>;
  /**
   * changeRouting operations
   * Disable/Enable voicemail. Available only if the line has fax capabilities
   */
  post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting'): (params: {billingAccount: string, serviceName: string, routing: telephony.VoicefaxRoutingEnum}) => Promise<void>;
  /**
   * logs operations
   * Generate a temporary url to retrieve device logs
   */
  post(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings/logs'): (params: {billingAccount: string, serviceName: string}) => Promise<telephony.TemporaryLogsLink>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/telephony/aliases/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/telephony/lines/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Get all available SIP domains by country
   * Get all available SIP domains by country
   */
  post(path: '/telephony/setDefaultSipDomain'): (params: {country: telephony.NumberCountryEnum, domain: string, type: telephony.SipDomainProductTypeEnum}) => Promise<void>;
  /**
   * List the telephony.Sound objects
   * Create a new sound
   */
  post(path: '/telephony/sounds'): (params: {description?: string, filename: string}) => Promise<telephony.Sound>;
  /**
   * replace operations
   * Replace the phone by its spare. The broken phone became a spare if it was bought. An RMA is created if the broken phone is under securitydeposit.
   */
  post(path: '/telephony/spare/{spare}/replace'): (params: {spare: string, domain: string, ip: string}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/telephony/trunks/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Billing Account
   * Ask for a billing account termination.
   */
  delete(path: '/telephony/{billingAccount}'): (params: {billingAccount: string}) => Promise<void>;
  /**
   * Abbreviated number
   * Delete the given abbreviated number
   */
  delete(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}'): (params: {abbreviatedNumber: number, billingAccount: string}) => Promise<void>;
  /**
   * List public web access of your conference
   * Delete a public web access to your conference
   */
  delete(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Calls agent
   * Delete the given agent
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * The web access for your cloudpabx
   * Delete the given web access
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * Agent assigned to a queue
   * Delete the given skill
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<void>;
  /**
   * Custom statuses of your callcenter agents
   * Delete the given custom status
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * Calls queue
   * Delete the given queue
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}'): (params: {billingAccount: string, queueId: number, serviceName: string}) => Promise<void>;
  /**
   * Agent assigned to a queue
   * Delete the given skill
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<void>;
  /**
   * The PABX records
   * Delete the given record
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Screenlist condition
   * Delete the given condition
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}'): (params: {billingAccount: string, conditionId: number, serviceName: string}) => Promise<void>;
  /**
   * The PABX sounds
   * Delete the given sound
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}'): (params: {billingAccount: string, serviceName: string, soundId: number}) => Promise<void>;
  /**
   * Easy hunting time conditions
   * Delete the given condition
   */
  delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}'): (params: {billingAccount: string, conditionId: number, serviceName: string}) => Promise<void>;
  /**
   * Easy/Mini PABX agent
   * Delete the agent
   */
  delete(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}'): (params: {agentNumber: string, billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  delete(path: '/telephony/{billingAccount}/eventToken'): (params: {billingAccount: string}) => Promise<void>;
  /**
   * Fax campaigns
   * Delete a fax campaign
   */
  delete(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Fax ScreenLists
   * Delete all fax screenLists
   */
  delete(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * Abbreviated number
   * Delete the given abbreviated number
   */
  delete(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}'): (params: {abbreviatedNumber: number, billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * User of the click 2 call
   * Delete a click 2 call user
   */
  delete(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Phone book
   * Delete a phonebook
   */
  delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}'): (params: {billingAccount: string, bookKey: string, serviceName: string}) => Promise<void>;
  /**
   * Phone book contact
   * Delete a phonebook contact
   */
  delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}'): (params: {billingAccount: string, bookKey: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Current Return Merchandise Authorisation
   * Cancel the rma
   */
  delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}'): (params: {billingAccount: string, id: string, serviceName: string}) => Promise<void>;
  /**
   * The PABX records
   * Delete the given record
   */
  delete(path: '/telephony/{billingAccount}/line/{serviceName}/records/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Traffic extracts (SIP) of your line
   * Delete a traffic extract
   */
  delete(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Easy/Mini PABX agent
   * Delete the agent
   */
  delete(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}'): (params: {agentNumber: string, billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * The outplan notifications configured for your billing account
   * Delete an outplan notification
   */
  delete(path: '/telephony/{billingAccount}/outplanNotification/{id}'): (params: {billingAccount: string, id: number}) => Promise<void>;
  /**
   * Dialplan
   * Delete the given dialplan
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}'): (params: {billingAccount: string, dialplanId: number, serviceName: string}) => Promise<void>;
  /**
   * Dialplan extension
   * Delete the given extension
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}'): (params: {billingAccount: string, dialplanId: number, extensionId: number, serviceName: string}) => Promise<void>;
  /**
   * Screenlist condition
   * Delete the given condition
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}'): (params: {billingAccount: string, conditionId: number, dialplanId: number, extensionId: number, serviceName: string}) => Promise<void>;
  /**
   * Time condition
   * Delete the given condition
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}'): (params: {billingAccount: string, conditionId: number, dialplanId: number, extensionId: number, serviceName: string}) => Promise<void>;
  /**
   * Dialplan rule
   * Delete the given rule
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}'): (params: {billingAccount: string, dialplanId: number, extensionId: number, ruleId: number, serviceName: string}) => Promise<void>;
  /**
   * Calls agent
   * Delete the given agent
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * The web access for your cloudpabx
   * Delete the given web access
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken'): (params: {agentId: number, billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * Agent assigned to a queue
   * Delete the given skill
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<void>;
  /**
   * Custom statuses of your callcenter agents
   * Delete the given custom status
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * Calls queue
   * Delete the given queue
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}'): (params: {billingAccount: string, queueId: number, serviceName: string}) => Promise<void>;
  /**
   * Agent assigned to a queue
   * Delete the given skill
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}'): (params: {agentId: number, billingAccount: string, queueId: number, serviceName: string}) => Promise<void>;
  /**
   * IVR Menu
   * Delete the given menu
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}'): (params: {billingAccount: string, menuId: number, serviceName: string}) => Promise<void>;
  /**
   * IVR menu entry
   * Delete the given menu entry
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}'): (params: {billingAccount: string, entryId: number, menuId: number, serviceName: string}) => Promise<void>;
  /**
   * The PABX records
   * Delete the given record
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * The PABX sounds
   * Delete the given sound
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}'): (params: {billingAccount: string, serviceName: string, soundId: number}) => Promise<void>;
  /**
   * The PABX Text To Speech sounds
   * Delete the given text to speech
   */
  delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Phone book on group
   * Delete a phonebook
   */
  delete(path: '/telephony/{billingAccount}/phonebook/{bookKey}'): (params: {billingAccount: string, bookKey: string}) => Promise<void>;
  /**
   * Phone book contact
   * Delete a phonebook contact
   */
  delete(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}'): (params: {billingAccount: string, bookKey: string, id: number}) => Promise<void>;
  /**
   * Document linked to a portability
   * Delete the document
   */
  delete(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}'): (params: {billingAccount: string, documentId: number, id: number}) => Promise<void>;
  /**
   * Scheduled event
   * Delete the given scheduler event
   */
  delete(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}'): (params: {billingAccount: string, serviceName: string, uid: string}) => Promise<void>;
  /**
   * Screen list
   * Delete the given screen list
   */
  delete(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Telephony service
   * Ask for a service termination.
   */
  delete(path: '/telephony/{billingAccount}/service/{serviceName}'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  delete(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * Offer change
   * Delete the replacement offer scheduling
   */
  delete(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange'): (params: {billingAccount: string, serviceName: string}) => Promise<void>;
  /**
   * Time conditions
   * Delete the given screen list
   */
  delete(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * External displayed number linked to a trunk
   * Delete an external displayed number for a given trunk
   */
  delete(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}'): (params: {billingAccount: string, number: string, serviceName: string}) => Promise<void>;
  /**
   * Voicemail message
   * Delete the given voicemail message
   */
  delete(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Voicemail greeting
   * Delete the customized greeting
   */
  delete(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}'): (params: {billingAccount: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Sounds attached to this telephony account
   * Delete the sound
   */
  delete(path: '/telephony/sounds/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * Spare properties
   * Delete the spare as if it was not belonging to OVH anymore
   */
  delete(path: '/telephony/spare/{spare}'): (params: {spare: string}) => Promise<void>;
}
/**
 * classic Model
 */type telephonyProtocolEnum = telephony.ProtocolEnum;
type orderPrice = order.Price;
