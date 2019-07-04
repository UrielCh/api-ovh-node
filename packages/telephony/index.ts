import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace complexType {
    //complexType.Range
    // fullName: complexType.Range.Range
    export interface Range<T> {
        from?: T;
        to?: T;
    }
    //complexType.SafeKeyValue
    // fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key?: string;
        value?: T;
    }
    //complexType.UnitAndValues
    // fullName: complexType.UnitAndValues.UnitAndValues
    export interface UnitAndValues<T> {
        unit?: string;
        values?: T[];
    }
}
export namespace coreTypes {
    //coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
    //coreTypes.TimeZoneEnum
    export type TimeZoneEnum = "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis"
}
export namespace nichandle {
    //nichandle.GenderEnum
    export type GenderEnum = "female" | "male"
}
export namespace order {
    //order.Contract
    // fullName: order.Contract.Contract
    export interface Contract {
        content?: string;
        name?: string;
        url?: string;
    }
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode?: OVH.order.CurrencyCodeEnum;
        text?: string;
        value?: number;
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
export namespace spare {
    export namespace telephony {
        //spare.telephony.TelephonySpare
        // fullName: spare.telephony.TelephonySpare.TelephonySpare
        export interface TelephonySpare {
            brand?: string;
            macAddress?: string;
            protocol?: OVH.telephony.ProtocolEnum;
        }
    }
}
export namespace telephony {
    //telephony.AbbreviatedNumber
    // fullName: telephony.AbbreviatedNumber.AbbreviatedNumber
    export interface AbbreviatedNumber {
        abbreviatedNumber?: number;
        destinationNumber?: string;
        name?: string;
        surname?: string;
    }
    //telephony.AbbreviatedNumberGroup
    // fullName: telephony.AbbreviatedNumberGroup.AbbreviatedNumberGroup
    export interface AbbreviatedNumberGroup {
        abbreviatedNumber?: number;
        destinationNumber?: string;
        name?: string;
        surname?: string;
    }
    //telephony.AccessoryOffer
    // fullName: telephony.AccessoryOffer.AccessoryOffer
    export interface AccessoryOffer {
        description?: string;
        name?: string;
        price?: OVH.order.Price;
        url?: string;
    }
    //telephony.AntihackActionEnum
    export type AntihackActionEnum = "AUTHORIZE_ALL" | "AUTHORIZE_ONE_NUMBER" | "BLOCK_ALL" | "BLOCK_ONE_NUMBER"
    //telephony.BannerAccess
    // fullName: telephony.BannerAccess.BannerAccess
    export interface BannerAccess {
        creationDate?: string;
        id?: number;
        url?: string;
    }
    //telephony.BillDocument
    export type BillDocument = "csv" | "pdf" | "received.csv" | "xml"
    //telephony.BillStatusEnum
    export type BillStatusEnum = "doing" | "done" | "error" | "todo"
    //telephony.BillingAccount
    // fullName: telephony.BillingAccount.BillingAccount
    export interface BillingAccount {
        allowedOutplan?: OVH.order.Price;
        billingAccount?: string;
        creditThreshold?: OVH.order.Price;
        currentOutplan?: OVH.order.Price;
        description?: string;
        hiddenExternalNumber?: boolean;
        overrideDisplayedNumber?: boolean;
        securityDeposit?: OVH.order.Price;
        status?: OVH.telephony.BillingAccountStatusEnum;
        trusted?: boolean;
    }
    //telephony.BillingAccountStatusEnum
    export type BillingAccountStatusEnum = "closed" | "deleted" | "enabled" | "expired"
    //telephony.CallDiagnosticCallQuality
    // fullName: telephony.CallDiagnosticCallQuality.CallDiagnosticCallQuality
    export interface CallDiagnosticCallQuality {
        callId?: string;
        codec?: OVH.telephony.CallDiagnosticCodecEnum;
        flowId?: number;
        ipDst?: string;
        ipSrc?: string;
        maxDelay?: number;
        maxJitter?: number;
        mos?: number;
        packets?: number;
        portDst?: number;
        portSrc?: number;
        rtpLost?: number;
        timestamp?: string;
    }
    //telephony.CallDiagnosticCauseEnum
    export type CallDiagnosticCauseEnum = "1" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "1a" | "1b" | "1c" | "1d" | "1e" | "1f" | "2" | "22" | "26" | "27" | "28" | "29" | "2a" | "2b" | "2c" | "2e" | "2f" | "3" | "30" | "31" | "32" | "33" | "34" | "35" | "37" | "39" | "3a" | "3e" | "3f" | "4" | "41" | "42" | "45" | "46" | "4f" | "5" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "5a" | "5b" | "5f" | "6" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "6e" | "6f" | "7" | "7f" | "8" | "9"
    //telephony.CallDiagnosticCdrs
    // fullName: telephony.CallDiagnosticCdrs.CallDiagnosticCdrs
    export interface CallDiagnosticCdrs {
        basic?: OVH.telephony.CallDiagnosticCdrsBasic;
        timestamp?: string;
    }
    //telephony.CallDiagnosticCdrsBasic
    // fullName: telephony.CallDiagnosticCdrsBasic.CallDiagnosticCdrsBasic
    export interface CallDiagnosticCdrsBasic {
        cause?: OVH.telephony.CallDiagnosticCauseEnum;
        causeDescription?: string;
        releaseLocation?: OVH.telephony.ReleaseLocationEnum;
    }
    //telephony.CallDiagnosticCodecEnum
    export type CallDiagnosticCodecEnum = "G722" | "G729" | "PCMA" | "PCMU"
    //telephony.CallDiagnosticReporting
    // fullName: telephony.CallDiagnosticReporting.CallDiagnosticReporting
    export interface CallDiagnosticReporting {
        message?: string;
    }
    //telephony.CallDiagnosticSip
    // fullName: telephony.CallDiagnosticSip.CallDiagnosticSip
    export interface CallDiagnosticSip {
        headers?: string;
        requestMethod?: string;
        response?: string;
        timestamp?: string;
    }
    //telephony.CallDiagnosticStatusEnum
    export type CallDiagnosticStatusEnum = "doing" | "done" | "error" | "todo"
    //telephony.CallDiagnostics
    // fullName: telephony.CallDiagnostics.CallDiagnostics
    export interface CallDiagnostics {
        callQuality?: OVH.telephony.CallDiagnosticCallQuality[];
        cdrs?: OVH.telephony.CallDiagnosticCdrs[];
        reporting?: OVH.telephony.CallDiagnosticReporting[];
        sip?: OVH.telephony.CallDiagnosticSip[];
        status?: OVH.telephony.CallDiagnosticStatusEnum;
    }
    //telephony.CallsGenerated
    // fullName: telephony.CallsGenerated.CallsGenerated
    export interface CallsGenerated {
        answerDatetime?: string;
        application?: string;
        applicationResult?: string;
        billingNumber?: string;
        callCreatedDatetime?: string;
        callDuration?: number;
        callee?: string;
        caller?: string;
        dtmf?: string;
        hangupCause?: OVH.telephony.CallsGeneratorHangupCauseEnum;
        hangupDatetime?: string;
        identifier?: string;
        transferFrom?: string;
        uuid?: string;
    }
    //telephony.CallsGeneratorDialplanEnum
    export type CallsGeneratorDialplanEnum = "PlayAudioFile" | "PlayAudioFileAndTransferCall" | "ReadText" | "RequestAppointmentConfirmation" | "RequestAppointmentConfirmationWithTransfer"
    //telephony.CallsGeneratorHangupCauseEnum
    export type CallsGeneratorHangupCauseEnum = "AccessInformationDiscarded" | "AllottedTimeout" | "AttendedTransfer" | "BlindTransfer" | "CallAwardedbeing" | "ChannelTypeNotImplemented" | "ChannelUnacceptable" | "CodeSip403BearerCapabilityNotAuthorized" | "CodeSip403IncomingCallsBarred" | "CodeSip403OutgoingCallsBarred" | "CodeSip404NoRouteToDestination" | "CodeSip404NoRouteToSpecifiedTransitNetwork" | "CodeSip404UnallocatedNumber" | "CodeSip408NoUserResponding" | "CodeSip410NumberChanged" | "CodeSip410RedirectionToNewDestination" | "CodeSip480NoAnswerFromUser" | "CodeSip480NormalUnspecified" | "CodeSip480SubscriberAbsent" | "CodeSip483ExchangeRoutingError" | "CodeSip484InvalidNumberFormatAddressIncomplete" | "CodeSip486UserBusy" | "CodeSip487OriginatorCancel" | "CodeSip488IncompatibleDestination" | "CodeSip488bearerCapabilityNotImplemented" | "CodeSip501FacilitiesRejected" | "CodeSip501RequestedFacilityNotImplemented" | "CodeSip501ServiceOrOptionNotImplementedUnspecified" | "CodeSip502DestinationOutOfOrder" | "CodeSip503BearerCapabilityNotPresentlyAvailable" | "CodeSip503NetworkOutOfOrder" | "CodeSip503NoCircuitChannelAvailable" | "CodeSip503RequestedCircuitOrChannelNotAvailable" | "CodeSip503SwitchingEquipmentCongestion" | "CodeSip503TemporaryFailure" | "CodeSip504RecoveryOnTimerExpiry" | "CodeSip603CallRejected" | "Crash" | "GatewayDown" | "InformationElementOrParameterNonExistentOrNotImplemented" | "InterworkingUnspecified" | "InvalidCallReferenceValue" | "InvalidInformationElementContents" | "InvalidMessageUnspecified" | "LoseRace" | "ManagerRequest" | "MandatoryInformationElementIsMissing" | "MediaTimeout" | "MessageNotCompatibleWithCallState" | "MessageNotCompatibleWithCallStateOrMessageTypeNonExistentOrNotImplemented" | "MessageTypeNonExistentOrNotImplemented" | "NormalCallClearing" | "ParameterNonExistentOrNotImplementedPassedOnNationalUse" | "PickedOff" | "PreEmpted" | "ProgressTimeout" | "ProtocolErrorUnspecified" | "RequestedFacilityNotSubscribed" | "ResponseToStatusInquiry" | "ServiceOrOptionNotAvailableUnspecified" | "SystemShutdown" | "UnknownOrCallUnfinished" | "UnspecifiedNoOtherCauseCodesApplicable" | "UserChallenge" | "UserNotRegistered"
    //telephony.City
    // fullName: telephony.City.City
    export interface City {
        administrationCode?: string;
        name?: string;
        zipCode?: string;
    }
    //telephony.Click2CallUser
    // fullName: telephony.Click2CallUser.Click2CallUser
    export interface Click2CallUser {
        creationDateTime?: string;
        id?: number;
        login?: string;
    }
    //telephony.Conference
    // fullName: telephony.Conference.Conference
    export interface Conference {
        description?: string;
        offers?: string[];
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
    }
    //telephony.ConferenceHistory
    // fullName: telephony.ConferenceHistory.ConferenceHistory
    export interface ConferenceHistory {
        countConnections?: number;
        countParticipants?: number;
        dateBegin?: string;
        dateEnd?: string;
        duration?: number;
        events?: OVH.telephony.ConferenceHistoryEvent[];
        id?: number;
        recordUrl?: string;
    }
    //telephony.ConferenceHistoryEvent
    // fullName: telephony.ConferenceHistoryEvent.ConferenceHistoryEvent
    export interface ConferenceHistoryEvent {
        callerid?: string;
        date?: string;
        type?: string;
    }
    //telephony.ConferenceInformations
    // fullName: telephony.ConferenceInformations.ConferenceInformations
    export interface ConferenceInformations {
        dateStart?: string;
        locked?: boolean;
        membersCount?: number;
    }
    //telephony.ConferenceLanguageEnum
    export type ConferenceLanguageEnum = "de" | "en" | "es" | "fr" | "it"
    //telephony.ConferenceParticipants
    // fullName: telephony.ConferenceParticipants.ConferenceParticipants
    export interface ConferenceParticipants {
        arrivalDateTime?: string;
        callerName?: string;
        callerNumber?: string;
        energy?: number;
        floor?: boolean;
        hear?: boolean;
        id?: number;
        speak?: boolean;
        talking?: boolean;
    }
    //telephony.ConferenceProperties
    // fullName: telephony.ConferenceProperties.ConferenceProperties
    export interface ConferenceProperties {
        announceFile?: boolean;
        announceFilename?: string;
        announceSoundId?: number;
        anonymousRejection?: boolean;
        enterMuted?: boolean;
        eventsChannel?: string;
        language?: OVH.telephony.ConferenceLanguageEnum;
        pin?: string;
        recordStatus?: boolean;
        reportEmail?: string;
        reportStatus?: OVH.telephony.ConferenceReportStatusEnum;
        whiteLabelReport?: boolean;
    }
    //telephony.ConferenceReportStatusEnum
    export type ConferenceReportStatusEnum = "customer" | "none" | "other"
    //telephony.ConferenceWebAccess
    // fullName: telephony.ConferenceWebAccess.ConferenceWebAccess
    export interface ConferenceWebAccess {
        id?: number;
        type?: OVH.telephony.ConferenceWebAccessTypeEnum;
        url?: string;
    }
    //telephony.ConferenceWebAccessTypeEnum
    export type ConferenceWebAccessTypeEnum = "read" | "write"
    //telephony.ConsumptionThreshold
    // fullName: telephony.ConsumptionThreshold.ConsumptionThreshold
    export interface ConsumptionThreshold {
        block?: OVH.telephony.OutplanNotificationBlockEnum;
        id?: number;
        notifyEmail?: string;
        percentage?: number;
    }
    //telephony.Contact
    // fullName: telephony.Contact.Contact
    export interface Contact {
        address?: string;
        city?: string;
        country?: OVH.coreTypes.CountryEnum;
        email?: string;
        firstname?: string;
        name?: string;
        organisation?: string;
        phone?: string;
        zip?: string;
    }
    //telephony.ContactsExportFormatsEnum
    export type ContactsExportFormatsEnum = "csv"
    //telephony.DatetimeAndIpvalue
    // fullName: telephony.DatetimeAndIpvalue.DatetimeAndIpvalue
    export interface DatetimeAndIpvalue {
        datetime?: string;
        ip?: string;
    }
    //telephony.Ddi
    // fullName: telephony.Ddi.Ddi
    export interface Ddi {
        description?: string;
        destination?: string;
        featureType?: OVH.telephony.TypeEnum;
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
    }
    //telephony.DefaultSipDomains
    // fullName: telephony.DefaultSipDomains.DefaultSipDomains
    export interface DefaultSipDomains {
        country?: OVH.telephony.NumberCountryEnum;
        currentDomain?: string;
        list?: string[];
        productType?: OVH.telephony.SipDomainProductTypeEnum;
    }
    //telephony.DetailedRateCodeInformation
    // fullName: telephony.DetailedRateCodeInformation.DetailedRateCodeInformation
    export interface DetailedRateCodeInformation {
        cancelLimitDatetime?: string;
        effectiveDatetime?: string;
        pricePerCallWithoutTax?: OVH.order.Price;
        pricePerMinuteWithoutTax?: OVH.order.Price;
        rateCode?: string;
        repaymentPricePerCallWithoutTax?: OVH.order.Price;
        repaymentPricePerMinuteWithoutTax?: OVH.order.Price;
        updateRateCodePriceWithoutTax?: OVH.order.Price;
    }
    //telephony.DiagnosticReport
    // fullName: telephony.DiagnosticReport.DiagnosticReport
    export interface DiagnosticReport {
        callId?: string;
        category?: OVH.telephony.DiagnosticReportCategoryEnum;
        datetime?: string;
        description?: string;
        level?: OVH.telephony.DiagnosticReportLevelEnum;
        name?: string;
        report?: string;
    }
    //telephony.DiagnosticReportCategoryEnum
    export type DiagnosticReportCategoryEnum = "dpi" | "signal"
    //telephony.DiagnosticReportIndexEnum
    export type DiagnosticReportIndexEnum = "2 days ago" | "3 days ago" | "today" | "yesterday"
    //telephony.DiagnosticReportLevelEnum
    export type DiagnosticReportLevelEnum = "debug" | "error" | "info" | "warn"
    //telephony.DirectoryHeadingPJ
    // fullName: telephony.DirectoryHeadingPJ.DirectoryHeadingPJ
    export interface DirectoryHeadingPJ {
        apeCode?: string;
        apeDescription?: string;
        directoryServiceCode?: number;
        directoryServiceDescription?: string;
        notification?: string;
    }
    //telephony.DirectoryInfo
    // fullName: telephony.DirectoryInfo.DirectoryInfo
    export interface DirectoryInfo {
        PJSocialNomination?: string;
        address?: string;
        addressExtra?: string;
        ape?: string;
        areaCode?: number;
        birthDate?: string;
        cedex?: string;
        city?: string;
        country?: string;
        directoryServiceCode?: string;
        displayFirstName?: boolean;
        displayMarketingDirectory?: boolean;
        displayOnlyCity?: boolean;
        displaySearchReverse?: boolean;
        displayUniversalDirectory?: boolean;
        email?: string;
        firstName?: string;
        gender?: OVH.nichandle.GenderEnum;
        inseeCode?: number;
        legalForm?: string;
        lineDescription?: string;
        modificationDate?: string;
        modificationType?: string;
        name?: string;
        number?: string;
        occupation?: string;
        postBox?: string;
        postCode?: string;
        receivePJDirectory?: boolean;
        siret?: string;
        socialNomination?: string;
        socialNominationExtra?: string;
        status?: string;
        urbanDistrict?: string;
        wayName?: string;
        wayNumber?: string;
        wayNumberExtra?: string;
        wayType?: string;
    }
    //telephony.DirectoryWayType
    // fullName: telephony.DirectoryWayType.DirectoryWayType
    export interface DirectoryWayType {
        abbreviatedName?: string;
        wayName?: string;
    }
    //telephony.EasyHunting
    // fullName: telephony.EasyHunting.EasyHunting
    export interface EasyHunting {
        anonymousRejection?: boolean;
        description?: string;
        featureType?: OVH.telephony.TypeEnum;
        isCCS?: boolean;
        maxWaitTime?: number;
        queueSize?: number;
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
        showCallerNumber?: OVH.telephony.OvhPabxDialplanNumberPresentationEnum;
        statusIvrEnabled?: boolean;
        strategy?: OVH.telephony.OvhPabxHuntingQueueStrategyEnum;
        toneOnClosing?: number;
        toneOnHold?: number;
        toneOnOpening?: number;
        voicemail?: string;
    }
    //telephony.EasyHuntingScreenListsConditions
    // fullName: telephony.EasyHuntingScreenListsConditions.EasyHuntingScreenListsConditions
    export interface EasyHuntingScreenListsConditions {
        callerIdNumber?: string;
        conditionId?: number;
        destinationNumber?: string;
        screenListType?: OVH.telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum;
    }
    //telephony.EasyHuntingScreenListsConditionsSettings
    // fullName: telephony.EasyHuntingScreenListsConditionsSettings.EasyHuntingScreenListsConditionsSettings
    export interface EasyHuntingScreenListsConditionsSettings {
        status?: OVH.telephony.EasyHuntingScreenListsConditionsStatusEnum;
    }
    //telephony.EasyHuntingScreenListsConditionsStatusEnum
    export type EasyHuntingScreenListsConditionsStatusEnum = "disabled" | "incomingBlackList" | "incomingWhiteList"
    //telephony.EasyHuntingTimeConditions
    // fullName: telephony.EasyHuntingTimeConditions.EasyHuntingTimeConditions
    export interface EasyHuntingTimeConditions {
        conditionId?: number;
        policy?: OVH.telephony.TimeConditionsPolicyEnum;
        timeFrom?: string;
        timeTo?: string;
        weekDay?: OVH.telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum;
    }
    //telephony.EasyHuntingTimeConditionsSettings
    // fullName: telephony.EasyHuntingTimeConditionsSettings.EasyHuntingTimeConditionsSettings
    export interface EasyHuntingTimeConditionsSettings {
        enable?: boolean;
        slot1Number?: string;
        slot1Type?: OVH.telephony.TimeConditionsSettingsForwardTypeEnum;
        slot2Number?: string;
        slot2Type?: OVH.telephony.TimeConditionsSettingsForwardTypeEnum;
        slot3Number?: string;
        slot3Type?: OVH.telephony.TimeConditionsSettingsForwardTypeEnum;
        unavailableNumber?: string;
        unavailableType?: OVH.telephony.TimeConditionsSettingsForwardTypeEnum;
    }
    //telephony.EasyMiniPabxHuntingAgent
    // fullName: telephony.EasyMiniPabxHuntingAgent.EasyMiniPabxHuntingAgent
    export interface EasyMiniPabxHuntingAgent {
        agentNumber?: string;
        logged?: boolean;
        noReplyTimer?: number;
        position?: number;
    }
    //telephony.EasyMiniPabxHuntingPatternEnum
    export type EasyMiniPabxHuntingPatternEnum = "all-at-once" | "cumulated" | "sequential"
    //telephony.EasyMiniPabxHuntingStrategyEnum
    export type EasyMiniPabxHuntingStrategyEnum = "cyclic" | "leastIdleSinceLastCall" | "linear" | "mostIdleSinceLastCall" | "mostIdleSinceLogging" | "parallel" | "random"
    //telephony.EasyPabx
    // fullName: telephony.EasyPabx.EasyPabx
    export interface EasyPabx {
        description?: string;
        featureType?: OVH.telephony.TypeEnum;
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
    }
    //telephony.EasyPabxHunting
    // fullName: telephony.EasyPabxHunting.EasyPabxHunting
    export interface EasyPabxHunting {
        anonymousCallRejection?: boolean;
        name?: string;
        noReplyTimer?: number;
        numberOfCalls?: number;
        pattern?: OVH.telephony.EasyMiniPabxHuntingPatternEnum;
        strategy?: OVH.telephony.EasyMiniPabxHuntingStrategyEnum;
        toneOnClosure?: boolean;
        toneOnClosureSoundId?: number;
        toneOnHold?: boolean;
        toneOnHoldSoundId?: number;
        toneRingback?: boolean;
        toneRingbackSoundId?: number;
        voicemail?: string;
    }
    //telephony.EntrepriseNumberInformations
    // fullName: telephony.EntrepriseNumberInformations.EntrepriseNumberInformations
    export interface EntrepriseNumberInformations {
        address?: string;
        ape?: string;
        brand?: string;
        entrepriseNumber?: string;
        isValid?: boolean;
        name?: string;
        siren?: string;
    }
    //telephony.EntrepriseNumberInformationsTask
    // fullName: telephony.EntrepriseNumberInformationsTask.EntrepriseNumberInformationsTask
    export interface EntrepriseNumberInformationsTask {
        informations?: OVH.telephony.EntrepriseNumberInformations;
        status?: OVH.telephony.TaskStatusEnum;
    }
    //telephony.Event
    // fullName: telephony.Event.Event
    export interface Event {
        calledIdentifier?: string;
        callingIdentifier?: string;
        dateTime?: string;
        direction?: OVH.telephony.RealtimeEventDirection;
        duration?: number;
        eventType?: OVH.telephony.RealtimeEventType;
        id?: string;
        protocol?: OVH.telephony.RealtimeEventProtocol;
    }
    //telephony.EventCallback
    // fullName: telephony.EventCallback.EventCallback
    export interface EventCallback {
        emailError?: string;
        url?: string;
    }
    //telephony.EventToken
    // fullName: telephony.EventToken.EventToken
    export interface EventToken {
        token?: string;
    }
    //telephony.Fax
    // fullName: telephony.Fax.Fax
    export interface Fax {
        description?: string;
        notifications?: OVH.telephony.LineNotificationsOptions;
        offers?: string[];
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
    }
    //telephony.FaxCampaign
    // fullName: telephony.FaxCampaign.FaxCampaign
    export interface FaxCampaign {
        countFailed?: number;
        countSuccess?: number;
        countTotal?: number;
        dateEnd?: string;
        dateStart?: string;
        id?: number;
        name?: string;
        reference?: string;
        status?: string;
    }
    //telephony.FaxCampaignDetail
    // fullName: telephony.FaxCampaignDetail.FaxCampaignDetail
    export interface FaxCampaignDetail {
        failed?: string[];
        success?: string[];
        todo?: string[];
    }
    //telephony.FaxCampaignRecipientsTypeEnum
    export type FaxCampaignRecipientsTypeEnum = "document" | "list"
    //telephony.FaxCampaignSendTypeEnum
    export type FaxCampaignSendTypeEnum = "automatic" | "manual" | "scheduled"
    //telephony.FaxConsumption
    // fullName: telephony.FaxConsumption.FaxConsumption
    export interface FaxConsumption {
        called?: string;
        calling?: string;
        consumptionId?: number;
        creationDatetime?: string;
        pages?: number;
        priceWithoutTax?: OVH.order.Price;
        wayType?: OVH.telephony.FaxConsumptionWayTypeEnum;
    }
    //telephony.FaxConsumptionWayTypeEnum
    export type FaxConsumptionWayTypeEnum = "received" | "sent"
    //telephony.FaxMailFormatEnum
    export type FaxMailFormatEnum = "html" | "text"
    //telephony.FaxProperties
    // fullName: telephony.FaxProperties.FaxProperties
    export interface FaxProperties {
        callNumber?: string;
        countryCode?: string;
        faxMaxCall?: OVH.telephony.FaxSendingTries;
        faxQuality?: OVH.telephony.FaxQualityEnum;
        faxTagLine?: string;
        fromEmail?: string;
        fromName?: string;
        mailFormat?: OVH.telephony.FaxMailFormatEnum;
        receiver?: string;
        redirectionEmail?: string[];
        rejectAnonymous?: boolean;
        sender?: string;
    }
    //telephony.FaxQualityEnum
    export type FaxQualityEnum = "best" | "high" | "normal"
    //telephony.FaxScreen
    // fullName: telephony.FaxScreen.FaxScreen
    export interface FaxScreen {
        blacklistedNumbers?: string[];
        blacklistedTSI?: string[];
        callNumber?: string;
        countryCode?: string;
        filteringList?: OVH.telephony.FaxScreenListTypeEnum;
        serviceName?: string;
        whitelistedNumbers?: string[];
        whitelistedTSI?: string[];
    }
    //telephony.FaxScreenListTypeEnum
    export type FaxScreenListTypeEnum = "" | "blacklist" | "no" | "whitelist"
    //telephony.FaxSendingTries
    export type FaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    //telephony.FunctionKey
    // fullName: telephony.FunctionKey.FunctionKey
    export interface FunctionKey {
        default?: string;
        function?: string;
        keyNum?: number;
        label?: string;
        parameter?: string;
        type?: string;
    }
    //telephony.GenericScreen
    // fullName: telephony.GenericScreen.GenericScreen
    export interface GenericScreen {
        serviceName?: string;
    }
    //telephony.HardwareOffer
    // fullName: telephony.HardwareOffer.HardwareOffer
    export interface HardwareOffer {
        description?: string;
        name?: string;
        price?: OVH.order.Price;
        url?: string;
    }
    //telephony.HistoryConsumption
    // fullName: telephony.HistoryConsumption.HistoryConsumption
    export interface HistoryConsumption {
        date?: string;
        price?: OVH.order.Price;
        priceOutplan?: OVH.order.Price;
        status?: OVH.telephony.BillStatusEnum;
    }
    //telephony.HistoryRepaymentConsumption
    // fullName: telephony.HistoryRepaymentConsumption.HistoryRepaymentConsumption
    export interface HistoryRepaymentConsumption {
        billingNumber?: string;
        date?: string;
        price?: OVH.order.Price;
        status?: OVH.telephony.BillStatusEnum;
    }
    //telephony.HistoryTollfreeConsumption
    // fullName: telephony.HistoryTollfreeConsumption.HistoryTollfreeConsumption
    export interface HistoryTollfreeConsumption {
        date?: string;
        price?: OVH.order.Price;
        status?: OVH.telephony.BillStatusEnum;
    }
    //telephony.Line
    // fullName: telephony.Line.Line
    export interface Line {
        canChangePassword?: boolean;
        description?: string;
        getPublicOffer?: OVH.telephony.LineOffer;
        infrastructure?: string;
        isAttachedToOtherLinesPhone?: boolean;
        notifications?: OVH.telephony.LineNotificationsOptions;
        offers?: string[];
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
        simultaneousLines?: number;
    }
    //telephony.LineBlockingMode
    export type LineBlockingMode = "both" | "incoming" | "outgoing"
    //telephony.LineNotificationsLogsFrequencyEnum
    export type LineNotificationsLogsFrequencyEnum = "Never" | "Once a day" | "Twice a day"
    //telephony.LineNotificationsLogsOptions
    // fullName: telephony.LineNotificationsLogsOptions.LineNotificationsLogsOptions
    export interface LineNotificationsLogsOptions {
        email?: string;
        frequency?: OVH.telephony.LineNotificationsLogsFrequencyEnum;
        sendIfNull?: boolean;
    }
    //telephony.LineNotificationsOptions
    // fullName: telephony.LineNotificationsOptions.LineNotificationsOptions
    export interface LineNotificationsOptions {
        logs?: OVH.telephony.LineNotificationsLogsOptions;
    }
    //telephony.LineOffer
    // fullName: telephony.LineOffer.LineOffer
    export interface LineOffer {
        description?: string;
        name?: string;
        price?: OVH.order.Price;
    }
    //telephony.LineOffersAndContracts
    // fullName: telephony.LineOffersAndContracts.LineOffersAndContracts
    export interface LineOffersAndContracts {
        contracts?: OVH.order.Contract[];
        offers?: OVH.telephony.LineOffer[];
    }
    //telephony.LineOptionForwardNatureTypeEnum
    export type LineOptionForwardNatureTypeEnum = "fax" | "number" | "voicemail"
    //telephony.LineOptionIntercomEnum
    export type LineOptionIntercomEnum = "no" | "prefixed" | "yes"
    //telephony.LineOptionLanguageEnum
    export type LineOptionLanguageEnum = "Dutch" | "English (UK)" | "French" | "French (BE)" | "German" | "Italian" | "Spanish"
    //telephony.LineOptions
    // fullName: telephony.LineOptions.LineOptions
    export interface LineOptions {
        absentSubscriber?: boolean;
        anonymousCallRejection?: boolean;
        callRestrictionIncoming?: boolean;
        callRestrictionOutgoing?: boolean;
        callWaiting?: boolean;
        codecs?: string;
        defaultVoicemail?: string;
        displayNumber?: string;
        doNotDisturb?: boolean;
        domain?: string;
        forwardBackup?: boolean;
        forwardBackupNature?: OVH.telephony.LineOptionForwardNatureTypeEnum;
        forwardBackupNumber?: string;
        forwardBusy?: boolean;
        forwardBusyNature?: OVH.telephony.LineOptionForwardNatureTypeEnum;
        forwardBusyNumber?: string;
        forwardNoReply?: boolean;
        forwardNoReplyDelay?: number;
        forwardNoReplyNature?: OVH.telephony.LineOptionForwardNatureTypeEnum;
        forwardNoReplyNumber?: string;
        forwardUnconditional?: boolean;
        forwardUnconditionalNature?: OVH.telephony.LineOptionForwardNatureTypeEnum;
        forwardUnconditionalNumber?: string;
        identificationRestriction?: boolean;
        intercom?: OVH.telephony.LineOptionIntercomEnum;
        ipRestrictions?: string[];
        language?: OVH.telephony.LineOptionLanguageEnum;
        lockOutCall?: boolean;
        lockOutCallPassword?: string;
        recordOutgoingCallsBeta?: boolean;
        toneOnCallWaitingSoundId?: number;
        toneOnHoldSoundId?: number;
        toneRingbackSoundId?: number;
        voicemailExternalNumber?: string;
        voicemailInternalNumber?: string;
    }
    //telephony.LinePhone
    // fullName: telephony.LinePhone.LinePhone
    export interface LinePhone {
        brand?: string;
        description?: string;
        maxline?: number;
        price?: OVH.order.Price;
        protocol?: OVH.telephony.ProtocolEnum;
    }
    //telephony.LinePhoneAssociable
    // fullName: telephony.LinePhoneAssociable.LinePhoneAssociable
    export interface LinePhoneAssociable {
        associatedLines?: OVH.telephony.LinePhoneAssociableConfiguredLines[];
        brand?: string;
        maxLines?: number;
        protocol?: OVH.telephony.ProtocolEnum;
    }
    //telephony.LinePhoneAssociableConfiguredLines
    // fullName: telephony.LinePhoneAssociableConfiguredLines.LinePhoneAssociableConfiguredLines
    export interface LinePhoneAssociableConfiguredLines {
        description?: string;
        serviceName?: string;
    }
    //telephony.LineStatisticsTypeEnum
    export type LineStatisticsTypeEnum = "maxDelay" | "maxJitter" | "rtpMos" | "sumRtpLost"
    //telephony.MiniPabx
    // fullName: telephony.MiniPabx.MiniPabx
    export interface MiniPabx {
        description?: string;
        featureType?: OVH.telephony.TypeEnum;
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
    }
    //telephony.MiniPabxHunting
    // fullName: telephony.MiniPabxHunting.MiniPabxHunting
    export interface MiniPabxHunting {
        anonymousCallRejection?: boolean;
        name?: string;
        numberOfCalls?: number;
        onHoldTimer?: number;
        pattern?: OVH.telephony.EasyMiniPabxHuntingPatternEnum;
        queueSize?: number;
        strategy?: OVH.telephony.EasyMiniPabxHuntingStrategyEnum;
        toneOnClosure?: boolean;
        toneOnClosureSoundId?: number;
        toneOnHold?: boolean;
        toneOnHoldSoundId?: number;
        toneRingback?: boolean;
        toneRingbackSoundId?: number;
    }
    //telephony.Number
    // fullName: telephony.Number.Number
    export interface Number {
        description?: string;
        featureType?: OVH.telephony.TypeEnum;
        partOfPool?: string;
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
    }
    //telephony.NumberCountryCodeEnum
    export type NumberCountryCodeEnum = 32 | 33 | 34 | 39 | 41 | 44 | 49
    //telephony.NumberCountryEnum
    export type NumberCountryEnum = "be" | "ch" | "de" | "es" | "fr" | "gb" | "it" | "uk"
    //telephony.NumberDetailedZone
    // fullName: telephony.NumberDetailedZone.NumberDetailedZone
    export interface NumberDetailedZone {
        askedCity?: string;
        city?: string;
        country?: OVH.telephony.NumberCountryEnum;
        internationalNumber?: string;
        matchingCriteria?: OVH.telephony.NumberDetailedZoneMatchingCriteriaEnum;
        number?: string;
        prefix?: OVH.telephony.NumberCountryCodeEnum;
        type?: OVH.telephony.NumberDetailedZoneTypeEnum;
        zipCode?: string;
        zneList?: string[];
    }
    //telephony.NumberDetailedZoneMatchingCriteriaEnum
    export type NumberDetailedZoneMatchingCriteriaEnum = "city" | "internationalNumber" | "number" | "zne"
    //telephony.NumberDetailedZoneTypeEnum
    export type NumberDetailedZoneTypeEnum = "geographic" | "non-geographic" | "special"
    //telephony.NumberTypeEnum
    export type NumberTypeEnum = "geographic" | "nogeographic" | "special"
    //telephony.OfferChange
    // fullName: telephony.OfferChange.OfferChange
    export interface OfferChange {
        offer?: string;
    }
    //telephony.OfferTask
    // fullName: telephony.OfferTask.OfferTask
    export interface OfferTask {
        action?: OVH.telephony.OfferTaskActionEnum;
        executionDate?: string;
        status?: OVH.telephony.TaskStatusEnum;
        taskId?: number;
        type?: OVH.telephony.OfferTaskTypeEnum;
    }
    //telephony.OfferTaskActionEnum
    export type OfferTaskActionEnum = "convertToAlias" | "convertToSip" | "migrateToNewVoicemail" | "removeSimltaneousLines" | "switchServer" | "termination" | "updateFirmware" | "upgrade"
    //telephony.OfferTaskTypeEnum
    export type OfferTaskTypeEnum = "line" | "offer" | "option" | "phone"
    //telephony.OutplanNotificationBlockEnum
    export type OutplanNotificationBlockEnum = "blockAllCalls" | "blockIncomingCalls" | "blockOutgoingCalls" | "none"
    //telephony.OvhPabx
    // fullName: telephony.OvhPabx.OvhPabx
    export interface OvhPabx {
        description?: string;
        featureType?: OVH.telephony.TypeEnum;
        isCCS?: boolean;
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
    }
    //telephony.OvhPabxCustomStatus
    // fullName: telephony.OvhPabxCustomStatus.OvhPabxCustomStatus
    export interface OvhPabxCustomStatus {
        color?: string;
        description?: string;
        id?: number;
        name?: string;
    }
    //telephony.OvhPabxDialplan
    // fullName: telephony.OvhPabxDialplan.OvhPabxDialplan
    export interface OvhPabxDialplan {
        anonymousRejection?: boolean;
        dialplanId?: number;
        lastUpdate?: string;
        name?: string;
        showCallerNumber?: OVH.telephony.OvhPabxDialplanNumberPresentationEnum;
        transferTimeout?: number;
    }
    //telephony.OvhPabxDialplanExtension
    // fullName: telephony.OvhPabxDialplanExtension.OvhPabxDialplanExtension
    export interface OvhPabxDialplanExtension {
        enabled?: boolean;
        extensionId?: number;
        position?: number;
        schedulerCategory?: OVH.telephony.SchedulerCategoryEnum;
        screenListType?: OVH.telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum;
    }
    //telephony.OvhPabxDialplanExtensionConditionScreenList
    // fullName: telephony.OvhPabxDialplanExtensionConditionScreenList.OvhPabxDialplanExtensionConditionScreenList
    export interface OvhPabxDialplanExtensionConditionScreenList {
        callerIdNumber?: string;
        conditionId?: number;
        destinationNumber?: string;
        screenListType?: OVH.telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum;
    }
    //telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum
    export type OvhPabxDialplanExtensionConditionScreenListTypeEnum = "destinationBlackList" | "destinationWhiteList" | "incomingBlackList" | "incomingWhiteList"
    //telephony.OvhPabxDialplanExtensionConditionTime
    // fullName: telephony.OvhPabxDialplanExtensionConditionTime.OvhPabxDialplanExtensionConditionTime
    export interface OvhPabxDialplanExtensionConditionTime {
        conditionId?: number;
        timeFrom?: string;
        timeTo?: string;
        weekDay?: OVH.telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum;
    }
    //telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum
    export type OvhPabxDialplanExtensionConditionTimeWeekDayEnum = "friday" | "monday" | "saturday" | "sunday" | "thursday" | "tuesday" | "wednesday"
    //telephony.OvhPabxDialplanExtensionRule
    // fullName: telephony.OvhPabxDialplanExtensionRule.OvhPabxDialplanExtensionRule
    export interface OvhPabxDialplanExtensionRule {
        action?: OVH.telephony.OvhPabxDialplanExtensionRuleActionEnum;
        actionParam?: string;
        negativeAction?: boolean;
        position?: number;
        ruleId?: number;
    }
    //telephony.OvhPabxDialplanExtensionRuleActionEnum
    export type OvhPabxDialplanExtensionRuleActionEnum = "bridge" | "endless_playback" | "hangup" | "hunting" | "ivr" | "playback" | "readDtmf" | "setCallerName" | "sleep" | "tts" | "voicemail"
    //telephony.OvhPabxDialplanNumberPresentationEnum
    export type OvhPabxDialplanNumberPresentationEnum = "alias" | "both" | "caller"
    //telephony.OvhPabxHunting
    // fullName: telephony.OvhPabxHunting.OvhPabxHunting
    export interface OvhPabxHunting {
        crmUrlTemplate?: string;
        g729?: boolean;
        name?: string;
        statusIvrEnabled?: boolean;
    }
    //telephony.OvhPabxHuntingAgent
    // fullName: telephony.OvhPabxHuntingAgent.OvhPabxHuntingAgent
    export interface OvhPabxHuntingAgent {
        agentId?: number;
        breakStatus?: number;
        description?: string;
        number?: string;
        simultaneousLines?: number;
        status?: OVH.telephony.OvhPabxHuntingAgentStatusEnum;
        timeout?: number;
        type?: OVH.telephony.OvhPabxHuntingAgentTypeEnum;
        wrapUpTime?: number;
    }
    //telephony.OvhPabxHuntingAgentLiveStatus
    // fullName: telephony.OvhPabxHuntingAgentLiveStatus.OvhPabxHuntingAgentLiveStatus
    export interface OvhPabxHuntingAgentLiveStatus {
        answeredCalls?: number;
        lastStatusChange?: string;
        status?: OVH.telephony.OvhPabxHuntingLiveAgentStatusEnum;
        totalCallDuration?: number;
    }
    //telephony.OvhPabxHuntingAgentQueue
    // fullName: telephony.OvhPabxHuntingAgentQueue.OvhPabxHuntingAgentQueue
    export interface OvhPabxHuntingAgentQueue {
        agentId?: number;
        position?: number;
        queueId?: number;
    }
    //telephony.OvhPabxHuntingAgentStatusEnum
    export type OvhPabxHuntingAgentStatusEnum = "available" | "loggedOut" | "onBreak"
    //telephony.OvhPabxHuntingAgentTypeEnum
    export type OvhPabxHuntingAgentTypeEnum = "external" | "internal"
    //telephony.OvhPabxHuntingLiveAgentStatusEnum
    export type OvhPabxHuntingLiveAgentStatusEnum = "inAQueueCall" | "loggedOut" | "onBreak" | "receiving" | "waiting"
    //telephony.OvhPabxHuntingLiveCallsStateEnum
    export type OvhPabxHuntingLiveCallsStateEnum = "Answered" | "Waiting"
    //telephony.OvhPabxHuntingQueue
    // fullName: telephony.OvhPabxHuntingQueue.OvhPabxHuntingQueue
    export interface OvhPabxHuntingQueue {
        actionOnClosure?: OVH.telephony.OvhPabxQueueActionEnum;
        actionOnClosureParam?: string;
        actionOnOverflow?: OVH.telephony.OvhPabxQueueActionEnum;
        actionOnOverflowParam?: string;
        askForRecordDisabling?: boolean;
        description?: string;
        followCallForwards?: boolean;
        maxMember?: number;
        maxWaitTime?: number;
        queueId?: number;
        record?: boolean;
        recordDisablingDigit?: OVH.telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum;
        recordDisablingLanguage?: OVH.telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum;
        soundOnHold?: number;
        strategy?: OVH.telephony.OvhPabxHuntingQueueStrategyEnum;
    }
    //telephony.OvhPabxHuntingQueueLiveCalls
    // fullName: telephony.OvhPabxHuntingQueueLiveCalls.OvhPabxHuntingQueueLiveCalls
    export interface OvhPabxHuntingQueueLiveCalls {
        agent?: string;
        answered?: string;
        begin?: string;
        callerIdName?: string;
        callerIdNumber?: string;
        destinationNumber?: string;
        end?: string;
        id?: number;
        onHold?: boolean;
        queue?: string;
        state?: OVH.telephony.OvhPabxHuntingLiveCallsStateEnum;
    }
    //telephony.OvhPabxHuntingQueueLiveStatistics
    // fullName: telephony.OvhPabxHuntingQueueLiveStatistics.OvhPabxHuntingQueueLiveStatistics
    export interface OvhPabxHuntingQueueLiveStatistics {
        callsAnswered?: number;
        callsLost?: number;
        callsTotal?: number;
        lastReset?: string;
        totalCallDuration?: number;
        totalWaitingDuration?: number;
    }
    //telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum
    export type OvhPabxHuntingQueueRecordDisablingDigitEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    //telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum
    export type OvhPabxHuntingQueueRecordDisablingLanguageEnum = "english" | "french"
    //telephony.OvhPabxHuntingQueueStrategyEnum
    export type OvhPabxHuntingQueueStrategyEnum = "cumulationByAgentOrder" | "longestHangupAgent" | "longestIdleAgent" | "random" | "ringAll" | "roundRobin" | "sequentiallyByAgentOrder"
    //telephony.OvhPabxIvrMenuEntryActionEnum
    export type OvhPabxIvrMenuEntryActionEnum = "bridge" | "callcenter" | "menuBack" | "menuExit" | "menuSub" | "menuTop" | "playback" | "readDtmf" | "setCallerName"
    //telephony.OvhPabxMenu
    // fullName: telephony.OvhPabxMenu.OvhPabxMenu
    export interface OvhPabxMenu {
        greetSound?: number;
        greetSoundTts?: number;
        invalidSound?: number;
        invalidSoundTts?: number;
        menuId?: number;
        name?: string;
    }
    //telephony.OvhPabxMenuEntry
    // fullName: telephony.OvhPabxMenuEntry.OvhPabxMenuEntry
    export interface OvhPabxMenuEntry {
        action?: OVH.telephony.OvhPabxIvrMenuEntryActionEnum;
        actionParam?: string;
        dtmf?: string;
        entryId?: number;
        position?: number;
    }
    //telephony.OvhPabxQueueActionEnum
    export type OvhPabxQueueActionEnum = "playback" | "voicemail"
    //telephony.OvhPabxRecord
    // fullName: telephony.OvhPabxRecord.OvhPabxRecord
    export interface OvhPabxRecord {
        agent?: string;
        callEnd?: string;
        callStart?: string;
        callerIdName?: string;
        callerIdNumber?: string;
        destinationNumber?: string;
        duration?: number;
        fileUrl?: string;
        id?: number;
    }
    //telephony.OvhPabxSound
    // fullName: telephony.OvhPabxSound.OvhPabxSound
    export interface OvhPabxSound {
        name?: string;
        soundId?: number;
    }
    //telephony.OvhPabxTts
    // fullName: telephony.OvhPabxTts.OvhPabxTts
    export interface OvhPabxTts {
        id?: number;
        text?: string;
        voice?: OVH.telephony.OvhPabxTtsVoiceEnum;
    }
    //telephony.OvhPabxTtsVoiceEnum
    export type OvhPabxTtsVoiceEnum = "Bruce" | "Helene" | "Jenny" | "Loic"
    //telephony.OvhPabxWhisperingModeEnum
    export type OvhPabxWhisperingModeEnum = "Whisper to agent only" | "Whisper to all participants"
    //telephony.PcsFile
    // fullName: telephony.PcsFile.PcsFile
    export interface PcsFile {
        filename?: string;
        status?: OVH.telephony.PcsFileStatusEnum;
        url?: string;
        urlExpirationDatetime?: string;
    }
    //telephony.PcsFileStatusEnum
    export type PcsFileStatusEnum = "doing" | "done" | "error" | "todo"
    //telephony.Phone
    // fullName: telephony.Phone.Phone
    export interface Phone {
        brand?: string;
        description?: string;
        macAddress?: string;
        maxline?: number;
        mgcpIpRestriction?: string;
        phoneConfiguration?: OVH.telephony.PhoneConfigurationProperty[];
        protocol?: OVH.telephony.ProtocolEnum;
        userPassword?: string;
    }
    //telephony.PhoneConfigurationLevelEnum
    export type PhoneConfigurationLevelEnum = "admin" | "expert"
    //telephony.PhoneConfigurationProperty
    // fullName: telephony.PhoneConfigurationProperty.PhoneConfigurationProperty
    export interface PhoneConfigurationProperty {
        default?: string;
        description?: string;
        enum?: string[];
        group?: string;
        level?: OVH.telephony.PhoneConfigurationLevelEnum;
        maxlength?: number;
        name?: string;
        rangeValue?: OVH.complexType.Range<number>;
        type?: OVH.telephony.PhoneConfigurationTypeEnum;
        value?: string;
    }
    //telephony.PhoneConfigurationTypeEnum
    export type PhoneConfigurationTypeEnum = "boolean" | "enum" | "hidden" | "ipv4" | "numeric" | "string"
    //telephony.PhoneCredentials
    // fullName: telephony.PhoneCredentials.PhoneCredentials
    export interface PhoneCredentials {
        login?: string;
        password?: string;
    }
    //telephony.Phonebook
    // fullName: telephony.Phonebook.Phonebook
    export interface Phonebook {
        bookKey?: string;
        isReadonly?: boolean;
        name?: string;
        phoneKey?: string;
    }
    //telephony.PhonebookContact
    // fullName: telephony.PhonebookContact.PhonebookContact
    export interface PhonebookContact {
        group?: string;
        homeMobile?: string;
        homePhone?: string;
        id?: number;
        name?: string;
        surname?: string;
        workMobile?: string;
        workPhone?: string;
    }
    //telephony.PhonebookMaster
    // fullName: telephony.PhonebookMaster.PhonebookMaster
    export interface PhonebookMaster {
        bookKey?: string;
        name?: string;
    }
    //telephony.Portability
    // fullName: telephony.Portability.Portability
    export interface Portability {
        billingAccount?: string;
        creationDate?: string;
        customerInfos?: OVH.telephony.PortabilityCustomerInfos;
        desiredExecutionDate?: string;
        error?: boolean;
        errorCodes?: string[];
        id?: number;
        lineToRedirectTo?: string;
        numbersList?: string[];
        operator?: string;
        orderId?: number;
        portabilityCountry?: OVH.telephony.PortabilityCountryEnum;
    }
    //telephony.PortabilityCountryEnum
    export type PortabilityCountryEnum = "belgium" | "france" | "switzerland"
    //telephony.PortabilityCustomerInfos
    // fullName: telephony.PortabilityCustomerInfos.PortabilityCustomerInfos
    export interface PortabilityCustomerInfos {
        building?: string;
        city?: string;
        door?: string;
        floor?: string;
        name?: string;
        siret?: string;
        stair?: string;
        streetName?: string;
        streetNumber?: string;
        zip?: string;
    }
    //telephony.PortabilityDocument
    // fullName: telephony.PortabilityDocument.PortabilityDocument
    export interface PortabilityDocument {
        description?: string;
        documentId?: number;
        getUrl?: string;
        name?: string;
        putUrl?: string;
        size?: number;
    }
    //telephony.PortabilityFixErrorPossibleParameters
    // fullName: telephony.PortabilityFixErrorPossibleParameters.PortabilityFixErrorPossibleParameters
    export interface PortabilityFixErrorPossibleParameters {
        mandatoryParameters?: string[];
        optionalParameters?: string[];
    }
    //telephony.PortabilityStep
    // fullName: telephony.PortabilityStep.PortabilityStep
    export interface PortabilityStep {
        description?: string;
        doneDate?: string;
        duration?: OVH.telephony.PortabilityStepDuration;
        infos?: OVH.telephony.PortabilityStepInfos;
        name?: OVH.telephony.PortabilityStepNameEnum;
        status?: OVH.telephony.PortabilityStepStatusEnum;
    }
    //telephony.PortabilityStepDuration
    // fullName: telephony.PortabilityStepDuration.PortabilityStepDuration
    export interface PortabilityStepDuration {
        quantity?: number;
        unit?: OVH.telephony.PortabilityStepDurationUnitEnum;
    }
    //telephony.PortabilityStepDurationUnitEnum
    export type PortabilityStepDurationUnitEnum = "NA" | "day" | "hour" | "openday"
    //telephony.PortabilityStepInfos
    // fullName: telephony.PortabilityStepInfos.PortabilityStepInfos
    export interface PortabilityStepInfos {
        lastProposedDate?: string;
        reason?: string;
        reasonType?: string;
    }
    //telephony.PortabilityStepNameEnum
    export type PortabilityStepNameEnum = "acknowledgmentReceivedFromOperator" | "belgiumPortabilityRequestCreated" | "belgiumPortabilityRequestExecutionAcked" | "belgiumPortabilityRequestExecutionAsked" | "belgiumPortabilityRequestExecutionCompleted" | "belgiumPortabilityRequestValidated" | "belgiumPortabilityRequestWaitingUntilExec" | "customerFormReceived" | "customerFormSent" | "customerFormValidated" | "finalReportReceivedFromOperator" | "intermediateReportReceivedFromOperator" | "numberActivation" | "requestSentToOperator" | "sDASequenceReceivedFromOperator"
    //telephony.PortabilityStepStatusEnum
    export type PortabilityStepStatusEnum = "cancelled" | "doing" | "done" | "error" | "hold" | "todo"
    //telephony.PreviousVoiceConsumption
    // fullName: telephony.PreviousVoiceConsumption.PreviousVoiceConsumption
    export interface PreviousVoiceConsumption {
        called?: string;
        calling?: string;
        consumptionId?: number;
        countrySuffix?: string;
        creationDatetime?: string;
        designation?: string;
        destinationType?: OVH.telephony.VoiceConsumptionDestinationTypeEnum;
        duration?: number;
        hangupNature?: string;
        planType?: OVH.telephony.VoiceConsumptionPlanTypeEnum;
        priceWithoutTax?: OVH.order.Price;
        wayType?: OVH.telephony.VoiceConsumptionWayTypeEnum;
    }
    //telephony.PropertyEnum
    export type PropertyEnum = "xdsl"
    //telephony.ProtocolEnum
    export type ProtocolEnum = "mgcp" | "sip"
    //telephony.RateCodeInformation
    // fullName: telephony.RateCodeInformation.RateCodeInformation
    export interface RateCodeInformation {
        code?: string;
        pricePerCallWithoutTax?: OVH.order.Price;
        pricePerMinuteWithoutTax?: OVH.order.Price;
    }
    //telephony.RealtimeEventDirection
    export type RealtimeEventDirection = "incoming" | "outgoing"
    //telephony.RealtimeEventProtocol
    export type RealtimeEventProtocol = "mgcp" | "sip"
    //telephony.RealtimeEventType
    export type RealtimeEventType = "end_calling" | "end_hold" | "end_ringing" | "start_calling" | "start_hold" | "start_ringing"
    //telephony.Redirect
    // fullName: telephony.Redirect.Redirect
    export interface Redirect {
        description?: string;
        destination?: string;
        featureType?: OVH.telephony.TypeEnum;
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
    }
    //telephony.RegistrationInformations
    // fullName: telephony.RegistrationInformations.RegistrationInformations
    export interface RegistrationInformations {
        datetime?: string;
        domain?: string;
        ip?: string;
        localIp?: string;
        localPort?: number;
        port?: number;
        userAgent?: string;
    }
    //telephony.ReleaseLocationEnum
    export type ReleaseLocationEnum = "backward" | "forward" | "local"
    //telephony.RepaymentConsumption
    // fullName: telephony.RepaymentConsumption.RepaymentConsumption
    export interface RepaymentConsumption {
        called?: string;
        calling?: string;
        consumptionId?: number;
        creationDatetime?: string;
        dialed?: string;
        duration?: number;
        operator?: string;
        price?: number;
        repayable?: boolean;
    }
    //telephony.ResetPhoneCodeInfo
    // fullName: telephony.ResetPhoneCodeInfo.ResetPhoneCodeInfo
    export interface ResetPhoneCodeInfo {
        activationCode?: string;
        keyBook?: string;
        serverURL?: string;
    }
    //telephony.ResetPhoneInfo
    // fullName: telephony.ResetPhoneInfo.ResetPhoneInfo
    export interface ResetPhoneInfo {
        resetCodeInfo?: OVH.telephony.ResetPhoneCodeInfo;
        resetPhoneMethod?: OVH.telephony.ResetPhoneMethodEnum;
    }
    //telephony.ResetPhoneMethodEnum
    export type ResetPhoneMethodEnum = "code" | "http"
    //telephony.Rma
    // fullName: telephony.Rma.Rma
    export interface Rma {
        cancellable?: boolean;
        creationDatetime?: string;
        equipmentReference?: string;
        id?: string;
        newMerchandise?: string;
        offerTypeNew?: OVH.telephony.RmaOfferTypeEnum;
        offerTypeOld?: OVH.telephony.RmaOfferTypeEnum;
        process?: OVH.telephony.RmaReplaceTypeEnum;
        receptionDatetime?: string;
        shippingContact?: OVH.telephony.Contact;
        status?: OVH.telephony.RmaStatusEnum;
        steps?: OVH.telephony.RmaStep[];
        terminationDatetime?: string;
        type?: OVH.telephony.RmaTypeEnum;
    }
    //telephony.RmaOfferTypeEnum
    export type RmaOfferTypeEnum = "deposit" | "loan" | "purchase"
    //telephony.RmaPublicTypeEnum
    export type RmaPublicTypeEnum = "change to another phone/equipment (restitution first and shipping then)" | "restitution but keep the service enable"
    //telephony.RmaReplaceTypeEnum
    export type RmaReplaceTypeEnum = "changePhone" | "phoneRestitution" | "undefined"
    //telephony.RmaReturn
    // fullName: telephony.RmaReturn.RmaReturn
    export interface RmaReturn {
        id?: string;
    }
    //telephony.RmaStatusEnum
    export type RmaStatusEnum = "closed" | "open" | "received"
    //telephony.RmaStep
    // fullName: telephony.RmaStep.RmaStep
    export interface RmaStep {
        description?: string;
        doneDate?: string;
        infos?: string;
        name?: OVH.telephony.RmaStepNameEnum;
        status?: OVH.telephony.RmaStepStatusEnum;
    }
    //telephony.RmaStepNameEnum
    export type RmaStepNameEnum = "dispatchJustification" | "equipmentSending" | "equipmentTesting" | "opening" | "parcelReception" | "parcelValidation" | "validation"
    //telephony.RmaStepStatusEnum
    export type RmaStepStatusEnum = "done" | "todo"
    //telephony.RmaTypeEnum
    export type RmaTypeEnum = "after sale equipment service exchange" | "after sale phone service exchange" | "equipment restitution" | "fast exchange" | "old merchandise reception before exchange" | "phone restitution" | "resends due to shipping lost by the carrier" | "resends due to shipping not withdraw" | "specific return merchandise authorisation" | "termination" | "unknown"
    //telephony.Rsva
    // fullName: telephony.Rsva.Rsva
    export interface Rsva {
        serviceName?: string;
        typology?: OVH.telephony.portability.SpecialNumberCategoryEnum;
    }
    //telephony.Scheduler
    // fullName: telephony.Scheduler.Scheduler
    export interface Scheduler {
        serviceName?: string;
        timeZone?: OVH.telephony.timeZone;
    }
    //telephony.SchedulerCategoryEnum
    export type SchedulerCategoryEnum = "holidays" | "scheduler1" | "scheduler2" | "scheduler3"
    //telephony.SchedulerEvent
    // fullName: telephony.SchedulerEvent.SchedulerEvent
    export interface SchedulerEvent {
        categories?: OVH.telephony.SchedulerCategoryEnum;
        dateEnd?: string;
        dateStart?: string;
        description?: string;
        title?: string;
        uid?: string;
    }
    //telephony.Screen
    // fullName: telephony.Screen.Screen
    export interface Screen {
        incomingScreenList?: OVH.telephony.ScreenListChoosingEnum;
        outgoingScreenList?: OVH.telephony.ScreenListChoosingEnum;
        serviceName?: string;
    }
    //telephony.ScreenList
    // fullName: telephony.ScreenList.ScreenList
    export interface ScreenList {
        callNumber?: string;
        id?: number;
        nature?: OVH.telephony.ScreenListNatureEnum;
        status?: string;
        type?: OVH.telephony.ScreenListTypeEnum;
    }
    //telephony.ScreenListChoosingEnum
    export type ScreenListChoosingEnum = "blacklist" | "disabled" | "whitelist"
    //telephony.ScreenListNatureEnum
    export type ScreenListNatureEnum = "fax" | "international" | "services" | "special" | "voicemail"
    //telephony.ScreenListTypeEnum
    export type ScreenListTypeEnum = "incomingBlackList" | "incomingWhiteList" | "outgoingBlackList" | "outgoingWhiteList"
    //telephony.ServiceVoicemailAudioFormatEnum
    export type ServiceVoicemailAudioFormatEnum = "aiff" | "au" | "flac" | "mp3" | "ogg" | "wav"
    //telephony.ServiceVoicemailMailOptionEnum
    export type ServiceVoicemailMailOptionEnum = "attachment" | "simple"
    //telephony.ServiceVoicemailNotifications
    // fullName: telephony.ServiceVoicemailNotifications.ServiceVoicemailNotifications
    export interface ServiceVoicemailNotifications {
        email?: string;
        type?: OVH.telephony.ServiceVoicemailMailOptionEnum;
    }
    //telephony.SimultaneousChannelsDetails
    // fullName: telephony.SimultaneousChannelsDetails.SimultaneousChannelsDetails
    export interface SimultaneousChannelsDetails {
        basic?: number;
        current?: number;
        extra?: number;
        maximum?: number;
        toBeDeleted?: number;
    }
    //telephony.SipDomainProductTypeEnum
    export type SipDomainProductTypeEnum = "sip" | "trunk"
    //telephony.Sound
    // fullName: telephony.Sound.Sound
    export interface Sound {
        creationDate?: string;
        description?: string;
        filename?: string;
        getUrl?: string;
        id?: number;
        putUrl?: string;
        size?: number;
    }
    //telephony.SpecificNumber
    // fullName: telephony.SpecificNumber.SpecificNumber
    export interface SpecificNumber {
        isPremium?: boolean;
        number?: string;
    }
    //telephony.StatisticsTimeframeEnum
    export type StatisticsTimeframeEnum = "daily" | "hourly" | "monthly" | "weekly" | "yearly"
    //telephony.Task
    // fullName: telephony.Task.Task
    export interface Task {
        action?: string;
        message?: string;
        objectCreated?: string;
        serviceType?: string;
        status?: OVH.telephony.TaskStatusEnum;
        taskId?: number;
    }
    //telephony.TaskStatusEnum
    export type TaskStatusEnum = "doing" | "done" | "error" | "pause" | "todo"
    //telephony.TelephonyGenericService
    // fullName: telephony.TelephonyGenericService.TelephonyGenericService
    export interface TelephonyGenericService {
        serviceName?: string;
    }
    //telephony.TelephonySearchService
    // fullName: telephony.TelephonySearchService.TelephonySearchService
    export interface TelephonySearchService {
        billingAccount?: string;
        domain?: string;
        type?: OVH.telephony.TelephonySearchServiceTypeEnum;
    }
    //telephony.TelephonySearchServiceTypeEnum
    export type TelephonySearchServiceTypeEnum = "alias" | "line"
    //telephony.TelephonyService
    // fullName: telephony.TelephonyService.TelephonyService
    export interface TelephonyService {
        country?: OVH.telephony.NumberCountryEnum;
        countryCode?: OVH.telephony.NumberCountryCodeEnum;
        currentOutplan?: OVH.order.Price;
        description?: string;
        featureType?: OVH.telephony.TypeEnum;
        getPublicOffer?: OVH.telephony.LineOffer;
        hasFaxCapabilities?: boolean;
        offers?: string[];
        properties?: OVH.telephony.PropertyEnum[];
        rio?: string;
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
        simultaneousLines?: number;
    }
    //telephony.TemporaryLogsLink
    // fullName: telephony.TemporaryLogsLink.TemporaryLogsLink
    export interface TemporaryLogsLink {
        expirationDate?: string;
        url?: string;
    }
    //telephony.TerminationReasonEnum
    export type TerminationReasonEnum = "addresseMove" | "billingDifficulties" | "cessationOfActivity" | "missingOptions" | "moveToCompetitor" | "other" | "plugAndPhoneDifficulties" | "technicalDifficulties"
    //telephony.TimeCondition
    // fullName: telephony.TimeCondition.TimeCondition
    export interface TimeCondition {
        day?: OVH.telephony.TimeConditionsDayEnum;
        hourBegin?: string;
        hourEnd?: string;
        id?: number;
        policy?: OVH.telephony.TimeConditionsPolicyEnum;
        status?: string;
    }
    //telephony.TimeConditionOptions
    // fullName: telephony.TimeConditionOptions.TimeConditionOptions
    export interface TimeConditionOptions {
        slot1Number?: string;
        slot1Type?: OVH.telephony.TimeConditionsSlotTypeEnum;
        slot2Number?: string;
        slot2Type?: OVH.telephony.TimeConditionsSlotTypeEnum;
        slot3Number?: string;
        slot3Type?: OVH.telephony.TimeConditionsSlotTypeEnum;
        status?: OVH.telephony.TimeConditionsGlobalStatusEnum;
        timeout?: OVH.telephony.TimeConditionsTimeoutEnum;
        unavailableNumber?: string;
        unavailableType?: OVH.telephony.TimeConditionsSlotTypeEnum;
    }
    //telephony.TimeConditionsDayEnum
    export type TimeConditionsDayEnum = "friday" | "holiday" | "monday" | "saturday" | "sunday" | "thursday" | "tuesday" | "wednesday"
    //telephony.TimeConditionsGlobalStatusEnum
    export type TimeConditionsGlobalStatusEnum = "deleted" | "disabled" | "enabled"
    //telephony.TimeConditionsPolicyEnum
    export type TimeConditionsPolicyEnum = "available" | "slot1" | "slot2" | "slot3"
    //telephony.TimeConditionsSettingsForwardTypeEnum
    export type TimeConditionsSettingsForwardTypeEnum = "number" | "voicemail"
    //telephony.TimeConditionsSlotTypeEnum
    export type TimeConditionsSlotTypeEnum = "number" | "voicemail"
    //telephony.TimeConditionsTimeoutEnum
    export type TimeConditionsTimeoutEnum = 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 5 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90
    //telephony.TimestampAndValue
    // fullName: telephony.TimestampAndValue.TimestampAndValue
    export interface TimestampAndValue {
        timestamp?: number;
        value?: number;
    }
    //telephony.TokenExpirationEnum
    export type TokenExpirationEnum = "1 day" | "1 hour" | "30 days" | "5 minutes" | "unlimited"
    //telephony.Tones
    // fullName: telephony.Tones.Tones
    export interface Tones {
        callWaiting?: OVH.telephony.TonesEnum;
        endCall?: OVH.telephony.TonesEnum;
        onHold?: OVH.telephony.TonesOnHoldEnum;
        ringback?: OVH.telephony.TonesEnum;
    }
    //telephony.TonesEnum
    export type TonesEnum = "Custom sound" | "None"
    //telephony.TonesOnHoldEnum
    export type TonesOnHoldEnum = "Custom sound" | "None" | "Predefined 1" | "Predefined 2"
    //telephony.TonesTypeEnum
    export type TonesTypeEnum = "callWaiting" | "endCall" | "onHold" | "ringback"
    //telephony.Trunk
    // fullName: telephony.Trunk.Trunk
    export interface Trunk {
        description?: string;
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
    }
    //telephony.TrunkExternalDisplayedNumber
    // fullName: telephony.TrunkExternalDisplayedNumber.TrunkExternalDisplayedNumber
    export interface TrunkExternalDisplayedNumber {
        createdAt?: string;
        number?: string;
        status?: OVH.telephony.TrunkExternalDisplayedNumberStatusEnum;
        validatedAt?: string;
    }
    //telephony.TrunkExternalDisplayedNumberStatusEnum
    export type TrunkExternalDisplayedNumberStatusEnum = "enabled" | "refused" | "toDelete" | "waitingValidation"
    //telephony.TrunkExternalDisplayedNumberValidation
    // fullName: telephony.TrunkExternalDisplayedNumberValidation.TrunkExternalDisplayedNumberValidation
    export interface TrunkExternalDisplayedNumberValidation {
        phoneCallTaskId?: number;
        validationCode?: string;
    }
    //telephony.TrunkSimultaneousPack
    // fullName: telephony.TrunkSimultaneousPack.TrunkSimultaneousPack
    export interface TrunkSimultaneousPack {
        channels?: number;
        quantity?: number;
        unitPrice?: OVH.order.Price;
    }
    //telephony.TrunkSimultaneousPacksRepartition
    // fullName: telephony.TrunkSimultaneousPacksRepartition.TrunkSimultaneousPacksRepartition
    export interface TrunkSimultaneousPacksRepartition {
        optimizedChannelsQuantity?: number;
        packsRepartition?: OVH.telephony.TrunkSimultaneousPack[];
        totalPrice?: OVH.order.Price;
    }
    //telephony.TypeEnum
    export type TypeEnum = "cloudHunting" | "cloudIvr" | "conference" | "contactCenterSolution" | "contactCenterSolutionExpert" | "ddi" | "easyHunting" | "easyPabx" | "empty" | "fax" | "freefax" | "mgcp" | "miniPabx" | "oldConference" | "plugAndFax" | "redirect" | "sip" | "svi" | "voicefax" | "voicemail" | "vxml"
    //telephony.TypeServiceEnum
    export type TypeServiceEnum = "alias" | "line"
    //telephony.VoiceConsumption
    // fullName: telephony.VoiceConsumption.VoiceConsumption
    export interface VoiceConsumption {
        called?: string;
        calling?: string;
        consumptionId?: number;
        countrySuffix?: string;
        creationDatetime?: string;
        designation?: string;
        destinationType?: OVH.telephony.VoiceConsumptionDestinationTypeEnum;
        dialed?: string;
        duration?: number;
        hangupNature?: string;
        planType?: OVH.telephony.VoiceConsumptionPlanTypeEnum;
        priceWithoutTax?: OVH.order.Price;
        wayType?: OVH.telephony.VoiceConsumptionWayTypeEnum;
    }
    //telephony.VoiceConsumptionDestinationTypeEnum
    export type VoiceConsumptionDestinationTypeEnum = "landline" | "mobile" | "special"
    //telephony.VoiceConsumptionPlanTypeEnum
    export type VoiceConsumptionPlanTypeEnum = "outplan" | "priceplan"
    //telephony.VoiceConsumptionWayTypeEnum
    export type VoiceConsumptionWayTypeEnum = "incoming" | "outgoing" | "transfer"
    //telephony.VoicefaxRoutingEnum
    export type VoicefaxRoutingEnum = "fax" | "voicemail"
    //telephony.Voicemail
    // fullName: telephony.Voicemail.Voicemail
    export interface Voicemail {
        description?: string;
        offers?: string[];
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
    }
    //telephony.VoicemailGreetingEnum
    export type VoicemailGreetingEnum = "default" | "full" | "short"
    //telephony.VoicemailGreetings
    // fullName: telephony.VoicemailGreetings.VoicemailGreetings
    export interface VoicemailGreetings {
        callee?: string;
        dir?: OVH.telephony.VoicemailMessageFolderGreetingEnum;
        id?: number;
    }
    //telephony.VoicemailMessageFolderDirectoryEnum
    export type VoicemailMessageFolderDirectoryEnum = "family" | "friends" | "inbox" | "old" | "urgent" | "work"
    //telephony.VoicemailMessageFolderGreetingEnum
    export type VoicemailMessageFolderGreetingEnum = "busy" | "greet" | "temp" | "unavail"
    //telephony.VoicemailMessages
    // fullName: telephony.VoicemailMessages.VoicemailMessages
    export interface VoicemailMessages {
        callee?: string;
        caller?: string;
        creationDatetime?: string;
        dir?: OVH.telephony.VoicemailMessageFolderDirectoryEnum;
        duration?: number;
        id?: number;
    }
    //telephony.VoicemailNumbers
    // fullName: telephony.VoicemailNumbers.VoicemailNumbers
    export interface VoicemailNumbers {
        external?: string;
        internal?: string;
    }
    //telephony.VoicemailProperties
    // fullName: telephony.VoicemailProperties.VoicemailProperties
    export interface VoicemailProperties {
        annouceMessage?: string;
        audioFormat?: OVH.telephony.ServiceVoicemailAudioFormatEnum;
        doNotRecord?: boolean;
        forcePassword?: boolean;
        fromEmail?: string;
        fromName?: string;
        fullGreetingSoundId?: number;
        greetingType?: OVH.telephony.VoicemailGreetingEnum;
        isNewVersion?: boolean;
        keepMessage?: boolean;
        redirectionEmails?: OVH.telephony.ServiceVoicemailNotifications[];
        shortGreetingSoundId?: number;
        temporaryGreetingActivated?: boolean;
        temporaryGreetingSoundId?: number;
        unreadMessages?: number;
    }
    //telephony.Vxml
    // fullName: telephony.Vxml.Vxml
    export interface Vxml {
        description?: string;
        offers?: string[];
        serviceName?: string;
        serviceType?: OVH.telephony.TypeServiceEnum;
    }
    //telephony.VxmlProperties
    // fullName: telephony.VxmlProperties.VxmlProperties
    export interface VxmlProperties {
        url?: string;
        urlRecord?: string;
    }
    export namespace portability {
        //telephony.portability.SpecialNumberCategoryEnum
        export type SpecialNumberCategoryEnum = "access" | "adults" | "announced" | "be_adults" | "be_content" | "be_games" | "be_general" | "be_relaxing" | "conferencing" | "contentsAuto" | "contentsManual" | "directory" | "games" | "linking" | "m2m" | "relationship"
    }
    //telephony.timeZone
    export type timeZone = "Europe/Berlin" | "Europe/Brussels" | "Europe/London" | "Europe/Madrid" | "Europe/Paris" | "Europe/Zurich"
    //telephony.trafficExtract
    // fullName: telephony.trafficExtract.trafficExtract
    export interface trafficExtract {
        dateEnd?: string;
        dateStart?: string;
        fileSize?: number;
        fileUrl?: string;
        id?: number;
        status?: OVH.telephony.TaskStatusEnum;
    }
}
// Apis harmony
// path /telephony
export interface Telephony {
    // GET /telephony
    GET(): Promise<string[]>;
    setDefaultSipDomain:  {
        // POST /telephony/setDefaultSipDomain
        POST(body?: {domain: string, country: telephony.NumberCountryEnum, type: telephony.SipDomainProductTypeEnum}): Promise<void>;
    }
    searchServices:  {
        // GET /telephony/searchServices
        GET(param?: {axiom: string}): Promise<telephony.TelephonySearchService[]>;
    }
    trunks:  {
        // GET /telephony/trunks
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /telephony/trunks/{serviceName}
            GET(): Promise<telephony.TelephonyGenericService>;
            changeContact:  {
                // POST /telephony/trunks/{serviceName}/changeContact
                POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
            }
            serviceInfos:  {
                // GET /telephony/trunks/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /telephony/trunks/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
        } | any
    }
    aliases:  {
        // GET /telephony/aliases
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /telephony/aliases/{serviceName}
            GET(): Promise<telephony.TelephonyGenericService>;
            serviceInfos:  {
                // GET /telephony/aliases/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /telephony/aliases/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
            changeContact:  {
                // POST /telephony/aliases/{serviceName}/changeContact
                POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
            }
        } | any
    }
    availableDefaultSipDomains:  {
        // GET /telephony/availableDefaultSipDomains
        GET(param?: {type: telephony.SipDomainProductTypeEnum}): Promise<telephony.DefaultSipDomains[]>;
    }
    [keys: string]: {
        // GET /telephony/{billingAccount}
        GET(): Promise<telephony.BillingAccount>;
        // PUT /telephony/{billingAccount}
        PUT(body?: {body: telephony.BillingAccount}): Promise<void>;
        // DELETE /telephony/{billingAccount}
        DELETE(): Promise<void>;
        vxml:  {
            // GET /telephony/{billingAccount}/vxml
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/vxml/{serviceName}
                GET(): Promise<telephony.Vxml>;
                settings:  {
                    // GET /telephony/{billingAccount}/vxml/{serviceName}/settings
                    GET(): Promise<telephony.VxmlProperties>;
                    // PUT /telephony/{billingAccount}/vxml/{serviceName}/settings
                    PUT(body?: {body: telephony.VxmlProperties}): Promise<void>;
                    logs:  {
                        // POST /telephony/{billingAccount}/vxml/{serviceName}/settings/logs
                        POST(): Promise<telephony.TemporaryLogsLink>;
                    }
                }
            } | any
        }
        line:  {
            // GET /telephony/{billingAccount}/line
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/line/{serviceName}
                GET(): Promise<telephony.Line>;
                // PUT /telephony/{billingAccount}/line/{serviceName}
                PUT(body?: {body: telephony.Line}): Promise<void>;
                phoneCanBeAssociable:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/phoneCanBeAssociable
                    GET(): Promise<telephony.LinePhone[]>;
                }
                phone:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/phone
                    GET(): Promise<telephony.Phone>;
                    // PUT /telephony/{billingAccount}/line/{serviceName}/phone
                    PUT(body?: {body: telephony.Phone}): Promise<void>;
                    resetConfig:  {
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/resetConfig
                        POST(body?: {ip: string}): Promise<telephony.ResetPhoneInfo>;
                    }
                    functionKey:  {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/functionKey
                        GET(): Promise<number[]>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}
                            GET(): Promise<telephony.FunctionKey>;
                            // PUT /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}
                            PUT(body?: {body: telephony.FunctionKey}): Promise<void>;
                            availableFunction:  {
                                // GET /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}/availableFunction
                                GET(): Promise<string[]>;
                            }
                        } | any
                    }
                    adminCredentials:  {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/adminCredentials
                        GET(): Promise<telephony.PhoneCredentials>;
                    }
                    supportsPhonebook:  {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/supportsPhonebook
                        GET(): Promise<boolean>;
                    }
                    refreshScreen:  {
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/refreshScreen
                        POST(): Promise<telephony.Task>;
                    }
                    changePhoneConfiguration:  {
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration
                        POST(body?: {newConfigurations?: complexType.SafeKeyValue<string>[], autoReboot?: boolean}): Promise<void>;
                    }
                    phonebook:  {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook
                        GET(): Promise<string[]>;
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/phonebook
                        POST(body?: {name: string}): Promise<string>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                            GET(): Promise<telephony.Phonebook>;
                            // PUT /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                            PUT(body?: {body: telephony.Phonebook}): Promise<void>;
                            // DELETE /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                            DELETE(): Promise<void>;
                            phonebookContact:  {
                                // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact
                                GET(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact
                                POST(body?: {surname: string, workMobile?: string, homeMobile?: string, group: string, homePhone?: string, workPhone?: string, name: string}): Promise<number>;
                                [keys: string]: {
                                    // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                    GET(): Promise<telephony.PhonebookContact>;
                                    // PUT /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                    PUT(body?: {body: telephony.PhonebookContact}): Promise<void>;
                                    // DELETE /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                    DELETE(): Promise<void>;
                                } | any
                            }
                            export:  {
                                // GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export
                                GET(param?: {format: telephony.ContactsExportFormatsEnum}): Promise<telephony.PcsFile>;
                            }
                            import:  {
                                // POST /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/import
                                POST(body?: {documentId: string}): Promise<telephony.Task>;
                            }
                        } | any
                    }
                    reboot:  {
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/reboot
                        POST(): Promise<telephony.Task>;
                    }
                    rma:  {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/rma
                        GET(): Promise<string[]>;
                        // POST /telephony/{billingAccount}/line/{serviceName}/phone/rma
                        POST(body?: {newMerchandise?: string, mondialRelayId?: string, shippingContactId?: number, type: telephony.RmaPublicTypeEnum}): Promise<telephony.RmaReturn>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                            GET(): Promise<telephony.Rma>;
                            // PUT /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                            PUT(body?: {body: telephony.Rma}): Promise<void>;
                            // DELETE /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                            DELETE(): Promise<void>;
                        } | any
                    }
                    merchandiseAvailable:  {
                        // GET /telephony/{billingAccount}/line/{serviceName}/phone/merchandiseAvailable
                        GET(): Promise<telephony.HardwareOffer[]>;
                    }
                }
                changePassword:  {
                    // POST /telephony/{billingAccount}/line/{serviceName}/changePassword
                    POST(body?: {password?: string}): Promise<void>;
                }
                trafficExtracts:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/trafficExtracts
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/trafficExtracts
                    POST(body?: {dateEnd: string, dateStart: string}): Promise<telephony.trafficExtract>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}
                        GET(): Promise<telephony.trafficExtract>;
                        // DELETE /telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                unblock:  {
                    // POST /telephony/{billingAccount}/line/{serviceName}/unblock
                    POST(): Promise<void>;
                }
                canChangePassword:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/canChangePassword
                    GET(): Promise<boolean>;
                }
                ips:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/ips
                    GET(): Promise<telephony.DatetimeAndIpvalue[]>;
                }
                cancelConvertToNumber:  {
                    // POST /telephony/{billingAccount}/line/{serviceName}/cancelConvertToNumber
                    POST(): Promise<void>;
                }
                click2Call:  {
                    // POST /telephony/{billingAccount}/line/{serviceName}/click2Call
                    POST(body?: {intercom?: boolean, calledNumber: string, callingNumber?: string}): Promise<void>;
                }
                abbreviatedNumber:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber
                    POST(body?: {destinationNumber: string, name: string, surname: string, abbreviatedNumber: number}): Promise<telephony.AbbreviatedNumber>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                        GET(): Promise<telephony.AbbreviatedNumber>;
                        // PUT /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                        PUT(body?: {body: telephony.AbbreviatedNumber}): Promise<void>;
                        // DELETE /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                        DELETE(): Promise<void>;
                    } | any
                }
                antihack:  {
                    // POST /telephony/{billingAccount}/line/{serviceName}/antihack
                    POST(body?: {action: telephony.AntihackActionEnum, restricted?: string}): Promise<void>;
                    // GET /telephony/{billingAccount}/line/{serviceName}/antihack
                    GET(): Promise<string[]>;
                }
                automaticCall:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/automaticCall
                    GET(): Promise<string[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/automaticCall
                    POST(body?: {bridgeNumberDialplan?: string, playbackAudioFileDialplan?: string, timeout?: number, callingNumber?: string, dialplan: telephony.CallsGeneratorDialplanEnum, ttsTextDialplan?: string, calledNumber: string, isAnonymous: boolean}): Promise<string>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/automaticCall/{identifier}
                        GET(): Promise<telephony.CallsGenerated>;
                    } | any
                }
                removeSimultaneousLines:  {
                    // POST /telephony/{billingAccount}/line/{serviceName}/removeSimultaneousLines
                    POST(body?: {quantityRemove: number}): Promise<void>;
                }
                lastRegistrations:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/lastRegistrations
                    GET(): Promise<telephony.RegistrationInformations[]>;
                }
                block:  {
                    // POST /telephony/{billingAccount}/line/{serviceName}/block
                    POST(body?: {mode?: telephony.LineBlockingMode}): Promise<void>;
                }
                click2CallUser:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/click2CallUser
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser
                    POST(body?: {password: string, login: string}): Promise<number>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}
                        GET(): Promise<telephony.Click2CallUser>;
                        // DELETE /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}
                        DELETE(): Promise<void>;
                        changePassword:  {
                            // POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/changePassword
                            POST(body?: {password: string}): Promise<void>;
                        }
                        click2Call:  {
                            // POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call
                            POST(body?: {callingNumber?: string, calledNumber: string}): Promise<void>;
                        }
                    } | any
                }
                listAssociablePhones:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/listAssociablePhones
                    GET(): Promise<telephony.LinePhoneAssociable[]>;
                }
                maximumAvailableSimultaneousLines:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/maximumAvailableSimultaneousLines
                    GET(): Promise<number>;
                }
                offer:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/offer
                    GET(): Promise<telephony.LineOffer>;
                }
                options:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/options
                    GET(): Promise<telephony.LineOptions>;
                    // PUT /telephony/{billingAccount}/line/{serviceName}/options
                    PUT(body?: {body: telephony.LineOptions}): Promise<void>;
                    availableCodecs:  {
                        // GET /telephony/{billingAccount}/line/{serviceName}/options/availableCodecs
                        GET(): Promise<string[]>;
                    }
                    defaultCodecs:  {
                        // GET /telephony/{billingAccount}/line/{serviceName}/options/defaultCodecs
                        GET(): Promise<string>;
                    }
                }
                statistics:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/statistics
                    GET(param?: {timeframe: telephony.StatisticsTimeframeEnum, type: telephony.LineStatisticsTypeEnum}): Promise<complexType.UnitAndValues<telephony.TimestampAndValue>>;
                }
                calls:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/calls
                    GET(): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/calls/{id}
                        GET(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                        whisper:  {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper
                            POST(body?: {number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
                        }
                        intercept:  {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/intercept
                            POST(body?: {number: string}): Promise<telephony.Task>;
                        }
                        hangup:  {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/hangup
                            POST(): Promise<telephony.Task>;
                        }
                        transfer:  {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/transfer
                            POST(body?: {number: string}): Promise<telephony.Task>;
                        }
                        hold:  {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/hold
                            POST(): Promise<telephony.Task>;
                        }
                        eavesdrop:  {
                            // POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/eavesdrop
                            POST(body?: {number: string}): Promise<telephony.Task>;
                        }
                    } | any
                }
                convertToNumber:  {
                    // POST /telephony/{billingAccount}/line/{serviceName}/convertToNumber
                    POST(): Promise<telephony.OfferTask>;
                }
                tones:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/tones
                    GET(): Promise<telephony.Tones>;
                    // PUT /telephony/{billingAccount}/line/{serviceName}/tones
                    PUT(body?: {body: telephony.Tones}): Promise<void>;
                    toneUpload:  {
                        // POST /telephony/{billingAccount}/line/{serviceName}/tones/toneUpload
                        POST(body?: {url?: string, documentId?: string, type: telephony.TonesTypeEnum}): Promise<telephony.Task>;
                    }
                }
                activateNewPhone:  {
                    // POST /telephony/{billingAccount}/line/{serviceName}/activateNewPhone
                    POST(): Promise<void>;
                    // GET /telephony/{billingAccount}/line/{serviceName}/activateNewPhone
                    GET(): Promise<void>;
                }
                records:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/records
                    GET(): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/line/{serviceName}/records/{id}
                        GET(): Promise<telephony.OvhPabxRecord>;
                        // DELETE /telephony/{billingAccount}/line/{serviceName}/records/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                associateDevice:  {
                    // POST /telephony/{billingAccount}/line/{serviceName}/associateDevice
                    POST(body?: {macAddress: string, ipAddress?: string}): Promise<void>;
                }
                availableSipDomains:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/availableSipDomains
                    GET(): Promise<string[]>;
                }
                dissociateDevice:  {
                    // POST /telephony/{billingAccount}/line/{serviceName}/dissociateDevice
                    POST(body?: {macAddress: string, ipAddress?: string}): Promise<void>;
                }
                simultaneousChannelsDetails:  {
                    // GET /telephony/{billingAccount}/line/{serviceName}/simultaneousChannelsDetails
                    GET(): Promise<telephony.SimultaneousChannelsDetails>;
                }
            } | any
        }
        service:  {
            // GET /telephony/{billingAccount}/service
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/service/{serviceName}
                GET(): Promise<telephony.TelephonyService>;
                // PUT /telephony/{billingAccount}/service/{serviceName}
                PUT(body?: {body: telephony.TelephonyService}): Promise<void>;
                // DELETE /telephony/{billingAccount}/service/{serviceName}
                DELETE(): Promise<void>;
                directory:  {
                    // GET /telephony/{billingAccount}/service/{serviceName}/directory
                    GET(): Promise<telephony.DirectoryInfo>;
                    // PUT /telephony/{billingAccount}/service/{serviceName}/directory
                    PUT(body?: {body: telephony.DirectoryInfo}): Promise<void>;
                    fetchEntrepriseInformations:  {
                        // POST /telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations
                        POST(body?: {entrepriseNumber: string}): Promise<telephony.EntrepriseNumberInformationsTask>;
                    }
                    getWayTypes:  {
                        // GET /telephony/{billingAccount}/service/{serviceName}/directory/getWayTypes
                        GET(): Promise<telephony.DirectoryWayType[]>;
                    }
                    getDirectoryServiceCode:  {
                        // GET /telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode
                        GET(param?: {apeCode: string}): Promise<telephony.DirectoryHeadingPJ[]>;
                    }
                }
                previousVoiceConsumption:  {
                    // GET /telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption
                    GET(param?: {destinationType?: telephony.VoiceConsumptionDestinationTypeEnum, wayType?: telephony.VoiceConsumptionWayTypeEnum, creationDatetime_from?: string, creationDatetime_to?: string, planType?: telephony.VoiceConsumptionPlanTypeEnum}): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption/{consumptionId}
                        GET(): Promise<telephony.PreviousVoiceConsumption>;
                    } | any
                }
                repaymentConsumption:  {
                    // GET /telephony/{billingAccount}/service/{serviceName}/repaymentConsumption
                    GET(param?: {creationDatetime_from?: string, creationDatetime_to?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/service/{serviceName}/repaymentConsumption/{consumptionId}
                        GET(): Promise<telephony.RepaymentConsumption>;
                    } | any
                }
                faxConsumption:  {
                    // GET /telephony/{billingAccount}/service/{serviceName}/faxConsumption
                    GET(param?: {wayType?: telephony.FaxConsumptionWayTypeEnum, creationDatetime_from?: string, creationDatetime_to?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/service/{serviceName}/faxConsumption/{consumptionId}
                        GET(): Promise<telephony.FaxConsumption>;
                    } | any
                }
                changeOfBillingAccount:  {
                    // POST /telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount
                    POST(body?: {billingAccountDestination: string}): Promise<void>;
                }
                eventToken:  {
                    // GET /telephony/{billingAccount}/service/{serviceName}/eventToken
                    GET(): Promise<telephony.EventToken>;
                    // POST /telephony/{billingAccount}/service/{serviceName}/eventToken
                    POST(body?: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
                    // DELETE /telephony/{billingAccount}/service/{serviceName}/eventToken
                    DELETE(): Promise<void>;
                }
                diagnosticReports:  {
                    // GET /telephony/{billingAccount}/service/{serviceName}/diagnosticReports
                    GET(param?: {dayInterval: telephony.DiagnosticReportIndexEnum}): Promise<telephony.DiagnosticReport[]>;
                }
                offerChanges:  {
                    // GET /telephony/{billingAccount}/service/{serviceName}/offerChanges
                    GET(): Promise<telephony.LineOffer[]>;
                }
                offerTask:  {
                    // GET /telephony/{billingAccount}/service/{serviceName}/offerTask
                    GET(param?: {type?: telephony.OfferTaskTypeEnum, action?: telephony.OfferTaskActionEnum, status?: telephony.TaskStatusEnum}): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}
                        GET(): Promise<telephony.OfferTask>;
                        // PUT /telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}
                        PUT(body?: {body: telephony.OfferTask}): Promise<void>;
                    } | any
                }
                task:  {
                    // GET /telephony/{billingAccount}/service/{serviceName}/task
                    GET(param?: {serviceType?: string, action?: string, status?: telephony.TaskStatusEnum}): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/service/{serviceName}/task/{taskId}
                        GET(): Promise<telephony.Task>;
                    } | any
                }
                offerChange:  {
                    // GET /telephony/{billingAccount}/service/{serviceName}/offerChange
                    GET(): Promise<telephony.OfferChange>;
                    // POST /telephony/{billingAccount}/service/{serviceName}/offerChange
                    POST(body?: {offer: string}): Promise<void>;
                    // DELETE /telephony/{billingAccount}/service/{serviceName}/offerChange
                    DELETE(): Promise<void>;
                }
                cancelTermination:  {
                    // POST /telephony/{billingAccount}/service/{serviceName}/cancelTermination
                    POST(): Promise<void>;
                }
                voiceConsumption:  {
                    // GET /telephony/{billingAccount}/service/{serviceName}/voiceConsumption
                    GET(param?: {creationDatetime_from?: string, destinationType?: telephony.VoiceConsumptionDestinationTypeEnum, wayType?: telephony.VoiceConsumptionWayTypeEnum, planType?: telephony.VoiceConsumptionPlanTypeEnum, creationDatetime_to?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}
                        GET(): Promise<telephony.VoiceConsumption>;
                        callDiagnostics:  {
                            // GET /telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}/callDiagnostics
                            GET(): Promise<telephony.CallDiagnostics>;
                        }
                    } | any
                }
            } | any
        }
        transferSecurityDeposit:  {
            // POST /telephony/{billingAccount}/transferSecurityDeposit
            POST(body?: {billingAccountDestination: string, amount: number}): Promise<void>;
        }
        number:  {
            // GET /telephony/{billingAccount}/number
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/number/{serviceName}
                GET(): Promise<telephony.Number>;
                // PUT /telephony/{billingAccount}/number/{serviceName}
                PUT(body?: {body: telephony.Number}): Promise<void>;
                changeFeatureType:  {
                    // POST /telephony/{billingAccount}/number/{serviceName}/changeFeatureType
                    POST(body?: {featureType: telephony.TypeEnum}): Promise<telephony.Task>;
                }
                convertToLine:  {
                    // POST /telephony/{billingAccount}/number/{serviceName}/convertToLine
                    POST(body?: {offer: string}): Promise<telephony.OfferTask>;
                }
                convertToLineAvailableOffers:  {
                    // GET /telephony/{billingAccount}/number/{serviceName}/convertToLineAvailableOffers
                    GET(): Promise<telephony.LineOffersAndContracts>;
                }
                cancelConvertToLine:  {
                    // POST /telephony/{billingAccount}/number/{serviceName}/cancelConvertToLine
                    POST(): Promise<void>;
                }
            } | any
        }
        rsva:  {
            // GET /telephony/{billingAccount}/rsva
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/rsva/{serviceName}
                GET(): Promise<telephony.Rsva>;
                // PUT /telephony/{billingAccount}/rsva/{serviceName}
                PUT(body?: {body: telephony.Rsva}): Promise<void>;
                scheduleRateCode:  {
                    // POST /telephony/{billingAccount}/rsva/{serviceName}/scheduleRateCode
                    POST(body?: {rateCode: string}): Promise<telephony.DetailedRateCodeInformation>;
                }
                allowedRateCodes:  {
                    // GET /telephony/{billingAccount}/rsva/{serviceName}/allowedRateCodes
                    GET(): Promise<telephony.RateCodeInformation[]>;
                }
                cancelScheduledRateCode:  {
                    // POST /telephony/{billingAccount}/rsva/{serviceName}/cancelScheduledRateCode
                    POST(): Promise<void>;
                }
                currentRateCode:  {
                    // GET /telephony/{billingAccount}/rsva/{serviceName}/currentRateCode
                    GET(): Promise<telephony.DetailedRateCodeInformation>;
                }
                scheduledRateCode:  {
                    // GET /telephony/{billingAccount}/rsva/{serviceName}/scheduledRateCode
                    GET(): Promise<telephony.DetailedRateCodeInformation>;
                }
            } | any
        }
        ovhPabx:  {
            // GET /telephony/{billingAccount}/ovhPabx
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}
                GET(): Promise<telephony.OvhPabx>;
                // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}
                PUT(body?: {body: telephony.OvhPabx}): Promise<void>;
                records:  {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/records
                    GET(): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}
                        GET(): Promise<telephony.OvhPabxRecord>;
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                soundUpload:  {
                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/soundUpload
                    POST(body?: {name?: string, documentId?: string, url?: string}): Promise<telephony.Task>;
                }
                hunting:  {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting
                    GET(): Promise<telephony.OvhPabxHunting>;
                    // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting
                    PUT(body?: {body: telephony.OvhPabxHunting}): Promise<void>;
                    customStatus:  {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus
                        GET(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus
                        POST(body?: {color?: string, name: string, description?: string}): Promise<telephony.OvhPabxCustomStatus>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}
                            GET(): Promise<telephony.OvhPabxCustomStatus>;
                            // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}
                            DELETE(): Promise<void>;
                        } | any
                    }
                    agent:  {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent
                        GET(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent
                        POST(body?: {description?: string, status: telephony.OvhPabxHuntingAgentStatusEnum, wrapUpTime: number, simultaneousLines: number, timeout: number, number: string}): Promise<telephony.OvhPabxHuntingAgent>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                            GET(): Promise<telephony.OvhPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                            PUT(body?: {body: telephony.OvhPabxHuntingAgent}): Promise<void>;
                            // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                            DELETE(): Promise<void>;
                            bannerAccess:  {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                GET(): Promise<telephony.BannerAccess>;
                                // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                POST(): Promise<telephony.BannerAccess>;
                                // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                DELETE(): Promise<void>;
                            }
                            liveStatus:  {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/liveStatus
                                GET(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                            }
                            eventToken:  {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                GET(): Promise<telephony.EventToken>;
                                // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                POST(body?: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
                                // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                DELETE(): Promise<void>;
                            }
                            calls:  {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls
                                GET(): Promise<number[]>;
                                [keys: string]: {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}
                                    GET(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    eavesdrop:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                    intercept:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                    whisper:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper
                                        POST(body?: {number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
                                    }
                                    hangup:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup
                                        POST(): Promise<telephony.Task>;
                                    }
                                    transfer:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                    hold:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold
                                        POST(): Promise<telephony.Task>;
                                    }
                                } | any
                            }
                            queue:  {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue
                                GET(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue
                                POST(body?: {queueId: number, position: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                [keys: string]: {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    GET(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    PUT(body?: {body: telephony.OvhPabxHuntingAgentQueue}): Promise<void>;
                                    // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    DELETE(): Promise<void>;
                                    liveStatus:  {
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus
                                        GET(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                    }
                                } | any
                            }
                        } | any
                    }
                    eventToken:  {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken
                        GET(): Promise<telephony.EventToken>;
                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken
                        POST(body?: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken
                        DELETE(): Promise<void>;
                    }
                    queue:  {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue
                        GET(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue
                        POST(body?: {actionOnOverflowParam?: string, record?: boolean, strategy: telephony.OvhPabxHuntingQueueStrategyEnum, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, soundOnHold?: number, askForRecordDisabling?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, maxMember?: number, maxWaitTime?: number, actionOnClosure?: telephony.OvhPabxQueueActionEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, actionOnClosureParam?: string, description?: string}): Promise<telephony.OvhPabxHuntingQueue>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                            GET(): Promise<telephony.OvhPabxHuntingQueue>;
                            // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                            PUT(body?: {body: telephony.OvhPabxHuntingQueue}): Promise<void>;
                            // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                            DELETE(): Promise<void>;
                            liveCalls:  {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls
                                GET(): Promise<number[]>;
                                [keys: string]: {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}
                                    GET(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    transfer:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                    intercept:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                    whisper:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper
                                        POST(body?: {number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
                                    }
                                    hangup:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup
                                        POST(): Promise<telephony.Task>;
                                    }
                                    hold:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold
                                        POST(): Promise<telephony.Task>;
                                    }
                                    eavesdrop:  {
                                        // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                } | any
                            }
                            liveStatistics:  {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveStatistics
                                GET(): Promise<telephony.OvhPabxHuntingQueueLiveStatistics>;
                            }
                            agent:  {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent
                                GET(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent
                                POST(body?: {queueId: number, position: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                [keys: string]: {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    GET(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    PUT(body?: {body: telephony.OvhPabxHuntingAgentQueue}): Promise<void>;
                                    // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    DELETE(): Promise<void>;
                                    liveStatus:  {
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus
                                        GET(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                    }
                                } | any
                            }
                        } | any
                    }
                }
                tts:  {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/tts
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/tts
                    POST(body?: {text: string, voice?: telephony.OvhPabxTtsVoiceEnum}): Promise<void>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                        GET(): Promise<telephony.OvhPabxTts>;
                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                        PUT(body?: {body: telephony.OvhPabxTts}): Promise<void>;
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                menu:  {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/menu
                    POST(body?: {invalidSound?: number, greetSoundTts?: number, greetSound?: number, name: string, invalidSoundTts?: number}): Promise<telephony.OvhPabxMenu>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                        GET(): Promise<telephony.OvhPabxMenu>;
                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                        PUT(body?: {body: telephony.OvhPabxMenu}): Promise<void>;
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                        DELETE(): Promise<void>;
                        entry:  {
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry
                            GET(): Promise<number[]>;
                            // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry
                            POST(body?: {actionParam?: string, action: telephony.OvhPabxIvrMenuEntryActionEnum, position: number, dtmf: string}): Promise<telephony.OvhPabxMenuEntry>;
                            [keys: string]: {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                GET(): Promise<telephony.OvhPabxMenuEntry>;
                                // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                PUT(body?: {body: telephony.OvhPabxMenuEntry}): Promise<void>;
                                // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                DELETE(): Promise<void>;
                            } | any
                        }
                    } | any
                }
                sound:  {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/sound
                    GET(): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}
                        GET(): Promise<telephony.OvhPabxSound>;
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}
                        DELETE(): Promise<void>;
                    } | any
                }
                dialplan:  {
                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan
                    POST(body?: {showCallerNumber: telephony.OvhPabxDialplanNumberPresentationEnum, transferTimeout: number, name: string, anonymousRejection: boolean}): Promise<telephony.OvhPabxDialplan>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                        GET(): Promise<telephony.OvhPabxDialplan>;
                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                        PUT(body?: {body: telephony.OvhPabxDialplan}): Promise<void>;
                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                        DELETE(): Promise<void>;
                        extension:  {
                            // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension
                            GET(): Promise<number[]>;
                            // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension
                            POST(body?: {screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum, schedulerCategory?: telephony.SchedulerCategoryEnum, position: number, enable: boolean}): Promise<telephony.OvhPabxDialplanExtension>;
                            [keys: string]: {
                                // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                GET(): Promise<telephony.OvhPabxDialplanExtension>;
                                // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                PUT(body?: {body: telephony.OvhPabxDialplanExtension}): Promise<void>;
                                // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                DELETE(): Promise<void>;
                                conditionScreenList:  {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList
                                    GET(): Promise<number[]>;
                                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList
                                    POST(body?: {screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum, callerIdNumber?: string, destinationNumber?: string}): Promise<telephony.OvhPabxDialplanExtensionConditionScreenList>;
                                    [keys: string]: {
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}
                                        GET(): Promise<telephony.OvhPabxDialplanExtensionConditionScreenList>;
                                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}
                                        DELETE(): Promise<void>;
                                    } | any
                                }
                                rule:  {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule
                                    GET(): Promise<number[]>;
                                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule
                                    POST(body?: {negativeAction: boolean, position: number, actionParam?: string, action: telephony.OvhPabxDialplanExtensionRuleActionEnum}): Promise<telephony.OvhPabxDialplanExtensionRule>;
                                    [keys: string]: {
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                        GET(): Promise<telephony.OvhPabxDialplanExtensionRule>;
                                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                        PUT(body?: {body: telephony.OvhPabxDialplanExtensionRule}): Promise<void>;
                                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                        DELETE(): Promise<void>;
                                    } | any
                                }
                                conditionTime:  {
                                    // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime
                                    GET(): Promise<number[]>;
                                    // POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime
                                    POST(body?: {timeFrom: string, weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum, timeTo: string}): Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
                                    [keys: string]: {
                                        // GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                        GET(): Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
                                        // PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                        PUT(body?: {body: telephony.OvhPabxDialplanExtensionConditionTime}): Promise<void>;
                                        // DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                        DELETE(): Promise<void>;
                                    } | any
                                }
                            } | any
                        }
                    } | any
                }
            } | any
        }
        serviceInfos:  {
            // GET /telephony/{billingAccount}/serviceInfos
            GET(): Promise<services.Service>;
            // PUT /telephony/{billingAccount}/serviceInfos
            PUT(body?: {body: services.Service}): Promise<void>;
        }
        canTransferSecurityDeposit:  {
            // POST /telephony/{billingAccount}/canTransferSecurityDeposit
            POST(body?: {billingAccountDestination: string}): Promise<boolean>;
        }
        voicemail:  {
            // GET /telephony/{billingAccount}/voicemail
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/voicemail/{serviceName}
                GET(): Promise<telephony.Voicemail>;
                // PUT /telephony/{billingAccount}/voicemail/{serviceName}
                PUT(body?: {body: telephony.Voicemail}): Promise<void>;
                greetings:  {
                    // GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings
                    GET(param?: {dir?: telephony.VoicemailMessageFolderGreetingEnum}): Promise<number[]>;
                    // POST /telephony/{billingAccount}/voicemail/{serviceName}/greetings
                    POST(body?: {documentId: string, dir: telephony.VoicemailMessageFolderGreetingEnum}): Promise<number>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}
                        GET(): Promise<telephony.VoicemailGreetings>;
                        // DELETE /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}
                        DELETE(): Promise<void>;
                        move:  {
                            // POST /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move
                            POST(body?: {dir: telephony.VoicemailMessageFolderGreetingEnum}): Promise<void>;
                        }
                        download:  {
                            // GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/download
                            GET(param?: {format?: telephony.ServiceVoicemailAudioFormatEnum}): Promise<telephony.PcsFile>;
                        }
                    } | any
                }
                migrateOnNewVersion:  {
                    // POST /telephony/{billingAccount}/voicemail/{serviceName}/migrateOnNewVersion
                    POST(): Promise<void>;
                }
                settings:  {
                    // GET /telephony/{billingAccount}/voicemail/{serviceName}/settings
                    GET(): Promise<telephony.VoicemailProperties>;
                    // PUT /telephony/{billingAccount}/voicemail/{serviceName}/settings
                    PUT(body?: {body: telephony.VoicemailProperties}): Promise<void>;
                    changeRouting:  {
                        // POST /telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting
                        POST(body?: {routing: telephony.VoicefaxRoutingEnum}): Promise<void>;
                    }
                    routing:  {
                        // GET /telephony/{billingAccount}/voicemail/{serviceName}/settings/routing
                        GET(): Promise<telephony.VoicefaxRoutingEnum>;
                    }
                    changePassword:  {
                        // POST /telephony/{billingAccount}/voicemail/{serviceName}/settings/changePassword
                        POST(body?: {password: string}): Promise<void>;
                    }
                    voicemailNumbers:  {
                        // GET /telephony/{billingAccount}/voicemail/{serviceName}/settings/voicemailNumbers
                        GET(): Promise<telephony.VoicemailNumbers>;
                    }
                }
                directories:  {
                    // GET /telephony/{billingAccount}/voicemail/{serviceName}/directories
                    GET(param?: {dir?: telephony.VoicemailMessageFolderDirectoryEnum}): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}
                        GET(): Promise<telephony.VoicemailMessages>;
                        // DELETE /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}
                        DELETE(): Promise<void>;
                        move:  {
                            // POST /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/move
                            POST(body?: {dir: telephony.VoicemailMessageFolderDirectoryEnum}): Promise<void>;
                        }
                        download:  {
                            // GET /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/download
                            GET(param?: {format?: telephony.ServiceVoicemailAudioFormatEnum}): Promise<telephony.PcsFile>;
                        }
                    } | any
                }
            } | any
        }
        cancelTermination:  {
            // POST /telephony/{billingAccount}/cancelTermination
            POST(): Promise<void>;
        }
        offerTask:  {
            // GET /telephony/{billingAccount}/offerTask
            GET(param?: {type?: telephony.OfferTaskTypeEnum, status?: telephony.TaskStatusEnum, action?: telephony.OfferTaskActionEnum}): Promise<number[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/offerTask/{taskId}
                GET(): Promise<telephony.OfferTask>;
                // PUT /telephony/{billingAccount}/offerTask/{taskId}
                PUT(body?: {body: telephony.OfferTask}): Promise<void>;
            } | any
        }
        eventToken:  {
            // GET /telephony/{billingAccount}/eventToken
            GET(): Promise<telephony.EventToken>;
            // POST /telephony/{billingAccount}/eventToken
            POST(body?: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
            // DELETE /telephony/{billingAccount}/eventToken
            DELETE(): Promise<void>;
        }
        fax:  {
            // GET /telephony/{billingAccount}/fax
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/fax/{serviceName}
                GET(): Promise<telephony.Fax>;
                // PUT /telephony/{billingAccount}/fax/{serviceName}
                PUT(body?: {body: telephony.Fax}): Promise<void>;
                campaigns:  {
                    // GET /telephony/{billingAccount}/fax/{serviceName}/campaigns
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/fax/{serviceName}/campaigns
                    POST(body?: {faxQuality?: telephony.FaxQualityEnum, sendDate?: string, documentId: string, sendType: telephony.FaxCampaignSendTypeEnum, recipientsType: telephony.FaxCampaignRecipientsTypeEnum, name: string, recipientsDocId?: string, recipientsList?: string[]}): Promise<telephony.FaxCampaign>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}
                        GET(): Promise<telephony.FaxCampaign>;
                        // DELETE /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}
                        DELETE(): Promise<void>;
                        detail:  {
                            // GET /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/detail
                            GET(): Promise<telephony.FaxCampaignDetail>;
                        }
                        stop:  {
                            // POST /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/stop
                            POST(): Promise<void>;
                        }
                        start:  {
                            // POST /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/start
                            POST(): Promise<void>;
                        }
                    } | any
                }
                screenLists:  {
                    // GET /telephony/{billingAccount}/fax/{serviceName}/screenLists
                    GET(): Promise<telephony.FaxScreen>;
                    // PUT /telephony/{billingAccount}/fax/{serviceName}/screenLists
                    PUT(body?: {body: telephony.FaxScreen}): Promise<void>;
                    // POST /telephony/{billingAccount}/fax/{serviceName}/screenLists
                    POST(body?: {whitelistedNumbers?: string[], filteringList?: telephony.FaxScreenListTypeEnum, blacklistedTSI?: string[], whitelistedTSI?: string[], blacklistedNumbers?: string[]}): Promise<telephony.FaxScreen>;
                    // DELETE /telephony/{billingAccount}/fax/{serviceName}/screenLists
                    DELETE(): Promise<void>;
                    reset:  {
                        // POST /telephony/{billingAccount}/fax/{serviceName}/screenLists/reset
                        POST(body?: {whitelistedNumbers?: boolean, blacklistedTSI?: boolean, whitelistedTSI?: boolean, blacklistedNumbers?: boolean}): Promise<void>;
                    }
                }
                settings:  {
                    // GET /telephony/{billingAccount}/fax/{serviceName}/settings
                    GET(): Promise<telephony.FaxProperties>;
                    // PUT /telephony/{billingAccount}/fax/{serviceName}/settings
                    PUT(body?: {body: telephony.FaxProperties}): Promise<void>;
                    changePassword:  {
                        // POST /telephony/{billingAccount}/fax/{serviceName}/settings/changePassword
                        POST(body?: {password?: string}): Promise<string>;
                    }
                    sendFax:  {
                        // POST /telephony/{billingAccount}/fax/{serviceName}/settings/sendFax
                        POST(body?: {dateSchedule?: string, recipients: string[], pdfUrl: string}): Promise<telephony.Task>;
                    }
                }
            } | any
        }
        redirect:  {
            // GET /telephony/{billingAccount}/redirect
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/redirect/{serviceName}
                GET(): Promise<telephony.Redirect>;
                // PUT /telephony/{billingAccount}/redirect/{serviceName}
                PUT(body?: {body: telephony.Redirect}): Promise<void>;
                changeDestination:  {
                    // POST /telephony/{billingAccount}/redirect/{serviceName}/changeDestination
                    POST(body?: {destination: string}): Promise<telephony.Task>;
                }
            } | any
        }
        easyPabx:  {
            // GET /telephony/{billingAccount}/easyPabx
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/easyPabx/{serviceName}
                GET(): Promise<telephony.EasyPabx>;
                // PUT /telephony/{billingAccount}/easyPabx/{serviceName}
                PUT(body?: {body: telephony.EasyPabx}): Promise<void>;
                hunting:  {
                    // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting
                    GET(): Promise<telephony.EasyPabxHunting>;
                    // PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting
                    PUT(body?: {body: telephony.EasyPabxHunting}): Promise<void>;
                    tones:  {
                        // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones
                        GET(): Promise<telephony.Tones>;
                        // PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones
                        PUT(body?: {body: telephony.Tones}): Promise<void>;
                        toneUpload:  {
                            // POST /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones/toneUpload
                            POST(body?: {url?: string, documentId?: string, type: telephony.TonesTypeEnum}): Promise<telephony.Task>;
                        }
                    }
                    agent:  {
                        // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent
                        GET(): Promise<string[]>;
                        // POST /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent
                        POST(body?: {position: number, noReplyTimer: number, logged: boolean, agentNumber: string}): Promise<telephony.EasyMiniPabxHuntingAgent>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                            GET(): Promise<telephony.EasyMiniPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                            PUT(body?: {body: telephony.EasyMiniPabxHuntingAgent}): Promise<void>;
                            // DELETE /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                            DELETE(): Promise<void>;
                        } | any
                    }
                }
            } | any
        }
        miniPabx:  {
            // GET /telephony/{billingAccount}/miniPabx
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/miniPabx/{serviceName}
                GET(): Promise<telephony.MiniPabx>;
                // PUT /telephony/{billingAccount}/miniPabx/{serviceName}
                PUT(body?: {body: telephony.MiniPabx}): Promise<void>;
                hunting:  {
                    // GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting
                    GET(): Promise<telephony.MiniPabxHunting>;
                    // PUT /telephony/{billingAccount}/miniPabx/{serviceName}/hunting
                    PUT(body?: {body: telephony.MiniPabxHunting}): Promise<void>;
                    agent:  {
                        // GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent
                        GET(): Promise<string[]>;
                        // POST /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent
                        POST(body?: {position: number, noReplyTimer: number, logged: boolean, agentNumber: string}): Promise<telephony.EasyMiniPabxHuntingAgent>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                            GET(): Promise<telephony.EasyMiniPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                            PUT(body?: {body: telephony.EasyMiniPabxHuntingAgent}): Promise<void>;
                            // DELETE /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                            DELETE(): Promise<void>;
                        } | any
                    }
                }
                tones:  {
                    // GET /telephony/{billingAccount}/miniPabx/{serviceName}/tones
                    GET(): Promise<telephony.Tones>;
                    // PUT /telephony/{billingAccount}/miniPabx/{serviceName}/tones
                    PUT(body?: {body: telephony.Tones}): Promise<void>;
                    toneUpload:  {
                        // POST /telephony/{billingAccount}/miniPabx/{serviceName}/tones/toneUpload
                        POST(body?: {url?: string, documentId?: string, type: telephony.TonesTypeEnum}): Promise<telephony.Task>;
                    }
                }
            } | any
        }
        trunk:  {
            // GET /telephony/{billingAccount}/trunk
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/trunk/{serviceName}
                GET(): Promise<telephony.Trunk>;
                externalDisplayedNumber:  {
                    // GET /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber
                    GET(): Promise<string[]>;
                    // POST /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber
                    POST(body?: {number: string, autoValidation?: boolean}): Promise<telephony.TrunkExternalDisplayedNumber>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}
                        GET(): Promise<telephony.TrunkExternalDisplayedNumber>;
                        // DELETE /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}
                        DELETE(): Promise<void>;
                        validate:  {
                            // POST /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}/validate
                            POST(): Promise<telephony.TrunkExternalDisplayedNumberValidation>;
                        }
                    } | any
                }
                channelsPacksRepartition:  {
                    // GET /telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition
                    GET(param?: {quantity: number}): Promise<telephony.TrunkSimultaneousPacksRepartition>;
                }
            } | any
        }
        oldPhone:  {
            // GET /telephony/{billingAccount}/oldPhone
            GET(): Promise<telephony.Phone[]>;
        }
        task:  {
            // GET /telephony/{billingAccount}/task
            GET(param?: {status?: telephony.TaskStatusEnum, action?: string, serviceType?: string}): Promise<number[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/task/{taskId}
                GET(): Promise<telephony.Task>;
            } | any
        }
        ddi:  {
            // GET /telephony/{billingAccount}/ddi
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/ddi/{serviceName}
                GET(): Promise<telephony.Ddi>;
                // PUT /telephony/{billingAccount}/ddi/{serviceName}
                PUT(body?: {body: telephony.Ddi}): Promise<void>;
                changeDestination:  {
                    // POST /telephony/{billingAccount}/ddi/{serviceName}/changeDestination
                    POST(body?: {destination: string}): Promise<telephony.Task>;
                }
            } | any
        }
        screen:  {
            // GET /telephony/{billingAccount}/screen
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/screen/{serviceName}
                GET(): Promise<telephony.Screen>;
                // PUT /telephony/{billingAccount}/screen/{serviceName}
                PUT(body?: {body: telephony.Screen}): Promise<void>;
                screenLists:  {
                    // GET /telephony/{billingAccount}/screen/{serviceName}/screenLists
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/screen/{serviceName}/screenLists
                    POST(body?: {callNumber?: string, type: telephony.ScreenListTypeEnum, nature: telephony.ScreenListNatureEnum}): Promise<void>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}
                        GET(): Promise<telephony.ScreenList>;
                        // DELETE /telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
            } | any
        }
        historyRepaymentConsumption:  {
            // GET /telephony/{billingAccount}/historyRepaymentConsumption
            GET(): Promise<string[]>;
            // POST /telephony/{billingAccount}/historyRepaymentConsumption
            POST(body?: {billingNumber?: string}): Promise<telephony.HistoryRepaymentConsumption>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/historyRepaymentConsumption/{date}
                GET(): Promise<telephony.HistoryRepaymentConsumption>;
                document:  {
                    // GET /telephony/{billingAccount}/historyRepaymentConsumption/{date}/document
                    GET(): Promise<telephony.PcsFile>;
                }
            } | any
        }
        allowedCreditThreshold:  {
            // GET /telephony/{billingAccount}/allowedCreditThreshold
            GET(): Promise<order.Price[]>;
        }
        easyHunting:  {
            // GET /telephony/{billingAccount}/easyHunting
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/easyHunting/{serviceName}
                GET(): Promise<telephony.EasyHunting>;
                // PUT /telephony/{billingAccount}/easyHunting/{serviceName}
                PUT(body?: {body: telephony.EasyHunting}): Promise<void>;
                sound:  {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/sound
                    GET(): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}
                        GET(): Promise<telephony.OvhPabxSound>;
                        // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}
                        DELETE(): Promise<void>;
                    } | any
                }
                hunting:  {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting
                    GET(): Promise<telephony.OvhPabxHunting>;
                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting
                    PUT(body?: {body: telephony.OvhPabxHunting}): Promise<void>;
                    queue:  {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue
                        GET(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue
                        POST(body?: {actionOnOverflowParam?: string, record?: boolean, strategy: telephony.OvhPabxHuntingQueueStrategyEnum, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, soundOnHold?: number, askForRecordDisabling?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, maxMember?: number, maxWaitTime?: number, actionOnClosure?: telephony.OvhPabxQueueActionEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, actionOnClosureParam?: string, description?: string}): Promise<telephony.OvhPabxHuntingQueue>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                            GET(): Promise<telephony.OvhPabxHuntingQueue>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                            PUT(body?: {body: telephony.OvhPabxHuntingQueue}): Promise<void>;
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                            DELETE(): Promise<void>;
                            liveCalls:  {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls
                                GET(): Promise<number[]>;
                                [keys: string]: {
                                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}
                                    GET(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    whisper:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper
                                        POST(body?: {number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
                                    }
                                    intercept:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                    hangup:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup
                                        POST(): Promise<telephony.Task>;
                                    }
                                    transfer:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                    hold:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold
                                        POST(): Promise<telephony.Task>;
                                    }
                                    eavesdrop:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                } | any
                            }
                            liveStatistics:  {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveStatistics
                                GET(): Promise<telephony.OvhPabxHuntingQueueLiveStatistics>;
                            }
                            agent:  {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent
                                GET(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent
                                POST(body?: {queueId: number, position: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                [keys: string]: {
                                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    GET(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    PUT(body?: {body: telephony.OvhPabxHuntingAgentQueue}): Promise<void>;
                                    // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                    DELETE(): Promise<void>;
                                    liveStatus:  {
                                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus
                                        GET(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                    }
                                } | any
                            }
                        } | any
                    }
                    agent:  {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent
                        GET(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent
                        POST(body?: {description?: string, status: telephony.OvhPabxHuntingAgentStatusEnum, wrapUpTime: number, simultaneousLines: number, timeout: number, number: string}): Promise<telephony.OvhPabxHuntingAgent>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                            GET(): Promise<telephony.OvhPabxHuntingAgent>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                            PUT(body?: {body: telephony.OvhPabxHuntingAgent}): Promise<void>;
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                            DELETE(): Promise<void>;
                            eventToken:  {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                GET(): Promise<telephony.EventToken>;
                                // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                POST(body?: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
                                // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                DELETE(): Promise<void>;
                            }
                            bannerAccess:  {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                GET(): Promise<telephony.BannerAccess>;
                                // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                POST(): Promise<telephony.BannerAccess>;
                                // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                DELETE(): Promise<void>;
                            }
                            liveStatus:  {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/liveStatus
                                GET(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                            }
                            queue:  {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue
                                GET(): Promise<number[]>;
                                // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue
                                POST(body?: {queueId: number, position: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                [keys: string]: {
                                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    GET(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    PUT(body?: {body: telephony.OvhPabxHuntingAgentQueue}): Promise<void>;
                                    // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                    DELETE(): Promise<void>;
                                    liveStatus:  {
                                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus
                                        GET(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                    }
                                } | any
                            }
                            calls:  {
                                // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls
                                GET(): Promise<number[]>;
                                [keys: string]: {
                                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}
                                    GET(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    transfer:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                    hangup:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup
                                        POST(): Promise<telephony.Task>;
                                    }
                                    intercept:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                    whisper:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper
                                        POST(body?: {number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
                                    }
                                    hold:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold
                                        POST(): Promise<telephony.Task>;
                                    }
                                    eavesdrop:  {
                                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop
                                        POST(body?: {number: string}): Promise<telephony.Task>;
                                    }
                                } | any
                            }
                        } | any
                    }
                    customStatus:  {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus
                        GET(): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus
                        POST(body?: {color?: string, name: string, description?: string}): Promise<telephony.OvhPabxCustomStatus>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}
                            GET(): Promise<telephony.OvhPabxCustomStatus>;
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}
                            DELETE(): Promise<void>;
                        } | any
                    }
                    eventToken:  {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken
                        GET(): Promise<telephony.EventToken>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken
                        POST(body?: {expiration: telephony.TokenExpirationEnum}): Promise<string>;
                        // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken
                        DELETE(): Promise<void>;
                    }
                }
                soundUpload:  {
                    // POST /telephony/{billingAccount}/easyHunting/{serviceName}/soundUpload
                    POST(body?: {name?: string, url?: string, documentId?: string}): Promise<telephony.Task>;
                }
                screenListConditions:  {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions
                    GET(): Promise<telephony.EasyHuntingScreenListsConditionsSettings>;
                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions
                    PUT(body?: {body: telephony.EasyHuntingScreenListsConditionsSettings}): Promise<void>;
                    conditions:  {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions
                        GET(param?: {screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions
                        POST(body?: {screenListType: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum, callerIdNumber?: string, destinationNumber?: string}): Promise<telephony.EasyHuntingScreenListsConditions>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                            GET(): Promise<telephony.EasyHuntingScreenListsConditions>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                            PUT(body?: {body: telephony.EasyHuntingScreenListsConditions}): Promise<void>;
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                            DELETE(): Promise<void>;
                        } | any
                    }
                }
                timeConditions:  {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions
                    GET(): Promise<telephony.EasyHuntingTimeConditionsSettings>;
                    // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions
                    PUT(body?: {body: telephony.EasyHuntingTimeConditionsSettings}): Promise<void>;
                    conditions:  {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions
                        GET(param?: {policy?: telephony.TimeConditionsPolicyEnum}): Promise<number[]>;
                        // POST /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions
                        POST(body?: {policy: telephony.TimeConditionsPolicyEnum, timeTo: string, weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum, timeFrom: string}): Promise<telephony.EasyHuntingTimeConditions>;
                        [keys: string]: {
                            // GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                            GET(): Promise<telephony.EasyHuntingTimeConditions>;
                            // PUT /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                            PUT(body?: {body: telephony.EasyHuntingTimeConditions}): Promise<void>;
                            // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                            DELETE(): Promise<void>;
                        } | any
                    }
                }
                records:  {
                    // GET /telephony/{billingAccount}/easyHunting/{serviceName}/records
                    GET(): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}
                        GET(): Promise<telephony.OvhPabxRecord>;
                        // DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
            } | any
        }
        phonebook:  {
            // GET /telephony/{billingAccount}/phonebook
            GET(): Promise<string[]>;
            // POST /telephony/{billingAccount}/phonebook
            POST(body?: {name: string}): Promise<string>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/phonebook/{bookKey}
                GET(): Promise<telephony.PhonebookMaster>;
                // PUT /telephony/{billingAccount}/phonebook/{bookKey}
                PUT(body?: {body: telephony.PhonebookMaster}): Promise<void>;
                // DELETE /telephony/{billingAccount}/phonebook/{bookKey}
                DELETE(): Promise<void>;
                phonebookContact:  {
                    // GET /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact
                    POST(body?: {surname: string, workMobile?: string, homeMobile?: string, group: string, homePhone?: string, workPhone?: string, name: string}): Promise<number>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                        GET(): Promise<telephony.PhonebookContact>;
                        // PUT /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                        PUT(body?: {body: telephony.PhonebookContact}): Promise<void>;
                        // DELETE /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                export:  {
                    // GET /telephony/{billingAccount}/phonebook/{bookKey}/export
                    GET(param?: {format: telephony.ContactsExportFormatsEnum}): Promise<telephony.PcsFile>;
                }
                import:  {
                    // POST /telephony/{billingAccount}/phonebook/{bookKey}/import
                    POST(body?: {documentId: string}): Promise<telephony.Task>;
                }
            } | any
        }
        conference:  {
            // GET /telephony/{billingAccount}/conference
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/conference/{serviceName}
                GET(): Promise<telephony.Conference>;
                settings:  {
                    // GET /telephony/{billingAccount}/conference/{serviceName}/settings
                    GET(): Promise<telephony.ConferenceProperties>;
                    // PUT /telephony/{billingAccount}/conference/{serviceName}/settings
                    PUT(body?: {body: telephony.ConferenceProperties}): Promise<void>;
                }
                informations:  {
                    // GET /telephony/{billingAccount}/conference/{serviceName}/informations
                    GET(): Promise<telephony.ConferenceInformations>;
                }
                participants:  {
                    // GET /telephony/{billingAccount}/conference/{serviceName}/participants
                    GET(): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/conference/{serviceName}/participants/{id}
                        GET(): Promise<telephony.ConferenceParticipants>;
                        deaf:  {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/deaf
                            POST(): Promise<telephony.Task>;
                        }
                        mute:  {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/mute
                            POST(): Promise<telephony.Task>;
                        }
                        undeaf:  {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/undeaf
                            POST(): Promise<telephony.Task>;
                        }
                        unmute:  {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/unmute
                            POST(): Promise<telephony.Task>;
                        }
                        energy:  {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/energy
                            POST(body?: {value: number}): Promise<telephony.Task>;
                        }
                        kick:  {
                            // POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/kick
                            POST(): Promise<telephony.Task>;
                        }
                    } | any
                }
                lock:  {
                    // POST /telephony/{billingAccount}/conference/{serviceName}/lock
                    POST(): Promise<telephony.Task>;
                }
                unlock:  {
                    // POST /telephony/{billingAccount}/conference/{serviceName}/unlock
                    POST(): Promise<telephony.Task>;
                }
                announceUpload:  {
                    // POST /telephony/{billingAccount}/conference/{serviceName}/announceUpload
                    POST(body?: {documentId: string}): Promise<telephony.Task>;
                }
                histories:  {
                    // GET /telephony/{billingAccount}/conference/{serviceName}/histories
                    GET(): Promise<number[]>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/conference/{serviceName}/histories/{id}
                        GET(): Promise<telephony.ConferenceHistory>;
                    } | any
                }
                webAccess:  {
                    // GET /telephony/{billingAccount}/conference/{serviceName}/webAccess
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/conference/{serviceName}/webAccess
                    POST(body?: {type: telephony.ConferenceWebAccessTypeEnum}): Promise<telephony.ConferenceWebAccess>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}
                        GET(): Promise<telephony.ConferenceWebAccess>;
                        // DELETE /telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
            } | any
        }
        changeContact:  {
            // POST /telephony/{billingAccount}/changeContact
            POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
        }
        timeCondition:  {
            // GET /telephony/{billingAccount}/timeCondition
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/timeCondition/{serviceName}
                GET(): Promise<telephony.GenericScreen>;
                condition:  {
                    // GET /telephony/{billingAccount}/timeCondition/{serviceName}/condition
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/timeCondition/{serviceName}/condition
                    POST(body?: {day: telephony.TimeConditionsDayEnum, hourEnd: string, hourBegin: string, policy: telephony.TimeConditionsPolicyEnum}): Promise<telephony.TimeCondition>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                        GET(): Promise<telephony.TimeCondition>;
                        // PUT /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                        PUT(body?: {body: telephony.TimeCondition}): Promise<void>;
                        // DELETE /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                        DELETE(): Promise<void>;
                    } | any
                }
                options:  {
                    // GET /telephony/{billingAccount}/timeCondition/{serviceName}/options
                    GET(): Promise<telephony.TimeConditionOptions>;
                    // PUT /telephony/{billingAccount}/timeCondition/{serviceName}/options
                    PUT(body?: {body: telephony.TimeConditionOptions}): Promise<void>;
                }
            } | any
        }
        amountSecurityDeposit:  {
            // GET /telephony/{billingAccount}/amountSecurityDeposit
            GET(): Promise<order.Price[]>;
        }
        billingAccountSite:  {
            // POST /telephony/{billingAccount}/billingAccountSite
            POST(body?: {billingAccountSite: string}): Promise<void>;
            // GET /telephony/{billingAccount}/billingAccountSite
            GET(): Promise<string>;
        }
        historyTollfreeConsumption:  {
            // GET /telephony/{billingAccount}/historyTollfreeConsumption
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/historyTollfreeConsumption/{date}
                GET(): Promise<telephony.HistoryTollfreeConsumption>;
                document:  {
                    // GET /telephony/{billingAccount}/historyTollfreeConsumption/{date}/document
                    GET(): Promise<telephony.PcsFile>;
                }
            } | any
        }
        outplanNotification:  {
            // GET /telephony/{billingAccount}/outplanNotification
            GET(): Promise<number[]>;
            // POST /telephony/{billingAccount}/outplanNotification
            POST(body?: {block: telephony.OutplanNotificationBlockEnum, percentage: number, notifyEmail?: string}): Promise<telephony.ConsumptionThreshold>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/outplanNotification/{id}
                GET(): Promise<telephony.ConsumptionThreshold>;
                // DELETE /telephony/{billingAccount}/outplanNotification/{id}
                DELETE(): Promise<void>;
            } | any
        }
        historyConsumption:  {
            // GET /telephony/{billingAccount}/historyConsumption
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/historyConsumption/{date}
                GET(): Promise<telephony.HistoryConsumption>;
                file:  {
                    // GET /telephony/{billingAccount}/historyConsumption/{date}/file
                    GET(param?: {extension: telephony.BillDocument}): Promise<telephony.PcsFile>;
                }
            } | any
        }
        portability:  {
            // GET /telephony/{billingAccount}/portability
            GET(): Promise<number[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/portability/{id}
                GET(): Promise<telephony.Portability>;
                canBeExecuted:  {
                    // GET /telephony/{billingAccount}/portability/{id}/canBeExecuted
                    GET(): Promise<boolean>;
                }
                canBeCancelled:  {
                    // GET /telephony/{billingAccount}/portability/{id}/canBeCancelled
                    GET(): Promise<boolean>;
                }
                dateCanBeChanged:  {
                    // GET /telephony/{billingAccount}/portability/{id}/dateCanBeChanged
                    GET(): Promise<boolean>;
                }
                execute:  {
                    // POST /telephony/{billingAccount}/portability/{id}/execute
                    POST(): Promise<void>;
                }
                document:  {
                    // GET /telephony/{billingAccount}/portability/{id}/document
                    GET(): Promise<number[]>;
                    // POST /telephony/{billingAccount}/portability/{id}/document
                    POST(body?: {name: string, description?: string}): Promise<telephony.PortabilityDocument>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/portability/{id}/document/{documentId}
                        GET(): Promise<telephony.PortabilityDocument>;
                        // PUT /telephony/{billingAccount}/portability/{id}/document/{documentId}
                        PUT(body?: {body: telephony.PortabilityDocument}): Promise<void>;
                        // DELETE /telephony/{billingAccount}/portability/{id}/document/{documentId}
                        DELETE(): Promise<void>;
                    } | any
                }
                relaunch:  {
                    // POST /telephony/{billingAccount}/portability/{id}/relaunch
                    POST(body?: {parameters: complexType.SafeKeyValue<string>[]}): Promise<void>;
                    // GET /telephony/{billingAccount}/portability/{id}/relaunch
                    GET(): Promise<telephony.PortabilityFixErrorPossibleParameters>;
                }
                status:  {
                    // GET /telephony/{billingAccount}/portability/{id}/status
                    GET(): Promise<telephony.PortabilityStep[]>;
                }
                cancel:  {
                    // POST /telephony/{billingAccount}/portability/{id}/cancel
                    POST(body?: {reason?: string}): Promise<void>;
                }
                changeDate:  {
                    // POST /telephony/{billingAccount}/portability/{id}/changeDate
                    POST(body?: {date: string}): Promise<void>;
                }
            } | any
        }
        abbreviatedNumber:  {
            // GET /telephony/{billingAccount}/abbreviatedNumber
            GET(): Promise<number[]>;
            // POST /telephony/{billingAccount}/abbreviatedNumber
            POST(body?: {destinationNumber: string, name: string, abbreviatedNumber: number, surname: string}): Promise<telephony.AbbreviatedNumberGroup>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                GET(): Promise<telephony.AbbreviatedNumberGroup>;
                // PUT /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                PUT(body?: {body: telephony.AbbreviatedNumberGroup}): Promise<void>;
                // DELETE /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                DELETE(): Promise<void>;
            } | any
        }
        scheduler:  {
            // GET /telephony/{billingAccount}/scheduler
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /telephony/{billingAccount}/scheduler/{serviceName}
                GET(): Promise<telephony.Scheduler>;
                // PUT /telephony/{billingAccount}/scheduler/{serviceName}
                PUT(body?: {body: telephony.Scheduler}): Promise<void>;
                importIcsCalendar:  {
                    // POST /telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar
                    POST(body?: {url: string}): Promise<telephony.Task>;
                }
                events:  {
                    // GET /telephony/{billingAccount}/scheduler/{serviceName}/events
                    GET(param?: {dateEnd_from?: string, dateStart_to?: string, dateEnd_to?: string, dateStart_from?: string, categories?: telephony.SchedulerCategoryEnum}): Promise<string[]>;
                    // POST /telephony/{billingAccount}/scheduler/{serviceName}/events
                    POST(body?: {dateStart: string, dateEnd: string, category: telephony.SchedulerCategoryEnum, uid?: string, title: string, description?: string}): Promise<void>;
                    [keys: string]: {
                        // GET /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                        GET(): Promise<telephony.SchedulerEvent>;
                        // PUT /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                        PUT(body?: {body: telephony.SchedulerEvent}): Promise<void>;
                        // DELETE /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                        DELETE(): Promise<void>;
                    } | any
                }
            } | any
        }
    } | any
    directories:  {
        availableZipCodes:  {
            // GET /telephony/directories/availableZipCodes
            GET(param?: {country: telephony.NumberCountryEnum, number: string}): Promise<string[]>;
        }
        cities:  {
            // GET /telephony/directories/cities
            GET(param?: {zipCode: string, country: telephony.NumberCountryEnum}): Promise<telephony.City[]>;
        }
    }
    spare:  {
        // GET /telephony/spare
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /telephony/spare/{spare}
            GET(): Promise<spare.telephony.TelephonySpare>;
            // DELETE /telephony/spare/{spare}
            DELETE(): Promise<void>;
            replace:  {
                // POST /telephony/spare/{spare}/replace
                POST(body?: {ip: string, domain: string}): Promise<void>;
            }
            compatibleReplacement:  {
                // GET /telephony/spare/{spare}/compatibleReplacement
                GET(): Promise<string[]>;
            }
            serviceInfos:  {
                // GET /telephony/spare/{spare}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /telephony/spare/{spare}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
        } | any
        brands:  {
            // GET /telephony/spare/brands
            GET(): Promise<string[]>;
        }
    }
    number:  {
        specificNumbers:  {
            // GET /telephony/number/specificNumbers
            GET(param?: {zone?: string, range?: string, country: telephony.NumberCountryEnum, type: telephony.NumberTypeEnum}): Promise<telephony.SpecificNumber[]>;
        }
        ranges:  {
            // GET /telephony/number/ranges
            GET(param?: {country: telephony.NumberCountryEnum}): Promise<string[]>;
        }
        zones:  {
            // GET /telephony/number/zones
            GET(param?: {country: telephony.NumberCountryEnum, axiom?: string}): Promise<string[]>;
        }
        detailedZones:  {
            // GET /telephony/number/detailedZones
            GET(param?: {country: telephony.NumberCountryEnum, axiom?: string}): Promise<telephony.NumberDetailedZone[]>;
        }
    }
    line:  {
        offer:  {
            phones:  {
                // GET /telephony/line/offer/phones
                GET(param?: {offer: string, country: telephony.NumberCountryEnum}): Promise<telephony.LinePhone[]>;
            }
        }
        offers:  {
            // GET /telephony/line/offers
            GET(param?: {country: telephony.NumberCountryEnum}): Promise<telephony.LineOffer[]>;
        }
    }
    sounds:  {
        // GET /telephony/sounds
        GET(): Promise<number[]>;
        // POST /telephony/sounds
        POST(body?: {filename: string, description?: string}): Promise<telephony.Sound>;
        [keys: string]: {
            // GET /telephony/sounds/{id}
            GET(): Promise<telephony.Sound>;
            // PUT /telephony/sounds/{id}
            PUT(body?: {body: telephony.Sound}): Promise<void>;
            // DELETE /telephony/sounds/{id}
            DELETE(): Promise<void>;
        } | any
    }
    lines:  {
        // GET /telephony/lines
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /telephony/lines/{serviceName}
            GET(): Promise<telephony.TelephonyGenericService>;
            serviceInfos:  {
                // GET /telephony/lines/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /telephony/lines/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
            changeContact:  {
                // POST /telephony/lines/{serviceName}/changeContact
                POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
            }
        } | any
    }
    accessories:  {
        // GET /telephony/accessories
        GET(param?: {country: telephony.NumberCountryEnum}): Promise<telephony.AccessoryOffer[]>;
    }
    fax:  {
        offers:  {
            // GET /telephony/fax/offers
            GET(param?: {country: telephony.NumberCountryEnum}): Promise<telephony.LineOffer[]>;
        }
    }
    currentOrderIds:  {
        // GET /telephony/currentOrderIds
        GET(): Promise<number[]>;
    }
}
// Api
type PathsTelephonyGET = '/telephony/searchServices' |
  '/telephony/trunks/{serviceName}/serviceInfos' |
  '/telephony/trunks/{serviceName}' |
  '/telephony/trunks' |
  '/telephony/aliases/{serviceName}' |
  '/telephony/aliases/{serviceName}/serviceInfos' |
  '/telephony/aliases' |
  '/telephony/availableDefaultSipDomains' |
  '/telephony/{billingAccount}/vxml' |
  '/telephony/{billingAccount}/vxml/{serviceName}/settings' |
  '/telephony/{billingAccount}/vxml/{serviceName}' |
  '/telephony/{billingAccount}' |
  '/telephony/{billingAccount}/line' |
  '/telephony/{billingAccount}/line/{serviceName}/phoneCanBeAssociable' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}/availableFunction' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/adminCredentials' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/supportsPhonebook' |
  '/telephony/{billingAccount}/line/{serviceName}/phone' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/rma' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/merchandiseAvailable' |
  '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts' |
  '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/canChangePassword' |
  '/telephony/{billingAccount}/line/{serviceName}/ips' |
  '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber' |
  '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}' |
  '/telephony/{billingAccount}/line/{serviceName}/antihack' |
  '/telephony/{billingAccount}/line/{serviceName}/automaticCall/{identifier}' |
  '/telephony/{billingAccount}/line/{serviceName}/automaticCall' |
  '/telephony/{billingAccount}/line/{serviceName}/lastRegistrations' |
  '/telephony/{billingAccount}/line/{serviceName}/click2CallUser' |
  '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/listAssociablePhones' |
  '/telephony/{billingAccount}/line/{serviceName}/maximumAvailableSimultaneousLines' |
  '/telephony/{billingAccount}/line/{serviceName}/offer' |
  '/telephony/{billingAccount}/line/{serviceName}/options/availableCodecs' |
  '/telephony/{billingAccount}/line/{serviceName}/options/defaultCodecs' |
  '/telephony/{billingAccount}/line/{serviceName}/options' |
  '/telephony/{billingAccount}/line/{serviceName}' |
  '/telephony/{billingAccount}/line/{serviceName}/statistics' |
  '/telephony/{billingAccount}/line/{serviceName}/calls' |
  '/telephony/{billingAccount}/line/{serviceName}/calls/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/tones' |
  '/telephony/{billingAccount}/line/{serviceName}/activateNewPhone' |
  '/telephony/{billingAccount}/line/{serviceName}/records/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/records' |
  '/telephony/{billingAccount}/line/{serviceName}/availableSipDomains' |
  '/telephony/{billingAccount}/line/{serviceName}/simultaneousChannelsDetails' |
  '/telephony/{billingAccount}/service' |
  '/telephony/{billingAccount}/service/{serviceName}/directory/getWayTypes' |
  '/telephony/{billingAccount}/service/{serviceName}/directory' |
  '/telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode' |
  '/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption/{consumptionId}' |
  '/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption' |
  '/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption/{consumptionId}' |
  '/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption' |
  '/telephony/{billingAccount}/service/{serviceName}/faxConsumption' |
  '/telephony/{billingAccount}/service/{serviceName}/faxConsumption/{consumptionId}' |
  '/telephony/{billingAccount}/service/{serviceName}' |
  '/telephony/{billingAccount}/service/{serviceName}/eventToken' |
  '/telephony/{billingAccount}/service/{serviceName}/diagnosticReports' |
  '/telephony/{billingAccount}/service/{serviceName}/offerChanges' |
  '/telephony/{billingAccount}/service/{serviceName}/offerTask' |
  '/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}' |
  '/telephony/{billingAccount}/service/{serviceName}/task/{taskId}' |
  '/telephony/{billingAccount}/service/{serviceName}/task' |
  '/telephony/{billingAccount}/service/{serviceName}/offerChange' |
  '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption' |
  '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}/callDiagnostics' |
  '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}' |
  '/telephony/{billingAccount}/number/{serviceName}/convertToLineAvailableOffers' |
  '/telephony/{billingAccount}/number/{serviceName}' |
  '/telephony/{billingAccount}/number' |
  '/telephony/{billingAccount}/rsva/{serviceName}' |
  '/telephony/{billingAccount}/rsva/{serviceName}/allowedRateCodes' |
  '/telephony/{billingAccount}/rsva/{serviceName}/currentRateCode' |
  '/telephony/{billingAccount}/rsva/{serviceName}/scheduledRateCode' |
  '/telephony/{billingAccount}/rsva' |
  '/telephony/{billingAccount}/ovhPabx' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/records' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/liveStatus' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveStatistics' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan' |
  '/telephony/{billingAccount}/serviceInfos' |
  '/telephony/{billingAccount}/voicemail' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/greetings' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/download' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}' |
  '/telephony/{billingAccount}/voicemail/{serviceName}' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/settings/routing' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/settings' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/settings/voicemailNumbers' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/download' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/directories' |
  '/telephony/{billingAccount}/offerTask' |
  '/telephony/{billingAccount}/offerTask/{taskId}' |
  '/telephony/{billingAccount}/eventToken' |
  '/telephony/{billingAccount}/fax' |
  '/telephony/{billingAccount}/fax/{serviceName}' |
  '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}' |
  '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/detail' |
  '/telephony/{billingAccount}/fax/{serviceName}/campaigns' |
  '/telephony/{billingAccount}/fax/{serviceName}/screenLists' |
  '/telephony/{billingAccount}/fax/{serviceName}/settings' |
  '/telephony/{billingAccount}/redirect/{serviceName}' |
  '/telephony/{billingAccount}/redirect' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}' |
  '/telephony/{billingAccount}/easyPabx' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}/tones' |
  '/telephony/{billingAccount}/miniPabx' |
  '/telephony/{billingAccount}/trunk' |
  '/telephony/{billingAccount}/trunk/{serviceName}' |
  '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber' |
  '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}' |
  '/telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition' |
  '/telephony/{billingAccount}/oldPhone' |
  '/telephony/{billingAccount}/task/{taskId}' |
  '/telephony/{billingAccount}/task' |
  '/telephony/{billingAccount}/ddi/{serviceName}' |
  '/telephony/{billingAccount}/ddi' |
  '/telephony/{billingAccount}/screen/{serviceName}/screenLists' |
  '/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}' |
  '/telephony/{billingAccount}/screen/{serviceName}' |
  '/telephony/{billingAccount}/screen' |
  '/telephony/{billingAccount}/historyRepaymentConsumption' |
  '/telephony/{billingAccount}/historyRepaymentConsumption/{date}/document' |
  '/telephony/{billingAccount}/historyRepaymentConsumption/{date}' |
  '/telephony/{billingAccount}/allowedCreditThreshold' |
  '/telephony/{billingAccount}/easyHunting' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/sound' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveStatistics' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/liveStatus' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/records' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}' |
  '/telephony/{billingAccount}/phonebook' |
  '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact' |
  '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}' |
  '/telephony/{billingAccount}/phonebook/{bookKey}/export' |
  '/telephony/{billingAccount}/phonebook/{bookKey}' |
  '/telephony/{billingAccount}/conference/{serviceName}/settings' |
  '/telephony/{billingAccount}/conference/{serviceName}/informations' |
  '/telephony/{billingAccount}/conference/{serviceName}/participants' |
  '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}' |
  '/telephony/{billingAccount}/conference/{serviceName}/histories/{id}' |
  '/telephony/{billingAccount}/conference/{serviceName}/histories' |
  '/telephony/{billingAccount}/conference/{serviceName}/webAccess' |
  '/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}' |
  '/telephony/{billingAccount}/conference/{serviceName}' |
  '/telephony/{billingAccount}/conference' |
  '/telephony/{billingAccount}/timeCondition' |
  '/telephony/{billingAccount}/timeCondition/{serviceName}/condition' |
  '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}' |
  '/telephony/{billingAccount}/timeCondition/{serviceName}/options' |
  '/telephony/{billingAccount}/timeCondition/{serviceName}' |
  '/telephony/{billingAccount}/amountSecurityDeposit' |
  '/telephony/{billingAccount}/billingAccountSite' |
  '/telephony/{billingAccount}/historyTollfreeConsumption/{date}/document' |
  '/telephony/{billingAccount}/historyTollfreeConsumption/{date}' |
  '/telephony/{billingAccount}/historyTollfreeConsumption' |
  '/telephony/{billingAccount}/outplanNotification/{id}' |
  '/telephony/{billingAccount}/outplanNotification' |
  '/telephony/{billingAccount}/historyConsumption' |
  '/telephony/{billingAccount}/historyConsumption/{date}' |
  '/telephony/{billingAccount}/historyConsumption/{date}/file' |
  '/telephony/{billingAccount}/portability' |
  '/telephony/{billingAccount}/portability/{id}/canBeExecuted' |
  '/telephony/{billingAccount}/portability/{id}/canBeCancelled' |
  '/telephony/{billingAccount}/portability/{id}/dateCanBeChanged' |
  '/telephony/{billingAccount}/portability/{id}/document' |
  '/telephony/{billingAccount}/portability/{id}/document/{documentId}' |
  '/telephony/{billingAccount}/portability/{id}/relaunch' |
  '/telephony/{billingAccount}/portability/{id}/status' |
  '/telephony/{billingAccount}/portability/{id}' |
  '/telephony/{billingAccount}/abbreviatedNumber' |
  '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}' |
  '/telephony/{billingAccount}/scheduler' |
  '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}' |
  '/telephony/{billingAccount}/scheduler/{serviceName}/events' |
  '/telephony/{billingAccount}/scheduler/{serviceName}' |
  '/telephony/directories/availableZipCodes' |
  '/telephony/directories/cities' |
  '/telephony/spare' |
  '/telephony/spare/{spare}/compatibleReplacement' |
  '/telephony/spare/{spare}/serviceInfos' |
  '/telephony/spare/{spare}' |
  '/telephony/spare/brands' |
  '/telephony/number/specificNumbers' |
  '/telephony/number/ranges' |
  '/telephony/number/zones' |
  '/telephony/number/detailedZones' |
  '/telephony' |
  '/telephony/line/offer/phones' |
  '/telephony/line/offers' |
  '/telephony/sounds/{id}' |
  '/telephony/sounds' |
  '/telephony/lines' |
  '/telephony/lines/{serviceName}' |
  '/telephony/lines/{serviceName}/serviceInfos' |
  '/telephony/accessories' |
  '/telephony/fax/offers' |
  '/telephony/currentOrderIds';

type PathsTelephonyPUT = '/telephony/trunks/{serviceName}/serviceInfos' |
  '/telephony/aliases/{serviceName}/serviceInfos' |
  '/telephony/{billingAccount}/vxml/{serviceName}/settings' |
  '/telephony/{billingAccount}' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}' |
  '/telephony/{billingAccount}/line/{serviceName}/phone' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}' |
  '/telephony/{billingAccount}/line/{serviceName}/options' |
  '/telephony/{billingAccount}/line/{serviceName}' |
  '/telephony/{billingAccount}/line/{serviceName}/tones' |
  '/telephony/{billingAccount}/service/{serviceName}/directory' |
  '/telephony/{billingAccount}/service/{serviceName}' |
  '/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}' |
  '/telephony/{billingAccount}/number/{serviceName}' |
  '/telephony/{billingAccount}/rsva/{serviceName}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}' |
  '/telephony/{billingAccount}/serviceInfos' |
  '/telephony/{billingAccount}/voicemail/{serviceName}' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/settings' |
  '/telephony/{billingAccount}/offerTask/{taskId}' |
  '/telephony/{billingAccount}/fax/{serviceName}' |
  '/telephony/{billingAccount}/fax/{serviceName}/screenLists' |
  '/telephony/{billingAccount}/fax/{serviceName}/settings' |
  '/telephony/{billingAccount}/redirect/{serviceName}' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}/tones' |
  '/telephony/{billingAccount}/ddi/{serviceName}' |
  '/telephony/{billingAccount}/screen/{serviceName}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}' |
  '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}' |
  '/telephony/{billingAccount}/phonebook/{bookKey}' |
  '/telephony/{billingAccount}/conference/{serviceName}/settings' |
  '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}' |
  '/telephony/{billingAccount}/timeCondition/{serviceName}/options' |
  '/telephony/{billingAccount}/portability/{id}/document/{documentId}' |
  '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}' |
  '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}' |
  '/telephony/{billingAccount}/scheduler/{serviceName}' |
  '/telephony/spare/{spare}/serviceInfos' |
  '/telephony/sounds/{id}' |
  '/telephony/lines/{serviceName}/serviceInfos';

type PathsTelephonyPOST = '/telephony/setDefaultSipDomain' |
  '/telephony/trunks/{serviceName}/changeContact' |
  '/telephony/aliases/{serviceName}/changeContact' |
  '/telephony/{billingAccount}/vxml/{serviceName}/settings/logs' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/resetConfig' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/refreshScreen' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/import' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/reboot' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/rma' |
  '/telephony/{billingAccount}/line/{serviceName}/changePassword' |
  '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts' |
  '/telephony/{billingAccount}/line/{serviceName}/unblock' |
  '/telephony/{billingAccount}/line/{serviceName}/cancelConvertToNumber' |
  '/telephony/{billingAccount}/line/{serviceName}/click2Call' |
  '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber' |
  '/telephony/{billingAccount}/line/{serviceName}/antihack' |
  '/telephony/{billingAccount}/line/{serviceName}/automaticCall' |
  '/telephony/{billingAccount}/line/{serviceName}/removeSimultaneousLines' |
  '/telephony/{billingAccount}/line/{serviceName}/block' |
  '/telephony/{billingAccount}/line/{serviceName}/click2CallUser' |
  '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/changePassword' |
  '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call' |
  '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper' |
  '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/intercept' |
  '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hangup' |
  '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/transfer' |
  '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hold' |
  '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/eavesdrop' |
  '/telephony/{billingAccount}/line/{serviceName}/convertToNumber' |
  '/telephony/{billingAccount}/line/{serviceName}/tones/toneUpload' |
  '/telephony/{billingAccount}/line/{serviceName}/activateNewPhone' |
  '/telephony/{billingAccount}/line/{serviceName}/associateDevice' |
  '/telephony/{billingAccount}/line/{serviceName}/dissociateDevice' |
  '/telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations' |
  '/telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount' |
  '/telephony/{billingAccount}/service/{serviceName}/eventToken' |
  '/telephony/{billingAccount}/service/{serviceName}/offerChange' |
  '/telephony/{billingAccount}/service/{serviceName}/cancelTermination' |
  '/telephony/{billingAccount}/transferSecurityDeposit' |
  '/telephony/{billingAccount}/number/{serviceName}/changeFeatureType' |
  '/telephony/{billingAccount}/number/{serviceName}/convertToLine' |
  '/telephony/{billingAccount}/number/{serviceName}/cancelConvertToLine' |
  '/telephony/{billingAccount}/rsva/{serviceName}/scheduleRateCode' |
  '/telephony/{billingAccount}/rsva/{serviceName}/cancelScheduledRateCode' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/soundUpload' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan' |
  '/telephony/{billingAccount}/canTransferSecurityDeposit' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/greetings' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/migrateOnNewVersion' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/settings/changePassword' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/move' |
  '/telephony/{billingAccount}/cancelTermination' |
  '/telephony/{billingAccount}/eventToken' |
  '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/stop' |
  '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/start' |
  '/telephony/{billingAccount}/fax/{serviceName}/campaigns' |
  '/telephony/{billingAccount}/fax/{serviceName}/screenLists/reset' |
  '/telephony/{billingAccount}/fax/{serviceName}/screenLists' |
  '/telephony/{billingAccount}/fax/{serviceName}/settings/changePassword' |
  '/telephony/{billingAccount}/fax/{serviceName}/settings/sendFax' |
  '/telephony/{billingAccount}/redirect/{serviceName}/changeDestination' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones/toneUpload' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}/tones/toneUpload' |
  '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber' |
  '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}/validate' |
  '/telephony/{billingAccount}/ddi/{serviceName}/changeDestination' |
  '/telephony/{billingAccount}/screen/{serviceName}/screenLists' |
  '/telephony/{billingAccount}/historyRepaymentConsumption' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/soundUpload' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions' |
  '/telephony/{billingAccount}/phonebook' |
  '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact' |
  '/telephony/{billingAccount}/phonebook/{bookKey}/import' |
  '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/deaf' |
  '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/mute' |
  '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/undeaf' |
  '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/unmute' |
  '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/energy' |
  '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/kick' |
  '/telephony/{billingAccount}/conference/{serviceName}/lock' |
  '/telephony/{billingAccount}/conference/{serviceName}/unlock' |
  '/telephony/{billingAccount}/conference/{serviceName}/announceUpload' |
  '/telephony/{billingAccount}/conference/{serviceName}/webAccess' |
  '/telephony/{billingAccount}/changeContact' |
  '/telephony/{billingAccount}/timeCondition/{serviceName}/condition' |
  '/telephony/{billingAccount}/billingAccountSite' |
  '/telephony/{billingAccount}/outplanNotification' |
  '/telephony/{billingAccount}/portability/{id}/execute' |
  '/telephony/{billingAccount}/portability/{id}/document' |
  '/telephony/{billingAccount}/portability/{id}/relaunch' |
  '/telephony/{billingAccount}/portability/{id}/cancel' |
  '/telephony/{billingAccount}/portability/{id}/changeDate' |
  '/telephony/{billingAccount}/abbreviatedNumber' |
  '/telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar' |
  '/telephony/{billingAccount}/scheduler/{serviceName}/events' |
  '/telephony/spare/{spare}/replace' |
  '/telephony/sounds' |
  '/telephony/lines/{serviceName}/changeContact';

type PathsTelephonyDELETE = '/telephony/{billingAccount}' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}' |
  '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}' |
  '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}' |
  '/telephony/{billingAccount}/line/{serviceName}/records/{id}' |
  '/telephony/{billingAccount}/service/{serviceName}' |
  '/telephony/{billingAccount}/service/{serviceName}/eventToken' |
  '/telephony/{billingAccount}/service/{serviceName}/offerChange' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}' |
  '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}' |
  '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}' |
  '/telephony/{billingAccount}/eventToken' |
  '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}' |
  '/telephony/{billingAccount}/fax/{serviceName}/screenLists' |
  '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}' |
  '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}' |
  '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}' |
  '/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}' |
  '/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}' |
  '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}' |
  '/telephony/{billingAccount}/phonebook/{bookKey}' |
  '/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}' |
  '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}' |
  '/telephony/{billingAccount}/outplanNotification/{id}' |
  '/telephony/{billingAccount}/portability/{id}/document/{documentId}' |
  '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}' |
  '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}' |
  '/telephony/spare/{spare}' |
  '/telephony/sounds/{id}';

export class ApiTelephony extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/telephony'): Promise<string[]>;
  /**
   * Billing Account
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}', params: {billingAccount: string}): Promise<telephony.BillingAccount>;
  /**
   * List the telephony.AbbreviatedNumberGroup objects
   * Abbreviated numbers for the billing account
   */
  public get(path: '/telephony/{billingAccount}/abbreviatedNumber', params: {billingAccount: string}): Promise<number[]>;
  /**
   * Abbreviated number
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}', params: {billingAccount: string, abbreviatedNumber: string}): Promise<telephony.AbbreviatedNumberGroup>;
  /**
   * allowedCreditThreshold operations
   * Get the allowed creditThreshold for this billing account
   */
  public get(path: '/telephony/{billingAccount}/allowedCreditThreshold', params: {billingAccount: string}): Promise<order.Price[]>;
  /**
   * amountSecurityDeposit operations
   * Give all amounts availables for your billing account
   */
  public get(path: '/telephony/{billingAccount}/amountSecurityDeposit', params: {billingAccount: string}): Promise<order.Price[]>;
  /**
   * billingAccountSite operations
   * Current billing account site (billing account features are overwritten by the site)
   */
  public get(path: '/telephony/{billingAccount}/billingAccountSite', params: {billingAccount: string}): Promise<string>;
  /**
   * List the telephony.Conference objects
   * Conferences associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/conference', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Conference
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Conference>;
  /**
   * List the telephony.ConferenceHistory objects
   * List your past conferences for this number
   */
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/histories', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * List past conferences on your number
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/histories/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.ConferenceHistory>;
  /**
   * informations operations
   * Get realtime conference informations
   */
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/informations', params: {billingAccount: string, serviceName: string}): Promise<telephony.ConferenceInformations>;
  /**
   * List the telephony.ConferenceParticipants objects
   * Current participants of the associate conference
   */
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/participants', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Conference service
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.ConferenceParticipants>;
  /**
   * Conference properties
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/settings', params: {billingAccount: string, serviceName: string}): Promise<telephony.ConferenceProperties>;
  /**
   * List the telephony.ConferenceWebAccess objects
   * List your conference web access
   */
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * List public web access of your conference
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.ConferenceWebAccess>;
  /**
   * List the telephony.Ddi objects
   * DDIs (direct dial-in) associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/ddi', params: {billingAccount: string}): Promise<string[]>;
  /**
   * DDI (direct dial-in) service
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ddi/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Ddi>;
  /**
   * List the telephony.EasyHunting objects
   * OVH easy calls queues associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/easyHunting', params: {billingAccount: string}): Promise<string[]>;
  /**
   * OVH easy calls queues
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.EasyHunting>;
  /**
   * PABX Hunting
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting', params: {billingAccount: string, serviceName: string}): Promise<telephony.OvhPabxHunting>;
  /**
   * List the telephony.OvhPabxHuntingAgent objects
   * Calls agents
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Calls agent
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<telephony.OvhPabxHuntingAgent>;
  /**
   * The web access for your cloudpabx
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<telephony.BannerAccess>;
  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects
   * Current calls of the callcenter agent
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<number[]>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}', params: {billingAccount: string, serviceName: string, agentId: string, id: string}): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<telephony.EventToken>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/liveStatus', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Agent assigned to the queues
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<number[]>;
  /**
   * Agent assigned to a queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', params: {billingAccount: string, serviceName: string, agentId: string, queueId: string}): Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus', params: {billingAccount: string, serviceName: string, agentId: string, queueId: string}): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxCustomStatus objects
   * Custom statuses of your agents
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Custom statuses of your callcenter agents
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.OvhPabxCustomStatus>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken', params: {billingAccount: string, serviceName: string}): Promise<telephony.EventToken>;
  /**
   * List the telephony.OvhPabxHuntingQueue objects
   * Calls queues
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Calls queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}', params: {billingAccount: string, serviceName: string, queueId: string}): Promise<telephony.OvhPabxHuntingQueue>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Agent assigned to the queue
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent', params: {billingAccount: string, serviceName: string, queueId: string}): Promise<number[]>;
  /**
   * Agent assigned to a queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', params: {billingAccount: string, serviceName: string, queueId: string, agentId: string}): Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus', params: {billingAccount: string, serviceName: string, queueId: string, agentId: string}): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects
   * Live calls of the queue
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls', params: {billingAccount: string, serviceName: string, queueId: string}): Promise<number[]>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}', params: {billingAccount: string, serviceName: string, queueId: string, id: string}): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveStatistics', params: {billingAccount: string, serviceName: string, queueId: string}): Promise<telephony.OvhPabxHuntingQueueLiveStatistics>;
  /**
   * List the telephony.OvhPabxRecord objects
   * Records associated with this PABX
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * The PABX records
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.OvhPabxRecord>;
  /**
   * Easy hunting screen lists conditions options
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions', params: {billingAccount: string, serviceName: string}): Promise<telephony.EasyHuntingScreenListsConditionsSettings>;
  /**
   * List the telephony.EasyHuntingScreenListsConditions objects
   * Screen lists conditions checked when a call is received
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions', params: {billingAccount: string, serviceName: string, screenListType?: OVH.telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<number[]>;
  /**
   * Screenlist condition
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}', params: {billingAccount: string, serviceName: string, conditionId: string}): Promise<telephony.EasyHuntingScreenListsConditions>;
  /**
   * List the telephony.OvhPabxSound objects
   * Sounds associated with this PABX
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * The PABX sounds
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}', params: {billingAccount: string, serviceName: string, soundId: string}): Promise<telephony.OvhPabxSound>;
  /**
   * Easy hunting time conditions options
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions', params: {billingAccount: string, serviceName: string}): Promise<telephony.EasyHuntingTimeConditionsSettings>;
  /**
   * List the telephony.EasyHuntingTimeConditions objects
   * Time conditions checked when a call is received
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions', params: {billingAccount: string, serviceName: string, policy?: OVH.telephony.TimeConditionsPolicyEnum}): Promise<number[]>;
  /**
   * Easy hunting time conditions
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}', params: {billingAccount: string, serviceName: string, conditionId: string}): Promise<telephony.EasyHuntingTimeConditions>;
  /**
   * List the telephony.EasyPabx objects
   * EasyPabx associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/easyPabx', params: {billingAccount: string}): Promise<string[]>;
  /**
   * EasyPabx
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.EasyPabx>;
  /**
   * EasyPabx Hunting
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting', params: {billingAccount: string, serviceName: string}): Promise<telephony.EasyPabxHunting>;
  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects
   * Hunting agents
   */
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent', params: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
   * Easy/Mini PABX agent
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}', params: {billingAccount: string, serviceName: string, agentNumber: string}): Promise<telephony.EasyMiniPabxHuntingAgent>;
  /**
   * Line tones
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones', params: {billingAccount: string, serviceName: string}): Promise<telephony.Tones>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/eventToken', params: {billingAccount: string}): Promise<telephony.EventToken>;
  /**
   * List the telephony.Fax objects
   * Faxes associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/fax', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Fax service
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Fax>;
  /**
   * List the telephony.FaxCampaign objects
   * Fax campaigns of the associate fax
   */
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Fax campaigns
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.FaxCampaign>;
  /**
   * detail operations
   * Detail of the fax recipients by status
   */
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/detail', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.FaxCampaignDetail>;
  /**
   * Fax ScreenLists
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', params: {billingAccount: string, serviceName: string}): Promise<telephony.FaxScreen>;
  /**
   * Fax properties
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/settings', params: {billingAccount: string, serviceName: string}): Promise<telephony.FaxProperties>;
  /**
   * List the telephony.HistoryConsumption objects
   * Previous billed consumptions
   */
  public get(path: '/telephony/{billingAccount}/historyConsumption', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Previous billed consumptions
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/historyConsumption/{date}', params: {billingAccount: string, date: string}): Promise<telephony.HistoryConsumption>;
  /**
   * file operations
   * Previous billed consumption files
   */
  public get(path: '/telephony/{billingAccount}/historyConsumption/{date}/file', params: {billingAccount: string, date: string, extension: OVH.telephony.BillDocument}): Promise<telephony.PcsFile>;
  /**
   * List the telephony.HistoryRepaymentConsumption objects
   * Previous repayment bill
   */
  public get(path: '/telephony/{billingAccount}/historyRepaymentConsumption', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Previous repayment bill
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/historyRepaymentConsumption/{date}', params: {billingAccount: string, date: string}): Promise<telephony.HistoryRepaymentConsumption>;
  /**
   * document operations
   * Get the csv document
   */
  public get(path: '/telephony/{billingAccount}/historyRepaymentConsumption/{date}/document', params: {billingAccount: string, date: string}): Promise<telephony.PcsFile>;
  /**
   * List the telephony.HistoryTollfreeConsumption objects
   * Previous tollfree bill
   */
  public get(path: '/telephony/{billingAccount}/historyTollfreeConsumption', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Previous tollfree bill
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/historyTollfreeConsumption/{date}', params: {billingAccount: string, date: string}): Promise<telephony.HistoryTollfreeConsumption>;
  /**
   * document operations
   * Get the csv document
   */
  public get(path: '/telephony/{billingAccount}/historyTollfreeConsumption/{date}/document', params: {billingAccount: string, date: string}): Promise<telephony.PcsFile>;
  /**
   * List the telephony.Line objects
   * Lines associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/line', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Line service
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Line>;
  /**
   * List the telephony.AbbreviatedNumber objects
   * Abbreviated numbers for the line
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Abbreviated number
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}', params: {billingAccount: string, serviceName: string, abbreviatedNumber: string}): Promise<telephony.AbbreviatedNumber>;
  /**
   * activateNewPhone operations
   * Check if there is a new phone to activate and if it's possible, in case of phone switch
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/activateNewPhone', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * antihack operations
   * Current list of numbers or short code numbers restricted by an auto antihack
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/antihack', params: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
   * List the telephony.CallsGenerated objects
   * Automatic Calls made by Calls Generator on this line
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall', params: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
   * Automatic Call made by Call Generator on this line
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall/{identifier}', params: {billingAccount: string, serviceName: string, identifier: string}): Promise<telephony.CallsGenerated>;
  /**
   * availableSipDomains operations
   * Listing of domains Sip availables
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/availableSipDomains', params: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects
   * The current calls of your line
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/calls', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
  /**
   * canChangePassword operations
   * Ability to manage SIP password on this service
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/canChangePassword', params: {billingAccount: string, serviceName: string}): Promise<boolean>;
  /**
   * List the telephony.Click2CallUser objects
   * User which can use click 2 call on the line
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * User of the click 2 call
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.Click2CallUser>;
  /**
   * ips operations
   * Listing of last ips registry
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/ips', params: {billingAccount: string, serviceName: string}): Promise<telephony.DatetimeAndIpvalue[]>;
  /**
   * lastRegistrations operations
   * List the informations about the last registrations (i.e. IP, port, User-Agent...)
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/lastRegistrations', params: {billingAccount: string, serviceName: string}): Promise<telephony.RegistrationInformations[]>;
  /**
   * listAssociablePhones operations
   * List phones with available slots where this line can be attached
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/listAssociablePhones', params: {billingAccount: string, serviceName: string}): Promise<telephony.LinePhoneAssociable[]>;
  /**
   * maximumAvailableSimultaneousLines operations
   * Get the maximum available simultaneous lines for this line
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/maximumAvailableSimultaneousLines', params: {billingAccount: string, serviceName: string}): Promise<number>;
  /**
   * offer operations
   * Return public offer property
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/offer', params: {billingAccount: string, serviceName: string}): Promise<telephony.LineOffer>;
  /**
   * Line options
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/options', params: {billingAccount: string, serviceName: string}): Promise<telephony.LineOptions>;
  /**
   * availableCodecs operations
   * List of codecs combinaisons available for this line
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/options/availableCodecs', params: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
   * defaultCodecs operations
   * Get the default codecs for this line if none are set
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/options/defaultCodecs', params: {billingAccount: string, serviceName: string}): Promise<string>;
  /**
   * Plug & Phone
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone', params: {billingAccount: string, serviceName: string}): Promise<telephony.Phone>;
  /**
   * adminCredentials operations
   * Returns the administration user and password of the phone if you are a VIP
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/adminCredentials', params: {billingAccount: string, serviceName: string}): Promise<telephony.PhoneCredentials>;
  /**
   * List the telephony.FunctionKey objects
   * Plug & Phone function keys
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Plug & Phone function key
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}', params: {billingAccount: string, serviceName: string, keyNum: string}): Promise<telephony.FunctionKey>;
  /**
   * availableFunction operations
   * List the available functions for the key
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}/availableFunction', params: {billingAccount: string, serviceName: string, keyNum: string}): Promise<string[]>;
  /**
   * merchandiseAvailable operations
   * List of available exchange merchandise brand
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/merchandiseAvailable', params: {billingAccount: string, serviceName: string}): Promise<telephony.HardwareOffer[]>;
  /**
   * List the telephony.Phonebook objects
   * Return phonebooks associated
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook', params: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
   * Phone book
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}', params: {billingAccount: string, serviceName: string, bookKey: string}): Promise<telephony.Phonebook>;
  /**
   * export operations
   * Export the phonebook's contacts
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export', params: {billingAccount: string, serviceName: string, bookKey: string, format: OVH.telephony.ContactsExportFormatsEnum}): Promise<telephony.PcsFile>;
  /**
   * List the telephony.PhonebookContact objects
   * Phonebook contacts
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact', params: {billingAccount: string, serviceName: string, bookKey: string}): Promise<number[]>;
  /**
   * Phone book contact
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}', params: {billingAccount: string, serviceName: string, bookKey: string, id: string}): Promise<telephony.PhonebookContact>;
  /**
   * List the telephony.Rma objects
   * Return Merchandise Authorisation associated
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma', params: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
   * Current Return Merchandise Authorisation
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.Rma>;
  /**
   * supportsPhonebook operations
   * Does the phone manages phonebooks?
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/supportsPhonebook', params: {billingAccount: string, serviceName: string}): Promise<boolean>;
  /**
   * phoneCanBeAssociable operations
   * List the phones with Sip slot available
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phoneCanBeAssociable', params: {billingAccount: string, serviceName: string}): Promise<telephony.LinePhone[]>;
  /**
   * List the telephony.OvhPabxRecord objects
   * The recordings of your line outgoing calls
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/records', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * The PABX records
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/records/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.OvhPabxRecord>;
  /**
   * simultaneousChannelsDetails operations
   * Details about simultaneous channels of this line.
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/simultaneousChannelsDetails', params: {billingAccount: string, serviceName: string}): Promise<telephony.SimultaneousChannelsDetails>;
  /**
   * statistics operations
   * Get statistics of the current line
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/statistics', params: {billingAccount: string, serviceName: string, timeframe: OVH.telephony.StatisticsTimeframeEnum, type: OVH.telephony.LineStatisticsTypeEnum}): Promise<complexType.UnitAndValues<telephony.TimestampAndValue>>;
  /**
   * Line tones
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/tones', params: {billingAccount: string, serviceName: string}): Promise<telephony.Tones>;
  /**
   * List the telephony.trafficExtract objects
   * The traffic extracts (SIP only) of your line
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Traffic extracts (SIP) of your line
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.trafficExtract>;
  /**
   * List the telephony.MiniPabx objects
   * Miniabx associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/miniPabx', params: {billingAccount: string}): Promise<string[]>;
  /**
   * MiniPabx
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.MiniPabx>;
  /**
   * MiniPabx Hunting
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting', params: {billingAccount: string, serviceName: string}): Promise<telephony.MiniPabxHunting>;
  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects
   * Hunting agents
   */
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent', params: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
   * Easy/Mini PABX agent
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}', params: {billingAccount: string, serviceName: string, agentNumber: string}): Promise<telephony.EasyMiniPabxHuntingAgent>;
  /**
   * Line tones
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones', params: {billingAccount: string, serviceName: string}): Promise<telephony.Tones>;
  /**
   * List the telephony.Number objects
   * Additional numbers associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/number', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Additional number
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/number/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Number>;
  /**
   * convertToLineAvailableOffers operations
   * Get the available line offers to schedule a conversion to line
   */
  public get(path: '/telephony/{billingAccount}/number/{serviceName}/convertToLineAvailableOffers', params: {billingAccount: string, serviceName: string}): Promise<telephony.LineOffersAndContracts>;
  /**
   * List the telephony.OfferTask objects
   * Operations on a telephony service's offer
   */
  public get(path: '/telephony/{billingAccount}/offerTask', params: {billingAccount: string, action?: OVH.telephony.OfferTaskActionEnum, status?: OVH.telephony.TaskStatusEnum, type?: OVH.telephony.OfferTaskTypeEnum}): Promise<number[]>;
  /**
   * Operation on a telephony offer
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/offerTask/{taskId}', params: {billingAccount: string, taskId: string}): Promise<telephony.OfferTask>;
  /**
   * oldPhone operations
   * List old phones archived as they were not returned after an RMA
   */
  public get(path: '/telephony/{billingAccount}/oldPhone', params: {billingAccount: string}): Promise<telephony.Phone[]>;
  /**
   * List the telephony.ConsumptionThreshold objects
   * Outplan notifications configured for this billing account
   */
  public get(path: '/telephony/{billingAccount}/outplanNotification', params: {billingAccount: string}): Promise<number[]>;
  /**
   * The outplan notifications configured for your billing account
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/outplanNotification/{id}', params: {billingAccount: string, id: string}): Promise<telephony.ConsumptionThreshold>;
  /**
   * List the telephony.OvhPabx objects
   * OVH calls queues and OVH IVRs (Interactive Voice Response) associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx', params: {billingAccount: string}): Promise<string[]>;
  /**
   * OVH calls queues and OVH IVRs (Interactive Voice Response)
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.OvhPabx>;
  /**
   * List the telephony.OvhPabxDialplan objects
   * Dialplans associated with this PABX
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Dialplan
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}', params: {billingAccount: string, serviceName: string, dialplanId: string}): Promise<telephony.OvhPabxDialplan>;
  /**
   * List the telephony.OvhPabxDialplanExtension objects
   * Extensions contained in the dialplan
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension', params: {billingAccount: string, serviceName: string, dialplanId: string}): Promise<number[]>;
  /**
   * Dialplan extension
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string}): Promise<telephony.OvhPabxDialplanExtension>;
  /**
   * List the telephony.OvhPabxDialplanExtensionConditionScreenList objects
   * Screenlist conditions checked when executing the extension
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string}): Promise<number[]>;
  /**
   * Screenlist condition
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, conditionId: string}): Promise<telephony.OvhPabxDialplanExtensionConditionScreenList>;
  /**
   * List the telephony.OvhPabxDialplanExtensionConditionTime objects
   * Time conditions checked when executing the extension
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string}): Promise<number[]>;
  /**
   * Time condition
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, conditionId: string}): Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
  /**
   * List the telephony.OvhPabxDialplanExtensionRule objects
   * Rules contained in the extension
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string}): Promise<number[]>;
  /**
   * Dialplan rule
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, ruleId: string}): Promise<telephony.OvhPabxDialplanExtensionRule>;
  /**
   * PABX Hunting
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting', params: {billingAccount: string, serviceName: string}): Promise<telephony.OvhPabxHunting>;
  /**
   * List the telephony.OvhPabxHuntingAgent objects
   * Calls agents
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Calls agent
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<telephony.OvhPabxHuntingAgent>;
  /**
   * The web access for your cloudpabx
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<telephony.BannerAccess>;
  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects
   * Current calls of the callcenter agent
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<number[]>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}', params: {billingAccount: string, serviceName: string, agentId: string, id: string}): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<telephony.EventToken>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/liveStatus', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Agent assigned to the queues
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<number[]>;
  /**
   * Agent assigned to a queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', params: {billingAccount: string, serviceName: string, agentId: string, queueId: string}): Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus', params: {billingAccount: string, serviceName: string, agentId: string, queueId: string}): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxCustomStatus objects
   * Custom statuses of your agents
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Custom statuses of your callcenter agents
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.OvhPabxCustomStatus>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken', params: {billingAccount: string, serviceName: string}): Promise<telephony.EventToken>;
  /**
   * List the telephony.OvhPabxHuntingQueue objects
   * Calls queues
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Calls queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}', params: {billingAccount: string, serviceName: string, queueId: string}): Promise<telephony.OvhPabxHuntingQueue>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Agent assigned to the queue
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent', params: {billingAccount: string, serviceName: string, queueId: string}): Promise<number[]>;
  /**
   * Agent assigned to a queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', params: {billingAccount: string, serviceName: string, queueId: string, agentId: string}): Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus', params: {billingAccount: string, serviceName: string, queueId: string, agentId: string}): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects
   * Live calls of the queue
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls', params: {billingAccount: string, serviceName: string, queueId: string}): Promise<number[]>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}', params: {billingAccount: string, serviceName: string, queueId: string, id: string}): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
  /**
   * Live statistics of the queue
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveStatistics', params: {billingAccount: string, serviceName: string, queueId: string}): Promise<telephony.OvhPabxHuntingQueueLiveStatistics>;
  /**
   * List the telephony.OvhPabxMenu objects
   * Menus associated with this PABX
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * IVR Menu
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}', params: {billingAccount: string, serviceName: string, menuId: string}): Promise<telephony.OvhPabxMenu>;
  /**
   * List the telephony.OvhPabxMenuEntry objects
   * Menu entry
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry', params: {billingAccount: string, serviceName: string, menuId: string}): Promise<number[]>;
  /**
   * IVR menu entry
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}', params: {billingAccount: string, serviceName: string, menuId: string, entryId: string}): Promise<telephony.OvhPabxMenuEntry>;
  /**
   * List the telephony.OvhPabxRecord objects
   * Records associated with this PABX
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * The PABX records
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.OvhPabxRecord>;
  /**
   * List the telephony.OvhPabxSound objects
   * Sounds associated with this PABX
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * The PABX sounds
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}', params: {billingAccount: string, serviceName: string, soundId: string}): Promise<telephony.OvhPabxSound>;
  /**
   * List the telephony.OvhPabxTts objects
   * Text to Speech associated with this PABX
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * The PABX Text To Speech sounds
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.OvhPabxTts>;
  /**
   * List the telephony.PhonebookMaster objects
   * Return phonebooks associated to this group
   */
  public get(path: '/telephony/{billingAccount}/phonebook', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Phone book on group
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}', params: {billingAccount: string, bookKey: string}): Promise<telephony.PhonebookMaster>;
  /**
   * export operations
   * Export the phonebook's contacts
   */
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/export', params: {billingAccount: string, bookKey: string, format: OVH.telephony.ContactsExportFormatsEnum}): Promise<telephony.PcsFile>;
  /**
   * List the telephony.PhonebookContact objects
   * Phonebook contacts
   */
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact', params: {billingAccount: string, bookKey: string}): Promise<number[]>;
  /**
   * Phone book contact
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}', params: {billingAccount: string, bookKey: string, id: string}): Promise<telephony.PhonebookContact>;
  /**
   * List the telephony.Portability objects
   * Current number portabilities for this billing account
   */
  public get(path: '/telephony/{billingAccount}/portability', params: {billingAccount: string}): Promise<number[]>;
  /**
   * Portability informations
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/portability/{id}', params: {billingAccount: string, id: string}): Promise<telephony.Portability>;
  /**
   * canBeCancelled operations
   * Indicates whether or not the portability can be cancelled
   */
  public get(path: '/telephony/{billingAccount}/portability/{id}/canBeCancelled', params: {billingAccount: string, id: string}): Promise<boolean>;
  /**
   * canBeExecuted operations
   * Indicates whether or not the portability can be executed
   */
  public get(path: '/telephony/{billingAccount}/portability/{id}/canBeExecuted', params: {billingAccount: string, id: string}): Promise<boolean>;
  /**
   * dateCanBeChanged operations
   * Indicates whether or not the portability date can be changed
   */
  public get(path: '/telephony/{billingAccount}/portability/{id}/dateCanBeChanged', params: {billingAccount: string, id: string}): Promise<boolean>;
  /**
   * List the telephony.PortabilityDocument objects
   * Document linked to this portability
   */
  public get(path: '/telephony/{billingAccount}/portability/{id}/document', params: {billingAccount: string, id: string}): Promise<number[]>;
  /**
   * Document linked to a portability
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}', params: {billingAccount: string, id: string, documentId: string}): Promise<telephony.PortabilityDocument>;
  /**
   * relaunch operations
   * Indicates whether or not error can be fixed and portability can be relaunched
   */
  public get(path: '/telephony/{billingAccount}/portability/{id}/relaunch', params: {billingAccount: string, id: string}): Promise<telephony.PortabilityFixErrorPossibleParameters>;
  /**
   * status operations
   * Indicates the current status of the portability, with a list of steps
   */
  public get(path: '/telephony/{billingAccount}/portability/{id}/status', params: {billingAccount: string, id: string}): Promise<telephony.PortabilityStep[]>;
  /**
   * List the telephony.Redirect objects
   * Redirects associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/redirect', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Redirect service
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/redirect/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Redirect>;
  /**
   * List the telephony.Rsva objects
   * Service concerned by the french RSVA reform
   */
  public get(path: '/telephony/{billingAccount}/rsva', params: {billingAccount: string}): Promise<string[]>;
  /**
   * French value added services subject to the RSVA reform (Référentiel des numéros SVA)
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Rsva>;
  /**
   * allowedRateCodes operations
   * Compatible rate codes related to this value added service
   */
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}/allowedRateCodes', params: {billingAccount: string, serviceName: string}): Promise<telephony.RateCodeInformation[]>;
  /**
   * currentRateCode operations
   * Current rate code related to this sva
   */
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}/currentRateCode', params: {billingAccount: string, serviceName: string}): Promise<telephony.DetailedRateCodeInformation>;
  /**
   * scheduledRateCode operations
   * New scheduled rate code related to this sva
   */
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}/scheduledRateCode', params: {billingAccount: string, serviceName: string}): Promise<telephony.DetailedRateCodeInformation>;
  /**
   * List the telephony.Scheduler objects
   * Scheduled events
   */
  public get(path: '/telephony/{billingAccount}/scheduler', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Scheduler capable services
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/scheduler/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Scheduler>;
  /**
   * List the telephony.SchedulerEvent objects
   * Custom events scheduled
   */
  public get(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events', params: {billingAccount: string, serviceName: string, categories?: OVH.telephony.SchedulerCategoryEnum, dateEnd_from?: string, dateEnd_to?: string, dateStart_from?: string, dateStart_to?: string}): Promise<string[]>;
  /**
   * Scheduled event
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}', params: {billingAccount: string, serviceName: string, uid: string}): Promise<telephony.SchedulerEvent>;
  /**
   * List the telephony.Screen objects
   * Screenlist compatible numbers associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/screen', params: {billingAccount: string}): Promise<string[]>;
  /**
   * ScreenList capable services
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/screen/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Screen>;
  /**
   * List the telephony.ScreenList objects
   * Rules for call filtering for this service
   */
  public get(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Screen list
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.ScreenList>;
  /**
   * List the telephony.TelephonyService objects
   * Services associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/service', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Telephony service
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.TelephonyService>;
  /**
   * diagnosticReports operations
   * Get Relevant informations of the service detected from the MOS or the signal leg in SIP/MGCP protocol.
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/diagnosticReports', params: {billingAccount: string, serviceName: string, dayInterval: OVH.telephony.DiagnosticReportIndexEnum}): Promise<telephony.DiagnosticReport[]>;
  /**
   * Directory Informations
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/directory', params: {billingAccount: string, serviceName: string}): Promise<telephony.DirectoryInfo>;
  /**
   * getDirectoryServiceCode operations
   * Get directory service code from an APE code ( principal activity of the firm code )
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode', params: {billingAccount: string, serviceName: string, apeCode: string}): Promise<telephony.DirectoryHeadingPJ[]>;
  /**
   * getWayTypes operations
   * Get all the way types availables
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/directory/getWayTypes', params: {billingAccount: string, serviceName: string}): Promise<telephony.DirectoryWayType[]>;
  /**
   * Token associated to the service for live event
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken', params: {billingAccount: string, serviceName: string}): Promise<telephony.EventToken>;
  /**
   * List the telephony.FaxConsumption objects
   * Fax delivery records.
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/faxConsumption', params: {billingAccount: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, wayType?: OVH.telephony.FaxConsumptionWayTypeEnum}): Promise<number[]>;
  /**
   * Fax delivery record
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/faxConsumption/{consumptionId}', params: {billingAccount: string, serviceName: string, consumptionId: string}): Promise<telephony.FaxConsumption>;
  /**
   * Offer change
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange', params: {billingAccount: string, serviceName: string}): Promise<telephony.OfferChange>;
  /**
   * offerChanges operations
   * List all available offer changes compatibilities
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerChanges', params: {billingAccount: string, serviceName: string}): Promise<telephony.LineOffer[]>;
  /**
   * List the telephony.OfferTask objects
   * Operations on a telephony service's offer
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask', params: {billingAccount: string, serviceName: string, action?: OVH.telephony.OfferTaskActionEnum, status?: OVH.telephony.TaskStatusEnum, type?: OVH.telephony.OfferTaskTypeEnum}): Promise<number[]>;
  /**
   * Operation on a telephony offer
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}', params: {billingAccount: string, serviceName: string, taskId: string}): Promise<telephony.OfferTask>;
  /**
   * List the telephony.PreviousVoiceConsumption objects
   * Call delivery records of the previous month.
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption', params: {billingAccount: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, destinationType?: OVH.telephony.VoiceConsumptionDestinationTypeEnum, planType?: OVH.telephony.VoiceConsumptionPlanTypeEnum, wayType?: OVH.telephony.VoiceConsumptionWayTypeEnum}): Promise<number[]>;
  /**
   * Call delivery record of the previous month
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption/{consumptionId}', params: {billingAccount: string, serviceName: string, consumptionId: string}): Promise<telephony.PreviousVoiceConsumption>;
  /**
   * List the telephony.RepaymentConsumption objects
   * Call which could be repayable
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption', params: {billingAccount: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string}): Promise<number[]>;
  /**
   * Call which are repayable
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption/{consumptionId}', params: {billingAccount: string, serviceName: string, consumptionId: string}): Promise<telephony.RepaymentConsumption>;
  /**
   * List the telephony.Task objects
   * Operations on a telephony service
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/task', params: {billingAccount: string, serviceName: string, action?: string, serviceType?: string, status?: OVH.telephony.TaskStatusEnum}): Promise<number[]>;
  /**
   * Operation on a telephony service
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/task/{taskId}', params: {billingAccount: string, serviceName: string, taskId: string}): Promise<telephony.Task>;
  /**
   * List the telephony.VoiceConsumption objects
   * Call delivery records.
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption', params: {billingAccount: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, destinationType?: OVH.telephony.VoiceConsumptionDestinationTypeEnum, planType?: OVH.telephony.VoiceConsumptionPlanTypeEnum, wayType?: OVH.telephony.VoiceConsumptionWayTypeEnum}): Promise<number[]>;
  /**
   * Call delivery record
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}', params: {billingAccount: string, serviceName: string, consumptionId: string}): Promise<telephony.VoiceConsumption>;
  /**
   * Advanced diagnostic of the voice call
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}/callDiagnostics', params: {billingAccount: string, serviceName: string, consumptionId: string}): Promise<telephony.CallDiagnostics>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/serviceInfos', params: {billingAccount: string}): Promise<services.Service>;
  /**
   * List the telephony.Task objects
   * Operations on a telephony billing account
   */
  public get(path: '/telephony/{billingAccount}/task', params: {billingAccount: string, action?: string, serviceType?: string, status?: OVH.telephony.TaskStatusEnum}): Promise<number[]>;
  /**
   * Operation on a telephony service
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/task/{taskId}', params: {billingAccount: string, taskId: string}): Promise<telephony.Task>;
  /**
   * List the telephony.GenericScreen objects
   * Time conditions compatible numbers associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/timeCondition', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Time conditions capable services
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.GenericScreen>;
  /**
   * List the telephony.TimeCondition objects
   * Rules for time conditions for this service
   */
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition', params: {billingAccount: string, serviceName: string}): Promise<number[]>;
  /**
   * Time conditions
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.TimeCondition>;
  /**
   * Time conditions options
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/options', params: {billingAccount: string, serviceName: string}): Promise<telephony.TimeConditionOptions>;
  /**
   * List the telephony.Trunk objects
   * Trunk associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/trunk', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Trunk service
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Trunk>;
  /**
   * channelsPacksRepartition operations
   * Determine the best channels packs combination for a given channel quantity
   */
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition', params: {billingAccount: string, serviceName: string, quantity: number}): Promise<telephony.TrunkSimultaneousPacksRepartition>;
  /**
   * List the telephony.TrunkExternalDisplayedNumber objects
   * External displayed number linked to this trunk
   */
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber', params: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
   * External displayed number linked to a trunk
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}', params: {billingAccount: string, serviceName: string, number: string}): Promise<telephony.TrunkExternalDisplayedNumber>;
  /**
   * List the telephony.Voicemail objects
   * Voicemails associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/voicemail', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Voicemail service
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Voicemail>;
  /**
   * List the telephony.VoicemailMessages objects
   * Voicemail directory messages
   */
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories', params: {billingAccount: string, serviceName: string, dir?: OVH.telephony.VoicemailMessageFolderDirectoryEnum}): Promise<number[]>;
  /**
   * Voicemail message
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.VoicemailMessages>;
  /**
   * download operations
   * Get a url to download the sound file
   */
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/download', params: {billingAccount: string, serviceName: string, id: string, format?: OVH.telephony.ServiceVoicemailAudioFormatEnum}): Promise<telephony.PcsFile>;
  /**
   * List the telephony.VoicemailGreetings objects
   * Voicemail greeting message properties
   */
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings', params: {billingAccount: string, serviceName: string, dir?: OVH.telephony.VoicemailMessageFolderGreetingEnum}): Promise<number[]>;
  /**
   * Voicemail greeting
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.VoicemailGreetings>;
  /**
   * download operations
   * Get a url to download the sound file
   */
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/download', params: {billingAccount: string, serviceName: string, id: string, format?: OVH.telephony.ServiceVoicemailAudioFormatEnum}): Promise<telephony.PcsFile>;
  /**
   * Voicemail Properties
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings', params: {billingAccount: string, serviceName: string}): Promise<telephony.VoicemailProperties>;
  /**
   * routing operations
   * Get the status of the voicemail. Available only if the line has fax capabilities
   */
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/routing', params: {billingAccount: string, serviceName: string}): Promise<telephony.VoicefaxRoutingEnum>;
  /**
   * voicemailNumbers operations
   * Get number for internal and external voicemail
   */
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/voicemailNumbers', params: {billingAccount: string, serviceName: string}): Promise<telephony.VoicemailNumbers>;
  /**
   * List the telephony.Vxml objects
   * Vxml numbers associated with this billing account
   */
  public get(path: '/telephony/{billingAccount}/vxml', params: {billingAccount: string}): Promise<string[]>;
  /**
   * Vxml services
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/vxml/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<telephony.Vxml>;
  /**
   * Vxml Properties
   * Get this object properties
   */
  public get(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings', params: {billingAccount: string, serviceName: string}): Promise<telephony.VxmlProperties>;
  /**
   * Get all available accessories
   * Get all available accessories
   */
  public get(path: '/telephony/accessories', params: {country: OVH.telephony.NumberCountryEnum}): Promise<telephony.AccessoryOffer[]>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/telephony/aliases'): Promise<string[]>;
  /**
   * Telephony service
   * Get this object properties
   */
  public get(path: '/telephony/aliases/{serviceName}', params: {serviceName: string}): Promise<telephony.TelephonyGenericService>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/telephony/aliases/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Get all available SIP domains by country
   * Get all available SIP domains by country
   */
  public get(path: '/telephony/availableDefaultSipDomains', params: {type: OVH.telephony.SipDomainProductTypeEnum}): Promise<telephony.DefaultSipDomains[]>;
  /**
   * Get current order ids
   * Get current order ids
   */
  public get(path: '/telephony/currentOrderIds'): Promise<number[]>;
  /**
   * Get all zip codes compatible for a number
   * Get all zip codes compatible for a number
   */
  public get(path: '/telephony/directories/availableZipCodes', params: {country: OVH.telephony.NumberCountryEnum, number: string}): Promise<string[]>;
  /**
   * Get city informations from a zip code
   * Get city informations from a zip code
   */
  public get(path: '/telephony/directories/cities', params: {country: OVH.telephony.NumberCountryEnum, zipCode: string}): Promise<telephony.City[]>;
  /**
   * Get all available fax offer compatible
   * Get all available fax offer compatible
   */
  public get(path: '/telephony/fax/offers', params: {country: OVH.telephony.NumberCountryEnum}): Promise<telephony.LineOffer[]>;
  /**
   * Get all available phone brands compatible with lines
   * Get all available phone brands compatible with lines
   */
  public get(path: '/telephony/line/offer/phones', params: {country: OVH.telephony.NumberCountryEnum, offer: string}): Promise<telephony.LinePhone[]>;
  /**
   * Get all available line offer compatible
   * Get all available line offer compatible
   */
  public get(path: '/telephony/line/offers', params: {country: OVH.telephony.NumberCountryEnum}): Promise<telephony.LineOffer[]>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/telephony/lines'): Promise<string[]>;
  /**
   * Telephony service
   * Get this object properties
   */
  public get(path: '/telephony/lines/{serviceName}', params: {serviceName: string}): Promise<telephony.TelephonyGenericService>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/telephony/lines/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Get all available geographic zone with some details, from a country
   * Get all available geographic zone with some details, from a country
   */
  public get(path: '/telephony/number/detailedZones', params: {axiom?: string, country: OVH.telephony.NumberCountryEnum}): Promise<telephony.NumberDetailedZone[]>;
  /**
   * Get all available special range from a country
   * Get all available special range from a country
   */
  public get(path: '/telephony/number/ranges', params: {country: OVH.telephony.NumberCountryEnum}): Promise<string[]>;
  /**
   * Get all available specific number from a country
   * Get all available specific number from a country
   */
  public get(path: '/telephony/number/specificNumbers', params: {country: OVH.telephony.NumberCountryEnum, range?: string, type: OVH.telephony.NumberTypeEnum, zone?: string}): Promise<telephony.SpecificNumber[]>;
  /**
   * Get all available geographic zone from a country
   * Get all available geographic zone from a country
   */
  public get(path: '/telephony/number/zones', params: {axiom?: string, country: OVH.telephony.NumberCountryEnum}): Promise<string[]>;
  /**
   * Search a service with its domain, to get its billing account and type
   * Search a service with its domain, to get its billing account and type
   */
  public get(path: '/telephony/searchServices', params: {axiom: string}): Promise<telephony.TelephonySearchService[]>;
  /**
   * List the telephony.Sound objects
   * Sounds attached to this telephony account
   */
  public get(path: '/telephony/sounds'): Promise<number[]>;
  /**
   * Sounds attached to this telephony account
   * Get this object properties
   */
  public get(path: '/telephony/sounds/{id}', params: {id: string}): Promise<telephony.Sound>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/telephony/spare'): Promise<string[]>;
  /**
   * Spare properties
   * Get this object properties
   */
  public get(path: '/telephony/spare/{spare}', params: {spare: string}): Promise<spare.telephony.TelephonySpare>;
  /**
   * compatibleReplacement operations
   * Return the list of phone domains compatible to be replaced
   */
  public get(path: '/telephony/spare/{spare}/compatibleReplacement', params: {spare: string}): Promise<string[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/telephony/spare/{spare}/serviceInfos', params: {spare: string}): Promise<services.Service>;
  /**
   * Get all available spare brands
   * Get all available spare brands
   */
  public get(path: '/telephony/spare/brands'): Promise<string[]>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  public get(path: '/telephony/trunks'): Promise<string[]>;
  /**
   * Telephony service
   * Get this object properties
   */
  public get(path: '/telephony/trunks/{serviceName}', params: {serviceName: string}): Promise<telephony.TelephonyGenericService>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/telephony/trunks/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  public get(path: PathsTelephonyGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Billing Account
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}', params: {billingAccount: string, allowedOutplan?: OVH.order.Price, creditThreshold?: OVH.order.Price, currentOutplan?: OVH.order.Price, description?: string, hiddenExternalNumber?: boolean, overrideDisplayedNumber?: boolean, securityDeposit?: OVH.order.Price, status?: OVH.telephony.BillingAccountStatusEnum, trusted?: boolean}): Promise<void>;
  /**
   * Abbreviated number
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}', params: {billingAccount: string, abbreviatedNumber: string, destinationNumber?: string, name?: string, surname?: string}): Promise<void>;
  /**
   * Conference properties
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/conference/{serviceName}/settings', params: {billingAccount: string, serviceName: string, announceFile?: boolean, announceFilename?: string, announceSoundId?: number, anonymousRejection?: boolean, enterMuted?: boolean, eventsChannel?: string, language?: OVH.telephony.ConferenceLanguageEnum, pin?: string, recordStatus?: boolean, reportEmail?: string, reportStatus?: OVH.telephony.ConferenceReportStatusEnum, whiteLabelReport?: boolean}): Promise<void>;
  /**
   * DDI (direct dial-in) service
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ddi/{serviceName}', params: {billingAccount: string, serviceName: string, description?: string, destination?: string, featureType?: OVH.telephony.TypeEnum, serviceType?: OVH.telephony.TypeServiceEnum}): Promise<void>;
  /**
   * OVH easy calls queues
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}', params: {billingAccount: string, serviceName: string, anonymousRejection?: boolean, description?: string, featureType?: OVH.telephony.TypeEnum, isCCS?: boolean, maxWaitTime?: number, queueSize?: number, serviceType?: OVH.telephony.TypeServiceEnum, showCallerNumber?: OVH.telephony.OvhPabxDialplanNumberPresentationEnum, statusIvrEnabled?: boolean, strategy?: OVH.telephony.OvhPabxHuntingQueueStrategyEnum, toneOnClosing?: number, toneOnHold?: number, toneOnOpening?: number, voicemail?: string}): Promise<void>;
  /**
   * PABX Hunting
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting', params: {billingAccount: string, serviceName: string, crmUrlTemplate?: string, g729?: boolean, name?: string, statusIvrEnabled?: boolean}): Promise<void>;
  /**
   * Calls agent
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}', params: {billingAccount: string, serviceName: string, agentId: string, breakStatus?: number, description?: string, number?: string, simultaneousLines?: number, status?: OVH.telephony.OvhPabxHuntingAgentStatusEnum, timeout?: number, type?: OVH.telephony.OvhPabxHuntingAgentTypeEnum, wrapUpTime?: number}): Promise<void>;
  /**
   * Agent assigned to a queue
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', params: {billingAccount: string, serviceName: string, agentId: string, queueId: string, position?: number}): Promise<void>;
  /**
   * Calls queue
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}', params: {billingAccount: string, serviceName: string, queueId: string, actionOnClosure?: OVH.telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: OVH.telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, followCallForwards?: boolean, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: OVH.telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: OVH.telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy?: OVH.telephony.OvhPabxHuntingQueueStrategyEnum}): Promise<void>;
  /**
   * Agent assigned to a queue
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', params: {billingAccount: string, serviceName: string, queueId: string, agentId: string, position?: number}): Promise<void>;
  /**
   * Easy hunting screen lists conditions options
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions', params: {billingAccount: string, serviceName: string, status?: OVH.telephony.EasyHuntingScreenListsConditionsStatusEnum}): Promise<void>;
  /**
   * Screenlist condition
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}', params: {billingAccount: string, serviceName: string, conditionId: string, callerIdNumber?: string, destinationNumber?: string, screenListType?: OVH.telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<void>;
  /**
   * Easy hunting time conditions options
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions', params: {billingAccount: string, serviceName: string, enable?: boolean, slot1Number?: string, slot1Type?: OVH.telephony.TimeConditionsSettingsForwardTypeEnum, slot2Number?: string, slot2Type?: OVH.telephony.TimeConditionsSettingsForwardTypeEnum, slot3Number?: string, slot3Type?: OVH.telephony.TimeConditionsSettingsForwardTypeEnum, unavailableNumber?: string, unavailableType?: OVH.telephony.TimeConditionsSettingsForwardTypeEnum}): Promise<void>;
  /**
   * Easy hunting time conditions
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}', params: {billingAccount: string, serviceName: string, conditionId: string, policy?: OVH.telephony.TimeConditionsPolicyEnum, timeFrom?: string, timeTo?: string, weekDay?: OVH.telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}): Promise<void>;
  /**
   * EasyPabx
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}', params: {billingAccount: string, serviceName: string, description?: string, featureType?: OVH.telephony.TypeEnum, serviceType?: OVH.telephony.TypeServiceEnum}): Promise<void>;
  /**
   * EasyPabx Hunting
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting', params: {billingAccount: string, serviceName: string, anonymousCallRejection?: boolean, name?: string, noReplyTimer?: number, numberOfCalls?: number, pattern?: OVH.telephony.EasyMiniPabxHuntingPatternEnum, strategy?: OVH.telephony.EasyMiniPabxHuntingStrategyEnum, toneOnClosure?: boolean, toneOnClosureSoundId?: number, toneOnHold?: boolean, toneOnHoldSoundId?: number, toneRingback?: boolean, toneRingbackSoundId?: number, voicemail?: string}): Promise<void>;
  /**
   * Easy/Mini PABX agent
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}', params: {billingAccount: string, serviceName: string, agentNumber: string, logged?: boolean, noReplyTimer?: number, position?: number}): Promise<void>;
  /**
   * Line tones
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones', params: {billingAccount: string, serviceName: string, callWaiting?: OVH.telephony.TonesEnum, endCall?: OVH.telephony.TonesEnum, onHold?: OVH.telephony.TonesOnHoldEnum, ringback?: OVH.telephony.TonesEnum}): Promise<void>;
  /**
   * Fax service
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/fax/{serviceName}', params: {billingAccount: string, serviceName: string, description?: string, notifications?: OVH.telephony.LineNotificationsOptions, offers?: string[], serviceType?: OVH.telephony.TypeServiceEnum}): Promise<void>;
  /**
   * Fax ScreenLists
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', params: {billingAccount: string, serviceName: string, blacklistedNumbers?: string[], blacklistedTSI?: string[], callNumber?: string, countryCode?: string, filteringList?: OVH.telephony.FaxScreenListTypeEnum, whitelistedNumbers?: string[], whitelistedTSI?: string[]}): Promise<void>;
  /**
   * Fax properties
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/fax/{serviceName}/settings', params: {billingAccount: string, serviceName: string, callNumber?: string, countryCode?: string, faxMaxCall?: OVH.telephony.FaxSendingTries, faxQuality?: OVH.telephony.FaxQualityEnum, faxTagLine?: string, fromEmail?: string, fromName?: string, mailFormat?: OVH.telephony.FaxMailFormatEnum, receiver?: string, redirectionEmail?: string[], rejectAnonymous?: boolean, sender?: string}): Promise<void>;
  /**
   * Line service
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/line/{serviceName}', params: {billingAccount: string, serviceName: string, canChangePassword?: boolean, description?: string, getPublicOffer?: OVH.telephony.LineOffer, infrastructure?: string, isAttachedToOtherLinesPhone?: boolean, notifications?: OVH.telephony.LineNotificationsOptions, offers?: string[], serviceType?: OVH.telephony.TypeServiceEnum, simultaneousLines?: number}): Promise<void>;
  /**
   * Abbreviated number
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}', params: {billingAccount: string, serviceName: string, abbreviatedNumber: string, destinationNumber?: string, name?: string, surname?: string}): Promise<void>;
  /**
   * Line options
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/options', params: {billingAccount: string, serviceName: string, absentSubscriber?: boolean, anonymousCallRejection?: boolean, callRestrictionIncoming?: boolean, callRestrictionOutgoing?: boolean, callWaiting?: boolean, codecs?: string, defaultVoicemail?: string, displayNumber?: string, doNotDisturb?: boolean, domain?: string, forwardBackup?: boolean, forwardBackupNature?: OVH.telephony.LineOptionForwardNatureTypeEnum, forwardBackupNumber?: string, forwardBusy?: boolean, forwardBusyNature?: OVH.telephony.LineOptionForwardNatureTypeEnum, forwardBusyNumber?: string, forwardNoReply?: boolean, forwardNoReplyDelay?: number, forwardNoReplyNature?: OVH.telephony.LineOptionForwardNatureTypeEnum, forwardNoReplyNumber?: string, forwardUnconditional?: boolean, forwardUnconditionalNature?: OVH.telephony.LineOptionForwardNatureTypeEnum, forwardUnconditionalNumber?: string, identificationRestriction?: boolean, intercom?: OVH.telephony.LineOptionIntercomEnum, ipRestrictions?: string[], language?: OVH.telephony.LineOptionLanguageEnum, lockOutCall?: boolean, lockOutCallPassword?: string, recordOutgoingCallsBeta?: boolean, toneOnCallWaitingSoundId?: number, toneOnHoldSoundId?: number, toneRingbackSoundId?: number, voicemailExternalNumber?: string, voicemailInternalNumber?: string}): Promise<void>;
  /**
   * Plug & Phone
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone', params: {billingAccount: string, serviceName: string, brand?: string, description?: string, macAddress?: string, maxline?: number, mgcpIpRestriction?: string, phoneConfiguration?: OVH.telephony.PhoneConfigurationProperty[], protocol?: OVH.telephony.ProtocolEnum, userPassword?: string}): Promise<void>;
  /**
   * Plug & Phone function key
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}', params: {billingAccount: string, serviceName: string, keyNum: string, default_?: string, function_?: string, label?: string, parameter?: string, type?: string}): Promise<void>;
  /**
   * Phone book
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}', params: {billingAccount: string, serviceName: string, bookKey: string, isReadonly?: boolean, name?: string, phoneKey?: string}): Promise<void>;
  /**
   * Phone book contact
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}', params: {billingAccount: string, serviceName: string, bookKey: string, id: string, group?: string, homeMobile?: string, homePhone?: string, name?: string, surname?: string, workMobile?: string, workPhone?: string}): Promise<void>;
  /**
   * Current Return Merchandise Authorisation
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}', params: {billingAccount: string, serviceName: string, id: string, cancellable?: boolean, creationDatetime?: string, equipmentReference?: string, newMerchandise?: string, offerTypeNew?: OVH.telephony.RmaOfferTypeEnum, offerTypeOld?: OVH.telephony.RmaOfferTypeEnum, process?: OVH.telephony.RmaReplaceTypeEnum, receptionDatetime?: string, shippingContact?: OVH.telephony.Contact, status?: OVH.telephony.RmaStatusEnum, steps?: OVH.telephony.RmaStep[], terminationDatetime?: string, type?: OVH.telephony.RmaTypeEnum}): Promise<void>;
  /**
   * Line tones
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/tones', params: {billingAccount: string, serviceName: string, callWaiting?: OVH.telephony.TonesEnum, endCall?: OVH.telephony.TonesEnum, onHold?: OVH.telephony.TonesOnHoldEnum, ringback?: OVH.telephony.TonesEnum}): Promise<void>;
  /**
   * MiniPabx
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}', params: {billingAccount: string, serviceName: string, description?: string, featureType?: OVH.telephony.TypeEnum, serviceType?: OVH.telephony.TypeServiceEnum}): Promise<void>;
  /**
   * MiniPabx Hunting
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting', params: {billingAccount: string, serviceName: string, anonymousCallRejection?: boolean, name?: string, numberOfCalls?: number, onHoldTimer?: number, pattern?: OVH.telephony.EasyMiniPabxHuntingPatternEnum, queueSize?: number, strategy?: OVH.telephony.EasyMiniPabxHuntingStrategyEnum, toneOnClosure?: boolean, toneOnClosureSoundId?: number, toneOnHold?: boolean, toneOnHoldSoundId?: number, toneRingback?: boolean, toneRingbackSoundId?: number}): Promise<void>;
  /**
   * Easy/Mini PABX agent
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}', params: {billingAccount: string, serviceName: string, agentNumber: string, logged?: boolean, noReplyTimer?: number, position?: number}): Promise<void>;
  /**
   * Line tones
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones', params: {billingAccount: string, serviceName: string, callWaiting?: OVH.telephony.TonesEnum, endCall?: OVH.telephony.TonesEnum, onHold?: OVH.telephony.TonesOnHoldEnum, ringback?: OVH.telephony.TonesEnum}): Promise<void>;
  /**
   * Additional number
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/number/{serviceName}', params: {billingAccount: string, serviceName: string, description?: string, featureType?: OVH.telephony.TypeEnum, partOfPool?: string, serviceType?: OVH.telephony.TypeServiceEnum}): Promise<void>;
  /**
   * Operation on a telephony offer
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/offerTask/{taskId}', params: {billingAccount: string, taskId: string, action?: OVH.telephony.OfferTaskActionEnum, executionDate?: string, status?: OVH.telephony.TaskStatusEnum, type?: OVH.telephony.OfferTaskTypeEnum}): Promise<void>;
  /**
   * OVH calls queues and OVH IVRs (Interactive Voice Response)
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}', params: {billingAccount: string, serviceName: string, description?: string, featureType?: OVH.telephony.TypeEnum, isCCS?: boolean, serviceType?: OVH.telephony.TypeServiceEnum}): Promise<void>;
  /**
   * Dialplan
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}', params: {billingAccount: string, serviceName: string, dialplanId: string, anonymousRejection?: boolean, lastUpdate?: string, name?: string, showCallerNumber?: OVH.telephony.OvhPabxDialplanNumberPresentationEnum, transferTimeout?: number}): Promise<void>;
  /**
   * Dialplan extension
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, enabled?: boolean, position?: number, schedulerCategory?: OVH.telephony.SchedulerCategoryEnum, screenListType?: OVH.telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<void>;
  /**
   * Time condition
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, conditionId: string, timeFrom?: string, timeTo?: string, weekDay?: OVH.telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}): Promise<void>;
  /**
   * Dialplan rule
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, ruleId: string, action?: OVH.telephony.OvhPabxDialplanExtensionRuleActionEnum, actionParam?: string, negativeAction?: boolean, position?: number}): Promise<void>;
  /**
   * PABX Hunting
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting', params: {billingAccount: string, serviceName: string, crmUrlTemplate?: string, g729?: boolean, name?: string, statusIvrEnabled?: boolean}): Promise<void>;
  /**
   * Calls agent
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}', params: {billingAccount: string, serviceName: string, agentId: string, breakStatus?: number, description?: string, number?: string, simultaneousLines?: number, status?: OVH.telephony.OvhPabxHuntingAgentStatusEnum, timeout?: number, type?: OVH.telephony.OvhPabxHuntingAgentTypeEnum, wrapUpTime?: number}): Promise<void>;
  /**
   * Agent assigned to a queue
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', params: {billingAccount: string, serviceName: string, agentId: string, queueId: string, position?: number}): Promise<void>;
  /**
   * Calls queue
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}', params: {billingAccount: string, serviceName: string, queueId: string, actionOnClosure?: OVH.telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: OVH.telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, followCallForwards?: boolean, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: OVH.telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: OVH.telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy?: OVH.telephony.OvhPabxHuntingQueueStrategyEnum}): Promise<void>;
  /**
   * Agent assigned to a queue
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', params: {billingAccount: string, serviceName: string, queueId: string, agentId: string, position?: number}): Promise<void>;
  /**
   * IVR Menu
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}', params: {billingAccount: string, serviceName: string, menuId: string, greetSound?: number, greetSoundTts?: number, invalidSound?: number, invalidSoundTts?: number, name?: string}): Promise<void>;
  /**
   * IVR menu entry
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}', params: {billingAccount: string, serviceName: string, menuId: string, entryId: string, action?: OVH.telephony.OvhPabxIvrMenuEntryActionEnum, actionParam?: string, dtmf?: string, position?: number}): Promise<void>;
  /**
   * The PABX Text To Speech sounds
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}', params: {billingAccount: string, serviceName: string, id: string, text?: string, voice?: OVH.telephony.OvhPabxTtsVoiceEnum}): Promise<void>;
  /**
   * Phone book on group
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/phonebook/{bookKey}', params: {billingAccount: string, bookKey: string, name?: string}): Promise<void>;
  /**
   * Phone book contact
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}', params: {billingAccount: string, bookKey: string, id: string, group?: string, homeMobile?: string, homePhone?: string, name?: string, surname?: string, workMobile?: string, workPhone?: string}): Promise<void>;
  /**
   * Document linked to a portability
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}', params: {billingAccount: string, id: string, documentId: string, description?: string, getUrl?: string, name?: string, putUrl?: string, size?: number}): Promise<void>;
  /**
   * Redirect service
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/redirect/{serviceName}', params: {billingAccount: string, serviceName: string, description?: string, destination?: string, featureType?: OVH.telephony.TypeEnum, serviceType?: OVH.telephony.TypeServiceEnum}): Promise<void>;
  /**
   * French value added services subject to the RSVA reform (Référentiel des numéros SVA)
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/rsva/{serviceName}', params: {billingAccount: string, serviceName: string, typology?: OVH.telephony.portability.SpecialNumberCategoryEnum}): Promise<void>;
  /**
   * Scheduler capable services
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/scheduler/{serviceName}', params: {billingAccount: string, serviceName: string, timeZone?: OVH.telephony.timeZone}): Promise<void>;
  /**
   * Scheduled event
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}', params: {billingAccount: string, serviceName: string, uid: string, categories?: OVH.telephony.SchedulerCategoryEnum, dateEnd?: string, dateStart?: string, description?: string, title?: string}): Promise<void>;
  /**
   * ScreenList capable services
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/screen/{serviceName}', params: {billingAccount: string, serviceName: string, incomingScreenList?: OVH.telephony.ScreenListChoosingEnum, outgoingScreenList?: OVH.telephony.ScreenListChoosingEnum}): Promise<void>;
  /**
   * Telephony service
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/service/{serviceName}', params: {billingAccount: string, serviceName: string, country?: OVH.telephony.NumberCountryEnum, countryCode?: OVH.telephony.NumberCountryCodeEnum, currentOutplan?: OVH.order.Price, description?: string, featureType?: OVH.telephony.TypeEnum, getPublicOffer?: OVH.telephony.LineOffer, hasFaxCapabilities?: boolean, offers?: string[], properties?: OVH.telephony.PropertyEnum[], rio?: string, serviceType?: OVH.telephony.TypeServiceEnum, simultaneousLines?: number}): Promise<void>;
  /**
   * Directory Informations
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/service/{serviceName}/directory', params: {billingAccount: string, serviceName: string, PJSocialNomination?: string, address?: string, addressExtra?: string, ape?: string, areaCode?: number, birthDate?: string, cedex?: string, city?: string, country?: string, directoryServiceCode?: string, displayFirstName?: boolean, displayMarketingDirectory?: boolean, displayOnlyCity?: boolean, displaySearchReverse?: boolean, displayUniversalDirectory?: boolean, email?: string, firstName?: string, gender?: OVH.nichandle.GenderEnum, inseeCode?: number, legalForm?: string, lineDescription?: string, modificationDate?: string, modificationType?: string, name?: string, number?: string, occupation?: string, postBox?: string, postCode?: string, receivePJDirectory?: boolean, siret?: string, socialNomination?: string, socialNominationExtra?: string, status?: string, urbanDistrict?: string, wayName?: string, wayNumber?: string, wayNumberExtra?: string, wayType?: string}): Promise<void>;
  /**
   * Operation on a telephony offer
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}', params: {billingAccount: string, serviceName: string, taskId: string, action?: OVH.telephony.OfferTaskActionEnum, executionDate?: string, status?: OVH.telephony.TaskStatusEnum, type?: OVH.telephony.OfferTaskTypeEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/serviceInfos', params: {billingAccount: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Time conditions
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}', params: {billingAccount: string, serviceName: string, id: string, day?: OVH.telephony.TimeConditionsDayEnum, hourBegin?: string, hourEnd?: string, policy?: OVH.telephony.TimeConditionsPolicyEnum, status?: string}): Promise<void>;
  /**
   * Time conditions options
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/options', params: {billingAccount: string, serviceName: string, slot1Number?: string, slot1Type?: OVH.telephony.TimeConditionsSlotTypeEnum, slot2Number?: string, slot2Type?: OVH.telephony.TimeConditionsSlotTypeEnum, slot3Number?: string, slot3Type?: OVH.telephony.TimeConditionsSlotTypeEnum, status?: OVH.telephony.TimeConditionsGlobalStatusEnum, timeout?: OVH.telephony.TimeConditionsTimeoutEnum, unavailableNumber?: string, unavailableType?: OVH.telephony.TimeConditionsSlotTypeEnum}): Promise<void>;
  /**
   * Voicemail service
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/voicemail/{serviceName}', params: {billingAccount: string, serviceName: string, description?: string, offers?: string[], serviceType?: OVH.telephony.TypeServiceEnum}): Promise<void>;
  /**
   * Voicemail Properties
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings', params: {billingAccount: string, serviceName: string, annouceMessage?: string, audioFormat?: OVH.telephony.ServiceVoicemailAudioFormatEnum, doNotRecord?: boolean, forcePassword?: boolean, fromEmail?: string, fromName?: string, fullGreetingSoundId?: number, greetingType?: OVH.telephony.VoicemailGreetingEnum, isNewVersion?: boolean, keepMessage?: boolean, redirectionEmails?: OVH.telephony.ServiceVoicemailNotifications[], shortGreetingSoundId?: number, temporaryGreetingActivated?: boolean, temporaryGreetingSoundId?: number, unreadMessages?: number}): Promise<void>;
  /**
   * Vxml Properties
   * Alter this object properties
   */
  public put(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings', params: {billingAccount: string, serviceName: string, url?: string, urlRecord?: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/telephony/aliases/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/telephony/lines/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Sounds attached to this telephony account
   * Alter this object properties
   */
  public put(path: '/telephony/sounds/{id}', params: {id: string, creationDate?: string, description?: string, filename?: string, getUrl?: string, putUrl?: string, size?: number}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/telephony/spare/{spare}/serviceInfos', params: {spare: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/telephony/trunks/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsTelephonyPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the telephony.AbbreviatedNumberGroup objects
   * Create a new abbreviated number for the billing account
   */
  public post(path: '/telephony/{billingAccount}/abbreviatedNumber', params: {billingAccount: string, abbreviatedNumber: number, destinationNumber: string, name: string, surname: string}): Promise<telephony.AbbreviatedNumberGroup>;
  /**
   * billingAccountSite operations
   * Used to overwrite current billing account feature by the billing account site
   */
  public post(path: '/telephony/{billingAccount}/billingAccountSite', params: {billingAccount: string, billingAccountSite: string}): Promise<void>;
  /**
   * cancelTermination operations
   * Cancel the billing account termination
   */
  public post(path: '/telephony/{billingAccount}/cancelTermination', params: {billingAccount: string}): Promise<void>;
  /**
   * canTransferSecurityDeposit operations
   * Check if security deposit transfer is possible between two billing accounts
   */
  public post(path: '/telephony/{billingAccount}/canTransferSecurityDeposit', params: {billingAccount: string, billingAccountDestination: string}): Promise<boolean>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/telephony/{billingAccount}/changeContact', params: {billingAccount: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * announceUpload operations
   * Change the sound played at the beginning of the conference
   */
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/announceUpload', params: {billingAccount: string, serviceName: string, documentId: string}): Promise<telephony.Task>;
  /**
   * lock operations
   * Lock the conference room
   */
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/lock', params: {billingAccount: string, serviceName: string}): Promise<telephony.Task>;
  /**
   * deaf operations
   * Make a participant deaf in your conference room
   */
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/deaf', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.Task>;
  /**
   * energy operations
   * Change a participant level of audio transmission
   */
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/energy', params: {billingAccount: string, serviceName: string, id: string, value: number}): Promise<telephony.Task>;
  /**
   * kick operations
   * Eject a participant from your conference room
   */
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/kick', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.Task>;
  /**
   * mute operations
   * Mute a participant in your conference room
   */
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/mute', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.Task>;
  /**
   * undeaf operations
   * Make a participant undeaf your conference room
   */
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/undeaf', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.Task>;
  /**
   * unmute operations
   * Unmute a participant in your conference room
   */
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/unmute', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.Task>;
  /**
   * unlock operations
   * Lock the conference room
   */
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/unlock', params: {billingAccount: string, serviceName: string}): Promise<telephony.Task>;
  /**
   * List the telephony.ConferenceWebAccess objects
   * Add a public web access to your conference
   */
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess', params: {billingAccount: string, serviceName: string, type: OVH.telephony.ConferenceWebAccessTypeEnum}): Promise<telephony.ConferenceWebAccess>;
  /**
   * changeDestination operations
   * Change the destination of the DDI
   */
  public post(path: '/telephony/{billingAccount}/ddi/{serviceName}/changeDestination', params: {billingAccount: string, serviceName: string, destination: string}): Promise<telephony.Task>;
  /**
   * List the telephony.OvhPabxHuntingAgent objects
   * Create a new agent
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent', params: {billingAccount: string, serviceName: string, description?: string, number: string, simultaneousLines: number, status: OVH.telephony.OvhPabxHuntingAgentStatusEnum, timeout: number, wrapUpTime: number}): Promise<telephony.OvhPabxHuntingAgent>;
  /**
   * The web access for your cloudpabx
   * Create a new web access for this ressource
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<telephony.BannerAccess>;
  /**
   * eavesdrop operations
   * Eavesdrop on a call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop', params: {billingAccount: string, serviceName: string, agentId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * hangup operations
   * Hangup a call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup', params: {billingAccount: string, serviceName: string, agentId: string, id: string}): Promise<telephony.Task>;
  /**
   * hold operations
   * Toogle hold on call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold', params: {billingAccount: string, serviceName: string, agentId: string, id: string}): Promise<telephony.Task>;
  /**
   * intercept operations
   * Intercept a non answered call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept', params: {billingAccount: string, serviceName: string, agentId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * transfer operations
   * Transfer an answered call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer', params: {billingAccount: string, serviceName: string, agentId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * whisper operations
   * Whisper on a call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper', params: {billingAccount: string, serviceName: string, agentId: string, id: string, number: string, whisperingMode: OVH.telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken', params: {billingAccount: string, serviceName: string, agentId: string, expiration: OVH.telephony.TokenExpirationEnum}): Promise<string>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Create a new skill for an agent (it adds the agent in a queue)
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue', params: {billingAccount: string, serviceName: string, agentId: string, position: number, queueId: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * List the telephony.OvhPabxCustomStatus objects
   * Create a new custom status
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus', params: {billingAccount: string, serviceName: string, color?: string, description?: string, name: string}): Promise<telephony.OvhPabxCustomStatus>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken', params: {billingAccount: string, serviceName: string, expiration: OVH.telephony.TokenExpirationEnum}): Promise<string>;
  /**
   * List the telephony.OvhPabxHuntingQueue objects
   * Create a new queue
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue', params: {billingAccount: string, serviceName: string, actionOnClosure?: OVH.telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: OVH.telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: OVH.telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: OVH.telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy: OVH.telephony.OvhPabxHuntingQueueStrategyEnum}): Promise<telephony.OvhPabxHuntingQueue>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Create a new skill for an agent (it adds the agent in a queue)
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent', params: {billingAccount: string, serviceName: string, position: number, queueId: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * eavesdrop operations
   * Eavesdrop on a call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop', params: {billingAccount: string, serviceName: string, queueId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * hangup operations
   * Hangup a call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup', params: {billingAccount: string, serviceName: string, queueId: string, id: string}): Promise<telephony.Task>;
  /**
   * hold operations
   * Toogle hold on call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold', params: {billingAccount: string, serviceName: string, queueId: string, id: string}): Promise<telephony.Task>;
  /**
   * intercept operations
   * Intercept a non answered call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept', params: {billingAccount: string, serviceName: string, queueId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * transfer operations
   * Transfer an answered call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer', params: {billingAccount: string, serviceName: string, queueId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * whisper operations
   * Whisper on a call
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper', params: {billingAccount: string, serviceName: string, queueId: string, id: string, number: string, whisperingMode: OVH.telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
  /**
   * List the telephony.EasyHuntingScreenListsConditions objects
   * Create a new screenlist condition for an extension
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions', params: {billingAccount: string, serviceName: string, callerIdNumber?: string, destinationNumber?: string, screenListType: OVH.telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<telephony.EasyHuntingScreenListsConditions>;
  /**
   * soundUpload operations
   * Upload new sound file
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/soundUpload', params: {billingAccount: string, serviceName: string, documentId?: string, name?: string, url?: string}): Promise<telephony.Task>;
  /**
   * List the telephony.EasyHuntingTimeConditions objects
   * Create a new time condition
   */
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions', params: {billingAccount: string, serviceName: string, policy: OVH.telephony.TimeConditionsPolicyEnum, timeFrom: string, timeTo: string, weekDay: OVH.telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}): Promise<telephony.EasyHuntingTimeConditions>;
  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects
   * Create a new agent
   */
  public post(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent', params: {billingAccount: string, serviceName: string, agentNumber: string, logged: boolean, noReplyTimer: number, position: number}): Promise<telephony.EasyMiniPabxHuntingAgent>;
  /**
   * toneUpload operations
   * Upload new tone file
   */
  public post(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones/toneUpload', params: {billingAccount: string, serviceName: string, documentId?: string, type: OVH.telephony.TonesTypeEnum, url?: string}): Promise<telephony.Task>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  public post(path: '/telephony/{billingAccount}/eventToken', params: {billingAccount: string, expiration: OVH.telephony.TokenExpirationEnum}): Promise<string>;
  /**
   * List the telephony.FaxCampaign objects
   * Create a new fax campaign
   */
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns', params: {billingAccount: string, serviceName: string, documentId: string, faxQuality?: OVH.telephony.FaxQualityEnum, name: string, recipientsDocId?: string, recipientsList?: string[], recipientsType: OVH.telephony.FaxCampaignRecipientsTypeEnum, sendDate?: string, sendType: OVH.telephony.FaxCampaignSendTypeEnum}): Promise<telephony.FaxCampaign>;
  /**
   * start operations
   * Start a fax campaign
   */
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/start', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * stop operations
   * Stop a fax campaign
   */
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/stop', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Fax ScreenLists
   * Create a new fax ScreenLists
   */
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', params: {billingAccount: string, serviceName: string, blacklistedNumbers?: string[], blacklistedTSI?: string[], filteringList?: OVH.telephony.FaxScreenListTypeEnum, whitelistedNumbers?: string[], whitelistedTSI?: string[]}): Promise<telephony.FaxScreen>;
  /**
   * reset operations
   * Reset a specifical fax screenList
   */
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists/reset', params: {billingAccount: string, serviceName: string, blacklistedNumbers?: boolean, blacklistedTSI?: boolean, whitelistedNumbers?: boolean, whitelistedTSI?: boolean}): Promise<void>;
  /**
   * changePassword operations
   * Generates a new password for your fax account
   */
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/settings/changePassword', params: {billingAccount: string, serviceName: string, password?: string}): Promise<string>;
  /**
   * sendFax operations
   * Send a fax
   */
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/settings/sendFax', params: {billingAccount: string, serviceName: string, dateSchedule?: string, pdfUrl: string, recipients: string[]}): Promise<telephony.Task>;
  /**
   * List the telephony.HistoryRepaymentConsumption objects
   * Ask for a new repayment
   */
  public post(path: '/telephony/{billingAccount}/historyRepaymentConsumption', params: {billingAccount: string, billingNumber?: string}): Promise<telephony.HistoryRepaymentConsumption>;
  /**
   * List the telephony.AbbreviatedNumber objects
   * Create a new abbreviated number for the line
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber', params: {billingAccount: string, serviceName: string, abbreviatedNumber: number, destinationNumber: string, name: string, surname: string}): Promise<telephony.AbbreviatedNumber>;
  /**
   * activateNewPhone operations
   * Allow to activate new phone, in case of phone switch
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/activateNewPhone', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * antihack operations
   * Clean the antihack or add it on active filter screen list
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/antihack', params: {billingAccount: string, serviceName: string, action: OVH.telephony.AntihackActionEnum, restricted?: string}): Promise<void>;
  /**
   * associateDevice operations
   * Associate a device to the current line with the device mac address
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/associateDevice', params: {billingAccount: string, serviceName: string, ipAddress?: string, macAddress: string}): Promise<void>;
  /**
   * List the telephony.CallsGenerated objects
   * Make an automatic phone call. Return generated call identifier
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall', params: {billingAccount: string, serviceName: string, bridgeNumberDialplan?: string, calledNumber: string, callingNumber?: string, dialplan: OVH.telephony.CallsGeneratorDialplanEnum, isAnonymous: boolean, playbackAudioFileDialplan?: string, timeout?: number, ttsTextDialplan?: string}): Promise<string>;
  /**
   * block operations
   * Block the line. By default it will block incoming and outgoing calls (except for emergency numbers)
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/block', params: {billingAccount: string, serviceName: string, mode?: OVH.telephony.LineBlockingMode}): Promise<void>;
  /**
   * eavesdrop operations
   * Eavesdrop on a call
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/eavesdrop', params: {billingAccount: string, serviceName: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * hangup operations
   * Hangup a call
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hangup', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.Task>;
  /**
   * hold operations
   * Toogle hold on call
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hold', params: {billingAccount: string, serviceName: string, id: string}): Promise<telephony.Task>;
  /**
   * intercept operations
   * Intercept a non answered call
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/intercept', params: {billingAccount: string, serviceName: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * transfer operations
   * Transfer an answered call
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/transfer', params: {billingAccount: string, serviceName: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * whisper operations
   * Whisper on a call
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper', params: {billingAccount: string, serviceName: string, id: string, number: string, whisperingMode: OVH.telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
  /**
   * cancelConvertToNumber operations
   * Cancel a scheduled conversion to number
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/cancelConvertToNumber', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * changePassword operations
   * Change the SIP account password. It must be more than 7 and less than 21 alpha and numerical characters.
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/changePassword', params: {billingAccount: string, serviceName: string, password?: string}): Promise<void>;
  /**
   * click2Call operations
   * Make a phone call from the current line
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2Call', params: {billingAccount: string, serviceName: string, calledNumber: string, callingNumber?: string, intercom?: boolean}): Promise<void>;
  /**
   * List the telephony.Click2CallUser objects
   * Create a new user for click 2 call
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser', params: {billingAccount: string, serviceName: string, login: string, password: string}): Promise<number>;
  /**
   * changePassword operations
   * Change the password of the click2call user
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/changePassword', params: {billingAccount: string, serviceName: string, id: string, password: string}): Promise<void>;
  /**
   * click2Call operations
   * Make a phone call from the current line
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call', params: {billingAccount: string, serviceName: string, id: string, calledNumber: string, callingNumber?: string}): Promise<void>;
  /**
   * convertToNumber operations
   * Schedule a conversion to number
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/convertToNumber', params: {billingAccount: string, serviceName: string}): Promise<telephony.OfferTask>;
  /**
   * dissociateDevice operations
   * Dissociate a device from the current line with the device mac address
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/dissociateDevice', params: {billingAccount: string, serviceName: string, ipAddress?: string, macAddress: string}): Promise<void>;
  /**
   * changePhoneConfiguration operations
   * Edit configuration of the phone remotely by provisioning
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration', params: {billingAccount: string, serviceName: string, autoReboot?: boolean, newConfigurations?: OVH.complexType.SafeKeyValue<string>[]}): Promise<void>;
  /**
   * List the telephony.Phonebook objects
   * Add a phonebook. Return the bookKey.
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook', params: {billingAccount: string, serviceName: string, name: string}): Promise<string>;
  /**
   * import operations
   * Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/import', params: {billingAccount: string, serviceName: string, bookKey: string, documentId: string}): Promise<telephony.Task>;
  /**
   * List the telephony.PhonebookContact objects
   * Create a phonebook contact. Return identifier of the phonebook contact.
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact', params: {billingAccount: string, serviceName: string, bookKey: string, group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}): Promise<number>;
  /**
   * reboot operations
   * Create a task to reboot the phone
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/reboot', params: {billingAccount: string, serviceName: string}): Promise<telephony.Task>;
  /**
   * refreshScreen operations
   * Create a task to refresh the screen of the MGCP phone
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/refreshScreen', params: {billingAccount: string, serviceName: string}): Promise<telephony.Task>;
  /**
   * resetConfig operations
   * Reinitialize the phone configuration
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/resetConfig', params: {billingAccount: string, serviceName: string, ip: string}): Promise<telephony.ResetPhoneInfo>;
  /**
   * List the telephony.Rma objects
   * Create a specific rma
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma', params: {billingAccount: string, serviceName: string, mondialRelayId?: string, newMerchandise?: string, shippingContactId?: number, type: OVH.telephony.RmaPublicTypeEnum}): Promise<telephony.RmaReturn>;
  /**
   * removeSimultaneousLines operations
   * Remove extra simultaneous lines
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/removeSimultaneousLines', params: {billingAccount: string, serviceName: string, quantityRemove: number}): Promise<void>;
  /**
   * toneUpload operations
   * Upload new tone file
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/tones/toneUpload', params: {billingAccount: string, serviceName: string, documentId?: string, type: OVH.telephony.TonesTypeEnum, url?: string}): Promise<telephony.Task>;
  /**
   * List the telephony.trafficExtract objects
   * Launch a traffic extract on your line
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts', params: {billingAccount: string, serviceName: string, dateEnd: string, dateStart: string}): Promise<telephony.trafficExtract>;
  /**
   * unblock operations
   * Unblock the line. It will remove any incoming and outboing block made earlier
   */
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/unblock', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects
   * Create a new agent
   */
  public post(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent', params: {billingAccount: string, serviceName: string, agentNumber: string, logged: boolean, noReplyTimer: number, position: number}): Promise<telephony.EasyMiniPabxHuntingAgent>;
  /**
   * toneUpload operations
   * Upload new tone file
   */
  public post(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones/toneUpload', params: {billingAccount: string, serviceName: string, documentId?: string, type: OVH.telephony.TonesTypeEnum, url?: string}): Promise<telephony.Task>;
  /**
   * cancelConvertToLine operations
   * Cancel a scheduled conversion to line
   */
  public post(path: '/telephony/{billingAccount}/number/{serviceName}/cancelConvertToLine', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * changeFeatureType operations
   * Change the feature type of the phone number
   */
  public post(path: '/telephony/{billingAccount}/number/{serviceName}/changeFeatureType', params: {billingAccount: string, serviceName: string, featureType: OVH.telephony.TypeEnum}): Promise<telephony.Task>;
  /**
   * convertToLine operations
   * Schedule a conversion to line
   */
  public post(path: '/telephony/{billingAccount}/number/{serviceName}/convertToLine', params: {billingAccount: string, serviceName: string, offer: string}): Promise<telephony.OfferTask>;
  /**
   * List the telephony.ConsumptionThreshold objects
   * Add an outplan notification on the billing account
   */
  public post(path: '/telephony/{billingAccount}/outplanNotification', params: {billingAccount: string, block: OVH.telephony.OutplanNotificationBlockEnum, notifyEmail?: string, percentage: number}): Promise<telephony.ConsumptionThreshold>;
  /**
   * List the telephony.OvhPabxDialplan objects
   * Create a new dialplan
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan', params: {billingAccount: string, serviceName: string, anonymousRejection: boolean, name: string, showCallerNumber: OVH.telephony.OvhPabxDialplanNumberPresentationEnum, transferTimeout: number}): Promise<telephony.OvhPabxDialplan>;
  /**
   * List the telephony.OvhPabxDialplanExtension objects
   * Create a new extension for a dialplan
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension', params: {billingAccount: string, serviceName: string, dialplanId: string, enable: boolean, position: number, schedulerCategory?: OVH.telephony.SchedulerCategoryEnum, screenListType?: OVH.telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<telephony.OvhPabxDialplanExtension>;
  /**
   * List the telephony.OvhPabxDialplanExtensionConditionScreenList objects
   * Create a new screenlist condition for an extension
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, callerIdNumber?: string, destinationNumber?: string, screenListType?: OVH.telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<telephony.OvhPabxDialplanExtensionConditionScreenList>;
  /**
   * List the telephony.OvhPabxDialplanExtensionConditionTime objects
   * Create a new time condition for an extension
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, timeFrom: string, timeTo: string, weekDay: OVH.telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum}): Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
  /**
   * List the telephony.OvhPabxDialplanExtensionRule objects
   * Create a new rule for an extension
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, action: OVH.telephony.OvhPabxDialplanExtensionRuleActionEnum, actionParam?: string, negativeAction: boolean, position: number}): Promise<telephony.OvhPabxDialplanExtensionRule>;
  /**
   * List the telephony.OvhPabxHuntingAgent objects
   * Create a new agent
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent', params: {billingAccount: string, serviceName: string, description?: string, number: string, simultaneousLines: number, status: OVH.telephony.OvhPabxHuntingAgentStatusEnum, timeout: number, wrapUpTime: number}): Promise<telephony.OvhPabxHuntingAgent>;
  /**
   * The web access for your cloudpabx
   * Create a new web access for this ressource
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<telephony.BannerAccess>;
  /**
   * eavesdrop operations
   * Eavesdrop on a call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop', params: {billingAccount: string, serviceName: string, agentId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * hangup operations
   * Hangup a call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup', params: {billingAccount: string, serviceName: string, agentId: string, id: string}): Promise<telephony.Task>;
  /**
   * hold operations
   * Toogle hold on call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold', params: {billingAccount: string, serviceName: string, agentId: string, id: string}): Promise<telephony.Task>;
  /**
   * intercept operations
   * Intercept a non answered call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept', params: {billingAccount: string, serviceName: string, agentId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * transfer operations
   * Transfer an answered call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer', params: {billingAccount: string, serviceName: string, agentId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * whisper operations
   * Whisper on a call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper', params: {billingAccount: string, serviceName: string, agentId: string, id: string, number: string, whisperingMode: OVH.telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken', params: {billingAccount: string, serviceName: string, agentId: string, expiration: OVH.telephony.TokenExpirationEnum}): Promise<string>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Create a new skill for an agent (it adds the agent in a queue)
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue', params: {billingAccount: string, serviceName: string, agentId: string, position: number, queueId: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * List the telephony.OvhPabxCustomStatus objects
   * Create a new custom status
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus', params: {billingAccount: string, serviceName: string, color?: string, description?: string, name: string}): Promise<telephony.OvhPabxCustomStatus>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken', params: {billingAccount: string, serviceName: string, expiration: OVH.telephony.TokenExpirationEnum}): Promise<string>;
  /**
   * List the telephony.OvhPabxHuntingQueue objects
   * Create a new queue
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue', params: {billingAccount: string, serviceName: string, actionOnClosure?: OVH.telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: OVH.telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: OVH.telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: OVH.telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy: OVH.telephony.OvhPabxHuntingQueueStrategyEnum}): Promise<telephony.OvhPabxHuntingQueue>;
  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects
   * Create a new skill for an agent (it adds the agent in a queue)
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent', params: {billingAccount: string, serviceName: string, position: number, queueId: number}): Promise<telephony.OvhPabxHuntingAgentQueue>;
  /**
   * eavesdrop operations
   * Eavesdrop on a call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop', params: {billingAccount: string, serviceName: string, queueId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * hangup operations
   * Hangup a call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup', params: {billingAccount: string, serviceName: string, queueId: string, id: string}): Promise<telephony.Task>;
  /**
   * hold operations
   * Toogle hold on call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold', params: {billingAccount: string, serviceName: string, queueId: string, id: string}): Promise<telephony.Task>;
  /**
   * intercept operations
   * Intercept a non answered call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept', params: {billingAccount: string, serviceName: string, queueId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * transfer operations
   * Transfer an answered call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer', params: {billingAccount: string, serviceName: string, queueId: string, id: string, number: string}): Promise<telephony.Task>;
  /**
   * whisper operations
   * Whisper on a call
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper', params: {billingAccount: string, serviceName: string, queueId: string, id: string, number: string, whisperingMode: OVH.telephony.OvhPabxWhisperingModeEnum}): Promise<telephony.Task>;
  /**
   * List the telephony.OvhPabxMenu objects
   * Create a new menu
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu', params: {billingAccount: string, serviceName: string, greetSound?: number, greetSoundTts?: number, invalidSound?: number, invalidSoundTts?: number, name: string}): Promise<telephony.OvhPabxMenu>;
  /**
   * List the telephony.OvhPabxMenuEntry objects
   * Create a new menu entry
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry', params: {billingAccount: string, serviceName: string, menuId: string, action: OVH.telephony.OvhPabxIvrMenuEntryActionEnum, actionParam?: string, dtmf: string, position: number}): Promise<telephony.OvhPabxMenuEntry>;
  /**
   * soundUpload operations
   * Upload new sound file
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/soundUpload', params: {billingAccount: string, serviceName: string, documentId?: string, name?: string, url?: string}): Promise<telephony.Task>;
  /**
   * List the telephony.OvhPabxTts objects
   * Create a new text to speech
   */
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts', params: {billingAccount: string, serviceName: string, text: string, voice?: OVH.telephony.OvhPabxTtsVoiceEnum}): Promise<void>;
  /**
   * List the telephony.PhonebookMaster objects
   * Add a phonebook on group. Return the bookKey.
   */
  public post(path: '/telephony/{billingAccount}/phonebook', params: {billingAccount: string, name: string}): Promise<string>;
  /**
   * import operations
   * Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
   */
  public post(path: '/telephony/{billingAccount}/phonebook/{bookKey}/import', params: {billingAccount: string, bookKey: string, documentId: string}): Promise<telephony.Task>;
  /**
   * List the telephony.PhonebookContact objects
   * Create a phonebook contact. Return identifier of the phonebook contact.
   */
  public post(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact', params: {billingAccount: string, bookKey: string, group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}): Promise<number>;
  /**
   * cancel operations
   * Ask to cancel the portability
   */
  public post(path: '/telephony/{billingAccount}/portability/{id}/cancel', params: {billingAccount: string, id: string, reason?: string}): Promise<void>;
  /**
   * changeDate operations
   * Ask to change the portability date
   */
  public post(path: '/telephony/{billingAccount}/portability/{id}/changeDate', params: {billingAccount: string, id: string, date: string}): Promise<void>;
  /**
   * List the telephony.PortabilityDocument objects
   * Create a portability document
   */
  public post(path: '/telephony/{billingAccount}/portability/{id}/document', params: {billingAccount: string, id: string, description?: string, name: string}): Promise<telephony.PortabilityDocument>;
  /**
   * execute operations
   * Ask to execute the portability
   */
  public post(path: '/telephony/{billingAccount}/portability/{id}/execute', params: {billingAccount: string, id: string}): Promise<void>;
  /**
   * relaunch operations
   * Fix error and relaunch portability
   */
  public post(path: '/telephony/{billingAccount}/portability/{id}/relaunch', params: {billingAccount: string, id: string, parameters: OVH.complexType.SafeKeyValue<string>[]}): Promise<void>;
  /**
   * changeDestination operations
   * Change the destination of the redirect
   */
  public post(path: '/telephony/{billingAccount}/redirect/{serviceName}/changeDestination', params: {billingAccount: string, serviceName: string, destination: string}): Promise<telephony.Task>;
  /**
   * cancelScheduledRateCode operations
   * Cancel a scheduled rate code update
   */
  public post(path: '/telephony/{billingAccount}/rsva/{serviceName}/cancelScheduledRateCode', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * scheduleRateCode operations
   * Schedule a new rate code for this sva
   */
  public post(path: '/telephony/{billingAccount}/rsva/{serviceName}/scheduleRateCode', params: {billingAccount: string, serviceName: string, rateCode: string}): Promise<telephony.DetailedRateCodeInformation>;
  /**
   * List the telephony.SchedulerEvent objects
   * Add a scheduler event
   */
  public post(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events', params: {billingAccount: string, serviceName: string, category: OVH.telephony.SchedulerCategoryEnum, dateEnd: string, dateStart: string, description?: string, title: string, uid?: string}): Promise<void>;
  /**
   * importIcsCalendar operations
   * Add scheduler events in ICS format
   */
  public post(path: '/telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar', params: {billingAccount: string, serviceName: string, url: string}): Promise<telephony.Task>;
  /**
   * List the telephony.ScreenList objects
   * Create a new screen list rule
   */
  public post(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists', params: {billingAccount: string, serviceName: string, callNumber?: string, nature: OVH.telephony.ScreenListNatureEnum, type: OVH.telephony.ScreenListTypeEnum}): Promise<void>;
  /**
   * cancelTermination operations
   * Cancel the service termination
   */
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/cancelTermination', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * changeOfBillingAccount operations
   * Move a service of billing account. Source and destination nics should be the same.
   */
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount', params: {billingAccount: string, serviceName: string, billingAccountDestination: string}): Promise<void>;
  /**
   * fetchEntrepriseInformations operations
   * Get company entreprise informations by providing entreprise number
   */
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations', params: {billingAccount: string, serviceName: string, entrepriseNumber: string}): Promise<telephony.EntrepriseNumberInformationsTask>;
  /**
   * Token associated to the service for live event
   * Create a new token
   */
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken', params: {billingAccount: string, serviceName: string, expiration: OVH.telephony.TokenExpirationEnum}): Promise<string>;
  /**
   * Offer change
   * Add a new offer change
   */
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange', params: {billingAccount: string, serviceName: string, offer: string}): Promise<void>;
  /**
   * List the telephony.TimeCondition objects
   * Create a new time condition rule
   */
  public post(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition', params: {billingAccount: string, serviceName: string, day: OVH.telephony.TimeConditionsDayEnum, hourBegin: string, hourEnd: string, policy: OVH.telephony.TimeConditionsPolicyEnum}): Promise<telephony.TimeCondition>;
  /**
   * transferSecurityDeposit operations
   * Transfer security deposit between two billing accounts
   */
  public post(path: '/telephony/{billingAccount}/transferSecurityDeposit', params: {billingAccount: string, amount: number, billingAccountDestination: string}): Promise<void>;
  /**
   * List the telephony.TrunkExternalDisplayedNumber objects
   * External displayed number creation for a given trunk
   */
  public post(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber', params: {billingAccount: string, serviceName: string, autoValidation?: boolean, number: string}): Promise<telephony.TrunkExternalDisplayedNumber>;
  /**
   * validate operations
   * Generate a phone call for validation. Returned validation code should be typed when asked.
   */
  public post(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}/validate', params: {billingAccount: string, serviceName: string, number: string}): Promise<telephony.TrunkExternalDisplayedNumberValidation>;
  /**
   * move operations
   * Move the message to another directory
   */
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/move', params: {billingAccount: string, serviceName: string, id: string, dir: OVH.telephony.VoicemailMessageFolderDirectoryEnum}): Promise<void>;
  /**
   * List the telephony.VoicemailGreetings objects
   * Upload a new sound for a specific greeting. Return a task id.
   */
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings', params: {billingAccount: string, serviceName: string, dir: OVH.telephony.VoicemailMessageFolderGreetingEnum, documentId: string}): Promise<number>;
  /**
   * move operations
   * Move the message to another directory
   */
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move', params: {billingAccount: string, serviceName: string, id: string, dir: OVH.telephony.VoicemailMessageFolderGreetingEnum}): Promise<void>;
  /**
   * migrateOnNewVersion operations
   * Change the voicemail on a new version to manager greetings, directories and extra settings.
   */
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/migrateOnNewVersion', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * changePassword operations
   * Change the voicemail password. It must be 4 digit
   */
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/changePassword', params: {billingAccount: string, serviceName: string, password: string}): Promise<void>;
  /**
   * changeRouting operations
   * Disable/Enable voicemail. Available only if the line has fax capabilities
   */
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting', params: {billingAccount: string, serviceName: string, routing: OVH.telephony.VoicefaxRoutingEnum}): Promise<void>;
  /**
   * logs operations
   * Generate a temporary url to retrieve device logs
   */
  public post(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings/logs', params: {billingAccount: string, serviceName: string}): Promise<telephony.TemporaryLogsLink>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/telephony/aliases/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/telephony/lines/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Get all available SIP domains by country
   * Get all available SIP domains by country
   */
  public post(path: '/telephony/setDefaultSipDomain', params: {country: OVH.telephony.NumberCountryEnum, domain: string, type: OVH.telephony.SipDomainProductTypeEnum}): Promise<void>;
  /**
   * List the telephony.Sound objects
   * Create a new sound
   */
  public post(path: '/telephony/sounds', params: {description?: string, filename: string}): Promise<telephony.Sound>;
  /**
   * replace operations
   * Replace the phone by its spare. The broken phone became a spare if it was bought. An RMA is created if the broken phone is under securitydeposit.
   */
  public post(path: '/telephony/spare/{spare}/replace', params: {spare: string, domain: string, ip: string}): Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/telephony/trunks/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  public post(path: PathsTelephonyPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Billing Account
   * Ask for a billing account termination.
   */
  public delete(path: '/telephony/{billingAccount}', params: {billingAccount: string}): Promise<void>;
  /**
   * Abbreviated number
   * Delete the given abbreviated number
   */
  public delete(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}', params: {billingAccount: string, abbreviatedNumber: string}): Promise<void>;
  /**
   * List public web access of your conference
   * Delete a public web access to your conference
   */
  public delete(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Calls agent
   * Delete the given agent
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<void>;
  /**
   * The web access for your cloudpabx
   * Delete the given web access
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<void>;
  /**
   * Agent assigned to a queue
   * Delete the given skill
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', params: {billingAccount: string, serviceName: string, agentId: string, queueId: string}): Promise<void>;
  /**
   * Custom statuses of your callcenter agents
   * Delete the given custom status
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * Calls queue
   * Delete the given queue
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}', params: {billingAccount: string, serviceName: string, queueId: string}): Promise<void>;
  /**
   * Agent assigned to a queue
   * Delete the given skill
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', params: {billingAccount: string, serviceName: string, queueId: string, agentId: string}): Promise<void>;
  /**
   * The PABX records
   * Delete the given record
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Screenlist condition
   * Delete the given condition
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}', params: {billingAccount: string, serviceName: string, conditionId: string}): Promise<void>;
  /**
   * The PABX sounds
   * Delete the given sound
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}', params: {billingAccount: string, serviceName: string, soundId: string}): Promise<void>;
  /**
   * Easy hunting time conditions
   * Delete the given condition
   */
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}', params: {billingAccount: string, serviceName: string, conditionId: string}): Promise<void>;
  /**
   * Easy/Mini PABX agent
   * Delete the agent
   */
  public delete(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}', params: {billingAccount: string, serviceName: string, agentNumber: string}): Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  public delete(path: '/telephony/{billingAccount}/eventToken', params: {billingAccount: string}): Promise<void>;
  /**
   * Fax campaigns
   * Delete a fax campaign
   */
  public delete(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Fax ScreenLists
   * Delete all fax screenLists
   */
  public delete(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * Abbreviated number
   * Delete the given abbreviated number
   */
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}', params: {billingAccount: string, serviceName: string, abbreviatedNumber: string}): Promise<void>;
  /**
   * User of the click 2 call
   * Delete a click 2 call user
   */
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Phone book
   * Delete a phonebook
   */
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}', params: {billingAccount: string, serviceName: string, bookKey: string}): Promise<void>;
  /**
   * Phone book contact
   * Delete a phonebook contact
   */
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}', params: {billingAccount: string, serviceName: string, bookKey: string, id: string}): Promise<void>;
  /**
   * Current Return Merchandise Authorisation
   * Cancel the rma
   */
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * The PABX records
   * Delete the given record
   */
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/records/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Traffic extracts (SIP) of your line
   * Delete a traffic extract
   */
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Easy/Mini PABX agent
   * Delete the agent
   */
  public delete(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}', params: {billingAccount: string, serviceName: string, agentNumber: string}): Promise<void>;
  /**
   * The outplan notifications configured for your billing account
   * Delete an outplan notification
   */
  public delete(path: '/telephony/{billingAccount}/outplanNotification/{id}', params: {billingAccount: string, id: string}): Promise<void>;
  /**
   * Dialplan
   * Delete the given dialplan
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}', params: {billingAccount: string, serviceName: string, dialplanId: string}): Promise<void>;
  /**
   * Dialplan extension
   * Delete the given extension
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string}): Promise<void>;
  /**
   * Screenlist condition
   * Delete the given condition
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, conditionId: string}): Promise<void>;
  /**
   * Time condition
   * Delete the given condition
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, conditionId: string}): Promise<void>;
  /**
   * Dialplan rule
   * Delete the given rule
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}', params: {billingAccount: string, serviceName: string, dialplanId: string, extensionId: string, ruleId: string}): Promise<void>;
  /**
   * Calls agent
   * Delete the given agent
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<void>;
  /**
   * The web access for your cloudpabx
   * Delete the given web access
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken', params: {billingAccount: string, serviceName: string, agentId: string}): Promise<void>;
  /**
   * Agent assigned to a queue
   * Delete the given skill
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', params: {billingAccount: string, serviceName: string, agentId: string, queueId: string}): Promise<void>;
  /**
   * Custom statuses of your callcenter agents
   * Delete the given custom status
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * Calls queue
   * Delete the given queue
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}', params: {billingAccount: string, serviceName: string, queueId: string}): Promise<void>;
  /**
   * Agent assigned to a queue
   * Delete the given skill
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', params: {billingAccount: string, serviceName: string, queueId: string, agentId: string}): Promise<void>;
  /**
   * IVR Menu
   * Delete the given menu
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}', params: {billingAccount: string, serviceName: string, menuId: string}): Promise<void>;
  /**
   * IVR menu entry
   * Delete the given menu entry
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}', params: {billingAccount: string, serviceName: string, menuId: string, entryId: string}): Promise<void>;
  /**
   * The PABX records
   * Delete the given record
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * The PABX sounds
   * Delete the given sound
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}', params: {billingAccount: string, serviceName: string, soundId: string}): Promise<void>;
  /**
   * The PABX Text To Speech sounds
   * Delete the given text to speech
   */
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Phone book on group
   * Delete a phonebook
   */
  public delete(path: '/telephony/{billingAccount}/phonebook/{bookKey}', params: {billingAccount: string, bookKey: string}): Promise<void>;
  /**
   * Phone book contact
   * Delete a phonebook contact
   */
  public delete(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}', params: {billingAccount: string, bookKey: string, id: string}): Promise<void>;
  /**
   * Document linked to a portability
   * Delete the document
   */
  public delete(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}', params: {billingAccount: string, id: string, documentId: string}): Promise<void>;
  /**
   * Scheduled event
   * Delete the given scheduler event
   */
  public delete(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}', params: {billingAccount: string, serviceName: string, uid: string}): Promise<void>;
  /**
   * Screen list
   * Delete the given screen list
   */
  public delete(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Telephony service
   * Ask for a service termination.
   */
  public delete(path: '/telephony/{billingAccount}/service/{serviceName}', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * Token associated to the service for live event
   * Delete the given token
   */
  public delete(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * Offer change
   * Delete the replacement offer scheduling
   */
  public delete(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange', params: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
   * Time conditions
   * Delete the given screen list
   */
  public delete(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * External displayed number linked to a trunk
   * Delete an external displayed number for a given trunk
   */
  public delete(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}', params: {billingAccount: string, serviceName: string, number: string}): Promise<void>;
  /**
   * Voicemail message
   * Delete the given voicemail message
   */
  public delete(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Voicemail greeting
   * Delete the customized greeting
   */
  public delete(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}', params: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
   * Sounds attached to this telephony account
   * Delete the sound
   */
  public delete(path: '/telephony/sounds/{id}', params: {id: string}): Promise<void>;
  /**
   * Spare properties
   * Delete the spare as if it was not belonging to OVH anymore
   */
  public delete(path: '/telephony/spare/{spare}', params: {spare: string}): Promise<void>;
  public delete(path: PathsTelephonyDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}