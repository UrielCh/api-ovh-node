import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /telephony Models
 * Source: https://eu.api.ovh.com/1.0/telephony.json
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
        price: order.Price;
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
        allowedOutplan: order.Price;
        billingAccount: string;
        creditThreshold: order.Price;
        currentOutplan: order.Price;
        description: string;
        hiddenExternalNumber: boolean;
        overrideDisplayedNumber: boolean;
        securityDeposit: order.Price;
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
    // interface fullName: telephony.CarrierSipClusterInfo.CarrierSipClusterInfo
    export interface CarrierSipClusterInfo {
        name: string;
        zones: telephony.CarrierSipClusterZone[];
    }
    // interface fullName: telephony.CarrierSipClusterZone.CarrierSipClusterZone
    export interface CarrierSipClusterZone {
        mediaIps: string[];
        region: telephony.CarrierSipClusterZoneRegionEnum;
    }
    // type fullname: telephony.CarrierSipClusterZoneRegionEnum
    export type CarrierSipClusterZoneRegionEnum = "rbx" | "sbg"
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
        pricePerCallWithoutTax: order.Price;
        pricePerMinuteWithoutTax: order.Price;
        rateCode: string;
        repaymentPricePerCallWithoutTax: order.Price;
        repaymentPricePerMinuteWithoutTax: order.Price;
        updateRateCodePriceWithoutTax?: order.Price;
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
    // interface fullName: telephony.Document.Document
    export interface Document {
        description?: string;
        id: string;
        name: string;
        size: number;
        url: string;
        validationDate?: string;
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
        priceWithoutTax: order.Price;
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
        price: order.Price;
        url?: string;
    }
    // interface fullName: telephony.HistoryConsumption.HistoryConsumption
    export interface HistoryConsumption {
        date: string;
        price: order.Price;
        priceOutplan: order.Price;
        status: telephony.BillStatusEnum;
    }
    // interface fullName: telephony.HistoryRepaymentConsumption.HistoryRepaymentConsumption
    export interface HistoryRepaymentConsumption {
        billingNumber: string;
        date: string;
        price: order.Price;
        status: telephony.BillStatusEnum;
    }
    // interface fullName: telephony.HistoryTollfreeConsumption.HistoryTollfreeConsumption
    export interface HistoryTollfreeConsumption {
        date: string;
        price: order.Price;
        status: telephony.BillStatusEnum;
    }
    // interface fullName: telephony.Line.Line
    export interface Line {
        canChangePassword: boolean;
        description: string;
        deviceSlot: number;
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
        price?: order.Price;
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
        price: order.Price;
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
    // interface fullName: telephony.OldPhone.OldPhone
    export interface OldPhone {
        mac: string;
        model: string;
    }
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
        rio?: string;
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
        priceWithoutTax: order.Price;
        wayType: telephony.VoiceConsumptionWayTypeEnum;
    }
    // type fullname: telephony.PropertyEnum
    export type PropertyEnum = "xdsl"
    // type fullname: telephony.ProtocolEnum
    export type ProtocolEnum = "mgcp" | "sip"
    // interface fullName: telephony.RateCodeInformation.RateCodeInformation
    export interface RateCodeInformation {
        code: string;
        pricePerCallWithoutTax: order.Price;
        pricePerMinuteWithoutTax: order.Price;
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
        currentOutplan: order.Price;
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
        unitPrice: order.Price;
    }
    // interface fullName: telephony.TrunkSimultaneousPacksRepartition.TrunkSimultaneousPacksRepartition
    export interface TrunkSimultaneousPacksRepartition {
        optimizedChannelsQuantity: number;
        packsRepartition: telephony.TrunkSimultaneousPack[];
        totalPrice: order.Price;
    }
    // type fullname: telephony.TypeEnum
    export type TypeEnum = "carrierSip" | "cloudHunting" | "cloudIvr" | "conference" | "contactCenterSolution" | "contactCenterSolutionExpert" | "ddi" | "easyHunting" | "easyPabx" | "empty" | "fax" | "freefax" | "mgcp" | "miniPabx" | "oldConference" | "plugAndFax" | "redirect" | "sip" | "svi" | "voicefax" | "voicemail" | "vxml"
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
        priceWithoutTax: order.Price;
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
export interface Telephony {
    // GET /telephony
    $get(): Promise<string[]>;
    accessories: {
        // GET /telephony/accessories
        $get(params: { country: telephony.NumberCountryEnum }): Promise<telephony.AccessoryOffer[]>;
    }
    aliases: {
        // GET /telephony/aliases
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /telephony/aliases/{serviceName}
            $get(): Promise<telephony.TelephonyGenericService>;
            changeContact: {
                // POST /telephony/aliases/{serviceName}/changeContact
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            serviceInfos: {
                // GET /telephony/aliases/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /telephony/aliases/{serviceName}/serviceInfos
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            }
        };
    }
    availableDefaultSipDomains: {
        // GET /telephony/availableDefaultSipDomains
        $get(params: { type: telephony.SipDomainProductTypeEnum }): Promise<telephony.DefaultSipDomains[]>;
    }
    currentOrderIds: {
        // GET /telephony/currentOrderIds
        $get(): Promise<number[]>;
    }
    directories: {
        availableZipCodes: {
            // GET /telephony/directories/availableZipCodes
            $get(params: { country: telephony.NumberCountryEnum, number: string }): Promise<string[]>;
        }
        cities: {
            // GET /telephony/directories/cities
            $get(params: { country: telephony.NumberCountryEnum, zipCode: string }): Promise<telephony.City[]>;
        }
    }
    fax: {
        offers: {
            // GET /telephony/fax/offers
            $get(params: { country: telephony.NumberCountryEnum }): Promise<telephony.LineOffer[]>;
        }
    }
    line: {
        offer: {
            phones: {
                // GET /telephony/line/offer/phones
                $get(params: { country: telephony.NumberCountryEnum, offer: string }): Promise<telephony.LinePhone[]>;
            }
        }
        offers: {
            // GET /telephony/line/offers
            $get(params: { country: telephony.NumberCountryEnum }): Promise<telephony.LineOffer[]>;
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
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            serviceInfos: {
                // GET /telephony/lines/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /telephony/lines/{serviceName}/serviceInfos
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            }
        };
    }
    number: {
        detailedZones: {
            // GET /telephony/number/detailedZones
            $get(params: { axiom?: string, country: telephony.NumberCountryEnum }): Promise<telephony.NumberDetailedZone[]>;
        }
        ranges: {
            // GET /telephony/number/ranges
            $get(params: { country: telephony.NumberCountryEnum }): Promise<string[]>;
        }
        specificNumbers: {
            // GET /telephony/number/specificNumbers
            $get(params: { country: telephony.NumberCountryEnum, range?: string, type: telephony.NumberTypeEnum, zone?: string }): Promise<telephony.SpecificNumber[]>;
        }
        zones: {
            // GET /telephony/number/zones
            $get(params: { axiom?: string, country: telephony.NumberCountryEnum }): Promise<string[]>;
        }
    }
    searchServices: {
        // GET /telephony/searchServices
        $get(params: { axiom: string }): Promise<telephony.TelephonySearchService[]>;
    }
    setDefaultSipDomain: {
        // POST /telephony/setDefaultSipDomain
        $post(params: { country: telephony.NumberCountryEnum, domain: string, type: telephony.SipDomainProductTypeEnum }): Promise<void>;
    }
    sounds: {
        // GET /telephony/sounds
        $get(): Promise<number[]>;
        // POST /telephony/sounds
        $post(params: { description?: string, filename: string }): Promise<telephony.Sound>;
        $(id: number): {
            // DELETE /telephony/sounds/{id}
            $delete(): Promise<void>;
            // GET /telephony/sounds/{id}
            $get(): Promise<telephony.Sound>;
            // PUT /telephony/sounds/{id}
            $put(params?: { creationDate?: string, description?: string, filename?: string, getUrl?: string, id?: number, putUrl?: string, size?: number }): Promise<void>;
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
                $post(params: { domain: string, ip: string }): Promise<void>;
            }
            serviceInfos: {
                // GET /telephony/spare/{spare}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /telephony/spare/{spare}/serviceInfos
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
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
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            serviceInfos: {
                // GET /telephony/trunks/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /telephony/trunks/{serviceName}/serviceInfos
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            }
        };
    }
    $(billingAccount: string): {
        // DELETE /telephony/{billingAccount}
        $delete(params: { details?: string, reason: telephony.TerminationReasonEnum }): Promise<void>;
        // GET /telephony/{billingAccount}
        $get(): Promise<telephony.BillingAccount>;
        // PUT /telephony/{billingAccount}
        $put(params?: { allowedOutplan?: order.Price, billingAccount?: string, creditThreshold?: order.Price, currentOutplan?: order.Price, description?: string, hiddenExternalNumber?: boolean, overrideDisplayedNumber?: boolean, securityDeposit?: order.Price, status?: telephony.BillingAccountStatusEnum, trusted?: boolean }): Promise<void>;
        abbreviatedNumber: {
            // GET /telephony/{billingAccount}/abbreviatedNumber
            $get(): Promise<number[]>;
            // POST /telephony/{billingAccount}/abbreviatedNumber
            $post(params: { abbreviatedNumber: number, destinationNumber: string, name: string, surname: string }): Promise<telephony.AbbreviatedNumberGroup>;
            $(abbreviatedNumber: number): {
                // DELETE /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                $delete(): Promise<void>;
                // GET /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                $get(): Promise<telephony.AbbreviatedNumberGroup>;
                // PUT /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                $put(params?: { abbreviatedNumber?: number, destinationNumber?: string, name?: string, surname?: string }): Promise<void>;
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
            $post(params: { billingAccountSite: string }): Promise<void>;
        }
        canTransferSecurityDeposit: {
            // POST /telephony/{billingAccount}/canTransferSecurityDeposit
            $post(params: { billingAccountDestination: string }): Promise<boolean>;
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
                cdrs: {
                    // GET /telephony/{billingAccount}/carrierSip/{serviceName}/cdrs
                    $get(params?: { month?: string }): Promise<telephony.Document>;
                }
                clusterDetails: {
                    // GET /telephony/{billingAccount}/carrierSip/{serviceName}/clusterDetails
                    $get(): Promise<telephony.CarrierSipClusterInfo>;
                }
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
                    $put(params?: { description?: string, maxCallsPerSecond?: number, maxConcurrentCalls?: number }): Promise<void>;
                }
            };
        }
        changeContact: {
            // POST /telephony/{billingAccount}/changeContact
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
        }
        conference: {
            // GET /telephony/{billingAccount}/conference
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/conference/{serviceName}
                $get(): Promise<telephony.Conference>;
                announceUpload: {
                    // POST /telephony/{billingAccount}/conference/{serviceName}/announceUpload
                    $post(params: { documentId: string }): Promise<telephony.Task>;
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
                            $post(params: { value: number }): Promise<telephony.Task>;
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
                    $put(params?: { announceFile?: boolean, announceFilename?: string, announceSoundId?: number, anonymousRejection?: boolean, enterMuted?: boolean, eventsChannel?: string, language?: telephony.ConferenceLanguageEnum, pin?: string, recordStatus?: boolean, reportEmail?: string, reportStatus?: telephony.ConferenceReportStatusEnum, whiteLabelReport?: boolean }): Promise<void>;
                }
                unlock: {
                    // POST /telephony/{billingAccount}/conference/{serviceName}/unlock
                    $post(): Promise<telephony.Task>;
                }
                webAccess: {
                    // GET /telephony/{billingAccount}/conference/{serviceName}/webAccess
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/conference/{serviceName}/webAccess
                    $post(params: { type: telephony.ConferenceWebAccessTypeEnum }): Promise<telephony.ConferenceWebAccess>;
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
                $put(params?: { description?: string, destination?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                changeDestination: {
                    // POST /telephony/{billingAccount}/ddi/{serviceName}/changeDestination
                    $post(params: { destination: string }): Promise<telephony.Task>;
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
                $put(params?: { anonymousRejection?: boolean, description?: string, featureType?: telephony.TypeEnum, isCCS?: boolean, maxWaitTime?: number, queueSize?: number, serviceName?: string, serviceType?: telephony.TypeServiceEnum, showCallerNumber?: telephony.OvhPabxDialplanNumberPresentationEnum, statusIvrEnabled?: boolean, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum, toneOnClosing?: number, toneOnHold?: number, toneOnOpening?: number, voicemail?: string }): Promise<void>;
                hunting: {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting
                    $get(): Promise<telephony.OvhPabxHunting>;
                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting
                    $put(params?: { crmUrlTemplate?: string, g729?: boolean, name?: string, statusIvrEnabled?: boolean }): Promise<void>;
                    agent: {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent
                        $get(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent
                        $post(params: { description?: string, number: string, simultaneousLines: number, status: telephony.OvhPabxHuntingAgentStatusEnum, timeout: number, wrapUpTime: number }): Promise<telephony.OvhPabxHuntingAgent>;
                        $(agentId: number): {
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                            $get(): Promise<telephony.OvhPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                            $put(params?: { agentId?: number, breakStatus?: number, description?: string, number?: string, simultaneousLines?: number, status?: telephony.OvhPabxHuntingAgentStatusEnum, timeout?: number, type?: telephony.OvhPabxHuntingAgentTypeEnum, wrapUpTime?: number }): Promise<void>;
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
                                        $post(params: { number: string }): Promise<telephony.Task>;
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
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper
                                        $post(params: { number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum }): Promise<telephony.Task>;
                                    }
                                };
                            }
                            eventToken: {
                                // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                $delete(): Promise<void>;
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                $get(): Promise<telephony.EventToken>;
                                // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
                            }
                            liveStatus: {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/liveStatus
                                $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                            }
                            queue: {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue
                                $get(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue
                                $post(params: { position: number, queueId: number }): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                $(queueId: number): {
                                    // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $delete(): Promise<void>;
                                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $put(params?: { agentId?: number, position?: number, queueId?: number }): Promise<void>;
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
                        $post(params: { color?: string, description?: string, name: string }): Promise<telephony.OvhPabxCustomStatus>;
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
                        $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
                    }
                    queue: {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue
                        $get(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue
                        $post(params: { actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy: telephony.OvhPabxHuntingQueueStrategyEnum }): Promise<telephony.OvhPabxHuntingQueue>;
                        $(queueId: number): {
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                            $get(): Promise<telephony.OvhPabxHuntingQueue>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                            $put(params?: { actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, followCallForwards?: boolean, maxMember?: number, maxWaitTime?: number, queueId?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum }): Promise<void>;
                            agent: {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent
                                $get(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent
                                $post(params: { position: number, queueId: number }): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                $(agentId: number): {
                                    // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $delete(): Promise<void>;
                                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $put(params?: { agentId?: number, position?: number, queueId?: number }): Promise<void>;
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
                                        $post(params: { number: string }): Promise<telephony.Task>;
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
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper
                                        $post(params: { number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum }): Promise<telephony.Task>;
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
                    $put(params?: { status?: telephony.EasyHuntingScreenListsConditionsStatusEnum }): Promise<void>;
                    conditions: {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions
                        $get(params?: { screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions
                        $post(params: { callerIdNumber?: string, destinationNumber?: string, screenListType: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<telephony.EasyHuntingScreenListsConditions>;
                        $(conditionId: number): {
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                            $get(): Promise<telephony.EasyHuntingScreenListsConditions>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                            $put(params?: { callerIdNumber?: string, conditionId?: number, destinationNumber?: string, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<void>;
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
                    $post(params?: { documentId?: string, name?: string, url?: string }): Promise<telephony.Task>;
                }
                timeConditions: {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions
                    $get(): Promise<telephony.EasyHuntingTimeConditionsSettings>;
                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions
                    $put(params?: { enable?: boolean, slot1Number?: string, slot1Type?: telephony.TimeConditionsSettingsForwardTypeEnum, slot2Number?: string, slot2Type?: telephony.TimeConditionsSettingsForwardTypeEnum, slot3Number?: string, slot3Type?: telephony.TimeConditionsSettingsForwardTypeEnum, unavailableNumber?: string, unavailableType?: telephony.TimeConditionsSettingsForwardTypeEnum }): Promise<void>;
                    conditions: {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions
                        $get(params?: { policy?: telephony.TimeConditionsPolicyEnum }): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions
                        $post(params: { policy: telephony.TimeConditionsPolicyEnum, timeFrom: string, timeTo: string, weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum }): Promise<telephony.EasyHuntingTimeConditions>;
                        $(conditionId: number): {
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                            $get(): Promise<telephony.EasyHuntingTimeConditions>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                            $put(params?: { conditionId?: number, policy?: telephony.TimeConditionsPolicyEnum, timeFrom?: string, timeTo?: string, weekDay?: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum }): Promise<void>;
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
                $put(params?: { description?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                hunting: {
                    // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting
                    $get(): Promise<telephony.EasyPabxHunting>;
                    // PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting
                    $put(params?: { anonymousCallRejection?: boolean, name?: string, noReplyTimer?: number, numberOfCalls?: number, pattern?: telephony.EasyMiniPabxHuntingPatternEnum, strategy?: telephony.EasyMiniPabxHuntingStrategyEnum, toneOnClosure?: boolean, toneOnClosureSoundId?: number, toneOnHold?: boolean, toneOnHoldSoundId?: number, toneRingback?: boolean, toneRingbackSoundId?: number, voicemail?: string }): Promise<void>;
                    agent: {
                        // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent
                        $get(): Promise<string[]>;
                        // POST /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent
                        $post(params: { agentNumber: string, logged: boolean, noReplyTimer: number, position: number }): Promise<telephony.EasyMiniPabxHuntingAgent>;
                        $(agentNumber: string): {
                            // DELETE /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                            $get(): Promise<telephony.EasyMiniPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                            $put(params?: { agentNumber?: string, logged?: boolean, noReplyTimer?: number, position?: number }): Promise<void>;
                        };
                    }
                    tones: {
                        // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones
                        $get(): Promise<telephony.Tones>;
                        // PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones
                        $put(params?: { callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum }): Promise<void>;
                        toneUpload: {
                            // POST /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones/toneUpload
                            $post(params: { documentId?: string, type: telephony.TonesTypeEnum, url?: string }): Promise<telephony.Task>;
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
            $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
        }
        fax: {
            // GET /telephony/{billingAccount}/fax
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/fax/{serviceName}
                $get(): Promise<telephony.Fax>;
                // PUT /telephony/{billingAccount}/fax/{serviceName}
                $put(params?: { description?: string, notifications?: telephony.LineNotificationsOptions, offers?: string[], serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                campaigns: {
                    // GET /telephony/{billingAccount}/fax/{serviceName}/campaigns
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/fax/{serviceName}/campaigns
                    $post(params: { documentId: string, faxQuality?: telephony.FaxQualityEnum, name: string, recipientsDocId?: string, recipientsList?: string[], recipientsType: telephony.FaxCampaignRecipientsTypeEnum, sendDate?: string, sendType: telephony.FaxCampaignSendTypeEnum }): Promise<telephony.FaxCampaign>;
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
                    $post(params?: { blacklistedNumbers?: string[], blacklistedTSI?: string[], filteringList?: telephony.FaxScreenListTypeEnum, whitelistedNumbers?: string[], whitelistedTSI?: string[] }): Promise<telephony.FaxScreen>;
                    // PUT /telephony/{billingAccount}/fax/{serviceName}/screenLists
                    $put(params?: { blacklistedNumbers?: string[], blacklistedTSI?: string[], callNumber?: string, countryCode?: string, filteringList?: telephony.FaxScreenListTypeEnum, serviceName?: string, whitelistedNumbers?: string[], whitelistedTSI?: string[] }): Promise<void>;
                    reset: {
                        // POST /telephony/{billingAccount}/fax/{serviceName}/screenLists/reset
                        $post(params?: { blacklistedNumbers?: boolean, blacklistedTSI?: boolean, whitelistedNumbers?: boolean, whitelistedTSI?: boolean }): Promise<void>;
                    }
                }
                settings: {
                    // GET /telephony/{billingAccount}/fax/{serviceName}/settings
                    $get(): Promise<telephony.FaxProperties>;
                    // PUT /telephony/{billingAccount}/fax/{serviceName}/settings
                    $put(params?: { callNumber?: string, countryCode?: string, faxMaxCall?: telephony.FaxSendingTries, faxQuality?: telephony.FaxQualityEnum, faxTagLine?: string, fromEmail?: string, fromName?: string, mailFormat?: telephony.FaxMailFormatEnum, receiver?: string, redirectionEmail?: string[], rejectAnonymous?: boolean, sender?: string }): Promise<void>;
                    changePassword: {
                        // POST /telephony/{billingAccount}/fax/{serviceName}/settings/changePassword
                        $post(params?: { password?: string }): Promise<string>;
                    }
                    sendFax: {
                        // POST /telephony/{billingAccount}/fax/{serviceName}/settings/sendFax
                        $post(params: { dateSchedule?: string, pdfUrl: string, recipients: string[] }): Promise<telephony.Task>;
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
                    $get(params: { extension: telephony.BillDocument }): Promise<telephony.PcsFile>;
                }
            };
        }
        historyRepaymentConsumption: {
            // GET /telephony/{billingAccount}/historyRepaymentConsumption
            $get(): Promise<string[]>;
            // POST /telephony/{billingAccount}/historyRepaymentConsumption
            $post(params?: { billingNumber?: string }): Promise<telephony.HistoryRepaymentConsumption>;
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
                $put(params?: { canChangePassword?: boolean, description?: string, deviceSlot?: number, getPublicOffer?: telephony.LineOffer, infrastructure?: string, isAttachedToOtherLinesPhone?: boolean, notifications?: telephony.LineNotificationsOptions, offers?: string[], serviceName?: string, serviceType?: telephony.TypeServiceEnum, simultaneousLines?: number }): Promise<void>;
                abbreviatedNumber: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber
                    $post(params: { abbreviatedNumber: number, destinationNumber: string, name: string, surname: string }): Promise<telephony.AbbreviatedNumber>;
                    $(abbreviatedNumber: number): {
                        // DELETE /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                        $get(): Promise<telephony.AbbreviatedNumber>;
                        // PUT /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                        $put(params?: { abbreviatedNumber?: number, destinationNumber?: string, name?: string, surname?: string }): Promise<void>;
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
                    $post(params: { action: telephony.AntihackActionEnum, restricted?: string }): Promise<void>;
                }
                associateDevice: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/associateDevice
                    $post(params: { ipAddress?: string, macAddress: string, slot?: number }): Promise<void>;
                }
                automaticCall: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/automaticCall
                    $get(): Promise<string[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/automaticCall
                    $post(params: { bridgeNumberDialplan?: string, calledNumber: string, callingNumber?: string, dialplan: telephony.CallsGeneratorDialplanEnum, isAnonymous: boolean, playbackAudioFileDialplan?: string, timeout?: number, ttsTextDialplan?: string }): Promise<string>;
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
                    $post(params?: { mode?: telephony.LineBlockingMode }): Promise<void>;
                }
                calls: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/calls
                    $get(): Promise<number[]>;
                    $(id: number): {
                        // GET /telephony/{billingAccount}/line/{serviceName}/calls/{id}
                        $get(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                        eavesdrop: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/eavesdrop
                            $post(params: { number: string }): Promise<telephony.Task>;
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
                            $post(params: { number: string }): Promise<telephony.Task>;
                        }
                        transfer: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/transfer
                            $post(params: { number: string }): Promise<telephony.Task>;
                        }
                        whisper: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper
                            $post(params: { number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum }): Promise<telephony.Task>;
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
                    $post(params?: { password?: string }): Promise<void>;
                }
                click2Call: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/click2Call
                    $post(params: { calledNumber: string, callingNumber?: string, intercom?: boolean }): Promise<void>;
                }
                click2CallUser: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/click2CallUser
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser
                    $post(params: { login: string, password: string }): Promise<number>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}
                        $get(): Promise<telephony.Click2CallUser>;
                        changePassword: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/changePassword
                            $post(params: { password: string }): Promise<void>;
                        }
                        click2Call: {
                            // POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call
                            $post(params: { calledNumber: string, callingNumber?: string }): Promise<void>;
                        }
                    };
                }
                convertToNumber: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/convertToNumber
                    $post(): Promise<telephony.OfferTask>;
                }
                dissociateDevice: {
                    // POST /telephony/{billingAccount}/line/{serviceName}/dissociateDevice
                    $post(params: { ipAddress?: string, macAddress: string }): Promise<void>;
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
                    $put(params?: { absentSubscriber?: boolean, anonymousCallRejection?: boolean, callRestrictionIncoming?: boolean, callRestrictionOutgoing?: boolean, callWaiting?: boolean, codecs?: string, defaultVoicemail?: string, displayNumber?: string, doNotDisturb?: boolean, domain?: string, forwardBackup?: boolean, forwardBackupNature?: telephony.LineOptionForwardNatureTypeEnum, forwardBackupNumber?: string, forwardBusy?: boolean, forwardBusyNature?: telephony.LineOptionForwardNatureTypeEnum, forwardBusyNumber?: string, forwardNoReply?: boolean, forwardNoReplyDelay?: number, forwardNoReplyNature?: telephony.LineOptionForwardNatureTypeEnum, forwardNoReplyNumber?: string, forwardUnconditional?: boolean, forwardUnconditionalNature?: telephony.LineOptionForwardNatureTypeEnum, forwardUnconditionalNumber?: string, identificationRestriction?: boolean, intercom?: telephony.LineOptionIntercomEnum, ipRestrictions?: string[], language?: telephony.LineOptionLanguageEnum, lockOutCall?: boolean, lockOutCallPassword?: string, recordOutgoingCallsBeta?: boolean, toneOnCallWaitingSoundId?: number, toneOnHoldSoundId?: number, toneRingbackSoundId?: number, voicemailExternalNumber?: string, voicemailInternalNumber?: string }): Promise<void>;
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
                    $put(params?: { brand?: string, description?: string, macAddress?: string, maxline?: number, mgcpIpRestriction?: string, phoneConfiguration?: telephony.PhoneConfigurationProperty[], protocol?: telephonyProtocolEnum, userPassword?: string }): Promise<void>;
                    adminCredentials: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/adminCredentials
                        $get(): Promise<telephony.PhoneCredentials>;
                    }
                    changePhoneConfiguration: {
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration
                        $post(params?: { autoReboot?: boolean, newConfigurations?: complexType.SafeKeyValue<string>[] }): Promise<void>;
                    }
                    functionKey: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/functionKey
                        $get(): Promise<number[]>;
                        $(keyNum: number): {
                            // GET /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}
                            $get(): Promise<telephony.FunctionKey>;
                            // PUT /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}
                            $put(params?: { default_?: string, function_?: string, keyNum?: number, label?: string, parameter?: string, type?: string }): Promise<void>;
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
                        $post(params: { name: string }): Promise<string>;
                        $(bookKey: string): {
                            // DELETE /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                            $get(): Promise<telephony.Phonebook>;
                            // PUT /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                            $put(params?: { bookKey?: string, isReadonly?: boolean, name?: string, phoneKey?: string }): Promise<void>;
                            export: {
                                // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export
                                $get(params: { format: telephony.ContactsExportFormatsEnum }): Promise<telephony.PcsFile>;
                            }
                            import: {
                                // POST /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/import
                                $post(params: { documentId: string }): Promise<telephony.Task>;
                            }
                            phonebookContact: {
                                // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact
                                $get(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact
                                $post(params: { group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string }): Promise<number>;
                                $(id: number): {
                                    // DELETE /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                    $delete(): Promise<void>;
                                    // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                    $get(): Promise<telephony.PhonebookContact>;
                                    // PUT /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                    $put(params?: { group?: string, homeMobile?: string, homePhone?: string, id?: number, name?: string, surname?: string, workMobile?: string, workPhone?: string }): Promise<void>;
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
                        $post(params: { ip: string }): Promise<telephony.ResetPhoneInfo>;
                    }
                    rma: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/rma
                        $get(): Promise<string[]>;
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/rma
                        $post(params: { mondialRelayId?: string, newMerchandise?: string, shippingContactId?: number, type: telephony.RmaPublicTypeEnum }): Promise<telephony.RmaReturn>;
                        $(id: string): {
                            // DELETE /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                            $get(): Promise<telephony.Rma>;
                            // PUT /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                            $put(params?: { cancellable?: boolean, creationDatetime?: string, equipmentReference?: string, id?: string, newMerchandise?: string, offerTypeNew?: telephony.RmaOfferTypeEnum, offerTypeOld?: telephony.RmaOfferTypeEnum, process?: telephony.RmaReplaceTypeEnum, receptionDatetime?: string, shippingContact?: telephony.Contact, status?: telephony.RmaStatusEnum, steps?: telephony.RmaStep[], terminationDatetime?: string, type?: telephony.RmaTypeEnum }): Promise<void>;
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
                    $post(params: { quantityRemove: number }): Promise<void>;
                }
                simultaneousChannelsDetails: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/simultaneousChannelsDetails
                    $get(): Promise<telephony.SimultaneousChannelsDetails>;
                }
                statistics: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/statistics
                    $get(params: { timeframe: telephony.StatisticsTimeframeEnum, type: telephony.LineStatisticsTypeEnum }): Promise<complexType.UnitAndValues<telephony.TimestampAndValue>>;
                }
                tones: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/tones
                    $get(): Promise<telephony.Tones>;
                    // PUT /telephony/{billingAccount}/line/{serviceName}/tones
                    $put(params?: { callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum }): Promise<void>;
                    toneUpload: {
                        // POST /telephony/{billingAccount}/line/{serviceName}/tones/toneUpload
                        $post(params: { documentId?: string, type: telephony.TonesTypeEnum, url?: string }): Promise<telephony.Task>;
                    }
                }
                trafficExtracts: {
                    // GET /telephony/{billingAccount}/line/{serviceName}/trafficExtracts
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/trafficExtracts
                    $post(params: { dateEnd: string, dateStart: string }): Promise<telephony.trafficExtract>;
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
                $put(params?: { description?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                hunting: {
                    // GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting
                    $get(): Promise<telephony.MiniPabxHunting>;
                    // PUT /telephony/{billingAccount}/miniPabx/{serviceName}/hunting
                    $put(params?: { anonymousCallRejection?: boolean, name?: string, numberOfCalls?: number, onHoldTimer?: number, pattern?: telephony.EasyMiniPabxHuntingPatternEnum, queueSize?: number, strategy?: telephony.EasyMiniPabxHuntingStrategyEnum, toneOnClosure?: boolean, toneOnClosureSoundId?: number, toneOnHold?: boolean, toneOnHoldSoundId?: number, toneRingback?: boolean, toneRingbackSoundId?: number }): Promise<void>;
                    agent: {
                        // GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent
                        $get(): Promise<string[]>;
                        // POST /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent
                        $post(params: { agentNumber: string, logged: boolean, noReplyTimer: number, position: number }): Promise<telephony.EasyMiniPabxHuntingAgent>;
                        $(agentNumber: string): {
                            // DELETE /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                            $get(): Promise<telephony.EasyMiniPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                            $put(params?: { agentNumber?: string, logged?: boolean, noReplyTimer?: number, position?: number }): Promise<void>;
                        };
                    }
                }
                tones: {
                    // GET /telephony/{billingAccount}/miniPabx/{serviceName}/tones
                    $get(): Promise<telephony.Tones>;
                    // PUT /telephony/{billingAccount}/miniPabx/{serviceName}/tones
                    $put(params?: { callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum }): Promise<void>;
                    toneUpload: {
                        // POST /telephony/{billingAccount}/miniPabx/{serviceName}/tones/toneUpload
                        $post(params: { documentId?: string, type: telephony.TonesTypeEnum, url?: string }): Promise<telephony.Task>;
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
                $put(params?: { description?: string, featureType?: telephony.TypeEnum, partOfPool?: string, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                cancelConvertToLine: {
                    // POST /telephony/{billingAccount}/number/{serviceName}/cancelConvertToLine
                    $post(): Promise<void>;
                }
                changeFeatureType: {
                    // POST /telephony/{billingAccount}/number/{serviceName}/changeFeatureType
                    $post(params: { featureType: telephony.TypeEnum }): Promise<telephony.Task>;
                }
                convertToLine: {
                    // POST /telephony/{billingAccount}/number/{serviceName}/convertToLine
                    $post(params: { offer: string }): Promise<telephony.OfferTask>;
                }
                convertToLineAvailableOffers: {
                    // GET /telephony/{billingAccount}/number/{serviceName}/convertToLineAvailableOffers
                    $get(): Promise<telephony.LineOffersAndContracts>;
                }
            };
        }
        offerTask: {
            // GET /telephony/{billingAccount}/offerTask
            $get(params?: { action?: telephony.OfferTaskActionEnum, status?: telephony.TaskStatusEnum, type?: telephony.OfferTaskTypeEnum }): Promise<number[]>;
            $(taskId: number): {
                // GET /telephony/{billingAccount}/offerTask/{taskId}
                $get(): Promise<telephony.OfferTask>;
                // PUT /telephony/{billingAccount}/offerTask/{taskId}
                $put(params?: { action?: telephony.OfferTaskActionEnum, executionDate?: string, status?: telephony.TaskStatusEnum, taskId?: number, type?: telephony.OfferTaskTypeEnum }): Promise<void>;
            };
        }
        oldPhone: {
            // GET /telephony/{billingAccount}/oldPhone
            $get(): Promise<telephony.OldPhone[]>;
        }
        outplanNotification: {
            // GET /telephony/{billingAccount}/outplanNotification
            $get(): Promise<number[]>;
            // POST /telephony/{billingAccount}/outplanNotification
            $post(params: { block: telephony.OutplanNotificationBlockEnum, notifyEmail?: string, percentage: number }): Promise<telephony.ConsumptionThreshold>;
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
                $put(params?: { description?: string, featureType?: telephony.TypeEnum, isCCS?: boolean, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                dialplan: {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan
                    $post(params: { anonymousRejection: boolean, name: string, showCallerNumber: telephony.OvhPabxDialplanNumberPresentationEnum, transferTimeout: number }): Promise<telephony.OvhPabxDialplan>;
                    $(dialplanId: number): {
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                        $get(): Promise<telephony.OvhPabxDialplan>;
                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                        $put(params?: { anonymousRejection?: boolean, dialplanId?: number, lastUpdate?: string, name?: string, showCallerNumber?: telephony.OvhPabxDialplanNumberPresentationEnum, transferTimeout?: number }): Promise<void>;
                        extension: {
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension
                            $get(): Promise<number[]>;
                            // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension
                            $post(params: { enable: boolean, position: number, schedulerCategory?: telephony.SchedulerCategoryEnum, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<telephony.OvhPabxDialplanExtension>;
                            $(extensionId: number): {
                                // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                $delete(): Promise<void>;
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                $get(): Promise<telephony.OvhPabxDialplanExtension>;
                                // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                $put(params?: { enabled?: boolean, extensionId?: number, position?: number, schedulerCategory?: telephony.SchedulerCategoryEnum, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<void>;
                                conditionScreenList: {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList
                                    $get(): Promise<number[]>;
                                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList
                                    $post(params?: { callerIdNumber?: string, destinationNumber?: string, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<telephony.OvhPabxDialplanExtensionConditionScreenList>;
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
                                    $post(params: { timeFrom: string, timeTo: string, weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum }): Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
                                    $(conditionId: number): {
                                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                        $delete(): Promise<void>;
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                        $get(): Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
                                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                        $put(params?: { conditionId?: number, timeFrom?: string, timeTo?: string, weekDay?: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum }): Promise<void>;
                                    };
                                }
                                rule: {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule
                                    $get(): Promise<number[]>;
                                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule
                                    $post(params: { action: telephony.OvhPabxDialplanExtensionRuleActionEnum, actionParam?: string, negativeAction: boolean, position: number }): Promise<telephony.OvhPabxDialplanExtensionRule>;
                                    $(ruleId: number): {
                                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                        $delete(): Promise<void>;
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                        $get(): Promise<telephony.OvhPabxDialplanExtensionRule>;
                                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                        $put(params?: { action?: telephony.OvhPabxDialplanExtensionRuleActionEnum, actionParam?: string, negativeAction?: boolean, position?: number, ruleId?: number }): Promise<void>;
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
                    $put(params?: { crmUrlTemplate?: string, g729?: boolean, name?: string, statusIvrEnabled?: boolean }): Promise<void>;
                    agent: {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent
                        $get(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent
                        $post(params: { description?: string, number: string, simultaneousLines: number, status: telephony.OvhPabxHuntingAgentStatusEnum, timeout: number, wrapUpTime: number }): Promise<telephony.OvhPabxHuntingAgent>;
                        $(agentId: number): {
                            // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                            $get(): Promise<telephony.OvhPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                            $put(params?: { agentId?: number, breakStatus?: number, description?: string, number?: string, simultaneousLines?: number, status?: telephony.OvhPabxHuntingAgentStatusEnum, timeout?: number, type?: telephony.OvhPabxHuntingAgentTypeEnum, wrapUpTime?: number }): Promise<void>;
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
                                        $post(params: { number: string }): Promise<telephony.Task>;
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
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper
                                        $post(params: { number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum }): Promise<telephony.Task>;
                                    }
                                };
                            }
                            eventToken: {
                                // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                $delete(): Promise<void>;
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                $get(): Promise<telephony.EventToken>;
                                // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
                            }
                            liveStatus: {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/liveStatus
                                $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                            }
                            queue: {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue
                                $get(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue
                                $post(params: { position: number, queueId: number }): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                $(queueId: number): {
                                    // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $delete(): Promise<void>;
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    $put(params?: { agentId?: number, position?: number, queueId?: number }): Promise<void>;
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
                        $post(params: { color?: string, description?: string, name: string }): Promise<telephony.OvhPabxCustomStatus>;
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
                        $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
                    }
                    queue: {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue
                        $get(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue
                        $post(params: { actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy: telephony.OvhPabxHuntingQueueStrategyEnum }): Promise<telephony.OvhPabxHuntingQueue>;
                        $(queueId: number): {
                            // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                            $delete(): Promise<void>;
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                            $get(): Promise<telephony.OvhPabxHuntingQueue>;
                            // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                            $put(params?: { actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, followCallForwards?: boolean, maxMember?: number, maxWaitTime?: number, queueId?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum }): Promise<void>;
                            agent: {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent
                                $get(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent
                                $post(params: { position: number, queueId: number }): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                $(agentId: number): {
                                    // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $delete(): Promise<void>;
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    $put(params?: { agentId?: number, position?: number, queueId?: number }): Promise<void>;
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
                                        $post(params: { number: string }): Promise<telephony.Task>;
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
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper
                                        $post(params: { number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum }): Promise<telephony.Task>;
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
                    $post(params: { greetSound?: number, greetSoundTts?: number, invalidSound?: number, invalidSoundTts?: number, name: string }): Promise<telephony.OvhPabxMenu>;
                    $(menuId: number): {
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                        $get(): Promise<telephony.OvhPabxMenu>;
                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                        $put(params?: { greetSound?: number, greetSoundTts?: number, invalidSound?: number, invalidSoundTts?: number, menuId?: number, name?: string }): Promise<void>;
                        entry: {
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry
                            $get(): Promise<number[]>;
                            // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry
                            $post(params: { action: telephony.OvhPabxIvrMenuEntryActionEnum, actionParam?: string, dtmf: string, position: number }): Promise<telephony.OvhPabxMenuEntry>;
                            $(entryId: number): {
                                // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                $delete(): Promise<void>;
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                $get(): Promise<telephony.OvhPabxMenuEntry>;
                                // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                $put(params?: { action?: telephony.OvhPabxIvrMenuEntryActionEnum, actionParam?: string, dtmf?: string, entryId?: number, position?: number }): Promise<void>;
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
                    $post(params?: { documentId?: string, name?: string, url?: string }): Promise<telephony.Task>;
                }
                tts: {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/tts
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/tts
                    $post(params: { text: string, voice?: telephony.OvhPabxTtsVoiceEnum }): Promise<void>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                        $get(): Promise<telephony.OvhPabxTts>;
                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                        $put(params?: { id?: number, text?: string, voice?: telephony.OvhPabxTtsVoiceEnum }): Promise<void>;
                    };
                }
            };
        }
        phonebook: {
            // GET /telephony/{billingAccount}/phonebook
            $get(): Promise<string[]>;
            // POST /telephony/{billingAccount}/phonebook
            $post(params: { name: string }): Promise<string>;
            $(bookKey: string): {
                // DELETE /telephony/{billingAccount}/phonebook/{bookKey}
                $delete(): Promise<void>;
                // GET /telephony/{billingAccount}/phonebook/{bookKey}
                $get(): Promise<telephony.PhonebookMaster>;
                // PUT /telephony/{billingAccount}/phonebook/{bookKey}
                $put(params?: { bookKey?: string, name?: string }): Promise<void>;
                export: {
                    // GET /telephony/{billingAccount}/phonebook/{bookKey}/export
                    $get(params: { format: telephony.ContactsExportFormatsEnum }): Promise<telephony.PcsFile>;
                }
                import: {
                    // POST /telephony/{billingAccount}/phonebook/{bookKey}/import
                    $post(params: { documentId: string }): Promise<telephony.Task>;
                }
                phonebookContact: {
                    // GET /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact
                    $post(params: { group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string }): Promise<number>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                        $get(): Promise<telephony.PhonebookContact>;
                        // PUT /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                        $put(params?: { group?: string, homeMobile?: string, homePhone?: string, id?: number, name?: string, surname?: string, workMobile?: string, workPhone?: string }): Promise<void>;
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
                    $post(params?: { reason?: string }): Promise<void>;
                }
                changeDate: {
                    // POST /telephony/{billingAccount}/portability/{id}/changeDate
                    $post(params: { date: string }): Promise<void>;
                }
                dateCanBeChanged: {
                    // GET /telephony/{billingAccount}/portability/{id}/dateCanBeChanged
                    $get(): Promise<boolean>;
                }
                document: {
                    // GET /telephony/{billingAccount}/portability/{id}/document
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/portability/{id}/document
                    $post(params: { description?: string, name: string }): Promise<telephony.PortabilityDocument>;
                    $(documentId: number): {
                        // DELETE /telephony/{billingAccount}/portability/{id}/document/{documentId}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/portability/{id}/document/{documentId}
                        $get(): Promise<telephony.PortabilityDocument>;
                        // PUT /telephony/{billingAccount}/portability/{id}/document/{documentId}
                        $put(params?: { description?: string, documentId?: number, getUrl?: string, name?: string, putUrl?: string, size?: number }): Promise<void>;
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
                    $post(params: { parameters: complexType.SafeKeyValue<string>[] }): Promise<void>;
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
                $put(params?: { description?: string, destination?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                changeDestination: {
                    // POST /telephony/{billingAccount}/redirect/{serviceName}/changeDestination
                    $post(params: { destination: string }): Promise<telephony.Task>;
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
                $put(params?: { serviceName?: string, typology?: telephony.portability.SpecialNumberCategoryEnum }): Promise<void>;
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
                    $post(params: { rateCode: string }): Promise<telephony.DetailedRateCodeInformation>;
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
                $put(params?: { serviceName?: string, timeZone?: telephony.timeZone }): Promise<void>;
                events: {
                    // GET /telephony/{billingAccount}/scheduler/{serviceName}/events
                    $get(params?: { categories?: telephony.SchedulerCategoryEnum, dateEnd_from?: string, dateEnd_to?: string, dateStart_from?: string, dateStart_to?: string }): Promise<string[]>;
                    // POST /telephony/{billingAccount}/scheduler/{serviceName}/events
                    $post(params: { category: telephony.SchedulerCategoryEnum, dateEnd: string, dateStart: string, description?: string, title: string, uid?: string }): Promise<void>;
                    $(uid: string): {
                        // DELETE /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                        $get(): Promise<telephony.SchedulerEvent>;
                        // PUT /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                        $put(params?: { categories?: telephony.SchedulerCategoryEnum, dateEnd?: string, dateStart?: string, description?: string, title?: string, uid?: string }): Promise<void>;
                    };
                }
                importIcsCalendar: {
                    // POST /telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar
                    $post(params: { url: string }): Promise<telephony.Task>;
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
                $put(params?: { incomingScreenList?: telephony.ScreenListChoosingEnum, outgoingScreenList?: telephony.ScreenListChoosingEnum, serviceName?: string }): Promise<void>;
                screenLists: {
                    // GET /telephony/{billingAccount}/screen/{serviceName}/screenLists
                    $get(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/screen/{serviceName}/screenLists
                    $post(params: { callNumber?: string, nature: telephony.ScreenListNatureEnum, type: telephony.ScreenListTypeEnum }): Promise<void>;
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
                $delete(params: { details?: string, reason: telephony.TerminationReasonEnum }): Promise<void>;
                // GET /telephony/{billingAccount}/service/{serviceName}
                $get(): Promise<telephony.TelephonyService>;
                // PUT /telephony/{billingAccount}/service/{serviceName}
                $put(params?: { country?: telephony.NumberCountryEnum, countryCode?: telephony.NumberCountryCodeEnum, currentOutplan?: order.Price, description?: string, featureType?: telephony.TypeEnum, getPublicOffer?: telephony.LineOffer, hasFaxCapabilities?: boolean, offers?: string[], properties?: telephony.PropertyEnum[], rio?: string, serviceName?: string, serviceType?: telephony.TypeServiceEnum, simultaneousLines?: number }): Promise<void>;
                cancelTermination: {
                    // POST /telephony/{billingAccount}/service/{serviceName}/cancelTermination
                    $post(): Promise<void>;
                }
                changeOfBillingAccount: {
                    // POST /telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount
                    $post(params: { billingAccountDestination: string }): Promise<void>;
                }
                diagnosticReports: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/diagnosticReports
                    $get(params: { dayInterval: telephony.DiagnosticReportIndexEnum }): Promise<telephony.DiagnosticReport[]>;
                }
                directory: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/directory
                    $get(): Promise<telephony.DirectoryInfo>;
                    // PUT /telephony/{billingAccount}/service/{serviceName}/directory
                    $put(params?: { PJSocialNomination?: string, address?: string, addressExtra?: string, ape?: string, areaCode?: number, birthDate?: string, cedex?: string, city?: string, country?: string, directoryServiceCode?: string, displayFirstName?: boolean, displayMarketingDirectory?: boolean, displayOnlyCity?: boolean, displaySearchReverse?: boolean, displayUniversalDirectory?: boolean, email?: string, firstName?: string, gender?: nichandle.GenderEnum, inseeCode?: number, legalForm?: string, lineDescription?: string, modificationDate?: string, modificationType?: string, name?: string, number?: string, occupation?: string, postBox?: string, postCode?: string, receivePJDirectory?: boolean, siret?: string, socialNomination?: string, socialNominationExtra?: string, status?: string, urbanDistrict?: string, wayName?: string, wayNumber?: string, wayNumberExtra?: string, wayType?: string }): Promise<void>;
                    fetchEntrepriseInformations: {
                        // POST /telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations
                        $post(params: { entrepriseNumber: string }): Promise<telephony.EntrepriseNumberInformationsTask>;
                    }
                    getDirectoryServiceCode: {
                        // GET /telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode
                        $get(params: { apeCode: string }): Promise<telephony.DirectoryHeadingPJ[]>;
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
                    $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
                }
                faxConsumption: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/faxConsumption
                    $get(params?: { creationDatetime_from?: string, creationDatetime_to?: string, wayType?: telephony.FaxConsumptionWayTypeEnum }): Promise<number[]>;
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
                    $post(params: { offer: string }): Promise<void>;
                }
                offerChanges: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/offerChanges
                    $get(): Promise<telephony.LineOffer[]>;
                }
                offerTask: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/offerTask
                    $get(params?: { action?: telephony.OfferTaskActionEnum, status?: telephony.TaskStatusEnum, type?: telephony.OfferTaskTypeEnum }): Promise<number[]>;
                    $(taskId: number): {
                        // GET /telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}
                        $get(): Promise<telephony.OfferTask>;
                        // PUT /telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}
                        $put(params?: { action?: telephony.OfferTaskActionEnum, executionDate?: string, status?: telephony.TaskStatusEnum, taskId?: number, type?: telephony.OfferTaskTypeEnum }): Promise<void>;
                    };
                }
                previousVoiceConsumption: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption
                    $get(params?: { creationDatetime_from?: string, creationDatetime_to?: string, destinationType?: telephony.VoiceConsumptionDestinationTypeEnum, planType?: telephony.VoiceConsumptionPlanTypeEnum, wayType?: telephony.VoiceConsumptionWayTypeEnum }): Promise<number[]>;
                    $(consumptionId: number): {
                        // GET /telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption/{consumptionId}
                        $get(): Promise<telephony.PreviousVoiceConsumption>;
                    };
                }
                repaymentConsumption: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/repaymentConsumption
                    $get(params?: { creationDatetime_from?: string, creationDatetime_to?: string }): Promise<number[]>;
                    $(consumptionId: number): {
                        // GET /telephony/{billingAccount}/service/{serviceName}/repaymentConsumption/{consumptionId}
                        $get(): Promise<telephony.RepaymentConsumption>;
                    };
                }
                task: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/task
                    $get(params?: { action?: string, serviceType?: string, status?: telephony.TaskStatusEnum }): Promise<number[]>;
                    $(taskId: number): {
                        // GET /telephony/{billingAccount}/service/{serviceName}/task/{taskId}
                        $get(): Promise<telephony.Task>;
                    };
                }
                voiceConsumption: {
                    // GET /telephony/{billingAccount}/service/{serviceName}/voiceConsumption
                    $get(params?: { creationDatetime_from?: string, creationDatetime_to?: string, destinationType?: telephony.VoiceConsumptionDestinationTypeEnum, planType?: telephony.VoiceConsumptionPlanTypeEnum, wayType?: telephony.VoiceConsumptionWayTypeEnum }): Promise<number[]>;
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
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
        }
        task: {
            // GET /telephony/{billingAccount}/task
            $get(params?: { action?: string, serviceType?: string, status?: telephony.TaskStatusEnum }): Promise<number[]>;
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
                    $post(params: { day: telephony.TimeConditionsDayEnum, hourBegin: string, hourEnd: string, policy: telephony.TimeConditionsPolicyEnum }): Promise<telephony.TimeCondition>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                        $get(): Promise<telephony.TimeCondition>;
                        // PUT /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                        $put(params?: { day?: telephony.TimeConditionsDayEnum, hourBegin?: string, hourEnd?: string, id?: number, policy?: telephony.TimeConditionsPolicyEnum, status?: string }): Promise<void>;
                    };
                }
                options: {
                    // GET /telephony/{billingAccount}/timeCondition/{serviceName}/options
                    $get(): Promise<telephony.TimeConditionOptions>;
                    // PUT /telephony/{billingAccount}/timeCondition/{serviceName}/options
                    $put(params?: { slot1Number?: string, slot1Type?: telephony.TimeConditionsSlotTypeEnum, slot2Number?: string, slot2Type?: telephony.TimeConditionsSlotTypeEnum, slot3Number?: string, slot3Type?: telephony.TimeConditionsSlotTypeEnum, status?: telephony.TimeConditionsGlobalStatusEnum, timeout?: telephony.TimeConditionsTimeoutEnum, unavailableNumber?: string, unavailableType?: telephony.TimeConditionsSlotTypeEnum }): Promise<void>;
                }
            };
        }
        transferSecurityDeposit: {
            // POST /telephony/{billingAccount}/transferSecurityDeposit
            $post(params: { amount: number, billingAccountDestination: string }): Promise<void>;
        }
        trunk: {
            // GET /telephony/{billingAccount}/trunk
            $get(): Promise<string[]>;
            $(serviceName: string): {
                // GET /telephony/{billingAccount}/trunk/{serviceName}
                $get(): Promise<telephony.Trunk>;
                channelsPacksRepartition: {
                    // GET /telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition
                    $get(params: { quantity: number }): Promise<telephony.TrunkSimultaneousPacksRepartition>;
                }
                externalDisplayedNumber: {
                    // GET /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber
                    $get(): Promise<string[]>;
                    // POST /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber
                    $post(params: { autoValidation?: boolean, number: string }): Promise<telephony.TrunkExternalDisplayedNumber>;
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
                $put(params?: { description?: string, offers?: string[], serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                directories: {
                    // GET /telephony/{billingAccount}/voicemail/{serviceName}/directories
                    $get(params?: { dir?: telephony.VoicemailMessageFolderDirectoryEnum }): Promise<number[]>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}
                        $get(): Promise<telephony.VoicemailMessages>;
                        download: {
                            // GET /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/download
                            $get(params?: { format?: telephony.ServiceVoicemailAudioFormatEnum }): Promise<telephony.PcsFile>;
                        }
                        move: {
                            // POST /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/move
                            $post(params: { dir: telephony.VoicemailMessageFolderDirectoryEnum }): Promise<void>;
                        }
                    };
                }
                greetings: {
                    // GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings
                    $get(params?: { dir?: telephony.VoicemailMessageFolderGreetingEnum }): Promise<number[]>;
                    // POST /telephony/{billingAccount}/voicemail/{serviceName}/greetings
                    $post(params: { dir: telephony.VoicemailMessageFolderGreetingEnum, documentId: string }): Promise<number>;
                    $(id: number): {
                        // DELETE /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}
                        $delete(): Promise<void>;
                        // GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}
                        $get(): Promise<telephony.VoicemailGreetings>;
                        download: {
                            // GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/download
                            $get(params?: { format?: telephony.ServiceVoicemailAudioFormatEnum }): Promise<telephony.PcsFile>;
                        }
                        move: {
                            // POST /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move
                            $post(params: { dir: telephony.VoicemailMessageFolderGreetingEnum }): Promise<void>;
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
                    $put(params?: { annouceMessage?: string, audioFormat?: telephony.ServiceVoicemailAudioFormatEnum, doNotRecord?: boolean, forcePassword?: boolean, fromEmail?: string, fromName?: string, fullGreetingSoundId?: number, greetingType?: telephony.VoicemailGreetingEnum, isNewVersion?: boolean, keepMessage?: boolean, redirectionEmails?: telephony.ServiceVoicemailNotifications[], shortGreetingSoundId?: number, temporaryGreetingActivated?: boolean, temporaryGreetingSoundId?: number, unreadMessages?: number }): Promise<void>;
                    changePassword: {
                        // POST /telephony/{billingAccount}/voicemail/{serviceName}/settings/changePassword
                        $post(params: { password: string }): Promise<void>;
                    }
                    changeRouting: {
                        // POST /telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting
                        $post(params: { routing: telephony.VoicefaxRoutingEnum }): Promise<void>;
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
                    $put(params?: { url?: string, urlRecord?: string }): Promise<void>;
                    logs: {
                        // POST /telephony/{billingAccount}/vxml/{serviceName}/settings/logs
                        $post(): Promise<telephony.TemporaryLogsLink>;
                    }
                }
            };
        }
    };
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type telephonyProtocolEnum = telephony.ProtocolEnum;
