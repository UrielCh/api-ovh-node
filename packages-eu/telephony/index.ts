import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /telephony Models
 * Source: https://eu.api.ovh.com/1.0/telephony.json
 */
export namespace complexType {
    /**
     * Start and end points (inclusive) of a range
     * interface fullName: complexType.Range.Range
     */
    export interface Range<T> {
        from: T;
        to: T;
    }
    /**
     * Key and value, with proper key strings
     * interface fullName: complexType.SafeKeyValue.SafeKeyValue
     */
    export interface SafeKeyValue<T> {
        key: string;
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
export namespace coreTypes {
    /**
     * ISO country codes
     * type fullname: coreTypes.CountryEnum
     */
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
    /**
     * IANA TimeZone names
     * type fullname: coreTypes.TimeZoneEnum
     */
    export type TimeZoneEnum = "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis"
}
export namespace nichandle {
    /**
     * All genders a person can choose
     * type fullname: nichandle.GenderEnum
     */
    export type GenderEnum = "female" | "male"
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
    export namespace telephony {
        /**
         * Spare properties
         * interface fullName: spare.telephony.TelephonySpare.TelephonySpare
         */
        export interface TelephonySpare {
            brand: string;
            macAddress: string;
            protocol: telephonyProtocolEnum;
        }
    }
}
export namespace telephony {
    /**
     * Abbreviated number
     * interface fullName: telephony.AbbreviatedNumber.AbbreviatedNumber
     */
    export interface AbbreviatedNumber {
        abbreviatedNumber: number;
        destinationNumber: string;
        name: string;
        surname: string;
    }
    /**
     * Abbreviated number
     * interface fullName: telephony.AbbreviatedNumberGroup.AbbreviatedNumberGroup
     */
    export interface AbbreviatedNumberGroup {
        abbreviatedNumber: number;
        destinationNumber: string;
        name: string;
        surname: string;
    }
    /**
     * Informations related to a line offer
     * interface fullName: telephony.AccessoryOffer.AccessoryOffer
     */
    export interface AccessoryOffer {
        description?: string;
        name: string;
        price: order.Price;
        url?: string;
    }
    /**
     * Action for list antihack
     * type fullname: telephony.AntihackActionEnum
     */
    export type AntihackActionEnum = "AUTHORIZE_ALL" | "AUTHORIZE_ONE_NUMBER" | "BLOCK_ALL" | "BLOCK_ONE_NUMBER"
    /**
     * The web access for your cloudpabx
     * interface fullName: telephony.BannerAccess.BannerAccess
     */
    export interface BannerAccess {
        creationDate: string;
        id: number;
        url: string;
    }
    /**
     * Document suffix
     * type fullname: telephony.BillDocument
     */
    export type BillDocument = "csv" | "pdf" | "received.csv" | "xml"
    /**
     * Billing progress status
     * type fullname: telephony.BillStatusEnum
     */
    export type BillStatusEnum = "doing" | "done" | "error" | "todo"
    /**
     * Billing Account
     * interface fullName: telephony.BillingAccount.BillingAccount
     */
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
    /**
     * Status of billing account
     * type fullname: telephony.BillingAccountStatusEnum
     */
    export type BillingAccountStatusEnum = "closed" | "deleted" | "enabled" | "expired"
    /**
     * Call diagnostic analyze structure on metric performance values
     * interface fullName: telephony.CallDiagnosticCallQuality.CallDiagnosticCallQuality
     */
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
    /**
     * SS7 ISUP cause codes
     * type fullname: telephony.CallDiagnosticCauseEnum
     */
    export type CallDiagnosticCauseEnum = "1" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "1a" | "1b" | "1c" | "1d" | "1e" | "1f" | "2" | "22" | "26" | "27" | "28" | "29" | "2a" | "2b" | "2c" | "2e" | "2f" | "3" | "30" | "31" | "32" | "33" | "34" | "35" | "37" | "39" | "3a" | "3e" | "3f" | "4" | "41" | "42" | "45" | "46" | "4f" | "5" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "5a" | "5b" | "5f" | "6" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "6e" | "6f" | "7" | "7f" | "8" | "9"
    /**
     * Call diagnostic analyze structure call cdrs
     * interface fullName: telephony.CallDiagnosticCdrs.CallDiagnosticCdrs
     */
    export interface CallDiagnosticCdrs {
        basic: telephony.CallDiagnosticCdrsBasic;
        timestamp: string;
    }
    /**
     * Call diagnostic analyze structure call cdrs
     * interface fullName: telephony.CallDiagnosticCdrsBasic.CallDiagnosticCdrsBasic
     */
    export interface CallDiagnosticCdrsBasic {
        cause: telephony.CallDiagnosticCauseEnum;
        causeDescription: string;
        releaseLocation: telephony.ReleaseLocationEnum;
    }
    /**
     * Enumeration providing payload type to Name of RTP audio video profile
     * type fullname: telephony.CallDiagnosticCodecEnum
     */
    export type CallDiagnosticCodecEnum = "G722" | "G729" | "PCMA" | "PCMU"
    /**
     * Reporting of the current diagnostic
     * interface fullName: telephony.CallDiagnosticReporting.CallDiagnosticReporting
     */
    export interface CallDiagnosticReporting {
        message: string;
    }
    /**
     * Call diagnostic analyze structure on sip signal
     * interface fullName: telephony.CallDiagnosticSip.CallDiagnosticSip
     */
    export interface CallDiagnosticSip {
        headers: string;
        requestMethod?: string;
        response?: string;
        timestamp: string;
    }
    /**
     * Information extraction status
     * type fullname: telephony.CallDiagnosticStatusEnum
     */
    export type CallDiagnosticStatusEnum = "doing" | "done" | "error" | "todo"
    /**
     * Advanced diagnostic of the voice call
     * interface fullName: telephony.CallDiagnostics.CallDiagnostics
     */
    export interface CallDiagnostics {
        callQuality: telephony.CallDiagnosticCallQuality[];
        cdrs: telephony.CallDiagnosticCdrs[];
        reporting: telephony.CallDiagnosticReporting[];
        sip: telephony.CallDiagnosticSip[];
        status: telephony.CallDiagnosticStatusEnum;
    }
    /**
     * Automatic Call made by Call Generator on this line
     * interface fullName: telephony.CallsGenerated.CallsGenerated
     */
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
    /**
     * Types of dialplan available for callsGenerator.
     * type fullname: telephony.CallsGeneratorDialplanEnum
     */
    export type CallsGeneratorDialplanEnum = "ReadText" | "RequestAppointmentConfirmation" | "RequestAppointmentConfirmationWithTransfer"
    /**
     * Types of hangupCause for generated calls.
     * type fullname: telephony.CallsGeneratorHangupCauseEnum
     */
    export type CallsGeneratorHangupCauseEnum = "AccessInformationDiscarded" | "AllottedTimeout" | "AttendedTransfer" | "BlindTransfer" | "CallAwardedbeing" | "ChannelTypeNotImplemented" | "ChannelUnacceptable" | "CodeSip403BearerCapabilityNotAuthorized" | "CodeSip403IncomingCallsBarred" | "CodeSip403OutgoingCallsBarred" | "CodeSip404NoRouteToDestination" | "CodeSip404NoRouteToSpecifiedTransitNetwork" | "CodeSip404UnallocatedNumber" | "CodeSip408NoUserResponding" | "CodeSip410NumberChanged" | "CodeSip410RedirectionToNewDestination" | "CodeSip480NoAnswerFromUser" | "CodeSip480NormalUnspecified" | "CodeSip480SubscriberAbsent" | "CodeSip483ExchangeRoutingError" | "CodeSip484InvalidNumberFormatAddressIncomplete" | "CodeSip486UserBusy" | "CodeSip487OriginatorCancel" | "CodeSip488IncompatibleDestination" | "CodeSip488bearerCapabilityNotImplemented" | "CodeSip501FacilitiesRejected" | "CodeSip501RequestedFacilityNotImplemented" | "CodeSip501ServiceOrOptionNotImplementedUnspecified" | "CodeSip502DestinationOutOfOrder" | "CodeSip503BearerCapabilityNotPresentlyAvailable" | "CodeSip503NetworkOutOfOrder" | "CodeSip503NoCircuitChannelAvailable" | "CodeSip503RequestedCircuitOrChannelNotAvailable" | "CodeSip503SwitchingEquipmentCongestion" | "CodeSip503TemporaryFailure" | "CodeSip504RecoveryOnTimerExpiry" | "CodeSip603CallRejected" | "Crash" | "GatewayDown" | "InformationElementOrParameterNonExistentOrNotImplemented" | "InterworkingUnspecified" | "InvalidCallReferenceValue" | "InvalidInformationElementContents" | "InvalidMessageUnspecified" | "LoseRace" | "ManagerRequest" | "MandatoryInformationElementIsMissing" | "MediaTimeout" | "MessageNotCompatibleWithCallState" | "MessageNotCompatibleWithCallStateOrMessageTypeNonExistentOrNotImplemented" | "MessageTypeNonExistentOrNotImplemented" | "NormalCallClearing" | "ParameterNonExistentOrNotImplementedPassedOnNationalUse" | "PickedOff" | "PreEmpted" | "ProgressTimeout" | "ProtocolErrorUnspecified" | "RequestedFacilityNotSubscribed" | "ResponseToStatusInquiry" | "ServiceOrOptionNotAvailableUnspecified" | "SystemShutdown" | "UnknownOrCallUnfinished" | "UnspecifiedNoOtherCauseCodesApplicable" | "UserChallenge" | "UserNotRegistered"
    /**
     * CarrierSip
     * interface fullName: telephony.CarrierSip.CarrierSip
     */
    export interface CarrierSip {
        description: string;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * The information about the Carrier SIP cluster attached to your service
     * interface fullName: telephony.CarrierSipClusterInfo.CarrierSipClusterInfo
     */
    export interface CarrierSipClusterInfo {
        name: string;
        zones: telephony.CarrierSipClusterZone[];
    }
    /**
     * The information about a carrier sip cluster zone
     * interface fullName: telephony.CarrierSipClusterZone.CarrierSipClusterZone
     */
    export interface CarrierSipClusterZone {
        mediaIps: string[];
        region: telephony.CarrierSipClusterZoneRegionEnum;
    }
    /**
     * Carrier SIP Zone Regions
     * type fullname: telephony.CarrierSipClusterZoneRegionEnum
     */
    export type CarrierSipClusterZoneRegionEnum = "rbx" | "sbg"
    /**
     * Carrier SIP Endpoints
     * interface fullName: telephony.CarrierSipCustomerEndpoint.CarrierSipCustomerEndpoint
     */
    export interface CarrierSipCustomerEndpoint {
        enableIncomingCalls: boolean;
        id: number;
        ip: string;
        port: number;
        priority: number;
        protocol: telephony.CarrierSipEndpointProtocolEnum;
        weight: number;
    }
    /**
     * Carrier SIP Properties
     * interface fullName: telephony.CarrierSipDetails.CarrierSipDetails
     */
    export interface CarrierSipDetails {
        description: string;
        maxCallsPerSecond: number;
        maxConcurrentCalls: number;
    }
    /**
     * Protocol of a carrier sip trunk customer endpoint
     * type fullname: telephony.CarrierSipEndpointProtocolEnum
     */
    export type CarrierSipEndpointProtocolEnum = "tcp" | "tls" | "udp"
    /**
     * Represents a city
     * interface fullName: telephony.City.City
     */
    export interface City {
        administrationCode?: string;
        name: string;
        zipCode: string;
    }
    /**
     * User of the click 2 call
     * interface fullName: telephony.Click2CallUser.Click2CallUser
     */
    export interface Click2CallUser {
        creationDateTime: string;
        id: number;
        login: string;
    }
    /**
     * Conference
     * interface fullName: telephony.Conference.Conference
     */
    export interface Conference {
        description: string;
        offers: string[];
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * List past conferences on your number
     * interface fullName: telephony.ConferenceHistory.ConferenceHistory
     */
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
    /**
     * Event of a conference (participant left/join)
     * interface fullName: telephony.ConferenceHistoryEvent.ConferenceHistoryEvent
     */
    export interface ConferenceHistoryEvent {
        callerid: string;
        date: string;
        type: string;
    }
    /**
     * Conference realtime informations structure
     * interface fullName: telephony.ConferenceInformations.ConferenceInformations
     */
    export interface ConferenceInformations {
        dateStart: string;
        locked: boolean;
        membersCount: number;
    }
    /**
     * Available language for your conference
     * type fullname: telephony.ConferenceLanguageEnum
     */
    export type ConferenceLanguageEnum = "de" | "en" | "es" | "fr" | "it"
    /**
     * Conference service
     * interface fullName: telephony.ConferenceParticipants.ConferenceParticipants
     */
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
    /**
     * Conference properties
     * interface fullName: telephony.ConferenceProperties.ConferenceProperties
     */
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
        roomNumber: number;
        whiteLabelReport: boolean;
    }
    /**
     * Conference report receiver
     * type fullname: telephony.ConferenceReportStatusEnum
     */
    export type ConferenceReportStatusEnum = "customer" | "none" | "other"
    /**
     * Conference room
     * interface fullName: telephony.ConferenceRoom.ConferenceRoom
     */
    export interface ConferenceRoom {
        announceFile: boolean;
        announceFilename?: string;
        announceSoundId?: number;
        anonymousRejection: boolean;
        enterMuted: boolean;
        eventsChannel: string;
        expirationDate?: string;
        language: telephony.ConferenceLanguageEnum;
        pin: string;
        recordStatus: boolean;
        reportEmail?: string;
        reportStatus: telephony.ConferenceReportStatusEnum;
        roomNumber: number;
        whiteLabelReport: boolean;
    }
    /**
     * Get realtime statistics about all rooms of your conference number
     * interface fullName: telephony.ConferenceRoomsStatistics.ConferenceRoomsStatistics
     */
    export interface ConferenceRoomsStatistics {
        activeRoomsCount: number;
        participantsCount: number;
        roomsCount: number;
    }
    /**
     * List public web access of your conference
     * interface fullName: telephony.ConferenceWebAccess.ConferenceWebAccess
     */
    export interface ConferenceWebAccess {
        id: number;
        type: telephony.ConferenceWebAccessTypeEnum;
        url: string;
    }
    /**
     * Webaccess type for your conference
     * type fullname: telephony.ConferenceWebAccessTypeEnum
     */
    export type ConferenceWebAccessTypeEnum = "read" | "write"
    /**
     * The outplan notifications configured for your billing account
     * interface fullName: telephony.ConsumptionThreshold.ConsumptionThreshold
     */
    export interface ConsumptionThreshold {
        block: telephony.OutplanNotificationBlockEnum;
        id: number;
        notifyEmail: string;
        percentage: number;
    }
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
     * Export file format
     * type fullname: telephony.ContactsExportFormatsEnum
     */
    export type ContactsExportFormatsEnum = "csv"
    /**
     * A ip value associated to a datetime
     * interface fullName: telephony.DatetimeAndIpvalue.DatetimeAndIpvalue
     */
    export interface DatetimeAndIpvalue {
        datetime: string;
        ip?: string;
    }
    /**
     * DDI (direct dial-in) service
     * interface fullName: telephony.Ddi.Ddi
     */
    export interface Ddi {
        description: string;
        destination?: string;
        featureType: telephony.TypeEnum;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * interface fullName: telephony.DefaultSipDomains.DefaultSipDomains
     */
    export interface DefaultSipDomains {
        country: telephony.NumberCountryEnum;
        currentDomain: string;
        list: string[];
        productType: telephony.SipDomainProductTypeEnum;
    }
    /**
     * Detailed informations related to this number
     * interface fullName: telephony.DetailedRateCodeInformation.DetailedRateCodeInformation
     */
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
    /**
     * Relevant informations of the service detected from the MOS or the signal leg in SIP/MGCP protocol.
     * interface fullName: telephony.DiagnosticReport.DiagnosticReport
     */
    export interface DiagnosticReport {
        callId: string;
        category: telephony.DiagnosticReportCategoryEnum;
        datetime: string;
        description: string;
        level: telephony.DiagnosticReportLevelEnum;
        name: string;
        report: string;
    }
    /**
     * Source of the diagnostic report
     * type fullname: telephony.DiagnosticReportCategoryEnum
     */
    export type DiagnosticReportCategoryEnum = "dpi" | "signal"
    /**
     * The index interval
     * type fullname: telephony.DiagnosticReportIndexEnum
     */
    export type DiagnosticReportIndexEnum = "2 days ago" | "3 days ago" | "today" | "yesterday"
    /**
     * Level of the diagnostic report
     * type fullname: telephony.DiagnosticReportLevelEnum
     */
    export type DiagnosticReportLevelEnum = "debug" | "error" | "info" | "warn"
    /**
     * Directory Informations
     * interface fullName: telephony.DirectoryHeadingPJ.DirectoryHeadingPJ
     */
    export interface DirectoryHeadingPJ {
        apeCode: string;
        apeDescription: string;
        directoryServiceCode: number;
        directoryServiceDescription: string;
        notification: string;
    }
    /**
     * Directory Informations
     * interface fullName: telephony.DirectoryInfo.DirectoryInfo
     */
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
    /**
     * Directory way type
     * interface fullName: telephony.DirectoryWayType.DirectoryWayType
     */
    export interface DirectoryWayType {
        abbreviatedName: string;
        wayName: string;
    }
    /**
     * Document linked to a telephony service
     * interface fullName: telephony.Document.Document
     */
    export interface Document {
        description?: string;
        id: string;
        name: string;
        size: number;
        url: string;
        validationDate?: string;
    }
    /**
     * OVH easy calls queues
     * interface fullName: telephony.EasyHunting.EasyHunting
     */
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
    /**
     * Screenlist condition
     * interface fullName: telephony.EasyHuntingScreenListsConditions.EasyHuntingScreenListsConditions
     */
    export interface EasyHuntingScreenListsConditions {
        callerIdNumber?: string;
        conditionId: number;
        destinationNumber?: string;
        screenListType: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum;
    }
    /**
     * Easy hunting screen lists conditions options
     * interface fullName: telephony.EasyHuntingScreenListsConditionsSettings.EasyHuntingScreenListsConditionsSettings
     */
    export interface EasyHuntingScreenListsConditionsSettings {
        status: telephony.EasyHuntingScreenListsConditionsStatusEnum;
    }
    /**
     * Screenlist condition type
     * type fullname: telephony.EasyHuntingScreenListsConditionsStatusEnum
     */
    export type EasyHuntingScreenListsConditionsStatusEnum = "disabled" | "incomingBlackList" | "incomingWhiteList"
    /**
     * Easy hunting time conditions
     * interface fullName: telephony.EasyHuntingTimeConditions.EasyHuntingTimeConditions
     */
    export interface EasyHuntingTimeConditions {
        conditionId: number;
        policy: telephony.TimeConditionsPolicyEnum;
        timeFrom: string;
        timeTo: string;
        weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum;
    }
    /**
     * Easy hunting time conditions options
     * interface fullName: telephony.EasyHuntingTimeConditionsSettings.EasyHuntingTimeConditionsSettings
     */
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
    /**
     * Easy/Mini PABX agent
     * interface fullName: telephony.EasyMiniPabxHuntingAgent.EasyMiniPabxHuntingAgent
     */
    export interface EasyMiniPabxHuntingAgent {
        agentNumber: string;
        logged: boolean;
        noReplyTimer: number;
        position: number;
    }
    /**
     * Calls dispatching pattern
     * type fullname: telephony.EasyMiniPabxHuntingPatternEnum
     */
    export type EasyMiniPabxHuntingPatternEnum = "all-at-once" | "cumulated" | "sequential"
    /**
     * Calls dispatching startegy
     * type fullname: telephony.EasyMiniPabxHuntingStrategyEnum
     */
    export type EasyMiniPabxHuntingStrategyEnum = "cyclic" | "leastIdleSinceLastCall" | "linear" | "mostIdleSinceLastCall" | "mostIdleSinceLogging" | "parallel" | "random"
    /**
     * EasyPabx
     * interface fullName: telephony.EasyPabx.EasyPabx
     */
    export interface EasyPabx {
        description: string;
        featureType: telephony.TypeEnum;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * EasyPabx Hunting
     * interface fullName: telephony.EasyPabxHunting.EasyPabxHunting
     */
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
    /**
     * Task informations about an entreprise
     * interface fullName: telephony.EntrepriseNumberInformations.EntrepriseNumberInformations
     */
    export interface EntrepriseNumberInformations {
        address?: string;
        ape?: string;
        brand?: string;
        entrepriseNumber: string;
        isValid: boolean;
        name: string;
        siren?: string;
    }
    /**
     * Task about getting entreprise informations
     * interface fullName: telephony.EntrepriseNumberInformationsTask.EntrepriseNumberInformationsTask
     */
    export interface EntrepriseNumberInformationsTask {
        informations: telephony.EntrepriseNumberInformations;
        status: telephony.TaskStatusEnum;
    }
    /**
     * Events triggered by the line
     * interface fullName: telephony.Event.Event
     */
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
    /**
     * Callback url for each event
     * interface fullName: telephony.EventCallback.EventCallback
     */
    export interface EventCallback {
        emailError?: string;
        url?: string;
    }
    /**
     * Token associated to the service for live event
     * interface fullName: telephony.EventToken.EventToken
     */
    export interface EventToken {
        token: string;
    }
    /**
     * Fax service
     * interface fullName: telephony.Fax.Fax
     */
    export interface Fax {
        description: string;
        notifications?: telephony.LineNotificationsOptions;
        offers: string[];
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * Fax campaigns
     * interface fullName: telephony.FaxCampaign.FaxCampaign
     */
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
    /**
     * Detail of a fax campaign
     * interface fullName: telephony.FaxCampaignDetail.FaxCampaignDetail
     */
    export interface FaxCampaignDetail {
        failed: string[];
        success: string[];
        todo: string[];
    }
    /**
     * Available recipients method for fax campaign
     * type fullname: telephony.FaxCampaignRecipientsTypeEnum
     */
    export type FaxCampaignRecipientsTypeEnum = "document" | "list"
    /**
     * Available sending method for fax campaign
     * type fullname: telephony.FaxCampaignSendTypeEnum
     */
    export type FaxCampaignSendTypeEnum = "automatic" | "manual" | "scheduled"
    /**
     * Fax delivery record
     * interface fullName: telephony.FaxConsumption.FaxConsumption
     */
    export interface FaxConsumption {
        called?: string;
        calling?: string;
        consumptionId: number;
        creationDatetime: string;
        pages: number;
        priceWithoutTax: order.Price;
        wayType: telephony.FaxConsumptionWayTypeEnum;
    }
    /**
     * Consumption way type
     * type fullname: telephony.FaxConsumptionWayTypeEnum
     */
    export type FaxConsumptionWayTypeEnum = "received" | "sent"
    /**
     * Format of the notification mail. "html" will include a preview image of the fax
     * type fullname: telephony.FaxMailFormatEnum
     */
    export type FaxMailFormatEnum = "html" | "text"
    /**
     * Fax properties
     * interface fullName: telephony.FaxProperties.FaxProperties
     */
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
    /**
     * Available quality for fax documents
     * type fullname: telephony.FaxQualityEnum
     */
    export type FaxQualityEnum = "best" | "high" | "normal"
    /**
     * Fax ScreenLists
     * interface fullName: telephony.FaxScreen.FaxScreen
     */
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
    /**
     * Type of screen list
     * type fullname: telephony.FaxScreenListTypeEnum
     */
    export type FaxScreenListTypeEnum = "" | "blacklist" | "no" | "whitelist"
    /**
     * Number of tries when sending a fax
     * type fullname: telephony.FaxSendingTries
     */
    export type FaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    /**
     * Plug & Phone function key
     * interface fullName: telephony.FunctionKey.FunctionKey
     */
    export interface FunctionKey {
        default?: string;
        function?: string;
        keyNum: number;
        label: string;
        parameter?: string;
        type: string;
    }
    /**
     * Time conditions capable services
     * interface fullName: telephony.GenericScreen.GenericScreen
     */
    export interface GenericScreen {
        serviceName: string;
    }
    /**
     * Informations related to a telephone offer
     * interface fullName: telephony.HardwareOffer.HardwareOffer
     */
    export interface HardwareOffer {
        description?: string;
        name: string;
        price: order.Price;
        url?: string;
    }
    /**
     * Previous billed consumptions
     * interface fullName: telephony.HistoryConsumption.HistoryConsumption
     */
    export interface HistoryConsumption {
        date: string;
        price: order.Price;
        priceOutplan: order.Price;
        status: telephony.BillStatusEnum;
    }
    /**
     * Previous repayment bill
     * interface fullName: telephony.HistoryRepaymentConsumption.HistoryRepaymentConsumption
     */
    export interface HistoryRepaymentConsumption {
        billingNumber: string;
        date: string;
        price: order.Price;
        status: telephony.BillStatusEnum;
    }
    /**
     * Previous tollfree bill
     * interface fullName: telephony.HistoryTollfreeConsumption.HistoryTollfreeConsumption
     */
    export interface HistoryTollfreeConsumption {
        date: string;
        price: order.Price;
        status: telephony.BillStatusEnum;
    }
    /**
     * Line service
     * interface fullName: telephony.Line.Line
     */
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
    /**
     * The blocking mode of line calls
     * type fullname: telephony.LineBlockingMode
     */
    export type LineBlockingMode = "both" | "incoming" | "outgoing"
    /**
     * Types of statistics available for a line.
     * type fullname: telephony.LineNotificationsLogsFrequencyEnum
     */
    export type LineNotificationsLogsFrequencyEnum = "Never" | "Once a day" | "Twice a day"
    /**
     * Error logging notifications options
     * interface fullName: telephony.LineNotificationsLogsOptions.LineNotificationsLogsOptions
     */
    export interface LineNotificationsLogsOptions {
        email?: string;
        frequency?: telephony.LineNotificationsLogsFrequencyEnum;
        sendIfNull?: boolean;
    }
    /**
     * interface fullName: telephony.LineNotificationsOptions.LineNotificationsOptions
     */
    export interface LineNotificationsOptions {
        logs?: telephony.LineNotificationsLogsOptions;
    }
    /**
     * Informations related to a line offer
     * interface fullName: telephony.LineOffer.LineOffer
     */
    export interface LineOffer {
        description: string;
        name: string;
        price?: order.Price;
    }
    /**
     * Informations related to a line offer
     * interface fullName: telephony.LineOffersAndContracts.LineOffersAndContracts
     */
    export interface LineOffersAndContracts {
        contracts: order.Contract[];
        offers: telephony.LineOffer[];
    }
    /**
     * The nature of the call forward
     * type fullname: telephony.LineOptionForwardNatureTypeEnum
     */
    export type LineOptionForwardNatureTypeEnum = "fax" | "number" | "voicemail"
    /**
     * Intercom configuration
     * type fullname: telephony.LineOptionIntercomEnum
     */
    export type LineOptionIntercomEnum = "no" | "prefixed" | "yes"
    /**
     * The language of the line
     * type fullname: telephony.LineOptionLanguageEnum
     */
    export type LineOptionLanguageEnum = "Dutch" | "English (UK)" | "French" | "French (BE)" | "German" | "Italian" | "Spanish"
    /**
     * Line options
     * interface fullName: telephony.LineOptions.LineOptions
     */
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
    /**
     * Informations related to phone capabilities
     * interface fullName: telephony.LinePhone.LinePhone
     */
    export interface LinePhone {
        brand: string;
        description: string;
        fees?: order.Price;
        maxline: number;
        offerType: telephony.RmaOfferTypeEnum;
        price: order.Price;
        protocol: telephonyProtocolEnum;
    }
    /**
     * Informations related to associable phone capabilities
     * interface fullName: telephony.LinePhoneAssociable.LinePhoneAssociable
     */
    export interface LinePhoneAssociable {
        associatedLines: telephony.LinePhoneAssociableConfiguredLines[];
        brand: string;
        maxLines: number;
        protocol: telephonyProtocolEnum;
    }
    /**
     * Current lines configured on the phone
     * interface fullName: telephony.LinePhoneAssociableConfiguredLines.LinePhoneAssociableConfiguredLines
     */
    export interface LinePhoneAssociableConfiguredLines {
        description: string;
        serviceName: string;
    }
    /**
     * Types of statistics available for a line.
     * type fullname: telephony.LineStatisticsTypeEnum
     */
    export type LineStatisticsTypeEnum = "maxDelay" | "maxJitter" | "rtpMos" | "sumRtpLost"
    /**
     * MiniPabx
     * interface fullName: telephony.MiniPabx.MiniPabx
     */
    export interface MiniPabx {
        description: string;
        featureType: telephony.TypeEnum;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * MiniPabx Hunting
     * interface fullName: telephony.MiniPabxHunting.MiniPabxHunting
     */
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
    /**
     * Additional number
     * interface fullName: telephony.Number.Number
     */
    export interface Number {
        description: string;
        featureType: telephony.TypeEnum;
        partOfPool?: string;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * Number country code
     * type fullname: telephony.NumberCountryCodeEnum
     */
    export type NumberCountryCodeEnum = 32 | 33 | 34 | 39 | 41 | 44 | 49
    /**
     * Number country
     * type fullname: telephony.NumberCountryEnum
     */
    export type NumberCountryEnum = "be" | "ch" | "de" | "es" | "fr" | "gb" | "it" | "uk"
    /**
     * A geographic zone from a country
     * interface fullName: telephony.NumberDetailedZone.NumberDetailedZone
     */
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
    /**
     * The possible criteria matching a searched value for a zone
     * type fullname: telephony.NumberDetailedZoneMatchingCriteriaEnum
     */
    export type NumberDetailedZoneMatchingCriteriaEnum = "city" | "internationalNumber" | "number" | "zne"
    /**
     * A zone type
     * type fullname: telephony.NumberDetailedZoneTypeEnum
     */
    export type NumberDetailedZoneTypeEnum = "geographic" | "non-geographic" | "special"
    /**
     * Typology of number
     * type fullname: telephony.NumberTypeEnum
     */
    export type NumberTypeEnum = "geographic" | "nogeographic" | "special"
    /**
     * Offer change
     * interface fullName: telephony.OfferChange.OfferChange
     */
    export interface OfferChange {
        offer: string;
    }
    /**
     * Operation on a telephony offer
     * interface fullName: telephony.OfferTask.OfferTask
     */
    export interface OfferTask {
        action: telephony.OfferTaskActionEnum;
        executionDate: string;
        status: telephony.TaskStatusEnum;
        taskId: number;
        type: telephony.OfferTaskTypeEnum;
    }
    /**
     * Offer task actions
     * type fullname: telephony.OfferTaskActionEnum
     */
    export type OfferTaskActionEnum = "convertToAlias" | "convertToSip" | "migrateToNewVoicemail" | "removeSimltaneousLines" | "switchServer" | "termination" | "updateFirmware" | "upgrade"
    /**
     * Offer task types
     * type fullname: telephony.OfferTaskTypeEnum
     */
    export type OfferTaskTypeEnum = "line" | "offer" | "option" | "phone"
    /**
     * Informations related to phone
     * interface fullName: telephony.OldPhone.OldPhone
     */
    export interface OldPhone {
        mac: string;
        model: string;
    }
    /**
     * Type of line blocking on outplan notification
     * type fullname: telephony.OutplanNotificationBlockEnum
     */
    export type OutplanNotificationBlockEnum = "blockAllCalls" | "blockIncomingCalls" | "blockOutgoingCalls" | "none"
    /**
     * OVH calls queues and OVH IVRs (Interactive Voice Response)
     * interface fullName: telephony.OvhPabx.OvhPabx
     */
    export interface OvhPabx {
        description: string;
        featureType: telephony.TypeEnum;
        isCCS: boolean;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * Custom statuses of your callcenter agents
     * interface fullName: telephony.OvhPabxCustomStatus.OvhPabxCustomStatus
     */
    export interface OvhPabxCustomStatus {
        color?: string;
        description?: string;
        id: number;
        name: string;
    }
    /**
     * Dialplan
     * interface fullName: telephony.OvhPabxDialplan.OvhPabxDialplan
     */
    export interface OvhPabxDialplan {
        anonymousRejection: boolean;
        dialplanId: number;
        lastUpdate: string;
        name: string;
        showCallerNumber: telephony.OvhPabxDialplanNumberPresentationEnum;
        transferTimeout: number;
    }
    /**
     * Dialplan extension
     * interface fullName: telephony.OvhPabxDialplanExtension.OvhPabxDialplanExtension
     */
    export interface OvhPabxDialplanExtension {
        enabled: boolean;
        extensionId: number;
        position: number;
        schedulerCategory?: telephony.SchedulerCategoryEnum;
        screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum;
    }
    /**
     * Screenlist condition
     * interface fullName: telephony.OvhPabxDialplanExtensionConditionScreenList.OvhPabxDialplanExtensionConditionScreenList
     */
    export interface OvhPabxDialplanExtensionConditionScreenList {
        callerIdNumber?: string;
        conditionId: number;
        destinationNumber?: string;
        screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum;
    }
    /**
     * Screenlist condition type
     * type fullname: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum
     */
    export type OvhPabxDialplanExtensionConditionScreenListTypeEnum = "destinationBlackList" | "destinationWhiteList" | "incomingBlackList" | "incomingWhiteList"
    /**
     * Time condition
     * interface fullName: telephony.OvhPabxDialplanExtensionConditionTime.OvhPabxDialplanExtensionConditionTime
     */
    export interface OvhPabxDialplanExtensionConditionTime {
        conditionId: number;
        timeFrom: string;
        timeTo: string;
        weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum;
    }
    /**
     * Day of the week
     * type fullname: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum
     */
    export type OvhPabxDialplanExtensionConditionTimeWeekDayEnum = "friday" | "monday" | "saturday" | "sunday" | "thursday" | "tuesday" | "wednesday"
    /**
     * Dialplan rule
     * interface fullName: telephony.OvhPabxDialplanExtensionRule.OvhPabxDialplanExtensionRule
     */
    export interface OvhPabxDialplanExtensionRule {
        action: telephony.OvhPabxDialplanExtensionRuleActionEnum;
        actionParam?: string;
        negativeAction: boolean;
        position: number;
        ruleId: number;
    }
    /**
     * Dialplan rule action
     * type fullname: telephony.OvhPabxDialplanExtensionRuleActionEnum
     */
    export type OvhPabxDialplanExtensionRuleActionEnum = "bridge" | "endless_playback" | "hangup" | "hunting" | "ivr" | "playback" | "readDtmf" | "setCallerName" | "sleep" | "tts" | "voicemail"
    /**
     * Displayed number
     * type fullname: telephony.OvhPabxDialplanNumberPresentationEnum
     */
    export type OvhPabxDialplanNumberPresentationEnum = "alias" | "both" | "caller"
    /**
     * PABX Hunting
     * interface fullName: telephony.OvhPabxHunting.OvhPabxHunting
     */
    export interface OvhPabxHunting {
        crmUrlTemplate?: string;
        g729?: boolean;
        name: string;
        statusIvrEnabled: boolean;
    }
    /**
     * Calls agent
     * interface fullName: telephony.OvhPabxHuntingAgent.OvhPabxHuntingAgent
     */
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
    /**
     * Live statistics of the queue
     * interface fullName: telephony.OvhPabxHuntingAgentLiveStatus.OvhPabxHuntingAgentLiveStatus
     */
    export interface OvhPabxHuntingAgentLiveStatus {
        answeredCalls: number;
        lastStatusChange: string;
        status: telephony.OvhPabxHuntingLiveAgentStatusEnum;
        totalCallDuration: number;
    }
    /**
     * Agent assigned to a queue
     * interface fullName: telephony.OvhPabxHuntingAgentQueue.OvhPabxHuntingAgentQueue
     */
    export interface OvhPabxHuntingAgentQueue {
        agentId: number;
        position: number;
        queueId: number;
    }
    /**
     * Status of the agent
     * type fullname: telephony.OvhPabxHuntingAgentStatusEnum
     */
    export type OvhPabxHuntingAgentStatusEnum = "available" | "loggedOut" | "onBreak"
    /**
     * Type of the agent
     * type fullname: telephony.OvhPabxHuntingAgentTypeEnum
     */
    export type OvhPabxHuntingAgentTypeEnum = "external" | "internal"
    /**
     * Status of the agent
     * type fullname: telephony.OvhPabxHuntingLiveAgentStatusEnum
     */
    export type OvhPabxHuntingLiveAgentStatusEnum = "inAQueueCall" | "loggedOut" | "onBreak" | "receiving" | "waiting"
    /**
     * State of the call
     * type fullname: telephony.OvhPabxHuntingLiveCallsStateEnum
     */
    export type OvhPabxHuntingLiveCallsStateEnum = "Answered" | "Waiting"
    /**
     * Calls queue
     * interface fullName: telephony.OvhPabxHuntingQueue.OvhPabxHuntingQueue
     */
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
    /**
     * Live statistics of the queue
     * interface fullName: telephony.OvhPabxHuntingQueueLiveCalls.OvhPabxHuntingQueueLiveCalls
     */
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
    /**
     * Live statistics of the queue
     * interface fullName: telephony.OvhPabxHuntingQueueLiveStatistics.OvhPabxHuntingQueueLiveStatistics
     */
    export interface OvhPabxHuntingQueueLiveStatistics {
        callsAnswered: number;
        callsLost: number;
        callsTotal: number;
        lastReset: string;
        totalCallDuration: number;
        totalWaitingDuration: number;
    }
    /**
     * Digit keys allowed to be pressed to disable call record
     * type fullname: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum
     */
    export type OvhPabxHuntingQueueRecordDisablingDigitEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    /**
     * Possible languages of the sound played to inform caller that he can disable call record
     * type fullname: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum
     */
    export type OvhPabxHuntingQueueRecordDisablingLanguageEnum = "english" | "french"
    /**
     * Calls dispatching startegy
     * type fullname: telephony.OvhPabxHuntingQueueStrategyEnum
     */
    export type OvhPabxHuntingQueueStrategyEnum = "cumulationByAgentOrder" | "longestHangupAgent" | "longestIdleAgent" | "random" | "ringAll" | "roundRobin" | "sequentiallyByAgentOrder"
    /**
     * IVR menu action
     * type fullname: telephony.OvhPabxIvrMenuEntryActionEnum
     */
    export type OvhPabxIvrMenuEntryActionEnum = "bridge" | "callcenter" | "menuBack" | "menuExit" | "menuSub" | "menuTop" | "playback" | "readDtmf" | "setCallerName"
    /**
     * IVR Menu
     * interface fullName: telephony.OvhPabxMenu.OvhPabxMenu
     */
    export interface OvhPabxMenu {
        greetSound?: number;
        greetSoundTts?: number;
        interDigitTimeout: number;
        invalidSound?: number;
        invalidSoundTts?: number;
        menuId: number;
        name: string;
        timeout: number;
    }
    /**
     * IVR menu entry
     * interface fullName: telephony.OvhPabxMenuEntry.OvhPabxMenuEntry
     */
    export interface OvhPabxMenuEntry {
        action: telephony.OvhPabxIvrMenuEntryActionEnum;
        actionParam: string;
        dtmf: string;
        entryId: number;
        position: number;
    }
    /**
     * Available actions for overflow and on closure
     * type fullname: telephony.OvhPabxQueueActionEnum
     */
    export type OvhPabxQueueActionEnum = "playback" | "voicemail"
    /**
     * The PABX records
     * interface fullName: telephony.OvhPabxRecord.OvhPabxRecord
     */
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
    /**
     * The PABX sounds
     * interface fullName: telephony.OvhPabxSound.OvhPabxSound
     */
    export interface OvhPabxSound {
        name: string;
        soundId: number;
    }
    /**
     * The PABX Text To Speech sounds
     * interface fullName: telephony.OvhPabxTts.OvhPabxTts
     */
    export interface OvhPabxTts {
        id: number;
        text: string;
        voice: telephony.OvhPabxTtsVoiceEnum;
    }
    /**
     * Voice to use for your text to speech
     * type fullname: telephony.OvhPabxTtsVoiceEnum
     */
    export type OvhPabxTtsVoiceEnum = "Bruce" | "Helene" | "Jenny" | "Loic"
    /**
     * Whispering mode
     * type fullname: telephony.OvhPabxWhisperingModeEnum
     */
    export type OvhPabxWhisperingModeEnum = "Whisper to agent only" | "Whisper to all participants"
    /**
     * Telephony API related file hosted
     * interface fullName: telephony.PcsFile.PcsFile
     */
    export interface PcsFile {
        filename: string;
        status: telephony.PcsFileStatusEnum;
        url: string;
        urlExpirationDatetime: string;
    }
    /**
     * File providing task status
     * type fullname: telephony.PcsFileStatusEnum
     */
    export type PcsFileStatusEnum = "doing" | "done" | "error" | "todo"
    /**
     * Plug & Phone
     * interface fullName: telephony.Phone.Phone
     */
    export interface Phone {
        brand: string;
        description: string;
        macAddress: string;
        maxSimultaneousCalls: number;
        maxline: number;
        mgcpIpRestriction?: string;
        phoneConfiguration: telephony.PhoneConfigurationProperty[];
        protocol: telephonyProtocolEnum;
        userPassword?: string;
    }
    /**
     * Phone Configuration level enum
     * type fullname: telephony.PhoneConfigurationLevelEnum
     */
    export type PhoneConfigurationLevelEnum = "admin" | "expert"
    /**
     * Phone configuration property
     * interface fullName: telephony.PhoneConfigurationProperty.PhoneConfigurationProperty
     */
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
    /**
     * Phone configuration type enum
     * type fullname: telephony.PhoneConfigurationTypeEnum
     */
    export type PhoneConfigurationTypeEnum = "boolean" | "enum" | "hidden" | "ipv4" | "numeric" | "string"
    /**
     * Credentials to access the web interface of the phone
     * interface fullName: telephony.PhoneCredentials.PhoneCredentials
     */
    export interface PhoneCredentials {
        login?: string;
        password: string;
    }
    /**
     * Phone book
     * interface fullName: telephony.Phonebook.Phonebook
     */
    export interface Phonebook {
        bookKey: string;
        isReadonly: boolean;
        name: string;
        phoneKey: string;
    }
    /**
     * Phone book contact
     * interface fullName: telephony.PhonebookContact.PhonebookContact
     */
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
    /**
     * Phone book on group
     * interface fullName: telephony.PhonebookMaster.PhonebookMaster
     */
    export interface PhonebookMaster {
        bookKey: string;
        name: string;
    }
    /**
     * Portability informations
     * interface fullName: telephony.Portability.Portability
     */
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
    /**
     * Country that defines the portability kind
     * type fullname: telephony.PortabilityCountryEnum
     */
    export type PortabilityCountryEnum = "belgium" | "france" | "switzerland"
    /**
     * Customer informations about a portability
     * interface fullName: telephony.PortabilityCustomerInfos.PortabilityCustomerInfos
     */
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
    /**
     * Document linked to a portability
     * interface fullName: telephony.PortabilityDocument.PortabilityDocument
     */
    export interface PortabilityDocument {
        description?: string;
        documentId: number;
        getUrl: string;
        name: string;
        putUrl?: string;
        size: number;
    }
    /**
     * Possible parameters to provide to fix portability errors
     * interface fullName: telephony.PortabilityFixErrorPossibleParameters.PortabilityFixErrorPossibleParameters
     */
    export interface PortabilityFixErrorPossibleParameters {
        mandatoryParameters: string[];
        optionalParameters: string[];
    }
    /**
     * A step in the portability process
     * interface fullName: telephony.PortabilityStep.PortabilityStep
     */
    export interface PortabilityStep {
        description?: string;
        doneDate?: string;
        duration: telephony.PortabilityStepDuration;
        infos?: telephony.PortabilityStepInfos;
        name: telephony.PortabilityStepNameEnum;
        status: telephony.PortabilityStepStatusEnum;
    }
    /**
     * Represent the delay between two portability steps
     * interface fullName: telephony.PortabilityStepDuration.PortabilityStepDuration
     */
    export interface PortabilityStepDuration {
        quantity: number;
        unit: telephony.PortabilityStepDurationUnitEnum;
    }
    /**
     * List of possible duration unit. "NA" means that there is no defined duration
     * type fullname: telephony.PortabilityStepDurationUnitEnum
     */
    export type PortabilityStepDurationUnitEnum = "NA" | "day" | "hour" | "openday"
    /**
     * Additional informations about the portability step
     * interface fullName: telephony.PortabilityStepInfos.PortabilityStepInfos
     */
    export interface PortabilityStepInfos {
        lastProposedDate?: string;
        reason?: string;
        reasonType?: string;
    }
    /**
     * List of possible step name
     * type fullname: telephony.PortabilityStepNameEnum
     */
    export type PortabilityStepNameEnum = "acknowledgmentReceivedFromOperator" | "belgiumPortabilityRequestCreated" | "belgiumPortabilityRequestExecutionAcked" | "belgiumPortabilityRequestExecutionAsked" | "belgiumPortabilityRequestExecutionCompleted" | "belgiumPortabilityRequestValidated" | "belgiumPortabilityRequestWaitingUntilExec" | "customerFormReceived" | "customerFormSent" | "customerFormValidated" | "finalReportReceivedFromOperator" | "intermediateReportReceivedFromOperator" | "numberActivation" | "requestSentToOperator" | "sDASequenceReceivedFromOperator"
    /**
     * List of possible status of a step
     * type fullname: telephony.PortabilityStepStatusEnum
     */
    export type PortabilityStepStatusEnum = "cancelled" | "doing" | "done" | "error" | "hold" | "todo"
    /**
     * Call delivery record of the previous month
     * interface fullName: telephony.PreviousVoiceConsumption.PreviousVoiceConsumption
     */
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
    /**
     * All existing properties of line or alias offer
     * type fullname: telephony.PropertyEnum
     */
    export type PropertyEnum = "xdsl"
    /**
     * Phone protocol
     * type fullname: telephony.ProtocolEnum
     */
    export type ProtocolEnum = "mgcp" | "sip"
    /**
     * Informations related to the rate code
     * interface fullName: telephony.RateCodeInformation.RateCodeInformation
     */
    export interface RateCodeInformation {
        code: string;
        pricePerCallWithoutTax: order.Price;
        pricePerMinuteWithoutTax: order.Price;
    }
    /**
     * The call direction for a given event
     * type fullname: telephony.RealtimeEventDirection
     */
    export type RealtimeEventDirection = "incoming" | "outgoing"
    /**
     * The event protocol
     * type fullname: telephony.RealtimeEventProtocol
     */
    export type RealtimeEventProtocol = "mgcp" | "sip"
    /**
     * The event type
     * type fullname: telephony.RealtimeEventType
     */
    export type RealtimeEventType = "end_calling" | "end_hold" | "end_ringing" | "start_calling" | "start_hold" | "start_ringing"
    /**
     * Redirect service
     * interface fullName: telephony.Redirect.Redirect
     */
    export interface Redirect {
        description: string;
        destination?: string;
        featureType: telephony.TypeEnum;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * Informations about a SIP registration (i.e. IP, port, User-Agent...)
     * interface fullName: telephony.RegistrationInformations.RegistrationInformations
     */
    export interface RegistrationInformations {
        datetime: string;
        domain?: string;
        ip: string;
        localIp?: string;
        localPort?: number;
        port?: number;
        userAgent?: string;
    }
    /**
     * Release location type : forward if the calling hangup, backward if the caller hangup, else local
     * type fullname: telephony.ReleaseLocationEnum
     */
    export type ReleaseLocationEnum = "backward" | "forward" | "local"
    /**
     * Call which are repayable
     * interface fullName: telephony.RepaymentConsumption.RepaymentConsumption
     */
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
    /**
     * Relevant informations about reset code
     * interface fullName: telephony.ResetPhoneCodeInfo.ResetPhoneCodeInfo
     */
    export interface ResetPhoneCodeInfo {
        activationCode?: string;
        keyBook?: string;
        serverURL?: string;
    }
    /**
     * Relevant informations of the phone reset
     * interface fullName: telephony.ResetPhoneInfo.ResetPhoneInfo
     */
    export interface ResetPhoneInfo {
        resetCodeInfo?: telephony.ResetPhoneCodeInfo;
        resetPhoneMethod: telephony.ResetPhoneMethodEnum;
    }
    /**
     * How the phone had been reset
     * type fullname: telephony.ResetPhoneMethodEnum
     */
    export type ResetPhoneMethodEnum = "code" | "http"
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
     * Return merchandise authorisation offer type
     * type fullname: telephony.RmaOfferTypeEnum
     */
    export type RmaOfferTypeEnum = "deposit" | "loan" | "purchase"
    /**
     * Return merchandise authorisation type
     * type fullname: telephony.RmaPublicTypeEnum
     */
    export type RmaPublicTypeEnum = "change to another phone/equipment (restitution first and shipping then)" | "restitution but keep the service enable"
    /**
     * Return merchandise authorisation type
     * type fullname: telephony.RmaReplaceTypeEnum
     */
    export type RmaReplaceTypeEnum = "changePhone" | "phoneRestitution" | "undefined"
    /**
     * Post-creation return information structure
     * interface fullName: telephony.RmaReturn.RmaReturn
     */
    export interface RmaReturn {
        id: string;
    }
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
    /**
     * French value added services subject to the RSVA reform (Référentiel des numéros SVA)
     * interface fullName: telephony.Rsva.Rsva
     */
    export interface Rsva {
        serviceName: string;
        typology?: telephony.portability.SpecialNumberCategoryEnum;
    }
    /**
     * Scheduler capable services
     * interface fullName: telephony.Scheduler.Scheduler
     */
    export interface Scheduler {
        serviceName: string;
        timeZone: telephony.timeZone;
    }
    /**
     * Scheculer category
     * type fullname: telephony.SchedulerCategoryEnum
     */
    export type SchedulerCategoryEnum = "holidays" | "scheduler1" | "scheduler2" | "scheduler3"
    /**
     * Scheduled event
     * interface fullName: telephony.SchedulerEvent.SchedulerEvent
     */
    export interface SchedulerEvent {
        categories: telephony.SchedulerCategoryEnum;
        dateEnd: string;
        dateStart: string;
        description?: string;
        title: string;
        uid: string;
    }
    /**
     * ScreenList capable services
     * interface fullName: telephony.Screen.Screen
     */
    export interface Screen {
        incomingScreenList: telephony.ScreenListChoosingEnum;
        outgoingScreenList: telephony.ScreenListChoosingEnum;
        serviceName: string;
    }
    /**
     * Screen list
     * interface fullName: telephony.ScreenList.ScreenList
     */
    export interface ScreenList {
        callNumber: string;
        id: number;
        nature: telephony.ScreenListNatureEnum;
        status: string;
        type: telephony.ScreenListTypeEnum;
    }
    /**
     * Type of screen list
     * type fullname: telephony.ScreenListChoosingEnum
     */
    export type ScreenListChoosingEnum = "blacklist" | "disabled" | "whitelist"
    /**
     * Nature of screen list
     * type fullname: telephony.ScreenListNatureEnum
     */
    export type ScreenListNatureEnum = "fax" | "international" | "services" | "special" | "voicemail"
    /**
     * Type of screen list
     * type fullname: telephony.ScreenListTypeEnum
     */
    export type ScreenListTypeEnum = "incomingBlackList" | "incomingWhiteList" | "outgoingBlackList" | "outgoingWhiteList"
    /**
     * Voicemail audio format
     * type fullname: telephony.ServiceVoicemailAudioFormatEnum
     */
    export type ServiceVoicemailAudioFormatEnum = "aiff" | "au" | "flac" | "mp3" | "ogg" | "wav"
    /**
     * Voicemail configuration
     * type fullname: telephony.ServiceVoicemailMailOptionEnum
     */
    export type ServiceVoicemailMailOptionEnum = "attachment" | "simple"
    /**
     * Voicemail configuration
     * interface fullName: telephony.ServiceVoicemailNotifications.ServiceVoicemailNotifications
     */
    export interface ServiceVoicemailNotifications {
        email: string;
        type: telephony.ServiceVoicemailMailOptionEnum;
    }
    /**
     * Details about simultaneous channels of this line
     * interface fullName: telephony.SimultaneousChannelsDetails.SimultaneousChannelsDetails
     */
    export interface SimultaneousChannelsDetails {
        basic: number;
        current: number;
        extra: number;
        maximum: number;
        toBeDeleted: number;
    }
    /**
     * Product type
     * type fullname: telephony.SipDomainProductTypeEnum
     */
    export type SipDomainProductTypeEnum = "sip" | "trunk"
    /**
     * Sounds attached to this telephony account
     * interface fullName: telephony.Sound.Sound
     */
    export interface Sound {
        creationDate: string;
        description?: string;
        filename: string;
        getUrl: string;
        id: number;
        putUrl?: string;
        size: number;
    }
    /**
     * Specific number available
     * interface fullName: telephony.SpecificNumber.SpecificNumber
     */
    export interface SpecificNumber {
        isPremium: boolean;
        number: string;
    }
    /**
     * Available timeframes for statistics
     * type fullname: telephony.StatisticsTimeframeEnum
     */
    export type StatisticsTimeframeEnum = "daily" | "hourly" | "monthly" | "weekly" | "yearly"
    /**
     * Operation on a telephony service
     * interface fullName: telephony.Task.Task
     */
    export interface Task {
        action: string;
        message?: string;
        objectCreated?: string;
        serviceType: string;
        status: telephony.TaskStatusEnum;
        taskId: number;
    }
    /**
     * Task status
     * type fullname: telephony.TaskStatusEnum
     */
    export type TaskStatusEnum = "doing" | "done" | "error" | "pause" | "todo"
    /**
     * Telephony service
     * interface fullName: telephony.TelephonyGenericService.TelephonyGenericService
     */
    export interface TelephonyGenericService {
        serviceName: string;
    }
    /**
     * Informations related to a telephony service
     * interface fullName: telephony.TelephonySearchService.TelephonySearchService
     */
    export interface TelephonySearchService {
        billingAccount?: string;
        domain: string;
        type: telephony.TelephonySearchServiceTypeEnum;
    }
    /**
     * List of possible type of a telephony service
     * type fullname: telephony.TelephonySearchServiceTypeEnum
     */
    export type TelephonySearchServiceTypeEnum = "alias" | "line" | "trunk"
    /**
     * Telephony service
     * interface fullName: telephony.TelephonyService.TelephonyService
     */
    export interface TelephonyService {
        associatedDeviceMac?: string;
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
    /**
     * Temporary url informations
     * interface fullName: telephony.TemporaryLogsLink.TemporaryLogsLink
     */
    export interface TemporaryLogsLink {
        expirationDate: string;
        url: string;
    }
    /**
     * Termination reason
     * type fullname: telephony.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "addresseMove" | "billingDifficulties" | "cessationOfActivity" | "missingOptions" | "moveToCompetitor" | "other" | "plugAndPhoneDifficulties" | "technicalDifficulties"
    /**
     * Time conditions
     * interface fullName: telephony.TimeCondition.TimeCondition
     */
    export interface TimeCondition {
        day: telephony.TimeConditionsDayEnum;
        hourBegin: string;
        hourEnd: string;
        id: number;
        policy: telephony.TimeConditionsPolicyEnum;
        status: string;
    }
    /**
     * Time conditions options
     * interface fullName: telephony.TimeConditionOptions.TimeConditionOptions
     */
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
    /**
     * Day of the time condition
     * type fullname: telephony.TimeConditionsDayEnum
     */
    export type TimeConditionsDayEnum = "friday" | "holiday" | "monday" | "saturday" | "sunday" | "thursday" | "tuesday" | "wednesday"
    /**
     * Time conditions global status
     * type fullname: telephony.TimeConditionsGlobalStatusEnum
     */
    export type TimeConditionsGlobalStatusEnum = "deleted" | "disabled" | "enabled"
    /**
     * Policy of the time condition
     * type fullname: telephony.TimeConditionsPolicyEnum
     */
    export type TimeConditionsPolicyEnum = "available" | "slot1" | "slot2" | "slot3"
    /**
     * Forward type
     * type fullname: telephony.TimeConditionsSettingsForwardTypeEnum
     */
    export type TimeConditionsSettingsForwardTypeEnum = "number" | "voicemail"
    /**
     * Type of slot
     * type fullname: telephony.TimeConditionsSlotTypeEnum
     */
    export type TimeConditionsSlotTypeEnum = "number" | "voicemail"
    /**
     * Timeout before unavailable action is triggered
     * type fullname: telephony.TimeConditionsTimeoutEnum
     */
    export type TimeConditionsTimeoutEnum = 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 5 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90
    /**
     * A value associated to a timestamp
     * interface fullName: telephony.TimestampAndValue.TimestampAndValue
     */
    export interface TimestampAndValue {
        timestamp: number;
        value?: number;
    }
    /**
     * expiration possibility
     * type fullname: telephony.TokenExpirationEnum
     */
    export type TokenExpirationEnum = "1 day" | "1 hour" | "30 days" | "5 minutes" | "unlimited"
    /**
     * Line tones
     * interface fullName: telephony.Tones.Tones
     */
    export interface Tones {
        callWaiting: telephony.TonesEnum;
        endCall: telephony.TonesEnum;
        onHold: telephony.TonesOnHoldEnum;
        ringback: telephony.TonesEnum;
    }
    /**
     * Tones type
     * type fullname: telephony.TonesEnum
     */
    export type TonesEnum = "Custom sound" | "None"
    /**
     * Tones type
     * type fullname: telephony.TonesOnHoldEnum
     */
    export type TonesOnHoldEnum = "Custom sound" | "None" | "Predefined 1" | "Predefined 2"
    /**
     * Tones type
     * type fullname: telephony.TonesTypeEnum
     */
    export type TonesTypeEnum = "callWaiting" | "endCall" | "onHold" | "ringback"
    /**
     * Trunk service
     * interface fullName: telephony.Trunk.Trunk
     */
    export interface Trunk {
        description: string;
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * External displayed number linked to a trunk
     * interface fullName: telephony.TrunkExternalDisplayedNumber.TrunkExternalDisplayedNumber
     */
    export interface TrunkExternalDisplayedNumber {
        createdAt: string;
        number: string;
        status: telephony.TrunkExternalDisplayedNumberStatusEnum;
        validatedAt?: string;
    }
    /**
     * Status of the trunk's external displayed number
     * type fullname: telephony.TrunkExternalDisplayedNumberStatusEnum
     */
    export type TrunkExternalDisplayedNumberStatusEnum = "enabled" | "refused" | "toDelete" | "waitingValidation"
    /**
     * Trunk external displayed number validation
     * interface fullName: telephony.TrunkExternalDisplayedNumberValidation.TrunkExternalDisplayedNumberValidation
     */
    export interface TrunkExternalDisplayedNumberValidation {
        phoneCallTaskId: number;
        validationCode: string;
    }
    /**
     * Details for a channels pack
     * interface fullName: telephony.TrunkSimultaneousPack.TrunkSimultaneousPack
     */
    export interface TrunkSimultaneousPack {
        channels: number;
        quantity: number;
        unitPrice: order.Price;
    }
    /**
     * Repartition of simultaneous channels packs for a trunk
     * interface fullName: telephony.TrunkSimultaneousPacksRepartition.TrunkSimultaneousPacksRepartition
     */
    export interface TrunkSimultaneousPacksRepartition {
        optimizedChannelsQuantity: number;
        packsRepartition: telephony.TrunkSimultaneousPack[];
        totalPrice: order.Price;
    }
    /**
     * All existing types of line or alias
     * type fullname: telephony.TypeEnum
     */
    export type TypeEnum = "carrierSip" | "cloudHunting" | "cloudIvr" | "conference" | "contactCenterSolution" | "contactCenterSolutionExpert" | "ddi" | "easyHunting" | "easyPabx" | "empty" | "fax" | "freefax" | "mgcp" | "miniPabx" | "oldConference" | "plugAndFax" | "redirect" | "sip" | "svi" | "voicefax" | "voicemail" | "vxml"
    /**
     * All existing types
     * type fullname: telephony.TypeServiceEnum
     */
    export type TypeServiceEnum = "alias" | "line"
    /**
     * Call delivery record
     * interface fullName: telephony.VoiceConsumption.VoiceConsumption
     */
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
    /**
     * Consumption destination type
     * type fullname: telephony.VoiceConsumptionDestinationTypeEnum
     */
    export type VoiceConsumptionDestinationTypeEnum = "landline" | "mobile" | "special"
    /**
     * Consumption plan type
     * type fullname: telephony.VoiceConsumptionPlanTypeEnum
     */
    export type VoiceConsumptionPlanTypeEnum = "outplan" | "priceplan"
    /**
     * Consumption way type
     * type fullname: telephony.VoiceConsumptionWayTypeEnum
     */
    export type VoiceConsumptionWayTypeEnum = "incoming" | "outgoing" | "transfer"
    /**
     * All existing type of routing for a voicemail
     * type fullname: telephony.VoicefaxRoutingEnum
     */
    export type VoicefaxRoutingEnum = "fax" | "voicemail"
    /**
     * Voicemail service
     * interface fullName: telephony.Voicemail.Voicemail
     */
    export interface Voicemail {
        description: string;
        offers: string[];
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * Greeting type
     * type fullname: telephony.VoicemailGreetingEnum
     */
    export type VoicemailGreetingEnum = "default" | "full" | "short"
    /**
     * Voicemail greeting
     * interface fullName: telephony.VoicemailGreetings.VoicemailGreetings
     */
    export interface VoicemailGreetings {
        callee: string;
        dir: telephony.VoicemailMessageFolderGreetingEnum;
        id: number;
    }
    /**
     * Folder type
     * type fullname: telephony.VoicemailMessageFolderDirectoryEnum
     */
    export type VoicemailMessageFolderDirectoryEnum = "family" | "friends" | "inbox" | "old" | "urgent" | "work"
    /**
     * Folder type
     * type fullname: telephony.VoicemailMessageFolderGreetingEnum
     */
    export type VoicemailMessageFolderGreetingEnum = "busy" | "greet" | "temp" | "unavail"
    /**
     * Voicemail message
     * interface fullName: telephony.VoicemailMessages.VoicemailMessages
     */
    export interface VoicemailMessages {
        callee: string;
        caller: string;
        creationDatetime: string;
        dir: telephony.VoicemailMessageFolderDirectoryEnum;
        duration: number;
        id: number;
    }
    /**
     * Internal and external numbers for voicemail service
     * interface fullName: telephony.VoicemailNumbers.VoicemailNumbers
     */
    export interface VoicemailNumbers {
        external: string;
        internal: string;
    }
    /**
     * Voicemail Properties
     * interface fullName: telephony.VoicemailProperties.VoicemailProperties
     */
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
    /**
     * Vxml services
     * interface fullName: telephony.Vxml.Vxml
     */
    export interface Vxml {
        description: string;
        offers: string[];
        serviceName: string;
        serviceType: telephony.TypeServiceEnum;
    }
    /**
     * Vxml Properties
     * interface fullName: telephony.VxmlProperties.VxmlProperties
     */
    export interface VxmlProperties {
        url: string;
        urlRecord: string;
    }
    export namespace portability {
        /**
         * Special number category
         * type fullname: telephony.portability.SpecialNumberCategoryEnum
         */
        export type SpecialNumberCategoryEnum = "access" | "adults" | "announced" | "be_adults" | "be_content" | "be_games" | "be_general" | "be_relaxing" | "conferencing" | "contentsAuto" | "contentsManual" | "directory" | "games" | "linking" | "m2m" | "relationship"
    }
    /**
     * Time zones available for scheduled events time definitions
     * type fullname: telephony.timeZone
     */
    export type timeZone = "Europe/Berlin" | "Europe/Brussels" | "Europe/London" | "Europe/Madrid" | "Europe/Paris" | "Europe/Zurich"
    /**
     * Traffic extracts (SIP) of your line
     * interface fullName: telephony.trafficExtract.trafficExtract
     */
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
 * Api model for /telephony
 */
export interface Telephony {
    /**
     * List available services
     * GET /telephony
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    accessories: {
        /**
         * Get all available accessories
         * GET /telephony/accessories
         */
        $get(params: { brand?: string, country: telephony.NumberCountryEnum }): Promise<telephony.AccessoryOffer[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    aliases: {
        /**
         * List available services
         * GET /telephony/aliases
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /telephony/aliases/{serviceName}
             */
            $get(): Promise<telephony.TelephonyGenericService>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /telephony/aliases/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /telephony/aliases/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /telephony/aliases/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    availableDefaultSipDomains: {
        /**
         * Get all available SIP domains by country
         * GET /telephony/availableDefaultSipDomains
         */
        $get(params: { type: telephony.SipDomainProductTypeEnum }): Promise<telephony.DefaultSipDomains[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    currentOrderIds: {
        /**
         * Get current order ids
         * GET /telephony/currentOrderIds
         */
        $get(): Promise<number[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    directories: {
        availableZipCodes: {
            /**
             * Get all zip codes compatible for a number
             * GET /telephony/directories/availableZipCodes
             */
            $get(params: { country: telephony.NumberCountryEnum, number: string }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        cities: {
            /**
             * Get city informations from a zip code
             * GET /telephony/directories/cities
             */
            $get(params: { country: telephony.NumberCountryEnum, zipCode: string }): Promise<telephony.City[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    fax: {
        offers: {
            /**
             * Get all available fax offer compatible
             * GET /telephony/fax/offers
             */
            $get(params: { country: telephony.NumberCountryEnum }): Promise<telephony.LineOffer[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    line: {
        offer: {
            phones: {
                /**
                 * Get all available phone brands compatible with lines
                 * GET /telephony/line/offer/phones
                 */
                $get(params: { country: telephony.NumberCountryEnum, offer: string }): Promise<telephony.LinePhone[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        offers: {
            /**
             * Get all available line offer compatible
             * GET /telephony/line/offers
             */
            $get(params: { country: telephony.NumberCountryEnum }): Promise<telephony.LineOffer[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    lines: {
        /**
         * List available services
         * GET /telephony/lines
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /telephony/lines/{serviceName}
             */
            $get(): Promise<telephony.TelephonyGenericService>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /telephony/lines/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /telephony/lines/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /telephony/lines/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    number: {
        detailedZones: {
            /**
             * Get all available geographic zone with some details, from a country
             * GET /telephony/number/detailedZones
             */
            $get(params: { axiom?: string, country: telephony.NumberCountryEnum }): Promise<telephony.NumberDetailedZone[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        ranges: {
            /**
             * Get all available special range from a country
             * GET /telephony/number/ranges
             */
            $get(params: { country: telephony.NumberCountryEnum }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        specificNumbers: {
            /**
             * Get all available specific number from a country
             * GET /telephony/number/specificNumbers
             */
            $get(params: { country: telephony.NumberCountryEnum, range?: string, type: telephony.NumberTypeEnum, zone?: string }): Promise<telephony.SpecificNumber[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        zones: {
            /**
             * Get all available geographic zone from a country
             * GET /telephony/number/zones
             */
            $get(params: { axiom?: string, country: telephony.NumberCountryEnum }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    }
    searchServices: {
        /**
         * Search a service with its domain, to get its billing account and type
         * GET /telephony/searchServices
         */
        $get(params: { axiom: string }): Promise<telephony.TelephonySearchService[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    setDefaultSipDomain: {
        /**
         * Get all available SIP domains by country
         * POST /telephony/setDefaultSipDomain
         */
        $post(params: { country: telephony.NumberCountryEnum, domain: string, type: telephony.SipDomainProductTypeEnum }): Promise<void>;
    }
    sounds: {
        /**
         * Sounds attached to this telephony account
         * GET /telephony/sounds
         */
        $get(): Promise<number[]>;
        /**
         * Create a new sound
         * POST /telephony/sounds
         */
        $post(params: { description?: string, filename: string }): Promise<telephony.Sound>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(id: number): {
            /**
             * Delete the sound
             * DELETE /telephony/sounds/{id}
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /telephony/sounds/{id}
             */
            $get(): Promise<telephony.Sound>;
            /**
             * Alter this object properties
             * PUT /telephony/sounds/{id}
             */
            $put(params?: { creationDate?: string, description?: string, filename?: string, getUrl?: string, id?: number, putUrl?: string, size?: number }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    spare: {
        /**
         * List available services
         * GET /telephony/spare
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        brands: {
            /**
             * Get all available spare brands
             * GET /telephony/spare/brands
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
             * DELETE /telephony/spare/{spare}
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /telephony/spare/{spare}
             */
            $get(): Promise<spare.telephony.TelephonySpare>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            compatibleReplacement: {
                /**
                 * Return the list of phone domains compatible to be replaced
                 * GET /telephony/spare/{spare}/compatibleReplacement
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            replace: {
                /**
                 * Replace the phone by its spare. The broken phone became a spare if it was bought. An RMA is created if the broken phone is under securitydeposit.
                 * POST /telephony/spare/{spare}/replace
                 */
                $post(params: { domain: string, ip: string }): Promise<void>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /telephony/spare/{spare}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /telephony/spare/{spare}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    trunks: {
        /**
         * List available services
         * GET /telephony/trunks
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /telephony/trunks/{serviceName}
             */
            $get(): Promise<telephony.TelephonyGenericService>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /telephony/trunks/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /telephony/trunks/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /telephony/trunks/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
    $(billingAccount: string): {
        /**
         * Ask for a billing account termination.
         * DELETE /telephony/{billingAccount}
         */
        $delete(params: { details?: string, reason: telephony.TerminationReasonEnum }): Promise<void>;
        /**
         * Get this object properties
         * GET /telephony/{billingAccount}
         */
        $get(): Promise<telephony.BillingAccount>;
        /**
         * Alter this object properties
         * PUT /telephony/{billingAccount}
         */
        $put(params?: { allowedOutplan?: order.Price, billingAccount?: string, creditThreshold?: order.Price, currentOutplan?: order.Price, description?: string, hiddenExternalNumber?: boolean, overrideDisplayedNumber?: boolean, securityDeposit?: order.Price, status?: telephony.BillingAccountStatusEnum, trusted?: boolean }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        abbreviatedNumber: {
            /**
             * Abbreviated numbers for the billing account
             * GET /telephony/{billingAccount}/abbreviatedNumber
             */
            $get(): Promise<number[]>;
            /**
             * Create a new abbreviated number for the billing account
             * POST /telephony/{billingAccount}/abbreviatedNumber
             */
            $post(params: { abbreviatedNumber: number, destinationNumber: string, name: string, surname: string }): Promise<telephony.AbbreviatedNumberGroup>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(abbreviatedNumber: number): {
                /**
                 * Delete the given abbreviated number
                 * DELETE /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                 */
                $get(): Promise<telephony.AbbreviatedNumberGroup>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
                 */
                $put(params?: { abbreviatedNumber?: number, destinationNumber?: string, name?: string, surname?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        allowedCreditThreshold: {
            /**
             * Get the allowed creditThreshold for this billing account
             * GET /telephony/{billingAccount}/allowedCreditThreshold
             */
            $get(): Promise<order.Price[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        amountSecurityDeposit: {
            /**
             * Give all amounts availables for your billing account
             * GET /telephony/{billingAccount}/amountSecurityDeposit
             */
            $get(): Promise<order.Price[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        billingAccountSite: {
            /**
             * Current billing account site (billing account features are overwritten by the site)
             * GET /telephony/{billingAccount}/billingAccountSite
             */
            $get(): Promise<string>;
            /**
             * Used to overwrite current billing account feature by the billing account site
             * POST /telephony/{billingAccount}/billingAccountSite
             */
            $post(params: { billingAccountSite: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        canTransferSecurityDeposit: {
            /**
             * Check if security deposit transfer is possible between two billing accounts
             * POST /telephony/{billingAccount}/canTransferSecurityDeposit
             */
            $post(params: { billingAccountDestination: string }): Promise<boolean>;
        }
        cancelTermination: {
            /**
             * Cancel the billing account termination
             * POST /telephony/{billingAccount}/cancelTermination
             */
            $post(): Promise<void>;
        }
        carrierSip: {
            /**
             * Carrier SIP trunks associated with this billing account
             * GET /telephony/{billingAccount}/carrierSip
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/carrierSip/{serviceName}
                 */
                $get(): Promise<telephony.CarrierSip>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                cdrs: {
                    /**
                     * Get the Call Detail Records of your Carrier SIP service
                     * GET /telephony/{billingAccount}/carrierSip/{serviceName}/cdrs
                     */
                    $get(params?: { month?: string }): Promise<telephony.Document>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                clusterDetails: {
                    /**
                     * Get details about the carrier sip cluster of your stack
                     * GET /telephony/{billingAccount}/carrierSip/{serviceName}/clusterDetails
                     */
                    $get(): Promise<telephony.CarrierSipClusterInfo>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                endpoints: {
                    /**
                     * List of your remote sip endpoints (ips, ports, protocol) of your carrier sip trunk service
                     * GET /telephony/{billingAccount}/carrierSip/{serviceName}/endpoints
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/carrierSip/{serviceName}/endpoints/{id}
                         */
                        $get(): Promise<telephony.CarrierSipCustomerEndpoint>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                settings: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/carrierSip/{serviceName}/settings
                     */
                    $get(): Promise<telephony.CarrierSipDetails>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/carrierSip/{serviceName}/settings
                     */
                    $put(params?: { description?: string, maxCallsPerSecond?: number, maxConcurrentCalls?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /telephony/{billingAccount}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
        }
        conference: {
            /**
             * Conferences associated with this billing account
             * GET /telephony/{billingAccount}/conference
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/conference/{serviceName}
                 */
                $get(): Promise<telephony.Conference>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                announceUpload: {
                    /**
                     * Change the sound played at the beginning of the conference
                     * POST /telephony/{billingAccount}/conference/{serviceName}/announceUpload
                     */
                    $post(params: { documentId: string }): Promise<telephony.Task>;
                }
                histories: {
                    /**
                     * List your past conferences for this number
                     * GET /telephony/{billingAccount}/conference/{serviceName}/histories
                     */
                    $get(params?: { dateBegin_from?: string, dateBegin_to?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/conference/{serviceName}/histories/{id}
                         */
                        $get(): Promise<telephony.ConferenceHistory>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                informations: {
                    /**
                     * Get realtime conference informations
                     * GET /telephony/{billingAccount}/conference/{serviceName}/informations
                     */
                    $get(): Promise<telephony.ConferenceInformations>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                lock: {
                    /**
                     * Lock the conference room
                     * POST /telephony/{billingAccount}/conference/{serviceName}/lock
                     */
                    $post(): Promise<telephony.Task>;
                }
                participants: {
                    /**
                     * Current participants of the associate conference
                     * GET /telephony/{billingAccount}/conference/{serviceName}/participants
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/conference/{serviceName}/participants/{id}
                         */
                        $get(): Promise<telephony.ConferenceParticipants>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        deaf: {
                            /**
                             * Make a participant deaf in your conference room
                             * POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/deaf
                             */
                            $post(): Promise<telephony.Task>;
                        }
                        energy: {
                            /**
                             * Change a participant level of audio transmission
                             * POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/energy
                             */
                            $post(params: { value: number }): Promise<telephony.Task>;
                        }
                        kick: {
                            /**
                             * Eject a participant from your conference room
                             * POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/kick
                             */
                            $post(): Promise<telephony.Task>;
                        }
                        mute: {
                            /**
                             * Mute a participant in your conference room
                             * POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/mute
                             */
                            $post(): Promise<telephony.Task>;
                        }
                        undeaf: {
                            /**
                             * Make a participant undeaf your conference room
                             * POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/undeaf
                             */
                            $post(): Promise<telephony.Task>;
                        }
                        unmute: {
                            /**
                             * Unmute a participant in your conference room
                             * POST /telephony/{billingAccount}/conference/{serviceName}/participants/{id}/unmute
                             */
                            $post(): Promise<telephony.Task>;
                        }
                    };
                }
                rooms: {
                    /**
                     * List your conferences rooms for this number
                     * GET /telephony/{billingAccount}/conference/{serviceName}/rooms
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a new conference room on your conference service
                     * POST /telephony/{billingAccount}/conference/{serviceName}/rooms
                     */
                    $post(params?: { roomNumber?: number }): Promise<telephony.ConferenceRoom>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(roomNumber: number): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}
                         */
                        $get(): Promise<telephony.ConferenceRoom>;
                        /**
                         * Alter this object properties
                         * PUT /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}
                         */
                        $put(params?: { announceFile?: boolean, announceFilename?: string, announceSoundId?: number, anonymousRejection?: boolean, enterMuted?: boolean, eventsChannel?: string, expirationDate?: string, language?: telephony.ConferenceLanguageEnum, pin?: string, recordStatus?: boolean, reportEmail?: string, reportStatus?: telephony.ConferenceReportStatusEnum, roomNumber?: number, whiteLabelReport?: boolean }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        histories: {
                            /**
                             * List your past conferences for this room
                             * GET /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/histories
                             */
                            $get(params?: { dateBegin_from?: string, dateBegin_to?: string }): Promise<number[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(id: number): {
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/histories/{id}
                                 */
                                $get(): Promise<telephony.ConferenceHistory>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        lock: {
                            /**
                             * Lock the conference room
                             * POST /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/lock
                             */
                            $post(): Promise<telephony.Task>;
                        }
                        participants: {
                            /**
                             * Current participants of the conference room
                             * GET /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/participants
                             */
                            $get(): Promise<number[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(id: number): {
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/participants/{id}
                                 */
                                $get(): Promise<telephony.ConferenceParticipants>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                deaf: {
                                    /**
                                     * Make a participant deaf in your conference room
                                     * POST /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/participants/{id}/deaf
                                     */
                                    $post(): Promise<telephony.Task>;
                                }
                                energy: {
                                    /**
                                     * Change a participant level of audio transmission
                                     * POST /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/participants/{id}/energy
                                     */
                                    $post(params: { value: number }): Promise<telephony.Task>;
                                }
                                kick: {
                                    /**
                                     * Eject a participant from your conference room
                                     * POST /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/participants/{id}/kick
                                     */
                                    $post(): Promise<telephony.Task>;
                                }
                                mute: {
                                    /**
                                     * Mute a participant in your conference room
                                     * POST /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/participants/{id}/mute
                                     */
                                    $post(): Promise<telephony.Task>;
                                }
                                undeaf: {
                                    /**
                                     * Make a participant undeaf your conference room
                                     * POST /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/participants/{id}/undeaf
                                     */
                                    $post(): Promise<telephony.Task>;
                                }
                                unmute: {
                                    /**
                                     * Unmute a participant in your conference room
                                     * POST /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/participants/{id}/unmute
                                     */
                                    $post(): Promise<telephony.Task>;
                                }
                            };
                        }
                        unlock: {
                            /**
                             * Unlock the conference room
                             * POST /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/unlock
                             */
                            $post(): Promise<telephony.Task>;
                        }
                        webAccess: {
                            /**
                             * List your conference room  web access
                             * GET /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/webAccess
                             */
                            $get(): Promise<number[]>;
                            /**
                             * Add a public web access to your conference
                             * POST /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/webAccess
                             */
                            $post(params: { type: telephony.ConferenceWebAccessTypeEnum }): Promise<telephony.ConferenceWebAccess>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(id: number): {
                                /**
                                 * Delete a public web access to your conference
                                 * DELETE /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/webAccess/{id}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/webAccess/{id}
                                 */
                                $get(): Promise<telephony.ConferenceWebAccess>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    };
                }
                roomsStats: {
                    /**
                     * Get realtime statistics about all rooms of your conference number
                     * GET /telephony/{billingAccount}/conference/{serviceName}/roomsStats
                     */
                    $get(): Promise<telephony.ConferenceRoomsStatistics>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                settings: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/conference/{serviceName}/settings
                     */
                    $get(): Promise<telephony.ConferenceProperties>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/conference/{serviceName}/settings
                     */
                    $put(params?: { announceFile?: boolean, announceFilename?: string, announceSoundId?: number, anonymousRejection?: boolean, enterMuted?: boolean, eventsChannel?: string, language?: telephony.ConferenceLanguageEnum, pin?: string, recordStatus?: boolean, reportEmail?: string, reportStatus?: telephony.ConferenceReportStatusEnum, roomNumber?: number, whiteLabelReport?: boolean }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                unlock: {
                    /**
                     * Unlock the conference room
                     * POST /telephony/{billingAccount}/conference/{serviceName}/unlock
                     */
                    $post(): Promise<telephony.Task>;
                }
                webAccess: {
                    /**
                     * List your conference web access
                     * GET /telephony/{billingAccount}/conference/{serviceName}/webAccess
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Add a public web access to your conference
                     * POST /telephony/{billingAccount}/conference/{serviceName}/webAccess
                     */
                    $post(params: { type: telephony.ConferenceWebAccessTypeEnum }): Promise<telephony.ConferenceWebAccess>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete a public web access to your conference
                         * DELETE /telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}
                         */
                        $get(): Promise<telephony.ConferenceWebAccess>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        ddi: {
            /**
             * DDIs (direct dial-in) associated with this billing account
             * GET /telephony/{billingAccount}/ddi
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/ddi/{serviceName}
                 */
                $get(): Promise<telephony.Ddi>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/ddi/{serviceName}
                 */
                $put(params?: { description?: string, destination?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                changeDestination: {
                    /**
                     * Change the destination of the DDI
                     * POST /telephony/{billingAccount}/ddi/{serviceName}/changeDestination
                     */
                    $post(params: { destination: string }): Promise<telephony.Task>;
                }
            };
        }
        easyHunting: {
            /**
             * OVH easy calls queues associated with this billing account
             * GET /telephony/{billingAccount}/easyHunting
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/easyHunting/{serviceName}
                 */
                $get(): Promise<telephony.EasyHunting>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/easyHunting/{serviceName}
                 */
                $put(params?: { anonymousRejection?: boolean, description?: string, featureType?: telephony.TypeEnum, isCCS?: boolean, maxWaitTime?: number, queueSize?: number, serviceName?: string, serviceType?: telephony.TypeServiceEnum, showCallerNumber?: telephony.OvhPabxDialplanNumberPresentationEnum, statusIvrEnabled?: boolean, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum, toneOnClosing?: number, toneOnHold?: number, toneOnOpening?: number, voicemail?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                hunting: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting
                     */
                    $get(): Promise<telephony.OvhPabxHunting>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting
                     */
                    $put(params?: { crmUrlTemplate?: string, g729?: boolean, name?: string, statusIvrEnabled?: boolean }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    agent: {
                        /**
                         * Calls agents
                         * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Create a new agent
                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent
                         */
                        $post(params: { description?: string, number: string, simultaneousLines: number, status: telephony.OvhPabxHuntingAgentStatusEnum, timeout: number, wrapUpTime: number }): Promise<telephony.OvhPabxHuntingAgent>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(agentId: number): {
                            /**
                             * Delete the given agent
                             * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                             */
                            $get(): Promise<telephony.OvhPabxHuntingAgent>;
                            /**
                             * Alter this object properties
                             * PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
                             */
                            $put(params?: { agentId?: number, breakStatus?: number, description?: string, number?: string, simultaneousLines?: number, status?: telephony.OvhPabxHuntingAgentStatusEnum, timeout?: number, type?: telephony.OvhPabxHuntingAgentTypeEnum, wrapUpTime?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            bannerAccess: {
                                /**
                                 * Delete the given web access
                                 * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                 */
                                $get(): Promise<telephony.BannerAccess>;
                                /**
                                 * Create a new web access for this ressource
                                 * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                 */
                                $post(): Promise<telephony.BannerAccess>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            calls: {
                                /**
                                 * Current calls of the callcenter agent
                                 * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(id: number): {
                                    /**
                                     * Get this object properties
                                     * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}
                                     */
                                    $get(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    eavesdrop: {
                                        /**
                                         * Eavesdrop on a call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    hangup: {
                                        /**
                                         * Hangup a call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup
                                         */
                                        $post(): Promise<telephony.Task>;
                                    }
                                    hold: {
                                        /**
                                         * Toogle hold on call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold
                                         */
                                        $post(): Promise<telephony.Task>;
                                    }
                                    intercept: {
                                        /**
                                         * Intercept a non answered call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        /**
                                         * Transfer an answered call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        /**
                                         * Whisper on a call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper
                                         */
                                        $post(params: { number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum }): Promise<telephony.Task>;
                                    }
                                };
                            }
                            eventToken: {
                                /**
                                 * Delete the given token
                                 * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                 */
                                $get(): Promise<telephony.EventToken>;
                                /**
                                 * Create a new token
                                 * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
                                 */
                                $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            liveStatus: {
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/liveStatus
                                 */
                                $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            queue: {
                                /**
                                 * Agent assigned to the queues
                                 * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Create a new skill for an agent (it adds the agent in a queue)
                                 * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue
                                 */
                                $post(params: { position: number, queueId: number }): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(queueId: number): {
                                    /**
                                     * Delete the given skill
                                     * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                     */
                                    $delete(): Promise<void>;
                                    /**
                                     * Get this object properties
                                     * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                     */
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    /**
                                     * Alter this object properties
                                     * PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                     */
                                    $put(params?: { agentId?: number, position?: number, queueId?: number }): Promise<void>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    liveStatus: {
                                        /**
                                         * Get this object properties
                                         * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus
                                         */
                                        $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    }
                                };
                            }
                        };
                    }
                    customStatus: {
                        /**
                         * Custom statuses of your agents
                         * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Create a new custom status
                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus
                         */
                        $post(params: { color?: string, description?: string, name: string }): Promise<telephony.OvhPabxCustomStatus>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(id: number): {
                            /**
                             * Delete the given custom status
                             * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}
                             */
                            $get(): Promise<telephony.OvhPabxCustomStatus>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    eventToken: {
                        /**
                         * Delete the given token
                         * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken
                         */
                        $get(): Promise<telephony.EventToken>;
                        /**
                         * Create a new token
                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken
                         */
                        $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    queue: {
                        /**
                         * Calls queues
                         * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Create a new queue
                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue
                         */
                        $post(params: { actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy: telephony.OvhPabxHuntingQueueStrategyEnum }): Promise<telephony.OvhPabxHuntingQueue>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(queueId: number): {
                            /**
                             * Delete the given queue
                             * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                             */
                            $get(): Promise<telephony.OvhPabxHuntingQueue>;
                            /**
                             * Alter this object properties
                             * PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
                             */
                            $put(params?: { actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, followCallForwards?: boolean, maxMember?: number, maxWaitTime?: number, queueId?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            agent: {
                                /**
                                 * Agent assigned to the queue
                                 * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Create a new skill for an agent (it adds the agent in a queue)
                                 * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent
                                 */
                                $post(params: { position: number, queueId: number }): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(agentId: number): {
                                    /**
                                     * Delete the given skill
                                     * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                     */
                                    $delete(): Promise<void>;
                                    /**
                                     * Get this object properties
                                     * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                     */
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    /**
                                     * Alter this object properties
                                     * PUT /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                     */
                                    $put(params?: { agentId?: number, position?: number, queueId?: number }): Promise<void>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    liveStatus: {
                                        /**
                                         * Get this object properties
                                         * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus
                                         */
                                        $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    }
                                };
                            }
                            liveCalls: {
                                /**
                                 * Live calls of the queue
                                 * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(id: number): {
                                    /**
                                     * Get this object properties
                                     * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}
                                     */
                                    $get(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    eavesdrop: {
                                        /**
                                         * Eavesdrop on a call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    hangup: {
                                        /**
                                         * Hangup a call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup
                                         */
                                        $post(): Promise<telephony.Task>;
                                    }
                                    hold: {
                                        /**
                                         * Toogle hold on call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold
                                         */
                                        $post(): Promise<telephony.Task>;
                                    }
                                    intercept: {
                                        /**
                                         * Intercept a non answered call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        /**
                                         * Transfer an answered call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        /**
                                         * Whisper on a call
                                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper
                                         */
                                        $post(params: { number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum }): Promise<telephony.Task>;
                                    }
                                };
                            }
                            liveStatistics: {
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveStatistics
                                 */
                                $get(): Promise<telephony.OvhPabxHuntingQueueLiveStatistics>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                }
                records: {
                    /**
                     * Records associated with this PABX
                     * GET /telephony/{billingAccount}/easyHunting/{serviceName}/records
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the given record
                         * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}
                         */
                        $get(): Promise<telephony.OvhPabxRecord>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                screenListConditions: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions
                     */
                    $get(): Promise<telephony.EasyHuntingScreenListsConditionsSettings>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions
                     */
                    $put(params?: { status?: telephony.EasyHuntingScreenListsConditionsStatusEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    conditions: {
                        /**
                         * Screen lists conditions checked when a call is received
                         * GET /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions
                         */
                        $get(params?: { screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<number[]>;
                        /**
                         * Create a new screenlist condition for an extension
                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions
                         */
                        $post(params: { callerIdNumber?: string, destinationNumber?: string, screenListType: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<telephony.EasyHuntingScreenListsConditions>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(conditionId: number): {
                            /**
                             * Delete the given condition
                             * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                             */
                            $get(): Promise<telephony.EasyHuntingScreenListsConditions>;
                            /**
                             * Alter this object properties
                             * PUT /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
                             */
                            $put(params?: { callerIdNumber?: string, conditionId?: number, destinationNumber?: string, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                }
                sound: {
                    /**
                     * Sounds associated with this PABX
                     * GET /telephony/{billingAccount}/easyHunting/{serviceName}/sound
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(soundId: number): {
                        /**
                         * Delete the given sound
                         * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}
                         */
                        $get(): Promise<telephony.OvhPabxSound>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                soundUpload: {
                    /**
                     * Upload new sound file
                     * POST /telephony/{billingAccount}/easyHunting/{serviceName}/soundUpload
                     */
                    $post(params?: { documentId?: string, name?: string, url?: string }): Promise<telephony.Task>;
                }
                timeConditions: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions
                     */
                    $get(): Promise<telephony.EasyHuntingTimeConditionsSettings>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions
                     */
                    $put(params?: { enable?: boolean, slot1Number?: string, slot1Type?: telephony.TimeConditionsSettingsForwardTypeEnum, slot2Number?: string, slot2Type?: telephony.TimeConditionsSettingsForwardTypeEnum, slot3Number?: string, slot3Type?: telephony.TimeConditionsSettingsForwardTypeEnum, unavailableNumber?: string, unavailableType?: telephony.TimeConditionsSettingsForwardTypeEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    conditions: {
                        /**
                         * Time conditions checked when a call is received
                         * GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions
                         */
                        $get(params?: { policy?: telephony.TimeConditionsPolicyEnum }): Promise<number[]>;
                        /**
                         * Create a new time condition
                         * POST /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions
                         */
                        $post(params: { policy: telephony.TimeConditionsPolicyEnum, timeFrom: string, timeTo: string, weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum }): Promise<telephony.EasyHuntingTimeConditions>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(conditionId: number): {
                            /**
                             * Delete the given condition
                             * DELETE /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                             */
                            $get(): Promise<telephony.EasyHuntingTimeConditions>;
                            /**
                             * Alter this object properties
                             * PUT /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
                             */
                            $put(params?: { conditionId?: number, policy?: telephony.TimeConditionsPolicyEnum, timeFrom?: string, timeTo?: string, weekDay?: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                }
            };
        }
        easyPabx: {
            /**
             * EasyPabx associated with this billing account
             * GET /telephony/{billingAccount}/easyPabx
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/easyPabx/{serviceName}
                 */
                $get(): Promise<telephony.EasyPabx>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/easyPabx/{serviceName}
                 */
                $put(params?: { description?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                hunting: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting
                     */
                    $get(): Promise<telephony.EasyPabxHunting>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting
                     */
                    $put(params?: { anonymousCallRejection?: boolean, name?: string, noReplyTimer?: number, numberOfCalls?: number, pattern?: telephony.EasyMiniPabxHuntingPatternEnum, strategy?: telephony.EasyMiniPabxHuntingStrategyEnum, toneOnClosure?: boolean, toneOnClosureSoundId?: number, toneOnHold?: boolean, toneOnHoldSoundId?: number, toneRingback?: boolean, toneRingbackSoundId?: number, voicemail?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    agent: {
                        /**
                         * Hunting agents
                         * GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create a new agent
                         * POST /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent
                         */
                        $post(params: { agentNumber: string, logged: boolean, noReplyTimer: number, position: number }): Promise<telephony.EasyMiniPabxHuntingAgent>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(agentNumber: string): {
                            /**
                             * Delete the agent
                             * DELETE /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                             */
                            $get(): Promise<telephony.EasyMiniPabxHuntingAgent>;
                            /**
                             * Alter this object properties
                             * PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}
                             */
                            $put(params?: { agentNumber?: string, logged?: boolean, noReplyTimer?: number, position?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    tones: {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones
                         */
                        $get(): Promise<telephony.Tones>;
                        /**
                         * Alter this object properties
                         * PUT /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones
                         */
                        $put(params?: { callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        toneUpload: {
                            /**
                             * Upload new tone file
                             * POST /telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones/toneUpload
                             */
                            $post(params: { documentId?: string, type: telephony.TonesTypeEnum, url?: string }): Promise<telephony.Task>;
                        }
                    }
                }
            };
        }
        eventToken: {
            /**
             * Delete the given token
             * DELETE /telephony/{billingAccount}/eventToken
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /telephony/{billingAccount}/eventToken
             */
            $get(): Promise<telephony.EventToken>;
            /**
             * Create a new token
             * POST /telephony/{billingAccount}/eventToken
             */
            $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        fax: {
            /**
             * Faxes associated with this billing account
             * GET /telephony/{billingAccount}/fax
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/fax/{serviceName}
                 */
                $get(): Promise<telephony.Fax>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/fax/{serviceName}
                 */
                $put(params?: { description?: string, notifications?: telephony.LineNotificationsOptions, offers?: string[], serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                campaigns: {
                    /**
                     * Fax campaigns of the associate fax
                     * GET /telephony/{billingAccount}/fax/{serviceName}/campaigns
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a new fax campaign
                     * POST /telephony/{billingAccount}/fax/{serviceName}/campaigns
                     */
                    $post(params: { documentId: string, faxQuality?: telephony.FaxQualityEnum, name: string, recipientsDocId?: string, recipientsList?: string[], recipientsType: telephony.FaxCampaignRecipientsTypeEnum, sendDate?: string, sendType: telephony.FaxCampaignSendTypeEnum }): Promise<telephony.FaxCampaign>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete a fax campaign
                         * DELETE /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}
                         */
                        $get(): Promise<telephony.FaxCampaign>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        detail: {
                            /**
                             * Detail of the fax recipients by status
                             * GET /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/detail
                             */
                            $get(): Promise<telephony.FaxCampaignDetail>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        start: {
                            /**
                             * Start a fax campaign
                             * POST /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/start
                             */
                            $post(): Promise<void>;
                        }
                        stop: {
                            /**
                             * Stop a fax campaign
                             * POST /telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/stop
                             */
                            $post(): Promise<void>;
                        }
                    };
                }
                screenLists: {
                    /**
                     * Delete all fax screenLists
                     * DELETE /telephony/{billingAccount}/fax/{serviceName}/screenLists
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/fax/{serviceName}/screenLists
                     */
                    $get(): Promise<telephony.FaxScreen>;
                    /**
                     * Create a new fax ScreenLists
                     * POST /telephony/{billingAccount}/fax/{serviceName}/screenLists
                     */
                    $post(params?: { blacklistedNumbers?: string[], blacklistedTSI?: string[], filteringList?: telephony.FaxScreenListTypeEnum, whitelistedNumbers?: string[], whitelistedTSI?: string[] }): Promise<telephony.FaxScreen>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/fax/{serviceName}/screenLists
                     */
                    $put(params?: { blacklistedNumbers?: string[], blacklistedTSI?: string[], callNumber?: string, countryCode?: string, filteringList?: telephony.FaxScreenListTypeEnum, serviceName?: string, whitelistedNumbers?: string[], whitelistedTSI?: string[] }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    reset: {
                        /**
                         * Reset a specifical fax screenList
                         * POST /telephony/{billingAccount}/fax/{serviceName}/screenLists/reset
                         */
                        $post(params?: { blacklistedNumbers?: boolean, blacklistedTSI?: boolean, whitelistedNumbers?: boolean, whitelistedTSI?: boolean }): Promise<void>;
                    }
                }
                settings: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/fax/{serviceName}/settings
                     */
                    $get(): Promise<telephony.FaxProperties>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/fax/{serviceName}/settings
                     */
                    $put(params?: { callNumber?: string, countryCode?: string, faxMaxCall?: telephony.FaxSendingTries, faxQuality?: telephony.FaxQualityEnum, faxTagLine?: string, fromEmail?: string, fromName?: string, mailFormat?: telephony.FaxMailFormatEnum, receiver?: string, redirectionEmail?: string[], rejectAnonymous?: boolean, sender?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Generates a new password for your fax account
                         * POST /telephony/{billingAccount}/fax/{serviceName}/settings/changePassword
                         */
                        $post(params?: { password?: string }): Promise<string>;
                    }
                    sendFax: {
                        /**
                         * Send a fax
                         * POST /telephony/{billingAccount}/fax/{serviceName}/settings/sendFax
                         */
                        $post(params: { dateSchedule?: string, pdfUrl: string, recipients: string[] }): Promise<telephony.Task>;
                    }
                }
            };
        }
        historyConsumption: {
            /**
             * Previous billed consumptions
             * GET /telephony/{billingAccount}/historyConsumption
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(date: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/historyConsumption/{date}
                 */
                $get(): Promise<telephony.HistoryConsumption>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                file: {
                    /**
                     * Previous billed consumption files
                     * GET /telephony/{billingAccount}/historyConsumption/{date}/file
                     */
                    $get(params: { extension: telephony.BillDocument }): Promise<telephony.PcsFile>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        historyRepaymentConsumption: {
            /**
             * Previous repayment bill
             * GET /telephony/{billingAccount}/historyRepaymentConsumption
             */
            $get(): Promise<string[]>;
            /**
             * Ask for a new repayment
             * POST /telephony/{billingAccount}/historyRepaymentConsumption
             */
            $post(params?: { billingNumber?: string }): Promise<telephony.HistoryRepaymentConsumption>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(date: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/historyRepaymentConsumption/{date}
                 */
                $get(): Promise<telephony.HistoryRepaymentConsumption>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                document: {
                    /**
                     * Get the csv document
                     * GET /telephony/{billingAccount}/historyRepaymentConsumption/{date}/document
                     */
                    $get(): Promise<telephony.PcsFile>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        historyTollfreeConsumption: {
            /**
             * Previous tollfree bill
             * GET /telephony/{billingAccount}/historyTollfreeConsumption
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(date: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/historyTollfreeConsumption/{date}
                 */
                $get(): Promise<telephony.HistoryTollfreeConsumption>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                document: {
                    /**
                     * Get the csv document
                     * GET /telephony/{billingAccount}/historyTollfreeConsumption/{date}/document
                     */
                    $get(): Promise<telephony.PcsFile>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        line: {
            /**
             * Lines associated with this billing account
             * GET /telephony/{billingAccount}/line
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/line/{serviceName}
                 */
                $get(): Promise<telephony.Line>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/line/{serviceName}
                 */
                $put(params?: { canChangePassword?: boolean, description?: string, deviceSlot?: number, getPublicOffer?: telephony.LineOffer, infrastructure?: string, isAttachedToOtherLinesPhone?: boolean, notifications?: telephony.LineNotificationsOptions, offers?: string[], serviceName?: string, serviceType?: telephony.TypeServiceEnum, simultaneousLines?: number }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                abbreviatedNumber: {
                    /**
                     * Abbreviated numbers for the line
                     * GET /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a new abbreviated number for the line
                     * POST /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber
                     */
                    $post(params: { abbreviatedNumber: number, destinationNumber: string, name: string, surname: string }): Promise<telephony.AbbreviatedNumber>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(abbreviatedNumber: number): {
                        /**
                         * Delete the given abbreviated number
                         * DELETE /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                         */
                        $get(): Promise<telephony.AbbreviatedNumber>;
                        /**
                         * Alter this object properties
                         * PUT /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
                         */
                        $put(params?: { abbreviatedNumber?: number, destinationNumber?: string, name?: string, surname?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                activateNewPhone: {
                    /**
                     * Check if there is a new phone to activate and if it's possible, in case of phone switch
                     * GET /telephony/{billingAccount}/line/{serviceName}/activateNewPhone
                     */
                    $get(): Promise<void>;
                    /**
                     * Allow to activate new phone, in case of phone switch
                     * POST /telephony/{billingAccount}/line/{serviceName}/activateNewPhone
                     */
                    $post(): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                antihack: {
                    /**
                     * Current list of numbers or short code numbers restricted by an auto antihack
                     * GET /telephony/{billingAccount}/line/{serviceName}/antihack
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Clean the antihack or add it on active filter screen list
                     * POST /telephony/{billingAccount}/line/{serviceName}/antihack
                     */
                    $post(params: { action: telephony.AntihackActionEnum, restricted?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                associateDevice: {
                    /**
                     * Associate a device to the current line with the device mac address
                     * POST /telephony/{billingAccount}/line/{serviceName}/associateDevice
                     */
                    $post(params: { ipAddress?: string, macAddress: string, slot?: number }): Promise<void>;
                }
                automaticCall: {
                    /**
                     * Automatic Calls made by Calls Generator on this line
                     * GET /telephony/{billingAccount}/line/{serviceName}/automaticCall
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Make an automatic phone call. Return generated call identifier
                     * POST /telephony/{billingAccount}/line/{serviceName}/automaticCall
                     */
                    $post(params: { bridgeNumberDialplan?: string, calledNumber: string, callingNumber?: string, dialplan: telephony.CallsGeneratorDialplanEnum, isAnonymous: boolean, playbackAudioFileDialplan?: string, timeout?: number, ttsTextDialplan?: string }): Promise<string>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(identifier: string): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/line/{serviceName}/automaticCall/{identifier}
                         */
                        $get(): Promise<telephony.CallsGenerated>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                availableSipDomains: {
                    /**
                     * Listing of domains Sip availables
                     * GET /telephony/{billingAccount}/line/{serviceName}/availableSipDomains
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                block: {
                    /**
                     * Block the line. By default it will block incoming and outgoing calls (except for emergency numbers)
                     * POST /telephony/{billingAccount}/line/{serviceName}/block
                     */
                    $post(params?: { mode?: telephony.LineBlockingMode }): Promise<void>;
                }
                calls: {
                    /**
                     * The active calls of your line as a call center agent
                     * GET /telephony/{billingAccount}/line/{serviceName}/calls
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/line/{serviceName}/calls/{id}
                         */
                        $get(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        eavesdrop: {
                            /**
                             * Eavesdrop on a call
                             * POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/eavesdrop
                             */
                            $post(params: { number: string }): Promise<telephony.Task>;
                        }
                        hangup: {
                            /**
                             * Hangup a call
                             * POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/hangup
                             */
                            $post(): Promise<telephony.Task>;
                        }
                        hold: {
                            /**
                             * Toogle hold on call
                             * POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/hold
                             */
                            $post(): Promise<telephony.Task>;
                        }
                        intercept: {
                            /**
                             * Intercept a non answered call
                             * POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/intercept
                             */
                            $post(params: { number: string }): Promise<telephony.Task>;
                        }
                        transfer: {
                            /**
                             * Transfer an answered call
                             * POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/transfer
                             */
                            $post(params: { number: string }): Promise<telephony.Task>;
                        }
                        whisper: {
                            /**
                             * Whisper on a call
                             * POST /telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper
                             */
                            $post(params: { number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum }): Promise<telephony.Task>;
                        }
                    };
                }
                canChangePassword: {
                    /**
                     * Ability to manage SIP password on this service
                     * GET /telephony/{billingAccount}/line/{serviceName}/canChangePassword
                     */
                    $get(): Promise<boolean>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                cancelConvertToNumber: {
                    /**
                     * Cancel a scheduled conversion to number
                     * POST /telephony/{billingAccount}/line/{serviceName}/cancelConvertToNumber
                     */
                    $post(): Promise<void>;
                }
                changePassword: {
                    /**
                     * Change the SIP account password. It must be more than 7 and less than 21 alpha and numerical characters.
                     * POST /telephony/{billingAccount}/line/{serviceName}/changePassword
                     */
                    $post(params?: { password?: string }): Promise<void>;
                }
                click2Call: {
                    /**
                     * Make a phone call from the current line
                     * POST /telephony/{billingAccount}/line/{serviceName}/click2Call
                     */
                    $post(params: { calledNumber: string, callingNumber?: string, intercom?: boolean }): Promise<void>;
                }
                click2CallUser: {
                    /**
                     * User which can use click 2 call on the line
                     * GET /telephony/{billingAccount}/line/{serviceName}/click2CallUser
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a new user for click 2 call
                     * POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser
                     */
                    $post(params: { login: string, password: string }): Promise<number>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete a click 2 call user
                         * DELETE /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}
                         */
                        $get(): Promise<telephony.Click2CallUser>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        changePassword: {
                            /**
                             * Change the password of the click2call user
                             * POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/changePassword
                             */
                            $post(params: { password: string }): Promise<void>;
                        }
                        click2Call: {
                            /**
                             * Make a phone call from the current line
                             * POST /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call
                             */
                            $post(params: { calledNumber: string, callingNumber?: string }): Promise<void>;
                        }
                    };
                }
                convertToNumber: {
                    /**
                     * Schedule a conversion to number
                     * POST /telephony/{billingAccount}/line/{serviceName}/convertToNumber
                     */
                    $post(): Promise<telephony.OfferTask>;
                }
                dissociateDevice: {
                    /**
                     * Dissociate a device from the current line with the device mac address
                     * POST /telephony/{billingAccount}/line/{serviceName}/dissociateDevice
                     */
                    $post(params: { ipAddress?: string, macAddress: string }): Promise<void>;
                }
                ips: {
                    /**
                     * Listing of last ips registry
                     * GET /telephony/{billingAccount}/line/{serviceName}/ips
                     */
                    $get(): Promise<telephony.DatetimeAndIpvalue[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                lastRegistrations: {
                    /**
                     * List the informations about the last registrations (i.e. IP, port, User-Agent...)
                     * GET /telephony/{billingAccount}/line/{serviceName}/lastRegistrations
                     */
                    $get(): Promise<telephony.RegistrationInformations[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                listAssociablePhones: {
                    /**
                     * List phones with available slots where this line can be attached
                     * GET /telephony/{billingAccount}/line/{serviceName}/listAssociablePhones
                     */
                    $get(): Promise<telephony.LinePhoneAssociable[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                maximumAvailableSimultaneousLines: {
                    /**
                     * Get the maximum available simultaneous lines for this line
                     * GET /telephony/{billingAccount}/line/{serviceName}/maximumAvailableSimultaneousLines
                     */
                    $get(): Promise<number>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                offer: {
                    /**
                     * Return public offer property
                     * GET /telephony/{billingAccount}/line/{serviceName}/offer
                     */
                    $get(): Promise<telephony.LineOffer>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                options: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/line/{serviceName}/options
                     */
                    $get(): Promise<telephony.LineOptions>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/line/{serviceName}/options
                     */
                    $put(params?: { absentSubscriber?: boolean, anonymousCallRejection?: boolean, callRestrictionIncoming?: boolean, callRestrictionOutgoing?: boolean, callWaiting?: boolean, codecs?: string, defaultVoicemail?: string, displayNumber?: string, doNotDisturb?: boolean, domain?: string, forwardBackup?: boolean, forwardBackupNature?: telephony.LineOptionForwardNatureTypeEnum, forwardBackupNumber?: string, forwardBusy?: boolean, forwardBusyNature?: telephony.LineOptionForwardNatureTypeEnum, forwardBusyNumber?: string, forwardNoReply?: boolean, forwardNoReplyDelay?: number, forwardNoReplyNature?: telephony.LineOptionForwardNatureTypeEnum, forwardNoReplyNumber?: string, forwardUnconditional?: boolean, forwardUnconditionalNature?: telephony.LineOptionForwardNatureTypeEnum, forwardUnconditionalNumber?: string, identificationRestriction?: boolean, intercom?: telephony.LineOptionIntercomEnum, ipRestrictions?: string[], language?: telephony.LineOptionLanguageEnum, lockOutCall?: boolean, lockOutCallPassword?: string, recordOutgoingCallsBeta?: boolean, toneOnCallWaitingSoundId?: number, toneOnHoldSoundId?: number, toneRingbackSoundId?: number, voicemailExternalNumber?: string, voicemailInternalNumber?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    availableCodecs: {
                        /**
                         * List of codecs combinaisons available for this line
                         * GET /telephony/{billingAccount}/line/{serviceName}/options/availableCodecs
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    defaultCodecs: {
                        /**
                         * Get the default codecs for this line if none are set
                         * GET /telephony/{billingAccount}/line/{serviceName}/options/defaultCodecs
                         */
                        $get(): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                phone: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/line/{serviceName}/phone
                     */
                    $get(): Promise<telephony.Phone>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/line/{serviceName}/phone
                     */
                    $put(params?: { brand?: string, description?: string, macAddress?: string, maxSimultaneousCalls?: number, maxline?: number, mgcpIpRestriction?: string, phoneConfiguration?: telephony.PhoneConfigurationProperty[], protocol?: telephonyProtocolEnum, userPassword?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    adminCredentials: {
                        /**
                         * Returns the administration user and password of the phone if you are a VIP
                         * GET /telephony/{billingAccount}/line/{serviceName}/phone/adminCredentials
                         */
                        $get(): Promise<telephony.PhoneCredentials>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    changePhoneConfiguration: {
                        /**
                         * Edit configuration of the phone remotely by provisioning
                         * POST /telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration
                         */
                        $post(params?: { autoReboot?: boolean, newConfigurations?: complexType.SafeKeyValue<string>[] }): Promise<void>;
                    }
                    functionKey: {
                        /**
                         * Plug & Phone function keys
                         * GET /telephony/{billingAccount}/line/{serviceName}/phone/functionKey
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(keyNum: number): {
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}
                             */
                            $get(): Promise<telephony.FunctionKey>;
                            /**
                             * Alter this object properties
                             * PUT /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}
                             */
                            $put(params?: { default_?: string, function_?: string, keyNum?: number, label?: string, parameter?: string, type?: string }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            availableFunction: {
                                /**
                                 * List the available functions for the key
                                 * GET /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}/availableFunction
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                    merchandiseAvailable: {
                        /**
                         * List of available exchange merchandise brand
                         * GET /telephony/{billingAccount}/line/{serviceName}/phone/merchandiseAvailable
                         */
                        $get(): Promise<telephony.HardwareOffer[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    phonebook: {
                        /**
                         * Return phonebooks associated
                         * GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Add a phonebook. Return the bookKey.
                         * POST /telephony/{billingAccount}/line/{serviceName}/phone/phonebook
                         */
                        $post(params: { name: string }): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(bookKey: string): {
                            /**
                             * Delete a phonebook
                             * DELETE /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                             */
                            $get(): Promise<telephony.Phonebook>;
                            /**
                             * Alter this object properties
                             * PUT /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}
                             */
                            $put(params?: { bookKey?: string, isReadonly?: boolean, name?: string, phoneKey?: string }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            export: {
                                /**
                                 * Export the phonebook's contacts
                                 * GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export
                                 */
                                $get(params: { format: telephony.ContactsExportFormatsEnum }): Promise<telephony.PcsFile>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            import: {
                                /**
                                 * Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
                                 * POST /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/import
                                 */
                                $post(params: { documentId: string }): Promise<telephony.Task>;
                            }
                            phonebookContact: {
                                /**
                                 * Phonebook contacts
                                 * GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Create a phonebook contact. Return identifier of the phonebook contact.
                                 * POST /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact
                                 */
                                $post(params: { group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string }): Promise<number>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(id: number): {
                                    /**
                                     * Delete a phonebook contact
                                     * DELETE /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                     */
                                    $delete(): Promise<void>;
                                    /**
                                     * Get this object properties
                                     * GET /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                     */
                                    $get(): Promise<telephony.PhonebookContact>;
                                    /**
                                     * Alter this object properties
                                     * PUT /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
                                     */
                                    $put(params?: { group?: string, homeMobile?: string, homePhone?: string, id?: number, name?: string, surname?: string, workMobile?: string, workPhone?: string }): Promise<void>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                        };
                    }
                    reboot: {
                        /**
                         * Create a task to reboot the phone
                         * POST /telephony/{billingAccount}/line/{serviceName}/phone/reboot
                         */
                        $post(): Promise<telephony.Task>;
                    }
                    refreshScreen: {
                        /**
                         * Create a task to refresh the screen of the MGCP phone
                         * POST /telephony/{billingAccount}/line/{serviceName}/phone/refreshScreen
                         */
                        $post(): Promise<telephony.Task>;
                    }
                    resetConfig: {
                        /**
                         * Reinitialize the phone configuration
                         * POST /telephony/{billingAccount}/line/{serviceName}/phone/resetConfig
                         */
                        $post(params: { ip: string }): Promise<telephony.ResetPhoneInfo>;
                    }
                    rma: {
                        /**
                         * Return Merchandise Authorisation associated
                         * GET /telephony/{billingAccount}/line/{serviceName}/phone/rma
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create a specific rma
                         * POST /telephony/{billingAccount}/line/{serviceName}/phone/rma
                         */
                        $post(params: { mondialRelayId?: string, newMerchandise?: string, shippingContactId?: number, type: telephony.RmaPublicTypeEnum }): Promise<telephony.RmaReturn>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(id: string): {
                            /**
                             * Cancel the rma
                             * DELETE /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                             */
                            $get(): Promise<telephony.Rma>;
                            /**
                             * Alter this object properties
                             * PUT /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
                             */
                            $put(params?: { cancellable?: boolean, creationDatetime?: string, equipmentReference?: string, id?: string, newMerchandise?: string, offerTypeNew?: telephony.RmaOfferTypeEnum, offerTypeOld?: telephony.RmaOfferTypeEnum, process?: telephony.RmaReplaceTypeEnum, receptionDatetime?: string, shippingContact?: telephony.Contact, status?: telephony.RmaStatusEnum, steps?: telephony.RmaStep[], terminationDatetime?: string, type?: telephony.RmaTypeEnum }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    supportsPhonebook: {
                        /**
                         * Does the phone manages phonebooks?
                         * GET /telephony/{billingAccount}/line/{serviceName}/phone/supportsPhonebook
                         */
                        $get(): Promise<boolean>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                phoneCanBeAssociable: {
                    /**
                     * List the phones with Sip slot available
                     * GET /telephony/{billingAccount}/line/{serviceName}/phoneCanBeAssociable
                     */
                    $get(): Promise<telephony.LinePhone[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                records: {
                    /**
                     * The recordings of your line outgoing calls
                     * GET /telephony/{billingAccount}/line/{serviceName}/records
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the given record
                         * DELETE /telephony/{billingAccount}/line/{serviceName}/records/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/line/{serviceName}/records/{id}
                         */
                        $get(): Promise<telephony.OvhPabxRecord>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                removeSimultaneousLines: {
                    /**
                     * Remove extra simultaneous lines
                     * POST /telephony/{billingAccount}/line/{serviceName}/removeSimultaneousLines
                     */
                    $post(params: { quantityRemove: number }): Promise<void>;
                }
                simultaneousChannelsDetails: {
                    /**
                     * Details about simultaneous channels of this line.
                     * GET /telephony/{billingAccount}/line/{serviceName}/simultaneousChannelsDetails
                     */
                    $get(): Promise<telephony.SimultaneousChannelsDetails>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                statistics: {
                    /**
                     * Get statistics of the current line
                     * GET /telephony/{billingAccount}/line/{serviceName}/statistics
                     */
                    $get(params: { timeframe: telephony.StatisticsTimeframeEnum, type: telephony.LineStatisticsTypeEnum }): Promise<complexType.UnitAndValues<telephony.TimestampAndValue>>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                tones: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/line/{serviceName}/tones
                     */
                    $get(): Promise<telephony.Tones>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/line/{serviceName}/tones
                     */
                    $put(params?: { callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    toneUpload: {
                        /**
                         * Upload new tone file
                         * POST /telephony/{billingAccount}/line/{serviceName}/tones/toneUpload
                         */
                        $post(params: { documentId?: string, type: telephony.TonesTypeEnum, url?: string }): Promise<telephony.Task>;
                    }
                }
                trafficExtracts: {
                    /**
                     * The traffic extracts (SIP only) of your line
                     * GET /telephony/{billingAccount}/line/{serviceName}/trafficExtracts
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Launch a traffic extract on your line
                     * POST /telephony/{billingAccount}/line/{serviceName}/trafficExtracts
                     */
                    $post(params: { dateEnd: string, dateStart: string }): Promise<telephony.trafficExtract>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete a traffic extract
                         * DELETE /telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}
                         */
                        $get(): Promise<telephony.trafficExtract>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                unblock: {
                    /**
                     * Unblock the line. It will remove any incoming and outboing block made earlier
                     * POST /telephony/{billingAccount}/line/{serviceName}/unblock
                     */
                    $post(): Promise<void>;
                }
            };
        }
        miniPabx: {
            /**
             * Miniabx associated with this billing account
             * GET /telephony/{billingAccount}/miniPabx
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/miniPabx/{serviceName}
                 */
                $get(): Promise<telephony.MiniPabx>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/miniPabx/{serviceName}
                 */
                $put(params?: { description?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                hunting: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting
                     */
                    $get(): Promise<telephony.MiniPabxHunting>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/miniPabx/{serviceName}/hunting
                     */
                    $put(params?: { anonymousCallRejection?: boolean, name?: string, numberOfCalls?: number, onHoldTimer?: number, pattern?: telephony.EasyMiniPabxHuntingPatternEnum, queueSize?: number, strategy?: telephony.EasyMiniPabxHuntingStrategyEnum, toneOnClosure?: boolean, toneOnClosureSoundId?: number, toneOnHold?: boolean, toneOnHoldSoundId?: number, toneRingback?: boolean, toneRingbackSoundId?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    agent: {
                        /**
                         * Hunting agents
                         * GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create a new agent
                         * POST /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent
                         */
                        $post(params: { agentNumber: string, logged: boolean, noReplyTimer: number, position: number }): Promise<telephony.EasyMiniPabxHuntingAgent>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(agentNumber: string): {
                            /**
                             * Delete the agent
                             * DELETE /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                             */
                            $get(): Promise<telephony.EasyMiniPabxHuntingAgent>;
                            /**
                             * Alter this object properties
                             * PUT /telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}
                             */
                            $put(params?: { agentNumber?: string, logged?: boolean, noReplyTimer?: number, position?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                }
                tones: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/miniPabx/{serviceName}/tones
                     */
                    $get(): Promise<telephony.Tones>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/miniPabx/{serviceName}/tones
                     */
                    $put(params?: { callWaiting?: telephony.TonesEnum, endCall?: telephony.TonesEnum, onHold?: telephony.TonesOnHoldEnum, ringback?: telephony.TonesEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    toneUpload: {
                        /**
                         * Upload new tone file
                         * POST /telephony/{billingAccount}/miniPabx/{serviceName}/tones/toneUpload
                         */
                        $post(params: { documentId?: string, type: telephony.TonesTypeEnum, url?: string }): Promise<telephony.Task>;
                    }
                }
            };
        }
        number: {
            /**
             * Additional numbers associated with this billing account
             * GET /telephony/{billingAccount}/number
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/number/{serviceName}
                 */
                $get(): Promise<telephony.Number>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/number/{serviceName}
                 */
                $put(params?: { description?: string, featureType?: telephony.TypeEnum, partOfPool?: string, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                cancelConvertToLine: {
                    /**
                     * Cancel a scheduled conversion to line
                     * POST /telephony/{billingAccount}/number/{serviceName}/cancelConvertToLine
                     */
                    $post(): Promise<void>;
                }
                changeFeatureType: {
                    /**
                     * Change the feature type of the phone number
                     * POST /telephony/{billingAccount}/number/{serviceName}/changeFeatureType
                     */
                    $post(params: { featureType: telephony.TypeEnum }): Promise<telephony.Task>;
                }
                convertToLine: {
                    /**
                     * Schedule a conversion to line
                     * POST /telephony/{billingAccount}/number/{serviceName}/convertToLine
                     */
                    $post(params: { offer: string }): Promise<telephony.OfferTask>;
                }
                convertToLineAvailableOffers: {
                    /**
                     * Get the available line offers to schedule a conversion to line
                     * GET /telephony/{billingAccount}/number/{serviceName}/convertToLineAvailableOffers
                     */
                    $get(): Promise<telephony.LineOffersAndContracts>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        offerTask: {
            /**
             * Operations on a telephony service's offer
             * GET /telephony/{billingAccount}/offerTask
             */
            $get(params?: { action?: telephony.OfferTaskActionEnum, status?: telephony.TaskStatusEnum, type?: telephony.OfferTaskTypeEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: number): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/offerTask/{taskId}
                 */
                $get(): Promise<telephony.OfferTask>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/offerTask/{taskId}
                 */
                $put(params?: { action?: telephony.OfferTaskActionEnum, executionDate?: string, status?: telephony.TaskStatusEnum, taskId?: number, type?: telephony.OfferTaskTypeEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        oldPhone: {
            /**
             * List old phones archived as they were not returned after an RMA
             * GET /telephony/{billingAccount}/oldPhone
             */
            $get(): Promise<telephony.OldPhone[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        outplanNotification: {
            /**
             * Outplan notifications configured for this billing account
             * GET /telephony/{billingAccount}/outplanNotification
             */
            $get(): Promise<number[]>;
            /**
             * Add an outplan notification on the billing account
             * POST /telephony/{billingAccount}/outplanNotification
             */
            $post(params: { block: telephony.OutplanNotificationBlockEnum, notifyEmail?: string, percentage: number }): Promise<telephony.ConsumptionThreshold>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Delete an outplan notification
                 * DELETE /telephony/{billingAccount}/outplanNotification/{id}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/outplanNotification/{id}
                 */
                $get(): Promise<telephony.ConsumptionThreshold>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        ovhPabx: {
            /**
             * OVH calls queues and OVH IVRs (Interactive Voice Response) associated with this billing account
             * GET /telephony/{billingAccount}/ovhPabx
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/ovhPabx/{serviceName}
                 */
                $get(): Promise<telephony.OvhPabx>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}
                 */
                $put(params?: { description?: string, featureType?: telephony.TypeEnum, isCCS?: boolean, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                dialplan: {
                    /**
                     * Dialplans associated with this PABX
                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a new dialplan
                     * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan
                     */
                    $post(params: { anonymousRejection: boolean, name: string, showCallerNumber: telephony.OvhPabxDialplanNumberPresentationEnum, transferTimeout: number }): Promise<telephony.OvhPabxDialplan>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(dialplanId: number): {
                        /**
                         * Delete the given dialplan
                         * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                         */
                        $get(): Promise<telephony.OvhPabxDialplan>;
                        /**
                         * Alter this object properties
                         * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
                         */
                        $put(params?: { anonymousRejection?: boolean, dialplanId?: number, lastUpdate?: string, name?: string, showCallerNumber?: telephony.OvhPabxDialplanNumberPresentationEnum, transferTimeout?: number }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        extension: {
                            /**
                             * Extensions contained in the dialplan
                             * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension
                             */
                            $get(): Promise<number[]>;
                            /**
                             * Create a new extension for a dialplan
                             * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension
                             */
                            $post(params: { enable: boolean, position: number, schedulerCategory?: telephony.SchedulerCategoryEnum, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<telephony.OvhPabxDialplanExtension>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(extensionId: number): {
                                /**
                                 * Delete the given extension
                                 * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                 */
                                $get(): Promise<telephony.OvhPabxDialplanExtension>;
                                /**
                                 * Alter this object properties
                                 * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
                                 */
                                $put(params?: { enabled?: boolean, extensionId?: number, position?: number, schedulerCategory?: telephony.SchedulerCategoryEnum, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<void>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                conditionScreenList: {
                                    /**
                                     * Screenlist conditions checked when executing the extension
                                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList
                                     */
                                    $get(): Promise<number[]>;
                                    /**
                                     * Create a new screenlist condition for an extension
                                     * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList
                                     */
                                    $post(params?: { callerIdNumber?: string, destinationNumber?: string, screenListType?: telephony.OvhPabxDialplanExtensionConditionScreenListTypeEnum }): Promise<telephony.OvhPabxDialplanExtensionConditionScreenList>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    $(conditionId: number): {
                                        /**
                                         * Delete the given condition
                                         * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}
                                         */
                                        $delete(): Promise<void>;
                                        /**
                                         * Get this object properties
                                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}
                                         */
                                        $get(): Promise<telephony.OvhPabxDialplanExtensionConditionScreenList>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    };
                                }
                                conditionTime: {
                                    /**
                                     * Time conditions checked when executing the extension
                                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime
                                     */
                                    $get(): Promise<number[]>;
                                    /**
                                     * Create a new time condition for an extension
                                     * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime
                                     */
                                    $post(params: { timeFrom: string, timeTo: string, weekDay: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum }): Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    $(conditionId: number): {
                                        /**
                                         * Delete the given condition
                                         * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                         */
                                        $delete(): Promise<void>;
                                        /**
                                         * Get this object properties
                                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                         */
                                        $get(): Promise<telephony.OvhPabxDialplanExtensionConditionTime>;
                                        /**
                                         * Alter this object properties
                                         * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
                                         */
                                        $put(params?: { conditionId?: number, timeFrom?: string, timeTo?: string, weekDay?: telephony.OvhPabxDialplanExtensionConditionTimeWeekDayEnum }): Promise<void>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    };
                                }
                                rule: {
                                    /**
                                     * Rules contained in the extension
                                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule
                                     */
                                    $get(): Promise<number[]>;
                                    /**
                                     * Create a new rule for an extension
                                     * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule
                                     */
                                    $post(params: { action: telephony.OvhPabxDialplanExtensionRuleActionEnum, actionParam?: string, negativeAction: boolean, position: number }): Promise<telephony.OvhPabxDialplanExtensionRule>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    $(ruleId: number): {
                                        /**
                                         * Delete the given rule
                                         * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                         */
                                        $delete(): Promise<void>;
                                        /**
                                         * Get this object properties
                                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                         */
                                        $get(): Promise<telephony.OvhPabxDialplanExtensionRule>;
                                        /**
                                         * Alter this object properties
                                         * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
                                         */
                                        $put(params?: { action?: telephony.OvhPabxDialplanExtensionRuleActionEnum, actionParam?: string, negativeAction?: boolean, position?: number, ruleId?: number }): Promise<void>;
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
                hunting: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting
                     */
                    $get(): Promise<telephony.OvhPabxHunting>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting
                     */
                    $put(params?: { crmUrlTemplate?: string, g729?: boolean, name?: string, statusIvrEnabled?: boolean }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    agent: {
                        /**
                         * Calls agents
                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Create a new agent
                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent
                         */
                        $post(params: { description?: string, number: string, simultaneousLines: number, status: telephony.OvhPabxHuntingAgentStatusEnum, timeout: number, wrapUpTime: number }): Promise<telephony.OvhPabxHuntingAgent>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(agentId: number): {
                            /**
                             * Delete the given agent
                             * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                             */
                            $get(): Promise<telephony.OvhPabxHuntingAgent>;
                            /**
                             * Alter this object properties
                             * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}
                             */
                            $put(params?: { agentId?: number, breakStatus?: number, description?: string, number?: string, simultaneousLines?: number, status?: telephony.OvhPabxHuntingAgentStatusEnum, timeout?: number, type?: telephony.OvhPabxHuntingAgentTypeEnum, wrapUpTime?: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            bannerAccess: {
                                /**
                                 * Delete the given web access
                                 * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                 */
                                $get(): Promise<telephony.BannerAccess>;
                                /**
                                 * Create a new web access for this ressource
                                 * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess
                                 */
                                $post(): Promise<telephony.BannerAccess>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            calls: {
                                /**
                                 * Current calls of the callcenter agent
                                 * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(id: number): {
                                    /**
                                     * Get this object properties
                                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}
                                     */
                                    $get(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    eavesdrop: {
                                        /**
                                         * Eavesdrop on a call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    hangup: {
                                        /**
                                         * Hangup a call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup
                                         */
                                        $post(): Promise<telephony.Task>;
                                    }
                                    hold: {
                                        /**
                                         * Toogle hold on call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold
                                         */
                                        $post(): Promise<telephony.Task>;
                                    }
                                    intercept: {
                                        /**
                                         * Intercept a non answered call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        /**
                                         * Transfer an answered call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        /**
                                         * Whisper on a call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper
                                         */
                                        $post(params: { number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum }): Promise<telephony.Task>;
                                    }
                                };
                            }
                            eventToken: {
                                /**
                                 * Delete the given token
                                 * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                 */
                                $get(): Promise<telephony.EventToken>;
                                /**
                                 * Create a new token
                                 * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken
                                 */
                                $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            liveStatus: {
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/liveStatus
                                 */
                                $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            queue: {
                                /**
                                 * Agent assigned to the queues
                                 * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Create a new skill for an agent (it adds the agent in a queue)
                                 * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue
                                 */
                                $post(params: { position: number, queueId: number }): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(queueId: number): {
                                    /**
                                     * Delete the given skill
                                     * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                     */
                                    $delete(): Promise<void>;
                                    /**
                                     * Get this object properties
                                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                     */
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    /**
                                     * Alter this object properties
                                     * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}
                                     */
                                    $put(params?: { agentId?: number, position?: number, queueId?: number }): Promise<void>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    liveStatus: {
                                        /**
                                         * Get this object properties
                                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus
                                         */
                                        $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    }
                                };
                            }
                        };
                    }
                    customStatus: {
                        /**
                         * Custom statuses of your agents
                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Create a new custom status
                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus
                         */
                        $post(params: { color?: string, description?: string, name: string }): Promise<telephony.OvhPabxCustomStatus>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(id: number): {
                            /**
                             * Delete the given custom status
                             * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}
                             */
                            $get(): Promise<telephony.OvhPabxCustomStatus>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    eventToken: {
                        /**
                         * Delete the given token
                         * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken
                         */
                        $get(): Promise<telephony.EventToken>;
                        /**
                         * Create a new token
                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken
                         */
                        $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    queue: {
                        /**
                         * Calls queues
                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Create a new queue
                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue
                         */
                        $post(params: { actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy: telephony.OvhPabxHuntingQueueStrategyEnum }): Promise<telephony.OvhPabxHuntingQueue>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(queueId: number): {
                            /**
                             * Delete the given queue
                             * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                             */
                            $get(): Promise<telephony.OvhPabxHuntingQueue>;
                            /**
                             * Alter this object properties
                             * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}
                             */
                            $put(params?: { actionOnClosure?: telephony.OvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: telephony.OvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, followCallForwards?: boolean, maxMember?: number, maxWaitTime?: number, queueId?: number, record?: boolean, recordDisablingDigit?: telephony.OvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: telephony.OvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number, strategy?: telephony.OvhPabxHuntingQueueStrategyEnum }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            agent: {
                                /**
                                 * Agent assigned to the queue
                                 * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Create a new skill for an agent (it adds the agent in a queue)
                                 * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent
                                 */
                                $post(params: { position: number, queueId: number }): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(agentId: number): {
                                    /**
                                     * Delete the given skill
                                     * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                     */
                                    $delete(): Promise<void>;
                                    /**
                                     * Get this object properties
                                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                     */
                                    $get(): Promise<telephony.OvhPabxHuntingAgentQueue>;
                                    /**
                                     * Alter this object properties
                                     * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
                                     */
                                    $put(params?: { agentId?: number, position?: number, queueId?: number }): Promise<void>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    liveStatus: {
                                        /**
                                         * Get this object properties
                                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus
                                         */
                                        $get(): Promise<telephony.OvhPabxHuntingAgentLiveStatus>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    }
                                };
                            }
                            liveCalls: {
                                /**
                                 * Live calls of the queue
                                 * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(id: number): {
                                    /**
                                     * Get this object properties
                                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}
                                     */
                                    $get(): Promise<telephony.OvhPabxHuntingQueueLiveCalls>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    eavesdrop: {
                                        /**
                                         * Eavesdrop on a call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    hangup: {
                                        /**
                                         * Hangup a call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup
                                         */
                                        $post(): Promise<telephony.Task>;
                                    }
                                    hold: {
                                        /**
                                         * Toogle hold on call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold
                                         */
                                        $post(): Promise<telephony.Task>;
                                    }
                                    intercept: {
                                        /**
                                         * Intercept a non answered call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    transfer: {
                                        /**
                                         * Transfer an answered call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer
                                         */
                                        $post(params: { number: string }): Promise<telephony.Task>;
                                    }
                                    whisper: {
                                        /**
                                         * Whisper on a call
                                         * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper
                                         */
                                        $post(params: { number: string, whisperingMode: telephony.OvhPabxWhisperingModeEnum }): Promise<telephony.Task>;
                                    }
                                };
                            }
                            liveStatistics: {
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveStatistics
                                 */
                                $get(): Promise<telephony.OvhPabxHuntingQueueLiveStatistics>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                }
                menu: {
                    /**
                     * Menus associated with this PABX
                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a new menu
                     * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/menu
                     */
                    $post(params: { greetSound?: number, greetSoundTts?: number, interDigitTimeout?: number, invalidSound?: number, invalidSoundTts?: number, name: string, timeout?: number }): Promise<telephony.OvhPabxMenu>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(menuId: number): {
                        /**
                         * Delete the given menu
                         * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                         */
                        $get(): Promise<telephony.OvhPabxMenu>;
                        /**
                         * Alter this object properties
                         * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}
                         */
                        $put(params?: { greetSound?: number, greetSoundTts?: number, interDigitTimeout?: number, invalidSound?: number, invalidSoundTts?: number, menuId?: number, name?: string, timeout?: number }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        entry: {
                            /**
                             * Menu entry
                             * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry
                             */
                            $get(): Promise<number[]>;
                            /**
                             * Create a new menu entry
                             * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry
                             */
                            $post(params: { action: telephony.OvhPabxIvrMenuEntryActionEnum, actionParam?: string, dtmf: string, position: number }): Promise<telephony.OvhPabxMenuEntry>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(entryId: number): {
                                /**
                                 * Delete the given menu entry
                                 * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get this object properties
                                 * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                 */
                                $get(): Promise<telephony.OvhPabxMenuEntry>;
                                /**
                                 * Alter this object properties
                                 * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
                                 */
                                $put(params?: { action?: telephony.OvhPabxIvrMenuEntryActionEnum, actionParam?: string, dtmf?: string, entryId?: number, position?: number }): Promise<void>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    };
                }
                records: {
                    /**
                     * Records associated with this PABX
                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/records
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the given record
                         * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}
                         */
                        $get(): Promise<telephony.OvhPabxRecord>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                sound: {
                    /**
                     * Sounds associated with this PABX
                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/sound
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(soundId: number): {
                        /**
                         * Delete the given sound
                         * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}
                         */
                        $get(): Promise<telephony.OvhPabxSound>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                soundUpload: {
                    /**
                     * Upload new sound file
                     * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/soundUpload
                     */
                    $post(params?: { documentId?: string, name?: string, url?: string }): Promise<telephony.Task>;
                }
                tts: {
                    /**
                     * Text to Speech associated with this PABX
                     * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/tts
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a new text to speech
                     * POST /telephony/{billingAccount}/ovhPabx/{serviceName}/tts
                     */
                    $post(params: { text: string, voice?: telephony.OvhPabxTtsVoiceEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the given text to speech
                         * DELETE /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                         */
                        $get(): Promise<telephony.OvhPabxTts>;
                        /**
                         * Alter this object properties
                         * PUT /telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}
                         */
                        $put(params?: { id?: number, text?: string, voice?: telephony.OvhPabxTtsVoiceEnum }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        phonebook: {
            /**
             * Return phonebooks associated to this group
             * GET /telephony/{billingAccount}/phonebook
             */
            $get(): Promise<string[]>;
            /**
             * Add a phonebook on group. Return the bookKey.
             * POST /telephony/{billingAccount}/phonebook
             */
            $post(params: { name: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(bookKey: string): {
                /**
                 * Delete a phonebook
                 * DELETE /telephony/{billingAccount}/phonebook/{bookKey}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/phonebook/{bookKey}
                 */
                $get(): Promise<telephony.PhonebookMaster>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/phonebook/{bookKey}
                 */
                $put(params?: { bookKey?: string, name?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                export: {
                    /**
                     * Export the phonebook's contacts
                     * GET /telephony/{billingAccount}/phonebook/{bookKey}/export
                     */
                    $get(params: { format: telephony.ContactsExportFormatsEnum }): Promise<telephony.PcsFile>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                import: {
                    /**
                     * Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
                     * POST /telephony/{billingAccount}/phonebook/{bookKey}/import
                     */
                    $post(params: { documentId: string }): Promise<telephony.Task>;
                }
                phonebookContact: {
                    /**
                     * Phonebook contacts
                     * GET /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a phonebook contact. Return identifier of the phonebook contact.
                     * POST /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact
                     */
                    $post(params: { group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string }): Promise<number>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete a phonebook contact
                         * DELETE /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                         */
                        $get(): Promise<telephony.PhonebookContact>;
                        /**
                         * Alter this object properties
                         * PUT /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
                         */
                        $put(params?: { group?: string, homeMobile?: string, homePhone?: string, id?: number, name?: string, surname?: string, workMobile?: string, workPhone?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        portability: {
            /**
             * Current number portabilities for this billing account
             * GET /telephony/{billingAccount}/portability
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/portability/{id}
                 */
                $get(): Promise<telephony.Portability>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                canBeCancelled: {
                    /**
                     * Indicates whether or not the portability can be cancelled
                     * GET /telephony/{billingAccount}/portability/{id}/canBeCancelled
                     */
                    $get(): Promise<boolean>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                canBeExecuted: {
                    /**
                     * Indicates whether or not the portability can be executed
                     * GET /telephony/{billingAccount}/portability/{id}/canBeExecuted
                     */
                    $get(): Promise<boolean>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                cancel: {
                    /**
                     * Ask to cancel the portability
                     * POST /telephony/{billingAccount}/portability/{id}/cancel
                     */
                    $post(params?: { reason?: string }): Promise<void>;
                }
                changeDate: {
                    /**
                     * Ask to change the portability date
                     * POST /telephony/{billingAccount}/portability/{id}/changeDate
                     */
                    $post(params: { date: string }): Promise<void>;
                }
                dateCanBeChanged: {
                    /**
                     * Indicates whether or not the portability date can be changed
                     * GET /telephony/{billingAccount}/portability/{id}/dateCanBeChanged
                     */
                    $get(): Promise<boolean>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                document: {
                    /**
                     * Document linked to this portability
                     * GET /telephony/{billingAccount}/portability/{id}/document
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a portability document
                     * POST /telephony/{billingAccount}/portability/{id}/document
                     */
                    $post(params: { description?: string, name: string }): Promise<telephony.PortabilityDocument>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(documentId: number): {
                        /**
                         * Delete the document
                         * DELETE /telephony/{billingAccount}/portability/{id}/document/{documentId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/portability/{id}/document/{documentId}
                         */
                        $get(): Promise<telephony.PortabilityDocument>;
                        /**
                         * Alter this object properties
                         * PUT /telephony/{billingAccount}/portability/{id}/document/{documentId}
                         */
                        $put(params?: { description?: string, documentId?: number, getUrl?: string, name?: string, putUrl?: string, size?: number }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                execute: {
                    /**
                     * Ask to execute the portability
                     * POST /telephony/{billingAccount}/portability/{id}/execute
                     */
                    $post(): Promise<void>;
                }
                relaunch: {
                    /**
                     * Indicates whether or not error can be fixed and portability can be relaunched
                     * GET /telephony/{billingAccount}/portability/{id}/relaunch
                     */
                    $get(): Promise<telephony.PortabilityFixErrorPossibleParameters>;
                    /**
                     * Fix error and relaunch portability
                     * POST /telephony/{billingAccount}/portability/{id}/relaunch
                     */
                    $post(params: { parameters: complexType.SafeKeyValue<string>[] }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                status: {
                    /**
                     * Indicates the current status of the portability, with a list of steps
                     * GET /telephony/{billingAccount}/portability/{id}/status
                     */
                    $get(): Promise<telephony.PortabilityStep[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        redirect: {
            /**
             * Redirects associated with this billing account
             * GET /telephony/{billingAccount}/redirect
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/redirect/{serviceName}
                 */
                $get(): Promise<telephony.Redirect>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/redirect/{serviceName}
                 */
                $put(params?: { description?: string, destination?: string, featureType?: telephony.TypeEnum, serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                changeDestination: {
                    /**
                     * Change the destination of the redirect
                     * POST /telephony/{billingAccount}/redirect/{serviceName}/changeDestination
                     */
                    $post(params: { destination: string }): Promise<telephony.Task>;
                }
            };
        }
        rsva: {
            /**
             * Service concerned by the french RSVA reform
             * GET /telephony/{billingAccount}/rsva
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/rsva/{serviceName}
                 */
                $get(): Promise<telephony.Rsva>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/rsva/{serviceName}
                 */
                $put(params?: { serviceName?: string, typology?: telephony.portability.SpecialNumberCategoryEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                allowedRateCodes: {
                    /**
                     * Compatible rate codes related to this value added service
                     * GET /telephony/{billingAccount}/rsva/{serviceName}/allowedRateCodes
                     */
                    $get(): Promise<telephony.RateCodeInformation[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                cancelScheduledRateCode: {
                    /**
                     * Cancel a scheduled rate code update
                     * POST /telephony/{billingAccount}/rsva/{serviceName}/cancelScheduledRateCode
                     */
                    $post(): Promise<void>;
                }
                currentRateCode: {
                    /**
                     * Current rate code related to this sva
                     * GET /telephony/{billingAccount}/rsva/{serviceName}/currentRateCode
                     */
                    $get(): Promise<telephony.DetailedRateCodeInformation>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                scheduleRateCode: {
                    /**
                     * Schedule a new rate code for this sva
                     * POST /telephony/{billingAccount}/rsva/{serviceName}/scheduleRateCode
                     */
                    $post(params: { rateCode: string }): Promise<telephony.DetailedRateCodeInformation>;
                }
                scheduledRateCode: {
                    /**
                     * New scheduled rate code related to this sva
                     * GET /telephony/{billingAccount}/rsva/{serviceName}/scheduledRateCode
                     */
                    $get(): Promise<telephony.DetailedRateCodeInformation>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        scheduler: {
            /**
             * Scheduled events
             * GET /telephony/{billingAccount}/scheduler
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/scheduler/{serviceName}
                 */
                $get(): Promise<telephony.Scheduler>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/scheduler/{serviceName}
                 */
                $put(params?: { serviceName?: string, timeZone?: telephony.timeZone }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                events: {
                    /**
                     * Custom events scheduled
                     * GET /telephony/{billingAccount}/scheduler/{serviceName}/events
                     */
                    $get(params?: { categories?: telephony.SchedulerCategoryEnum, dateEnd_from?: string, dateEnd_to?: string, dateStart_from?: string, dateStart_to?: string }): Promise<string[]>;
                    /**
                     * Add a scheduler event
                     * POST /telephony/{billingAccount}/scheduler/{serviceName}/events
                     */
                    $post(params: { category: telephony.SchedulerCategoryEnum, dateEnd: string, dateStart: string, description?: string, title: string, uid?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(uid: string): {
                        /**
                         * Delete the given scheduler event
                         * DELETE /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                         */
                        $get(): Promise<telephony.SchedulerEvent>;
                        /**
                         * Alter this object properties
                         * PUT /telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}
                         */
                        $put(params?: { categories?: telephony.SchedulerCategoryEnum, dateEnd?: string, dateStart?: string, description?: string, title?: string, uid?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                importIcsCalendar: {
                    /**
                     * Add scheduler events in ICS format
                     * POST /telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar
                     */
                    $post(params: { url: string }): Promise<telephony.Task>;
                }
            };
        }
        screen: {
            /**
             * Screenlist compatible numbers associated with this billing account
             * GET /telephony/{billingAccount}/screen
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/screen/{serviceName}
                 */
                $get(): Promise<telephony.Screen>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/screen/{serviceName}
                 */
                $put(params?: { incomingScreenList?: telephony.ScreenListChoosingEnum, outgoingScreenList?: telephony.ScreenListChoosingEnum, serviceName?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                screenLists: {
                    /**
                     * Rules for call filtering for this service
                     * GET /telephony/{billingAccount}/screen/{serviceName}/screenLists
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a new screen list rule
                     * POST /telephony/{billingAccount}/screen/{serviceName}/screenLists
                     */
                    $post(params: { callNumber?: string, nature: telephony.ScreenListNatureEnum, type: telephony.ScreenListTypeEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the given screen list
                         * DELETE /telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}
                         */
                        $get(): Promise<telephony.ScreenList>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        service: {
            /**
             * Services associated with this billing account
             * GET /telephony/{billingAccount}/service
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Ask for a service termination.
                 * DELETE /telephony/{billingAccount}/service/{serviceName}
                 */
                $delete(params: { details?: string, reason: telephony.TerminationReasonEnum }): Promise<void>;
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/service/{serviceName}
                 */
                $get(): Promise<telephony.TelephonyService>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/service/{serviceName}
                 */
                $put(params?: { associatedDeviceMac?: string, country?: telephony.NumberCountryEnum, countryCode?: telephony.NumberCountryCodeEnum, currentOutplan?: order.Price, description?: string, featureType?: telephony.TypeEnum, getPublicOffer?: telephony.LineOffer, hasFaxCapabilities?: boolean, offers?: string[], properties?: telephony.PropertyEnum[], rio?: string, serviceName?: string, serviceType?: telephony.TypeServiceEnum, simultaneousLines?: number }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                cancelTermination: {
                    /**
                     * Cancel the service termination
                     * POST /telephony/{billingAccount}/service/{serviceName}/cancelTermination
                     */
                    $post(): Promise<void>;
                }
                changeOfBillingAccount: {
                    /**
                     * Move a service of billing account. Source and destination nics should be the same.
                     * POST /telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount
                     */
                    $post(params: { billingAccountDestination: string }): Promise<void>;
                }
                diagnosticReports: {
                    /**
                     * Get Relevant informations of the service detected from the MOS or the signal leg in SIP/MGCP protocol.
                     * GET /telephony/{billingAccount}/service/{serviceName}/diagnosticReports
                     */
                    $get(params: { dayInterval: telephony.DiagnosticReportIndexEnum }): Promise<telephony.DiagnosticReport[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                directory: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/service/{serviceName}/directory
                     */
                    $get(): Promise<telephony.DirectoryInfo>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/service/{serviceName}/directory
                     */
                    $put(params?: { PJSocialNomination?: string, address?: string, addressExtra?: string, ape?: string, areaCode?: number, birthDate?: string, cedex?: string, city?: string, country?: string, directoryServiceCode?: string, displayFirstName?: boolean, displayMarketingDirectory?: boolean, displayOnlyCity?: boolean, displaySearchReverse?: boolean, displayUniversalDirectory?: boolean, email?: string, firstName?: string, gender?: nichandle.GenderEnum, inseeCode?: number, legalForm?: string, lineDescription?: string, modificationDate?: string, modificationType?: string, name?: string, number?: string, occupation?: string, postBox?: string, postCode?: string, receivePJDirectory?: boolean, siret?: string, socialNomination?: string, socialNominationExtra?: string, status?: string, urbanDistrict?: string, wayName?: string, wayNumber?: string, wayNumberExtra?: string, wayType?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    fetchEntrepriseInformations: {
                        /**
                         * Get company entreprise informations by providing entreprise number
                         * POST /telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations
                         */
                        $post(params: { entrepriseNumber: string }): Promise<telephony.EntrepriseNumberInformationsTask>;
                    }
                    getDirectoryServiceCode: {
                        /**
                         * Get directory service code from an APE code ( principal activity of the firm code )
                         * GET /telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode
                         */
                        $get(params: { apeCode: string }): Promise<telephony.DirectoryHeadingPJ[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    getWayTypes: {
                        /**
                         * Get all the way types availables
                         * GET /telephony/{billingAccount}/service/{serviceName}/directory/getWayTypes
                         */
                        $get(): Promise<telephony.DirectoryWayType[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                eventToken: {
                    /**
                     * Delete the given token
                     * DELETE /telephony/{billingAccount}/service/{serviceName}/eventToken
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/service/{serviceName}/eventToken
                     */
                    $get(): Promise<telephony.EventToken>;
                    /**
                     * Create a new token
                     * POST /telephony/{billingAccount}/service/{serviceName}/eventToken
                     */
                    $post(params: { expiration: telephony.TokenExpirationEnum }): Promise<string>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                faxConsumption: {
                    /**
                     * Fax delivery records.
                     * GET /telephony/{billingAccount}/service/{serviceName}/faxConsumption
                     */
                    $get(params?: { creationDatetime_from?: string, creationDatetime_to?: string, wayType?: telephony.FaxConsumptionWayTypeEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(consumptionId: number): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/service/{serviceName}/faxConsumption/{consumptionId}
                         */
                        $get(): Promise<telephony.FaxConsumption>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                offerChange: {
                    /**
                     * Delete the replacement offer scheduling
                     * DELETE /telephony/{billingAccount}/service/{serviceName}/offerChange
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/service/{serviceName}/offerChange
                     */
                    $get(): Promise<telephony.OfferChange>;
                    /**
                     * Add a new offer change
                     * POST /telephony/{billingAccount}/service/{serviceName}/offerChange
                     */
                    $post(params: { offer: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                offerChanges: {
                    /**
                     * List all available offer changes compatibilities
                     * GET /telephony/{billingAccount}/service/{serviceName}/offerChanges
                     */
                    $get(): Promise<telephony.LineOffer[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                offerTask: {
                    /**
                     * Operations on a telephony service's offer
                     * GET /telephony/{billingAccount}/service/{serviceName}/offerTask
                     */
                    $get(params?: { action?: telephony.OfferTaskActionEnum, status?: telephony.TaskStatusEnum, type?: telephony.OfferTaskTypeEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(taskId: number): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}
                         */
                        $get(): Promise<telephony.OfferTask>;
                        /**
                         * Alter this object properties
                         * PUT /telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}
                         */
                        $put(params?: { action?: telephony.OfferTaskActionEnum, executionDate?: string, status?: telephony.TaskStatusEnum, taskId?: number, type?: telephony.OfferTaskTypeEnum }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                previousVoiceConsumption: {
                    /**
                     * Call delivery records of the previous month.
                     * GET /telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption
                     */
                    $get(params?: { creationDatetime_from?: string, creationDatetime_to?: string, destinationType?: telephony.VoiceConsumptionDestinationTypeEnum, planType?: telephony.VoiceConsumptionPlanTypeEnum, wayType?: telephony.VoiceConsumptionWayTypeEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(consumptionId: number): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption/{consumptionId}
                         */
                        $get(): Promise<telephony.PreviousVoiceConsumption>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                repaymentConsumption: {
                    /**
                     * Call which could be repayable
                     * GET /telephony/{billingAccount}/service/{serviceName}/repaymentConsumption
                     */
                    $get(params?: { creationDatetime_from?: string, creationDatetime_to?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(consumptionId: number): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/service/{serviceName}/repaymentConsumption/{consumptionId}
                         */
                        $get(): Promise<telephony.RepaymentConsumption>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                task: {
                    /**
                     * Operations on a telephony service
                     * GET /telephony/{billingAccount}/service/{serviceName}/task
                     */
                    $get(params?: { action?: string, serviceType?: string, status?: telephony.TaskStatusEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(taskId: number): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/service/{serviceName}/task/{taskId}
                         */
                        $get(): Promise<telephony.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                voiceConsumption: {
                    /**
                     * Call delivery records.
                     * GET /telephony/{billingAccount}/service/{serviceName}/voiceConsumption
                     */
                    $get(params?: { creationDatetime_from?: string, creationDatetime_to?: string, destinationType?: telephony.VoiceConsumptionDestinationTypeEnum, planType?: telephony.VoiceConsumptionPlanTypeEnum, wayType?: telephony.VoiceConsumptionWayTypeEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(consumptionId: number): {
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}
                         */
                        $get(): Promise<telephony.VoiceConsumption>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        callDiagnostics: {
                            /**
                             * Get this object properties
                             * GET /telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}/callDiagnostics
                             */
                            $get(): Promise<telephony.CallDiagnostics>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            };
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /telephony/{billingAccount}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /telephony/{billingAccount}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        task: {
            /**
             * Operations on a telephony billing account
             * GET /telephony/{billingAccount}/task
             */
            $get(params?: { action?: string, serviceType?: string, status?: telephony.TaskStatusEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: number): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/task/{taskId}
                 */
                $get(): Promise<telephony.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        timeCondition: {
            /**
             * Time conditions compatible numbers associated with this billing account
             * GET /telephony/{billingAccount}/timeCondition
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/timeCondition/{serviceName}
                 */
                $get(): Promise<telephony.GenericScreen>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                condition: {
                    /**
                     * Rules for time conditions for this service
                     * GET /telephony/{billingAccount}/timeCondition/{serviceName}/condition
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create a new time condition rule
                     * POST /telephony/{billingAccount}/timeCondition/{serviceName}/condition
                     */
                    $post(params: { day: telephony.TimeConditionsDayEnum, hourBegin: string, hourEnd: string, policy: telephony.TimeConditionsPolicyEnum }): Promise<telephony.TimeCondition>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the given screen list
                         * DELETE /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                         */
                        $get(): Promise<telephony.TimeCondition>;
                        /**
                         * Alter this object properties
                         * PUT /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
                         */
                        $put(params?: { day?: telephony.TimeConditionsDayEnum, hourBegin?: string, hourEnd?: string, id?: number, policy?: telephony.TimeConditionsPolicyEnum, status?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                options: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/timeCondition/{serviceName}/options
                     */
                    $get(): Promise<telephony.TimeConditionOptions>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/timeCondition/{serviceName}/options
                     */
                    $put(params?: { slot1Number?: string, slot1Type?: telephony.TimeConditionsSlotTypeEnum, slot2Number?: string, slot2Type?: telephony.TimeConditionsSlotTypeEnum, slot3Number?: string, slot3Type?: telephony.TimeConditionsSlotTypeEnum, status?: telephony.TimeConditionsGlobalStatusEnum, timeout?: telephony.TimeConditionsTimeoutEnum, unavailableNumber?: string, unavailableType?: telephony.TimeConditionsSlotTypeEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        transferSecurityDeposit: {
            /**
             * Transfer security deposit between two billing accounts
             * POST /telephony/{billingAccount}/transferSecurityDeposit
             */
            $post(params: { amount: number, billingAccountDestination: string }): Promise<void>;
        }
        trunk: {
            /**
             * Trunk associated with this billing account
             * GET /telephony/{billingAccount}/trunk
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/trunk/{serviceName}
                 */
                $get(): Promise<telephony.Trunk>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                channelsPacksRepartition: {
                    /**
                     * Determine the best channels packs combination for a given channel quantity
                     * GET /telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition
                     */
                    $get(params: { quantity: number }): Promise<telephony.TrunkSimultaneousPacksRepartition>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                externalDisplayedNumber: {
                    /**
                     * External displayed number linked to this trunk
                     * GET /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber
                     */
                    $get(): Promise<string[]>;
                    /**
                     * External displayed number creation for a given trunk
                     * POST /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber
                     */
                    $post(params: { autoValidation?: boolean, number: string }): Promise<telephony.TrunkExternalDisplayedNumber>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(number: string): {
                        /**
                         * Delete an external displayed number for a given trunk
                         * DELETE /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}
                         */
                        $get(): Promise<telephony.TrunkExternalDisplayedNumber>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        validate: {
                            /**
                             * Generate a phone call for validation. Returned validation code should be typed when asked.
                             * POST /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}/validate
                             */
                            $post(): Promise<telephony.TrunkExternalDisplayedNumberValidation>;
                        }
                    };
                }
            };
        }
        voicemail: {
            /**
             * Voicemails associated with this billing account
             * GET /telephony/{billingAccount}/voicemail
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/voicemail/{serviceName}
                 */
                $get(): Promise<telephony.Voicemail>;
                /**
                 * Alter this object properties
                 * PUT /telephony/{billingAccount}/voicemail/{serviceName}
                 */
                $put(params?: { description?: string, offers?: string[], serviceName?: string, serviceType?: telephony.TypeServiceEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                directories: {
                    /**
                     * Voicemail directory messages
                     * GET /telephony/{billingAccount}/voicemail/{serviceName}/directories
                     */
                    $get(params?: { dir?: telephony.VoicemailMessageFolderDirectoryEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the given voicemail message
                         * DELETE /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}
                         */
                        $get(): Promise<telephony.VoicemailMessages>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        download: {
                            /**
                             * Get a url to download the sound file
                             * GET /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/download
                             */
                            $get(params?: { format?: telephony.ServiceVoicemailAudioFormatEnum }): Promise<telephony.PcsFile>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        move: {
                            /**
                             * Move the message to another directory
                             * POST /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/move
                             */
                            $post(params: { dir: telephony.VoicemailMessageFolderDirectoryEnum }): Promise<void>;
                        }
                    };
                }
                greetings: {
                    /**
                     * Voicemail greeting message properties
                     * GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings
                     */
                    $get(params?: { dir?: telephony.VoicemailMessageFolderGreetingEnum }): Promise<number[]>;
                    /**
                     * Upload a new sound for a specific greeting. Return a task id.
                     * POST /telephony/{billingAccount}/voicemail/{serviceName}/greetings
                     */
                    $post(params: { dir: telephony.VoicemailMessageFolderGreetingEnum, documentId: string }): Promise<number>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: number): {
                        /**
                         * Delete the customized greeting
                         * DELETE /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get this object properties
                         * GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}
                         */
                        $get(): Promise<telephony.VoicemailGreetings>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        download: {
                            /**
                             * Get a url to download the sound file
                             * GET /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/download
                             */
                            $get(params?: { format?: telephony.ServiceVoicemailAudioFormatEnum }): Promise<telephony.PcsFile>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        move: {
                            /**
                             * Move the message to another directory
                             * POST /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move
                             */
                            $post(params: { dir: telephony.VoicemailMessageFolderGreetingEnum }): Promise<void>;
                        }
                    };
                }
                migrateOnNewVersion: {
                    /**
                     * Change the voicemail on a new version to manager greetings, directories and extra settings.
                     * POST /telephony/{billingAccount}/voicemail/{serviceName}/migrateOnNewVersion
                     */
                    $post(): Promise<void>;
                }
                settings: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/voicemail/{serviceName}/settings
                     */
                    $get(): Promise<telephony.VoicemailProperties>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/voicemail/{serviceName}/settings
                     */
                    $put(params?: { annouceMessage?: string, audioFormat?: telephony.ServiceVoicemailAudioFormatEnum, doNotRecord?: boolean, forcePassword?: boolean, fromEmail?: string, fromName?: string, fullGreetingSoundId?: number, greetingType?: telephony.VoicemailGreetingEnum, isNewVersion?: boolean, keepMessage?: boolean, redirectionEmails?: telephony.ServiceVoicemailNotifications[], shortGreetingSoundId?: number, temporaryGreetingActivated?: boolean, temporaryGreetingSoundId?: number, unreadMessages?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Change the voicemail password. It must be 4 digit
                         * POST /telephony/{billingAccount}/voicemail/{serviceName}/settings/changePassword
                         */
                        $post(params: { password: string }): Promise<void>;
                    }
                    changeRouting: {
                        /**
                         * Disable/Enable voicemail. Available only if the line has fax capabilities
                         * POST /telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting
                         */
                        $post(params: { routing: telephony.VoicefaxRoutingEnum }): Promise<void>;
                    }
                    routing: {
                        /**
                         * Get the status of the voicemail. Available only if the line has fax capabilities
                         * GET /telephony/{billingAccount}/voicemail/{serviceName}/settings/routing
                         */
                        $get(): Promise<telephony.VoicefaxRoutingEnum>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    voicemailNumbers: {
                        /**
                         * Get number for internal and external voicemail
                         * GET /telephony/{billingAccount}/voicemail/{serviceName}/settings/voicemailNumbers
                         */
                        $get(): Promise<telephony.VoicemailNumbers>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
            };
        }
        vxml: {
            /**
             * Vxml numbers associated with this billing account
             * GET /telephony/{billingAccount}/vxml
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(serviceName: string): {
                /**
                 * Get this object properties
                 * GET /telephony/{billingAccount}/vxml/{serviceName}
                 */
                $get(): Promise<telephony.Vxml>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                settings: {
                    /**
                     * Get this object properties
                     * GET /telephony/{billingAccount}/vxml/{serviceName}/settings
                     */
                    $get(): Promise<telephony.VxmlProperties>;
                    /**
                     * Alter this object properties
                     * PUT /telephony/{billingAccount}/vxml/{serviceName}/settings
                     */
                    $put(params?: { url?: string, urlRecord?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    logs: {
                        /**
                         * Generate a temporary url to retrieve device logs
                         * POST /telephony/{billingAccount}/vxml/{serviceName}/settings/logs
                         */
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
